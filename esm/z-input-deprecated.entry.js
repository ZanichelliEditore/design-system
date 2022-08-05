import { r as registerInstance, c as createEvent, h, g as getElement } from './index-90e18641.js';
import { I as InputTypeEnum } from './index-c1ce8cab.js';
import { r as randomId } from './utils-99c70c57.js';
import './breakpoints-c386984e.js';

const stylesCss = ".sc-z-input-deprecated-h{display:inline-block;width:inherit}input.sc-z-input-deprecated::-ms-clear,input.sc-z-input-deprecated::-ms-reveal{display:none}.sc-z-input-deprecated-h input.sc-z-input-deprecated::-ms-clear,.sc-z-input-deprecated-h input.sc-z-input-deprecated::-ms-reveal{display:none}input.sc-z-input-deprecated,textarea.sc-z-input-deprecated,.textareaWrapper.sc-z-input-deprecated,ul[role=\"listbox\"].sc-z-input-deprecated{background:var(--color-input-field01);border-radius:var(--border-radius-small);border:var(--border-size-small) solid var(--color-surface04);box-sizing:border-box;color:var(--color-text02);fill:var(--color-icon02);font-family:var(--font-family-sans);font-weight:var(--font-rg);font-size:var(--font-size-3);outline:none}input.sc-z-input-deprecated:focus:focus-visible,li[role=\"option\"].sc-z-input-deprecated:focus:focus-visible,.focus.sc-z-input-deprecated{box-shadow:var(--shadow-focus-primary)}.filled.sc-z-input-deprecated{border-color:var(--color-surface05)}.input_success.sc-z-input-deprecated,.input_success.sc-z-input-deprecated:hover,.input_success.hover.sc-z-input-deprecated{background:var(--color-success-inverse);border-color:var(--color-success01);fill:var(--color-success01)}.input_error.sc-z-input-deprecated,.input_error.sc-z-input-deprecated:hover,.input_error.hover.sc-z-input-deprecated{background:var(--color-error-inverse);border-color:var(--color-error01);fill:var(--color-error01)}.input_warning.sc-z-input-deprecated,.input_warning.sc-z-input-deprecated:hover,.input_warning.hover.sc-z-input-deprecated{background:var(--color-warning-inverse);border-color:var(--color-warning01);fill:var(--color-warning01)}input[readonly].sc-z-input-deprecated,.readonly.sc-z-input-deprecated{border-color:var(--color-disabled01);fill:var(--color-disabled01);pointer-events:none}input.sc-z-input-deprecated:disabled,.disabled.sc-z-input-deprecated,.filled.sc-z-input-deprecated:disabled{border-color:var(--color-disabled01);color:var(--color-disabled02);fill:var(--color-disabled01);pointer-events:none;box-shadow:none}input.sc-z-input-deprecated::placeholder,textarea.sc-z-input-deprecated::placeholder{color:var(--color-text05)}.sc-z-input-deprecated::-webkit-input-placeholder,.sc-z-input-deprecated::-webkit-textarea-placeholder{color:var(--color-text05)}.sc-z-input-deprecated:-ms-input-placeholder,.sc-z-input-deprecated:-ms-textarea-placeholder{color:var(--color-text05)}.sc-z-input-deprecated::-moz-placeholder{color:var(--color-text05)}.sc-z-input-deprecated:-moz-placeholder{color:var(--color-text05)}.textWrapper.sc-z-input-deprecated>div.sc-z-input-deprecated{fill:var(--color-icon02)}.textWrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.sc-z-input-deprecated{width:100%;height:calc(var(--space-unit) * 5.5);margin:0;padding:0 calc(var(--space-unit) * 4.5) 0 calc(var(--space-unit) * 1.5);box-sizing:border-box}.textWrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.hasIcon.sc-z-input-deprecated,.textWrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.hasClearIcon.sc-z-input-deprecated{padding-right:calc(var(--space-unit) * 4)}.textWrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.hasIcon.hasClearIcon.sc-z-input-deprecated{padding-right:calc(var(--space-unit) * 7)}.textWrapper.sc-z-input-deprecated>div.sc-z-input-deprecated{position:relative;z-index:1}.textWrapper.sc-z-input-deprecated .iconsWrapper.sc-z-input-deprecated{position:absolute;bottom:calc(var(--space-unit) * 1.5);right:calc(var(--space-unit) * 1.5);display:flex;z-index:2}.textWrapper.sc-z-input-deprecated .iconsWrapper.sc-z-input-deprecated>z-icon.sc-z-input-deprecated{--z-icon-width:18px;--z-icon-height:18px;display:block;margin-left:calc(var(--space-unit) * 0.5)}.textWrapper.sc-z-input-deprecated .iconsWrapper.sc-z-input-deprecated>z-icon.resetIcon.sc-z-input-deprecated,.textWrapper.sc-z-input-deprecated .iconsWrapper.sc-z-input-deprecated>z-icon.showHidePasswordIcon.sc-z-input-deprecated{cursor:pointer}.textWrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.sc-z-input-deprecated:-webkit-autofill,.textWrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.sc-z-input-deprecated:-webkit-autofill:hover,.textWrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.sc-z-input-deprecated:-webkit-autofill:focus,.textWrapper.sc-z-input-deprecated>div.sc-z-input-deprecated>input.sc-z-input-deprecated:-webkit-autofill:active{-webkit-background-clip:text !important}.textareaWrapper.sc-z-input-deprecated{padding:calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}textarea.sc-z-input-deprecated::-webkit-scrollbar{background:linear-gradient(\n    to right,\n    transparent 0 3px,\n    var(--gray200) 3px 7px,\n    transparent 7px 10px\n  );width:10px;border-radius:var(--border-radius)}textarea.sc-z-input-deprecated::-webkit-scrollbar-track{background-color:transparent}textarea.sc-z-input-deprecated::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}textarea.sc-z-input-deprecated::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}textarea.sc-z-input-deprecated{min-height:132px;width:100%;margin:0;padding:0;border:none;resize:none}.radioWrapper.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated{display:inline-flex;flex-direction:row;align-items:center;font-family:var(--font-family-sans);position:relative;color:var(--color-text01);fill:var(--color-primary01)}.radioWrapper.sc-z-input-deprecated:hover,.checkboxWrapper.sc-z-input-deprecated:hover{color:var(--color-hover-primary);fill:currentColor}.radioWrapper.sc-z-input-deprecated>input.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated>input.sc-z-input-deprecated{position:absolute;opacity:0;z-index:-1;pointer-events:none}.radioWrapper.sc-z-input-deprecated .radioLabel.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated .checkboxLabel.sc-z-input-deprecated{display:inline-flex;align-items:center;margin:0;line-height:1;color:inherit;font-family:inherit;font-weight:inherit;font-size:inherit;text-transform:inherit}.radioWrapper.sc-z-input-deprecated input.sc-z-input-deprecated:not(:disabled)+.radioLabel.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated input.sc-z-input-deprecated:not(:disabled)+.checkboxLabel.sc-z-input-deprecated{cursor:pointer}.radioWrapper.sc-z-input-deprecated .radioLabel.sc-z-input-deprecated z-icon.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated .checkboxLabel.sc-z-input-deprecated z-icon.sc-z-input-deprecated{fill:inherit;cursor:pointer}.radioWrapper.sc-z-input-deprecated .radioLabel.after.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated .checkboxLabel.after.sc-z-input-deprecated{flex-direction:row}.radioWrapper.sc-z-input-deprecated .radioLabel.before.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated .checkboxLabel.before.sc-z-input-deprecated{flex-direction:row-reverse}.radioWrapper.sc-z-input-deprecated .radioLabel.after.sc-z-input-deprecated>span.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated .checkboxLabel.after.sc-z-input-deprecated>span.sc-z-input-deprecated{margin-left:var(--space-unit)}.radioWrapper.sc-z-input-deprecated .radioLabel.before.sc-z-input-deprecated>span.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated .checkboxLabel.before.sc-z-input-deprecated>span.sc-z-input-deprecated{margin-right:var(--space-unit)}.radioWrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:focus:focus-visible+.radioLabel.sc-z-input-deprecated>z-icon.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:focus:focus-visible+.checkboxLabel.sc-z-input-deprecated>z-icon.sc-z-input-deprecated{box-shadow:var(--shadow-focus-primary);border-radius:var(--border-radius-small)}.radioWrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:disabled+.radioLabel.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:disabled+.checkboxLabel.sc-z-input-deprecated{color:var(--color-disabled02)}.radioWrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:disabled+.radioLabel.sc-z-input-deprecated>z-icon.sc-z-input-deprecated,.checkboxWrapper.sc-z-input-deprecated>input.sc-z-input-deprecated:disabled+.checkboxLabel.sc-z-input-deprecated>z-icon.sc-z-input-deprecated{fill:var(--color-disabled01);cursor:default}";

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
        if (typeof value === "string")
          this.value = value;
        break;
    }
  }
  /** get checked status */
  async isChecked() {
    switch (this.type) {
      case InputTypeEnum.checkbox:
      case InputTypeEnum.radio:
        return this.checked;
      default:
        return false;
    }
  }
  emitInputChange(value, keycode) {
    if (!this.isTyping) {
      this.emitStartTyping();
    }
    let validity = {};
    if (this.type === InputTypeEnum.textarea) {
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
      class: [
        `input_${this.status || "default"}`,
        this.isTyping && "istyping",
        !this.isTyping && this.value && "filled",
      ]
        .filter(Boolean)
        .join(" "),
      onInput: (e) => this.emitInputChange(e.target.value, e.keyCode),
    };
    if (this.autocomplete) {
      attr["autocomplete"] = this.autocomplete;
    }
    return attr;
  }
  renderInputText(type = InputTypeEnum.text) {
    const attr = this.getTextAttributes();
    if (this.icon || type === InputTypeEnum.password) {
      attr.class += " hasIcon";
    }
    if (this.hasclearicon) {
      attr.class += " hasClearIcon";
    }
    return (h("div", { class: "textWrapper" }, this.renderLabel(), h("div", null, h("input", Object.assign({ type: type === InputTypeEnum.password && !this.passwordHidden
        ? InputTypeEnum.text
        : type }, attr, { "aria-label": this.ariaLabel || this.label })), this.renderIcons()), this.renderMessage()));
  }
  renderLabel() {
    if (!this.label)
      return;
    return (h("z-input-label", { htmlfor: this.htmlid, value: this.label, disabled: this.disabled, "aria-label": this.label, id: `${this.htmlid}_label` }));
  }
  renderIcons() {
    return (h("span", { class: {
        iconsWrapper: true,
        disabled: this.disabled,
      } }, this.renderResetIcon(), this.renderIcon()));
  }
  renderIcon() {
    if (this.type === InputTypeEnum.password) {
      return this.renderShowHidePassword();
    }
    if (!this.icon)
      return;
    return h("z-icon", { class: "inputIcon", name: this.icon });
  }
  renderResetIcon() {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly)
      return;
    return (h("z-icon", { class: "resetIcon", name: "multiply", onClick: (e) => this.emitInputChange("", e.keyCode) }));
  }
  renderShowHidePassword() {
    return (h("z-icon", { class: "showHidePasswordIcon", name: this.passwordHidden ? "view-filled" : "view-off-filled", onClick: () => (this.passwordHidden = !this.passwordHidden) }));
  }
  renderMessage() {
    if (!this.hasmessage)
      return;
    return h("z-input-message", { message: this.message, status: this.status });
  }
  /* END text/password/email/number */
  /* START textarea */
  renderTextarea() {
    const attributes = this.getTextAttributes();
    return (h("div", { class: "textWrapper" }, this.renderLabel(), h("div", { class: [
        "textareaWrapper",
        attributes.class,
        attributes.disabled && "disabled",
        attributes.readonly && "readonly",
        this.isTyping && "istyping",
        this.textareaWrapperFocus,
        this.textareaWrapperHover,
      ]
        .filter(Boolean)
        .join(" ") }, h("textarea", Object.assign({}, attributes, { onFocus: () => (this.textareaWrapperFocus = "focus"), onBlur: () => (this.textareaWrapperFocus = ""), onMouseOver: () => (this.textareaWrapperHover = "hover"), onMouseOut: () => (this.textareaWrapperHover = ""), "aria-label": this.ariaLabel || this.label }))), this.renderMessage()));
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
        after: this.labelafter,
        before: !this.labelafter,
      } }, h("z-icon", { name: this.checked ? "checkbox-checked" : "checkbox", "aria-hidden": "true" }), this.label && h("span", { innerHTML: this.label }))));
  }
  /* END checkbox */
  /* START radio */
  renderRadio() {
    return (h("div", { class: "radioWrapper" }, h("input", { id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, onChange: this.handleCheck.bind(this), value: this.value }), h("label", { htmlFor: this.htmlid, class: {
        radioLabel: true,
        after: this.labelafter,
        before: !this.labelafter,
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
      case InputTypeEnum.text:
      case InputTypeEnum.password:
      case InputTypeEnum.number:
      case InputTypeEnum.email:
        return this.renderInputText(this.type);
      case InputTypeEnum.textarea:
        return this.renderTextarea();
      case InputTypeEnum.checkbox:
        return this.renderCheckbox();
      case InputTypeEnum.radio:
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
