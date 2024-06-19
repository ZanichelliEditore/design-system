import { Host, h } from "@stencil/core";
export class ZInputMessage {
    constructor() {
        this.statusIcons = {
            success: "checkmark-circle",
            error: "multiply-circled",
            warning: "exclamation-circle",
        };
        this.message = undefined;
        this.status = undefined;
        this.statusRole = {};
    }
    onMessageChange() {
        this.statusRole = this.message && this.status ? { role: "alert" } : {};
    }
    componentWillLoad() {
        this.onMessageChange();
    }
    render() {
        return (h(Host, Object.assign({ key: '94ef5066088cb9eed13a07ea360427f99504352c' }, this.statusRole, { "aria-label": this.message }), this.statusIcons[this.status] && this.message && h("z-icon", { key: '657b2370b4f114a60d57d0aeb0c42076a0a6d05c', name: this.statusIcons[this.status] }), h("span", { key: 'e999e55f209f358943ff20d86967f9e7bd9d876b', innerHTML: this.message })));
    }
    static get is() { return "z-input-message"; }
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
            "message": {
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
                    "text": "input helper message"
                },
                "attribute": "message",
                "reflect": false
            },
            "status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputStatus",
                    "resolved": "InputStatus.ERROR | InputStatus.SUCCESS | InputStatus.WARNING",
                    "references": {
                        "InputStatus": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::InputStatus"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "input status (optional)"
                },
                "attribute": "status",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "statusRole": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "message",
                "methodName": "onMessageChange"
            }, {
                "propName": "status",
                "methodName": "onMessageChange"
            }];
    }
}
//# sourceMappingURL=index.js.map
