import Image from "next/image";
import { Globe, CheckCircle } from "lucide-react";

export default function WhereWeWorkPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Where We Work
          </h1>
          <p className="mt-4 text-xl text-teal-100 max-w-3xl">
            A global presence with a focus on where health system needs are greatest.
          </p>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-700 mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Reach</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                THS is a global firm working across regions, with a primary focus on low- and middle-income countries, where health system needs are greatest.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  In high-income and industrialized countries, THS supports efforts to:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Address emerging and major public health challenges
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">
                      Reduce health disparities among minority and underserved populations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://www.cdc.gov/global-health/media/images/2024/04/World-map-thumbnail_16x9-1.png"
                alt="Global map showing THS presence"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Low- and Middle-Income Countries
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our primary focus is on regions where health system needs are greatest. We work to strengthen health infrastructure, improve service delivery, and build local capacity for sustainable health outcomes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                High-Income Countries
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In industrialized settings, we support efforts to address emerging public health challenges and work to reduce health disparities among underserved and minority populations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
