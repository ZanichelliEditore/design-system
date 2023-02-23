import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-a2ca4b97.js';
import { j as LabelPosition, c as ButtonSize, I as InputType } from './index-968a240f.js';
import { r as randomId, b as boolean } from './utils-f2a0dac2.js';
import './breakpoints-c386984e.js';

const stylesCss$1 = ".sc-z-input-h{display:inline-block;width:inherit}input.sc-z-input::-ms-clear,input.sc-z-input::-ms-reveal{display:none}.sc-z-input-h input.sc-z-input::-ms-clear,.sc-z-input-h input.sc-z-input::-ms-reveal{display:none}input.sc-z-input,textarea.sc-z-input,.textarea-wrapper.sc-z-input{box-sizing:border-box;border:var(--border-size-small) solid var(--color-surface04);background:var(--color-input-field01);border-radius:var(--border-radius-small);color:var(--color-text01);fill:var(--color-icon02);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg);outline:none}[size=\"small\"].sc-z-input-h input.sc-z-input,[size=\"small\"].sc-z-input-h textarea.sc-z-input,[size=\"small\"].sc-z-input-h .textarea-wrapper.sc-z-input,[size=\"x-small\"].sc-z-input-h input.sc-z-input,[size=\"x-small\"].sc-z-input-h textarea.sc-z-input,[size=\"x-small\"].sc-z-input-h .textarea-wrapper.sc-z-input{font-size:var(--font-size-2)}.cursor-select.sc-z-input-h input.sc-z-input{cursor:pointer}.sc-z-input-h:not(.active-select) input.sc-z-input:focus:focus-visible,.textarea-wrapper.sc-z-input:focus-within{box-shadow:var(--shadow-focus-primary)}input.sc-z-input:focus:focus-visible,textarea.sc-z-input:focus:focus-visible{color:var(--color-primary02)}.active-select.sc-z-input-h input.sc-z-input{border:var(--border-size-small) solid var(--blue500)}.cursor-select.sc-z-input-h input.sc-z-input:focus:focus-visible{box-shadow:var(--shadow-focus-primary)}.sc-z-input-h input[readonly].sc-z-input:focus:focus-visible{box-shadow:none;pointer-events:none}.filled.sc-z-input{border-color:var(--color-surface05)}.input-success.sc-z-input{border-color:var(--color-success01);background:var(--color-success-inverse);fill:var(--color-success01)}.input-error.sc-z-input{border-color:var(--color-error01);background:var(--color-error-inverse);fill:var(--color-error01)}.input-warning.sc-z-input{border-color:var(--color-warning01);background:var(--color-warning-inverse);fill:var(--color-warning01)}input.sc-z-input:hover,.textarea-wrapper.sc-z-input:hover{outline:var(--border-size-medium) solid var(--color-surface04);outline-offset:-2px}.sc-z-input-h:not(.active-select) input[readonly].sc-z-input,.readonly.sc-z-input{border-color:var(--color-disabled01);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) .textarea-wrapper.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) z-icon.sc-z-input{border-color:var(--color-disabled01);box-shadow:none;color:var(--color-disabled02);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input:hover{border-width:var(--border-size-small)}input.sc-z-input::placeholder,textarea.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input::-webkit-textarea-placeholder{color:var(--color-text05)}.sc-z-input:-ms-textarea-placeholder{color:var(--color-text05)}.sc-z-input::placeholder{color:var(--color-text05)}label.input-label.sc-z-input{display:block;padding-bottom:var(--space-unit);color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);text-align:left;text-transform:uppercase}[disabled].sc-z-input-h:not([disabled=\"false\"]) label.input-label.sc-z-input{color:var(--color-disabled02)}.text-wrapper.sc-z-input>div.sc-z-input{position:relative;z-index:1;fill:var(--color-icon02)}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{width:100%;height:calc(var(--space-unit) * 5.5);box-sizing:border-box;padding:0 calc(var(--space-unit) * 1.5);margin:0}[size=\"small\"].sc-z-input-h .text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{height:calc(var(--space-unit) * 4.5)}[size=\"x-small\"].sc-z-input-h .text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{height:calc(var(--space-unit) * 4)}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.sc-z-input,.text-wrapper.sc-z-input>div.sc-z-input>input.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 5.25)}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 8)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input{position:absolute;z-index:2;top:50%;right:calc(var(--space-unit) * 1.5);display:flex;pointer-events:none;transform:translateY(-50%)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input{padding:0;border:0;background:none;color:inherit;font:inherit;pointer-events:initial}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input+button.icon-button.sc-z-input{margin-left:calc(var(--space-unit) * 0.5)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.reset-icon.sc-z-input,.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.toggle-password-icon.sc-z-input{cursor:pointer}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.sc-z-input{--z-icon-width:18px;--z-icon-height:18px;display:block}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.small.sc-z-input,.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.x-small.sc-z-input{--z-icon-width:16px;--z-icon-height:16px}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:hover,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:focus,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:active{background:var(--color-white) !important;background-clip:text !important;-webkit-transition-delay:99999s !important}.textarea-wrapper.sc-z-input{padding:calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}textarea.sc-z-input::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-track{background-color:transparent}textarea.sc-z-input::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}textarea.sc-z-input{width:100%;min-height:132px;padding:0;border:none;margin:0;resize:none}.radio-wrapper.sc-z-input,.checkbox-wrapper.sc-z-input{position:relative;display:inline-flex;flex-direction:row;align-items:center;color:var(--color-text01);fill:var(--color-primary01);font-family:var(--font-family-sans)}.radio-wrapper.sc-z-input:hover,.checkbox-wrapper.sc-z-input:hover{color:var(--color-hover-primary);fill:currentcolor}.radio-wrapper.sc-z-input>input.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input{position:absolute;z-index:-1;opacity:0;pointer-events:none}.radio-wrapper.sc-z-input .radio-label.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{display:inline-flex;align-items:center;margin:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1;text-transform:inherit}.radio-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.checkbox-label.sc-z-input{cursor:pointer}.radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{cursor:pointer;fill:inherit}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{--z-icon-width:16px;--z-icon-height:16px}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{font-size:var(--font-size-2)}[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{--z-icon-width:14px;--z-icon-height:14px}[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{font-size:var(--font-size-1)}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input{flex-direction:row}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input{flex-direction:row-reverse}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input{margin-left:var(--space-unit)}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input{margin-right:var(--space-unit)}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input{margin-left:calc(var(--space-unit) * 0.5)}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input{margin-right:calc(var(--space-unit) * 0.5)}.radio-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.checkbox-label.sc-z-input>z-icon.sc-z-input{border-radius:var(--border-radius-small);box-shadow:var(--shadow-focus-primary)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input{color:var(--color-disabled02)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input>z-icon.sc-z-input{cursor:default;fill:var(--color-disabled01)}";

const ZInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputChange = createEvent(this, "inputChange", 7);
    this.startTyping = createEvent(this, "startTyping", 7);
    this.stopTyping = createEvent(this, "stopTyping", 7);
    this.inputCheck = createEvent(this, "inputCheck", 7);
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
    /** input helper message (optional): available for text, password, number, email, textarea - if set to `false` message won't be displayed */
    this.message = true;
    /** the input label position: available for checkbox, radio */
    this.labelPosition = LabelPosition.RIGHT;
    /** render clear icon when typing (optional): available for text */
    this.hasclearicon = true;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = ButtonSize.BIG;
    this.isTyping = false;
    this.passwordHidden = true;
    this.typingtimeout = 300;
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
  /** get checked status */
  async isChecked() {
    switch (this.type) {
      case InputType.CHECKBOX:
      case InputType.RADIO:
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
    if (this.type === InputType.TEXTAREA) {
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
    if (type != InputType.NUMBER) {
      return;
    }
    return {
      min: this.min,
      max: this.max,
      step: this.step,
    };
  }
  getPatternAttribute(type) {
    if (type != InputType.PASSWORD &&
      type != InputType.TEXT &&
      type != InputType.TEL &&
      type != InputType.SEARCH &&
      type != InputType.URL &&
      type != InputType.EMAIL) {
      return;
    }
    return {
      pattern: this.pattern,
    };
  }
  renderInputText(type = InputType.TEXT) {
    const ariaLabel = this.ariaLabel ? { "aria-label": this.ariaLabel } : {};
    const attr = Object.assign(Object.assign(Object.assign(Object.assign({}, this.getTextAttributes()), this.getNumberAttributes(type)), this.getPatternAttribute(type)), ariaLabel);
    if (this.icon || type === InputType.PASSWORD) {
      Object.assign(attr.class, { "has-icon": true });
    }
    if (this.hasclearicon && type != InputType.NUMBER) {
      Object.assign(attr.class, { "has-clear-icon": true });
    }
    return (h("div", { class: "text-wrapper" }, this.renderLabel(), h("div", null, h("input", Object.assign({ type: type === InputType.PASSWORD && !this.passwordHidden ? InputType.TEXT : type }, attr)), this.renderIcons()), this.renderMessage()));
  }
  renderLabel() {
    if (!this.label) {
      return;
    }
    return (h("label", { class: "input-label body-5-sb", id: `${this.htmlid}_label`, htmlFor: this.htmlid }, this.label));
  }
  renderIcons() {
    return (h("span", { class: "icons-wrapper" }, this.renderResetIcon(), this.renderIcon()));
  }
  renderIcon() {
    if (this.type === InputType.PASSWORD) {
      return this.renderShowHidePassword();
    }
    if (!this.icon) {
      return;
    }
    return (h("button", { type: "button", class: "icon-button input-icon", tabIndex: -1 }, h("z-icon", { name: this.icon, class: this.size })));
  }
  renderResetIcon() {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly || this.type == InputType.NUMBER) {
      return;
    }
    return (h("button", { type: "button", class: "icon-button reset-icon", "aria-label": "cancella il contenuto dell'input", onClick: () => this.emitInputChange("") }, h("z-icon", { name: "multiply", class: this.size })));
  }
  renderShowHidePassword() {
    return (h("button", { type: "button", class: "icon-button toggle-password-icon", disabled: this.disabled, "aria-label": this.passwordHidden ? "mostra password" : "nascondi password", onClick: () => (this.passwordHidden = !this.passwordHidden) }, h("z-icon", { name: this.passwordHidden ? "view-filled" : "view-off-filled", class: this.size })));
  }
  renderMessage() {
    if (boolean(this.message) === false) {
      return;
    }
    return (h("z-input-message", { message: boolean(this.message) === true ? undefined : this.message, status: this.status, class: this.size }));
  }
  /* END text/password/email/number */
  /* START textarea */
  renderTextarea() {
    const attributes = this.getTextAttributes();
    const ariaLabel = this.ariaLabel ? { "aria-label": this.ariaLabel } : {};
    return (h("div", { class: "text-wrapper" }, this.renderLabel(), h("div", { class: Object.assign(Object.assign({}, attributes.class), { "textarea-wrapper": true, "readonly": attributes.readonly }) }, h("textarea", Object.assign({}, attributes, ariaLabel))), this.renderMessage()));
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
        "after": this.labelPosition === LabelPosition.RIGHT,
        "before": this.labelPosition === LabelPosition.LEFT,
      } }, h("z-icon", { name: this.checked ? "checkbox-checked" : "checkbox", "aria-hidden": "true", class: this.size }), this.label && h("span", { innerHTML: this.label }))));
  }
  /* END checkbox */
  /* START radio */
  renderRadio() {
    return (h("div", { class: "radio-wrapper" }, h("input", { id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, onChange: this.handleCheck.bind(this), value: this.value }), h("label", { htmlFor: this.htmlid, class: {
        "radio-label": true,
        "after": this.labelPosition === LabelPosition.RIGHT,
        "before": this.labelPosition === LabelPosition.LEFT,
      } }, h("z-icon", { name: this.checked ? "radio-button-checked" : "radio-button", "aria-hidden": "true", class: this.size }), this.label && h("span", { innerHTML: this.label }))));
  }
  /* END radio */
  render() {
    let input;
    switch (this.type) {
      case InputType.TEXTAREA:
        input = this.renderTextarea();
        break;
      case InputType.CHECKBOX:
        input = this.renderCheckbox();
        break;
      case InputType.RADIO:
        input = this.renderRadio();
        break;
      default:
        input = this.renderInputText(this.type);
    }
    return h(Host, null, input);
  }
  get hostElement() { return getElement(this); }
};
ZInput.style = stylesCss$1;

