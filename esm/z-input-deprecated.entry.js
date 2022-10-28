import { r as registerInstance, c as createEvent, h, g as getElement } from './index-a2ca4b97.js';
import { I as InputType } from './index-9d028352.js';
import { r as randomId } from './utils-39ca028c.js';
import './breakpoints-c386984e.js';

const stylesCss = ".sc-z-input-deprecated-h{display:inline-block;width:inherit}input.sc-z-input-deprecated::-ms-clear,input.sc-z-input-deprecated::-ms-reveal{display:none}.sc-z-input-deprecated-h input.sc-z-input-deprecated::-ms-clear,.sc-z-input-deprecated-h input.sc-z-input-deprecated::-ms-reveal{display:none}input.sc-z-input-deprecated,textarea.sc-z-input-deprecated,.textarea-wrapper.sc-z-input-deprecated,ul[role=\"listbox\"].sc-z-input-deprecated{box-sizing:border-box;border:var(--border-size-small) solid var(--color-surface04);background:var(--color-input-field01);border-radius:var(--border-radius-small);color:var(--color-text02);fill:var(--color-icon02);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg);outline:none}input.sc-z-input-deprecated:focus:focus-visible,li[role=\"option\"].sc-z-input-deprecated:focus:focus-visible,.focus.sc-z-input-deprecated{box-shadow:var(--shadow-focus-primary)}.filled.sc-z-input-deprecated{border-color:var(--color-surface05)}.input-success.sc-z-input-deprecated,.input-success.sc-z-input-deprecated:hover,.input-success.hover.sc-z-input-deprecated{border-color:var(--color-success01);background:var(--color-success-inverse);fill:var(--color-success01)}.input-error.sc-z-input-deprecated,.input-error.sc-z-input-deprecated:hover,.input-error.hover.sc-z-input-deprecated{border-color:var(--color-error01);background:var(--color-error-inverse);fill:var(--color-error01)}.input-warning.sc-z-input-deprecated,.input-warning.sc-z-input-deprecated:hover,.input-warning.hover.sc-z-input-deprecated{border-color:var(--color-warning01);background:var(--color-warning-inverse);fill:var(--color-warning01)}input[readonly].sc-z-input-deprecated,.readonly.sc-z-input-deprecated{border-color:var(--color-disabled01);fill:var(--color-disabled01);pointer-events:none}input.sc-z-input-deprecated:disabled,.disabled.sc-z-input-deprecated,.filled.sc-z-input-deprecated:disabled{border-color:var(--color-disabled01);box-shadow:none;color:var(--color-disabled02);fill:var(--color-disabled01);pointer-events:none}input.sc-z-input-deprecated::placeholder,textarea.sc-z-input-deprecated::placeholder{color:var(--color-text05)}.sc-z-input-deprecated::-webkit-textarea-placeholder{color:var(--color-text05)}.sc-z-input-deprecated:-ms-textarea-placeholder{color:var(--color-text05)}.sc-z-input-deprecated::placeholder{color:var(--color-text05)}.text-wrapper.sc-z-input-deprecated>div.sc-z-input-deprecated{position:relative;z-index:1;fill:var(--color-icon02)}.text-wrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.sc-z-input-deprecated{width:100%;height:calc(var(--space-unit) * 5.5);box-sizing:border-box;padding:0 calc(var(--space-unit) * 4.5) 0 calc(var(--space-unit) * 1.5);margin:0}.text-wrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.has-icon.sc-z-input-deprecated,.text-wrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.has-clear-icon.sc-z-input-deprecated{padding-right:calc(var(--space-unit) * 4)}.text-wrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.has-icon.has-clear-icon.sc-z-input-deprecated{padding-right:calc(var(--space-unit) * 7)}.text-wrapper.sc-z-input-deprecated .icons-wrapper.sc-z-input-deprecated{position:absolute;z-index:2;right:calc(var(--space-unit) * 1.5);bottom:calc(var(--space-unit) * 1.5);display:flex}.text-wrapper.sc-z-input-deprecated .icons-wrapper.sc-z-input-deprecated>z-icon.sc-z-input-deprecated{--z-icon-width:18px;--z-icon-height:18px;display:block;margin-left:calc(var(--space-unit) * 0.5)}.text-wrapper.sc-z-input-deprecated .icons-wrapper.sc-z-input-deprecated>z-icon.reset-icon.sc-z-input-deprecated,.text-wrapper.sc-z-input-deprecated .icons-wrapper.sc-z-input-deprecated>z-icon.toggle-password-icon.sc-z-input-deprecated{cursor:pointer}.text-wrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.sc-z-input-deprecated:-webkit-autofill,.text-wrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.sc-z-input-deprecated:-webkit-autofill:hover,.text-wrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.sc-z-input-deprecated:-webkit-autofill:focus,.text-wrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.sc-z-input-deprecated:-webkit-autofill:active{background-clip:text !important}.textarea-wrapper.sc-z-input-deprecated{padding:calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}textarea.sc-z-input-deprecated::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}textarea.sc-z-input-deprecated::-webkit-scrollbar-track{background-color:transparent}textarea.sc-z-input-deprecated::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}textarea.sc-z-input-deprecated::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}textarea.sc-z-input-deprecated{width:100%;min-height:132px;padding:0;border:none;margin:0;resize:none}.radio-wrapper.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated{position:relative;display:inline-flex;flex-direction:row;align-items:center;color:var(--color-text01);fill:var(--color-primary01);font-family:var(--font-family-sans)}.radio-wrapper.sc-z-input-deprecated:hover,.checkbox-wrapper.sc-z-input-deprecated:hover{color:var(--color-hover-primary);fill:currentcolor}.radio-wrapper.sc-z-input-deprecated>input.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated>input.sc-z-input-deprecated{position:absolute;z-index:-1;opacity:0;pointer-events:none}.radio-wrapper.sc-z-input-deprecated .radio-label.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated .checkbox-label.sc-z-input-deprecated{display:inline-flex;align-items:center;margin:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1;text-transform:inherit}.radio-wrapper.sc-z-input-deprecated input.sc-z-input-deprecated:not(:disabled)+.radio-label.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated input.sc-z-input-deprecated:not(:disabled)+.checkbox-label.sc-z-input-deprecated{cursor:pointer}.radio-wrapper.sc-z-input-deprecated .radio-label.sc-z-input-deprecated z-icon.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated .checkbox-label.sc-z-input-deprecated z-icon.sc-z-input-deprecated{cursor:pointer;fill:inherit}.radio-wrapper.sc-z-input-deprecated .radio-label.after.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated .checkbox-label.after.sc-z-input-deprecated{flex-direction:row}.radio-wrapper.sc-z-input-deprecated .radio-label.before.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated .checkbox-label.before.sc-z-input-deprecated{flex-direction:row-reverse}.radio-wrapper.sc-z-input-deprecated .radio-label.after.sc-z-input-deprecated>span.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated .checkbox-label.after.sc-z-input-deprecated>span.sc-z-input-deprecated{margin-left:var(--space-unit)}.radio-wrapper.sc-z-input-deprecated .radio-label.before.sc-z-input-deprecated>span.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated .checkbox-label.before.sc-z-input-deprecated>span.sc-z-input-deprecated{margin-right:var(--space-unit)}.radio-wrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:focus:focus-visible+.radio-label.sc-z-input-deprecated>z-icon.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:focus:focus-visible+.checkbox-label.sc-z-input-deprecated>z-icon.sc-z-input-deprecated{border-radius:var(--border-radius-small);box-shadow:var(--shadow-focus-primary)}.radio-wrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:disabled+.radio-label.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:disabled+.checkbox-label.sc-z-input-deprecated{color:var(--color-disabled02)}.radio-wrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:disabled+.radio-label.sc-z-input-deprecated>z-icon.sc-z-input-deprecated,.checkbox-wrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:disabled+.checkbox-label.sc-z-input-deprecated>z-icon.sc-z-input-deprecated{cursor:default;fill:var(--color-disabled01)}";

const ZInputDeprecated = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputChange = createEvent(this, "inputChange", 7);
    this.startTyping = createEvent(this, "startTyping", 7);
    this.stopTyping = createEvent(this, "stopTyping", 7);
    this.inputCheck = createEvent(this, "inputCheck", 7);
    this.optionSelect = createEvent(this, "optionSelect", 7);
    /** the id of the input element */
    this.htmlid = `id-${randomId()}`;
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
  get hostElement() { return getElement(this); }
};
ZInputDeprecated.style = stylesCss;

export { ZInputDeprecated as z_input_deprecated };
