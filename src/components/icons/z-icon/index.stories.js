import {html} from "lit";
import {getColorTokens} from "../../../utils/storybook-utils";

export default {
  title: "ZIcon",
  component: "z-icon",

  argTypes: {
    fill: {
      options: getColorTokens().map((token) => token.replace("--", "")),

      control: {
        type: "select",
      },
    },
  },

  args: {
    name: "download",
    height: 24,
    width: 24,
    fill: "color-primary01",
  },
};

export const ZIcon = {
  render: (args) =>
    html`<z-icon
      name="${args.name}"
      height="${args.height}"
      width="${args.width}"
      fill="${args.fill}"
    ></z-icon>`,

  name: "z-icon",
};
