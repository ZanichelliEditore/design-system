import { h, Host } from "@stencil/core";
import { ButtonVariant, ButtonSize } from "../../../beans";
/**
 * @deprecated
 */
export class ZTableCell {
  constructor() {
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = "medium";
    this.isMenuOpened = false;
  }
  handleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }
  render() {
    return (h(Host, null, this.showButton && (h("div", { class: {
        "button-container": true,
        "visible": this.isMenuOpened,
      } }, h("div", { class: "button-content" }, h("z-button", { icon: "contextual-menu", variant: ButtonVariant.TERTIARY, size: ButtonSize.X_SMALL, onClick: () => this.handleMenu() }), h("div", { class: {
        "contextual-menu-container": true,
        "visible": this.isMenuOpened,
      } }, h("slot", { name: "contextual-menu" }))))), h("slot", null)));
  }
  static get is() { return "z-table-cell"; }
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
      "showButton": {
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
          "text": "[Optional] Show contextual menu button"
        },
        "attribute": "show-button",
        "reflect": false
      },
      "padding": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "\"x-small\" | \"small\" | \"medium\" | \"large\" | \"special\"",
          "resolved": "\"large\" | \"medium\" | \"small\" | \"special\" | \"x-small\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set padding size of cell, if special 0px padding will be set"
        },
        "attribute": "padding",
        "reflect": true,
        "defaultValue": "\"medium\""
      }
    };
  }
  static get states() {
    return {
      "isMenuOpened": {}
    };
  }
  static get elementRef() { return "host"; }
}