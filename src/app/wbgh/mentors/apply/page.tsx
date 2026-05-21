"use client";

import { useState } from "react";
import Link from "next/link";
import { WBGHLogo } from "@/components/wbgh/WBGHLogo";
import { ArrowLeft, Upload, Loader2 } from "lucide-react";

export default function MentorApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    expertise: "",
    publications: "",
    mentorshipAreas: [] as string[],
    linkedIn: "",
    languages: "",
    additionalInfo: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Mentor Application:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
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
      mentorshipAreas: formData.mentorshipAreas.includes(value)
        ? formData.mentorshipAreas.filter((item) => item !== value)
        : [...formData.mentorshipAreas, value],
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
              Mentor Application Submitted Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your interest in becoming a WBGH mentor. We truly appreciate your
              commitment to supporting early-career researchers. Our team will review your
              application and contact you within 5-7 business days.
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
            Become a WBGH Mentor
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Share your expertise and help early-career researchers achieve publication success
          </p>
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
                    placeholder="Dr. Jane Smith"
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
                    placeholder="jane.smith@university.edu"
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
                    placeholder="United States"
                  />
                </div>

                <div>
                  <label htmlFor="linkedIn" className="block text-sm font-semibold text-gray-700 mb-2">
                    LinkedIn Profile (Optional)
                  </label>
                  <input
                    type="url"
                    id="linkedIn"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>
            </div>

            {/* Professional Background */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Background</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="expertise" className="block text-sm font-semibold text-gray-700 mb-2">
                    Area of Expertise *
                  </label>
                  <textarea
                    id="expertise"
                    name="expertise"
                    required
                    value={formData.expertise}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Infectious diseases, maternal health, health systems research"
                  />
                </div>

                <div>
                  <label htmlFor="publications" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Peer-Reviewed Publications *
                  </label>
                  <select
                    id="publications"
                    name="publications"
                    required
                    value={formData.publications}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select range</option>
                    <option value="1-5">1-5 publications</option>
                    <option value="6-10">6-10 publications</option>
                    <option value="11-20">11-20 publications</option>
                    <option value="21-50">21-50 publications</option>
                    <option value="50+">50+ publications</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Areas of Mentorship * (Select all that apply)
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: "manuscript", label: "Manuscript Writing & Development" },
                      { value: "thesis", label: "Master's Thesis Guidance" },
                      { value: "dissertation", label: "PhD Dissertation Support" },
                      { value: "statistics", label: "Statistical Analysis & Methods" },
                      { value: "editing", label: "Scientific Editing & Language" },
                      { value: "journal", label: "Journal Selection & Submission" },
                      { value: "review", label: "Peer Review Response" },
                    ].map((option) => (
                      <label key={option.value} className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.mentorshipAreas.includes(option.value)}
                          onChange={() => handleCheckboxChange(option.value)}
                          className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="languages" className="block text-sm font-semibold text-gray-700 mb-2">
                    Languages Spoken *
                  </label>
                  <input
                    type="text"
                    id="languages"
                    name="languages"
                    required
                    value={formData.languages}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., English, French, Spanish"
                  />
                </div>

                <div>
                  <label htmlFor="cv" className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload CV/Resume *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Upload your CV or Resume</p>
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      required
                    />
                    <label
                      htmlFor="cv"
                      className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors text-sm font-medium"
                    >
                      Choose File
                    </label>
                    <p className="text-xs text-gray-500 mt-2">PDF, DOC, or DOCX (Max 5MB)</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your mentoring experience, motivation for joining WBGH, or any other relevant information"
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
