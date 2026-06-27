import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface AltLink {
  hreflang: string;
  href: string;
}

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  alternates?: AltLink[];
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const alternates: AltLink[] = [
          { hreflang: "es", href: `${BASE_URL}/` },
          { hreflang: "en", href: `${BASE_URL}/?lang=en` },
          { hreflang: "x-default", href: `${BASE_URL}/` },
        ];

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", alternates },
          { path: "/?lang=en", changefreq: "weekly", priority: "1.0", alternates },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            ...(e.alternates ?? []).map(
              (a) =>
                `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`,
            ),
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
