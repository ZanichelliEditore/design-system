'use strict';

const index = require('./index-dc60bee7.js');
const utils = require('./utils-d0b10736.js');
require('./index-3836ecee.js');
require('./index-e5ff8fd3.js');

const stylesCss = ":host{--columns:1;display:grid;min-width:max-content;box-sizing:border-box;grid-auto-flow:column;grid-template-columns:var(--z-table--expand-button-size, 0) repeat(var(--columns), minmax(128px, 1fr))}*{box-sizing:border-box}.z-tr--expand-button-container,::slotted(*){border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}::slotted(*:not(:last-child)){border-right:var(--z-table--cell-left-border, none)}:host([expandable]){--show-expandable-button:visible;cursor:pointer}:host([expandable]) ::slotted(*){grid-row:1}:host([expandable]) ::slotted(:nth-last-child(2)){border-right:none}:host([expandable]) ::slotted(*:last-child){border-left:0;grid-column:1 / span calc(var(--columns) + 1);grid-row:2}:host([expandable]:not([expanded])) ::slotted(*:last-child){display:none}:host([expanded]){margin-bottom:4px;box-shadow:0 4px 4px -2px var(--shadow-color-base)}:host([expanded]) .z-tr--expand-button-container,:host([expanded]) ::slotted(*){background-color:var(--color-surface02)}.z-tr--expand-button-container{display:flex;align-items:center;justify-content:center;background-color:var(--z-table--cells-background, var(--color-surface01))}.z-tr--expand-button-container button{display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:auto;appearance:none;background:transparent;cursor:pointer;visibility:var(--show-expandable-button, hidden)}.z-tr--expand-button-container button:focus{box-shadow:var(--shadow-focus-primary);outline:none}.z-tr--expand-button-container button z-icon{--z-icon-width:16px;--z-icon-height:16px}";
const ZTrStyle0 = stylesCss;

const ZTr = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.expand = index.createEvent(this, "expand", 7);
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
            expandableContent.id = expandableContent.id || `z-tr-expandable-content-${utils.randomId()}`;
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
        return (index.h(index.Host, { key: '23e6468561e474d51304677536e0d731fa09cfbf', role: "row", onClick: this.onRowClick.bind(this), expanded: this.expanded }, index.h("div", { key: 'e716dd6247818a285aacd88109964cf7b063b317', class: "z-tr--expand-button-container" }, this.expandable && (index.h("button", { "aria-expanded": this.expanded ? "true" : "false", "aria-label": this.expanded ? "Comprimi riga" : "Espandi riga", "aria-controls": this.expandableContentId, type: "button" }, index.h("z-icon", { name: this.expanded ? "minus-circled" : "plus-circled" })))), index.h("slot", { key: '0de8d962ba7e9c72aa614c76052bab607b83a04e', onSlotchange: this.updateColumns.bind(this) })));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "expandable": ["updateColumns"]
    }; }
};
ZTr.style = ZTrStyle0;

exports.ZTr = ZTr;

//# sourceMappingURL=index-7c62141b.js.map