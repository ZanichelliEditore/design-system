import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { r as randomId } from './utils.js';
import './index2.js';
import { d as defineCustomElement$2 } from './index9.js';

const stylesCss = ":host{--columns:1;display:grid;min-width:max-content;box-sizing:border-box;grid-auto-flow:column;grid-template-columns:var(--z-table--expand-button-size, 0) repeat(var(--columns), minmax(128px, 1fr))}*{box-sizing:border-box}.z-tr--expand-button-container,::slotted(*){border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}::slotted(*:not(:last-child)){border-right:var(--z-table--cell-left-border, none)}:host([expandable]){--show-expandable-button:visible;cursor:pointer}:host([expandable]) ::slotted(*){grid-row:1}:host([expandable]) ::slotted(:nth-last-child(2)){border-right:none}:host([expandable]) ::slotted(*:last-child){border-left:0;grid-column:1 / span calc(var(--columns) + 1);grid-row:2}:host([expandable]:not([expanded])) ::slotted(*:last-child){display:none}:host([expanded]){margin-bottom:4px;box-shadow:0 4px 4px -2px var(--shadow-color-base)}:host([expanded]) .z-tr--expand-button-container,:host([expanded]) ::slotted(*){background-color:var(--color-surface02)}.z-tr--expand-button-container{display:flex;align-items:center;justify-content:center;background-color:var(--z-table--cells-background, var(--color-surface01))}.z-tr--expand-button-container button{display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:auto;appearance:none;background:transparent;cursor:pointer;visibility:var(--show-expandable-button, hidden)}.z-tr--expand-button-container button:focus{box-shadow:var(--shadow-focus-primary);outline:none}.z-tr--expand-button-container button z-icon{--z-icon-width:16px;--z-icon-height:16px}";
const ZTrStyle0 = stylesCss;

const ZTr$1 = /*@__PURE__*/ proxyCustomElement(class ZTr extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.expand = createEvent(this, "expand", 7);
        this.expandable = false;
        this.expanded = false;
        this.expandableContentId = undefined;
    }
    updateColumns() {
        const cells = Array.from(this.host.querySelectorAll("z-td, z-th"));
        if (this.expandable) {
            cells.pop();
        }
        const columns = cells.map((cell) => cell.colspan || 1).reduce((a, b) => a + b, 0);
        this.host.style.setProperty("--columns", `${columns}`);
        if (this.expandable) {
            const expandableContent = cells.pop();
            expandableContent.id = expandableContent.id || `z-tr-expandable-content-${randomId()}`;
            this.expandableContentId = expandableContent.id;
        }
    }
    /**
     * Handle click on row.
     * Skip expansion if the click is on a element with `prevent-expand` css class.
     */
    onRowClick(event) {
        const preventExpand = event.target.closest(".prevent-expand");
        if (!this.expandable || preventExpand) {
            return;
        }
        this.expanded = !this.expanded;
        this.expand.emit({ expanded: this.expanded });
    }
    componentWillLoad() {
        this.updateColumns();
    }
    render() {
        return (h(Host, { key: '1048c6109f085ef7d6a2c80ee1f821378f1419eb', role: "row", onClick: this.onRowClick.bind(this), expanded: this.expanded }, h("div", { key: 'b4333edd3915db24134ec862e61e42af75544544', class: "z-tr--expand-button-container" }, this.expandable && (h("button", { key: 'f5d0233257d0ffd2d1221b850f9d33565b882bfe', "aria-expanded": this.expanded ? "true" : "false", "aria-label": this.expanded ? "Comprimi riga" : "Espandi riga", "aria-controls": this.expandableContentId, type: "button" }, h("z-icon", { key: '0c0e51bac7a95bab954450447b2bce3dfa0079b6', name: this.expanded ? "minus-circled" : "plus-circled" })))), h("slot", { key: 'f7af8227af6ec842ead9b12ad13a6d1df448c9a6', onSlotchange: this.updateColumns.bind(this) })));
    }
    get host() { return this; }
    static get watchers() { return {
        "expandable": ["updateColumns"]
    }; }
    static get style() { return ZTrStyle0; }
}, [1, "z-tr", {
        "expandable": [516],
        "expanded": [32],
        "expandableContentId": [32]
    }, [[0, "colspanchange", "updateColumns"]], {
        "expandable": ["updateColumns"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-tr", "z-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "z-tr":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZTr$1);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZTr = ZTr$1;
const defineCustomElement = defineCustomElement$1;

export { ZTr, defineCustomElement };

//# sourceMappingURL=z-tr.js.map