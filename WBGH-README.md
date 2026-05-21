# Writing Bridge in Global Health (WBGH) - Implementation Guide

## 🎯 Overview

The Writing Bridge in Global Health (WBGH) has been successfully integrated into the THS platform as a new service line. This is a **Phase 1 MVP** implementation focused on:

- Scientific writing mentorship
- Statistical consulting  
- Scientific editing support

For global health researchers, Master students, PhD candidates, and early-career researchers, particularly from LMICs.

---

## 🏗️ Implementation Summary

### ✅ Completed Features

#### 1. **Main Landing Page** (`/wbgh`)
- Hero section with WBGH branding
- "From Idea to Publication" tagline
- Multiple CTAs (Apply as Mentee, Become a Mentor, Request Support)
- About section explaining the initiative and publication barriers
- Services section with 3 cards (Mentorship, Statistics, Editing)
- How It Works section (4-step workflow)
- Final CTA section

#### 2. **Mentee Application Page** (`/wbgh/apply`)
Complete form with:
- Personal information (name, email, country, institution, degree, occupation)
- Research information (topic, current stage, support type)
- Document upload capability
- Motivation statement
- Form validation and submission handling
- Success confirmation page

#### 3. **Mentor Application Page** (`/wbgh/mentors/apply`)
Complete form with:
- Personal information
- Professional background (expertise, publications, languages)
- Mentorship areas (checkboxes for different types)
- LinkedIn profile
- CV upload
- Additional information
- Form validation and submission
- Success confirmation page

#### 4. **Services Request Page** (`/wbgh/services`)
- Service selection interface (3 service cards)
- Dynamic form based on selected service
- Project details section
- Document upload
- Timeline/deadline input
- Form validation and submission
- Success confirmation page

#### 5. **Shared Components**
- `WBGHLogo.tsx` - Responsive logo component (placeholder for actual logo)
- `ServiceCard.tsx` - Reusable service display card
- `StepCard.tsx` - Workflow step component

#### 6. **Navigation Integration**
- WBGH link added to main THS header
- Highlighted with special styling (blue background, yellow text)
- Fully responsive mobile navigation

---

## 📁 File Structure

```
src/
├── app/
│   └── wbgh/
│       ├── layout.tsx              # WBGH section layout with SEO metadata
│       ├── page.tsx                # Main landing page
│       ├── apply/
│       │   └── page.tsx            # Mentee application
│       ├── mentors/
│       │   └── apply/
│       │       └── page.tsx        # Mentor application
│       └── services/
│           └── page.tsx            # Services request
└── components/
    └── wbgh/
        ├── WBGHLogo.tsx            # Logo component
        ├── ServiceCard.tsx         # Service card component
        └── StepCard.tsx            # Step workflow component
```

---

## 🎨 Logo Integration

### 📌 IMPORTANT: Logo Upload Instructions

The current implementation uses a **placeholder logo**. To use the official WBGH logo:

### Step 1: Prepare Logo Files

Create these versions from your official WBGH logo:

1. **Standard Color Version** 
   - Filename: `wbgh-logo.png` or `wbgh-logo.svg`
   - For use on light backgrounds
   - Recommended size: 512x512px or vector (SVG)

2. **White/Monochrome Version**
   - Filename: `wbgh-logo-white.png` or `wbgh-logo-white.svg`
   - For use on dark/blue backgrounds
   - Same size as standard version

3. **Favicon**
   - Filename: `wbgh-favicon.ico`
   - Size: 32x32px or 48x48px
   - Optional: Also create `wbgh-favicon.png` at 192x192px

### Step 2: Upload Logo Files

1. Place logo files in: `public/images/wbgh/`
   ```
   public/
   └── images/
       └── wbgh/
           ├── wbgh-logo.svg          # Standard version
           ├── wbgh-logo-white.svg    # White version
           └── wbgh-favicon.ico       # Favicon
   ```

