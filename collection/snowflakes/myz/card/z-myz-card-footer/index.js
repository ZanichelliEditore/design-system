import { Component, Prop, h, State, Listen } from "@stencil/core";
import { LicenseTypeEnum } from "../../../../beans/index";
/**
 * @slot toggle - toggle button slot
 * @slot list - card resources list slot
 */
export class ZMyzCardFooter {
  constructor() {
    /** footer opened by default (optional) */
    this.opened = false;
    /** display footer custom slotted content */
    this.customContent = false;
    this.isOpen = false;
    this.allowTooltipAuthors = false;
  }
  handleToggle() {
    this.isOpen = !this.isOpen;
  }
  getTitleAuthors() {
    return this.allowTooltipAuthors ? this.autori : "";
  }
  componentWillLoad() {
    if (this.opened)
      this.isOpen = true;
  }
  elementsEllipsis() {
    this.allowTooltipAuthors = this.elementAuthorsHasEllipsis() ? true : false;
  }
  elementAuthorsHasEllipsis() {
    return this.ellipsisAuthors.offsetWidth < this.ellipsisAuthors.scrollWidth;
  }
  retrieveClass() {
    return {
      isopen: this.isOpen,
      real: this.cardtype === LicenseTypeEnum.real,
      trial: this.cardtype === LicenseTypeEnum.trial,
      temp: this.cardtype === LicenseTypeEnum.temp,
      customContent: this.customContent,
    };
  }
  footerTransitionHandler(e) {
    if (["visibility", "height"].includes(e.propertyName)) {
      this.elementsEllipsis();
    }
  }
  render() {
    return (h("div", { class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) },
      h("footer", { class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) },
        h("span", { class: "toggle" },
          h("slot", { name: "toggle" })),
        this.titolo && (h("p", { class: { customContent: this.customContent } }, this.titolo)),
        h("div", { class: { content: true, customContent: this.customContent } },
          h("div", null,
            h("p", { class: "authors", ref: (el) => (this.ellipsisAuthors = el) },
              h("span", { title: this.getTitleAuthors() },
                h("span", { class: "bold" }, this.autori))),
            h("p", { class: "year_isbn" },
              h("span", { class: "isbn" },
                h("span", null,
                  h("span", { class: "bold" }, this.isbn),
                  " (ed. cartacea)")))),
          h("div", { class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` },
            h("slot", { name: "list" })))),
      this.customContent && h("slot", { name: "content" })));
  }
  static get is() { return "z-myz-card-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "titolo": {
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
        "text": "volume title"
      },
      "attribute": "titolo",
      "reflect": false
    },
    "autori": {
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
        "text": "authors name text"
      },
      "attribute": "autori",
      "reflect": false
    },
    "isbn": {
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
        "text": "volume isbn"
      },
      "attribute": "isbn",
      "reflect": false
    },
    "faded": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "faded status"
      },
      "attribute": "faded",
      "reflect": false
    },
    "cardtype": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "LicenseTypeEnum",
        "resolved": "LicenseTypeEnum.real | LicenseTypeEnum.temp | LicenseTypeEnum.trial | LicenseTypeEnum.virtual",
        "references": {
          "LicenseTypeEnum": {
            "location": "import",
            "path": "../../../../beans/index"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "card graphic variant (optional)"
      },
      "attribute": "cardtype",
      "reflect": false
    },
    "opened": {
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
        "text": "footer opened by default (optional)"
      },
      "attribute": "opened",
      "reflect": false,
      "defaultValue": "false"
    },
    "customContent": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "display footer custom slotted content"
      },
      "attribute": "custom-content",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "isOpen": {},
    "allowTooltipAuthors": {}
  }; }
  static get listeners() { return [{
      "name": "toggleClick",
      "method": "handleToggle",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}