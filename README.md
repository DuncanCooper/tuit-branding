# @duncancooper/brand

Tuit brand package — shared logo components and design tokens for React projects.

---

## For Maintainers

### Run the playground

```bash
npm install
npm run dev
```

Opens a live Vite dev server at `http://localhost:5173` with interactive demos for colors and logo sizing. Changes to `src/` hot-reload instantly.

### Release a new version

1. Bump `version` in `package.json`
2. Commit: `git commit -am "v1.2.3"`
3. Tag: `git tag v1.2.3`
4. Push: `git push && git push --tags`

GitHub Actions picks up the `v*` tag and publishes to GitHub Packages automatically.

---

## For Consumers

### 1. Authenticate with GitHub Packages

Create or edit `~/.npmrc` (global) or `.npmrc` in your project root:

```
@duncancooper:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

Generate a PAT at **GitHub → Settings → Developer settings → Personal access tokens** with the `read:packages` scope.

### 2. Install

```bash
npm install @duncancooper/brand
```

### 3. Usage

```tsx
import { Logo, Icon, theme } from '@duncancooper/brand';

// Logo wordmark (horizontal)
<Logo size={48} />

// Square icon
<Icon size={48} />

// Override accent color
<Logo size={64} accentColor="#FF0000" />

// Design tokens
const primary = theme.colors.primary; // '#4ADE80'
```

#### Props

**`Logo` and `Icon`** accept all standard `SVGProps` plus:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | `48` | Height in px (Logo scales width to maintain ratio) |
| `accentColor` | `string` | `theme.colors.primary` | Semicircle fill color |
| `textColor` | `string` | `theme.colors.text` | Text fill color |
| `backgroundColor` | `string` | `theme.colors.background` | Background fill (`"transparent"` to remove) |

#### TypeScript

```ts
import type { Theme } from '@duncancooper/brand';
```
