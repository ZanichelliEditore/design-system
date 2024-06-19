import { h } from "@stencil/core";
import flatpickr from "flatpickr";
import { Italian } from "flatpickr/dist/l10n/it.js";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import { InputType, ZDatePickerMode, ZDatePickerPosition } from "../../../beans";
import { setAriaOptions, setFlatpickrPosition, validateDate } from "../utils";
export class ZDatePicker {
    constructor() {
        this.datePickerId = undefined;
        this.ariaLabel = "";
        this.label = undefined;
        this.mode = ZDatePickerMode.DATE;
        this.flatpickrPosition = ZDatePickerPosition.BOTTOM;
        this.inputError = false;
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
            const isCrossIconEntered = document.activeElement.classList.contains("reset-icon");
            if (isCrossIconEntered) {
                this.inputError = false;
                (_c = this.picker) === null || _c === void 0 ? void 0 : _c.setDate([]);
                this.dateSelect.emit(null);
            }
            const flatpickrDayPressed = document.activeElement.classList.contains("flatpickr-day");
            if (flatpickrDayPressed) {
                //Sistemare il toggle
            }
            const isPrevArrowEntered = document.activeElement.classList.contains("flatpickr-prev-month");
            const isNextArrowEntered = document.activeElement.classList.contains("flatpickr-next-month");
            const arrowPressed = isPrevArrowEntered || isNextArrowEntered;
            arrowPressed && ev.key === " " && ev.preventDefault();
            if (this.mode === ZDatePickerMode.MONTHS) {
                isPrevArrowEntered && ((_d = this.picker) === null || _d === void 0 ? void 0 : _d.changeYear(this.picker.currentYear - 1));
                isNextArrowEntered && ((_e = this.picker) === null || _e === void 0 ? void 0 : _e.changeYear(this.picker.currentYear + 1));
                if (arrowPressed) {
                    const calendar = this.element.getElementsByClassName("flatpickr-calendar")[0];
                    const months = calendar === null || calendar === void 0 ? void 0 : calendar.querySelectorAll(".flatpickr-monthSelect-month");
                    months === null || months === void 0 ? void 0 : months.forEach((element) => {
                        var _a;
                        element.setAttribute("aria-label", `${element.innerHTML} ${(_a = this.picker) === null || _a === void 0 ? void 0 : _a.currentYear}`);
                    });
                    //Force check of the current day
                    months &&
                        Array.from(months).forEach((element, index) => {
                            var _a;
                            const curMonth = new Date().getMonth();
                            const curYear = new Date().getFullYear();
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
        const customToggle = this.element.querySelector("[slot=toggle]");
        this.hasChildren = !!customToggle;
        this.hasChildren && customToggle.setAttribute("data-toggle", "data-toggle");
    }
    componentDidLoad() {
        this.setupPickers();
    }
    setupPickers() {
        const classToAppend = this.hasChildren ? `${this.datePickerId}-hidden` : `${this.datePickerId}-container`;
        this.picker = flatpickr(`.${classToAppend}`, {
            appendTo: this.element.children[0],
            enableTime: this.mode === ZDatePickerMode.DATE_TIME,
            locale: Italian,
            allowInput: true,
            dateFormat: this.mode === ZDatePickerMode.DATE_TIME ? "d-m-Y - H:i" : "d-m-Y",
            ariaDateFormat: this.mode === ZDatePickerMode.MONTHS ? "F Y" : "d F Y",
            minuteIncrement: 1,
            // eslint-disable-next-line @typescript-eslint/naming-convention
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
            plugins: this.mode === ZDatePickerMode.MONTHS && [
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
        if (this.mode === ZDatePickerMode.DATE) {
            return `${flatpickr.formatDate(date, "d-m-Y")}`;
        }
        else if (this.mode === ZDatePickerMode.MONTHS) {
            return `${flatpickr.formatDate(date, "m-Y")}`;
        }
        return `${flatpickr.formatDate(date, "d-m-Y - H:i")}`;
    }
    onStopTyping(value) {
        let text = value.detail.value;
        if (this.mode === ZDatePickerMode.MONTHS) {
            text = "01-".concat(value.detail.value);
        }
        const englishData = text.split("-");
        const time = this.mode === ZDatePickerMode.DATE_TIME ? `T${englishData[3]}:00` : "";
        const englishParsedData = `${englishData[2]}-${englishData[1]}-${englishData[0]}${time}`.split(" ").join("");
        const isValidDate = validateDate(englishParsedData, this.mode === ZDatePickerMode.DATE_TIME);
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
        return (h("div", { class: `${this.datePickerId}-container` }, h("z-input", { "data-input": "data-input", ariaLabel: this.ariaLabel, label: this.label, class: this.datePickerId, type: InputType.TEXT, icon: "event", message: false, tabindex: "0", value: "", onStopTyping: (value) => {
                this.onStopTyping(value);
            }, onStartTyping: () => {
                this.inputError = false;
            } })));
    }
    render() {
        return (h("div", { key: 'e36383db1da5908e5c61fcc543ff6006a0b5d27a', class: {
                "flatpickr-toggle-container": true,
                [this.flatpickrPosition]: true,
                [this.mode]: true,
            } }, this.hasChildren ? this.renderSlottedContent() : this.renderZInput()));
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "z-input aria label"
                },
                "attribute": "aria-label",
                "reflect": false,
                "defaultValue": "\"\""
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
                    "resolved": "ZDatePickerMode.DATE | ZDatePickerMode.DATE_TIME | ZDatePickerMode.MONTHS",
                    "references": {
                        "ZDatePickerMode": {
                            "location": "import",
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::ZDatePickerMode"
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
                "defaultValue": "ZDatePickerMode.DATE"
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
                "methodName": "setupPickers"
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
//# sourceMappingURL=index.js.map
