const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/browserslist-config...");

  assert(Array.isArray(cjsConfig), "CJS config must be an array");
  assert(cjsConfig.includes("not dead"));

  console.log("✅ browserslist-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
