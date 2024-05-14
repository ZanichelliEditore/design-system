import {html} from "lit";
import {STROKE_ICONS, FILLED_ICONS, BUTTON_ICONS, LEGACY_ICONS} from "./icons";
import "./icons.stories.css";

export default {
  title: "Iconset",
};

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

  name: "Iconset",
};
