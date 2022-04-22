import { Component, Prop, h } from "@stencil/core";

import flatpickr from "flatpickr";

import Datepicker from "vanillajs-datepicker/js/Datepicker.js";
import DateRangePicker from "vanillajs-datepicker/js/DateRangePicker.js";

import it from "vanillajs-datepicker/js/i18n/locales/it.js";

@Component({
  tag: "z-datepicker",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZDatepicker {
  @Prop() myProp: string;

  componentDidRender() {
    const fp = flatpickr(".myflatpickr", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      time_24hr: true,
      mode: "range",
    });
    console.log(fp);

    Object.assign(Datepicker.locales, it);
    const datepickerEl = document.querySelector('input[name="datepicker"]');
    const datepicker = new Datepicker(datepickerEl, {
      language: "it",
      prevArrow: "<z-icon name='chevron-left'></z-icon>",
      nextArrow: "<z-icon name='chevron-right'></z-icon>",
      daysOfWeekHighlighted: [0, 6],
    });
    console.log(datepicker);

    const rangePickerEl = document.getElementById("range-datepicker");
    const rangepicker = new DateRangePicker(rangePickerEl, {
      language: "it",
      prevArrow: "<z-icon name='chevron-left'></z-icon>",
      nextArrow: "<z-icon name='chevron-right'></z-icon>",
      daysOfWeekHighlighted: [0, 6],
    });

    console.log(rangepicker);
  }

  render() {
    return (
      <div>
        <div>
          <h1>flatpickr</h1>
          <z-input
            class="myflatpickr"
            type="text"
            name="datepicker"
            icon="event"
            label="Data"
          ></z-input>
        </div>

        <div>
          <h1>vanillajs-datepicker</h1>
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
          <h2>Considerazioni</h2>
          <ul>
            <li>Z-input: attivando l'icona, questa non è cliccabile</li>
          </ul>
        </div>
      </div>
    );
  }
}
