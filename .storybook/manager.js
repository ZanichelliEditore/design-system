import {addons} from "@storybook/addons";
import theme from "./theme";
import {STORY_CHANGED} from "@storybook/core-events";

// just add the Zanichelli Design System theme
addons.setConfig({
  theme,
  enableShortcuts: false,
});
