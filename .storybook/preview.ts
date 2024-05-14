import {Preview} from "@storybook/web-components";
import theme from "./theme";
import {defineCustomElements} from "../loader";
import "../src/global.css";

defineCustomElements();

const preview = {
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
    docs: {
      theme,
    },
    options: {
      storySort: {
        method: "alphabetical",
        locales: "en-US",
        includeName: true,
      },
    },
    controls: {sort: "alpha"},
  },
} satisfies Preview;

export default preview;
