import { Component, Prop, h, Event } from '@stencil/core';
import { NotificationType } from '../../../beans';
/**
 * @slot - the content of the notification
 */
export class ZNotification {
  constructor() {
    /** enable close icon */
    this.showclose = false;
    /** enable shadow */
    this.showshadow = false;
  }
  handleActionButtonClick(e) {
    e.preventDefault();
    this.notificationAction.emit();
  }
  handleCloseButtonClick(e) {
    e.preventDefault();
    this.notificationClose.emit();
  }
  render() {
    return (h("div", { class: {
        "notification-container": true,
        "success-notification": this.type === NotificationType.success,
        "warning-notification": this.type === NotificationType.warning,
        "error-notification": this.type === NotificationType.error,
        "shadow": this.showshadow
      } },
      this.contenticonname && (h("z-icon", { name: this.contenticonname, width: 16, height: 16 })),
      h("div", { class: "content-container" },
        h("z-body", { class: "content-text", level: 4 },
          h("slot", null)),
        this.actiontext && !!this.actiontext.trim().length && (h("z-body", { class: "action-text", role: "button", tabindex: "0", onClick: (e) => {
            this.handleActionButtonClick(e);
          }, level: 5, variant: "semibold" }, this.actiontext))),
      this.showclose && (h("z-icon", { class: "close-icon", name: "multiply-circle", width: 16, height: 16, onClick: (e) => this.handleCloseButtonClick(e) }))));
  }
  static get is() { return "z-notification"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "contenticonname": {
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
        "text": "icon on the left of the content"
      },
      "attribute": "contenticonname",
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
        "original": "NotificationType",
        "resolved": "NotificationType.error | NotificationType.success | NotificationType.warning",
        "references": {
          "NotificationType": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "alert variant type"
      },
      "attribute": "type",
      "reflect": false
    },
    "showclose": {
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
        "text": "enable close icon"
      },
      "attribute": "showclose",
      "reflect": false,
      "defaultValue": "false"
    },
    "showshadow": {
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
        "text": "enable shadow"
      },
      "attribute": "showshadow",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "notificationAction",
      "name": "notificationAction",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "notification action event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "notificationClose",
      "name": "notificationClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "notification close event"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
