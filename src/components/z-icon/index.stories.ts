import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZIcon} from ".";
import {COLOR_INDICATOR_ICONS} from "../../constants/iconset";
import {getColorTokens} from "../../utils/storybook-utils";
import "./index";

const StoryMeta = {
  title: "ZIcon",
  component: "z-icon",
  argTypes: {
    fill: {
      options: getColorTokens().map((token) => token.replace("--", "")),
      control: {
        type: "select",
      },
    },
  },
  args: {
    name: "download",
    height: 24,
    width: 24,
    fill: "color-primary01",
  },
} satisfies Meta<ZIcon>;

export default StoryMeta;

type Story = StoryObj<ZIcon>;

export const Default = {
  render: (args) =>
    html`<z-icon
      name=${args.name}
      height=${args.height}
      width=${args.width}
      fill=${args.fill}
    ></z-icon>`,
} satisfies Story;

export const ZIconRem = {
  args: {
    name: "download",
    height: "1.125rem",
    width: "1.125rem",
    fill: "color-primary01",
  },
  render: (args) =>
    html`<z-icon
      name=${args.name}
      height=${args.height}
      width=${args.width}
      fill=${args.fill}
    ></z-icon>`,
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
  render: (args) =>
    html`<z-icon
      name=${args.name}
      height=${args.height}
      width=${args.width}
      fill=${args.fill}
      .indicatorColor=${args.indicatorColor}
    ></z-icon>`,
} satisfies Story;
