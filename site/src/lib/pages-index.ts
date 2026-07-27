/**
 * Enumerates every page on the site, in every language it exists in.
 *
 * Both the router ([...path].astro) and the sitemap read from here, so a page
 * can never exist in one and be missing from the other — and hreflang is
 * computed from the same source as the URLs themselves.
 */

import { LANGS, type Lang } from "./i18n";
import {
  ACTIVITY_KEYS,
  PACKAGE_KEYS,
  QUAD_VARIANT_KEYS,
  pathFor,
  pageExistsIn,
  stripBase,
  type ActivityKey,
  type PackageKey,
  type PageKey,
  type PathParams,
  type QuadVariantKey,
} from "./routes";
import { POSTS, postLangs } from "../data/blog";

export interface PageEntry {
  key: PageKey;
  lang: Lang;
  params: PathParams;
  path: string;
  alternates: { lang: Lang; path: string }[];
  /** Sitemap hint. */
  priority: number;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  lastmod?: string;
}

function simple(
  key: PageKey,
  priority: number,
  changefreq: PageEntry["changefreq"],
): PageEntry[] {
  const langs = LANGS.filter((l) => pageExistsIn(key, l));
  return langs.map((lang) => ({
    key,
    lang,
    params: {},
    path: pathFor(key, lang),
    alternates: langs.map((l) => ({ lang: l, path: pathFor(key, l) })),
    priority,
    changefreq,
  }));
}

function withParams(
  key: PageKey,
  items: PathParams[],
  priority: number,
  changefreq: PageEntry["changefreq"],
): PageEntry[] {
  const langs = LANGS.filter((l) => pageExistsIn(key, l));
  const out: PageEntry[] = [];
  for (const params of items) {
    for (const lang of langs) {
      out.push({
        key,
        lang,
        params,
        path: pathFor(key, lang, params),
        alternates: langs.map((l) => ({ lang: l, path: pathFor(key, l, params) })),
        priority,
        changefreq,
      });
    }
  }
  return out;
}

function blogPostEntries(): PageEntry[] {
  const out: PageEntry[] = [];
  for (const post of POSTS) {
    const langs = postLangs(post).filter((l) => pageExistsIn("blogPost", l));
    for (const lang of langs) {
      const copy = post.copy[lang]!;
      out.push({
        key: "blogPost",
        lang,
        params: { post: copy.slug },
        path: pathFor("blogPost", lang, { post: copy.slug }),
        // A post only has alternates in the languages it was actually written in.
        alternates: langs.map((l) => ({
          lang: l,
          path: pathFor("blogPost", l, { post: post.copy[l]!.slug }),
        })),
        priority: 0.6,
        changefreq: "monthly",
        lastmod: post.updated ?? post.date,
      });
    }
  }
  return out;
}

export function allPages(): PageEntry[] {
  return [
    ...simple("home", 1.0, "weekly"),
    ...simple("activities", 0.9, "weekly"),
    ...withParams(
      "activity",
      ACTIVITY_KEYS.map((activity: ActivityKey) => ({ activity })),
      0.9,
      "weekly",
    ),
    ...withParams(
      "quadVariant",
      QUAD_VARIANT_KEYS.map((variant: QuadVariantKey) => ({ variant })),
      0.8,
      "monthly",
    ),
    ...simple("packages", 0.8, "monthly"),
    ...withParams(
      "package",
      PACKAGE_KEYS.map((pkg: PackageKey) => ({ pkg })),
      0.8,
      "monthly",
    ),
    ...simple("essaouiraActivities", 0.8, "monthly"),
    ...simple("book", 0.9, "monthly"),
    ...simple("about", 0.6, "monthly"),
    ...simple("gallery", 0.6, "monthly"),
    ...simple("faq", 0.7, "monthly"),
    ...simple("reviews", 0.6, "weekly"),
    ...simple("blog", 0.7, "weekly"),
    ...blogPostEntries(),
    ...simple("privacy", 0.2, "yearly"),
    ...simple("terms", 0.3, "yearly"),
    ...simple("cancellation", 0.4, "yearly"),
  ];
}

/**
 * "/fr/activites/quad-essaouira/" -> "fr/activites/quad-essaouira"
 *
 * Astro's route params never include the deployment base, so strip it before
 * handing the path to getStaticPaths.
 */
export function toRouteParam(path: string): string | undefined {
  const trimmed = stripBase(path).replace(/^\/+|\/+$/g, "");
  return trimmed.length ? trimmed : undefined;
}
