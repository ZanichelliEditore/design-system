import { Component, Prop, h } from '@stencil/core';
export class ZChipDeprecated {
  renderLegacyChip() {
    return h("div", null,
      h("span", { class: "boldtext" }, this.boldtext),
      " ",
      this.regulartext);
  }
  render() {
    return this.boldtext != null || this.regulartext != null ?
      this.renderLegacyChip() :
      h("div", null,
        h("slot", null));
  }
  static get is() { return "z-chip-deprecated"; }
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
    }
  }; }
}
