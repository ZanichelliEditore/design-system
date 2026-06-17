import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {SfAlertType} from "../../../beans";
import {ZAlert} from "./index";

const StoryMeta = {
  title: "Snowflakes/ZAlert",
  component: ZAlert,

  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: Object.keys(SfAlertType),
    },
  },
  args: {
    type: SfAlertType.SUCCESS,
  },
} satisfies Meta<ZAlert>;

export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-alert type={args.type}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
    </z-alert>
  ),
} satisfies StoryObj<ZAlert>;
