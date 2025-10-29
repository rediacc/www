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
      // Default values (will be overridden by serialize function)
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),

      // Internationalization support
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          de: 'de-DE',
          es: 'es-ES',
          fr: 'fr-FR',
          ja: 'ja-JP',
          ar: 'ar',
          ru: 'ru-RU',
          tr: 'tr-TR',
          zh: 'zh-CN'
        }
      },

      // Optimize XML file size by excluding unused namespaces
      namespaces: {
        news: false,  // Not a news site
        video: false, // No video content
        image: true,  // Keep for images
        xhtml: true   // Keep for hreflang (i18n)
      },

      // Per-page customization for priority and changefreq
      serialize: (item) => {
        const url = item.url;

        // Homepage - highest priority
        if (url.match(/\/(en|de|es|fr|ja|ar|ru|tr|zh)\/?$/)) {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Root homepage
        else if (url === 'https://www.rediacc.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Solutions pages - high priority
        else if (url.includes('/solutions/')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Pricing page - high priority
        else if (url.includes('/pricing')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Blog listing pages - high priority, frequent updates
        else if (url.match(/\/blog\/?$/)) {
          item.priority = 0.8;
          item.changefreq = 'daily';
        }
        // Docs listing pages - high priority
        else if (url.match(/\/docs\/?$/)) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        }
        // Individual blog posts - medium-high priority, frequent updates
        else if (url.includes('/blog/') && !url.endsWith('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'daily';
        }
        // Individual doc pages - medium-high priority
        else if (url.includes('/docs/') && !url.endsWith('/docs/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        // Team page - medium-high priority
        else if (url.includes('/team')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Contact page - medium priority
        else if (url.includes('/contact')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Other pages - lower priority
        else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }

        return item;
      }
    }),
    searchIndexIntegration
  ],
  output: 'static',
  build: {
    assets: 'assets'
  }
});