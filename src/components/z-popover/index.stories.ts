import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {type ZPopover} from ".";
import {PopoverPosition} from "../../beans";
import {CSSVarsArguments, getColorTokenArgConfig} from "../../utils/storybook-utils";
import "../list/z-list-element/index";
import "../list/z-list/index";
import "../z-button/index";
import "./index";
import "./index.stories.css";

type ZPopoverStoriesArgs = ZPopover &
  CSSVarsArguments<"--z-popover-theme--surface" | "--z-popover-theme--text" | "--z-popover-padding">;

/**
 * To ensure the positioning algorithm finds the right container when calculating the position, set its container's `position` to `relative`.
 */
const StoryMeta = {
  title: "ZPopover",
  component: "z-popover",
  argTypes: {
    "position": {
      options: Object.values(PopoverPosition).filter((value) => value !== PopoverPosition.AUTO),
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
    "--z-popover-padding": "0",
  },
} satisfies Meta<ZPopoverStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZPopoverStoriesArgs>;

export const ContextualMenuLike = {
  args: {
    "--z-popover-theme--surface": "var(--color-surface01)",
    "--z-popover-padding": "var(--space-unit)",
    "position": PopoverPosition.RIGHT_BOTTOM,
    "center": false,
    "showArrow": false,
  },
  render: (args) => html`
    <div class="popover-container">
      <z-popover
        style=${styleMap({
          "--z-popover-theme--surface": args["--z-popover-theme--surface"],
          "--z-popover-theme--text": args["--z-popover-theme--text"],
          "--z-popover-padding": args["--z-popover-padding"],
        })}
        .position=${args.position}
        .center=${args.center}
        .showArrow=${args.showArrow}
        bind-to="#trigger"
      >
        <z-list>
          <z-list-element divider-type="element">Elemento 1</z-list-element>
          <z-list-element divider-type="element">Elemento 2</z-list-element>
          <z-list-element>Elemento 3</z-list-element>
        </z-list>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
      ></z-button>
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
    "position": PopoverPosition.RIGHT,
    "--z-popover-padding": "var(--space-unit)",
  },
  render: (args) => html`
    <div class="popover-container popover-container-tooltip">
      <z-popover
        style=${styleMap({
          "--z-popover-theme--surface": args["--z-popover-theme--surface"],
          "--z-popover-theme--text": args["--z-popover-theme--text"],
          "--z-popover-padding": args["--z-popover-padding"],
        })}
        .position=${args.position}
        center="true"
        show-arrow="true"
        bind-to="#trigger"
      >
        <div class="popover-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </div>
      </z-popover>
      <z-button
        id="trigger"
        icon="plus-filled"
      ></z-button>
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
