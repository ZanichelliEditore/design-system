import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-4968ce56.js';
import { P as PopoverPosition, S as SortDirection, B as ButtonVariant, e as ControlSize } from './index-47f23745.js';

const stylesCss = ":host{position:relative;display:flex;min-width:128px;box-sizing:border-box;align-items:center;padding:var(--z-table--cells-padding, calc(var(--space-unit) * 2));background-color:var(--color-surface01);gap:calc(var(--space-unit) * 2) var(--space-unit)}:host([sticky]){position:sticky;z-index:1;top:0;left:0;box-shadow:8px 0 16px -8px var(--shadow-color-base)}:host([show-menu])::after{display:inline-block;height:100%;margin-right:calc(var(--space-unit) * 4);background:transparent;content:\"\";user-select:none}.cell--menu-container{position:absolute;z-index:1;top:var(--space-unit);right:var(--space-unit)}:host(:not([show-menu])) .cell--menu-container{opacity:0;pointer-events:none}:host(:is([show-menu],[menu-open])) .cell--menu-container,:host([show-menu]) .cell--menu-container:focus-within{opacity:1;pointer-events:all}@media (min-width: 768px) and (hover: hover){:host([show-menu=\"hover\"]) .cell--menu-container{opacity:0;pointer-events:none}:host([show-menu=\"hover\"]:hover) .cell--menu-container{opacity:1;pointer-events:all}}:host{background-color:var(--color-surface02);font-weight:var(--font-sb)}:host([sortable]){cursor:pointer}.z-th--sort-button{display:flex;align-items:center;justify-content:center;padding:0;border:none;margin-top:auto;background-color:transparent;cursor:pointer}.z-th--sort-button:focus{box-shadow:var(--shadow-focus-primary);outline:none}";

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
     * Whether the cell should stick.
     */
    this.sticky = false;
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
      return;
    }
    this.sortDirection = this.sortDirection === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;
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
    return (h(Host, { role: "columnheader", "menu-open": this.isMenuOpen, "aria-sort": this.ariaSortDirection }, h("slot", null), this.sortDirection && (h("button", { class: "z-th--sort-button", type: "button", onClick: this.handleSort.bind(this) }, h("z-icon", { name: this.sortDirection === SortDirection.ASC ? "arrow-simple-up" : "arrow-simple-down", width: 14, height: 14 }))), this.showMenu && (h("div", { class: "cell--menu-container" }, h("z-button", { variant: ButtonVariant.TERTIARY, icon: "contextual-menu", size: ControlSize.X_SMALL, ref: (el) => (this.menuTrigger = el), onClick: () => (this.popoverEl.open = !this.popoverEl.open) }), h("z-popover", { ref: (el) => (this.popoverEl = el), bindTo: this.menuTrigger, onOpenChange: (event) => (this.isMenuOpen = event.detail.open), position: this.popoverPosition }, h("slot", { name: "contextual-menu" }))))));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "colspan": ["updateColspan"]
  }; }
};
ZTh.style = stylesCss;

export { ZTh as Z };
