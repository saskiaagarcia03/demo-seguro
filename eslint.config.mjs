import securityPlugin from 'eslint-plugin-security';

export default [
  {
    files: ["**/*.js"],
    plugins: {
      security: securityPlugin,
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "security/detect-eval-with-expression": "error",
      "security/detect-new-buffer": "error",
      "security/detect-non-literal-require": "error",
      "security/detect-object-injection": "error"
    },
  },
];








