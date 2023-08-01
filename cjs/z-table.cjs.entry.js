'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
require('./index-23d8692f.js');
require('./index-a9764c98.js');
require('./index-1f3f3a0c.js');
require('./index-92a9f89e.js');
require('./utils-4ac02425.js');
require('./index-e8ce94a1.js');
require('./breakpoints-ebe1a437.js');
require('./index-ddde2452.js');
require('./index-4edb3854.js');

const stylesCss = ":host{--z-table--cells-padding:calc(var(--space-unit) * 2);position:relative;display:block;overflow:auto;max-width:100%;box-sizing:border-box;background-color:var(--color-surface01)}:host([expandable]){--z-table--expand-button-size:40px}:host([bordered]){--z-table--cell-left-border:1px solid var(--color-surface03)}.table{min-width:max-content}";

const ZTable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { expandable: this.expandable }, index.h("div", { class: "table", role: "table" }, index.h("slot", null))));
  }
  get host() { return index.getElement(this); }
};
ZTable.style = stylesCss;

exports.z_table = ZTable;
