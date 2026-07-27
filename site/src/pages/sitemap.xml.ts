import type { APIRoute } from "astro";
import { allPages } from "../lib/pages-index";
import { LANG_META } from "../lib/i18n";
import { SITE } from "../lib/site";

/**
 * Hand-rolled sitemap rather than @astrojs/sitemap.
 *
 * The integration assumes locales are a simple path prefix on a shared slug.
 * Ours are fully localised slugs (/fr/activites/quad-essaouira/ vs
 * /activities/quad-biking-essaouira/), so the alternates have to come from the
 * route table. Emitting xhtml:link alternates here reinforces the hreflang in
 * the page head and helps Google discover all five language versions.
 */
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(SITE.domain);
  const abs = (path: string) => new URL(path, base).toString();
  const today = new Date().toISOString().split("T")[0];

  const urls = allPages()
    .map((entry) => {
      const alternates = entry.alternates
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${LANG_META[alt.lang].htmlLang}" href="${abs(alt.path)}"/>`,
        )
        .join("\n");

      return [
        "  <url>",
        `    <loc>${abs(entry.path)}</loc>`,
        `    <lastmod>${entry.lastmod ?? today}</lastmod>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority.toFixed(1)}</priority>`,
        alternates,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
