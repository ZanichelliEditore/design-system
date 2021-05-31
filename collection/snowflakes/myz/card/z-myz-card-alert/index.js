import { Component, Prop, h, Event } from "@stencil/core";
export class ZMyzCardAlert {
  emitUndoAction() {
    this.undoAction.emit({ actionType: this.type });
  }
  handleSpaceKeyPress(e) {
    if (e.keyCode == 32 || e.keyCode == 13) {
      e.preventDefault();
      this.emitUndoAction();
    }
  }
  handleActionButtonClick(e) {
    e.preventDefault();
    this.emitUndoAction();
  }
  retrieveClass() {
    let className = "";
    switch (this.type) {
      case "add":
        className = "addAlert";
        break;
      case "remove":
        className = "removeAlert";
        break;
      default:
        className = "";
        break;
    }
    return className;
  }
  render() {
    return (h("div", { class: `relativeContainer ${this.retrieveClass()}` },
      h("z-icon", { name: this.iconname, width: 18, height: 18, class: this.retrieveClass() }),
      h("span", { class: "contentText" }, this.contenttext),
      this.actiontext && !!this.actiontext.trim().length && (h("span", { role: "button", tabindex: "0", class: "contentAction", onClick: (e) => {
          this.handleActionButtonClick(e);
        }, onKeyPress: (e) => {
          this.handleSpaceKeyPress(e);
        } }, this.actiontext))));
  }
  static get is() { return "z-myz-card-alert"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "iconname": {
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
        "text": "icon name"
      },
      "attribute": "iconname",
      "reflect": false
    },
    "contenttext": {
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
        "text": "content text"
      },
      "attribute": "contenttext",
      "reflect": false
    },
    "actiontext": {
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
        "text": "action button text"
      },
      "attribute": "actiontext",
      "reflect": false
    },
    "type": {
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
        "text": "alert variant type"
      },
      "attribute": "type",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "undoAction",
      "name": "undoAction",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "undo action click/keyboard event, returns actionType"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
