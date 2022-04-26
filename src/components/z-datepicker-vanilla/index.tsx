import { Component, Prop, h } from "@stencil/core";

import Datepicker from "vanillajs-datepicker/js/Datepicker.js";
import DateRangePicker from "vanillajs-datepicker/js/DateRangePicker.js";
import it from "vanillajs-datepicker/js/i18n/locales/it.js";

@Component({
  tag: "z-datepicker-vanilla",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZDatepickerVanilla {
  @Prop() myProp: string;

  componentDidRender() {
    Object.assign(Datepicker.locales, it);
    const datepickerEl = document.querySelector('input[name="datepicker"]');
    const datepicker = new Datepicker(datepickerEl, {
      language: "it",
      prevArrow: "<z-icon name='chevron-left'></z-icon>",
      nextArrow: "<z-icon name='chevron-right'></z-icon>",
      daysOfWeekHighlighted: [0, 6],
      format: "dd-mm-yyyy",
    });
    console.log("Vanilla datepicker", datepicker);

    const rangePickerEl = document.getElementById("range-datepicker");
    const rangepicker = new DateRangePicker(rangePickerEl, {
      language: "it",
      prevArrow: "<z-icon name='chevron-left'></z-icon>",
      nextArrow: "<z-icon name='chevron-right'></z-icon>",
      daysOfWeekHighlighted: [0, 6],
      format: "dd-mm-yyyy",
    });

    console.log("Vanilla rangepicker", rangepicker);
  }

  render() {
    return (
      <div>
        <div>
          <z-input
            type="text"
            name="datepicker"
            icon="event"
            label="Data"
          ></z-input>
        </div>

        <div id="range-datepicker">
          <z-input
            type="text"
            name="datepicker"
            icon="event"
            label="Da data"
          ></z-input>
          <z-input
            type="text"
            name="datepicker"
            icon="event"
            label="A data"
          ></z-input>
        </div>
      </div>
    );
  }
}
