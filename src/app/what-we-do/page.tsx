import Image from "next/image";
import {
  Lightbulb,
  HeartPulse,
  ClipboardCheck,
  BarChart3,
  Brain,
  ShieldAlert,
  Users,
  Globe,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    number: "1",
    title: "Foster Innovative Health Service Delivery Models",
    icon: Lightbulb,
    description:
      "THS conducts operational and implementation research to stimulate innovation in health service delivery and support evidence-informed program design and scale-up.",
    items: [
      "Research design and protocol development",
      "Study implementation and advanced data analysis",
      "Manuscript writing and peer-reviewed publication",
      "Translation of evidence into policy and practice",
      "Grant and concept proposal development informed by implementation evidence",
    ],
  },
  {
    number: "2",
    title: "Improve Health Services Management and Care Outcomes",
    icon: HeartPulse,
    description: "We strengthen health system performance by:",
    items: [
      "Advancing agile and adaptive management approaches to address complex health challenges",
      "Providing customized, results-driven technical assistance to fill program- and facility-level gaps",
    ],
  },
  {
    number: "3",
    title: "Strengthen Accountability in Health Systems",
    icon: ClipboardCheck,
    description:
      "THS supports the institutionalization of digital public health solutions to improve accountability, transparency, and performance across all levels of health system management.",
    subtitle: "Our work includes:",
    items: [
      "Digitalization of program and facility management",
      "Performance monitoring and accountability frameworks",
      "Governance and compliance strengthening",
    ],
  },
  {
    number: "4",
    title: "Data Analytics and AI-Driven Insights for Health Systems",
    icon: BarChart3,
    description:
      "THS leverages advanced data analytics and AI-driven methods to transform health data into actionable insights.",
    subtitle: "We support partners to:",
    items: [
      "Design and implement health data analytics frameworks",
      "Apply AI and machine learning to identify trends, predict risks, and optimize resource allocation",
      "Develop interactive dashboards and decision-support tools for real-time monitoring and evaluation",
      "Integrate routine health data, survey data, and program data to generate policy-relevant evidence",
      "Strengthen data governance, data quality assurance, and ethical data use",
    ],
    note: "Our analytics solutions are interoperable, context-appropriate, and embedded within existing health information systems.",
  },
  {
    number: "5",
    title: "Integration of Artificial Intelligence in Healthcare and Public Health",
    icon: Brain,
    description:
      "THS supports the responsible, ethical, and human-centered integration of artificial intelligence (AI) into healthcare delivery and public health programs.",
    subtitle: "We work with partners to:",
    items: [
      "Deploy AI-enabled decision-support tools for planning, monitoring, and evaluation",
      "Strengthen digital public health systems for real-time data use and accountability",
      "Ensure AI solutions are equitable, transparent, and aligned with local capacity and regulatory environments",
    ],
    note: "Our approach emphasizes AI as a tool to augment—not replace—the health workforce.",
  },
  {
    number: "6",
    title: "Global Health Security, Preparedness, and Resilience",
    icon: ShieldAlert,
    description:
      "THS supports global health security by strengthening national and subnational capacities to prevent, detect, and respond to public health threats, particularly in resource-constrained and fragile settings.",
    subtitle: "We contribute to resilient and shock-responsive health systems through:",
    items: [
      "Preparedness and readiness assessments integrated into routine health programs",
      "Surveillance and early warning systems, including data analytics and AI-driven tools",
      "Outbreak response and continuity of essential services during public health emergencies",
      "Laboratory systems and workforce capacity strengthening",
      "Monitoring, learning, and accountability to inform preparedness and response improvements",
    ],
    note: "This work aligns with the International Health Regulations (IHR 2005), WHO health emergency frameworks, Global Fund investments in pandemic preparedness and resilient and sustainable systems for health (RSSH), and the Global Health Security Agenda (GHSA) 2024–2028 Framework.",
  },
  {
    number: "7",
    title: "Develop Local Leadership for Transformative Health Management",
    icon: Users,
    description: "THS promotes leadership development and mentorship to:",
    items: [
      "Improve workforce performance and engagement",
      "Enhance learning and career development",
      "Foster multidisciplinary collaboration",
    ],
  },
  {
    number: "8",
    title: "Address the Global Gap in Human Resources for Health",
    icon: Globe,
    description:
      "We engage in capacity development and global placement of health professionals to help reduce critical workforce shortages and strengthen health systems worldwide.",
    items: [],
  },
];

const howWeWork = [
  "Working closely with local stakeholders and institutions",
  "Grounding interventions in implementation science and real-world data",
  "Integrating digital health, data analytics, AI, and health security considerations into existing systems",
  "Prioritizing sustainability, scalability, and local ownership",
  "Upholding ethical standards, equity, and data protection",
];

export default function WhatWeDoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">What We Do</h1>
          <p className="mt-4 text-xl text-teal-100 max-w-3xl">
            Comprehensive public health solutions across eight key service areas.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="bg-gray-50 rounded-2xl p-8 lg:p-10"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-700 text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.number}. {service.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      {service.subtitle && (
                        <p className="text-gray-700 font-medium mb-3">
                          {service.subtitle}
                        </p>
                      )}
                      {service.items.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {service.note && (
                        <p className="text-gray-500 italic text-sm mt-4 border-l-4 border-teal-200 pl-4">
                          {service.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-24 bg-teal-700 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">How We Work</h2>
              <p className="text-xl text-teal-100 mb-8">
                THS applies a collaborative, evidence-based, and implementation-focused approach by:
              </p>
              <ul className="space-y-4">
                {howWeWork.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span className="text-teal-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://www.clemson.edu/health-research/_images/home/better-together.jpeg"
                alt="Researchers collaborating in laboratory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
