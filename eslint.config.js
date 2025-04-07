// eslint.config.mjs
import securityPlugin from "eslint-plugin-security";

export default [
  {
    files: ["**/*.js"],
    plugins: {
      security: securityPlugin,
    },
    rules: {
      "semi": ["error", "always"],
      "security/detect-eval-with-expression": "error",
    },
  },
];





