import { Host, h } from "@stencil/core";
import "../z-thead/index";
import "../z-tbody/index";
import "../z-tr/index";
import "../z-tfoot/index";
/**
 * ZTable component.
 * @slot - Table content (`z-thead`, `z-tbody`, `z-tfoot`, `z-tr`).
 * @cssprop --z-table--cells-padding - Padding of the cells.
 */
export class ZTable {
  constructor() {
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
  static get is() { return "z-table"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get properties() {
    return {
      "bordered": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Whether the table cells should show a border between them."
        },
        "attribute": "bordered",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "expandable": {}
    };
  }
  static get elementRef() { return "host"; }
}
