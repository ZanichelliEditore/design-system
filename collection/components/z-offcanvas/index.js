import { h, Host } from "@stencil/core";
import { OffCanvasVariant, TransitionDirection } from "../../beans";
/**
 * @slot canvasContent - set the content of the canvas
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
  }
  componentWillLoad() {
    this.handleOpenStatus();
  }
  onOpenChanged() {
    this.handleOpenStatus();
    this.canvasOpenStatusChanged.emit(this.open);
  }
  handleOpenStatus() {
    if (this.open) {
      this.hostElement.style.opacity = "0";
      this.hostElement.style.display = "flex";
    }
    else if (this.variant === OffCanvasVariant.PUSHCONTENT) {
      this.hostElement.style.display = "none";
      document.body.style.overflowX = "hidden";
    }
  }
  handleAnimationEnd() {
    if (this.hostElement.hasAttribute("open")) {
      this.hostElement.querySelector(`.canvas-content`).focus();
    }
    else if (this.variant === OffCanvasVariant.OVERLAY) {
      this.hostElement.style.display = "none";
      document.body.style.overflowX = "initial";
    }
  }
  handleAnimationStart() {
    if (this.hostElement.hasAttribute("open")) {
      this.hostElement.style.opacity = "1";
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "canvas-container", onAnimationEnd: () => this.handleAnimationEnd(), onAnimationStart: () => this.handleAnimationStart() }, h("div", { class: "canvas-content" }, h("slot", { name: "canvasContent" }))), h("div", { class: "canvas-background", "data-action": "canvasBackground", onClick: () => (this.open = false) })));
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
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "open",
        "methodName": "onOpenChanged"
      }];
  }
}
