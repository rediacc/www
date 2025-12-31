/**
 * ESLint rule to detect untranslated values in non-English locale files.
 * Reports values that are identical to their English counterparts.
 *
 * Adapted for www's single-file structure: translations/{lang}.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { flattenToKeyValues, getLanguageFromPath } from './shared/locale-cache.js';

// Cache for English translations
let englishCache = new Map();

/**
 * Load English translations
 */
const loadEnglishTranslations = (translationsDir) => {
  if (englishCache.has(translationsDir)) {
    return englishCache.get(translationsDir);
  }

  const englishFile = path.join(translationsDir, 'en.json');
  try {
    const content = JSON.parse(fs.readFileSync(englishFile, 'utf-8'));
    const translations = new Map();

    for (const { key, value } of flattenToKeyValues(content)) {
      translations.set(key, value);
    }

    englishCache.set(translationsDir, translations);
    return translations;
  } catch {
    return new Map();
  }
};

/**
 * Check if a value looks like it needs translation
 * (contains letters, not just symbols/numbers)
 */
const needsTranslation = (value) => {
  // Must contain at least one letter
  if (!/[a-zA-Z]/.test(value)) {
    return false;
  }

  // Skip if it's ONLY interpolation variables
  if (/^{{[^}]+}}$/.test(value.trim())) {
    return false;
  }

  // Skip URLs and paths
  if (/^(https?:\/\/|\/)/.test(value)) {
    return false;
  }

  // Skip all-caps acronyms/abbreviations
  if (/^[A-Z_]+$/.test(value.trim())) {
    return false;
  }

  return true;
};

/** @type {import('eslint').Rule.RuleModule} */
export const noUntranslatedValues = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Detect values that are identical to English (untranslated)',
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
          allowedPatterns: {
            type: 'array',
            items: { type: 'string' },
            description: 'Regex patterns for values that can remain untranslated',
          },
          minLength: {
            type: 'number',
            default: 3,
            description: 'Minimum string length to check',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      untranslated:
        'Value for key "{{key}}" is identical to English. Consider translating: "{{value}}"',
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const translationsDir = options.translationsDir || 'src/i18n/translations';
    const allowedPatterns = (options.allowedPatterns || []).map((p) => new RegExp(p));
    const minLength = options.minLength ?? 3;

    // Resolve paths
    const projectRoot = process.cwd();
    const absoluteTranslationsDir = path.isAbsolute(translationsDir)
      ? translationsDir
      : path.join(projectRoot, translationsDir);

    // Get current file info
    const filename = context.filename || context.getFilename();
    const currentLang = getLanguageFromPath(filename);

    // Only run on non-English files
    if (currentLang === 'en') {
      return {};
    }

    // Load English translations
    const englishTranslations = loadEnglishTranslations(absoluteTranslationsDir);

    /**
     * Check if a value matches any allowed pattern
     */
    const isAllowed = (value) => {
      return allowedPatterns.some((pattern) => pattern.test(value));
    };

    /**
     * Recursively check all values in a JSON object
     */
    const checkObject = (node, prefix = '') => {
      if (!node || node.type !== 'Object') return;

      const members = node.body?.members || node.members || [];

      for (const member of members) {
        if (member.type !== 'Member') continue;

        const key = member.name?.type === 'String' ? member.name.value : member.name?.name;

        if (!key) continue;

        const fullPath = prefix ? `${prefix}.${key}` : key;
        const value = member.value;

        if (value?.type === 'Object') {
          // Recursively check nested objects
          checkObject(value, fullPath);
        } else if (value?.type === 'String') {
          const strValue = value.value;

          // Skip short strings
          if (strValue.length < minLength) {
            continue;
          }

          // Skip if it doesn't need translation
          if (!needsTranslation(strValue)) {
            continue;
          }

          // Skip allowed patterns
          if (isAllowed(strValue)) {
            continue;
          }

          // Check if identical to English
          const englishValue = englishTranslations.get(fullPath);
          if (englishValue && strValue === englishValue) {
            context.report({
              node: value,
              messageId: 'untranslated',
              data: {
                key: fullPath,
                value: strValue.length > 50 ? strValue.slice(0, 47) + '...' : strValue,
              },
            });
          }
        }
      }
    };

    return {
      Document(node) {
        if (node.body?.type === 'Object') {
          checkObject(node.body);
        }
      },
    };
  },
};

export default noUntranslatedValues;
