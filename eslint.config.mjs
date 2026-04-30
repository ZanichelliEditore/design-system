// @ts-check

import eslint from "@eslint/js";
import stencilPlugin from "@stencil/eslint-plugin";
import prettierConfig from "eslint-config-prettier";
import storybookPlugin from "eslint-plugin-storybook";
import {defineConfig} from "eslint/config";
import tseslint from "typescript-eslint";

const TS_FILES = ["**/*.{ts,tsx}"];
const STORY_FILES = ["**/*.stories.ts"];
const stencilRecommended = stencilPlugin.configs.flat.recommended;

export default defineConfig([
  {
    ignores: [
      "eslint.config.mjs",
      "dist/**",
      "react/**",
      "src-react/**",
      ".storybook/**",
      "www/**",
      "loader/**",
      "internals/**",
      "stencil.config.ts",
      "**/*.js",
      "**/*.e2e.ts",
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ...stencilRecommended,
    files: TS_FILES,
    ignores: STORY_FILES,
    plugins: {
      ...stencilRecommended.plugins,
      stencil: stencilPlugin,
    },
    rules: {
      ...stencilRecommended.rules,
      "stencil/ban-default-true": "off",
      "stencil/reserved-member-names": "warn",
      "stencil/ban-exported-const-enums": "off",
      "stencil/strict-boolean-conditions": "off",
      "stencil/class-pattern": [
        "error",
        {
          pattern: "^Z[A-Z].*$",
        },
      ],
      "stencil/decorators-style": [
        "error",
        {
          prop: "multiline",
          state: "multiline",
          element: "inline",
          event: "multiline",
          method: "multiline",
          watch: "multiline",
          listen: "multiline",
        },
      ],
      "stencil/required-prefix": ["error", ["z"]],
      "stencil/prefer-vdom-listener": "off",
    },
  },
  storybookPlugin.configs["flat/recommended"],
  prettierConfig,
  {
    files: TS_FILES,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        project: "./tsconfig.eslint.json",
      },
    },
    rules: {
      "constructor-super": "off",
      "curly": "warn",
      "keyword-spacing": "warn",
      "lines-between-class-members": "error",
      "no-console": ["warn", {allow: ["warn", "error"]}],
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-fallthrough": "warn",
      "no-self-compare": "error",
      "no-unmodified-loop-condition": "error",
      "no-useless-return": "error",
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
      ],
      "no-lonely-if": "error",
      "@typescript-eslint/array-type": [
        "error",
        {
          default: "array",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "h",
        },
      ],
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "parameter",
          modifiers: ["unused"],
          format: ["camelCase"],
          leadingUnderscore: "require",
        },
        {
          selector: "variable",
          modifiers: ["const", "global"],
          format: ["UPPER_CASE", "camelCase", "PascalCase"],
        },
        {
          selector: "enumMember",
          format: ["UPPER_CASE"],
        },
        {
          selector: "classProperty",
          modifiers: ["private"],
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "classMethod",
          format: ["camelCase"],
        },
        {
          selector: "classMethod",
          modifiers: ["private"],
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "objectLiteralProperty",
          format: null,
        },
        {
          selector: "import",
          format: null,
        },
        {
          selector: "default",
          format: ["camelCase", "PascalCase"],
        },
      ],
      "react/jsx-no-bind": "off",
    },
  },
  {
    files: STORY_FILES,
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          modifiers: ["exported", "const"],
          format: ["PascalCase"],
        },
      ],
      "no-duplicate-imports": "off",
    },
  },
  {
    files: ["**/*.spec.ts"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
]);
