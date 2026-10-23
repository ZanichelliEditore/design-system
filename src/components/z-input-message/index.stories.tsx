import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ControlSize, InputStatus} from "../../beans";
import type {ZInputMessage} from "./index";

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
  render: (args) => <z-input-message {...args}></z-input-message>,
} satisfies StoryObj<ZInputMessageStoriesArgs>;
