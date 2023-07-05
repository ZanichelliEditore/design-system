import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import './index-6d83248c.js';
import './index-f171ca51.js';
import './index-a66b7e8a.js';
import './index-8c7b48bc.js';
import './utils-d7278f26.js';
import './index-9c5d63ea.js';
import './breakpoints-9b81eb1b.js';
import './index-77b7d7ae.js';
import './index-fff6ed17.js';

const stylesCss = ":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;max-width:100%;box-sizing:border-box;background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}.table{min-width:max-content}";

const ZTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tableResize = createEvent(this, "tableResize", 7);
    /**
     * Whether the table cells should show a border between them.
     */
    this.bordered = false;
    /**
     * Whether the table contains some expandable rows.
     */
    this.expandable = false;
  }
  updateExpandable() {
    this.expandable = this.host.querySelectorAll("z-tr[expandable]").length > 0;
  }
  /**
   * Setup table:
   * - create the resize observer for resize event
   * - create mutation observer for expandable attribute
   */
  componentWillLoad() {
    this.resizeObserver = new ResizeObserver(() => {
      this.tableResize.emit(this);
    });
    this.resizeObserver.observe(this.host);
    this.expandableMutationObserver = new MutationObserver(() => {
      this.updateExpandable();
    });
    this.expandableMutationObserver.observe(this.host, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["expandable"],
      attributeOldValue: false,
    });
  }
  disconnectedCallback() {
    this.resizeObserver.disconnect();
    this.expandableMutationObserver.disconnect();
  }
  render() {
    return (h(Host, { expandable: this.expandable }, h("div", { class: "table", role: "table" }, h("slot", null))));
  }
  get host() { return getElement(this); }
};
ZTable.style = stylesCss;

export { ZTable as z_table };
