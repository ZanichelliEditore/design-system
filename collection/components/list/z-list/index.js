import { h, Host } from "@stencil/core";
import { ListSize, ListType } from "../../../beans";
export class ZList {
  constructor() {
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = ListSize.MEDIUM;
    /**
     * [optional] type of the list marker for each element
     */
    this.listType = ListType.NONE;
    /**
     * [optional] Sets role of the element.
     */
    this.role = "list";
  }
  setChildrenSizeType() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      children[i].setAttribute("size", this.size);
      children[i].setAttribute("list-type", this.listType);
      children[i].setAttribute("list-element-position", (i + 1).toString());
    }
  }
  componentDidLoad() {
    this.setChildrenSizeType();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "z-list"; }
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
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ListSize",
          "resolved": "ListSize.LARGE | ListSize.MEDIUM | ListSize.SMALL | ListSize.X_LARGE",
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
        "defaultValue": "ListSize.MEDIUM"
      },
      "listType": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ListType",
          "resolved": "ListType.NONE | ListType.ORDERED | ListType.UNORDERED",
          "references": {
            "ListType": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] type of the list marker for each element"
        },
        "attribute": "list-type",
        "reflect": true,
        "defaultValue": "ListType.NONE"
      },
      "role": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Sets role of the element."
        },
        "attribute": "role",
        "reflect": true,
        "defaultValue": "\"list\""
      }
    };
  }
  static get elementRef() { return "host"; }
}
