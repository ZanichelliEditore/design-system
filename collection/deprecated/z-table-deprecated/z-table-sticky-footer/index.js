import { h } from "@stencil/core";
/**
 * @deprecated
 * @slot - table sticky footer content
 */
export class ZTableStickyFooter {
  render() {
    return h("slot", null);
  }
  static get is() { return "z-table-sticky-footer"; }
  static get encapsulation() { return "scoped"; }
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
}
