import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

interface BlogCTAProps {
  type: "ths" | "wbgh";
}

export function BlogCTA({ type }: BlogCTAProps) {
  if (type === "wbgh") {
    return (
      <div className="mt-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Need Help Turning Your Research into a Publication?
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            The Writing Bridge in Global Health (WBGH) provides mentorship, scientific editing, and publication support to help researchers transform theses, dissertations, and manuscripts into peer-reviewed publications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wbgh"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg group"
            >
              Explore WBGH Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/wbgh/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all"
            >
              Apply for Mentorship
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // THS CTA
  return (
    <div className="mt-12 bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Need Technical Support for Your Global Health Project?
        </h3>
        <p className="text-lg text-teal-100 mb-8">
          Transatlantic Health Solutions provides expert consulting in health systems strengthening, implementation science, program evaluation, monitoring and evaluation, and digital health.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-lg font-semibold hover:bg-teal-50 transition-all shadow-lg group"
          >
            <Mail className="h-5 w-5" />
            Contact THS
          </Link>
          <Link
            href="/what-we-do"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-teal-700 transition-all group"
          >
            Our Services
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
