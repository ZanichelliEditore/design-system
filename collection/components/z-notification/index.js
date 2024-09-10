import { Host, h } from "@stencil/core";
/**
 * Notification bar component.
 * @slot - The text of the notification.
 * @cssprop --z-notification--top-offset - The top offset of the notification. Use it when `sticky` prop is set to `true` and you need the notification to stay under other sticky elements. Default: 0px.
 */
export class ZNotification {
    handleActionButtonClick(e) {
        e.preventDefault();
        this.notificationAction.emit();
    }
    handleCloseButtonClick(e) {
        e.preventDefault();
        this.notificationClose.emit();
    }
    constructor() {
        this.contenticonname = undefined;
        this.actiontext = undefined;
        this.type = undefined;
        this.showclose = false;
        this.showshadow = false;
        this.sticky = false;
        this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
        this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
    }
    render() {
        var _a;
        return (h(Host, { key: 'bf9ead754226002371eb0669770d24c0230bcf92' }, this.contenticonname && (h("z-icon", { key: '322709ad12acd8a885214809012178649b172bd8', class: "status-icon", name: this.contenticonname, width: 16, height: 16 })), h("div", { key: 'd68ea8f5984fee4d906a05f93f9cf3ef4dae932c', class: "content-container" }, h("div", { key: 'd67f12dcbcf7075cbc0e111db260dce207e3411a', class: "content-text" }, h("slot", { key: '6e23a5b287e328657e1848dc1944b3a1ddc065be' })), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) && (h("button", { key: '68da7a70a5dec9113c021c915594c2e8424c21be', class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext))), this.showclose && (h("button", { key: '342853024b8a9bfce814282471d8d8e9e9f6b522', class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, h("z-icon", { key: 'ce20a4b279bc3cb3d4b0dd7bf4c61fe9b3837556', name: "multiply-circle", width: 16, height: 16 })))));
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
                    "resolved": "NotificationType.ERROR | NotificationType.SUCCESS | NotificationType.WARNING",
                    "references": {
                        "NotificationType": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::NotificationType"
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
//# sourceMappingURL=index.js.map
