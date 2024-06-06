'use strict';

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');

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
        return (index.h(index.Host, { key: '4c8c986b18fffe96985174dddd6b4ef77ceaa1ce', role: "cell", "menu-open": this.isMenuOpen }, index.h("slot", { key: 'a40bcbb99d5ffc1e962b420ffb89f13cbcb3875e' }), this.showMenu && (index.h("div", { class: "cell--menu-container prevent-expand" }, index.h("z-button", { variant: index$1.ButtonVariant.TERTIARY, icon: "contextual-menu", size: index$1.ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: this.onMenuButtonClick.bind(this) }), index.h("z-popover", { ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open) }, index.h("slot", { name: "contextual-menu" }))))));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "colspan": ["updateColspan"]
    }; }
};
ZTd.style = ZTdStyle0;

exports.ZTd = ZTd;

//# sourceMappingURL=index-3836ecee.js.map