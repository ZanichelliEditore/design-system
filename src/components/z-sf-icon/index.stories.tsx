import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {COLOR_INDICATOR_ICONS} from "../../constants/iconset";
import {getColorTokens} from "../../utils/storybook-utils";
import {ZSfIcon} from "./index";

const StoryMeta = {
  title: "ZSfIcon",
  component: ZSfIcon,
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
  render: (args) => <z-sf-icon {...args}></z-sf-icon>,
} satisfies Meta<ZSfIcon>;

export default StoryMeta;

type Story = StoryObj<ZSfIcon>;

export const Default = {} satisfies Story;

export const ZSfIconRem = {
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
