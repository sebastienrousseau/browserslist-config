---
title: "Usage — @sebastienrousseau/browserslist-config"
description: "How to use and configure @sebastienrousseau/browserslist-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/browserslist-config` can be consumed across all standard module formats.

## CommonJS

```javascript
module.exports = require("@sebastienrousseau/browserslist-config");
```

## ES Modules

```javascript
import config from "@sebastienrousseau/browserslist-config";
export default config;
```

## In `package.json`

```json
{
  "browserslist": "@sebastienrousseau/browserslist-config"
}
```
