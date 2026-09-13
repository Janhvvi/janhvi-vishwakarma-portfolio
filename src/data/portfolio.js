export const personal = {
  name: "Janhvi Vishwakarma",
  title: "Software Engineer",
  subtitle: "ETL Pipelines · REST APIs · BI Data Workflows",
  // tagline: "Software Engineer with 3+ years of experience building ETL pipelines, REST APIs, and BI-ready data workflows.",
  summary:
    "Software Engineer with 3+ years of experience building ETL pipelines, REST APIs, and BI-ready data workflows using Python, SQL, Django, and cloud-native tools. Experienced in translating business requirements and user stories into technical designs, performing data validation/quality checks, and supporting Fortune 500-scale reporting pipelines. Strong SQL and data engineering background with exposure to Oracle Cloud data management.",
  email: "janhvivish10@gmail.com",
  phone: "+91 8827409484",
  location: "India",
  github: "https://github.com/Janhvvi",
  linkedin: "https://www.linkedin.com/in/janhvi-vishwakarma-b59032239/",
  leetcode: "https://leetcode.com/u/Janhvvvi/",
  resume: "#",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "leetcode", label: "LeetCode" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    `I'm a Software Engineer with 3+ years of experience specializing in building production ETL pipelines, secure REST APIs, and BI-ready data workflows using <span style="color: var(--accent);">Python, SQL, Django</span>, and cloud-native tools.`,
    `At <span style="color: var(--accent);">i-Connectresources</span>, I architect enterprise backend services using Django & DRF, delivering secure APIs, RBAC authentication, rate limiting, and audit/security logging. I also monitor and validate daily data ingestion pipelines for a <span style="color: var(--accent);">Fortune 500 client</span>, building SQL data quality checks that maintain reporting accuracy across enterprise datasets.`,
    `In data engineering, I design and schedule automated workflows using <span style="color: var(--accent);">Apache Airflow</span> and <span style="color: var(--accent);">Snowflake</span>, turning complex business rules into reliable ETL transformation logic. I also serve as a technical point of contact during client engagements, leading architecture discussions and technical product demonstrations.`,
    `I hold certifications in <span style="color: var(--accent);">ServiceNow</span> (System Admin & Admin Developer) and <span style="color: var(--accent);">Oracle Cloud Data Management</span>, and actively integrate LLMs (<span style="color: var(--accent);">OpenAI API, Claude, Hugging Face</span>) into data platforms.`,
  ],
  currentStack: [
    "Python",
    "SQL",
    "Django REST Framework",
    "Apache Airflow",
    "Snowflake",
    "Docker",
    "Kubernetes",
    "AWS",
    "ServiceNow",
    "PostgreSQL",
    "OpenAI API",
  ],
};

export const experience = [
  {
    company: "i-Connectresources",
    role: "Software Engineer",
    period: "Feb 2024 — Present",
    location: "India",
    url: "#",
    categories: [
      {
        title: "Enterprise Backend Platform",
        points: [
          "Architected scalable backend services using Python, Django, and DRF, delivering secure REST APIs for enterprise applications including real-time dashboards and interactive graphs via Plotly.",
          "Engineered authentication systems, RBAC, rate limiting, and audit/security logging, strengthening platform security and access control across multiple enterprise modules.",
        ],
      },
      {
        title: "Client Engagement (Fortune 500)",
        points: [
          "Monitored and validated daily data ingestion pipelines for a Fortune 500 client, identifying anomalies, ensuring data integrity across enterprise datasets, and flagging discrepancies to maintain downstream reporting accuracy.",
          "Built SQL-based data quality checks and automated validation workflows across ETL pipelines to streamline daily data flow monitoring, reducing manual verification effort and improving reliability of BI reporting outputs.",
        ],
      },
      {
        title: "Technical Pre-Sales & Stakeholder Management",
        points: [
          "Served as technical point of contact during client engagements, gathering requirements and translating user stories into technical solution proposals.",
          "Led architecture discussions and delivered end-to-end technical product demonstrations (solution architecture walkthroughs, API capabilities, backend workflows) for prospective enterprise clients.",
          "Reviewed and analyzed RFPs/RFIs to design technically viable solution proposals.",
        ],
      },
    ],
    tech: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "ServiceNow",
      "Plotly",
      "SQL",
    ],
  },
  {
    company: "Techment Technology",
    role: "Data Engineer Intern",
    period: "Jul 2023 — Dec 2023",
    location: "India",
    url: "#",
    categories: [
      {
        title: "Data Engineering & Pipeline Automation",
        points: [
          "Developed a Python-based Data Cleaning Tool for automated dataset preprocessing, handling deduplication, null resolution, and data enrichment at scale.",
          "Built and deployed RESTful API endpoints using Django to support ETL operations and automated data ingestion workflows.",
          "Designed and scheduled data pipelines using Snowflake and Apache Airflow, translating business rules into ETL transformation logic and improving processing reliability.",
        ],
      },
    ],
    tech: ["Python", "Apache Airflow", "Snowflake", "Django", "SQL", "ETL", "Pandas", "NumPy"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Settl - AI-Powered Visual ETL Platform",
    description:
      "A low-code visual ETL platform built for automated data ingestion, profiling, cleaning, transformation, enrichment, data quality validation, and visual pipeline orchestration.",
    features: [
      "Low-code visual data pipeline orchestration and workflow management",
      "Automated data ingestion, profiling, and rule-based data quality validation",
      "Transformation, deduplication, null handling, and dataset enrichment at scale",
      "Interactive data engineering dashboard with React frontend and Django backend",
    ],
    tech: ["Django REST Framework", "React", "PostgreSQL", "Pandas", "NumPy", "Python"],
    github: "https://github.com/Janhvvi",
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: "Recipe REST API",
    description:
      "A production-ready REST API built with Django REST Framework featuring JWT authentication, advanced filtering, PostgreSQL backend, containerized with Docker and automated via CI/CD pipeline.",
    features: [
      "JWT token authentication and secure user management",
      "Advanced filtering by ingredients, tags, and custom criteria",
      "Media and image upload handling with persistent storage",
      "Full test suite, Docker containerization, and automated CI/CD pipeline",
    ],
    tech: ["Python", "Django REST Framework", "PostgreSQL", "Docker", "CI/CD", "JWT"],
    github: "https://github.com/Janhvvi",
    live: null,
    featured: true,
  },
];

