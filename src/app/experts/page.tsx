import Image from "next/image";
import { Users, Stethoscope, FlaskConical, Microscope } from "lucide-react";

const expertTypes = [
  {
    title: "Public health consultants",
    icon: Users,
    description:
      "Experienced professionals in health systems, policy, and program implementation.",
  },
  {
    title: "Clinicians",
    icon: Stethoscope,
    description:
      "Medical practitioners with expertise in clinical care and health service delivery.",
  },
  {
    title: "Biologists and biotechnologists",
    icon: FlaskConical,
    description:
      "Scientists with deep knowledge in biological sciences and laboratory systems.",
  },
  {
    title: "Researchers and implementation scientists",
    icon: Microscope,
    description:
      "Experts in operational research, evaluation, and evidence generation.",
  },
];

export default function ExpertsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Experts</h1>
          <p className="mt-4 text-xl text-teal-100 max-w-3xl">
            A robust global network of seasoned professionals.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Global Network of Professionals
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                THS brings together a robust global network of seasoned professionals, including:
              </p>
              <ul className="space-y-3 text-lg text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-teal-600 rounded-full" />
                  Public health consultants
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-teal-600 rounded-full" />
                  Clinicians
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-teal-600 rounded-full" />
                  Biologists and biotechnologists
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-teal-600 rounded-full" />
                  Researchers and implementation scientists
                </li>
              </ul>
              <div className="mt-8 p-6 bg-teal-50 rounded-xl border border-teal-100">
                <p className="text-teal-800 font-medium">
                  Our experts are available for short- and long-term assignments worldwide.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://pxl-mayoedu.terminalfour.net/fit-in/1024x2000/filters:quality(75)/prod01/channel_2/media/mccms/content-assets/academics/explore-health-care-careers/1024X512_Med-Lab-Science-career-page-photo-1223176_3408554__0043.jpg"
                alt="Medical laboratory scientists at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expert Types Grid */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Expertise Areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertTypes.map((expert, index) => {
              const Icon = expert.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100 text-teal-700">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {expert.title}
                      </h3>
                      <p className="text-gray-600">{expert.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
