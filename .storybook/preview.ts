import {type Preview} from "@storybook/web-components";
import "../src/global.css";
import {lightTheme} from "./theme";
import DocTemplate from "./elements/docs-template";

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
      canvas: {sourceState: "shown"},
      source: {format: true, language: "tsx"},
      page: DocTemplate,
      theme: lightTheme,
    },
  },
  tags: ["autodocs"],
} satisfies Preview;

export default preview;
