export const personal = {
  name: "Janhvi Vishwakarma",
  title: "Software Engineer",
  subtitle: "Python · Django · Data Engineering · AI",
  tagline: "I build scalable systems, enterprise APIs, and AI-powered backends.",
  intro: `Backend-focused Full Stack Developer with 3+ years of experience designing and deploying
    secure REST APIs, data pipelines, and enterprise platforms using Python, Django, MySQL, and Docker.
    Proven track record across client-facing platforms, data engineering, and cloud-based CI/CD workflows.`,
  email: "janhvivish10@gmail.com",
  phone: "+91 8827409484",
  location: "India",
  github: "https://github.com/janhvi",
  linkedin: "https://www.linkedin.com/in/janhvi-vishwakarma-b59032239/",
  leetcode: "https://leetcode.com/u/Janhvvvi/",
  resume: "#",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "blog", label: "Writing" },
  { id: "certifications", label: "Certifications" },
  { id: "leetcode", label: "LeetCode" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    `I'm a backend-focused full stack developer who thrives at the intersection of clean engineering
    and real-world impact. My journey started with a Computer Science (IoT) degree, which gave me a
    strong systems foundation before I dove deep into Python and Django building enterprise-grade APIs.`,
    `At <span class="text-green">i-Connectresources</span>, I architect scalable backend services,
    secure REST APIs, and RBAC authentication systems. I've delivered real-time dashboards using
    Plotly, built audit/security logging infrastructure, and monitored data ingestion pipelines
    for <span class="text-green">Henry Schein</span>, a Fortune 500 enterprise client.`,
    `I'm equally comfortable in the data engineering space — working with <span class="text-green">Snowflake</span>,
    <span class="text-green">Apache Airflow</span>, and building ETL tools that automate complex data workflows.
    I also lead technical pre-sales demonstrations, translating complex backend architecture into
    clear business value for prospective clients.`,
    `More recently I've been integrating <span class="text-green">OpenAI</span> and <span class="text-green">Claude APIs</span>
    into production applications. Outside work, I solve problems on LeetCode and am always
    looking for the next interesting system design challenge.`,
  ],
  currentStack: ["Python", "Django REST Framework", "Docker", "AWS", "Redis", "Snowflake"],
};

