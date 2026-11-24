// One Sentence for a Traveler from 1800.
// Writes a single sentence explaining the modern internet to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";

const SENTENCE =
  "Picture every library and post office in the world on a single road, where a letter outruns its own ink and the book you seek is waiting open.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, SENTENCE, "utf8");
console.log(`Wrote ${SENTENCE.length} chars to ${outDir}/entry.txt`);
