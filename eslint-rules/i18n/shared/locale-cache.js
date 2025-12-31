/**
 * Locale Cache Utilities for WWW
 *
 * Adapted from console for www's single-file-per-language structure.
 * Console: locales/{lang}/*.json (multiple namespace files per language)
 * WWW: translations/{lang}.json (single file per language)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const DEFAULT_TRANSLATIONS_DIR = path.join(ROOT_DIR, 'src/i18n/translations');

let cachedTranslations = new Map();
let cachedAllKeys = new Map();

/**
 * Load a single language JSON file
 * @param {string} filePath - Path to the language JSON file
 * @returns {object|null} Parsed JSON or null if failed
 */
export const loadTranslationFile = (filePath) => {
  if (cachedTranslations.has(filePath)) {
    return cachedTranslations.get(filePath);
  }

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const contents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(contents);
    cachedTranslations.set(filePath, data);
    return data;
  } catch {
    cachedTranslations.set(filePath, null);
    return null;
  }
};

/**
 * Flatten nested object keys into dot-notation paths
 * @param {object} obj - The object to flatten
 * @param {string} prefix - Current key prefix
 * @returns {string[]} Array of flattened key paths
 */
export const flattenKeys = (obj, prefix = '') => {
  const keys = [];
  if (!obj || typeof obj !== 'object') return keys;

  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      keys.push(...flattenKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
};

/**
 * Flatten object to key-value pairs
 * @param {object} obj - The object to flatten
 * @param {string} prefix - Current key prefix
 * @returns {Array<{key: string, value: string}>} Array of key-value pairs
 */
export const flattenToKeyValues = (obj, prefix = '') => {
  const pairs = [];
  if (!obj || typeof obj !== 'object') return pairs;

  for (const [key, value] of Object.entries(obj)) {
    const fullPath = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      pairs.push(...flattenToKeyValues(value, fullPath));
    } else if (typeof value === 'string') {
      pairs.push({ key: fullPath, value });
    }
  }

  return pairs;
};

/**
 * Get all flattened keys from a translation file
 * @param {string} filePath - Path to the translation file
 * @returns {Set<string>} Set of flattened keys
 */
export const getAllKeys = (filePath) => {
  if (cachedAllKeys.has(filePath)) {
    return cachedAllKeys.get(filePath);
  }

  const data = loadTranslationFile(filePath);
  if (!data) {
    return new Set();
  }

  const keys = new Set(flattenKeys(data));
  cachedAllKeys.set(filePath, keys);
  return keys;
};

/**
 * Get all supported language codes from the translations directory
 * @param {string} translationsDir - Path to translations directory
 * @returns {string[]} Array of language codes (e.g., ['en', 'de', 'es'])
 */
export const getSupportedLanguages = (translationsDir = DEFAULT_TRANSLATIONS_DIR) => {
  if (!fs.existsSync(translationsDir)) return [];

  return fs
    .readdirSync(translationsDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace('.json', ''));
};

/**
 * Get language code from a file path
 * For www: /path/translations/en.json -> 'en'
 * @param {string} filePath - Path to the translation file
 * @returns {string} Language code
 */
export const getLanguageFromPath = (filePath) => {
  return path.basename(filePath, '.json');
};

/**
 * Get the root directory for the www project
 */
export const getRootDir = () => ROOT_DIR;

/**
 * Get the default translations directory
 */
export const getDefaultTranslationsDir = () => DEFAULT_TRANSLATIONS_DIR;

/**
 * Check if a key path exists in a resource object
 * @param {object} resource - The resource object
 * @param {string[]} segments - Key path segments
 * @returns {boolean} Whether the path exists
 */
export const hasPath = (resource, segments) => {
  if (!resource) return false;
  let current = resource;
  for (const segment of segments) {
    if (!Object.prototype.hasOwnProperty.call(current, segment)) {
      return false;
    }
    current = current[segment];
  }
  return true;
};

/**
 * Get value at a path in a resource object
 * @param {object} resource - The resource object
 * @param {string[]} segments - Key path segments
 * @returns {*} The value at the path or undefined
 */
export const getValueAtPath = (resource, segments) => {
  if (!resource) return undefined;
  let current = resource;
  for (const segment of segments) {
    if (!Object.prototype.hasOwnProperty.call(current, segment)) {
      return undefined;
    }
    current = current[segment];
  }
  return current;
};

/**
 * Clear all caches (useful for testing or when files change)
 */
export const clearCache = () => {
  cachedTranslations.clear();
  cachedAllKeys.clear();
};
