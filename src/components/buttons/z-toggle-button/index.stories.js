import {html} from "lit";

export default {
  title: "ZToggleButton",
  component: "z-toggle-button",

  args: {
    label: "Toggle",
    ariaLabel: "",
    avoidClick: false,
    isdisabled: false,
    opened: false,
  },
};

export const ZToggleButton = {
  render: (args) =>
    html`<z-toggle-button
      label="${args.label}"
      aria-label="${args.ariaLabel}"
      avoidClick="${args.avoidClick}"
      isdisabled="${args.isdisabled}"
      opened="${args.opened}"
    ></z-toggle-button>`,

  name: "z-toggle-button",
};
