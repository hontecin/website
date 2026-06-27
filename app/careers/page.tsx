import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, CTAStrip, Eyebrow, PageHeader, Section, SectionHead, Tick } from "@/components/ui";

export const metadata: Metadata = {
  title: "Work with Hontec — join our freelance bench",
  description:
    "Hontec is a remote-first studio based in Vadodara. We work with a small, hand-picked bench of senior freelance engineers, designers and product folk. Here&apos;s how to join it.",
  alternates: { canonical: "/careers" },
};

const lanes = [
  { team: "Engineering", role: "Senior backend engineer", stack: "Go / Node / Python / Postgres", commit: "Project-based · 20–40 hrs/wk" },
  { team: "Engineering", role: "Senior frontend engineer", stack: "TypeScript / Next.js / React", commit: "Project-based · 20–40 hrs/wk" },
  { team: "Engineering", role: "Mobile engineer", stack: "Kotlin / Swift / React Native", commit: "Project-based · 20–40 hrs/wk" },
  { team: "Engineering", role: "DevOps / SRE", stack: "AWS / Terraform / Kubernetes", commit: "Project-based · 10–20 hrs/wk" },
  { team: "Engineering", role: "Applied AI engineer", stack: "RAG, evals, fine-tuning", commit: "Project-based · 20–40 hrs/wk" },
  { team: "Design", role: "Senior product designer", stack: "Figma / design systems / accessibility", commit: "Project-based · 10–30 hrs/wk" },
  { team: "Product", role: "Fractional product manager", stack: "Discovery, roadmaps, delivery", commit: "Fractional · 10–20 hrs/wk" },
  { team: "Quality", role: "QA / test automation engineer", stack: "Playwright / Cypress / k6", commit: "Project-based · 10–20 hrs/wk" },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work with us"
        title="Join a small, senior, remote bench."
        lede="Hontec doesn&rsquo;t run a giant headcount. We work with a curated network of senior freelance engineers, designers and product folk, staffed onto client work whose shape fits their skills. If you&rsquo;re senior, independent and tired of staffing-firm theatre, this might be for you."
      >
        <Link href="#bench" className="btn btn-primary">
          What we&rsquo;re looking for <Arrow />
        </Link>
        <Link href="/contact?type=careers" className="btn btn-ghost">
          Send your CV
        </Link>
      </PageHeader>

      <Section>
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Eyebrow>What working with Hontec is like</Eyebrow>
            <h2 className="h-section mt-4 text-balance">Senior-led, written-down, no theatre.</h2>
            <ul className="mt-8 grid gap-5">
              {[
                "You will be the engineer on the customer call. We don&rsquo;t hide our bench behind &lsquo;customer success.&rsquo;",
                "A founder is on every engagement of consequence. You&rsquo;ll never be the most senior person in the room by default.",
                "Decisions are written down. ADRs, design docs, post-mortems. The &lsquo;why&rsquo; from two months ago is still findable.",
                "You pick the engagements that match your interests. We don&rsquo;t bench you on bad-fit work.",
                "Remote-first, project-based. Pay matched to the work, paid on time, every time.",
                "We say no to engagements that would burn the bench. The bench is the company.",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <Tick />
                  <p className="text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: b }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="card p-7">
              <Eyebrow>What you get</Eyebrow>
              <ul className="mt-5 grid gap-3 text-[0.92rem] text-ink-3">
                <li>Above-market freelance rates, with milestone-based billing.</li>
                <li>Paid on the agreed date — not when the client clears the invoice.</li>
                <li>Engagement-fit before commitment: you see the brief before you accept.</li>
                <li>Real authorship credit on the work — case studies attribute the engineer.</li>
                <li>A founder you can reach when something&rsquo;s sideways on a client call.</li>
                <li>Quarterly meet-ups in Vadodara for the bench, fully expensed.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="bench" className="bg-paper border-y border-line scroll-mt-24">
        <div className="container-x">
          <SectionHead eyebrow="The bench" title="The lanes we&rsquo;re currently building out." lede="We&rsquo;re not running W-2 hiring rounds. We&rsquo;re looking for senior independents to join the bench across these lanes — staffed onto client engagements as the brief fits." />
          <div className="mt-12 grid gap-3">
            {lanes.map((r) => (
              <Link key={r.role} href="/contact?type=careers" className="card p-6 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-mute uppercase tracking-[0.12em]">{r.team}</div>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">{r.role}</h3>
                  <p className="mt-1 text-sm text-mute">{r.stack}</p>
                </div>
                <div className="flex items-center gap-6 text-sm text-mute">
                  <span>{r.commit}</span>
                  <span className="inline-flex items-center gap-2 text-ink font-medium">Apply <Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-mute">
            Different lane? <Link href="/contact?type=careers" className="link-arrow">Send us a note anyway <Arrow /></Link>. We keep CVs on file and call when the brief fits.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-4xl">
          <SectionHead eyebrow="How joining works" title="A short, honest process." />
          <div className="mt-12 grid md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {[
              { n: "01", t: "Send your CV", d: "Plus links to two pieces of work you&rsquo;re proud of. No cover letter needed." },
              { n: "02", t: "30-min call with a founder", d: "We talk about what you&rsquo;d like to work on and what we&rsquo;ve seen recently." },
              { n: "03", t: "Paid trial slice", d: "A small piece of real work, paid at your rate. Lets both sides find out before committing." },
              { n: "04", t: "Onto the bench", d: "Staffed onto the next brief that fits. You can say no — and we sometimes do." },
            ].map((s) => (
              <div key={s.n} className="bg-white p-7">
                <div className="font-mono text-xs text-mute">{s.n}</div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-3 text-[0.92rem] text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.d }} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTAStrip
        title="Ready to send a CV?"
        lede="Drop a note with two pieces of work you'd want us to look at. We reply within two working days."
      />
    </>
  );
}
