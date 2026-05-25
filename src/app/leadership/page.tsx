import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership - Dr. Habakkuk Yumo | Transatlantic Health Solutions",
  description:
    "Meet Dr. Habakkuk Yumo, MD, MScIH, PhD - Founder & Principal Consultant of Transatlantic Health Solutions. Global health physician and implementation scientist with 15+ years of experience in health systems strengthening, program evaluation, and public health research.",
  keywords: [
    "Dr. Habakkuk Yumo",
    "global health leadership",
    "public health physician",
    "implementation science",
    "health systems strengthening",
    "program evaluation",
    "HIV AIDS expert",
    "maternal child health",
    "bilingual consultant",
    "CDC WHO consultant",
  ],
  openGraph: {
    title: "Leadership - Dr. Habakkuk Yumo | Transatlantic Health Solutions",
    description:
      "Global health physician and implementation scientist with 15+ years of international experience in health systems strengthening and public health program management.",
    url: "https://t-healthsolutions.com/leadership",
    siteName: "Transatlantic Health Solutions",
    type: "profile",
    images: [
      {
        url: "https://t-healthsolutions.com/images/dr-yumo.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Habakkuk Yumo - Founder of Transatlantic Health Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership - Dr. Habakkuk Yumo | Transatlantic Health Solutions",
    description:
      "Global health physician and implementation scientist with 15+ years of international experience.",
    images: ["https://t-healthsolutions.com/images/dr-yumo.jpg"],
  },
};

const expertiseAreas = [
  "Health Systems Strengthening",
  "HIV/AIDS & Tuberculosis",
  "Maternal, Newborn & Child Health",
  "Implementation Science",
  "Program Evaluation",
  "Public Health Research",
  "Monitoring, Evaluation & Learning",
  "Global Health Security",
  "Digital Health & Artificial Intelligence",
  "Capacity Building",
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Leadership
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Experienced global health leadership driving measurable impact across continents
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Banner */}
      <section className="bg-teal-700 text-white py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base font-medium">
            <span>15+ Years Experience</span>
            <span className="hidden sm:inline">|</span>
            <span>MD</span>
            <span className="hidden sm:inline">|</span>
            <span>MScIH</span>
            <span className="hidden sm:inline">|</span>
            <span>PhD</span>
            <span className="hidden sm:inline">|</span>
            <span>Global Health Expert</span>
            <span className="hidden sm:inline">|</span>
            <span>Bilingual (English/French)</span>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Headshot and Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-6 bg-gray-100">
                  <Image
                    src="/images/dr-yumo.jpg"
                    alt="Dr. Habakkuk Yumo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/hkyumo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn Profile
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-teal-700 text-white font-medium rounded-lg hover:bg-teal-800 transition-colors shadow-md hover:shadow-lg"
                  >
                    <Mail className="h-5 w-5" />
                    Contact THS
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Dr. Habakkuk Yumo, MD, MScIH, PhD
                </h2>
                <p className="text-xl text-teal-700 font-medium mb-6">
                  Founder & Principal Consultant
                </p>
              </div>

              {/* Profile Summary */}
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Dr. Habakkuk Yumo is a Public Health Physician, researcher, implementation scientist, and program evaluation specialist with over 15 years of international experience in clinical care, health systems strengthening, and the strategic design, implementation, and management of public health programs across low- and middle-income countries (LMICs). He has worked across multiple countries and continents, supporting governments, international organizations, and development partners in addressing complex global health challenges, particularly in HIV/AIDS, tuberculosis (TB), maternal, newborn and child health (MNCH), health systems strengthening, implementation science, and public health evaluation.
                </p>
                <p>
                  Recognized internationally for his contributions to pediatric HIV implementation science, Dr. Yumo has led and supported operational research, implementation research, program evaluations, and evidence-generation initiatives aimed at improving health outcomes and informing policy and practice. He has authored and co-authored multiple peer-reviewed scientific publications and has extensive experience translating research findings into scalable and sustainable public health interventions.
                </p>
                <p>
                  Dr. Yumo has collaborated with major international partners including the Global Fund, CDC, WHO, UNDP, UNICEF, FHI 360, Expertise France, and national Ministries of Health to strengthen health systems, improve program performance, and translate evidence into measurable public health impact.
                </p>
                <p>
                  Bilingual in English and French, he is committed to advancing equitable, evidence-based, and data-driven solutions that improve health outcomes and strengthen health systems globally.
                </p>
              </div>

              {/* Areas of Expertise */}
              <div className="pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertiseAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200 rounded-lg px-4 py-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-teal-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 text-center border border-teal-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Work Together?
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Partner with Transatlantic Health Solutions to strengthen your health systems and improve program outcomes.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 text-white font-medium rounded-lg hover:bg-teal-800 transition-colors shadow-md hover:shadow-lg"
                  >
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
