import { h, Host } from "@stencil/core";
import { DividerSize, ZSectionTitleDividerPosition } from "../../beans";
/**
 * Section title component.
 * An optional secondary title can be put over the primary one.
 *
 * @slot secondary-title - Slot for the secondary title. When present, the divider is always displayed under it,
 * following its width and removing the one for the primary title.
 * @slot primary-title - Slot for the primary title.
 * @cssprop --z-section-title--divider-color - Color of the divider. Use a CSS prop string like `"--red500"`. Default is `"--red500"`.
 */
export class ZSectionTitle {
  constructor() {
    /**
     * Divider position for the primary title.
     * This prop only works if the secondary title is not set.
     */
    this.dividerPosition = ZSectionTitleDividerPosition.BEFORE;
    /**
     * Whether the primary title text is uppercase.
     */
    this.uppercase = true;
  }
  componentWillRender() {
    this.hasSecondaryTitle = !!this.host.querySelector("[slot=secondary-title]");
  }
  render() {
    return (h(Host, null, h("slot", { name: "secondary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.BEFORE && (h("z-divider", { size: DividerSize.LARGE, color: "z-section-title--divider-color" })), h("slot", { name: "primary-title" }), !this.hasSecondaryTitle && this.dividerPosition === ZSectionTitleDividerPosition.AFTER && (h("z-divider", { size: DividerSize.LARGE, color: "z-section-title--divider-color" }))));
  }
  static get is() { return "z-section-title"; }
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
      "dividerPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ZSectionTitleDividerPosition",
          "resolved": "ZSectionTitleDividerPosition.AFTER | ZSectionTitleDividerPosition.BEFORE",
          "references": {
            "ZSectionTitleDividerPosition": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Divider position for the primary title.\nThis prop only works if the secondary title is not set."
        },
        "attribute": "divider-position",
        "reflect": false,
        "defaultValue": "ZSectionTitleDividerPosition.BEFORE"
      },
      "uppercase": {
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
          "text": "Whether the primary title text is uppercase."
        },
        "attribute": "uppercase",
        "reflect": true,
        "defaultValue": "true"
      }
    };
  }
  static get elementRef() { return "host"; }
}
