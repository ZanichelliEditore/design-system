import { h, Host } from "@stencil/core";
import { OffCanvasVariant, TransitionDirection } from "../../beans";
/**
 * @slot canvasContent - Slot for the main content.
 */
export class ZOffcanvas {
  constructor() {
    /**
     * Offcanvas variant.
     * Can be one `overlay` or `pushcontent`.
     * Default variant: pushcontent
     */
    this.variant = OffCanvasVariant.PUSHCONTENT;
    /** Whether the offcanvas is open. Default: false */
    this.open = false;
    /** open content transitioning in a specified direction left | right. Default: left */
    this.transitiondirection = TransitionDirection.LEFT;
    /**
     * Whether to skip the initial animation.
     * Useful when the initial value of the `open` prop is set to `true`.
     */
    this.skipLoadAnimation = false;
  }
  onOpenChanged() {
    if (!this.open && this.skipLoadAnimation) {
      this.skipLoadAnimation = false;
    }
    if (this.open) {
      this.handlePageOverflow();
    }
    this.canvasOpenStatusChanged.emit(this.open);
  }
  handlePageOverflow() {
    const overflow = this.variant === OffCanvasVariant.OVERLAY ? "overflow-y" : "overflow-x";
    document.body.style[overflow] = this.open ? "hidden" : "";
  }
  render() {
    return (h(Host, { class: { "skip-animation": this.skipLoadAnimation } }, h("div", { role: "presentation", class: "canvas-container", onTransitionEnd: () => this.handlePageOverflow() }, h("div", { role: "presentation", class: "canvas-content" }, h("slot", { name: "canvasContent" }))), this.variant == OffCanvasVariant.OVERLAY && (h("div", { class: "canvas-background", "data-action": "canvasBackground", onClick: () => (this.open = false) }))));
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
          "text": "Offcanvas variant.\nCan be one `overlay` or `pushcontent`.\nDefault variant: pushcontent"
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
          "text": "Whether the offcanvas is open. Default: false"
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
      },
      "skipLoadAnimation": {
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
          "text": "Whether to skip the initial animation.\nUseful when the initial value of the `open` prop is set to `true`."
        },
        "attribute": "skip-load-animation",
        "reflect": false,
        "defaultValue": "false"
      }
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
          "text": "emitted when `open` prop changes"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "open",
        "methodName": "onOpenChanged"
      }];
  }
}
