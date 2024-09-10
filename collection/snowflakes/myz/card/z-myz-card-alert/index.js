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
        return (h("div", { key: 'e488b304fcdd145b3ce0ba375d36a997a646eec9', class: "alert-external-wrapper " + this.retrieveClass() }, h("z-alert", { key: '256f5d68375a9c8c187785cfdbd6272b8cc449f9', type: this.getAlertType() }, h("div", { key: '9f3d7e43b28f3fc92bf1e627475af9a9f0464799', class: "relative-container" }, h("z-icon", { key: '6c9e26abc686e0d6020d7c6398a8575e6e8ac543', name: this.iconname, width: 18, height: 18, class: this.retrieveClass() }), h("span", { key: 'b4b997286c4e5250c5b856f0d375ad49162c92df', class: "content-text" }, this.contenttext), this.actiontext && !!this.actiontext.trim().length && (h("span", { key: '18020fe9e8180577a168a25c0ba17464cedf70c0', role: "button", tabindex: "0", class: "content-action", onClick: (e) => {
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
