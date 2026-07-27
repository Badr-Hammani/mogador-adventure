/**
 * Photo pipeline.
 *
 * The source images are WhatsApp exports: 960x1280 portrait, heavily
 * re-compressed. Two real problems follow from that, and this script fixes
 * both — no invention, just better processing of what was actually shot.
 *
 *  1. WhatsApp's recompression leaves them soft. A mild unsharp mask restores
 *     apparent detail without the crunchy halo that screams "over-processed".
 *
 *  2. Nearly all are PORTRAIT, but the page heroes are 16:10 landscape frames.
 *     A centred CSS crop of a portrait photo throws away most of the frame and
 *     routinely decapitates the subject. So for images used as heroes we cut a
 *     landscape version using sharp's attention strategy, which crops toward
 *     the region with the most detail/contrast rather than the geometric middle.
 *
 * Run:  node scripts/process-photos.mjs
 */
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const INCOMING =
  "C:/Users/zoro/Desktop/mogadure adventure project/incoming_photos";
const DEST = "C:/Users/zoro/Desktop/mogadure adventure project/site/src/assets/photos";

/** Second wave of picks from the 42 originals. */
const NEW_PICKS = {
  2: "quad-rider-sunset-bird-essaouira.jpg",
  6: "quad-rider-joy-beach-essaouira.jpg",
  15: "quad-cresting-dune-essaouira.jpg",
  19: "horses-and-quad-trail-essaouira.jpg",
  33: "quad-pink-sunset-beach-essaouira.jpg",
  36: "quad-buggy-fleet-beach-essaouira.jpg",
  40: "quads-lined-up-turquoise-beach-essaouira.jpg",
  11: "quad-argan-trees-essaouira.jpg",
};

/**
 * Images used as full-width page heroes. These get an extra landscape cut so
 * the subject survives the 16:10 frame.
 */
const LANDSCAPE_HEROES = [
  "quad-sunset-riders-atlantic-essaouira.jpg",
  "quad-convoy-dunes-essaouira.jpg",
  "camel-train-beach-essaouira.jpg",
  "horseback-riding-beach-essaouira.jpg",
  "quad-fleet-beach-essaouira.jpg",
  "quad-sunset-silhouette-dune-essaouira.jpg",
  "quad-single-dune-ride-essaouira.jpg",
  "quad-argan-forest-track-essaouira.jpg",
  "quad-far-dunes-essaouira.jpg",
  "quad-diabat-borj-el-baroud-essaouira.jpg",
  "atlantic-beach-sunrise-essaouira.jpg",
  "quad-pink-sunset-beach-essaouira.jpg",
  "quad-cresting-dune-essaouira.jpg",
];

/** Restrained enhancement — this must still look like a phone photo. */
function enhance(pipeline) {
  return pipeline
    .sharpen({ sigma: 0.7, m1: 0.4, m2: 0.9 })
    .modulate({ saturation: 1.04 });
}

await mkdir(DEST, { recursive: true });
const files = (await readdir(INCOMING))
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .sort();

const log = [];

// 1. Import the new picks.
for (const [idx, name] of Object.entries(NEW_PICKS)) {
  const src = path.join(INCOMING, files[Number(idx)]);
  const meta = await sharp(src).metadata();
  await enhance(sharp(src).rotate())
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(DEST, name));
  log.push(`new       ${meta.width}x${meta.height}  ${name}`);
}

// 2. Landscape crops for hero slots.
for (const name of LANDSCAPE_HEROES) {
  const src = path.join(DEST, name);
  let meta;
  try {
    meta = await sharp(src).metadata();
  } catch {
    log.push(`SKIP (missing)                ${name}`);
    continue;
  }
  if (!meta.width || !meta.height) continue;

  const outName = name.replace(/\.jpg$/, "-wide.jpg");
  const targetW = meta.width;
  const targetH = Math.round(targetW * (10 / 16));
  if (targetH >= meta.height) {
    log.push(`already wide enough           ${name}`);
    continue;
  }

  await sharp(src)
    .resize(targetW, targetH, {
      fit: "cover",
      position: sharp.strategy.attention,
    })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(DEST, outName));
  log.push(`wide      ${targetW}x${targetH}   ${outName}`);
}

console.log(log.join("\n"));
console.log(`\ntotal files now: ${(await readdir(DEST)).length}`);
