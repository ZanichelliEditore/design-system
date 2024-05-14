import { h } from "@stencil/core";
import { ButtonSize, ButtonVariant } from "../../../../beans";
/**
 * @slot  - generic card slot
 * @slot info - flipped card info
 */
export class ZMyzCardDictionary {
    constructor() {
        this.name = undefined;
        this.cover = undefined;
        this.disabled = false;
        this.flipped = false;
        this.flipbuttonlabel = "INFO";
        this.hideinfobtn = false;
    }
    handleFlipCard(e) {
        this.flipCard(e.detail);
    }
    flipCard(showBack = true) {
        this.flipped = showBack;
        this.cardFlipped.emit(showBack);
    }
    render() {
        return (h("div", { key: '96caf561d4eba775d1444997a7e7c836c26cc9ec' }, h("z-myz-card", { key: '3a8c8c93437564ac3230d1b0eb488b7dac9ebf2f' }, h("z-myz-card-header", { key: '0d8799942f0d4f9ab2af2c49c00e57b1e1656e12', titolo: this.name }), h("div", { key: '973b554f76522b627b16e5eb9a149fba5f40b2ed', class: `content ${this.flipped ? "flipped" : ""}` }, h("div", { key: '9bbc28302b56a87066f823bd6d955bb0da2727f5', class: "front" }, h("z-myz-card-body", { key: 'fa95d36e00e3fa7b7687700ce81011a7c448e3c9' }, h("z-myz-card-cover", { key: '97e18aa20e8aa457ce59c6099e6750006f1b6558', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), h("z-button", { key: '98b88db1a8cb836761859b28e78a91e77a382ee9', class: { "hide-info": this.hideinfobtn }, variant: ButtonVariant.SECONDARY, icon: "informationsource", size: ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), h("div", { key: '45bb4be033a17b7234bfcec8c0094f83aefc826d', class: "back" }, h("slot", { key: '089d5d4d4b842d205ee4a9f4109551a9968a2606', name: "info" }))), h("slot", { key: 'e458915924a0b35036620574f35c0340eeea851c' }))));
    }
    static get is() { return "z-myz-card-dictionary"; }
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
            "name": {
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
                    "text": "card title"
                },
                "attribute": "name",
                "reflect": false
            },
            "cover": {
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
                    "text": "card cover"
                },
                "attribute": "cover",
                "reflect": false
            },
            "disabled": {
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
                    "text": "card is disabled"
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "flipped": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "card is flipped"
                },
                "attribute": "flipped",
                "reflect": false,
                "defaultValue": "false"
            },
            "flipbuttonlabel": {
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
                    "text": "flip button label"
                },
                "attribute": "flipbuttonlabel",
                "reflect": false,
                "defaultValue": "\"INFO\""
            },
            "hideinfobtn": {
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
                    "text": "hide info button"
                },
                "attribute": "hideinfobtn",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "cardFlipped",
                "name": "cardFlipped",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "when card is flipped"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "flipCard",
                "method": "handleFlipCard",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
