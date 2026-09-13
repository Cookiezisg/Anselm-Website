// @ts-check
import { defineConfig } from 'astro/config';

// Static marketing site for anselm.website, deployed to GitHub Pages.
// English is the default locale at `/`, Chinese lives under `/zh/`.
export default defineConfig({
  site: 'https://anselm.website',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'auto' },
});
