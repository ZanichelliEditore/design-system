import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as commonjsGlobal, f as flatpickr, i as it, s as setAriaOptions, a as setFlatpickrPosition, v as validateDate } from './utils2.js';
import { y as ZDatePickerMode, F as ZDatePickerPosition, I as InputType } from './index2.js';
import { d as defineCustomElement$4 } from './index9.js';
import { d as defineCustomElement$3 } from './index10.js';
import { d as defineCustomElement$2 } from './index11.js';

var monthSelect = {exports: {}};

(function (module, exports) {
(function (global, factory) {
    module.exports = factory() ;
}(commonjsGlobal, (function () {
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };

    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function getEventTarget(event) {
        try {
            if (typeof event.composedPath === "function") {
                var path = event.composedPath();
                return path[0];
            }
            return event.target;
        }
        catch (error) {
            return event.target;
        }
    }

    var defaultConfig = {
        shorthand: false,
        dateFormat: "F Y",
        altFormat: "F Y",
        theme: "light",
    };
    function monthSelectPlugin(pluginConfig) {
        var config = __assign(__assign({}, defaultConfig), pluginConfig);
        return function (fp) {
            fp.config.dateFormat = config.dateFormat;
            fp.config.altFormat = config.altFormat;
            var self = { monthsContainer: null };
            function clearUnnecessaryDOMElements() {
                if (!fp.rContainer)
                    return;
                clearNode(fp.rContainer);
                for (var index = 0; index < fp.monthElements.length; index++) {
                    var element = fp.monthElements[index];
                    if (!element.parentNode)
                        continue;
                    element.parentNode.removeChild(element);
                }
            }
            function build() {
                if (!fp.rContainer)
                    return;
                self.monthsContainer = fp._createElement("div", "flatpickr-monthSelect-months");
                self.monthsContainer.tabIndex = -1;
                buildMonths();
                fp.rContainer.appendChild(self.monthsContainer);
                fp.calendarContainer.classList.add("flatpickr-monthSelect-theme-" + config.theme);
            }
            function buildMonths() {
                if (!self.monthsContainer)
                    return;
                clearNode(self.monthsContainer);
                var frag = document.createDocumentFragment();
                for (var i = 0; i < 12; i++) {
                    var month = fp.createDay("flatpickr-monthSelect-month", new Date(fp.currentYear, i), 0, i);
                    if (month.dateObj.getMonth() === new Date().getMonth() &&
                        month.dateObj.getFullYear() === new Date().getFullYear())
                        month.classList.add("today");
                    month.textContent = monthToStr(i, config.shorthand, fp.l10n);
                    month.addEventListener("click", selectMonth);
                    frag.appendChild(month);
                }
                self.monthsContainer.appendChild(frag);
                if (fp.config.minDate &&
                    fp.currentYear === fp.config.minDate.getFullYear())
                    fp.prevMonthNav.classList.add("flatpickr-disabled");
                else
                    fp.prevMonthNav.classList.remove("flatpickr-disabled");
                if (fp.config.maxDate &&
                    fp.currentYear === fp.config.maxDate.getFullYear())
                    fp.nextMonthNav.classList.add("flatpickr-disabled");
                else
                    fp.nextMonthNav.classList.remove("flatpickr-disabled");
            }
            function bindEvents() {
                fp._bind(fp.prevMonthNav, "click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    fp.changeYear(fp.currentYear - 1);
                    selectYear();
                    buildMonths();
                });
                fp._bind(fp.nextMonthNav, "click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    fp.changeYear(fp.currentYear + 1);
                    selectYear();
                    buildMonths();
                });
                fp._bind(self.monthsContainer, "mouseover", function (e) {
                    if (fp.config.mode === "range")
                        fp.onMouseOver(getEventTarget(e), "flatpickr-monthSelect-month");
                });
            }
            function setCurrentlySelected() {
                if (!fp.rContainer)
                    return;
                if (!fp.selectedDates.length)
                    return;
                var currentlySelected = fp.rContainer.querySelectorAll(".flatpickr-monthSelect-month.selected");
                for (var index = 0; index < currentlySelected.length; index++) {
                    currentlySelected[index].classList.remove("selected");
                }
                var targetMonth = fp.selectedDates[0].getMonth();
                var month = fp.rContainer.querySelector(".flatpickr-monthSelect-month:nth-child(" + (targetMonth + 1) + ")");
                if (month) {
                    month.classList.add("selected");
                }
            }
            function selectYear() {
                var selectedDate = fp.selectedDates[0];
                if (selectedDate) {
                    selectedDate = new Date(selectedDate);
                    selectedDate.setFullYear(fp.currentYear);
                    if (fp.config.minDate && selectedDate < fp.config.minDate) {
                        selectedDate = fp.config.minDate;
                    }
                    if (fp.config.maxDate && selectedDate > fp.config.maxDate) {
                        selectedDate = fp.config.maxDate;
                    }
                    fp.currentYear = selectedDate.getFullYear();
                }
                fp.currentYearElement.value = String(fp.currentYear);
                if (fp.rContainer) {
                    var months = fp.rContainer.querySelectorAll(".flatpickr-monthSelect-month");
                    months.forEach(function (month) {
                        month.dateObj.setFullYear(fp.currentYear);
                        if ((fp.config.minDate && month.dateObj < fp.config.minDate) ||
                            (fp.config.maxDate && month.dateObj > fp.config.maxDate)) {
                            month.classList.add("flatpickr-disabled");
                        }
                        else {
                            month.classList.remove("flatpickr-disabled");
                        }
                    });
                }
                setCurrentlySelected();
            }
            function selectMonth(e) {
                e.preventDefault();
                e.stopPropagation();
                var eventTarget = getEventTarget(e);
                if (!(eventTarget instanceof Element))
                    return;
                if (eventTarget.classList.contains("flatpickr-disabled"))
                    return;
                if (eventTarget.classList.contains("notAllowed"))
                    return; // necessary??
                setMonth(eventTarget.dateObj);
                if (fp.config.closeOnSelect) {
                    var single = fp.config.mode === "single";
                    var range = fp.config.mode === "range" && fp.selectedDates.length === 2;
                    if (single || range)
                        fp.close();
                }
            }
            function setMonth(date) {
                var selectedDate = new Date(fp.currentYear, date.getMonth(), date.getDate());
                var selectedDates = [];
                switch (fp.config.mode) {
                    case "single":
                        selectedDates = [selectedDate];
                        break;
                    case "multiple":
                        selectedDates.push(selectedDate);
                        break;
                    case "range":
                        if (fp.selectedDates.length === 2) {
                            selectedDates = [selectedDate];
                        }
                        else {
                            selectedDates = fp.selectedDates.concat([selectedDate]);
                            selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
                        }
                        break;
                }
                fp.setDate(selectedDates, true);
                setCurrentlySelected();
            }
            var shifts = {
                37: -1,
                39: 1,
                40: 3,
                38: -3,
            };
            function onKeyDown(_, __, ___, e) {
                var shouldMove = shifts[e.keyCode] !== undefined;
                if (!shouldMove && e.keyCode !== 13) {
                    return;
                }
                if (!fp.rContainer || !self.monthsContainer)
                    return;
                var currentlySelected = fp.rContainer.querySelector(".flatpickr-monthSelect-month.selected");
                var index = Array.prototype.indexOf.call(self.monthsContainer.children, document.activeElement);
                if (index === -1) {
                    var target = currentlySelected || self.monthsContainer.firstElementChild;
                    target.focus();
                    index = target.$i;
                }
                if (shouldMove) {
                    self.monthsContainer.children[(12 + index + shifts[e.keyCode]) % 12].focus();
                }
                else if (e.keyCode === 13 &&
                    self.monthsContainer.contains(document.activeElement)) {
                    setMonth(document.activeElement.dateObj);
                }
            }
            function closeHook() {
                var _a;
                if (((_a = fp.config) === null || _a === void 0 ? void 0 : _a.mode) === "range" && fp.selectedDates.length === 1)
                    fp.clear(false);
                if (!fp.selectedDates.length)
                    buildMonths();
            }
            // Help the prev/next year nav honor config.minDate (see 3fa5a69)
            function stubCurrentMonth() {
                config._stubbedCurrentMonth = fp._initialDate.getMonth();
                fp._initialDate.setMonth(config._stubbedCurrentMonth);
                fp.currentMonth = config._stubbedCurrentMonth;
            }
            function unstubCurrentMonth() {
                if (!config._stubbedCurrentMonth)
                    return;
                fp._initialDate.setMonth(config._stubbedCurrentMonth);
                fp.currentMonth = config._stubbedCurrentMonth;
                delete config._stubbedCurrentMonth;
            }
            function destroyPluginInstance() {
                if (self.monthsContainer !== null) {
                    var months = self.monthsContainer.querySelectorAll(".flatpickr-monthSelect-month");
                    for (var index = 0; index < months.length; index++) {
                        months[index].removeEventListener("click", selectMonth);
                    }
                }
            }
            return {
                onParseConfig: function () {
                    fp.config.enableTime = false;
                },
                onValueUpdate: setCurrentlySelected,
                onKeyDown: onKeyDown,
                onReady: [
                    stubCurrentMonth,
                    clearUnnecessaryDOMElements,
                    build,
                    bindEvents,
                    setCurrentlySelected,
                    function () {
                        fp.config.onClose.push(closeHook);
                        fp.loadedPlugins.push("monthSelect");
                    },
                ],
                onDestroy: [
                    unstubCurrentMonth,
                    destroyPluginInstance,
                    function () {
                        fp.config.onClose = fp.config.onClose.filter(function (hook) { return hook !== closeHook; });
                    },
                ],
            };
        };
    }

    return monthSelectPlugin;

})));
}(monthSelect));

