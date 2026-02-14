import type {Meta, StoryObj} from "@storybook/html";
import {html} from "lit";
import type {ZInputGroup} from ".";
import "../z-input";
import "./index";

type ZInputGroupStoriesArgs = ZInputGroup & {
  slottedContent?: string;
};

const StoryMeta = {
  title: "ZInputGroup",
  component: "z-input-group",
  argTypes: {
    legend: {
      control: {
        type: "text",
      },
      description: "The legend text that describes the group of inputs",
    },
    hideLegend: {
      control: {
        type: "boolean",
      },
      description: "Whether to visually hide the legend while keeping it accessible",
    },
  },
  args: {
    legend: "Frequenti",
    hideLegend: false,
  },
} satisfies Meta<ZInputGroupStoriesArgs>;
export default StoryMeta;

export const RadioGroup = {
  args: {
    legend: "Frequenti",
  },
  render: (args) =>
    html`<z-input-group legend="${args.legend}" ?hide-legend="${args.hideLegend}">
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
    </z-input-group>`,
} satisfies StoryObj<ZInputGroupStoriesArgs>;

export const CheckboxGroup = {
  args: {
    legend: "Select your preferences",
  },
  render: (args) =>
    html`<z-input-group legend="${args.legend}" ?hide-legend="${args.hideLegend}">
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
    </z-input-group>`,
} satisfies StoryObj<ZInputGroupStoriesArgs>;

export const HiddenLegend = {
  args: {
    legend: "Frequenti",
    hideLegend: true,
  },
  render: (args) =>
    html`
      <h2 class="heading-4-lt">Frequenti</h2>
      <z-input-group legend="${args.legend}" ?hide-legend="${args.hideLegend}">
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
    `,
} satisfies StoryObj<ZInputGroupStoriesArgs>;
