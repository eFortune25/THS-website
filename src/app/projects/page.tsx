import { CheckCircle, FileSearch, BarChart, FileText } from "lucide-react";

const projects = [
  {
    title: "Global Fund–Supported Program Audits",
    icon: FileSearch,
    description:
      "THS has conducted audits of Global Fund–supported programs across multiple countries, providing actionable, evidence-based recommendations to improve grant performance.",
    subtitle: "These audits strengthened:",
    items: [
      "Programmatic and financial accountability",
      "Grant implementation efficiency",
      "Compliance with Global Fund performance frameworks",
    ],
  },
  {
    title: "Evaluation of Global Health Programs",
    icon: BarChart,
    description:
      "THS has led and supported evaluations of global health programs across diverse country contexts for international partners, including UNDP and FHI 360.",
    subtitle: "Our evaluations supported:",
    items: [
      "Assessment of program effectiveness, efficiency, and sustainability",
      "Identification of implementation bottlenecks and best practices",
      "Data-driven recommendations for program improvement and scale-up",
    ],
  },
  {
    title: "Grant Proposal Development and Resource Mobilization",
    icon: FileText,
    description:
      "THS has led grant proposal development for global health programs on behalf of multiple organizations, including the Sabin Vaccine Institute.",
    subtitle: "Our support strengthened:",
    items: [
      "Technical design and donor alignment",
      "Results frameworks, monitoring plans, and budgets",
      "Competitiveness for major global health funding opportunities",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Past Projects & Experience
          </h1>
          <p className="mt-4 text-xl text-teal-100 max-w-3xl">
            A track record of impactful work with global health partners.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-700 text-white">
                        <Icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <p className="text-gray-700 font-medium mb-3">
                        {project.subtitle}
                      </p>
                      <ul className="space-y-2">
                        {project.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
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
