import { Component, Element, h, Prop, Host } from "@stencil/core";
import { ListSize } from "../../../beans";
export class ZList {
  constructor() {
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = ListSize.medium;
  }
  setChildrenSizeType() {
    const children = this.host.children;
    for (let i = 0; i < children.length - 1; i++) {
      children[i].setAttribute("size", this.size);
    }
  }
  componentDidLoad() {
    this.setChildrenSizeType();
  }
  render() {
    return (h(Host, { role: "list" },
      h("slot", null)));
  }
  static get is() { return "z-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ListSize",
        "resolved": "ListSize.large | ListSize.medium | ListSize.small | typeof ListSize[\"x-large\"]",
        "references": {
          "ListSize": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "[optional] Sets size of inside elements."
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "ListSize.medium"
    }
  }; }
  static get elementRef() { return "host"; }
}
