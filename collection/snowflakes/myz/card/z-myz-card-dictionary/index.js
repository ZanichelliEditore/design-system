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
        return (h("div", { key: '07f2907ee9ae953ad0365dd0c8e2618524f89653' }, h("z-myz-card", { key: 'c21605f97d0cd1c9298643c2ad59ed4414a8ad16' }, h("z-myz-card-header", { key: '8798167fee3c810b002525720556c26bee3254de', titolo: this.name }), h("div", { key: '3d932ff6a732c3cbcf77fcd448e90e8265b02225', class: `content ${this.flipped ? "flipped" : ""}` }, h("div", { key: '83585f7409cb3daee9d7985d7e9c519b6c41e133', class: "front" }, h("z-myz-card-body", { key: '486d61f67e0affb3e4e7efdf0ab3feb2b26b4b0f' }, h("z-myz-card-cover", { key: '61c665f57fb7e969d8191b77d62c794474b08e62', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), h("z-button", { key: '7cf6f97b79d569143724561d59e8c77fba8e054e', class: { "hide-info": this.hideinfobtn }, variant: ButtonVariant.SECONDARY, icon: "informationsource", size: ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), h("div", { key: '562430df60bfa01db09cbad1d263586c6224af9c', class: "back" }, h("slot", { key: '537e1be569a72865724cfa85b7734dc0294bc115', name: "info" }))), h("slot", { key: '8b38959c1ddbeacd0bbca92fd14611355a24d74d' }))));
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
