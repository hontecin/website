import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Arrow, CTAStrip, Eyebrow, Section } from "@/components/ui";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/insights/${p.slug}` },
    openGraph: { title: p.title, description: p.description, type: "article", publishedTime: p.date, authors: [p.author] },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();

  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    author: { "@type": "Person", name: p.author },
    publisher: { "@type": "Organization", name: site.legalName, logo: { "@type": "ImageObject", url: `${site.url}/icon` } },
    mainEntityOfPage: `${site.url}/insights/${p.slug}`,
  };

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="container-x pt-20 md:pt-28 pb-12 md:pb-16">
          <Eyebrow>Insights · {p.tag}</Eyebrow>
          <h1 className="h-display mt-5 max-w-4xl text-balance">{p.title}</h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-mute">
            <span>By {p.author}</span>
            <span>·</span>
            <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
            <span>·</span>
            <span>{p.readingMins} min read</span>
          </div>
        </div>
      </section>

      <Section>
        <div className="container-x max-w-3xl">
          <article className="grid gap-6 text-[1.05rem] leading-[1.7] text-ink-3">
            {p.body.map((b, i) => {
              if (b.kind === "p") return <p key={i}>{b.text}</p>;
              if (b.kind === "h2") return <h2 key={i} className="h-section mt-6 text-balance text-ink">{b.text}</h2>;
              if (b.kind === "ul") return (
                <ul key={i} className="grid gap-3">
                  {b.items!.map((it) => (
                    <li key={it} className="pl-5 relative">
                      <span className="absolute left-0 top-3 w-1.5 h-1.5 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              );
              if (b.kind === "quote") return (
                <blockquote key={i} className="border-l-2 border-accent pl-6 py-2 my-4">
                  <p className="text-xl font-display leading-snug text-ink">&ldquo;{b.text}&rdquo;</p>
                  {b.cite && <footer className="mt-3 text-sm text-mute">— {b.cite}</footer>}
                </blockquote>
              );
              return null;
            })}
          </article>

          <div className="mt-16 pt-8 border-t border-line flex items-center justify-between">
            <Link href="/insights" className="link-arrow"><span style={{ transform: "rotate(180deg)" }}><Arrow /></span> All insights</Link>
            <Link href="/contact" className="btn btn-primary">Talk to us <Arrow /></Link>
          </div>
        </div>
      </Section>

      <CTAStrip />
      <Script id={`post-jsonld-${p.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
