import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, CTAStrip, PageHeader, Section } from "@/components/ui";
import { products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products — Pharmacare",
  description:
    "Pharmacare by Hontec — the healthcare supply network connecting manufacturers, distributors, pharmacies and patients on one platform.",
  alternates: { canonical: "/products" },
};

export default function ProductsIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Pharmacare — modern pharmacy management software."
        lede="Billing, inventory, purchase orders, and reports — everything a retail pharmacy needs to run without paperwork. GST-ready, English interface, built for India."
      >
        <Link href="https://pharmacare.hontec.in" className="btn btn-primary" target="_blank" rel="noopener">
          Visit Pharmacare <Arrow />
        </Link>
        <Link href="/contact?type=demo" className="btn btn-ghost">
          Book a walkthrough
        </Link>
      </PageHeader>

      <Section>
        <div className="container-x grid gap-6">
          {products.map((p, idx) => {
            const isExternal = "external" in p && p.external;
            const href = isExternal ? p.external! : `/products/${p.slug}`;
            return (
            <Link
              href={href}
              key={p.slug}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener" : undefined}
              className="card p-8 md:p-10 group grid lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-mute">/0{idx + 1}</span>
                  {isExternal && <span className="chip text-[0.7rem]">pharmacare.hontec.in</span>}
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">{p.name}</h2>
                <p className="mt-2 text-ink-3">{p.tagline}</p>
              </div>
              <div className="lg:col-span-5">
                <p className="text-ink-3 leading-relaxed">{p.summary}</p>
                <ul className="mt-5 grid gap-2 text-[0.92rem]">
                  {p.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-ink-3">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4 lg:border-l lg:border-line lg:pl-8">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-lg font-semibold tracking-tight">{m.value}</div>
                    <div className="mt-1 text-[0.78rem] text-mute leading-tight">{m.label}</div>
                  </div>
                ))}
                <div className="hidden lg:inline-flex items-center gap-2 text-sm font-medium pt-2">
                  {isExternal ? "Visit pharmacare.hontec.in" : "Open details"} <Arrow />
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </Section>

      <CTAStrip
        title="Want to see Pharmacare running?"
        lede="Book a walkthrough and we'll show you the full supply chain — manufacturer to patient — live in our sandbox."
      />
    </>
  );
}
