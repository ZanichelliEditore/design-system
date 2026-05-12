import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {COLOR_INDICATOR_ICONS} from "../../constants/iconset";
import {getColorTokens} from "../../utils/storybook-utils";
import {ZIcon} from "./index";

const StoryMeta = {
  title: "ZIcon",
  component: ZIcon,
  argTypes: {
    fill: {
      options: getColorTokens().map((token) => token.replace("--", "")),
      control: {
        type: "select",
      },
    },
    width: {control: {type: "number"}},
    height: {control: {type: "number"}},
  },
  args: {
    name: "download",
    height: 24,
    width: 24,
    fill: "color-primary01",
  },
  render: (args) => <z-icon {...args}></z-icon>,
} satisfies Meta<ZIcon>;

export default StoryMeta;

type Story = StoryObj<ZIcon>;

export const Default = {} satisfies Story;

export const ZIconRem = {
  argTypes: {
    width: {control: {type: "text"}},
    height: {control: {type: "text"}},
  },
  args: {
    name: "download",
    height: "1.125rem",
    width: "1.125rem",
    fill: "color-primary01",
  },
} satisfies Story;

export const ColorIndicator = {
  argTypes: {
    name: {
      options: COLOR_INDICATOR_ICONS,
      control: {type: "select"},
    },
    indicatorColor: {
      control: {type: "color"},
    },
  },
  args: {
    name: COLOR_INDICATOR_ICONS[0],
    fill: "color-black",
    indicatorColor: "#ff0000",
    width: 64,
    height: 64,
  },
  parameters: {
    controls: {
      presetColors: [{color: "#ffffff00", title: "transparent"}],
    },
  },
} satisfies Story;
