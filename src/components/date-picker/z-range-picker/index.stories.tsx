import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZRangePickerMode} from "../../../beans";
import "../index.stories.css";
import {ZRangePicker} from "./index";

const onDateSelect = (e: CustomEvent<string[]>, rangePickerId: string) => {
  const input = document.getElementById(`output-${rangePickerId}`);
  if (input) {
    input.innerHTML = `["${e.detail[0]}", "${e.detail[1]}"]`;
  }
};

/**
 * In order to avoid conflits between datepickers, pass a unique id as `rangePickerId` prop.
 * This component has a callback function `dateSelect` that returns the selected date.
 */
const StoryMeta = {
  title: "ZRangePicker",
  component: ZRangePicker,
  argTypes: {
    mode: {
      options: Object.values(ZRangePickerMode),
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    mode: ZRangePickerMode.DATE,
    rangePickerId: "range-picker-story",
    firstLabel: "Start date",
    firstAriaLabel: "start-date",
    secondLabel: "End date",
    secondAriaLabel: "end-date",
    firstPickerPlaceholder: "placeholder1",
    lastPickerPlaceholder: "placeholder2",
    firstPickerReadOnly: false,
    lastPickerReadOnly: false,
  },
  render: (args) => (
    <div class="story-container">
      <div class="story-picker-container">
        <z-range-picker
          {...args}
          onDateSelect={(e) => onDateSelect(e, args.rangePickerId)}
        ></z-range-picker>
      </div>
      <div class="story-output-container">
        <span>OUTPUT:</span>
        <br />
        <span id={`output-${args.rangePickerId}`} />
      </div>
    </div>
  ),
} satisfies Meta<ZRangePicker>;

export default StoryMeta;

type Story = StoryObj<ZRangePicker>;

export const Date = {} satisfies Story;

export const DateAndTime = {
  args: {
    mode: ZRangePickerMode.DATE_TIME,
  },
} satisfies Story;
