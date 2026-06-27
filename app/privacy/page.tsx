import type { Metadata } from "next";
import { H2, LegalPage } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Hontec collects, uses and protects personal data on hontec.in and in our customer engagements.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy notice" effective="01 January 2026">
      <p>This notice covers how {site.legalName} (&ldquo;Hontec&rdquo;, &ldquo;we&rdquo;) processes personal data in connection with our website, marketing, and customer engagements. For customer engagements, the binding terms are in the signed Data Processing Addendum (DPA) we have with you.</p>
      <H2>What we collect</H2>
      <ul className="list-disc pl-5 grid gap-2">
        <li>Contact details you submit through forms — name, work email, company, role and free-text message.</li>
        <li>Usage telemetry on hontec.in — anonymised page views, referrer, broad geography, device class.</li>
        <li>Logs from product trials and demos — limited to what is needed to operate the trial.</li>
      </ul>
      <H2>What we don&rsquo;t collect</H2>
      <p>We don&rsquo;t use third-party advertising trackers on this site. We don&rsquo;t enrich form submissions with data brokers. We don&rsquo;t sell or rent contact details.</p>
      <H2>How we use it</H2>
      <ul className="list-disc pl-5 grid gap-2">
        <li>To respond to your enquiry. Replies inside two working days.</li>
        <li>To send a short, opt-in update on the topics you asked about. You can unsubscribe at any time.</li>
        <li>To monitor and improve the site&rsquo;s performance and security.</li>
      </ul>
      <H2>Retention</H2>
      <p>Form submissions are retained for 24 months from the last interaction, then deleted. Trial data follows the retention window in your trial agreement.</p>
      <H2>Your rights</H2>
      <p>If you&rsquo;re a data subject under DPDP, GDPR, or an equivalent law, you can access, correct, or delete your data by emailing <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>. We respond within 30 days.</p>
      <H2>Contact</H2>
      <p>Email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> with subject &ldquo;Privacy&rdquo; for any question, request or complaint. Our Data Protection Officer reviews every one.</p>
    </LegalPage>
  );
}
