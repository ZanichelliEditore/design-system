import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ControlSize, IconPosition, SfButtonVariant} from "../../beans";
import {ZSfButton} from "./index";

const StoryMeta = {
  title: "ZSfButton",
  component: ZSfButton,
  args: {
    variant: SfButtonVariant.PRIMARY,
    size: ControlSize.BIG,
    disabled: false,
    icon: "download",
    iconPosition: IconPosition.LEFT,
    ariaLabel: "Clicca sul bottone",
    htmlrole: "button",
  },
  argTypes: {
    variant: {
      options: Object.values(SfButtonVariant),
      control: {type: "inline-radio"},
    },
    size: {
      options: Object.values(ControlSize),
      control: {type: "inline-radio"},
    },
    iconPosition: {
      options: Object.values(IconPosition),
      control: {type: "inline-radio"},
    },
  },
  render: (args) => <z-sf-button {...args}>Click me</z-sf-button>,
} satisfies Meta<ZSfButton>;

export default StoryMeta;

type Story = StoryObj<ZSfButton>;

export const Primary = {};

export const SecondaryXSmall = {
  args: {
    variant: SfButtonVariant.SECONDARY,
    size: ControlSize.X_SMALL,
  },
  parameters: {
    controls: {
      exclude: ["variant", "icon"],
    },
  },
} satisfies Story;

export const TertiarySmall = {
  args: {
    variant: SfButtonVariant.TERTIARY,
    size: ControlSize.SMALL,
  },
  parameters: {
    controls: {
      exclude: ["variant", "icon"],
    },
  },
} satisfies Story;

export const IconOnly = {
  render: (args) => <z-sf-button {...args}></z-sf-button>,
} satisfies Story;

export const LinkButton = {
  args: {
    icon: "arrow-quad-north-east",
    href: "https://wikipedia.com",
    target: "_blank",
    role: "link",
  },
  render: (args) => <z-sf-button {...args}>Go to wikipedia</z-sf-button>,
} satisfies Story;

export const IconRight = {
  args: {
    icon: "arrow-right",
    iconPosition: IconPosition.RIGHT,
  },
} satisfies Story;
