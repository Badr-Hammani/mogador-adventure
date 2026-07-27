/**
 * Square (1:1) and portrait (4:5) attention crops for gallery tiles.
 *
 * The gallery renders 1:1 and 4:5 tiles, but every source photo is 960x1280
 * portrait. A centred CSS crop of those lands on empty sky — which is exactly
 * what the live gallery was showing. sharp's attention strategy crops toward
 * the highest-entropy region instead, so the rider/camel/quad survives.
 *
 * Run: node scripts/crop-tiles.mjs
 */
import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const DIR = "C:/Users/zoro/Desktop/mogadure adventure project/site/src/assets/photos";

const files = (await readdir(DIR)).filter(
  (f) => /\.jpg$/i.test(f) && !/-wide\.jpg$|-sq\.jpg$|-45\.jpg$/i.test(f),
);

const log = [];

for (const name of files) {
  const src = path.join(DIR, name);
  const meta = await sharp(src).metadata();
  if (!meta.width || !meta.height) continue;

  /*
   * ZOOM is what makes these work. Asking for a full-width square just slides
   * a 960x960 window up and down a 960x1280 frame — the subject lands at the
   * bottom and the tile is still two-thirds sky. Requesting a SMALLER window
   * makes attention pick a tight region around the subject instead, which is
   * what a person would crop by hand.
   *
   * Tiles render at roughly 280px, so a ~690px source is still oversampled.
   */
  const ZOOM = 0.72;

  const side = Math.round(Math.min(meta.width, meta.height) * ZOOM);
  await sharp(src)
    .resize(side, side, { fit: "cover", position: sharp.strategy.attention })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(DIR, name.replace(/\.jpg$/, "-sq.jpg")));

  // 4:5
  let pw = Math.round(meta.width * ZOOM);
  let ph = Math.round(pw * 1.25);
  if (ph > meta.height) {
    ph = meta.height;
    pw = Math.round(ph * 0.8);
  }
  await sharp(src)
    .resize(pw, ph, { fit: "cover", position: sharp.strategy.attention })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(DIR, name.replace(/\.jpg$/, "-45.jpg")));

  log.push(`${name}  ->  ${side}x${side} sq, ${pw}x${ph} 4:5`);
}

console.log(log.join("\n"));
console.log(`\n${log.length} photos cropped`);
