import {setCustomElementsManifest, type Preview} from "@stencil/storybook-plugin";
import type {DocsTypes} from "@storybook/addon-docs";
import {withThemeByClassName} from "@storybook/addon-themes";
import customElements from "../custom-elements.json";
import {defineCustomElements} from "../loader";
import "../src/global.css";
import {lightTheme} from "./theme.js";

/**
 * Load and define all custom elements in Storybook.
 * This allows them to be available without requiring individual imports in stories that use multiple components.
 */
defineCustomElements();

/**
 * Loads and registers component metadata for Storybook.
 * This enables automatic generation of doc tables for props, methods, events, slots, shadow parts and CSS variables.
 */
setCustomElementsManifest(customElements);

const THEMES_MAP = {
  "Default": "theme-default",
  "Dark": "theme-dark",
  "Black": "theme-black",
  "Black--red": "theme-black theme-black--red",
  "Black--yellow": "theme-black theme-black--yellow",
  "Red": "theme-red",
};

export const parameters: Preview["parameters"] = {
  actions: {
    disable: true,
  },
  interactions: {
    disable: true,
  },
  viewport: {
    options: {
      mobile: {
        name: "mobile",
        styles: {
          width: "375px",
          height: "667px",
        },
      },
      tablet: {
        name: "tablet",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      desktop: {
        name: "desktop",
        styles: {
          width: "1152px",
          height: "100%",
        },
      },
      wide: {
        name: "wide",
        styles: {
          width: "1366px",
          height: "100%",
        },
      },
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Migration", "Colors", "Typography", "Grid", "Iconset", "*", "Snowflakes", "Deprecated"],
    },
  },
  controls: {sort: "alpha", disableSaveFromUI: true},
  docs: {
    codePanel: true,
    controls: {sort: "alpha"},
    source: {
      format: true,
      dark: true,
      language: "html",
      /**
       * `@stencil/storybook-plugin` serializza gli snippet HTML iterando su tutti gli attributi
       * del vnode (`Object.entries(node.$attrs$)`) senza filtrare le chiavi interne di
       * Storybook (es. `__source`, `__self`), che finirebbero altrimenti nel codice mostrato
       * nelle Docs. Questo `transform` le rimuove a posteriori e normalizza gli spazi bianchi.
       */
      transform(code) {
        return code
          .replace(/\s__\w+=(?:"[^"]*"|\{[^}]*\})/g, "")
          .replace(/[ \t]+\n/g, "\n")
          .replace(/\n{3,}/g, "\n\n")
          .replace(/\n\s*\n(\s*\/?\>)/g, "\n$1")
          .trim();
      },
    },
    theme: lightTheme,
  } satisfies DocsTypes["parameters"]["docs"],
  themes: THEMES_MAP,
} satisfies Preview["parameters"];

export const tags: Preview["tags"] = ["autodocs"];

export const decorators: Preview["decorators"] = [
  (story, context) =>
    withThemeByClassName({
      themes: THEMES_MAP,
      defaultTheme: "Default",
      parentSelector: context.viewMode === "docs" ? ".docs-story" : "body",
    })(story, context),
];
