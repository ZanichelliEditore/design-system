import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {type ZPopover} from ".";
import {PopoverPosition} from "../../beans";
import {CSSVarsArguments, getColorTokenArgConfig} from "../../utils/storybook-utils";
import "../z-button/index";
import "../z-icon/index";
import "./index";
import "./index.stories.css";

/**
 * To be sure the AUTO algorithm finds the right container when calculating the position, set its container's position to `position: relative;`
 */
const StoryMeta = {
  title: "ZPopover",
  component: "z-popover",
  argTypes: {
    "position": {
      options: Object.values(PopoverPosition),
      control: {
        type: "select",
      },
    },
    "--z-popover-theme--surface": getColorTokenArgConfig(),
    "--z-popover-theme--text": getColorTokenArgConfig(),
  },
  args: {
    "--z-popover-theme--surface": "var(--color-surface01)",
    "--z-popover-theme--text": "var(--color-default-text)",
  },
} satisfies Meta<ZPopover & CSSVarsArguments<"--z-popover-theme--surface" | "--z-popover-theme--text">>;

export default StoryMeta;

type Story = StoryObj<ZPopover>;

export const ContextualMenuLike = {
  args: {
    position: PopoverPosition.RIGHT_BOTTOM,
  },
  render: (args) => html`
    <div class="popover-container">
      <z-popover
        style=${styleMap({
          "--z-popover-theme--surface": args["--z-popover-theme--surface"],
          "--z-popover-theme--text": args["--z-popover-theme--text"],
        })}
        .position=${args.position}
        bind-to="#trigger"
      >
        <div class="container">
          <z-button icon="gear">Impostazioni</z-button>
        </div>
      </z-popover>
      <z-icon
        id="trigger"
        name="plus-square-filled"
      ></z-icon>
    </div>
    <script>
      var iconTrigger = document.querySelector("#trigger");
      var popover = document.querySelector("z-popover");
      iconTrigger.addEventListener("click", () => {
        if (popover.open) {
          popover.open = false;
        } else {
          popover.open = true;
        }
      });
    </script>
  `,
} satisfies Story;

export const TooltipLike = {
  args: {
    position: PopoverPosition.RIGHT,
  },
  render: (args) => html`
    <div class="popover-container popover-container-tooltip">
      <z-popover
        style=${styleMap({
          "--z-popover-theme--surface": args["--z-popover-theme--surface"],
          "--z-popover-theme--text": args["--z-popover-theme--text"],
        })}
        .position=${args.position}
        center="true"
        show-arrow="true"
        bind-to="#trigger"
      >
        <div class="container">
          <z-button icon="gear">Impostazioni</z-button>
        </div>
      </z-popover>
      <z-icon
        id="trigger"
        name="plus-square-filled"
      ></z-icon>
    </div>
    <script>
      document.querySelector("#trigger").addEventListener("click", () => {
        if (document.querySelector("z-popover").open) {
          document.querySelector("z-popover").open = false;
        } else {
          document.querySelector("z-popover").open = true;
        }
      });
    </script>
  `,
} satisfies Story;
