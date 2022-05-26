import {
  Component,
  Prop,
  Element,
  h,
  EventEmitter,
  Event,
  State,
} from "@stencil/core";

import flatpickr from "flatpickr";
import { Italian } from "flatpickr/dist/l10n/it.js";
import classNames from "classnames";

@Component({
  tag: "z-date-picker",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZDatePicker {
  @Element() element: HTMLElement;

  /** unique id */
  @Prop() datepickerid: string;
  /** [Optional] if true, the datepicker is displayed with time box */
  @Prop() showTime: boolean = false;

  @State() hasSlot: boolean;

  private flatpickrInstance;

  @Event() dateSelect: EventEmitter;
  emitDateSelect() {
    this.dateSelect.emit(this.flatpickrInstance.selectedDates);
  }

  componentWillLoad() {
    let slotElement = this.element.querySelector("[slot=toggle]");
    this.hasSlot = !!slotElement;

    this.hasSlot && slotElement.setAttribute("data-toggle", "data-toggle");
  }

  componentDidRender() {
    this.flatpickrInstance = flatpickr(`.${this.datepickerid}`, {
      appendTo: this.element,
      enableTime: this.showTime,
      locale: Italian,
      dateFormat: this.showTime ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: "d F Y",
      minuteIncrement: 1,
      time_24hr: true,
      onChange: this.emitDateSelect.bind(this),
      wrap: this.hasSlot,
    });
  }

  componentDidLoad() {
    const weekdaysElement = this.element.querySelectorAll(".flatpickr-weekday");

    weekdaysElement.forEach((element) => {
      element.innerHTML = element.innerHTML.trim().charAt(0);
    });
  }

  render() {
    if (this.hasSlot) {
      return (
        <div class={classNames(this.datepickerid, "hidden-input-container")}>
          <input class="hidden-input" data-input></input>
          <slot name="toggle"></slot>
        </div>
      );
    } else {
      return (
        <z-input
          class={classNames(this.datepickerid, { hasTime: this.showTime })}
          type="text"
          name="datepicker"
          icon="event"
          hasmessage={false}
        ></z-input>
      );
    }
  }
}
