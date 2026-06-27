import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, CTAStrip, Eyebrow, PageHeader, Section, SectionHead, Stat } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Hontec",
  description: "Hontec is a remote-first product and engineering company based in Vadodara, India. We build software for operations, compliance and finance teams — and dedicated engineering squads for the differentiated parts of your stack.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Founder-led. Remote-first. Senior bench."
        lede="Hontec is a remote-first studio headquartered in Vadodara. The founders, Jagdish Parmar and Shubham Raiyani, work alongside a hand-picked freelance bench of senior engineers, designers and product folk. We make a small number of promises on every engagement, and we ship them."
      />

      <Section>
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Eyebrow>Where we&rsquo;re from</Eyebrow>
            <h2 className="h-section mt-4 text-balance">Started in Vadodara, built remote-first by engineers tired of vendor theatre.</h2>
            <div className="mt-6 grid gap-5 text-ink-3 leading-relaxed">
              <p>Jagdish Parmar and Shubham Raiyani spent their first decade in industry on opposite sides of the same problem — Jagdish on the product and engineering management side, Shubham deep in systems and architecture. They kept comparing notes on what was wrong with the software their employers were buying.</p>
              <p>The pattern they kept finding: the people on the pitch were not the people on the project. The CV bench was a marketing artefact. The codebase by month six was a stranger&rsquo;s. They thought there was room for a firm that ran services the way product companies run engineering — senior bench, high tenure, the engineer in the standup is the engineer in the codebase.</p>
              <p>So they started Hontec in Vadodara, remote-first from day one. The product line grew from there — Flow, Vault and Lens for operations, compliance and finance teams, and Pharmacare for India&rsquo;s pharma supply chain — each built after they kept seeing the same problems show up in engagement after engagement. They built their own answers, sold them, and used the revenue to fund longer engineering bets and a senior bench other firms can&rsquo;t.</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="card p-8 grid grid-cols-2 gap-y-10 gap-x-6">
              <Stat value="100%" label="Promises kept on every engagement" />
              <Stat value="<2 days" label="Reply on every brief, weekends excluded" />
              <Stat value="Senior" label="Only engineers we&rsquo;d hire ourselves" />
              <Stat value="Remote" label="Delivered globally from India" />
              <Stat value="3" label="Products in commercial use" />
              <Stat value="2019" label="Founded in Vadodara" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-paper border-y border-line">
        <div className="container-x">
          <SectionHead
            eyebrow="What we believe"
            title="A short list of opinions we&rsquo;ve been willing to lose deals over."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                t: "The engineer is the proposal.",
                d: "If we can&rsquo;t name and staff the principals on a deck, we walk away from it. The CV bench is not a marketing artefact.",
              },
              {
                t: "Boring tech, picked on purpose.",
                d: "We&rsquo;ve had the latest-and-greatest era. We pick stacks our clients can hire for in five years and we say no to ones we don&rsquo;t love.",
              },
              {
                t: "Security taken seriously, honestly.",
                d: "DPAs, BAAs, NDAs and customer-managed keys are part of every SOW. We&rsquo;re upfront about where we are on SOC 2 and ISO 27001 — we&rsquo;ll show you our current posture, not pretend to a certification we don&rsquo;t have.",
              },
              {
                t: "Transition out by default.",
                d: "Every engagement has a written transition-out plan and a hire-out schedule for our engineers. We&rsquo;d rather you take it in-house in year two than resent us in year three.",
              },
              {
                t: "We&rsquo;ll talk you out of work we don&rsquo;t love.",
                d: "Most of our best client relationships started with a &lsquo;don&rsquo;t build this&rsquo; in week two of discovery.",
              },
              {
                t: "Product company discipline, services-firm flexibility.",
                d: "The same people who designed our product line are on your team. The same engineers fix Lens bugs at midnight and your release at 5pm.",
              },
            ].map((b) => (
              <div key={b.t} className="card p-7">
                <h3 className="font-semibold tracking-tight">{b.t}</h3>
                <p className="mt-3 text-ink-3 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHead
            eyebrow="How we&rsquo;re set up"
            title="A small founder-led core, and a senior freelance bench around it."
            lede="Hontec is run by its founders, and one of them is on every engagement of consequence. Around them is a hand-picked bench of senior freelance engineers, designers and product folk we&rsquo;ve worked with for years — staffed only when their CV fits the brief."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                n: "Jagdish Parmar",
                r: "Co-founder & CEO",
                b: "Jagdish runs the product line and the commercial side of the firm. He&rsquo;s the person you&rsquo;ll meet first, and the person who&rsquo;ll still be on your QBR three years in. He believes the proposal is only as good as the engineer it names.",
                roles: ["Product strategy", "Commercials & SOWs", "Client partnership"],
              },
              {
                n: "Shubham Raiyani",
                r: "Co-founder & CTO",
                b: "Shubham runs engineering and architecture. He sets the technical bar for the bench, leads the toughest design reviews, and is the second escalation when something goes sideways at 2am. Distributed systems by trade, opinionated about boring tech for honest reasons.",
                roles: ["Engineering & architecture", "Hiring bar", "On-call escalation"],
              },
            ].map((p) => (
              <div key={p.n} className="card p-8 flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-ink text-white grid place-items-center font-mono text-base">
                    {p.n.split(" ").map((s) => s[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{p.n}</h3>
                    <div className="text-sm text-mute">{p.r}</div>
                  </div>
                </div>
                <p className="mt-6 text-[0.95rem] text-ink-3 leading-relaxed">{p.b}</p>
                <div className="mt-6 pt-6 border-t border-line">
                  <div className="text-xs text-mute uppercase tracking-[0.12em]">What he owns</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.roles.map((r) => (
                      <span key={r} className="chip">{r}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="card p-8 bg-paper">
              <Eyebrow>The bench</Eyebrow>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">Senior freelancers we&rsquo;ve worked with for years.</h3>
              <p className="mt-4 text-ink-3 leading-relaxed">
                Around the founders is a curated, remote network of independent senior engineers and designers. We staff only the people whose CV would convince you if you were hiring. No graduates billed at senior rates, no &lsquo;resource pool&rsquo; with a different name on the standup each month.
              </p>
              <ul className="mt-5 grid gap-2 text-[0.92rem] text-ink-3">
                <li className="flex gap-2"><Arrow className="mt-1" /> Hand-picked per engagement, named on the SOW.</li>
                <li className="flex gap-2"><Arrow className="mt-1" /> Same people from kickoff to handover, or you don&rsquo;t pay for the swap.</li>
                <li className="flex gap-2"><Arrow className="mt-1" /> Distributed across time zones for client overlap.</li>
              </ul>
            </div>
            <div className="card p-8 bg-paper">
              <Eyebrow>Promises we make</Eyebrow>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">Few, specific, and we keep them.</h3>
              <p className="mt-4 text-ink-3 leading-relaxed">
                We don&rsquo;t hide behind methodology. Every engagement carries a small number of named, dated commitments and we deliver on them — or we credit your invoice.
              </p>
              <ul className="mt-5 grid gap-2 text-[0.92rem] text-ink-3">
                <li className="flex gap-2"><Arrow className="mt-1" /> Reply within 2 working days, every time.</li>
                <li className="flex gap-2"><Arrow className="mt-1" /> A named senior on the call, not an account manager.</li>
                <li className="flex gap-2"><Arrow className="mt-1" /> Production-grade slice within the milestone you signed.</li>
                <li className="flex gap-2"><Arrow className="mt-1" /> Code, infra, docs handed over — yours from day one.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/careers" className="btn btn-ghost">
              See open roles <Arrow />
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Meet the founders <Arrow />
            </Link>
          </div>
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
