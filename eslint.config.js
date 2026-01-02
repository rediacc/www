import js from '@eslint/js';
import json from '@eslint/json';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import { i18nJsonPlugin } from './eslint-rules/i18n/index.js';

export default tseslint.config(
  // Ignore patterns
  {
    ignores: [
      'dist/',
      'bin/',
      'node_modules/',
      '.astro/',
      'scripts/',
      'public/scripts/',
      '*.config.js',
      '*.config.mjs',
      'eslint-rules/',
    ],
  },

  // Base JavaScript rules
  js.configs.recommended,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // TypeScript + React files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React rules
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // React Hooks rules
      ...reactHooksPlugin.configs.recommended.rules,

      // React quality rules
      'react/hook-use-state': 'error',
      'react/button-has-type': 'error',
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/self-closing-comp': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
          propElementValues: 'always',
        },
      ],

      // TypeScript rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          ignoreParameters: false,
          ignoreProperties: false,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-deprecated': 'error',

      // TypeScript Strict Rules (Bug Prevention)
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',

      // TypeScript Stylistic Rules (Modern Patterns)
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'array' }],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'allow-as-parameter',
        },
      ],

      // General rules
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'max-lines': ['error', { max: 512, skipBlankLines: true, skipComments: true }],

      // Core ESLint Rules (JavaScript Quality)
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],
      'prefer-template': 'error',
      'prefer-arrow-callback': 'error',
      'no-else-return': 'error',
      'no-lonely-if': 'error',
      'no-implicit-coercion': ['error', { allow: ['!!'] }],

      // Import rules
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'type'],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },

  // All translation JSON files - basic rules
  {
    files: ['src/i18n/translations/*.json'],
    plugins: {
      json,
      i18n: i18nJsonPlugin,
    },
    language: 'json/json',
    rules: {
      'json/no-duplicate-keys': 'error',
      'i18n/sorted-keys': 'error',
      'i18n/no-empty-translations': 'error',
    },
  },

  // English only (source of truth) - cross-language validation
  {
    files: ['src/i18n/translations/en.json'],
    plugins: {
      json,
      i18n: i18nJsonPlugin,
    },
    language: 'json/json',
    rules: {
      'i18n/cross-language-consistency': [
        'error',
        {
          translationsDir: 'src/i18n/translations',
          sourceLanguage: 'en',
        },
      ],
      'i18n/translation-coverage': [
        'error',
        {
          translationsDir: 'src/i18n/translations',
          sourceLanguage: 'en',
          minimumCoverage: 100,
        },
      ],
      // Translation staleness - detect when English values change
      'i18n/translation-staleness': [
        'error',
        {
          translationsDir: 'src/i18n/translations',
          hashFileName: '.translation-hashes.json',
        },
      ],
    },
  },

  // Non-English translations - untranslated value detection
  {
    files: ['src/i18n/translations/{ar,de,es,fr,ja,ru,tr,zh}.json'],
    plugins: {
      json,
      i18n: i18nJsonPlugin,
    },
    language: 'json/json',
    rules: {
      'i18n/no-untranslated-values': [
        'error',
        {
          translationsDir: 'src/i18n/translations',
          minLength: 3,
          allowedPatterns: [
            '^[A-Z]{2,}$', // Acronyms
            '^https?://', // URLs
            '^/', // Paths
            '.*@.*', // Emails
            '.*\\{\\{.*\\}\\}.*', // Placeholders
            '^Rediacc$', // Brand name
            '^\\d+\\s*(GB|TB|MB|KB)\\+?$', // Storage sizes (10 GB, 1 TB+)
            '^~?\\d+\\s*(minutes?|hours?|days?)$', // Time durations
            '^Blog$', // Commonly used as loanword
            '^Standard$', // Commonly used as loanword
            '^Professional$', // Commonly used as loanword
            '^Name\\s*\\*?$', // Name field (cognate in many languages)
            '^Team$', // Team (loanword in many languages)
            '^Message\\s*\\*?$', // Message field (cognate in Romance languages)
            '^Role$', // Role (cognate)
            '^Contact$', // Contact (cognate)
            '^General$', // General (cognate)
            '^Multiple$', // Multiple (cognate)
            '^Solutions$', // Solutions (cognate)
            '^Documentation$', // Documentation (cognate)
            '^Legal$', // Legal (cognate in Romance languages)
          ],
        },
      ],
      'i18n/interpolation-consistency': [
        'error',
        {
          translationsDir: 'src/i18n/translations',
        },
      ],
    },
  },

  // Disable JS/TS rules for JSON files
  {
    files: ['**/*.json'],
    rules: {
      'no-irregular-whitespace': 'off',
      'no-unused-vars': 'off',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }
);
