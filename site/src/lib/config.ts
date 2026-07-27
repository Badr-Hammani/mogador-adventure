/**
 * ⚙️  DEPLOYMENT CONFIG — fill these in after launch.
 *
 * Everything here is optional: leave a value empty and the related feature is
 * simply not rendered. Nothing breaks, so the site can go live before the
 * accounts exist and be wired up afterwards without a code change elsewhere.
 */

export const CONFIG = {
  /**
   * 🚦 THE SWITCH THAT LETS GOOGLE IN.
   *
   * false → every page emits `noindex, nofollow` and robots.txt disallows
   *         everything. Correct while the site lives on a temporary
   *         *.pages.dev URL: without it, Google indexes the throwaway domain,
   *         and later you have two competing copies plus canonical tags
   *         pointing at a domain that didn't exist yet.
   *
   * Flip to true ONLY once mogadoradventures.com is registered, DNS points at
   * Cloudflare Pages, and `site` in astro.config.mjs matches it exactly.
   * Then rebuild, redeploy, and submit the sitemap in Search Console.
   */
  indexable: false,

  /**
   * Google Analytics 4 measurement ID, e.g. "G-XXXXXXXXXX".
   * Empty = no analytics script is injected at all (no cookie banner needed).
   */
  ga4Id: "",

  /**
   * Google Search Console HTML-tag verification token.
   * Only the token, not the whole meta tag. Prefer DNS verification if you can.
   */
  googleSiteVerification: "",

  /**
   * Booking-form backend. Get a free access key at https://web3forms.com —
   * submissions are emailed to you and can be forwarded to a Google Sheet.
   *
   * Empty = the form still works and still builds the WhatsApp/email message,
   * it just doesn't also POST a copy anywhere. Filling this in is what stops
   * abandoned enquiries from vanishing without trace.
   */
  web3formsKey: "",

  /**
   * Your Google Business Profile review link, e.g.
   * "https://g.page/r/XXXXXXXX/review". Used on the reviews page and in the
   * post-tour follow-up QR code.
   */
  googleReviewUrl: "",

  /** Public Google Maps place URL for the "get directions" link. */
  googleMapsUrl: "",
} as const;

export const hasAnalytics = () => CONFIG.ga4Id.length > 0;
export const hasFormBackend = () => CONFIG.web3formsKey.length > 0;
