import { Component, Element, h, Host, Prop, State } from "@stencil/core";
import { ButtonVariantEnum, ButtonSizeEnum } from "../../../beans";
import classNames from "classnames";
export class ZRegistroTableCell {
  constructor() {
    this.isMenuOpened = false;
  }
  handleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }
  render() {
    return (h(Host, null,
      this.showButton && (h("div", { class: classNames("button-container", {
          visible: this.isMenuOpened,
        }) },
        h("div", { class: "button-content" },
          h("z-button", { icon: "contextual-menu", variant: ButtonVariantEnum.tertiary, size: ButtonSizeEnum["x-small"], onClick: () => this.handleMenu(), square: true }),
          h("div", { class: classNames("contextual-menu-container", {
              visible: this.isMenuOpened,
            }) },
            h("slot", { name: "contextual-menu" }))))),
      h("slot", null)));
  }
  static get is() { return "z-registro-table-cell"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
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
    }
  }; }
  static get states() { return {
    "isMenuOpened": {}
  }; }
  static get elementRef() { return "host"; }
}
