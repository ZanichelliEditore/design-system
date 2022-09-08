import {addons} from "@storybook/addons";
import theme from "./theme";
import {STORY_CHANGED} from "@storybook/core-events";
import {RESET} from "@storybook/addon-knobs";

// just add the Zanichelli Design System theme
addons.setConfig({
  theme,
});

// Workaround to fix a bug with `addon-knobs` after updating to version 6.x
// see https://github.com/storybookjs/addon-knobs/issues/19 (bug)
// and https://github.com/storybookjs/addon-knobs/issues/42#issuecomment-1119372997 (fix)
// TODO: Remove this workaround when the migration to `addon-controls` is complete
addons.register("fix-addon-knobs", (api) => {
  api.on(STORY_CHANGED, () => {
    const {queryParams, path} = api.getUrlState();
    const urlParamsToPurge = {};
    const purifiedUrlSeachParams = {path};

    // Prepare search url params
    Object.entries(queryParams).forEach(([key, value]) => {
      // We assign bad url params to be purged from the storybook api
      if (key.startsWith("knob-")) {
        Object.assign(urlParamsToPurge, {[key]: undefined});
      } else {
        // We keep the good ones to set them to the browser
        Object.assign(purifiedUrlSeachParams, {[key]: value});
      }
    });

    // Build search query string and push them to the browser history
    const queryParamsAsString = Object.entries(purifiedUrlSeachParams)
      .filter(([_, value]) => value)
      .map(([key, value], index) => (index === 0 ? `?${key}=${value}` : `${key}=${value}`))
      .join("&");
    history.pushState(undefined, undefined, queryParamsAsString);

    // Clear the storybook api from any polluted state
    // We do this by setting bad keys to 'undefined', not to 'null' like the docs suggest
    api.setQueryParams(urlParamsToPurge);

    // We call the reset event emitter channel of the knobs addon to reload the component knobs
    api.emit(RESET);
  });
});
