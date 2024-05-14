import {html} from "lit";

import {ZDatePickerMode} from "../../../beans";

import "../styles.css";
import "../index.stories.css";

export default {
  title: "ZDatePicker",
  component: "z-date-picker",

  argTypes: {
    mode: {
      options: Object.values(ZDatePickerMode),

      control: {
        type: "radio",
      },
    },

    datePickerId: {
      control: "text",
    },

    ariaLabel: {
      control: "text",
    },

    label: {
      control: "text",
    },
  },
};

export const ZDatePickerWithDate = {
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
          date-picker-id=${args.datePickerId}
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

  name: "ZDatePicker with date",

  args: {
    mode: "date",
    datePickerId: "picker-01",
    label: "ZDatePicker with date",
    ariaLabel: "date-picker",
  },

  height: "180px",
};

export const ZDatePickerWithDateAndTime = {
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
          date-picker-id=${args.datePickerId}
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

  name: "ZDatePicker with date and time",

  args: {
    mode: "date-time",
    datePickerId: "picker-02",
    label: "ZDatePicker with date and time",
    ariaLabel: "date-picker",
  },
};

export const ZDatePickerWithOnlyMonths = {
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
          date-picker-id=${args.datePickerId}
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

  name: "ZDatePicker with only months",

  args: {
    mode: "months",
    datePickerId: "picker-03",
    label: "ZDatePicker with only months",
    ariaLabel: "date-picker",
  },
};

export const ZDatePickerWithCustomToggle = {
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
          date-picker-id=${args.datePickerId}
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

  name: "ZDatePicker with custom toggle",

  args: {
    mode: "date",
    datePickerId: "picker-04",
    label: "date picker",
    ariaLabel: "date-picker",
  },
};
