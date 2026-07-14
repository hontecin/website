import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, CTAStrip, Eyebrow, PageHeader, Section, SectionHead, Tick } from "@/components/ui";

export const metadata: Metadata = {
  title: "Careers — Hontec",
  description:
    "No open positions right now, but we're always interested in exceptional people. Learn about life and culture at Hontec.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="We&rsquo;re not hiring right now."
        lede="We don&rsquo;t have any open positions at the moment, but we&rsquo;re always interested in hearing from exceptional people. If that&rsquo;s you, send us a note anyway."
      >
        <Link href="mailto:careers.hontec@gmail.com" className="btn btn-primary">
          Send us a note <Arrow />
        </Link>
      </PageHeader>

      {/* Culture */}
      <Section>
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="h-section mt-4 text-balance">Senior-led, written-down, no theatre.</h2>
            <ul className="mt-8 grid gap-5">
              {[
                "You will own the work, not just execute on tickets. We hire people whose judgement we trust.",
                "A founder is on every engagement of consequence. You&rsquo;ll never be the most senior person in the room by default.",
                "Decisions are written down. ADRs, design docs, post-mortems. The &lsquo;why&rsquo; from two months ago is still findable.",
                "We say no to bad-fit work. We&rsquo;d rather turn down a client than burn the team on work that doesn&rsquo;t matter.",
                "Remote-first from day one. We care about output, not office hours.",
                "Honest feedback, given quickly. No annual review surprises.",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <Tick />
                  <p className="text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: b }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 grid gap-6 content-start">
            <div className="card p-7">
              <Eyebrow>What we value</Eyebrow>
              <ul className="mt-5 grid gap-3 text-[0.92rem] text-ink-3">
                <li><strong className="text-ink">Craft</strong> — We care about the code, the design, and the outcome equally.</li>
                <li><strong className="text-ink">Ownership</strong> — If it ships with your name, you own its quality.</li>
                <li><strong className="text-ink">Candour</strong> — We say what we think, on time, in writing.</li>
                <li><strong className="text-ink">Humility</strong> — Smart people who are also kind. Both are non-negotiable.</li>
                <li><strong className="text-ink">Reliability</strong> — Show up, follow through, say when you can&rsquo;t.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Life at Hontec */}
      <Section className="bg-paper border-y border-line">
        <div className="container-x">
          <SectionHead
            eyebrow="Life at Hontec"
            title="What it actually feels like to work here."
            lede="We&rsquo;re a small, founder-led studio. That means fewer layers, more ownership, and work that ships to real users."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Remote-first",
                body: "We&rsquo;ve been remote since the beginning. No mandated office days. Work from wherever you do your best thinking — we care about what ships, not where you sat.",
              },
              {
                title: "Small team, high trust",
                body: "Everyone here has a real voice. When you raise a concern or suggest a better approach, it gets discussed — not filed away. Small means your work actually moves the company.",
              },
              {
                title: "Real problems, real clients",
                body: "We work with banks, hospital networks, and global retailers. The problems are hard, the stakes are real, and the software runs in production — not in a demo environment.",
              },
              {
                title: "No bureaucracy",
                body: "Two founders, no middle management layer. Decisions get made quickly. If something is broken, you can fix it without a committee.",
              },
              {
                title: "Learning baked in",
                body: "We write ADRs, run post-mortems, and talk openly about what didn&rsquo;t work. Getting better at the craft is part of the job description.",
              },
              {
                title: "Quarterly meetups",
                body: "The team comes together in Vadodara every quarter — fully expensed. Time to think together, talk through the roadmap, and spend time with people you usually only see on a call.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-7">
                <h3 className="font-semibold text-lg tracking-tight">{item.title}</h3>
                <p className="mt-3 text-[0.92rem] text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our principles */}
      <Section>
        <div className="container-x max-w-4xl">
          <SectionHead eyebrow="How we build" title="A few things we believe about software." />
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {[
              { t: "Boring is underrated", d: "Postgres, Linux, plain HTTP. We reach for proven tools before exciting ones. Exciting is the client&rsquo;s problem to manage on-call at 2am." },
              { t: "Production from week one", d: "No six-week setup phases. A thin, working slice in production — with auth, observability, and one real workflow — is worth more than any prototype." },
              { t: "Write it down", d: "If it wasn&rsquo;t written down, it didn&rsquo;t happen. Architecture decisions, incident learnings, client agreements — all in writing, all findable." },
              { t: "Ship, then improve", d: "Perfect is the enemy of shipped. We get working software in front of users early and iterate from real feedback, not from assumptions." },
            ].map((s) => (
              <div key={s.t} className="bg-white p-7">
                <h3 className="text-lg font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-3 text-[0.92rem] text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.d }} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTAStrip
        title="Sound like your kind of place?"
        lede="No open roles right now, but we keep good people on file. Send a note and two pieces of work you're proud of."
      />
    </>
  );
}
