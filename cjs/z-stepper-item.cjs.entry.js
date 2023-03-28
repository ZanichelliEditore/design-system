'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');

const stylesCss = ":host{position:relative;width:calc(var(--space-unit) * 5);font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host(:not(:last-child)){flex:1}:host(:not(:last-child))::after{position:absolute;z-index:1;top:calc(var(--space-unit) * 4);right:calc(var(--space-unit) * 2);left:calc(var(--space-unit) * 3);display:block;width:auto;border-bottom:solid 2px var(--bg-grey-700);margin:0 calc(-1 * calc(var(--space-unit) * 2)) 0 calc(var(--space-unit) * 2);content:\"\"}.stepper-item{display:flex;width:calc(var(--space-unit) * 5);flex-direction:column;align-items:center;padding:0;border:0;appearance:none;background:transparent;color:inherit;font-family:inherit;font-size:18px;line-height:28px;outline:0;text-decoration:none}.stepper-item span{display:none;width:calc(100% + calc(var(--space-unit) * 4));text-align:center}:host(:not([disabled])) .stepper-item{cursor:pointer}:host([disabled]) .stepper-item{pointer-events:none}.indicator{display:flex;width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4);box-sizing:border-box;align-items:center;justify-content:center;border:2px solid var(--myz-blue);margin:calc(var(--space-unit) * 2);background:var(--bg-white);border-radius:50%;color:var(--myz-blue);content:counter(stepper);font-size:14px;font-weight:var(--font-sb);line-height:1}:host([pressed]:not([disabled])) .indicator{border-color:var(--myz-blue-dark);background:var(--myz-blue-dark);color:var(--text-white)}:host(:not([disabled]):focus-within) .indicator{box-shadow:var(--shadow-focus-primary)}:host([disabled]) .indicator{border-color:currentcolor;background:var(--bg-grey-200);color:var(--text-grey-700)}@media only screen and (min-width: 768px){:host{width:calc(var(--space-unit) * 10)}:host(:not(:last-child))::after{top:calc(var(--space-unit) * 5);left:calc(var(--space-unit) * 8)}.stepper-item{width:calc(var(--space-unit) * 10)}.stepper-item span{display:block}.indicator{width:calc(var(--space-unit) * 6);height:calc(var(--space-unit) * 6);font-size:16px}}";

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
