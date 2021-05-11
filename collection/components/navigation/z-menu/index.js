import { Component, h, Prop, State, Event, Listen, Element, Host } from '@stencil/core';
/**
 * @slot - Menu label
 * @slot header - Header to display as the first entry of the open menu.
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items onto the menu. Use `z-menu-section` for submenus.
 */
export class ZMenu {
  constructor() {
    /**
     * Flag to set the display mode of the list.
     * If true, the list will be absolutely positioned under the menu label,
     * stacked beneath it otherwise.
     * @default false
     */
    this.floating = false;
  }
  toggle() {
    if (!this.hasContent) {
      return;
    }
    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
  }
  /** Close the floating list when a click is performed outside of this Element. */
  handleClick(ev) {
    if (!this.floating ||
      !this.open ||
      this.hostElement.contains(ev.target)) {
      return;
    }
    this.open = false;
    this.closed.emit();
  }
  /**
   * Check if some content slot is set.
   */
  checkContent() {
    this.hasHeader = !!this.hostElement.querySelectorAll('[slot="header"]').length;
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length || this.hasHeader;
  }
  componentWillLoad() {
    this.checkContent();
  }
  render() {
    return h(Host, { role: "menu", open: this.open },
      h("button", { class: "label", "aria-pressed": this.open ? 'true' : 'false', onClick: this.toggle.bind(this) },
        h("div", { class: "label-content" },
          h("slot", null),
          this.hasContent && h("z-icon", { name: this.open ? 'chevron-up' : 'chevron-down' }))),
      this.open && h("div", { class: "content" },
        this.hasHeader && h("header", { class: "header" },
          h("slot", { name: "header", onSlotchange: this.checkContent.bind(this) })),
        h("div", { class: "items" },
          h("slot", { name: "item", onSlotchange: this.checkContent.bind(this) }))));
  }
  static get is() { return "z-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "active": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Flag to set the active status of the menu."
      },
      "attribute": "active",
      "reflect": true
    },
    "floating": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "text": "false",
            "name": "default"
          }],
        "text": "Flag to set the display mode of the list.\nIf true, the list will be absolutely positioned under the menu label,\nstacked beneath it otherwise."
      },
      "attribute": "floating",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "open": {},
    "hasHeader": {},
    "hasContent": {}
  }; }
  static get events() { return [{
      "method": "opened",
      "name": "opened",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "The menu has been opened."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "closed",
      "name": "closed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "The menu has been closed."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
