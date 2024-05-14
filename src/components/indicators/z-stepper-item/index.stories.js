import {html} from "lit";

export default {
  title: "ZStepper/ZStepperItem",
  component: "z-stepper-item",
};

export const WithIndex = {
  render: () => html`<z-stepper-item index="1"></z-stepper-item>`,
  name: "With index",
};

export const WithText = {
  render: () => html`<z-stepper-item index="1">First step</z-stepper-item>`,
  name: "With text",
};

export const Disabled = {
  render: () =>
    html`<z-stepper-item
      index="1"
      disabled
      >First step</z-stepper-item
    >`,

  name: "Disabled",
};

export const Pressed = {
  render: () =>
    html`<z-stepper-item
      index="1"
      pressed
      >First step</z-stepper-item
    >`,

  name: "Pressed",
};
