import { r as registerInstance, h, H as Host, d as getElement } from './index-SFwvdS4t.js';

const stylesCss$1 = () => `:host{--z-table--cells-background:var(     --color-background   );display:block;box-sizing:border-box}:host([sticky]){position:sticky;z-index:2;top:0;box-shadow:0 2px 4px -2px var(--shadow-color-base)}:host(:focus-visible){box-shadow:none;outline:none}`;

const stylesCss = () => `z-table,table.z-table{background-color:var(--color-surface01);--z-table--cells-padding:calc(var(--space-unit) * 2)}table.z-table{border-collapse:collapse}z-thead,table.z-table thead{background-color:var(--color-background);--z-table--cells-bottom-border-size:var(--border-size-medium)}z-tfoot,table.z-table tfoot{border-top:var(--border-size-medium) solid var(--color-surface03);border-bottom:var(--border-size-medium) solid var(--color-surface03)}z-tfoot z-tr,table.z-table tfoot tr{border-bottom:calc(var(--z-table--cells-bottom-border-size)) solid var(--color-surface03) !important}z-tr,table.z-table tr{border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}z-td,z-th,table.z-table td,table.z-table th{padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));text-align:left}z-th:not(:first-child),z-td:not(:first-child),table.z-table th:not(:first-child),table.z-table td:not(:first-child){border-left:var(--z-table--cell-left-border, none)}z-table[bordered],table.z-table.z-table-bordered{--z-table--cell-left-border:1px solid var(--color-surface03)}table.z-table-hover>tbody>tr:hover>td,table.z-table-hover>tfoot>tr:hover>td{position:relative;background-color:var(--color-surface02)}table.z-table-hover>tbody>tr:hover>td::after,table.z-table-hover>tfoot>tr:hover>td::after{position:absolute;z-index:1;top:0;right:0;bottom:0;left:-1px;box-shadow:inset 0 var(--border-size-small) 0 var(--color-surface04),     inset 0 calc(var(--border-size-small) * -1) 0 var(--color-surface04);content:""}table.z-table-hover>tbody>tr:hover>td:first-child::after,table.z-table-hover>thead>tr:hover>th:first-child::after,table.z-table-hover>tfoot>tr:hover>td:first-child::after{left:0}`;

const ZThead = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If true, the header will be stuck to the top of the table.
         */
        this.sticky = false;
        /**
         * The element is focusable
         */
        this.isFocusable = false;
    }
    render() {
        return (h(Host, { key: 'daa59cf6627acea2cbd48f1b56910a22146f90f3', role: "rowgroup", tabIndex: this.isFocusable ? 0 : -1 }, h("slot", { key: 'ba7897a89465398dff471d7eb9d7a0d276599269' })));
    }
    get host() { return getElement(this); }
};
ZThead.style = stylesCss$1() + stylesCss();

export { ZThead as z_thead };
