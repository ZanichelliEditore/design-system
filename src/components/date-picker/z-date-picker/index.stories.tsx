import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZDatePickerMode} from "../../../beans";
import "../index.stories.css";
import {ZDatePicker} from "./index";

const onDateSelect = (e: CustomEvent<string>, datePickerId: string) => {
  const input = document.getElementById(`output-${datePickerId}`);
  if (input) {
    input.innerHTML = `["${e.detail}"]`;
  }
};

/**
 * In order to avoid conflits between date pickers, pass a unique id as `datePickerId` prop.
 * This component emits an event called `dateSelect` with the value of the selected date.
 */
const StoryMeta = {
  title: "ZDatePicker",
  component: ZDatePicker,
  argTypes: {
    mode: {
      options: Object.values(ZDatePickerMode),
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    ariaLabel: "date-picker",
    datePickerId: "date-picker-story",
    mode: ZDatePickerMode.DATE,
  },
  render: (args) => (
    <div class="story-container">
      <div class="story-picker-container">
        <z-date-picker
          {...args}
          onDateSelect={(e) => onDateSelect(e, args.datePickerId)}
        ></z-date-picker>
      </div>
      <div class="story-output-container">
        <span>OUTPUT:</span>
        <br />
        <span id={`output-${args.datePickerId}`} />
      </div>
    </div>
  ),
} satisfies Meta<ZDatePicker>;

export default StoryMeta;

type Story = StoryObj<ZDatePicker>;

export const Date: Story = {
  args: {
    label: "ZDatePicker with date",
    value: "25-12-2024",
  },
} satisfies Story;

export const DateAndTime: Story = {
  args: {
    label: "ZDatePicker with date and time",
    mode: ZDatePickerMode.DATE_TIME,
    value: "05-12-2024 - 12:01",
    name: "date-time-picker",
  },
} satisfies Story;

export const MonthsOnly: Story = {
  args: {
    label: "ZDatePicker with only months",
    mode: ZDatePickerMode.MONTHS,
    value: "12-2024",
    name: "month-picker",
  },
} satisfies Story;

export const CustomToggle: Story = {
  args: {
    label: "date picker",
    value: "25-01-2024",
    name: "date-toogle-picker",
  },
  render: (args) => (
    <div class="story-container">
      <div class="story-picker-container">
        <z-date-picker
          {...args}
          onDateSelect={(e) => onDateSelect(e, args.datePickerId)}
        >
          <z-button slot="toggle">Open ZDatePicker</z-button>
        </z-date-picker>
      </div>
      <div class="story-output-container">
        <span>OUTPUT:</span>
        <br />
        <span id={`output-${args.datePickerId}`} />
      </div>
    </div>
  ),
} satisfies Story;
