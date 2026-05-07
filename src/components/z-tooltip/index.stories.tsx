import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {PopoverPosition} from "../../beans";
import {CSSVarsArguments, getColorTokenArgConfig} from "../../utils/storybook-utils";
import {ZTooltip} from "./index";
import "./index.stories.css";

type ZTooltipStoriesArgs = ZTooltip & CSSVarsArguments<"z-tooltip-theme--surface">;

/**
 * To be sure the algorithm finds the right container, when calculating the position, set its position to `position: relative;`
 * On the following Story, the "position" prop can be set only for the original positions of the `z-tooltip` by design.
 */
const StoryMeta = {
  title: "ZTooltip",
  component: ZTooltip,
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
} satisfies Meta<ZTooltipStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZTooltipStoriesArgs>;

let tooltipRef: HTMLZTooltipElement;
const toggleTooltip = () => {
  tooltipRef.open = !tooltipRef.open;
};

export const Default = {
  render: (args) => (
    <div class="tooltip-container">
      <z-button
        id="trigger"
        icon="plus-filled"
        onClick={toggleTooltip}
      ></z-button>
      <z-tooltip
        position={args.position}
        dark={args.dark}
        bindTo="#trigger"
        ref={(el) => (tooltipRef = el)}
        style={{"--z-tooltip-theme--surface": args["--z-tooltip-theme--surface"]}}
      >
        <div class="content-container">
          <z-button>Open</z-button>
          <z-button>Save as</z-button>
          <z-button>Share</z-button>
        </div>
      </z-tooltip>
    </div>
  ),
} satisfies Story;

const onMouseOver = () => (tooltipRef.open = true);
const onMouseOut = () => (tooltipRef.open = false);
const rotateIcon = (event) => {
  const button = event.target.closest("z-button") as HTMLZButtonElement;
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

/**
 * When `closable` property is set to `false`, you can open the tooltip on hover and still click things outside without closing it.
 * In the Story below, the tooltip is opened hovering the button.
 */
export const AutocloseOff = {
  render: (args) => (
    <div class="tooltip-container">
      <z-button
        id="info-button"
        icon="arrow-clockwise-up-left"
        onMouseOver={onMouseOver}
        onFocusin={onMouseOver}
        onMouseOut={onMouseOut}
        onFocusout={onMouseOut}
        onClick={rotateIcon}
      ></z-button>
      <z-tooltip
        position={args.position}
        dark={args.dark}
        closable={false}
        bindTo="#info-button"
        ref={(el) => (tooltipRef = el)}
        style={{"--z-tooltip-theme--surface": args["--z-tooltip-theme--surface"]}}
      >
        <span class="tooltip-info-text">Clicca per fare girare la freccia</span>
      </z-tooltip>
    </div>
  ),
} satisfies Story;
