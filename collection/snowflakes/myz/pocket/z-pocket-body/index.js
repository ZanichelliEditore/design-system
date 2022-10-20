import { h } from "@stencil/core";
import { PocketStatus } from "../../../../beans";
/**
 * @slot  - pocket body content
 */
export class ZPocketBody {
  constructor() {
    /** pocket status */
    this.status = PocketStatus.PREVIEW;
  }
  handlePocketToggle(e) {
    if (e.detail.id && e.detail.id === this.pocketid) {
      this.status = e.detail.status;
    }
  }
  render() {
    return (h("main", { class: this.status }, h("slot", null)));
  }
  static get is() { return "z-pocket-body"; }
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
      "pocketid": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "pocket id"
        },
        "attribute": "pocketid",
        "reflect": false
      },
      "status": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "PocketStatus",
          "resolved": "PocketStatus.CLOSED | PocketStatus.OPEN | PocketStatus.PREVIEW",
          "references": {
            "PocketStatus": {
              "location": "import",
              "path": "../../../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "pocket status"
        },
        "attribute": "status",
        "reflect": false,
        "defaultValue": "PocketStatus.PREVIEW"
      }
    };
  }
  static get listeners() {
    return [{
        "name": "pocketToggle",
        "method": "handlePocketToggle",
        "target": "body",
        "capture": false,
        "passive": false
      }];
  }
}
