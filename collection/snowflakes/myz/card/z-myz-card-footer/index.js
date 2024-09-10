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
        return (h("div", { key: '5e52bb4e61efb15a9e45cfc35635edf162c1348b', class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, h("footer", { key: 'e58bbf1f64147496f82422ea45e0c7769145f5d2', class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { key: '7733adaf9bd6739ce95b53c963c5fef169fe5617', class: "toggle" }, h("slot", { key: '43c3727d4206f3538f82298da583634338df147f', name: "toggle" })), this.titolo && h("p", { key: '8d895c1628c00fdf053cd413c93a71bd2ed7fe2e', class: { "custom-content": this.customContent } }, this.titolo), h("div", { key: '8bc2964e1e62e7dc2b9c4198fc3d19572702fc04', class: { "content": true, "custom-content": this.customContent } }, h("div", { key: '75c1a00ee5b83cc1202ff7ea8ae96fab7d24e09a' }, h("p", { key: 'b2a545232bba45aac1aa7615dead6354327dcbff', class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, h("span", { key: '4869f5bb8a75bc51b3fddde7fe46a23811d061f9', title: this.getTitleAuthors() }, h("span", { key: '43f8c9ff3eb8a794f9be628b8d0a1d8853bc1510', "aria-description": "Autori", class: "bold" }, this.autori))), h("p", { key: '15ed7ba2687e6aafdf7704da66dcbcee7ec25445', class: "year-isbn" }, h("span", { key: 'a05d17196f49c90c025ef545586dc162444efd03', class: "isbn" }, h("span", { key: '6481dac818d211c724aaddf1e17cf71637099376' }, h("span", { key: '6d27dc2a43d5e6e3367ad77e05c76b6d096f08a1', "aria-description": "ISBN edizione cartacea", class: "bold" }, this.isbn), " ", "(ed. cartacea)")))), h("div", { key: '6df905d3cedea3ed63029851103a4a4f919e8b20', class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { key: 'b71e8974d82d8b45f1bd53d8d73b893924a8a84d', name: "list" })))), this.customContent && h("slot", { key: 'a2269175a16d7f2f2cdc48035969e6fab3d64052', name: "content" })));
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
