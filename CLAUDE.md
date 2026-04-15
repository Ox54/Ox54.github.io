# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build to ./dist/
npm run preview  # Preview production build locally
```

Requires Node.js ≥ 22.12.0.

## Architecture

This is a minimal **Astro** static site for a personal resume/CV. The entire resume lives in a single MDX page — no CMS, no database, no dynamic routes.

**Data flow:** `src/pages/index.mdx` (resume content) → `src/layouts/BaseLayout.astro` (HTML shell + CSS vars) → static HTML output.

**Content editing:** Resume content is plain markdown in `index.mdx`. Frontmatter specifies the layout and SEO metadata. Sections (Experience, Skills, Projects) are markdown headings/lists.

**Components:** `src/components/SocialLinks.astro` accepts a typed `SocialLink[]` prop array and renders a row of icon links. Icons are loaded from an external CDN.

**Styling:** Pure CSS in `src/styles/global.css` using CSS custom properties (`--text`, `--bg`, `--accent`, `--border`, `--text-muted`) for theming. `prefers-color-scheme` drives light/dark mode automatically. `@media print` rules handle PDF export layout — removing backgrounds, showing link URLs inline.

## Key Conventions

- Resume content is markdown-first; avoid moving data into JSON/JS config files.
- The print stylesheet is load-bearing — test layout changes against `@media print` as well as screen.
- TypeScript strict mode is enabled; component props should be typed.
