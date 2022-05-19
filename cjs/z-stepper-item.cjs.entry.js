'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');

const stylesCss = ":host{position:relative;width:calc(var(--space-unit) * 5);font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host(:not(:last-child)){flex:1}:host(:not(:last-child))::after{position:absolute;top:calc(var(--space-unit) * 4);left:calc(var(--space-unit) * 3);right:calc(var(--space-unit) * 2);z-index:1;content:'';display:block;width:auto;margin:0 calc(-1 * calc(var(--space-unit) * 2)) 0 calc(var(--space-unit) * 2);border-bottom:solid 2px var(--bg-grey-700)}.stepper-item{display:flex;flex-direction:column;align-items:center;width:calc(var(--space-unit) * 5);padding:0;color:inherit;font-family:inherit;font-size:18px;text-decoration:none;line-height:28px;background:transparent;border:0;outline:0;appearance:none}.stepper-item span{display:none;width:calc(100% + calc(var(--space-unit) * 4));text-align:center}:host(:not([disabled])) .stepper-item{cursor:pointer}:host([disabled]) .stepper-item{pointer-events:none}.indicator{content:counter(stepper);box-sizing:border-box;display:flex;justify-content:center;align-items:center;width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4);margin:calc(var(--space-unit) * 2);font-size:14px;font-weight:var(--font-sb);line-height:1;color:var(--myz-blue);background:var(--bg-white);border:2px solid var(--myz-blue);border-radius:50%}:host([pressed]:not([disabled])) .indicator{color:var(--text-white);background:var(--myz-blue-dark);border-color:var(--myz-blue-dark)}:host(:not([disabled]):focus-within) .indicator{box-shadow:0px 0px 2px 2px var(--accent-dark)}:host([disabled]) .indicator{color:var(--text-grey-700);background:var(--bg-grey-200);border-color:currentColor}@media only screen and (min-width: 768px){:host{width:calc(var(--space-unit) * 10)}:host(:not(:last-child))::after{top:calc(var(--space-unit) * 5);left:calc(var(--space-unit) * 8)}.stepper-item{width:calc(var(--space-unit) * 10)}.stepper-item span{display:block}.indicator{width:calc(var(--space-unit) * 6);height:calc(var(--space-unit) * 6);font-size:16px}}";

const ZStepperItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    if (this.href) {
      return (index.h("a", { href: !this.disabled && this.href, class: "stepper-item" }, index.h("div", { class: "indicator" }, this.index), index.h("span", null, index.h("slot", null))));
    }
    return (index.h("button", { class: "stepper-item", disabled: this.disabled }, index.h("div", { class: "indicator" }, this.index), index.h("span", null, index.h("slot", null))));
  }
};
ZStepperItem.style = stylesCss;

exports.z_stepper_item = ZStepperItem;
