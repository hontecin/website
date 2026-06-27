import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, CTAStrip, Eyebrow, PageHeader, Section, SectionHead } from "@/components/ui";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries we ship into",
  description:
    "Banking, healthcare, retail, manufacturing, SaaS and public sector — Hontec's pattern recognition from twelve regulated industries.",
  alternates: { canonical: "/industries" },
};

const detail: Record<string, { lede: string; we: string[]; outcomes: string[] }> = {
  "banking-fintech": {
    lede: "Core banking add-ons, lending automation, fraud, KYC and treasury workflows. We&rsquo;ve been on the wrong side of an RBI inspection for our clients — that&rsquo;s the level of detail we ship to.",
    we: ["Origination & underwriting platforms", "Fraud and risk decisioning", "KYC / KYB onboarding", "Treasury & reconciliation"],
    outcomes: ["41-minute median loan disbursal at a top-10 NBFC", "92% straight-through onboarding for a wealth manager", "−68% manual reconciliations at a regional bank"],
  },
  healthcare: {
    lede: "Provider workflows, patient portals, clinical data tooling. HIPAA, HITRUST and DPDP-aware. Built by engineers who&rsquo;ve sat with clinicians for a full shift.",
    we: ["EMR consolidation & integration", "Clinical workflow apps", "Patient-facing portals", "Provider analytics"],
    outcomes: ["14-hospital network on a single workspace in 9 months", "1.3M patient records migrated with zero loss", "37% reduction in clinical documentation time"],
  },
  "retail-ecommerce": {
    lede: "Storefronts, order management, inventory and last-mile. We measure success by what happens on the third day after Black Friday, not the first.",
    we: ["Composable commerce builds", "OMS / WMS modernisation", "Loyalty & personalisation", "Marketplace platforms"],
    outcomes: ["42× peak load OMS, no degradation", "0 P1 incidents across three holiday seasons", "−31% infra cost vs. legacy OMS"],
  },
  manufacturing: {
    lede: "Shop-floor MES, traceability, supplier portals and warehouse systems — wired to your ERP, not duct-taped to it.",
    we: ["MES & shop-floor apps", "Traceability & quality", "Supplier and dealer portals", "Predictive maintenance pilots"],
    outcomes: ["19% improvement in OEE across four plants", "Genealogy and recall in <2 hours", "1 unified supplier portal across 6 BUs"],
  },
  "saas-isv": {
    lede: "Multi-tenant platforms, customer-facing analytics, integrations marketplaces. Co-built with your engineers — we don&rsquo;t fork your repo.",
    we: ["Multi-tenant architecture", "Embedded analytics", "Integrations and marketplaces", "Platform reliability and SRE"],
    outcomes: ["1 codebase serving 9 tenants with isolated data", "Embedded analytics shipped in 11 weeks", "<3 min P95 deploy times"],
  },
  "public-sector": {
    lede: "Citizen-facing services and back-office modernisation, delivered against fixed milestones. We&rsquo;ve worked with state-level departments and have the patience for procurement.",
    we: ["Citizen service portals", "Identity and entitlement", "Back-office modernisation", "Open data & dashboards"],
    outcomes: ["1.1M monthly citizen interactions on a portal we shipped", "Compliance milestones met on every audit", "Vendor independence: every codebase handed over"],
  },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Twelve industries. Patterns that travel."
        lede="We&rsquo;ve shipped into the messy parts of regulated industries — KYC at lenders, clinical workflows at hospitals, peak-day orders at retailers. The pattern recognition shortens your build by months."
      >
        <Link href="/contact?type=brief" className="btn btn-primary">
          Tell us your industry <Arrow />
        </Link>
      </PageHeader>

      <Section>
        <div className="container-x grid gap-6">
          {industries.map((ind, i) => (
            <article id={ind.slug} key={ind.slug} className="card p-8 md:p-10 grid lg:grid-cols-12 gap-8 scroll-mt-24">
              <div className="lg:col-span-3">
                <span className="font-mono text-xs text-mute">/0{i + 1}</span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">{ind.name}</h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: detail[ind.slug].lede }} />
                <div className="mt-5 flex flex-wrap gap-2">
                  {detail[ind.slug].we.map((w) => (
                    <span key={w} className="chip">{w}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3 border-l border-line pl-6">
                <Eyebrow>Outcomes</Eyebrow>
                <ul className="mt-4 grid gap-3 text-[0.88rem] text-ink-3">
                  {detail[ind.slug].outcomes.map((o) => (
                    <li key={o} className="leading-snug">{o}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
