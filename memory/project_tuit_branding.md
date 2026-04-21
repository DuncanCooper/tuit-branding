---
name: tuit-branding project setup
description: Context for the @duncancooper/brand npm package project
type: project
---

Building a private npm package `@duncancooper/brand` published to GitHub Packages.

- GitHub org/username: `duncancooper`
- Package: `@duncancooper/brand`
- GitHub repo: https://github.com/DuncanCooper/tuit-branding
- Colors from logo.svg: primary `#4ADE80` (green), background `#0F1419` (near-black), text `#FFFFFF`
- Logo SVG: horizontal wordmark (92×24 viewBox) with green semicircles flanking "tuit" text
- Icon SVG: square (100×100 viewBox) with rounded corners, same design

**Why:** User wants to share brand assets across multiple React projects via a private npm registry.
**How to apply:** Keep playground out of published package. Use tsup for library build, Vite for playground dev.
