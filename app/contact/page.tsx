import type { Metadata } from "next";
import { Eyebrow, PageHeader, Section } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Hontec",
  description: "Start a project, request a product walkthrough, or ask a question. Replies within two working days.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you&rsquo;re trying to ship."
        lede="A real person reads every form. We&rsquo;ll come back inside two working days with people, a plan, or both."
      />

      <Section>
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <div className="card p-7">
              <Eyebrow>Other ways in</Eyebrow>
              <ul className="mt-5 grid gap-4 text-[0.95rem]">
                <li>
                  <div className="text-mute text-xs uppercase tracking-[0.12em]">New business</div>
                  <a className="font-medium text-ink hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
                </li>
<li>
                  <div className="text-mute text-xs uppercase tracking-[0.12em]">Where we work from</div>
                  <p className="text-ink-3 leading-relaxed">
                    Remote-first across India.<br />
                    Headquartered in {site.address.city}, {site.address.region}.
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
}
