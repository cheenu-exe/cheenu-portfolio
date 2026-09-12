export type Project = {
  id: string;
  name: string;
  accent: string;
  short: string;
  description: string;
  tags: string[];
  github?: string;
  architecture: string[];
  results?: string[];
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    id: "forge-ide",
    name: "FORGE IDE",
    accent: "#10b981",
    short:
      "A full-stack online coding workspace designed for a focused competitive programming experience, with a modern code editor and support for compiling and executing programs.",
    description:
      "The platform uses a Next.js frontend with Monaco Editor and a FastAPI backend for code execution. It supports local and Docker-based execution with runtime detection and configurable execution limits.",
    tags: ["Next.js", "React", "TypeScript", "Monaco Editor", "Tailwind CSS", "FastAPI", "Python", "Docker", "PostgreSQL"],
    architecture: [
      "Next.js frontend with Monaco Editor",
      "FastAPI backend for code execution",
      "Docker-based runtime execution with limits",
      "Runtime detection and sandboxing",
    ],
    results: [
      "Full-stack coding workspace ready for competitive programming",
    ],
    github: "https://github.com/cheenu-exe/forge-ide",
  },
  {
    id: "sentinel",
    name: "SENTINEL",
    accent: "#f97316",
    short:
      "A personal cybersecurity playground for experimenting with vulnerable applications, networking, reconnaissance, and security monitoring.",
    description:
      "The environment uses vulnerable applications and isolated systems to practice real-world security workflows.",
    focus: "Web Security · Networking · Reconnaissance · Security Monitoring",
    tags: ["Web Security", "Networking", "Reconnaissance", "Security Monitoring"],
    architecture: [
      "Vulnerable applications for testing",
      "Isolated networking environments",
      "Security monitoring tools integration",
    ],
    results: [
      "Security practice environment established",
    ],
    github: "https://github.com/cheenu-exe/sentinel",
  },
  {
    id: "ecdats",
    name: "ECDAT",
    accent: "#3b82f6",
    short:
      "A cybersecurity platform focused on assessing and managing cryptographic readiness, with dashboards and tools for inventory, remediation, migration planning, attack simulation, and post-quantum cryptography recommendations.",
    description:
      "The platform includes an interactive command center, asset inventory, remediation workflows, migration simulation, readiness assessment, PQC recommendations, and an AI-assisted interface.",
    focus: "Cybersecurity · Cryptographic Readiness · Post-Quantum Security · Risk & Remediation",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "tRPC", "MySQL", "Drizzle ORM", "Post-Quantum Cryptography"],
    architecture: [
      "Interactive command center dashboard",
      "Asset inventory management",
      "Remediation workflow engine",
      "Migration simulation and PQC recommendations",
      "AI-assisted security interface",
    ],
    results: [
      "Cryptographic readiness assessment platform deployed",
    ],
    github: "https://github.com/cheenu-exe/ecdats",
  },
  {
    id: "ai-bias-detector",
    name: "AI BIAS DETECTOR",
    accent: "#8b5cf6",
    short:
      "A project focused on analyzing AI outputs and identifying potential bias patterns in AI-generated results.",
    description:
      "Analyzes AI-generated results for bias patterns and provides insights into potential issues.",
    tags: ["Python", "AI"],
    architecture: [
      "AI output analysis pipeline",
      "Bias detection algorithms",
      "Pattern recognition and reporting",
    ],
    results: [
      "Bias analysis tool for AI outputs",
    ],
    github: "https://github.com/cheenu-exe/ai-bias-detector",
  },
  {
    id: "vulnerability-scanner-dashboard",
    name: "VULNERABILITY SCANNER DASHBOARD",
    accent: "#ec4899",
    short:
      "A web-based security dashboard for experimenting with automated reconnaissance and vulnerability scanning.",
    description:
      "Web-based dashboard for automated reconnaissance and vulnerability scanning using Nmap and other tools.",
    tags: ["Flask", "Python", "SQLite", "Nmap"],
    architecture: [
      "Flask web application",
      "Nmap integration for scanning",
      "SQLite database for results storage",
      "Automated reconnaissance workflows",
    ],
    results: [
      "Vulnerability scanning dashboard deployed",
    ],
    github: "https://github.com/cheenu-exe/vulnerability-scanner-dashboard",
  },
  {
    id: "mysti-ai",
    name: "MYSTI AI",
    accent: "#06b6d4",
    short:
      "A personal AI assistant project exploring the use of AI APIs within a custom application.",
    description:
      "Exploring the use of AI APIs within a custom application for personal assistance.",
    tags: ["Python", "Google Gemini API"],
    architecture: [
      "Python-based AI assistant",
      "Google Gemini API integration",
      "Custom application wrapper",
    ],
    results: [
      "Personal AI assistant with API integration",
    ],
    github: "https://github.com/cheenu-exe/mysti-ai",
  },
];

