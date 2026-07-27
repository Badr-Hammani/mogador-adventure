/**
 * THE URL MAP — the single most important file for SEO on this site.
 *
 * Every page exists at a *localised path* under a language prefix:
 *
 *   /activities/quad-biking-essaouira/          (en, default locale, no prefix)
 *   /fr/activites/quad-essaouira/
 *   /es/actividades/quad-essaouira/
 *   /de/aktivitaeten/quad-fahren-essaouira/
 *   /ar/anshita/quad-essaouira/
 *
 * Two rules this file enforces:
 *
 * 1. Keywords live in the path, per language. `/fr/activites/quad-essaouira/`
 *    outranks `/fr/activities/quad-biking/` because the French keyword is in
 *    the URL. This is why we don't just prefix a single English slug set.
 *
 * 2. `alternatesFor()` is the only place hreflang is computed, and it only
 *    emits alternates for pages that ACTUALLY EXIST in that language. Pointing
 *    hreflang at a 404 is worse than omitting it.
 *
 * Arabic paths use Latin transliteration rather than Arabic script. Arabic-script
 * URLs are legal but get percent-encoded into unreadable strings when shared or
 * pasted into analytics, so transliteration is the pragmatic choice.
 */

import { DEFAULT_LANG, LANGS, type Lang } from "./i18n";

/* ------------------------------------------------------------------ */
/* Which languages are fully translated                                */
/* ------------------------------------------------------------------ */

/**
 * Launch scope. EN + FR are complete (every page, including the quad silo,
 * packages and the journal). ES/DE/AR ship with the core commercial pages.
 *
 * Deliberately NOT shipping empty language folders: a half-populated locale
 * with thin or missing pages is a quality signal we don't want to send, and
 * hreflang pointing at stubs is worse than no hreflang.
 *
 * To promote a language to full coverage: add it to FULL_LANGS, add its
 * strings to the content files, done — routing and hreflang follow.
 */
export const FULL_LANGS: readonly Lang[] = ["en", "fr"];
export const CORE_LANGS: readonly Lang[] = LANGS;

export function hasFullContent(lang: Lang): boolean {
  return FULL_LANGS.includes(lang);
}

/* ------------------------------------------------------------------ */
/* Page keys                                                           */
/* ------------------------------------------------------------------ */

export type PageKey =
  | "home"
  | "activities"
  | "activity"
  | "quadVariant"
  | "packages"
  | "package"
  | "essaouiraActivities"
  | "about"
  | "gallery"
  | "faq"
  | "book"
  | "reviews"
  | "blog"
  | "blogPost"
  | "privacy"
  | "terms"
  | "cancellation";

/**
 * Pages only generated for fully-translated languages.
 *
 * Legal pages are in here deliberately: booking terms and a cancellation
 * policy are documents people rely on, and shipping an English fallback under
 * a /de/ URL would be worse than not offering the page in German at all.
 */
const FULL_ONLY_PAGES: readonly PageKey[] = [
  "quadVariant",
  "packages",
  "package",
  "blog",
  "blogPost",
  "reviews",
  "privacy",
  "terms",
  "cancellation",
];

export function pageExistsIn(key: PageKey, lang: Lang): boolean {
  if (FULL_ONLY_PAGES.includes(key)) return hasFullContent(lang);
  return true;
}

/* ------------------------------------------------------------------ */
/* Localised path segments                                             */
/* ------------------------------------------------------------------ */

type SegMap = Record<Lang, string>;

/** Top-level section segments. */
export const SEGMENTS: Record<string, SegMap> = {
  activities: {
    en: "activities",
    fr: "activites",
    es: "actividades",
    de: "aktivitaeten",
    ar: "anshita",
  },
  packages: {
    en: "packages",
    fr: "forfaits",
    es: "paquetes",
    de: "pakete",
    ar: "bawaqat",
  },
  about: {
    en: "about",
    fr: "notre-histoire",
    es: "nuestra-historia",
    de: "ueber-uns",
    ar: "man-nahnu",
  },
  gallery: {
    en: "gallery",
    fr: "galerie",
    es: "galeria",
    de: "galerie",
    ar: "maarid-suwar",
  },
  faq: {
    en: "faq",
    fr: "faq",
    es: "preguntas-frecuentes",
    de: "haeufige-fragen",
    ar: "asilah-shaia",
  },
  book: {
    en: "book",
    fr: "reserver",
    es: "reservar",
    de: "buchen",
    ar: "hajz",
  },
  reviews: {
    en: "reviews",
    fr: "avis",
    es: "opiniones",
    de: "bewertungen",
    ar: "araa",
  },
  blog: {
    en: "journal",
    fr: "journal",
    es: "diario",
    de: "journal",
    ar: "mudawana",
  },
  essaouiraActivities: {
    en: "essaouira-activities",
    fr: "activites-essaouira",
    es: "actividades-essaouira",
    de: "aktivitaeten-essaouira",
    ar: "anshitat-essaouira",
  },
  privacy: {
    en: "privacy",
    fr: "confidentialite",
    es: "privacidad",
    de: "datenschutz",
    ar: "khsusiya",
  },
  terms: {
    en: "terms",
    fr: "conditions",
    es: "condiciones",
    de: "agb",
    ar: "shurut",
  },
  cancellation: {
    en: "cancellation-policy",
    fr: "politique-annulation",
    es: "politica-cancelacion",
    de: "stornierung",
    ar: "siyasat-ilgha",
  },
};

