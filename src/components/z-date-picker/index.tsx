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
  @Prop() id: string;

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
    this.flatpickrInstance = flatpickr(`.${this.id}`, {
      appendTo: this.element,
      enableTime: this.showTime,
      locale: Italian,
      dateFormat: "d-m-Y",
      ariaDateFormat: "d F Y",
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
        <div class={this.id}>
          <div style={{ visibility: "hidden", width: "0px", height: "0px" }}>
            <z-input type="text" name="datepicker" data-input></z-input>
          </div>
          <slot name="toggle" />
        </div>
      );
    } else {
      return (
        <z-input
          class={classNames(this.id, { hasTime: this.showTime })}
          type="text"
          name="datepicker"
          icon="event"
          hasmessage={false}
        ></z-input>
      );
    }
  }
}
