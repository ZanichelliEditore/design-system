import {h} from "@stencil/core";
import {AccordionVariant} from "../../src/beans/index";
import {BUTTON_ICONS, FILLED_ICONS, LEGACY_ICONS, STROKE_ICONS} from "../../src/constants/iconset";
import "./index.stories.css";

export default {
  title: "Iconset",
  tags: ["!autodocs"],
  parameters: {
    docs: {
      codePanel: false,
    },
    controls: {
      disable: true,
    },
  },
};

const ICONS = {
  "Stroke icons": STROKE_ICONS,
  "Filled icons": FILLED_ICONS,
  "Button icons": BUTTON_ICONS,
  "Legacy icons": LEGACY_ICONS,
};

export const Iconset = {
  render: () => (
    <div class="icons-list">
      {Object.entries(ICONS).map(([groupName, iconsGroup]) => (
        <z-accordion
          open
          shadow
          variant={AccordionVariant.BACKGROUND}
          label={`${groupName} - (${Object.keys(iconsGroup).length})`}
        >
          <ol class="icons-container">
            {Object.keys(iconsGroup)
              .sort()
              .map((iconName) => (
                <li class="icon-box">
                  <z-icon name={iconName}></z-icon>
                  <div class="icon-name">{iconName}</div>
                </li>
              ))}
          </ol>
        </z-accordion>
      ))}
    </div>
  ),
};
