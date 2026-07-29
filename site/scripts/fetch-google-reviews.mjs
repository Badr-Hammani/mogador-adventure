/**
 * Pulls the live Google rating into src/data/google-reviews.json at build time.
 *
 * ── Why this exists ──────────────────────────────────────────────────────────
 * The rating badge is shown next to a link to the Google profile. Anyone can
 * click it and check. A hardcoded number is therefore not "slightly stale" — it
 * is a claim the visitor can immediately catch being wrong, on the page where
 * they decide whether to trust you with a booking.
 *
 * ── Why build time and not the browser ───────────────────────────────────────
 * A browser fetch would have to ship the API key to every visitor, where it can
 * be lifted and spent against your billing account. This runs on the build
 * machine, so the key stays in the Vercel project settings and the number is
 * baked into the HTML — no request, no layout shift, no cost per pageview.
 *
 * ── This script must never fail the build ────────────────────────────────────
 * No key, no network, a Google outage, a malformed response: every path exits 0
 * and leaves the committed JSON in place. The site then builds with the last
 * known-good number. Losing a deploy of the whole site because a rating badge
 * could not be refreshed would be a bad trade.
 *
 * Run manually:  npm run reviews
 * Runs automatically before every `npm run build` (npm's prebuild hook).
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(HERE, "../src/data/google-reviews.json");

const API_KEY = process.env.GOOGLE_PLACES_API_KEY?.trim();

/**
 * Pinned, so no lookup call is made and there is no chance of a search
 * resolving to one of the several other Essaouira businesses with "Mogador" in
 * the name. Read off the review link in the GBP dashboard, which resolves to
 * search.google.com/local/writereview?placeid=<this>.
 *
 * Not a secret — it is in the public review link on the QR card. The env var
 * only exists so the listing can be re-pointed without a code change.
 */
const PLACE_ID =
  process.env.GOOGLE_PLACE_ID?.trim() || "ChIJZfP0wnybrQ0Rmu8LvqBFh6c";

/** Used only to resolve the place ID when GOOGLE_PLACE_ID isn't set. */
const SEARCH_QUERY = "Mogador adventures, Diabat, Essaouira, Morocco";

const FIELDS = "rating,userRatingCount,googleMapsUri,reviews";

/**
 * Give up without touching the file. The committed JSON stays authoritative.
 *
 * This throws rather than calling process.exit(). Calling process.exit() here
 * killed the process mid-flight while the HTTPS socket was still closing, which
 * trips a libuv assertion on Windows and exits 127 — turning "could not refresh
 * the rating" into "the whole deploy failed", which is the one outcome this
 * script exists to avoid. Unwinding normally lets Node exit 0 on its own.
 */
class Skip extends Error {}
function skip(reason) {
  throw new Skip(reason);
}

async function api(url, init) {
  const res = await fetch(url, {
    ...init,
    // A hung request would otherwise stall the build indefinitely.
    signal: AbortSignal.timeout(10_000),
    headers: {
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": init?.fieldMask ?? FIELDS,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    // Google puts the useful part in error.message — surface it, because
    // "REQUEST_DENIED" almost always means billing or an API restriction
    // rather than anything wrong with this code.
    const msg = body?.error?.message ?? `HTTP ${res.status}`;
    throw new Error(msg);
  }
  return body;
}

async function resolvePlaceId() {
  if (PLACE_ID) return PLACE_ID;

  const found = await api("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    body: JSON.stringify({ textQuery: SEARCH_QUERY, maxResultCount: 1 }),
    fieldMask: "places.id,places.displayName,places.formattedAddress",
  });

  const place = found?.places?.[0];
  if (!place?.id) throw new Error(`no place matched "${SEARCH_QUERY}"`);

  console.log(
    `[google-reviews] resolved "${place.displayName?.text ?? "?"}" ` +
      `(${place.formattedAddress ?? "no address"})`,
  );
  console.log(
    `[google-reviews] set GOOGLE_PLACE_ID=${place.id} to pin this and skip the lookup.`,
  );
  return place.id;
}

function readExisting() {
  try {
    return JSON.parse(readFileSync(OUT, "utf8"));
  } catch {
    return null;
  }
}

async function main() {
  if (!API_KEY) skip("GOOGLE_PLACES_API_KEY is not set");

  const id = await resolvePlaceId();
  const place = await api(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(id)}`,
  );

  const rating = Number(place?.rating);
  const count = Number(place?.userRatingCount);

  // A profile that briefly reports 0 reviews, or a response missing the fields
  // entirely, would blank the badge site-wide. Refuse anything implausible and
  // keep what we had.
  if (!Number.isFinite(rating) || rating <= 0 || rating > 5) {
    skip(`implausible rating in response: ${JSON.stringify(place?.rating)}`);
  }
  if (!Number.isInteger(count) || count < 1) {
    skip(`implausible review count: ${JSON.stringify(place?.userRatingCount)}`);
  }

  const previous = readExisting();

  const data = {
    _comment:
      "GENERATED by scripts/fetch-google-reviews.mjs — do not hand-edit. " +
      "Edited by hand it will be overwritten on the next build. This file is " +
      "committed so builds without an API key still have a real number.",
    rating,
    reviewCount: count,
    googleMapsUri: place?.googleMapsUri ?? previous?.googleMapsUri ?? "",
    fetchedAt: new Date().toISOString(),
    /*
     * Up to 5 reviews, chosen by Google, kept for reference only — nothing
     * renders from here. The testimonials on the site are hand-translated into
     * five languages and hand-picked; see TESTIMONIALS in src/data/content.ts.
     * Use this list to spot new reviews worth transcribing.
     */
    latestReviews: (place?.reviews ?? []).map((r) => ({
      author: r?.authorAttribution?.displayName ?? "",
      rating: r?.rating ?? null,
      when: r?.relativePublishTimeDescription ?? "",
      text: r?.originalText?.text ?? r?.text?.text ?? "",
    })),
  };

  writeFileSync(OUT, `${JSON.stringify(data, null, 2)}\n`, "utf8");

  const moved =
    previous && (previous.rating !== rating || previous.reviewCount !== count);
  console.log(
    `[google-reviews] ${rating} from ${count} reviews` +
      (moved
        ? ` (was ${previous.rating} from ${previous.reviewCount})`
        : " (unchanged)"),
  );
}

main().catch((err) => {
  console.log(`[google-reviews] skipped — ${err.message}`);
  console.log("[google-reviews] keeping the committed values.");
  // Deliberately leaves the exit code at 0: a rating that could not be
  // refreshed is not a reason to fail the deploy.
});
