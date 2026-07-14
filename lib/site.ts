export const site = {
  name: "Hontec",
  legalName: "Hontec Technologies",
  tagline: "Software that takes work off your team's plate.",
  description:
    "Hontec builds production software for growing companies — our own products in workflow, document management and analytics, plus custom engineering teams for web, mobile, cloud and AI.",
  url: "https://www.hontec.in",
  email: "hontec.in@gmail.com",
remote: true,
  address: {
    line1: "Hontec",
    line2: "Remote-first team",
    city: "Vadodara",
    region: "Gujarat",
    postal: "390001",
    country: "India",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/hontec",
    x: "https://x.com/hontec",
    github: "https://github.com/hontec",
  },
  foundedYear: 2019,
  founders: [
    { name: "Jagdish Parmar", role: "Co-founder & CEO" },
    { name: "Shubham Raiyani", role: "Co-founder & CTO" },
  ],
};

export type NavItem = { label: string; href: string; description?: string };
export type NavGroup = { label: string; href?: string; items?: NavItem[] };

export const nav: NavGroup[] = [
  {
    label: "Products",
    href: "/products",
    items: [
      { label: "Pharmacare", href: "https://pharmacare.hontec.in", description: "Healthcare supply network — manufacturer to patient." },
      { label: "Flow", href: "/products/flow", description: "Workflow & approvals for ops teams." },
      { label: "Vault", href: "/products/vault", description: "Secure document management for regulated work." },
      { label: "Lens", href: "/products/lens", description: "Operational analytics for mid-market teams." },
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "Web platforms", href: "/services/web-platforms", description: "Customer & internal web apps that scale." },
      { label: "Mobile apps", href: "/services/mobile-apps", description: "iOS, Android and cross-platform builds." },
      { label: "Cloud & DevOps", href: "/services/cloud-devops", description: "AWS, Azure, GCP — migration to maturity." },
      { label: "AI integration", href: "/services/ai", description: "LLMs and ML built into real workflows." },
      { label: "Product engineering teams", href: "/services/teams", description: "Dedicated squads, embedded with yours." },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const products = [
  {
    slug: "pharmacare",
    name: "Pharmacare",
    tagline: "The healthcare supply network — manufacturer to patient.",
    summary:
      "One network connecting manufacturers, distributors, pharmacies and patients. Real-time inventory and orders across the chain, e-prescription handling, recalls in hours not weeks, and a consumer storefront sitting on top of it all.",
    accent: "from-cyan-500/15 to-cyan-500/0",
    external: "https://pharmacare.hontec.in",
    bullets: [
      "Connects manufacturers, distributors, pharmacies and consumers on one ledger",
      "Real-time inventory, orders and settlements across every tier",
      "E-prescription, refill and adherence flows for retail pharmacies",
      "Consumer storefront ready out of the box, with cold-chain delivery support",
    ],
    metrics: [
      { value: "4 tiers", label: "of the supply chain on one network" },
      { value: "<2 hrs", label: "recall reach, manufacturer to last bottle" },
      { value: "DPDP-ready", label: "data residency in India, by default" },
    ],
  },
  {
    slug: "flow",
    name: "Flow",
    tagline: "Workflow & approvals for operations teams.",
    summary:
      "Build approval chains, request forms and SLA-tracked work queues without touching a workflow engine — visually, in an afternoon.",
    accent: "from-orange-500/15 to-orange-500/0",
    bullets: [
      "Drag-and-drop workflow builder with branches, parallel paths and SLAs",
      "Slack, Teams, email and webhook actions out of the box",
      "Audit log and role-based approvals fit for regulated processes",
      "REST + webhook API for embedding into existing systems",
    ],
    metrics: [
      { value: "73%", label: "drop in approval cycle time, avg." },
      { value: "9 hrs", label: "to first workflow in production" },
      { value: "120+", label: "pre-built actions" },
    ],
  },
  {
    slug: "vault",
    name: "Vault",
    tagline: "Secure document management for regulated work.",
    summary:
      "Versioned, e-signature-ready document storage with granular access, retention policies, and audit trails — built for finance, healthcare and legal teams.",
    accent: "from-zinc-900/10 to-zinc-900/0",
    bullets: [
      "Versioning, redlining and electronic signature",
      "Field-level access controls and watermarking",
      "Retention policies aligned with ISO 27001 and SOC 2 controls",
      "Connectors for SharePoint, Google Drive, S3 and box",
    ],
    metrics: [
      { value: "AES-256", label: "at-rest encryption, customer-managed keys" },
      { value: "11 yrs", label: "max retention windows supported" },
      { value: "99.95%", label: "uptime, contractual" },
    ],
  },
  {
    slug: "lens",
    name: "Lens",
    tagline: "Operational analytics for mid-market teams.",
    summary:
      "Pre-built dashboards for sales, ops, finance and support — connect your warehouse or operational DB and get answers, not a BI project.",
    accent: "from-emerald-500/10 to-emerald-500/0",
    bullets: [
      "Connectors for Postgres, MySQL, BigQuery, Snowflake and Redshift",
      "Pre-modelled metrics for sales, ops, finance and CX",
      "Embedded analytics with row-level security for customer-facing reporting",
      "Scheduled reports to Slack, email, and Drive",
    ],
    metrics: [
      { value: "40+", label: "starter dashboards" },
      { value: "<3 wks", label: "to a dashboard your CFO uses" },
      { value: "SOC 2", label: "Type II, audited annually" },
    ],
  },
] as const;

export const services = [
  {
    slug: "web-platforms",
    name: "Web platforms",
    short: "Customer-facing and internal web apps engineered for the next three years, not the next sprint.",
    points: [
      "Next.js, React, TypeScript front-ends with design systems that scale",
      "Node, Go and Python services with measurable SLOs",
      "Postgres, Redis, Kafka, S3 — boring, durable stacks",
      "Full instrumentation: logs, metrics, traces from day one",
    ],
  },
  {
    slug: "mobile-apps",
    name: "Mobile apps",
    short: "iOS, Android and cross-platform builds shipped to the stores, not just demoed.",
    points: [
      "Swift, Kotlin and React Native depending on what your users actually need",
      "Offline-first sync, push notifications, deep links",
      "App Store and Play submission, review-response and rollout",
      "Performance budgets baked into CI — startup, scroll, battery",
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    short: "Migrate, modernise, or just stop the 2am pages — AWS, Azure and GCP.",
    points: [
      "Lift-and-shift, replatforming and full re-architecture programs",
      "Terraform, Pulumi and CDK — infrastructure as code, reviewed like code",
      "Kubernetes when it makes sense, plain ECS / Cloud Run when it doesn't",
      "Cost reviews that have saved clients 18–42% in the first quarter",
    ],
  },
  {
    slug: "ai",
    name: "AI integration",
    short: "LLMs and ML built into real workflows — measured by business outcome, not demo wow.",
    points: [
      "Retrieval augmented generation with eval harnesses, not vibes",
      "Fine-tuning and small-model deployment for cost and latency",
      "Document understanding, support deflection, sales intelligence",
      "Guardrails: PII redaction, prompt-injection defences, audit logging",
    ],
  },
  {
    slug: "teams",
    name: "Product engineering teams",
    short: "Dedicated squads — engineering, design, PM — embedded into your delivery rhythm.",
    points: [
      "Squads of 3–9, billed monthly, scaled up or down with 30 days' notice",
      "Time zone overlap with EU, US East and APAC clients",
      "Your tooling, your standards, your Jira — we adapt to your shop",
      "Quarterly business reviews with engineering leadership",
    ],
  },
] as const;

export const industries = [
  {
    slug: "banking-fintech",
    name: "Banking & Fintech",
    blurb: "Core banking add-ons, lending automation, fraud and KYC — built for regulators, not just users.",
  },
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    blurb: "Provider workflows, patient portals, clinical data tooling — HIPAA-aware, audit-ready.",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    blurb: "Storefronts, OMS, inventory and last-mile — speed at Black Friday volumes.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Supply Chain",
    blurb: "Shop-floor MES, traceability, warehouse and supplier portals — wired to ERP, not duct-taped.",
  },
  {
    slug: "saas-isv",
    name: "SaaS & ISVs",
    blurb: "Multi-tenant platforms, customer-facing analytics, integrations marketplaces — co-built with your team.",
  },
  {
    slug: "public-sector",
    name: "Public sector",
    blurb: "Citizen-facing services and back-office modernisation, delivered against fixed milestones.",
  },
] as const;

export const caseStudies = [
  {
    slug: "national-lender-loan-origination",
    client: "A top-10 Indian non-bank lender",
    industry: "Banking & Fintech",
    title: "Cut loan disbursal from 6 days to 41 minutes",
    summary:
      "Re-built a 14-year-old origination stack on a modular core, connected 22 underwriting data sources, and shipped the first product line live in 11 weeks.",
    metrics: [
      { value: "41 min", label: "median time to disbursal" },
      { value: "22", label: "data sources integrated" },
      { value: "11 wks", label: "to first product live" },
    ],
    stack: ["Next.js", "Kotlin", "Postgres", "Kafka", "AWS"],
  },
  {
    slug: "hospital-network-clinical-workflows",
    client: "A 14-hospital private network",
    industry: "Healthcare",
    title: "One clinical workflow across 14 hospitals",
    summary:
      "Replaced four legacy EMRs and a tangle of spreadsheets with a single clinical and operational workspace — without a Big Bang cutover.",
    metrics: [
      { value: "4 → 1", label: "EMR systems consolidated" },
      { value: "9 mo", label: "to full network rollout" },
      { value: "1.3 M", label: "patient records migrated, zero loss" },
    ],
    stack: ["Next.js", "Go", "Postgres", "Azure"],
  },
  {
    slug: "global-retailer-omnichannel",
    client: "A global fashion retailer",
    industry: "Retail & E-commerce",
    title: "An OMS that survives Black Friday",
    summary:
      "Stood up an order management system that holds at 42× normal load — replaced a vendor product that had failed two peaks in a row.",
    metrics: [
      { value: "42×", label: "peak vs baseline orders, no degradation" },
      { value: "0", label: "P1 incidents through three holiday seasons" },
      { value: "−31%", label: "infra cost vs. previous OMS" },
    ],
    stack: ["Go", "Kafka", "Redis", "Postgres", "GCP"],
  },
] as const;

export const stats = [
  { value: "100%", label: "Promises we&rsquo;ve made and delivered on" },
  { value: "<2 days", label: "Reply on every brief, weekends excluded" },
  { value: "Senior", label: "Only engineers we&rsquo;d hire ourselves" },
  { value: "Remote", label: "Delivered globally from India" },
];
