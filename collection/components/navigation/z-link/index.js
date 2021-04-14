import { Component, Prop, h, Event } from "@stencil/core";
export class ZLink {
  constructor() {
    /** link target (optional) */
    this.target = "_self";
    /** tabindex link attribute (optional) */
    this.htmltabindex = 0;
    /** disable link flag (optional) */
    this.isdisabled = false;
    /** active link flag (optional) */
    this.isactive = false;
    /** white variant flag (optional) */
    this.iswhite = false;
    this.emitZLinkClick = this.emitZLinkClick.bind(this);
    this.emitZLinkInteraction = this.emitZLinkInteraction.bind(this);
  }
  emitZLinkClick(e, linkId) {
    this.emitZLinkInteraction(e, linkId);
  }
  emitZLinkInteraction(e, linkId) {
    this.zLinkClick.emit({ e, linkId });
  }
  render() {
    return (h("a", { id: this.htmlid, href: this.href ? this.href : null, class: `${this.isdisabled && "disabled"}
          ${this.isactive && "active"}
          ${this.iswhite && "white"}`, target: this.target, role: this.href ? "link" : "button", tabindex: this.htmltabindex, onClick: (e) => this.emitZLinkClick(e, this.htmlid) },
      this.icon && h("z-icon", { name: this.icon, width: 12, height: 12 }),
      h("slot", null)));
  }
  static get is() { return "z-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "htmlid": {
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
        "text": "link id (optional)"
      },
      "attribute": "htmlid",
      "reflect": false
    },
    "href": {
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
      "attribute": "href",
      "reflect": false
    },
    "target": {
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
        "text": "link target (optional)"
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "\"_self\""
    },
    "htmltabindex": {
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
        "text": "tabindex link attribute (optional)"
      },
      "attribute": "htmltabindex",
      "reflect": false,
      "defaultValue": "0"
    },
    "isdisabled": {
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
        "text": "disable link flag (optional)"
      },
      "attribute": "isdisabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "isactive": {
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
        "text": "active link flag (optional)"
      },
      "attribute": "isactive",
      "reflect": false,
      "defaultValue": "false"
    },
    "iswhite": {
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
        "text": "white variant flag (optional)"
      },
      "attribute": "iswhite",
      "reflect": false,
      "defaultValue": "false"
    },
    "icon": {
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
        "text": "link icon name (optional)"
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "zLinkClick",
      "name": "zLinkClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emitted on link click, returns linkId"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
