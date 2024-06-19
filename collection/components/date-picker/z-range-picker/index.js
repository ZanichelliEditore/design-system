import { h } from "@stencil/core";
import flatpickr from "flatpickr";
import { Italian } from "flatpickr/dist/l10n/it.js";
import { InputStatus, InputType, ZDatePickerPosition, ZRangePickerMode } from "../../../beans";
import { setAriaOptions, setFlatpickrPosition, validateDate } from "../utils";
export class ZRangePicker {
    constructor() {
        this.rangePickerId = undefined;
        this.firstAriaLabel = undefined;
        this.firstLabel = undefined;
        this.secondAriaLabel = undefined;
        this.secondLabel = undefined;
        this.mode = ZRangePickerMode.DATE;
        this.firstPickerReadOnly = false;
        this.lastPickerReadOnly = false;
        this.firstPickerPlaceholder = "";
        this.lastPickerPlaceholder = "";
        this.flatpickrPosition = ZDatePickerPosition.BOTTOM;
        this.activeInput = "start-input";
        this.firstInputError = false;
        this.lastInputError = false;
    }
    handleClick() {
        this.getFocusedInput();
    }
    handleKeyDown(ev) {
        var _a, _b, _c, _d, _e, _f;
        const currentPicker = this.activeInput === "start-input" ? this.firstPicker : this.lastPicker;
        this.getFocusedInput();
        if (ev.key === "Escape") {
            document.activeElement.classList.contains(`${this.rangePickerId}-1`) && ((_a = this.firstPicker) === null || _a === void 0 ? void 0 : _a.close());
            document.activeElement.classList.contains(`${this.rangePickerId}-2`) && ((_b = this.lastPicker) === null || _b === void 0 ? void 0 : _b.close());
        }
        if (ev.key === "Enter" || ev.key === " ") {
            if (document.activeElement.classList.contains(`${this.rangePickerId}-1`) ||
                document.activeElement.classList.contains(`${this.rangePickerId}-2`)) {
                currentPicker === null || currentPicker === void 0 ? void 0 : currentPicker.open();
            }
            const isCrossIconEntered = document.activeElement.classList.contains("reset-icon");
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
            const isPrevArrowEntered = document.activeElement.classList.contains("flatpickr-prev-month");
            const isNextArrowEntered = document.activeElement.classList.contains("flatpickr-next-month");
            const arrowPressed = isPrevArrowEntered || isNextArrowEntered;
            arrowPressed && ev.key === " " && ev.preventDefault();
            isPrevArrowEntered && (currentPicker === null || currentPicker === void 0 ? void 0 : currentPicker.changeMonth(-1));
            isNextArrowEntered && (currentPicker === null || currentPicker === void 0 ? void 0 : currentPicker.changeMonth(1));
        }
    }
    componentDidLoad() {
        this.setupPickers();
    }
    setupFirstPickersReadOnly() {
        var _a;
        (_a = this.firstPicker) === null || _a === void 0 ? void 0 : _a.set("clickOpens", !this.firstPickerReadOnly);
    }
    setupLastPickersReadOnly() {
        var _a;
        (_a = this.lastPicker) === null || _a === void 0 ? void 0 : _a.set("clickOpens", !this.lastPickerReadOnly);
    }
    setupPickers() {
        const config = {
            enableTime: this.mode === ZRangePickerMode.DATE_TIME,
            locale: Italian,
            allowInput: true,
            wrap: true,
            dateFormat: this.mode === ZRangePickerMode.DATE_TIME ? "d-m-Y - H:i" : "d-m-Y",
            ariaDateFormat: "d F Y",
            minuteIncrement: 1,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            time_24hr: true,
            onValueUpdate: () => {
                const firstInputActive = this.activeInput === "start-input";
                const firstDate = this.firstPicker.selectedDates[0];
                const lastDate = this.lastPicker.selectedDates[0];
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
        this.firstPicker = flatpickr(`.${this.rangePickerId}-1-container`, Object.assign(Object.assign({}, Object.assign(Object.assign({}, config), { clickOpens: !this.firstPickerReadOnly })), { mode: "single", appendTo: this.element.querySelector(`.${this.rangePickerId}-1-wrapper`) }));
        this.lastPicker = flatpickr(`.${this.rangePickerId}-2-container`, Object.assign(Object.assign({}, Object.assign(Object.assign({}, config), { clickOpens: !this.lastPickerReadOnly })), { mode: "single", appendTo: this.element.querySelector(`.${this.rangePickerId}-2-wrapper`) }));
        this.element.querySelectorAll(".flatpickr-weekday").forEach((element) => {
            element.innerHTML = element.innerHTML.trim().charAt(0);
        });
    }
    onDateSelect() {
        const firstInputActive = this.activeInput === "start-input";
        const firstDate = this.firstPicker.selectedDates[0];
        const lastDate = this.lastPicker.selectedDates[0];
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
        const calendar = this.element.getElementsByClassName("flatpickr-calendar")[index];
        Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach((element) => {
            const calendarDate = this.getDateWithoutTime(this.replaceMonths(element.ariaLabel, null));
            const breakpoint = this.getDateWithoutTime(date);
            const inRange = index === 0 ? calendarDate > breakpoint : calendarDate < breakpoint;
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
        if (this.mode === ZRangePickerMode.DATE) {
            return `${flatpickr.formatDate(date, "d-m-Y")}`;
        }
        return `${flatpickr.formatDate(date, "d-m-Y - H:i")}`;
    }
    printDate(firstDate, lastDate) {
        const firstDateString = firstDate ? this.formatDate(firstDate) : null;
        const lastDateString = lastDate ? this.formatDate(lastDate) : null;
        this.dateSelect.emit([firstDateString, lastDateString]);
    }
    getDateWithoutTime(date) {
        const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0);
        return newDate;
    }
    /** Replace month word to month number */
    replaceMonths(date, time) {
        const month = date.split(" ")[1];
        const months = {
            /* eslint-disable @typescript-eslint/naming-convention */
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
            /* eslint-enable @typescript-eslint/naming-convention */
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
                const hasFirstDate = this.firstPicker.selectedDates.length === 1;
                const hasLastDate = this.lastPicker.selectedDates.length === 1;
                let firstDate;
                let lastDate;
                const date = this.getDateWithoutTime(this.replaceMonths(element.ariaLabel, null));
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
        const text = value.detail.value.replace("/", "-");
        const englishData = text.split("-");
        const time = this.mode === ZRangePickerMode.DATE_TIME ? `T${englishData[3]}:00` : "";
        const englishParsedData = `${englishData[2]}-${englishData[1]}-${englishData[0]}${time}`.split(" ").join("");
        const isValidDate = validateDate(text, this.mode === ZRangePickerMode.DATE_TIME);
        const date = Date.parse(englishParsedData).toString();
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
        else if (text === "") {
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
        this.setRangeStyle(this.activeInput === "start-input" ? 0 : 1);
    }
    render() {
        const zInputProps = {
            type: InputType.TEXT,
            icon: "event",
            tabindex: "0",
            message: false,
            onStopTyping: this.onStopTyping.bind(this),
            value: "",
        };
        return (h("div", { key: 'c503698bd0205fe189c3859dd115f6558dfc9a09', class: {
                ["range-pickers-container"]: true,
                [this.mode]: true,
                [this.activeInput]: true,
                [this.flatpickrPosition]: true,
            } }, h("div", { key: 'ebb4f94bc07bf7141fd1eb42f0dc9155ed563cd0', class: `${this.rangePickerId}-1-wrapper` }, h("div", { key: '924fc4ab0efc18550e96ec6bf51938a3a4335c2c', class: `${this.rangePickerId}-1-container` }, h("z-input", Object.assign({ key: '7aeb9334a243a29401c4a590809d57f8aaefd1b1' }, zInputProps, { placeholder: this.firstPickerPlaceholder, readonly: this.firstPickerReadOnly, "data-input": "data-input", class: `start-input ${this.rangePickerId}-1`, ariaLabel: this.firstAriaLabel, label: this.firstLabel, status: this.firstInputError && InputStatus.ERROR, onStartTyping: () => {
                this.firstInputError = false;
            } })))), h("div", { key: '9aac0744b849283527ba3ad5d81ba760cc1d051e', class: `${this.rangePickerId}-2-wrapper` }, h("div", { key: '16fd5555b561645e206a4cbda09f77dfacd9088a', class: `${this.rangePickerId}-2-container` }, h("z-input", Object.assign({ key: '7b2cbc88fcd73059696f962ecd0870e1a3d9225c' }, zInputProps, { placeholder: this.lastPickerPlaceholder, readonly: this.lastPickerReadOnly, "data-input": "data-input", class: `end-input ${this.rangePickerId}-2`, ariaLabel: this.secondAriaLabel, label: this.secondLabel, status: this.lastInputError && InputStatus.ERROR, onStartTyping: () => {
                this.lastInputError = false;
            } }))))));
    }
    static get is() { return "z-range-picker"; }
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
                    "resolved": "ZRangePickerMode.DATE | ZRangePickerMode.DATE_TIME",
                    "references": {
                        "ZRangePickerMode": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ZRangePickerMode"
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
                "defaultValue": "ZRangePickerMode.DATE"
            },
            "firstPickerReadOnly": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "readonly mode"
                },
                "attribute": "first-picker-read-only",
                "reflect": false,
                "defaultValue": "false"
            },
            "lastPickerReadOnly": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "readonly mode"
                },
                "attribute": "last-picker-read-only",
                "reflect": false,
                "defaultValue": "false"
            },
            "firstPickerPlaceholder": {
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
                    "text": "readonly mode"
                },
                "attribute": "first-picker-placeholder",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "lastPickerPlaceholder": {
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
                    "text": "readonly mode"
                },
                "attribute": "last-picker-placeholder",
                "reflect": false,
                "defaultValue": "\"\""
            }
        };
    }
    static get states() {
        return {
            "flatpickrPosition": {},
            "activeInput": {},
            "firstInputError": {},
            "lastInputError": {}
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
                    "text": "emitted when date changes, returns an array with the two selected dates"
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
                "propName": "firstPickerReadOnly",
                "methodName": "setupFirstPickersReadOnly"
            }, {
                "propName": "lastPickerReadOnly",
                "methodName": "setupLastPickersReadOnly"
            }, {
                "propName": "mode",
                "methodName": "setupPickers"
            }];
    }
    static get listeners() {
        return [{
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
            }];
    }
}
//# sourceMappingURL=index.js.map
