import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZFile} from "./index";

export default {
  title: "ZFile",
  component: ZFile,
} satisfies Meta<ZFile>;

export const Default = {
  args: {
    fileNumber: 1,
    fileName: "abcdefghilmnopqrst.jpg",
  },
  render: (args) => (
    <z-file
      fileNumber={args.fileNumber}
      fileName={args.fileName}
    ></z-file>
  ),
} satisfies StoryObj<ZFile>;
