import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, CTAStrip, PageHeader, Section } from "@/components/ui";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work — selected case studies",
  description: "Selected Hontec case studies across banking, healthcare and retail. Outcomes you can read with permission.",
  alternates: { canonical: "/work" },
};

export default function WorkIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Outcomes we can name — with permission."
        lede="A few of the dozens of engagements we shipped this year. Each one is a write-up your CTO can defend in a board meeting."
      />
      <Section>
        <div className="container-x grid gap-6">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              href={`/work/${c.slug}`}
              className="card p-8 md:p-10 grid lg:grid-cols-12 gap-8 group"
            >
              <div className="lg:col-span-7">
                <span className="chip">{c.industry}</span>
                <h2 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight">{c.title}</h2>
                <p className="mt-2 text-mute">{c.client}</p>
                <p className="mt-4 text-ink-3 leading-relaxed">{c.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.stack.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 border-l border-line pl-8 grid grid-cols-3 gap-4 self-start">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-2xl font-semibold tracking-tight">{m.value}</div>
                    <div className="mt-1 text-[0.78rem] text-mute leading-tight">{m.label}</div>
                  </div>
                ))}
                <div className="col-span-3 mt-2 inline-flex items-center gap-2 text-sm font-medium">
                  Read the case study <Arrow />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CTAStrip />
    </>
  );
}
