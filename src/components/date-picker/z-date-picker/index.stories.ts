import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZDatePicker} from ".";
import {ZDatePickerMode} from "../../../beans";
import "../../z-button/index";
import "../index.stories.css";
import "./index";

/**
 * In order to avoid conflits between datepickers, pass a unique id as `datePickerId` prop.
 * This component emits an event called `dateSelect` with the value of the selected date.
 */
const StoryMeta = {
  title: "ZDatePicker",
  component: "z-date-picker",
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
  render: (args) => html`
    <script>
      document.getElementById("${args.datePickerId}").addEventListener("dateSelect", (e) => {
        const input = document.getElementById("output");
        input.innerHTML = "[" + e.detail + "]";
      });
    </script>
    <div class="story-container">
      <div class="story-picker-container">
        <z-date-picker
          mode=${args.mode}
          .datePickerId=${args.datePickerId}
          id=${args.datePickerId}
          ariaLabel=${args.ariaLabel}
          label=${args.label}
        ></z-date-picker>
      </div>
      <div class="story-output-container">
        <span>OUTPUT:</span>
        <br />
        <span id="output" />
      </div>
    </div>
  `,
} satisfies Meta<ZDatePicker>;

export default StoryMeta;

type Story = StoryObj<ZDatePicker>;

export const Date: Story = {
  args: {
    datePickerId: "picker-01",
    label: "ZDatePicker with date",
  },
} satisfies Story;

export const DateAndTime: Story = {
  args: {
    datePickerId: "picker-02",
    label: "ZDatePicker with date and time",
  },
} satisfies Story;

export const MonthsOnly: Story = {
  args: {
    datePickerId: "picker-03",
    label: "ZDatePicker with only months",
  },
} satisfies Story;

export const CustomToggle: Story = {
  args: {
    datePickerId: "picker-04",
    label: "date picker",
  },
  render: (args) => html`
    <script>
      document.getElementById("${args.datePickerId}").addEventListener("dateSelect", (e) => {
        const input = document.getElementById("output");
        input.innerHTML = "[" + e.detail + "]";
      });
    </script>
    <div class="story-container">
      <div class="story-picker-container">
        <z-date-picker
          mode=${args.mode}
          .datePickerId=${args.datePickerId}
          id=${args.datePickerId}
          ariaLabel=${args.ariaLabel}
          label=${args.label}
          ><z-button slot="toggle">Open ZDatePicker</z-button></z-date-picker
        >
      </div>
      <div class="story-output-container">
        <span>OUTPUT:</span>
        <br />
        <span id="output" />
      </div>
    </div>
  `,
} satisfies Story;
