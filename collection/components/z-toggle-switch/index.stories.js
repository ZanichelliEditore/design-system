import { html } from "lit";
import { LabelPosition } from "../../beans";
import "./index";
const StoryMeta = {
    title: "ZToggleSwitch",
    argTypes: {
        labelPosition: {
            options: Object.values(LabelPosition),
            control: { type: "radio" },
        },
    },
};
export default StoryMeta;
export const Default = {
    args: {
        labelPosition: LabelPosition.LEFT,
        disabled: false,
    },
    render: (args) => html `
    <z-toggle-switch
      .labelPosition=${args.labelPosition}
      disabled=${args.disabled}
      >Toggle
    </z-toggle-switch>
  `,
};
//# sourceMappingURL=index.stories.js.map
