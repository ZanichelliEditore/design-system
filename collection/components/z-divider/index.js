import { Host, h } from "@stencil/core";
import { DividerOrientation, DividerSize } from "../../beans";
export class ZDivider {
    constructor() {
        this.size = DividerSize.SMALL;
        this.color = "gray200";
        this.orientation = DividerOrientation.HORIZONTAL;
    }
    render() {
        return (h(Host, { key: 'eb614abec38cb1f4c558cb1b2daf4eae845842c8', class: `divider-${this.size} divider-${this.orientation}`, style: { backgroundColor: `var(--${this.color})` } }));
    }
    static get is() { return "z-divider"; }
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
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DividerSize",
                    "resolved": "DividerSize.LARGE | DividerSize.MEDIUM | DividerSize.SMALL",
                    "references": {
                        "DividerSize": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::DividerSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Divider size"
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "DividerSize.SMALL"
            },
            "color": {
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
                    "text": "[optional] Divider color"
                },
                "attribute": "color",
                "reflect": false,
                "defaultValue": "\"gray200\""
            },
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "DividerOrientation",
                    "resolved": "DividerOrientation.HORIZONTAL | DividerOrientation.VERTICAL",
                    "references": {
                        "DividerOrientation": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::DividerOrientation"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Divider orintation"
                },
                "attribute": "orientation",
                "reflect": false,
                "defaultValue": "DividerOrientation.HORIZONTAL"
            }
        };
    }
}
//# sourceMappingURL=index.js.map