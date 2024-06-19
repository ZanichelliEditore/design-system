import { html } from "lit";
import "./index";
export default {
    title: "ZFile",
    component: "z-file",
};
export const Default = {
    args: {
        fileNumber: 1,
        fileName: "abcdefghilmnopqrst.jpg",
    },
    render: (args) => html `<z-file
      file-number="${args.fileNumber}"
      file-name="${args.fileName}"
    ></z-file>`,
};
//# sourceMappingURL=index.stories.js.map