const monthSelectPlugin = monthSelect.exports;

const stylesCss = ".flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08)}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9)}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{left:0}.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{right:0}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.dayContainer+.dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57,57,57,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,0.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.flatpickr-monthSelect-months{margin:10px 1px 3px 1px;-ms-flex-wrap:wrap;flex-wrap:wrap}.flatpickr-monthSelect-month{background:none;border:1px solid transparent;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;display:inline-block;font-weight:400;margin:0.5px;justify-content:center;padding:10px;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;text-align:center;width:33%}.flatpickr-monthSelect-month.flatpickr-disabled{color:#eee}.flatpickr-monthSelect-month.flatpickr-disabled:hover,.flatpickr-monthSelect-month.flatpickr-disabled:focus{cursor:not-allowed;background:none !important}.flatpickr-monthSelect-theme-dark{background:#3f4458}.flatpickr-monthSelect-theme-dark .flatpickr-current-month input.cur-year{color:#fff}.flatpickr-monthSelect-theme-dark .flatpickr-months .flatpickr-prev-month,.flatpickr-monthSelect-theme-dark .flatpickr-months .flatpickr-next-month{color:#fff;fill:#fff}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month{color:rgba(255, 255, 255, 0.95)}.flatpickr-monthSelect-month.today{border-color:#959ea9}.flatpickr-monthSelect-month.inRange,.flatpickr-monthSelect-month.inRange.today,.flatpickr-monthSelect-month:hover,.flatpickr-monthSelect-month:focus{background:#e6e6e6;cursor:pointer;outline:0;border-color:#e6e6e6}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.inRange,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month:hover,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month:focus{background:#646c8c;border-color:#646c8c}.flatpickr-monthSelect-month.today:hover,.flatpickr-monthSelect-month.today:focus{background:#959ea9;border-color:#959ea9;color:#fff}.flatpickr-monthSelect-month.selected,.flatpickr-monthSelect-month.startRange,.flatpickr-monthSelect-month.endRange{background-color:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-monthSelect-month.startRange{border-radius:50px 0 0 50px}.flatpickr-monthSelect-month.endRange{border-radius:0 50px 50px 0}.flatpickr-monthSelect-month.startRange.endRange{border-radius:50px}.flatpickr-monthSelect-month.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.selected,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.startRange,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.endRange{background:#80cbc4;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#80cbc4}:host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-range-picker--toggle-height:0}z-date-picker{position:relative}z-date-picker>div>*{cursor:pointer !important}z-range-picker{position:relative}.flatpickr-toggle-container{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.range-pickers-container>div{position:relative}.hidden-input{position:absolute;bottom:0;width:0;height:0;visibility:hidden !important}.flatpickr-calendar::before,.flatpickr-calendar::after{display:none}.flatpickr-calendar{position:absolute !important;top:var(--z-range-picker--toggle-height) !important;left:0 !important;padding-top:calc(var(--space-unit) * 2);border-radius:2px;-webkit-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2);font-family:var(--font-family-sans) !important}.months.top>.flatpickr-calendar{top:-288px !important}.date.top>.flatpickr-calendar,.date.top>div>.flatpickr-calendar{top:-401px !important}.date-time.top>.flatpickr-calendar,.date-time.top>div>.flatpickr-calendar{top:-523px !important}.flatpickr-calendar,.flatpickr-innerContainer,.flatpickr-days,.dayContainer,.flatpickr-rContainer,.flatpickr-monthSelect-months{width:calc(var(--space-unit) * 42) !important;max-width:calc(var(--space-unit) * 42) !important}.flatpickr-monthSelect-months{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 !important;margin:calc(var(--space-unit) * 2) 0 !important}.flatpickr-months{position:relative;height:calc(var(--space-unit) * 6) !important;-ms-flex-align:center;align-items:center;margin-bottom:var(--space-unit) 0 !important}.flatpickr-month{overflow:visible !important;height:calc(var(--space-unit) * 6) !important}.flatpickr-current-month{left:0 !important;display:-ms-flexbox !important;display:flex !important;width:-webkit-fill-available;width:-moz-available;width:fill-available;height:calc(var(--space-unit) * 6);-ms-flex-align:baseline;align-items:baseline;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-top:0}.flatpickr-next-month,.flatpickr-prev-month{position:static !important;display:-ms-flexbox;display:flex;width:calc(var(--space-unit) * 4) !important;height:calc(var(--space-unit) * 4) !important;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 !important}.flatpickr-prev-month{margin-left:var(--space-unit)}.flatpickr-next-month{margin-right:var(--space-unit)}.flatpickr-next-month>svg,.flatpickr-prev-month>svg{width:calc(var(--space-unit) * 2) !important;height:calc(var(--space-unit) * 2) !important;fill:var(--color-primary01)}.flatpickr-next-month:hover,.flatpickr-prev-month:hover,.flatpickr-next-month:focus,.flatpickr-prev-month:focus{border:none !important;border-color:var(--color-primary03) !important;background-color:var(--color-primary03) !important;border-radius:var(--border-radius);color:var(--color-hover-primary) !important;outline:none !important}.flatpickr-next-month:hover svg,.flatpickr-prev-month:hover svg{fill:var(--color-hover-primary) !important}.flatpickr-next-month:active,.flatpickr-prev-month:active{border-color:var(--color-surface01) !important;background-color:var(--color-surface01) !important;border-radius:var(--border-radius);-webkit-box-shadow:var(--shadow-2) !important;box-shadow:var(--shadow-2) !important;color:var(--color-primary01) !important}.flatpickr-next-month:focus svg,.flatpickr-prev-month:focus svg{fill:var(--color-primary01) !important}.flatpickr-monthDropdown-months{width:108px !important;height:calc(var(--space-unit) * 5.5) !important;padding-left:var(--space-unit) !important;background:var(--color-surface01) !important;color:var(--color-default-text) !important;font-size:var(--font-size-3) !important;font-weight:var(--font-rg) !important;outline:1px solid black !important}.flatpickr-monthDropdown-months:hover,.flatpickr-monthDropdown-months:focus{outline:1px solid var(--color-primary01) !important}.flatpickr-current-month>.numInputWrapper{display:-ms-flexbox;display:flex;width:calc(var(--space-unit) * 10);height:calc(var(--space-unit) * 5.5) !important;background:var(--color-surface01) !important;color:var(--color-default-text);outline:1px solid black !important}.flatpickr-current-month>.numInputWrapper:hover,.flatpickr-current-month>.numInputWrapper:focus-within{outline:1px solid var(--color-primary01) !important}.flatpickr-current-month>.numInputWrapper>input{padding:0 calc(var(--space-unit) * 3) 0 var(--space-unit);font-size:var(--font-size-3) !important;font-weight:var(--font-rg) !important;text-align:center}.flatpickr-weekdays{height:calc(var(--space-unit) * 6);border-bottom:1px solid var(--color-surface03)}.flatpickr-weekday{font-size:var(--font-size-3) !important;font-weight:var(--font-rg) !important}.flatpickr-day,.flatpickr-monthSelect-month{width:calc(var(--space-unit) * 6) !important;max-width:100% !important;height:calc(var(--space-unit) * 6) !important;border:none;margin:0 !important;border-radius:0 !important;-webkit-box-shadow:none !important;box-shadow:none !important;font-size:var(--font-size-3) !important;line-height:calc(var(--space-unit) * 6) !important}.flatpickr-day{width:calc(var(--space-unit) * 6) !important;border:none;line-height:calc(var(--space-unit) * 6) !important}.flatpickr-monthSelect-month{width:calc(var(--space-unit) * 14) !important;padding:0 !important;border:2px solid var(--color-surface01) !important;line-height:calc(var(--space-unit) * 5) !important}.flatpickr-day:not(.flatpickr-disabled):hover,.flatpickr-day:not(.flatpickr-disabled):active,.flatpickr-day:not(.flatpickr-disabled):focus,.flatpickr-day:not(.flatpickr-disabled).prevMonthDay:hover,.flatpickr-day:not(.flatpickr-disabled).prevMonthDay:active,.flatpickr-day:not(.flatpickr-disabled).prevMonthDay:focus,.flatpickr-day:not(.flatpickr-disabled).selected:hover,.flatpickr-day:not(.flatpickr-disabled).selected:active,.flatpickr-day:not(.flatpickr-disabled).selected:focus,.flatpickr-monthSelect-month:hover,.flatpickr-monthSelect-month:active,.flatpickr-monthSelect-month:focus{border-color:var(--color-hover-primary) !important;background-color:var(--color-hover-primary) !important;color:var(--color-text-inverse) !important}.flatpickr-day.today,.flatpickr-monthSelect-month.today{border:2px solid var(--color-hover-primary) !important}.flatpickr-day.selected:not(.flatpickr-disabled),.flatpickr-monthSelect-month.selected:not(.flatpickr-disabled){border-color:var(--color-primary01) !important;background-color:var(--color-primary01) !important}.flatpickr-weekday:nth-child(6),.flatpickr-weekday:nth-child(7),.flatpickr-day:nth-child(7n+6),.flatpickr-day:nth-child(7n+7){font-weight:var(--font-sb) !important}.flatpickr-time{display:block;height:90px !important;max-height:90px !important;text-align:left}.flatpickr-time::before{display:block;width:100%;padding-left:var(--space-unit);color:var(--color-default-text) !important;content:\"Orario\";font-size:var(--font-size-1);font-weight:var(--font-sb);text-transform:uppercase}.flatpickr-time.time24hr{margin:calc(var(--space-unit) * 2) !important}.flatpickr-time.time24hr>.numInputWrapper>input:hover,.flatpickr-time.time24hr>.numInputWrapper>input:focus,.flatpickr-time.time24hr>.numInputWrapper:hover{background-color:var(--color-surface01) !important}.flatpickr-time.time24hr>div{width:calc(var(--space-unit) * 10) !important;height:calc(var(--space-unit) * 5.5) !important;margin-right:var(--space-unit) !important;margin-left:var(--space-unit) !important}.flatpickr-time-separator{display:-ms-flexbox;display:flex;height:calc(var(--space-unit) * 5.5) !important;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-weight:unset !important}.flatpickr-minute,.flatpickr-hour{font-size:var(--font-size-3) !important;font-weight:var(--font-rg) !important;outline:1px solid black !important}.numInputWrapper:hover .flatpickr-minute,.numInputWrapper:hover .flatpickr-hour,.flatpickr-minute:focus,.flatpickr-hour:focus{outline:1px solid var(--color-primary01) !important}.arrowUp,.arrowDown{width:calc(var(--space-unit) * 2) !important;height:calc(var(--space-unit) * 2) !important;padding:0 !important;border:none !important;opacity:1 !important}.arrowUp{margin-top:calc(var(--space-unit) / 2) !important;margin-right:calc(var(--space-unit) / 2) !important}.arrowDown{top:auto !important;margin-top:calc(var(--space-unit) * 3) !important;margin-right:calc(var(--space-unit) / 2) !important}.arrowUp:hover,.arrowDown:hover{border-color:var(--color-primary03) !important;background-color:var(--color-primary03) !important;border-radius:var(--border-radius);color:var(--color-hover-primary) !important}.arrowUp:active,.arrowDown:active{border-color:var(--color-surface01) !important;background-color:var(--color-surface01) !important;border-radius:var(--border-radius);-webkit-box-shadow:var(--shadow-2) !important;box-shadow:var(--shadow-2) !important;color:var(--color-primary01) !important}.arrowUp::after,.arrowDown::after{padding:2.5px !important;border:solid var(--color-primary01) !important;border-width:0 1px 1px 0 !important}.arrowUp::after{top:0 !important;margin-top:6px !important;margin-left:5.5px !important;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.arrowDown::after{top:0 !important;left:5.5px !important;margin-top:4px !important;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.flatpickr-day:not(.flatpickr-disabled).inRange:hover,.flatpickr-day:not(.flatpickr-disabled).today.inRange:hover,.flatpickr-day.prevMonthDay:not(.flatpickr-disabled).inRange:hover,.flatpickr-monthSelect-month:not(.flatpickr-disabled).inRange:hover{border-color:var(--color-hover-primary) !important;background-color:var(--color-hover-primary) !important}.flatpickr-day:not(.flatpickr-disabled).inRange,.flatpickr-day:not(.flatpickr-disabled).today.inRange,.flatpickr-day:not(.flatpickr-disabled).prevMonthDay.inRange,.flatpickr-monthSelect-month:not(.flatpickr-disabled).inRange{border-color:var(--color-primary03);background-color:var(--color-primary03)}.flatpickr-day:not(.flatpickr-disabled).startRange,.flatpickr-day:not(.flatpickr-disabled).endRange,.flatpickr-monthSelect-month:not(.flatpickr-disabled).startRange,.flatpickr-monthSelect-month:not(.flatpickr-disabled).endRange{border-color:var(--color-primary01) !important;background-color:var(--color-primary01) !important}.flatpickr-day:not(.flatpickr-disabled).prevMonthDay.selected.startRange,.flatpickr-day:not(.flatpickr-disabled).prevMonthDay.selected.endRange{border-color:var(--color-primary01) !important;background-color:var(--color-primary01) !important}.flatpickr-range.second-input{cursor:pointer}.range-pickers-container{display:-ms-flexbox;display:flex;gap:16px}";
const ZDatePickerStyle0 = stylesCss;

const ZDatePicker$1 = /*@__PURE__*/ proxyCustomElement(class ZDatePicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dateSelect = createEvent(this, "dateSelect", 7);
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
            document.activeElement.classList.contains("flatpickr-day");
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
            locale: it.exports.Italian,
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
    get element() { return this; }
    static get watchers() { return {
        "mode": ["setupPickers"]
    }; }
    static get style() { return ZDatePickerStyle0; }
}, [4, "z-date-picker", {
        "datePickerId": [1, "date-picker-id"],
        "ariaLabel": [1, "aria-label"],
        "label": [1],
        "mode": [1],
        "flatpickrPosition": [32],
        "inputError": [32]
    }, [[18, "keydown", "handleKeyDown"]], {
        "mode": ["setupPickers"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-date-picker", "z-icon", "z-input", "z-input-message"];
    components.forEach(tagName => { switch (tagName) {
        case "z-date-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZDatePicker$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "z-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-input-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZDatePicker = ZDatePicker$1;
const defineCustomElement = defineCustomElement$1;

export { ZDatePicker, defineCustomElement };

//# sourceMappingURL=z-date-picker.js.map