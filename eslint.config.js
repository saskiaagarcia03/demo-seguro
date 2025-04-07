const securityPlugin = require("eslint-plugin-security");

module.exports = [
  {
    files: ["**/*.js"],
    plugins: {
      security: securityPlugin,
    },
    rules: {
      "semi": ["error", "always"],
      "security/detect-eval-with-expression": "error", // Marca el uso de eval()
    },
  },
];




