# Nazar Hnatyuk's portfolio

A Next.js App Router portfolio with React, TypeScript and Sass. The site is statically exported for [GitHub Pages](https://Stim1.github.io/business-card/).

Use Node.js 20.19+ (20.x) or Node.js 22+ (see `engines` in `package.json`).

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000/business-card/.

```sh
npm test
npm run typecheck
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser tests serve the production `out/` directory at `/business-card/` on port 4187. They cover desktop/mobile keyboard navigation, the profile without JavaScript, local assets, layout and downloading the exact CV PDF.

`npm run build` creates a static export in `out/`; it does not deploy. The existing manual `npm run deploy` command publishes that directory to `gh-pages`, including `.nojekyll` for Next.js assets.

The GitHub Pages path is configured in `next.config.mjs`. The local CV and favicon links use the same `/business-card` prefix. Fonts and images are bundled by Next.js.

TypeScript stays on the latest 6.0 patch because Next.js 16's type checker requires compiler APIs that TypeScript 7 no longer exports. ESLint stays on the latest 9.x release supported by Next.js's lint plugins.
