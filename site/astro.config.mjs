// @ts-check
import { defineConfig } from "astro/config";

/**
 * Mogador Adventures — static site.
 *
 * ── Deployment target ────────────────────────────────────────────────────────
 * Currently GitHub Project Pages:  https://badr-hammani.github.io/mogador-adventure/
 *
 * `site` + `base` together build every canonical URL, hreflang tag, sitemap
 * entry and internal link, so they must match the live URL exactly.
 *
 * WHEN mogadoradventures.com IS REGISTERED, change to:
 *     site: "https://mogadoradventures.com",
 *     base: "/",
 * and set `indexable: true` in src/lib/config.ts. Nothing else needs touching —
 * every href flows through pathFor() in src/lib/routes.ts, which reads the base.
 */
export default defineConfig({
  site: "https://badr-hammani.github.io",
  base: "/mogador-adventure",
  trailingSlash: "always",
  build: {
    format: "directory",
    inlineStylesheets: "auto",
  },
  image: {
    // Local sharp service — images are optimised at build time, no runtime cost.
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
});
