import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { P as PopoverPosition, e as ControlSize, B as ButtonVariant } from './index-DdetsoIY.js';

const zTableCellsCss = () => `:host{position:relative;display:flex;max-width:100%;align-items:center;background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host,*{box-sizing:border-box}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([menu-open]){z-index:2}.cell--content{display:flex;width:100%;height:100%;align-items:center}:host([show-menu]) .cell--content{column-gap:var(--space-unit)}.cell--menu-container{margin-left:auto}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{z-index:1;opacity:1;pointer-events:all}:host .cell-popover{z-index:100}@media (min-width: 768px) and (hover: hover){:host([show-menu="hover"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu="hover"]:hover) .cell--menu-container{z-index:1;opacity:1;pointer-events:all}}`;

const stylesCss = () => `z-table,table.z-table{background-color:var(--color-surface01);--z-table--cells-padding:calc(var(--space-unit) * 2)}table.z-table{border-collapse:collapse}z-thead,table.z-table thead{background-color:var(--color-background);--z-table--cells-bottom-border-size:var(--border-size-medium)}z-tfoot,table.z-table tfoot{border-top:var(--border-size-medium) solid var(--color-surface03);border-bottom:var(--border-size-medium) solid var(--color-surface03)}z-tfoot z-tr,table.z-table tfoot tr{border-bottom:calc(var(--z-table--cells-bottom-border-size)) solid var(--color-surface03) !important}z-tr,table.z-table tr{border-bottom:var(--z-table--cells-bottom-border-size, var(--border-size-small)) solid var(--color-surface03)}z-td,z-th,table.z-table td,table.z-table th{padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));text-align:left}z-th:not(:first-child),z-td:not(:first-child),table.z-table th:not(:first-child),table.z-table td:not(:first-child){border-left:var(--z-table--cell-left-border, none)}z-table[bordered],table.z-table.z-table-bordered{--z-table--cell-left-border:1px solid var(--color-surface03)}table.z-table-hover>tbody>tr:hover>td,table.z-table-hover>tfoot>tr:hover>td{position:relative;background-color:var(--color-surface02)}table.z-table-hover>tbody>tr:hover>td::after,table.z-table-hover>tfoot>tr:hover>td::after{position:absolute;z-index:1;top:0;right:0;bottom:0;left:-1px;box-shadow:inset 0 var(--border-size-small) 0 var(--color-surface04),     inset 0 calc(var(--border-size-small) * -1) 0 var(--color-surface04);content:""}table.z-table-hover>tbody>tr:hover>td:first-child::after,table.z-table-hover>thead>tr:hover>th:first-child::after,table.z-table-hover>tfoot>tr:hover>td:first-child::after{left:0}`;

const ZTd = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colspanChange = createEvent(this, "colspanChange", 6);
        /**
         * Whether the cell should stick.
         */
        this.sticky = false;
        /**
         * Enables the contextual menu.
         * Can be set to "hover" or "always" to show the button only on cell hover or always.
         * Set a nullish value to hide the menu button.
         */
        this.showMenu = null;
        /**
         * Set the popover position, the default is "auto".
         */
        this.popoverPosition = PopoverPosition.AUTO;
        /**
         * Store the open state of the menu.
         */
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
        return (h(Host, { key: '6f49c2168c28a2acd1eb77401b6664a909770330', role: "cell", "menu-open": this.isMenuOpen }, h("div", { key: 'dca80731605efa309f88f6c4e5b3e05fc1b6f2d8', class: "cell--content" }, h("slot", { key: '980d81d5d5296f41f535488dcad732e5d5eb58ce' }), this.showMenu && (h("div", { key: 'f58e65a67d7a897be2bcbec22b50b8efb4d82995', class: "cell--menu-container prevent-expand" }, h("z-button", { key: '3d701ae5ba5af6372fad70bc0582a46ac48b75c2', variant: ButtonVariant.TERTIARY, icon: "contextual-menu", size: ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: this.onMenuButtonClick.bind(this) }), h("z-popover", { key: '5d5f94967a72ffdb7384c071d965e90abfb8ea0b', class: "cell-popover", ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open), position: this.popoverPosition }, h("slot", { key: 'fef55973f37e93062c6e3229fdbdd5311d0f2920', name: "contextual-menu" })))))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "colspan": [{
                "updateColspan": 0
            }]
    }; }
};
ZTd.style = zTableCellsCss() + stylesCss();

export { ZTd as z_td };
