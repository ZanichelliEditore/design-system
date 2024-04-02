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
        return (h("div", { key: '75b18feaa0c930cafb3eeadfbd3a815acf629ad3' }, h("z-myz-card", { key: '069f6f457a1245042e32e1d79101f76d40a065bc' }, h("z-myz-card-header", { key: '7143e0aa8db6f3130778bb34c84f84074950a8ec', titolo: this.name }), h("div", { key: '9562c13fbd46a054f9a8a2a307803a62a3973462', class: `content ${this.flipped ? "flipped" : ""}` }, h("div", { key: '2887ee676e44064eaaa5ec96981b1d6f2ec75553', class: "front" }, h("z-myz-card-body", { key: '46a2ae89fb4aa4ff0283f6bd8315da9572bf9e12' }, h("z-myz-card-cover", { key: '15ae6368e0adee0b691acae69456ca57151f22e5', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), h("z-button", { key: 'c8c0a403c084f72c934fb4c9c4a171bec8cf7cdd', class: { "hide-info": this.hideinfobtn }, variant: ButtonVariant.SECONDARY, icon: "informationsource", size: ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), h("div", { key: '5923095048d52d5c2ac78b4074e4e876468e06b0', class: "back" }, h("slot", { key: '4e934ba81c365e10e411fd758edfad1593642bb0', name: "info" }))), h("slot", { key: '211875e202f745c2e4d44c90858c3edc878e762b' }))));
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
