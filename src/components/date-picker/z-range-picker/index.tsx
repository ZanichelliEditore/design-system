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
import classNames from "classnames";

import {
  ZDatePickerMode,
  ZDatePickerModeValues,
  ZDatePickerPosition,
  RangePickerActiveInput,
} from "../../../beans";

@Component({
  tag: "z-range-picker",
  styleUrl: "../styles.css",
  shadow: false,
})
export class ZRangePicker {
  @Element() element: HTMLElement;

  /** unique id */
  @Prop() datepickerid: string;
  /** [Optional] datepicker mode: date, datetime, only months */
  @Prop() mode: ZDatePickerMode = ZDatePickerMode.date;

  @State() flatpickrPosition: ZDatePickerPosition = ZDatePickerPosition.bottom;
  @State() activeInput: RangePickerActiveInput =
    RangePickerActiveInput.startInput;

  private flatpickrInstance = null;
  private flatpickrInstance2 = null;
  private hasChildren: boolean;

  @State() currentInputState =
    this.activeInput === RangePickerActiveInput.startInput
      ? { picker: this.flatpickrInstance, index: 0 }
      : { picker: this.flatpickrInstance2, index: 1 };

  /** emitted when date changes, returns selected date */
  @Event() dateSelect: EventEmitter;
  emitDateSelect(date) {
    this.dateSelect.emit(date);
    console.log("date", date);
  }

  @Listen("click", { target: "body", capture: true })
  handleClick() {
    this.getFocusedInput();
  }

  @Listen("keydown", { target: "body", capture: true })
  handleKeyDown(ev: KeyboardEvent) {
    let isCalendarOpened = document.activeElement.closest(
      ".flatpickr-calendar"
    );
    this.getFocusedInput();
    if (ev.key === "Tab") {
    }
    if (ev.key === "Enter" || ev.key === " ") {
      console.log("isCalendarOpened", isCalendarOpened);
      if (
        document.activeElement.classList.contains(`${this.datepickerid}`) ||
        document.activeElement.classList.contains(`${this.datepickerid}-2`)
      ) {
        !isCalendarOpened && this.currentInputState.picker.open();
      }

      let isPrevArrowEntered = document.activeElement.classList.contains(
        "flatpickr-prev-month"
      );
      let isNextArrowEntered = document.activeElement.classList.contains(
        "flatpickr-next-month"
      );
      let arrowPressed = isPrevArrowEntered || isNextArrowEntered;

      arrowPressed && ev.key === " " && ev.preventDefault();

      isPrevArrowEntered && this.currentInputState.picker.changeMonth(-1);
      isNextArrowEntered && this.currentInputState.picker.changeMonth(1);
    }
  }

  //Set background color before or after first selected date, before selecting the second one
  @Listen("mouseover")
  onMouseOver(e: CustomEvent) {
    this.setRangeHoverStyle(
      e,
      this.currentInputState.picker,
      this.element.getElementsByClassName("flatpickr-calendar")[
        this.currentInputState.index
      ]
    );
  }

  componentWillLoad() {
    let customToggle = this.element.querySelector("[slot=toggle]");
    this.hasChildren = !!customToggle;
    this.hasChildren && customToggle.setAttribute("data-toggle", "data-toggle");
  }

  componentDidLoad() {
    let config = {
      enableTime: this.mode === ZDatePickerMode.dateTime,
      locale: Italian,
      allowInput: true,
      dateFormat:
        this.mode === ZDatePickerMode.dateTime ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: "d F Y",
      minuteIncrement: 1,
      time_24hr: true,
      onChange: (selectedDates, _dateStr, instance) => {
        this.onDateSelect(selectedDates, instance);
      },
      onOpen: () => {
        this.setAriaOptions();
        this.setFlatpickrPosition();
        this.setRangeStyle();
        this.getFocusedInput();
        this.getCurrentMonth();
      },
      onYearChange: () => {
        this.setRangeStyle();
      },
      onMonthChange: () => {
        this.setRangeStyle();
      },
      onKeyDown: () => {
        this.setAriaOptions();
      },
      wrap: true,
    };

    this.flatpickrInstance = flatpickr(`.${this.datepickerid}-container`, {
      ...config,
      mode: "multiple",
      appendTo: this.element.children[0].children[0].children[0] as HTMLElement,
    });
    this.flatpickrInstance2 = flatpickr(`.${this.datepickerid}-container-2`, {
      ...config,
      mode: "multiple",
      appendTo: this.element.children[0].children[0].children[1] as HTMLElement,
    });

    this.element.querySelectorAll(".flatpickr-weekday").forEach((element) => {
      element.innerHTML = element.innerHTML.trim().charAt(0);
    });

    let firstInputElement =
      this.element.querySelectorAll("z-input")[0].children[0].children[0]
        .children[0];
    let secondInputElement =
      this.element.querySelectorAll("z-input")[1].children[0].children[0]
        .children[0];

    firstInputElement.setAttribute(
      "class",
      `${firstInputElement.className} ${RangePickerActiveInput.startInput} ${this.datepickerid}`
    );
    secondInputElement.setAttribute(
      "class",
      `${secondInputElement.className} ${RangePickerActiveInput.endInput} ${this.datepickerid}-2`
    );
  }

