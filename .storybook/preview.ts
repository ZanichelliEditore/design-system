/// <reference types="vite/client" />

import {type Preview} from "@storybook/web-components";
import globalStyle from "../src/global.css?inline";
import DocTemplate from "./elements/docs-template";
import {lightTheme} from "./theme";

/**
 * With the file import of the global styles (`import "../src/global.css"`) Stencil would inject them right before the first <link> tag
 * in the <head> of the preview's iframe 🤷🏻‍♂️, causing components' styles to be overridden by the global styles.
 * To fix this, we prepend the global styles in the <head>.
 */
const styleEl = document.createElement("style");
styleEl.textContent = globalStyle;
document.head.prepend(styleEl);

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: [
        {
          type: "mobile",
          name: "mobile",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
        {
          type: "tablet",
          name: "tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        {
          type: "desktop",
          name: "desktop",
          styles: {
            width: "1152px",
            height: "100%",
          },
        },
        {
          type: "desktop",
          name: "wide",
          styles: {
            width: "1366px",
            height: "100%",
          },
        },
      ],
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Migration", "Colors", "Grid", "Iconset", "*", "Snowflakes", "Deprecated"],
      },
    },
    controls: {sort: "alpha"},
    docs: {
      source: {format: true, language: "tsx"},
      page: DocTemplate,
      theme: lightTheme,
    },
  },
  tags: ["autodocs"],
} satisfies Preview;

export default preview;
