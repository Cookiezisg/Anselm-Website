# Anselm Website

The marketing site for [Anselm](https://github.com/Cookiezisg/Anselm), served at
[anselm.website](https://anselm.website) from GitHub Pages.

## Stack

- [Astro](https://astro.build) with static output. No client framework; the only
  scripts are the product-surface tabs and the GitHub Releases lookup on the
  download page.
- `src/styles/tokens.css` is a copy of the desktop client's design tokens
  (`demo/core/tokens.css` in the main repo). Every color, radius, shadow, and
  motion value on the site comes from that file so the site and the app share
  one visual language, including dark mode.
- English at `/`, Chinese at `/zh/`. Copy lives in `src/i18n/*.json`.
- Inter is self-hosted as a Latin-only subset; CJK falls back to system fonts.

## Screenshots

`src/assets/shots/<locale>/<surface>.png` are real macOS window captures of the
desktop app (`chat`, `entities`, `scheduler`, `notifications`, `library`,
`settings`). Both locales show the same scenario: a scheduled weekly GitHub
digest built by the AI in chat, with an approval step before the document is
saved. A missing file renders a placeholder so the site always builds.

## Commands

```bash
make setup    # mise + npm ci
make dev      # astro dev
make verify   # astro check + build
```

## Deploy

Pushes to `main` build and publish through `.github/workflows/deploy.yml`.
The Pages source must be set to GitHub Actions once in the repository settings;
`public/CNAME` pins the custom domain.
