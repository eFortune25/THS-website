import { Briefcase, Users, Mail, CheckCircle } from "lucide-react";

const consultancyAreas = [
  "Health program evaluation and audit",
  "Capacity and systems assessments",
  "Supply chain and health systems management",
  "Laboratory services",
  "Operational and implementation research",
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Work With Us</h1>
          <p className="mt-4 text-xl text-teal-100 max-w-3xl">
            Join our global network of public health professionals.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gray-100 text-gray-500">
                <Briefcase className="h-7 w-7" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <p className="text-gray-600 text-lg">
                We currently have no open staff positions.
              </p>
              <p className="text-gray-500 mt-4">
                Please check back regularly for new opportunities or consider joining as a consultant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancies */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100 text-teal-700">
                  <Users className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Consultancies</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                THS continuously seeks consultants with expertise in:
              </p>
              <ul className="space-y-3">
                {consultancyAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-fit">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-700 text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Interested Consultants</h3>
              </div>
              <p className="text-gray-600 mb-6">
                If you have expertise in any of these areas and would like to join our network of consultants, we would love to hear from you.
              </p>
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                <p className="text-gray-700 mb-2">Please send your CV to:</p>
                <a
                  href="mailto:info@t-healthsolutions.com"
                  className="text-teal-700 font-semibold text-lg hover:text-teal-800 transition-colors break-all"
                >
                  info@t-healthsolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
