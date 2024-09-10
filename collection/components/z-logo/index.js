import { Host, h } from "@stencil/core";
export class ZLogo {
    constructor() {
        this.width = undefined;
        this.height = undefined;
        this.imageAlt = undefined;
        this.link = undefined;
        this.targetBlank = undefined;
        this.mobileLogo = undefined;
    }
    render() {
        const style = {};
        if (this.width) {
            style["width"] = style["max-width"] = `${this.width}px`;
        }
        if (this.height) {
            style["height"] = style["max-height"] = `${this.height}px`;
        }
        return (h(Host, { key: 'ed2dc5272d8e229b9d329b5425611ee504286a75', style: style, class: { mobile: !!this.mobileLogo } }, this.link ? (h("a", { href: this.link, target: this.targetBlank ? "_blank" : "_self" }, h("img", { alt: this.imageAlt }))) : (h("img", { alt: this.imageAlt }))));
    }
    static get is() { return "z-logo"; }
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
            "width": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "image width"
                },
                "attribute": "width",
                "reflect": false
            },
            "height": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "image height"
                },
                "attribute": "height",
                "reflect": false
            },
            "imageAlt": {
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
                    "text": "alternative image text"
                },
                "attribute": "image-alt",
                "reflect": false
            },
            "link": {
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
                    "text": "link url (optional)"
                },
                "attribute": "link",
                "reflect": false
            },
            "targetBlank": {
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
                    "text": "link target: true means _blank, false means _self"
                },
                "attribute": "target-blank",
                "reflect": false
            },
            "mobileLogo": {
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
                    "text": "if true, the mobile logo is displayed, otherwise the desktop one"
                },
                "attribute": "mobile-logo",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=index.js.map
