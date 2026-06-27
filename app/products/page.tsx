import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, CTAStrip, PageHeader, Section, SectionHead } from "@/components/ui";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products — Pharmacare, Flow, Vault, Lens",
  description:
    "Four products built by Hontec for problems we kept seeing — fragmented pharmacy supply chains, approvals stuck in inboxes, documents scattered across drives, and operational data trapped in CSVs.",
  alternates: { canonical: "/products" },
};

export default function ProductsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Four tools, built by us, for problems we kept seeing."
        lede="Each Hontec product replaces a category of work — approvals, document control, or operational reporting — that mid-market and enterprise teams burn weeks on. Buy what you need; no all-in-one bundle."
      >
        <Link href="/contact?type=demo" className="btn btn-primary">
          Book a 30-minute walkthrough <Arrow />
        </Link>
        <Link href="#compare" className="btn btn-ghost">
          Compare the three
        </Link>
      </PageHeader>

      <Section>
        <div className="container-x grid gap-6">
          {products.map((p, idx) => {
            const isExternal = "external" in p && p.external;
            const href = isExternal ? p.external! : `/products/${p.slug}`;
            return (
            <Link
              href={href}
              key={p.slug}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener" : undefined}
              className="card p-8 md:p-10 group grid lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-mute">/0{idx + 1}</span>
                  {isExternal && <span className="chip text-[0.7rem]">pharmacare.hontec.in</span>}
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">{p.name}</h2>
                <p className="mt-2 text-ink-3">{p.tagline}</p>
              </div>
              <div className="lg:col-span-5">
                <p className="text-ink-3 leading-relaxed">{p.summary}</p>
                <ul className="mt-5 grid gap-2 text-[0.92rem]">
                  {p.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-ink-3">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4 lg:border-l lg:border-line lg:pl-8">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-lg font-semibold tracking-tight">{m.value}</div>
                    <div className="mt-1 text-[0.78rem] text-mute leading-tight">{m.label}</div>
                  </div>
                ))}
                <div className="hidden lg:inline-flex items-center gap-2 text-sm font-medium pt-2">
                  {isExternal ? "Visit pharmacare.hontec.in" : "Open details"} <Arrow />
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </Section>

      <Section id="compare" className="bg-paper border-y border-line">
        <div className="container-x">
          <SectionHead
            eyebrow="Compare"
            title="Which product fits your team?"
            lede="A 90-second comparison. Most teams start with one and add a second within six months."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border border-line bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-paper">
                  <th className="p-5 text-sm font-medium text-mute w-1/4">&nbsp;</th>
                  {products.map((p) => (
                    <th key={p.slug} className="p-5 text-base font-semibold tracking-tight">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Built for", ["Pharma supply chain & consumers", "Operations & approvals", "Compliance & legal teams", "Finance & leadership"]],
                  ["Time to first value", ["~4 weeks", "~9 hours", "~2 weeks", "~3 weeks"]],
                  ["Hosting", ["SaaS, India region", "SaaS / VPC / on-prem", "SaaS / VPC / on-prem", "SaaS / VPC"]],
                  ["Data residency", ["India, DPDP-aligned", "Region of choice", "Region of choice", "Region of choice"]],
                  ["Audit log retention", ["7 years", "7 years", "11 years", "5 years"]],
                  ["Starts at", ["₹ on request", "₹ on request", "₹ on request", "₹ on request"]],
                ].map(([label, vals]) => (
                  <tr key={label as string} className="border-t border-line">
                    <td className="p-5 font-medium align-top">{label}</td>
                    {(vals as string[]).map((v, i) => (
                      <td key={i} className="p-5 text-ink-3 align-top">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <CTAStrip
        title="Want to see one running on your data?"
        lede="Send us a sample workflow, document set, or BI question. We'll wire it up in our sandbox and walk you through it on a call."
      />
    </>
  );
}
