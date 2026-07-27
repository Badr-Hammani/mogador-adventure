/**
 * JSON-LD builders.
 *
 * Most local competitors ship no structured data at all, so this is one of the
 * cheapest advantages available: `Offer` puts a price directly in the search
 * result, `AggregateRating` puts stars there, and `FAQPage` doubles the height
 * of the listing. All of that raises click-through at the same ranking position.
 *
 * ⚠️ AggregateRating must reflect REAL review counts. See REVIEW_STATS below —
 * update it as Google reviews come in, and do not publish it until they exist.
 */

import { SITE, CURRENCY } from "./site";
import type { Lang } from "./i18n";

/**
 * ⚠️ SET THESE FROM YOUR ACTUAL GOOGLE BUSINESS PROFILE.
 * `enabled: false` means no AggregateRating is emitted anywhere — which is the
 * correct and safe state until the reviews are genuinely there. Publishing a
 * rating you cannot evidence is a structured-data policy violation and can
 * earn a manual action.
 */
export const REVIEW_STATS = {
  enabled: false,
  ratingValue: 0,
  reviewCount: 0,
};

type Json = Record<string, unknown>;

const ORG_ID = `${SITE.domain}/#organization`;

/** LocalBusiness — the sitewide entity. Emitted once, on every page. */
export function localBusinessSchema(lang: Lang): Json {
  const base: Json = {
    "@type": ["LocalBusiness", "TouristInformationCenter"],
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.domain,
    telephone: SITE.phoneE164,
    email: SITE.email,
    inLanguage: lang,
    priceRange: "€€",
    currenciesAccepted: CURRENCY,
    paymentAccepted: "Cash, Credit Card",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: SITE.areaServed.map((name) => ({ "@type": "Place", name })),
    sameAs: [SITE.social.instagram, SITE.social.tiktok],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SITE.hours.days,
        opens: SITE.hours.opens,
        closes: SITE.hours.closes,
      },
    ],
  };

  if (REVIEW_STATS.enabled && REVIEW_STATS.reviewCount > 0) {
    base.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: REVIEW_STATS.ratingValue,
      reviewCount: REVIEW_STATS.reviewCount,
    };
  }

  return base;
}

export interface OfferInput {
  name: string;
  price: number;
  /** ISO 8601, e.g. "PT2H". */
  duration?: string;
  url: string;
}

/**
 * Product + Offer for an activity or package page.
 * `lowPrice`/`highPrice` via AggregateOffer when several durations exist.
 */
export function productSchema(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
  offers: OfferInput[];
  lang: Lang;
}): Json {
  const prices = opts.offers.map((o) => o.price).filter((p) => p > 0);
  const schema: Json = {
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    brand: { "@type": "Brand", name: SITE.name },
    provider: { "@id": ORG_ID },
    inLanguage: opts.lang,
  };

  if (opts.image) schema.image = opts.image;

  if (prices.length === 1) {
    schema.offers = {
      "@type": "Offer",
      price: prices[0],
      priceCurrency: CURRENCY,
      availability: "https://schema.org/InStock",
      url: opts.url,
      priceValidUntil: `${SITE.copyrightYear}-12-31`,
    };
  } else if (prices.length > 1) {
    schema.offers = {
      "@type": "AggregateOffer",
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      priceCurrency: CURRENCY,
      offerCount: prices.length,
      availability: "https://schema.org/InStock",
      url: opts.url,
    };
  }

  if (REVIEW_STATS.enabled && REVIEW_STATS.reviewCount > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: REVIEW_STATS.ratingValue,
      reviewCount: REVIEW_STATS.reviewCount,
    };
  }

  return schema;
}

/** TouristTrip — a better fit than Product for multi-activity packages. */
export function touristTripSchema(opts: {
  name: string;
  description: string;
  url: string;
  price: number;
  lang: Lang;
}): Json {
  return {
    "@type": "TouristTrip",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: opts.lang,
    provider: { "@id": ORG_ID },
    itinerary: {
      "@type": "Place",
      name: `${SITE.address.locality}, ${SITE.address.countryName}`,
    },
    offers: {
      "@type": "Offer",
      price: opts.price,
      priceCurrency: CURRENCY,
      availability: "https://schema.org/InStock",
      url: opts.url,
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]): Json | null {
  if (!items.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; url: string }[],
): Json | null {
  if (crumbs.length < 2) return null;
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  lang: Lang;
}): Json {
  return {
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    inLanguage: opts.lang,
    image: opts.image,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
  };
}

export function websiteSchema(lang: Lang): Json {
  return {
    "@type": "WebSite",
    "@id": `${SITE.domain}/#website`,
    url: SITE.domain,
    name: SITE.name,
    inLanguage: lang,
    publisher: { "@id": ORG_ID },
  };
}

/** Wraps a set of nodes into a single @graph document. */
export function graph(nodes: (Json | null | undefined)[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  });
}
