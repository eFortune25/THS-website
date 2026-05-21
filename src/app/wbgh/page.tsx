"use client";

import Link from "next/link";
import Image from "next/image";
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
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-teal-600 text-white py-16 sm:py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }} />
        </div>
        
        {/* Radial glow behind logo area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-2xl" />
              <div className="relative">
                <WBGHLogo variant="white" className="scale-110" />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 leading-tight">
            The Writing Bridge in Global Health
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-blue-100 text-center mb-6 font-light italic">
            From Idea to Publication
          </p>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-blue-50 max-w-4xl mx-auto text-center leading-relaxed mb-12">
            A global mentorship and publication support platform helping researchers transform ideas,
            theses, dissertations, and manuscripts into peer-reviewed publications.
          </p>

          {/* Three CTA Cards */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Long-term Mentorship */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl flex flex-col h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Long-term Mentorship</h3>
                <p className="text-blue-100 text-sm mb-6 text-center flex-grow">
                  Comprehensive guidance from idea to publication with ongoing support.
                </p>
                <Link
                  href="/wbgh/apply"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg w-full justify-center group"
                >
                  Apply for Mentorship Program
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Card 2: Statistical & Editorial Services */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl flex flex-col h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Statistical & Editorial Services</h3>
                <p className="text-blue-100 text-sm mb-6 text-center flex-grow">
                  Expert statistical analysis, scientific editing, manuscript formatting, and publication support tailored to your research needs.
                </p>
                <Link
                  href="/wbgh/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-all shadow-lg w-full justify-center group"
                >
                  <span className="text-sm sm:text-base">Request Statistical or Editorial Services</span>
                  <Send className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Card 3: Become a Mentor */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl flex flex-col h-full md:col-span-2 lg:col-span-1">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">Become a Mentor</h3>
                <p className="text-blue-100 text-sm mb-6 text-center flex-grow">
                  Join our global network of experts and contribute to strengthening research capacity worldwide.
                </p>
                <Link
                  href="/wbgh/mentors/apply"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg w-full justify-center group"
                >
                  Become a Mentor
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Indicators Bar */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-blue-100">Global Reach</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Users className="w-6 h-6 text-blue-200" />
                </div>
                <p className="text-sm font-medium text-blue-100">Expert Mentors</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-blue-100">Quality & Integrity</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <BookOpen className="w-6 h-6 text-blue-200" />
                </div>
                <p className="text-sm font-medium text-blue-100">From Idea to Publication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Meet the Founder
          </h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Two-column layout on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Founder Photo - Left column on desktop, top on mobile */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-72 h-96 sm:w-80 sm:h-[28rem] rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 shadow-xl overflow-hidden">
                    <Image
                      src="/images/wbgh/founder.jpg"
                      alt="Dr. Habakkuk Yumo, Founder of WBGH"
                      width={320}
                      height={448}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10 -z-10" />
                </div>
              </div>

              {/* Biography and Credentials - Right column on desktop, bottom on mobile */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Dr. Habakkuk Yumo
                  </h3>
                  <p className="text-lg text-blue-700 font-medium mb-4">
                    Public Health Physician, Global Health Researcher, and Founder of The Writing Bridge in Global Health (WBGH)
                  </p>
                </div>

                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Dr. Habakkuk Yumo is a Public Health Physician and Global Health Scholar with more than 15 years of international experience in infectious diseases, health systems strengthening, implementation science, and public health research. He has worked or collaborated with leading organizations including the CDC, WHO, The Global Fund, UNICEF, USAID, UNDP, and other international partners across Africa and globally.
                  </p>
                  <p>
                    Having personally experienced the challenges of transforming academic research into scientific publications, he created The Writing Bridge in Global Health to help researchers—especially those from low- and middle-income countries—navigate the journey from idea to publication through mentorship, scientific guidance, and practical support.
                  </p>
                </div>

                {/* Highlights */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>MD (Doctor of Medicine)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>PhD in International Health</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>MSc International Health</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>University Diploma in Epidemiology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>20+ peer-reviewed publications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Reviewer and editor in several peer-reviewed journals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Extensive experience in HIV, TB, implementation science, and health systems strengthening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Research, evaluation, and technical leadership experience across multiple countries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Mentor and advisor to researchers and public health professionals</span>
                    </li>
                  </ul>
                </div>

                {/* Quote Box */}
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-xl p-8 shadow-lg">
                  <div className="mb-4">
                    <svg className="w-10 h-10 text-blue-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-lg italic leading-relaxed mb-4">
                    "Too much valuable research remains unpublished. My goal is to help researchers transform their ideas, theses, dissertations, and manuscripts into publications that can inform policy, practice, and global health outcomes."
                  </p>
                  <p className="text-blue-100 font-medium">
                    — Founder, WBGH
                  </p>
                </div>

                {/* CTA Button */}
                <div>
                  <Link
                    href="https://www.linkedin.com/in/hkyumo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg group"
                  >
                    Connect on LinkedIn
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
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
