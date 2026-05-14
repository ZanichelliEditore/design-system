import {h} from "@stencil/core";
import type {Meta} from "@stencil/storybook-plugin";
import {ZStepperItem} from "./index";

type ZStepperItemStoriesArgs = ZStepperItem & {text: string};

export default {
  title: "ZStepper/ZStepperItem",
  component: ZStepperItem,
  args: {
    pressed: false,
    disabled: false,
    checked: false,
    index: 1,
    text: "First Item",
  },
  render: (args) => <z-stepper-item {...args}>{args.text}</z-stepper-item>,
} satisfies Meta<ZStepperItemStoriesArgs>;

export const Default = {};

export const Pressed = {
  args: {
    pressed: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const Checked = {
  args: {
    checked: true,
  },
};
