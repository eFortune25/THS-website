import { Mail, MapPin, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-xl text-teal-100 max-w-3xl">
            Get in touch with Transatlantic Health Solutions.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                We would love to hear from you. Whether you have questions about our services, want to explore partnership opportunities, or are interested in working with us, please reach out.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100 text-teal-700 flex-shrink-0">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@t-healthsolutions.com"
                      className="text-teal-700 hover:text-teal-800 transition-colors text-lg"
                    >
                      info@t-healthsolutions.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100 text-teal-700 flex-shrink-0">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Dallas, TX, United States</p>
                  </div>
                </div>

                {/* Global */}
                <div className="flex items-start gap-5">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100 text-teal-700 flex-shrink-0">
                    <Globe className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Global Presence</h3>
                    <p className="text-gray-600">Working across continents</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Card */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <p className="text-gray-600 mb-8">
                For inquiries about our services, partnership opportunities, or consultant applications, please email us directly.
              </p>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-center">
                  <Mail className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <p className="text-gray-700 mb-4">
                    Email us at:
                  </p>
                  <a
                    href="mailto:info@t-healthsolutions.com"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors"
                  >
                    info@t-healthsolutions.com
                  </a>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  For consultant applications, please send your CV to{" "}
                  <a
                    href="mailto:info@t-healthsolutions.com"
                    className="text-teal-700 hover:text-teal-800"
                  >
                    info@t-healthsolutions.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
