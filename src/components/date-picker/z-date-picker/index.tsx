import {
  Component,
  Prop,
  Element,
  h,
  EventEmitter,
  Event,
  Listen,
  State,
} from "@stencil/core";

import flatpickr from "flatpickr";
import { Italian } from "flatpickr/dist/l10n/it.js";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import classNames from "classnames";

import { ZDatePickerMode, ZDatePickerPosition } from "../../../beans";
import { setAriaOptions, setFlatpickrPosition } from "../utils";

@Component({
  tag: "z-date-picker",
  styleUrl: "../styles.css",
  shadow: false,
})
export class ZDatePicker {
  @Element() element: HTMLElement;

  /** unique id */
  @Prop() datepickerid: string;

  /** z-input aria label */
  @Prop() ariaLabel?: string;
  /** z-input label */
  @Prop() label?: string;
  /** [Optional] datepicker mode: date, datetime, only months */
  @Prop() mode: ZDatePickerMode = ZDatePickerMode.date;

  @State() flatpickrPosition: ZDatePickerPosition = ZDatePickerPosition.bottom;

  private flatpickrInstance;
  private hasChildren: boolean;

  /** emitted when date changes, returns selected date */
  @Event() dateSelect: EventEmitter;
  emitDateSelect(date) {
    this.dateSelect.emit(date);
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
        setAriaOptions(this.element, this.mode);
        this.flatpickrPosition = setFlatpickrPosition(this.element, this.mode);
      },
      onKeyDown: () => {
        setAriaOptions(this.element, this.mode);
      },
      wrap: this.hasChildren,
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
        ariaLabel={this.ariaLabel}
        label={this.label}
        class={classNames(this.datepickerid)}
        type="text"
        icon="event"
        message={false}
        tabindex="0"
      ></z-input>
    );
  }

  render() {
    return (
      <div
        class={classNames(
          "flatpickr-toggle-container",
          this.hasChildren && this.datepickerid,
          this.flatpickrPosition,
          this.mode
        )}
      >
        {this.hasChildren ? this.renderSlottedContent() : this.renderZInput()}
      </div>
    );
  }
}
