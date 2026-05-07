import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZChipType} from "../../beans";
import {ICONS} from "../../constants/iconset";
import {ZChip} from "./index";

const StoryMeta = {
  title: "ZChip",
  component: ZChip,
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
  render: (args) => (
    <z-chip
      type={args.type}
      icon={args.icon}
    >
      my custom element
    </z-chip>
  ),
} satisfies Story;

export const DifferentFontWeight = {
  render: (args) => (
    <z-chip
      type={args.type}
      icon={args.icon}
    >
      <strong>my</strong>
      <span style={{marginLeft: "4px"}}>custom element</span>
    </z-chip>
  ),
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
  render: (args) => (
    <z-chip
      type={args.type}
      icon={args.icon}
      disabled={args.disabled}
      interactiveIcon={args.interactiveIcon}
    >
      my custom element
    </z-chip>
  ),
} satisfies Story;
