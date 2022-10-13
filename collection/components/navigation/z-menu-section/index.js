import { h, Host } from '@stencil/core';
/**
 * @slot - Menu section label
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items.
 */
export class ZMenuSection {
  toggle() {
    if (!this.hasContent) {
      return;
    }
    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
  }
  /** Close the list when a click is performed outside of this Element. */
  handleClick(ev) {
    if (!this.open || this.hostElement.contains(ev.target)) {
      return;
    }
    this.open = false;
    this.closed.emit();
  }
  /**
   * Check if some content slot is set.
   */
  checkContent() {
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length;
  }
  componentWillLoad() {
    this.checkContent();
  }
  render() {
    return h(Host, { role: "menu", open: this.open }, h("button", { class: "label", "aria-pressed": this.open ? 'true' : 'false', onClick: this.toggle.bind(this) }, h("slot", null), this.hasContent && h("z-icon", { name: this.open ? 'chevron-up' : 'chevron-down' })), this.open && h("div", { class: "items" }, h("slot", { name: "item", onSlotchange: this.checkContent.bind(this) })));
  }
  static get is() { return "z-menu-section"; }
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
          "text": ""
        },
        "attribute": "active",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "open": {},
      "hasContent": {}
    };
  }
  static get events() {
    return [{
        "method": "opened",
        "name": "opened",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "The section has been opened."
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
          "text": "The section has been closed."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get listeners() {
    return [{
        "name": "click",
        "method": "handleClick",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}
