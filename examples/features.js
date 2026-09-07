/**
 * 100% Feature Showcase for @sebastienrousseau/browserslist-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/browserslist-config ===");
assert(Array.isArray(config), "Browserslist config must export an array of query strings");
assert(config.includes("> 0.5%"), "Must include > 0.5% global usage threshold");
assert(config.includes("last 2 versions"), "Must target last 2 major versions");
assert(config.includes("Firefox ESR"), "Must support Firefox ESR");
assert(config.includes("not dead"), "Must prune dead browsers");
assert(config.includes("not OperaMini all"), "Must prune Opera Mini");

console.log("  ✓ Query count:", config.length);
config.forEach((q, i) => console.log(`  ✓ Query ${i + 1}: ${q}`));
console.log("✅ 100% of browserslist-config queries and features validated.");
