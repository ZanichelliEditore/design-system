import {html} from "lit";
import {LabelPosition} from "../../../beans";

export default {
  title: "ZToggleSwitch",
  component: "z-toggle-switch",

  argTypes: {
    labelPosition: {
      options: Object.values(LabelPosition),

      control: {
        type: "radio",
      },
    },
  },
};

export const ZToggleSwitch = {
  render: (args) => html`
    <z-toggle-switch
      label-position=${args.labelPosition}
      disabled=${args.disabled}
      >Toggle
    </z-toggle-switch>
  `,

  name: "z-toggle-switch",

  args: {
    labelPosition: LabelPosition.LEFT,
    disabled: false,
  },
};
