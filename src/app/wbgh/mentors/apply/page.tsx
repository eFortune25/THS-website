"use client";

import { useState } from "react";
import Link from "next/link";
import { WBGHLogo } from "@/components/wbgh/WBGHLogo";
import { ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import FileUpload from "@/components/wbgh/FileUpload";
import { submitMentorApplication, type MentorApplication } from "@/lib/supabase";

export default function MentorApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    institution: "",
    occupation: "",
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
    setError("");
    setUploadProgress(0);

    try {
      const application: MentorApplication = {
        full_name: formData.fullName,
        email: formData.email,
        country: formData.country,
        institution: formData.institution,
        occupation: formData.occupation,
        expertise: formData.expertise,
        publication_count: formData.publications,
        mentorship_areas: formData.mentorshipAreas,
        linkedin_url: formData.linkedIn || undefined,
        languages: formData.languages,
      };

      if (selectedFile) {
        setUploadProgress(50);
      }
      
      const result = await submitMentorApplication(application, selectedFile || undefined);

      if (result.success) {
        setUploadProgress(100);
        setIsSubmitted(true);
      } else {
        setError(result.error || "Failed to submit application. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
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
            <CheckCircle2 className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Thank you for applying to become a WBGH mentor.
            </p>
            <p className="text-base text-gray-600 mb-6">
              A confirmation email has been sent to <strong>{formData.email}</strong>.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 text-left">
              <p className="text-sm text-blue-900">
                <strong>What's next?</strong> Our team will review your application and contact you 
                regarding next steps. We truly appreciate your commitment to supporting early-career 
                researchers in global health.
              </p>
            </div>
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
                    placeholder="Harvard University"
                  />
                </div>

                <div>
                  <label htmlFor="occupation" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Position *
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    required
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Associate Professor, Senior Researcher"
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

                <FileUpload
                  label="Upload CV/Resume"
                  onFileSelect={setSelectedFile}
                  acceptedFormats={['.pdf', '.doc', '.docx']}
                  maxSizeMB={5}
                  required={false}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="space-y-4">
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}
              
              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-900">Uploading CV...</span>
                    <span className="text-sm text-blue-700">{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}
              
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {uploadProgress > 0 ? 'Uploading & Submitting...' : 'Submitting...'}
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
