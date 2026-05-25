import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Shield, Leaf, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Transatlantic Health Solutions, LLC</h1>
          <p className="mt-4 text-xl text-teal-100 max-w-3xl">
            Building Sustainable Health Solutions across continents.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Transatlantic Health Solutions, LLC (THS) is a U.S.-based public health and research consulting firm committed to solving complex public health challenges in complex environments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                We support governments, development partners, non-governmental organizations, and health institutions across continents to identify critical health system gaps and design impactful, sustainable, and locally adapted solutions that improve population health outcomes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our work integrates health systems strengthening, implementation science, accountability, data analytics, digital public health, artificial intelligence (AI), and global health security to bridge evidence, innovation, and real-world impact.
              </p>
            </div>
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://www.wateraid.org/uk/sites/g/files/jkxoof211/files/8w3a4046.jpg"
                alt="Healthcare worker caring for a patient in an African health facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Leadership</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-teal-100">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Dr. Habakkuk Yumo, MD, MScIH, PhD
                </h3>
                <p className="text-lg text-teal-700 font-medium mb-6">
                  Founder & Principal Consultant
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  Public health physician, researcher, implementation scientist, and international consultant with over 15 years of experience in clinical care, health systems strengthening, and strategic design, implementation, and management of public health programs. Dr. Yumo began his career as a general practitioner in a rural district hospital in Africa, where he witnessed firsthand the challenges faced by underserved communities and fragile health systems.
                </p>
                <p>
                  He has collaborated with major international partners including the Global Fund, CDC, WHO, UNDP, UNICEF, FHI 360, Expertise France, ICF, and national Ministries of Health to strengthen health systems, improve program performance, and translate evidence into measurable public health impact.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 text-white font-medium rounded-lg hover:bg-teal-800 transition-colors shadow-md hover:shadow-lg"
                >
                  Learn More About Our Leadership
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To address complex public health problems in complex environments by delivering innovative, accountable, and sustainable health system solutions tailored to local contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 sm:py-20 bg-teal-700 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-teal-100 leading-relaxed">
              A world where every country provides high-quality, cost-effective healthcare to its population, irrespective of economic status.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-700 mb-6">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Advancing evidence-based and forward-looking solutions
              </p>
            </div>

            {/* Accountability */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-700 mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accountability</h3>
              <p className="text-gray-600">
                Strengthening transparency, performance, and stewardship
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-700 mb-6">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Ensuring long-term impact through local ownership and capacity building
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
