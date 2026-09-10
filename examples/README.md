# `@sebastienrousseau/browserslist-config` Examples Catalog

This directory provides runnable, standalone examples covering **100% of the functionalities and features** provided by `@sebastienrousseau/browserslist-config`.

---

## Example Suite Overview

| File                           | Type      | Feature Coverage                       | Command                     |
| :----------------------------- | :-------- | :------------------------------------- | :-------------------------- |
| [`basic.js`](./basic.js)       | CommonJS  | Standard default configuration import  | `node examples/basic.js`    |
| [`advanced.js`](./advanced.js) | CommonJS  | Custom extension and rule overrides    | `node examples/advanced.js` |
| [`esm.mjs`](./esm.mjs)         | ES Module | Native ESM consumption via `import`    | `node examples/esm.mjs`     |
| [`features.js`](./features.js) | CommonJS  | **100% feature showcase & assertions** | `node examples/features.js` |

---

## 100% Feature Coverage Checklist

- [x] **Global Usage Threshold**: Requires browser share > 0.5% worldwide
- [x] **Recent Engine Support**: Targets last 2 major versions of all evergreen browsers
- [x] **Enterprise Support**: Maintains compatibility with Firefox Extended Support Release (ESR)
- [x] **Dead Browser Pruning**: Explicitly excludes unsupported/abandoned browser versions (`not dead`)
- [x] **Proxy Browser Pruning**: Explicitly excludes legacy proxy browsers (`not OperaMini all`)
- [x] **Dual Packaging**: Full interoperability across CommonJS (`.cjs`, `.js`) and ECMAScript Modules (`.mjs`).

---

## Running All Examples

You can run and validate the entire example suite with:

```bash
npm run examples
```
