import { Component, Prop, h, Element } from "@stencil/core";
import { ZChipType } from "../../../beans";
export class ZChip {
  constructor() {
    this.disabled = false;
    this.filter = false;
  }
  renderLegacyChip() {
    return (h("div", null,
      h("span", { class: "boldtext" }, this.boldtext),
      " ",
      this.regulartext));
  }
  renderFilterChip() {
    if (this.filter) {
      return (h("button", { class: this.type ? this.type : ZChipType.default, disabled: this.disabled, tabindex: "0" },
        h("slot", null)));
    }
    return (h("div", { class: this.type ? this.type : "" },
      h("slot", null)));
  }
  render() {
    return this.boldtext != null || this.regulartext != null
      ? this.renderLegacyChip()
      : this.renderFilterChip();
  }
  static get is() { return "z-chip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "regulartext": {
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
        "text": ""
      },
      "attribute": "regulartext",
      "reflect": false
    },
    "boldtext": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "boldtext",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ZChipType",
        "resolved": "ZChipType.default | ZChipType.mini",
        "references": {
          "ZChipType": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": true
    },
    "disabled": {
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
        "text": ""
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "filter": {
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
        "text": ""
      },
      "attribute": "filter",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "hostElement"; }
}
