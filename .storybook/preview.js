import theme from "./theme";
import "../src/global.css";
import dedent from "ts-dedent";

export const parameters = {
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
  docs: {
    theme,
    // fix wrong indentation due to the story template string (html`...`)
    transformSource: (input) => dedent(input),
  },
  options: {
    storySort: {
      method: "alphabetical",
      locales: "en-US",
    },
  },
  controls: {sort: "alpha"},
};
