import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Word, First Thought: the entry is exactly one word, nothing else.
// "murmuration" — a flock of starlings folding into one moving shape.
// Surprising as a first thought, vivid enough to see, and the murmur
// is in the word itself. Written with no trailing newline.
const WORD = "murmuration";

// The gate: UTF-8 text of 1 to 24 characters, not only whitespace, and
// the judge's first criterion is exactly one word. Refuse to write
// anything that would fail either.
const codePoints = [...WORD].length;
if (codePoints < 1 || codePoints > 24) {
  throw new Error(`entry must be 1-24 characters, got ${codePoints}`);
}
if (/\s/.test(WORD) || WORD.trim() !== WORD) {
  throw new Error("entry must be exactly one word, with no whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, WORD, "utf8");

// Read it back: the file on disk must be the word, byte for byte.
if (readFileSync(outPath, "utf8") !== WORD) {
  throw new Error("entry.txt on disk is not byte-identical to the word");
}
