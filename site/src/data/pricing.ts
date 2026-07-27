/**
 * ⚠️  PRICES — CONFIRM THESE BEFORE PROMOTING THE SITE  ⚠️
 * ---------------------------------------------------------------------------
 * These figures are benchmarked against what Essaouira competitors publicly
 * charge (Diana Quad, Palma Quad, MogaQuad, Manawa, GetYourGuide listings) in
 * July 2026. They are a STARTING POINT, not your confirmed rate card.
 *
 * Every price on the website — page copy, price tables, and the `Offer`
 * structured data that Google reads to show a price in search results —
 * comes from this file and nowhere else. Change a number here and it updates
 * across all pages and all languages.
 *
 * Publishing prices is deliberate: most Essaouira competitors hide them behind
 * a contact form, which leaves "quad essaouira prix" wide open as a keyword and
 * makes their search results smaller than yours.
 *
 * All amounts are EUR, per person, and assumed to include guide, equipment and
 * hotel pickup within Essaouira.
 */

import type { Lang } from "../lib/i18n";

export interface PriceOption {
  key: string;
  /** EUR, per person. */
  price: number;
  /** Minutes — used for ISO 8601 duration in schema. */
  durationMin: number;
  /** Human duration label per language. */
  label: Record<Lang, string>;
  /** Flag the volume seller — rendered with a highlight. */
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
      durationMin: 60,
      label: dur("1 hour", "1 heure", "1 hora", "1 Stunde", "ساعة واحدة"),
    },
    {
      key: "quad-2h",
      price: 45,
      durationMin: 120,
      label: dur("2 hours", "2 heures", "2 horas", "2 Stunden", "ساعتان"),
      popular: true,
    },
    {
      key: "quad-3h",
      price: 65,
      durationMin: 180,
      label: dur("3 hours", "3 heures", "3 horas", "3 Stunden", "3 ساعات"),
    },
    {
      key: "quad-4h",
      price: 85,
      durationMin: 240,
      label: dur(
        "4 hours (half day)",
        "4 heures (demi-journée)",
        "4 horas (medio día)",
        "4 Stunden (halber Tag)",
        "4 ساعات (نصف يوم)",
      ),
    },
  ],

  surf: [
    {
      key: "surf-group",
      price: 30,
      durationMin: 150,
      label: dur(
        "2.5 hours, small group",
        "2h30, petit groupe",
        "2,5 horas, grupo reducido",
        "2,5 Stunden, Kleingruppe",
        "ساعتان ونصف، مجموعة صغيرة",
      ),
      popular: true,
    },
    {
      key: "surf-private",
      price: 55,
      durationMin: 120,
      label: dur(
        "2 hours, private",
        "2 heures, cours privé",
        "2 horas, privada",
        "2 Stunden, privat",
        "ساعتان، درس خاص",
      ),
    },
    {
      key: "surf-3day",
      price: 80,
      durationMin: 450,
      label: dur(
        "3-day course",
        "Stage 3 jours",
        "Curso de 3 días",
        "3-Tage-Kurs",
        "دورة 3 أيام",
      ),
    },
  ],

  camel: [
    {
      key: "camel-1h",
      price: 20,
      durationMin: 60,
      label: dur("1 hour", "1 heure", "1 hora", "1 Stunde", "ساعة واحدة"),
      popular: true,
    },
    {
      key: "camel-2h",
      price: 35,
      durationMin: 120,
      label: dur("2 hours", "2 heures", "2 horas", "2 Stunden", "ساعتان"),
    },
    {
      key: "camel-sunset",
      price: 25,
      durationMin: 90,
      label: dur(
        "Sunset ride, 1.5 hours",
        "Coucher de soleil, 1h30",
        "Atardecer, 1,5 horas",
        "Sonnenuntergang, 1,5 Stunden",
        "عند الغروب، ساعة ونصف",
      ),
    },
  ],

  horse: [
    {
      key: "horse-1h",
      price: 30,
      durationMin: 60,
      label: dur("1 hour", "1 heure", "1 hora", "1 Stunde", "ساعة واحدة"),
    },
    {
      key: "horse-2h",
      price: 50,
      durationMin: 120,
      label: dur("2 hours", "2 heures", "2 horas", "2 Stunden", "ساعتان"),
      popular: true,
    },
  ],

  cooking: [
    {
      key: "cooking-class",
      price: 40,
      durationMin: 210,
      label: dur(
        "3.5 hours, market + kitchen",
        "3h30, marché + cuisine",
        "3,5 horas, mercado + cocina",
        "3,5 Stunden, Markt + Küche",
        "3 ساعات ونصف، السوق والمطبخ",
      ),
      popular: true,
    },
  ],

  yoga: [
    {
      key: "yoga-session",
      price: 20,
      durationMin: 60,
      label: dur(
        "60 minutes",
        "60 minutes",
        "60 minutos",
        "60 Minuten",
        "60 دقيقة",
      ),
      popular: true,
    },
    {
      key: "yoga-5pack",
      price: 85,
      durationMin: 300,
      label: dur(
        "5-session pass",
        "Carnet 5 séances",
        "Bono de 5 sesiones",
        "5er-Karte",
        "بطاقة 5 حصص",
      ),
    },
  ],
};

/** Package pricing — per person, and the saving vs booking the parts separately. */
export const PACKAGE_PRICING: Record<
  string,
  { price: number; wasPrice: number; durationMin: number; label: Record<Lang, string> }
> = {
  quadCamel: {
    price: 60,
    wasPrice: 70,
    durationMin: 240,
    label: dur(
      "Half day",
      "Demi-journée",
      "Medio día",
      "Halber Tag",
      "نصف يوم",
    ),
  },
  surfYoga: {
    price: 45,
    wasPrice: 50,
    durationMin: 240,
    label: dur("Full day", "Journée", "Día completo", "Ganzer Tag", "يوم كامل"),
  },
  familyDay: {
    price: 40,
    wasPrice: 50,
    durationMin: 300,
    label: dur(
      "Full day, per person",
      "Journée, par personne",
      "Día completo, por persona",
      "Ganzer Tag, pro Person",
      "يوم كامل، للشخص",
    ),
  },
  threeDay: {
    price: 195,
    wasPrice: 235,
    durationMin: 1440,
    label: dur("3 days", "3 jours", "3 días", "3 Tage", "3 أيام"),
  },
};

/** Cheapest option for an activity — powers "From €X" labels and Offer lowPrice. */
export function fromPrice(activityKey: string): number {
  const options = PRICING[activityKey];
  if (!options?.length) return 0;
  return Math.min(...options.map((o) => o.price));
}

export function highPrice(activityKey: string): number {
  const options = PRICING[activityKey];
  if (!options?.length) return 0;
  return Math.max(...options.map((o) => o.price));
}

/** ISO 8601 duration, e.g. 150 -> "PT2H30M". Required by schema.org. */
export function isoDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `PT${h ? `${h}H` : ""}${m ? `${m}M` : ""}` || "PT0M";
}
