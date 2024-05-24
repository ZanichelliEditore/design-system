import {html} from "lit";
import {STROKE_ICONS, FILLED_ICONS, BUTTON_ICONS, LEGACY_ICONS} from "../../src/constants/iconset";
import "./index.stories.css";
import {Meta, StoryObj} from "@storybook/web-components";

export default {
  title: "Iconset",
  tags: ["!autodocs"],
} satisfies Meta;

export const Iconset = {
  render: () =>
    html`<div class="icons-list">
      ${[STROKE_ICONS, FILLED_ICONS, BUTTON_ICONS, LEGACY_ICONS].map(
        (iconsGroup, index) => html`
          <details open>
            <summary>
              ${["Stroke icons", "Filled icons", "Button icons", "Legacy icon names"][index]} -
              (${Object.keys(iconsGroup).length})
            </summary>
            <ol class="icons-container">
              ${Object.keys(iconsGroup)
                .sort()
                .map(
                  (iconName) => html`
                    <li class="icon-box">
                      <div class="icon-name">${iconName}</div>
                      <z-icon name=${iconName}></z-icon>
                    </li>
                  `
                )}
            </ol>
          </details>
        `
      )}
    </div>`,
} satisfies StoryObj;
