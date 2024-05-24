import {addons} from "@storybook/manager-api";
import {darkTheme} from "./theme";

addons.setConfig({
  theme: darkTheme,
  enableShortcuts: false,
  sidebar: {
    showRoots: false,
  },
});
