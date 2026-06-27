import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, CTAStrip, PageHeader, Section } from "@/components/ui";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description: "Field notes from Hontec engineers and partners — applied AI, platform engineering, security and the business of building software.",
  alternates: { canonical: "/insights" },
};

export default function InsightsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Field notes, not thought leadership."
        lede="Long-form notes from the engineers and designers on our team. We try to publish what we&rsquo;d want to read, and we leave out the rest."
      />
      <Section>
        <div className="container-x grid gap-6">
          {posts.map((p) => (
            <Link key={p.slug} href={`/insights/${p.slug}`} className="card p-8 md:p-10 grid lg:grid-cols-12 gap-6 group">
              <div className="lg:col-span-9">
                <div className="flex items-center gap-3 text-xs text-mute">
                  <span className="chip">{p.tag}</span>
                  <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
                  <span>·</span>
                  <span>{p.readingMins} min read</span>
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">{p.title}</h2>
                <p className="mt-3 text-ink-3 leading-relaxed">{p.description}</p>
                <p className="mt-4 text-sm text-mute">By {p.author}</p>
              </div>
              <div className="lg:col-span-3 lg:border-l lg:border-line lg:pl-8 flex items-end">
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  Read the piece <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CTAStrip />
    </>
  );
}
