import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ControlSize, Orientation, PopoverPosition} from "../../beans";
import {ZInputRange} from "./index";
import "./index.stories.css";

const StoryMeta = {
  title: "ZInputRange",
  component: ZInputRange,
  argTypes: {
    orientation: {
      control: {type: "inline-radio"},
      options: Object.values(Orientation),
    },
    valuePosition: {
      control: {type: "select"},
      options: Object.values(PopoverPosition),
    },
    size: {
      control: {type: "inline-radio"},
      options: Object.values(ControlSize),
    },
  },
  args: {
    disabled: false,
    invertEdgesPosition: false,
    max: 100,
    min: 0,
    orientation: Orientation.HORIZONTAL,
    showEdges: true,
    showValue: true,
    size: ControlSize.BIG,
    step: 1,
    value: 50,
    valuePosition: PopoverPosition.TOP,
  },
} satisfies Meta<ZInputRange>;

export default StoryMeta;

type Story = StoryObj<ZInputRange>;

export const Default = {
  render: (args) => (
    <div class="input-range-story-container">
      <z-input-range {...args}></z-input-range>
    </div>
  ),
} satisfies Story;
