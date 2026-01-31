import Image from "next/image";
import { Lightbulb, Shield, Leaf } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Transatlantic Health Solutions, LLC</h1>
          <p className="mt-4 text-xl text-teal-100 max-w-3xl">
            Building impactful health solutions across continents.
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
