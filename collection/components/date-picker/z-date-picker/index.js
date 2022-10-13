import { h, } from "@stencil/core";
import flatpickr from "flatpickr";
import { Italian } from "flatpickr/dist/l10n/it.js";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import classNames from "classnames";
import { InputTypeEnum, ZDatePickerMode, ZDatePickerPosition, } from "../../../beans";
import { setAriaOptions, setFlatpickrPosition, validateDate } from "../utils";
export class ZDatePicker {
  constructor() {
    /** [Optional] datepicker mode: date, datetime, only months */
    this.mode = ZDatePickerMode.date;
    this.flatpickrPosition = ZDatePickerPosition.bottom;
    this.inputError = false;
  }
  watchMode() {
    this.setupPickers();
  }
  emitDateSelect(date) {
    this.dateSelect.emit(date);
  }
  handleKeyDown(ev) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (ev.key === "Escape") {
      (_a = this.picker) === null || _a === void 0 ? void 0 : _a.close();
    }
    if (ev.key === "Enter" || ev.key === " ") {
      !this.hasChildren && ((_b = this.picker) === null || _b === void 0 ? void 0 : _b.open());
      let isCrossIconEntered = document.activeElement.classList.contains("resetIcon");
      if (isCrossIconEntered) {
        this.inputError = false;
        (_c = this.picker) === null || _c === void 0 ? void 0 : _c.setDate([]);
        this.dateSelect.emit(null);
      }
      let flatpickrDayPressed = document.activeElement.classList.contains("flatpickr-day");
      if (flatpickrDayPressed) {
        //Sistemare il toggle
      }
      let isPrevArrowEntered = document.activeElement.classList.contains("flatpickr-prev-month");
      let isNextArrowEntered = document.activeElement.classList.contains("flatpickr-next-month");
      let arrowPressed = isPrevArrowEntered || isNextArrowEntered;
      arrowPressed && ev.key === " " && ev.preventDefault();
      if (this.mode === ZDatePickerMode.months) {
        isPrevArrowEntered &&
          ((_d = this.picker) === null || _d === void 0 ? void 0 : _d.changeYear(this.picker.currentYear - 1));
        isNextArrowEntered &&
          ((_e = this.picker) === null || _e === void 0 ? void 0 : _e.changeYear(this.picker.currentYear + 1));
        if (arrowPressed) {
          let calendar = this.element.getElementsByClassName("flatpickr-calendar")[0];
          let months = calendar === null || calendar === void 0 ? void 0 : calendar.querySelectorAll(".flatpickr-monthSelect-month");
          months === null || months === void 0 ? void 0 : months.forEach((element) => {
            var _a;
            element.setAttribute("aria-label", `${element.innerHTML} ${(_a = this.picker) === null || _a === void 0 ? void 0 : _a.currentYear}`);
          });
          //Force check of the current day
          months &&
            Array.from(months).forEach((element, index) => {
              var _a;
              let curMonth = new Date().getMonth();
              let curYear = new Date().getFullYear();
              if (index === curMonth) {
                if (((_a = this.picker) === null || _a === void 0 ? void 0 : _a.currentYear) === curYear) {
                  element.setAttribute("class", "flatpickr-monthSelect-month today");
                }
                else {
                  element.setAttribute("class", "flatpickr-monthSelect-month");
                }
              }
            });
        }
      }
      else {
        isPrevArrowEntered && ((_f = this.picker) === null || _f === void 0 ? void 0 : _f.changeMonth(-1));
        isNextArrowEntered && ((_g = this.picker) === null || _g === void 0 ? void 0 : _g.changeMonth(1));
      }
    }
  }
  componentWillLoad() {
    let customToggle = this.element.querySelector("[slot=toggle]");
    this.hasChildren = !!customToggle;
    this.hasChildren && customToggle.setAttribute("data-toggle", "data-toggle");
  }
  componentDidLoad() {
    this.setupPickers();
  }
  setupPickers() {
    const classToAppend = this.hasChildren
      ? `${this.datePickerId}-hidden`
      : `${this.datePickerId}-container`;
    this.picker = flatpickr(`.${classToAppend}`, {
      appendTo: this.element.children[0],
      enableTime: this.mode === ZDatePickerMode.dateTime,
      locale: Italian,
      allowInput: true,
      dateFormat: this.mode === ZDatePickerMode.dateTime ? "d-m-Y - H:i" : "d-m-Y",
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
      wrap: true,
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
  formatDate(date) {
    if (this.mode === ZDatePickerMode.date) {
      return `${flatpickr.formatDate(date, "d-m-Y")}`;
    }
    else if (this.mode === ZDatePickerMode.months) {
      return `${flatpickr.formatDate(date, "m-Y")}`;
    }
    else {
      return `${flatpickr.formatDate(date, "d-m-Y - H:i")}`;
    }
  }
  onStopTyping(value) {
    let text = value.detail.value;
    if (this.mode === ZDatePickerMode.months) {
      text = "01-".concat(value.detail.value);
    }
    let englishData = text.split("-");
    let time = this.mode === ZDatePickerMode.dateTime ? `T${englishData[3]}:00` : "";
    let englishParsedData = `${englishData[2]}-${englishData[1]}-${englishData[0]}${time}`
      .split(" ")
      .join("");
    let isValidDate = validateDate(englishParsedData, this.mode === ZDatePickerMode.dateTime);
    if (text === "") {
      this.inputError = false;
      this.picker.setDate([]);
      this.dateSelect.emit(null);
    }
    else if (!isValidDate) {
      this.inputError = true;
      this.dateSelect.emit(null);
    }
    else if (isValidDate) {
      this.inputError = false;
      this.picker.setDate([value.detail.value]);
      this.dateSelect.emit(this.formatDate(new Date(englishParsedData)));
    }
  }
  renderSlottedContent() {
    return (h("div", { class: `${this.datePickerId}-hidden` }, h("input", { class: "hidden-input", "data-input": true }), h("slot", { name: "toggle" })));
  }
  renderZInput() {
    return (h("div", { class: `${this.datePickerId}-container` }, h("z-input", { "data-input": "data-input", ariaLabel: this.ariaLabel, label: this.label, class: classNames(this.datePickerId), type: InputTypeEnum.text, icon: "event", message: false, tabindex: "0", value: "", onStopTyping: (value) => {
        this.onStopTyping(value);
      }, onStartTyping: () => {
        this.inputError = false;
      } })));
  }
  render() {
    return (h("div", { class: classNames("flatpickr-toggle-container", this.flatpickrPosition, this.mode) }, this.hasChildren ? this.renderSlottedContent() : this.renderZInput()));
  }
  static get is() { return "z-date-picker"; }
  static get originalStyleUrls() {
    return {
      "$": ["../styles.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["../styles.css"]
    };
  }
  static get properties() {
    return {
      "datePickerId": {
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
        "attribute": "date-picker-id",
        "reflect": false
      },
      "ariaLabel": {
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
          "text": "z-input aria label"
        },
        "attribute": "aria-label",
        "reflect": false
      },
      "label": {
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
          "text": "z-input label"
        },
        "attribute": "label",
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
    };
  }
  static get states() {
    return {
      "flatpickrPosition": {},
      "inputError": {}
    };
  }
  static get events() {
    return [{
        "method": "dateSelect",
        "name": "dateSelect",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "emitted when date changes, returns selected date"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "mode",
        "methodName": "watchMode"
      }];
  }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeyDown",
        "target": "body",
        "capture": true,
        "passive": false
      }];
  }
}
