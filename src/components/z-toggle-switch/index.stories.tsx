import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {LabelPosition} from "../../beans";
import {type ZToggleSwitch} from "./index";

const StoryMeta = {
  title: "ZToggleSwitch",
  argTypes: {
    labelPosition: {
      options: Object.values(LabelPosition),
      control: {type: "radio"},
    },
  },
} satisfies Meta<ZToggleSwitch>;

export default StoryMeta;

export const Default = {
  args: {
    labelPosition: LabelPosition.LEFT,
    disabled: false,
  },
  render: (args) => <z-toggle-switch {...args}>Toggle</z-toggle-switch>,
} satisfies StoryObj<ZToggleSwitch>;
