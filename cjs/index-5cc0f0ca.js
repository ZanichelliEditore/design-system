'use strict';

const index = require('./index-e801ae96.js');
const index$1 = require('./index-bab7a651.js');

const stylesCss = ":host{position:relative;display:flex;min-width:128px;box-sizing:border-box;align-items:center;padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([show-menu])::after{display:inline-block;height:100%;margin-right:calc(var(--space-unit) * 4);background:transparent;content:\"\";user-select:none}.cell--menu-container{position:absolute;z-index:1;top:var(--space-unit);right:var(--space-unit)}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{opacity:1;pointer-events:all}@media (min-width: 768px) and (hover: hover){:host([show-menu=\"hover\"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu=\"hover\"]:hover) .cell--menu-container{opacity:1;pointer-events:all}}";
const ZTdStyle0 = stylesCss;

const ZTd = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.colspanChange = index.createEvent(this, "colspanChange", 6);
        this.colspan = undefined;
        this.sticky = false;
        this.showMenu = null;
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
        return (index.h(index.Host, { key: '1fea1ea7d31da2e0042696d5c3036493ab0b173d', role: "cell", "menu-open": this.isMenuOpen }, index.h("slot", { key: 'a836a18a19decbe4b7fed5a6f038332c5c14cdd2' }), this.showMenu && (index.h("div", { key: '7d06355b81a0bac85f5e8248737881436a44e3d7', class: "cell--menu-container prevent-expand" }, index.h("z-button", { key: '4d039e48c2e30cfb522fda920ae3aaadaa3ef8ae', variant: index$1.ButtonVariant.TERTIARY, icon: "contextual-menu", size: index$1.ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: this.onMenuButtonClick.bind(this) }), index.h("z-popover", { key: 'efa44a812bb9f7c9e18ab884fcf53685d90de52e', ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open) }, index.h("slot", { key: '010336ffd3977a84af2c616d300afc7001e225a4', name: "contextual-menu" }))))));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "colspan": ["updateColspan"]
    }; }
};
ZTd.style = ZTdStyle0;

exports.ZTd = ZTd;

//# sourceMappingURL=index-5cc0f0ca.js.map