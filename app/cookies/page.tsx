import type { Metadata } from "next";
import { H2, LegalPage } from "@/components/Legal";

export const metadata: Metadata = {
  title: "Cookie notice",
  description: "Cookies we set on hontec.in and what they do.",
  alternates: { canonical: "/cookies" },
};

export default function Cookies() {
  return (
    <LegalPage title="Cookie notice" effective="01 January 2026">
      <p>We try to keep cookies on hontec.in to the bare minimum. There is no marketing-tracker pixel and no third-party advertising cookie on the public site.</p>
      <H2>What we set</H2>
      <ul className="list-disc pl-5 grid gap-2">
        <li><strong>Strictly necessary.</strong> A short-lived cookie if you submit a contact form, to keep your session and prevent duplicate submissions.</li>
        <li><strong>Analytics.</strong> A first-party analytics cookie that records page views, referrer and broad geography. We don&rsquo;t set this for visitors who&rsquo;ve enabled Do Not Track.</li>
      </ul>
      <H2>What we don&rsquo;t set</H2>
      <ul className="list-disc pl-5 grid gap-2">
        <li>No third-party advertising cookies.</li>
        <li>No remarketing pixels.</li>
        <li>No cross-site tracking.</li>
      </ul>
      <H2>Managing cookies</H2>
      <p>You can clear cookies and opt out of analytics in your browser settings. The Site will keep working with all non-essential cookies disabled.</p>
    </LegalPage>
  );
}
