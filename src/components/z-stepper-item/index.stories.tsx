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
} satisfies Meta<ZStepperItemStoriesArgs>;

export const Default = {
  render: (args) => (
    <z-stepper-item
      index={args.index}
      pressed={args.pressed}
      disabled={args.disabled}
      checked={args.checked}
    >
      {args.text}
    </z-stepper-item>
  ),
};

export const Pressed = {
  args: {
    pressed: true,
  },
  render: (args) => (
    <z-stepper-item
      index={args.index}
      pressed={args.pressed}
      disabled={args.disabled}
      checked={args.checked}
    >
      {args.text}
    </z-stepper-item>
  ),
};

export const Disabled = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <z-stepper-item
      index={args.index}
      pressed={args.pressed}
      disabled={args.disabled}
      checked={args.checked}
    >
      {args.text}
    </z-stepper-item>
  ),
};

export const Checked = {
  args: {
    checked: true,
  },
  render: (args) => (
    <z-stepper-item
      index={args.index}
      pressed={args.pressed}
      disabled={args.disabled}
      checked={args.checked}
    >
      {args.text}
    </z-stepper-item>
  ),
};
