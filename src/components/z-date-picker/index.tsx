import {
  Component,
  Prop,
  Element,
  h,
  Listen,
  EventEmitter,
  Event,
  State,
} from "@stencil/core";

import flatpickr from "flatpickr";
import { Italian } from "flatpickr/dist/l10n/it.js";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import classNames from "classnames";

import {
  ZDatePickerMode,
  ZDatePickerModeValues,
  ZDatePickerPosition,
  RangePickerInputSelected,
  ZDatePickerType,
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

  /** [Optional] datepicker type: date or range */
  @Prop() type: ZDatePickerType = ZDatePickerType.date;

  @State() flatpickrPosition: ZDatePickerPosition = ZDatePickerPosition.bottom;

  @State() rangePickerInputSelected: RangePickerInputSelected =
    RangePickerInputSelected.startInput;

  private hasChildren: boolean;

  /** emitted when date changes, returns selected date */
  @Event() dateSelect: EventEmitter;
  emitDateSelect(date) {
    this.dateSelect.emit(date);
  }

  @Listen("click", { target: "body", capture: true })
  handleClick() {
    if (document.activeElement.classList.contains("first-input")) {
      this.rangePickerInputSelected = RangePickerInputSelected.startInput;
    }
    if (document.activeElement.classList.contains("second-input")) {
      this.rangePickerInputSelected = RangePickerInputSelected.endInput;
    }
  }

  componentWillLoad() {
    let customToggle = this.element.querySelector("[slot=toggle]");
    this.hasChildren = !!customToggle;
    this.hasChildren && customToggle.setAttribute("data-toggle", "data-toggle");
  }

  componentDidLoad() {
    flatpickr(`.${this.datepickerid}`, {
      mode: this.type === ZDatePickerType.range ? "range" : "single",
      appendTo: this.element.children[0] as HTMLElement,
      enableTime: this.mode === ZDatePickerMode.dateTime,
      locale: Italian,
      dateFormat:
        this.mode === ZDatePickerMode.dateTime ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: this.mode === ZDatePickerMode.months ? "F Y" : "d F Y",
      minuteIncrement: 1,
      time_24hr: true,
      onChange: (_selectedDates, dateStr) => {
        this.emitDateSelect(dateStr);
      },
      wrap: this.hasChildren,
      plugins:
        this.mode === ZDatePickerMode.months &&
        this.type === ZDatePickerType.range
          ? [
              monthSelectPlugin({
                dateFormat: "m-Y",
                altFormat: "m-Y",
              }),
              rangePlugin({ input: `.${this.datepickerid}-2` }),
            ]
          : this.mode === ZDatePickerMode.months
          ? [
              monthSelectPlugin({
                dateFormat: "m-Y",
                altFormat: "m-Y",
              }),
            ]
          : this.type === ZDatePickerType.range
          ? [rangePlugin({ input: `.${this.datepickerid}-2` })]
          : [],
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
      <div>
        <input class="hidden-input" data-input></input>
        <slot name="toggle"></slot>
      </div>
    );
  }

  renderZInput() {
    return (
      <z-input
        class={classNames(this.datepickerid)}
        type="text"
        icon="event"
        hasmessage={false}
      ></z-input>
    );
  }
  //flatpickr-range-time

  renderZRangeInput() {
    return (
      <div class="range-picker-container">
        <z-input
          class={`${this.datepickerid} first-input`}
          type="text"
          tabindex="0"
        />
        <z-input
          class={`${this.datepickerid}-2 second-input`}
          type="text"
          tabindex="0"
        />
      </div>
    );
  }

  render() {
    return (
      <div
        class={classNames(
          "flatpickr-toggle-container",
          this.hasChildren && this.datepickerid,
          this.mode,
          this.rangePickerInputSelected
        )}
        onClick={() => this.setFlatpickrPosition()}
      >
        {this.type === ZDatePickerType.range
          ? this.renderZRangeInput()
          : this.hasChildren
          ? this.renderSlottedContent()
          : this.renderZInput()}
      </div>
    );
  }
}
