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
        return (h(Host, { key: '0b2f0fda539ab5e9f07e93bd1eeab8eb098e3245', class: {
                "body-5-sb": true,
                "expandable": this.expandable && !!this.icon,
            } }, this.icon && h("z-icon", { key: '1ce99af72a0ee664304ffc0a0fd401e98e043788', name: this.icon }), h("div", { key: 'fb9aee905ab56d5c086ee850eaf7f7cb8fa10dfe' }, h("slot", { key: '8f1d8bb919793b9570fb49a0761be534b6e454ce' }))));
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
