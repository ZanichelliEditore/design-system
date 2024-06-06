import { h } from "@stencil/core";
import { AlertType } from "../../../../beans";
export class ZMyzCardAlert {
    constructor() {
        this.iconname = undefined;
        this.contenttext = undefined;
        this.actiontext = undefined;
        this.type = undefined;
    }
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
                className = "add-alert";
                break;
            case "remove":
                className = "remove-alert";
                break;
            default:
                className = "";
                break;
        }
        return className;
    }
    getAlertType() {
        switch (this.type) {
            case "add":
                return AlertType.SUCCESS;
            case "remove":
                return AlertType.WARNING;
            default:
                return null;
        }
    }
    render() {
        return (h("div", { key: '48889e49481948b707a3fcd518ad1b3acfcc5bde', class: "alert-external-wrapper " + this.retrieveClass() }, h("z-alert", { key: '75322f499813ab46e7b0fa5f4704cd3c5659de32', type: this.getAlertType() }, h("div", { key: 'fdbcefea81b53032d7cf9209b75500d09a2b8563', class: "relative-container" }, h("z-icon", { key: '7cd6edc15a24476241764a69781a880130bd39f0', name: this.iconname, width: 18, height: 18, class: this.retrieveClass() }), h("span", { key: '3a627e1e4940bd011b59122be93c1b60692b16bf', class: "content-text" }, this.contenttext), this.actiontext && !!this.actiontext.trim().length && (h("span", { role: "button", tabindex: "0", class: "content-action", onClick: (e) => {
                this.handleActionButtonClick(e);
            }, onKeyPress: (e) => {
                this.handleSpaceKeyPress(e);
            } }, this.actiontext))))));
    }
    static get is() { return "z-myz-card-alert"; }
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
        };
    }
    static get events() {
        return [{
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
            }];
    }
}
//# sourceMappingURL=index.js.map
