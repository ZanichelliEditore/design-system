'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5dc4a8de.js');

const stylesCss = ":host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);line-height:calc(var(--space-unit) * 2)}:host>div{padding:calc(var(--space-unit) * 2)}:host>.success{background:var(--color-success-inverse);fill:var(--color-success01)}:host>.warning{background:var(--color-warning-inverse);fill:var(--color-warning01)}:host>.error{background:var(--color-error-inverse);fill:var(--color-error01)}";
const ZAlertStyle0 = stylesCss;

const ZAlert = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.type = undefined;
    }
    render() {
        return (index.h("div", { key: '6c3d7eaa274e4115e3e5e06465b61ba17a262970', class: this.type }, index.h("slot", { key: '0f7e2e160f86417d7ed910e105f55af1cfad2824' })));
    }
};
ZAlert.style = ZAlertStyle0;

exports.z_alert = ZAlert;

//# sourceMappingURL=z-alert.cjs.entry.js.map