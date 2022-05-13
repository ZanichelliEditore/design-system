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
    let element = this.element.querySelector("[slot=toggle]");

    this.hasSlot = !!element;
    this.hasSlot && element.setAttribute("data-toggle", "data-toggle");
  }

  componentDidRender() {
    this.flatpickrInstance = flatpickr(`.${this.name}`, {
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

  render() {
    if (this.hasSlot) {
      return (
        <div class={this.name}>
          <div style={{ visibility: "hidden", width: "0px", height: "0px" }}>
            <z-input type="text" name="datepicker" data-input></z-input>
          </div>
          <slot name="toggle" />
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
