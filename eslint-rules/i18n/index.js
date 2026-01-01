/**
 * ESLint i18n Plugin for WWW
 *
 * Custom rules for strict i18n validation in translation JSON files.
 * Adapted from console for www's single-file structure.
 *
 * Console: locales/{lang}/*.json (multiple namespace files per language)
 * WWW: translations/{lang}.json (single file per language)
 */

import { noEmptyTranslations } from './no-empty-translations.js';
import { sortedKeys } from './sorted-keys.js';
import { crossLanguageConsistency } from './cross-language-consistency.js';
import { translationCoverage } from './translation-coverage.js';
import { noUntranslatedValues } from './no-untranslated-values.js';
import { interpolationConsistency } from './interpolation-consistency.js';
import { translationStaleness } from './translation-staleness.js';

/**
 * Plugin for JSON translation file validation
 */
export const i18nJsonPlugin = {
  rules: {
    'no-empty-translations': noEmptyTranslations,
    'sorted-keys': sortedKeys,
    'cross-language-consistency': crossLanguageConsistency,
    'translation-coverage': translationCoverage,
    'no-untranslated-values': noUntranslatedValues,
    'interpolation-consistency': interpolationConsistency,
    'translation-staleness': translationStaleness,
  },
};

// Export individual rules for direct import
export { noEmptyTranslations } from './no-empty-translations.js';
export { sortedKeys } from './sorted-keys.js';
export { crossLanguageConsistency } from './cross-language-consistency.js';
export { translationCoverage } from './translation-coverage.js';
export { noUntranslatedValues } from './no-untranslated-values.js';
export { interpolationConsistency } from './interpolation-consistency.js';
export { translationStaleness } from './translation-staleness.js';

// Default export for ESLint plugin
export default i18nJsonPlugin;
