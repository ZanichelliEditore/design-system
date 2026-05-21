import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import "../z-input";
import {ZInputGroup} from "./index";

const StoryMeta = {
  title: "ZInputGroup",
  component: ZInputGroup,
  argTypes: {
    legend: {
      control: {
        type: "text",
      },
    },
    hideLegend: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    legend: "Frequenti",
    hideLegend: false,
  },
  render: (args) => (
    <z-input-group
      legend={args.legend}
      hide-legend={args.hideLegend}
    >
      <z-input
        type="radio"
        name="studentType"
        value="underGdpr"
        label="la scuola e hai meno di 14 anni"
        size="big"
      ></z-input>
      <z-input
        type="radio"
        name="studentType"
        value="overGdpr"
        label="la scuola e hai più di 14 anni"
        size="big"
        checked
      ></z-input>
      <z-input
        type="radio"
        name="studentType"
        value="university"
        label="l'università"
        size="big"
      ></z-input>
    </z-input-group>
  ),
} satisfies Meta<ZInputGroup>;

export default StoryMeta;

type Story = StoryObj<ZInputGroup>;

export const RadioGroup = {} satisfies Story;

export const CheckboxGroup = {
  args: {
    legend: "Select your preferences",
  },
  render: (args) => (
    <z-input-group
      legend={args.legend}
      hide-legend={args.hideLegend}
    >
      <z-input
        type="checkbox"
        name="preferences"
        value="newsletter"
        label="Receive newsletter"
        size="big"
      ></z-input>
      <z-input
        type="checkbox"
        name="preferences"
        value="updates"
        label="Product updates"
        size="big"
        checked
      ></z-input>
    </z-input-group>
  ),
} satisfies Story;

export const HiddenLegend = {
  args: {
    hideLegend: true,
  },
  render: (args) => (
    <div>
      <h2 class="heading-4-lt">Frequenti</h2>
      <z-input-group
        legend={args.legend}
        hide-legend={args.hideLegend}
      >
        <z-input
          type="radio"
          name="studentType2"
          value="underGdpr"
          label="la scuola e hai meno di 14 anni"
          size="big"
        ></z-input>
        <z-input
          type="radio"
          name="studentType2"
          value="overGdpr"
          label="la scuola e hai più di 14 anni"
          size="big"
        ></z-input>
        <z-input
          type="radio"
          name="studentType2"
          value="university"
          label="l'università"
          size="big"
        ></z-input>
      </z-input-group>
    </div>
  ),
} satisfies Story;
