import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { f as InputStatus } from './index2.js';
import { d as defineCustomElement$3 } from './index9.js';
import { d as defineCustomElement$2 } from './index11.js';

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}.digits-container{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}input{width:calc(var(--space-unit) * 5);height:72px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;caret-color:transparent;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:32px;font-weight:300;text-align:center}input.error{border:1px solid;border-color:var(--color-error01);background-color:var(--color-error-inverse);border-radius:4px}input:not(:last-of-type){margin-right:var(--space-unit)}@media only screen and (min-width: 768px){input:not(:last-of-type){margin-right:calc(var(--space-unit) * 2)}}@media only screen and (min-width: 1025px){input{width:calc(var(--space-unit) * 6)}}";
const ZOtpStyle0 = stylesCss;

const ZOtp$1 = /*@__PURE__*/ proxyCustomElement(class ZOtp extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h("div", { key: '9e28959418f6f1b382f16836935e12b3acddfa8f', class: "otp-container" }, h("div", { key: '9348bd6807e797441789a465ebdae3a03d1a7534', class: "digits-container" }, this.otp.map((_val, i) => (h("input", { class: this.status == InputStatus.ERROR ? "error" : null, onKeyDown: (e) => {
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
            }, type: "text", minlength: "1", maxlength: "1", autoComplete: "off", ref: (el) => (this.otpRef[i] = el) })))), h("z-input-message", { key: '87ee18c72daec6c0c903aa91e5a717c4d5a729b5', message: this.message, status: this.status })));
    }
    static get style() { return ZOtpStyle0; }
}, [1, "z-otp", {
        "inputNum": [2, "input-num"],
        "status": [1],
        "message": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-otp", "z-icon", "z-input-message"];
    components.forEach(tagName => { switch (tagName) {
        case "z-otp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZOtp$1);
            }
            break;
        case "z-icon":
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

const ZOtp = ZOtp$1;
const defineCustomElement = defineCustomElement$1;

export { ZOtp, defineCustomElement };

//# sourceMappingURL=z-otp.js.map