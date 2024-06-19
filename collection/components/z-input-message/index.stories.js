import { html } from "lit";
import { ControlSize, InputStatus } from "../../beans";
import "./index";
const StoryMeta = {
    title: "ZInputMessage",
    component: "z-input-message",
    argTypes: {
        status: {
            control: {
                type: "inline-radio",
            },
            options: ["default", ...Object.values(InputStatus)],
        },
        class: {
            control: {
                type: "inline-radio",
            },
            options: Object.values(ControlSize),
        },
    },
    args: {
        message: "messaggio",
        status: InputStatus.ERROR,
        class: ControlSize.BIG,
    },
};
export default StoryMeta;
export const Default = {
    render: (args) => html `
    <z-input-message
      message=${args.message}
      status=${args.status}
      class=${args.class}
    ></z-input-message>
  `,
};
//# sourceMappingURL=index.stories.js.map
