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
  private flatpickrInstance;

  @Element() element: HTMLElement;

  @Prop() showTime: boolean;
  @Prop() name: string;

  @State() hasSlot: boolean;

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
    this.flatpickrInstance = flatpickr(`.${this.name}`, {
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
    const days = this.element.querySelectorAll(".flatpickr-weekday");
    const realdays = ["L", "M", "M", "G", "V", "S", "D"];

    for (let j = 0; j < days.length / 8; j++) {
      for (let i = 0; i < 7; i++) {
        days[i + 7 * j].innerHTML = realdays[i];
      }
    }
  }

  render() {
    if (this.hasSlot) {
      return (
        <div class={classNames(this.name, "hidden-input-container")}>
          <input class="hidden-input" data-input></input>
          <slot name="toggle"></slot>
        </div>
      );
    } else {
      return (
        <z-input
          class={classNames(this.name, { hasTime: this.showTime })}
          type="text"
          name="datepicker"
          icon="event"
          hasmessage={false}
        ></z-input>
      );
    }
  }
}
