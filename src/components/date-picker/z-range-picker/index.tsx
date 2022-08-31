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

import {
  ZRangePickerMode,
  ZDatePickerPosition,
  InputTypeEnum,
} from "../../../beans";
import { setAriaOptions, setFlatpickrPosition } from "../utils";

@Component({
  tag: "z-range-picker",
  styleUrl: "../styles.css",
  shadow: false,
})
export class ZRangePicker {
  @Element() element: HTMLElement;

  /** unique id */
  @Prop() rangePickerId: string;
  /** first z-input aria label */
  @Prop() firstAriaLabel?: string;
  /** first z-input label */
  @Prop() firstLabel?: string;
  /** second z-input aria label */
  @Prop() secondAriaLabel?: string;
  /** second z-input label */
  @Prop() secondLabel?: string;
  /** [Optional] datepicker mode: date, datetime, only months */
  @Prop() mode: ZRangePickerMode = ZRangePickerMode.date;

  @State() flatpickrPosition: ZDatePickerPosition = ZDatePickerPosition.bottom;
  @State() activeInput = "start-input";

  private flatpickrInstance = null;
  private flatpickrInstance2 = null;

  /** emitted when date changes, returns an array with the two selected dates */
  @Event() dateSelect: EventEmitter;

  @Listen("click", { target: "body", capture: true })
  handleClick() {
    this.getFocusedInput();
  }

  @Listen("keyup", { target: "body", capture: true })
  handleKeyDown(ev: KeyboardEvent) {
    let currentInputState =
      this.activeInput === "start-input"
        ? { picker: this.flatpickrInstance, index: 0 }
        : { picker: this.flatpickrInstance2, index: 1 };

    let isCalendarOpened = document.activeElement.closest(
      ".flatpickr-calendar"
    );
    this.getFocusedInput();

    if (ev.key === "Enter" || ev.key === " ") {
      if (
        document.activeElement.classList.contains(`${this.rangePickerId}`) ||
        document.activeElement.classList.contains(`${this.rangePickerId}-2`)
      ) {
        !isCalendarOpened && currentInputState.picker.open();
      }

      let isPrevArrowEntered = document.activeElement.classList.contains(
        "flatpickr-prev-month"
      );
      let isNextArrowEntered = document.activeElement.classList.contains(
        "flatpickr-next-month"
      );
      let arrowPressed = isPrevArrowEntered || isNextArrowEntered;

      arrowPressed && ev.key === " " && ev.preventDefault();

      isPrevArrowEntered && currentInputState.picker.changeMonth(-1);
      isNextArrowEntered && currentInputState.picker.changeMonth(1);
    }
  }

  componentDidLoad() {
    let config = {
      enableTime: this.mode === ZRangePickerMode.dateTime,
      locale: Italian,
      allowInput: true,
      dateFormat:
        this.mode === ZRangePickerMode.dateTime ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: "d F Y",
      minuteIncrement: 1,
      time_24hr: true,
      onChange: () => {
        this.onDateSelect();
      },
      onOpen: () => {
        setAriaOptions(this.element, this.mode);
        this.flatpickrPosition = setFlatpickrPosition(this.element, this.mode);
        this.setRangeStyle();
        this.getFocusedInput();
      },
      onYearChange: () => {
        this.setRangeStyle();
      },
      onMonthChange: () => {
        this.setRangeStyle();
      },
      onKeyDown: () => {
        setAriaOptions(this.element, this.mode);
      },
    };

    this.flatpickrInstance = flatpickr(`.${this.rangePickerId}-container`, {
      ...config,
      mode: "single",
      appendTo: this.element.querySelector(`.${this.rangePickerId}-container`),
    });
    this.flatpickrInstance2 = flatpickr(`.${this.rangePickerId}-container-2`, {
      ...config,
      mode: "single",
      appendTo: this.element.querySelector(
        `.${this.rangePickerId}-container-2`
      ),
    });

    this.element.querySelectorAll(".flatpickr-weekday").forEach((element) => {
      element.innerHTML = element.innerHTML.trim().charAt(0);
    });
  }

