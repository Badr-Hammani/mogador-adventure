# Mogador Adventures — website

Static site built with Astro. 109 pages across 5 languages, no backend, no database.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site locally
```

---

## ⚠️ Fill these in before you promote the site

Three files, and nothing else in the codebase needs touching.

### 1. `src/data/pricing.ts` — prices

Transcribed from the operator's own printed rate card (July 2026). Every price
on the site — page copy, price tables, and the `Offer` structured data Google
reads to show a price in search results — comes from this one file.

**Quad prices are per quad, not per person.** One machine with one rider, or
one machine carrying two:

| Quad tour | 1 rider | 2 riders |
|---|---|---|
| 1 hour | €30 | €45 |
| 2 hours | €50 | €70 |
| 3 hours | €65 | €90 |
| Half day | €90 | €110 |
| Full day — Sidi Kaouki | €110 | €140 |
| Full day — Sidi M'Barek | €140 | €170 |

Camel, horseback, surf, yoga and cooking have **no published prices** — their
arrays are empty and the UI says "price on request". Don't invent figures; add
the real ones when the operator sends them.

### 2. `src/lib/config.ts` — accounts and keys

All optional. Leave one empty and that feature simply isn't rendered.

| Field | What it does | Where to get it |
|---|---|---|
| `ga4Id` | Injects Google Analytics + WhatsApp-click conversion tracking. Empty = no analytics script at all, so no cookie banner needed. | analytics.google.com |
| `googleSiteVerification` | Search Console meta-tag verification. Prefer DNS verification if you can. | search.google.com/search-console |
| `web3formsKey` | Emails you a copy of every booking enquiry so abandoned ones aren't lost. | web3forms.com (free) |
| `googleReviewUrl` | The "leave a review" button on `/reviews/`. **Still empty.** | GBP dashboard → "Ask for reviews" → gives a `g.page/r/…/review` short link |
| `googleMapsUrl` | Directions link + the rating badge's target. **Set.** | Built from the profile CID `12071693882875441050` |
| `googleRating` / `googleReviewCount` | The rating badge in the hero and on `/reviews/`. | **Not edited here** — fetched automatically, see below. |
| `GOOGLE_PLACES_API_KEY` (Vercel env var) | Switches on the automatic rating refresh. | See below. |

### The Google Business Profile

The listing is **"Mogador adventures"**, category *Location de quad*, at
`31.4788867, -9.7655976` (Diabat). Those coordinates are in `lib/site.ts` and
feed the LocalBusiness schema, the geo meta tags and the booking-page map —
they must match the profile, because Google cross-checks them when ranking the
map pack.

### The rating badge updates itself

The number next to the stars sits beside a link to the Google profile, so a
visitor is one click from catching it if it's stale. It is therefore not
hand-maintained:

```
scripts/fetch-google-reviews.mjs   runs before every build (npm prebuild hook)
  → src/data/google-reviews.json   committed, the last known-good number
    → CONFIG.googleRating / googleReviewCount
