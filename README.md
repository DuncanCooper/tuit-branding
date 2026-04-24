# @duncancooper/brand

Tuit brand package — shared logo components and design tokens for React projects. Published to GitHub Packages (private). Current version: **0.1.2**.

---

## For Maintainers

### Run the playground

```bash
npm install
npm run dev
```

Opens a live Vite dev server at `http://localhost:5173`. The playground imports directly from `src/` via a Vite alias, so edits to the library hot-reload instantly.

### Build the library

```bash
npm run build
```

Outputs ESM, CJS, and `.d.ts` types to `dist/`. Only `dist/` is included in the published package (`"files": ["dist"]`).

### Release a new version

1. Bump `version` in `package.json`
2. Commit: `git commit -am "v1.2.3"`
3. Tag: `git tag v1.2.3`
4. Push: `git push && git push --tags`

GitHub Actions picks up the `v*` tag and publishes to GitHub Packages automatically via `.github/workflows/publish.yml`.

---

## For Consumers

### 1. Authenticate with GitHub Packages

Create a `.npmrc` in the root of your consuming project (do not commit this file):

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
@duncancooper:registry=https://npm.pkg.github.com
```

Generate a PAT at **GitHub → Settings → Developer settings → Personal access tokens (classic)** with the `read:packages` scope.

### 2. Install

```bash
npm install @duncancooper/brand
```

### 3. Usage

```tsx
import { Logo, Icon, theme } from "@duncancooper/brand";
```

#### Theme tokens

```ts
theme.colors.primary      // "#4ADE80"
theme.colors.secondary    // "#16A34A"
theme.colors.background   // "#0F1419"
theme.colors.text         // "#FFFFFF"

theme.spacing.xs          // "4px"
theme.spacing.sm          // "8px"
theme.spacing.md          // "16px"
theme.spacing.lg          // "24px"
theme.spacing.xl          // "32px"

theme.typography.fontFamily
theme.typography.sizes.body
theme.typography.sizes.heading
```

#### Logo component

Horizontal wordmark. Width scales proportionally (~92:24 ratio).

```tsx
<Logo
  size={48}
  accentColor={theme.colors.primary}
  textColor={theme.colors.text}
/>
```

#### Icon component

Square icon — suited for favicons and avatars.

```tsx
<Icon
  size={48}
  accentColor={theme.colors.primary}
  textColor={theme.colors.text}
  backgroundColor={theme.colors.background}
/>
```

#### Props (both components)

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | `48` | Height in px |
| `accentColor` | `string` | `theme.colors.primary` | Accent fill color |
| `textColor` | `string` | `theme.colors.text` | Text fill color |
| `backgroundColor` | `string` | `"transparent"` | Background fill |

#### TypeScript

```ts
import type { Theme } from "@duncancooper/brand";
```

### 4. CSS variable theming pattern

Inject base vars on a wrapper element and derive alpha variants with `color-mix`:

```tsx
<div style={{
  "--color-primary": theme.colors.primary,
  "--color-text": theme.colors.text,
  "--color-background": theme.colors.background,
} as React.CSSProperties}>
```

```css
.root {
  --color-primary-20: color-mix(in srgb, var(--color-primary) 20%, transparent);
  --color-text-10: color-mix(in srgb, var(--color-text) 10%, transparent);
}
```

### 5. Updating

```bash
npm update @duncancooper/brand
```
