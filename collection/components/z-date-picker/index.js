import { Component, Prop, Element, h, Event, State, } from "@stencil/core";
import flatpickr from "flatpickr";
import { Italian } from "flatpickr/dist/l10n/it.js";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import classNames from "classnames";
import { ZDatePickerMode, ZDatePickerModeValues, ZDatePickerPosition, } from "../../beans";
export class ZDatePicker {
  constructor() {
    /** [Optional] datepicker mode: date, datetime, only months */
    this.mode = ZDatePickerMode.date;
    this.flatpickrPosition = ZDatePickerPosition.bottom;
  }
  emitDateSelect(date) {
    this.dateSelect.emit(date);
  }
  componentWillLoad() {
    let customToggle = this.element.querySelector("[slot=toggle]");
    this.hasChildren = !!customToggle;
    this.hasChildren && customToggle.setAttribute("data-toggle", "data-toggle");
  }
  componentDidLoad() {
    flatpickr(`.${this.datepickerid}`, {
      appendTo: this.element.children[0],
      enableTime: this.mode === ZDatePickerMode.dateTime,
      locale: Italian,
      dateFormat: this.mode === ZDatePickerMode.dateTime ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: this.mode === ZDatePickerMode.months ? "F Y" : "d F Y",
      minuteIncrement: 1,
      time_24hr: true,
      onChange: (_selectedDates, dateStr) => {
        this.emitDateSelect(dateStr);
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
  setFlatpickrPosition() {
    const toggleHeight = this.element.children[0].clientHeight;
    this.element.style.setProperty("--toggle-height", `${toggleHeight}px`);
    const flatpickrHeight = this.mode === ZDatePickerMode.dateTime
      ? ZDatePickerModeValues.DATETIME
      : this.mode === ZDatePickerMode.months
        ? ZDatePickerModeValues.MONTHS
        : ZDatePickerModeValues.DATE;
    const bottom = this.element.getBoundingClientRect().bottom;
    const overflowBottom = bottom + flatpickrHeight > window.innerHeight;
    const overflowTop = bottom - flatpickrHeight - toggleHeight < 0;
    if (!overflowTop && overflowBottom) {
      this.flatpickrPosition = ZDatePickerPosition.top;
    }
    else {
      this.flatpickrPosition = ZDatePickerPosition.bottom;
    }
  }
  renderSlottedContent() {
    return (h("div", null,
      h("input", { class: "hidden-input", "data-input": true }),
      h("slot", { name: "toggle" })));
  }
  renderZInput() {
    return (h("z-input", { class: classNames(this.datepickerid), type: "text", name: "datepicker", icon: "event", hasmessage: false }));
  }
  render() {
    return (h("div", { class: classNames("flatpickr-toggle-container", this.hasChildren && this.datepickerid, this.flatpickrPosition, this.mode), onClick: () => this.setFlatpickrPosition() }, this.hasChildren ? this.renderSlottedContent() : this.renderZInput()));
  }
  static get is() { return "z-date-picker"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "datepickerid": {
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
      "attribute": "datepickerid",
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
            "path": "../../beans"
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
}
