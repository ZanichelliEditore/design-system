import type {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ButtonVariant, ControlSize} from "../../beans";
import "./index";
import {type ZButton} from "./index";

const StoryMeta = {
  title: "ZButton",
  component: "z-button",
  args: {
    variant: ButtonVariant.PRIMARY,
    size: ControlSize.BIG,
    disabled: false,
    icon: "download",
    ariaLabel: "Clicca sul bottone",
    role: "button",
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
  },
  render: (args) =>
    html`<z-button
      variant=${args.variant}
      size=${args.size}
      disabled=${args.disabled}
      icon=${args.icon}
      .ariaLabel=${args.ariaLabel}
      role=${args.role}
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
      .ariaLabel=${args.ariaLabel}
      role=${args.role}
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
      .ariaLabel=${args.ariaLabel}
      role=${args.role}
      href=${args.href}
      target=${args.target}
    >
      Go to wikipedia
    </z-button>`,
} satisfies Story;
