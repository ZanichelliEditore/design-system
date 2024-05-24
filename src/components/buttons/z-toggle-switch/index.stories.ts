import {html} from "lit";
import {LabelPosition} from "../../../beans";
import {Meta, StoryObj} from "@storybook/web-components";
import {type ZToggleSwitch} from ".";
import "./index";

const StoryMeta = {
  title: "ZToggleSwitch",
  argTypes: {
    labelPosition: {
      options: Object.values(LabelPosition),
      control: {type: "radio"},
    },
  },
} satisfies Meta<ZToggleSwitch>;

export default StoryMeta;

export const Default = {
  args: {
    labelPosition: LabelPosition.LEFT,
    disabled: false,
  },
  render: (args) => html`
    <z-toggle-switch
      .labelPosition=${args.labelPosition}
      disabled=${args.disabled}
      >Toggle
    </z-toggle-switch>
  `,
} satisfies StoryObj<ZToggleSwitch>;
