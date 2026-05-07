import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {DividerOrientation, PopoverPosition} from "../../beans";
import {ICONS} from "../../constants/iconset";
import {ZTool} from "./index";
import "./index.stories.css";

const StoryMeta = {
  title: "ZTool",
  component: ZTool,
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
  render: (args) => (
    <div class="tool-container">
      <z-tool
        icon={args.icon}
        tooltip={args.tooltip}
        tooltipPosition={args.tooltipPosition}
        indicatorColor={args.indicatorColor}
        htmlAriaLabel={args.htmlAriaLabel}
        active={args.active}
        disabled={args.disabled}
      ></z-tool>
    </div>
  ),
} satisfies Meta<ZTool>;

export default StoryMeta;

type Story = StoryObj<ZTool>;

export const Default = {} satisfies Story;

export const Active = {
  args: {
    active: true,
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const WithToolbar = {
  parameters: {
    slots: {
      default: (
        <z-toolbar>
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
          <z-divider orientation={DividerOrientation.VERTICAL}></z-divider>
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
          ></z-tool>
        </z-toolbar>
      ),
    },
  },
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
    slots: {
      default: <z-color-picker></z-color-picker>,
    },
  },
} satisfies Story;