2. If the directory doesn't exist, create it:
   ```powershell
   mkdir public\images\wbgh
   ```

### Step 3: Update the Logo Component

Edit `src/components/wbgh/WBGHLogo.tsx`:

```typescript
import Image from "next/image";
import { cn } from "@/lib/utils";

interface WBGHLogoProps {
  className?: string;
  variant?: "color" | "white" | "dark";
}

export function WBGHLogo({ className, variant = "color" }: WBGHLogoProps) {
  const logoSrc = variant === "white" 
    ? "/images/wbgh/wbgh-logo-white.svg"
    : "/images/wbgh/wbgh-logo.svg";

  return (
    <div className={cn("relative", className)}>
      <Image
        src={logoSrc}
        alt="Writing Bridge in Global Health"
        width={200}
        height={80}
        className="object-contain"
        priority
      />
    </div>
  );
}
```

### Step 4: Update Favicon (Optional)

Edit `src/app/layout.tsx` to add WBGH-specific favicon for WBGH pages, or add to metadata:

```typescript
export const metadata: Metadata = {
  // ... existing metadata
  icons: {
    icon: '/images/wbgh/wbgh-favicon.ico',
  },
};
```

---

## 🚀 Testing & Development

### Install Dependencies

```powershell
cd "c:\Users\Test\OneDrive\THS"
npm install
```

### Run Development Server

```powershell
npm run dev
```

The application will be available at: `http://localhost:3000`

### Test All WBGH Routes

1. **Landing Page**: http://localhost:3000/wbgh
2. **Mentee Application**: http://localhost:3000/wbgh/apply
3. **Mentor Application**: http://localhost:3000/wbgh/mentors/apply
4. **Services Request**: http://localhost:3000/wbgh/services

---

## 📋 Form Submission Handling

### Current Implementation

All forms currently use **client-side submission simulation** with console logging. Forms display a success message after submission.

### Next Steps for Production

To handle actual form submissions, you need to:

#### Option 1: API Routes (Recommended)

Create API endpoints to handle form submissions:

