import { h, Host } from "@stencil/core";
import { ButtonVariantEnum, ButtonSizeEnum, Size } from "../../../beans";
import classNames from "classnames";
export class ZTableCell {
  constructor() {
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = Size.medium;
    this.isMenuOpened = false;
  }
  handleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }
  render() {
    return (h(Host, null, this.showButton && (h("div", { class: classNames("button-container", {
        visible: this.isMenuOpened,
      }) }, h("div", { class: "button-content" }, h("z-button", { icon: "contextual-menu", variant: ButtonVariantEnum.tertiary, size: ButtonSizeEnum["x-small"], onClick: () => this.handleMenu() }), h("div", { class: classNames("contextual-menu-container", {
        visible: this.isMenuOpened,
      }) }, h("slot", { name: "contextual-menu" }))))), h("slot", null)));
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
          "original": "Size",
          "resolved": "(typeof Size)[\"x-small\"] | Size.large | Size.medium | Size.small | Size.special",
          "references": {
            "Size": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set padding size of cell, if special 0px padding will be set"
        },
        "attribute": "padding",
        "reflect": true,
        "defaultValue": "Size.medium"
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
