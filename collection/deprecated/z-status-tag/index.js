import { h, Host } from "@stencil/core";
import { StatusTagStatus } from "../../beans";
export class ZStatusTag {
  constructor() {
    /** [optional] Status tag color */
    this.status = StatusTagStatus.DEFAULT;
    if (!this.icon && !this.text) {
      console.warn("z-status-tag must contain at least one prop between icon and text");
    }
  }
  render() {
    return (h(Host, { class: {
        "body-5-sb": true,
        [this.variant || ""]: true,
        "expandable": this.expandable && !!this.icon && !!this.text,
      } }, this.icon && h("z-icon", { name: this.icon }), this.text && h("span", null, this.text)));
  }
  static get is() { return "z-status-tag"; }
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
      "icon": {
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
          "text": "[optional] Status tag icon"
        },
        "attribute": "icon",
        "reflect": false
      },
      "text": {
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
          "text": "[optional] Status tag text"
        },
        "attribute": "text",
        "reflect": false
      },
      "expandable": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Hide the text and show it on hover"
        },
        "attribute": "expandable",
        "reflect": false
      },
      "status": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "StatusTagStatus",
          "resolved": "StatusTagStatus.DEFAULT | StatusTagStatus.ERROR | StatusTagStatus.NEUTRAL | StatusTagStatus.SUCCESS | StatusTagStatus.WARNING",
          "references": {
            "StatusTagStatus": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Status tag color"
        },
        "attribute": "status",
        "reflect": true,
        "defaultValue": "StatusTagStatus.DEFAULT"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ThemeVariant",
          "resolved": "ThemeVariant.DARK | ThemeVariant.LIGHT",
          "references": {
            "ThemeVariant": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "[optional] Status tag style"
        },
        "attribute": "variant",
        "reflect": false
      }
    };
  }
}
