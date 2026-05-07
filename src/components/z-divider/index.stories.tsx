import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {DividerOrientation, DividerSize} from "../../beans";
import {getColorTokens} from "../../utils/storybook-utils";
import {ZDivider} from "./index";

const StoryMeta = {
  title: "ZDivider",
  component: ZDivider,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: Object.values(DividerSize),
    },
    orientation: {
      control: {
        type: "select",
      },
      options: Object.values(DividerOrientation),
    },
    color: {
      control: {
        type: "select",
      },
      options: getColorTokens().map((token) => token.replace("--", "")),
    },
  },
  args: {
    size: DividerSize.SMALL,
    color: "gray200",
    orientation: DividerOrientation.HORIZONTAL,
  },
} satisfies Meta<ZDivider>;
export default StoryMeta;

export const Default = {
  render: (args) => (
    <div style={{height: "300px", padding: "24px"}}>
      <z-divider
        size={args.size}
        color={args.color}
        orientation={args.orientation}
      ></z-divider>
    </div>
  ),
} satisfies StoryObj<ZDivider>;
