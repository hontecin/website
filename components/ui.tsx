import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
  bleed,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={`relative ${bleed ? "" : "py-20 md:py-28"} ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="h-section mt-4 text-balance">{title}</h2>
      {lede && <p className="lede mt-5 text-pretty">{lede}</p>}
    </div>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className={className}>
      <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkArrow({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`link-arrow ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{value}</div>
      <div
        className="mt-2 text-sm text-mute leading-snug max-w-[18ch]"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}

export function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="mt-1 shrink-0">
      <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeOpacity="0.35" fill="none" />
      <path d="M4 7.2l2.2 2L10 5.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative border-b border-line bg-paper">
      <div className="absolute inset-0 grid-lines opacity-60 pointer-events-none" />
      <div className="container-x relative pt-20 md:pt-28 pb-16 md:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="h-display mt-5 max-w-4xl text-balance">{title}</h1>
        {lede && <p className="lede mt-6 max-w-2xl text-pretty">{lede}</p>}
        {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function CTAStrip({
  title = "Have a problem worth solving? Bring it.",
  lede = "Tell us what you're trying to ship. We'll come back inside two working days with people, a plan, or both.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="dark-section">
      <div className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow text-white/70">Start a project</span>
            <h2 className="h-section mt-4 text-white text-balance">{title}</h2>
            <p className="mt-5 text-lg text-white/70 max-w-xl text-pretty">{lede}</p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link href="/contact?type=brief" className="btn btn-accent">
              Start a project <Arrow />
            </Link>
            <Link href="/work" className="btn btn-ghost text-white border-white/20 hover:border-white">
              See recent work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
