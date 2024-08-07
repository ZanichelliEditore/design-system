import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZStepper} from ".";
import "../z-stepper-item/index";
import "./index";

export default {
  title: "ZStepper/ZStepper",
  component: "z-stepper",
  subcomponents: {
    ZStepperItem: "z-stepper-item",
  },
} satisfies Meta<ZStepper>;

type Story = StoryObj<ZStepper>;

export const Default = {
  render: () =>
    html`<z-stepper>
      <z-stepper-item
        index="1"
        pressed
        >I tuoi dati</z-stepper-item
      >
      <z-stepper-item
        index="2"
        disabled
        >Le tue credenziali</z-stepper-item
      >
      <z-stepper-item
        index="3"
        disabled
        >Conferma</z-stepper-item
      >
    </z-stepper>`,
} satisfies Story;

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
} satisfies Story;

export const CompletedDisabled = {
  render: () =>
    html`<z-stepper>
      <z-stepper-item
        index="1"
        disabled
        >I tuoi dati</z-stepper-item
      >
      <z-stepper-item
        index="2"
        disabled
        >Le tue credenziali</z-stepper-item
      >
      <z-stepper-item
        index="3"
        pressed
        >Conferma</z-stepper-item
      >
    </z-stepper>`,
} satisfies Story;

export const Checked = {
  render: () =>
    html`<z-stepper>
      <z-stepper-item
        index="1"
        checked
        >I tuoi dati</z-stepper-item
      >
      <z-stepper-item
        index="2"
        checked
        >Le tue credenziali</z-stepper-item
      >
      <z-stepper-item
        index="3"
        checked
        >Conferma</z-stepper-item
      >
    </z-stepper>`,
} satisfies Story;
