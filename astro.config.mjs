// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rediacc.com',
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://www.rediacc.com/',
        'https://www.rediacc.com/contact'
      ]
    })
  ],
  output: 'static',
  build: {
    assets: 'assets'
  }
});