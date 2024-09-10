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
        return (h("div", { key: '7364ce8b1efc2b30e792693a93f41834a65dd7c6', class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (h("div", { key: '815580b59284ea71764fd9f18b98be4ab69ff1e5', "aria-hidden": "true", class: "panel-elem-icon" }, h("img", { key: 'a736866758f35a8284310a5bc81d08f166aec78c', src: this.imgurl, alt: this.imgalt }))), h("div", { key: '1d154781e2bf59a9a6b1c8ddff324e035095c5ec', class: "panel-elem-link" }, h("a", { key: '3531d557c2145fa3fb96f13c2952d4c2c6e366b8', class: {
                "z-link": true,
                "z-link-disabled": this.isdisabled,
                "z-link-icon": true,
            }, id: elemId + "link_id", href: this.url, target: this.target }, h("z-icon", { key: 'dd6a4750589fe913eeb211025beebb3da7cfc8fd', height: 14, width: 14, name: this.linkicon }), this.linklabel)), this.descrSlotName && (h("div", { key: 'b2cbea114008c9f5c6a560c0e52f60ff9e6f7722', class: "panel-elem-desc" }, h("slot", { key: '73a350ea0ca8bc51e56a5a2879651883669a79b4', name: this.descrSlotName })))));
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
