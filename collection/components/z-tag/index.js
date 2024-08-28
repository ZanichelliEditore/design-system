import { Host, h } from "@stencil/core";
/**
 * Ztag component.
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
        return (h(Host, { key: '2b457c2a7462afa36499c0991a32436751b2b6d1', class: {
                expandable: this.expandable && !!this.icon,
            } }, this.icon && h("z-icon", { key: '3f6b461a15c9221c658221894f62895bdbd8e108', name: this.icon }), h("div", { key: '0bb11571e1f99587a62e9d345fc731bf795656e5' }, h("slot", { key: '46ccbc8282a3611e7a3188651bbe96df1aacb5b2' }))));
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
