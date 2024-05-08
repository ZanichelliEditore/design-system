import { h } from "@stencil/core";
import { PopoverPosition } from "../../../../beans";
import { handleKeyboardSubmit } from "../../../../utils/utils";
/**
 * @slot  - content
 */
export class ZMyzCardInfo {
    emitFlipCard(showBack = false) {
        this.flipCard.emit(showBack);
    }
    constructor() {
        this.data = undefined;
        this.htmltabindex = 0;
        this.hiddenContent = false;
        this.tooltip = false;
        this.emitFlipCard = this.emitFlipCard.bind(this);
    }
    componentWillLoad() {
        this.setStringOrArray();
    }
    componentWillUpdate() {
        this.setStringOrArray();
    }
    componentDidRender() {
        this.handleContentHeight();
    }
    handleContentHeight() {
        if (!this.contentWrapper && !this.infoWrapper) {
            this.hiddenContent = false;
            return;
        }
        if (this.contentWrapper.scrollHeight > this.contentWrapper.offsetHeight ||
            this.infoWrapper.scrollHeight > this.infoWrapper.offsetHeight) {
            const height = this.contentWrapper.offsetHeight -
                this.onlineLicenseWrapper.offsetHeight -
                this.offlineLicenseWrapper.offsetHeight;
            this.infoWrapper.style.height = `${height}px`;
            this.hiddenContent = true;
            return;
        }
        this.hiddenContent = false;
    }
    setStringOrArray() {
        if (typeof this.data === "string") {
            this.cardData = JSON.parse(this.data);
        }
        else {
            this.cardData = this.data;
        }
    }
    renderCloseIcon() {
        return (h("z-icon", { name: "multiply-circled-filled", height: 18, width: 18, onClick: () => this.emitFlipCard(false), tabindex: this.htmltabindex, onKeyUp: (e) => {
                handleKeyboardSubmit(e, this.emitFlipCard, false);
            } }));
    }
    renderGeneralSection() {
        var _a, _b;
        const title = (_a = this === null || this === void 0 ? void 0 : this.cardData) === null || _a === void 0 ? void 0 : _a.title;
        const description = (_b = this === null || this === void 0 ? void 0 : this.cardData) === null || _b === void 0 ? void 0 : _b.description;
        return (h("section", { class: `info-wrapper ${this.hiddenContent ? "hidden" : ""}`, onClick: () => {
                if (this.hiddenContent) {
                    this.tooltip = !this.tooltip;
                }
            }, ref: (el) => (this.infoWrapper = el) }, this.renderAuthor(), this.renderYear(), title, h("br", null), description));
    }
    renderAuthor() {
        var _a;
        const author = (_a = this === null || this === void 0 ? void 0 : this.cardData) === null || _a === void 0 ? void 0 : _a.author;
        if (!author) {
            return null;
        }
        return (h("span", null, "Autore: ", h("b", null, author), h("br", null)));
    }
    renderYear() {
        var _a;
        const year = (_a = this === null || this === void 0 ? void 0 : this.cardData) === null || _a === void 0 ? void 0 : _a.year;
        if (!year) {
            return null;
        }
        return (h("span", null, "Anno: ", h("b", null, year), h("br", null)));
    }
    renderTooltip() {
        if (!this.tooltip) {
            return;
        }
        if (!this.cardData) {
            return;
        }
        const { title, year, author, description } = this.cardData;
        return (h("z-popover", { position: PopoverPosition.RIGHT, onClick: () => (this.tooltip = false) }, `${title} ${year} ${author} ${description}`));
    }
    setExpirationLicenseMessage(type) {
        if ((type === "online" && this.cardData.onlineLicense.expired) ||
            (type === "offline" && this.cardData.offlineLicense.expired)) {
            return h("span", { class: "expired" }, "SCADUTA");
        }
        if ((type === "online" && this.cardData.onlineLicense.expiring) ||
            (type === "offline" && this.cardData.offlineLicense.expiring)) {
            return h("span", { class: "expiring" }, "IN SCADENZA");
        }
    }
    renderOnlineLicenseSection() {
        var _a;
        if (!((_a = this === null || this === void 0 ? void 0 : this.cardData) === null || _a === void 0 ? void 0 : _a.onlineLicense)) {
            return;
        }
        return (h("section", { ref: (el) => (this.onlineLicenseWrapper = el) }, h("span", { class: "license-heading" }, h("span", null, "Licenza online"), this.setExpirationLicenseMessage("online")), "Scadenza il ", h("b", null, this.cardData.onlineLicense.expiration), h("br", null)));
    }
    renderOfflineLicenseSection() {
        var _a;
        if (!((_a = this === null || this === void 0 ? void 0 : this.cardData) === null || _a === void 0 ? void 0 : _a.offlineLicense)) {
            return;
        }
        return (h("section", { ref: (el) => (this.offlineLicenseWrapper = el) }, h("span", { class: "license-heading" }, h("span", null, "Licenza offline"), this.setExpirationLicenseMessage("offline")), "Scadenza il ", h("b", null, this.cardData.offlineLicense.expiration), h("br", null), "Installazioni disponibili: ", h("b", null, this.cardData.offlineLicense.installations)));
    }
    render() {
        return (h("div", { key: 'c1d199e2420f86a8a60dce3eab6e0a877e20b109' }, this.renderCloseIcon(), h("div", { key: '1218661257dde4a97a835c2016211b062afca5b4', class: "content-wrapper", ref: (el) => (this.contentWrapper = el) }, this.renderGeneralSection(), this.renderTooltip(), this.renderOnlineLicenseSection(), this.renderOfflineLicenseSection()), h("div", { key: '5868f7ca0fbbbbfe9fec097e4c1c857822b49278', class: "cta-wrapper" }, h("slot", { key: '3096506a2afaebc24377314454db3b25f3ae746d' }))));
    }
    static get is() { return "z-myz-card-info"; }
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
            "data": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | DictionaryData",
                    "resolved": "string | { author: string; year: string; title: string; description: string; onlineLicense: DictionaryLicenseData; offlineLicense: DictionaryLicenseData; }",
                    "references": {
                        "DictionaryData": {
                            "location": "import",
                            "path": "../../../../beans",
                            "id": "src/beans/index.tsx::DictionaryData"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "dictionary info"
                },
                "attribute": "data",
                "reflect": false
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
            }
        };
    }
    static get states() {
        return {
            "hiddenContent": {},
            "tooltip": {}
        };
    }
    static get events() {
        return [{
                "method": "flipCard",
                "name": "flipCard",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "flip card to front"
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
