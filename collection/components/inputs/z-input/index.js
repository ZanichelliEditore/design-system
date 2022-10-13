import { h, } from "@stencil/core";
import { InputTypeEnum, LabelPositions, } from "../../../beans";
import { boolean, randomId } from "../../../utils/utils";
export class ZInput {
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
    /** input helper message (optional): available for text, password, number, email, textarea - if set to `false` message won't be displayed */
    this.message = true;
    /** the input label position: available for checkbox, radio */
    this.labelPosition = LabelPositions.right;
    /** render clear icon when typing (optional): available for text */
    this.hasclearicon = true;
    this.isTyping = false;
    this.passwordHidden = true;
    this.typingtimeout = 300;
  }
  inputCheckListener(e) {
    const data = e.detail;
    switch (this.type) {
      case InputTypeEnum.radio:
        if (data.type === InputTypeEnum.radio &&
          data.name === this.name &&
          data.id !== this.htmlid) {
          this.checked = false;
        }
      default:
        return;
    }
  }
  /** get checked status */
  async isChecked() {
    switch (this.type) {
      case InputTypeEnum.checkbox:
      case InputTypeEnum.radio:
        return this.checked;
      default:
        console.warn("`isChecked` method is only available for type `checkbox` and `radio`");
        return false;
    }
  }
  emitInputChange(value) {
    if (!this.isTyping)
      this.emitStartTyping();
    let validity = {};
    if (this.type === InputTypeEnum.textarea) {
      validity = this.getValidity("textarea");
    }
    else {
      validity = this.getValidity("input");
    }
    this.value = value;
    this.inputChange.emit({ value, validity });
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
    return {
      id: this.htmlid,
      name: this.name,
      placeholder: this.placeholder,
      value: this.value,
      disabled: this.disabled,
      readonly: this.readonly,
      required: this.required,
      title: this.htmltitle,
      class: {
        [`input_${this.status || "default"}`]: true,
        filled: !!this.value,
      },
      autocomplete: this.autocomplete,
      onInput: (e) => this.emitInputChange(e.target.value),
    };
  }
  getNumberAttributes(type) {
    if (type != InputTypeEnum.number)
      return;
    return {
      min: this.min,
      max: this.max,
      step: this.step,
    };
  }
  getPatternAttribute(type) {
    if (type != InputTypeEnum.password &&
      type != InputTypeEnum.text &&
      type != InputTypeEnum.tel &&
      type != InputTypeEnum.search &&
      type != InputTypeEnum.url &&
      type != InputTypeEnum.email)
      return;
    return {
      pattern: this.pattern,
    };
  }
  renderInputText(type = InputTypeEnum.text) {
    const attr = Object.assign(Object.assign(Object.assign({}, this.getTextAttributes()), this.getNumberAttributes(type)), this.getPatternAttribute(type));
    if (this.icon || type === InputTypeEnum.password) {
      attr.class = Object.assign(Object.assign({}, attr.class), { hasIcon: true });
    }
    if (this.hasclearicon && type != InputTypeEnum.number) {
      attr.class = Object.assign(Object.assign({}, attr.class), { hasClearIcon: true });
    }
    return (h("div", { class: "textWrapper" }, this.renderLabel(), h("div", null, h("input", Object.assign({ type: type === InputTypeEnum.password && !this.passwordHidden
        ? InputTypeEnum.text
        : type }, attr, { "aria-label": this.ariaLabel || this.label })), this.renderIcons()), this.renderMessage()));
  }
  renderLabel() {
    if (!this.label)
      return;
    return (h("label", { class: "inputLabel body-5-sb", id: `${this.htmlid}_label`, htmlFor: this.htmlid, "aria-label": this.label }, this.label));
  }
  renderIcons() {
    return (h("span", { class: "iconsWrapper" }, this.renderResetIcon(), this.renderIcon()));
  }
  renderIcon() {
    if (this.type === InputTypeEnum.password) {
      return this.renderShowHidePassword();
    }
    if (!this.icon)
      return;
    return (h("button", { type: "button", class: "iconButton inputIcon", tabIndex: -1 }, h("z-icon", { name: this.icon })));
  }
  renderResetIcon() {
    if (!this.hasclearicon ||
      !this.value ||
      this.disabled ||
      this.readonly ||
      this.type == InputTypeEnum.number)
      return;
    return (h("button", { type: "button", class: "iconButton resetIcon", "aria-label": "cancella il contenuto dell'input", onClick: () => this.emitInputChange("") }, h("z-icon", { name: "multiply" })));
  }
  renderShowHidePassword() {
    return (h("button", { type: "button", class: "iconButton showHidePasswordIcon", disabled: this.disabled, "aria-label": this.passwordHidden ? "mostra password" : "nascondi password", onClick: () => (this.passwordHidden = !this.passwordHidden) }, h("z-icon", { name: this.passwordHidden ? "view-filled" : "view-off-filled" })));
  }
  renderMessage() {
    if (boolean(this.message) === false)
      return;
    return (h("z-input-message", { message: boolean(this.message) === true ? undefined : this.message, status: this.status }));
  }
  /* END text/password/email/number */
  /* START textarea */
  renderTextarea() {
    const attributes = this.getTextAttributes();
    return (h("div", { class: "textWrapper" }, this.renderLabel(), h("div", { class: Object.assign(Object.assign({}, attributes.class), { textareaWrapper: true, readonly: attributes.readonly }) }, h("textarea", Object.assign({}, attributes, { "aria-label": this.ariaLabel || this.label }))), this.renderMessage()));
  }
  /* END textarea */
  handleCheck(ev) {
    this.checked = ev.target.checked;
    this.emitInputCheck(this.checked);
  }
  /* START checkbox */
  renderCheckbox() {
    return (h("div", { class: "checkboxWrapper" }, h("input", { id: this.htmlid, type: "checkbox", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, required: this.required, onChange: this.handleCheck.bind(this), value: this.value }), h("label", { htmlFor: this.htmlid, class: {
        checkboxLabel: true,
        after: this.labelPosition === LabelPositions.right,
        before: this.labelPosition === LabelPositions.left,
      } }, h("z-icon", { name: this.checked ? "checkbox-checked" : "checkbox", "aria-hidden": "true" }), this.label && h("span", { innerHTML: this.label }))));
  }
  /* END checkbox */
  /* START radio */
  renderRadio() {
    return (h("div", { class: "radioWrapper" }, h("input", { id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, onChange: this.handleCheck.bind(this), value: this.value }), h("label", { htmlFor: this.htmlid, class: {
        radioLabel: true,
        after: this.labelPosition === LabelPositions.right,
        before: this.labelPosition === LabelPositions.left,
      } }, h("z-icon", { name: this.checked ? "radio-button-checked" : "radio-button", "aria-hidden": "true" }), this.label && h("span", { innerHTML: this.label }))));
  }
  /* END radio */
  render() {
    switch (this.type) {
      case InputTypeEnum.textarea:
        return this.renderTextarea();
      case InputTypeEnum.checkbox:
        return this.renderCheckbox();
      case InputTypeEnum.radio:
        return this.renderRadio();
      default:
        return this.renderInputText(this.type);
    }
  }
  static get is() { return "z-input"; }
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
          "original": "InputTypeBean",
          "resolved": "\"checkbox\" | \"email\" | \"number\" | \"password\" | \"radio\" | \"search\" | \"tel\" | \"text\" | \"textarea\" | \"url\"",
          "references": {
            "InputTypeBean": {
              "location": "import",
              "path": "../../../beans"
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
        "reflect": true,
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
          "original": "InputStatusBean",
          "resolved": "\"error\" | \"success\" | \"warning\"",
          "references": {
            "InputStatusBean": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "the input status (optional): available for text, password, number, email, textarea"
        },
        "attribute": "status",
        "reflect": false
      },
      "message": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | boolean",
          "resolved": "boolean | string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "input helper message (optional): available for text, password, number, email, textarea - if set to `false` message won't be displayed"
        },
        "attribute": "message",
        "reflect": false,
        "defaultValue": "true"
      },
      "labelPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "LabelPosition",
          "resolved": "\"left\" | \"right\"",
          "references": {
            "LabelPosition": {
              "location": "import",
              "path": "../../../beans"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "the input label position: available for checkbox, radio"
        },
        "attribute": "label-position",
        "reflect": false,
        "defaultValue": "LabelPositions.right"
      },
      "autocomplete": {
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
          "text": "the input has autocomplete option (optional): available for text, password, number, email"
        },
        "attribute": "autocomplete",
        "reflect": false
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
          "text": "render icon (optional): available for text"
        },
        "attribute": "icon",
        "reflect": false
      },
      "min": {
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
          "text": "min number value (optional): available for number"
        },
        "attribute": "min",
        "reflect": false
      },
      "max": {
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
          "text": "max number value (optional): available for number"
        },
        "attribute": "max",
        "reflect": false
      },
      "step": {
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
          "text": "step number value (optional): available for number"
        },
        "attribute": "step",
        "reflect": false
      },
      "pattern": {
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
          "text": "pattern value (optional): available for tel, text, search, url, email, password"
        },
        "attribute": "pattern",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isTyping": {},
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
          "text": "Emitted on input value change, returns value, validity"
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
      }];
  }
  static get methods() {
    return {
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
