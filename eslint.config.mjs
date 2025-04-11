// eslint.config.mjs
import security from 'eslint-plugin-security';
import noUnsanitized from 'eslint-plugin-no-unsanitized';
import rushstackSecurity from '@rushstack/eslint-plugin-security';

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        node: true,
        browser: true
      }
    },
    plugins: {
      security,
      'no-unsanitized': noUnsanitized,
      '@rushstack/security': rushstackSecurity
    },
    rules: {
      // Reglas de eslint-plugin-security
      'security/detect-object-injection': 'error',
      'security/detect-unsafe-regex': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-non-literal-regexp': 'error',
      // Reglas de eslint-plugin-no-unsanitized
      'no-unsanitized/method': 'error',
      'no-unsanitized/property': 'error',
      // Reglas de @rushstack/eslint-plugin-security
      '@rushstack/security/no-unsafe-regexp': 'error'
    }
  },
  security.configs.recommended,
  noUnsanitized.configs.recommended
];







