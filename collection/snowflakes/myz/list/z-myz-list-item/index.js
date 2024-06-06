import { h } from "@stencil/core";
import { handleKeyboardSubmit } from "../../../../utils/utils";
export class ZMyzListItem {
    emitZListItemLinkClick(e, linkId) {
        this.zListItemLinkClick.emit({ e, linkId });
    }
    emitZListItemClick(e, listitemid) {
        this.zListItemClick.emit({ e, listitemid });
    }
    constructor() {
        this.text = undefined;
        this.link = undefined;
        this.linktarget = "_self";
        this.icon = undefined;
        this.listitemid = undefined;
        this.action = undefined;
        this.underlined = true;
        this.emitZListItemLinkClick = this.emitZListItemLinkClick.bind(this);
        this.emitZListItemClick = this.emitZListItemClick.bind(this);
    }
    render() {
        const linkId = this.listitemid ? `link_${this.listitemid}` : "";
        return (h("li", { key: '914bc78b92ddae7aa62c5a695c7b92343dd5dab3', role: "button", id: this.listitemid, "data-action": this.action, onClick: (e) => this.emitZListItemClick(e, this.listitemid), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitZListItemClick, this.listitemid) }, h("span", { key: 'e673a5e63e48760fdf00bc8c74a7b22f850fca8c', class: this.underlined && "border" }, this.icon && h("z-icon", { name: this.icon }), this.link ? (h("a", { href: this.link ? this.link : null, target: this.linktarget, id: linkId, onClick: (e) => this.emitZListItemLinkClick(e, linkId), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitZListItemLinkClick, linkId), role: this.link ? "link" : "button", tabindex: "0" }, this.text)) : (h("span", { innerHTML: this.text })), h("slot", { key: '05aaf3b526046e02ef2505c74a64c907c6f66444' }))));
    }
    static get is() { return "z-myz-list-item"; }
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
            "text": {
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
                    "text": "content text"
                },
                "attribute": "text",
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
            "linktarget": {
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
                "attribute": "linktarget",
                "reflect": false,
                "defaultValue": "\"_self\""
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
                    "text": "icon name (optional)"
                },
                "attribute": "icon",
                "reflect": false
            },
            "listitemid": {
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
                    "text": "id (optional)"
                },
                "attribute": "listitemid",
                "reflect": false
            },
            "action": {
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
                    "text": "data-action attribute (optional)"
                },
                "attribute": "action",
                "reflect": false
            },
            "underlined": {
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
                    "text": "underlined style flag"
                },
                "attribute": "underlined",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get events() {
        return [{
                "method": "zListItemLinkClick",
                "name": "zListItemLinkClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "emitted on list item link click, returns linkId"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "zListItemClick",
                "name": "zListItemClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "emitted on list item click, returns listitemid"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=index.js.map