  onDateSelect(selectedDates, instance) {
    const firstInputElement = this.element.querySelectorAll("z-input")[0];
    const secondInputElement = this.element.querySelectorAll("z-input")[1];

    let firstInputActive =
      this.activeInput === RangePickerActiveInput.startInput;

    //If range is already set, clicking another date it will update it
    if (selectedDates.length === 3) {
      instance.setDate([selectedDates[0], selectedDates[2]]);
    }

    //Order the selected dates ASC and update the two flatpickers
    if (instance.selectedDates.length > 1) {
      if (firstInputActive) {
        //First Flatpickr selection
        let orderedDates = instance.selectedDates.sort((a, b) => b - a);
        instance.setDate([...orderedDates]);
        this.flatpickrInstance2.setDate([
          instance.selectedDates[1],
          instance.selectedDates[0],
        ]);
      } else {
        //Second Flatpickr selection
        let orderedDates = instance.selectedDates.sort((a, b) => a - b);
        instance.setDate([...orderedDates]);
        this.flatpickrInstance.setDate([
          instance.selectedDates[1],
          instance.selectedDates[0],
        ]);
        this.flatpickrInstance.setDate(
          this.flatpickrInstance.selectedDates.sort((a, b) => b - a)
        );
      }

      if (firstInputActive) {
        this.emitDateSelect(
          `${this.getDate(instance.selectedDates[1])} - ${this.getDate(
            instance.selectedDates[0]
          )}`
        );
      } else {
        this.emitDateSelect(
          `${this.getDate(instance.selectedDates[0])} - ${this.getDate(
            instance.selectedDates[1]
          )}`
        );
      }
    }

    //If exists, set first date value into first input
    let index = instance.selectedDates.length - 1;
    let firstInputBoxValueIndex = firstInputActive ? index : 0;
    let secondInputBoxValueIndex = firstInputActive ? 0 : index;

    if (this.mode === ZDatePickerMode.date) {
      instance.selectedDates[0] &&
        firstInputElement.setValue(
          String(
            `${instance.selectedDates[firstInputBoxValueIndex].getDate()}-${
              instance.selectedDates[firstInputBoxValueIndex].getMonth() + 1
            }-${instance.selectedDates[firstInputBoxValueIndex].getFullYear()}`
          )
        );

      //If exists, set second date value into second input
      instance.selectedDates[1] &&
        secondInputElement.setValue(
          String(
            `${instance.selectedDates[secondInputBoxValueIndex].getDate()}-${
              instance.selectedDates[secondInputBoxValueIndex].getMonth() + 1
            }-${instance.selectedDates[secondInputBoxValueIndex].getFullYear()}`
          )
        );
    }

    if (this.mode === ZDatePickerMode.dateTime) {
      instance.selectedDates[0] &&
        firstInputElement.setValue(
          String(
            `${instance.selectedDates[firstInputBoxValueIndex].getDate()}-${
              instance.selectedDates[firstInputBoxValueIndex].getMonth() + 1
            }-${instance.selectedDates[
              firstInputBoxValueIndex
            ].getFullYear()} - ${instance.selectedDates[
              firstInputBoxValueIndex
            ].getHours()}:${instance.selectedDates[
              firstInputBoxValueIndex
            ].getMinutes()}`
          )
        );

      //If exists, set second date value into second input
      instance.selectedDates[1] &&
        secondInputElement.setValue(
          String(
            `${instance.selectedDates[secondInputBoxValueIndex].getDate()}-${
              instance.selectedDates[secondInputBoxValueIndex].getMonth() + 1
            }-${instance.selectedDates[
              secondInputBoxValueIndex
            ].getFullYear()} - ${instance.selectedDates[
              secondInputBoxValueIndex
            ].getHours()}:${instance.selectedDates[
              secondInputBoxValueIndex
            ].getMinutes()}`
          )
        );
    }
  }

