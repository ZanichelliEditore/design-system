import {addons} from "@storybook/addons";
import theme from "./theme";

addons.setConfig({
  theme,
  enableShortcuts: false,
  sidebar: {
    showRoots: false,
  },
});
