# Project guidance

## Scope and communication

- Reply in the user's language. Be concise and address an experienced frontend/product engineer.
- Preserve the existing design and behavior unless a change is requested. Keep changes narrow; do not add a backend, CMS, or pages without an explicit request.
- Keep user-facing copy in English and ground profile claims in the supplied CV or user-provided facts. Do not invent experience, responsibilities, or achievements.
- Preserve unrelated worktree changes. Leave changes unstaged and uncommitted; do not create/switch branches, commit, push, open PRs, or deploy unless explicitly requested.
- Keep agent plans, specs, checklists, and review notes outside this repository.

## Architecture and conventions

- This is a Next.js 16 App Router portfolio using React 19, TypeScript, and Sass. Routes and metadata live in `src/app`; `src/App.tsx` composes the existing portfolio sections.
- Reuse the existing section components, Sass styles/mixins, local images, and Clash Display fonts. Follow the closest existing implementation. Do not introduce a new production dependency without asking.
- Respect the TypeScript `~6.0.3` and ESLint 9 compatibility constraints documented in `README.md`; do not upgrade toolchain majors as adjacent cleanup.
- Preserve static export compatibility: `next.config.mjs` uses `output: "export"`, `basePath: "/business-card"`, `trailingSlash: true`, and unoptimized images. Do not introduce server-only runtime features.
- Client Components still prerender. Access browser globals such as `window` and `document` in effects or event handlers behind appropriate client boundaries, never during module initialization or server rendering. Preserve useful initial HTML, including the profile text without JavaScript.
- Account for `/business-card` in manually authored public asset URLs, including CV downloads and favicon metadata. Follow existing Next.js image imports for bundled images; verify links under the deployed base path.

## Commands and verification

- Node.js requirement: `^20.19.0 || >=22.0.0` (see `package.json`). Install dependencies with `npm ci` when needed.
- `npm run dev` and `npm start` both run the development server at `http://127.0.0.1:3000/business-card/`.
- For implementation changes, run the applicable checks: `npm test`, `npm run typecheck`, `npm run lint`, and `npm run build`. Add meaningful regression coverage for changed behavior using the existing Jest/Testing Library tests; avoid tests that merely duplicate implementation.
- For UI changes, build first, then run `npm run test:e2e`. If Chromium is missing, install it with `npx playwright install chromium`. Playwright serves the production `out/` directory at `http://127.0.0.1:4187/business-card/` and checks desktop/mobile behavior. Inspect relevant browser layouts and interactions before claiming visual or runtime success.
- `npm run build` creates `out/` without deploying. `npm run deploy` publishes to GitHub Pages and requires an explicit deployment request.
- Report actual checks and results, distinguish pre-existing failures, and state any missing prerequisites or unverified behavior. Documentation-only changes need factual review rather than an application test run.
