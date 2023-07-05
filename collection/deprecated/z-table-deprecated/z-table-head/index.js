import { h } from "@stencil/core";
/**
 * @deprecated
 */
export class ZTableHead {
  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "z-table-head"; }
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
  static get elementRef() { return "host"; }
}
