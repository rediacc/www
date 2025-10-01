import type { Language, InterpolationParams } from './types';
import enTranslations from './translations/en.json';

const translations = {
  en: enTranslations,
};

/**
 * Get a nested value from an object using a dot-notation path
 */
function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * Replace interpolation placeholders in a string with actual values
 * Example: "Hello {{name}}" with { name: "World" } => "Hello World"
 */
function interpolate(text: string, params?: InterpolationParams): string {
  if (!params) return text;

  return Object.entries(params).reduce((result, [key, value]) => {
    return result.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
  }, text);
}

/**
 * Get translation by key with optional interpolation
 * @param lang - Language code
 * @param key - Translation key in dot notation (e.g., "hero.title")
 * @param params - Optional parameters for interpolation
 * @returns Translated string or the key if translation not found
 */
export function getTranslation(
  lang: Language,
  key: string,
  params?: InterpolationParams
): string {
  const translation = getNestedValue(translations[lang], key);

  if (translation === undefined) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }

  if (typeof translation === 'string') {
    return interpolate(translation, params);
  }

  console.warn(`Translation key "${key}" does not point to a string value`);
  return key;
}

/**
 * Get an array of translations
 * @param lang - Language code
 * @param key - Translation key pointing to an array
 * @returns Array of strings or empty array if not found
 */
export function getTranslationArray(
  lang: Language,
  key: string
): string[] {
  const translation = getNestedValue(translations[lang], key);

  if (!Array.isArray(translation)) {
    console.warn(`Translation key "${key}" does not point to an array`);
    return [];
  }

  return translation;
}

/**
 * Get an object of translations
 * @param lang - Language code
 * @param key - Translation key pointing to an object
 * @returns Object with translations or empty object if not found
 */
export function getTranslationObject(
  lang: Language,
  key: string
): any {
  const translation = getNestedValue(translations[lang], key);

  if (typeof translation !== 'object' || translation === null) {
    console.warn(`Translation key "${key}" does not point to an object`);
    return {};
  }

  return translation;
}

/**
 * Create a translation function bound to a specific language
 * Useful for Astro pages and server-side code
 */
export function createTranslator(lang: Language = 'en') {
  return {
    t: (key: string, params?: InterpolationParams) =>
      getTranslation(lang, key, params),
    ta: (key: string) =>
      getTranslationArray(lang, key),
    to: (key: string) =>
      getTranslationObject(lang, key),
  };
}