  getDate(date) {
    if (this.mode === ZDatePickerMode.date) {
      return `${flatpickr.formatDate(date, "d-m-Y")}`;
    } else {
      return `${flatpickr.formatDate(date, "d-m-Y - H:i")}`;
    }
  }

  setAriaOptions() {
    let calendar = this.element.getElementsByClassName("flatpickr-calendar");

    Array.from(calendar).forEach((element) => {
      element.setAttribute("tabindex", "0");
      let prevMonthArrow = element.getElementsByClassName(
        "flatpickr-prev-month"
      )[0];
      let nextMonthArrow = element.getElementsByClassName(
        "flatpickr-next-month"
      )[0];

      let tabindexElements = element.querySelectorAll('[tabindex = "-1"]');
      tabindexElements.forEach((element) =>
        element.setAttribute("tabindex", "0")
      );

      prevMonthArrow.setAttribute("tabindex", "0");
      nextMonthArrow.setAttribute("tabindex", "0");

      prevMonthArrow.setAttribute("role", "button");
      nextMonthArrow.setAttribute("role", "button");

      element
        .getElementsByClassName("cur-year")[0]
        .setAttribute("aria-label", "Anno");

      if (this.mode === ZDatePickerMode.date) {
        this.setDateAriaOptions(element, prevMonthArrow, nextMonthArrow);
      }
      if (this.mode === ZDatePickerMode.dateTime) {
        this.setDateTimeAriaOptions(element, prevMonthArrow, nextMonthArrow);
      }
    });
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

  //Replace month word to month number
  parseDate(date) {
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
      parseInt(pieces[0])
    );
  }

  //Get the current focused input, first or last
  getFocusedInput() {
    if (
      document.activeElement.matches(
        `.${RangePickerActiveInput.startInput}.${this.datepickerid}`
      )
    ) {
      this.activeInput = RangePickerActiveInput.startInput;
      this.currentInputState.picker = this.flatpickrInstance;
      this.currentInputState.index = 0;
    }

    if (
      document.activeElement.matches(
        `.${RangePickerActiveInput.endInput}.${this.datepickerid}-2`
      )
    ) {
      this.activeInput = RangePickerActiveInput.endInput;
      this.currentInputState.picker = this.flatpickrInstance2;
      this.currentInputState.index = 1;
    }
  }

  //Set current month after flatpickr opened
  getCurrentMonth() {
    let length = this.currentInputState.picker.selectedDates.length;

    if (length > this.currentInputState.index) {
      let dateMonth =
        this.currentInputState.picker.selectedDates[length - 1].getMonth();
      let dateYear =
        this.currentInputState.picker.selectedDates[length - 1].getFullYear();

      this.currentInputState.picker.changeMonth(dateMonth, false);
      this.currentInputState.picker.changeYear(dateYear, false);
    }
  }

  //Set style of the days between the two selected dates
  setRangeStyle() {
    let calendar =
      this.element.getElementsByClassName("flatpickr-calendar")[
        this.currentInputState.index
      ];

    Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach(
      (element: HTMLElement) => {
        let selectedDatesCount = this.flatpickrInstance.selectedDates.length;

        if (selectedDatesCount === 2) {
          let date = this.parseDate(element.ariaLabel);
          let firstDate = this.flatpickrInstance.selectedDates[1];
          let secondDate = this.flatpickrInstance.selectedDates[0];
          let alreadyOnRange = element.className.includes("inRange");
          let selected = element.className.includes("selected");

          if (date > firstDate && date < secondDate && !selected) {
            element.setAttribute(
              "class",
              `${element.className} ${alreadyOnRange ? "" : "inRange"}`
            );
          }
        }
      }
    );
  }

