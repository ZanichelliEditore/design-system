import type {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZButton} from ".";
import {ButtonVariant, ControlSize, IconPosition} from "../../beans";
import "./index";

const StoryMeta = {
  title: "ZButton",
  component: "z-button",
  args: {
    variant: ButtonVariant.PRIMARY,
    size: ControlSize.BIG,
    disabled: false,
    icon: "download",
    iconPosition: IconPosition.LEFT,
    ariaLabel: "Clicca sul bottone",
    htmlrole: "button",
  },
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
  },
  render: (args) =>
    html`<z-button
      variant=${args.variant}
      size=${args.size}
      disabled=${args.disabled}
      icon=${args.icon}
      .iconPosition=${args.iconPosition}
      .ariaLabel=${args.ariaLabel}
      htmlrole=${args.htmlrole}
    >
      Click me
    </z-button>`,
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
  render: (args) =>
    html`<z-button
      variant=${args.variant}
      size=${args.size}
      disabled=${args.disabled}
      icon=${args.icon}
      .iconPosition=${args.iconPosition}
      .ariaLabel=${args.ariaLabel}
      htmlrole=${args.htmlrole}
    />`,
} satisfies Story;

export const LinkButton = {
  args: {
    icon: "arrow-quad-north-east",
    href: "https://wikipedia.com",
    target: "_blank",
    role: "link",
  },
  render: (args) =>
    html`<z-button
      variant=${args.variant}
      size=${args.size}
      disabled=${args.disabled}
      icon=${args.icon}
      .iconPosition=${args.iconPosition}
      .ariaLabel=${args.ariaLabel}
      htmlrole=${args.htmlrole}
      href=${args.href}
      target=${args.target}
    >
      Go to wikipedia
    </z-button>`,
} satisfies Story;

export const IconRight = {
  args: {
    icon: "arrow-right",
    iconPosition: IconPosition.RIGHT,
  },
} satisfies Story;
