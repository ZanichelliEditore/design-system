import { h } from "@stencil/core";
/**
 * @slot `descrSlotName` - description content
 */
export class ZPanelElem {
    constructor() {
        this.elemid = undefined;
        this.imgurl = undefined;
        this.imgalt = undefined;
        this.linkicon = undefined;
        this.linklabel = undefined;
        this.url = undefined;
        this.target = "_blank";
        this.isdisabled = false;
        this.descrSlotName = undefined;
    }
    render() {
        const elemId = this.elemid ? this.elemid : "";
        return (h("div", { key: 'bbae0bd29656529b2019a66668d6dfbf66b9b0a1', class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (h("div", { key: '620411ca326a5975d3cc21549cfc51a7d7eea519', "aria-hidden": "true", class: "panel-elem-icon" }, h("img", { key: '79a77af32280e5f1e58f794f07c1365da1fa30a7', src: this.imgurl, alt: this.imgalt }))), h("div", { key: '67ad3e575caab6d93bf8d0a17de138ae59fffb35', class: "panel-elem-link" }, h("a", { key: 'f79f44642cbceefd484bbe63e4af6ea03d197fec', class: {
                "z-link": true,
                "z-link-disabled": this.isdisabled,
                "z-link-icon": true,
            }, id: elemId + "link_id", href: this.url, target: this.target }, h("z-icon", { key: '0f112223c94273b9baa33da513c60a51dba33e7b', height: 14, width: 14, name: this.linkicon }), this.linklabel)), this.descrSlotName && (h("div", { key: '4ae5da7e8a2a92be4c801790a90b6907e7ffe6b3', class: "panel-elem-desc" }, h("slot", { key: '4c4e6872a2fe1cb443002a004b5aa1ce18a8f96f', name: this.descrSlotName })))));
    }
    static get is() { return "z-panel-elem"; }
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
            "elemid": {
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
                    "text": "html element id (optional)"
                },
                "attribute": "elemid",
                "reflect": false
            },
            "imgurl": {
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
                    "text": "image url source (optional)"
                },
                "attribute": "imgurl",
                "reflect": false
            },
            "imgalt": {
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
                    "text": "alternative image text (optional)"
                },
                "attribute": "imgalt",
                "reflect": false
            },
            "linkicon": {
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
                    "text": "icon link name (optional)"
                },
                "attribute": "linkicon",
                "reflect": false
            },
            "linklabel": {
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
                    "text": "link label text"
                },
                "attribute": "linklabel",
                "reflect": false
            },
            "url": {
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
                    "text": "link url"
                },
                "attribute": "url",
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
                "defaultValue": "\"_blank\""
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
                    "text": "disabled status flag (optional)"
                },
                "attribute": "isdisabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "descrSlotName": {
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
                    "text": "name of slot container (optional)"
                },
                "attribute": "descr-slot-name",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=index.js.map
