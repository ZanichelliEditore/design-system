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
        return (h(Host, { key: '44382bb203dff02051742ab75321405ea88a40ce', class: { "skip-animation": this.skipLoadAnimation } }, h("div", { key: 'a3e8b0892f68a7123535e7a15f56909e7e2fc971', role: "presentation", class: "canvas-container", onTransitionEnd: () => this.handlePageOverflow() }, h("div", { key: '5ccd9e46853a37b08f1ba3f6e8350037777eb9d2', role: "presentation", class: "canvas-content" }, h("slot", { key: '033b592b1d74f97fc46e7f93ae7e1a88e44f328d', name: "canvasContent" }))), this.variant == OffCanvasVariant.OVERLAY && (h("div", { key: '30719eb0832c6dd4f8d49bae817514414a64f794', class: "canvas-background", "data-action": "canvasBackground", onClick: () => (this.open = false) }))));
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
