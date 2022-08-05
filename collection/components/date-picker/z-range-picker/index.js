import { Component, Prop, Element, h, Listen, Event, State, } from "@stencil/core";
import flatpickr from "flatpickr";
import { Italian } from "flatpickr/dist/l10n/it.js";
import { ZDatePickerMode, ZDatePickerPosition, InputTypeEnum, } from "../../../beans";
import { setAriaOptions, setFlatpickrPosition } from "../utils";
export class ZRangePicker {
  constructor() {
    /** [Optional] datepicker mode: date, datetime, only months */
    this.mode = ZDatePickerMode.date;
    this.flatpickrPosition = ZDatePickerPosition.bottom;
    this.activeInput = "start-input";
    this.flatpickrInstance = null;
    this.flatpickrInstance2 = null;
  }
  handleClick() {
    this.getFocusedInput();
  }
  handleKeyDown(ev) {
    let currentInputState = this.activeInput === "start-input"
      ? { picker: this.flatpickrInstance, index: 0 }
      : { picker: this.flatpickrInstance2, index: 1 };
    let isCalendarOpened = document.activeElement.closest(".flatpickr-calendar");
    this.getFocusedInput();
    if (ev.key === "Enter" || ev.key === " ") {
      if (document.activeElement.classList.contains(`${this.rangePickerId}`) ||
        document.activeElement.classList.contains(`${this.rangePickerId}-2`)) {
        !isCalendarOpened && currentInputState.picker.open();
      }
      let isPrevArrowEntered = document.activeElement.classList.contains("flatpickr-prev-month");
      let isNextArrowEntered = document.activeElement.classList.contains("flatpickr-next-month");
      let arrowPressed = isPrevArrowEntered || isNextArrowEntered;
      arrowPressed && ev.key === " " && ev.preventDefault();
      isPrevArrowEntered && currentInputState.picker.changeMonth(-1);
      isNextArrowEntered && currentInputState.picker.changeMonth(1);
    }
  }
  /** Set background color before or after first selected date, before selecting the second one */
  onMouseOver(e) {
    let currentInputState = this.activeInput === "start-input"
      ? { picker: this.flatpickrInstance, index: 0 }
      : { picker: this.flatpickrInstance2, index: 1 };
    this.setRangeHoverStyle(e, currentInputState.picker, this.element.getElementsByClassName("flatpickr-calendar")[currentInputState.index]);
  }
  componentDidLoad() {
    let config = {
      enableTime: this.mode === ZDatePickerMode.dateTime,
      locale: Italian,
      allowInput: true,
      dateFormat: this.mode === ZDatePickerMode.dateTime ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: "d F Y",
      minuteIncrement: 1,
      time_24hr: true,
      onChange: (selectedDates, _dateStr, instance) => {
        this.onDateSelect(selectedDates, instance);
      },
      onOpen: () => {
        setAriaOptions(this.element, this.mode);
        this.flatpickrPosition = setFlatpickrPosition(this.element, this.mode);
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
        setAriaOptions(this.element, this.mode);
      },
      wrap: true,
    };
    this.flatpickrInstance = flatpickr(`.${this.rangePickerId}-container`, Object.assign(Object.assign({}, config), { mode: "multiple", appendTo: this.element.querySelector(`.${this.rangePickerId}-container`) }));
    this.flatpickrInstance2 = flatpickr(`.${this.rangePickerId}-container-2`, Object.assign(Object.assign({}, config), { mode: "multiple", appendTo: this.element.querySelector(`.${this.rangePickerId}-container-2`) }));
    this.element.querySelectorAll(".flatpickr-weekday").forEach((element) => {
      element.innerHTML = element.innerHTML.trim().charAt(0);
    });
  }
  onDateSelect(selectedDates, instance) {
    const firstInputElement = this.element.querySelectorAll("z-input")[0];
    const secondInputElement = this.element.querySelectorAll("z-input")[1];
    let firstInputActive = this.activeInput === "start-input";
    /** If range is already set, clicking another date it will update it */
    if (selectedDates.length === 3) {
      instance.setDate([selectedDates[0], selectedDates[2]]);
    }
    /** Order the selected dates ASC and update the two flatpickers */
    if (instance.selectedDates.length > 1) {
      if (firstInputActive) {
        /** First Flatpickr selection */
        let orderedDates = instance.selectedDates.sort((a, b) => b - a);
        instance.setDate([...orderedDates]);
        this.flatpickrInstance2.setDate([
          instance.selectedDates[1],
          instance.selectedDates[0],
        ]);
      }
      else {
        /** Second Flatpickr selection */
        let orderedDates = instance.selectedDates.sort((a, b) => a - b);
        instance.setDate([...orderedDates]);
        this.flatpickrInstance.setDate([
          instance.selectedDates[1],
          instance.selectedDates[0],
        ]);
        this.flatpickrInstance.setDate(this.flatpickrInstance.selectedDates.sort((a, b) => b - a));
      }
      this.printDate(instance.selectedDates[0], instance.selectedDates[1]);
    }
    let index = instance.selectedDates.length - 1;
    /** If exists, set second date value into first input */
    if (instance.selectedDates[0]) {
      firstInputElement.value = this.getDate(instance.selectedDates[firstInputActive ? index : 0]);
    }
    /** If exists, set second date value into second input */
    if (instance.selectedDates[1]) {
      secondInputElement.value = this.getDate(instance.selectedDates[firstInputActive ? 0 : index]);
    }
  }
  getDate(date) {
    if (this.mode === ZDatePickerMode.date) {
      return `${flatpickr.formatDate(date, "d-m-Y")}`;
    }
    else {
      return `${flatpickr.formatDate(date, "d-m-Y - H:i")}`;
    }
  }
  printDate(firstDate, lastDate) {
    let orderedDates = [firstDate, lastDate].sort((a, b) => a - b);
    this.dateSelect.emit([
      this.getDate(orderedDates[0]),
      this.getDate(orderedDates[1]),
    ]);
  }
  /** Replace month word to month number */
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
    return new Date(parseInt(pieces[2]), parseInt(pieces[1]) - 1, parseInt(pieces[0]));
  }
  /** Get the current focused input, first or last */
  getFocusedInput() {
    const focusedZInput = document.activeElement.closest("z-input");
    if (!focusedZInput) {
      return;
    }
    if (focusedZInput === null || focusedZInput === void 0 ? void 0 : focusedZInput.classList.contains("start-input")) {
      this.activeInput = "start-input";
    }
    else if (focusedZInput.classList.contains("end-input")) {
      this.activeInput = "end-input";
    }
  }
  /** Set current month after flatpickr opened */
  getCurrentMonth() {
    let currentInputState = this.activeInput === "start-input"
      ? { picker: this.flatpickrInstance, index: 0 }
      : { picker: this.flatpickrInstance2, index: 1 };
    let length = currentInputState.picker.selectedDates.length;
    if (length > 0) {
      let dateMonth = currentInputState.picker.selectedDates[length - 1].getMonth();
      let dateYear = currentInputState.picker.selectedDates[length - 1].getFullYear();
      currentInputState.picker.changeMonth(dateMonth, false);
      currentInputState.picker.changeYear(dateYear, false);
    }
  }
  /** Set style of the days between the two selected dates */
  setRangeStyle() {
    let currentInputState = this.activeInput === "start-input"
      ? { picker: this.flatpickrInstance, index: 0 }
      : { picker: this.flatpickrInstance2, index: 1 };
    let calendar = this.element.getElementsByClassName("flatpickr-calendar")[currentInputState.index];
    Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach((element) => {
      let selectedDatesCount = this.flatpickrInstance.selectedDates.length;
      if (selectedDatesCount === 2) {
        let date = this.parseDate(element.ariaLabel);
        let firstDate = this.flatpickrInstance.selectedDates[1];
        let secondDate = this.flatpickrInstance.selectedDates[0];
        let selected = element.className.includes("selected");
        if (date > firstDate && date < secondDate && !selected) {
          element.classList.toggle("inRange", true);
        }
      }
    });
  }
  /** Set style of the days between first selected date and hovered date */
  setRangeHoverStyle(e, flatpickr, calendar) {
    const isDay = e.target.classList.contains("flatpickr-day");
    if (isDay) {
      let calendarDate = e.target.ariaLabel;
      let hoveredDate = this.parseDate(calendarDate);
      Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach((element) => {
        let date = this.parseDate(element.ariaLabel);
        let selectedDatesCount = flatpickr.selectedDates.length;
        let firstDate = selectedDatesCount === 1 ? flatpickr.selectedDates[0] : null;
        let before = firstDate && hoveredDate < firstDate;
        let after = firstDate && hoveredDate > firstDate;
        let selected = element.className.includes("selected");
        if (firstDate &&
          ((before && date > hoveredDate && date < firstDate && !selected) ||
            (after && date < hoveredDate && date > firstDate && !selected))) {
          element.classList.toggle("inRange", true);
        }
        else {
          element.classList.remove("inRange");
        }
        this.setRangeStyle();
      });
    }
  }
  onStopTyping(value) {
    let text = value.detail.value;
    let englishData = text.split("-");
    let time = this.mode === ZDatePickerMode.dateTime ? `${englishData[3]}:00` : "";
    let englishParsedData = `${englishData[2]}-${englishData[1]}-${englishData[0]}T${time}`
      .split(" ")
      .join("");
    let isDate = Date.parse(englishParsedData);
    if (this.activeInput === "start-input") {
      /** Remove second value from either the flatpickers if input is cleared */
      if (text === "") {
        if (this.flatpickrInstance.selectedDates.length === 1) {
          this.flatpickrInstance.setDate([]);
          this.flatpickrInstance2.setDate([]);
        }
        else {
          this.flatpickrInstance.setDate([
            this.flatpickrInstance.selectedDates[0],
          ]);
          this.flatpickrInstance2.setDate([
            this.flatpickrInstance2.selectedDates[1],
          ]);
        }
      }
      else {
        /** If the value inserted is a correct date, update the first input value */
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
            this.printDate(new Date(englishParsedData), this.flatpickrInstance.selectedDates[0]);
          }
          this.setRangeStyle();
        }
      }
    }
    else {
      /** Remove second value from either the flatpickers if input is cleared */
      if (text === "") {
        if (this.flatpickrInstance2.selectedDates.length === 1) {
          this.flatpickrInstance.setDate([]);
          this.flatpickrInstance2.setDate([]);
        }
        else {
          this.flatpickrInstance.setDate([
            this.flatpickrInstance.selectedDates[1],
          ]);
          this.flatpickrInstance2.setDate([
            this.flatpickrInstance2.selectedDates[0],
          ]);
        }
      }
      else {
        /** If the value inserted is a correct date, update the second input value */
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
            this.printDate(new Date(englishParsedData), this.flatpickrInstance2.selectedDates[0]);
          }
          this.setRangeStyle();
        }
      }
    }
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
    return (h("div", { class: {
        ["range-picker-container"]: true,
        [this.mode]: true,
        [this.activeInput]: true,
        [this.flatpickrPosition]: true,
      } },
      h("div", { class: `${this.rangePickerId}-container` },
        h("input", { class: "hidden-input", "data-input": true }),
        h("z-input", Object.assign({}, zInputProps, { class: `start-input ${this.rangePickerId}`, ariaLabel: this.firstAriaLabel, label: this.firstLabel, "data-toggle": true }))),
      h("div", { class: `${this.rangePickerId}-container-2` },
        h("input", { class: "hidden-input", "data-input": true }),
        h("z-input", Object.assign({}, zInputProps, { class: `end-input ${this.rangePickerId}-2`, ariaLabel: this.secondAriaLabel, label: this.secondLabel, "data-toggle": true })))));
  }
  static get is() { return "z-range-picker"; }
  static get originalStyleUrls() { return {
    "$": ["../styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["../styles.css"]
  }; }
  static get properties() { return {
    "rangePickerId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "unique id"
      },
      "attribute": "range-picker-id",
      "reflect": false
    },
    "firstAriaLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "first z-input aria label"
      },
      "attribute": "first-aria-label",
      "reflect": false
    },
    "firstLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "first z-input label"
      },
      "attribute": "first-label",
      "reflect": false
    },
    "secondAriaLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "second z-input aria label"
      },
      "attribute": "second-aria-label",
      "reflect": false
    },
    "secondLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "second z-input label"
      },
      "attribute": "second-label",
      "reflect": false
    },
    "mode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ZDatePickerMode",
        "resolved": "ZDatePickerMode.date | ZDatePickerMode.dateTime | ZDatePickerMode.months",
        "references": {
          "ZDatePickerMode": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "[Optional] datepicker mode: date, datetime, only months"
      },
      "attribute": "mode",
      "reflect": false,
      "defaultValue": "ZDatePickerMode.date"
    }
  }; }
  static get states() { return {
    "flatpickrPosition": {},
    "activeInput": {}
  }; }
  static get events() { return [{
      "method": "dateSelect",
      "name": "dateSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emitted when date changes, returns an array with the two selected dates"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": "body",
      "capture": true,
      "passive": false
    }, {
      "name": "keydown",
      "method": "handleKeyDown",
      "target": "body",
      "capture": true,
      "passive": false
    }, {
      "name": "mouseover",
      "method": "onMouseOver",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
