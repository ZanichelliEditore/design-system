import {html} from "lit";

export default {
  title: "ZStepper/ZStepper",
  component: "z-stepper",

  subcomponents: {
    ZStepperItem: "z-stepper-item",
  },
};

export const Initial = {
  render: () =>
    html`<z-stepper>
      <z-stepper-item
        index="1"
        pressed
      ></z-stepper-item>
      <z-stepper-item
        index="2"
        disabled
      ></z-stepper-item>
      <z-stepper-item
        index="3"
        disabled
      ></z-stepper-item>
    </z-stepper>`,

  name: "Initial",
};

export const Completed = {
  render: () =>
    html`<z-stepper>
      <z-stepper-item index="1">I tuoi dati</z-stepper-item>
      <z-stepper-item index="2">Le tue credenziali</z-stepper-item>
      <z-stepper-item
        index="3"
        pressed
        >Conferma</z-stepper-item
      >
    </z-stepper>`,

  name: "Completed",
};
