import { h, Host } from "@stencil/core";
/**
 * Ztag  component.
 * @slot - The text of the z-tag.
 * @cssprop --z-tag-text-color - text and icon color using tokens.
 * @cssprop --z-tag-bg - background color of the z-tag.
 */
export class ZTag {
    constructor() {
        this.icon = undefined;
        this.expandable = undefined;
    }
    render() {
        return (h(Host, { key: 'b729016f6124e26466ce3ccf198788857464cc6c', class: {
                "body-5-sb": true,
                "expandable": this.expandable && !!this.icon,
            } }, this.icon && h("z-icon", { name: this.icon }), h("div", { key: 'ee019241356d66ebf6f64020e37586a88703dfa2' }, h("slot", { key: '7f7a73ef3b731a5ddb8126b2fb1e2627af99805d' }))));
    }
    static get is() { return "z-tag"; }
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
                    "text": "[optional] Tag icon"
                },
                "attribute": "icon",
                "reflect": false
            },
            "expandable": {
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
                    "text": "[optional] Hide the text and show it on hover"
                },
                "attribute": "expandable",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=index.js.map
