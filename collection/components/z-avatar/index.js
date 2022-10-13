import { h, Host } from "@stencil/core";
import { AvatarSize } from "../../beans";
export class ZAvatar {
  constructor() {
    /** [optional] Avatar size */
    this.size = AvatarSize.medium;
    /** [optional] Avatar text color */
    this.textColor = "text-white";
    /** [optional] Avatar background color */
    this.backgroundColor = "bg-grey-700";
    if (!this.text && !this.image) {
      console.warn("z-avatar must contain at least one prop between text and image");
    }
  }
  getTextSize() {
    if (this.size === AvatarSize.small) {
      return "5";
    }
    else if (this.size === AvatarSize.medium) {
      return "4";
    }
    else if (this.size === AvatarSize.large) {
      return "2";
    }
  }
  render() {
    return (h(Host, { class: { [this.size]: true, [`body-${this.getTextSize()}-sb`]: true }, style: {
        color: `var(--${this.textColor})`,
        backgroundColor: `var(--${this.backgroundColor})`,
      } }, this.text && !this.image && h("span", null, this.text.substring(0, 2)), this.image && (h("img", { src: this.image, onError: () => (this.image = "") }))));
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
          "resolved": "AvatarSize.large | AvatarSize.medium | AvatarSize.small",
          "references": {
            "AvatarSize": {
              "location": "import",
              "path": "../../beans"
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
        "defaultValue": "AvatarSize.medium"
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
        "defaultValue": "\"text-white\""
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
        "defaultValue": "\"bg-grey-700\""
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
