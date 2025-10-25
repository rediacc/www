// @ts-check
import { defineConfig } from 'astro/config';
import { execSync } from 'child_process';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Integration to generate search index before build
const searchIndexIntegration = {
  name: 'search-index-generator',
  hooks: {
    'astro:build:start': async () => {
      try {
        execSync('node scripts/generate-search-index.js', { stdio: 'inherit' });
      } catch (error) {
        console.error('⚠ Failed to generate search index. Continuing with build...');
      }
    }
  }
};

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
        'https://www.rediacc.com/contact',
        // Language-aware pages
        'https://www.rediacc.com/en/blog',
        'https://www.rediacc.com/en/docs',
        'https://www.rediacc.com/es/blog',
        'https://www.rediacc.com/es/docs'
      ]
    }),
    searchIndexIntegration
  ],
  output: 'static',
  build: {
    assets: 'assets'
  }
});