import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import type {ZFile} from "./index";

export default {
  title: "ZFile",
  component: "z-file",
} satisfies Meta<ZFile>;

export const Default = {
  args: {
    fileNumber: 1,
    fileName: "abcdefghilmnopqrst.jpg",
  },
  render: (args) => <z-file {...args}></z-file>,
} satisfies StoryObj<ZFile>;
