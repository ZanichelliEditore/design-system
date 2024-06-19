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
        return (h(Host, { key: '49e877c8628f367adc596b40d5f12d5e66f78ed0' }, this.contenticonname && (h("z-icon", { key: '56257c6011f6b5b17c8bbd6250ec99b8d1e41ee2', class: "status-icon", name: this.contenticonname, width: 16, height: 16 })), h("div", { key: 'dc56b45ea4f7d52bb193f8d3c22bb5910be9eeea', class: "content-container" }, h("div", { key: '2637553cf2f72a948014110e96559d15c45513fa', class: "content-text" }, h("slot", { key: '1e60cbb429a9620b88d7cb90df90874d3e454f48' })), !!((_a = this.actiontext) === null || _a === void 0 ? void 0 : _a.trim()) && (h("button", { key: '844e0ba5cef8b13f9d91d5c09472893de5127cc4', class: "action-button", type: "button", onClick: this.handleActionButtonClick }, this.actiontext))), this.showclose && (h("button", { key: '8761fc65bd1b44b38a219e80d8f12b10a898cefe', class: "close-button", type: "button", onClick: this.handleCloseButtonClick }, h("z-icon", { key: '7bd949a2c0abf7431765f28542443c9110097ab3', name: "multiply-circle", width: 16, height: 16 })))));
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
