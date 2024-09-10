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
        return (h("div", { key: '53ee49e87ccaa13c3c80be83f799d48b5d43b09a', class: {
                "z-chip-container": true,
                "z-chip-interactive": !!this.interactiveIcon,
                [this.type]: true,
            }, "aria-disabled": this.disabled }, this.icon && h("z-icon", { key: 'd8d6c51f9aeeeec166898f263f75588f3c666cef', name: this.icon }), h("slot", { key: '3f1e2925b5e3ae370d4c37bcbdc95f142ff22a3f' }), this.interactiveIcon && (h("button", { key: '13b028125d5718b882351ab017418246e8bf900d', type: "button", onClick: () => this.interactiveIconClick.emit(), "aria-label": this.ariaLabel, disabled: this.disabled }, h("z-icon", { key: '913f66b93c948aeaf67e89a76d6870c26ce48a31', class: "interactive-icon", name: this.interactiveIcon })))));
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
