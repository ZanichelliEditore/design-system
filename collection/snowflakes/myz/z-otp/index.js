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
        return (h("div", { key: 'fbf93bab3be1631c25a91ada084e944562c75f47', class: "otp-container" }, h("div", { key: '9c08739270a3875e3550a35c3660be90eb192d7c', class: "digits-container" }, this.otp.map((_val, i) => (h("input", { class: this.status == InputStatus.ERROR ? "error" : null, onKeyDown: (e) => {
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
            }, type: "text", minlength: "1", maxlength: "1", autoComplete: "off", ref: (el) => (this.otpRef[i] = el) })))), h("z-input-message", { key: 'f1800b92331f15ab96cb7bf3c23c6d0164e2bee6', message: this.message, status: this.status })));
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
