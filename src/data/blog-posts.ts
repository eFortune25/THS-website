export type BlogCategory =
  | "Global Health"
  | "Health Systems Strengthening"
  | "Implementation Science"
  | "Monitoring & Evaluation"
  | "Digital Health & AI"
  | "Global Fund & Development Financing"
  | "Research & Publication"
  | "WBGH";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  date: string;
  readingTime: string;
  featuredImage: string;
  tags: string[];
  content: string;
  ctaType: "ths" | "wbgh";
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "from-idea-to-publication",
    title: "From Idea to Publication: Why Valuable Research Often Remains Unpublished",
    excerpt:
      "Many theses, dissertations, program evaluations, and research projects generate valuable evidence but never reach the scientific community. This article explores why research remains unpublished and how structured mentorship can help close the gap.",
    category: "Research & Publication",
    author: "Dr. Habakkuk Yumo",
    date: "2026-05-20",
    readingTime: "6 min read",
    featuredImage: "/images/blog/publication-gap.jpg",
    tags: ["Research", "Publication", "Mentorship", "WBGH", "Scientific Writing"],
    ctaType: "wbgh",
    featured: true,
    content: `
# From Idea to Publication: Why Valuable Research Often Remains Unpublished

Across low- and middle-income countries (LMICs), countless research projects—Master's theses, PhD dissertations, program evaluations, and implementation studies—generate valuable evidence that could inform policy, improve practice, and advance global health. Yet much of this work never reaches peer-reviewed journals or the broader scientific community.

## The Publication Gap

This "publication gap" is not a reflection of research quality. Rather, it stems from a combination of structural barriers, limited mentorship, and insufficient support for scientific writing and submission processes.

### Common Barriers to Publication

1. **Limited Scientific Writing Training**: Many researchers receive excellent training in study design, data collection, and analysis—but minimal guidance on transforming findings into publishable manuscripts.

2. **Lack of Mentorship**: Early-career researchers often lack access to experienced mentors who can guide them through journal selection, manuscript preparation, peer review, and revisions.

3. **Language Challenges**: For non-native English speakers, writing in English for international journals presents an additional layer of difficulty.

4. **Statistical and Methodological Gaps**: Many valuable studies require additional statistical analysis or methodological refinement before submission.

5. **Time and Resource Constraints**: Researchers juggling clinical, programmatic, or teaching responsibilities often lack the dedicated time needed to prepare manuscripts.

## The Cost of Unpublished Research

When research remains unpublished:

- **Evidence does not inform policy or practice**: Program managers and policymakers miss opportunities to learn from successful interventions or avoid ineffective approaches.
  
- **Researchers miss career advancement opportunities**: Publications are critical for academic progression, grant applications, and professional recognition.

- **Funders cannot demonstrate impact**: Development partners and funding agencies lose visibility into the outcomes of their investments.

- **Global health knowledge gaps persist**: The scientific community remains unaware of local innovations, contextual adaptations, and implementation insights from resource-limited settings.

## How Structured Mentorship Can Close the Gap

The Writing Bridge in Global Health (WBGH) was created specifically to address these barriers. Through one-on-one mentorship, statistical consulting, and scientific editing support, WBGH helps researchers:

### Transform Theses and Dissertations into Publications

Many Master's theses and PhD dissertations contain publication-ready findings. WBGH mentors work with researchers to extract core messages, refine analyses, and restructure content for journal submission.

### Navigate the Publication Process

From selecting appropriate journals to responding to reviewer comments, the publication process involves multiple steps where mentorship is invaluable.

### Develop Scientific Writing Skills

WBGH emphasizes skill-building. Researchers learn not only how to publish their current work but also how to approach future manuscripts independently.

### Overcome Language Barriers

For Francophone researchers or those writing in a second language, WBGH provides bilingual support (English and French) to ensure clarity, precision, and adherence to journal standards.

## Success Stories

Researchers who have worked with WBGH mentors have successfully published in:

- Implementation science journals
- HIV and tuberculosis specialty journals  
- Maternal and child health publications
- Health systems and policy journals
- Regional and international public health journals

These publications have informed national guidelines, supported doctoral defenses, and strengthened researchers' academic portfolios.

## Moving Forward

If you have conducted research—whether a thesis, dissertation, program evaluation, or implementation study—that has not yet been published, consider:

1. **Reviewing your findings**: Is there valuable evidence that could inform the field?
2. **Seeking mentorship**: Connect with experienced researchers or mentors who can guide you.
3. **Allocating dedicated time**: Publishing requires focused effort; block time specifically for manuscript preparation.
4. **Exploring support platforms**: Organizations like WBGH exist specifically to support researchers in bridging the gap from idea to publication.

## Conclusion

Too much valuable research remains hidden in filing cabinets, institutional repositories, or unpublished project reports. By investing in scientific writing skills, seeking mentorship, and accessing structured publication support, researchers can ensure their work contributes to the global evidence base—informing policy, improving practice, and advancing global health outcomes.

---

**Ready to turn your research into a publication?** Explore the Writing Bridge in Global Health (WBGH) mentorship and publication support services.
    `,
  },
  {
    id: "2",
    slug: "why-implementation-science-matters",
    title: "Why Implementation Science Matters in Global Health",
    excerpt:
      "Implementation science helps bridge the gap between evidence and real-world practice. This article explains why it is essential for designing, adapting, scaling, and sustaining public health interventions.",
    category: "Implementation Science",
    author: "Dr. Habakkuk Yumo",
    date: "2026-05-15",
    readingTime: "7 min read",
    featuredImage: "/images/blog/implementation-science.jpg",
    tags: [
      "Implementation Science",
      "Global Health",
      "Evidence-Based Practice",
      "Health Systems",
    ],
    ctaType: "ths",
    content: `
# Why Implementation Science Matters in Global Health

Global health has achieved remarkable progress in generating evidence on what works to prevent disease, improve health outcomes, and strengthen health systems. Yet a persistent gap remains between what we know works and what is actually delivered in real-world settings—especially in low- and middle-income countries (LMICs).

Implementation science addresses this gap by focusing on **how** to translate evidence-based interventions into routine practice, **how** to adapt interventions to local contexts, and **how** to sustain improvements over time.

## What is Implementation Science?

Implementation science is the scientific study of methods to promote the systematic uptake of research findings and evidence-based practices into routine practice. It involves:

- Understanding **barriers and facilitators** to implementation
- Designing **strategies** to overcome barriers
- Testing **approaches** to improve adoption, fidelity, and sustainability
- Evaluating **outcomes** at multiple levels (patient, provider, system)

Unlike efficacy research (which asks "does it work?"), implementation science asks:

- **How can we make it work in this setting?**
- **What adaptations are needed?**
- **How do we scale it up?**
- **How do we sustain it over time?**

## Why Implementation Science is Critical for Global Health

### 1. Evidence Alone Does Not Change Practice

Numerous global health interventions have strong evidence of effectiveness—yet remain poorly implemented. Examples include:

- HIV viral load monitoring
- Tuberculosis contact tracing
- Maternal and newborn care packages
- Childhood immunization schedules

Implementation science helps identify **why** these interventions are not reaching target populations and **how** to address implementation barriers.

### 2. Context Matters

An intervention that works in one setting may fail in another due to differences in:

- Health system capacity
- Human resources
- Supply chain reliability
- Cultural norms
- Political will
- Financing mechanisms

Implementation science uses frameworks (like CFIR, RE-AIM, or PRECIS-2) to systematically assess context and guide adaptation.

### 3. Scale-Up Requires Strategy

Pilot projects often succeed under controlled conditions with dedicated resources. Scaling up requires:

- Integrating interventions into existing systems
- Training and supporting frontline workers
- Ensuring sustainable financing
- Monitoring fidelity and adaptation

Implementation science provides tools and methods to design scale-up strategies that maintain effectiveness while achieving reach.

### 4. Sustainability is Not Automatic

Many global health programs are donor-funded and time-limited. When funding ends, programs often collapse. Implementation science emphasizes:

- Building local capacity
- Strengthening routine systems
- Embedding interventions into national policies
- Ensuring political and financial sustainability

## Key Implementation Science Frameworks

Several frameworks guide implementation research and practice:

**CFIR (Consolidated Framework for Implementation Research)**: Identifies factors influencing implementation across five domains: intervention characteristics, outer setting, inner setting, individual characteristics, and process.

**RE-AIM (Reach, Effectiveness, Adoption, Implementation, Maintenance)**: Evaluates public health interventions across five dimensions to ensure both impact and sustainability.

**PRECIS-2**: Helps researchers design trials that are more pragmatic (real-world) or more explanatory (controlled), depending on the research question.

## Implementation Science in Practice

### HIV Treatment Scale-Up

Implementation science studies have informed strategies to:

- Differentiate HIV service delivery models
- Decentralize antiretroviral therapy (ART) to primary care
- Implement community-based ART distribution
- Integrate HIV services into maternal and child health platforms

### TB Case Finding

Implementation research has tested:

- Active case-finding strategies
- Digital adherence technologies
- Community-based contact tracing
- Integration of TB screening into routine care

### Health Systems Strengthening

Implementation science has guided efforts to:

- Improve supply chain management
- Strengthen health information systems
- Enhance quality improvement processes
- Build capacity for data-driven decision-making

## How THS Supports Implementation Science

Transatlantic Health Solutions (THS) brings over 15 years of implementation science experience to support governments, development partners, and health organizations in:

1. **Designing implementation research studies**: We help design operational research, hybrid effectiveness-implementation trials, and pragmatic studies.

2. **Conducting implementation evaluations**: We assess fidelity, adaptation, barriers, facilitators, and outcomes of program implementation.

3. **Developing scale-up strategies**: We work with stakeholders to design context-appropriate strategies for expanding proven interventions.

4. **Building local capacity**: We train researchers, program managers, and M&E staff in implementation science methods and frameworks.

5. **Translating findings into action**: We ensure research findings inform policy, practice, and program design.

## Conclusion

Implementation science is essential for closing the gap between evidence and practice. It provides the tools, frameworks, and methods needed to ensure that proven interventions reach the populations that need them most—and are sustained over time.

For global health to achieve its goals, we must move beyond asking "what works?" and invest in answering "how do we make it work here, at scale, sustainably?"

---

**Need technical support for your global health project?** Contact Transatlantic Health Solutions to discuss how we can support your implementation research, program evaluation, or scale-up strategy.
    `,
  },
  {
    id: "3",
    slug: "strengthening-health-systems-complex-environments",
    title: "Strengthening Health Systems in Complex Environments",
    excerpt:
      "Health systems strengthening requires more than technical solutions. It demands local adaptation, accountability, data-driven decision-making, and sustainable capacity building.",
    category: "Health Systems Strengthening",
    author: "Dr. Habakkuk Yumo",
    date: "2026-05-10",
    readingTime: "8 min read",
    featuredImage: "/images/blog/health-systems.jpg",
    tags: [
      "Health Systems",
      "Capacity Building",
      "Global Health",
      "Sustainability",
      "LMICs",
    ],
    ctaType: "ths",
    content: `
# Strengthening Health Systems in Complex Environments

Health systems in low- and middle-income countries (LMICs) face a unique set of challenges: limited resources, fragmented service delivery, weak governance structures, inadequate human resources, unreliable supply chains, and competing health priorities. In these complex environments, strengthening health systems requires more than technical solutions—it demands locally adapted, sustainable, and accountable approaches.

## What is Health Systems Strengthening?

Health systems strengthening (HSS) refers to efforts to improve the performance of health systems across the six core building blocks defined by the World Health Organization:

1. **Service Delivery**: Providing effective, safe, and quality health services
2. **Health Workforce**: Ensuring adequate, competent, and motivated health workers
3. **Health Information Systems**: Generating, analyzing, and using health data for decision-making
4. **Medical Products and Technologies**: Ensuring equitable access to essential medicines and technologies
5. **Health Financing**: Raising adequate funds and ensuring financial protection for populations
6. **Leadership and Governance**: Ensuring strategic policy frameworks, oversight, and accountability

Strengthening these building blocks in isolation is insufficient. Effective HSS requires understanding interdependencies, addressing systemic weaknesses, and ensuring sustainability.

## Why Health Systems Strengthening is Critical

### 1. Disease-Specific Programs are Not Enough

Vertical disease programs (HIV, TB, malaria) have achieved significant impact. However, without strong underlying health systems, these programs face challenges:

- Fragmented service delivery
- Overburdened health workers
- Weak supply chains
- Limited integration with routine care
- Difficulty sustaining gains when donor funding ends

HSS provides the foundation needed for both disease-specific programs and broader population health improvements.

### 2. Universal Health Coverage Requires Strong Systems

Countries committed to achieving Universal Health Coverage (UHC) must strengthen their health systems to:

- Expand access to quality services
- Reduce financial barriers to care
- Ensure equity across populations
- Improve efficiency and value for money

### 3. Health Security Depends on Resilient Systems

The COVID-19 pandemic highlighted the critical importance of resilient health systems capable of:

- Detecting and responding to outbreaks
- Maintaining essential services during emergencies
- Protecting health workers
- Adapting to new challenges

## Key Principles for Health Systems Strengthening in Complex Environments

### 1. Context Matters

Health systems are shaped by:

- Political economy
- Cultural norms
- Historical legacies
- Resource availability
- Geographic factors

Effective HSS begins with **contextual analysis**—understanding local realities, constraints, opportunities, and stakeholder dynamics.

### 2. Local Ownership is Essential

Externally driven reforms often fail when donor funding ends. Sustainable HSS requires:

- Government leadership and commitment
- Engagement of local stakeholders
- Alignment with national priorities
- Building local capacity rather than dependence on external expertise

### 3. Data Should Drive Decisions

Health systems cannot improve without reliable data. Strengthening health information systems involves:

- Improving data collection, quality, and timeliness
- Building capacity for data analysis and use
- Creating feedback loops from data to decision-making
- Using data to identify gaps, track progress, and inform resource allocation

### 4. Integration and Coordination Are Critical

In complex environments, multiple actors operate within the health system—government, donors, NGOs, private sector, faith-based organizations. Effective HSS requires:

- Coordination mechanisms
- Alignment around shared goals
- Reducing duplication and fragmentation
- Harmonizing approaches

### 5. Sustainability Must Be Built In

HSS efforts must prioritize sustainability from the outset:

- Embedding interventions into routine systems
- Ensuring domestic financing
- Building local capacity
- Creating enabling policy environments

## Practical Strategies for Health Systems Strengthening

### 1. Strengthen Primary Health Care

Primary health care (PHC) is the foundation of effective, equitable health systems. Strengthening PHC involves:

- Expanding access to basic health services
- Training and supporting community health workers
- Integrating services (e.g., HIV, TB, maternal health)
- Ensuring availability of essential medicines and equipment

### 2. Invest in Human Resources for Health

Health workers are the backbone of health systems. Strategies include:

- Training programs tailored to local needs
- Retention strategies (fair compensation, career development, supportive supervision)
- Task-shifting and task-sharing to optimize workforce deployment
- Addressing geographic maldistribution

### 3. Improve Supply Chain Management

Reliable supply chains are essential for service delivery. Improvements include:

- Forecasting and quantification of commodities
- Strengthening procurement and distribution systems
- Implementing inventory management systems
- Addressing last-mile delivery challenges

### 4. Enhance Health Information Systems

Strong HIS enable evidence-based decision-making:

- Implementing electronic medical records and HMIS platforms
- Training health workers in data collection and reporting
- Building capacity for data analysis and interpretation
- Creating dashboards and feedback mechanisms

### 5. Strengthen Governance and Accountability

Effective governance ensures resources are used appropriately:

- Transparent budgeting and financial management
- Accountability mechanisms (audits, performance reviews)
- Engaging communities in governance and oversight
- Addressing corruption and inefficiency

## How THS Supports Health Systems Strengthening

Transatlantic Health Solutions (THS) has over 15 years of experience supporting governments, development partners, and health organizations in strengthening health systems across Africa and globally. Our services include:

### 1. Health System Assessments

We conduct comprehensive assessments of health system performance, identifying strengths, weaknesses, bottlenecks, and opportunities for improvement.

### 2. Strategic Planning and Policy Development

We work with Ministries of Health and development partners to design health sector strategies, policies, and operational plans aligned with national priorities.

### 3. Monitoring, Evaluation, and Learning (MEL)

We design and implement MEL frameworks to track health system performance, identify gaps, and inform continuous improvement.

### 4. Capacity Building

We build local capacity in health systems management, data analysis, quality improvement, and evidence-based decision-making.

### 5. Technical Assistance for Program Implementation

We provide hands-on support to implement health system strengthening interventions, ensuring fidelity, adaptation, and sustainability.

## Conclusion

Strengthening health systems in complex environments is challenging—but essential. It requires moving beyond quick fixes and short-term programs toward long-term investments in systems, people, data, and governance.

By prioritizing local ownership, using data to drive decisions, building sustainable capacity, and ensuring accountability, health systems can become more resilient, equitable, and effective—capable of delivering quality health services to all populations.

---

**Need technical support for your global health project?** Contact Transatlantic Health Solutions to discuss how we can support your health systems strengthening efforts.
    `,
  },
  {
    id: "4",
    slug: "ai-in-global-health-opportunities-responsibilities",
    title:
      "Artificial Intelligence in Global Health: Opportunities and Responsibilities",
    excerpt:
      "AI is creating new opportunities for public health research, service delivery, surveillance, and decision-making. This article highlights key opportunities and ethical considerations for responsible adoption.",
    category: "Digital Health & AI",
    author: "Dr. Habakkuk Yumo",
    date: "2026-05-05",
    readingTime: "9 min read",
    featuredImage: "/images/blog/ai-global-health.jpg",
    tags: [
      "Artificial Intelligence",
      "Digital Health",
      "Innovation",
      "Ethics",
      "Global Health",
    ],
    ctaType: "ths",
    content: `
# Artificial Intelligence in Global Health: Opportunities and Responsibilities

Artificial Intelligence (AI) is transforming global health—from disease surveillance and diagnostics to treatment optimization and health systems management. AI-powered tools are improving accuracy, efficiency, and access to health services, particularly in resource-limited settings where shortages of trained health workers and diagnostic equipment are most acute.

Yet AI adoption in global health also raises critical ethical, equity, and governance questions. As AI tools become more prevalent, ensuring responsible, equitable, and context-appropriate implementation is essential.

## What is AI in Global Health?

AI refers to computer systems capable of performing tasks that typically require human intelligence—such as pattern recognition, prediction, decision-making, and natural language processing.

In global health, AI applications include:

- **Diagnostics**: Image analysis for tuberculosis, malaria, or cancer detection
- **Disease Surveillance**: Predicting outbreak patterns using real-time data
- **Treatment Optimization**: Personalizing treatment regimens based on patient data
- **Health System Management**: Optimizing supply chains, staffing, or resource allocation
- **Research**: Accelerating drug discovery or analyzing large datasets

## Key Opportunities for AI in Global Health

### 1. Improving Diagnostics in Resource-Limited Settings

AI-powered diagnostic tools can:

- Analyze chest X-rays for tuberculosis with accuracy comparable to expert radiologists
- Detect malaria parasites in blood smears
- Identify diabetic retinopathy from retinal images
- Screen for cervical cancer using smartphone-based imaging

These tools are particularly valuable in settings with limited access to specialist physicians or laboratory infrastructure.

### 2. Enhancing Disease Surveillance and Outbreak Response

AI can analyze data from multiple sources—social media, search queries, syndromic surveillance, climate data—to:

- Detect early signals of disease outbreaks
- Predict geographic spread of infectious diseases
- Identify high-risk populations
- Inform targeted public health responses

During the COVID-19 pandemic, AI tools helped forecast case trends, optimize resource allocation, and identify vaccine misinformation.

### 3. Optimizing Treatment and Care Delivery

AI can support clinical decision-making by:

- Recommending treatment regimens based on patient characteristics
- Predicting treatment adherence or risk of loss to follow-up
- Identifying patients at high risk for adverse outcomes
- Supporting triage and prioritization in overburdened health facilities

### 4. Strengthening Health Systems

AI can improve health system efficiency by:

- Forecasting commodity needs and optimizing supply chains
- Predicting staffing requirements based on patient volume
- Identifying inefficiencies in service delivery
- Automating routine administrative tasks to free up health worker time

### 5. Accelerating Research and Evidence Generation

AI is transforming public health research by:

- Analyzing large datasets (e.g., electronic health records, genomic data)
- Identifying patterns and associations in complex data
- Accelerating systematic reviews and evidence synthesis
- Supporting natural language processing of scientific literature

## Ethical and Equity Considerations

While AI offers tremendous potential, its adoption in global health must be guided by principles of equity, transparency, accountability, and respect for human rights.

### 1. Data Privacy and Security

AI systems require large volumes of data—often sensitive health information. Ensuring:

- Patient consent and data protection
- Secure data storage and transmission
- Compliance with data privacy regulations (e.g., GDPR)

is essential, particularly in settings with weak data governance frameworks.

### 2. Bias and Fairness

AI systems trained on biased or non-representative data can perpetuate or amplify health inequities. For example:

- Diagnostic algorithms trained predominantly on data from high-income countries may perform poorly in LMIC populations
- Predictive models may reflect historical biases in healthcare access or treatment

Ensuring fairness requires:

- Diverse, representative training datasets
- Regular auditing for bias
- Transparency in algorithm development

### 3. Accountability and Transparency

When AI systems inform clinical or policy decisions, accountability is critical:

- Who is responsible when an AI tool makes an incorrect recommendation?
- How transparent are AI algorithms in their decision-making processes?
- Can clinicians and patients understand and trust AI recommendations?

Explainable AI (XAI) approaches aim to make AI decision-making more interpretable and trustworthy.

### 4. Equity and Access

AI tools must not widen existing health inequities. Ensuring equitable access requires:

- Affordable, locally adapted AI solutions
- Strengthening digital infrastructure (internet connectivity, electricity)
- Building local capacity to deploy and maintain AI systems
- Avoiding over-reliance on externally developed tools that may not fit local contexts

### 5. Human-Centered Design

AI should augment—not replace—human judgment and care. Ensuring:

- Health workers are trained to use AI tools effectively
- AI supports clinical decision-making without undermining professional autonomy
- Patients remain at the center of care

## Principles for Responsible AI Adoption in Global Health

### 1. Prioritize Local Needs and Context

AI solutions should address locally defined health priorities and be adapted to local contexts, rather than imposed from external actors.

### 2. Ensure Transparency and Explainability

AI algorithms should be transparent, with clear documentation of:

- Data sources and training processes
- Performance metrics
- Limitations and potential biases

### 3. Involve Stakeholders Throughout Development

Engage health workers, patients, policymakers, and communities in:

- Identifying use cases
- Co-designing solutions
- Testing and validating tools
- Interpreting findings

### 4. Build Local Capacity

Invest in training local data scientists, health informaticians, and health system managers to develop, deploy, and maintain AI tools.

### 5. Monitor and Evaluate Impact

Continuously assess AI tools for:

- Clinical effectiveness
- Equity of access and outcomes
- Unintended consequences
- User satisfaction

### 6. Establish Governance Frameworks

Develop policies and regulations to:

- Ensure data privacy and security
- Set standards for AI validation and approval
- Define accountability structures
- Address ethical concerns

## The Path Forward

AI has enormous potential to improve global health outcomes—but only if deployed responsibly, equitably, and transparently. The global health community must:

- Invest in digital infrastructure and capacity building
- Prioritize equity and fairness in AI development
- Establish governance frameworks that balance innovation with protection
- Ensure AI complements—rather than replaces—human expertise and compassion

By doing so, we can harness AI to strengthen health systems, improve care delivery, and advance health equity worldwide.

---

**Need technical support for your global health project?** Contact Transatlantic Health Solutions to discuss how we can support your digital health, AI adoption, or health systems strengthening efforts.
    `,
  },
];

// Helper function to get all categories
export function getAllCategories(): BlogCategory[] {
  return [
    "Global Health",
    "Health Systems Strengthening",
    "Implementation Science",
    "Monitoring & Evaluation",
    "Digital Health & AI",
    "Global Fund & Development Financing",
    "Research & Publication",
    "WBGH",
  ];
}

// Helper function to get posts by category
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

// Helper function to get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

// Helper function to get featured post
export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured);
}

// Helper function to get related posts
export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        (post.category === currentPost.category ||
          post.tags.some((tag) => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}
