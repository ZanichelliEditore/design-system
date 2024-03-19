import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as ButtonVariant, d as ButtonSize } from './index2.js';
import { d as defineCustomElement$2 } from './index4.js';
import { d as defineCustomElement$1 } from './index9.js';

const stylesCss = ":host{display:table-cell;border-bottom:var(--border-size-small) solid var(--color-surface03);background-color:var(--color-white);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.button-container{display:none}:host:hover>.button-container{display:initial}.button-container{position:absolute;z-index:5;top:8px;right:8px}.button-content{position:relative}.contextual-menu-container{position:absolute;top:calc(100% - var(--space-unit));right:0;display:none}.button-container.visible,.contextual-menu-container.visible{display:initial}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}";
const ZTableCellStyle0 = stylesCss;

const ZTableCell = /*@__PURE__*/ proxyCustomElement(class ZTableCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.showButton = undefined;
        this.padding = "medium";
        this.isMenuOpened = false;
    }
    handleMenu() {
        this.isMenuOpened = !this.isMenuOpened;
    }
    componentWillRender() {
        this.host.setAttribute("role", "cell");
    }
    render() {
        return (h(Host, { key: 'a55491d43ef04929fdd38073b589d12d5d373ca4' }, this.showButton && (h("div", { class: {
                "button-container": true,
                "visible": this.isMenuOpened,
            } }, h("div", { class: "button-content" }, h("z-button", { icon: "contextual-menu", variant: ButtonVariant.TERTIARY, size: ButtonSize.X_SMALL, onClick: () => this.handleMenu() }), h("div", { class: {
                "contextual-menu-container": true,
                "visible": this.isMenuOpened,
            } }, h("slot", { name: "contextual-menu" }))))), h("slot", { key: 'd8d5dab5bac78f43151d50d22df6cfbefdc81694' })));
    }
    get host() { return this; }
    static get style() { return ZTableCellStyle0; }
}, [1, "z-table-cell", {
        "showButton": [4, "show-button"],
        "padding": [513],
        "isMenuOpened": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-table-cell", "z-button", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-table-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTableCell);
            }
            break;
        case "z-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZTableCell as Z, defineCustomElement as d };

//# sourceMappingURL=index27.js.map