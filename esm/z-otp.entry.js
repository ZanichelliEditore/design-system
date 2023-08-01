import { r as registerInstance, c as createEvent, h } from './index-a2ca4b97.js';
import { f as InputStatus } from './index-03c8b0f0.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}.digits-container{display:flex;justify-content:flex-start}input{width:calc(var(--space-unit) * 5);height:72px;box-sizing:border-box;padding:0;caret-color:transparent;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:32px;font-weight:300;text-align:center}input.error{border:1px solid;border-color:var(--color-error01);background-color:var(--color-error-inverse);border-radius:4px}input:not(:last-of-type){margin-right:var(--space-unit)}@media only screen and (min-width: 768px){input:not(:last-of-type){margin-right:calc(var(--space-unit) * 2)}}@media only screen and (min-width: 1025px){input{width:calc(var(--space-unit) * 6)}}";

const ZOtp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.otpChange = createEvent(this, "otpChange", 7);
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
    return (h("div", { class: "otp-container" }, h("div", { class: "digits-container" }, this.otp.map((_val, i) => (h("input", { class: this.status == InputStatus.ERROR ? "error" : null, onKeyDown: (e) => {
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
      }, type: "text", minlength: "1", maxlength: "1", autoComplete: "off", ref: (el) => (this.otpRef[i] = el) })))), h("z-input-message", { message: this.message, status: this.status })));
  }
};
ZOtp.style = stylesCss;

export { ZOtp as z_otp };
