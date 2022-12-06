'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-fa110f37.js');
const utils = require('./utils-600bad93.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss$1 = ".sc-z-input-h{display:inline-block;width:inherit}input.sc-z-input::-ms-clear,input.sc-z-input::-ms-reveal{display:none}.sc-z-input-h input.sc-z-input::-ms-clear,.sc-z-input-h input.sc-z-input::-ms-reveal{display:none}input.sc-z-input,textarea.sc-z-input,.textarea-wrapper.sc-z-input{box-sizing:border-box;border:var(--border-size-small) solid var(--color-surface04);background:var(--color-input-field01);border-radius:var(--border-radius-small);color:var(--color-text01);fill:var(--color-icon02);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg);outline:none}input.sc-z-input:focus:focus-visible,.textarea-wrapper.sc-z-input:focus-within{box-shadow:var(--shadow-focus-primary)}input.sc-z-input:focus:focus-visible,textarea.sc-z-input:focus:focus-visible{color:var(--color-primary02)}.filled.sc-z-input{border-color:var(--color-surface05)}.input-success.sc-z-input{border-color:var(--color-success01);background:var(--color-success-inverse);fill:var(--color-success01)}.input-error.sc-z-input{border-color:var(--color-error01);background:var(--color-error-inverse);fill:var(--color-error01)}.input-warning.sc-z-input{border-color:var(--color-warning01);background:var(--color-warning-inverse);fill:var(--color-warning01)}input.sc-z-input:hover,.textarea-wrapper.sc-z-input:hover{outline:var(--border-size-medium) solid var(--color-surface04);outline-offset:-2px}input[readonly].sc-z-input,.readonly.sc-z-input{border-color:var(--color-disabled01);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) .textarea-wrapper.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) z-icon.sc-z-input{border-color:var(--color-disabled01);box-shadow:none;color:var(--color-disabled02);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input:hover{border-width:var(--border-size-small)}input.sc-z-input::placeholder,textarea.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input::-webkit-textarea-placeholder{color:var(--color-text05)}.sc-z-input:-ms-textarea-placeholder{color:var(--color-text05)}.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input:placeholder{color:var(--color-text05)}label.input-label.sc-z-input{display:block;padding-bottom:var(--space-unit);color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);text-align:left;text-transform:uppercase}[disabled].sc-z-input-h:not([disabled=\"false\"]) label.input-label.sc-z-input{color:var(--color-disabled02)}.text-wrapper.sc-z-input>div.sc-z-input{position:relative;z-index:1;fill:var(--color-icon02)}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{width:100%;height:calc(var(--space-unit) * 5.5);box-sizing:border-box;padding:0 calc(var(--space-unit) * 1.5);margin:0}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.sc-z-input,.text-wrapper.sc-z-input>div.sc-z-input>input.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 5.25)}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 8)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input{position:absolute;z-index:2;top:50%;right:calc(var(--space-unit) * 1.5);display:flex;pointer-events:none;transform:translateY(-50%)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input{padding:0;border:0;background:none;color:inherit;font:inherit;pointer-events:initial}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input+button.icon-button.sc-z-input{margin-left:calc(var(--space-unit) * 0.5)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.reset-icon.sc-z-input,.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.toggle-password-icon.sc-z-input{cursor:pointer}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.sc-z-input{--z-icon-width:18px;--z-icon-height:18px;display:block}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:hover,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:focus,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:active{background-clip:text !important}.textarea-wrapper.sc-z-input{padding:calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}textarea.sc-z-input::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-track{background-color:transparent}textarea.sc-z-input::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}textarea.sc-z-input{width:100%;min-height:132px;padding:0;border:none;margin:0;resize:none}.radio-wrapper.sc-z-input,.checkbox-wrapper.sc-z-input{position:relative;display:inline-flex;flex-direction:row;align-items:center;color:var(--color-text01);fill:var(--color-primary01);font-family:var(--font-family-sans)}.radio-wrapper.sc-z-input:hover,.checkbox-wrapper.sc-z-input:hover{color:var(--color-hover-primary);fill:currentcolor}.radio-wrapper.sc-z-input>input.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input{position:absolute;z-index:-1;opacity:0;pointer-events:none}.radio-wrapper.sc-z-input .radio-label.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{display:inline-flex;align-items:center;margin:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1;text-transform:inherit}.radio-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.checkbox-label.sc-z-input{cursor:pointer}.radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{cursor:pointer;fill:inherit}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input{flex-direction:row}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input{flex-direction:row-reverse}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input{margin-left:var(--space-unit)}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input{margin-right:var(--space-unit)}.radio-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.checkbox-label.sc-z-input>z-icon.sc-z-input{border-radius:var(--border-radius-small);box-shadow:var(--shadow-focus-primary)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input{color:var(--color-disabled02)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input>z-icon.sc-z-input{cursor:default;fill:var(--color-disabled01)}";

const ZInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inputChange = index.createEvent(this, "inputChange", 7);
    this.startTyping = index.createEvent(this, "startTyping", 7);
    this.stopTyping = index.createEvent(this, "stopTyping", 7);
    this.inputCheck = index.createEvent(this, "inputCheck", 7);
    /** the id of the input element */
    this.htmlid = `id-${utils.randomId()}`;
    /** the input aria-label */
    this.ariaLabel = "";
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
    this.labelPosition = index$1.LabelPosition.RIGHT;
    /** render clear icon when typing (optional): available for text */
    this.hasclearicon = true;
    this.isTyping = false;
    this.passwordHidden = true;
    this.typingtimeout = 300;
  }
  inputCheckListener(e) {
    const data = e.detail;
    switch (this.type) {
      case index$1.InputType.RADIO:
        if (data.type === index$1.InputType.RADIO && data.name === this.name && data.id !== this.htmlid) {
          this.checked = false;
        }
        break;
    }
  }
  /** get checked status */
  async isChecked() {
    switch (this.type) {
      case index$1.InputType.CHECKBOX:
      case index$1.InputType.RADIO:
        return this.checked;
      default:
        console.warn("`isChecked` method is only available for type `checkbox` and `radio`");
        return false;
    }
  }
  emitInputChange(value) {
    if (!this.isTyping) {
      this.emitStartTyping();
    }
    let validity;
    if (this.type === index$1.InputType.TEXTAREA) {
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
        [`input-${this.status}`]: !!this.status,
        filled: !!this.value,
      },
      autocomplete: this.autocomplete,
      onInput: (e) => this.emitInputChange(e.target.value),
    };
  }
  getNumberAttributes(type) {
    if (type != index$1.InputType.NUMBER) {
      return;
    }
    return {
      min: this.min,
      max: this.max,
      step: this.step,
    };
  }
  getPatternAttribute(type) {
    if (type != index$1.InputType.PASSWORD &&
      type != index$1.InputType.TEXT &&
      type != index$1.InputType.TEL &&
      type != index$1.InputType.SEARCH &&
      type != index$1.InputType.URL &&
      type != index$1.InputType.EMAIL) {
      return;
    }
    return {
      pattern: this.pattern,
    };
  }
  renderInputText(type = index$1.InputType.TEXT) {
    const attr = Object.assign(Object.assign(Object.assign({}, this.getTextAttributes()), this.getNumberAttributes(type)), this.getPatternAttribute(type));
    if (this.icon || type === index$1.InputType.PASSWORD) {
      Object.assign(attr.class, { "has-icon": true });
    }
    if (this.hasclearicon && type != index$1.InputType.NUMBER) {
      Object.assign(attr.class, { "has-clear-icon": true });
    }
    return (index.h("div", { class: "text-wrapper" }, this.renderLabel(), index.h("div", null, index.h("input", Object.assign({ type: type === index$1.InputType.PASSWORD && !this.passwordHidden ? index$1.InputType.TEXT : type }, attr, { "aria-label": this.ariaLabel || this.label })), this.renderIcons()), this.renderMessage()));
  }
  renderLabel() {
    if (!this.label) {
      return;
    }
    return (index.h("label", { class: "input-label body-5-sb", id: `${this.htmlid}_label`, htmlFor: this.htmlid, "aria-label": this.label }, this.label));
  }
  renderIcons() {
    return (index.h("span", { class: "icons-wrapper" }, this.renderResetIcon(), this.renderIcon()));
  }
  renderIcon() {
    if (this.type === index$1.InputType.PASSWORD) {
      return this.renderShowHidePassword();
    }
    if (!this.icon) {
      return;
    }
    return (index.h("button", { type: "button", class: "icon-button input-icon", tabIndex: -1 }, index.h("z-icon", { name: this.icon })));
  }
  renderResetIcon() {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly || this.type == index$1.InputType.NUMBER) {
      return;
    }
    return (index.h("button", { type: "button", class: "icon-button reset-icon", "aria-label": "cancella il contenuto dell'input", onClick: () => this.emitInputChange("") }, index.h("z-icon", { name: "multiply" })));
  }
  renderShowHidePassword() {
    return (index.h("button", { type: "button", class: "icon-button toggle-password-icon", disabled: this.disabled, "aria-label": this.passwordHidden ? "mostra password" : "nascondi password", onClick: () => (this.passwordHidden = !this.passwordHidden) }, index.h("z-icon", { name: this.passwordHidden ? "view-filled" : "view-off-filled" })));
  }
  renderMessage() {
    if (utils.boolean(this.message) === false) {
      return;
    }
    return (index.h("z-input-message", { message: utils.boolean(this.message) === true ? undefined : this.message, status: this.status }));
  }
  /* END text/password/email/number */
  /* START textarea */
  renderTextarea() {
    const attributes = this.getTextAttributes();
    return (index.h("div", { class: "text-wrapper" }, this.renderLabel(), index.h("div", { class: Object.assign(Object.assign({}, attributes.class), { "textarea-wrapper": true, "readonly": attributes.readonly }) }, index.h("textarea", Object.assign({}, attributes, { "aria-label": this.ariaLabel || this.label }))), this.renderMessage()));
  }
  /* END textarea */
  handleCheck(ev) {
    this.checked = ev.target.checked;
    this.emitInputCheck(this.checked);
  }
  /* START checkbox */
  renderCheckbox() {
    return (index.h("div", { class: "checkbox-wrapper" }, index.h("input", { id: this.htmlid, type: "checkbox", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, required: this.required, onChange: this.handleCheck.bind(this), value: this.value }), index.h("label", { htmlFor: this.htmlid, class: {
        "checkbox-label": true,
        "after": this.labelPosition === index$1.LabelPosition.RIGHT,
        "before": this.labelPosition === index$1.LabelPosition.LEFT,
      } }, index.h("z-icon", { name: this.checked ? "checkbox-checked" : "checkbox", "aria-hidden": "true" }), this.label && index.h("span", { innerHTML: this.label }))));
  }
  /* END checkbox */
  /* START radio */
  renderRadio() {
    return (index.h("div", { class: "radio-wrapper" }, index.h("input", { id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, onChange: this.handleCheck.bind(this), value: this.value }), index.h("label", { htmlFor: this.htmlid, class: {
        "radio-label": true,
        "after": this.labelPosition === index$1.LabelPosition.RIGHT,
        "before": this.labelPosition === index$1.LabelPosition.LEFT,
      } }, index.h("z-icon", { name: this.checked ? "radio-button-checked" : "radio-button", "aria-hidden": "true" }), this.label && index.h("span", { innerHTML: this.label }))));
  }
  /* END radio */
  render() {
    switch (this.type) {
      case index$1.InputType.TEXTAREA:
        return this.renderTextarea();
      case index$1.InputType.CHECKBOX:
        return this.renderCheckbox();
      case index$1.InputType.RADIO:
        return this.renderRadio();
      default:
        return this.renderInputText(this.type);
    }
  }
  get hostElement() { return index.getElement(this); }
};
ZInput.style = stylesCss$1;

const stylesCss = ":host{display:flex;min-height:calc(var(--space-unit) * 2.5);align-items:start;margin-top:var(--space-unit);color:var(--color-text05);fill:currentcolor;font-family:var(--font-family-sans);font-size:var(--font-size-2);letter-spacing:0.16px}:host([status=\"success\"]){color:var(--color-text-success)}:host([status=\"error\"]){color:var(--color-text-error)}:host([status=\"warning\"]){color:var(--color-warning02)}:host(:focus){outline:none}:host>z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);--z-icon-right-margin:var(--space-unit)}";

const ZInputMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.statusIcons = {
      success: "checkmark-circle",
      error: "multiply-circled",
      warning: "exclamation-circle",
    };
  }
  render() {
    return (index.h(index.Host, { role: "alert", "aria-label": this.message, tabindex: this.message ? 0 : -1 }, this.statusIcons[this.status] && this.message && index.h("z-icon", { name: this.statusIcons[this.status] }), index.h("span", { innerHTML: this.message })));
  }
};
ZInputMessage.style = stylesCss;

exports.z_input = ZInput;
exports.z_input_message = ZInputMessage;
