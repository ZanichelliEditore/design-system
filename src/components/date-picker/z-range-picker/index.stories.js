import {html} from "lit";

import {ZRangePickerMode} from "../../../beans";

import "../styles.css";
import "../index.stories.css";

export default {
  title: "ZRangePicker",
  component: "z-range-picker",

  argTypes: {
    mode: {
      options: Object.values(ZRangePickerMode),

      control: {
        type: "radio",
      },
    },

    firstPickerReadOnly: {
      control: {
        type: "boolean",
      },
    },

    lastPickerReadOnly: {
      control: {
        type: "boolean",
      },
    },

    firstPickerPlaceholder: {
      control: "text",
    },

    lastPickerPlaceholder: {
      control: "text",
    },

    rangePickerId: {
      control: "text",
    },
  },
};

export const ZRangePickerWithDate = {
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

  name: "ZRangePicker with date",

  args: {
    mode: "date",
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

  height: "180px",
};

export const ZRangePickerWithDateAndTime = {
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

  name: "ZRangePicker with date and time",

  args: {
    mode: "date-time",
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
};
