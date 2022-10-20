import { h } from "@stencil/core";
import { ButtonSize, ButtonVariant } from "../../../../beans";
/**
 * @slot  - generic card slot
 * @slot info - flipped card info
 */
export class ZMyzCardDictionary {
  constructor() {
    /** card is disabled */
    this.disabled = false;
    /** card is flipped */
    this.flipped = false;
    /** flip button label */
    this.flipbuttonlabel = "INFO";
    /** hide info button */
    this.hideinfobtn = false;
  }
  handleFlipCard(e) {
    this.flipCard(e.detail);
  }
  flipCard(showBack = true) {
    this.flipped = showBack;
    this.cardFlipped.emit(showBack);
  }
  render() {
    return (h("div", null, h("z-myz-card", null, h("z-myz-card-header", { titolo: this.name }), h("div", { class: `content ${this.flipped ? "flipped" : ""}` }, h("div", { class: "front" }, h("z-myz-card-body", null, h("z-myz-card-cover", { slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), h("z-button", { class: { "hide-info": this.hideinfobtn }, variant: ButtonVariant.SECONDARY, icon: "informationsource", size: ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), h("div", { class: "back" }, h("slot", { name: "info" }))), h("slot", null))));
  }
  static get is() { return "z-myz-card-dictionary"; }
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
          "text": "card title"
        },
        "attribute": "name",
        "reflect": false
      },
      "cover": {
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
          "text": "card cover"
        },
        "attribute": "cover",
        "reflect": false
      },
      "disabled": {
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
          "text": "card is disabled"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "flipped": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "card is flipped"
        },
        "attribute": "flipped",
        "reflect": false,
        "defaultValue": "false"
      },
      "flipbuttonlabel": {
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
          "text": "flip button label"
        },
        "attribute": "flipbuttonlabel",
        "reflect": false,
        "defaultValue": "\"INFO\""
      },
      "hideinfobtn": {
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
          "text": "hide info button"
        },
        "attribute": "hideinfobtn",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "cardFlipped",
        "name": "cardFlipped",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "when card is flipped"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get listeners() {
    return [{
        "name": "flipCard",
        "method": "handleFlipCard",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
