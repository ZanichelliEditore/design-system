import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = "button{display:flex;height:36px;align-items:center;padding-right:calc(var(--space-unit) * 2);padding-left:0;border:var(--border-size-medium) solid;border-color:transparent;background-color:var(--color-surface01);border-radius:var(--border-radius);box-shadow:0 0 4px 0 rgb(0 0 0 / 20%);color:var(--color-primary01);cursor:pointer;fill:var(--color-primary01);font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);outline:none;text-transform:uppercase}button::-moz-focus-inner{border:0}button:hover{color:var(--color-hover-primary);fill:var(--color-hover-primary)}button:focus{box-shadow:var(--shadow-focus-primary)}button:active{border-color:var(--color-pressed-primary);box-shadow:var(--shadow-2);color:var(--color-pressed-primary);fill:var(--color-pressed-primary)}button:disabled{color:var(--color-disabled03);fill:var(--color-disabled03)}z-icon{display:inline-block;margin:0 var(--space-unit) 0 calc(var(--space-unit) * 2);transform:rotate(360deg);transition:all 200ms linear}button.isopen{top:-20px}button.avoid-clicks{pointer-events:none}";
const ZToggleButtonStyle0 = stylesCss;

const ZToggleButton$1 = /*@__PURE__*/ proxyCustomElement(class ZToggleButton extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.toggleClick = createEvent(this, "toggleClick", 7);
        this.label = undefined;
        this.isdisabled = false;
        this.avoidclick = undefined;
        this.opened = false;
        this.ariaLabel = "";
    }
    emitToggleClick() {
        if (this.isdisabled) {
            return;
        }
        this.opened = !this.opened;
        this.toggleClick.emit(this.opened);
    }
    render() {
        return (h("button", { key: '809ca74c63187ce21d411516d595bda6ed5b082b', tabindex: this.avoidclick ? "-1" : "0", class: {
                "isopen": this.opened,
                "avoid-clicks": this.avoidclick,
            }, disabled: this.isdisabled, "aria-expanded": this.opened ? "true" : "false", "aria-label": this.ariaLabel, onClick: () => this.emitToggleClick() }, h("z-icon", { key: '66af2faa257599724f2506230eae3c0c612c0700', name: this.opened ? "chevron-down" : "chevron-up", width: 16, height: 16 }), this.label));
    }
    static get style() { return ZToggleButtonStyle0; }
}, [1, "z-toggle-button", {
        "label": [1],
        "isdisabled": [4],
        "avoidclick": [4],
        "opened": [1028],
        "ariaLabel": [1, "aria-label"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-toggle-button", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-toggle-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZToggleButton$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZToggleButton = ZToggleButton$1;
const defineCustomElement = defineCustomElement$1;

export { ZToggleButton, defineCustomElement };

//# sourceMappingURL=z-toggle-button.js.map