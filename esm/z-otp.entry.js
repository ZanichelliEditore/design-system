import { r as registerInstance, c as createEvent, h } from './index-fa9e549c.js';
import { m as InputStatusEnum } from './index-4952bfe3.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}.digits-container{display:flex;justify-content:flex-start}input{height:72px;width:calc(var(--space-unit) * 5);font-size:32px;font-weight:300;font-family:var(--font-family-sans);text-align:center;caret-color:transparent;box-sizing:border-box;padding:0;color:var(--color-surface05)}input.error{border:1px solid;border-radius:4px;border-color:var(--color-error01);background-color:var(--color-error-inverse)}input:not(:last-of-type){margin-right:var(--space-unit)}@media only screen and (min-width: 768px){input:not(:last-of-type){margin-right:calc(var(--space-unit) * 2)}}@media only screen and (min-width: 1025px){input{width:calc(var(--space-unit) * 6)}}";

const ZOtp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.otpChange = createEvent(this, "otpChange", 7);
    this.inputNum = 6;
  }
  emitInputChange(value) {
    this.otpChange.emit({ value });
  }
  componentWillLoad() {
    this.otp = Array.apply(null, Array(this.inputNum));
    this.otpRef = Array.apply(null, Array(this.inputNum));
  }
  render() {
    return (h("div", { class: "otp-container" }, h("div", { class: "digits-container" }, this.otp.map((_elem, i) => {
      return (h("input", { class: this.status == InputStatusEnum.error ? "error" : null, onKeyDown: (e) => {
          if (e.keyCode > 47)
            this.otpRef[i].value = "";
        }, onKeyUp: (e) => {
          if (e.keyCode > 47) {
            i < this.inputNum - 1 && this.otpRef[i + 1].focus();
          }
        }, onInput: (e) => {
          this.otp[i] = e.target.value;
          this.emitInputChange(this.otp.join(""));
        }, type: "text", minlength: "1", maxlength: "1", autoComplete: "off", ref: input => (this.otpRef[i] = input) }));
    })), h("z-input-message", { message: this.message, status: this.status })));
  }
};
ZOtp.style = stylesCss;

export { ZOtp as z_otp };
