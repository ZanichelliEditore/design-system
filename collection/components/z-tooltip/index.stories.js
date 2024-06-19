import { html } from "lit";
import { PopoverPosition } from "../../beans";
import { getColorTokenArgConfig } from "../../utils/storybook-utils";
import "../z-button/index";
import "./index";
import "./index.stories.css";
/**
 * To be sure the algorithm finds the right container, when calculating the position, set its position to `position: relative;`
 * On the following Story, the "position" prop can be set only for the original positions of the `z-tooltip` by design.
 */
const StoryMeta = {
    title: "ZTooltip",
    component: "z-tooltip",
    argTypes: {
        "position": {
            options: [
                PopoverPosition.AUTO,
                PopoverPosition.TOP,
                PopoverPosition.BOTTOM,
                PopoverPosition.LEFT,
                PopoverPosition.RIGHT,
                PopoverPosition.TOP_LEFT,
                PopoverPosition.TOP_RIGHT,
                PopoverPosition.BOTTOM_LEFT,
                PopoverPosition.BOTTOM_RIGHT,
            ],
            control: {
                type: "select",
            },
        },
        "--z-tooltip-theme--surface": getColorTokenArgConfig(),
    },
    args: {
        "dark": false,
        "--z-tooltip-theme--surface": "var(--color-surface01)",
        "position": PopoverPosition.LEFT,
    },
};
export default StoryMeta;
export const Default = {
    render: (args) => html `
    <div class="tooltip-container">
      <z-button
        id="trigger"
        icon="plus-filled"
      ></z-button>
      <z-tooltip
        .position=${args.position}
        .dark=${args.dark}
        bind-to="#trigger"
        style="--z-tooltip-theme--surface: ${args["--z-tooltip-theme--surface"]}"
      >
        <div class="container">
          <z-button>Open</z-button>
          <z-button>Save as</z-button>
          <z-button>Share</z-button>
        </div>
      </z-tooltip>
    </div>
    <script>
      document.querySelector("#trigger").addEventListener("click", () => {
        if (document.querySelector("z-tooltip").open) {
          document.querySelector("z-tooltip").open = false;
        } else {
          document.querySelector("z-tooltip").open = true;
        }
      });
    </script>
  `,
};
/**
 * When `closable` property is set to `false`, you can open the tooltip on hover and still click things outside without closing it.
 * In the Story below, the tooltip is opened hovering the button.
 */
export const AutocloseOff = {
    render: (args) => html `
    <div class="tooltip-container">
      <z-button
        id="info-button"
        icon="arrow-clockwise-up-left"
      ></z-button>
      <z-tooltip
        .position="${args.position}"
        .dark="${args.dark}"
        closable="false"
        bind-to="#info-button"
        style="--z-tooltip-theme--surface: ${args["--z-tooltip-theme--surface"]}"
      >
        <span class="tooltip-info-text">Clicca per fare girare la freccia</span>
      </z-tooltip>
    </div>
    <script>
      button = document.querySelector("#info-button");
      tooltip = document.querySelector("z-tooltip");
      button.addEventListener("mouseover", () => {
        tooltip.open = true;
      });
      button.addEventListener("focusin", () => {
        tooltip.open = true;
      });
      button.addEventListener("mouseout", () => {
        tooltip.open = false;
      });
      button.addEventListener("focusout", () => {
        tooltip.open = false;
      });
      button.onclick = () => {
        switch (button.icon) {
          case "arrow-clockwise-up-left":
            button.icon = "arrow-clockwise-up-right";
            break;
          case "arrow-clockwise-up-right":
            button.icon = "arrow-clockwise-down-right";
            break;
          case "arrow-clockwise-down-right":
            button.icon = "arrow-clockwise-up-left";
            break;
        }
      };
    </script>
  `,
};
//# sourceMappingURL=index.stories.js.map
