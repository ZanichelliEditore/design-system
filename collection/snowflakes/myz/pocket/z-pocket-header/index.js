import { h } from "@stencil/core";
import { handleKeyboardSubmit } from "../../../../utils/utils";
import Hammer from "hammerjs";
/**
 * @slot  - pocket header content
 */
export class ZPocketHeader {
  constructor() {
    this.emitPocketHeaderClick = this.emitPocketHeaderClick.bind(this);
  }
  emitPocketHeaderClick() {
    this.pocketHeaderClick.emit({ id: this.pocketid });
  }
  emitPocketHeaderPan(direction) {
    this.pocketHeaderPan.emit({ id: this.pocketid, direction });
  }
  componentDidLoad() {
    // INFO: swipe handling
    const mc = new Hammer(this.swipeWrap);
    mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });
    mc.on("panup", () => this.emitPocketHeaderPan("up"));
    mc.on("pandown", () => this.emitPocketHeaderPan("down"));
  }
  render() {
    return (h("header", { role: "button", tabindex: 0, onClick: () => this.emitPocketHeaderClick(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitPocketHeaderClick), ref: (el) => (this.swipeWrap = el) }, h("slot", null)));
  }
  static get is() { return "z-pocket-header"; }
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
      "pocketid": {
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
          "text": "pocket id"
        },
        "attribute": "pocketid",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "pocketHeaderClick",
        "name": "pocketHeaderClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on pocket header click"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "pocketHeaderPan",
        "name": "pocketHeaderPan",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on pocket header pan"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
