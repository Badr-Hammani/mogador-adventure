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
| `googleReviewUrl` | The "leave a review" button on `/reviews/`. | Your Google Business Profile |
| `googleMapsUrl` | Directions link. | Your Google Business Profile |

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

The site is a plain static folder — `dist/` can go on any host.

### Cloudflare Pages (recommended: free, fast, global)

```bash
npx wrangler pages deploy dist --project-name mogador-adventures
```

Or connect the Git repo at dash.cloudflare.com → Workers & Pages:
build command `npm run build`, output directory `dist`.

### Netlify

`netlify.toml` is already configured. Connect the repo, or:

```bash
npx netlify deploy --prod --dir dist
```

### After the domain is live

1. Confirm `site` in `astro.config.mjs` matches the real domain exactly —
   it builds every canonical, hreflang and sitemap URL.
2. Pick www or non-www and 301 the other. Forever.
3. Submit `https://yourdomain.com/sitemap.xml` in Google Search Console.
4. Validate a few page types at search.google.com/test/rich-results.
