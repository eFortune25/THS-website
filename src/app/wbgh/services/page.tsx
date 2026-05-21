"use client";

import { useState } from "react";
import Link from "next/link";
import { WBGHLogo } from "@/components/wbgh/WBGHLogo";
import { ArrowLeft, BookOpen, TrendingUp, FileEdit, Loader2, CheckCircle2 } from "lucide-react";
import FileUpload from "@/components/wbgh/FileUpload";
import { submitServiceRequest, type ServiceRequest } from "@/lib/supabase";

type ServiceType = "mentorship" | "statistics" | "editing" | null;

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceType>(null);
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
    projectDescription: "",
    deadline: "",
    additionalDetails: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setUploadProgress(0);

    try {
      if (!selectedService) {
        setError("Please select a service type");
        setIsSubmitting(false);
        return;
      }

      const request: ServiceRequest = {
        full_name: formData.fullName,
        email: formData.email,
        country: formData.country,
        institution: formData.institution,
        occupation: formData.occupation,
        service_type: selectedService,
        project_description: formData.projectDescription,
        timeline: formData.deadline,
      };

      if (selectedFile) {
        setUploadProgress(50);
      }
      
      const result = await submitServiceRequest(request, selectedFile || undefined);

      if (result.success) {
        setUploadProgress(100);
        setIsSubmitted(true);
      } else {
        setError(result.error || "Failed to submit request. Please try again.");
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
            <CheckCircle2 className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Request Submitted Successfully
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Thank you for your service request to WBGH.
            </p>
            <p className="text-base text-gray-600 mb-6">
              A confirmation email has been sent to <strong>{formData.email}</strong>.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 text-left">
              <p className="text-sm text-blue-900">
                <strong>What's next?</strong> Our team will review your service request and contact you 
                with more information about how we can support your project.
              </p>
            </div>
            <div className="space-y-4">
              <Link
                href="/wbgh"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Return to WBGH Home
              </Link>
              <div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setSelectedService(null);
                    setFormData({
                      fullName: "",
                      email: "",
                      country: "",
                      institution: "",
                      occupation: "",
                      projectDescription: "",
                      deadline: "",
                      additionalDetails: "",
                    });
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedService) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
              Request Specific Services
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
              Get targeted, project-based support for your immediate research needs
            </p>
            <div className="bg-teal-50 border-l-4 border-teal-600 p-4 mt-6 max-w-3xl mx-auto">
              <p className="text-sm text-teal-900">
                <strong>Quick support:</strong> These services are designed for specific, short-term needs 
                such as statistical analysis, manuscript editing, or writing assistance for a particular project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mentorship Service */}
            <button
              onClick={() => setSelectedService("mentorship")}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500 text-left"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Scientific Writing Mentorship
              </h3>
              <p className="text-gray-600 mb-4">
                Get personalized guidance for manuscript development, thesis writing, and journal
                submission preparation.
              </p>
              <span className="text-blue-600 font-semibold hover:underline">
                Select Service →
              </span>
            </button>

            {/* Statistics Service */}
            <button
              onClick={() => setSelectedService("statistics")}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500 text-left"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Statistical Consulting</h3>
              <p className="text-gray-600 mb-4">
                Expert support for data analysis, quantitative and qualitative methods, and
                statistical interpretation.
              </p>
              <span className="text-blue-600 font-semibold hover:underline">
                Select Service →
              </span>
            </button>

            {/* Editing Service */}
            <button
              onClick={() => setSelectedService("editing")}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-500 text-left"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 mb-6">
                <FileEdit className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Scientific Editing</h3>
              <p className="text-gray-600 mb-4">
                Professional editing for grammar, formatting, references, and publication
                compliance.
              </p>
              <span className="text-blue-600 font-semibold hover:underline">
                Select Service →
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const serviceDetails = {
    mentorship: {
      title: "Scientific Writing Mentorship",
      icon: BookOpen,
      description: "Request personalized guidance for your research writing project",
    },
    statistics: {
      title: "Statistical Consulting",
      icon: TrendingUp,
      description: "Get expert support for your data analysis needs",
    },
    editing: {
      title: "Scientific Editing",
      icon: FileEdit,
      description: "Professional editing to prepare your manuscript for submission",
    },
  };

  const currentService = serviceDetails[selectedService];
  const ServiceIcon = currentService.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button
            onClick={() => setSelectedService(null)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Service Selection
          </button>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center">
                <ServiceIcon className="h-6 w-6 text-white" />
              </div>
              <WBGHLogo variant="color" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            {currentService.title}
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {currentService.description}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
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
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-semibold text-gray-700 mb-2">
                    Institution/Organization *
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    required
                    value={formData.institution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="occupation" className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Position/Role *
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

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="projectDescription"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    required
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your project, research topic, and specific support needs"
                  />
                </div>

                <div>
                  <label htmlFor="deadline" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Timeline/Deadline
                  </label>
                  <input
                    type="text"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Within 2 months, By December 2026"
                  />
                </div>

                <FileUpload
                  label="Upload Document (Manuscript, Dataset, etc.)"
                  onFileSelect={setSelectedFile}
                  acceptedFormats={['.pdf', '.doc', '.docx']}
                  maxSizeMB={10}
                  required={false}
                />

                <div>
                  <label
                    htmlFor="additionalDetails"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Additional Details or Questions
                  </label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any other information that would help us understand your needs"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              )}
              
              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-900">Uploading...</span>
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
                    "Submit Request"
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
