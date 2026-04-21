# Brand Package — Claude Code Handoff

## Context

I'm starting from an empty Git repo. I want to build a **private npm package** that shares a logo and theme tokens across multiple React projects, published via **GitHub Packages** (GitHub's private npm registry). The repo should also include a **dev-only playground** (Vite app) that lets me experiment with the theme live, but the playground must NOT be included in the published package.

Please set this up end-to-end. Ask me for anything you need (org name, logo SVG, initial color palette) rather than guessing.

## Requirements

### Library (published)

- Scoped package name: `@your-org/brand` (ask me for the actual org/scope — must match GitHub org or username, lowercase)
- Exports:
  - `theme` — design tokens object (colors, spacing, typography)
  - `Theme` — TypeScript type derived from `theme`
  - `Logo` — React component rendering SVG with `currentColor` fill and a `size` prop
- Built with **tsup** to emit both ESM and CJS, plus `.d.ts` types
- `react` as a `peerDependency` (>=18), not a dependency
- Only `dist/` gets published (enforced via `files` field in `package.json`)
- `publishConfig.registry` set to `https://npm.pkg.github.com`

### Playground (NOT published)

- Lives in `playground/` directory
- Vite + React app
- Imports from `@your-org/brand` via a Vite alias that resolves to `src/index.ts` so HMR works when I edit theme/logo
- Includes these interactive demos:
  - Color picker to override primary color live
  - Range slider to resize the logo
  - Color swatches rendering all theme colors with hex values
  - Logo showcase on multiple backgrounds (white, black, primary)
- `npm run dev` launches it

### Publishing

- GitHub Actions workflow at `.github/workflows/publish.yml`
- Triggers on git tags matching `v*`
- Publishes to GitHub Packages using the built-in `GITHUB_TOKEN`

## File structure to create

```
.
├── src/
│   ├── index.ts              # barrel export
│   ├── theme.ts              # design tokens + Theme type
│   └── logo/
│       └── Logo.tsx          # SVG React component, uses currentColor
├── playground/
│   ├── index.html
│   ├── main.tsx
│   ├── App.tsx
│   └── components/
│       ├── ColorSwatches.tsx
│       └── LogoShowcase.tsx
├── .github/
│   └── workflows/
│       └── publish.yml
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── vite.config.ts
├── .npmignore                # belt-and-suspenders: exclude playground/, vite.config.ts
├── .gitignore                # node_modules, dist, etc.
└── README.md                 # setup + consumer install instructions
```

## Key technical details

### `package.json` must include

- `"main"`, `"module"`, `"types"`, and `"exports"` fields pointing at `dist/`
- `"files": ["dist"]`
- `"publishConfig": { "registry": "https://npm.pkg.github.com" }`
- `"repository"` field pointing at the GitHub repo
- Scripts: `build` (tsup), `dev` (vite), `preview` (vite preview), `prepublishOnly` (npm run build)
- `peerDependencies`: `react >=18`
- `devDependencies`: `tsup`, `vite`, `@vitejs/plugin-react`, `typescript`, `react`, `react-dom`, `@types/react`, `@types/react-dom`

### `tsup.config.ts`

- `entry: ['src/index.ts']` — only builds the library, never the playground
- `format: ['esm', 'cjs']`
- `dts: true`
- `clean: true`
- `external: ['react']`

### `vite.config.ts`

- `root: 'playground'`
- React plugin
- Alias `@your-org/brand` → `path.resolve(__dirname, 'src/index.ts')`

### `tsconfig.json`

- `"include": ["src", "playground"]`
- Strict mode, `jsx: "react-jsx"`, `moduleResolution: "bundler"`, `declaration: true`

### Theme shape

```ts
{
  colors: { primary, secondary, background, text },
  spacing: { xs, sm, md, lg, xl },
  typography: { fontFamily, sizes: { body, heading } }
}
```

Use `as const` so the `Theme` type is precise. Ask me for the actual color values — use sensible defaults if I don't specify.

### Logo component

- Accepts `size?: number` (default 48) and spreads other `SVGProps<SVGSVGElement>`
- Uses `fill="currentColor"` so consumers can restyle via CSS `color`
- Start with a placeholder (e.g. a circle) and tell me to replace the SVG paths with my actual logo

### GitHub Actions workflow

```yaml
name: Publish Package
on:
  push:
    tags: ["v*"]
jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          registry-url: "https://npm.pkg.github.com"
          scope: "@your-org" # replace with actual scope
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## README content

The README should explain:

1. **For maintainers**: how to run the playground (`npm run dev`), how to release (bump version in `package.json`, tag `v1.2.3`, push tag)
2. **For consumers**: how to set up `.npmrc` with a GitHub PAT (scope `read:packages`) and install the package
3. Example consumer usage:
   ```tsx
   import { Logo, theme } from "@your-org/brand";
   ```

## Verification steps after setup

Please run these and show me the output:

1. `npm install` — confirm no errors
2. `npm run build` — confirm `dist/` contains `index.js`, `index.cjs`, `index.d.ts`
3. `npm pack --dry-run` — confirm ONLY `dist/`, `package.json`, and `README.md` are in the tarball (no `playground/`, no `src/`, no configs)
4. `npm run dev` — confirm the playground launches (I'll test it in the browser)

## Questions to ask me before you start

1. What's the GitHub org or username (the scope for `@scope/brand`)?
2. What should the package name be? (default: `brand`)
3. Do you have a logo SVG to drop in, or should I use a placeholder for now?
4. Any specific color palette, or should I use sensible defaults?
5. What's the GitHub repo URL for the `repository` field?

Once you have answers, proceed with the full setup.