export const experience = [
  {
    company: "i-Connectresources",
    role: "Software Engineer",
    period: "Feb 2024 — Present",
    location: "India",
    url: "#",
    highlights: [
      "Architected scalable backend services using Python, Django, and DRF, delivering secure REST APIs for enterprise applications including real-time dashboards and interactive graphs via Plotly.",
      "Engineered authentication systems, RBAC, rate limiting, and audit/security logging, strengthening platform security and access control across multiple enterprise modules.",
      "Monitored and validated daily data ingestion pipelines for Henry Schein (Fortune 500), identifying anomalies and ensuring data integrity across enterprise datasets.",
      "Built SQL-based data quality checks and automated validation workflows, reducing manual verification effort and improving reliability of business intelligence outputs.",
      "Led end-to-end technical demonstrations of enterprise products for prospective clients — covering architecture walkthroughs, live demos, and Q&A sessions.",
      "Managed stakeholder communication across technical and non-technical audiences, translating backend solutions into clear business value propositions.",
    ],
    tech: ["Python", "Django", "DRF", "MySQL", "Redis", "Docker", "ServiceNow", "Plotly"],
  },
  {
    company: "Techment Technology",
    role: "Data Engineer Intern",
    period: "July 2023 — Dec 2023",
    location: "India",
    url: "#",
    highlights: [
      "Contributed to an automated Data Cleaning Tool that preprocessed large enterprise datasets — handling deduplication, null value handling, and enrichment.",
      "Built Django API endpoints to support ETL operations, enabling smooth data ingestion from multiple heterogeneous sources.",
      "Designed and scheduled data pipeline tasks using Apache Airflow, ensuring reliable, monitored execution of complex workflow DAGs.",
      "Integrated Snowflake as the primary data warehouse, optimizing query performance and storage for large-scale analytics workloads.",
    ],
    tech: ["Python", "Apache Airflow", "Snowflake", "Django", "SQL", "ETL"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Dynamic ETL Tool",
    emoji: "⚙️",
    description:
      "A Python and Tkinter-based ETL pipeline for automated data ingestion, deduplication, null handling, and enrichment — significantly reducing manual data processing effort.",
    longDescription:
      "Engineered a full-featured ETL pipeline tool that allows business analysts to upload CSVs, configure cleaning rules (deduplication, null handling, type coercion), and export enriched datasets — all through a simple desktop interface.",
    features: [
      "Automated deduplication and null-value handling",
      "Configurable data transformation rules",
      "Dataset enrichment from external sources",
      "Progress tracking and error reporting",
      "Export to multiple formats (CSV, Excel)",
    ],
    tech: ["Python", "Tkinter", "Pandas", "NumPy", "SQLite"],
    github: "#",
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: "Recipe REST API",
    emoji: "🍳",
    description:
      "A production-ready REST API built with Django REST Framework, featuring JWT authentication, advanced filtering, PostgreSQL backend, and fully Dockerized CI/CD pipeline.",
    longDescription:
      "Built a comprehensive recipe management API following best practices for production Django development. Includes token-based auth, image upload support, filtering by ingredients/tags, and automated test coverage with GitHub Actions CI.",
    features: [
      "JWT authentication and user management",
      "Advanced filtering by ingredients, tags, and ratings",
      "Image upload with media file handling",
      "Full test suite with pytest",
      "Docker Compose for local and production environments",
      "GitHub Actions CI/CD pipeline",
    ],
    tech: ["Python", "Django", "DRF", "PostgreSQL", "Docker", "GitHub Actions", "JWT"],
    github: "#",
    live: null,
    featured: true,
  },
];

export const skills = [
  {
    category: "Languages",
    icon: "code",
    items: ["Python", "SQL", "JavaScript", "C++", "HTML/CSS"],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["Django", "Django REST Framework", "REST APIs", "JWT Auth", "RBAC", "Rate Limiting"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Snowflake"],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    items: ["Docker", "AWS", "Jenkins", "GitHub Actions", "CI/CD", "Linux"],
  },
  {
    category: "Data Engineering",
    icon: "workflow",
    items: ["Apache Airflow", "Snowflake", "ETL Pipelines", "Pandas", "NumPy"],
  },
  {
    category: "Enterprise & AI",
    icon: "sparkles",
    items: ["ServiceNow", "OpenAI API", "Claude API", "Hugging Face", "Plotly"],
  },
];

export const blogs = [
  {
    title: "Building Secure REST APIs with Django: RBAC, Rate Limiting & Audit Logging",
    description:
      "A deep dive into the security patterns I use in production Django APIs — from role-based access control to comprehensive audit trails.",
    date: "Coming Soon",
    readTime: "8 min read",
    tags: ["Django", "Security", "Backend"],
    url: "#",
    featured: true,
  },
  {
    title: "ETL Pipelines with Apache Airflow and Snowflake — A Practical Guide",
    description:
      "How I designed and scheduled production-grade ETL workflows using Airflow DAGs and Snowflake as the target data warehouse.",
    date: "Coming Soon",
    readTime: "6 min read",
    tags: ["Airflow", "Snowflake", "Data Engineering"],
    url: "#",
    featured: false,
  },
  {
    title: "My ServiceNow Journey — From Zero to Certified Admin",
    description:
      "Lessons from getting certified and building production apps on the ServiceNow platform, including the LMS I built from scratch.",
    date: "Coming Soon",
    readTime: "5 min read",
    tags: ["ServiceNow", "Certification", "Enterprise"],
    url: "#",
    featured: false,
  },
  {
    title: "Integrating OpenAI and Claude APIs into Django Applications",
    description:
      "Practical patterns for adding LLM capabilities to existing Django backends — from API wrappers to streaming responses.",
    date: "Coming Soon",
    readTime: "7 min read",
    tags: ["AI", "Django", "OpenAI"],
    url: "#",
    featured: false,
  },
  {
    title: "Docker for Django Developers — The Complete Workflow",
    description:
      "From local development to production deployments: how I containerize Django apps with Docker Compose and automate CI/CD.",
    date: "Coming Soon",
    readTime: "6 min read",
    tags: ["Docker", "Django", "DevOps"],
    url: "#",
    featured: false,
  },
  {
    title: "My LeetCode Journey — Solving SQL & DSA Consistently",
    description:
      "Why I started daily LeetCode practice, the patterns I've noticed, and how it's made me a better backend engineer.",
    date: "Coming Soon",
    readTime: "4 min read",
    tags: ["LeetCode", "DSA", "SQL"],
    url: "#",
    featured: false,
  },
];

export const certifications = [
  {
    title: "ServiceNow Certified System Administrator",
    issuer: "ServiceNow",
    date: "2024",
    icon: "🏅",
    color: "#81b4fe",
    description:
      "Validates expertise in core ServiceNow administration — including configuration, user management, and platform maintenance.",
    url: "#",
  },
  {
    title: "ServiceNow Certified Admin Developer",
    issuer: "ServiceNow",
    date: "2024",
    icon: "🏆",
    color: "#64ffda",
    description:
      "Demonstrates ability to design, build, and deploy custom applications on the ServiceNow platform using Glide APIs and Flow Designer.",
    url: "#",
  },
  {
    title: "Oracle Cloud Data Management",
    issuer: "Oracle",
    date: "2024",
    icon: "☁️",
    color: "#f97316",
    description:
      "Covers Oracle Cloud database services, autonomous databases, and cloud data management best practices.",
    url: "#",
  },
];

export const leetcode = {
  profile: "https://leetcode.com/u/Janhvvvi/",
  stats: [
    { label: "Problems Solved", value: "150+", color: "#64ffda" },
    { label: "SQL Problems", value: "50+", color: "#81b4fe" },
    { label: "Current Streak", value: "Active", color: "#ffd700" },
    { label: "Acceptance Rate", value: "~70%", color: "#f97316" },
  ],
  message:
    "Consistent daily practice focused on SQL, data structures, and algorithms — sharpening the problem-solving instincts that make for better backend engineering.",
};
