import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZChipType, ZChipVariant} from "../../beans";
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
    variant: {
      options: Object.values(ZChipVariant),
      control: {
        type: "radio",
      },
    },
  },
  args: {
    type: ZChipType.DEFAULT,
    variant: ZChipVariant.OUTLINE,
    icon: "pdf",
  },
  render: (args) => <z-chip {...args}>z-chip element</z-chip>,
} satisfies Meta<ZChip>;

export default StoryMeta;

type Story = StoryObj<ZChip>;

export const Default = {} satisfies Story;

export const Filled = {
  args: {
    variant: ZChipVariant.FILLED,
  },
} satisfies Story;

export const Soft = {
  args: {
    variant: ZChipVariant.SOFT,
  },
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
    interactiveIcon: "multiply-circle",
    disabled: false,
  },
} satisfies Story;

export const InteractiveIconFilled = {
  args: {
    variant: ZChipVariant.FILLED,
    interactiveIcon: "multiply-circle",
  },
} satisfies Story;

export const InteractiveIconSoft = {
  args: {
    variant: ZChipVariant.SOFT,
    interactiveIcon: "multiply-circle",
  },
} satisfies Story;

export const DifferentFontWeight = {
  render: (args) => (
    <z-chip {...args}>
      <strong>my</strong>
      <span style={{marginLeft: "4px"}}>custom element</span>
    </z-chip>
  ),
} satisfies Story;
