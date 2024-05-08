import { h } from "@stencil/core";
import { InputStatus } from "../../../beans";
export class ZOtp {
    constructor() {
        this.inputNum = 6;
        this.status = undefined;
        this.message = undefined;
    }
    emitInputChange(value) {
        this.otpChange.emit({ value });
    }
    componentWillLoad() {
        this.otp = [...Array(this.inputNum)];
        this.otpRef = [...Array(this.inputNum)];
    }
    render() {
        return (h("div", { key: '3ade863dca22eba0ad15da52ead3264745aeca8c', class: "otp-container" }, h("div", { key: 'd95c622db298145d11b422312f12194b9014163b', class: "digits-container" }, this.otp.map((_val, i) => (h("input", { class: this.status == InputStatus.ERROR ? "error" : null, onKeyDown: (e) => {
                if (e.keyCode > 47) {
                    this.otpRef[i].value = "";
                }
            }, onKeyUp: (e) => {
                if (e.keyCode > 47) {
                    i < this.inputNum - 1 && this.otpRef[i + 1].focus();
                }
            }, onInput: (e) => {
                this.otp[i] = e.target.value;
                this.emitInputChange(this.otp.join(""));
            }, type: "text", minlength: "1", maxlength: "1", autoComplete: "off", ref: (el) => (this.otpRef[i] = el) })))), h("z-input-message", { key: 'be1d42180f1079a7a3dc199c2e4a9467e6216a47', message: this.message, status: this.status })));
    }
    static get is() { return "z-otp"; }
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
            "inputNum": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Input number"
                },
                "attribute": "input-num",
                "reflect": false,
                "defaultValue": "6"
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
                            "path": "../../../beans",
                            "id": "src/beans/index.tsx::InputStatus"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Input status"
                },
                "attribute": "status",
                "reflect": false
            },
            "message": {
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
                    "text": "Input message"
                },
                "attribute": "message",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "otpChange",
                "name": "otpChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Otp change event"
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
