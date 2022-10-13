'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ":host{display:block;font-family:var(--font-family-sans);font-weight:var(--font-rg);font-size:14px;line-height:calc(var(--space-unit) * 2);color:var(--color-surface05);box-sizing:border-box}:host>div{padding:calc(var(--space-unit) * 2)}:host>.success{fill:var(--color-success01);background:var(--color-success-inverse)}:host>.warning{fill:var(--color-warning01);background:var(--color-warning-inverse)}:host>.error{fill:var(--color-error01);background:var(--color-error-inverse)}";

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
