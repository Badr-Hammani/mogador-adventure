/**
 * Single source of truth for business facts (NAP), social handles and links.
 *
 * NAP = Name / Address / Phone. These strings must be byte-identical here, on
 * the Google Business Profile, and on every directory listing — inconsistent
 * NAP is one of the most common local-SEO own-goals.
 */

export const SITE = {
  name: "Mogador Adventures",
  legalName: "Mogador Adventures",
  domain: "https://mogadoradventures.com",
  founded: "2019",

  phone: "+212 662 169 221",
  phoneE164: "+212662169221",
  whatsappNumber: "212662169221",
  email: "hello@mogadoradventures.com",

  address: {
    locality: "Essaouira",
    region: "Marrakech-Safi",
    country: "MA",
    countryName: "Morocco",
    postalCode: "44000",
  },

  /*
   * Taken from the live Google Business Profile ("Mogador adventures",
   * category "Location de quad"), NOT the generic centre of Essaouira that was
   * here before. This is the departure point in Diabat, ~3.5 km south-west of
   * the medina.
   *
   * It must match the GBP exactly: these coordinates feed the LocalBusiness
   * schema, the geo meta tags and the map on the booking page, and Google
   * cross-checks them against the profile when ranking the map pack.
   */
  geo: {
    lat: 31.4788867,
    lng: -9.7655976,
  },

  /** Areas we actually operate in — used for LocalBusiness areaServed + copy. */
  areaServed: ["Essaouira", "Diabat", "Sidi Kaouki", "Ounagha", "Mogador"],

  social: {
    instagram: "https://instagram.com/mogador_adventures",
    instagramHandle: "@mogador_adventures",
    tiktok: "https://tiktok.com/@essasports2",
    tiktokHandle: "@essasports2",
  },

  /** Opening hours — LocalBusiness schema + GBP must agree. */
  hours: {
    opens: "08:00",
    closes: "20:00",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },

  copyrightYear: 2026,
} as const;

/** Currency used for every published price and every Offer in schema. */
export const CURRENCY = "EUR";
export const CURRENCY_SYMBOL = "€";

/**
 * Format a price for display.
 *
 * Use this rather than writing `{CURRENCY_SYMBOL}{price}` across two lines in a
 * template — Astro inserts whitespace between expressions on separate lines,
 * which renders as "€ 30".
 */
export function money(amount: number): string {
  return `${CURRENCY_SYMBOL}${amount}`;
}

/**
 * Builds a WhatsApp deep link with a pre-filled message.
 * Every CTA on the site routes through here so the message is always scoped
 * to whatever the visitor was looking at — that context is what makes the
 * first reply fast, and fast replies are what close bookings.
 */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailLink(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${SITE.email}?${params.toString()}`;
}

export function telLink(): string {
  return `tel:${SITE.phoneE164}`;
}
