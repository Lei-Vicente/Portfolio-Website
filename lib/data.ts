// ---------------------------------------------------------------------------
// SITE CONTENT
// Everything on the site is pulled from this file. Replace the placeholder
// values below with your own — no other files need to change.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Leibern Vicente",
  role: "4th Year IT Student - Full-Stack Developer",
  tagline: "Full-Stack applications that work from interface to database.",
  location: "Philippines — GMT +8",
  availability: "OPEN TO WORK",
  email: "leivcnt01@gmail.com",
  since: "2026",
  statement:
    "I build web applications across the frontend, backend, and database layer — from responsive interfaces and APIs to authentication,data modeling, and deployment.",
  practice: [
    "No account manager between the scoping call and the commit. The person who reads your schema is the person who ships the migration and answers the follow-up email.",
    "Fewer moving parts over more features. A system I hand off should still make sense to someone reading it cold, six months later, at 2am, mid-incident.",
  ],
  focus: "Full-Stack Development, Backend Systems, Developer Tooling, Infrastructure",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Email", href: "leivcnt01@gmail.com" },
  ],
};

export const capabilities = [
  {
    index: "01",
    title: "Backend & data",
    detail: "APIs, schema design, migrations, queues — the layer under the product.",
  },
  {
    index: "02",
    title: "Developer tooling",
    detail: "CLIs, internal dashboards, and the scripts that save a team an hour a week.",
  },
  {
    index: "03",
    title: "Infrastructure",
    detail: "CI/CD, containers, observability — deploys that don't need a ritual.",
  },
  {
    index: "04",
    title: "Technical writing",
    detail: "Docs, RFCs, and onboarding notes that are still correct in a year.",
  },
];

export type Project = {
  code: string;
  name: string;
  description: string;
  type: string;
  category: string;
  year: string;
  stack: string[];
  href?: string;
  featured?: boolean;
  problem?: string;
  result?: string;
  role?: string;
  artifacts?: string[];
};

export const projects: Project[] = [
  {
    code: "PROJ-001",
    name: "Academix",
    description:
      "A reconciliation engine for teams moving money across multiple payment providers.",
    type: "PERSONAL",
    category: "WEB APPLICATION",
    year: "2026",
    stack: ["HTML/CSS", "JavaScript", "MySQL"],
    href: "#",
    featured: true,
    problem:
      "Academix is a study tool designed to help students learn, review, and understand different subjects in one convenient platform. It provides organized and easy-to-understand study information covering subjects such as Science, History, Mathematics, English, and other academic topics.",
    result:
      "Academix is a comprehensive study tool that provides students with a convenient platform to learn and review various subjects. It offers organized and easy-to-understand study information, covering a wide range of academic topics, including Science, History, Mathematics, English, and more. With its user-friendly interface and interactive features, Academix aims to enhance the learning experience for students and help them achieve academic success.",
    role: "Student Project — Design, Build, Learn",
    artifacts: ["Study Materials, Subject Library, Quiz Module, Progress Tracker"],
  },
  {
    code: "PROJ-002",
    name: "AI Summarizer",
    description: "AI Summarizer is a simple study and productivity tool that helps users shorten long texts into clear and concise summaries. It uses artificial intelligence to identify important information and present the main ideas in an easier-to-understand format. The system is designed to help students save time when reviewing articles, notes, lessons, and other reading materials.",
    type: "CLIENT",
    category: "DEVELOPER TOOL",
    year: "2025",
    stack: ["HTML/CSS", "JavaScript", "Python", "OpenAI API", "MongolDB"],
    href: "#",
    role: "Student Project — Learn, Build, Improve",
    artifacts: ["Text Summarizer, Key Points, Summary History, Simple User Interface"],
  },
  {
    code: "PROJ-003",
    name: "Metal Gear Sandbox 2D Game",
    description: "Metal Gear Sandbox 2D is a simple 2D game project inspired by stealth and action games. Players can explore the game environment, avoid or interact with enemies, and complete objectives using different gameplay mechanics. The project focuses on introducing basic game development concepts such as player movement, collision detection, enemy behavior, and level design.",
    type: "OPEN SOURCE",
    category: "GAME DEVELOPMENT",
    year: "2025",
    stack: ["HTML/CSS", "JavaScript", "Python", "Pygame","Canvas API"],
    href: "#",
    role: "Student Project — Design, Build, Play",
    artifacts: ["2D Game World", "Player Controls", "Enemy AI", "Stealth Mechanics"],
  },
  {
    code: "PROJ-004",
    name: "Signal",
    description: "A queue-based alerting service built to replace a brittle stack of cron jobs.",
    type: "CLIENT",
    category: "BACKEND SYSTEM",
    year: "2024",
    stack: ["Node.js", "Redis", "Docker"],
    href: "#",
    role: "Sole engineer",
    artifacts: ["Alert service", "Migration from cron"],
  },
  {
    code: "PROJ-005",
    name: "Almanac",
    description: "A static-site generator tuned for long-form technical documentation.",
    type: "OPEN SOURCE",
    category: "TOOLING",
    year: "2023",
    stack: ["TypeScript", "Markdown", "esbuild"],
    href: "#",
    role: "Author & maintainer",
    artifacts: ["Generator", "Theme"],
  },
];

