import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ButtonType, ButtonVariant, ControlSize, IconPosition} from "../../beans";
import {ZButton} from "./index";

const StoryMeta = {
  title: "ZButton",
  component: ZButton,
  argTypes: {
    variant: {
      options: Object.values(ButtonVariant),
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
    type: {
      options: Object.values(ButtonType).sort(),
      control: {type: "inline-radio"},
    },
  },
  args: {
    variant: ButtonVariant.PRIMARY,
    size: ControlSize.BIG,
    disabled: false,
    icon: "download",
    iconPosition: IconPosition.LEFT,
    htmlAriaLabel: "Clicca sul bottone",
    htmlRole: "button",
    type: ButtonType.BUTTON,
  },
  render: (args) => <z-button {...args}>Click me</z-button>,
} satisfies Meta<ZButton>;

export default StoryMeta;

type Story = StoryObj<ZButton>;

export const Primary = {};

export const SecondaryXSmall = {
  args: {
    variant: ButtonVariant.SECONDARY,
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
    variant: ButtonVariant.TERTIARY,
    size: ControlSize.SMALL,
  },
  parameters: {
    controls: {
      exclude: ["variant", "icon"],
    },
  },
} satisfies Story;

export const IconOnly = {
  render: (args) => <z-button {...args}></z-button>,
} satisfies Story;

export const LinkButton = {
  args: {
    icon: "arrow-quad-north-east",
    href: "https://wikipedia.com",
    target: "_blank",
    htmlRole: "link",
  },
  render: (args) => <z-button {...args}>Go to wikipedia</z-button>,
} satisfies Story;

export const IconRight = {
  args: {
    icon: "arrow-right",
    iconPosition: IconPosition.RIGHT,
  },
} satisfies Story;