export const skills = [
  {
    category: "Languages",
    icon: "code",
    items: ["SQL", "Python", "C++", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Frameworks & Backend",
    icon: "server",
    items: ["Django", "Django REST Framework (DRF)", "REST APIs", "Plotly", "RBAC Auth"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Oracle Data Cloud Management"],
  },
  {
    category: "Data Engineering",
    icon: "workflow",
    items: ["Pandas", "NumPy", "Apache Airflow", "Snowflake", "ETL Development", "Data Mapping"],
  },
  {
    category: "Dev Tools & Cloud",
    icon: "cloud",
    items: ["Docker", "Jenkins", "GitHub", "CI/CD", "AWS", "Kubernetes"],
  },
  {
    category: "Enterprise & AI",
    icon: "sparkles",
    items: ["ServiceNow", "OpenAI API", "Claude", "Hugging Face"],
  },
];

export const education = [
  {
    degree: "B.Tech – Computer Science (IoT)",
    institution: "Shri Shankaracharya Technical Campus",
    period: "Aug 2020 – July 2024",
    aggregate: "Aggregate: 82%",
    description: "Solid foundation in computer science, system architecture, IoT, database management, and data structures.",
  },
];

export const certifications = [
  {
    title: "ServiceNow Certified System ADMIN",
    issuer: "ServiceNow",
    date: "Certified",
    icon: "🏅",
    description:
      "Validates expertise in core ServiceNow platform administration, user management, security configuration, and platform maintenance.",
    url: "https://www.linkedin.com/in/janhvi-vishwakarma-b59032239/details/certifications/",
  },
  {
    title: "ServiceNow Certified Admin Developer",
    issuer: "ServiceNow",
    date: "Certified",
    icon: "🏆",
    description:
      "Demonstrates advanced capability to design, build, and deploy custom enterprise applications on ServiceNow using Glide APIs and Flow Designer.",
    url: "https://www.linkedin.com/in/janhvi-vishwakarma-b59032239/details/certifications/",
  },
  {
    title: "Oracle Cloud Data Management",
    issuer: "Oracle",
    date: "Certified",
    icon: "☁️",
    description:
      "Covers Oracle Cloud database architecture, autonomous databases, and enterprise cloud data management best practices.",
    url: "https://www.linkedin.com/in/janhvi-vishwakarma-b59032239/details/certifications/",
  },
];

export const leetcode = {
  profile: "https://leetcode.com/u/Janhvvvi/",
  totalSolved: 308,
  easy: 162,
  medium: 120,
  hard: 26,
  ranking: "483,699",
  stats: [
    { label: "Total Solved", value: "308", color: "#38bdf8" },
    { label: "Easy", value: "162", color: "#22c55e" },
    { label: "Medium", value: "120", color: "#f59e0b" },
    { label: "Hard", value: "26", color: "#ef4444" },
  ],
  message:
    "Consistent problem-solving across core Data Structures, Dynamic Programming, and SQL optimization — sharpening analytical instincts for enterprise backend engineering.",
};
