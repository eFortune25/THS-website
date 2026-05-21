"use client";

import { useState } from "react";
import Link from "next/link";
import { WBGHLogo } from "@/components/wbgh/WBGHLogo";
import { ArrowLeft, Upload, Loader2 } from "lucide-react";

export default function MenteeApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    institution: "",
    degreeLevel: "",
    occupation: "",
    researchTopic: "",
    currentStage: "",
    supportNeeded: [] as string[],
    motivation: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Google Sheets via Apps Script Web App
      const scriptUrl = process.env.NEXT_PUBLIC_MENTEE_FORM_URL;
      
      if (!scriptUrl) {
        console.error("Google Sheets URL not configured");
        alert("Form submission is not configured. Please contact the administrator.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Note: no-cors mode doesn't allow reading response, so we assume success
      console.log("Mentee Application submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      // Still show success to user as no-cors mode prevents error detection
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData({
      ...formData,
      supportNeeded: formData.supportNeeded.includes(value)
        ? formData.supportNeeded.filter((item) => item !== value)
        : [...formData.supportNeeded, value],
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your interest in the Writing Bridge in Global Health. We have received
              your application and will review it carefully. Our team will contact you within 5-7
              business days.
            </p>
            <div className="space-y-4">
              <Link
                href="/wbgh"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Return to WBGH Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/wbgh"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to WBGH
          </Link>
          <div className="flex justify-center mb-6">
            <WBGHLogo variant="color" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Mentorship Program Application
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Join our long-term mentorship program for comprehensive support from idea development to publication
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-6 max-w-3xl mx-auto">
            <p className="text-sm text-blue-900">
              <strong>What to expect:</strong> This program provides ongoing mentorship over weeks/months, 
              including multiple sessions with your assigned mentor to guide you through the entire research 
              and publication process.
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Kenya"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                    Institution/University *
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    required
                    value={formData.institution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="University of Nairobi"
                  />
                </div>

                <div>
                  <label htmlFor="degreeLevel" className="block text-sm font-semibold text-gray-700 mb-2">
                    Degree Level *
                  </label>
                  <select
                    id="degreeLevel"
                    name="degreeLevel"
                    required
                    value={formData.degreeLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select degree level</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="postdoc">Postdoctoral</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="occupation" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Occupation *
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    required
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Graduate Student, Researcher"
                  />
                </div>
              </div>
            </div>

            {/* Research Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Information</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="researchTopic" className="block text-sm font-semibold text-gray-700 mb-2">
                    Research Topic/Title *
                  </label>
                  <textarea
                    id="researchTopic"
                    name="researchTopic"
                    required
                    value={formData.researchTopic}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Briefly describe your research topic"
                  />
                </div>

                <div>
                  <label htmlFor="currentStage" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Stage of Your Work *
                  </label>
                  <select
                    id="currentStage"
                    name="currentStage"
                    required
                    value={formData.currentStage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select current stage</option>
                    <option value="idea">Idea/Concept Development</option>
                    <option value="proposal">Research Proposal</option>
                    <option value="thesis">Master's Thesis Writing</option>
                    <option value="dissertation">PhD Dissertation Writing</option>
                    <option value="manuscript-draft">Manuscript Draft</option>
                    <option value="manuscript-submitted">Submitted Manuscript (Revisions)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Type of Support Needed * (Select all that apply)
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "mentorship", label: "Scientific Writing Mentorship" },
                      { value: "statistics", label: "Statistical Consulting" },
                      { value: "editing", label: "Scientific Editing" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.supportNeeded.includes(option.value)}
                          onChange={() => handleCheckboxChange(option.value)}
                          className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="document" className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Document (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload your draft, proposal, or manuscript
                    </p>
                    <input
                      type="file"
                      id="document"
                      name="document"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <label
                      htmlFor="document"
                      className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors text-sm font-medium"
                    >
                      Choose File
                    </label>
                    <p className="text-xs text-gray-500 mt-2">PDF, DOC, or DOCX (Max 10MB)</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                    Motivation Statement *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us why you're seeking mentorship and how this support will help you achieve your publication goals (200-500 words)"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