export const skillGroups = [
  {
    label: "DEVELOPMENT",
    items: ["TypeScript", "JavaScript", "PHP", "Python", "SQL"],
  },
  {
    label: "WEB",
    items: ["Next.js", "React", "Node.js", "REST / gRPC APIs"],
  },
  {
    label: "INFRASTRUCTURE",
    items: ["PostgreSQL", "Redis", "Docker", "AWS", "CI/CD"],
  },
  {
    label: "TOOLS",
    items: ["Git", "GitHub", "VS Code", "Linear", "Figma"],
  },
];

export type ExperienceEntry = {
  year: string;
  role: string;
  org: string;
  period: string;
  description: string;
  achievements: string[];
};

export const experience: ExperienceEntry[] = [
  {
    year: "2026",
    role: "Senior Software Engineer",
    org: "Northbound Labs",
    period: "2024 — PRESENT",
    description:
      "Lead engineer for the payments infrastructure team, responsible for the systems that reconcile and settle transactions across three providers.",
    achievements: [
      "Redesigned the settlement pipeline, cutting reconciliation errors by 74%",
      "Built the internal tooling used by finance and support to trace any transaction end to end",
      "Mentored two junior engineers through their first on-call rotations",
    ],
  },
  {
    year: "2025",
    role: "Software Engineer",
    org: "Fielding & Co.",
    period: "2022 — 2024",
    description:
      "Built and maintained backend services for a logistics platform used by regional carriers.",
    achievements: [
      "Migrated a monolithic scheduling service into three independently deployable services",
      "Introduced structured logging and tracing, cutting incident diagnosis time by half",
      "Wrote the onboarding documentation still used by every new engineering hire",
    ],
  },
  {
    year: "2024",
    role: "Backend Engineer",
    org: "Fielding & Co.",
    period: "2022 — 2024",
    description:
      "Joined as the second backend hire, building the core scheduling and dispatch systems.",
    achievements: [
      "Designed the initial data model for carrier scheduling, still in production",
      "Built the first version of the dispatch API used by all client integrations",
    ],
  },
  {
    year: "2023",
    role: "Software Engineer",
    org: "Hollow Studio",
    period: "2020 — 2022",
    description:
      "Full-stack engineer at a small product studio, working across client projects in e-commerce and media.",
    achievements: [
      "Delivered six client projects from technical scoping through launch",
      "Built a shared component library adopted across four client codebases",
    ],
  },
];

export type NoteEntry = {
  index: string;
  title: string;
  date: string;
  tag: string;
  href?: string;
};

export const notes: NoteEntry[] = [
  {
    index: "001",
    title: "Reconciliation is a UI problem before it's a data problem",
    date: "2026.06.12",
    tag: "SYSTEMS",
    href: "#",
  },
  {
    index: "002",
    title: "Writing documentation that survives the next hire",
    date: "2026.02.03",
    tag: "PROCESS",
    href: "#",
  },
  {
    index: "003",
    title: "What a good internal tool actually saves you",
    date: "2025.10.21",
    tag: "TOOLING",
    href: "#",
  },
  {
    index: "004",
    title: "On keeping a monolith honest",
    date: "2025.04.09",
    tag: "ARCHITECTURE",
    href: "#",
  },
];

export type LabEntry = {
  index: string;
  name: string;
  description: string;
  status: string;
  href?: string;
};

export const labEntries: LabEntry[] = [
  {
    index: "L01",
    name: "diff-viewer",
    description: "A minimal terminal UI for reviewing diffs without leaving the shell.",
    status: "ACTIVE",
    href: "#",
  },
  {
    index: "L02",
    name: "cron-to-queue",
    description: "A small library for migrating cron jobs into a durable job queue.",
    status: "ACTIVE",
    href: "#",
  },
  {
    index: "L03",
    name: "typeset",
    description: "Experiments in generating print-quality PDFs from Markdown.",
    status: "ARCHIVED",
    href: "#",
  },
];
