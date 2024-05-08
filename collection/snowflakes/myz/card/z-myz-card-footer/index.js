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
        return (h("div", { key: '6ed5373d90bd7f80f1412066b09b7291e6d283b7', class: Object.assign(Object.assign({}, this.retrieveClass()), { wrapper: true }) }, h("footer", { key: '447aa1915840f306ab875aa0a8843b959772dfd6', class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { key: '8c31afb6a3241cacbdec78490a95bc31e0e03e74', class: "toggle" }, h("slot", { key: '64015f7e978dec828cc2402b808d0b373b5a0409', name: "toggle" })), this.titolo && h("p", { class: { "custom-content": this.customContent } }, this.titolo), h("div", { key: 'e690589525fba6098379f05c7fb60151cb1089fd', class: { "content": true, "custom-content": this.customContent } }, h("div", { key: '99e39a4546bfc31bac37b1cac1f43a1303d61e08' }, h("p", { key: '457c28e40fd112283c9d2f4a21d770352fd256e5', class: "authors", ref: (el) => (this.ellipsisAuthors = el) }, h("span", { key: 'a8a8c1b5e5333ec3558fa4c3cba38921dd4ea33c', title: this.getTitleAuthors() }, h("span", { key: 'ca6ebb69ebaa9af15e213edca5e5b3a847a88902', "aria-description": "Autori", class: "bold" }, this.autori))), h("p", { key: 'e5e6d7ea2a83fbf92725e835482dc09c09977fad', class: "year-isbn" }, h("span", { key: '4d8e0f8e9e6fde5c82ede3051f558c53db7bc5c2', class: "isbn" }, h("span", { key: 'b44adc460b940b90d08f53a2d9b6c053fd9c1360' }, h("span", { key: '2ca37f42a5b91c792c312eda3651b03e1603d408', "aria-description": "ISBN edizione cartacea", class: "bold" }, this.isbn), " ", "(ed. cartacea)")))), h("div", { key: '96006f998673ed1b7eaf230aaa6dd55ff6119efd', class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { key: '0ee8accf4ee783005fa2e4c148b4e6c39da79bfc', name: "list" })))), this.customContent && h("slot", { name: "content" })));
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
