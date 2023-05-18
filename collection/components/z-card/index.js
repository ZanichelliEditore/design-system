import { h, Host } from "@stencil/core";
import { CardVariant } from "../../beans";
/**
 * ZCard component.
 * @cssprop --aspect-ratio - Cover aspect ratio. Default: `1.62`
 * @cssprop --z-card--border-color - Default: `var(--gray200)`
 * @cssprop --z-card--color-cover-background - Cover color. Default: `var(--color-surface01)`
 * @cssprop --z-card--text-background - Background color for the `text` variant. Default: `var(--color-surface01)`
 * @cssprop --z-card--text-border-radius - Default: `none`
 * @cssprop --z-card--text-border - Configure CSS `border`. Default: `none`
 */
export class ZCard {
  constructor() {
    /** Enable click interactions on the card. Default: false */
    this.clickable = false;
    /** Enable shadow. Default: false. */
    this.showshadow = false;
  }
  onClick(ev) {
    // Do nothing for clicks on actions.
    if (ev.target.closest("[slot=action]")) {
      return;
    }
    if (!this.clickable) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    this.cardClicked.emit();
  }
  componentWillLoad() {
    this.hasCoverImage = this.host.querySelector('[slot="cover"]') !== null;
  }
  /**
   * Template for a card without image cover.
   * A colored background replaces the image and some data is moved over it.
   */
  renderColorCoverCard() {
    return [
      h("div", { class: "cover-container" }, h("div", { class: "color-cover" }, h("div", { class: "cover-content" }, h("slot", { name: "metadata" }), h("slot", { name: "title" })))),
      h("div", { class: "content" }, h("slot", { name: "text" }), h("div", { class: "actions" }, h("slot", { name: "action" }))),
    ];
  }
  /**
   * Template for the content div.
   */
  renderContentDiv() {
    return (h("div", { class: "content" }, h("slot", { name: "metadata" }), h("slot", { name: "title" }), h("slot", { name: "text" }), h("div", { class: "actions" }, h("slot", { name: "action" }))));
  }
  render() {
    if (this.variant === CardVariant.TEXT) {
      return h(Host, null, this.renderContentDiv());
    }
    if (this.variant === CardVariant.OVERLAY || this.hasCoverImage) {
      return (h(Host, null, h("div", { class: "cover-container" }, this.hasCoverImage && [
        h("slot", { name: "cover" }),
        this.variant !== CardVariant.OVERLAY && this.coverIcon && h("z-icon", { name: this.coverIcon }),
      ], !this.hasCoverImage && h("div", { class: "color-cover" })), this.renderContentDiv()));
    }
    return h(Host, null, this.renderColorCoverCard());
  }
  static get is() { return "z-card"; }
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
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "CardVariant",
          "resolved": "CardVariant.BORDER | CardVariant.OVERLAY | CardVariant.SHADOW | CardVariant.TEXT",
          "references": {
            "CardVariant": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Card variant.\nCan be one of \"text\", \"border\", \"shadow\", \"overlay\".\nLeave it undefined for the default card."
        },
        "attribute": "variant",
        "reflect": true
      },
      "coverIcon": {
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
          "text": "Name of the icon to place over the image cover"
        },
        "attribute": "cover-icon",
        "reflect": false
      },
      "clickable": {
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
          "text": "Enable click interactions on the card. Default: false"
        },
        "attribute": "clickable",
        "reflect": true,
        "defaultValue": "false"
      },
      "showshadow": {
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
          "text": "Enable shadow. Default: false."
        },
        "attribute": "showshadow",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "hasCoverImage": {}
    };
  }
  static get events() {
    return [{
        "method": "cardClicked",
        "name": "cardClicked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Card click event.\nFired only if `clickable` is true."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get listeners() {
    return [{
        "name": "click",
        "method": "onClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
