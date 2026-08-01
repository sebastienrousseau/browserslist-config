<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./browserslist-config.svg" alt="browserslist-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/browserslist-config</h1>

<p align="center">
  Shareable Browserslist target configuration rules for Autoprefixer, Babel, and Vite.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/browserslist-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/browserslist-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/browserslist-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Fbrowserslist-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/browserslist-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/browserslist-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/browserslist-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Modern Browser Target Selection](#modern-browser-target-selection) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/browserslist-config

# pnpm
pnpm add -D @sebastienrousseau/browserslist-config

# yarn
yarn add -D @sebastienrousseau/browserslist-config

# bun
bun add -d @sebastienrousseau/browserslist-config
```

---

## Quick Start

### In `package.json`

```json
{
  "browserslist": "@sebastienrousseau/browserslist-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/browserslist-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/browserslist-config";
export default config;
```

---

## Modern Browser Target Selection

Targets `> 0.5%`, `last 2 versions`, `Firefox ESR`, and excludes dead browsers for optimal bundle size.

### Before (Unstandardized)

```javascript
"browserslist": ["> 1%"]
```

### After (@sebastienrousseau/browserslist-config Enforced)

```javascript
"browserslist": ["extends @sebastienrousseau/browserslist-config"]
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/browserslist-config.git
cd browserslist-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
