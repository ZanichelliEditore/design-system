import { Host, h } from "@stencil/core";
import { ControlSize, InfoRevealPosition } from "../../beans";
/**
 * Info reveal component.
 *
 * @slot - content of the info panel.
 * @cssprop --z-info-reveal-panel-width - Width of the info panel.
 */
export class ZInfoReveal {
    constructor() {
        this.icon = "informationsource";
        this.position = InfoRevealPosition.BOTTOM_RIGHT;
        this.label = undefined;
        this.ariaLabel = "Apri pannello informazioni";
        this.size = ControlSize.BIG;
        this.open = false;
    }
    /**
     * Adjust the position of the info panel to prevent exiting the viewport.
     */
    adjustPanelPosition() {
        if (!this.open || !this.panel) {
            return;
        }
        const rect = this.host.getBoundingClientRect();
        const gridMargin = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--grid-margin"), 10);
        const pageWidth = document.documentElement.offsetWidth;
        // Available space for the info panel to grow towards the edge of the page, based on the `position` prop.
        const availableSpace = Math.round((this.position.includes("left") ? pageWidth - rect.left : rect.right) - gridMargin);
        this.panel.style.maxWidth = `${availableSpace}px`;
    }
    /**
     * Toggle the open state of the info panel.
     */
    togglePanel() {
        this.open = !this.open;
    }
    /**
     * Close the info panel.
     */
    closePanel() {
        this.open = false;
    }
    handleEscapeKey(event) {
        if (event.key === "Escape" && this.open) {
            this.closePanel();
        }
    }
    render() {
        return (h(Host, { key: '45471ff481d7ce13ff05da131b5de64fadaf68d9', open: this.open }, h("button", { key: '8677715bec503a1bd07f6df15932a98417599495', class: "z-info-reveal-trigger", type: "button", onClick: this.togglePanel.bind(this), "aria-label": !this.label ? this.ariaLabel : undefined, "aria-expanded": this.open ? "true" : "false", "aria-controls": "z-info-reveal-panel" }, this.icon && h("z-icon", { key: '48e14ecbee56d2dc6b9b297f8daa171c34c2a98d', name: this.icon }), this.label && h("span", { key: '89e72867433abd07cb334120558ccdc02a5bbb81', class: "z-info-reveal-label" }, this.label)), h("div", { key: '06268f048b3d6244f940900ca114dfcad5417849', class: "z-info-reveal-panel", id: "z-info-reveal-panel", ref: (el) => (this.panel = el), hidden: !this.open }, h("slot", { key: '3698cbc239ab16b04226e7e9f1619014500b30f6' }), h("button", { key: '7e03364aeb76b404d4ed78d640de500b95f68769', class: "z-info-reveal-close", type: "button", onClick: this.closePanel.bind(this), "aria-label": "Chiudi pannello informazioni" }, h("z-icon", { key: '524131a6b9b100729c10657c778bc6bb1daf6946', name: "multiply" })))));
    }
    static get is() { return "z-info-reveal"; }
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
                    "text": "Name of the icon for the trigger button"
                },
                "attribute": "icon",
                "reflect": false,
                "defaultValue": "\"informationsource\""
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InfoRevealPosition",
                    "resolved": "InfoRevealPosition.BOTTOM_LEFT | InfoRevealPosition.BOTTOM_RIGHT | InfoRevealPosition.TOP_LEFT | InfoRevealPosition.TOP_RIGHT",
                    "references": {
                        "InfoRevealPosition": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::InfoRevealPosition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The position of the z-info-reveal in the page. This helps to correctly place the info panel.\nThe panel will grow in the opposite direction of the position.\nFor example, with the default position `BOTTOM_RIGHT`, the panel will grow vertically upwards and horizontally to the left."
                },
                "attribute": "position",
                "reflect": true,
                "defaultValue": "InfoRevealPosition.BOTTOM_RIGHT"
            },
            "label": {
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
                    "text": "Label of the trigger button."
                },
                "attribute": "label",
                "reflect": false
            },
            "ariaLabel": {
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
                    "text": "Aria label of the trigger button. It will be only used when `label` prop is empty."
                },
                "attribute": "aria-label",
                "reflect": false,
                "defaultValue": "\"Apri pannello informazioni\""
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ControlSize",
                    "resolved": "ControlSize.BIG | ControlSize.SMALL | ControlSize.X_SMALL",
                    "references": {
                        "ControlSize": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::ControlSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size of the trigger button"
                },
                "attribute": "size",
                "reflect": true,
                "defaultValue": "ControlSize.BIG"
            }
        };
    }
    static get states() {
        return {
            "open": {}
        };
    }
    static get elementRef() { return "host"; }
    static get watchers() {
        return [{
                "propName": "position",
                "methodName": "adjustPanelPosition"
            }, {
                "propName": "open",
                "methodName": "adjustPanelPosition"
            }];
    }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "adjustPanelPosition",
                "target": "window",
                "capture": false,
                "passive": true
            }, {
                "name": "keydown",
                "method": "handleEscapeKey",
                "target": "window",
                "capture": true,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
