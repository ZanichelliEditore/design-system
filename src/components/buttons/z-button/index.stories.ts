import type {Args, Meta, StoryObj} from "@storybook/web-components";
import {type TemplateResult, html} from "lit";
import {ButtonVariant, ControlSize} from "../../../beans";
import {type ZButton} from ".";

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
      control: {type: "radio"},
    },
    size: {
      options: Object.values(ControlSize),
      control: {type: "radio"},
    },
  },
} satisfies Meta<ZButton>;

export default StoryMeta;

type Story = StoryObj<ZButton>;

export const Default = {
  render: (args: Args): TemplateResult =>
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
  render: Default.render,
} satisfies Story;

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
  render: Default.render,
} satisfies Story;

export const IconOnly = {
  render: (args: Args) =>
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
  render: (args: Args) =>
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
