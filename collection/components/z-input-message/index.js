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
        return (h(Host, Object.assign({ key: 'ab7d91f7f574f9fb29ab684cae2de0c0dd64f580' }, this.statusRole, { "aria-label": this.message }), this.statusIcons[this.status] && this.message && h("z-icon", { key: '592524f507e1d6cefb43815648880507e10806f2', name: this.statusIcons[this.status] }), h("span", { key: '96ca6506cfaa10d936543d9f370bcb58fa318b59', innerHTML: this.message })));
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
