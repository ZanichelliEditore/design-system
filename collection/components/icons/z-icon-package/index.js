import { h } from "@stencil/core";
import { ICONS } from "../icons";
export class ZIconPackage {
  render() {
    return (h("div", null, Object.keys(ICONS).map((icon) => {
      return (h("div", null, h("z-icon", { name: icon }), h("label", null, icon)));
    })));
  }
  static get is() { return "z-icon-package"; }
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
