"use client";

import Link from "next/link";
import { WBGHLogo } from "@/components/wbgh/WBGHLogo";
import { ServiceCard } from "@/components/wbgh/ServiceCard";
import { StepCard } from "@/components/wbgh/StepCard";
import {
  BookOpen,
  TrendingUp,
  FileEdit,
  Send,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function WBGHPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-teal-600 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <WBGHLogo variant="white" className="scale-125" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-center mb-4">
            The Writing Bridge in Global Health
          </h1>
          <p className="text-2xl text-blue-100 text-center mb-8 font-light">
            From Idea to Publication
          </p>
          <p className="mt-6 text-xl text-blue-50 max-w-4xl mx-auto text-center leading-relaxed">
            A global mentorship and publication support platform helping researchers transform ideas,
            theses, dissertations, and manuscripts into peer-reviewed publications.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Mentee Application - Long-term */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
                <h3 className="text-xl font-bold text-white mb-2">Long-term Mentorship</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Comprehensive guidance from idea to publication with ongoing support
                </p>
                <Link
                  href="/wbgh/apply"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg w-full justify-center"
                >
                  Apply for Mentorship Program
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              {/* Service Request - Short-term */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
                <h3 className="text-xl font-bold text-white mb-2">Specific Service Support</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Expert statistical analysis, scientific editing, manuscript formatting, and publication support tailored to your research needs.
                </p>
                <Link
                  href="/wbgh/services"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg w-full justify-center text-sm sm:text-base"
                >
                  <span className="whitespace-nowrap">Request Statistical or Editorial Services</span>
                  <Send className="h-5 w-5 flex-shrink-0" />
                </Link>
              </div>
            </div>

            {/* Mentor CTA - Centered below */}
            <div className="text-center">
              <Link
                href="/wbgh/mentors/apply"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors shadow-lg border-2 border-white/20"
              >
                Become a Mentor
                <Users className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Bridging the Publication Gap
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Researchers in low- and middle-income countries (LMICs) face significant barriers to publishing their work in peer-reviewed journals. 
                These challenges include limited access to scientific writing mentorship, inadequate statistical support, and insufficient editorial guidance.
              </p>
              <p>
                The Writing Bridge in Global Health (WBGH) was created to address these critical gaps. We connect early-career researchers, Master's students, 
                and PhD candidates with experienced mentors and publication experts who understand the unique challenges of conducting and publishing research 
                in resource-limited settings.
              </p>
              <p className="font-semibold text-gray-900">
                Our mission is to strengthen research capacity, improve scientific communication, and help researchers share their valuable findings with the global health community.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-8">
                <p className="text-blue-900 font-medium">
                  <strong>Important:</strong> WBGH is an academic mentorship and publication support platform. 
                  We do not provide essay-writing or ghostwriting services. Our focus is on empowering researchers to develop 
                  their own scientific writing skills and achieve publication success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to help you navigate the journey from research to publication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={BookOpen}
              title="Scientific Writing Mentorship"
              description="One-on-one guidance to develop your scientific writing skills and prepare manuscripts for publication."
              features={[
                "Manuscript development and structure",
                "Master thesis writing support",
                "PhD dissertation guidance",
                "Journal submission preparation",
                "Response to reviewer comments",
              ]}
            />
            <ServiceCard
              icon={TrendingUp}
              title="Statistical Consulting"
              description="Expert statistical analysis and methodological support for your research projects."
              features={[
                "Quantitative data analysis",
                "Qualitative research methods",
                "Regression modeling",
                "Survival analysis",
                "Systematic reviews & meta-analysis",
              ]}
            />
            <ServiceCard
              icon={FileEdit}
              title="Scientific Editing"
              description="Professional editing services to polish your manuscript and ensure publication readiness."
              features={[
                "Grammar and language polishing",
                "Journal formatting requirements",
                "Reference formatting (APA, Vancouver, etc.)",
                "Plagiarism review",
                "Publication compliance check",
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get the support you need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <StepCard
              number={1}
              icon={Send}
              title="Submit Your Request"
              description="Fill out our application form with details about your project and support needs"
            />
            <StepCard
              number={2}
              icon={Users}
              title="Get Matched"
              description="We connect you with an expert mentor or consultant in your field"
            />
            <StepCard
              number={3}
              icon={Target}
              title="Receive Support"
              description="Work closely with your mentor to develop your manuscript and skills"
            />
            <StepCard
              number={4}
              icon={CheckCircle}
              title="Prepare for Publication"
              description="Submit your polished manuscript to peer-reviewed journals with confidence"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-700 to-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Turn Your Research Into Publication?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join researchers from around the world who are advancing global health through quality publications
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Mentorship Program */}
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mentorship Program</h3>
              <p className="text-gray-600 mb-6">
                Long-term comprehensive support from experienced researchers
              </p>
              <Link
                href="/wbgh/apply"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full justify-center"
              >
                Apply for Mentorship
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Service Request */}
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specific Services</h3>
              <p className="text-gray-600 mb-6">
                Expert statistical analysis, scientific editing, manuscript formatting, and publication support tailored to your research needs.
              </p>
              <Link
                href="/wbgh/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors w-full justify-center text-sm sm:text-base"
              >
                <span className="whitespace-nowrap">Request Statistical or Editorial Services</span>
                <Send className="h-5 w-5 flex-shrink-0" />
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <p className="text-blue-100 mb-4">Have questions or need guidance on which option is right for you?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors border-2 border-white/30"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
