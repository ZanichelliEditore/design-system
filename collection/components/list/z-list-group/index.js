import { h, Host } from "@stencil/core";
import { DividerSize, ListSize, ListDividerType } from "../../../beans";
export class ZListGroup {
  constructor() {
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = ListSize.MEDIUM;
    /**
     * [optional] Sets the position where to insert the divider.
     */
    this.dividerType = ListDividerType.NONE;
    /**
     * [optional] Sets the divider size.
     */
    this.dividerSize = DividerSize.SMALL;
    /**
     * [optional] Sets the divider color.
     */
    this.dividerColor = "gray200";
  }
  componentDidLoad() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      if (children.length - 1 > i) {
        children[i].setAttribute("divider-type", this.dividerType);
        children[i].setAttribute("divider-size", this.dividerSize);
        children[i].setAttribute("divider-color", this.dividerColor);
      }
      children[i].setAttribute("size", this.size);
    }
  }
  componentWillLoad() {
    this.hasHeader = !!this.host.querySelector('[slot="header-title"]');
  }
  render() {
    return (h(Host, { role: "group" }, h("div", { class: {
        "z-list-group-header-container": true,
        "has-header": this.hasHeader,
      } }, h("slot", { name: "header-title" }), this.dividerType === ListDividerType.HEADER && (h("z-divider", { color: this.dividerColor, size: this.dividerSize }))), h("slot", null)));
  }
  static get is() { return "z-list-group"; }
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
      "dividerType": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ListDividerType",
          "resolved": "ListDividerType.ELEMENT | ListDividerType.HEADER | ListDividerType.NONE",
          "references": {
            "ListDividerType": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Sets the position where to insert the divider."
        },
        "attribute": "divider-type",
        "reflect": true,
        "defaultValue": "ListDividerType.NONE"
      },
      "dividerSize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "DividerSize",
          "resolved": "DividerSize.LARGE | DividerSize.MEDIUM | DividerSize.SMALL",
          "references": {
            "DividerSize": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Sets the divider size."
        },
        "attribute": "divider-size",
        "reflect": true,
        "defaultValue": "DividerSize.SMALL"
      },
      "dividerColor": {
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
          "text": "[optional] Sets the divider color."
        },
        "attribute": "divider-color",
        "reflect": true,
        "defaultValue": "\"gray200\""
      }
    };
  }
  static get elementRef() { return "host"; }
}