  onDateSelect() {
    const firstInputElement = this.element.querySelectorAll("z-input")[0];
    const secondInputElement = this.element.querySelectorAll("z-input")[1];
    let firstDate = this.flatpickrInstance.selectedDates[0];
    let secondDate = this.flatpickrInstance2.selectedDates[0];

    if (firstDate) {
      firstInputElement.value = this.getDate(firstDate);
    }

    if (secondDate) {
      secondInputElement.value = this.getDate(secondDate);
    }

    this.printDate(firstDate || null, secondDate || null);

    this.setRangeStyle();
  }

  disableDates(date) {
    let index = this.activeInput === "start-input" ? 0 : 1;

    let calendar =
      this.element.getElementsByClassName("flatpickr-calendar")[index];

    Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach(
      (element: HTMLElement) => {
        let calendarDate = this.getDateWithoutTime(
          this.parseDate(element.ariaLabel, null)
        );

        let breakpoint = this.getDateWithoutTime(date);
        let inRange =
          index === 0 ? calendarDate > breakpoint : calendarDate < breakpoint;

        if (inRange) {
          element.classList.toggle("flatpickr-disabled", true);
        } else {
          element.classList.toggle("flatpickr-disabled", false);
        }
      }
    );
    setAriaOptions(this.element, this.mode);
  }

  getDate(date) {
    if (this.mode === ZRangePickerMode.date) {
      return `${flatpickr.formatDate(date, "d-m-Y")}`;
    } else {
      return `${flatpickr.formatDate(date, "d-m-Y - H:i")}`;
    }
  }

  printDate(firstDate, lastDate) {
    let firstDateString = firstDate ? this.getDate(firstDate) : null;
    let lastDateString = lastDate ? this.getDate(lastDate) : null;

    this.dateSelect.emit([firstDateString, lastDateString]);
  }

  getTime() {
    let hour = (
      this.element.getElementsByClassName(
        "flatpickr-hour"
      )[0] as HTMLInputElement
    ).value;

    let minutes = (
      this.element.getElementsByClassName(
        "flatpickr-minute"
      )[0] as HTMLInputElement
    ).value;

    return `${hour}:${minutes}`;
  }

