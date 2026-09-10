// ---------------------------------------------------------------------------
// SITE CONTENT
// Everything on the site is pulled from this file. Replace the placeholder
// values below with your own — no other files need to change.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Adrian Cole",
  role: "Software engineer",
  tagline: "Backend systems that hold.",
  focus: "backend systems, developer tooling, infrastructure",
  location: "Remote — GMT-5",
  availability: "OPEN TO WORK",
  email: "hello@adriancole.dev",
  since: "2019",
  statement:
    "Six years building the layer teams don't see until it breaks — APIs, data pipelines, and the internal tools that keep a product honest as it grows. One engineer, no handoffs.",
  practice: [
    "No account manager between the scoping call and the commit. The person who reads your schema is the person who ships the migration and answers the follow-up email.",
    "Fewer moving parts over more features. A system I hand off should still make sense to someone reading it cold, six months later, at 2am, mid-incident.",
  ],
  onFile: "5 shipped · 3 in production · 2019—present",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Email", href: "mailto:hello@adriancole.dev" },
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
    name: "Ledger",
    description:
      "A reconciliation engine for teams moving money across multiple payment providers.",
    type: "PERSONAL",
    category: "WEB APPLICATION",
    year: "2026",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#",
    featured: true,
    problem:
      "Finance teams reconcile Stripe, Wise, and bank statements by hand, and small errors compound silently for months.",
    result:
      "Automatic matching across three providers; the 2–3% that need a human get flagged, not buried. Monthly close time went from four days to under one.",
    role: "Solo — design, build, ship",
    artifacts: ["Reconciliation engine", "Provider adapters (3)", "Close-time dashboard"],
  },
  {
    code: "PROJ-002",
    name: "Runway",
    description: "An internal deploy dashboard that shows exactly what changed between two releases.",
    type: "CLIENT",
    category: "DEVELOPER TOOL",
    year: "2025",
    stack: ["Go", "React", "gRPC"],
    href: "#",
    role: "Backend + tooling lead",
    artifacts: ["Diff service", "Release dashboard"],
  },
  {
    code: "PROJ-003",
    name: "Fieldnotes",
    description: "A lightweight CLI for capturing engineering decisions next to the code they affect.",
    type: "OPEN SOURCE",
    category: "CLI TOOL",
    year: "2025",
    stack: ["Rust", "SQLite"],
    href: "#",
    role: "Author & maintainer",
    artifacts: ["CLI", "Editor plugin"],
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
    items: ["TypeScript", "JavaScript", "Go", "Python", "SQL"],
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
