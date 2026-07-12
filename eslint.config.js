import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: ["dist/**", "coverage/**"]
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        document: "readonly",
        fetch: "readonly",
        process: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["error", { "varsIgnorePattern": "React" }]
    }
  }
];
