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
        return (h("button", { key: 'a847d6b5a8492bcd22ed033aeece36f7652dd5f2', disabled: this.isdisabled, "aria-label": this.ariaLabel }, h("span", { key: '0f7e06abb02b75cd18a905cceaaed460808c9685' }, h("z-icon", { key: '178e3cd6a28c2533c3443348bb635125cec14099', name: this.icon, width: 16, height: 16 }))));
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