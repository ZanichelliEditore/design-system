import { Component, Prop, h } from "@stencil/core";

import "@ui5/webcomponents/dist/Datepicker.js";
import "@ui5/webcomponents/dist/DateRangePicker.js";
import "@ui5/webcomponents/dist/DateTimePicker.js";

import "carbon-web-components/es/components/date-picker/index.js";

@Component({
  tag: "z-datepicker",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZDatepicker {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        <h1>UI5</h1>
        <ui5-date-picker id="myDatepicker1"></ui5-date-picker>
        <ui5-daterange-picker id="mydaterange-picker1"></ui5-daterange-picker>
        <ui5-datetime-picker></ui5-datetime-picker>
        <h1>Carbon</h1>
        <bx-date-picker>
          <bx-date-picker-input
            kind="from"
            label-text="Date Picker label"
            placeholder="mm/dd/yyyy"
            size="lg"
          >
            {" "}
          </bx-date-picker-input>
          <bx-date-picker-input
            kind="to"
            label-text="Date Picker label"
            placeholder="mm/dd/yyyy"
            size="lg"
          >
            {" "}
          </bx-date-picker-input>
        </bx-date-picker>
      </div>
    );
  }
}
