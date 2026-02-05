import type {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ZColorPicker} from ".";
import {ColorPickerPalette} from "../../beans";
import "./index";

const StoryMeta = {
  title: "ZColorPicker",
  component: "z-color-picker",
  argTypes: {
    lng: {
      control: {type: "inline-radio"},
      options: ["it", "en"],
    },
    selectedColor: {
      control: {
        type: "select",
        labels: Object.fromEntries(Object.entries(ColorPickerPalette).map(([color, label]) => [color, label.it])),
      },
      options: Object.keys(ColorPickerPalette),
    },
  },
  args: {
    lng: "it",
    htmlAriaLabel: "Seleziona un colore",
    selectedColor: undefined,
  },
} satisfies Meta<ZColorPicker>;

export default StoryMeta;

type Story = StoryObj<ZColorPicker>;

export const Default = {
  render: (args) => html`<z-color-picker .selectedColor=${args.selectedColor}></z-color-picker>`,
} satisfies Story;
