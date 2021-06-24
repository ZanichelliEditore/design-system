import { Component, Prop, h, Element, Listen, Event, Watch } from "@stencil/core";
/**
 * @slot - tab label
 */
export class ZNavigationTab {
  constructor() {
    this.selected = false;
    this.disabled = false;
  }
  onFocus() {
    this.hostElement.scrollIntoView({
      behavior: "smooth",
    });
  }
  onClick() {
    if (!this.disabled) {
      this.selected = true;
    }
  }
  onSelected() {
    if (this.selected) {
      this.emitSelected.emit();
    }
  }
  render() {
    return [
      h("button", { disabled: this.disabled, role: "tab" },
        h("slot", { name: "icon" }),
        h("slot", { name: "label" }))
    ];
  }
  static get is() { return "z-navigation-tab"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "selected": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "disabled": {
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
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "emitSelected",
      "name": "selected",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "selected",
      "methodName": "onSelected"
    }]; }
  static get listeners() { return [{
      "name": "focus",
      "method": "onFocus",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "click",
      "method": "onClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
