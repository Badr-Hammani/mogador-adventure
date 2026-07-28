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

### 1. `src/data/pricing.ts` — **confirm every price**

The prices are benchmarked against what Essaouira competitors publicly charge
in July 2026. **They are a starting point, not your rate card.** Every price on
the site — page copy, price tables, and the `Offer` structured data Google reads
to show a price in search results — comes from this one file.

Current values (EUR, per person):

| Activity | Prices |
|---|---|
| Quad | 1h €30 · 2h €45 · 3h €65 · 4h €85 |
| Surf | group €30 · private €55 · 3-day €80 |
| Camel | 1h €20 · 2h €35 · sunset €25 |
| Horse | 1h €30 · 2h €50 |
| Cooking | €40 |
| Yoga | €20 · 5-pack €85 |
| Packages | quad+camel €60 · surf+yoga €45 · family €40 · 3-day €195 |

### 2. `src/lib/config.ts` — accounts and keys

All optional. Leave one empty and that feature simply isn't rendered.

| Field | What it does | Where to get it |
|---|---|---|
| `ga4Id` | Injects Google Analytics + WhatsApp-click conversion tracking. Empty = no analytics script at all, so no cookie banner needed. | analytics.google.com |
| `googleSiteVerification` | Search Console meta-tag verification. Prefer DNS verification if you can. | search.google.com/search-console |
| `web3formsKey` | Emails you a copy of every booking enquiry so abandoned ones aren't lost. | web3forms.com (free) |
| `googleReviewUrl` | The "leave a review" button on `/reviews/`. **Still empty.** | GBP dashboard → "Ask for reviews" → gives a `g.page/r/…/review` short link |
| `googleMapsUrl` | Directions link + the rating badge's target. **Set.** | Built from the profile CID `12071693882875441050` |
| `googleRating` / `googleReviewCount` | The rating badge in the hero and on `/reviews/`. **Set to 5.0 / 3.** | Must be kept in sync with the live profile — it's shown as a factual claim next to a link that proves it. Set the count to 0 to hide the badge. |

### The Google Business Profile

The listing is **"Mogador adventures"**, category *Location de quad*, at
`31.4788867, -9.7655976` (Diabat). Those coordinates are in `lib/site.ts` and
feed the LocalBusiness schema, the geo meta tags and the booking-page map —
they must match the profile, because Google cross-checks them when ranking the
map pack.

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

The same commit deploys to two hosts, which is why `site` and `base` are
derived rather than hardcoded (see the comment at the top of
`astro.config.mjs`). Get those wrong and the build still succeeds while every
link and asset 404s.

| Host | Serves at | How `site`/`base` are set |
|---|---|---|
| **Vercel** (primary) | domain root | `VERCEL_PROJECT_PRODUCTION_URL`, `base: "/"` |
| **GitHub Pages** | `/mogador-adventure/` | `--site`/`--base` flags in `.github/workflows/deploy.yml` |

### Vercel

**The Root Directory must be `site`** — Project Settings → Build and
Deployment → Root Directory. The Astro project lives in a subfolder; leave this
empty and Vercel finds no `package.json`, "succeeds" in about 3 seconds, and
serves a 404 for every URL. That is the single most likely thing to be wrong.

`vercel.json` supplies the security and cache headers. Note that
`public/_headers` is Cloudflare/Netlify-only and does nothing on either
current host — on GitHub Pages that means HTML sits in cache for 10 minutes
with no way to override it.

Deployment Protection is off, so the site is publicly viewable. Turning it on
(Settings → Deployment Protection) makes every URL redirect to a Vercel login.

### GitHub Pages

Pushes to `main` trigger `.github/workflows/deploy.yml`. Pages source must be
**GitHub Actions**, not "Deploy from a branch".

### After the domain is live

1. Point the domain at **one** host and retire the other. Two public copies of
   the same site is a duplicate-content problem — harmless only while both are
   `noindex`.
2. Set `PUBLIC_SITE_URL` in the Vercel project's environment variables.
3. Flip `indexable: true` in `src/lib/config.ts`.
4. Pick www or non-www and 301 the other. Forever.
5. Submit `https://yourdomain.com/sitemap.xml` in Google Search Console.
6. Validate a few page types at search.google.com/test/rich-results.
