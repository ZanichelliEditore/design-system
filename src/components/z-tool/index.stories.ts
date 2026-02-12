import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZTool} from ".";
import {PopoverPosition} from "../../beans";
import "./index";
import "./index.stories.css";

const StoryMeta = {
  title: "ZTool",
  component: "z-tool",
  args: {
    icon: "gear",
    tooltip: "Impostazioni",
    tooltipPosition: PopoverPosition.TOP,
    htmlAriaLabel: "Impostazioni",
    active: false,
    disabled: false,
  },
  argTypes: {
    tooltipPosition: {
      options: Object.values(PopoverPosition),
      control: {type: "select"},
    },
  },
} satisfies Meta<ZTool>;

export default StoryMeta;

type Story = StoryObj<ZTool>;

export const Default = {
  args: {
    tooltipPosition: PopoverPosition.RIGHT,
  },
  render: (args) =>
    html`<div class="tool-container">
      <z-tool
        icon=${args.icon}
        tooltip=${args.tooltip}
        tooltip-position=${args.tooltipPosition}
        html-aria-label=${args.htmlAriaLabel}
        ?active=${args.active}
        ?disabled=${args.disabled}
      ></z-tool>
    </div>`,
} satisfies Story;

export const Active = {
  args: {
    active: true,
    tooltipPosition: PopoverPosition.RIGHT,
  },
  render: (args) =>
    html`<div class="tool-container">
      <z-tool
        icon=${args.icon}
        tooltip=${args.tooltip}
        tooltip-position=${args.tooltipPosition}
        html-aria-label=${args.htmlAriaLabel}
        ?active=${args.active}
        ?disabled=${args.disabled}
      ></z-tool>
    </div>`,
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
  render: (args) =>
    html`<div class="tool-container">
      <z-tool
        icon=${args.icon}
        tooltip=${args.tooltip}
        tooltip-position=${args.tooltipPosition}
        html-aria-label=${args.htmlAriaLabel}
        ?active=${args.active}
        ?disabled=${args.disabled}
      ></z-tool>
    </div>`,
} satisfies Story;
