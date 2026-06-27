import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Arrow, CTAStrip, Eyebrow, PageHeader, Section, SectionHead, Tick } from "@/components/ui";
import { services, site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.name} — Custom development`,
    description: s.short,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

const detail: Record<string, {
  lede: string;
  outcomes: { v: string; l: string }[];
  whatIncluded: string[];
  whyHontec: string[];
  faqs: { q: string; a: string }[];
}> = {
  "web-platforms": {
    lede: "We build customer-facing and internal web platforms that are still good code three years after launch — not just on launch day. The unfashionable parts (auth, infra, observability, accessibility) get the same care as the demo screens.",
    outcomes: [
      { v: "100→104", l: "Lighthouse perf budgets, enforced in CI" },
      { v: "<1s", l: "p50 server response on our default Next.js stack" },
      { v: "WCAG 2.2", l: "AA conformance, audited per release" },
    ],
    whatIncluded: [
      "Design system and component library, not just one-off screens",
      "Server components, edge rendering and ISR where they actually help",
      "Type-safe end-to-end: shared schemas across web, API and DB",
      "Production observability: structured logs, RED-method metrics, traces",
      "Accessibility from day one — not a Phase 2 retrofit",
    ],
    whyHontec: [
      "Senior front-end engineers who&rsquo;ve shipped at consumer scale",
      "Design and engineering in the same standup, not vendor-versus-vendor",
      "Hand-off plan from day one — no &lsquo;magic codebase&rsquo; nobody else can run",
    ],
    faqs: [
      { q: "Do you do design as well as engineering?", a: "Yes — product design and design systems work, sized to the squad. Our designers ship into the codebase, not Figma-only." },
      { q: "Will you work in our repo?", a: "Yes, that&rsquo;s the default. Your repo, your branch protections, your code-review process." },
      { q: "Can you replace an existing vendor mid-flight?", a: "We&rsquo;ve done it eleven times in the last two years. The first month is documentation, ramp and risk-mapping; the second month is the first user-facing change." },
    ],
  },
  "mobile-apps": {
    lede: "Native iOS, native Android, or React Native — depending on what your users actually need, not what we&rsquo;re cheapest at. We ship to the stores, defend the review, and own the rollout.",
    outcomes: [
      { v: "<800ms", l: "cold start on mid-tier Android, our default budget" },
      { v: "99.96%", l: "crash-free sessions, enforced in CI" },
      { v: "5 days", l: "median time from PR merge to TestFlight build" },
    ],
    whatIncluded: [
      "iOS (Swift / SwiftUI), Android (Kotlin / Compose), or React Native",
      "Offline-first sync, push notifications, deep links, app intents",
      "Store submission, review-response and staged rollout",
      "Performance budgets in CI — startup, scroll, battery, network",
      "Telemetry on real devices, not lab averages",
    ],
    whyHontec: [
      "Engineers who&rsquo;ve shipped 50M+ install consumer apps",
      "We&rsquo;ll talk you out of cross-platform if your app needs native",
      "Crash and ANR triage runbook on day one",
    ],
    faqs: [
      { q: "React Native or native — what do you recommend?", a: "We&rsquo;ll only recommend RN when the UX, performance envelope and team shape genuinely support it. About half our mobile work is native." },
      { q: "Can you support after launch?", a: "Yes — on-call rotation, store-listing maintenance, OS upgrade triage and quarterly health reviews are part of the squad model." },
      { q: "Do you do tablet, TV and wearables?", a: "iPad and Android tablet, yes. tvOS / wearOS and CarPlay / Android Auto, case-by-case." },
    ],
  },
  "cloud-devops": {
    lede: "Migrate, modernise, or just stop the 2am pages. We&rsquo;ve moved core banking, hospital systems and retailers onto cloud — sometimes mid-Black-Friday — without losing a transaction.",
    outcomes: [
      { v: "18–42%", l: "cloud cost reduction in the first quarter of a review" },
      { v: "0 → 4", l: "deployments per day per service, with safety" },
      { v: "<10 min", l: "median MTTR, post our SRE playbook" },
    ],
    whatIncluded: [
      "Cloud strategy: lift-and-shift, replatform, re-architect — recommended honestly",
      "IaC: Terraform, Pulumi or CDK, reviewed like code with policy gates",
      "Kubernetes when you need it, ECS / Cloud Run / Lambda when you don&rsquo;t",
      "FinOps reviews with named owners and quarterly savings targets",
      "SRE playbooks: SLOs, error budgets, incident review, paging hygiene",
    ],
    whyHontec: [
      "AWS, Azure and GCP partners with named solution architects",
      "We&rsquo;ll write the runbook your on-call team will actually open at 2am",
      "Security and compliance baked into the IaC, not bolted on later",
    ],
    faqs: [
      { q: "Do you take pager duty?", a: "Yes, as part of dedicated-squad engagements. We share an on-call rotation with your team for the services we run." },
      { q: "Can you help us out of Kubernetes?", a: "Often, yes — many mid-market teams are paying the K8s tax without the benefit. We&rsquo;ll model the alternative and run the migration if it pays back." },
      { q: "What about regulatory cloud (RBI, HIPAA, GDPR)?", a: "Our team has shipped against RBI data-localisation, HIPAA and GDPR. We&rsquo;ll bring the controls map your auditor needs." },
    ],
  },
  ai: {
    lede: "We&rsquo;ve shipped LLMs into production for lenders, hospitals and retailers since 2022. The work is mostly unglamorous — evals, retrieval quality, guardrails, cost — and it&rsquo;s exactly the work that decides whether you ship or get stuck in pilot.",
    outcomes: [
      { v: "63%", l: "median first-response deflection on a tuned support assistant" },
      { v: "8.4×", l: "throughput vs hand-built RAG, post our eval-driven rewrites" },
      { v: "−72%", l: "inference cost via small-model fine-tunes where viable" },
    ],
    whatIncluded: [
      "RAG with evals: golden sets, regression tests, A/B harnesses — not vibes",
      "Fine-tunes and small-model deployment for cost and latency",
      "Guardrails: PII redaction, prompt-injection defences, output filtering",
      "Document understanding, support deflection, sales intelligence patterns",
      "Audit logs and reviewable prompts your compliance team can sign off",
    ],
    whyHontec: [
      "Engineers who&rsquo;ve shipped LLM features in regulated industries",
      "We&rsquo;ll talk you out of a model when retrieval or rules are the actual answer",
      "Multi-provider fluent: Anthropic, OpenAI, Gemini, open-weights",
    ],
    faqs: [
      { q: "Can you build on Bedrock / Vertex / Azure OpenAI?", a: "Yes — and we have a recommendation for which one based on your compliance posture, data residency and the model behaviour you need." },
      { q: "How do you measure quality?", a: "Task-specific eval harnesses run on every PR, with a curated golden set per task and human review on regressions." },
      { q: "Do you do data labelling and fine-tuning?", a: "Labelling we partner for; fine-tuning, including LoRA / QLoRA / DPO, we do in-house when it&rsquo;s the right tool." },
    ],
  },
  teams: {
    lede: "Sometimes you don&rsquo;t need a project — you need senior engineers, embedded with your team for a stretch. We assemble small remote squads from our freelance bench, staffed onto your roadmap, working in your tools.",
    outcomes: [
      { v: "Senior-only", l: "Every freelancer on the squad is hand-picked from our bench" },
      { v: "<2 wks", l: "From SOW signing to a fully ramped squad on most stacks" },
      { v: "100%", l: "Of swap-outs require your written sign-off" },
    ],
    whatIncluded: [
      "Squads of 2–6, drawn from our senior freelance bench — engineering, design, PM, QA",
      "Your tooling, your processes, your Jira / Linear / GitHub",
      "Founder-led oversight: a Hontec founder on every engagement of consequence",
      "Documentation that survives the engagement — your team can pick it up later",
      "Hire-out path: take any freelancer onto your payroll on a published schedule",
    ],
    whyHontec: [
      "Hand-picked freelance bench — every CV on the proposal is the engineer who shows up",
      "A founder is on every engagement of consequence; you&rsquo;re never alone on the call",
      "Project-based commercials with named, dated promises in the SOW",
    ],
    faqs: [
      { q: "What&rsquo;s the minimum commitment?", a: "6 weeks. We&rsquo;ve found shorter than that doesn&rsquo;t leave time to be useful." },
      { q: "Can we hire the engineer at the end?", a: "Yes. There&rsquo;s a hire-out clause in every SOW. We&rsquo;d rather you take a freelancer onto your payroll than have them resent the engagement." },
      { q: "Where are the engineers based?", a: "We&rsquo;re a remote-first team headquartered in Vadodara, with engineers across India. Overlap windows are configured for your time zone, and travel for kickoff and QBRs is included." },
    ],
  },
};

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const d = detail[s.slug];

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.name,
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: ["IN", "US", "EU", "AE", "SG"],
    description: s.short,
  };

  return (
    <>
      <PageHeader eyebrow={`Services · ${s.name}`} title={s.short} lede={d.lede}>
        <Link href="/contact?type=brief" className="btn btn-primary">
          Brief us <Arrow />
        </Link>
        <Link href="/work" className="btn btn-ghost">
          See related work
        </Link>
      </PageHeader>

      <Section>
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Eyebrow>What&rsquo;s included</Eyebrow>
            <h2 className="h-section mt-4 text-balance">The work, named.</h2>
            <ul className="mt-8 grid gap-5">
              {d.whatIncluded.map((b) => (
                <li key={b} className="flex gap-3">
                  <Tick />
                  <p className="text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: b }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="card p-6 sticky top-24">
              <Eyebrow>Outcomes you can quote</Eyebrow>
              <div className="mt-6 grid gap-6">
                {d.outcomes.map((m) => (
                  <div key={m.l} className="border-b border-line pb-5 last:border-0 last:pb-0">
                    <div className="font-display text-3xl font-semibold tracking-tight">{m.v}</div>
                    <div className="mt-1 text-sm text-mute">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-paper border-y border-line">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>Why Hontec</Eyebrow>
            <h2 className="h-section mt-4 text-balance">A few things you can&rsquo;t order off a menu.</h2>
          </div>
          <div className="lg:col-span-7 grid gap-5">
            {d.whyHontec.map((b) => (
              <div key={b} className="card p-6 flex gap-3">
                <Tick />
                <p className="text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: b }} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-4xl">
          <SectionHead eyebrow="FAQ" title="Common questions, straight answers." />
          <div className="mt-12 grid gap-4">
            {d.faqs.map((f) => (
              <details key={f.q} className="card p-6 group">
                <summary className="cursor-pointer flex items-center justify-between gap-6 list-none">
                  <span className="font-semibold tracking-tight">{f.q}</span>
                  <span className="text-mute text-xl group-open:rotate-45 transition-transform leading-none">+</span>
                </summary>
                <p className="mt-4 text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: f.a }} />
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CTAStrip />
      <Script id={`svc-jsonld-${s.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
