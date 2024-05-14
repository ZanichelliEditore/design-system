import {addons} from "@storybook/manager-api";
import theme from "./theme";

addons.setConfig({
  theme,
  enableShortcuts: false,
  sidebar: {
    showRoots: false,
  },
});
