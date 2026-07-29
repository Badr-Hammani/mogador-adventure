// @ts-check
import { defineConfig } from "astro/config";

/**
 * Mogador Adventures — static site. Live at https://mogadoradventure.com.
 *
 * ── Why `site` is computed rather than hardcoded ─────────────────────────────
 * It builds every canonical URL, hreflang tag and sitemap entry, so getting it
 * wrong doesn't fail the build — it silently ships a site that tells Google its
 * real address is somewhere that doesn't exist.
 *
 * The three-step fallback below means the right thing happens everywhere:
 * production reads the env var, preview deployments describe themselves, and a
 * bare `npm run build` on a laptop still produces the real domain.
 */

// Set in Vercel → Settings → Environment Variables (Production).
// Wins over the auto-generated deployment URL.
const explicitSite = process.env.PUBLIC_SITE_URL;

// Preview deployments have no PUBLIC_SITE_URL, so they fall back to describing
// themselves rather than claiming to be production.
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
