import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import "../../src/components/z-accordion/index";
import {BUTTON_ICONS, FILLED_ICONS, LEGACY_ICONS, STROKE_ICONS} from "../../src/constants/iconset";
import "./index.stories.css";

export default {
  title: "Iconset",
  tags: ["!autodocs"],
} satisfies Meta;

export const Iconset = {
  render: () =>
    html`<div class="icons-list">
      ${[STROKE_ICONS, FILLED_ICONS, BUTTON_ICONS, LEGACY_ICONS].map(
        (iconsGroup, index) =>
          html` <z-accordion
            open
            shadow
            highlight=${true}
            variant="background"
            label="${["Stroke icons", "Filled icons", "Button icons", "Legacy icon names"][index]} - (${Object.keys(
              iconsGroup
            ).length})"
          >
            <ol class="icons-container">
              ${Object.keys(iconsGroup)
                .sort()
                .map(
                  (iconName) => html`
                    <li class="icon-box">
                      <z-icon name=${iconName}></z-icon>
                      <div class="icon-name">${iconName}</div>
                    </li>
                  `
                )}
            </ol>
          </z-accordion>`
      )}
    </div>`,
} satisfies StoryObj;
