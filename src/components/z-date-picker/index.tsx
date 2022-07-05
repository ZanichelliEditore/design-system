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

  private flatpickrInstance;
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

  @Listen("keydown", { target: "body", capture: true })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === "Enter" || ev.key === " ") {
      let isPrevArrowEntered = document.activeElement.classList.contains(
        "flatpickr-prev-month"
      );
      let isNextArrowEntered = document.activeElement.classList.contains(
        "flatpickr-next-month"
      );
      let arrowPressed = isPrevArrowEntered || isNextArrowEntered;

      arrowPressed && ev.key === " " && ev.preventDefault();

      if (this.mode === ZDatePickerMode.months) {
        isPrevArrowEntered &&
          this.flatpickrInstance.changeYear(
            this.flatpickrInstance.currentYear - 1
          );

        isNextArrowEntered &&
          this.flatpickrInstance.changeYear(
            this.flatpickrInstance.currentYear + 1
          );

        if (arrowPressed) {
          let calendar =
            this.element.getElementsByClassName("flatpickr-calendar")[0];
          let months = calendar.querySelectorAll(
            ".flatpickr-monthSelect-month"
          );
          months.forEach((element) => {
            element.setAttribute(
              "aria-label",
              `${element.innerHTML} ${this.flatpickrInstance.currentYear}`
            );
          });

          //Force check of the current day
          Array.from(months).forEach((element, index) => {
            let curMonth = new Date().getMonth();
            let curYear = new Date().getFullYear();

            if (index === curMonth) {
              if (this.flatpickrInstance.currentYear === curYear) {
                element.setAttribute(
                  "class",
                  "flatpickr-monthSelect-month today"
                );
              } else {
                element.setAttribute("class", "flatpickr-monthSelect-month");
              }
            }
          });
        }
      } else {
        isPrevArrowEntered && this.flatpickrInstance.changeMonth(-1);
        isNextArrowEntered && this.flatpickrInstance.changeMonth(1);
      }
    }
  }

  componentWillLoad() {
    let customToggle = this.element.querySelector("[slot=toggle]");
    this.hasChildren = !!customToggle;
    this.hasChildren && customToggle.setAttribute("data-toggle", "data-toggle");
  }

  componentDidLoad() {
    this.flatpickrInstance = flatpickr(`.${this.datepickerid}`, {
      mode: this.type === ZDatePickerType.range ? "range" : "single",
      appendTo: this.element.children[0] as HTMLElement,
      enableTime: this.mode === ZDatePickerMode.dateTime,
      locale: Italian,
      allowInput: true,
      dateFormat:
        this.mode === ZDatePickerMode.dateTime ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: this.mode === ZDatePickerMode.months ? "F Y" : "d F Y",
      minuteIncrement: 1,
      time_24hr: true,
      onChange: (_selectedDates, dateStr) => {
        this.emitDateSelect(dateStr);
      },
      onOpen: () => {
        this.setAriaOptions();
        this.setFlatpickrPosition();
      },
      onKeyDown: () => {
        this.setAriaOptions();
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

  setAriaOptions() {
    let calendar = this.element.getElementsByClassName("flatpickr-calendar")[0];

    let prevMonthArrow = calendar.getElementsByClassName(
      "flatpickr-prev-month"
    )[0];
    let nextMonthArrow = calendar.getElementsByClassName(
      "flatpickr-next-month"
    )[0];

    let tabindexElements = calendar.querySelectorAll('[tabindex = "-1"]');
    tabindexElements.forEach((element) =>
      element.setAttribute("tabindex", "0")
    );

    prevMonthArrow.setAttribute("tabindex", "0");
    nextMonthArrow.setAttribute("tabindex", "0");

    prevMonthArrow.setAttribute("role", "button");
    nextMonthArrow.setAttribute("role", "button");

    calendar
      .getElementsByClassName("cur-year")[0]
      .setAttribute("aria-label", "Anno");

    if (this.mode === ZDatePickerMode.months) {
      this.setMonthsAriaOptions(calendar, prevMonthArrow, nextMonthArrow);
    }
    if (this.mode === ZDatePickerMode.date) {
      this.setDateAriaOptions(calendar, prevMonthArrow, nextMonthArrow);
    }
    if (this.mode === ZDatePickerMode.dateTime) {
      this.setDateTimeAriaOptions(calendar, prevMonthArrow, nextMonthArrow);
    }
  }

  setMonthsAriaOptions(calendar, prevMonthArrow, nextMonthArrow) {
    Array.from(
      calendar.getElementsByClassName("flatpickr-monthSelect-months")
    ).forEach((element: HTMLElement) => element.setAttribute("tabindex", "-1"));

    Array.from(
      calendar.getElementsByClassName("flatpickr-monthSelect-month")
    ).forEach((element: HTMLElement) => element.setAttribute("role", "button"));

    prevMonthArrow.setAttribute("aria-label", "Anno precedente");
    nextMonthArrow.setAttribute("aria-label", "Anno successivo");
  }

  setDateAriaOptions(calendar, prevMonthArrow, nextMonthArrow) {
    Array.from(calendar.getElementsByClassName("flatpickr-days")).forEach(
      (element: HTMLElement) => element.setAttribute("tabindex", "-1")
    );

    Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach(
      (element: HTMLElement) => element.setAttribute("role", "button")
    );

    calendar
      .getElementsByClassName("flatpickr-monthDropdown-months")[0]
      .setAttribute("aria-label", "Mese");

    prevMonthArrow.setAttribute("aria-label", "Mese precedente");
    nextMonthArrow.setAttribute("aria-label", "Mese successivo");
  }

  setDateTimeAriaOptions(calendar, prevMonthArrow, nextMonthArrow) {
    Array.from(calendar.getElementsByClassName("flatpickr-days")).forEach(
      (element: HTMLElement) => element.setAttribute("tabindex", "-1")
    );

    Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach(
      (element: HTMLElement) => element.setAttribute("role", "button")
    );

    calendar
      .getElementsByClassName("flatpickr-monthDropdown-months")[0]
      .setAttribute("aria-label", "Mese");

    prevMonthArrow.setAttribute("aria-label", "Mese precedente");
    nextMonthArrow.setAttribute("aria-label", "Mese successivo");

    Array.from(calendar.getElementsByClassName("time24hr")).forEach(
      (element: HTMLElement) => element.setAttribute("tabindex", "-1")
    );

    calendar
      .getElementsByClassName("flatpickr-hour")[0]
      .setAttribute("aria-label", "Ora");
    calendar
      .getElementsByClassName("flatpickr-minute")[0]
      .setAttribute("aria-label", "Minuti");
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
        tabindex="0"
      ></z-input>
    );
  }

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
