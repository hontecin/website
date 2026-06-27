"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  if (pathname?.startsWith("/pharmacare")) return null;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled ? "bg-white/85 backdrop-blur border-b border-line" : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-8">
        <Link href="/" aria-label="Hontec — home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {nav.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => group.items && setActiveGroup(group.label)}
              onMouseLeave={() => setActiveGroup(null)}
            >
              {group.href ? (
                <Link
                  href={group.href}
                  className="inline-flex items-center gap-1 px-3 h-10 rounded-md text-[0.93rem] text-ink-3 hover:text-ink transition-colors"
                >
                  {group.label}
                  {group.items && (
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                      <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-3 h-10 rounded-md text-[0.93rem] text-ink-3 hover:text-ink transition-colors"
                  aria-expanded={activeGroup === group.label}
                >
                  {group.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}

              {group.items && activeGroup === group.label && (
                <div className="absolute left-0 top-full pt-3 w-[28rem]">
                  <div className="card !rounded-xl p-2 shadow-lift">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-line-2"
                      >
                        <span className="text-[0.93rem] font-medium text-ink">{item.label}</span>
                        {item.description && (
                          <span className="text-[0.82rem] text-mute leading-snug">{item.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/contact" className="btn btn-ghost h-9 text-sm">
            Talk to us
          </Link>
          <Link href="/contact?type=brief" className="btn btn-primary h-9 text-sm">
            Start a project
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-line"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            {open ? (
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white overflow-y-auto">
          <div className="container-x py-6 flex flex-col gap-1">
            {nav.map((group) => (
              <div key={group.label} className="py-2 border-b border-line">
                {group.href ? (
                  <Link
                    href={group.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium py-2"
                  >
                    {group.label}
                  </Link>
                ) : (
                  <div className="block text-base font-medium py-2">{group.label}</div>
                )}
                {group.items && (
                  <div className="pl-1 pb-2 grid gap-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block text-[0.92rem] text-ink-3 py-1.5"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-6">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-ghost">
                Talk to us
              </Link>
              <Link href="/contact?type=brief" onClick={() => setOpen(false)} className="btn btn-primary">
                Start a project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
