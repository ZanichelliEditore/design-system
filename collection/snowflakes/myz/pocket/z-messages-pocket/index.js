import { Component, Prop, h, Listen /* , State */ } from "@stencil/core";
import { PocketStatusEnum } from "../../../../beans";
/**
 * @slot  - pocket body content
 */
export class ZMessagesPocket {
  constructor() {
    /** pocket status */
    this.status = PocketStatusEnum.preview;
  }
  handlePocketToggle(e) {
    if (e.detail.id === this.pocketid) {
      this.status = e.detail.status;
    }
  }
  renderHeader() {
    let message;
    let icon;
    switch (this.status) {
      case PocketStatusEnum.preview:
      case PocketStatusEnum.closed:
        message = (h("span", null,
          "Messaggi ",
          h("span", { class: "badge" }, this.messages)));
        icon = "chevron-up";
        break;
      case PocketStatusEnum.open:
        message = h("span", null, "Riduci");
        icon = "chevron-down";
        break;
    }
    return (h("z-pocket-header", { pocketid: this.pocketid },
      message,
      h("z-icon", { name: icon, width: 14, height: 14 })));
  }
  renderBody() {
    return (h("z-pocket-body", { pocketid: this.pocketid },
      h("div", { class: "body" },
        h("slot", null)),
      h("div", { class: "gradient" })));
  }
  render() {
    return (h("z-pocket", { pocketid: this.pocketid, status: this.status, class: this.status },
      this.renderHeader(),
      this.renderBody()));
  }
  static get is() { return "z-messages-pocket"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
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
    "messages": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "number of messages"
      },
      "attribute": "messages",
      "reflect": false
    },
    "status": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "PocketStatus",
        "resolved": "PocketStatusEnum.closed | PocketStatusEnum.open | PocketStatusEnum.preview",
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
      "defaultValue": "PocketStatusEnum.preview"
    }
  }; }
  static get listeners() { return [{
      "name": "pocketToggle",
      "method": "handlePocketToggle",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
