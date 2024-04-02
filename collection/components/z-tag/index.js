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
        return (h(Host, { key: 'fa2bfa00bef52495bef1e2271ffa20c09a60380a', class: {
                "body-5-sb": true,
                "expandable": this.expandable && !!this.icon,
            } }, this.icon && h("z-icon", { name: this.icon }), h("div", { key: '37bbe9678c9a2022a6fe260753b7955fdb9a76d1' }, h("slot", { key: 'f9f7a5f44c6b89d90b4b252fd990889751e955c8' }))));
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
