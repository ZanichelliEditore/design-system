import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZTool} from ".";
import {PopoverPosition} from "../../beans";
import {ICONS} from "../../constants/iconset";
import "../z-color-picker/index";
import "./index";
import "./index.stories.css";

const StoryMeta = {
  title: "ZTool",
  component: "z-tool",
  argTypes: {
    tooltipPosition: {
      options: Object.values(PopoverPosition),
      control: {type: "select"},
    },
    indicatorColor: {
      control: "color",
    },
    icon: {
      options: Object.keys(ICONS),
      control: {type: "select"},
    },
  },
  args: {
    active: false,
    disabled: false,
    htmlAriaLabel: "Impostazioni",
    icon: "gear",
    indicatorColor: "",
    tooltip: "Impostazioni",
    tooltipPosition: PopoverPosition.TOP,
  },
} satisfies Meta<ZTool>;

export default StoryMeta;

type Story = StoryObj<ZTool>;

export const Default = {
  render: (args) =>
    html`<div class="tool-container">
      <z-tool
        icon=${args.icon}
        tooltip=${args.tooltip}
        tooltip-position=${args.tooltipPosition}
        .indicatorColor=${args.indicatorColor}
        html-aria-label=${args.htmlAriaLabel}
        ?active=${args.active}
        ?disabled=${args.disabled}
      ></z-tool>
    </div>`,
} satisfies Story;

export const Active = {
  args: {
    active: true,
  },
  render: (args) =>
    html`<div class="tool-container">
      <z-tool
        icon=${args.icon}
        tooltip=${args.tooltip}
        tooltip-position=${args.tooltipPosition}
        .indicatorColor=${args.indicatorColor}
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
        .indicatorColor=${args.indicatorColor}
        html-aria-label=${args.htmlAriaLabel}
        ?active=${args.active}
        ?disabled=${args.disabled}
      ></z-tool>
    </div>`,
} satisfies Story;

export const WithToolbar = {
  render: (args) =>
    html`<div class="tool-container">
      <z-tool
        icon=${args.icon}
        tooltip=${args.tooltip}
        tooltip-position=${args.tooltipPosition}
        .indicatorColor=${args.indicatorColor}
        html-aria-label=${args.htmlAriaLabel}
        ?active=${args.active}
        ?disabled=${args.disabled}
      >
        <z-toolbar html-aria-label=${args.htmlAriaLabel}>
          <z-tool
            icon="gear"
            tooltip="Impostazioni"
          ></z-tool>
          <z-tool
            icon="chevron-up"
            tooltip="Su"
          ></z-tool>
          <z-tool
            icon="chevron-down"
            tooltip="Giù"
          ></z-tool>
          <z-divider orientation="vertical"></z-divider>
          <z-tool
            icon="download"
            tooltip="Scarica"
          ></z-tool>
          <z-tool
            icon="upload"
            tooltip="Carica"
          ></z-tool>
          <z-tool
            icon="copy"
            tooltip="Copia"
          ></z-tool> </z-toolbar
      ></z-tool>
    </div>`,
} satisfies Story;

export const ColorPicker = {
  args: {
    icon: "bg-color",
    indicatorColor: "#ff0000",
    tooltip: "Colore di sfondo",
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "300px",
      },
    },
  },
  render: (args) =>
    html`<div class="tool-container">
      <z-tool
        icon=${args.icon}
        tooltip=${args.tooltip}
        tooltip-position=${args.tooltipPosition}
        .indicatorColor=${args.indicatorColor}
        html-aria-label=${args.htmlAriaLabel}
        ?active=${args.active}
        ?disabled=${args.disabled}
      >
        <z-color-picker></z-color-picker>
      </z-tool>
    </div>`,
} satisfies Story;
