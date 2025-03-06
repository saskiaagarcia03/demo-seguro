// eslint.config.js
module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: { node: true }, // Equivalente a "env": {"node": true}
    },
    rules: {
      "semi": ["error", "always"],
    },
  },
];