const stylesCss = ":host{display:flex;min-height:calc(var(--space-unit) * 2.5);align-items:start;margin-top:var(--space-unit);color:var(--color-text05);fill:currentcolor;font-family:var(--font-family-sans);font-size:var(--font-size-2);letter-spacing:0.16px}:host(.small),:host(.x-small){margin-top:calc(var(--space-unit) * 0.5);font-size:var(--font-size-1)}:host([status=\"success\"]){color:var(--color-text-success)}:host([status=\"error\"]){color:var(--color-text-error)}:host([status=\"warning\"]){color:var(--color-warning02)}:host(:focus){outline:none}:host>z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);--z-icon-right-margin:var(--space-unit);margin-top:calc(var(--space-unit) * 0.25)}:host(.small)>z-icon,:host(.x-small)>z-icon{--z-icon-width:14px;--z-icon-height:14px;--z-icon-right-margin:calc(var(--space-unit) * 0.5)}";

const ZInputMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.statusIcons = {
      success: "checkmark-circle",
      error: "multiply-circled",
      warning: "exclamation-circle",
    };
    this.statusRole = {};
  }
  onMessageChange() {
    this.statusRole = this.message && this.status ? { role: "alert" } : {};
  }
  componentWillLoad() {
    this.onMessageChange();
  }
  render() {
    return (h(Host, Object.assign({}, this.statusRole, { "aria-label": this.message }), this.statusIcons[this.status] && this.message && h("z-icon", { name: this.statusIcons[this.status] }), h("span", { innerHTML: this.message })));
  }
  static get watchers() { return {
    "message": ["onMessageChange"],
    "status": ["onMessageChange"]
  }; }
};
ZInputMessage.style = stylesCss;

export { ZInput as z_input, ZInputMessage as z_input_message };
