// Loading Screen Gold: A Tip in 200 Characters
// Entry for u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
// A single loading-screen tip for stressed developers and AI coding agents.
// It writes the tip to <MAKEFUN_OUTPUT_DIR>/entry.txt (or ./entry.txt),
// checking the competition gate: 1-200 characters, one line, not blank.

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: if your agent has been 'almost done' for twenty minutes, do not interrupt — it is not lying, it believes it, and that is the scary part.";

function main(): void {
  // Gate: exactly one line, 1-200 characters, not only whitespace.
  if (TIP.length < 1 || TIP.length > 200) {
    throw new Error(`tip is ${TIP.length} chars, gate is 1-200`);
  }
  if (TIP.trim().length === 0 || TIP.includes("\n")) {
    throw new Error("tip must be a single non-blank line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
  console.log(`wrote ${TIP.length}-char tip to ${join(outDir, "entry.txt")}`);
}

main();
