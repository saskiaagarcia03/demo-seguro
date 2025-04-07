// eslint.config.js
const securityPlugin = require("eslint-plugin-security");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: { node: true },
    },
    plugins: {
      security: securityPlugin,
    },
    rules: {
      "semi": ["error", "always"],
      "security/detect-eval-with-expression": "error",
      "security/detect-object-injection": "warn",
    },
  },
];

