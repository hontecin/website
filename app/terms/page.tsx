import type { Metadata } from "next";
import { H2, LegalPage } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "The terms that apply to your use of hontec.in and our public-facing materials.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalPage title="Terms of use" effective="01 January 2026">
      <p>These terms apply to your use of hontec.in (the &ldquo;Site&rdquo;) and our public-facing materials. They don&rsquo;t replace the agreement we&rsquo;ll sign with you for any commercial engagement — that document controls.</p>
      <H2>Use of the Site</H2>
      <p>You may use the Site for lawful purposes only. You won&rsquo;t attempt to disrupt or reverse-engineer the Site, send malware, or scrape content for retraining machine-learning models without our written consent.</p>
      <H2>Intellectual property</H2>
      <p>All content on the Site, including the Hontec name and logo, is owned by {site.legalName} or our licensors. Case studies and quotes are published with permission of the named client.</p>
      <H2>Submissions</H2>
      <p>Anything you send us through forms, email, or otherwise is yours. We&rsquo;ll treat unsolicited briefs and roadmaps as confidential by default; ask if you want an NDA in writing first.</p>
      <H2>Disclaimer</H2>
      <p>We try to keep this Site accurate, but it&rsquo;s provided &ldquo;as is&rdquo; without warranty. Where we publish benchmark numbers or case-study figures, they apply to specific clients in specific contexts and don&rsquo;t guarantee similar outcomes for you.</p>
      <H2>Governing law</H2>
      <p>These terms are governed by the laws of India, with exclusive jurisdiction of the courts at Vadodara, Gujarat.</p>
    </LegalPage>
  );
}
