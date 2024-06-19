import { h, Host } from "@stencil/core";
import { OffCanvasVariant, TransitionDirection } from "../../beans";
/**
 * @slot canvasContent - Slot for the main content.
 */
export class ZOffcanvas {
    constructor() {
        this.variant = OffCanvasVariant.PUSHCONTENT;
        this.open = false;
        this.transitiondirection = TransitionDirection.LEFT;
        this.skipLoadAnimation = false;
    }
    onOpenChanged() {
        if (!this.open && this.skipLoadAnimation) {
            this.skipLoadAnimation = false;
        }
        this.handlePageOverflow();
        this.canvasOpenStatusChanged.emit(this.open);
    }
    handlePageOverflow() {
        const overflow = this.variant === OffCanvasVariant.OVERLAY ? "overflow-y" : "overflow-x";
        document.body.style[overflow] = this.open ? "hidden" : "";
    }
    disconnectedCallback() {
        this.open = false;
    }
    render() {
        return (h(Host, { key: '69d5f44707b4971fd19969ed8ff8b44cc5e8dad2', class: { "skip-animation": this.skipLoadAnimation } }, h("div", { key: '7b4045fe3c4bbc5dcd298683d445aa4800825fd7', role: "presentation", class: "canvas-container", onTransitionEnd: () => this.handlePageOverflow() }, h("div", { key: '90f6a83e5710059f24a4f99aea8e2f48786fb74f', role: "presentation", class: "canvas-content" }, h("slot", { key: 'ae14e2f2ea5771bb97dd58a986cde3b31e07c77f', name: "canvasContent" }))), this.variant == OffCanvasVariant.OVERLAY && (h("div", { key: 'd9bc6afc4d788a7b0011494b5951294a08ab8812', class: "canvas-background", "data-action": "canvasBackground", onClick: () => (this.open = false) }))));
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
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::OffCanvasVariant"
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
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::TransitionDirection"
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
//# sourceMappingURL=index.js.map
