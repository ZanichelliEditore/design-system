import { h, Host } from "@stencil/core";
import { OffCanvasVariant, TransitionDirection } from "../../beans";
/**
 * @slot canvasContent - set the content of the canvas
 * @method setSkipAanimationOnLoad - set skipAnimation
 */
export class ZOffcanvas {
  constructor() {
    /**
     * Offcanvas variant.
     * Can be one of "overlay", "pushcontent"
     * Default variant: pushcontent
     */
    this.variant = OffCanvasVariant.PUSHCONTENT;
    /** open component. Default: false */
    this.open = false;
    /** open content transitioning in a specified direction left | right. Default: left */
    this.transitiondirection = TransitionDirection.LEFT;
    /** manages the skip for the entry animation*/
    this.skipanimationonload = false;
  }
  /** this method allows you to skip the page loading animation, to be used with the prop set to true */
  async setSkipAanimationOnLoad(value) {
    this.skipanimationonload = value;
  }
  onOpenChanged() {
    if (!this.open && this.skipanimationonload) {
      this.skipanimationonload = false;
    }
    if (this.open) {
      this.handleOverflowProperty();
    }
    this.canvasOpenStatusChanged.emit(this.open);
  }
  handleOverflowProperty() {
    const overflow = this.variant === OffCanvasVariant.OVERLAY ? "overflow-y" : "overflow-x";
    document.body.style[overflow] = this.open ? "hidden" : "";
  }
  handledTransitionEnd() {
    this.handleOverflowProperty();
  }
  render() {
    return (h(Host, { class: { "skip-animation": this.skipanimationonload } }, h("div", { role: "presentation", class: "canvas-container", onTransitionEnd: () => this.handledTransitionEnd() }, h("div", { role: "presentation", class: "canvas-content" }, h("slot", { name: "canvasContent" }))), this.variant == OffCanvasVariant.OVERLAY && (h("div", { class: "canvas-background", "data-action": "canvasBackground", onClick: () => (this.open = false) }))));
  }
  static get is() { return "z-offcanvas"; }
  static get encapsulation() { return "scoped"; }
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
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "OffCanvasVariant",
          "resolved": "OffCanvasVariant.OVERLAY | OffCanvasVariant.PUSHCONTENT",
          "references": {
            "OffCanvasVariant": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Offcanvas variant.\nCan be one of \"overlay\", \"pushcontent\"\nDefault variant: pushcontent"
        },
        "attribute": "variant",
        "reflect": true,
        "defaultValue": "OffCanvasVariant.PUSHCONTENT"
      },
      "open": {
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
          "text": "open component. Default: false"
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
      "transitiondirection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TransitionDirection",
          "resolved": "TransitionDirection.LEFT | TransitionDirection.RIGHT",
          "references": {
            "TransitionDirection": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "open content transitioning in a specified direction left | right. Default: left"
        },
        "attribute": "transitiondirection",
        "reflect": true,
        "defaultValue": "TransitionDirection.LEFT"
      }
    };
  }
  static get states() {
    return {
      "skipanimationonload": {}
    };
  }
  static get events() {
    return [{
        "method": "canvasOpenStatusChanged",
        "name": "canvasOpenStatusChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "emitted when open prop changes"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "setSkipAanimationOnLoad": {
        "complexType": {
          "signature": "(value: boolean) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "this method allows you to skip the page loading animation, to be used with the prop set to true",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "open",
        "methodName": "onOpenChanged"
      }];
  }
}
