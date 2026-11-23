import { writeFileSync } from "node:fs";

// One Word, First Thought: the entry is exactly one word, nothing else.
// "murmuration" — a flock of starlings folding into one moving shape.
// Surprising as a first thought, vivid enough to see, and the murmur
// is in the word itself. Written with no trailing newline.
const WORD = "murmuration";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
