'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');

const stylesCss = ":host{display:block;box-sizing:border-box;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);line-height:calc(var(--space-unit) * 2)}:host>div{padding:calc(var(--space-unit) * 2)}:host>.success{background:var(--color-success-inverse);fill:var(--color-success01)}:host>.warning{background:var(--color-warning-inverse);fill:var(--color-warning01)}:host>.error{background:var(--color-error-inverse);fill:var(--color-error01)}";
const ZAlertStyle0 = stylesCss;

const ZAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.type = undefined;
    }
    render() {
        return (index.h("div", { key: '5f1af9f77d699a3098b189a33cbebdba36d5ce23', class: this.type }, index.h("slot", { key: 'd8b6da798f1579042763c3953a7e1a869031a9e0' })));
    }
};
ZAlert.style = ZAlertStyle0;

exports.z_alert = ZAlert;

//# sourceMappingURL=z-alert.cjs.entry.js.map