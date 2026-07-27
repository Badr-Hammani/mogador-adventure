import type { Lang } from "../lib/i18n";
import { DEFAULT_LANG } from "../lib/i18n";
import { ACTIVITY_KEYS, type ActivityKey } from "../lib/routes";
import type { IconName } from "../lib/icons";
import type { ActivityCopy } from "./activities.types";
import { EN } from "./activities.en";
import { FR } from "./activities.fr";
import { ES } from "./activities.es";
import { DE } from "./activities.de";
import { AR } from "./activities.ar";

const BY_LANG: Record<Lang, typeof EN> = {
  en: EN,
  fr: FR,
  es: ES,
  de: DE,
  ar: AR,
};

/** Copy for one activity in one language, falling back to English. */
export function activityCopy(key: ActivityKey, lang: Lang): ActivityCopy {
  return BY_LANG[lang]?.[key] ?? BY_LANG[DEFAULT_LANG][key];
}

/**
 * Non-translated metadata: which icon to draw, which photo to use, and which
 * price list applies. Photo filenames map to files in src/assets/photos.
 * `photo: null` means we have no real image yet and the page renders a
 * branded gradient panel instead of a broken placeholder.
 */
export interface ActivityMeta {
  key: ActivityKey;
  icon: IconName;
  photo: string | null;
  /** Order on the activities hub and home grid. */
  order: number;
  /** Cross-links rendered in the "you might also like" block. */
  related: ActivityKey[];
}

export const ACTIVITY_META: Record<ActivityKey, ActivityMeta> = {
  quad: {
    key: "quad",
    icon: "quad",
    photo: "quad-convoy-dunes-essaouira-wide.jpg",
    order: 1,
    related: ["camel", "horse", "surf"],
  },
  /*
   * Surf has no photo of an actual lesson. Rather than leave a placeholder or
   * invent one, this is a real photograph of the Essaouira beach where the
   * lessons run — the location, honestly captioned as the location. The alt
   * text in the activity copy describes the beach, not a lesson, and must stay
   * that way until a real surf photo exists.
   */
  surf: {
    key: "surf",
    icon: "surf",
    photo: "atlantic-beach-sunrise-essaouira-wide.jpg",
    order: 2,
    related: ["yoga", "quad", "horse"],
  },
  camel: {
    key: "camel",
    icon: "camel",
    photo: "camel-train-beach-essaouira-wide.jpg",
    order: 3,
    related: ["quad", "horse", "yoga"],
  },
  horse: {
    key: "horse",
    icon: "horse",
    photo: "horseback-riding-beach-essaouira-wide.jpg",
    order: 4,
    related: ["camel", "quad", "surf"],
  },
  cooking: {
    key: "cooking",
    icon: "cooking",
    photo: null,
    order: 5,
    related: ["yoga", "camel", "surf"],
  },
  yoga: {
    key: "yoga",
    icon: "yoga",
    photo: null,
    order: 6,
    related: ["surf", "cooking", "camel"],
  },
};

export const ORDERED_ACTIVITIES: ActivityKey[] = [...ACTIVITY_KEYS].sort(
  (a, b) => ACTIVITY_META[a].order - ACTIVITY_META[b].order,
);
