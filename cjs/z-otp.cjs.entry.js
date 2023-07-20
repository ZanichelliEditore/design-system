'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-28bcd719.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}.digits-container{display:flex;justify-content:flex-start}input{width:calc(var(--space-unit) * 5);height:72px;box-sizing:border-box;padding:0;caret-color:transparent;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:32px;font-weight:300;text-align:center}input.error{border:1px solid;border-color:var(--color-error01);background-color:var(--color-error-inverse);border-radius:4px}input:not(:last-of-type){margin-right:var(--space-unit)}@media only screen and (min-width: 768px){input:not(:last-of-type){margin-right:calc(var(--space-unit) * 2)}}@media only screen and (min-width: 1025px){input{width:calc(var(--space-unit) * 6)}}";

const ZOtp = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.otpChange = index.createEvent(this, "otpChange", 7);
    /** Input number */
    this.inputNum = 6;
  }
  emitInputChange(value) {
    this.otpChange.emit({ value });
  }
  componentWillLoad() {
    this.otp = [...Array(this.inputNum)];
    this.otpRef = [...Array(this.inputNum)];
  }
  render() {
    return (index.h("div", { class: "otp-container" }, index.h("div", { class: "digits-container" }, this.otp.map((_val, i) => (index.h("input", { class: this.status == index$1.InputStatus.ERROR ? "error" : null, onKeyDown: (e) => {
        if (e.keyCode > 47) {
          this.otpRef[i].value = "";
        }
      }, onKeyUp: (e) => {
        if (e.keyCode > 47) {
          i < this.inputNum - 1 && this.otpRef[i + 1].focus();
        }
      }, onInput: (e) => {
        this.otp[i] = e.target.value;
        this.emitInputChange(this.otp.join(""));
      }, type: "text", minlength: "1", maxlength: "1", autoComplete: "off", ref: (el) => (this.otpRef[i] = el) })))), index.h("z-input-message", { message: this.message, status: this.status })));
  }
};
ZOtp.style = stylesCss;

exports.z_otp = ZOtp;
