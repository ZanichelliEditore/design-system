import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { B as ButtonVariant, e as ControlSize } from './index-03c8b0f0.js';

const stylesCss = ":host{position:relative;display:flex;min-width:128px;box-sizing:border-box;align-items:center;padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([show-menu])::after{display:inline-block;height:100%;margin-right:calc(var(--space-unit) * 4);background:transparent;content:\"\";user-select:none}.cell--menu-container{position:absolute;z-index:1;top:var(--space-unit);right:var(--space-unit)}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{opacity:1;pointer-events:all}@media (min-width: 768px) and (hover: hover){:host([show-menu=\"hover\"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu=\"hover\"]:hover) .cell--menu-container{opacity:1;pointer-events:all}}";

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
    return (h(Host, { role: "cell", "menu-open": this.isMenuOpen }, h("slot", null), this.showMenu && (h("div", { class: "cell--menu-container prevent-expand" }, h("z-button", { variant: ButtonVariant.TERTIARY, icon: "contextual-menu", size: ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: this.onMenuButtonClick.bind(this) }), h("z-popover", { ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open) }, h("slot", { name: "contextual-menu" }))))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "colspan": ["updateColspan"]
  }; }
};
ZTd.style = stylesCss;

export { ZTd as Z };
