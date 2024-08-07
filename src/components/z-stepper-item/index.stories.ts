import {Meta} from "@storybook/web-components";
import {html} from "lit";
import {type ZStepperItem} from ".";
import "./index";

type ZStepperItemStoriesArgs = ZStepperItem & {text: string};

export default {
  title: "ZStepper/ZStepperItem",
  component: "z-stepper-item",
  args: {
    pressed: false,
    disabled: false,
    checked: false,
    index: 1,
    text: "First Item",
  },
} satisfies Meta<ZStepperItemStoriesArgs>;

export const Default = {
  render: (args) =>
    html`<z-stepper-item
      index=${args.index}
      ?pressed=${args.pressed}
      ?disabled=${args.disabled}
      ?checked=${args.checked}
      >${args.text}</z-stepper-item
    >`,
};

export const Pressed = {
  args: {
    pressed: true,
  },
  render: (args) =>
    html`<z-stepper-item
      index=${args.index}
      ?pressed=${args.pressed}
      ?disabled=${args.disabled}
      ?checked=${args.checked}
      >${args.text}</z-stepper-item
    >`,
};

export const Disabled = {
  args: {
    disabled: true,
  },
  render: (args) =>
    html`<z-stepper-item
      index=${args.index}
      ?pressed=${args.pressed}
      ?disabled=${args.disabled}
      ?checked=${args.checked}
      >${args.text}</z-stepper-item
    >`,
};

export const Checked = {
  args: {
    checked: true,
  },
  render: (args) =>
    html`<z-stepper-item
      index=${args.index}
      ?pressed=${args.pressed}
      ?disabled=${args.disabled}
      ?checked=${args.checked}
      >${args.text}</z-stepper-item
    >`,
};
