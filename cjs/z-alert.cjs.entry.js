'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ":host{display:block;box-sizing:border-box;color:var(--color-surface05);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-rg);line-height:calc(var(--space-unit) * 2)}:host>div{padding:calc(var(--space-unit) * 2)}:host>.success{background:var(--color-success-inverse);fill:var(--color-success01)}:host>.warning{background:var(--color-warning-inverse);fill:var(--color-warning01)}:host>.error{background:var(--color-error-inverse);fill:var(--color-error01)}";

const ZAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: this.type }, index.h("slot", null)));
  }
};
ZAlert.style = stylesCss;

exports.z_alert = ZAlert;
