import { Host, h, } from "@stencil/core";
import { ButtonSizeEnum, ButtonVariantEnum } from "../../../beans";
import { mobileBreakpoint } from "../../../constants/breakpoints";
/**
 * @slot - table elements
 * @slot sticky-footer - set the content of the sticky footer
 */
export class ZTable {
  constructor() {
    /** Error message */
    this.errorMessage = "Siamo spiacenti, non siamo riusciti a caricare il contenuto richiesto";
    /** Sets table with border */
    this.bordered = false;
    /** Sets first column sticky */
    this.columnSticky = false;
    /** Sets empty table */
    this.empty = false;
    /** Set error status */
    this.error = false;
    /** Sets header sticky */
    this.headerSticky = false;
    /** Set message */
    this.message = "Siamo spiacenti, al momento non sono presenti dati da visualizzare";
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
    var _a;
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    const tableBody = this.host.querySelector('[slot="table-body"]');
    this.hasTableBody = !!((_a = tableBody === null || tableBody === void 0 ? void 0 : tableBody.children) === null || _a === void 0 ? void 0 : _a.length);
    if (!!tableBody && !this.hasTableBody) {
      tableBody.remove();
    }
  }
  componentWillRender() {
    this.host.setAttribute("role", "table");
  }
  renderError(tableClass) {
    const minHeight = this.lines ? `calc(40px * ${this.lines})` : "auto";
    return (h(Host, null, h("div", { class: tableClass }, h("slot", { name: "table-header" })), h("z-table-error", null, h("div", { class: "error-content", style: { minHeight } }, h("slot", { name: "error-image" }), h("div", { class: "text" }, h("z-body", { class: "error-message", level: 3, variant: "semibold" }, this.errorMessage), h("slot", { name: "error-action" }))))));
  }
  renderEmpty(tableClass) {
    const buttonSize = this.isMobile
      ? ButtonSizeEnum.small
      : ButtonSizeEnum.big;
    const tableContentClass = `${!!this.hasTableBody ? "table-content" : ""}`;
    if (this.hasTableBody) {
      return (h(Host, null, h("div", { class: tableClass }, h("slot", { name: "table-header" }), h("div", { class: tableContentClass }, h("slot", { name: "table-body" }), h("z-table-empty-box", { class: this.bordered && "bordered", message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (h("z-button", { slot: "cta1", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (h("z-button", { slot: "cta2", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))))));
    }
    return (h(Host, null, h("div", { class: tableClass }, h("slot", { name: "table-header" })), h("z-table-empty-box", { class: this.bordered && "bordered", message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (h("z-button", { slot: "cta1", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (h("z-button", { slot: "cta2", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))));
  }
  render() {
    const tableClass = `table ${this.empty ? "table-empty" : ""} ${this.bordered ? "table-bordered" : ""}
    ${this.columnSticky ? "table-column-sticky" : ""}
    ${this.headerSticky ? "table-header-sticky" : ""}`;
    if (this.error) {
      return this.renderError(tableClass);
    }
    if (this.empty) {
      return this.renderEmpty(tableClass);
    }
    return (h(Host, null, h("div", { class: tableClass }, h("slot", null)), h("slot", { name: "sticky-footer" })));
  }
  static get is() { return "z-table"; }
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
  static get assetsDirs() { return ["assets"]; }
  static get properties() {
    return {
      "lines": {
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
          "text": "Number of lines of element"
        },
        "attribute": "lines",
        "reflect": true
      },
      "errorMessage": {
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
          "text": "Error message"
        },
        "attribute": "error-message",
        "reflect": false,
        "defaultValue": "\"Siamo spiacenti, non siamo riusciti a caricare il contenuto richiesto\""
      },
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
      "error": {
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
          "text": "Set error status"
        },
        "attribute": "error",
        "reflect": false,
        "defaultValue": "false"
      },
      "errorLink": {
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
          "text": "Set error status"
        },
        "attribute": "error-link",
        "reflect": false
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
        "defaultValue": "\"Siamo spiacenti, al momento non sono presenti dati da visualizzare\""
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
    };
  }
  static get states() {
    return {
      "hasTableBody": {},
      "isMobile": {}
    };
  }
  static get events() {
    return [{
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
      }];
  }
  static get elementRef() { return "host"; }
  static get listeners() {
    return [{
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
      }];
  }
}
