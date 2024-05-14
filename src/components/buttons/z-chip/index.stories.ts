import {TemplateResult, html} from "lit";
import {ZChipType} from "../../../beans";
import {Args, Meta, StoryObj} from "@storybook/web-components";
import {type ZChip} from ".";
import {ICONS} from "../../icons/icons";

const StoryMeta = {
  title: "ZChip",
  component: "z-chip",
  argTypes: {
    type: {
      options: Object.values(ZChipType),
      control: {
        type: "radio",
      },
    },
  },
  args: {
    type: ZChipType.DEFAULT,
    icon: "pdf",
  },
} satisfies Meta<ZChip>;

export default StoryMeta;

type Story = StoryObj<ZChip>;

export const Default = {
  render: (args: Args) => html`
    <z-chip
      type=${args.type}
      icon=${args.icon}
      >my custom element</z-chip
    >
  `,
} satisfies Story;

export const DifferentFontWeight = {
  render: (args: Args): TemplateResult => html`
    <z-chip
      type=${args.type}
      icon=${args.icon}
    >
      <strong>my</strong>
      <span style="margin-left: 4px">custom element</span>
    </z-chip>
  `,
} satisfies Story;

export const InteractiveIcon = {
  argTypes: {
    icon: {
      options: Object.keys(ICONS),
      control: {
        type: "select",
      },
    },
    interactiveIcon: {
      options: Object.keys(ICONS),
      control: {
        type: "select",
      },
    },
  },
  args: {
    interactiveIcon: "multiply-circled",
    disabled: false,
  },
  render: (args: Args) => html`
    <z-chip
      type=${args.type}
      icon=${args.icon}
      disabled=${args.disabled}
      .interactiveIcon=${args.interactiveIcon}
      >my custom element</z-chip
    >
  `,
} satisfies Story;
