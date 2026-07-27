import type { APIRoute } from "astro";
import { SITE } from "../lib/site";
import { CONFIG } from "../lib/config";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL(SITE.domain);

  // While the site sits on a temporary URL, keep crawlers out entirely —
  // see CONFIG.indexable.
  const body = CONFIG.indexable
    ? `User-agent: *
Allow: /

Sitemap: ${new URL("sitemap.xml", base).toString()}
`
    : `# Staging deployment — not the production domain yet.
User-agent: *
Disallow: /
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
