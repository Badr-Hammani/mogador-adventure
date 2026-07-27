/** Contact sheet of a filtered set of photos, for eyeballing crops. */
import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const DIR = "C:/Users/zoro/Desktop/mogadure adventure project/site/src/assets/photos";
const OUT =
  "C:/Users/zoro/AppData/Local/Temp/claude/C--Users-zoro-Desktop-mogadure-adventure-project/98b3d289-64e0-467f-a5ed-85e90d4f2734/scratchpad";

const filter = process.argv[2] ?? "";
const label = process.argv[3] ?? "review";

const files = (await readdir(DIR))
  .filter((f) => /\.(jpe?g|png)$/i.test(f) && f.includes(filter))
  .sort();

const COLS = 3;
const CELLW = 400;
const CELLH = 250;
const LABEL = 24;
const PER = 12;

for (let s = 0; s * PER < files.length; s++) {
  const batch = files.slice(s * PER, (s + 1) * PER);
  const rows = Math.ceil(batch.length / COLS);
  const composites = [];

  for (let i = 0; i < batch.length; i++) {
    const left = (i % COLS) * CELLW;
    const top = Math.floor(i / COLS) * (CELLH + LABEL);
    const buf = await sharp(path.join(DIR, batch[i]))
      .resize(CELLW, CELLH, { fit: "cover" })
      .toBuffer();
    composites.push({ input: buf, left, top });
    const short = batch[i].replace(/-essaouira|\.jpg/g, "").slice(0, 40);
    composites.push({
      input: Buffer.from(
        `<svg width="${CELLW}" height="${LABEL}"><rect width="${CELLW}" height="${LABEL}" fill="#201e1d"/><text x="5" y="17" font-family="sans-serif" font-size="13" fill="#fff">${short}</text></svg>`,
      ),
      left,
      top: top + CELLH,
    });
  }

  const out = path.join(OUT, `${label}-${s + 1}.jpg`);
  await sharp({
    create: {
      width: COLS * CELLW,
      height: rows * (CELLH + LABEL),
      channels: 3,
      background: "#ffffff",
    },
  })
    .composite(composites)
    .jpeg({ quality: 80 })
    .toFile(out);
  console.log("wrote", out);
}
