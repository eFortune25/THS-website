-- Create WBGH Mentee Applications Table
CREATE TABLE IF NOT EXISTS public.wbgh_mentee_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  institution TEXT NOT NULL,
  occupation TEXT NOT NULL,
  degree_level TEXT NOT NULL,
  research_topic TEXT NOT NULL,
  current_stage TEXT NOT NULL,
  support_types TEXT[] NOT NULL,
  motivation_statement TEXT NOT NULL,
  document_url TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'under_review', 'shortlisted', 'accepted', 'not_selected', 'contacted')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create WBGH Mentor Applications Table
CREATE TABLE IF NOT EXISTS public.wbgh_mentor_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  institution TEXT NOT NULL,
  occupation TEXT NOT NULL,
  expertise TEXT NOT NULL,
  publication_count TEXT NOT NULL,
  mentorship_areas TEXT[] NOT NULL,
  linkedin_url TEXT,
  languages TEXT NOT NULL,
  cv_url TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'under_review', 'shortlisted', 'accepted', 'not_selected', 'contacted')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create WBGH Service Requests Table
CREATE TABLE IF NOT EXISTS public.wbgh_service_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  institution TEXT NOT NULL,
  occupation TEXT NOT NULL,
  service_type TEXT NOT NULL CHECK (service_type IN ('mentorship', 'statistics', 'editing')),
  project_description TEXT NOT NULL,
  timeline TEXT NOT NULL,
  budget_range TEXT,
  document_url TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'under_review', 'shortlisted', 'accepted', 'not_selected', 'contacted')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_mentee_email ON public.wbgh_mentee_applications(email);
CREATE INDEX idx_mentee_status ON public.wbgh_mentee_applications(status);
CREATE INDEX idx_mentee_created ON public.wbgh_mentee_applications(created_at DESC);

CREATE INDEX idx_mentor_email ON public.wbgh_mentor_applications(email);
CREATE INDEX idx_mentor_status ON public.wbgh_mentor_applications(status);
CREATE INDEX idx_mentor_created ON public.wbgh_mentor_applications(created_at DESC);

CREATE INDEX idx_service_email ON public.wbgh_service_requests(email);
CREATE INDEX idx_service_status ON public.wbgh_service_requests(status);
CREATE INDEX idx_service_created ON public.wbgh_service_requests(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.wbgh_mentee_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wbgh_mentor_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wbgh_service_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert (submit forms)
CREATE POLICY "Allow anonymous insert on mentee applications"
  ON public.wbgh_mentee_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous insert on mentor applications"
  ON public.wbgh_mentor_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous insert on service requests"
  ON public.wbgh_service_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated admins can read/update/delete
CREATE POLICY "Authenticated users can read mentee applications"
  ON public.wbgh_mentee_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update mentee applications"
  ON public.wbgh_mentee_applications
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read mentor applications"
  ON public.wbgh_mentor_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update mentor applications"
  ON public.wbgh_mentor_applications
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read service requests"
  ON public.wbgh_service_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update service requests"
  ON public.wbgh_service_requests
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers to auto-update updated_at
CREATE TRIGGER update_mentee_updated_at
  BEFORE UPDATE ON public.wbgh_mentee_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_mentor_updated_at
  BEFORE UPDATE ON public.wbgh_mentor_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_service_updated_at
  BEFORE UPDATE ON public.wbgh_service_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
