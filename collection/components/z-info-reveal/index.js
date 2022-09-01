import { Component, h, Prop, State, Watch, Element, Host, } from '@stencil/core';
import { InfoRevealPosition } from "../../beans";
/**
 * Info reveal component.
 *
 * @slot - info to display in the info box. If more than one element has been slotted,
 * by clicking on the panel it switches to the next info element.
 * @cssprop --z-info-reveal-theme--surface - background color of the info reveal panel.
 * @cssprop --z-info-reveal-theme--text - foreground color of the info reveal panel.
 * @cssprop --z-info-reveal-shadow - shadow of the info reveal panel.
 * @cssprop --z-info-reveal-max-width - max width of the info reveal panel.
 */
export class ZInfoReveal {
  constructor() {
    /** Name of the icon for the open button */
    this.icon = 'informationsource';
    this.position = InfoRevealPosition.bottom_right;
    /** Whether the info panel is open. */
    this.open = false;
    /** Current index for the info queue. */
    this.currentIndex = null;
  }
  watchItems() {
    Array.from(this.el.children).forEach((child, index) => {
      if (this.currentIndex === index) {
        child.setAttribute('data-current', '');
      }
      else {
        child.removeAttribute('data-current');
      }
    });
  }
  /**
   * Open the info box.
   */
  openInfoBox() {
    this.currentIndex = 0;
    this.open = true;
  }
  /**
   * Close the info box.
   */
  closeInfoBox() {
    this.open = false;
  }
  /**
   * Navigate slotted info.
   * It closes the info box after the last info has been navigated.
   */
  next() {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex === this.el.children.length) {
      this.closeInfoBox();
    }
  }
  render() {
    return h(Host, { open: this.open },
      h("button", { class: "z-info-reveal-trigger", onClick: this.openInfoBox.bind(this) },
        this.label && h("span", { class: "z-info-reveal-label" }, this.label),
        h("z-icon", { name: this.icon })),
      this.open && h("div", { class: "info-box", onClick: this.next.bind(this), tabIndex: 0 },
        h("slot", null),
        h("button", { class: "z-info-reveal-close", onClick: this.closeInfoBox.bind(this) },
          h("z-icon", { name: "close" }))));
  }
  static get is() { return "z-info-reveal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "icon": {
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
        "text": "Name of the icon for the open button"
      },
      "attribute": "icon",
      "reflect": false,
      "defaultValue": "'informationsource'"
    },
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "InfoRevealPositionBean",
        "resolved": "\"bottom_left\" | \"bottom_right\" | \"top_left\" | \"top_right\"",
        "references": {
          "InfoRevealPositionBean": {
            "location": "import",
            "path": "../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "position",
      "reflect": true,
      "defaultValue": "InfoRevealPosition.bottom_right"
    },
    "label": {
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
        "text": "Text that appears on closed panel next to the open button."
      },
      "attribute": "label",
      "reflect": false
    }
  }; }
  static get states() { return {
    "open": {},
    "currentIndex": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "currentIndex",
      "methodName": "watchItems"
    }]; }
}
