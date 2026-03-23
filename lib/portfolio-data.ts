import type {
  ExpertiseCardItem,
  ProjectItem,
  StatItem,
  TimelineItem,
  ToolkitItem,
} from "@/types/portfolio";

export const EXPERTISE_CARDS: ExpertiseCardItem[] = [
  {
    icon: "security",
    title: "Agentic AI & RAG Systems",
    desc: "Designing production-grade agentic pipelines with RAG using pgvector and FAISS, enabling deep semantic code analysis and context-aware vulnerability detection.",
  },
  {
    icon: "dns",
    title: "Backend & Microservices",
    desc: "Building and maintaining high-availability enterprise microservices with Java, Spring Boot, and REST APIs, integrated with AI-driven automation tooling.",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    desc: "Deploying containerized applications on AWS EKS and Lambda via Jenkins CI/CD pipelines, with hands-on orchestration using Docker and Kubernetes.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "PR Agent BYOK",
    badge: "Enterprise",
    badgeIcon: "deployed_code",
    desc: "A sovereign AI code reviewer. It synthesizes codebase patterns to provide contextual fixes and automated documentation.",
    tags: ["PYTHON", "OPENAI", "REDIS"],
    link: true,
  },
  {
    title: "SyntheticDev",
    badge: "Infrastructure",
    badgeIcon: "terminal",
    desc: "A local-first developer sandbox that uses Llama3 to generate production-ready boilerplate from architectural diagrams.",
    tags: ["RUST", "LLAMA3", "WASM"],
    link: true,
  },
  {
    title: "Logic Weaver",
    badge: null,
    badgeIcon: "hub",
    desc: "Graph-based dependency visualizer that uses LLMs to identify architectural bottleneck and circular dependencies.",
    tags: ["GO", "NEO4J"],
    link: true,
  },
  {
    title: "DocuGen AI",
    badge: null,
    badgeIcon: "description",
    desc: "Automated technical specification generator that analyzes multi-file PR diffs to create high-level architectural summaries.",
    tags: ["PYTHON", "GEMINI"],
    link: false,
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    role: "Software Engineer II",
    period: "Oct 2025 — PRES",
    company: "UST, Trivandrum",
    desc: "Engineered a high-performance code scanning tool to identify security vulnerabilities. Designed and implemented a robust data pipeline to process and index security data into a FAISS vector database, enabling rapid, context-aware threat analysis and automated fix suggestions.",
  },
  {
    role: "Software Engineer I",
    period: "Sep 2024 — Sep 2025",
    company: "UST, Trivandrum",
    desc: "Built a serverless AWS Lambda pipeline for anonymized financial test data. Implemented an end-to-end ticket automation system with FastAPI and Next.js, reducing manual workload by 40%.",
  },
  {
    role: "Software Developer Trainee",
    period: "Apr 2024 — Sep 2024",
    company: "UST, Trivandrum",
    desc: "Developed and maintained RESTful APIs using Java and Spring Boot. Built responsive frontend components with Angular and TypeScript. Assisted in deploying containerized applications to AWS via Jenkins CI/CD pipelines.",
  },
];

export const TOOLKIT: ToolkitItem[] = [
  { icon: "code", label: "Java" },
  { icon: "terminal", label: "Python" },
  { icon: "bolt", label: "Spring Boot" },
  { icon: "electric_bolt", label: "FastAPI" },
  { icon: "layers", label: "React / Next.js" },
  { icon: "view_compact", label: "Angular" },
  { icon: "cloud", label: "AWS" },
  { icon: "deployed_code", label: "Docker / K8s" },
  { icon: "storage", label: "PostgreSQL" },
  { icon: "hub", label: "Agno / LangChain" },
];

export const STATS: StatItem[] = [
  { value: "2+", label: "Years Experience" },
  { value: "8.9", label: "B.Tech CGPA" },
  { value: "40%", label: "Workload Reduced" },
  { value: "4+", label: "Projects Shipped" },
];
