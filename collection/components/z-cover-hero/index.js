import { h, Host } from "@stencil/core";
import { CoverHeroVariant, CoverHeroContentPosition } from "../../beans";
/**
 * Cover hero component.
 * Component to display a hero image with content.
 *
 * @slot cover - slot for the cover image.
 * @slot content - slot for the content.
 * @slot info-reveal - slot for the info reveal.
 * @cssprop --cover-hero-height - height of the cover hero. Default: `auto`.
 * @cssprop --cover-hero-min-height - min height of the cover hero content. Default: 240px.
 * @cssprop --cover-hero-overlay - overlay color of the cover hero (CSS background property).
 * @cssprop --cover-hero-text-color - color of the text.
 */
export class ZCoverHero {
  constructor() {
    /**
     * Cover hero variant.
     * Can be one of "OVERLAY", "STACKED".
     */
    this.variant = CoverHeroVariant.OVERLAY;
    /**
     * Cover hero content position (only for STACKED variant).
     */
    this.contentPosition = CoverHeroContentPosition.TOP;
  }
  /**
   * Template for the content.
   */
  renderContent() {
    return (h("div", { class: "content-container" }, h("slot", { name: "content" })));
  }
  render() {
    return (h(Host, null, this.variant === CoverHeroVariant.STACKED &&
      this.contentPosition === CoverHeroContentPosition.TOP &&
      this.renderContent(), h("div", { class: "content-hero" }, h("div", { class: "cover" }, h("slot", { name: "cover" })), h("slot", { name: "info-reveal" }), this.variant === CoverHeroVariant.OVERLAY && this.renderContent()), this.variant === CoverHeroVariant.STACKED &&
      this.contentPosition === CoverHeroContentPosition.BOTTOM &&
      this.renderContent()));
  }
  static get is() { return "z-cover-hero"; }
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
          "original": "CoverHeroVariant",
          "resolved": "CoverHeroVariant.OVERLAY | CoverHeroVariant.STACKED",
          "references": {
            "CoverHeroVariant": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Cover hero variant.\nCan be one of \"OVERLAY\", \"STACKED\"."
        },
        "attribute": "variant",
        "reflect": true,
        "defaultValue": "CoverHeroVariant.OVERLAY"
      },
      "contentPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "CoverHeroContentPosition",
          "resolved": "CoverHeroContentPosition.BOTTOM | CoverHeroContentPosition.TOP",
          "references": {
            "CoverHeroContentPosition": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Cover hero content position (only for STACKED variant)."
        },
        "attribute": "content-position",
        "reflect": true,
        "defaultValue": "CoverHeroContentPosition.TOP"
      }
    };
  }
  static get elementRef() { return "el"; }
}
