import { h } from "@stencil/core";
import { ControlSize, AccordionVariant } from "../../beans";
/**
 * Accordion component.
 *
 * @slot - Slot for the main content.
 * @slot tag - Slot for tags.
 * @cssprop --z-accordion-highlight-color - Color of the highlight band on the `summary`'s left edge. Only applies when `highlight` is true. Default: `transparent`.
 * @cssprop --z-accordion-bg - Background color of the accordion. Default: `var(--color-surface02)`.
 */
export class ZAccordion {
  constructor() {
    /**
     * Size of the component.
     */
    this.size = ControlSize.BIG;
    /**
     * Disabled state of the accordion.
     */
    this.isDisabled = false;
    /**
     * The open state of the accordion.
     */
    this.open = false;
    /**
     * Enable highlight band on the `summary`'s left edge.
     */
    this.highlight = false;
    /**
     * Accordion variant.
     */
    this.variant = AccordionVariant.DEFAULT;
    /**
     * Enable box-shadow on the accordion. Only applies when `variant` is `BACKGROUND`.
     */
    this.shadow = true;
  }
  onDisabledChange() {
    if (this.isDisabled) {
      this.open = false;
    }
  }
  /**
   * Handle `details` element toggle.
   * If currently disabled, prevent toggling by forcing the `open` state to `false`.
   * Unfortunately the "toggle" event is not cancelable and when catched, the `open` state is already changed.
   */
  onDetailsToggle() {
    if (this.isDisabled) {
      this.open = false;
      this.detailsElm.open = false;
      return;
    }
    this.open = this.detailsElm.open;
    this.toggled.emit(this.open);
  }
  render() {
    return (h("details", { ref: (elm) => (this.detailsElm = elm), onToggle: this.onDetailsToggle.bind(this), open: this.open }, h("summary", { tabIndex: this.isDisabled ? -1 : null, part: "summary" }, this.icon && (h("z-icon", { class: "z-accordion-label-icon", name: this.icon })), h("span", { class: "z-accordion-label" }, this.label), h("span", { class: "z-accordion-tags" }, h("slot", { name: "tag" })), h("z-icon", { class: "z-accordion-chevron", name: this.open ? "chevron-up" : "chevron-down" })), !this.isDisabled && (h("div", { class: "z-accordion-content" }, h("slot", null)))));
  }
  static get is() { return "z-accordion"; }
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
      "label": {
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
          "text": "Text label."
        },
        "attribute": "label",
        "reflect": false
      },
      "icon": {
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
          "text": "Name of the z-icon to display before the label's text."
        },
        "attribute": "icon",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ControlSize",
          "resolved": "ControlSize.BIG | ControlSize.SMALL | ControlSize.X_SMALL",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Size of the component."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "ControlSize.BIG"
      },
      "isDisabled": {
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
          "text": "Disabled state of the accordion."
        },
        "attribute": "is-disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "open": {
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
          "text": "The open state of the accordion."
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
      "highlight": {
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
          "text": "Enable highlight band on the `summary`'s left edge."
        },
        "attribute": "highlight",
        "reflect": true,
        "defaultValue": "false"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "AccordionVariant",
          "resolved": "AccordionVariant.BACKGROUND | AccordionVariant.DEFAULT",
          "references": {
            "AccordionVariant": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Accordion variant."
        },
        "attribute": "variant",
        "reflect": true,
        "defaultValue": "AccordionVariant.DEFAULT"
      },
      "shadow": {
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
          "text": "Enable box-shadow on the accordion. Only applies when `variant` is `BACKGROUND`."
        },
        "attribute": "shadow",
        "reflect": true,
        "defaultValue": "true"
      }
    };
  }
  static get events() {
    return [{
        "method": "toggled",
        "name": "toggled",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event fired when the accordion is toggled."
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "isDisabled",
        "methodName": "onDisabledChange"
      }];
  }
}
