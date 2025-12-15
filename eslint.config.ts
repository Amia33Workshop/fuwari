import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import svelte from "eslint-plugin-svelte";

export default defineConfig([
  ...svelte.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      // We recommend importing and specifying svelte.config.js
      // ... (parser options if using TypeScript)
    },
  },
  tseslint.configs.recommended,
  eslintConfigPrettier,
]);