/**
 * Activity slugs — these carry the money keywords, so each is written for how
 * that language actually searches, not translated word-for-word from English.
 */
export const ACTIVITY_SLUGS: Record<string, SegMap> = {
  quad: {
    en: "quad-biking-essaouira",
    fr: "quad-essaouira",
    es: "quad-essaouira",
    de: "quad-fahren-essaouira",
    ar: "quad-essaouira",
  },
  surf: {
    en: "surf-lessons-essaouira",
    fr: "cours-de-surf-essaouira",
    es: "clases-de-surf-essaouira",
    de: "surfkurs-essaouira",
    ar: "durus-surf-essaouira",
  },
  camel: {
    en: "camel-rides-essaouira",
    fr: "balade-chameau-essaouira",
    es: "paseo-en-camello-essaouira",
    de: "kamelreiten-essaouira",
    ar: "rukub-jimal-essaouira",
  },
  horse: {
    en: "horseback-riding-essaouira",
    fr: "equitation-essaouira",
    es: "paseo-a-caballo-essaouira",
    de: "reiten-essaouira",
    ar: "rukub-khayl-essaouira",
  },
  cooking: {
    en: "moroccan-cooking-class-essaouira",
    fr: "cours-de-cuisine-marocaine-essaouira",
    es: "clase-de-cocina-marroqui-essaouira",
    de: "marokkanischer-kochkurs-essaouira",
    ar: "tabkh-maghribi-essaouira",
  },
  yoga: {
    en: "yoga-essaouira",
    fr: "yoga-essaouira",
    es: "yoga-essaouira",
    de: "yoga-essaouira",
    ar: "yoga-essaouira",
  },
};

export type ActivityKey = keyof typeof ACTIVITY_SLUGS;
export const ACTIVITY_KEYS = Object.keys(ACTIVITY_SLUGS) as ActivityKey[];

/**
 * The quad silo. These sub-pages are how a six-activity brand out-depths the
 * single-activity, exact-match-domain competitors on the highest-value keyword.
 */
export const QUAD_VARIANT_SLUGS: Record<string, SegMap> = {
  prices: {
    en: "prices",
    fr: "prix",
    es: "precios",
    de: "preise",
    ar: "asaar",
  },
  sunset: {
    en: "sunset-tour",
    fr: "coucher-de-soleil",
    es: "atardecer",
    de: "sonnenuntergang",
    ar: "ghurub",
  },
  oneHour: {
    en: "1-hour",
    fr: "1-heure",
    es: "1-hora",
    de: "1-stunde",
    ar: "saa-wahida",
  },
  twoHours: {
    en: "2-hours",
    fr: "2-heures",
    es: "2-horas",
    de: "2-stunden",
    ar: "saatan",
  },
  halfDay: {
    en: "half-day",
    fr: "demi-journee",
    es: "medio-dia",
    de: "halbtag",
    ar: "nisf-yawm",
  },
  diabat: {
    en: "diabat",
    fr: "diabat",
    es: "diabat",
    de: "diabat",
    ar: "diabat",
  },
};

export type QuadVariantKey = keyof typeof QUAD_VARIANT_SLUGS;
export const QUAD_VARIANT_KEYS = Object.keys(
  QUAD_VARIANT_SLUGS,
) as QuadVariantKey[];

export const PACKAGE_SLUGS: Record<string, SegMap> = {
  quadCamel: {
    en: "quad-and-camel",
    fr: "quad-et-chameau",
    es: "quad-y-camello",
    de: "quad-und-kamel",
    ar: "quad-wa-jimal",
  },
  surfYoga: {
    en: "surf-and-yoga",
    fr: "surf-et-yoga",
    es: "surf-y-yoga",
    de: "surfen-und-yoga",
    ar: "surf-wa-yoga",
  },
  familyDay: {
    en: "family-day",
    fr: "journee-famille",
    es: "dia-en-familia",
    de: "familientag",
    ar: "yawm-aaili",
  },
  threeDay: {
    en: "3-day-essaouira-adventure",
    fr: "aventure-3-jours-essaouira",
    es: "aventura-3-dias-essaouira",
    de: "3-tage-essaouira-abenteuer",
    ar: "mughamarat-3-ayyam-essaouira",
  },
};

