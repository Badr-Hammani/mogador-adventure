// @ts-check
import { defineConfig } from "astro/config";

/**
 * Mogador Adventures — static site.
 *
 * `site` must match the production domain exactly: it is used to build the
 * canonical + hreflang tags and the sitemap. Change it here and nowhere else.
 */
export default defineConfig({
  site: "https://mogadoradventures.com",
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
