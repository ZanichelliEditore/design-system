import { r as registerInstance, h } from './index-f16bc2ca.js';

const stylesCss = ":host{display:block;box-sizing:border-box;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);line-height:calc(var(--space-unit) * 2)}:host>div{padding:calc(var(--space-unit) * 2)}:host>.success{background:var(--color-success-inverse);fill:var(--color-success01)}:host>.warning{background:var(--color-warning-inverse);fill:var(--color-warning01)}:host>.error{background:var(--color-error-inverse);fill:var(--color-error01)}";
const ZAlertStyle0 = stylesCss;

const ZAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = undefined;
    }
    render() {
        return (h("div", { key: '613583f9f9d6686e8c1fce89174dc7b6051623e3', class: this.type }, h("slot", { key: 'fd1884ab9eddfb1da4a0b7d952a48870eade1de7' })));
    }
};
ZAlert.style = ZAlertStyle0;

export { ZAlert as z_alert };

//# sourceMappingURL=z-alert.entry.js.map