import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ZRangePicker} from ".";
import {ZRangePickerMode} from "../../../beans";
import "../index.stories.css";
import "./index";

/**
 * In order to avoid conflits between datepickers, pass a unique id as `rangePickerId` prop.
 * This component has a callback function `dateSelect` that returns the selected date.
 */
const StoryMeta = {
  title: "ZRangePicker",
  component: "z-range-picker",
  argTypes: {
    mode: {
      options: Object.values(ZRangePickerMode),
      control: {
        type: "inline-radio",
      },
    },
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
  render: (args) => html`
    <script>
      document.getElementById("${args.rangePickerId}").addEventListener("dateSelect", (e) => {
        const input = document.getElementById("output");
        input.innerHTML = "[" + e.detail[0] + ", " + e.detail[1] + "]";
      });
    </script>
    <div class="story-container">
      <div class="story-picker-container">
        <z-range-picker
          mode=${args.mode}
          range-picker-id=${args.rangePickerId}
          id=${args.rangePickerId}
          first-aria-label=${args.firstAriaLabel}
          first-label=${args.firstLabel}
          second-aria-label=${args.secondAriaLabel}
          second-label=${args.secondLabel}
          first-picker-placeholder=${args.firstPickerPlaceholder}
          last-picker-placeholder=${args.lastPickerPlaceholder}
          first-picker-read-only=${args.firstPickerReadOnly}
          last-picker-read-only=${args.lastPickerReadOnly}
        ></z-range-picker>
      </div>
      <div class="story-output-container">
        <span>OUTPUT:</span>
        <br />
        <span id="output" />
      </div>
    </div>
  `,
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
  render: (args) => html`
    <script>
      document.getElementById("${args.rangePickerId}").addEventListener("dateSelect", (e) => {
        const input = document.getElementById("output");
        input.innerHTML = "[" + e.detail[0] + ", " + e.detail[1] + "]";
      });
    </script>
    <div class="story-container">
      <div class="story-picker-container">
        <z-range-picker
          mode=${args.mode}
          range-picker-id=${args.rangePickerId}
          id=${args.rangePickerId}
          first-aria-label=${args.firstAriaLabel}
          first-label=${args.firstLabel}
          second-aria-label=${args.secondAriaLabel}
          second-label=${args.secondLabel}
          first-picker-placeholder=${args.firstPickerPlaceholder}
          last-picker-placeholder=${args.lastPickerPlaceholder}
          first-picker-read-only=${args.firstPickerReadOnly}
          last-picker-read-only=${args.lastPickerReadOnly}
        ></z-range-picker>
      </div>
      <div class="story-output-container">
        <span>OUTPUT:</span>
        <br />
        <span id="output" />
      </div>
    </div>
  `,
} satisfies Story;
