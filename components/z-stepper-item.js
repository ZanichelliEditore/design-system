import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ":host{position:relative;width:calc(var(--space-unit) * 5);font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-icon-width:20px;--z-icon-height:20px}:host(:not(:last-child)){flex:1}:host(:not(:last-child))::after{position:absolute;z-index:1;top:calc(var(--space-unit) * 4 - var(--border-size-medium) / 2);right:calc(var(--space-unit) * 2);left:calc(var(--space-unit) * 3);display:block;width:auto;border-bottom:var(--border-size-medium) solid var(--color-disabled03);margin:0 calc(var(--space-unit) * -2) 0 calc(var(--space-unit) * 2);content:\"\"}.stepper-item{display:flex;width:calc(var(--space-unit) * 5);flex-direction:column;align-items:center;padding:0;border:0;appearance:none;background:transparent;color:inherit;font-family:inherit;font-size:12px;line-height:16px;outline:0;text-decoration:none}.stepper-item span{display:none;width:calc(100% + calc(var(--space-unit) * 4));color:var(--color-default-text);text-align:center}:host([href]:not([disabled],[pressed])) .stepper-item{cursor:pointer}:host([disabled]) .stepper-item{pointer-events:none}.indicator{display:flex;width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4);box-sizing:border-box;align-items:center;justify-content:center;border:var(--border-size-medium) solid var(--color-primary01);margin:calc(var(--space-unit) * 2);background:var(--color-surface01);border-radius:50%;color:var(--color-primary01);content:counter(stepper);font-size:14px;font-weight:var(--font-sb);line-height:1}:host([pressed]:not([disabled])) .indicator{border-color:var(--color-active-primary);background:var(--color-active-primary);color:var(--color-text-inverse)}:host(:not([disabled]):focus-within) .indicator{box-shadow:var(--shadow-focus-primary)}:host([href]:not([disabled],[pressed],[checked])) .indicator:hover{border-color:var(--color-hover-primary);color:var(--color-hover-primary)}:host([disabled]) .indicator{border-color:var(--color-disabled02);background:var(--color-disabled01);color:var(--color-disabled03)}:host([checked]:not([disabled])) .indicator{border-color:var(--color-success-default);color:var(--color-success-default)}:host([checked]:not([disabled])) .indicator z-icon{fill:var(--color-success-default)}:host([checked]) .indicator z-icon>svg{width:24px;height:24px}@media (min-width: 768px){.stepper-item span{display:block}}@media (min-width: 1152px){:host{width:calc(var(--space-unit) * 10);--z-icon-width:24px;--z-icon-height:24px}:host(:not(:last-child))::after{top:calc(var(--space-unit) * 5 - var(--border-size-medium) / 2);left:calc(var(--space-unit) * 8)}.stepper-item{width:calc(var(--space-unit) * 10);font-size:18px;line-height:28px}.indicator{width:calc(var(--space-unit) * 6);height:calc(var(--space-unit) * 6);font-size:16px}}";
const ZStepperItemStyle0 = stylesCss;

const ZStepperItem$1 = /*@__PURE__*/ proxyCustomElement(class ZStepperItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h(Host, { key: 'c5ca192ca8a2dbf5a7df76d24059e2f312e2d6de', role: "listitem" }, h("button", Object.assign({ key: 'df91258ecfeef2cc2d42b7cdeb35fe4d74fa53d9', class: "stepper-item", disabled: this.disabled }, this.getAttributes()), h("div", { key: '45a0b2b14d11094e753e89747c89ad6554b6f086', class: "indicator" }, this.checked ? h("z-icon", { name: "checkmark" }) : this.index), h("span", { key: 'fbb1e1340c9d200312814aac29bf76077b956ea8' }, h("slot", { key: '79791a5e64454e4b543b49e97f9af3592a18c4cf' })))));
    }
    static get style() { return ZStepperItemStyle0; }
}, [1, "z-stepper-item", {
        "index": [2],
        "href": [1],
        "pressed": [4],
        "checked": [4],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-stepper-item", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-stepper-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZStepperItem$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZStepperItem = ZStepperItem$1;
const defineCustomElement = defineCustomElement$1;

export { ZStepperItem, defineCustomElement };

//# sourceMappingURL=z-stepper-item.js.map