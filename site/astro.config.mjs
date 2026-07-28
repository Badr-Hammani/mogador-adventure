// @ts-check
import { defineConfig } from "astro/config";

/**
 * Mogador Adventures — static site.
 *
 * ── Why site/base are computed rather than hardcoded ─────────────────────────
 * The same commit is deployed to two hosts, which need different values:
 *
 *   Vercel          served at the domain root        base "/"
 *   GitHub Pages    served at /mogador-adventure/    base "/mogador-adventure/"
 *
 * `site` and `base` build every canonical URL, hreflang tag, sitemap entry and
 * internal link, so getting them wrong doesn't fail the build — it silently
 * ships a site where every link 404s.
 *
 * Vercel exposes the deployment URL as an env var, so it configures itself.
 * The GitHub Actions workflow passes `--site` and `--base` on the command line,
 * which override whatever is here.
 *
 * WHEN mogadoradventure.com IS LIVE: point the domain at Vercel, set
 * PUBLIC_SITE_URL in the Vercel project settings, and flip `indexable: true`
 * in src/lib/config.ts.
 */

// Set this in Vercel → Settings → Environment Variables once the real domain
// is attached. It wins over the auto-generated deployment URL.
const explicitSite = process.env.PUBLIC_SITE_URL;

// Vercel provides the stable production domain, and a per-deployment URL.
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

const site =
  explicitSite ??
  (vercelHost ? `https://${vercelHost}` : "https://mogadoradventure.com");

export default defineConfig({
  site,
  base: "/",
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
