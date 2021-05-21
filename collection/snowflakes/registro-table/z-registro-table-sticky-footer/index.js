import { Component, h } from '@stencil/core';
/**
 * @slot - table sticky footer content
 */
export class ZRegistroTableStickyFooter {
  render() {
    return (h("slot", null));
  }
  static get is() { return "z-registro-table-sticky-footer"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
}
