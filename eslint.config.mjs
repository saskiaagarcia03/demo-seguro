import securityPlugin from 'eslint-plugin-security';

export default {
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
  parserOptions: {
    ecmaVersion: 2020,  // O usa "latest" si prefieres la versión más reciente de ECMAScript
    sourceType: "module"
  }
};






