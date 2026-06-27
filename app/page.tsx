import Link from "next/link";
import type { Metadata } from "next";
import { Arrow, CTAStrip, Eyebrow, LinkArrow, Section, SectionHead, Stat, Tick } from "@/components/ui";
import { caseStudies, industries, products, services, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-accent-soft/70 blur-3xl opacity-70 pointer-events-none" />
        <div className="container-x relative pt-20 md:pt-28 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Products · Custom software</Eyebrow>
              <h1 className="h-display mt-5 text-balance">
                Software that takes work off your team&apos;s plate.
              </h1>
              <p className="lede mt-6 max-w-xl text-pretty">
                Hontec builds two things. The first is our own product line — Pharmacare, Flow, Vault and Lens — used by pharmacies and supply networks, plus operations, compliance and finance teams who want to retire spreadsheets and one-off scripts. The second is custom software, built with your engineers on the calls they&apos;re already on.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact?type=brief" className="btn btn-primary">
                  Start a project <Arrow />
                </Link>
                <Link href="/products" className="btn btn-ghost">
                  See our products
                </Link>
              </div>
              <p className="mt-6 text-sm text-mute">
                Replies inside 2 working days · NDAs sent same-day · Remote-first team based in {site.address.city}, delivering globally.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <Eyebrow>What we promise</Eyebrow>
                  <span className="chip">Every engagement</span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-y-8 gap-x-6">
                  {stats.map((s) => (
                    <Stat key={s.label} value={s.value} label={s.label} />
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-line text-sm text-mute">
                  These four commitments go into every SOW we sign. Miss one and we credit your invoice.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-line bg-paper">
        <div className="container-x py-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <p className="text-sm text-mute md:max-w-[14rem]">
              Teams we ship with, from public lenders to Series-C SaaS:
            </p>
            <ul className="flex-1 flex flex-wrap items-center gap-x-10 gap-y-3 mask-fade-r">
              {[
                "Lendingo",
                "Hexabank",
                "Hospitable",
                "Northshore Retail",
                "Polymath SaaS",
                "Trustline",
                "Adamant Logistics",
                "Civica Health",
              ].map((n) => (
                <li key={n} className="uppercase tracking-[0.18em] text-[0.78rem] text-ink-3/70">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TWO PILLARS */}
      <Section>
        <div className="container-x">
          <SectionHead
            eyebrow="What we do"
            title="Two ways we plug into your roadmap."
            lede="Most of our clients use both — our products to retire categories of work, and our engineering teams to build the differentiated parts of their stack."
          />

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="card p-8 lg:p-10 group">
              <Eyebrow>01 · Products</Eyebrow>
              <h3 className="mt-5 text-2xl md:text-[1.75rem] font-semibold tracking-tight">
                Our own software, deployed in weeks.
              </h3>
              <p className="mt-4 text-ink-3 leading-relaxed">
                Four products built by our team for problems we kept seeing — fragmented pharmacy supply chains, approvals stuck in inboxes, documents scattered across drives, and operational data trapped in CSVs. You license what you need, integrate, and move on.
              </p>
              <ul className="mt-6 grid gap-3 text-[0.95rem]">
                {products.map((p) => {
                  const isExternal = "external" in p && p.external;
                  const href = isExternal ? p.external! : `/products/${p.slug}`;
                  return (
                    <li key={p.slug}>
                      <Link
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener" : undefined}
                        className="flex items-start gap-3 group/item"
                      >
                        <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="flex-1">
                          <span className="font-medium">{p.name}</span>
                          <span className="text-mute"> — {p.tagline}</span>
                        </span>
                        <Arrow className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8">
                <LinkArrow href="/products">Browse the product line</LinkArrow>
              </div>
            </div>

            <div className="card p-8 lg:p-10 group">
              <Eyebrow>02 · Custom software</Eyebrow>
              <h3 className="mt-5 text-2xl md:text-[1.75rem] font-semibold tracking-tight">
                Engineering teams that ship with yours.
              </h3>
              <p className="mt-4 text-ink-3 leading-relaxed">
                Founder-led squads drawn from our senior freelance bench — engineers, designers, PMs — embedded into your delivery rhythm. Same standup, same Jira, same on-call rotation if you want it. Project-based, with promises in writing.
              </p>
              <ul className="mt-6 grid gap-3 text-[0.95rem]">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="flex items-start gap-3 group/item">
                      <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-ink" />
                      <span className="flex-1">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-mute"> — {s.short.split(" — ")[0]}</span>
                      </span>
                      <Arrow className="opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <LinkArrow href="/services">How custom engagements work</LinkArrow>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PRODUCT SHOWCASE */}
      <Section className="bg-paper border-y border-line">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionHead
              eyebrow="The product line"
              title={<>Four tools. One problem each. <span className="text-mute">Solved properly.</span></>}
            />
            <LinkArrow href="/products">Compare all three</LinkArrow>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => {
              const isExternal = "external" in p && p.external;
              const href = isExternal ? p.external! : `/products/${p.slug}`;
              const categories = ["Healthcare", "Workflow", "Documents", "Analytics"];
              return (
                <Link
                  key={p.slug}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener" : undefined}
                  className="card p-7 flex flex-col group"
                >
                  <div className="flex items-center justify-between">
                    <span className="chip">{categories[i]}</span>
                    <span className="text-[0.78rem] text-mute font-mono">/0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-2 text-[0.95rem] text-ink-3">{p.tagline}</p>
                  <p className="mt-4 text-sm text-mute leading-relaxed flex-1">{p.summary}</p>
                  <div className="mt-6 pt-6 border-t border-line flex items-center justify-between">
                    <span className="font-mono text-xs text-mute">{p.metrics[0].value}</span>
                    <span className="text-sm text-mute">{p.metrics[0].label}</span>
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
                    {isExternal ? "Visit product site" : "Read the details"} <Arrow />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CAPABILITIES */}
      <Section>
        <div className="container-x">
          <SectionHead
            eyebrow="Engineering capabilities"
            title="What our squads bring on day one."
            lede="Senior-led, remote-first teams based out of India with delivery overlap from San Francisco to Singapore. We staff the engagement with people whose CVs you read first."
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white p-8 hover:bg-paper transition-colors flex flex-col"
              >
                <h3 className="text-lg font-semibold tracking-tight">{s.name}</h3>
                <p className="mt-3 text-[0.92rem] text-ink-3 leading-relaxed flex-1">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Explore <Arrow />
                </span>
              </Link>
            ))}
            <div className="bg-ink text-white p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-white">Need a different shape?</h3>
                <p className="mt-3 text-[0.92rem] text-white/65 leading-relaxed">
                  Fixed-bid discovery, T&amp;M extensions, on-site augmentation, transition-out plans — we&apos;ve done all of them and we&apos;ll happily say no when the shape&apos;s wrong.
                </p>
              </div>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                Talk to a partner <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section className="bg-cream border-y border-line">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Eyebrow>Industries</Eyebrow>
              <h2 className="h-section mt-4 text-balance">
                Pattern recognition from twelve regulated industries.
              </h2>
              <p className="lede mt-5 max-w-md text-pretty">
                We&apos;ve shipped into the messy bits — KYC at lenders, clinical workflows at hospitals, peak-day orders at retailers. The pattern recognition is the difference.
              </p>
              <LinkArrow href="/industries" className="mt-8">All industries</LinkArrow>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {industries.slice(0, 6).map((ind) => (
                <Link key={ind.slug} href={`/industries#${ind.slug}`} className="card p-6 hover:bg-white">
                  <h3 className="font-semibold tracking-tight">{ind.name}</h3>
                  <p className="mt-2 text-sm text-ink-3 leading-relaxed">{ind.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* WORK */}
      <Section>
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionHead
              eyebrow="Recent work"
              title="Outcomes we can name — with permission."
              lede="Three of the dozens of engagements we shipped this year. Each one is a write-up your CTO can defend in a board meeting."
            />
            <LinkArrow href="/work">See all case studies</LinkArrow>
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                className="card p-7 flex flex-col group"
              >
                <span className="chip">{c.industry}</span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight leading-snug">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-mute">{c.client}</p>
                <p className="mt-4 text-[0.95rem] text-ink-3 leading-relaxed flex-1">{c.summary}</p>
                <div className="mt-6 pt-6 border-t border-line grid grid-cols-3 gap-3">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-mono text-base font-semibold tracking-tight">{m.value}</div>
                      <div className="text-[0.72rem] text-mute mt-1 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Read the case study <Arrow />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="bg-paper border-y border-line">
        <div className="container-x">
          <SectionHead
            eyebrow="How we work"
            title="A delivery method built to be auditable, not theatrical."
            lede={<>No five-stage waterfalls labelled &lsquo;agile.&rsquo; You see the codebase from week one, the cost model from week two, and you can walk away with everything we&apos;ve built whenever you want to.</>}
          />
          <div className="mt-14 grid md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {[
              {
                n: "01",
                t: "Two-week discovery",
                d: "Fixed scope, fixed price. We come out with a build plan, risks named, and a recommendation — including &lsquo;don&rsquo;t build this&rsquo; when it&rsquo;s the right call.",
              },
              {
                n: "02",
                t: "First production slice",
                d: "Production-grade in 4–8 weeks. Not a prototype — a thin slice with auth, infra, observability, and one real workflow live.",
              },
              {
                n: "03",
                t: "Iterate to scale",
                d: "Weekly demo, monthly retro, quarterly business review. Roadmap stays in your Jira and we publish velocity in absolute terms.",
              },
              {
                n: "04",
                t: "Transition out",
                d: "When you&rsquo;re ready to take it in-house, we move our engineers off the project and yours on. Written into the SOW, not improvised.",
              },
            ].map((step) => (
              <div key={step.n} className="bg-white p-7">
                <div className="font-mono text-xs text-mute">{step.n}</div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{step.t}</h3>
                <p className="mt-3 text-[0.92rem] text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.d }} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY HONTEC */}
      <Section>
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Eyebrow>Why Hontec</Eyebrow>
              <h2 className="h-section mt-4 text-balance">
                A different kind of services firm.
              </h2>
              <p className="lede mt-5 text-pretty">
                A founder-led studio with a senior freelance bench. We make a small number of promises on every engagement and we deliver on them — that&apos;s the whole pitch.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                {
                  t: "Senior by default",
                  d: "Every freelancer on our bench has 8+ years of production experience. We don&rsquo;t farm work out to graduates and call it &lsquo;the team.&rsquo;",
                },
                {
                  t: "We staff the people you met",
                  d: "A founder is on every engagement of consequence, and the freelancer in the standup is the one named on the SOW. Swap-outs need your written sign-off.",
                },
                {
                  t: "Promises, not methodology",
                  d: "Each engagement carries a few named, dated commitments. Miss one and we credit your invoice — written into every SOW we&rsquo;ve signed.",
                },
                {
                  t: "Security taken seriously",
                  d: "DPAs, BAAs, NDAs and customer-managed keys on request. We&rsquo;re honest about where we are on SOC 2 and ISO 27001 — ask us and we&rsquo;ll show you.",
                },
              ].map((b) => (
                <div key={b.t} className="border-l border-line pl-5">
                  <h3 className="font-semibold tracking-tight">{b.t}</h3>
                  <p className="mt-2 text-[0.92rem] text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: b.d }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* TESTIMONIAL */}
      <Section className="bg-ink text-white">
        <div className="container-x">
          <div className="max-w-4xl">
            <Eyebrow>What a CTO said</Eyebrow>
            <blockquote className="mt-6 text-2xl md:text-4xl font-display font-medium leading-[1.15] tracking-tight text-balance">
              &ldquo;We&apos;ve worked with three large outsourcers in the last decade. Hontec is the first where the engineer on the standup actually wrote the code we&apos;re reviewing. That&apos;s the bar.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 grid place-items-center font-mono text-sm">RV</div>
              <div>
                <div className="font-medium">R. Venkatraman</div>
                <div className="text-sm text-white/60">CTO, Polymath SaaS · Series-C, US$ 1.2B valuation</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="container-x">
          <SectionHead
            eyebrow="Common questions"
            title="What buyers ask us first."
          />
          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            {[
              {
                q: "Are you a product company or a services studio?",
                a: "Both. We license our product line — Pharmacare, Flow, Vault and Lens — and we deliver custom software through a small founder-led core and a senior freelance bench. The product line keeps the engineering work sharp; the engineering work keeps the product line honest.",
              },
              {
                q: "How small is too small for you to engage?",
                a: "Our smallest engagement is a focused 6–8 week build with one or two senior engineers. Below that, you&rsquo;ll get better leverage from a freelancer marketplace, and we&rsquo;ll happily refer you to one.",
              },
              {
                q: "Where is the team based?",
                a: "We&rsquo;re a remote-first studio headquartered in Vadodara, Gujarat. The freelance bench is distributed across India and configured to overlap with US East, EU and APAC clients. We travel to clients for kickoff and quarterly business reviews.",
              },
              {
                q: "Can we hire your engineers at the end?",
                a: "Yes — there&rsquo;s a transition clause in every SOW. We&rsquo;d rather you hire our engineer than have them resent the engagement. We arrange the hand-over and step aside.",
              },
              {
                q: "Do you sign DPAs, BAAs and NDAs?",
                a: "Yes. We send our standard mutual NDA same-day on request, and we sign DPAs and BAAs without drama. Customer-managed keys and stricter handling are on the table — ask.",
              },
              {
                q: "What does a discovery cost?",
                a: "A two-week discovery is fixed price, scoped on a 30-minute call. It includes a build plan, infra &amp; cost model, risks register, and a written recommendation — including &lsquo;don&rsquo;t build this&rsquo; when that&rsquo;s the answer.",
              },
            ].map((f) => (
              <div key={f.q} className="border-t border-line pt-6">
                <div className="flex gap-3">
                  <Tick />
                  <div>
                    <h3 className="font-semibold tracking-tight">{f.q}</h3>
                    <p className="mt-2 text-[0.95rem] text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: f.a }} />
                  </div>
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
