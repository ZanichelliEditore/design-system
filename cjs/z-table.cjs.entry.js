'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
require('./index-23d8692f.js');
require('./index-a9764c98.js');
require('./index-e6334f94.js');
require('./index-92a9f89e.js');
require('./utils-ee86db4f.js');
require('./index-cf9497bc.js');
require('./breakpoints-ebe1a437.js');
require('./index-dd43ccfd.js');
require('./index-b9191d60.js');

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
