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
        return (h("div", { key: 'ed889966f8549cc26bb5a74907698789dc5589db' }, h("z-myz-card", { key: '2f800d33d6ad0b9c0da423ae300d166c5cff1138' }, h("z-myz-card-header", { key: 'ac3b947d1bc44020038864cee354d25e03e35520', titolo: this.name }), h("div", { key: '510d58895ab181f57bf347181e9800e2905051ac', class: `content ${this.flipped ? "flipped" : ""}` }, h("div", { key: '5edbb595e686ab20daf7627d8853bac7ded0b400', class: "front" }, h("z-myz-card-body", { key: '4429043e3309372204e1327b63af4bb7070e8821' }, h("z-myz-card-cover", { key: '4131ba8eac6d1b4de4ebb2132b90b23c84a4e208', slot: "cover", titolo: this.name, img: this.cover, faded: this.disabled })), h("z-button", { key: '868186b2ce493dcea4927f02678da0014adde59e', class: { "hide-info": this.hideinfobtn }, variant: ButtonVariant.SECONDARY, icon: "informationsource", size: ButtonSize.X_SMALL, onClick: () => this.flipCard(true), disabled: this.flipped }, this.flipbuttonlabel)), h("div", { key: '82831b99ec4d728738523fe6cc4ad63a63d503f1', class: "back" }, h("slot", { key: 'e636f908bec08c14febee93e62a3b053b46e5cfb', name: "info" }))), h("slot", { key: 'c7fc3bc013651830a0777c1c41d7c11ea9d90041' }))));
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
