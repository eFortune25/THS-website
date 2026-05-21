"use client";

import { useState } from "react";
import Link from "next/link";
import { WBGHLogo } from "@/components/wbgh/WBGHLogo";
import { ArrowLeft, BookOpen, TrendingUp, FileEdit, Upload, Loader2 } from "lucide-react";

type ServiceType = "mentorship" | "statistics" | "editing" | null;

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceType>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    institution: "",
    projectDescription: "",
    deadline: "",
    additionalDetails: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Service Request:", { service: selectedService, ...formData });
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
              Service Request Submitted Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your service request. Our team will review your needs and contact you
              within 2-3 business days with more information about how we can support your project.
            </p>
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
              Request Support Services
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
              Choose the service that best fits your needs
            </p>
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

                <div>
                  <label htmlFor="document" className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Document (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload your manuscript, dataset, or related document
                    </p>
                    <input
                      type="file"
                      id="document"
                      name="document"
                      accept=".pdf,.doc,.docx,.xlsx,.csv"
                      className="hidden"
                    />
                    <label
                      htmlFor="document"
                      className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors text-sm font-medium"
                    >
                      Choose File
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      PDF, DOC, DOCX, XLSX, or CSV (Max 10MB)
                    </p>
                  </div>
                </div>

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
                  "Submit Request"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
