import { r as registerInstance, h } from './index-f16bc2ca.js';

const stylesCss = ":host{display:block;box-sizing:border-box;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);line-height:calc(var(--space-unit) * 2)}:host>div{padding:calc(var(--space-unit) * 2)}:host>.success{background:var(--color-success-inverse);fill:var(--color-success01)}:host>.warning{background:var(--color-warning-inverse);fill:var(--color-warning01)}:host>.error{background:var(--color-error-inverse);fill:var(--color-error01)}";
const ZAlertStyle0 = stylesCss;

const ZAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = undefined;
    }
    render() {
        return (h("div", { key: '824f9b9f4ee2d4212ad28a561b03c2bb8e2dbb0c', class: this.type }, h("slot", { key: '276f05d0bbb4a1f0e6ef9391d66a07ed875890b9' })));
    }
};
ZAlert.style = ZAlertStyle0;

export { ZAlert as z_alert };

//# sourceMappingURL=z-alert.entry.js.map