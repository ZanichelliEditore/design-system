import { r as registerInstance, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import './index-6d83248c.js';
import './index-f171ca51.js';
import './index-1b2e3e53.js';
import './index-8c7b48bc.js';
import './utils-4d2d99d9.js';
import './index-03c8b0f0.js';
import './breakpoints-9b81eb1b.js';
import './index-49dfba34.js';
import './index-cfd94e05.js';

const stylesCss = ":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;max-width:100%;box-sizing:border-box;background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}.table{min-width:max-content}";

const ZTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
   * Setup the table creating a mutation observer for the expandable attribute.
   */
  componentWillLoad() {
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
    this.expandableMutationObserver.disconnect();
  }
  render() {
    return (h(Host, { expandable: this.expandable }, h("div", { class: "table", role: "table" }, h("slot", null))));
  }
  get host() { return getElement(this); }
};
ZTable.style = stylesCss;

export { ZTable as z_table };
