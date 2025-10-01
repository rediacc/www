import type translations from './translations/en.json';

export type Translations = typeof translations;

export type Language = 'en';

export type TranslationKey = string;

export type InterpolationParams = Record<string, string | number>;
