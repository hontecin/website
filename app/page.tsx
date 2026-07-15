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
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Software products · Custom engineering</Eyebrow>
              <h1 className="h-display mt-5 text-balance">
                Technology that empowers every business.
              </h1>
              <p className="lede mt-6 max-w-xl text-pretty">
                Hontec is an IT company based in India, building software products and custom solutions for businesses of all sizes. We create technology that is simple, reliable, and built to grow with the people who use it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Start a project <Arrow />
                </Link>
                <Link href="/products" className="btn btn-ghost">
                  Our products
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card p-7">
                <Eyebrow>About Hontec</Eyebrow>
                <ul className="mt-5 grid gap-5 text-[0.95rem]">
                  <li className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-[0.12em] text-mute">Founded</span>
                    <span className="font-medium text-ink">2024, Vadodara, Gujarat</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-[0.12em] text-mute">What we build</span>
                    <span className="text-ink-3">Pharmacare — pharmacy management software, and custom software for businesses</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-[0.12em] text-mute">Mission</span>
                    <span className="text-ink-3">Make powerful software accessible to every business</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-[0.12em] text-mute">Contact</span>
                    <a href={`mailto:${site.email}`} className="text-ink hover:underline">{site.email}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION STRIP */}
      <section className="border-b border-line bg-paper">
        <div className="container-x py-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <p className="text-sm text-mute md:max-w-[14rem]">
              What we stand for:
            </p>
            <ul className="flex-1 flex flex-wrap items-center gap-x-10 gap-y-3">
              {[
                "Real Impact",
                "Built to Last",
                "India First",
                "Honest Engineering",
                "People Over Process",
                "Purpose-Driven",
                "Simplicity at Scale",
                "Tech for Everyone",
              ].map((n) => (
                <li key={n} className="uppercase tracking-[0.18em] text-[0.78rem] text-ink-3/70">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <Section className="bg-paper border-y border-line">
        <div className="container-x">
          <SectionHead
            eyebrow="The product"
            title={<>Pharmacare. <span className="text-mute">Modern pharmacy management.</span></>}
          />

          <div className="mt-14">
            {products.map((p) => {
              const isExternal = "external" in p && p.external;
              const href = isExternal ? p.external! : `/products/${p.slug}`;
              return (
                <Link
                  key={p.slug}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener" : undefined}
                  className="card p-8 md:p-10 flex flex-col md:flex-row gap-8 group"
                >
                  <div className="md:w-1/3">
                    <span className="chip">Healthcare</span>
                    <h3 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight">{p.name}</h3>
                    <p className="mt-2 text-ink-3">{p.tagline}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                      Visit pharmacare.hontec.in <Arrow />
                    </div>
                  </div>
                  <div className="md:w-2/3 md:border-l md:border-line md:pl-8">
                    <p className="text-ink-3 leading-relaxed">{p.summary}</p>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="font-mono text-lg font-semibold tracking-tight">{m.value}</div>
                          <div className="mt-1 text-[0.78rem] text-mute leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
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
            lede="Senior-led, remote-first teams based in India. We staff every engagement with experienced engineers who take full ownership of what they ship."
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

      <CTAStrip />
    </>
  );
}
