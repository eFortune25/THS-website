import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create client with fallback for build time
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Database types
export interface MenteeApplication {
  id?: string;
  full_name: string;
  email: string;
  country: string;
  institution: string;
  occupation: string;
  degree_level: string;
  research_topic: string;
  current_stage: string;
  support_types: string[];
  motivation_statement: string;
  document_url?: string;
  status?: 'new' | 'under_review' | 'shortlisted' | 'accepted' | 'not_selected' | 'contacted';
  created_at?: string;
  updated_at?: string;
}

export interface MentorApplication {
  id?: string;
  full_name: string;
  email: string;
  country: string;
  institution: string;
  occupation: string;
  expertise: string;
  publication_count: string;
  mentorship_areas: string[];
  linkedin_url?: string;
  languages: string;
  cv_url?: string;
  status?: 'new' | 'under_review' | 'shortlisted' | 'accepted' | 'not_selected' | 'contacted';
  created_at?: string;
  updated_at?: string;
}

export interface ServiceRequest {
  id?: string;
  full_name: string;
  email: string;
  country: string;
  institution: string;
  occupation: string;
  service_type: 'mentorship' | 'statistics' | 'editing';
  project_description: string;
  timeline: string;
  budget_range?: string;
  document_url?: string;
  status?: 'new' | 'under_review' | 'shortlisted' | 'accepted' | 'not_selected' | 'contacted';
  created_at?: string;
  updated_at?: string;
}

// File upload helper
export async function uploadDocument(
  file: File,
  folder: 'mentee' | 'mentor' | 'service'
): Promise<string | null> {
  try {
    if (!supabase) {
      console.error('Supabase client not initialized');
      return null;
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from('wbgh-documents')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Upload error:', error);
      return null;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('wbgh-documents')
      .getPublicUrl(data.path);

    return publicUrl;
  } catch (error) {
    console.error('Upload failed:', error);
    return null;
  }
}

// Submit mentee application
export async function submitMenteeApplication(
  application: MenteeApplication,
  file?: File
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!supabase) {
      return { success: false, error: 'Configuration error. Please contact the administrator.' };
    }

    // Upload document if provided
    let documentUrl = undefined;
    if (file) {
      documentUrl = await uploadDocument(file, 'mentee');
      if (!documentUrl) {
        return { success: false, error: 'Failed to upload document' };
      }
    }

    // Insert into database
    const { error } = await supabase
      .from('wbgh_mentee_applications')
      .insert([{
        ...application,
        document_url: documentUrl,
        status: 'new'
      }]);

    if (error) {
      console.error('Database error:', error);
      return { success: false, error: 'Failed to submit application' };
    }

    // Send notification emails via Edge Function
    await sendNotificationEmails({
      type: 'mentee',
      applicantEmail: application.email,
      applicantName: application.full_name,
      data: application
    });

    return { success: true };
  } catch (error) {
    console.error('Submission error:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

// Submit mentor application
export async function submitMentorApplication(
  application: MentorApplication,
  file?: File
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!supabase) {
      return { success: false, error: 'Configuration error. Please contact the administrator.' };
    }

    let cvUrl = undefined;
    if (file) {
      cvUrl = await uploadDocument(file, 'mentor');
      if (!cvUrl) {
        return { success: false, error: 'Failed to upload CV' };
      }
    }

    const { error } = await supabase
      .from('wbgh_mentor_applications')
      .insert([{
        ...application,
        cv_url: cvUrl,
        status: 'new'
      }]);

    if (error) {
      console.error('Database error:', error);
      return { success: false, error: 'Failed to submit application' };
    }

    await sendNotificationEmails({
      type: 'mentor',
      applicantEmail: application.email,
      applicantName: application.full_name,
      data: application
    });

    return { success: true };
  } catch (error) {
    console.error('Submission error:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

// Submit service request
export async function submitServiceRequest(
  request: ServiceRequest,
  file?: File
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!supabase) {
      return { success: false, error: 'Configuration error. Please contact the administrator.' };
    }

    let documentUrl = undefined;
    if (file) {
      documentUrl = await uploadDocument(file, 'service');
      if (!documentUrl) {
        return { success: false, error: 'Failed to upload document' };
      }
    }

    const { error } = await supabase
      .from('wbgh_service_requests')
      .insert([{
        ...request,
        document_url: documentUrl,
        status: 'new'
      }]);

    if (error) {
      console.error('Database error:', error);
      return { success: false, error: 'Failed to submit request' };
    }

    await sendNotificationEmails({
      type: 'service',
      applicantEmail: request.email,
      applicantName: request.full_name,
      data: request
    });

    return { success: true };
  } catch (error) {
    console.error('Submission error:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
}

// Send notification emails (calls Supabase Edge Function)
async function sendNotificationEmails(params: {
  type: 'mentee' | 'mentor' | 'service';
  applicantEmail: string;
  applicantName: string;
  data: any;
}) {
  try {
    if (!supabase) {
      console.error('Supabase client not initialized - cannot send emails');
      return;
    }

    const { data, error } = await supabase.functions.invoke('send-wbgh-notifications', {
      body: params
    });

    if (error) {
      console.error('Email notification error:', error);
    }
  } catch (error) {
    console.error('Failed to send emails:', error);
  }
}