  //Set style of the days between first selected date and hovered date
  setRangeHoverStyle(e, flatpickr, calendar) {
    const isDay = (e.target as HTMLElement).classList.contains("flatpickr-day");
    if (isDay) {
      let calendarDate = (e.target as HTMLElement).ariaLabel;
      let hoveredDate = this.parseDate(calendarDate);

      Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach(
        (element: HTMLElement) => {
          let date = this.parseDate(element.ariaLabel);
          let selectedDatesCount = flatpickr.selectedDates.length;

          let firstDate =
            selectedDatesCount === 1 ? flatpickr.selectedDates[0] : null;

          let before = firstDate && hoveredDate < firstDate;
          let after = firstDate && hoveredDate > firstDate;

          let alreadyOnRange = element.className.includes("inRange");
          let selected = element.className.includes("selected");

          if (
            firstDate &&
            ((before && date > hoveredDate && date < firstDate && !selected) ||
              (after && date < hoveredDate && date > firstDate && !selected))
          ) {
            element.setAttribute(
              "class",
              `${element.className} ${alreadyOnRange ? "" : "inRange"}`
            );
          } else {
            element.setAttribute(
              "class",
              `${element.className.replace(" inRange", "")}`
            );
          }

          this.setRangeStyle();
        }
      );
    }
  }

  renderZRangeInput() {
    return (
      <div class="range-picker-container">
        <div class={`${classNames(this.datepickerid)}-container`}>
          <input class="hidden-input" data-input></input>
          <z-input
            class={`${RangePickerActiveInput.startInput} ${this.datepickerid}`}
            type="text"
            icon="event"
            hasmessage={false}
            tabindex="0"
            data-toggle
            onInputChange={(value) => {
              let text = value.detail.value;
              let englishData = text.split("-");
              let englishParsedData = `${englishData[1]}-${englishData[0]}-${englishData[2]}`;
              let isDate = Date.parse(englishParsedData);

              //Remove second value from either the flatpickers if input is cleared
              if (text === "") {
                this.flatpickrInstance.setDate([
                  null,
                  this.flatpickrInstance.selectedDates[0],
                ]);
                this.flatpickrInstance2.setDate([
                  null,
                  this.flatpickrInstance2.selectedDates[1],
                ]);
              } else {
                //If the value inserted is a correct date, update the first input value
                if (!Number.isNaN(isDate)) {
                  this.flatpickrInstance.setDate([
                    this.flatpickrInstance.selectedDates[0],
                    text,
                  ]);
                  this.flatpickrInstance2.setDate([
                    text,
                    this.flatpickrInstance2.selectedDates[1],
                  ]);
                  if (this.flatpickrInstance.selectedDates.length > 1) {
                    this.emitDateSelect(
                      ` ${text} - ${this.getDate(
                        this.flatpickrInstance.selectedDates[0]
                      )}`
                    );
                  }
                  this.setRangeStyle();
                }
              }
            }}
          />
        </div>
        <div class={`${classNames(this.datepickerid)}-container-2`}>
          <input class="hidden-input" data-input></input>
          <z-input
            class={`${RangePickerActiveInput.endInput} ${this.datepickerid}-2`}
            type="text"
            icon="event"
            hasmessage={false}
            tabindex="0"
            data-toggle
            onStopTyping={(value) => {
              let text = value.detail.value;
              let englishData = text.split("-");
              let englishParsedData = `${englishData[1]}-${englishData[0]}-${englishData[2]}`;
              let isDate = Date.parse(englishParsedData);

              //Remove second value from either the flatpickers if input is cleared
              if (text === "") {
                this.flatpickrInstance.setDate([
                  this.flatpickrInstance.selectedDates[1],
                ]);
                this.flatpickrInstance2.setDate([
                  this.flatpickrInstance2.selectedDates[0],
                ]);
              } else {
                //If the value inserted is a correct date, update the second input value
                if (!Number.isNaN(isDate)) {
                  this.flatpickrInstance.setDate([
                    text,
                    this.flatpickrInstance.selectedDates[1],
                  ]);
                  this.flatpickrInstance2.setDate([
                    this.flatpickrInstance2.selectedDates[0],
                    text,
                  ]);
                  if (this.flatpickrInstance2.selectedDates.length > 1) {
                    this.emitDateSelect(
                      `${this.getDate(
                        this.flatpickrInstance2.selectedDates[0]
                      )} - ${text}`
                    );
                  }
                  this.setRangeStyle();
                }
              }
            }}
          />
        </div>
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
          this.activeInput
        )}
      >
        {this.renderZRangeInput()}
      </div>
    );
  }
}
