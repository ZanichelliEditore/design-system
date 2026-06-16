import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ControlSize, InputStatus} from "../../beans";
import {ZSfInputMessage} from "./index";

type ZSfInputMessageStoriesArgs = ZSfInputMessage & {class: ControlSize};

const StoryMeta = {
  title: "ZSfInputMessage",
  component: ZSfInputMessage,
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
} satisfies Meta<ZSfInputMessageStoriesArgs>;
export default StoryMeta;

export const Default = {
  render: (args) => <z-sf-input-message {...args}></z-sf-input-message>,
} satisfies StoryObj<ZSfInputMessageStoriesArgs>;
