import {Meta} from "@storybook/web-components";
import {html} from "lit";
import {type ZIcon} from ".";
import {getColorTokens} from "../../utils/storybook-utils";
import "./index";

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
} satisfies Meta<ZIcon>;

export const Default = {
  render: (args) =>
    html`<z-icon
      name="${args.name}"
      height="${args.height}"
      width="${args.width}"
      fill="${args.fill}"
    ></z-icon>`,
};
