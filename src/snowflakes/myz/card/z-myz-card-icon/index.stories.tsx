import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZMyzCardIcon} from "./index";

const StoryMeta = {
  title: "Snowflakes/MyzCard/ZMyzCardIcon",
  component: ZMyzCardIcon,

  args: {
    icon: "book-minus",
    isdisabled: true,
    ariaLabel: "test label",
  },
} satisfies Meta<ZMyzCardIcon>;

export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-myz-card-icon
      icon={args.icon}
      isdisabled={args.isdisabled}
      ariaLabel={args.ariaLabel}
    />
  ),
} satisfies StoryObj<ZMyzCardIcon>;
