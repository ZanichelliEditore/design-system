import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';

const stylesCss = ":host{display:inline-flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:0;font-family:var(--font-family-sans)}:host,::slotted(*),*{box-sizing:border-box}::slotted(a){text-decoration:none}::slotted(*){color:var(--color-text01);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host([active]) .label,:host([open]) .label,.label:hover{border-color:var(--color-secondary01)}.label{display:flex;width:100%;align-items:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5);border:0;border-bottom:var(--border-size-small) solid var(--color-surface05);margin:0;background:transparent;border-radius:0;cursor:pointer;text-align:left}.label ::slotted(*){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25}.label:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.label z-icon{margin-left:calc(var(--space-unit) * 4);fill:currentcolor}.items{display:flex;width:100%;flex-direction:column;padding:calc(var(--space-unit) * 0.5);padding-bottom:calc(var(--space-unit) * 2)}.items>::slotted([slot=\"item\"]){display:inline-flex;padding:calc(var(--space-unit) * 0.5);margin:0;font-size:var(--font-size-2);line-height:1.4;outline:none}.items>::slotted([slot=\"item\"]:last-child){padding-bottom:0}.items>::slotted([slot=\"item\"]:focus:focus-visible){box-shadow:var(--shadow-focus-primary);color:var(--color-secondary01)}.items>::slotted([slot=\"item\"]:hover){color:var(--color-secondary01)}";

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
    return (h(Host, { role: "menu", open: this.open }, h("button", { class: "label", "aria-pressed": this.open ? "true" : "false", onClick: this.toggle.bind(this) }, h("slot", null), this.hasContent && h("z-icon", { name: this.open ? "chevron-up" : "chevron-down" })), this.open && (h("div", { class: "items" }, h("slot", { name: "item", onSlotchange: this.checkContent.bind(this) })))));
  }
  get hostElement() { return getElement(this); }
};
ZMenuSection.style = stylesCss;

export { ZMenuSection as z_menu_section };