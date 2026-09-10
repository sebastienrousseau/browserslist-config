// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced custom extension example for @sebastienrousseau/browserslist-config
 */
const baseQueries = require("../index.cjs");

// Extend baseline queries with specific mobile or desktop requirements
const modernOnly = [...baseQueries, "not ie 11", "not chrome < 100"];
console.log("Custom extended browserslist queries count:", modernOnly.length);
