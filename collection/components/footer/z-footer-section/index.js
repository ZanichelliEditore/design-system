import { h } from "@stencil/core";
/**
 * @slot - section content
 */
export class ZFooterSection {
  constructor() {
    this.isOpen = false;
  }
  renderToggleButton() {
    return (h("button", { class: "toggle-button", onClick: () => (this.isOpen = !this.isOpen) }, h("z-icon", { name: this.isOpen ? "chevron-up" : "chevron-down", width: 16, height: 16 })));
  }
  render() {
    return (h("nav", null, h("div", { class: "header" }, h("h2", null, this.name), this.renderToggleButton()), h("div", { class: `content ${this.isOpen ? "show" : ""}` }, h("slot", null))));
  }
  static get is() { return "z-footer-section"; }
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
      "name": {
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
          "text": "section title"
        },
        "attribute": "name",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isOpen": {}
    };
  }
}
