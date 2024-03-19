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
        return (h(Host, { key: '9d45170a5cefce5d815ac7b5402123645a8d243b', class: {
                "body-5-sb": true,
                "expandable": this.expandable && !!this.icon,
            } }, this.icon && h("z-icon", { name: this.icon }), h("div", { key: '9cf3b9f7b169709cf109cdab4d0cfe346a9eb29c' }, h("slot", { key: 'c26454112b3fa7ce120eaf50844cb82c9e11e751' }))));
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
