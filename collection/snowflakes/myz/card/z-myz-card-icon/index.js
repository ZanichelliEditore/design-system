import { h } from "@stencil/core";
export class ZMyzCardIcon {
    constructor() {
        this.icon = undefined;
        this.isdisabled = false;
        this.ariaLabel = "";
    }
    render() {
        return (h("button", { key: 'd07c0ca573477aa1045a68da5f4fe528243ce36f', disabled: this.isdisabled, "aria-label": this.ariaLabel }, h("span", { key: 'd4fbc76e9d771efc6fba0f0f311e30261c4bb070' }, h("z-icon", { key: '7a27b69214edf71caff54e1b0619f1b8ce7f1003', name: this.icon, width: 16, height: 16 }))));
    }
    static get is() { return "z-myz-card-icon"; }
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "icon name"
                },
                "attribute": "icon",
                "reflect": false
            },
            "isdisabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "disabled status flag"
                },
                "attribute": "isdisabled",
                "reflect": false,
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
                    "text": "description of the icon"
                },
                "attribute": "aria-label",
                "reflect": false,
                "defaultValue": "\"\""
            }
        };
    }
}
//# sourceMappingURL=index.js.map
