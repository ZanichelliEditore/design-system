import { Component, Prop, h } from "@stencil/core";

import flatpickr from "flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import { Italian } from "flatpickr/dist/l10n/it.js";

@Component({
  tag: "z-datepicker-flatpickr",
  styleUrl: "styles.css",
  shadow: false,
  scoped: false,
})
export class ZDatepickerFlatpickr {
  @Prop() myProp: string;

  componentDidRender() {
    flatpickr(".flatpickr", {
      enableTime: false,
      locale: Italian,
      dateFormat: "d-m-Y - H:i",
      ariaDateFormat: "d F Y",
      time_24hr: true,
      prevArrow: "<z-icon name='chevron-left'></z-icon>",
      nextArrow: "<z-icon name='chevron-right'></z-icon>",
    });

    flatpickr(".flatpickr-range", {
      enableTime: true,
      locale: Italian,
      dateFormat: "d-m-Y - H:i",
      ariaDateFormat: "d F Y",
      time_24hr: true,
      prevArrow: "<z-icon name='chevron-left'></z-icon>",
      nextArrow: "<z-icon name='chevron-right'></z-icon>",
      plugins: [rangePlugin({ input: ".second-input" })],
    });
  }

  render() {
    return (
      <div>
        <z-input
          class="flatpickr"
          type="text"
          name="datepicker"
          icon="event"
          label="Data"
        ></z-input>
        <div>
          <z-input
            class="flatpickr-range"
            type="text"
            name="datepicker"
            icon="event"
            label="Da data"
          ></z-input>
          <z-input
            class="flatpickr-range second-input"
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
