# WBGH Quick Start Guide

## 🚀 Get Started in 15 Minutes

This guide gets your WBGH forms working quickly. For detailed explanations, see [WBGH-SUPABASE-SETUP.md](./WBGH-SUPABASE-SETUP.md).

---

## Step 1: Create Supabase Project (5 min)

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Click **New Project**
3. Name: "WBGH Production"
4. Create a password (save it!)
5. Choose a region
6. Wait for project to initialize

---

## Step 2: Set Up Database (3 min)

1. In Supabase dashboard → **SQL Editor**
2. **New query** → Paste `supabase/migrations/001_create_wbgh_tables.sql` → **Run**
3. **New query** → Paste `supabase/migrations/002_create_storage_bucket.sql` → **Run**

**Verify:**
- Go to **Table Editor** - you should see 3 tables
- Go to **Storage** - you should see `wbgh-documents` bucket

---

## Step 3: Get Resend API Key (3 min)

1. Go to [resend.com](https://resend.com) → Sign up
2. **API Keys** → **Create API Key**
3. Copy the key (starts with `re_...`)

---

## Step 4: Deploy Edge Function (2 min)

```powershell
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link project (get project ref from Supabase dashboard → Settings → General)
cd C:\Users\Test\OneDrive\THS
supabase link --project-ref your-project-ref

# Set Resend API key
supabase secrets set RESEND_API_KEY=re_your_api_key_here

# Deploy function
supabase functions deploy send-wbgh-notifications
```

---

## Step 5: Update Email "From" Address (1 min)

1. Open `supabase/functions/send-wbgh-notifications/index.ts`
2. Line 119, change:
   ```typescript
   from: 'WBGH <noreply@yourdomain.com>',
   ```
   to:
   ```typescript
   from: 'WBGH <noreply@t-healthsolutions.com>',
   ```
3. Redeploy:
   ```powershell
   supabase functions deploy send-wbgh-notifications
   ```

---

## Step 6: Set Environment Variables (1 min)

### Local Development

Create `.env.local` in project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...your-anon-key...
```

Get these from: Supabase dashboard → **Settings** → **API**

### Netlify Production

1. Netlify dashboard → Your site → **Site settings** → **Environment variables**
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your anon key
3. **Deploys** → **Trigger deploy**

---

## Step 7: Test! (5 min)

### Local Test

```powershell
npm run dev
```

Visit [http://localhost:3000/wbgh/apply](http://localhost:3000/wbgh/apply)
- Fill out form
- Upload a PDF
- Submit

**Check:**
- Supabase Table Editor → `wbgh_mentee_applications` (should see your entry)
- Supabase Storage → `wbgh-documents/mentee` (should see PDF)
- Email inbox: writingbridgegh@gmail.com (admin notification)
- Your email (confirmation)

---

## ✅ Done!

All three forms are now live:
- **Mentee Application:** `/wbgh/apply`
- **Mentor Application:** `/wbgh/mentors/apply`
- **Service Requests:** `/wbgh/services`

**Email notifications go to:** writingbridgegh@gmail.com

---

## Troubleshooting

**No data in database?**
- Check browser console (F12) for errors
- Verify environment variables are set
- Make sure you ran both SQL migration files

**No emails arriving?**
- Check Resend dashboard → Emails for delivery status
- Verify Edge Function deployed: `supabase functions list`
- Check spam folder
- Verify RESEND_API_KEY set: `supabase secrets list`

**File upload fails?**
- Check storage bucket exists: Supabase → Storage
- Verify file is PDF/DOC/DOCX and under 10MB
- Check RLS policies were created (migration 002)

---

For detailed troubleshooting and advanced configuration, see:
- [WBGH-SUPABASE-SETUP.md](./WBGH-SUPABASE-SETUP.md) - Complete setup guide
- [WBGH-README.md](./WBGH-README.md) - Platform overview

---

**Questions?** Check the Supabase logs:
```powershell
supabase functions logs send-wbgh-notifications
```
