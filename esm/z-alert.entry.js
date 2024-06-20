import { r as registerInstance, h } from './index-ab5f1eaa.js';

const stylesCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);line-height:calc(var(--space-unit) * 2)}:host>div{padding:calc(var(--space-unit) * 2)}:host>.success{background:var(--color-success-inverse);fill:var(--color-success01)}:host>.warning{background:var(--color-warning-inverse);fill:var(--color-warning01)}:host>.error{background:var(--color-error-inverse);fill:var(--color-error01)}";
const ZAlertStyle0 = stylesCss;

const ZAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = undefined;
    }
    render() {
        return (h("div", { key: 'a04290b826aa50ecac798ad9126d93ee1d7e883e', class: this.type }, h("slot", { key: 'bc0f26d27fe3a68484f3079f11fb1c767fe255c4' })));
    }
};
ZAlert.style = ZAlertStyle0;

export { ZAlert as z_alert };

//# sourceMappingURL=z-alert.entry.js.map