import { Component, Element, Event, Host, Prop, h, State, Listen, } from "@stencil/core";
import { ButtonSizeEnum, ButtonVariantEnum } from "../../../beans";
import { mobileBreakpoint } from "../../../constants/breakpoints";
/**
 * @slot - table elements
 * @slot sticky-footer - set the content of the sticky footer
 */
export class ZRegistroTable {
  constructor() {
    /** Sets table with border */
    this.bordered = false;
    /** Sets first column sticky */
    this.columnSticky = false;
    /** Sets empty table */
    this.empty = false;
    /** Sets header sticky */
    this.headerSticky = false;
    /** Set message */
    this.message = "Siamo spicenti, al momento non sono presenti dati da visualizzare";
    /** Set subtitle */
    this.subtitle = "";
  }
  handleResize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }
  handleOrientationChange() {
    this.isMobile = screen.width <= mobileBreakpoint;
  }
  componentWillLoad() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    this.hasTableBody = !!this.host.querySelector('[slot="table-body"]');
  }
  componentWillRender() {
    this.host.setAttribute("role", "table");
  }
  render() {
    const buttonSize = this.isMobile
      ? ButtonSizeEnum.small
      : ButtonSizeEnum.big;
    const tableClass = `table ${this.empty ? "table-empty" : ""} ${this.bordered ? "table-bordered" : ""}
    ${this.columnSticky ? "table-column-sticky" : ""}
    ${this.headerSticky ? "table-header-sticky" : ""}`;
    const tableContentClass = `${!!this.hasTableBody ? "table-content" : ""}`;
    if (this.empty && this.hasTableBody) {
      return (h(Host, null,
        h("div", { class: tableClass },
          h("slot", { name: "table-header" }),
          h("div", { class: tableContentClass },
            h("slot", { name: "table-body" }),
            h("z-registro-table-empty-box", { message: this.message, subtitle: this.subtitle },
              !!this.callToActionLabel && (h("z-button", { slot: "cta1", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)),
              !!this.callToActionTwoLabel && (h("z-button", { slot: "cta2", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))))));
    }
    if (this.empty && !this.hasTableBody) {
      return (h(Host, null,
        h("div", { class: tableClass },
          h("slot", { name: "table-header" })),
        h("z-registro-table-empty-box", { message: this.message, subtitle: this.subtitle },
          !!this.callToActionLabel && (h("z-button", { slot: "cta1", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)),
          !!this.callToActionTwoLabel && (h("z-button", { slot: "cta2", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))));
    }
    return (h(Host, null,
      h("div", { class: tableClass },
        h("slot", null)),
      h("slot", { name: "sticky-footer" })));
  }
  static get is() { return "z-registro-table"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "bordered": {
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
        "text": "Sets table with border"
      },
      "attribute": "bordered",
      "reflect": false,
      "defaultValue": "false"
    },
    "callToActionLabel": {
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
        "text": "Sets call to action label"
      },
      "attribute": "call-to-action-label",
      "reflect": false
    },
    "callToActionTwoLabel": {
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
        "text": "Sets call to action label"
      },
      "attribute": "call-to-action-two-label",
      "reflect": false
    },
    "columnSticky": {
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
        "text": "Sets first column sticky"
      },
      "attribute": "column-sticky",
      "reflect": false,
      "defaultValue": "false"
    },
    "empty": {
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
        "text": "Sets empty table"
      },
      "attribute": "empty",
      "reflect": false,
      "defaultValue": "false"
    },
    "headerSticky": {
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
        "text": "Sets header sticky"
      },
      "attribute": "header-sticky",
      "reflect": false,
      "defaultValue": "false"
    },
    "message": {
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
        "text": "Set message"
      },
      "attribute": "message",
      "reflect": false,
      "defaultValue": "\"Siamo spicenti, al momento non sono presenti dati da visualizzare\""
    },
    "subtitle": {
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
        "text": "Set subtitle"
      },
      "attribute": "subtitle",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "hasTableBody": {},
    "isMobile": {}
  }; }
  static get events() { return [{
      "method": "callToAction",
      "name": "callToAction",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "remove call to action event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "callToActionTwo",
      "name": "callToActionTwo",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "remove call to action event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleResize",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "orientationchange",
      "method": "handleOrientationChange",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
