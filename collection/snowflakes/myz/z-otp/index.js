import { h } from "@stencil/core";
import { InputStatus } from "../../../beans";
export class ZOtp {
  constructor() {
    /** Input number */
    this.inputNum = 6;
  }
  emitInputChange(value) {
    this.otpChange.emit({ value });
  }
  componentWillLoad() {
    this.otp = [...Array(this.inputNum)];
    this.otpRef = [...Array(this.inputNum)];
  }
  render() {
    return (h("div", { class: "otp-container" }, h("div", { class: "digits-container" }, this.otp.map((_val, i) => (h("input", { class: this.status == InputStatus.ERROR ? "error" : null, onKeyDown: (e) => {
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
      }, type: "text", minlength: "1", maxlength: "1", autoComplete: "off", ref: (el) => (this.otpRef[i] = el) })))), h("z-input-message", { message: this.message, status: this.status })));
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
              "path": "../../../beans"
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