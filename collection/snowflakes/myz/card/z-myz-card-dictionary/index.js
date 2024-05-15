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
        return (h("div", { key: '4b234e3d238d980133221d80d810b6f1935cc9ca' }, h("z-myz-card", { key: '5ba2e25a636705c51c17ce2e94c3f2b6262a92dc' }, h("z-myz-card-header", { key: '15ce47c8781ec09fa04e44338341a80bd81c37b2', titolo: this.name }), h("div", { key: 'df8be094c86954d6bcdacefd8f341fb64ede8099', class: `content ${this.flipped ? "flipped" : ""}` }, h("div", { key: '3a766d374ca3eac6a7e08333a0f04f2dfbcefdc4', class: "front" }, h("z-myz-card-body", { key: '88b2d585245efa008fdac1525312ab73ffe34810' }, h("z-myz-card-cover", { key: '28e735bb7171c1e014326c2cbe68ccdee4995b90', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), h("z-button", { key: 'b29b64255d6053e5135ae3f847a1ce11ddfec283', class: { "hide-info": this.hideinfobtn }, variant: ButtonVariant.SECONDARY, icon: "informationsource", size: ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), h("div", { key: '5dfe85db1b4f6b75e5fcbdef8a93b825eac4fad9', class: "back" }, h("slot", { key: '9bcecaf42947c2e138331a8448e891590943bc65', name: "info" }))), h("slot", { key: '4008625139f25d17a03fbd5157b2eda59e5b8227' }))));
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
