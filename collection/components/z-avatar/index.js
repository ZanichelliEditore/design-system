import { Host, h } from "@stencil/core";
import { AvatarSize } from "../../beans";
export class ZAvatar {
    constructor() {
        var _a, _b;
        this.size = AvatarSize.MEDIUM;
        this.text = undefined;
        this.textColor = "color-white";
        this.backgroundColor = "gray700";
        this.image = undefined;
        if (((_a = this.text) === null || _a === void 0 ? void 0 : _a.length) === 0 && ((_b = this.image) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            console.warn("z-avatar must contain at least one prop between text and image");
        }
    }
    getTextSize() {
        if (this.size === AvatarSize.SMALL) {
            return "5";
        }
        else if (this.size === AvatarSize.MEDIUM) {
            return "4";
        }
        else if (this.size === AvatarSize.LARGE) {
            return "2";
        }
    }
    render() {
        return (h(Host, { key: '63564a1499f36b406dcece1fd47bb0aa8e06ed6d', class: { [this.size]: true, [`body-${this.getTextSize()}-sb`]: true }, style: {
                color: `var(--${this.textColor})`,
                backgroundColor: `var(--${this.backgroundColor})`,
            } }, this.text && !this.image && h("span", { key: '9813952059608df9a5cdf74db7038aec2751dfa8' }, this.text.substring(0, 2)), this.image && (h("img", { key: 'd918f83b5212cb7618e30a0dc040f0c312341386', src: this.image, onError: () => (this.image = "") }))));
    }
    static get is() { return "z-avatar"; }
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
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AvatarSize",
                    "resolved": "AvatarSize.LARGE | AvatarSize.MEDIUM | AvatarSize.SMALL",
                    "references": {
                        "AvatarSize": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::AvatarSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Avatar size"
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "AvatarSize.MEDIUM"
            },
            "text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Avatar text"
                },
                "attribute": "text",
                "reflect": false
            },
            "textColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Avatar text color"
                },
                "attribute": "text-color",
                "reflect": false,
                "defaultValue": "\"color-white\""
            },
            "backgroundColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Avatar background color"
                },
                "attribute": "background-color",
                "reflect": false,
                "defaultValue": "\"gray700\""
            },
            "image": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "[optional] Avatar image"
                },
                "attribute": "image",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=index.js.map
