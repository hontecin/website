import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, CTAStrip, Eyebrow, PageHeader, Section, SectionHead, Tick } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description:
    "Hontec's custom software services — web platforms, mobile apps, cloud & DevOps, AI integration and dedicated product engineering teams. Senior-led, remote-first team based in Vadodara, India, with global delivery.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Custom software"
        title="Engineering teams that ship with yours."
        lede="When the work is differentiated enough to build, we build it with you — not for you. Founder-led, drawn from our senior freelance bench, embedded into your delivery rhythm. Project-based, with promises in writing."
      >
        <Link href="/contact?type=brief" className="btn btn-primary">
          Brief us on a project <Arrow />
        </Link>
        <Link href="#engage" className="btn btn-ghost">
          How engagements work
        </Link>
      </PageHeader>

      <Section>
        <div className="container-x grid gap-6">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card p-8 md:p-10 grid lg:grid-cols-12 gap-8 group">
              <div className="lg:col-span-3">
                <span className="font-mono text-xs text-mute">/0{i + 1}</span>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">{s.name}</h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-ink-3 leading-relaxed">{s.short}</p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-[0.92rem]">
                  {s.points.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-ink shrink-0" />
                      <span className="text-ink-3">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3 flex lg:flex-col lg:items-end gap-2">
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  Service details <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ENGAGEMENT MODELS */}
      <Section id="engage" className="bg-paper border-y border-line">
        <div className="container-x">
          <SectionHead
            eyebrow="Engagement models"
            title="Pick the shape that matches the risk."
            lede="Most engagements start with a fixed-bid discovery, then move into one of three delivery models. We&rsquo;ll recommend the one we&rsquo;d sign if it were our money."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {[
              {
                t: "Dedicated squad",
                p: "Monthly retainer",
                d: "A small squad of 2–6 — drawn from our senior freelance bench, founder-led, embedded with yours. Best for multi-quarter product builds.",
                bullets: ["30 days notice to scale", "Time-zone overlap built into the squad", "Your tools, your processes"],
              },
              {
                t: "Fixed-bid build",
                p: "Per project",
                d: "Defined scope, defined price, fixed-date milestones. Best for clear, bounded builds — a migration, an integration, a launch.",
                bullets: ["Promises named in the SOW, credits if we miss", "Milestone-gated payments", "Hand-over from day one"],
              },
              {
                t: "Senior freelancer placement",
                p: "Per role · monthly",
                d: "We slot one or two senior freelancers from our bench into your team. Best for capacity gaps and short bursts of senior depth.",
                bullets: ["Hand-picked from our bench", "Project-based, no minimum-month tax", "Replacement guarantee in 14 days"],
              },
            ].map((m) => (
              <div key={m.t} className="bg-white p-7 flex flex-col">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">{m.t}</h3>
                  <span className="chip">{m.p}</span>
                </div>
                <p className="mt-4 text-[0.92rem] text-ink-3 leading-relaxed">{m.d}</p>
                <ul className="mt-5 grid gap-2 text-[0.88rem] text-ink-3">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><Tick /> <span>{b}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHead
            eyebrow="Our stack, briefly"
            title="Boring tech, picked on purpose."
            lede="We&rsquo;ve had the latest-and-greatest era. Now we pick stacks that boring-old companies can hire for in five years."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { t: "Languages", items: ["TypeScript", "Go", "Python", "Kotlin", "Swift", "Rust (sparingly)"] },
              { t: "Platforms", items: ["AWS", "Azure", "GCP", "Kubernetes", "ECS", "Cloud Run"] },
              { t: "Data", items: ["Postgres", "Redis", "Kafka", "BigQuery", "Snowflake", "ClickHouse"] },
              { t: "Frontend", items: ["React", "Next.js", "React Native", "SwiftUI", "Jetpack Compose"] },
              { t: "DevEx", items: ["GitHub Actions", "Terraform", "Pulumi", "Datadog", "Honeycomb", "Sentry"] },
              { t: "AI / ML", items: ["OpenAI", "Anthropic", "Vertex AI", "vLLM", "pgvector", "Ragas"] },
            ].map((g) => (
              <div key={g.t} className="card p-6">
                <h3 className="font-semibold tracking-tight">{g.t}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <span key={i} className="chip">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
