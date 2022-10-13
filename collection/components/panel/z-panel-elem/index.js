import { h } from "@stencil/core";
/**
 * @slot `descr_slot_name` - description content
 */
export class ZPanelElem {
  constructor() {
    /** link target (optional) */
    this.target = "_blank";
    /** disabled status flag (optional) */
    this.isdisabled = false;
  }
  renderIcon() {
    if (this.isdisabled) {
      return h("img", { src: this.imgurl, alt: this.imgalt });
    }
    return (h("a", { class: "elem-icon", href: this.url, target: this.target }, h("img", { src: this.imgurl, alt: this.imgalt })));
  }
  render() {
    const elemId = this.elemid ? this.elemid : "";
    return (h("div", { class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (h("div", { class: "panel-elem-icon" }, this.renderIcon())), h("div", { class: "panel-elem-link" }, h("z-link", { href: this.url, icon: this.linkicon, isdisabled: this.isdisabled, target: this.target, htmlid: elemId + "link_id" }, this.linklabel)), this.descr_slot_name && (h("div", { class: "panel-elem-desc body-long-01" }, h("slot", { name: this.descr_slot_name })))));
  }
  static get is() { return "z-panel-elem"; }
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
      "elemid": {
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
          "text": "html element id (optional)"
        },
        "attribute": "elemid",
        "reflect": false
      },
      "imgurl": {
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
          "text": "image url source (optional)"
        },
        "attribute": "imgurl",
        "reflect": false
      },
      "imgalt": {
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
          "text": "alternative image text (optional)"
        },
        "attribute": "imgalt",
        "reflect": false
      },
      "linkicon": {
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
          "text": "icon link name (optional)"
        },
        "attribute": "linkicon",
        "reflect": false
      },
      "linklabel": {
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
          "text": "link label text"
        },
        "attribute": "linklabel",
        "reflect": false
      },
      "url": {
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
          "text": "link url"
        },
        "attribute": "url",
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
        "defaultValue": "\"_blank\""
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
          "text": "disabled status flag (optional)"
        },
        "attribute": "isdisabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "descr_slot_name": {
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
          "text": "name of slot container (optional)"
        },
        "attribute": "descr_slot_name",
        "reflect": false
      }
    };
  }
}
