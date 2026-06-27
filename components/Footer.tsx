"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const cols = [
  {
    heading: "Products",
    links: [
      { label: "Pharmacare", href: "https://pharmacare.hontec.in" },
      { label: "Flow", href: "/products/flow" },
      { label: "Vault", href: "/products/vault" },
      { label: "Lens", href: "/products/lens" },
      { label: "All products", href: "/products" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Web platforms", href: "/services/web-platforms" },
      { label: "Mobile apps", href: "/services/mobile-apps" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "AI integration", href: "/services/ai" },
      { label: "Product engineering teams", href: "/services/teams" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Banking & Fintech", href: "/industries#banking-fintech" },
      { label: "Healthcare", href: "/industries#healthcare" },
      { label: "Retail & E-commerce", href: "/industries#retail-ecommerce" },
      { label: "Manufacturing", href: "/industries#manufacturing" },
      { label: "SaaS & ISVs", href: "/industries#saas-isv" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Work", href: "/work" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/pharmacare")) return null;
  const year = new Date().getFullYear();
  return (
    <footer className="dark-section">
      <div className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="paper" />
            <p className="mt-5 text-[0.95rem] leading-relaxed text-white/65 max-w-sm">
              Software that takes work off your team&apos;s plate. We build our
              own products, and we build custom systems alongside your engineers.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-[0.88rem] text-white/65">
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
              <span className="text-white/45 text-[0.82rem] mt-1">
                Remote-first · Based in {site.address.city}, {site.address.region}, India
              </span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <Link href={site.social.linkedin} className="text-white/55 hover:text-white text-[0.82rem]">
                LinkedIn
              </Link>
              <span className="text-white/20">·</span>
              <Link href={site.social.x} className="text-white/55 hover:text-white text-[0.82rem]">
                X
              </Link>
              <span className="text-white/20">·</span>
              <Link href={site.social.github} className="text-white/55 hover:text-white text-[0.82rem]">
                GitHub
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((col) => (
              <div key={col.heading}>
                <h4 className="text-white text-[0.78rem] uppercase tracking-[0.12em] font-medium opacity-70">
                  {col.heading}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[0.92rem] text-white/75 hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[0.78rem] text-white/45">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[0.78rem] text-white/55">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
            <span className="hidden md:inline text-white/30">·</span>
            <span className="hidden md:inline">Remote-first · Built in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
