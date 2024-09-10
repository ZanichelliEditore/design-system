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
        return (h(Host, { key: '4be97c710d33cc6dd35c1f0a7141b7f13c6e161f', class: { [this.size]: true, [`body-${this.getTextSize()}-sb`]: true }, style: {
                color: `var(--${this.textColor})`,
                backgroundColor: `var(--${this.backgroundColor})`,
            } }, this.text && !this.image && h("span", { key: 'af2d27fb007244f5830151e24e68cc757761d84e' }, this.text.substring(0, 2)), this.image && (h("img", { key: 'c507bc501c79eeb009e979242b5224a1fab85470', src: this.image, onError: () => (this.image = "") }))));
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
