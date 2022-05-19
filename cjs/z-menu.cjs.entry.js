'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');

const stylesCss = ":host,::slotted(*),*{box-sizing:border-box}:host{display:inline-flex;flex-direction:column;position:relative}::slotted(a){color:var(--color-text01);text-decoration:none}::slotted(*){font-family:var(--font-family-sans);font-weight:var(--font-rg)}.menu-label{margin:0;padding:0;color:inherit;background:transparent;border:0;border-radius:0;outline:none;text-align:left}button.menu-label{cursor:pointer}.menu-label:focus-within{z-index:1;box-shadow:var(--shadow-focus-primary);margin-right:calc(var(--space-unit) * -0.5);margin-left:calc(var(--space-unit) * -0.5);padding-right:calc(var(--space-unit) * 0.5);padding-left:calc(var(--space-unit) * 0.5)}.menu-label .menu-label-content{display:flex;align-items:center;padding:var(--space-unit) 0;border-bottom:var(--border-size-large) solid var(--color-surface05)}:host([active]) .menu-label-content,:host([open]) .menu-label-content,.menu-label:hover .menu-label-content,.menu-label:focus-within .menu-label-content{border-color:var(--color-secondary01)}.menu-label ::slotted(*){width:100%;margin:0;appearance:none;font-size:var(--font-size-5);line-height:1.2;outline:none}.menu-label z-icon{margin-left:calc(var(--space-unit) * 4);fill:currentColor}.content{background:var(--color-surface01)}.content[hidden]{display:none}:host([floating]) .content{width:375px;max-width:100vw;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host(:not([floating])) .content{width:100%}:host([floating]) .content{position:absolute;top:100%;left:0;box-shadow:var(--shadow-2);min-width:100%}.header{display:flex;align-items:center;padding:var(--space-unit) 0 calc(var(--space-unit) * 2)}.header ::slotted(img[slot='header']){width:calc(var(--space-unit) * 11.25);object-fit:contain;height:auto}.header ::slotted([slot='header']:not(:first-child)){margin:auto 0;margin-left:calc(var(--space-unit) * 2.5);font-weight:var(--font-sb);font-size:var(--font-size-3);line-height:1.5}.items{display:flex;flex-direction:column;align-items:flex-start;background:inherit}.items>::slotted([slot='item']){display:inline-flex;width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25;outline:none}.items>::slotted([slot='item']:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}.items>::slotted([slot='item']:not(z-menu-section)){padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);border-bottom:var(--border-size-small) solid var(--color-surface05)}.items>::slotted([slot='item']:hover),.items>::slotted([slot='item']:active){border-color:var(--color-secondary01)}";

const ZMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.opened = index.createEvent(this, "opened", 7);
    this.closed = index.createEvent(this, "closed", 7);
    /**
     * Flag to set the display mode of the list.
     * If true, the list will be absolutely positioned under the menu label,
     * stacked beneath it otherwise.
     * @default false
     */
    this.floating = false;
    /**
     * The opening state of the menu.
     * @default false
     */
    this.open = false;
    this.toggle = this.toggle.bind(this);
    this.checkContent = this.checkContent.bind(this);
    this.onItemsChange = this.onItemsChange.bind(this);
  }
  toggle() {
    if (!this.hasContent) {
      return;
    }
    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
  }
  /** Close the floating list when a click is performed outside of this Element. */
  handleClick(ev) {
    if (!this.floating ||
      !this.open ||
      this.hostElement.contains(ev.target)) {
      return;
    }
    this.reflow();
    this.open = false;
    this.closed.emit();
  }
  onOpenChanged() {
    if (this.open) {
      this.reflow(true);
    }
    else {
      cancelAnimationFrame(this.raf);
    }
  }
  componentWillLoad() {
    this.checkContent();
  }
  /**
   * Correctly set position of the floating menu in order to prevent overflow.
   * @param live Should run the method on every refresh frame.
   */
  reflow(live = false) {
    if (this.content) {
      const { style } = this.content;
      const { left } = this.hostElement.getBoundingClientRect();
      const widthPx = getComputedStyle(this.content).width;
      const width = widthPx ? parseFloat(widthPx.replace('px', '')) : 375;
      const safeScrollbarSpace = 30;
      style.left = `${Math.min(window.innerWidth - left - width - safeScrollbarSpace, 0)}px`;
    }
    if (live) {
      this.raf = requestAnimationFrame(this.reflow.bind(this, live));
    }
  }
  /**
   * Check if some content slot is set.
   */
  checkContent() {
    this.hasHeader = !!this.hostElement.querySelectorAll('[slot="header"]').length;
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length || this.hasHeader;
  }
  /**
   * Set `menuitem` role to all menu items.
   */
  onItemsChange() {
    this.checkContent();
    const items = this.hostElement.querySelectorAll('[slot="item"]');
    items === null || items === void 0 ? void 0 : items.forEach((item) => item.setAttribute('role', 'menuitem'));
  }
  renderMenuLabel() {
    if (this.hasContent) {
      return index.h("button", { class: "menu-label", "aria-expanded": this.open ? 'true' : 'false', "aria-label": this.open ? 'Chiudi menù' : 'Apri menù', onClick: this.toggle }, index.h("div", { class: "menu-label-content" }, index.h("slot", null), index.h("z-icon", { name: this.open ? 'chevron-up' : 'chevron-down' })));
    }
    return index.h("div", { class: "menu-label" }, index.h("div", { class: "menu-label-content" }, index.h("slot", null)));
  }
  render() {
    return [
      this.renderMenuLabel(),
      index.h("div", { class: "content", ref: (el) => { this.content = el; }, hidden: !this.open }, this.hasHeader && index.h("header", { class: "header" }, index.h("slot", { name: "header", onSlotchange: this.checkContent })), index.h("div", { class: "items", role: "menu" }, index.h("slot", { name: "item", onSlotchange: this.onItemsChange })))
    ];
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "open": ["onOpenChanged"]
  }; }
};
ZMenu.style = stylesCss;

exports.z_menu = ZMenu;
