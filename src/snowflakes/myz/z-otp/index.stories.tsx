import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {SfInputStatus} from "../../../beans";
import {ZOtp} from "./index";

const StoryMeta = {
  title: "Snowflakes/ZOtp",
  component: ZOtp,

  argTypes: {
    status: {
      control: {
        type: "select",
      },
      options: Object.keys(SfInputStatus),
    },
  },
  args: {
    inputNum: 6,
    status: undefined,
    message: "",
  },
} satisfies Meta<ZOtp>;

export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-otp
      inputNum={args.inputNum}
      status={args.status}
      message={args.message}
    ></z-otp>
  ),
} satisfies StoryObj<ZOtp>;
