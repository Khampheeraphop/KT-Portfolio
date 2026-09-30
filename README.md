# Khampheeraphop Thongsaeng — Portfolio

Bilingual personal portfolio built with React, TypeScript, MUI (Material UI), Emotion, and the Vinext App Router. Includes a project archive, individual project URLs, light/dark themes, and reduced-motion support.

## Run locally

Node.js 22.13 or newer is required.

```sh
npm ci
npm run dev
```

## Source structure

```text
app/                        Route entry points and document metadata
  projects/[slug]/          Individual project route
components/
  portfolio/                Home page sections
  shared/                   Reusable presentation components
features/
  portfolio/pages/          Home page composition
  projects/
    pages/                  Project detail page composition
    components/             Shared project presentation
    types.ts                Project schema
    registry.ts             Imports and project lookup only
    <project-slug>/
      index.ts              Individual project configuration
      th.ts                 Thai project content
      en.ts                 English project content
      assets/               Project-specific assets
layouts/                    Shared navigation and footer
locales/                    UI translations and locale provider
constants/                  Profile, contacts, technology list and routes
theme/                      MUI theme, design tokens, motion and SSR provider
utils/                      Reusable formatting helpers
```

Page compositions live inside their feature's `pages/` folder so they are not accidentally interpreted as a second Pages Router. `app/` only wires routes to these compositions.

## Content updates

- Profile, contact URLs and résumé URL: `constants/profile.ts`.
- Introduction: `locales/identity.ts`.
- Interface translations: `locales/th.ts` and `locales/en.ts`.
- Project description: edit that project's `th.ts` and `en.ts`.
- Project screenshot: keep it in the project's `assets/` folder and configure `image` in its `index.ts`. Shared `ProjectVisual` renders it in featured work, related cards and details, with a full image dialog on details.
- Add a project: create its own directory, export a `Project`, and import it in `registry.ts`.
- Colors, fonts and motion duration: `theme/tokens.ts`.
- MUI palette, typography, component defaults and global baseline: `theme/createPortfolioTheme.ts`.
- Component layouts and responsive styling: MUI `sx` and `styled` at the component.
- Route helpers: `constants/routes.ts`.

Email, GitHub and LinkedIn are configured in `constants/profile.ts`. The résumé URL remains `null` until supplied and renders as unavailable text. Project diagrams are conceptual illustrations, not screenshots of client systems. Internal projects use descriptive names; Siriraj Event and Siriraj Give Phase 2 use their public names.

User-supplied screenshots are included for NSM E-Portfolio, Siriraj Event and Siriraj Give Phase 2. Other projects keep their conceptual diagrams. Related projects choose three distinct items, excluding the current project, on the server so rendering stays consistent. The Vite dependency cache uses `node_modules/.vite-mui` to keep transforms separate from the earlier UI dependencies.

## UI architecture

All active UI uses MUI components and icons. `ThemeProvider` combines the MUI theme with the App Router Emotion cache provider to render styles on the server. Language and theme preferences persist locally. Global resets and reduced-motion rules live in `MuiCssBaseline`; there are no Tailwind utilities or standalone stylesheet dependencies in the active application.

The previous UI files are preserved locally in the ignored `.sites-runtime/legacy-ui` directory for recovery. They are excluded from TypeScript checking and from the application build.

## Verification

```sh
npx tsc --noEmit
npm run build
```

## Cloudflare deployment

Live website: https://kt-portfolio.khampheeraphop-thon.workers.dev/

For a manual release after signing in with `npx wrangler login`:

```sh
npm run build
npm run deploy
```

To deploy automatically from GitHub, connect `Khampheeraphop/KT-Portfolio` in
Cloudflare's `kt-portfolio` Worker under **Settings → Builds**:

- Production branch: `main`.
- Root directory: `/`.
- Build command: `npm run build`.
- Deploy command: `npm run deploy`.
- Preview branch deploy command: `npm run deploy:preview`.
- Enable builds for non-production branches to create preview URLs.
- Set the build environment variable `NODE_VERSION` to `22.14.0` or newer.

The Cloudflare GitHub App needs access to this repository. This connection must
be completed in the account dashboard before pushes can trigger deployments.
Worker configuration is in `wrangler.jsonc`; the Vite build produces the deployment
configuration in `dist/server/wrangler.json`. No deployment credentials belong in
the repository.

Only the supplied experience is represented. Employment dates, graduation year, photographs and contact handles have not been invented.
