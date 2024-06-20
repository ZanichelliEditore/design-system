import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as ButtonType, B as ButtonVariant, e as ControlSize } from './index2.js';
import { d as defineCustomElement$1 } from './index9.js';

const stylesCss = ".sc-z-button-h{display:inline-block;--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:0}[disabled].sc-z-button-h:not([disabled=\"false\"]){pointer-events:none}.sc-z-button-h .z-button--container.sc-z-button{display:-ms-inline-flexbox;display:inline-flex;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0;border-width:var(--border-size-medium);border-style:solid;border-radius:var(--border-radius);cursor:pointer;fill:currentcolor;font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.3px;line-height:1;outline:none;text-decoration:none;text-transform:uppercase;white-space:nowrap}.sc-z-button-h .z-button--container.sc-z-button:focus:focus-visible{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary)}.sc-z-button-h .z-button--container.z-button--has-text.sc-z-button{min-width:calc(var(--space-unit) * 8);padding:0 calc(var(--space-unit) * 2)}.sc-z-button-h .z-button--container.z-button--has-text.sc-z-button z-icon.sc-z-button{--z-icon-right-margin:var(--space-unit)}[size=\"big\"].sc-z-button-h .z-button--container.sc-z-button{min-width:44px;height:44px}[size=\"small\"].sc-z-button-h .z-button--container.sc-z-button{min-width:36px;height:36px}[size=\"x-small\"].sc-z-button-h .z-button--container.sc-z-button{min-width:32px;height:32px}[variant=\"primary\"].sc-z-button-h .z-button--container.sc-z-button{border-color:var(--color-primary01);background-color:var(--color-primary01);color:var(--color-text-inverse)}@media (hover: hover){[variant=\"primary\"].sc-z-button-h .z-button--container.sc-z-button:hover{border-color:var(--color-hover-primary);background-color:var(--color-hover-primary);color:var(--color-text-inverse)}}[variant=\"primary\"].sc-z-button-h .z-button--container.sc-z-button:active{border-color:var(--color-pressed-primary);background-color:var(--color-pressed-primary);-webkit-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2);color:var(--color-text-inverse)}[variant=\"primary\"][disabled].sc-z-button-h:not([disabled=\"false\"]) .z-button--container.sc-z-button{border-color:var(--color-disabled01);background-color:var(--color-disabled01);color:var(--color-disabled03)}[variant=\"secondary\"].sc-z-button-h .z-button--container.sc-z-button{border-color:var(--color-primary01);background-color:var(--color-surface01);color:var(--color-primary01)}@media (hover: hover){[variant=\"secondary\"].sc-z-button-h .z-button--container.sc-z-button:hover{border-color:var(--color-hover-primary);background-color:var(--color-surface01);color:var(--color-hover-primary)}}[variant=\"secondary\"].sc-z-button-h .z-button--container.sc-z-button:active{border-color:var(--color-pressed-primary);background-color:var(--color-surface01);-webkit-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2);color:var(--color-pressed-primary)}[variant=\"secondary\"][disabled].sc-z-button-h:not([disabled=\"false\"]) .z-button--container.sc-z-button{border-color:var(--color-disabled01);background-color:var(--color-surface01);color:var(--color-disabled03)}[variant=\"tertiary\"].sc-z-button-h .z-button--container.sc-z-button{border-color:var(--color-primary02);background-color:var(--color-primary02);color:var(--color-primary01)}@media (hover: hover){[variant=\"tertiary\"].sc-z-button-h .z-button--container.sc-z-button:hover{border-color:var(--color-primary03);background-color:var(--color-primary03);color:var(--color-hover-primary)}}[variant=\"tertiary\"].sc-z-button-h .z-button--container.sc-z-button:focus:focus-visible{border-color:var(--color-primary02);background-color:var(--color-primary02);color:var(--color-primary01)}[variant=\"tertiary\"].sc-z-button-h .z-button--container.sc-z-button:active{border-color:var(--color-primary02);background-color:var(--color-primary02);-webkit-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2);color:var(--color-primary01)}[variant=\"tertiary\"][disabled].sc-z-button-h:not([disabled=\"false\"]) .z-button--container.sc-z-button{border-color:var(--color-disabled01);background-color:var(--color-disabled01);color:var(--color-disabled03)}";
const ZButtonStyle0 = stylesCss;

const ZButton = /*@__PURE__*/ proxyCustomElement(class ZButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.ariaLabel = "";
        this.role = "";
        this.href = undefined;
        this.target = undefined;
        this.htmlid = undefined;
        this.name = undefined;
        this.disabled = false;
        this.type = ButtonType.BUTTON;
        this.variant = ButtonVariant.PRIMARY;
        this.icon = undefined;
        this.size = ControlSize.BIG;
    }
    getAttributes() {
        return {
            id: this.htmlid,
            class: {
                "z-button--container": true,
                "z-button--has-text": !!this.hostElement.textContent.trim(),
            },
        };
    }
    render() {
        if (this.href) {
            return (h("a", Object.assign({}, this.getAttributes(), { "aria-label": this.ariaLabel, href: this.href, target: this.target }), this.icon && h("z-icon", { name: this.icon }), h("slot", null)));
        }
        return (h("button", Object.assign({}, this.getAttributes(), { "aria-label": this.ariaLabel, name: this.name, type: this.type, role: this.role, disabled: this.disabled }), this.icon && h("z-icon", { name: this.icon }), h("slot", null)));
    }
    get hostElement() { return this; }
    static get style() { return ZButtonStyle0; }
}, [6, "z-button", {
        "ariaLabel": [513, "aria-label"],
        "role": [1],
        "href": [1],
        "target": [1],
        "htmlid": [1],
        "name": [1],
        "disabled": [516],
        "type": [1],
        "variant": [513],
        "icon": [1],
        "size": [513]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-button", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZButton);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZButton as Z, defineCustomElement as d };

//# sourceMappingURL=index4.js.map