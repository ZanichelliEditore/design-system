import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZFile} from ".";
import "./index";

export default {
  title: "ZFile",
  component: "z-file",
} satisfies Meta<ZFile>;

export const Default = {
  args: {
    fileNumber: 1,
    fileName: "abcdefghilmnopqrst.jpg",
  },
  render: (args) =>
    html`<z-file
      file-number="${args.fileNumber}"
      file-name="${args.fileName}"
    ></z-file>`,
} satisfies StoryObj<ZFile>;
