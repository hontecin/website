import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, CTAStrip, Eyebrow, PageHeader, Section, SectionHead, Stat } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Hontec",
  description: "Hontec is an IT company founded in 2024, based in Vadodara, India. We build software products and custom engineering solutions for businesses of all sizes.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Built in India. Here to stay."
        lede="Hontec is an IT company founded in 2024 and headquartered in Vadodara, Gujarat. We build software products and custom engineering solutions for businesses of all sizes — with a simple goal: make powerful software accessible to every business."
      />

      <Section>
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Eyebrow>Where we&rsquo;re from</Eyebrow>
            <h2 className="h-section mt-4 text-balance">Started in Vadodara in 2024, with a clear mission from day one.</h2>
            <div className="mt-6 grid gap-5 text-ink-3 leading-relaxed">
              <p>Hontec started in 2024 with one idea: good software should not be out of reach for small and mid-sized businesses in India. Too often the tools available were either too expensive, too complex, or simply not built for how Indian businesses actually work.</p>
              <p>Our first product, Pharmacare, came from a direct observation — retail pharmacies in India were still running on manual registers and spreadsheets. We built a modern billing, inventory and management solution for them: GST-ready, simple to use, and priced for a small business.</p>
              <p>Custom engineering services run alongside the product — helping businesses build the software they need when an off-the-shelf solution isn&rsquo;t the right answer. Same team, same standards, same honest approach.</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="card p-8 grid grid-cols-2 gap-y-10 gap-x-6">
              <Stat value="2024" label="Founded in Vadodara, Gujarat" />
              <Stat value="1" label="Product live — Pharmacare" />
              <Stat value="India" label="Built for Indian businesses first" />
              <Stat value="Remote" label="Delivered from anywhere in India" />
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
                t: "Simple is hard. We do simple.",
                d: "Every product we build is judged first on whether a non-technical user can pick it up and get value in minutes. Complexity is easy. Simplicity takes discipline.",
              },
              {
                t: "Built for India, not adapted for India.",
                d: "GST, Indian banking, local workflows — these are first-class requirements, not afterthoughts. We build from the ground up for how Indian businesses actually operate.",
              },
              {
                t: "Honest about what we can do.",
                d: "We're a young company. We'll tell you what we can build well right now and what we can't — no inflated promises, no pretending to experience we don't have.",
              },
              {
                t: "Own the problem, not just the code.",
                d: "When we take on a project, we think about your users and your business, not just the spec. The best outcome is software that actually solves the problem.",
              },
              {
                t: "Reliability over features.",
                d: "A smaller product that works every time beats a feature-rich one that surprises you. We ship less and make it solid before moving on.",
              },
              {
                t: "Tech should serve people.",
                d: "Every decision we make is filtered through one question: does this make life easier for the person using it? If the answer is no, we rethink.",
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
            eyebrow="What we do"
            title="One product live, and custom software built to order."
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <div className="card p-8 bg-paper">
              <Eyebrow>Our product</Eyebrow>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">Pharmacare — built for Indian retail pharmacies.</h3>
              <p className="mt-4 text-ink-3 leading-relaxed">
                Our first product replaces manual registers and spreadsheets with modern pharmacy management software. Fast billing, real-time stock, expiry alerts, GST invoices, and sales reports — all in one place.
              </p>
              <ul className="mt-5 grid gap-2 text-[0.92rem] text-ink-3">
                <li className="flex gap-2"><Arrow className="mt-1" /> GST-ready invoices in under 30 seconds.</li>
                <li className="flex gap-2"><Arrow className="mt-1" /> Real-time stock levels with low-stock and expiry alerts.</li>
                <li className="flex gap-2"><Arrow className="mt-1" /> English interface, built for how Indian pharmacies work.</li>
              </ul>
            </div>
            <div className="card p-8 bg-paper">
              <Eyebrow>Custom engineering</Eyebrow>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">We build software for businesses that need something specific.</h3>
              <p className="mt-4 text-ink-3 leading-relaxed">
                When an off-the-shelf product isn&rsquo;t the right fit, we build the solution. Web apps, mobile apps, cloud infrastructure, AI integration — scoped clearly, delivered reliably.
              </p>
              <ul className="mt-5 grid gap-2 text-[0.92rem] text-ink-3">
                <li className="flex gap-2"><Arrow className="mt-1" /> Clear scope and honest timelines from the start.</li>
                <li className="flex gap-2"><Arrow className="mt-1" /> Direct communication — you work with the people building it.</li>
                <li className="flex gap-2"><Arrow className="mt-1" /> Reply within 2 working days on every enquiry.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/careers" className="btn btn-ghost">
              See open roles <Arrow />
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Get in touch <Arrow />
            </Link>
          </div>
        </div>
      </Section>

      <CTAStrip />
    </>
  );
}
