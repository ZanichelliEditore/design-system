import { h } from "@stencil/core";
import { PocketStatus } from "../../../../beans";
/**
 * @slot - pocket content
 */
export class ZPocket {
  constructor() {
    /** pocket status */
    this.status = PocketStatus.PREVIEW;
  }
  /** open z-pocket */
  async open() {
    this.status = PocketStatus.OPEN;
  }
  /** close z-pocket */
  async close() {
    this.status = PocketStatus.CLOSED;
  }
  emitPocketToggle(id, status) {
    this.pocketToggle.emit({ id, status });
  }
  handlePocketHeaderClick(e) {
    if (e.detail.id && e.detail.id === this.pocketid) {
      switch (this.status) {
        case PocketStatus.PREVIEW:
        case PocketStatus.CLOSED:
          this.status = PocketStatus.OPEN;
          break;
        case PocketStatus.OPEN:
          this.status = PocketStatus.CLOSED;
          break;
      }
    }
  }
  handlePocketHeaderPan(e) {
    if (e.detail.id && e.detail.id === this.pocketid) {
      if (e.detail.direction === "up") {
        this.status = PocketStatus.OPEN;
      }
      else if (e.detail.direction === "down") {
        this.status = PocketStatus.CLOSED;
      }
    }
  }
  watchStatusHandler(newVal) {
    this.emitPocketToggle(this.pocketid, newVal);
  }
  componentWillLoad() {
    this.emitPocketToggle(this.pocketid, this.status);
  }
  handleBackgroundClick(e) {
    if (e.target.dataset.action == "pocketBackground") {
      this.close();
    }
  }
  render() {
    return (h("div", null, h("div", { "data-action": "pocketBackground", "data-pocket": this.pocketid, class: `background ${this.status}`, onClick: (e) => this.handleBackgroundClick(e) }), h("div", { id: this.pocketid, class: "content-wrapper" }, h("div", null, h("slot", null)))));
  }
  static get is() { return "z-pocket"; }
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
  static get events() {
    return [{
        "method": "pocketToggle",
        "name": "pocketToggle",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on pocket toggle, returns pocket id and status"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "open": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "open z-pocket",
          "tags": []
        }
      },
      "close": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "close z-pocket",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "status",
        "methodName": "watchStatusHandler"
      }];
  }
  static get listeners() {
    return [{
        "name": "pocketHeaderClick",
        "method": "handlePocketHeaderClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "pocketHeaderPan",
        "method": "handlePocketHeaderPan",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}