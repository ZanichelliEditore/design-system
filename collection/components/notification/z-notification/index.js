import { h } from '@stencil/core';
/**
 * Notification bar component.
 * @slot - The text of the notification.
 * @cssprop --z-notification--top-offset - The top offset of the notification. Use it when `sticky` prop is set to `true` and you need the notification to stay under other sticky elements. Default: 0px.
 */
export class ZNotification {
  constructor() {
    /** Enable close icon */
    this.showclose = false;
    /**
     * Enable shadow.
     * @deprecated shadow is available only for the `sticky` version of the notification.
     */
    this.showshadow = false;
    /** Enable sticky notification bar. */
    this.sticky = false;
    this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
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
    var _a;
    return [
      this.contenticonname && h("z-icon", { class: "status-icon", name: this.contenticonname, width: 16, height: 16 }),
      h("div", { class: "content-container" }, h("div", { class: "content-text" }, h("slot", null)), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) &&
        h("button", { class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext)),
      this.showclose && h("button", { class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, h("z-icon", { name: "multiply-circle", width: 16, height: 16 }))
    ];
  }
  static get is() { return "z-notification"; }
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
          "text": "Name of the icon on the left of the content"
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
          "text": "Action button text"
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
          "text": "Alert variant type"
        },
        "attribute": "type",
        "reflect": true
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
          "text": "Enable close icon"
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
          "tags": [{
              "name": "deprecated",
              "text": "shadow is available only for the `sticky` version of the notification."
            }],
          "text": "Enable shadow."
        },
        "attribute": "showshadow",
        "reflect": true,
        "defaultValue": "false"
      },
      "sticky": {
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
          "text": "Enable sticky notification bar."
        },
        "attribute": "sticky",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "notificationAction",
        "name": "notificationAction",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Call to action clicked"
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
          "text": "Close button clicked"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
