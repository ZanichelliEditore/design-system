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
        return (h("div", { key: 'e5711063557dce84367650a81a3313e4d4755ca7', class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, h("footer", { key: '81fe8ba76037d6aabf6a34123ef7e16b9fdcf6bf', class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { key: 'fe8a8eb5e9668ef98052aa77ea006e36e1da4362', class: "toggle" }, h("slot", { key: '1b31d051074a5c49783adced5ab8a08ffce34c2c', name: "toggle" })), this.titolo && h("p", { key: 'fd5184ba3211dcaec0fbbada7e66c2424e8683a1', class: { "custom-content": this.customContent } }, this.titolo), h("div", { key: 'eb56f5377d285fa66090865f3750267827a55b30', class: { "content": true, "custom-content": this.customContent } }, h("div", { key: '73df88cb7871a4aeb47414cdfb2c248f4cae0454' }, h("p", { key: 'bcee7b1836e87540bb9ea7a0dae9b20717acb84b', class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, h("span", { key: '1a2741b228850ea9b438e2d0d3bbe161f1c58223', title: this.getTitleAuthors() }, h("span", { key: '78e8afea170e944a119670a1f3ff35d9b1e68cca', "aria-description": "Autori", class: "bold" }, this.autori))), h("p", { key: '46339663289bca4d4c0d18f5a8a1e5c7f967a2c7', class: "year-isbn" }, h("span", { key: '885b4e716717a5e7faf0b2cdd0eb0a120c6b02a5', class: "isbn" }, h("span", { key: '8eb8fe819c2208bcd85a4ff75bcea45d126bbcfd' }, h("span", { key: 'adce63e9a8982d61692c899da383374914db342d', "aria-description": "ISBN edizione cartacea", class: "bold" }, this.isbn), " ", "(ed. cartacea)")))), h("div", { key: 'b36ed0288ce7e14a3c8770cd097f712440d10c5b', class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { key: 'f7eca7603fd10d49a68f7c41505d50ee185e206f', name: "list" })))), this.customContent && h("slot", { key: '4f80af2d5fe5bba71f5d1704f4816aa395effe88', name: "content" })));
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
