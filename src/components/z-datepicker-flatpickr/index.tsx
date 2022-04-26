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
    const fp = flatpickr(".myflatpickr", {
      enableTime: true,
      locale: Italian,
      dateFormat: "d-m-Y - H:i",
      time_24hr: true,
      prevArrow: "<z-icon name='chevron-left'></z-icon>",
      nextArrow: "<z-icon name='chevron-right'></z-icon>",
      plugins: [rangePlugin({ input: "#flatpickr-range" })],
    });
    console.log("flatpickr", fp);
  }

  render() {
    return (
      <div>
        <z-input
          class="myflatpickr"
          type="text"
          name="datepicker"
          icon="event"
          label="Data"
        ></z-input>
        <div>
          <z-input
            class="myflatpickr"
            type="text"
            name="datepicker"
            icon="event"
            label="Da data"
            data-id="rangePlugin"
          ></z-input>
          <z-input
            type="text"
            name="datepicker"
            icon="event"
            label="A data"
            id="flatpickr-range"
          ></z-input>
        </div>
      </div>
    );
  }
}
