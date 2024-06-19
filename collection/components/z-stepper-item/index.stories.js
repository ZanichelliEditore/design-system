import { html } from "lit";
import "./index";
export default {
    title: "ZStepper/ZStepperItem",
    component: "z-stepper-item",
};
export const WithIndex = {
    render: () => html `<z-stepper-item index="1"></z-stepper-item>`,
};
export const WithText = {
    render: () => html `<z-stepper-item index="1">First step</z-stepper-item>`,
};
export const Disabled = {
    render: () => html `<z-stepper-item
      index="1"
      disabled
      >First step</z-stepper-item
    >`,
};
export const Pressed = {
    render: () => html `<z-stepper-item
      index="1"
      pressed
      >First step</z-stepper-item
    >`,
};
export const Checked = {
    render: () => html `<z-stepper-item
      index="1"
      checked
      >First step</z-stepper-item
    >`,
};
//# sourceMappingURL=index.stories.js.map
