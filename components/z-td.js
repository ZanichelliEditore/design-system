import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as ButtonVariant, e as ControlSize } from './index2.js';
import { d as defineCustomElement$4 } from './index4.js';
import { d as defineCustomElement$3 } from './index9.js';
import { d as defineCustomElement$2 } from './index25.js';

const stylesCss = ":host{position:relative;display:flex;min-width:128px;box-sizing:border-box;align-items:center;padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([show-menu])::after{display:inline-block;height:100%;margin-right:calc(var(--space-unit) * 4);background:transparent;content:\"\";user-select:none}.cell--menu-container{position:absolute;z-index:1;top:var(--space-unit);right:var(--space-unit)}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{opacity:1;pointer-events:all}@media (min-width: 768px) and (hover: hover){:host([show-menu=\"hover\"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu=\"hover\"]:hover) .cell--menu-container{opacity:1;pointer-events:all}}";
const ZTdStyle0 = stylesCss;

const ZTd$1 = /*@__PURE__*/ proxyCustomElement(class ZTd extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.colspanChange = createEvent(this, "colspanChange", 6);
        this.colspan = undefined;
        this.sticky = false;
        this.showMenu = null;
        this.isMenuOpen = false;
    }
    updateColspan() {
        if (this.colspan) {
            this.host.style.gridColumn = `span ${this.colspan}`;
        }
        else {
            this.host.style.removeProperty("grid-column");
        }
        this.colspanChange.emit(this.colspan || 1);
    }
    onMenuButtonClick(ev) {
        ev.stopPropagation();
        this.popoverEl.open = !this.popoverEl.open;
    }
    componentWillLoad() {
        this.updateColspan();
    }
    render() {
        return (h(Host, { key: '4c8c986b18fffe96985174dddd6b4ef77ceaa1ce', role: "cell", "menu-open": this.isMenuOpen }, h("slot", { key: 'a40bcbb99d5ffc1e962b420ffb89f13cbcb3875e' }), this.showMenu && (h("div", { class: "cell--menu-container prevent-expand" }, h("z-button", { variant: ButtonVariant.TERTIARY, icon: "contextual-menu", size: ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: this.onMenuButtonClick.bind(this) }), h("z-popover", { ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open) }, h("slot", { name: "contextual-menu" }))))));
    }
    get host() { return this; }
    static get watchers() { return {
        "colspan": ["updateColspan"]
    }; }
    static get style() { return ZTdStyle0; }
}, [1, "z-td", {
        "colspan": [2],
        "sticky": [516],
        "showMenu": [513, "show-menu"],
        "isMenuOpen": [32]
    }, undefined, {
        "colspan": ["updateColspan"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-td", "z-button", "z-icon", "z-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "z-td":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTd$1);
            }
            break;
        case "z-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZTd = ZTd$1;
const defineCustomElement = defineCustomElement$1;

export { ZTd, defineCustomElement };

//# sourceMappingURL=z-td.js.map