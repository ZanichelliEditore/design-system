'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e801ae96.js');

const stylesCss = ":host{display:block;box-sizing:border-box;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);line-height:calc(var(--space-unit) * 2)}:host>div{padding:calc(var(--space-unit) * 2)}:host>.success{background:var(--color-success-inverse);fill:var(--color-success01)}:host>.warning{background:var(--color-warning-inverse);fill:var(--color-warning01)}:host>.error{background:var(--color-error-inverse);fill:var(--color-error01)}";
const ZAlertStyle0 = stylesCss;

const ZAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.type = undefined;
    }
    render() {
        return (index.h("div", { key: '33ecefa9cfd798c0a07fa04213af4db07fb6efa8', class: this.type }, index.h("slot", { key: 'b7ce84185f868aac8c7bde7d838d2bba84fb2352' })));
    }
};
ZAlert.style = ZAlertStyle0;

exports.z_alert = ZAlert;

//# sourceMappingURL=z-alert.cjs.entry.js.map