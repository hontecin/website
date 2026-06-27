import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, CTAStrip, Eyebrow, PageHeader, Section, Tick } from "@/components/ui";
import { caseStudies } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/work/${c.slug}` },
  };
}

const stories: Record<string, { problem: string[]; approach: string[]; result: string[]; quote: { text: string; who: string } }> = {
  "national-lender-loan-origination": {
    problem: [
      "A 14-year-old loan origination stack written in three languages, deployed to bare metal in two data centres.",
      "Median time-to-disbursal was six days. Underwriting data came from PDFs, faxes (yes) and three separate scoring APIs that had stopped agreeing.",
      "An RBI audit had given the lender 12 months to ship a new system or stop originating in three product lines.",
    ],
    approach: [
      "Two-week fixed-bid discovery with the credit, ops and compliance teams. We came out with a build plan, a risks register, and a recommendation to keep core ledger as-is.",
      "Re-built the origination layer on a modular core: event-driven, with a shared decisioning service backing the three product lines.",
      "Integrated 22 underwriting data sources behind a single fetch-and-cache layer with auditable lineage.",
      "Shipped the first product line — personal loans — to a 10% production traffic shadow in week 9, full traffic in week 11.",
    ],
    result: [
      "Median time-to-disbursal: 6 days → 41 minutes. P95: 4 hours.",
      "Underwriter productivity up 3.1× — same headcount, 3.2× volume.",
      "Audit closed on the first product line in week 14; remaining lines through by month 9.",
    ],
    quote: {
      text: "Hontec ran the engagement like a product launch, not a services contract. The transition plan was as good as the build plan.",
      who: "Chief Risk Officer, top-10 Indian NBFC",
    },
  },
  "hospital-network-clinical-workflows": {
    problem: [
      "A 14-hospital private network running four legacy EMRs plus an unknown number of clinician spreadsheets.",
      "Cross-hospital referrals were happening over WhatsApp. Drug reconciliation at admission took 45 minutes per patient.",
      "Board mandate: one workspace across the network, no Big Bang cutover, no patient data loss.",
    ],
    approach: [
      "Three-week discovery embedded with clinicians at the largest and smallest sites simultaneously. Workflow mapping by shift, not by spec.",
      "Built a single clinical and operational workspace that wrapped — not replaced — the legacy EMRs in phase one.",
      "Replaced the legacy EMRs one ward at a time, oldest-data-first, with a rollback plan written before the first switch.",
      "Migrated 1.3M patient records with field-level checksums and zero patient-visible downtime.",
    ],
    result: [
      "Four EMRs consolidated to one, network-wide, in 9 months.",
      "Drug reconciliation at admission: 45 → 11 minutes median.",
      "1.3M patient records migrated. Zero records lost or mis-mapped on post-migration audit.",
    ],
    quote: {
      text: "We expected a multi-year programme with five vendors. Hontec did it with one vendor and one programme manager. We're still surprised.",
      who: "Group CIO, 14-hospital private network",
    },
  },
  "global-retailer-omnichannel": {
    problem: [
      "Vendor OMS had failed two consecutive holiday peaks, losing the retailer ~₹64Cr in deferred revenue across the two events.",
      "Inventory accuracy was 71% — driving over-promise, under-deliver, and a 14-day cancellation tail.",
      "9-month deadline to the next peak. Replatform was non-negotiable.",
    ],
    approach: [
      "We took the previous post-mortem and turned every red line into a SLO with an owner.",
      "Built the OMS on Go services, Kafka for state changes, Postgres for the truth, Redis for the speed.",
      "Chaos-tested against synthetic peak traffic 42× baseline. Found and fixed three load-shedding bugs before October.",
      "Shadow-traffic for six weeks, full cutover in the off-peak window, with the old system kept warm for two months.",
    ],
    result: [
      "Held at 42× baseline orders through Black Friday weekend with no degradation.",
      "Zero P1 incidents through three holiday seasons, including the year of the platform migration.",
      "Infra cost down 31% versus the previous OMS at higher throughput.",
    ],
    quote: {
      text: "They asked harder questions than our previous vendor in the first week than that vendor had asked in three years.",
      who: "Director of Engineering, global fashion retailer",
    },
  },
};

export default async function CasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();
  const s = stories[c.slug];

  return (
    <>
      <PageHeader eyebrow={`Case study · ${c.industry}`} title={c.title} lede={c.summary}>
        <span className="chip">{c.client}</span>
        {c.stack.map((t) => (<span key={t} className="chip">{t}</span>))}
      </PageHeader>

      <Section>
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 grid gap-12">
            {[
              { t: "The problem", items: s.problem },
              { t: "Our approach", items: s.approach },
              { t: "Results", items: s.result },
            ].map((b) => (
              <div key={b.t}>
                <Eyebrow>{b.t}</Eyebrow>
                <h2 className="h-section mt-4 text-balance">{b.t}</h2>
                <ul className="mt-6 grid gap-4">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <Tick />
                      <p className="text-ink-3 leading-relaxed">{it}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <blockquote className="border-l-2 border-accent pl-6 py-2">
              <p className="text-xl md:text-2xl font-display tracking-tight leading-snug">&ldquo;{s.quote.text}&rdquo;</p>
              <footer className="mt-3 text-sm text-mute">— {s.quote.who}</footer>
            </blockquote>
          </div>

          <aside className="lg:col-span-4">
            <div className="card p-6 sticky top-24">
              <Eyebrow>Headline numbers</Eyebrow>
              <div className="mt-6 grid gap-6">
                {c.metrics.map((m) => (
                  <div key={m.label} className="border-b border-line pb-5 last:border-0 last:pb-0">
                    <div className="font-display text-3xl font-semibold tracking-tight">{m.value}</div>
                    <div className="mt-1 text-sm text-mute">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-line">
                <Link href="/contact?type=brief" className="btn btn-primary w-full">
                  Brief us on yours <Arrow />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
