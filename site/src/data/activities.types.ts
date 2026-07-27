import type { Lang } from "../lib/i18n";
import type { ActivityKey } from "../lib/routes";

export interface FaqItem {
  q: string;
  a: string;
}

export interface ActivityCopy {
  /** Short name — nav, cards, form dropdown, WhatsApp message. */
  name: string;
  /** Page H1. Carries the exact-match keyword. */
  h1: string;
  /** <title>. Keep ≤ 60 characters or Google truncates it. */
  metaTitle: string;
  /** <meta description>. Keep ≤ 155 characters. Should contain a reason to click. */
  metaDescription: string;
  /** One-line teaser for the home page card. */
  teaser: string;
  /** Lead paragraph under the H1. */
  intro: string;
  /** Main body paragraphs. */
  body: string[];
  included: string[];
  bring: string[];
  tags: string[];
  faqs: FaqItem[];
  /** Descriptive alt text — accessibility and image search both read this. */
  imageAlt: string;
}

export type ActivityContent = Record<ActivityKey, ActivityCopy>;
export type ActivityContentByLang = Partial<Record<Lang, ActivityContent>>;
