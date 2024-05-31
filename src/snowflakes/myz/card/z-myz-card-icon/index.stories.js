import {html} from "lit";
import "./index";

export default {
  title: "Snowflakes/MyzCard/ZMyzCardIcon",
  component: "z-myz-card-icon",

  args: {
    icon: "book-minus",
    isdisabled: true,
    ariaLabel: "test label",
  },
};

export const ZMyzCardIcon = {
  render: (args) =>
    html`<z-myz-card-icon
      icon=${args.icon}
      isdisabled=${args.isdisabled}
      .ariaLabel=${args.ariaLabel}
    />`,
};
