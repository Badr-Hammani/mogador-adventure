/**
 * PRICES — from the operator's own printed rate card (July 2026).
 *
 * These are no longer estimates. They are transcribed from the laminated card
 * used at the shop, and they replace the competitor-benchmarked guesses that
 * were here before.
 *
 * ── The pricing model, which is easy to get wrong ────────────────────────────
 * Quad prices are PER QUAD, not per person. The two columns on the card are
 * "1 person" and "2 people" — meaning one machine carrying one rider, or one
 * machine carrying two. So two people sharing a 2-hour tour pay €70 for the
 * pair (€35 each), not €50 each.
 *
 * An earlier version of this site claimed two riders shared at the single-rider
 * price. That was invented and wrong; it is corrected here and on the prices
 * page.
 *
 * ── Activities without published prices ─────────────────────────────────────
 * The card lists camel, horseback, yoga and cooking as "other activities" with
 * no prices. Their arrays are therefore empty, and the UI shows "price on
 * request" rather than a number. Do not invent figures — send the real ones
 * and they go straight in here.
 */

import type { Lang } from "../lib/i18n";

export interface PriceOption {
  key: string;
  /** EUR, for one quad carrying ONE rider. */
  price: number;
  /** EUR, for one quad carrying TWO riders. Omit where sharing isn't offered. */
  priceTwo?: number;
  /** Minutes — used for ISO 8601 duration in schema. */
  durationMin: number;
  label: Record<Lang, string>;
  /** Short route description, straight from the rate card. */
  route?: Record<Lang, string>;
  popular?: boolean;
}

const dur = (
  en: string,
  fr: string,
  es: string,
  de: string,
  ar: string,
): Record<Lang, string> => ({ en, fr, es, de, ar });

export const PRICING: Record<string, PriceOption[]> = {
  quad: [
    {
      key: "quad-1h",
      price: 30,
      priceTwo: 45,
      durationMin: 60,
      label: dur("1 hour", "1 heure", "1 hora", "1 Stunde", "ساعة واحدة"),
      route: dur(
        "Diabat's beach and forest trails.",
        "La plage et les pistes forestières de Diabat.",
        "La playa de Diabat y los senderos del bosque.",
        "Diabats Strand und Waldwege.",
        "شاطئ ديابات ومسارات الغابة.",
      ),
    },
    {
      key: "quad-2h",
      price: 50,
      priceTwo: 70,
      durationMin: 120,
      popular: true,
      label: dur("2 hours", "2 heures", "2 horas", "2 Stunden", "ساعتان"),
      route: dur(
        "Beach, forest trails, wild dunes and a natural freshwater spring.",
        "Plage, pistes forestières, dunes sauvages et une source d'eau douce naturelle.",
        "Playa, senderos del bosque, dunas salvajes y un manantial natural de agua dulce.",
        "Strand, Waldwege, wilde Dünen und eine natürliche Süßwasserquelle.",
        "الشاطئ ومسارات الغابة والكثبان البرية وعين ماء عذبة طبيعية.",
      ),
    },
    {
      key: "quad-3h",
      price: 65,
      priceTwo: 90,
      durationMin: 180,
      label: dur("3 hours", "3 heures", "3 horas", "3 Stunden", "3 ساعات"),
      route: dur(
        "Diabat to Cap Sim — beach paths, forest trails, wild dunes and a hidden freshwater spring.",
        "De Diabat au Cap Sim — sentiers de plage, pistes forestières, dunes sauvages et une source cachée.",
        "De Diabat a Cap Sim: caminos de playa, senderos del bosque, dunas salvajes y un manantial escondido.",
        "Von Diabat zum Cap Sim — Strandwege, Waldpfade, wilde Dünen und eine versteckte Quelle.",
        "من ديابات إلى كاب سيم — مسارات الشاطئ والغابة والكثبان البرية وعين ماء مخفية.",
      ),
    },
    {
      key: "quad-half-day",
      price: 90,
      priceTwo: 110,
      durationMin: 240,
      label: dur(
        "Half day",
        "Demi-journée",
        "Medio día",
        "Halber Tag",
        "نصف يوم",
      ),
      route: dur(
        "Forest and dunes all the way to the small fishing port of Taguenza, and Cap Sim.",
        "Forêt et dunes jusqu'au petit port de pêche de Taguenza, et Cap Sim.",
        "Bosque y dunas hasta el pequeño puerto pesquero de Taguenza, y Cap Sim.",
        "Wald und Dünen bis zum kleinen Fischerhafen Taguenza und zum Cap Sim.",
        "الغابة والكثبان حتى ميناء الصيد الصغير تاݣنزا، وكاب سيم.",
      ),
    },
    {
      key: "quad-day-sidi-kaouki",
      price: 110,
      priceTwo: 140,
      durationMin: 480,
      label: dur(
        "Full day — Sidi Kaouki",
        "Journée — Sidi Kaouki",
        "Día completo — Sidi Kaouki",
        "Ganzer Tag — Sidi Kaouki",
        "يوم كامل — سيدي كاوكي",
      ),
      route: dur(
        "Wild beach, riding through dunes right by the shore.",
        "Plage sauvage, à travers les dunes au bord du rivage.",
        "Playa salvaje, atravesando las dunas junto a la orilla.",
        "Wilder Strand, durch die Dünen direkt am Ufer.",
        "شاطئ بري وركوب بين الكثبان على حافة الماء.",
      ),
    },
    {
      key: "quad-day-sidi-mbarek",
      price: 140,
      priceTwo: 170,
      durationMin: 480,
      label: dur(
        "Full day — Sidi M'barek",
        "Journée — Sidi M'barek",
        "Día completo — Sidi M'barek",
        "Ganzer Tag — Sidi M'barek",
        "يوم كامل — سيدي مبارك",
      ),
      route: dur(
        "The Sidi M'barek waterfall, a wild beach, and dunes along the shore.",
        "La cascade de Sidi M'barek, une plage sauvage et les dunes le long du rivage.",
        "La cascada de Sidi M'barek, una playa salvaje y dunas junto a la orilla.",
        "Der Wasserfall von Sidi M'barek, ein wilder Strand und Dünen entlang der Küste.",
        "شلال سيدي مبارك وشاطئ بري وكثبان على طول الساحل.",
      ),
    },
  ],

  /*
   * No published prices on the rate card — these are listed there as "other
   * activities" only. Empty until the operator supplies real figures; the UI
   * falls back to "price on request".
   */
  surf: [],
  camel: [],
  horse: [],
  cooking: [],
  yoga: [],
};

/**
 * Packages are not on the printed rate card either. Left empty rather than
 * invented — see PACKAGE_META in data/packages.ts, which still describes the
 * combinations, just without a price.
 */
export const PACKAGE_PRICING: Record<
  string,
  { price: number; wasPrice: number; durationMin: number; label: Record<Lang, string> }
> = {};

/** Cheapest option for an activity — powers "From €X". 0 = price on request. */
export function fromPrice(activityKey: string): number {
  const options = PRICING[activityKey];
  if (!options?.length) return 0;
  return Math.min(...options.map((o) => o.price));
}

export function highPrice(activityKey: string): number {
  const options = PRICING[activityKey];
  if (!options?.length) return 0;
  return Math.max(...options.map((o) => o.priceTwo ?? o.price));
}

export function hasPrices(activityKey: string): boolean {
  return (PRICING[activityKey]?.length ?? 0) > 0;
}

/** ISO 8601 duration, e.g. 150 -> "PT2H30M". Required by schema.org. */
export function isoDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}` || "PT0M";
}
