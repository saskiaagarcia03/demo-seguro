module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: { node: true },
    },
    plugins: {
      security: require("eslint-plugin-security"),
    },
    rules: {
      "semi": ["error", "always"],
      "security/detect-eval-with-expression": "error",
      "security/detect-new-function": "warn",
      "security/detect-object-injection": "warn",
      "security/detect-non-literal-regexp": "warn", // Otra regla de seguridad adicional
    },
  },
];


