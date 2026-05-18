import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ColorPickerPalette} from "../../beans";
import {ZColorPicker} from "./index";

const StoryMeta = {
  title: "ZColorPicker",
  component: ZColorPicker,
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
    disableTransparent: false,
  },
} satisfies Meta<ZColorPicker>;

export default StoryMeta;

type Story = StoryObj<ZColorPicker>;

export const Default = {
  render: (args) => <z-color-picker {...args}></z-color-picker>,
} satisfies Story;
