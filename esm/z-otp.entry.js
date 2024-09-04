import { r as registerInstance, c as createEvent, h } from './index-ab5f1eaa.js';
import { f as InputStatus } from './index-a7f69d42.js';

const stylesCss = "input:focus{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none !important}:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}.digits-container{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}input{width:calc(var(--space-unit) * 5);height:72px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;caret-color:transparent;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:32px;font-weight:300;text-align:center}input.error{border:1px solid;border-color:var(--color-error01);background-color:var(--color-error-inverse);border-radius:4px}input:not(:last-of-type){margin-right:var(--space-unit)}@media only screen and (min-width: 768px){input:not(:last-of-type){margin-right:calc(var(--space-unit) * 2)}}@media only screen and (min-width: 1025px){input{width:calc(var(--space-unit) * 6)}}";
const ZOtpStyle0 = stylesCss;

const ZOtp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.otpChange = createEvent(this, "otpChange", 7);
        this.inputNum = 6;
        this.status = undefined;
        this.message = undefined;
    }
    emitInputChange(value) {
        this.otpChange.emit({ value });
    }
    componentWillLoad() {
        this.otp = [...Array(this.inputNum)];
        this.otpRef = [...Array(this.inputNum)];
    }
    render() {
        return (h("div", { key: 'fbf93bab3be1631c25a91ada084e944562c75f47', class: "otp-container" }, h("div", { key: '9c08739270a3875e3550a35c3660be90eb192d7c', class: "digits-container" }, this.otp.map((_val, i) => (h("input", { class: this.status == InputStatus.ERROR ? "error" : null, onKeyDown: (e) => {
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
            }, type: "text", minlength: "1", maxlength: "1", autoComplete: "off", ref: (el) => (this.otpRef[i] = el) })))), h("z-input-message", { key: 'f1800b92331f15ab96cb7bf3c23c6d0164e2bee6', message: this.message, status: this.status })));
    }
};
ZOtp.style = ZOtpStyle0;

export { ZOtp as z_otp };

//# sourceMappingURL=z-otp.entry.js.map