'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');

const stylesCss = ":host{position:relative;width:calc(var(--space-unit) * 5);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host(:not(:last-child)){flex:1}:host(:not(:last-child))::after{position:absolute;z-index:1;top:calc(var(--space-unit) * 4 - var(--border-size-medium) / 2);right:calc(var(--space-unit) * 2);left:calc(var(--space-unit) * 3);display:block;width:auto;border-bottom:var(--border-size-medium) solid var(--color-disabled03);margin:0 calc(var(--space-unit) * -2) 0 calc(var(--space-unit) * 2);content:\"\"}.stepper-item{display:flex;width:calc(var(--space-unit) * 5);flex-direction:column;align-items:center;padding:0;border:0;appearance:none;background:transparent;color:inherit;font-family:inherit;font-size:18px;line-height:28px;outline:0;text-decoration:none}.stepper-item span{display:none;width:calc(100% + calc(var(--space-unit) * 4));text-align:center}:host(:not([disabled])) .stepper-item{cursor:pointer}:host([disabled]) .stepper-item{pointer-events:none}.indicator{display:flex;width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4);box-sizing:border-box;align-items:center;justify-content:center;border:var(--border-size-medium) solid var(--color-primary01);margin:calc(var(--space-unit) * 2);background:var(--color-surface01);border-radius:50%;color:var(--color-primary01);content:counter(stepper);font-size:14px;font-weight:var(--font-sb);line-height:1}:host([pressed]:not([disabled])) .indicator{border-color:var(--color-active-primary);background:var(--color-active-primary);color:var(--color-text-inverse)}:host(:not([disabled]):focus-within) .indicator{box-shadow:var(--shadow-focus-primary)}:host([disabled]) .indicator{border-color:var(--color-disabled02);background:var(--color-disabled01);color:var(--color-disabled03)}@media (min-width: 768px){:host{width:calc(var(--space-unit) * 10)}:host(:not(:last-child))::after{top:calc(var(--space-unit) * 5 - var(--border-size-medium) / 2);left:calc(var(--space-unit) * 8)}.stepper-item{width:calc(var(--space-unit) * 10)}.stepper-item span{display:block}.indicator{width:calc(var(--space-unit) * 6);height:calc(var(--space-unit) * 6);font-size:16px}}";
const ZStepperItemStyle0 = stylesCss;

const ZStepperItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.index = undefined;
        this.href = undefined;
        this.pressed = undefined;
        this.disabled = undefined;
    }
    render() {
        if (this.href) {
            return (index.h("a", { href: !this.disabled && this.href, class: "stepper-item" }, index.h("div", { class: "indicator" }, this.index), index.h("span", null, index.h("slot", null))));
        }
        return (index.h("button", { class: "stepper-item", disabled: this.disabled }, index.h("div", { class: "indicator" }, this.index), index.h("span", null, index.h("slot", null))));
    }
};
ZStepperItem.style = ZStepperItemStyle0;

exports.z_stepper_item = ZStepperItem;

//# sourceMappingURL=z-stepper-item.cjs.entry.js.map