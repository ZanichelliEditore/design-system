import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-ab5f1eaa.js';
import { B as ButtonVariant, e as ControlSize } from './index-2255c6c8.js';

const stylesCss = ":host{position:relative;display:-ms-flexbox;display:flex;min-width:128px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host([sticky]){position:-webkit-sticky;position:sticky;z-index:1;top:0;left:0;-webkit-box-shadow:8px 0 16px -8px var(--shadow-color-base);box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([show-menu])::after{display:inline-block;height:100%;margin-right:calc(var(--space-unit) * 4);background:transparent;content:\"\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cell--menu-container{position:absolute;z-index:1;top:var(--space-unit);right:var(--space-unit)}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{opacity:1;pointer-events:all}@media (min-width: 768px) and (hover: hover){:host([show-menu=\"hover\"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu=\"hover\"]:hover) .cell--menu-container{opacity:1;pointer-events:all}}";
const ZTdStyle0 = stylesCss;

const ZTd = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colspanChange = createEvent(this, "colspanChange", 6);
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
        return (h(Host, { key: 'b0b39511d34b7f04a8a21c22ad4a8f967c200529', role: "cell", "menu-open": this.isMenuOpen }, h("slot", { key: '93467b923af5d4145dc81c025c261a880c57e2bb' }), this.showMenu && (h("div", { key: '158f04cdf214db6813b70bdbfa384e4627320b17', class: "cell--menu-container prevent-expand" }, h("z-button", { key: '71f7d601c03a61e091b28e79f6198dcb91da9621', variant: ButtonVariant.TERTIARY, icon: "contextual-menu", size: ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: this.onMenuButtonClick.bind(this) }), h("z-popover", { key: '00cf3359460a45552b1a720d2f50679cad1b2671', ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open) }, h("slot", { key: '7e04b722b396abc56dc5494130d78861731bb526', name: "contextual-menu" }))))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "colspan": ["updateColspan"]
    }; }
};
ZTd.style = ZTdStyle0;

export { ZTd as Z };

//# sourceMappingURL=index-5f6d3ef8.js.map