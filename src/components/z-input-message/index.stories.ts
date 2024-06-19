import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ZInputMessage} from ".";
import {ControlSize, InputStatus} from "../../beans";
import "./index";

type ZInputMessageStoriesArgs = ZInputMessage & {class: ControlSize};

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
} satisfies Meta<ZInputMessageStoriesArgs>;
export default StoryMeta;

export const Default = {
  render: (args) => html`
    <z-input-message
      message=${args.message}
      status=${args.status}
      class=${args.class}
    ></z-input-message>
  `,
} satisfies StoryObj<ZInputMessageStoriesArgs>;
