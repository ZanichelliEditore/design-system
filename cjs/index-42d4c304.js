'use strict';

const index = require('./index-5dc4a8de.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = ":host{position:relative;display:flex;min-width:128px;box-sizing:border-box;align-items:center;padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([show-menu])::after{display:inline-block;height:100%;margin-right:calc(var(--space-unit) * 4);background:transparent;content:\"\";user-select:none}.cell--menu-container{position:absolute;z-index:1;top:var(--space-unit);right:var(--space-unit)}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{opacity:1;pointer-events:all}@media (min-width: 768px) and (hover: hover){:host([show-menu=\"hover\"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu=\"hover\"]:hover) .cell--menu-container{opacity:1;pointer-events:all}}:host{background-color:var(--color-surface02);font-weight:var(--font-sb)}:host([sortable]){cursor:pointer}.z-th--sort-button{display:flex;align-items:center;justify-content:center;padding:0;border:none;margin-top:auto;background-color:transparent;cursor:pointer}.z-th--sort-button:focus{box-shadow:var(--shadow-focus-primary);outline:none}";
const ZThStyle0 = stylesCss;

const ZTh = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sort = index.createEvent(this, "sort", 7);
        this.colspan = undefined;
        this.showMenu = null;
        this.sticky = false;
        this.sortDirection = undefined;
        this.popoverPosition = index$1.PopoverPosition.AUTO;
        this.isMenuOpen = false;
    }
    /**
     * Get the value to set to the `aria-sort` attribute based on the current sort direction.
     */
    get ariaSortDirection() {
        if (!this.sortDirection) {
            return null;
        }
        return this.sortDirection === index$1.SortDirection.ASC ? "ascending" : "descending";
    }
    /**
     * Handle the click on the sort button.
     * @fires sort
     */
    handleSort() {
        if (!this.sortDirection) {
            return;
        }
        this.sortDirection = this.sortDirection === index$1.SortDirection.ASC ? index$1.SortDirection.DESC : index$1.SortDirection.ASC;
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
        return (index.h(index.Host, { key: '6d7379e559b77ea796584c9cdc49be8dabb3cd67', role: "columnheader", "menu-open": this.isMenuOpen, "aria-sort": this.ariaSortDirection }, index.h("slot", { key: 'e21bf2439c1061cf7acaeddb6a3afe8818112493' }), this.sortDirection && (index.h("button", { key: 'e65ed301cea08cb0cdaf3ce2b13cb06dc61705ea', class: "z-th--sort-button", type: "button", onClick: this.handleSort.bind(this) }, index.h("z-icon", { key: '1768ea275af78502035d66fb2a4f80fff68bc6e0', name: this.sortDirection === index$1.SortDirection.ASC ? "arrow-simple-up" : "arrow-simple-down", width: 14, height: 14 }))), this.showMenu && (index.h("div", { key: 'b516e407bc90fa95fa1ae914a344cdcd89f38336', class: "cell--menu-container" }, index.h("z-button", { key: '4f76bb047c904a88d2e78117811932b9cc9b409d', variant: index$1.ButtonVariant.TERTIARY, icon: "contextual-menu", size: index$1.ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: () => (this.popoverEl.open = !this.popoverEl.open) }), index.h("z-popover", { key: '08fcadf9b57a3184f8fceef2925c19ef3d9f659e', ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open), position: this.popoverPosition }, index.h("slot", { key: '4f2ad7d81457d1132d3b156368bd96813994fc3c', name: "contextual-menu" }))))));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "colspan": ["updateColspan"]
    }; }
};
ZTh.style = ZThStyle0;

exports.ZTh = ZTh;

//# sourceMappingURL=index-42d4c304.js.map