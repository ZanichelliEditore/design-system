import { Component, Prop, Element, h, Listen, Event, State, Watch, } from "@stencil/core";
import flatpickr from "flatpickr";
import { Italian } from "flatpickr/dist/l10n/it.js";
import { ZRangePickerMode, ZDatePickerPosition, InputTypeEnum, InputStatusEnum, } from "../../../beans";
import { setAriaOptions, setFlatpickrPosition, validateDate } from "../utils";
export class ZRangePicker {
  constructor() {
    /** [Optional] datepicker mode: date or datetime */
    this.mode = ZRangePickerMode.date;
    this.flatpickrPosition = ZDatePickerPosition.bottom;
    this.activeInput = "start-input";
    this.firstInputError = false;
    this.lastInputError = false;
  }
  watchMode() {
    this.setupPickers();
  }
  handleClick() {
    this.getFocusedInput();
  }
  handleKeyDown(ev) {
    var _a, _b, _c, _d, _e, _f;
    let currentPicker = this.activeInput === "start-input" ? this.firstPicker : this.lastPicker;
    this.getFocusedInput();
    if (ev.key === "Escape") {
      document.activeElement.classList.contains(`${this.rangePickerId}-1`) &&
        ((_a = this.firstPicker) === null || _a === void 0 ? void 0 : _a.close());
      document.activeElement.classList.contains(`${this.rangePickerId}-2`) &&
        ((_b = this.lastPicker) === null || _b === void 0 ? void 0 : _b.close());
    }
    if (ev.key === "Enter" || ev.key === " ") {
      if (document.activeElement.classList.contains(`${this.rangePickerId}-1`) ||
        document.activeElement.classList.contains(`${this.rangePickerId}-2`)) {
        currentPicker === null || currentPicker === void 0 ? void 0 : currentPicker.open();
      }
      let isCrossIconEntered = document.activeElement.classList.contains("resetIcon");
      if (isCrossIconEntered) {
        if (this.activeInput === "start-input") {
          this.firstInputError = false;
          (_c = this.firstPicker) === null || _c === void 0 ? void 0 : _c.clear();
          this.printDate(null, ((_d = this.lastPicker) === null || _d === void 0 ? void 0 : _d.selectedDates[0]) || null);
        }
        if (this.activeInput === "end-input") {
          this.lastInputError = false;
          (_e = this.firstPicker) === null || _e === void 0 ? void 0 : _e.clear();
          this.printDate(((_f = this.firstPicker) === null || _f === void 0 ? void 0 : _f.selectedDates[0]) || null, null);
        }
      }
      let isPrevArrowEntered = document.activeElement.classList.contains("flatpickr-prev-month");
      let isNextArrowEntered = document.activeElement.classList.contains("flatpickr-next-month");
      let arrowPressed = isPrevArrowEntered || isNextArrowEntered;
      arrowPressed && ev.key === " " && ev.preventDefault();
      isPrevArrowEntered && (currentPicker === null || currentPicker === void 0 ? void 0 : currentPicker.changeMonth(-1));
      isNextArrowEntered && (currentPicker === null || currentPicker === void 0 ? void 0 : currentPicker.changeMonth(1));
    }
  }
  componentDidLoad() {
    this.setupPickers();
  }
  setupPickers() {
    let config = {
      enableTime: this.mode === ZRangePickerMode.dateTime,
      locale: Italian,
      allowInput: true,
      wrap: true,
      dateFormat: this.mode === ZRangePickerMode.dateTime ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: "d F Y",
      minuteIncrement: 1,
      time_24hr: true,
      onValueUpdate: (_selectedDates, _dateStr, _instance) => {
        let firstInputActive = this.activeInput === "start-input";
        let firstDate = this.firstPicker.selectedDates[0];
        let lastDate = this.lastPicker.selectedDates[0];
        if (+firstDate > +lastDate) {
          if (firstInputActive) {
            this.firstInputError = true;
            this.printDate(null, lastDate || null);
          }
          else {
            this.lastInputError = true;
            this.printDate(firstDate || null, null);
          }
        }
        else {
          this.lastInputError = false;
          this.firstInputError = false;
          this.printDate(firstDate || null, lastDate || null);
        }
        this.setRangeStyle(0);
        this.setRangeStyle(1);
      },
      onChange: (_selectedDates, _dateStr, instance) => {
        this.onDateSelect();
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
      },
      onOpen: (_selectedDates, _dateStr, instance) => {
        setAriaOptions(this.element, this.mode);
        this.flatpickrPosition = setFlatpickrPosition(this.element, this.mode);
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
        this.getFocusedInput();
      },
      onYearChange: (_selectedDates, _dateStr, instance) => {
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
      },
      onMonthChange: (_selectedDates, _dateStr, instance) => {
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
      },
      onKeyDown: () => {
        setAriaOptions(this.element, this.mode);
      },
    };
    this.firstPicker = flatpickr(`.${this.rangePickerId}-1-container`, Object.assign(Object.assign({}, config), { mode: "single", appendTo: this.element.querySelector(`.${this.rangePickerId}-1-wrapper`) }));
    this.lastPicker = flatpickr(`.${this.rangePickerId}-2-container`, Object.assign(Object.assign({}, config), { mode: "single", appendTo: this.element.querySelector(`.${this.rangePickerId}-2-wrapper`) }));
    this.element.querySelectorAll(".flatpickr-weekday").forEach((element) => {
      element.innerHTML = element.innerHTML.trim().charAt(0);
    });
  }
  onDateSelect() {
    let firstInputActive = this.activeInput === "start-input";
    let firstDate = this.firstPicker.selectedDates[0];
    let lastDate = this.lastPicker.selectedDates[0];
    if (+firstDate > +lastDate) {
      if (firstInputActive) {
        this.firstInputError = true;
        this.printDate(null, lastDate || null);
      }
      else {
        this.lastInputError = true;
        this.printDate(firstDate || null, null);
      }
    }
    else {
      this.lastInputError = false;
      this.firstInputError = false;
      this.printDate(firstDate || null, lastDate || null);
    }
  }
  disableDates(date, index) {
    let calendar = this.element.getElementsByClassName("flatpickr-calendar")[index];
    Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach((element) => {
      let calendarDate = this.getDateWithoutTime(this.replaceMonths(element.ariaLabel, null));
      let breakpoint = this.getDateWithoutTime(date);
      let inRange = index === 0 ? calendarDate > breakpoint : calendarDate < breakpoint;
      if (inRange) {
        element.classList.toggle("flatpickr-disabled", true);
      }
      else {
        element.classList.toggle("flatpickr-disabled", false);
      }
    });
    setAriaOptions(this.element, this.mode);
  }
  formatDate(date) {
    if (this.mode === ZRangePickerMode.date) {
      return `${flatpickr.formatDate(date, "d-m-Y")}`;
    }
    else {
      return `${flatpickr.formatDate(date, "d-m-Y - H:i")}`;
    }
  }
  printDate(firstDate, lastDate) {
    let firstDateString = firstDate ? this.formatDate(firstDate) : null;
    let lastDateString = lastDate ? this.formatDate(lastDate) : null;
    this.dateSelect.emit([firstDateString, lastDateString]);
  }
  getTime() {
    let hour = this.element.getElementsByClassName("flatpickr-hour")[0].value;
    let minutes = this.element.getElementsByClassName("flatpickr-minute")[0].value;
    return `${hour}:${minutes}`;
  }
  getDateWithoutTime(date) {
    let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0);
    return newDate;
  }
  /** Replace month word to month number */
  replaceMonths(date, time) {
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
    return new Date(parseInt(pieces[2]), parseInt(pieces[1]) - 1, parseInt(pieces[0]), time ? parseInt(time.split(":")[0]) : 0, time ? parseInt(time.split(":")[1]) : 0);
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
  /** Set style of the days between the two selected dates */
  setRangeStyle(index) {
    Array.from(this.element.getElementsByClassName("flatpickr-calendar")).forEach((element) => {
      Array.from(element.getElementsByClassName("flatpickr-day")).forEach((element) => {
        let hasFirstDate = this.firstPicker.selectedDates.length === 1;
        let hasLastDate = this.lastPicker.selectedDates.length === 1;
        let firstDate;
        let lastDate;
        let date = this.getDateWithoutTime(this.replaceMonths(element.ariaLabel, null));
        if (hasFirstDate) {
          firstDate = this.getDateWithoutTime(this.firstPicker.selectedDates[0]);
          if (+date === +firstDate) {
            element.classList.toggle("startRange", true);
          }
          else {
            element.classList.toggle("startRange", false);
          }
        }
        if (hasLastDate) {
          lastDate = this.getDateWithoutTime(this.lastPicker.selectedDates[0]);
          if (+date === +lastDate) {
            element.classList.toggle("endRange", true);
          }
          else {
            element.classList.toggle("endRange", false);
          }
        }
        if (hasFirstDate && hasLastDate) {
          if (date > firstDate && date < lastDate) {
            element.classList.toggle("inRange", true);
          }
          else {
            element.classList.toggle("inRange", false);
          }
        }
        if (index === 0 && hasLastDate) {
          this.disableDates(this.lastPicker.selectedDates[0], index);
        }
        if (index === 1 && hasFirstDate) {
          this.disableDates(this.firstPicker.selectedDates[0], index);
        }
      });
    });
  }
  onStopTyping(value) {
    let text = value.detail.value.replace("/", "-");
    let englishData = text.split("-");
    let time = this.mode === ZRangePickerMode.dateTime ? `T${englishData[3]}:00` : "";
    let englishParsedData = `${englishData[2]}-${englishData[1]}-${englishData[0]}${time}`
      .split(" ")
      .join("");
    let isValidDate = validateDate(text, this.mode === ZRangePickerMode.dateTime);
    let date = Date.parse(englishParsedData).toString();
    if (this.activeInput === "start-input") {
      if (text === "") {
        this.firstInputError = false;
        this.firstPicker.setDate([]);
        this.printDate(null, this.lastPicker.selectedDates[0] || null);
      }
      else if (!isValidDate) {
        this.firstInputError = true;
        this.printDate(null, this.lastPicker.selectedDates[0] || null);
      }
      else if (isValidDate) {
        if (this.lastPicker.selectedDates.length === 1) {
          if (+date <= +this.lastPicker.selectedDates[0]) {
            this.firstInputError = false;
            this.firstPicker.setDate([text]);
            this.printDate(new Date(englishParsedData), this.lastPicker.selectedDates[0]);
          }
          else {
            this.firstInputError = true;
            this.printDate(null, this.lastPicker.selectedDates[0]);
          }
        }
        else {
          this.firstInputError = false;
          this.firstPicker.setDate([text]);
          this.printDate(new Date(englishParsedData), null);
        }
      }
    }
    else {
      if (text === "") {
        this.lastInputError = false;
        this.lastPicker.setDate([]);
        this.printDate(this.firstPicker.selectedDates[0] || null, null);
      }
      else if (!isValidDate) {
        this.lastInputError = true;
        this.printDate(this.firstPicker.selectedDates[0] || null, null);
      }
      else if (isValidDate) {
        if (this.firstPicker.selectedDates.length === 1) {
          if (+date >= +this.firstPicker.selectedDates[0]) {
            this.lastInputError = false;
            this.lastPicker.setDate([text]);
            this.printDate(this.firstPicker.selectedDates[0], new Date(englishParsedData));
          }
          else {
            this.lastInputError = true;
            this.printDate(this.firstPicker.selectedDates[0], null);
          }
        }
        else {
          this.lastInputError = false;
          this.lastPicker.setDate([text]);
          this.printDate(null, new Date(englishParsedData));
        }
      }
    }
    this.setRangeStyle(this.activeInput === "start-input" ? 0 : 1);
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
      value: "",
    };
    return (h("div", { class: {
        ["range-pickers-container"]: true,
        [this.mode]: true,
        [this.activeInput]: true,
        [this.flatpickrPosition]: true,
      } },
      h("div", { class: `${this.rangePickerId}-1-wrapper` },
        h("div", { class: `${this.rangePickerId}-1-container` },
          h("z-input", Object.assign({}, zInputProps, { "data-input": "data-input", class: `start-input ${this.rangePickerId}-1`, ariaLabel: this.firstAriaLabel, label: this.firstLabel, status: this.firstInputError && InputStatusEnum.error, onStartTyping: () => {
              this.firstInputError = false;
            } })))),
      h("div", { class: `${this.rangePickerId}-2-wrapper` },
        h("div", { class: `${this.rangePickerId}-2-container` },
          h("z-input", Object.assign({}, zInputProps, { "data-input": "data-input", class: `end-input ${this.rangePickerId}-2`, ariaLabel: this.secondAriaLabel, label: this.secondLabel, status: this.lastInputError && InputStatusEnum.error, onStartTyping: () => {
              this.lastInputError = false;
            } }))))));
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
        "original": "ZRangePickerMode",
        "resolved": "ZRangePickerMode.date | ZRangePickerMode.dateTime",
        "references": {
          "ZRangePickerMode": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "[Optional] datepicker mode: date or datetime"
      },
      "attribute": "mode",
      "reflect": false,
      "defaultValue": "ZRangePickerMode.date"
    }
  }; }
  static get states() { return {
    "flatpickrPosition": {},
    "activeInput": {},
    "firstInputError": {},
    "lastInputError": {}
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
  static get watchers() { return [{
      "propName": "mode",
      "methodName": "watchMode"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": "body",
      "capture": true,
      "passive": false
    }, {
      "name": "keyup",
      "method": "handleKeyDown",
      "target": "body",
      "capture": true,
      "passive": false
    }]; }
}
