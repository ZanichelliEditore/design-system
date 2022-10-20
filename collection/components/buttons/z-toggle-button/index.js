import { h } from "@stencil/core";
export class ZToggleButton {
  constructor() {
    /** disabled status flag (optional) */
    this.isdisabled = false;
    /** open by default (optional) */
    this.opened = false;
  }
  emitToggleClick() {
    if (this.isdisabled) {
      return;
    }
    this.opened = !this.opened;
    this.toggleClick.emit(this.opened);
  }
  render() {
    return (h("button", { tabindex: this.avoidclick ? "-1" : "0", class: {
        "isopen": this.opened,
        "avoid-clicks": this.avoidclick,
      }, disabled: this.isdisabled, onClick: () => this.emitToggleClick() }, h("z-icon", { name: this.opened ? "chevron-down" : "chevron-up", width: 16, height: 16 }), this.label));
  }
  static get is() { return "z-toggle-button"; }
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
          "text": "label text"
        },
        "attribute": "label",
        "reflect": false
      },
      "isdisabled": {
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
          "text": "disabled status flag (optional)"
        },
        "attribute": "isdisabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "avoidclick": {
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
          "text": "avoidclick status flag"
        },
        "attribute": "avoidclick",
        "reflect": false
      },
      "opened": {
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
          "text": "open by default (optional)"
        },
        "attribute": "opened",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "toggleClick",
        "name": "toggleClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "emitted on toggle button click, returns isOpen"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