```

**Switching it on** — one environment variable:

1. console.cloud.google.com → new project → enable **Places API (New)**.
   It requires a billing account on the project. One call per build, so a daily
   rebuild is ~30 calls/month; check the current free monthly allowance on
   Google's pricing page, but that volume has always sat well inside it.
2. Create an API key, restrict it to the Places API.
3. Vercel → Settings → Environment Variables → `GOOGLE_PLACES_API_KEY`.

Without the key the script prints "skipped" and the build uses the committed
JSON. It is written so that no failure path — missing key, network error,
malformed response, an implausible rating — can fail a build or blank the
badge. Losing a whole deploy over a rating badge would be a bad trade.

The build log tells you which happened:

```
[google-reviews] 4.9 from 47 reviews (was 5 from 3)
[google-reviews] skipped — GOOGLE_PLACES_API_KEY is not set
```

**Keeping it fresh.** A static site only rebuilds when something pushes, so
`.github/workflows/refresh-reviews.yml` pokes a Vercel Deploy Hook once a day.
Setup notes are in that file. Without it the number is still correct — just
only as of the last deploy.

**The review *text* is deliberately still manual.** The API returns up to five
reviews of Google's choosing, in one language. The testimonials on the site are
hand-picked and hand-translated into five languages, which is worth more than
freshness for three paragraphs of copy. New reviews land in `latestReviews` in
the JSON as a prompt to transcribe the good ones.

### Testimonials

Reviews are transcribed into `TESTIMONIALS` in `data/content.ts`. They are
**real**, and replaced the three sample testimonials that shipped with the
design prototype. Add new ones there as they arrive, and update
`googleReviewCount` to match.

### 3. `src/lib/schema.ts` — `REVIEW_STATS`

Currently `enabled: false`, which is correct and deliberate. Once you genuinely
have Google reviews, set `enabled: true` and enter the real count and average.
That puts ⭐ star ratings in your search results — the single biggest
click-through improvement available.

**Do not enable it before the reviews exist.** Publishing a rating you can't
evidence is a structured-data policy violation and can earn a manual penalty.

---

## Adding photos

You have 4 real photos; the design uses ~40 slots. Every slot without a photo
renders a branded gradient panel with the shot description, so nothing looks
broken — but real photos are a significant ranking and conversion factor.

To fill a slot:

1. Drop the file into `src/assets/photos/`
2. Reference the filename in the relevant data file:
   - Activity hero → `src/data/activities.ts`, `ACTIVITY_META[key].photo`
   - Gallery tile → `src/data/content.ts`, `GALLERY[].photo`
   - Blog post → `src/data/blog.ts`, `POSTS[].photo`
   - Team portraits → `src/views/AboutView.astro`

Astro handles resizing, WebP conversion and `srcset` automatically. Upload the
biggest version you have.

The alt text already written on each placeholder doubles as the photographer's
shot list.

---

## Adding content

| To add | Edit |
|---|---|
| A blog post | `src/data/blog.ts` — add to `POSTS`. Routing, sitemap and hreflang follow automatically. |
| A quad sub-page | `src/lib/routes.ts` (`QUAD_VARIANT_SLUGS`) + `src/data/quad-variants.ts` |
| A package | `src/lib/routes.ts` (`PACKAGE_SLUGS`) + `src/data/packages.ts` + `src/data/pricing.ts` |
| An FAQ | `src/data/content.ts` (`GENERAL_FAQ`) — feeds the FAQ page and its FAQPage schema |
| Prices | `src/data/pricing.ts` only |

### Promoting a language to full coverage

ES, DE and AR currently ship the core commercial pages. EN and FR have
everything. To promote a language:

1. Add its strings to `src/data/packages.ts`, `quad-variants.ts`, `blog.ts` and
   the legal section of `pages.ts`
2. Add the code to `FULL_LANGS` in `src/lib/routes.ts`

Routing, the sitemap and hreflang all follow. Don't add it to `FULL_LANGS`
before the content exists — half-empty locales are worse than absent ones.

---

## Architecture

```
src/
  lib/
    routes.ts       ← THE URL MAP. Localised slugs per language + hreflang.
    i18n.ts         ← Languages + shared UI strings (nav, buttons, forms)
    site.ts         ← NAP, phone, email, socials, money()
    schema.ts       ← JSON-LD builders
    config.ts       ← Analytics / form / review account IDs
    pages-index.ts  ← Enumerates every page; feeds router AND sitemap
    photos.ts       ← Image registry + graceful placeholder fallback
  data/             ← All content, per language
  components/       ← Header, Footer, PriceTable, Accordion, Photo, …
  views/            ← One per page type
  pages/
    [...path].astro ← Single router for all 109 pages
    sitemap.xml.ts  ← Hand-rolled, with xhtml:link hreflang alternates
    robots.txt.ts
    404.astro
```

Two invariants worth preserving:

1. **Never hand-write an internal `href`.** Always `pathFor(key, lang, params)`.
   It is the only thing keeping URLs, the language switcher, hreflang and the
   sitemap in agreement.
2. **`pages-index.ts` is the single source of pages.** The router and the
   sitemap both read it, so a page can't exist in one and be missing from the
   other.

### Why the language system is built this way

The original prototype stored language in `localStorage` and reloaded with a
`?lang=` parameter. Googlebot has neither your localStorage nor your `<select>`,
and treats `?lang=` as a duplicate — so only English would ever have been
indexed, and French (the biggest inbound market for Essaouira) would have been
invisible.

This build uses path-based routing with fully localised slugs
(`/fr/activites/quad-essaouira/`, not `/fr/activities/quad-biking/`) and
reciprocal hreflang emitted only for languages where a page genuinely exists.

---

## Deploying

**Live at https://mogadoradventure.com** — Vercel, deployed from `main` on
every push. GitHub Pages has been retired; there is exactly one public copy.

`site` is still derived rather than hardcoded (see the comment at the top of
`astro.config.mjs`) because it builds every canonical URL, hreflang tag and
sitemap entry. Get it wrong and the build still succeeds while every one of
those points somewhere that doesn't exist.

| Hostname | What it does |
|---|---|
| `mogadoradventure.com` | Canonical. Everything points here. |
| `www.mogadoradventure.com` | 308 → apex |
| `mogador-adventure.vercel.app` | Vercel's own URL. Still serves, but self-canonicalises to the apex. |

DNS lives at Namecheap: `A @ → 216.198.79.1` and `CNAME www → cname.vercel-dns.com.`

### Vercel

**The Root Directory must be `site`** — Project Settings → Build and
Deployment → Root Directory. The Astro project lives in a subfolder; leave this
empty and Vercel finds no `package.json`, "succeeds" in about 3 seconds, and
serves a 404 for every URL. That is the single most likely thing to be wrong.

`PUBLIC_SITE_URL` is set to `https://mogadoradventure.com` (Production only),
which is what `site` resolves to. `vercel.json` supplies the security and
cache headers. Note that `public/_headers` is Cloudflare/Netlify-only and does
nothing here.

Deployment Protection is off, so the site is publicly viewable. Turning it on
(Settings → Deployment Protection) makes every URL redirect to a Vercel login.

### Still to do

1. Submit `https://mogadoradventure.com/sitemap.xml` in Google Search Console
   (verify by DNS TXT at Namecheap, or paste the token into
   `googleSiteVerification`).
2. Validate a few page types at search.google.com/test/rich-results.
3. Fill in `web3formsKey` and `googleReviewUrl` — see the table above.
