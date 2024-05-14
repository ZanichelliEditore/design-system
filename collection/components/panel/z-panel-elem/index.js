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
        return (h("div", { key: 'bdc30d88a3eb7ba48958701df00b9ef7e8516bba', class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (h("div", { "aria-hidden": "true", class: "panel-elem-icon" }, h("img", { src: this.imgurl, alt: this.imgalt }))), h("div", { key: 'fe7f4ba7d0851986d693be0a88b463cedabb5934', class: "panel-elem-link" }, h("a", { key: '7325188fe40d6a2726d542607581b1517e6d5b3b', class: {
                "z-link": true,
                "z-link-disabled": this.isdisabled,
                "z-link-icon": true,
            }, id: elemId + "link_id", href: this.url, target: this.target }, h("z-icon", { key: 'df0f7f98e88de69f4894bfa8250a884aa6da9c3a', height: 14, width: 14, name: this.linkicon }), this.linklabel)), this.descrSlotName && (h("div", { class: "panel-elem-desc" }, h("slot", { name: this.descrSlotName })))));
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
