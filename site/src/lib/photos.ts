/**
 * Photo registry.
 *
 * Only four real client photos exist today; the design calls for roughly forty
 * slots. Rather than shipping broken or grey boxes, `Photo.astro` renders a
 * branded panel wherever `resolvePhoto` returns undefined — so the page reads
 * as designed, and dropping a file into src/assets/photos plus a line in the
 * relevant data file is all it takes to fill a slot later.
 */

import type { ImageMetadata } from "astro";

const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/photos/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

const registry = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const name = path.split("/").pop()!;
  registry.set(name, mod.default);
}

export function resolvePhoto(
  filename: string | null | undefined,
): ImageMetadata | undefined {
  if (!filename) return undefined;
  return registry.get(filename);
}

export function hasPhoto(filename: string | null | undefined): boolean {
  return Boolean(resolvePhoto(filename));
}

/**
 * Picks a pre-cropped variant of a photo, falling back to the original if that
 * variant was never generated.
 *
 * Every source photo is 960x1280 portrait, so letting CSS `object-fit: cover`
 * crop them to a square or landscape frame centres on empty sky and throws the
 * subject away — that is what made the gallery look blank. scripts/crop-tiles.mjs
 * and scripts/process-photos.mjs pre-cut attention-weighted versions:
 *
 *   "-sq"   1:1   gallery squares, team portraits
 *   "-45"   4:5   tall gallery tiles
 *   "-wide" 16:10 page heroes and blog cards
 */
export type PhotoVariant = "sq" | "45" | "wide";

export function variant(
  filename: string | null | undefined,
  kind: PhotoVariant,
): string | null {
  if (!filename) return null;
  const candidate = filename.replace(/\.(jpe?g|png|webp)$/i, `-${kind}.jpg`);
  return resolvePhoto(candidate) ? candidate : filename;
}

/** Absolute URL of an image for use in OpenGraph / schema. */
export function photoUrl(
  filename: string | null | undefined,
  site: URL | string,
): string | undefined {
  const img = resolvePhoto(filename);
  if (!img) return undefined;
  return new URL(img.src, site).toString();
}
