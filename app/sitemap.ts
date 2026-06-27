import type { MetadataRoute } from "next";
import { site, products, services, caseStudies } from "@/lib/site";

const posts = [
  "production-llm-evals",
  "what-platform-engineering-actually-buys-you",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const staticRoutes = [
    "",
    "/products",
    "/pharmacare",
    "/services",
    "/industries",
    "/work",
    "/about",
    "/careers",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...products
      .filter((p) => !("external" in p && p.external))
      .map((p) => ({
        url: `${base}/products/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.9,
      })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...caseStudies.map((c) => ({
      url: `${base}/work/${c.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...posts.map((slug) => ({
      url: `${base}/insights/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
