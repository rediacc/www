/**
 * ESLint rule to enforce minimum translation coverage across languages.
 * Reports if any language falls below the specified coverage threshold.
 *
 * Adapted for www's single-file structure: translations/{lang}.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { flattenKeys, getLanguageFromPath } from './shared/locale-cache.js';

// Cache for coverage data
let coverageCache = new Map();

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
 * Count keys in a translation file
 */
const getKeyCount = (filePath) => {
  const cacheKey = `count:${filePath}`;
  if (coverageCache.has(cacheKey)) {
    return coverageCache.get(cacheKey);
  }

  try {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const count = flattenKeys(content).length;
    coverageCache.set(cacheKey, count);
    return count;
  } catch {
    return 0;
  }
};

/**
 * Calculate coverage for all languages
 */
const calculateCoverage = (translationsDir, sourceLanguage) => {
  const languages = getSupportedLanguages(translationsDir);
  const coverage = {};

  // Get source language count
  const sourcePath = path.join(translationsDir, `${sourceLanguage}.json`);
  const sourceCount = getKeyCount(sourcePath);

  if (sourceCount === 0) {
    return { sourceCount: 0, languages: {} };
  }

  for (const lang of languages) {
    if (lang === sourceLanguage) continue;

    const langPath = path.join(translationsDir, `${lang}.json`);
    if (!fs.existsSync(langPath)) {
      coverage[lang] = { count: 0, total: sourceCount, percentage: 0 };
      continue;
    }

    const langCount = getKeyCount(langPath);
    // Coverage is capped at 100% (extra keys don't increase coverage)
    const percentage = Math.min(100, Math.round((langCount / sourceCount) * 100));

    coverage[lang] = {
      count: langCount,
      total: sourceCount,
      percentage,
    };
  }

  return { sourceCount, languages: coverage };
};

/** @type {import('eslint').Rule.RuleModule} */
export const translationCoverage = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce minimum translation coverage across all languages',
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
            description: 'Source language (100% coverage baseline)',
          },
          minimumCoverage: {
            type: 'number',
            default: 80,
            minimum: 0,
            maximum: 100,
            description: 'Minimum required coverage percentage',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      lowCoverage:
        '{{language}} translation coverage is {{percentage}}% ({{count}}/{{total}} keys). Minimum required: {{minimum}}%.',
      missingFile: '{{language}} is missing translation file.',
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const translationsDir = options.translationsDir || 'src/i18n/translations';
    const sourceLanguage = options.sourceLanguage || 'en';
    const minimumCoverage = options.minimumCoverage ?? 80;

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

    return {
      Document(node) {
        if (node.body?.type !== 'Object') return;

        const { sourceCount, languages } = calculateCoverage(
          absoluteTranslationsDir,
          sourceLanguage
        );

        if (sourceCount === 0) {
          return; // Empty source file
        }

        for (const [lang, data] of Object.entries(languages)) {
          if (data.count === 0 && data.total > 0) {
            // Missing translation file
            context.report({
              node,
              messageId: 'missingFile',
              data: {
                language: lang,
              },
            });
          } else if (data.percentage < minimumCoverage) {
            // Low coverage
            context.report({
              node,
              messageId: 'lowCoverage',
              data: {
                language: lang,
                percentage: data.percentage,
                count: data.count,
                total: data.total,
                minimum: minimumCoverage,
              },
            });
          }
        }
      },
    };
  },
};

export default translationCoverage;
