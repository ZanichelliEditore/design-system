import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-ab5f1eaa.js';
import { r as randomId } from './utils-7983d02c.js';
import './index-5f6d3ef8.js';
import './index-2501b2b5.js';

const stylesCss = ":host{--columns:1;display:grid;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;-webkit-box-sizing:border-box;box-sizing:border-box;grid-auto-flow:column;grid-template-columns:var(--z-table--expand-button-size, 0) repeat(var(--columns), minmax(128px, 1fr))}*{-webkit-box-sizing:border-box;box-sizing:border-box}.z-tr--expand-button-container,::slotted(*){border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}::slotted(*:not(:last-child)){border-right:var(--z-table--cell-left-border, none)}:host([expandable]){--show-expandable-button:visible;cursor:pointer}:host([expandable]) ::slotted(*){grid-row:1}:host([expandable]) ::slotted(:nth-last-child(2)){border-right:none}:host([expandable]) ::slotted(*:last-child){border-left:0;grid-column:1 / span calc(var(--columns) + 1);grid-row:2}:host([expandable]:not([expanded])) ::slotted(*:last-child){display:none}:host([expanded]){margin-bottom:4px;-webkit-box-shadow:0 4px 4px -2px var(--shadow-color-base);box-shadow:0 4px 4px -2px var(--shadow-color-base)}:host([expanded]) .z-tr--expand-button-container,:host([expanded]) ::slotted(*){background-color:var(--color-surface02)}.z-tr--expand-button-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--z-table--cells-background, var(--color-surface01))}.z-tr--expand-button-container button{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0;border:none;margin:auto;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;visibility:var(--show-expandable-button, hidden)}.z-tr--expand-button-container button:focus{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none}.z-tr--expand-button-container button z-icon{--z-icon-width:16px;--z-icon-height:16px}";
const ZTrStyle0 = stylesCss;

const ZTr = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'a7834f72abcf18e74ff16ff9dbbcb4e987f673df', role: "row", onClick: this.onRowClick.bind(this), expanded: this.expanded }, h("div", { key: 'badaec159c7abf449da9c7015fb2fa240ce14377', class: "z-tr--expand-button-container" }, this.expandable && (h("button", { key: '6e312e5e8f907d05968b636f6368cda6397214eb', "aria-expanded": this.expanded ? "true" : "false", "aria-label": this.expanded ? "Comprimi riga" : "Espandi riga", "aria-controls": this.expandableContentId, type: "button" }, h("z-icon", { key: 'e054cb205c4a81e1e88509300976133c21f27d0f', name: this.expanded ? "minus-circled" : "plus-circled" })))), h("slot", { key: '95b75f93a1c27d6245e8993dcdfeef3f614c1843', onSlotchange: this.updateColumns.bind(this) })));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "expandable": ["updateColumns"]
    }; }
};
ZTr.style = ZTrStyle0;

export { ZTr as Z };

//# sourceMappingURL=index-a4f1946a.js.map