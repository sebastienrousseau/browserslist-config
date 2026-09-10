# `@sebastienrousseau/browserslist-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/browserslist-config`.

---

## Description

Shareable Browserslist query definitions targeting modern production web browsers.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/browserslist-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Global Usage Threshold

- **Description**: Requires browser share > 0.5% worldwide
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Recent Engine Support

- **Description**: Targets last 2 major versions of all evergreen browsers
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Enterprise Support

- **Description**: Maintains compatibility with Firefox Extended Support Release (ESR)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Dead Browser Pruning

- **Description**: Explicitly excludes unsupported/abandoned browser versions (`not dead`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 5. Proxy Browser Pruning

- **Description**: Explicitly excludes legacy proxy browsers (`not OperaMini all`)
- **Scope**: Production & Development
- **Status**: Stable & Active

