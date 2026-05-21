import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const ADMIN_EMAIL = 'writingbridgegh@gmail.com'

serve(async (req) => {
  try {
    const { type, applicantEmail, applicantName, data } = await req.json()

    // Send notification to admin
    await sendAdminNotification(type, applicantEmail, applicantName, data)

    // Send confirmation to applicant
    await sendApplicantConfirmation(type, applicantEmail, applicantName)

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})

async function sendAdminNotification(
  type: string,
  applicantEmail: string,
  applicantName: string,
  data: any
) {
  let subject = ''
  let body = ''

  if (type === 'mentee') {
    subject = 'New WBGH Mentorship Application'
    body = `
New Mentorship Application Received

Applicant Name: ${applicantName}
Email: ${applicantEmail}
Country: ${data.country}
Institution: ${data.institution}
Occupation: ${data.occupation}

Degree Level: ${data.degree_level}
Research Topic: ${data.research_topic}
Current Stage: ${data.current_stage}
Support Requested: ${data.support_types.join(', ')}

Motivation Statement:
${data.motivation_statement}

${data.document_url ? `Uploaded Document: ${data.document_url}` : 'No document uploaded'}

Submission Date: ${new Date().toLocaleString()}
`
  } else if (type === 'mentor') {
    subject = 'New WBGH Mentor Application'
    body = `
New Mentor Application Received

Applicant Name: ${applicantName}
Email: ${applicantEmail}
Country: ${data.country}
Institution: ${data.institution}
Occupation: ${data.occupation}

Expertise: ${data.expertise}
Publication Count: ${data.publication_count}
Mentorship Areas: ${data.mentorship_areas.join(', ')}
Languages: ${data.languages}
LinkedIn: ${data.linkedin_url || 'Not provided'}

${data.cv_url ? `CV: ${data.cv_url}` : 'No CV uploaded'}

Submission Date: ${new Date().toLocaleString()}
`
  } else if (type === 'service') {
    subject = 'New WBGH Service Request'
    body = `
New Service Request Received

Applicant Name: ${applicantName}
Email: ${applicantEmail}
Country: ${data.country}
Institution: ${data.institution}
Occupation: ${data.occupation}

Service Type: ${data.service_type.toUpperCase()}
Timeline: ${data.timeline}
Budget Range: ${data.budget_range || 'Not specified'}

Project Description:
${data.project_description}

${data.document_url ? `Uploaded Document: ${data.document_url}` : 'No document uploaded'}

Submission Date: ${new Date().toLocaleString()}
`
  }

  await sendEmail(ADMIN_EMAIL, subject, body)
}

async function sendApplicantConfirmation(
  type: string,
  applicantEmail: string,
  applicantName: string
) {
  const subject = 'Your WBGH Application Has Been Received'
  
  const body = `
Dear ${applicantName},

Thank you for your submission to The Writing Bridge in Global Health (WBGH).

Your application has been successfully received and is currently under review.

Our team will review your submission and contact you regarding next steps.

If additional information is required, we will reach out using the email address provided in your application.

Thank you for your interest in WBGH.

Best regards,
The Writing Bridge in Global Health
From Idea to Publication

---
This is an automated message. Please do not reply to this email.
For questions, contact: writingbridgegh@gmail.com
`

  await sendEmail(applicantEmail, subject, body)
}

async function sendEmail(to: string, subject: string, body: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`
    },
    body: JSON.stringify({
      from: 'WBGH <noreply@yourdomain.com>', // Update with your verified domain
      to: [to],
      subject: subject,
      text: body
    })
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(`Failed to send email: ${error}`)
  }
}
