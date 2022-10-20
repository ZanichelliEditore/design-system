import { h } from "@stencil/core";
import { InputType } from "../../beans";
import { randomId } from "../../utils/utils";
export class ZInputDeprecated {
  constructor() {
    /** the id of the input element */
    this.htmlid = `id-${randomId()}`;
    /** the input is disabled */
    this.disabled = false;
    /** the input is readonly */
    this.readonly = false;
    /** the input is required (optional): available for text, password, number, email, textarea, checkbox */
    this.required = false;
    /** checked: available for checkbox, radio */
    this.checked = false;
    /** show input helper message (optional): available for text, password, number, email, textarea, select */
    this.hasmessage = true;
    /** the input label position: available for checkbox, radio */
    this.labelafter = true;
    /** timeout setting before trigger `inputChange` event (optional): available for text, textarea */
    this.typingtimeout = 300;
    /** multiple options can be selected (optional): available for select */
    this.multiple = false;
    /** render clear icon when typing (optional): available for text */
    this.hasclearicon = true;
    this.isTyping = false;
    this.textareaWrapperHover = "";
    this.textareaWrapperFocus = "";
    this.passwordHidden = true;
  }
  inputCheckListener(e) {
    const data = e.detail;
    switch (this.type) {
      case InputType.RADIO:
        if (data.type === InputType.RADIO && data.name === this.name && data.id !== this.htmlid) {
          this.checked = false;
        }
        break;
    }
  }
  /** get the input value */
  async getValue() {
    switch (this.type) {
      // @ts-ignore
      case "select":
        return this.selectElem.getValue();
      default:
        return this.value;
    }
  }
  /** set the input value */
  async setValue(value) {
    switch (this.type) {
      // @ts-ignore
      case "select":
        this.selectElem.setValue(value);
        break;
      default:
        if (typeof value === "string") {
          this.value = value;
        }
        break;
    }
  }
  /** get checked status */
  async isChecked() {
    switch (this.type) {
      case InputType.CHECKBOX:
      case InputType.RADIO:
        return this.checked;
      default:
        return false;
    }
  }
  emitInputChange(value, keycode) {
    if (!this.isTyping) {
      this.emitStartTyping();
    }
    let validity;
    if (this.type === InputType.TEXTAREA) {
      validity = this.getValidity("textarea");
    }
    else {
      validity = this.getValidity("input");
    }
    this.value = value;
    this.inputChange.emit({ value, keycode, validity });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.emitStopTyping(this.value, validity);
    }, this.typingtimeout);
  }
  emitStartTyping() {
    this.isTyping = true;
    this.startTyping.emit();
  }
  emitStopTyping(value, validity) {
    this.isTyping = false;
    this.stopTyping.emit({
      value: value,
      validity: validity,
    });
  }
  emitInputCheck(checked) {
    this.inputCheck.emit({
      id: this.htmlid,
      checked: checked,
      type: this.type,
      name: this.name,
      value: this.value,
      validity: this.getValidity("input"),
    });
  }
  getValidity(type) {
    const input = this.hostElement.querySelector(type);
    return input.validity;
  }
  /* START text/password/email/number */
  getTextAttributes() {
    const attr = {
      id: this.htmlid,
      name: this.name,
      placeholder: this.placeholder,
      value: this.value,
      disabled: this.disabled,
      readonly: this.readonly,
      required: this.required,
      title: this.htmltitle,
      class: {
        [`input-${this.status}`]: !!this.status,
        istyping: this.isTyping,
        filled: !this.isTyping && !!this.value,
      },
      onInput: (e) => this.emitInputChange(e.target.value, e instanceof KeyboardEvent ? e.keyCode : null),
    };
    if (this.autocomplete) {
      attr["autocomplete"] = this.autocomplete;
    }
    return attr;
  }
  renderInputText(type = InputType.TEXT) {
    const attr = this.getTextAttributes();
    if (this.icon || type === InputType.PASSWORD) {
      Object.assign(attr.class, { "has-icon": true });
    }
    if (this.hasclearicon) {
      Object.assign(attr.class, { "has-clear-icon": true });
    }
    return (h("div", { class: "text-wrapper" }, this.renderLabel(), h("div", null, h("input", Object.assign({ type: type === InputType.PASSWORD && !this.passwordHidden ? InputType.TEXT : type }, attr, { "aria-label": this.ariaLabel || this.label })), this.renderIcons()), this.renderMessage()));
  }
  renderLabel() {
    if (!this.label) {
      return;
    }
    return (h("z-input-label", { htmlfor: this.htmlid, value: this.label, disabled: this.disabled, "aria-label": this.label, id: `${this.htmlid}_label` }));
  }
  renderIcons() {
    return (h("span", { class: {
        "icons-wrapper": true,
        "disabled": this.disabled,
      } }, this.renderResetIcon(), this.renderIcon()));
  }
  renderIcon() {
    if (this.type === InputType.PASSWORD) {
      return this.renderShowHidePassword();
    }
    if (!this.icon) {
      return;
    }
    return (h("z-icon", { class: "input-icon", name: this.icon }));
  }
  renderResetIcon() {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly) {
      return;
    }
    return (h("z-icon", { class: "reset-icon", name: "multiply", onClick: (e) => this.emitInputChange("", e instanceof KeyboardEvent ? e.keyCode : null) }));
  }
  renderShowHidePassword() {
    return (h("z-icon", { class: "toggle-password-icon", name: this.passwordHidden ? "view-filled" : "view-off-filled", onClick: () => (this.passwordHidden = !this.passwordHidden) }));
  }
  renderMessage() {
    if (!this.hasmessage) {
      return;
    }
    return (h("z-input-message", { message: this.message, status: this.status }));
  }
  /* END text/password/email/number */
  /* START textarea */
  renderTextarea() {
    const attributes = this.getTextAttributes();
    return (h("div", { class: "text-wrapper" }, this.renderLabel(), h("div", { class: Object.assign(Object.assign({ "textarea-wrapper": true }, attributes.class), { "disabled": attributes.disabled, "readonly": !!attributes.readonly, "istyping": this.isTyping, [this.textareaWrapperFocus]: true, [this.textareaWrapperHover]: true }) }, h("textarea", Object.assign({}, attributes, { onFocus: () => (this.textareaWrapperFocus = "focus"), onBlur: () => (this.textareaWrapperFocus = ""), onMouseOver: () => (this.textareaWrapperHover = "hover"), onMouseOut: () => (this.textareaWrapperHover = ""), "aria-label": this.ariaLabel || this.label }))), this.renderMessage()));
  }
  /* END textarea */
  handleCheck(ev) {
    this.checked = ev.target.checked;
    this.emitInputCheck(this.checked);
  }
  /* START checkbox */
  renderCheckbox() {
    return (h("div", { class: "checkbox-wrapper" }, h("input", { id: this.htmlid, type: "checkbox", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, required: this.required, onChange: this.handleCheck.bind(this), value: this.value }), h("label", { htmlFor: this.htmlid, class: {
        "checkbox-label": true,
        "after": this.labelafter,
        "before": !this.labelafter,
      } }, h("z-icon", { name: this.checked ? "checkbox-checked" : "checkbox", "aria-hidden": "true" }), this.label && h("span", { innerHTML: this.label }))));
  }
  /* END checkbox */
  /* START radio */
  renderRadio() {
    return (h("div", { class: "radio-wrapper" }, h("input", { id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, onChange: this.handleCheck.bind(this), value: this.value }), h("label", { htmlFor: this.htmlid, class: {
        "radio-label": true,
        "after": this.labelafter,
        "before": !this.labelafter,
      } }, h("z-icon", { name: this.checked ? "radio-button-checked" : "radio-button", "aria-hidden": "true" }), this.label && h("span", { innerHTML: this.label }))));
  }
  /* END radio */
  /* START select */
  renderSelect() {
    return (h("z-select", { htmlid: this.htmlid, items: this.items, name: this.name, label: this.label, "aria-label": this.ariaLabel, disabled: this.disabled, readonly: this.readonly, placeholder: this.placeholder, htmltitle: this.htmltitle, status: this.status, message: !this.hasmessage ? false : this.message, autocomplete: this.autocomplete, ref: (el) => (this.selectElem = el) }));
  }
  /* END select */
  render() {
    switch (this.type) {
      case InputType.TEXT:
      case InputType.PASSWORD:
      case InputType.NUMBER:
      case InputType.EMAIL:
        return this.renderInputText(this.type);
      case InputType.TEXTAREA:
        return this.renderTextarea();
      case InputType.CHECKBOX:
        return this.renderCheckbox();
      case InputType.RADIO:
        return this.renderRadio();
      // @ts-ignore
      case "select":
        return this.renderSelect();
      default:
        return this.renderInputText();
    }
  }
  static get is() { return "z-input-deprecated"; }
  static get encapsulation() { return "scoped"; }
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
      "htmlid": {
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
          "text": "the id of the input element"
        },
        "attribute": "htmlid",
        "reflect": false,
        "defaultValue": "`id-${randomId()}`"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "InputType",
          "resolved": "InputType.CHECKBOX | InputType.EMAIL | InputType.NUMBER | InputType.PASSWORD | InputType.RADIO | InputType.SEARCH | InputType.TEL | InputType.TEXT | InputType.TEXTAREA | InputType.URL",
          "references": {
            "InputType": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "input types"
        },
        "attribute": "type",
        "reflect": false
      },
      "name": {
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
          "text": "the input name"
        },
        "attribute": "name",
        "reflect": false
      },
      "label": {
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
          "text": "the input label"
        },
        "attribute": "label",
        "reflect": false
      },
      "ariaLabel": {
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
          "text": "the input aria-label"
        },
        "attribute": "aria-label",
        "reflect": false
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "the input value"
        },
        "attribute": "value",
        "reflect": false
      },
      "disabled": {
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
          "text": "the input is disabled"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "readonly": {
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
          "text": "the input is readonly"
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      },
      "required": {
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
          "text": "the input is required (optional): available for text, password, number, email, textarea, checkbox"
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "checked: available for checkbox, radio"
        },
        "attribute": "checked",
        "reflect": false,
        "defaultValue": "false"
      },
      "placeholder": {
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
          "text": "the input placeholder (optional)"
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "htmltitle": {
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
          "text": "the input html title (optional)"
        },
        "attribute": "htmltitle",
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
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "the input status (optional): available for text, password, number, email, textarea, select"
        },
        "attribute": "status",
        "reflect": false
      },
      "hasmessage": {
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
          "text": "show input helper message (optional): available for text, password, number, email, textarea, select"
        },
        "attribute": "hasmessage",
        "reflect": false,
        "defaultValue": "true"
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
          "text": "input helper message (optional): available for text, password, number, email, textarea, select"
        },
        "attribute": "message",
        "reflect": false
      },
      "labelafter": {
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
          "text": "the input label position: available for checkbox, radio"
        },
        "attribute": "labelafter",
        "reflect": false,
        "defaultValue": "true"
      },
      "typingtimeout": {
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
          "text": "timeout setting before trigger `inputChange` event (optional): available for text, textarea"
        },
        "attribute": "typingtimeout",
        "reflect": false,
        "defaultValue": "300"
      },
      "items": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SelectItem[] | string",
          "resolved": "SelectItem[] | string",
          "references": {
            "SelectItem": {
              "location": "import",
              "path": "../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "items (optional): available for select"
        },
        "attribute": "items",
        "reflect": false
      },
      "autocomplete": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "boolean | string",
          "resolved": "boolean | string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "the input has autocomplete option (optional): available for select, input"
        },
        "attribute": "autocomplete",
        "reflect": false
      },
      "multiple": {
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
          "text": "multiple options can be selected (optional): available for select"
        },
        "attribute": "multiple",
        "reflect": false,
        "defaultValue": "false"
      },
      "hasclearicon": {
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
          "text": "render clear icon when typing (optional): available for text"
        },
        "attribute": "hasclearicon",
        "reflect": false,
        "defaultValue": "true"
      },
      "icon": {
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
          "text": "render icon (optional): available for text, select"
        },
        "attribute": "icon",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isTyping": {},
      "textareaWrapperHover": {},
      "textareaWrapperFocus": {},
      "passwordHidden": {}
    };
  }
  static get events() {
    return [{
        "method": "inputChange",
        "name": "inputChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on input value change, returns value, keycode, validity"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "startTyping",
        "name": "startTyping",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when user starts typing"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "stopTyping",
        "name": "stopTyping",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when user stops typing, returns value, validity"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "inputCheck",
        "name": "inputCheck",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on checkbox check/uncheck, returns id, checked, type, name, value, validity"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "optionSelect",
        "name": "optionSelect",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted on select option selection, returns select id, selected item id (or array of selected items ids if multiple)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "getValue": {
        "complexType": {
          "signature": "() => Promise<string | string[]>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<string | string[]>"
        },
        "docs": {
          "text": "get the input value",
          "tags": []
        }
      },
      "setValue": {
        "complexType": {
          "signature": "(value: string | string[]) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "set the input value",
          "tags": []
        }
      },
      "isChecked": {
        "complexType": {
          "signature": "() => Promise<boolean>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<boolean>"
        },
        "docs": {
          "text": "get checked status",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "hostElement"; }
  static get listeners() {
    return [{
        "name": "inputCheck",
        "method": "inputCheckListener",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}
