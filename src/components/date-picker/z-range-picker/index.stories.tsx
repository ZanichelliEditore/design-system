import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZRangePickerMode} from "../../../beans";
import "../index.stories.css";
import {ZRangePicker} from "./index";

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
  beforeEach: (args) => {
    document.getElementById(`${args.rangePickerId}`)?.addEventListener("dateSelect", (e: CustomEvent<string[]>) => {
      const input = document.getElementById(`output-${args.rangePickerId}`);
      if (input) {
        input.innerHTML = `["${e.detail[0]}", "${e.detail[1]}"]`;
      }
    });
  },
} satisfies Meta<ZRangePicker>;

export default StoryMeta;

type Story = StoryObj<ZRangePicker>;

export const Date = {
  args: {
    mode: ZRangePickerMode.DATE,
    rangePickerId: "picker-01",
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
          mode={args.mode}
          rangePickerId={args.rangePickerId}
          id={args.rangePickerId}
          firstAriaLabel={args.firstAriaLabel}
          firstLabel={args.firstLabel}
          secondAriaLabel={args.secondAriaLabel}
          secondLabel={args.secondLabel}
          firstPickerPlaceholder={args.firstPickerPlaceholder}
          lastPickerPlaceholder={args.lastPickerPlaceholder}
          firstPickerReadOnly={args.firstPickerReadOnly}
          lastPickerReadOnly={args.lastPickerReadOnly}
        ></z-range-picker>
      </div>
      <div class="story-output-container">
        <span>OUTPUT:</span>
        <br />
        <span id={`output-${args.rangePickerId}`} />
      </div>
    </div>
  ),
} satisfies Story;

export const DateAndTime = {
  args: {
    mode: ZRangePickerMode.DATE_TIME,
    rangePickerId: "picker-02",
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
          mode={args.mode}
          rangePickerId={args.rangePickerId}
          id={args.rangePickerId}
          firstAriaLabel={args.firstAriaLabel}
          firstLabel={args.firstLabel}
          secondAriaLabel={args.secondAriaLabel}
          secondLabel={args.secondLabel}
          firstPickerPlaceholder={args.firstPickerPlaceholder}
          lastPickerPlaceholder={args.lastPickerPlaceholder}
          firstPickerReadOnly={args.firstPickerReadOnly}
          lastPickerReadOnly={args.lastPickerReadOnly}
        ></z-range-picker>
      </div>
      <div class="story-output-container">
        <span>OUTPUT:</span>
        <br />
        <span id={`output-${args.rangePickerId}`} />
      </div>
    </div>
  ),
} satisfies Story;
