/**
 * Repairs double-encoded UTF-8 (mojibake).
 *
 * The file's original UTF-8 bytes were decoded as Windows-1252 and then
 * re-encoded as UTF-8, turning "—" into "â€”" and Arabic into "ÙƒØ§Ù†".
 * To reverse it we map each character back to the single CP1252 byte it
 * represents, which reconstitutes the original UTF-8 byte stream.
 *
 * CP1252 is NOT Latin-1: bytes 0x80–0x9F map to printable characters
 * (€ ‚ ƒ „ … † ‡ …), and Buffer's "latin1" encoding gets those wrong. Hence the
 * explicit table below.
 *
 * Usage: node scripts/fix-encoding.mjs <file> [--write]
 */
import { readFile, writeFile } from "node:fs/promises";

const CP1252_HIGH = {
  0x20ac: 0x80, 0x201a: 0x82, 0x0192: 0x83, 0x201e: 0x84,
  0x2026: 0x85, 0x2020: 0x86, 0x2021: 0x87, 0x02c6: 0x88,
  0x2030: 0x89, 0x0160: 0x8a, 0x2039: 0x8b, 0x0152: 0x8c,
  0x017d: 0x8e, 0x2018: 0x91, 0x2019: 0x92, 0x201c: 0x93,
  0x201d: 0x94, 0x2022: 0x95, 0x2013: 0x96, 0x2014: 0x97,
  0x02dc: 0x98, 0x2122: 0x99, 0x0161: 0x9a, 0x203a: 0x9b,
  0x0153: 0x9c, 0x017e: 0x9e, 0x0178: 0x9f,
};

const file = process.argv[2];
const write = process.argv.includes("--write");
if (!file) {
  console.error("usage: node scripts/fix-encoding.mjs <file> [--write]");
  process.exit(1);
}

let text = await readFile(file, "utf8");

// PowerShell writes UTF-8 *with* a BOM. The BOM is what mis-decoded the file
// as CP1252 in the first place; strip it so the reverse mapping is uniform,
// and never write it back.
if (text.charCodeAt(0) === 0xfeff) {
  text = text.slice(1);
  console.log("stripped UTF-8 BOM");
}

const lines = text.split("\n");
const bytes = [];
const unmappable = [];

lines.forEach((line, li) => {
  for (const ch of line) {
    const cp = ch.codePointAt(0);
    if (cp <= 0xff) {
      bytes.push(cp);
    } else if (CP1252_HIGH[cp] !== undefined) {
      bytes.push(CP1252_HIGH[cp]);
    } else {
      // Never part of the mojibake — the file is only partly corrupted.
      unmappable.push({
        line: li + 1,
        ch,
        cp: "U+" + cp.toString(16).toUpperCase().padStart(4, "0"),
        context: line.trim().slice(0, 90),
      });
      bytes.push(0x3f); // placeholder so offsets stay sane in dry run
    }
  }
  if (li < lines.length - 1) bytes.push(0x0a);
});

if (unmappable.length > 0 && !process.argv.includes("--force")) {
  console.error(
    `ABORT: ${unmappable.length} character(s) are not CP1252-representable.`,
  );
  for (const u of unmappable) {
    console.error(`  line ${u.line}: ${u.ch} (${u.cp})`);
    console.error(`    ${u.context}`);
  }
  process.exit(2);
}

const repaired = Buffer.from(bytes).toString("utf8");

if (repaired.includes("�")) {
  console.error("ABORT: result contains replacement characters — bad decode.");
  process.exit(3);
}

console.log("--- sample of repaired text ---");
for (const line of repaired.split("\n")) {
  if (/ar:|es:|fr:/.test(line) && /[^\x00-\x7F]/.test(line)) {
    console.log(line.trim().slice(0, 100));
  }
}

if (write) {
  await writeFile(file, repaired, "utf8");
  console.log(`\nWROTE ${file}`);
} else {
  console.log("\n(dry run — pass --write to apply)");
}
