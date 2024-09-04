import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { P as PopoverPosition, S as SortDirection, B as ButtonVariant, e as ControlSize } from './index2.js';
import { d as defineCustomElement$4 } from './index4.js';
import { d as defineCustomElement$3 } from './index9.js';
import { d as defineCustomElement$2 } from './index22.js';

const stylesCss = ":host{position:relative;display:-ms-flexbox;display:flex;min-width:128px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host([sticky]){position:-webkit-sticky;position:sticky;z-index:1;top:0;left:0;-webkit-box-shadow:8px 0 16px -8px var(--shadow-color-base);box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([show-menu])::after{display:inline-block;height:100%;margin-right:calc(var(--space-unit) * 4);background:transparent;content:\"\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cell--menu-container{position:absolute;z-index:1;top:var(--space-unit);right:var(--space-unit)}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{opacity:1;pointer-events:all}@media (min-width: 768px) and (hover: hover){:host([show-menu=\"hover\"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu=\"hover\"]:hover) .cell--menu-container{opacity:1;pointer-events:all}}:host{background-color:var(--color-surface02);font-weight:var(--font-sb)}:host([sortable]){cursor:pointer}.z-th--sort-button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0;border:none;margin-top:auto;background-color:transparent;cursor:pointer}.z-th--sort-button:focus{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none}";
const ZThStyle0 = stylesCss;

const ZTh$1 = /*@__PURE__*/ proxyCustomElement(class ZTh extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.sort = createEvent(this, "sort", 7);
        this.colspan = undefined;
        this.showMenu = null;
        this.sticky = false;
        this.sortDirection = undefined;
        this.popoverPosition = PopoverPosition.AUTO;
        this.isMenuOpen = false;
    }
    /**
     * Get the value to set to the `aria-sort` attribute based on the current sort direction.
     */
    get ariaSortDirection() {
        if (!this.sortDirection) {
            return null;
        }
        return this.sortDirection === SortDirection.ASC ? "ascending" : "descending";
    }
    /**
     * Handle the click on the sort button.
     * @fires sort
     */
    handleSort() {
        if (!this.sortDirection) {
            return;
        }
        this.sortDirection = this.sortDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;
        this.sort.emit({
            sortDirection: this.sortDirection,
        });
    }
    updateColspan() {
        if (this.colspan) {
            this.host.style.gridColumn = `span ${this.colspan}`;
        }
        else {
            this.host.style.removeProperty("grid-column");
        }
    }
    componentWillLoad() {
        this.updateColspan();
    }
    render() {
        return (h(Host, { key: '6d7379e559b77ea796584c9cdc49be8dabb3cd67', role: "columnheader", "menu-open": this.isMenuOpen, "aria-sort": this.ariaSortDirection }, h("slot", { key: 'e21bf2439c1061cf7acaeddb6a3afe8818112493' }), this.sortDirection && (h("button", { key: 'e65ed301cea08cb0cdaf3ce2b13cb06dc61705ea', class: "z-th--sort-button", type: "button", onClick: this.handleSort.bind(this) }, h("z-icon", { key: '1768ea275af78502035d66fb2a4f80fff68bc6e0', name: this.sortDirection === SortDirection.ASC ? "arrow-simple-up" : "arrow-simple-down", width: 14, height: 14 }))), this.showMenu && (h("div", { key: 'b516e407bc90fa95fa1ae914a344cdcd89f38336', class: "cell--menu-container" }, h("z-button", { key: '4f76bb047c904a88d2e78117811932b9cc9b409d', variant: ButtonVariant.TERTIARY, icon: "contextual-menu", size: ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: () => (this.popoverEl.open = !this.popoverEl.open) }), h("z-popover", { key: '08fcadf9b57a3184f8fceef2925c19ef3d9f659e', ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open), position: this.popoverPosition }, h("slot", { key: '4f2ad7d81457d1132d3b156368bd96813994fc3c', name: "contextual-menu" }))))));
    }
    get host() { return this; }
    static get watchers() { return {
        "colspan": ["updateColspan"]
    }; }
    static get style() { return ZThStyle0; }
}, [1, "z-th", {
        "colspan": [2],
        "showMenu": [513, "show-menu"],
        "sticky": [516],
        "sortDirection": [1025, "sort-direction"],
        "popoverPosition": [1, "popover-position"],
        "isMenuOpen": [32]
    }, undefined, {
        "colspan": ["updateColspan"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-th", "z-button", "z-icon", "z-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "z-th":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTh$1);
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

const ZTh = ZTh$1;
const defineCustomElement = defineCustomElement$1;

export { ZTh, defineCustomElement };

//# sourceMappingURL=z-th.js.map