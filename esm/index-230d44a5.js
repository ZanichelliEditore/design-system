import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-a2130b6a.js';
import { P as PopoverPosition, B as ButtonVariant, e as ControlSize } from './index-b7dbacb4.js';

const stylesCss = ":host{position:relative;display:flex;min-width:128px;box-sizing:border-box;align-items:center;padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([show-menu])::after{display:inline-block;height:100%;margin-right:calc(var(--space-unit) * 4);background:transparent;content:\"\";user-select:none}.cell--menu-container{position:absolute;z-index:1;top:var(--space-unit);right:var(--space-unit)}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{opacity:1;pointer-events:all}:host .cell-popover{z-index:100}@media (min-width: 768px) and (hover: hover){:host([show-menu=\"hover\"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu=\"hover\"]:hover) .cell--menu-container{opacity:1;pointer-events:all}}";
const ZTdStyle0 = stylesCss;

const ZTd = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colspanChange = createEvent(this, "colspanChange", 6);
        this.colspan = undefined;
        this.sticky = false;
        this.showMenu = null;
        this.popoverPosition = PopoverPosition.AUTO;
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
        return (h(Host, { key: '36a62d2c751b3b889c7f69280418e95ff02192d5', role: "cell", "menu-open": this.isMenuOpen }, h("slot", { key: '6d593df3a5d84033f5ec055a00dc972d113ac4cb' }), this.showMenu && (h("div", { key: '77fbfdd8dc31fcfb6694461c8c0ed430323c3926', class: "cell--menu-container prevent-expand" }, h("z-button", { key: 'caf153b8ba5861b3dc7eabf966cdfdd9d3b197da', variant: ButtonVariant.TERTIARY, icon: "contextual-menu", size: ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: this.onMenuButtonClick.bind(this) }), h("z-popover", { key: 'd89b8e0e5b8e622a6e9a08640bff28d64ff0eb07', class: "cell-popover", ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open), position: this.popoverPosition }, h("slot", { key: '339066d4dd0d6d57ac2358e6a8105aa690b2ca06', name: "contextual-menu" }))))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "colspan": ["updateColspan"]
    }; }
};
ZTd.style = ZTdStyle0;

export { ZTd as Z };

//# sourceMappingURL=index-230d44a5.js.map