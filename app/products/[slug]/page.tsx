import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound, redirect } from "next/navigation";
import { Arrow, CTAStrip, Eyebrow, PageHeader, Section, SectionHead, Tick } from "@/components/ui";
import { products, site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return products.filter((p) => !("external" in p && p.external)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} · ${site.name}`,
      description: product.summary,
      type: "website",
    },
  };
}

const extras: Record<string, {
  hero: string;
  useCases: { t: string; d: string }[];
  integrations: string[];
  faqs: { q: string; a: string }[];
}> = {
  flow: {
    hero: "Approvals stuck in inboxes are the most expensive form of latency. Flow makes those approvals visible, auditable and fast — without forcing your operations team to learn yet another platform.",
    useCases: [
      { t: "Vendor onboarding", d: "Procurement, legal and finance sign-offs in one queue, not seven email threads." },
      { t: "Credit approvals", d: "Lending and trade-credit decisions routed by amount, risk band and ageing." },
      { t: "Access requests", d: "Joiner-mover-leaver workflows wired to your IdP with full audit trail." },
      { t: "Capex requests", d: "Multi-step approval matrices with SLA escalation to a delegate after N hours." },
    ],
    integrations: ["Slack", "Microsoft Teams", "Okta", "Google Workspace", "ServiceNow", "Workday", "Jira", "REST / Webhooks"],
    faqs: [
      { q: "Can we run Flow on-prem?", a: "Yes. Flow runs on Kubernetes, Docker Swarm, or as a managed SaaS in your region. Single-tenant VPC deployments are standard for regulated buyers." },
      { q: "What does the workflow builder produce under the hood?", a: "A versioned, JSON-serialisable workflow definition. You can export, diff and store it in Git like any other code asset." },
      { q: "How are approvals authenticated?", a: "SAML / OIDC SSO, with optional step-up MFA per workflow step. High-risk steps can require a re-auth and a typed reason." },
    ],
  },
  vault: {
    hero: "When a regulator asks &lsquo;who saw this contract, and when?&rsquo; the answer needs to be a button-click, not a forensics project. Vault makes document control boring again.",
    useCases: [
      { t: "Loan agreements", d: "Versioned, signed, and retained through the regulatory window — even after staff churn." },
      { t: "Patient records", d: "Granular sharing with referring physicians, watermarked exports, full audit." },
      { t: "Supplier contracts", d: "Redline, sign, file. Auto-renewal alerts that route to the right legal owner." },
      { t: "Board packs", d: "Per-director access with watermarking and time-bound viewing windows." },
    ],
    integrations: ["DocuSign", "AdobeSign", "Microsoft 365", "Google Drive", "SharePoint", "S3 / Azure Blob / GCS", "AWS KMS", "HashiCorp Vault"],
    faqs: [
      { q: "Is Vault SOC 2 and ISO 27001 ready?", a: "Vault is built against SOC 2 and ISO 27001 control families and ships with a controls map we&apos;ll walk your auditor through. We&apos;re open about our own certification status — ask and we&apos;ll show you exactly where we are." },
      { q: "Can we bring our own KMS?", a: "Yes. Customer-managed keys via AWS KMS, Azure Key Vault, GCP KMS or HashiCorp Vault are first-class — not a paid add-on." },
      { q: "What about email-out and printing controls?", a: "Vault enforces watermarking, &lsquo;view-only&rsquo; sharing, and forced re-authentication for downloads. Print is gated per-policy and audited." },
    ],
  },
  lens: {
    hero: "Most teams don&apos;t need another self-serve BI tool. They need answers to twelve questions that come up every week — answered the same way each time. Lens ships those answers as starter dashboards and lets your team extend from there.",
    useCases: [
      { t: "Sales operations", d: "Pipeline coverage, stage velocity, win-rate by segment — without a Salesforce-report rebuild." },
      { t: "Finance close", d: "Revenue, AR ageing, runway and unit economics, refreshed daily from the warehouse." },
      { t: "Customer support", d: "Ticket volume, deflection, first-response and CSAT — joined with product usage." },
      { t: "Customer-facing analytics", d: "Embed multi-tenant dashboards into your own product with row-level security." },
    ],
    integrations: ["Postgres", "MySQL", "BigQuery", "Snowflake", "Redshift", "ClickHouse", "Segment", "dbt"],
    faqs: [
      { q: "Is this a Looker / Power BI replacement?", a: "It can be, for mid-market. Lens is opinionated about the questions it answers and pre-models them; it&apos;s less open-ended than Looker but ships in a fraction of the time." },
      { q: "Can our analysts extend the model?", a: "Yes. The semantic layer is YAML, lives in Git, and supports dbt-style ref() composition. PRs and CI gate model changes." },
      { q: "Does Lens support embedded analytics for our customers?", a: "Yes. Row-level security, multi-tenant theming, and signed-URL embedding are core. Used in production by two of our SaaS clients." },
    ],
  },
};

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  if ("external" in product && product.external) redirect(product.external);
  const extra = extras[product.slug];
  if (!extra) notFound();

  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    description: product.summary,
    offers: { "@type": "Offer", priceCurrency: "INR", price: "0", availability: "https://schema.org/InStock" },
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
  };

  return (
    <>
      <PageHeader
        eyebrow={`Products · ${product.name}`}
        title={product.tagline}
        lede={extra.hero}
      >
        <Link href="/contact?type=demo" className="btn btn-primary">
          Book a walkthrough <Arrow />
        </Link>
        <Link href="/contact?type=pricing" className="btn btn-ghost">
          Request pricing
        </Link>
      </PageHeader>

      <Section>
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <Eyebrow>What you get</Eyebrow>
              <h2 className="h-section mt-4 text-balance">Capabilities that earn their keep.</h2>
              <ul className="mt-8 grid gap-5">
                {product.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <Tick />
                    <p className="text-ink-3 leading-relaxed">{b}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <div className="card p-6 sticky top-24">
                <Eyebrow>By the numbers</Eyebrow>
                <div className="mt-6 grid gap-6">
                  {product.metrics.map((m) => (
                    <div key={m.label} className="border-b border-line pb-5 last:border-0 last:pb-0">
                      <div className="font-display text-3xl font-semibold tracking-tight">{m.value}</div>
                      <div className="mt-1 text-sm text-mute">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-paper border-y border-line">
        <div className="container-x">
          <SectionHead eyebrow="Where it earns the win" title="Use cases we&rsquo;ve seen pay back inside one quarter." />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {extra.useCases.map((u) => (
              <div key={u.t} className="bg-white p-7">
                <h3 className="font-semibold tracking-tight">{u.t}</h3>
                <p className="mt-3 text-[0.92rem] text-ink-3 leading-relaxed">{u.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHead eyebrow="Integrations" title="Plugs into what you already run." lede="No rip-and-replace. Connect to your IdP, warehouse, storage and chat tools — the integrations your auditor and your team both need." />
          <div className="mt-12 flex flex-wrap gap-2">
            {extra.integrations.map((i) => (
              <span key={i} className="chip text-[0.85rem]">{i}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-paper border-y border-line">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="h-section mt-4 text-balance">Commercials that match how you&rsquo;ll use it.</h2>
            <p className="lede mt-5 text-pretty">Annual licence, billed monthly. Volume tiers for seats, workflows, documents or queries depending on the product. No per-API-call surprises.</p>
            <Link href="/contact?type=pricing" className="btn btn-primary mt-8">Request a quote <Arrow /></Link>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
            {[
              { t: "Starter", d: "For teams piloting a single use case. Up to 25 seats." },
              { t: "Business", d: "For org-wide rollout. SSO, audit log export, sandbox tenant." },
              { t: "Enterprise", d: "Single-tenant VPC, customer-managed keys, 24×7 support, dedicated TAM." },
            ].map((tier) => (
              <div key={tier.t} className="card p-6">
                <div className="font-semibold tracking-tight">{tier.t}</div>
                <p className="mt-2 text-sm text-ink-3 leading-relaxed">{tier.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x max-w-4xl">
          <SectionHead eyebrow="FAQ" title="What buyers ask." />
          <div className="mt-12 grid gap-6">
            {extra.faqs.map((f) => (
              <details key={f.q} className="card p-6 group">
                <summary className="cursor-pointer flex items-center justify-between gap-6 list-none">
                  <span className="font-semibold tracking-tight">{f.q}</span>
                  <span className="text-mute text-xl group-open:rotate-45 transition-transform leading-none">+</span>
                </summary>
                <p className="mt-4 text-ink-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: f.a }} />
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CTAStrip
        title={`Want ${product.name} on a call this week?`}
        lede="Send a sample of the work you'd put through it. We'll set up a sandbox and run it with you live."
      />
      <Script
        id={`product-jsonld-${product.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </>
  );
}
