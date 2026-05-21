# WBGH Supabase Setup Guide

## Overview

This guide will help you set up the complete backend infrastructure for WBGH Phase 1:
- **Supabase Database** for storing applications
- **Supabase Storage** for document uploads
- **Supabase Edge Functions** for sending email notifications
- **Resend** for professional email delivery

---

## Prerequisites

- [ ] Supabase account (free tier works)
- [ ] Resend account (free tier: 100 emails/day)
- [ ] Netlify account (for deployment)
- [ ] Node.js installed (for local development)

---

## Part 1: Create Supabase Project

### Step 1: Create Project

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Click **New Project**
3. Fill in:
   - **Name:** WBGH Production (or your preferred name)
   - **Database Password:** Create a strong password (save it!)
   - **Region:** Choose closest to your users
4. Click **Create new project** (takes ~2 minutes)

### Step 2: Get API Credentials

1. In your project dashboard, go to **Settings** → **API**
2. Copy these values (you'll need them later):
   - **Project URL** (starts with `https://`)
   - **anon public** key (long string starting with `eyJ...`)

---

## Part 2: Set Up Database

### Step 1: Run SQL Migrations

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New query**
3. Copy and paste the content of `supabase/migrations/001_create_wbgh_tables.sql`
4. Click **Run**
5. You should see: "Success. No rows returned"

6. Click **New query** again
7. Copy and paste the content of `supabase/migrations/002_create_storage_bucket.sql`
8. Click **Run**

### Step 2: Verify Tables Created

1. Go to **Table Editor** in the left sidebar
2. You should see 3 new tables:
   - `wbgh_mentee_applications`
   - `wbgh_mentor_applications`
   - `wbgh_service_requests`

### Step 3: Verify Storage Bucket

1. Go to **Storage** in the left sidebar
2. You should see a bucket called `wbgh-documents`
3. Click on it to verify it's accessible

---

## Part 3: Set Up Resend for Emails

### Step 1: Create Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email

### Step 2: Add and Verify Domain (Recommended)

**Option A: Use Your Own Domain** (Professional)
1. Go to **Domains** in Resend dashboard
2. Click **Add Domain**
3. Enter your domain (e.g., `t-healthsolutions.com`)
4. Add the DNS records provided by Resend to your domain registrar
5. Wait for verification (usually 5-15 minutes)

**Option B: Use Resend Test Domain** (Quick Start)
- You can use `onboarding.resend.dev` for testing
- Limited to 100 emails/day
- Emails might land in spam

### Step 3: Get API Key

1. Go to **API Keys** in Resend dashboard
2. Click **Create API Key**
3. Name it: "WBGH Production"
4. Copy the API key (starts with `re_...`)
5. **IMPORTANT:** Save it immediately - you can't see it again!

---

## Part 4: Deploy Supabase Edge Function

### Step 1: Install Supabase CLI

```powershell
npm install -g supabase
```

### Step 2: Login to Supabase

```powershell
supabase login
```

This will open your browser - authorize the CLI.

### Step 3: Link Your Project

```powershell
cd C:\Users\Test\OneDrive\THS
supabase link --project-ref your-project-ref
```

**To find your project ref:**
1. Go to Supabase dashboard → Settings → General
2. Copy **Reference ID**

### Step 4: Set Environment Variable for Edge Function

```powershell
supabase secrets set RESEND_API_KEY=re_your_actual_api_key_here
```

### Step 5: Deploy the Edge Function

```powershell
supabase functions deploy send-wbgh-notifications
```

You should see: "Deployed Function send-wbgh-notifications"

### Step 6: Update Email "From" Address

1. Open `supabase/functions/send-wbgh-notifications/index.ts`
2. Find the line:
   ```typescript
   from: 'WBGH <noreply@yourdomain.com>',
   ```
3. Replace with your verified domain:
   ```typescript
   from: 'WBGH <noreply@t-healthsolutions.com>',
   ```
4. Save and redeploy:
   ```powershell
   supabase functions deploy send-wbgh-notifications
   ```

---

## Part 5: Configure Environment Variables

### Local Development (.env.local)

1. In your project root, create `.env.local`:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...your-anon-key...

# Resend API Key (for Edge Function - already set via CLI)
# RESEND_API_KEY is set in Supabase secrets, not needed in .env.local
```

2. Replace `your-project` and `eyJ...` with your actual values

### Netlify Production

1. Go to Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Add **2 variables**:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://your-project.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJ...your-anon-key...` |

5. Click **Save**
6. **Trigger new deploy:**
   - Go to **Deploys** tab
   - Click **Trigger deploy** → **Deploy site**

---

## Part 6: Testing

### Test Database Connection

1. Run your Next.js app locally:
   ```powershell
   npm run dev
   ```

2. Open [http://localhost:3000/wbgh/apply](http://localhost:3000/wbgh/apply)

3. Fill out the form and submit

4. Check Supabase:
   - Go to **Table Editor** → `wbgh_mentee_applications`
   - You should see your test entry!

### Test File Upload

1. Submit a form with a PDF file attached

2. Check Supabase Storage:
   - Go to **Storage** → `wbgh-documents` → `mentee`
   - You should see your uploaded file

### Test Email Notifications

1. Submit a form

2. Check your email (writingbridgegh@gmail.com):
   - Admin notification should arrive
   
3. Check applicant's email:
   - Confirmation email should arrive

**If emails don't arrive:**
- Check Resend dashboard → **Emails** to see delivery status
- Verify domain is verified (if using custom domain)
- Check spam folder
- Verify Edge Function deployed successfully

---

## Part 7: Verify Everything Works

### Checklist

- [ ] Database tables exist and are accessible
- [ ] Storage bucket exists and accepts uploads
- [ ] Edge Function deployed successfully
- [ ] Resend API key set in Supabase secrets
- [ ] Environment variables set locally
- [ ] Environment variables set in Netlify
- [ ] Test form submission works locally
- [ ] Test file upload works locally
- [ ] Test email notifications arrive
- [ ] Production deployment works on Netlify

---

## Official WBGH Email

All email notifications will be sent to:
**writingbridgegh@gmail.com**

Make sure this inbox is monitored regularly for new applications!

---

## Database Schema Reference

### Common Fields (All Tables)

| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Auto-generated primary key |
| `full_name` | TEXT | Applicant's full name |
| `email` | TEXT | Contact email |
| `country` | TEXT | Country of residence |
| `institution` | TEXT | University/organization |
| `occupation` | TEXT | Current position/role |
| `status` | TEXT | Application status (default: 'new') |
| `created_at` | TIMESTAMP | Auto-set on creation |
| `updated_at` | TIMESTAMP | Auto-updated on changes |

### Status Options

- `new` - Just submitted
- `under_review` - Being evaluated
- `shortlisted` - Selected for next steps
- `accepted` - Approved
- `not_selected` - Declined
- `contacted` - Follow-up sent

### Mentee-Specific Fields

- `degree_level` - Academic level
- `research_topic` - Research area
- `current_stage` - Project stage
- `support_types` - Array of needed support
- `motivation_statement` - Why applying
- `document_url` - Uploaded file path

### Mentor-Specific Fields

- `expertise` - Research expertise
- `publication_count` - Publication range
- `mentorship_areas` - Array of mentorship topics
- `linkedin_url` - LinkedIn profile
- `languages` - Languages spoken
- `cv_url` - Uploaded CV path

### Service Request-Specific Fields

- `service_type` - mentorship/statistics/editing
- `project_description` - Project details
- `timeline` - Preferred deadline
- `budget_range` - Budget if applicable
- `document_url` - Uploaded file path

---

## Troubleshooting

### Issue: "Failed to submit application"

**Check:**
1. Are environment variables set correctly?
2. Run `supabase projects list` - is your project linked?
3. Check browser console for errors
4. Verify Supabase URL and anon key are correct

### Issue: "Failed to upload document"

**Check:**
1. Is storage bucket `wbgh-documents` created?
2. Are storage policies set (from migration file)?
3. Is file size under 10MB?
4. Is file format PDF, DOC, or DOCX?

### Issue: "No email notifications"

**Check:**
1. Is Edge Function deployed? Run: `supabase functions list`
2. Is RESEND_API_KEY set? Run: `supabase secrets list`
3. Check Resend dashboard → Emails for delivery logs
4. Is domain verified in Resend?
5. Check spam/junk folders

### Issue: "Database permission denied"

**Check:**
1. Did you run both migration files?
2. Row Level Security (RLS) policies created?
3. Using the correct anon key (not service role key)?

---

## Security Notes

✅ **Safe to commit:**
- Supabase project URL
- Supabase anon key (it's meant to be public)

❌ **NEVER commit:**
- `.env.local` file
- Resend API key
- Supabase service role key (if you have it)
- Database password

`.env.local` is already in `.gitignore` ✓

---

## Cost Estimate (Monthly)

**Free Tier Limits:**
- Supabase: 500MB database, 1GB storage, 2GB bandwidth - **$0**
- Resend: 100 emails/day (3,000/month) - **$0**
- Netlify: 100GB bandwidth, 300 build minutes - **$0**

**Paid Plans (if you exceed free tier):**
- Supabase Pro: $25/month (8GB database, 100GB storage)
- Resend Pay-as-you-go: $1 per 1,000 emails
- Netlify Pro: $19/month (1TB bandwidth)

For Phase 1, free tiers should be more than sufficient!

---

## Next Steps After Setup

1. **Test all three forms:**
   - Mentee application
   - Mentor application
   - Service requests

2. **Monitor email delivery:**
   - Check writingbridgegh@gmail.com regularly
   - Set up email forwarding if needed

3. **Review submitted applications:**
   - Log into Supabase dashboard
   - Go to Table Editor
   - Filter by status

4. **Optional enhancements** (Phase 2):
   - Admin dashboard to manage applications
   - Automated email sequences
   - Payment integration
   - Calendar booking system

---

## Support

If you encounter issues:

1. Check Supabase logs:
   ```powershell
   supabase functions logs send-wbgh-notifications
   ```

2. Check browser console (F12)

3. Verify all environment variables are set

4. Review this guide step-by-step

---

**Setup complete! Your WBGH platform is now ready to accept applications.** 🎉
