/**
 * ⚙️  DEPLOYMENT CONFIG — fill these in after launch.
 *
 * Everything here is optional: leave a value empty and the related feature is
 * simply not rendered. Nothing breaks, so the site can go live before the
 * accounts exist and be wired up afterwards without a code change elsewhere.
 */

import GOOGLE_REVIEWS from "../data/google-reviews.json";

export const CONFIG = {
  /**
   * 🚦 THE SWITCH THAT LETS GOOGLE IN.
   *
   * false → every page emits `noindex, nofollow` and robots.txt disallows
   *         everything. That was correct while the only public URL was the
   *         throwaway *.vercel.app one: index that and you end up with two
   *         competing copies, plus canonical tags pointing at a domain that
   *         didn't exist yet.
   *
   * Now true. The preconditions are all met:
   *   • mogadoradventure.com is registered and its A record points at Vercel
   *   • www 308-redirects to the apex, so there is one canonical hostname
   *   • PUBLIC_SITE_URL is set in the Vercel project, so `site` in
   *     astro.config.mjs matches the live domain exactly
   *
   * Turning this back to false pulls the site out of Google. Don't, unless
   * you are deliberately de-indexing.
   */
  indexable: true,

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
   * Your Google Business Profile review link.
   *
   * Get the official one from the GBP dashboard: "Ask for reviews" → it gives
   * a short https://g.page/r/…/review link. That's the only form guaranteed to
   * open the review box directly, so it's worth the two clicks — this link
   * goes on the QR card guides hand out after every tour.
   */
  googleReviewUrl: "",

  /**
   * Public Google Maps place URL. Built from the profile's CID, which is the
   * stable identifier — place URLs containing a name and @lat,lng break if the
   * listing is ever renamed or moved.
   */
  googleMapsUrl: "https://maps.google.com/?cid=12071693882875441050",

  /**
   * Rating shown on the Google Business Profile.
   *
   * NOT hand-maintained. Both values come from google-reviews.json, which
   * scripts/fetch-google-reviews.mjs refreshes from the Places API before every
   * build — see that file for how to switch it on. Editing them here does
   * nothing.
   *
   * They have to track the profile automatically because the badge sits next to
   * a link to that profile: a visitor is one click away from catching a stale
   * number, on the page where they decide whether to trust you with a booking.
   *
   * Displayed visually only. It is deliberately NOT emitted as schema.org
   * aggregateRating: Google's structured-data policy forbids marking up
   * ratings your own site didn't collect, and importing them from your own GBP
   * risks a manual action. See REVIEW_STATS in lib/schema.ts.
   *
   * The badge hides itself everywhere when the count is 0.
   */
  googleRating: GOOGLE_REVIEWS.rating,
  googleReviewCount: GOOGLE_REVIEWS.reviewCount,
} as const;

export const hasAnalytics = () => CONFIG.ga4Id.length > 0;
export const hasFormBackend = () => CONFIG.web3formsKey.length > 0;
