import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-90e18641.js';

const stylesCss = ":host{display:inline-flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:0;font-family:var(--font-family-sans)}:host,::slotted(*),*{box-sizing:border-box}::slotted(a){text-decoration:none}::slotted(*){font-family:var(--font-family-sans);font-weight:var(--font-rg);color:var(--color-text01)}:host([active]) .label,:host([open]) .label,.label:hover{border-color:var(--color-secondary01)}.label{display:flex;align-items:center;width:100%;margin:0;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);text-align:left;background:transparent;border-radius:0;border:0;border-bottom:var(--border-size-small) solid var(--color-surface05);cursor:pointer}.label ::slotted(*){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25}.label:focus:focus-visible{outline:none;box-shadow:var(--shadow-focus-primary)}.label z-icon{margin-left:calc(var(--space-unit) * 4);fill:currentColor}.items{display:flex;flex-direction:column;width:100%;padding:calc(var(--space-unit) * 0.5);padding-bottom:calc(var(--space-unit) * 2)}.items>::slotted([slot='item']){display:inline-flex;margin:0;padding:calc(var(--space-unit) * 0.5);font-size:var(--font-size-2);line-height:1.4;outline:none}.items>::slotted([slot='item']:last-child){padding-bottom:0}.items>::slotted([slot='item']:focus:focus-visible){box-shadow:var(--shadow-focus-primary);color:var(--color-secondary01)}.items>::slotted([slot='item']:hover){color:var(--color-secondary01)}";

const ZMenuSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.opened = createEvent(this, "opened", 7);
    this.closed = createEvent(this, "closed", 7);
  }
  toggle() {
    if (!this.hasContent) {
      return;
    }
    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
  }
  /** Close the list when a click is performed outside of this Element. */
  handleClick(ev) {
    if (!this.open || this.hostElement.contains(ev.target)) {
      return;
    }
    this.open = false;
    this.closed.emit();
  }
  /**
   * Check if some content slot is set.
   */
  checkContent() {
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length;
  }
  componentWillLoad() {
    this.checkContent();
  }
  render() {
    return h(Host, { role: "menu", open: this.open }, h("button", { class: "label", "aria-pressed": this.open ? 'true' : 'false', onClick: this.toggle.bind(this) }, h("slot", null), this.hasContent && h("z-icon", { name: this.open ? 'chevron-up' : 'chevron-down' })), this.open && h("div", { class: "items" }, h("slot", { name: "item", onSlotchange: this.checkContent.bind(this) })));
  }
  get hostElement() { return getElement(this); }
};
ZMenuSection.style = stylesCss;

export { ZMenuSection as z_menu_section };