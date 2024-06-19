import { h } from "@stencil/core";
import { ZChipType } from "../../beans";
export class ZChip {
    constructor() {
        this.icon = undefined;
        this.type = ZChipType.DEFAULT;
        this.interactiveIcon = undefined;
        this.disabled = false;
        this.ariaLabel = "";
    }
    render() {
        return (h("div", { key: '97f98567047b81864de0326e6ec89153d83cc1c1', class: {
                "z-chip-container": true,
                "z-chip-interactive": !!this.interactiveIcon,
                [this.type]: true,
            }, "aria-disabled": this.disabled }, this.icon && h("z-icon", { key: '45a3661a2cbda05351c56bbc9fd697fad9bc96ea', name: this.icon }), h("slot", { key: '9d81610f7d11777a0ab71772f35e610796d65e98' }), this.interactiveIcon && (h("button", { key: '53c13cdad61a96cb139c32923c469e9e1237bc15', type: "button", onClick: () => this.interactiveIconClick.emit(), "aria-label": this.ariaLabel, disabled: this.disabled }, h("z-icon", { key: '0baf684cbd662f7b3cedbd2a7468215f896472c6', class: "interactive-icon", name: this.interactiveIcon })))));
    }
    static get is() { return "z-chip"; }
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
                    "text": "Non interactive icon"
                },
                "attribute": "icon",
                "reflect": false
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ZChipType",
                    "resolved": "ZChipType.DEFAULT | ZChipType.MEDIUM | ZChipType.SMALL",
                    "references": {
                        "ZChipType": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::ZChipType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "z-chip size type, can be default, medium or small"
                },
                "attribute": "type",
                "reflect": true,
                "defaultValue": "ZChipType.DEFAULT"
            },
            "interactiveIcon": {
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
                    "text": "z-chip interactive icon"
                },
                "attribute": "interactive-icon",
                "reflect": true
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "set z-chip as disabled"
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "z-chip aria-label string"
                },
                "attribute": "aria-label",
                "reflect": false,
                "defaultValue": "\"\""
            }
        };
    }
    static get events() {
        return [{
                "method": "interactiveIconClick",
                "name": "interactiveIconClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "click on interactive icon"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=index.js.map
