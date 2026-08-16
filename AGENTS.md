# Repository Guidelines

> Jakąkolwiek akcję możesz wykonać samodzielnie, wykonaj ją sam. Dotyczy to również uruchamiania aplikacji i przeprowadzania weryfikacji.

## Project Structure & Module Organization

NortIT is a statically exported Next.js 15 site using the App Router, React 19, TypeScript, Tailwind CSS, and GSAP. Routes, metadata, and global styles live in `app/`; reusable UI belongs in `components/`. Keep shared business details such as the phone number, email address, service area, and site URL in `lib/site.ts`. Use `assets/README.md` as the source-of-truth manifest for generated visual assets; web-ready files belong in `public/assets/`. Hosting preparation scripts live in `scripts/`. Treat `.next/` and `out/` as generated output; do not edit or commit them.

## Build, Test, and Development Commands

Use pnpm because the repository includes `pnpm-lock.yaml`:

- `pnpm install` installs the locked dependency set.
- `pnpm dev` starts the local site at `http://localhost:3000`.
- `pnpm build` type-checks, compiles, and exports the static site to `out/`.
- `pnpm build:hosting` builds and prepares the hosting package.
- `pnpm exec tsc --noEmit` runs a quick TypeScript-only check.

Stop the development server before a production build; both commands use `.next/`.

## Coding Style & Naming Conventions

Follow existing TypeScript and TSX style: two-space indentation, double quotes, semicolons, and trailing commas in multiline structures. Use PascalCase for React components (`ContactForm.tsx` exports `ContactForm`), camelCase for functions and variables, and kebab-case for image assets. Prefer the `@/` import alias. Keep static copy and data outside component bodies when practical. Use Tailwind utilities consistently and preserve accessible labels, heading order, and keyboard behavior. Use `@phosphor-icons/react` for new interface icons, choose an intentional `weight`, and set `aria-hidden="true"` on decorative icons.

## Testing Guidelines

No automated test framework or coverage threshold is configured. Every change must pass `pnpm build`. For UI changes, manually verify desktop and mobile layouts, navigation anchors, the contact form states, and the privacy-policy route. If tests are added, use `*.test.ts` or `*.test.tsx` names and document the runner in `package.json`.

## Commit & Pull Request Guidelines

The repository has no established commit history. Use short, imperative Conventional Commit messages, for example `fix: handle FormSubmit activation` or `feat: add individual services section`. Pull requests should explain the user-visible change, list verification performed, link relevant issues, and include before/after screenshots for visual changes. Call out changes to contact details, SEO metadata, EmailJS, or static-export behavior.

## Security & Configuration Tips

Set `NEXT_PUBLIC_SITE_URL` for production builds. Never commit hosting credentials or email passwords. The contact form uses EmailJS. Keep service and template restrictions aligned with `nortit.pl`, enable available anti-spam controls, and never commit email passwords or private server credentials.

## Generated Assets

Before adding or replacing imagery, read `assets/README.md`. Keep the hero image unchanged unless a task explicitly includes it. New landing-page illustrations must be original, visually consistent with the dark blue NortIT system, free of text and logos, and saved with descriptive kebab-case names such as `public/assets/network-infrastructure.png`. Record each asset's purpose and final generation prompt in the manifest, then verify its desktop and mobile crops in the running site.
