import { h } from "@stencil/core";
export class ZMyzCardIcon {
    constructor() {
        this.icon = undefined;
        this.isdisabled = false;
        this.ariaLabel = "";
    }
    render() {
        return (h("button", { key: 'bbbbbbe77b7de06f08972ee4d5026ed462c746dc', disabled: this.isdisabled, "aria-label": this.ariaLabel }, h("span", { key: '8ad2c105260ef90af55fc87533513664d6accc9c' }, h("z-icon", { key: '9af21937f5c601ad05966c684b28f5f5503e5932', name: this.icon, width: 16, height: 16 }))));
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
