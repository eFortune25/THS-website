# Google Sheets Setup for WBGH Forms

## Step 1: Create Google Sheets

Create three separate Google Sheets (or use three sheets in one workbook):

### 1. WBGH Mentee Applications
Create a new Google Sheet with these columns:
- Timestamp
- Full Name
- Email
- Country
- Institution
- Degree Level
- Occupation
- Research Topic
- Current Stage
- Support Needed
- Motivation

### 2. WBGH Mentor Applications
Create a new Google Sheet with these columns:
- Timestamp
- Full Name
- Email
- Country
- Expertise
- Publications
- Mentorship Areas
- LinkedIn
- Languages
- Additional Info

### 3. WBGH Service Requests
Create a new Google Sheet with these columns:
- Timestamp
- Service Type
- Full Name
- Email
- Country
- Institution
- Project Description
- Deadline
- Additional Details

---

## Step 2: Create Google Apps Script

For **each Google Sheet**, follow these steps:

1. Open the Google Sheet
2. Click **Extensions** → **Apps Script**
3. Delete any existing code
4. Paste the appropriate script below
5. Click **Save** (disk icon)
6. Click **Deploy** → **New deployment**
7. Click the gear icon ⚙️ next to "Select type" → Choose **Web app**
8. Configure:
   - Description: "WBGH Form Submission Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
9. Click **Deploy**
10. **Copy the Web App URL** - you'll need this!
11. Click **Authorize access** if prompted
12. Grant permissions to your Google account

---

## Apps Script Code

### For Mentee Applications Sheet:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Append row with timestamp
    sheet.appendRow([
      new Date(),
      data.fullName,
      data.email,
      data.country,
      data.institution,
      data.degreeLevel,
      data.occupation,
      data.researchTopic,
      data.currentStage,
      Array.isArray(data.supportNeeded) ? data.supportNeeded.join(', ') : data.supportNeeded,
      data.motivation
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Application submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### For Mentor Applications Sheet:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.fullName,
      data.email,
      data.country,
      data.expertise,
      data.publications,
      Array.isArray(data.mentorshipAreas) ? data.mentorshipAreas.join(', ') : data.mentorshipAreas,
      data.linkedIn,
      data.languages,
      data.additionalInfo
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Application submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### For Service Requests Sheet:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.serviceType,
      data.fullName,
      data.email,
      data.country,
      data.institution,
      data.projectDescription,
      data.deadline,
      data.additionalDetails
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Request submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## Step 3: Add Web App URLs to Your Code

After deploying each Apps Script, you'll get three Web App URLs that look like:
```
https://script.google.com/macros/s/AKfycby.../exec
```

Create a file `.env.local` in your project root:

```env
# Google Sheets Web App URLs
NEXT_PUBLIC_MENTEE_FORM_URL=https://script.google.com/macros/s/YOUR_MENTEE_SCRIPT_ID/exec
NEXT_PUBLIC_MENTOR_FORM_URL=https://script.google.com/macros/s/YOUR_MENTOR_SCRIPT_ID/exec
NEXT_PUBLIC_SERVICE_FORM_URL=https://script.google.com/macros/s/YOUR_SERVICE_SCRIPT_ID/exec
```

**Important:** Replace `YOUR_..._SCRIPT_ID` with your actual Web App URLs!

---

## Step 4: Update Netlify Environment Variables

1. Go to your Netlify dashboard
2. Click on your site
3. Go to **Site settings** → **Environment variables**
4. Add these three variables:
   - `NEXT_PUBLIC_MENTEE_FORM_URL`
   - `NEXT_PUBLIC_MENTOR_FORM_URL`
   - `NEXT_PUBLIC_SERVICE_FORM_URL`
5. Paste the corresponding Web App URLs
6. Click **Save**
7. Trigger a new deploy

---

## Step 5: Test Your Forms

1. Visit your WBGH forms
2. Fill out and submit a test application
3. Check your Google Sheet - you should see the data appear!

---

## Optional: Email Notifications

To receive email notifications when forms are submitted, add this to your Apps Script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add data to sheet (existing code)
    sheet.appendRow([...]);
    
    // Send email notification
    var emailBody = "New WBGH Mentee Application:\n\n";
    emailBody += "Name: " + data.fullName + "\n";
    emailBody += "Email: " + data.email + "\n";
    emailBody += "Country: " + data.country + "\n\n";
    emailBody += "View full details in the Google Sheet.";
    
    MailApp.sendEmail({
      to: "your-email@domain.com",  // Replace with your email
      subject: "New WBGH Mentee Application",
      body: emailBody
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Application submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## Troubleshooting

**Error: "Script function not found: doPost"**
- Make sure you saved the script before deploying

**Error: "Authorization required"**
- Re-deploy and click "Authorize access"
- Sign in with your Google account

**Form submits but no data in sheet:**
- Check that column order in script matches sheet headers
- Check browser console for errors
- Verify the Web App URL is correct

**CORS errors:**
- Make sure Web App access is set to "Anyone"
- Redeploy the script if you changed settings

---

## Data Privacy Note

- Google Sheets will store all form submissions
- Make sure to follow GDPR/data protection requirements
- Consider adding a privacy policy to your forms
- Limit access to the Google Sheets to authorized personnel only
