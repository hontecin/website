import type { ReactNode } from "react";
import { PageHeader, Section } from "./ui";

export function LegalPage({
  title,
  effective,
  children,
}: {
  title: string;
  effective: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} lede={`Effective ${effective}. This page is a plain-English summary of how we operate. The binding terms are in our signed agreement with you.`} />
      <Section>
        <div className="container-x max-w-3xl prose-legal">
          <div className="grid gap-5 text-[1rem] leading-[1.7] text-ink-3">{children}</div>
        </div>
      </Section>
    </>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl md:text-2xl font-semibold tracking-tight mt-8 text-ink">{children}</h2>;
}
