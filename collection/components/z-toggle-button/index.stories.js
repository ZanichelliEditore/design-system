import { html } from "lit";
import "./index";
const StoryMeta = {
    title: "ZToggleButton",
    args: {
        label: "Toggle",
        ariaLabel: "",
        avoidclick: false,
        isdisabled: false,
        opened: false,
    },
};
export default StoryMeta;
export const Default = {
    render: (args) => html `<z-toggle-button
      label=${args.label}
      .ariaLabel=${args.ariaLabel}
      .avoidclick=${args.avoidclick}
      .isdisabled=${args.isdisabled}
      .opened=${args.opened}
    ></z-toggle-button>`,
};
//# sourceMappingURL=index.stories.js.map
