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
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import classNames from "classnames";

import {
  ZDatePickerMode,
  ZDatePickerModeValues,
  ZDatePickerPosition,
} from "../../beans";

@Component({
  tag: "z-date-picker",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZDatePicker {
  @Element() element: HTMLElement;

  /** unique id */
  @Prop() datepickerid: string;
  /** [Optional] datepicker mode: date, datetime, only months */
  @Prop() mode: ZDatePickerMode = ZDatePickerMode.date;

  @State() flatpickrPosition: ZDatePickerPosition = ZDatePickerPosition.bottom;

  private flatpickrInstance;
  private hasSlot: boolean;

  /** emitted when date changes, returns selected date */
  @Event() dateSelect: EventEmitter;
  emitDateSelect() {
    this.dateSelect.emit(this.flatpickrInstance.selectedDates);
  }

  componentWillLoad() {
    let slotElement = this.element.querySelector("[slot=toggle]");
    this.hasSlot = !!slotElement;
    this.hasSlot && slotElement.setAttribute("data-toggle", "data-toggle");
  }

  componentDidLoad() {
    this.flatpickrInstance = flatpickr(`.${this.datepickerid}`, {
      appendTo: this.element.children[0] as HTMLElement,
      enableTime: this.mode === ZDatePickerMode.dateTime,
      locale: Italian,
      dateFormat:
        this.mode === ZDatePickerMode.dateTime ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: this.mode === ZDatePickerMode.months ? "F Y" : "d F Y",
      minuteIncrement: 1,
      time_24hr: true,
      onChange: this.emitDateSelect.bind(this),
      wrap: this.hasSlot,
      plugins: this.mode === ZDatePickerMode.months && [
        monthSelectPlugin({
          dateFormat: "m-Y",
          altFormat: "m-Y",
        }),
      ],
    });

    this.element.querySelectorAll(".flatpickr-weekday").forEach((element) => {
      element.innerHTML = element.innerHTML.trim().charAt(0);
    });
  }

  setFlatpickrPosition() {
    const toggleHeight = this.element.children[0].clientHeight;
    this.element.style.setProperty("--toggle-height", `${toggleHeight}px`);

    const flatpickrHeight =
      this.mode === ZDatePickerMode.dateTime
        ? ZDatePickerModeValues.DATETIME
        : this.mode === ZDatePickerMode.months
        ? ZDatePickerModeValues.MONTHS
        : ZDatePickerModeValues.DATE;

    const bottom = this.element.getBoundingClientRect().bottom;
    const overflowBottom = bottom + flatpickrHeight > window.innerHeight;
    const overflowTop = bottom - flatpickrHeight - toggleHeight < 0;

    if (!overflowTop && overflowBottom) {
      this.flatpickrPosition = ZDatePickerPosition.top;
    } else {
      this.flatpickrPosition = ZDatePickerPosition.bottom;
    }
  }

  renderSlottedContent() {
    return (
      <div
        class={classNames(
          "flatpickr-toggle-container",
          this.datepickerid,
          this.flatpickrPosition,
          this.mode
        )}
        onClick={() => this.setFlatpickrPosition()}
      >
        <input class="hidden-input" data-input></input>
        <slot name="toggle"></slot>
      </div>
    );
  }

  renderZInput() {
    return (
      <div
        class={classNames(
          "flatpickr-toggle-container",
          this.flatpickrPosition,
          this.mode
        )}
      >
        <z-input
          class={classNames(this.datepickerid)}
          type="text"
          name="datepicker"
          icon="event"
          hasmessage={false}
          onClick={() => this.setFlatpickrPosition()}
        ></z-input>
      </div>
    );
  }

  render() {
    return this.hasSlot ? this.renderSlottedContent() : this.renderZInput();
  }
}
