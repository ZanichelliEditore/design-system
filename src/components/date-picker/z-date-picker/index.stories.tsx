import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZDatePickerMode} from "../../../beans";
import "../index.stories.css";
import {ZDatePicker} from "./index";

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
    mode: ZDatePickerMode.DATE,
  },
  beforeEach: (args) => {
    document.getElementById(`${args.datePickerId}`)?.addEventListener("dateSelect", (e: CustomEvent<string>) => {
      const input = document.getElementById(`output-${args.datePickerId}`);
      if (input) {
        input.innerHTML = `["${e.detail}"]`;
      }
    });
  },
  render: (args) => (
    <div class="story-container">
      <div class="story-picker-container">
        <z-date-picker
          mode={args.mode}
          datePickerId={args.datePickerId}
          id={args.datePickerId}
          ariaLabel={args.ariaLabel}
          label={args.label}
          value={args.value}
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
    datePickerId: "picker-01",
    label: "ZDatePicker with date",
    value: "25-12-2024",
  },
} satisfies Story;

export const DateAndTime: Story = {
  args: {
    datePickerId: "picker-02",
    label: "ZDatePicker with date and time",
    mode: ZDatePickerMode.DATE_TIME,
    value: "05-12-2024 - 12:01",
    name: "date-time-picker",
  },
} satisfies Story;

export const MonthsOnly: Story = {
  args: {
    datePickerId: "picker-03",
    label: "ZDatePicker with only months",
    mode: ZDatePickerMode.MONTHS,
    value: "12-2024",
    name: "month-picker",
  },
} satisfies Story;

export const CustomToggle: Story = {
  args: {
    datePickerId: "picker-04",
    label: "date picker",
    value: "25-01-2024",
    name: "date-toogle-picker",
  },
  render: (args) => (
    <div class="story-container">
      <div class="story-picker-container">
        <z-date-picker
          mode={args.mode}
          datePickerId={args.datePickerId}
          id={args.datePickerId}
          ariaLabel={args.ariaLabel}
          label={args.label}
          value={args.value}
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