export type PackageKey = keyof typeof PACKAGE_SLUGS;
export const PACKAGE_KEYS = Object.keys(PACKAGE_SLUGS) as PackageKey[];

/* ------------------------------------------------------------------ */
/* Path construction                                                   */
/* ------------------------------------------------------------------ */

export interface PathParams {
  activity?: ActivityKey;
  variant?: QuadVariantKey;
  pkg?: PackageKey;
  /** Blog post slugs are authored per language in the content files. */
  post?: string;
}

/**
 * Deployment sub-path, e.g. "/mogador-adventures/" on GitHub Project Pages.
 * "/" for a root deployment (custom domain, user.github.io, Cloudflare Pages).
 *
 * Every href on the site flows through pathFor(), so handling it here is the
 * only place it needs handling.
 */
export const BASE = import.meta.env.BASE_URL || "/";
const BASE_PREFIX = BASE === "/" ? "" : BASE.replace(/\/+$/, "");

/** Strips the deployment base back off — Astro route params exclude it. */
export function stripBase(path: string): string {
  if (!BASE_PREFIX) return path;
  return path.startsWith(BASE_PREFIX) ? path.slice(BASE_PREFIX.length) : path;
}

/** Joins segments into a rooted, trailing-slashed, base-prefixed path. */
function join(lang: Lang, ...segments: string[]): string {
  const prefix = lang === DEFAULT_LANG ? "" : `/${lang}`;
  const body = segments.filter(Boolean).join("/");
  if (!body) return `${BASE_PREFIX}${prefix}/`;
  return `${BASE_PREFIX}${prefix}/${body}/`;
}

/**
 * Canonical path for a page in a given language.
 * Every internal link on the site must go through this — never hand-write a href.
 */
export function pathFor(
  key: PageKey,
  lang: Lang,
  params: PathParams = {},
): string {
  switch (key) {
    case "home":
      return lang === DEFAULT_LANG ? `${BASE_PREFIX}/` : `${BASE_PREFIX}/${lang}/`;

    case "activities":
      return join(lang, SEGMENTS.activities[lang]);

    case "activity": {
      const a = params.activity;
      if (!a) throw new Error("pathFor(activity) requires params.activity");
      return join(lang, SEGMENTS.activities[lang], ACTIVITY_SLUGS[a][lang]);
    }

    case "quadVariant": {
      const v = params.variant;
      if (!v) throw new Error("pathFor(quadVariant) requires params.variant");
      return join(
        lang,
        SEGMENTS.activities[lang],
        ACTIVITY_SLUGS.quad[lang],
        QUAD_VARIANT_SLUGS[v][lang],
      );
    }

    case "packages":
      return join(lang, SEGMENTS.packages[lang]);

    case "package": {
      const p = params.pkg;
      if (!p) throw new Error("pathFor(package) requires params.pkg");
      return join(lang, SEGMENTS.packages[lang], PACKAGE_SLUGS[p][lang]);
    }

    case "blog":
      return join(lang, SEGMENTS.blog[lang]);

    case "blogPost": {
      if (!params.post) throw new Error("pathFor(blogPost) requires params.post");
      return join(lang, SEGMENTS.blog[lang], params.post);
    }

    default:
      return join(lang, SEGMENTS[key][lang]);
  }
}

/** Absolute URL (needs the configured `site`). */
export function urlFor(
  base: string,
  key: PageKey,
  lang: Lang,
  params: PathParams = {},
): string {
  return new URL(pathFor(key, lang, params), base).toString();
}

/* ------------------------------------------------------------------ */
/* hreflang                                                            */
/* ------------------------------------------------------------------ */

export interface Alternate {
  lang: Lang;
  /** hreflang attribute value. */
  hreflang: string;
  path: string;
}

/**
 * Reciprocal alternates for a page. Only languages where the page genuinely
 * exists are returned — see the note at the top of this file.
 *
 * Blog posts are special: a post exists in a language only if it has been
 * written in that language, so callers pass `availableLangs` explicitly.
 */
export function alternatesFor(
  key: PageKey,
  params: PathParams = {},
  availableLangs?: readonly Lang[],
): Alternate[] {
  const langs = availableLangs ?? LANGS.filter((l) => pageExistsIn(key, l));
  return langs.map((lang) => ({
    lang,
    hreflang: lang,
    path: pathFor(key, lang, params),
  }));
}
