import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = "button{display:flex;width:42px;width:calc(var(--space-unit) * 6);height:calc(var(--space-unit) * 5);height:calc(var(--space-unit) * 6);align-items:center;justify-content:center;padding:0;border:none;border-left:var(--border-size-medium) solid var(--color-surface03);margin:0;background:none;border-radius:0 var(--border-radius) 0 0;color:var(--color-primary01);cursor:pointer;fill:var(--color-primary01);outline:none}button:active,button:focus{color:var(--blue700);fill:var(--blue700)}button>span{display:flex;width:28px;height:28px;align-items:center;justify-content:center;border:0;border-radius:var(--border-radius)}button:hover>span{background:var(--color-primary03)}button:focus>span{background:var(--color-surface01);border-radius:var(--border-radius);box-shadow:var(--shadow-focus-primary)}button:active>span{background:var(--color-surface01);border-radius:var(--border-radius);box-shadow:var(--shadow-2)}button:disabled{cursor:not-allowed}button:disabled>span{background:none;box-shadow:var(--shadow-0);pointer-events:none}button:disabled>span>z-icon{fill:var(--color-surface03)}button::-moz-focus-inner{border:0}";
const ZMyzCardIconStyle0 = stylesCss;

const ZMyzCardIcon$1 = /*@__PURE__*/ proxyCustomElement(class ZMyzCardIcon extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.icon = undefined;
        this.isdisabled = false;
        this.ariaLabel = "";
    }
    render() {
        return (h("button", { key: 'baa3a80095798ad5aeffd5ed7c82f734972fffcd', disabled: this.isdisabled, "aria-label": this.ariaLabel }, h("span", { key: '6087bd7415624e7e299d2d56a1974259503f1025' }, h("z-icon", { key: '1ec75e4468b4ae898df057c2e0739d28d8b50fab', name: this.icon, width: 16, height: 16 }))));
    }
    static get style() { return ZMyzCardIconStyle0; }
}, [1, "z-myz-card-icon", {
        "icon": [1],
        "isdisabled": [4],
        "ariaLabel": [1, "aria-label"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-myz-card-icon", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-myz-card-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZMyzCardIcon$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZMyzCardIcon = ZMyzCardIcon$1;
const defineCustomElement = defineCustomElement$1;

export { ZMyzCardIcon, defineCustomElement };

//# sourceMappingURL=z-myz-card-icon.js.map