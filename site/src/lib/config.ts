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
   * Google Search Console HTML-tag verification token (the content attribute
   * only, not the whole meta tag).
   *
   * This verifies the URL-prefix property https://mogadoradventure.com/ under
   * mogador.adventures@gmail.com. A DNS-verified *domain* property would be
   * better — it covers www, http and every subdomain in one — but that needs a
   * TXT record at Namecheap, and that account was logged out. The TXT value is
   * the same token as this one if you want to add it later:
   *
   *   TXT  @  google-site-verification=z5A-QCOmhdIt3x5V0sAksJ6nPpJaE5h_mRsLvHSVvm4
   *
   * DO NOT REMOVE once verified — Google re-checks periodically and silently
   * drops the property (and all its data) if the tag disappears.
   */
  googleSiteVerification: "z5A-QCOmhdIt3x5V0sAksJ6nPpJaE5h_mRsLvHSVvm4",

  /**
   * Booking-form backend. Web3Forms account is mogador.adventures@gmail.com,
   * form "Mogador Adventures — Booking form". Submissions email straight to
   * that inbox — that's what stops an abandoned enquiry from vanishing
   * without trace, since previously the only record of it existed in the
   * visitor's own WhatsApp/email draft if they never pressed send.
   *
   * This is Web3Forms' access key, not a secret — their own dashboard labels
   * it "a public key, safe in client-side code" (it authorises where
   * submissions get delivered, not who can read them), so it is fine
   * committed here same as googleSiteVerification above.
   */
  web3formsKey: "1bb1b8c7-9e82-41b2-9e7c-3f8694e64f83",

  /**
   * Your Google Business Profile review link.
   *
   * The official link from the GBP dashboard ("Demander des avis"). This is the
   * form that opens the review box directly rather than dropping people on the
   * profile to find it themselves — put this on the QR card guides hand out
   * after every tour.
   *
   * It resolves to search.google.com/local/writereview?placeid=ChIJZfP0wnyb
   * rQ0Rmu8LvqBFh6c — the same place ID pinned in scripts/fetch-google-reviews.mjs.
   */
  googleReviewUrl: "https://g.page/r/CZrvC76gRYenEBM/review",

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
