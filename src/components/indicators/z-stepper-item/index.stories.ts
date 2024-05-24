import {Meta} from "@storybook/web-components";
import {html} from "lit";
import {type ZStepperItem} from "./";
import "./index";

export default {
  title: "ZStepper/ZStepperItem",
  component: "z-stepper-item",
} satisfies Meta<ZStepperItem>;

export const WithIndex = {
  render: () => html`<z-stepper-item index="1"></z-stepper-item>`,
};

export const WithText = {
  render: () => html`<z-stepper-item index="1">First step</z-stepper-item>`,
};

export const Disabled = {
  render: () =>
    html`<z-stepper-item
      index="1"
      disabled
      >First step</z-stepper-item
    >`,
};

export const Pressed = {
  render: () =>
    html`<z-stepper-item
      index="1"
      pressed
      >First step</z-stepper-item
    >`,
};
