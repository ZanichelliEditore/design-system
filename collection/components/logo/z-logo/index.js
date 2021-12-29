import { Component, Prop, Host, h } from "@stencil/core";
export class ZLogo {
  render() {
    const style = {};
    if (this.width) {
      style["width"] = style["max-width"] = `${this.width}px`;
    }
    if (this.height) {
      style["height"] = style["max-height"] = `${this.height}px`;
    }
    return (h(Host, { style: style }, this.link ?
      h("a", { href: this.link, target: this.targetblank ? "_blank" : "_self" },
        h("img", { alt: this.imagealt })) :
      h("img", { alt: this.imagealt })));
  }
  static get is() { return "z-logo"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "width": {
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
        "text": "image width"
      },
      "attribute": "width",
      "reflect": false
    },
    "height": {
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
        "text": "image height"
      },
      "attribute": "height",
      "reflect": false
    },
    "imagealt": {
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
        "text": "alternative image text"
      },
      "attribute": "imagealt",
      "reflect": false
    },
    "link": {
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
        "text": "link url (optional)"
      },
      "attribute": "link",
      "reflect": false
    },
    "targetblank": {
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
        "text": "link target: true means _blank, false means _self"
      },
      "attribute": "targetblank",
      "reflect": false
    }
  }; }
}
