import {
  Component,
  Prop,
  Element,
  h,
  EventEmitter,
  Event,
} from "@stencil/core";

import flatpickr from "flatpickr";
import { Italian } from "flatpickr/dist/l10n/it.js";

@Component({
  tag: "z-date-picker",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZDatePicker {
  private flatpickrInstance;

  @Element() element: HTMLElement;

  @Prop() myProp: string;

  @Event() dateSelect: EventEmitter;
  emitDateSelect() {
    this.dateSelect.emit(this.flatpickrInstance.selectedDates);
  }

  componentDidRender() {
    this.flatpickrInstance = flatpickr(".flatpickr", {
      appendTo: this.element,
      enableTime: true,
      locale: Italian,
      dateFormat: "d-m-Y",
      ariaDateFormat: "d F Y",
      time_24hr: true,
      onChange: this.emitDateSelect.bind(this),
      //wrap: true,
    });
  }

  render() {
    return (
      <z-input
        class="flatpickr"
        type="text"
        name="datepicker"
        icon="event"
        hasmessage={false}
      ></z-input>
    );
  }
}
