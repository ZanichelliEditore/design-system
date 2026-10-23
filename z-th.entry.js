import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-DafJ7_Il.js';
import { P as PopoverPosition, S as SortDirection, e as ControlSize, B as ButtonVariant } from './index-DdetsoIY.js';

const zTableCellsCss = () => `:host{position:relative;display:flex;max-width:100%;align-items:center;background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host,*{box-sizing:border-box}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([menu-open]){z-index:2}.cell--content{display:flex;width:100%;height:100%;align-items:center}:host([show-menu]) .cell--content{column-gap:var(--space-unit)}.cell--menu-container{margin-left:auto}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{z-index:1;opacity:1;pointer-events:all}:host .cell-popover{z-index:100}@media (min-width: 768px) and (hover: hover){:host([show-menu="hover"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu="hover"]:hover) .cell--menu-container{z-index:1;opacity:1;pointer-events:all}}`;

const stylesCss$1 = () => `:host{z-index:1;padding:0;background-color:var(--color-background);font-weight:var(--font-sb)}:host([show-sorting]) .cell--content{column-gap:var(--space-unit)}.z-th--sort-button{position:relative;padding:0;border:none;background-color:transparent;cursor:pointer;outline:none}.z-th--sort-button:focus,.z-th--sort-button:focus-visible{box-shadow:var(--shadow-focus-primary);opacity:1;outline:none;pointer-events:all}@media (min-width: 768px) and (hover: hover){:host([show-sorting="hover"]) .z-th--sort-button{opacity:0;pointer-events:none}:host([show-sorting="hover"]:hover) .z-th--sort-button,:host([show-sorting="hover"]) .z-th--sort-button:focus:focus-visible,:host([show-sorting="always"]) .z-th--sort-button,:host([sorted]) .z-th--sort-button{opacity:1;pointer-events:all}}:host([show-sorting="hover"]:hover) .z-th--sort-button::after,:host([show-sorting="hover"]) .z-th--sort-button:focus:focus-visible::after,:host([show-sorting="always"]) .z-th--sort-button::after,:host([sorted]) .z-th--sort-button::after{position:absolute;top:6px;left:6px;width:calc(100% - 12px);height:calc(100% - 10px);background-color:transparent;content:""}`;

const stylesCss = () => `z-table,table.z-table{background-color:var(--color-surface01);--z-table--cells-padding:calc(var(--space-unit) * 2)}table.z-table{border-collapse:collapse}z-thead,table.z-table thead{background-color:var(--color-background);--z-table--cells-bottom-border-size:var(--border-size-medium)}z-tfoot,table.z-table tfoot{border-top:var(--border-size-medium) solid var(--color-surface03);border-bottom:var(--border-size-medium) solid var(--color-surface03)}z-tfoot z-tr,table.z-table tfoot tr{border-bottom:calc(var(--z-table--cells-bottom-border-size)) solid var(--color-surface03) !important}z-tr,table.z-table tr{border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}z-td,z-th,table.z-table td,table.z-table th{padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));text-align:left}z-th:not(:first-child),z-td:not(:first-child),table.z-table th:not(:first-child),table.z-table td:not(:first-child){border-left:var(--z-table--cell-left-border, none)}z-table[bordered],table.z-table.z-table-bordered{--z-table--cell-left-border:1px solid var(--color-surface03)}table.z-table-hover>tbody>tr:hover>td,table.z-table-hover>tfoot>tr:hover>td{position:relative;background-color:var(--color-surface02)}table.z-table-hover>tbody>tr:hover>td::after,table.z-table-hover>tfoot>tr:hover>td::after{position:absolute;z-index:1;top:0;right:0;bottom:0;left:-1px;box-shadow:inset 0 var(--border-size-small) 0 var(--color-surface04),     inset 0 calc(var(--border-size-small) * -1) 0 var(--color-surface04);content:""}table.z-table-hover>tbody>tr:hover>td:first-child::after,table.z-table-hover>thead>tr:hover>th:first-child::after,table.z-table-hover>tfoot>tr:hover>td:first-child::after{left:0}`;

const ZTh = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sort = createEvent(this, "sort", 7);
        /**
         * Enables the contextual menu.
         * Can be set to "hover" or "always" to show the button only on cell hover or always.
         * Set a nullish value to hide the menu button.
         */
        this.showMenu = null;
        /**
         * Enables the sorting button.
         * Can be set to "hover" or "always" to show the button only on cell hover or always.
         * Set a nullish value to hide the sort button.
         */
        this.showSorting = null;
        /**
         * Whether the cell should stick.
         */
        this.sticky = false;
        /**
         * Sorted state of the column.
         */
        this.sorted = false;
        /**
         * Set popover position.
         */
        this.popoverPosition = PopoverPosition.AUTO;
        /**
         * Store the open state of the menu.
         */
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
            this.sorted = false;
            return;
        }
        this.sortDirection = this.sortDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;
        this.sorted = true;
        this.sort.emit({ sortDirection: this.sortDirection });
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
        return (h(Host, { key: 'db3a788009481e7bf625db4787850ddfc9b65203', role: "columnheader", "menu-open": this.isMenuOpen, "aria-sort": this.ariaSortDirection, sortable: this.showSorting }, h("div", { key: 'b9e3d66c8b74bd054257deccf64575bad12166b4', class: "cell--content" }, h("slot", { key: 'b9297277121a0798491644ca9e7fd86e99766975' }), this.showSorting && (h("button", { key: 'e2fa7f525d8138c95540ce5216e7d0df9fecdfd4', class: "z-th--sort-button", type: "button", onClick: this.handleSort.bind(this) }, h("z-icon", { key: '3c8b5d576386da794abdbc4ea48e9d9bab2ad1c9', name: this.sortDirection === SortDirection.DESC ? "arrow-simple-up" : "arrow-simple-down", width: 14, height: 14 }))), this.showMenu && (h("div", { key: '38a8b3f1cd7dd75c90953179c8527484f2c17fc7', class: "cell--menu-container" }, h("z-button", { key: 'f5ce6e168efba6c456a6fedad8a0103e37130d13', variant: ButtonVariant.TERTIARY, icon: "contextual-menu", size: ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: () => (this.popoverEl.open = !this.popoverEl.open) }), h("z-popover", { key: 'c989b847fa08f6b9f7a87a645c52a1163191b406', ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open), position: this.popoverPosition }, h("slot", { key: 'aac102b6bbc90923ce404a1b6499cf58c7277a00', name: "contextual-menu" })))))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "colspan": [{
                "updateColspan": 0
            }]
    }; }
};
ZTh.style = zTableCellsCss() + (stylesCss$1() + stylesCss());

export { ZTh as z_th };
