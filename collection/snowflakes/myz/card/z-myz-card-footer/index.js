import { h } from "@stencil/core";
import { LicenseType } from "../../../../beans/index";
/**
 * @slot toggle - toggle button slot
 * @slot list - card resources list slot
 */
export class ZMyzCardFooter {
    constructor() {
        this.titolo = undefined;
        this.autori = undefined;
        this.isbn = undefined;
        this.faded = undefined;
        this.cardtype = undefined;
        this.opened = false;
        this.customContent = false;
        this.isOpen = false;
        this.allowTooltipAuthors = false;
    }
    handleToggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            const firstElem = this.getFirstListItem();
            if (firstElem) {
                requestAnimationFrame(() => {
                    firstElem.focus();
                });
            }
        }
    }
    getTitleAuthors() {
        return this.allowTooltipAuthors ? this.autori : "";
    }
    componentWillLoad() {
        if (this.opened) {
            this.isOpen = true;
        }
    }
    elementsEllipsis() {
        this.allowTooltipAuthors = this.elementAuthorsHasEllipsis() ? true : false;
    }
    elementAuthorsHasEllipsis() {
        return this.ellipsisAuthors.offsetWidth < this.ellipsisAuthors.scrollWidth;
    }
    retrieveClass() {
        return {
            "isopen": this.isOpen,
            "real": this.cardtype === LicenseType.REAL,
            "trial": this.cardtype === LicenseType.TRIAL,
            "temp": this.cardtype === LicenseType.TEMP,
            "custom-content": this.customContent,
        };
    }
    footerTransitionHandler(e) {
        if (["visibility", "height"].includes(e.propertyName)) {
            this.elementsEllipsis();
        }
    }
    getFirstListItem() {
        return this.host.querySelector("[slot=list] > li a");
    }
    render() {
        return (h("div", { key: 'eff686d5d74e259c149f24159ad11b8fa35678c5', class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, h("footer", { key: '3d98d7d2b93a381fe5a30ffc759dbd5d9400e651', class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { key: '5b3972c0da599babfe34be1e6272f32c9ac0caa8', class: "toggle" }, h("slot", { key: 'eac0e7c9dce28af1aa5b1105def1f9f07dfeef9a', name: "toggle" })), this.titolo && h("p", { class: { "custom-content": this.customContent } }, this.titolo), h("div", { key: 'a93cb0b556c110b95f89a5ebac3fbfe0dab3ac74', class: { "content": true, "custom-content": this.customContent } }, h("div", { key: 'c8aab3d52f2938cf75df111719f8e4bf1fdbeaf5' }, h("p", { key: 'd1658fc5bd5426afa3014d32f63b3f341f23745e', class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, h("span", { key: '5e34c29544c596fbbcf3e63e7c6bc83d87ff769d', title: this.getTitleAuthors() }, h("span", { key: 'c2bafd8e92c1aea55c9fca61a5ce413ef798e8aa', "aria-description": "Autori", class: "bold" }, this.autori))), h("p", { key: '974b294cb52e721c89cd3cdd109912c37a4678c6', class: "year-isbn" }, h("span", { key: 'b3519bbf042c6dc6f03b30c8a58a93bcdfe2579f', class: "isbn" }, h("span", { key: '212a231d499a2c2c9d11a91ffbf7c18c00963397' }, h("span", { key: 'd85d6ab5d999105f36cf2f90fffe42d352a75b67', "aria-description": "ISBN edizione cartacea", class: "bold" }, this.isbn), " ", "(ed. cartacea)")))), h("div", { key: 'bf8ae2a2c8544702c7643c5e39450d2960a4c10e', class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { key: '9774d27b4959431244b573ba9f7c08e112799427', name: "list" })))), this.customContent && h("slot", { name: "content" })));
    }
    static get is() { return "z-myz-card-footer"; }
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
            "titolo": {
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
                    "text": "volume title"
                },
                "attribute": "titolo",
                "reflect": false
            },
            "autori": {
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
                    "text": "authors name text"
                },
                "attribute": "autori",
                "reflect": false
            },
            "isbn": {
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
                    "text": "volume isbn"
                },
                "attribute": "isbn",
                "reflect": false
            },
            "faded": {
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
                    "text": "faded status"
                },
                "attribute": "faded",
                "reflect": false
            },
            "cardtype": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LicenseType",
                    "resolved": "LicenseType.REAL | LicenseType.TEMP | LicenseType.TRIAL | LicenseType.VIRTUAL",
                    "references": {
                        "LicenseType": {
                            "location": "import",
                            "path": "../../../../beans/index",
                            "id": "src/beans/index.tsx::LicenseType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "card graphic variant (optional)"
                },
                "attribute": "cardtype",
                "reflect": false
            },
            "opened": {
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
                    "text": "footer opened by default (optional)"
                },
                "attribute": "opened",
                "reflect": false,
                "defaultValue": "false"
            },
            "customContent": {
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
                    "text": "display footer custom slotted content"
                },
                "attribute": "custom-content",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "allowTooltipAuthors": {}
        };
    }
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "toggleClick",
                "method": "handleToggle",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
