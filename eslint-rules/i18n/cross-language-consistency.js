/**
 * ESLint rule to ensure cross-language consistency in translation files.
 * Compares English (source of truth) keys with other language files.
 * Reports missing keys in each language.
 *
 * Adapted for www's single-file structure: translations/{lang}.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { flattenKeys, getLanguageFromPath } from './shared/locale-cache.js';

// Cache for loaded locale data
let localeCache = new Map();

/**
 * Get all supported languages from translations directory
 */
const getSupportedLanguages = (translationsDir) => {
  try {
    const files = fs.readdirSync(translationsDir);
    return files.filter((f) => f.endsWith('.json')).map((f) => f.replace('.json', ''));
  } catch {
    return [];
  }
};

/**
 * Load and flatten keys from a translation file
 */
const loadTranslationKeys = (filePath) => {
  if (localeCache.has(filePath)) {
    return localeCache.get(filePath);
  }

  try {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const keys = new Set(flattenKeys(content));
    localeCache.set(filePath, keys);
    return keys;
  } catch {
    return new Set();
  }
};

/** @type {import('eslint').Rule.RuleModule} */
export const crossLanguageConsistency = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure all languages have the same translation keys as English',
      recommended: true,
    },
    schema: [
      {
        type: 'object',
        properties: {
          translationsDir: {
            type: 'string',
            description: 'Path to the translations directory',
          },
          sourceLanguage: {
            type: 'string',
            default: 'en',
            description: 'Source language to compare against',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      missingInLanguage:
        'Key "{{key}}" exists in {{source}} but is missing in {{language}}.',
      extraInLanguage:
        'Key "{{key}}" exists in {{language}} but not in {{source}} (source of truth).',
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const translationsDir = options.translationsDir || 'src/i18n/translations';
    const sourceLanguage = options.sourceLanguage || 'en';

    // Resolve paths
    const projectRoot = process.cwd();
    const absoluteTranslationsDir = path.isAbsolute(translationsDir)
      ? translationsDir
      : path.join(projectRoot, translationsDir);

    // Get current file info
    const filename = context.filename || context.getFilename();
    const currentLang = getLanguageFromPath(filename);

    // Only run on source language file (English)
    if (currentLang !== sourceLanguage) {
      return {};
    }

    // Get all other languages
    const languages = getSupportedLanguages(absoluteTranslationsDir).filter(
      (lang) => lang !== sourceLanguage
    );

    return {
      Document(node) {
        if (node.body?.type !== 'Object') return;

        // Get English keys from current file
        const englishFilePath = path.join(absoluteTranslationsDir, `${sourceLanguage}.json`);
        const englishKeys = loadTranslationKeys(englishFilePath);

        // Check each language
        for (const lang of languages) {
          const langFilePath = path.join(absoluteTranslationsDir, `${lang}.json`);

          // Skip if language file doesn't exist
          if (!fs.existsSync(langFilePath)) {
            continue;
          }

          const langKeys = loadTranslationKeys(langFilePath);

          // Find keys missing in this language
          for (const key of englishKeys) {
            if (!langKeys.has(key)) {
              context.report({
                node,
                messageId: 'missingInLanguage',
                data: {
                  key,
                  source: sourceLanguage,
                  language: lang,
                },
              });
            }
          }

          // Find extra keys in this language (not in English)
          for (const key of langKeys) {
            if (!englishKeys.has(key)) {
              context.report({
                node,
                messageId: 'extraInLanguage',
                data: {
                  key,
                  source: sourceLanguage,
                  language: lang,
                },
              });
            }
          }
        }
      },
    };
  },
};

export default crossLanguageConsistency;
