# WBGH Forms - Quick Setup Guide

## ✅ Forms are now configured to submit to Google Sheets!

## 🚀 What You Need to Do

### 1. Set Up Google Sheets (15 minutes)

Follow the detailed instructions in **[GOOGLE-SHEETS-SETUP.md](GOOGLE-SHEETS-SETUP.md)**

Quick summary:
1. Create 3 Google Sheets (one for each form type)
2. Add the Apps Script code to each sheet
3. Deploy each script as a Web App
4. Copy the 3 Web App URLs you receive

### 2. Configure Environment Variables

**For Local Development:**
1. Copy `.env.local.example` to `.env.local`
2. Paste your 3 Google Apps Script URLs
3. Restart your dev server

**For Netlify Production:**
1. Go to Netlify Dashboard → Site Settings → Environment Variables
2. Add these 3 variables with your URLs:
   - `NEXT_PUBLIC_MENTEE_FORM_URL`
   - `NEXT_PUBLIC_MENTOR_FORM_URL`
   - `NEXT_PUBLIC_SERVICE_FORM_URL`
3. Trigger a new deploy

### 3. Test Your Forms

1. Fill out each form on your website
2. Check your Google Sheets - data should appear!

---

## 📊 Your Google Sheets Structure

### Mentee Applications Sheet
Columns: Timestamp | Full Name | Email | Country | Institution | Degree Level | Occupation | Research Topic | Current Stage | Support Needed | Motivation

### Mentor Applications Sheet
Columns: Timestamp | Full Name | Email | Country | Expertise | Publications | Mentorship Areas | LinkedIn | Languages | Additional Info

### Service Requests Sheet
Columns: Timestamp | Service Type | Full Name | Email | Country | Institution | Project Description | Deadline | Additional Details

---

## 🔧 Troubleshooting

**Forms submit but no data appears:**
- Check that Web App deployment is set to "Anyone" can access
- Verify environment variables are set correctly in Netlify
- Check browser console for errors
- Make sure column headers match the Apps Script code

**Error: "Form submission is not configured":**
- Environment variables are missing or incorrect
- In local dev: Check `.env.local` exists and has valid URLs
- In production: Check Netlify environment variables

**Need help?**
See full troubleshooting guide in [GOOGLE-SHEETS-SETUP.md](GOOGLE-SHEETS-SETUP.md)

---

## 📧 Optional: Email Notifications

Want to receive emails when forms are submitted? See the "Email Notifications" section in [GOOGLE-SHEETS-SETUP.md](GOOGLE-SHEETS-SETUP.md) for instructions.

---

## 🔐 Important Notes

- `.env.local` is in `.gitignore` - it won't be committed to GitHub (good for security!)
- Your Google Sheets URLs are safe to use on the client-side (they're public Web Apps)
- Consider adding CAPTCHA later to prevent spam submissions
- Make sure only authorized team members have access to the Google Sheets

---

## ✨ What's Changed

All three WBGH forms now:
- ✅ Submit data to Google Sheets
- ✅ Show loading states during submission
- ✅ Display success confirmation
- ✅ Log submissions to browser console (for debugging)
- ✅ Handle errors gracefully

The forms will work locally AND in production once you complete the setup steps above!
