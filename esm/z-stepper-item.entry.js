import { r as registerInstance, h, a as Host } from './index-ab5f1eaa.js';

const stylesCss = ":host{position:relative;width:calc(var(--space-unit) * 5);font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-icon-width:20px;--z-icon-height:20px}:host(:not(:last-child)){-ms-flex:1;flex:1}:host(:not(:last-child))::after{position:absolute;z-index:1;top:calc(var(--space-unit) * 4 - var(--border-size-medium) / 2);right:calc(var(--space-unit) * 2);left:calc(var(--space-unit) * 3);display:block;width:auto;border-bottom:var(--border-size-medium) solid var(--color-disabled03);margin:0 calc(var(--space-unit) * -2) 0 calc(var(--space-unit) * 2);content:\"\"}.stepper-item{display:-ms-flexbox;display:flex;width:calc(var(--space-unit) * 5);-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding:0;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;color:inherit;font-family:inherit;font-size:12px;line-height:16px;outline:0;text-decoration:none}.stepper-item span{display:none;width:calc(100% + calc(var(--space-unit) * 4));color:var(--color-default-text);text-align:center}:host([href]:not([disabled],[pressed])) .stepper-item{cursor:pointer}:host([disabled]) .stepper-item{pointer-events:none}:host([pressed]),:host([pressed]) .stepper-item{pointer-events:none}.indicator{display:-ms-flexbox;display:flex;width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4);-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:var(--border-size-medium) solid var(--color-primary01);margin:calc(var(--space-unit) * 2);background:var(--color-surface01);border-radius:50%;color:var(--color-primary01);content:counter(stepper);font-size:14px;font-weight:var(--font-sb);line-height:1}:host([pressed]:not([disabled])) .indicator{border-color:var(--color-active-primary);background:var(--color-active-primary);color:var(--color-text-inverse)}:host(:not([disabled]):focus-within) .indicator{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary)}:host([href]:not([disabled],[pressed],[checked])) .indicator:hover{border-color:var(--color-hover-primary);color:var(--color-hover-primary)}:host([disabled]) .indicator{border-color:var(--color-disabled02);background:var(--color-disabled01);color:var(--color-disabled03)}:host([checked]:not([disabled])) .indicator{border-color:var(--color-success-default);color:var(--color-success-default)}:host([checked]:not([disabled])) .indicator z-icon{fill:var(--color-success-default)}:host([checked]) .indicator z-icon>svg{width:24px;height:24px}@media (min-width: 768px){.stepper-item span{display:block}}@media (min-width: 1152px){:host{width:calc(var(--space-unit) * 10);--z-icon-width:24px;--z-icon-height:24px}:host(:not(:last-child))::after{top:calc(var(--space-unit) * 5 - var(--border-size-medium) / 2);left:calc(var(--space-unit) * 8)}.stepper-item{width:calc(var(--space-unit) * 10);font-size:18px;line-height:28px}.indicator{width:calc(var(--space-unit) * 6);height:calc(var(--space-unit) * 6);font-size:16px}}";
const ZStepperItemStyle0 = stylesCss;

const ZStepperItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.index = undefined;
        this.href = undefined;
        this.pressed = undefined;
        this.checked = undefined;
        this.disabled = undefined;
    }
    getAttributes() {
        const href = this.href && !this.pressed && !this.disabled ? { onClick: () => (location.href = this.href) } : undefined;
        const role = href ? { role: "link" } : undefined;
        const current = this.pressed && !this.disabled ? { ariaCurrent: "step" } : undefined;
        const tabindex = this.pressed || this.href === "" ? { tabindex: -1 } : undefined;
        return Object.assign(Object.assign(Object.assign(Object.assign({}, href), role), current), tabindex);
    }
    render() {
        return (h(Host, { key: 'd760ab7aef2991d5ffc8754e4e03263c4c476a6d', role: "listitem" }, h("button", Object.assign({ key: '7fca3fa04459cdea8813db6382726cc601e4e3f8', class: "stepper-item", disabled: this.disabled }, this.getAttributes()), h("div", { key: 'c727b40105af8807c1b7fddf19243147bc2acdab', class: "indicator" }, this.checked ? h("z-icon", { name: "checkmark" }) : this.index), h("span", { key: 'f8d063aeeac60eb9adeaf65774b60ff07bb1c9ba' }, h("slot", { key: 'b0bd5470c318acc8037abb11b974a4cc1f057fd8' })))));
    }
};
ZStepperItem.style = ZStepperItemStyle0;

export { ZStepperItem as z_stepper_item };

//# sourceMappingURL=z-stepper-item.entry.js.map