import { Component, Prop, Element, h, Event, Listen, State, } from "@stencil/core";
import flatpickr from "flatpickr";
import { Italian } from "flatpickr/dist/l10n/it.js";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import classNames from "classnames";
import { ZDatePickerMode, ZDatePickerPosition } from "../../../beans";
import { setAriaOptions, setFlatpickrPosition } from "../utils";
export class ZDatePicker {
  constructor() {
    /** [Optional] datepicker mode: date, datetime, only months */
    this.mode = ZDatePickerMode.date;
    this.flatpickrPosition = ZDatePickerPosition.bottom;
  }
  emitDateSelect(date) {
    this.dateSelect.emit(date);
  }
  handleKeyDown(ev) {
    if (ev.key === "Enter" || ev.key === " ") {
      let isPrevArrowEntered = document.activeElement.classList.contains("flatpickr-prev-month");
      let isNextArrowEntered = document.activeElement.classList.contains("flatpickr-next-month");
      let arrowPressed = isPrevArrowEntered || isNextArrowEntered;
      arrowPressed && ev.key === " " && ev.preventDefault();
      if (this.mode === ZDatePickerMode.months) {
        isPrevArrowEntered &&
          this.flatpickrInstance.changeYear(this.flatpickrInstance.currentYear - 1);
        isNextArrowEntered &&
          this.flatpickrInstance.changeYear(this.flatpickrInstance.currentYear + 1);
        if (arrowPressed) {
          let calendar = this.element.getElementsByClassName("flatpickr-calendar")[0];
          let months = calendar.querySelectorAll(".flatpickr-monthSelect-month");
          months.forEach((element) => {
            element.setAttribute("aria-label", `${element.innerHTML} ${this.flatpickrInstance.currentYear}`);
          });
          //Force check of the current day
          Array.from(months).forEach((element, index) => {
            let curMonth = new Date().getMonth();
            let curYear = new Date().getFullYear();
            if (index === curMonth) {
              if (this.flatpickrInstance.currentYear === curYear) {
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
    this.flatpickrInstance = flatpickr(`.${this.datePickerId}`, {
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
    return (h("div", null,
      h("input", { class: "hidden-input", "data-input": true }),
      h("slot", { name: "toggle" })));
  }
  renderZInput() {
    return (h("z-input", { ariaLabel: this.ariaLabel, label: this.label, class: classNames(this.datePickerId), type: "text", icon: "event", message: false, tabindex: "0" }));
  }
  render() {
    return (h("div", { class: classNames("flatpickr-toggle-container", this.hasChildren && this.datePickerId, this.flatpickrPosition, this.mode) }, this.hasChildren ? this.renderSlottedContent() : this.renderZInput()));
  }
  static get is() { return "z-date-picker"; }
  static get originalStyleUrls() { return {
    "$": ["../styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["../styles.css"]
  }; }
  static get properties() { return {
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
  }; }
  static get states() { return {
    "flatpickrPosition": {}
  }; }
  static get events() { return [{
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
    }]; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "keydown",
      "method": "handleKeyDown",
      "target": "body",
      "capture": true,
      "passive": false
    }]; }
}
