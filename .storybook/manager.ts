/** @jsx React.createElement */
/** @jsxFrag React.Fragment */

import {addons, types} from "@storybook/manager-api";
import {ArgsControls, ArgsControlsTitle, ADDON_ID, PARAM_KEY} from "./elements/args-controls";
import {darkTheme} from "./theme";

// Use custom `args-controls` addon
addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: ArgsControlsTitle,
    type: types.PANEL,
    paramKey: PARAM_KEY,
    render: ArgsControls,
  });
});

addons.setConfig({
  theme: darkTheme,
  enableShortcuts: false,
  sidebar: {
    showRoots: false,
  },
});