  getDateWithoutTime(date) {
    let newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      0,
      0
    );
    return newDate;
  }

  /** Replace month word to month number */
  parseDate(date, time) {
    const month = date.split(" ")[1];
    const months = {
      Gennaio: "01",
      Febbraio: "02",
      Marzo: "03",
      Aprile: "04",
      Maggio: "05",
      Giugno: "06",
      Luglio: "07",
      Agosto: "08",
      Settembre: "09",
      Ottobre: "10",
      Novembre: "11",
      Dicembre: "12",
    };

    const pieces = date.replace(month, months[month]).split(" ");

    return new Date(
      parseInt(pieces[2]),
      parseInt(pieces[1]) - 1,
      parseInt(pieces[0]),
      time ? parseInt(time.split(":")[0]) : 0,
      time ? parseInt(time.split(":")[1]) : 0
    );
  }

  /** Get the current focused input, first or last */
  getFocusedInput() {
    const focusedZInput = document.activeElement.closest("z-input");
    if (!focusedZInput) {
      return;
    }

    if (focusedZInput?.classList.contains("start-input")) {
      this.activeInput = "start-input";
    } else if (focusedZInput.classList.contains("end-input")) {
      this.activeInput = "end-input";
    }
  }

  /** Set style of the days between the two selected dates */
  setRangeStyle() {
    let index = this.activeInput === "start-input" ? 0 : 1;

    let calendar =
      this.element.getElementsByClassName("flatpickr-calendar")[index];

    Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach(
      (element: HTMLElement) => {
        let hasFirstDate = this.flatpickrInstance.selectedDates.length === 1;
        let hasSecondDate = this.flatpickrInstance2.selectedDates.length === 1;
        let firstDate;
        let secondDate;
        let date = this.getDateWithoutTime(
          this.parseDate(element.ariaLabel, null)
        );

        if (hasFirstDate) {
          firstDate = this.getDateWithoutTime(
            this.flatpickrInstance.selectedDates[0]
          );
          if (+date === +firstDate) {
            element.classList.toggle("startRange", true);
          } else {
            element.classList.toggle("startRange", false);
          }
        }

        if (hasSecondDate) {
          secondDate = this.getDateWithoutTime(
            this.flatpickrInstance2.selectedDates[0]
          );
          if (+date === +secondDate) {
            element.classList.toggle("endRange", true);
          } else {
            element.classList.toggle("endRange", false);
          }
        }

        if (hasFirstDate && hasSecondDate) {
          if (date > firstDate && date < secondDate) {
            element.classList.toggle("inRange", true);
          } else {
            element.classList.toggle("inRange", false);
          }
        }

        if (index === 0 && hasSecondDate) {
          this.disableDates(this.flatpickrInstance2.selectedDates[0]);
        }
        if (index === 1 && hasFirstDate) {
          this.disableDates(this.flatpickrInstance.selectedDates[0]);
        }
      }
    );
  }
  validateDate(dateStr, hasTime = false) {
    const regex = hasTime
      ? /^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/
      : /^\d{4}-\d{2}-\d{2}$/;

    if (dateStr.match(regex) === null) {
      return false;
    }

    const date = new Date(dateStr);
    const timestamp = date.getTime();

    if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
      return false;
    }

    return date.toISOString().startsWith(dateStr);
  }

  onStopTyping(value) {
    let text = value.detail.value;
    let englishData = text.split("-");
    let time =
      this.mode === ZRangePickerMode.dateTime ? `T${englishData[3]}:00` : "";
    let englishParsedData =
      `${englishData[2]}-${englishData[1]}-${englishData[0]}${time}`
        .split(" ")
        .join("");

    let isValidDate = this.validateDate(
      englishParsedData,
      this.mode === ZRangePickerMode.dateTime
    );

    let date = Date.parse(englishParsedData).toString();

    if (this.activeInput === "start-input") {
      if (text === "" || !isValidDate) {
        this.flatpickrInstance.setDate([]);
        this.printDate(null, this.flatpickrInstance2.selectedDates[0] || null);
      } else if (isValidDate) {
        this.flatpickrInstance.setDate([text]);
        if (this.flatpickrInstance2.selectedDates.length === 1) {
          if (date <= this.flatpickrInstance2.selectedDates[0]) {
            this.printDate(
              new Date(englishParsedData),
              this.flatpickrInstance2.selectedDates[0]
            );
          } else {
            this.flatpickrInstance.setDate([]);
          }
        }
      }
    } else {
      if (text === "" || !isValidDate) {
        this.flatpickrInstance2.setDate([]);
        this.printDate(this.flatpickrInstance.selectedDates[0] || null, null);
      } else if (isValidDate) {
        this.flatpickrInstance2.setDate([text]);
        if (this.flatpickrInstance.selectedDates.length === 1) {
          if (date >= this.flatpickrInstance.selectedDates[0]) {
            this.printDate(
              this.flatpickrInstance.selectedDates[0],
              new Date(englishParsedData)
            );
          } else {
            this.flatpickrInstance2.setDate([]);
          }
        }
      }
    }

    this.setRangeStyle();
  }

  render() {
    const zInputProps = {
      type: InputTypeEnum.text,
      icon: "event",
      tabindex: "0",
      message: false,
      onStopTyping: (value) => {
        this.onStopTyping(value);
      },
    };

    return (
      <div
        class={{
          ["range-picker-container"]: true,
          [this.mode]: true,
          [this.activeInput]: true,
          [this.flatpickrPosition]: true,
        }}
      >
        <div class={`${this.rangePickerId}-container`}>
          <z-input
            {...zInputProps}
            class={`start-input ${this.rangePickerId}`}
            ariaLabel={this.firstAriaLabel}
            label={this.firstLabel}
          />
        </div>
        <div class={`${this.rangePickerId}-container-2`}>
          <z-input
            {...zInputProps}
            class={`end-input ${this.rangePickerId}-2`}
            ariaLabel={this.secondAriaLabel}
            label={this.secondLabel}
          />
        </div>
      </div>
    );
  }
}
