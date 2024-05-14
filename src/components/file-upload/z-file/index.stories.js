import {html} from "lit";

export default {
  title: "ZFile",
  component: "z-file",
};

export const ZFile = {
  render: (args) =>
    html`<z-file
      file-number="${args.fileNumber}"
      file-name="${args.fileName}"
    ></z-file>`,

  name: "ZFile",

  args: {
    fileNumber: 1,
    fileName: "abcdefghilmnopqrst.jpg",
  },
};
