import {html} from "lit";
import {DividerSize, DividerOrientation} from "../../beans";
import {getColorTokens} from "../../utils/storybook-utils";

export default {
  title: "ZDivider",
  component: "z-divider",

  argTypes: {
    size: {
      control: {
        type: "select",
      },

      options: Object.values(DividerSize),
    },

    orientation: {
      control: {
        type: "select",
      },

      options: Object.values(DividerOrientation),
    },

    color: {
      control: {
        type: "select",
      },

      options: getColorTokens().map((token) => token.replace("--", "")),
    },
  },

  args: {
    size: DividerSize.SMALL,
    color: "gray200",
    orientation: DividerOrientation.HORIZONTAL,
  },
};

export const ZDivider = {
  render: (args) =>
    html`<div style="height: 300px; padding: 24px">
      <z-divider
        size="${args.size}"
        color="${args.color}"
        orientation="${args.orientation}"
      ></z-divider>
    </div>`,

  name: "ZDivider",
};
