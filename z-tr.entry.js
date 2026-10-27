import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { r as randomId } from './utils-CJc3A9NX.js';
import './z-td.entry.js';
import './z-th.entry.js';
import './index-DdetsoIY.js';
import './breakpoints-Q-tWjk7P.js';

const stylesCss$1 = () => `:host{position:relative;display:grid;width:100%;box-sizing:border-box;grid-auto-flow:column;grid-template-columns:var(--z-table--expand-button-size, 0) repeat(var(--columns), minmax(128px, 1fr));--columns:1}*{box-sizing:border-box}:host([expandable]){--show-expandable-button:visible;cursor:pointer}:host([expandable]) ::slotted(*){grid-row:1}:host([expandable]) ::slotted(:nth-last-child(2)){border-right:none}:host([expandable]) ::slotted(*:last-child){border-top:var(--border-size-small) solid var(--color-surface03);border-left:0;grid-column:1 / span calc(var(--columns) + 1);grid-row:2}:host([expandable]:not([expanded])) ::slotted(*:last-child){display:none}:host([expanded]){margin-bottom:4px;box-shadow:0 4px 4px -2px var(--shadow-color-base)}:host([expanded]) .z-tr--expand-button-container,:host([expanded]) ::slotted(*){border-left:0 !important;background-color:var(--color-background)}:host([tabIndex]:hover) ::slotted(z-td),:host([tabIndex]:hover) ::slotted(z-th),:host([tabIndex]:hover) .z-tr--expand-button-container{background-color:var(--color-surface02)}:host([tabIndex]:hover) .z-tr--focus-overlay{border-top:var(--border-size-small) solid var(--color-surface04);border-bottom:var(--border-size-small) solid var(--color-surface04)}:host(:focus){position:relative;z-index:20;border:none !important;box-shadow:var(--shadow-focus-primary);outline:none}.z-tr--expand-button-container{display:flex;align-items:center;justify-content:center;background-color:var(--z-table--cells-background, var(--color-surface01))}.z-tr--expand-button-container button{display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:auto;appearance:none;background:transparent;cursor:pointer;visibility:var(--show-expandable-button, hidden)}.z-tr--expand-button-container button z-icon{--z-icon-width:16px;--z-icon-height:16px}.z-tr--focus-overlay{position:absolute;z-index:30;top:calc(var(--border-size-small) * -1);bottom:0;left:0;width:100%;height:calc(100% + (var(--border-size-small) * 2));box-shadow:none;outline:none;pointer-events:none;transition:box-shadow 0.2s}:host(:focus) .z-tr--focus-overlay{box-shadow:0 0 0 2px var(--shadow-focus-primary),     var(--shadow-focus-primary);outline:none}:host(:focus) ::slotted(*){border-bottom:none}:host(:focus) .z-tr--expand-button-container{border-bottom:none}`;

const stylesCss = () => `z-table,table.z-table{background-color:var(--color-surface01);--z-table--cells-padding:calc(var(--space-unit) * 2)}table.z-table{border-collapse:collapse}z-thead,table.z-table thead{background-color:var(--color-background);--z-table--cells-bottom-border-size:var(--border-size-medium)}z-tfoot,table.z-table tfoot{border-top:var(--border-size-medium) solid var(--color-surface03);border-bottom:var(--border-size-medium) solid var(--color-surface03)}z-tfoot z-tr,table.z-table tfoot tr{border-bottom:calc(var(--z-table--cells-bottom-border-size)) solid var(--color-surface03) !important}z-tr,table.z-table tr{border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}z-td,z-th,table.z-table td,table.z-table th{padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));text-align:left}z-th:not(:first-child),z-td:not(:first-child),table.z-table th:not(:first-child),table.z-table td:not(:first-child){border-left:var(--z-table--cell-left-border, none)}z-table[bordered],table.z-table.z-table-bordered{--z-table--cell-left-border:1px solid var(--color-surface03)}table.z-table-hover>tbody>tr:hover>td,table.z-table-hover>tfoot>tr:hover>td{position:relative;background-color:var(--color-surface02)}table.z-table-hover>tbody>tr:hover>td::after,table.z-table-hover>tfoot>tr:hover>td::after{position:absolute;z-index:1;top:0;right:0;bottom:0;left:-1px;box-shadow:inset 0 var(--border-size-small) 0 var(--color-surface04),     inset 0 calc(var(--border-size-small) * -1) 0 var(--color-surface04);content:""}table.z-table-hover>tbody>tr:hover>td:first-child::after,table.z-table-hover>thead>tr:hover>th:first-child::after,table.z-table-hover>tfoot>tr:hover>td:first-child::after{left:0}`;

const ZTr = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.expand = createEvent(this, "expand", 7);
        /**
         * Whether the row is expandable.
         * Use a `z-td` as the last cell of the row for the additional content.
         * It will show a button to expand/collapse the row.
         * The last cell will be hidden until the button or row is clicked.
         *
         * If some element inside the expandable row contains the `prevent-expand` css class,
         * the row will not expand by clicking that element.
         */
        this.expandable = false;
        /**
         * Whether the row is currently expanded.
         */
        this.expanded = false;
    }
    updateColumns() {
        const cells = Array.from(this.host.querySelectorAll("z-td, z-th"));
        if (this.expandable) {
            const expandableContent = cells.pop();
            expandableContent.id = expandableContent.id || `z-tr-expandable-content-${randomId()}`;
            this.expandableContentId = expandableContent.id;
        }
        const columns = cells.map((cell) => cell.colspan || 1).reduce((a, b) => a + b, 0);
        this.host.style.setProperty("--columns", `${columns}`);
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
    onKeyDown(event) {
        if (!this.expandable) {
            return;
        }
        const active = document.activeElement;
        if (active !== this.host) {
            return;
        }
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.expanded = !this.expanded;
            this.expand.emit({ expanded: this.expanded });
        }
    }
    componentWillLoad() {
        this.updateColumns();
    }
    render() {
        return (h(Host, { key: '80423ab104796d4bc50e3dbeafd26a417a41594e', role: "row", tabIndex: this.expandable ? 0 : undefined, expanded: this.expanded, onClick: this.onRowClick.bind(this), onKeyDown: this.onKeyDown.bind(this) }, h("div", { key: 'd0ec5fa359865b1eb486d21a478f82b61a10bf18', class: "z-tr--focus-overlay", "aria-hidden": "true" }), h("div", { key: 'e1f4114f91e1ff59c0ff4b4880b74bceb1702cba', class: "z-tr--expand-button-container" }, this.expandable && (h("button", { key: 'bef3c43e06a20de50f2aacf88b6c80fc4822403a', tabIndex: -1, "aria-expanded": this.expanded ? "true" : "false", "aria-label": this.expanded ? "Comprimi riga" : "Espandi riga", "aria-controls": this.expandableContentId, type: "button" }, h("z-icon", { key: '803c8640aacbd34ba3de287f519d934cb9d974ca', name: this.expanded ? "minus-circled" : "plus-circled" })))), h("slot", { key: 'bf8e10753f600ad984a06a710d19680e52507ab2', onSlotchange: this.updateColumns.bind(this) })));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "expandable": [{
                "updateColumns": 0
            }]
    }; }
};
ZTr.style = stylesCss$1() + stylesCss();

export { ZTr as z_tr };
