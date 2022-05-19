import { Component, h, Prop, State, Event, Listen, Element, Watch } from '@stencil/core';
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
    /**
     * The opening state of the menu.
     * @default false
     */
    this.open = false;
    this.toggle = this.toggle.bind(this);
    this.checkContent = this.checkContent.bind(this);
    this.onItemsChange = this.onItemsChange.bind(this);
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
    this.reflow();
    this.open = false;
    this.closed.emit();
  }
  onOpenChanged() {
    if (this.open) {
      this.reflow(true);
    }
    else {
      cancelAnimationFrame(this.raf);
    }
  }
  componentWillLoad() {
    this.checkContent();
  }
  /**
   * Correctly set position of the floating menu in order to prevent overflow.
   * @param live Should run the method on every refresh frame.
   */
  reflow(live = false) {
    if (this.content) {
      const { style } = this.content;
      const { left } = this.hostElement.getBoundingClientRect();
      const widthPx = getComputedStyle(this.content).width;
      const width = widthPx ? parseFloat(widthPx.replace('px', '')) : 375;
      const safeScrollbarSpace = 30;
      style.left = `${Math.min(window.innerWidth - left - width - safeScrollbarSpace, 0)}px`;
    }
    if (live) {
      this.raf = requestAnimationFrame(this.reflow.bind(this, live));
    }
  }
  /**
   * Check if some content slot is set.
   */
  checkContent() {
    this.hasHeader = !!this.hostElement.querySelectorAll('[slot="header"]').length;
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length || this.hasHeader;
  }
  /**
   * Set `menuitem` role to all menu items.
   */
  onItemsChange() {
    this.checkContent();
    const items = this.hostElement.querySelectorAll('[slot="item"]');
    items === null || items === void 0 ? void 0 : items.forEach((item) => item.setAttribute('role', 'menuitem'));
  }
  renderMenuLabel() {
    if (this.hasContent) {
      return h("button", { class: "menu-label", "aria-expanded": this.open ? 'true' : 'false', "aria-label": this.open ? 'Chiudi menù' : 'Apri menù', onClick: this.toggle },
        h("div", { class: "menu-label-content" },
          h("slot", null),
          h("z-icon", { name: this.open ? 'chevron-up' : 'chevron-down' })));
    }
    return h("div", { class: "menu-label" },
      h("div", { class: "menu-label-content" },
        h("slot", null)));
  }
  render() {
    return [
      this.renderMenuLabel(),
      h("div", { class: "content", ref: (el) => { this.content = el; }, hidden: !this.open },
        this.hasHeader && h("header", { class: "header" },
          h("slot", { name: "header", onSlotchange: this.checkContent })),
        h("div", { class: "items", role: "menu" },
          h("slot", { name: "item", onSlotchange: this.onItemsChange })))
    ];
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
            "name": "default",
            "text": "false"
          }],
        "text": "Flag to set the display mode of the list.\nIf true, the list will be absolutely positioned under the menu label,\nstacked beneath it otherwise."
      },
      "attribute": "floating",
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
        "tags": [{
            "name": "default",
            "text": "false"
          }],
        "text": "The opening state of the menu."
      },
      "attribute": "open",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
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
  static get watchers() { return [{
      "propName": "open",
      "methodName": "onOpenChanged"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
