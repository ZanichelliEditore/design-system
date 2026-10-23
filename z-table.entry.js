import { r as registerInstance, h, H as Host, d as getElement } from './index-DafJ7_Il.js';
import './z-tbody.entry.js';
import './z-tfoot.entry.js';
import './z-thead.entry.js';
import './z-tr.entry.js';
import './utils-CJc3A9NX.js';
import './index-DdetsoIY.js';
import './breakpoints-Q-tWjk7P.js';
import './z-td.entry.js';
import './z-th.entry.js';

const stylesCss$1 = () => `:host{position:relative;display:block;overflow:auto;min-width:max-content;max-width:100%;box-sizing:border-box;padding:var(--space-unit)}:host([expandable]){--z-table--expand-button-size:40px}`;

const stylesCss = () => `z-table,table.z-table{background-color:var(--color-surface01);--z-table--cells-padding:calc(var(--space-unit) * 2)}table.z-table{border-collapse:collapse}z-thead,table.z-table thead{background-color:var(--color-background);--z-table--cells-bottom-border-size:var(--border-size-medium)}z-tfoot,table.z-table tfoot{border-top:var(--border-size-medium) solid var(--color-surface03);border-bottom:var(--border-size-medium) solid var(--color-surface03)}z-tfoot z-tr,table.z-table tfoot tr{border-bottom:calc(var(--z-table--cells-bottom-border-size)) solid var(--color-surface03) !important}z-tr,table.z-table tr{border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}z-td,z-th,table.z-table td,table.z-table th{padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));text-align:left}z-th:not(:first-child),z-td:not(:first-child),table.z-table th:not(:first-child),table.z-table td:not(:first-child){border-left:var(--z-table--cell-left-border, none)}z-table[bordered],table.z-table.z-table-bordered{--z-table--cell-left-border:1px solid var(--color-surface03)}table.z-table-hover>tbody>tr:hover>td,table.z-table-hover>tfoot>tr:hover>td{position:relative;background-color:var(--color-surface02)}table.z-table-hover>tbody>tr:hover>td::after,table.z-table-hover>tfoot>tr:hover>td::after{position:absolute;z-index:1;top:0;right:0;bottom:0;left:-1px;box-shadow:inset 0 var(--border-size-small) 0 var(--color-surface04),     inset 0 calc(var(--border-size-small) * -1) 0 var(--color-surface04);content:""}table.z-table-hover>tbody>tr:hover>td:first-child::after,table.z-table-hover>thead>tr:hover>th:first-child::after,table.z-table-hover>tfoot>tr:hover>td:first-child::after{left:0}`;

const ZTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Whether the table cells should show a border between them.
         */
        this.bordered = false;
        /**
         * Whether the table contains some expandable rows.
         */
        this.expandable = false;
    }
    updateExpandable() {
        this.expandable = this.host.querySelectorAll("z-tr[expandable]").length > 0;
    }
    /**
     * Setup the table creating a mutation observer for the expandable attribute.
     */
    componentWillLoad() {
        this.expandableMutationObserver = new MutationObserver(() => {
            this.updateExpandable();
        });
        this.expandableMutationObserver.observe(this.host, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["expandable"],
            attributeOldValue: false,
        });
    }
    disconnectedCallback() {
        var _a;
        (_a = this.expandableMutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    render() {
        return (h(Host, { key: '2accba3d35c252853a9b19b15528855070165077', expandable: this.expandable }, h("div", { key: 'bdd3382b246e669c8600d116cda8a6ebc11f530d', class: "table", role: "table" }, h("slot", { key: 'c3cbdb04a91f0cd4301d8ba73578878864e0c3a1' }))));
    }
    get host() { return getElement(this); }
};
ZTable.style = stylesCss$1() + stylesCss();

export { ZTable as z_table };
