import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZLogo} from "./index";

const StoryMeta = {
  title: "ZLogo",
  component: ZLogo,
  args: {
    imageAlt: "logo",
    height: 50,
    width: 200,
    link: "",
    targetBlank: false,
    mobileLogo: false,
  },
} satisfies Meta<ZLogo>;

export default StoryMeta;

export const Default = {
  render: (args) => <z-logo {...args}></z-logo>,
} satisfies StoryObj<ZLogo>;
