import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "WBGH - Scientific Writing Mentorship & Publication Support for Global Health Researchers",
  description:
    "The Writing Bridge in Global Health (WBGH) connects researchers in LMICs with expert mentors for scientific writing, statistical analysis, manuscript editing, and publication support. Transform your thesis, dissertation, or research into peer-reviewed publications.",
  keywords: [
    "scientific writing mentorship",
    "global health research",
    "publication support",
    "statistical consulting",
    "manuscript editing",
    "LMIC research support",
    "PhD mentorship",
    "thesis writing help",
    "dissertation support",
    "peer-reviewed publication",
    "research capacity building",
    "scientific editing services",
    "biostatistics support",
    "academic writing coach",
    "low-income countries research",
    "global health publications",
    "research mentorship program",
    "scientific manuscript development",
  ],
  authors: [{ name: "Dr. Habakkuk Yumo" }],
  creator: "The Writing Bridge in Global Health",
  publisher: "Transatlantic Health Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://t-healthsolutions.com/wbgh",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://t-healthsolutions.com/wbgh",
    title: "WBGH - Scientific Writing Mentorship & Publication Support for Global Health Researchers",
    description:
      "Expert mentorship for researchers in low- and middle-income countries. Get support with scientific writing, statistical analysis, manuscript editing, and publication success. From idea to publication.",
    siteName: "The Writing Bridge in Global Health",
    images: [
      {
        url: "https://t-healthsolutions.com/images/wbgh/wbgh-logo.png",
        width: 1200,
        height: 630,
        alt: "WBGH - The Writing Bridge in Global Health",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WBGH - Scientific Writing Mentorship & Publication Support",
    description:
      "Expert mentorship for global health researchers. Scientific writing, statistical analysis, manuscript editing, and publication support. From idea to publication.",
    images: ["https://t-healthsolutions.com/images/wbgh/wbgh-logo.png"],
  },
  category: "Education",
  classification: "Academic Research Support, Scientific Writing, Publication Mentorship",
};

export default function WBGHLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Structured Data - Organization Schema */}
      <Script
        id="wbgh-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The Writing Bridge in Global Health",
            alternateName: "WBGH",
            url: "https://t-healthsolutions.com/wbgh",
            logo: "https://t-healthsolutions.com/images/wbgh/wbgh-logo.png",
            description:
              "A global mentorship and publication support platform helping researchers transform ideas, theses, dissertations, and manuscripts into peer-reviewed publications.",
            founder: {
              "@type": "Person",
              name: "Dr. Habakkuk Yumo",
              jobTitle: "Public Health Physician and Global Health Researcher",
              alumniOf: "PhD Medical Research-International Health",
              sameAs: "https://www.linkedin.com/in/hkyumo",
            },
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
            },
            serviceType: [
              "Scientific Writing Mentorship",
              "Statistical Analysis",
              "Manuscript Editing",
              "Publication Support",
              "Research Capacity Building",
            ],
          }),
        }}
      />

      {/* Structured Data - Service Schema */}
      <Script
        id="wbgh-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Scientific Writing and Publication Support",
            provider: {
              "@type": "Organization",
              name: "The Writing Bridge in Global Health",
              url: "https://t-healthsolutions.com/wbgh",
            },
            areaServed: {
              "@type": "Place",
              name: "Global",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "WBGH Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Scientific Editing",
                    description: "Professional scientific manuscript editing services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Statistical Analysis",
                    description: "Expert statistical analysis and consultation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Manuscript Development & Publication Support",
                    description:
                      "Comprehensive manuscript development and publication support",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Individual Mentorship Programs",
                    description: "Long-term mentorship from idea to publication",
                  },
                },
              ],
            },
            audience: {
              "@type": "Audience",
              audienceType: "Researchers, PhD candidates, Master's students, Global Health professionals",
            },
          }),
        }}
      />

      {/* Structured Data - Educational Organization Schema */}
      <Script
        id="wbgh-educational-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "The Writing Bridge in Global Health",
            url: "https://t-healthsolutions.com/wbgh",
            slogan: "From Idea to Publication",
            knowsAbout: [
              "Scientific Writing",
              "Research Methodology",
              "Statistical Analysis",
              "Manuscript Preparation",
              "Peer Review Process",
              "Publication Ethics",
              "Global Health Research",
            ],
            educationalProgramMode: "Online",
            offers: {
              "@type": "Offer",
              category: "Research Mentorship and Publication Support",
            },
          }),
        }}
      />

      {children}
    </>
  );
}
