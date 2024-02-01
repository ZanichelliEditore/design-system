'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-195ca522.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>div{display:grid;padding-top:calc(var(--space-unit) * 1.5);border-bottom:var(--border-size-small) solid var(--color-surface03);color:var(--color-surface05);fill:var(--color-surface05);font-size:14px;grid-template-columns:36px auto;grid-template-rows:auto auto}:host>div>z-icon{grid-column:1 / 2;grid-row:1 / 2}:host>div>div.content{margin-bottom:var(--space-unit);grid-column:2 / 3;grid-row:1 / 2}:host>div>div.cta-wrapper{display:flex;flex-flow:column nowrap;align-items:center;justify-content:flex-start;margin-bottom:var(--space-unit);grid-column:1 / 3;grid-row:2 / 3}@media only screen and (min-width: 768px){:host>div>div.cta-wrapper{flex-direction:row;grid-column:2 / 3}}";

const ZPocketMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("z-icon", { name: "exclamation-circle" }), index.h("div", { class: "content" }, index.h("slot", null)), index.h("div", { class: "cta-wrapper" }, index.h("slot", { name: "cta" }))));
  }
};
ZPocketMessage.style = stylesCss;

exports.z_pocket_message = ZPocketMessage;
