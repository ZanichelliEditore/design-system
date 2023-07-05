import { Host, h } from "@stencil/core";
/**
 * ZTbody component.
 * @slot - ZTbody content (`z-tr`).
 */
export class ZTbody {
  render() {
    return (h(Host, { role: "rowgroup" }, h("slot", null)));
  }
  static get is() { return "z-tbody"; }
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
}
