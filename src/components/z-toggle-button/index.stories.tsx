import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {type ZToggleButton} from "./index";

const StoryMeta = {
  title: "ZToggleButton",
  args: {
    label: "Toggle",
    ariaLabel: "",
    avoidclick: false,
    isdisabled: false,
    opened: false,
  },
} satisfies Meta<ZToggleButton>;

export default StoryMeta;

type Story = StoryObj<ZToggleButton>;

export const Default = {
  render: (args) => (
    <z-toggle-button
      label={args.label}
      ariaLabel={args.ariaLabel}
      avoidclick={args.avoidclick}
      isdisabled={args.isdisabled}
      opened={args.opened}
    ></z-toggle-button>
  ),
} satisfies Story;
