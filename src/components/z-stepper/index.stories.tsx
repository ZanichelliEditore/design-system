import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZStepper} from "./index";

export default {
  title: "ZStepper/ZStepper",
  component: ZStepper,
  decorators: [(Story) => <div class="z-carousel-story-container">{Story()}</div>],
  subcomponents: {
    ZStepperItem: "z-stepper-item",
  },
} satisfies Meta<ZStepper>;

type Story = StoryObj<ZStepper>;

const onItemClick = (ev: MouseEvent) => {
  const elem = ev.currentTarget as HTMLZStepperItemElement;
  if (!elem.disabled) {
    elem.pressed = true;
    Array.from(document.querySelectorAll("z-stepper-item")).forEach((s) => {
      if (s === elem) {
        return;
      }
      s.pressed = false;
    });
  }
};

export const Default = {
  render: () => (
    <z-stepper>
      <z-stepper-item
        index={1}
        pressed
        href="#"
        onClick={onItemClick}
      >
        I tuoi dati
      </z-stepper-item>
      <z-stepper-item
        index={2}
        href="#"
        onClick={onItemClick}
      >
        Le tue credenziali
      </z-stepper-item>
      <z-stepper-item
        index={3}
        href="#"
        onClick={onItemClick}
      >
        Conferma
      </z-stepper-item>
    </z-stepper>
  ),
} satisfies Story;

export const Completed = {
  render: () => (
    <z-stepper>
      <z-stepper-item
        index={1}
        href="#"
        disabled
      >
        I tuoi dati
      </z-stepper-item>
      <z-stepper-item
        index={2}
        href="#"
        disabled
      >
        Le tue credenziali
      </z-stepper-item>
      <z-stepper-item
        index={3}
        href="#"
        pressed
      >
        Conferma
      </z-stepper-item>
    </z-stepper>
  ),
} satisfies Story;

export const CompletedDisabled = {
  render: () => (
    <z-stepper>
      <z-stepper-item
        index={1}
        disabled
      >
        I tuoi dati
      </z-stepper-item>
      <z-stepper-item
        index={2}
        disabled
      >
        Le tue credenziali
      </z-stepper-item>
      <z-stepper-item
        index={3}
        pressed
      >
        Conferma
      </z-stepper-item>
    </z-stepper>
  ),
} satisfies Story;

export const Checked = {
  render: () => (
    <z-stepper>
      <z-stepper-item
        index={1}
        checked
      >
        I tuoi dati
      </z-stepper-item>
      <z-stepper-item
        index={2}
        checked
      >
        Le tue credenziali
      </z-stepper-item>
      <z-stepper-item
        index={3}
        checked
      >
        Conferma
      </z-stepper-item>
    </z-stepper>
  ),
} satisfies Story;