export type Experience = {
  id: string;
  range: string;
  org: string;
  role: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "infynd",
    range: "2024-06 → Present",
    org: "Infynd",
    role: "AI Engineering Intern",
    bullets: [
      "Building production AI pipelines and agentic systems at an AI-first B2B startup.",
      "Owning extraction, orchestration, and evaluation layers for live data workflows.",
    ],
  },
  {
    id: "gfg",
    range: "2025-06 → 2026-03",
    org: "GeeksforGeeks KAHE",
    role: "Technical Head",
    bullets: [
      "Conducted hands-on workshops on Python and Data Science.",
      "Led and organized a 2-day intra-college hackathon.",
      "Mentored students on projects and technology career paths.",
    ],
  },
  {
    id: "stepping-edge",
    range: "2024-06 → 2024-12",
    org: "Stepping Edge",
    role: "AI Intern",
    bullets: [
      "Built web scraping pipelines for structured data extraction and knowledge-graph organization.",
      "Implemented website summarization workflows using LangChain.",
    ],
  },
  {
    id: "ctf-practice",
    range: "2025-01 → Present",
    org: "Personal CTF Practice",
    role: "Security Researcher",
    bullets: [
      "Practicing Web Exploitation, Cryptography, and Forensics challenges.",
      "Participating in online CTFs and security competitions.",
    ],
  },
];

export type Education = {
  id: string;
  range: string;
  institution: string;
  degree: string;
  bullets: string[];
};

export const education: Education[] = [
  {
    id: "kahe",
    range: "2023 → 2027",
    institution: "Karpagam Academy of Higher Education",
    degree: "B.Tech Computer Science & Business Systems",
    bullets: ["Coursework spanning Computer Science, Business Systems, and Software Engineering."],
  },
];

export type Mission = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  status: string;
};

export const missions: Mission[] = [
  {
    id: "ctf-training",
    title: "CTF TRAINING",
    subtitle: "Practicing Capture The Flag challenges and developing practical cybersecurity skills.",
    year: "2026",
    status: "ONGOING",
  },
  {
    id: "cyber-playground",
    title: "CYBER PLAYGROUND",
    subtitle: "Building isolated vulnerable environments to practice security testing and understand attack workflows.",
    year: "2026",
    status: "ONGOING",
  },
  {
    id: "ai-security",
    title: "AI SECURITY",
    subtitle: "Exploring security problems related to AI-powered applications and learning how AI systems can be tested and secured.",
    year: "2026",
    status: "ONGOING",
  },
  {
    id: "building",
    title: "BUILDING",
    subtitle: "Turning what I learn into projects, experiments, tools, and practical security environments.",
    year: "2026",
    status: "ONGOING",
  },
];

export const stackGroups: { label: string; items: string[] }[] = [
  {
    label: "AI Security",
    items: [
      "Prompt Injection",
      "Adversarial AI",
      "Model Privacy",
      "AI Red Teaming",
      "LLM Security",
    ],
  },
  {
    label: "Cybersecurity",
    items: [
      "Network Security",
      "Web Application Security",
      "Reverse Engineering",
      "Cryptography",
      "Forensics",
    ],
  },
  {
    label: "Languages",
    items: ["Python", "C++", "Java", "SQL", "Bash"],
  },
  {
    label: "Security Tools",
    items: ["Linux", "Nmap", "Wireshark", "Gobuster", "FFUF", "WhatWeb"],
  },
  {
    label: "Infrastructure & Tools",
    items: ["Docker", "Git", "GitHub", "Vercel", "Render"],
  },
  {
    label: "Currently Learning",
    items: [
      "AI Security",
      "Web Application Security",
      "CTF",
      "Offensive Security",
      "DevSecOps",
      "Secure Software Engineering",
    ],
  },
];

export const contact = {
  email: "cheenu.exe@gmail.com",
  github: "https://github.com/cheenu-exe/",
  githubHandle: "cheenu-exe",
  portfolio: "srinivasan-portfolio.vercel.app",
  linkedin: "https://www.linkedin.com/in/srini-vasan-15124238b/",
};