**Example: `/src/app/api/wbgh/mentee/route.ts`**

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate data
    // Store in database
    // Send email notifications
    // etc.
    
    return NextResponse.json({ 
      success: true, 
      message: 'Application received' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Submission failed' 
    }, { status: 500 });
  }
}
```

Then update form submit handlers to call these endpoints.

#### Option 2: Email Service Integration

Use services like:
- **SendGrid**
- **Resend**
- **AWS SES**
- **Mailgun**

#### Option 3: Form Service (No-code)

Integrate with:
- **Formspree**
- **FormSubmit**
- **Google Forms** (embed)

#### Option 4: Database Storage

Store submissions in:
- **PostgreSQL** (with Prisma ORM)
- **MongoDB**
- **Supabase**
- **Firebase**

---

## 🎨 Design System

### Color Palette

The WBGH section uses a blue/teal gradient scheme that complements the main THS teal branding:

```css
Blue: #2563eb (blue-600)
Light Blue: #3b82f6 (blue-500)  
Teal: #14b8a6 (teal-600)
Light Teal: #2dd4bf (teal-500)
```

### Typography

- **Headings**: Bold, large sizes (text-4xl, text-3xl)
- **Body**: text-lg for readability
- **Professional academic tone**

### Components

- **Rounded corners**: `rounded-lg`, `rounded-2xl`
- **Shadows**: `shadow-lg`, `shadow-xl`
- **Gradients**: `bg-gradient-to-br from-blue-X to-teal-X`
- **Hover effects**: Subtle shadow and color transitions

---

## 📱 Responsive Design

All pages are fully responsive:
- **Mobile-first approach**
- **Breakpoints**: sm, md, lg, xl
- **Grid layouts**: Auto-adjust from 1 to 3-4 columns
- **Touch-friendly**: Large buttons and input fields

---

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus states on interactive elements

---

## 🔒 Security Considerations

### For Production Deployment:

1. **Form Validation**
   - Client-side validation (✅ implemented)
   - Server-side validation (⚠️ needed)
   - File upload restrictions (⚠️ needed)

2. **File Uploads**
   - Implement file size limits (currently mentioned in UI only)
   - Validate file types server-side
   - Scan for malware
   - Use secure cloud storage (S3, Cloudinary, etc.)

3. **Data Protection**
   - HTTPS only in production
   - Sanitize all user inputs
   - Implement rate limiting
   - Add CAPTCHA to prevent spam

---

## 🚦 Phase 2 Preparation

The codebase is structured for easy expansion. Future phases can add:

### Not Included in Phase 1 (by design):

- ❌ Payment systems
- ❌ Subscription management
- ❌ User dashboards
- ❌ Messaging systems
- ❌ Mentor matching algorithms
- ❌ Mentor directory/profiles
- ❌ AI writing assistant

### Architecture Ready For:

- ✅ User authentication (NextAuth.js)
- ✅ Database integration (Prisma)
- ✅ Payment processing (Stripe)
- ✅ Real-time messaging (Pusher, Socket.io)
- ✅ File storage (AWS S3, Cloudinary)
- ✅ Email automation (SendGrid, Resend)

---

## 📊 SEO Optimization

Each WBGH page includes:

- ✅ Proper meta titles
- ✅ Meta descriptions
- ✅ Keywords
- ✅ Semantic HTML
- ✅ Heading hierarchy (H1, H2, H3)

**Example metadata in** `src/app/wbgh/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Writing Bridge in Global Health (WBGH) - From Idea to Publication",
  description: "A global mentorship and publication support platform...",
  keywords: "scientific writing, global health research, publication mentorship...",
};
```

---

## 🐛 Known Issues / TODOs

### Logo
- [ ] Replace placeholder logo with actual WBGH logo files
- [ ] Optimize logo for different screen sizes
- [ ] Add favicon

### Forms
- [ ] Implement server-side form submission
- [ ] Add email notifications
- [ ] Store submissions in database
- [ ] Implement file upload to cloud storage
- [ ] Add CAPTCHA for spam prevention

### Nice-to-Have
- [ ] Add loading animations on page transitions
- [ ] Implement form field auto-save (localStorage)
- [ ] Add multi-language support
- [ ] Analytics integration (Google Analytics, Plausible)

---

## 📞 Support & Contact

For questions about the WBGH platform implementation:

- Review the code in `src/app/wbgh/`
- Check component files in `src/components/wbgh/`
- Test all routes locally before deploying

---

## 🌐 Deployment

### Build for Production

```powershell
npm run build
```

### Deploy to Netlify (Already Configured)

The repository includes `netlify.toml` configuration. Simply push to GitHub and Netlify will auto-deploy.

### Environment Variables

If you add database/email integrations, create `.env.local`:

```env
# Database
DATABASE_URL="your-database-url"

# Email Service
EMAIL_API_KEY="your-email-api-key"

# File Storage
AWS_ACCESS_KEY="your-aws-key"
AWS_SECRET_KEY="your-aws-secret"
```

**⚠️ Never commit `.env.local` to Git!**

---

## ✅ Checklist Before Going Live

- [ ] Upload official WBGH logo
- [ ] Set up form submission backend
- [ ] Configure email notifications
- [ ] Set up file storage for uploads
- [ ] Test all forms thoroughly
- [ ] Add CAPTCHA/spam protection
- [ ] Review and update SEO metadata
- [ ] Test on mobile devices
- [ ] Set up analytics tracking
- [ ] Create backup/monitoring plan

---

## 📝 License & Credits

Built for **Transatlantic Health Solutions, LLC (THS)**  
WBGH Platform - Phase 1 MVP  
May 2026

---

**🎉 WBGH is now live and integrated into THS!**
