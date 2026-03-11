import {withThemeByClassName} from "@storybook/addon-themes";
import {type Preview} from "@storybook/web-components";
import "../src/global.css";
import DocTemplate from "./elements/docs-template";
import {lightTheme} from "./theme";

const THEMES_MAP = {
  "Default": "theme-default",
  "Dark": "theme-dark",
  "Black": "theme-black",
  "Black--red": "theme-black theme-black--red",
  "Black--yellow": "theme-black theme-black--yellow",
  "Red": "theme-red",
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
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
    controls: {sort: "alpha"},
    docs: {
      source: {format: true, language: "tsx"},
      page: DocTemplate,
      theme: lightTheme,
    },
    themes: THEMES_MAP,
  },
  tags: ["autodocs"],
  decorators: [
    (story, context) =>
      withThemeByClassName({
        themes: THEMES_MAP,
        defaultTheme: "Default",
        parentSelector: context.viewMode === "docs" ? ".docs-story" : "body",
      })(story, context) as ReturnType<typeof story>,
  ],
} satisfies Preview;

export default preview;
