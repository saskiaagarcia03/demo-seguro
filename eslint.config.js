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
      "security/detect-eval-with-expression": "error",  // Detecta el uso de eval
      "security/detect-object-injection": "warn",       // Detecta inyecciones de objetos
    },
  },
];



