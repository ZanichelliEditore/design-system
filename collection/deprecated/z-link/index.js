import { h } from "@stencil/core";
/**
 * @deprecated - use a native `<a>` with the `z-link` CSS class instead
 * @slot - link content
 */
export class ZLink {
    constructor() {
        this.htmlid = undefined;
        this.href = undefined;
        this.target = "_self";
        this.htmltabindex = 0;
        this.isdisabled = false;
        this.isactive = false;
        this.iswhite = false;
        this.textcolor = "primary";
        this.icon = undefined;
        this.big = false;
        this.iconposition = "left";
        this.underline = false;
        this.iconSize = 18;
        this.emitZLinkClick = this.emitZLinkClick.bind(this);
        this.emitZLinkInteraction = this.emitZLinkInteraction.bind(this);
    }
    componentWillLoad() {
        if (this.iswhite) {
            console.warn("z-link iswhite prop is deprecated and will be dropped in a next release, please use textcolor prop instead");
        }
        if (this.big) {
            console.warn("z-link big prop is deprecated and will be dropped in a next release, please override --font-size-link and --font-weight-link variables instead");
        }
    }
    emitZLinkClick(e, linkId) {
        this.emitZLinkInteraction(e, linkId);
    }
    emitZLinkInteraction(e, linkId) {
        this.zLinkClick.emit({ e, linkId });
    }
    componentDidLoad() {
        if (this.icon) {
            const height = parseFloat(window.getComputedStyle(this.hostElement).getPropertyValue("font-size"));
            const currentSize = this.big ? 18 : Math.round(height * 1.125);
            if (!Number.isNaN(currentSize) && this.iconSize !== currentSize) {
                this.iconSize = currentSize;
            }
        }
    }
    render() {
        return (h("a", { key: '425050abb1336c772d5bbe5ec770a998c50089b5', id: this.htmlid, href: this.href ? this.href : null, class: {
                disabled: this.isdisabled,
                active: this.isactive,
                white: this.iswhite,
                [this.textcolor || ""]: true,
                underline: this.underline,
            }, target: this.target, role: this.href ? "link" : "button", tabindex: this.isdisabled ? -1 : this.htmltabindex, onClick: (e) => this.emitZLinkClick(e, this.htmlid) }, this.iconposition === "right" && h("slot", null), this.icon && (h("z-icon", { style: {
                "--z-icon-width": `${this.iconSize}px`,
                "--z-icon-height": `${this.iconSize}px`,
            }, name: this.icon })), this.iconposition === "left" && h("slot", null)));
    }
    static get is() { return "z-link"; }
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
            "htmlid": {
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
                    "text": "link id (optional)"
                },
                "attribute": "htmlid",
                "reflect": false
            },
            "href": {
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
                "attribute": "href",
                "reflect": false
            },
            "target": {
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
                    "text": "link target (optional)"
                },
                "attribute": "target",
                "reflect": false,
                "defaultValue": "\"_self\""
            },
            "htmltabindex": {
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
                    "text": "tabindex link attribute (optional)"
                },
                "attribute": "htmltabindex",
                "reflect": false,
                "defaultValue": "0"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "disable link flag (optional)"
                },
                "attribute": "isdisabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "isactive": {
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
                    "text": "active link flag (optional)"
                },
                "attribute": "isactive",
                "reflect": false,
                "defaultValue": "false"
            },
            "iswhite": {
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
                    "text": "white variant flag (optional)"
                },
                "attribute": "iswhite",
                "reflect": false,
                "defaultValue": "false"
            },
            "textcolor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "\"primary\" | \"inverse\" | \"white\" | \"black\"",
                    "resolved": "\"black\" | \"inverse\" | \"primary\" | \"white\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "link text variant (optional)"
                },
                "attribute": "textcolor",
                "reflect": false,
                "defaultValue": "\"primary\""
            },
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
                    "text": "link icon name (optional)"
                },
                "attribute": "icon",
                "reflect": false
            },
            "big": {
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
                    "text": "big link version"
                },
                "attribute": "big",
                "reflect": true,
                "defaultValue": "false"
            },
            "iconposition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "\"left\" | \"right\"",
                    "resolved": "\"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "link icon position (optional)"
                },
                "attribute": "iconposition",
                "reflect": false,
                "defaultValue": "\"left\""
            },
            "underline": {
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
                    "text": "draw underline on text (optional)"
                },
                "attribute": "underline",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "iconSize": {}
        };
    }
    static get events() {
        return [{
                "method": "zLinkClick",
                "name": "zLinkClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "emitted on link click, returns linkId"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
}
//# sourceMappingURL=index.js.map
