import { Component, Prop, h, Event } from "@stencil/core";
/**
 * @slot modalContent - set the content of the modal
 * @slot modalCloseButton - accept custom close button
 */
export class ZModal {
  constructor() {
    /** aria-label for close button (optional) */
    this.closeButtonLabel = "close modal";
  }
  emitModalClose() {
    this.modalClose.emit({ modalid: this.modalid });
  }
  emitModalHeaderActive() {
    this.modalHeaderActive.emit({ modalid: this.modalid });
  }
  emitBackgroundClick() {
    this.modalBackgroundClick.emit({ modalid: this.modalid });
  }
  render() {
    return [
      h("div", { class: "modal-container", id: this.modalid, role: "dialog" },
        h("header", { onClick: this.emitModalHeaderActive.bind(this) },
          h("div", null,
            this.modaltitle && h("h1", null, this.modaltitle),
            this.modalsubtitle && h("h2", null, this.modalsubtitle)),
          h("slot", { name: "modalCloseButton" },
            h("button", { "aria-label": this.closeButtonLabel, onClick: this.emitModalClose.bind(this) },
              h("z-icon", { name: "multiply-circle-filled" })))),
        h("div", { class: "modal-content" },
          h("slot", { name: "modalContent" }))),
      h("div", { class: "modal-background", "data-action": "modalBackground", "data-modal": this.modalid, onClick: this.emitBackgroundClick.bind(this) })
    ];
  }
  static get is() { return "z-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "modalid": {
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
        "text": "unique id"
      },
      "attribute": "modalid",
      "reflect": false
    },
    "modaltitle": {
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
        "text": "title text (optional)"
      },
      "attribute": "modaltitle",
      "reflect": false
    },
    "modalsubtitle": {
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
        "text": "subtitle (optional)"
      },
      "attribute": "modalsubtitle",
      "reflect": false
    },
    "closeButtonLabel": {
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
        "text": "aria-label for close button (optional)"
      },
      "attribute": "close-button-label",
      "reflect": false,
      "defaultValue": "\"close modal\""
    }
  }; }
  static get events() { return [{
      "method": "modalClose",
      "name": "modalClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emitted on close button click, returns modalid"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "modalHeaderActive",
      "name": "modalHeaderActive",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emitted on modal header click, returns modalid"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "modalBackgroundClick",
      "name": "modalBackgroundClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "emitted on background click, returns modalid"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
