'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-155b2ec5.js');
const utils = require('./utils-4bbd782c.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss$4 = "button.container{min-height:32px;line-height:32px;border:var(--border-size-small) solid var(--bg-grey-200);border-radius:16px;box-shadow:0px 2px 5px 0px var(--bg-neutral-300);-webkit-box-shadow:0px 2px 5px 0px var(--bg-neutral-300);-moz-box-shadow:0px 2px 5px 0px var(--bg-neutral-300);text-align:center;padding:0 calc(var(--space-unit) * 2);cursor:pointer;letter-spacing:0.17px;font-family:var(--dashboard-font);font-size:12px;font-weight:var(--font-sb);opacity:1;transition:all 200ms linear}button.container.small{min-height:24px;line-height:24px}button.container:focus{outline:0}button.container::-moz-focus-inner{border:0}.text-container{margin-left:4px}button.container,button.container:focus,button.container:hover{background-color:var(--bg-white);color:var(--text-grey-700);fill:var(--text-grey-700)}button.container.isactive{background-color:var(--bg-white);color:var(--myz-blue);fill:var(--myz-blue)}button.container.isactive:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button.container.isactive:focus{background-color:var(--myz-blue-dark);border-color:var(--myz-blue-dark);box-shadow:0px 0px 4px 0px var(--text-grey-800);color:var(--bg-white);fill:var(--bg-white)}button z-icon{display:inline-block}";

const ZButtonFilter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.removefilter = index.createEvent(this, "removefilter", 7);
    /** disable action on button */
    this.isfixed = false;
    /** add icon to button */
    this.hasicon = true;
    /** reduce button size (optional) */
    this.issmall = false;
    this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
  }
  handleRemovingFilterClick() {
    this.removefilter.emit({
      filterid: this.filterid,
    });
  }
  renderFixedPillow(filtername) {
    return (index.h("button", { class: `container ${this.issmall ? "small" : ""}` }, this.renderIcon(), this.renderContent(filtername)));
  }
  renderDynamicPillow(filtername) {
    return (index.h("button", { class: `container isactive ${this.issmall ? "small" : ""}`, onClick: this.handleRemovingFilterClick }, this.renderIcon(), this.renderContent(filtername)));
  }
  renderIcon() {
    if (!this.hasicon)
      return null;
    return (index.h("z-icon", { class: "close-icon-container", name: "multiply", height: 12, width: 12 }));
  }
  renderContent(filtername) {
    return index.h("span", { class: "text-container" }, filtername);
  }
  render() {
    if (this.isfixed) {
      return this.renderFixedPillow(this.filtername);
    }
    return this.renderDynamicPillow(this.filtername);
  }
};
ZButtonFilter.style = stylesCss$4;

const stylesCss$3 = ".sc-z-input-h{display:inline-block;width:inherit}input.sc-z-input::-ms-clear,input.sc-z-input::-ms-reveal{display:none}.sc-z-input-h input.sc-z-input::-ms-clear,.sc-z-input-h input.sc-z-input::-ms-reveal{display:none}input.sc-z-input,textarea.sc-z-input,.textareaWrapper.sc-z-input,ul[role=\"listbox\"].sc-z-input{background:var(--color-input-field01);border-radius:var(--border-radius-small);border:var(--border-size-small) solid var(--color-surface04);box-sizing:border-box;color:var(--color-text02);fill:var(--color-icon02);font-family:var(--font-family-sans);font-weight:var(--font-rg);font-size:var(--font-size-3);outline:none}input.sc-z-input:focus:focus-visible,li[role=\"option\"].sc-z-input:focus:focus-visible,.focus.sc-z-input{box-shadow:var(--shadow-focus-primary)}.filled.sc-z-input{border-color:var(--color-surface05)}.istyping.sc-z-input,.focus.istyping.sc-z-input,.input_selecting.sc-z-input{border-color:var(--color-primary01);color:var(--color-primary01)}.input_success.sc-z-input,.input_success.sc-z-input:hover,.input_success.hover.sc-z-input{background:var(--color-success-inverse);border-color:var(--color-success01);fill:var(--color-success01)}.input_error.sc-z-input,.input_error.sc-z-input:hover,.input_error.hover.sc-z-input{background:var(--color-error-inverse);border-color:var(--color-error01);fill:var(--color-error01)}.input_warning.sc-z-input,.input_warning.sc-z-input:hover,.input_warning.hover.sc-z-input{background:var(--color-warning-inverse);border-color:var(--color-warning01);fill:var(--color-warning01)}input[readonly].sc-z-input,.readonly.sc-z-input{border-color:var(--color-disabled01);fill:var(--color-disabled01);pointer-events:none}input.sc-z-input:disabled,.disabled.sc-z-input,.filled.sc-z-input:disabled{border-color:var(--color-disabled01);color:var(--color-disabled02);fill:var(--color-disabled01);pointer-events:none;box-shadow:none}input.sc-z-input::placeholder,textarea.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input::-webkit-input-placeholder,.sc-z-input::-webkit-textarea-placeholder{color:var(--color-text05)}.sc-z-input:-ms-input-placeholder,.sc-z-input:-ms-textarea-placeholder{color:var(--color-text05)}.sc-z-input::-moz-placeholder{color:var(--color-text05)}.sc-z-input:-moz-placeholder{color:var(--color-text05)}.textWrapper.sc-z-input>div.sc-z-input{fill:var(--color-icon02)}.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input{width:100%;height:calc(var(--space-unit) * 5.5);margin:0;padding:0 calc(var(--space-unit) * 4.5) 0 calc(var(--space-unit) * 1.5);box-sizing:border-box}.textWrapper.sc-z-input>div.sc-z-input>input.hasIcon.sc-z-input,.textWrapper.sc-z-input>div.sc-z-input>input.hasClearIcon.sc-z-input{padding-right:calc(var(--space-unit) * 4)}.textWrapper.sc-z-input>div.sc-z-input>input.hasIcon.hasClearIcon.sc-z-input{padding-right:calc(var(--space-unit) * 7)}.textWrapper.sc-z-input>div.sc-z-input{position:relative;z-index:1}.textWrapper.sc-z-input .iconsWrapper.sc-z-input{position:absolute;bottom:calc(var(--space-unit) * 1.5);right:calc(var(--space-unit) * 1.5);display:flex;z-index:2}.textWrapper.sc-z-input .iconsWrapper.sc-z-input>z-icon.sc-z-input{--z-icon-width:18px;--z-icon-height:18px;display:block;margin-left:calc(var(--space-unit) * 0.5)}.textWrapper.sc-z-input .iconsWrapper.sc-z-input>z-icon.resetIcon.sc-z-input,.textWrapper.sc-z-input .iconsWrapper.sc-z-input>z-icon.showHidePasswordIcon.sc-z-input{cursor:pointer}.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill,.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:hover,.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:focus,.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:active{-webkit-background-clip:text !important}.textareaWrapper.sc-z-input{padding:calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}textarea.sc-z-input::-webkit-scrollbar{background:linear-gradient(\n    to right,\n    transparent 0 3px,\n    var(--gray200) 3px 7px,\n    transparent 7px 10px\n  );width:10px;border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-track{background-color:transparent}textarea.sc-z-input::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}textarea.sc-z-input{min-height:132px;width:100%;margin:0;padding:0;border:none;resize:none}.radioWrapper.sc-z-input,.checkboxWrapper.sc-z-input{display:inline-flex;flex-direction:row;align-items:center;font-family:var(--font-family-sans);position:relative;color:var(--color-text01);fill:var(--color-primary01)}.radioWrapper.sc-z-input:hover,.checkboxWrapper.sc-z-input:hover{color:var(--color-hover-primary);fill:currentColor}.radioWrapper.sc-z-input>input.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input{position:absolute;opacity:0;z-index:-1;pointer-events:none}.radioWrapper.sc-z-input .radioLabel.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.sc-z-input{display:inline-flex;align-items:center;margin:0;line-height:1;color:inherit;font-family:inherit;font-weight:inherit;font-size:inherit;text-transform:inherit}.radioWrapper.sc-z-input input.sc-z-input:not(:disabled)+.radioLabel.sc-z-input,.checkboxWrapper.sc-z-input input.sc-z-input:not(:disabled)+.checkboxLabel.sc-z-input{cursor:pointer}.radioWrapper.sc-z-input .radioLabel.sc-z-input z-icon.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.sc-z-input z-icon.sc-z-input{fill:inherit;cursor:pointer}.radioWrapper.sc-z-input .radioLabel.after.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.after.sc-z-input{flex-direction:row}.radioWrapper.sc-z-input .radioLabel.before.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.before.sc-z-input{flex-direction:row-reverse}.radioWrapper.sc-z-input .radioLabel.after.sc-z-input>span.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.after.sc-z-input>span.sc-z-input{margin-left:var(--space-unit)}.radioWrapper.sc-z-input .radioLabel.before.sc-z-input>span.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.before.sc-z-input>span.sc-z-input{margin-right:var(--space-unit)}.radioWrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.radioLabel.sc-z-input>z-icon.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.checkboxLabel.sc-z-input>z-icon.sc-z-input{box-shadow:var(--shadow-focus-primary);border-radius:var(--border-radius-small)}.radioWrapper.sc-z-input>input.sc-z-input:disabled+.radioLabel.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input:disabled+.checkboxLabel.sc-z-input{color:var(--color-disabled02)}.radioWrapper.sc-z-input>input.sc-z-input:disabled+.radioLabel.sc-z-input>z-icon.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input:disabled+.checkboxLabel.sc-z-input>z-icon.sc-z-input{fill:var(--color-disabled01);cursor:default}";

const ZInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inputChange = index.createEvent(this, "inputChange", 7);
    this.startTyping = index.createEvent(this, "startTyping", 7);
    this.stopTyping = index.createEvent(this, "stopTyping", 7);
    this.inputCheck = index.createEvent(this, "inputCheck", 7);
    this.optionSelect = index.createEvent(this, "optionSelect", 7);
    /** the id of the input element */
    this.htmlid = `id-${utils.randomId()}`;
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
      case index$1.InputTypeEnum.radio:
        if (data.type === index$1.InputTypeEnum.radio &&
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
      case index$1.InputTypeEnum.select:
        return this.selectElem.getValue();
      default:
        return this.value;
    }
  }
  /** set the input value */
  async setValue(value) {
    switch (this.type) {
      case index$1.InputTypeEnum.select:
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
      case index$1.InputTypeEnum.checkbox:
      case index$1.InputTypeEnum.radio:
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
    if (this.type === index$1.InputTypeEnum.textarea) {
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
  renderInputText(type = index$1.InputTypeEnum.text) {
    const attr = this.getTextAttributes();
    if (this.icon || type === index$1.InputTypeEnum.password) {
      attr.class += " hasIcon";
    }
    if (this.hasclearicon) {
      attr.class += " hasClearIcon";
    }
    return (index.h("div", { class: "textWrapper" }, this.renderLabel(), index.h("div", null, index.h("input", Object.assign({ type: type === index$1.InputTypeEnum.password && !this.passwordHidden
        ? index$1.InputTypeEnum.text
        : type }, attr, { "aria-label": this.ariaLabel || this.label })), this.renderIcons()), this.renderMessage()));
  }
  renderLabel() {
    if (!this.label)
      return;
    return (index.h("z-input-label", { htmlfor: this.htmlid, value: this.label, disabled: this.disabled, "aria-label": this.label, id: `${this.htmlid}_label` }));
  }
  renderIcons() {
    return (index.h("span", { class: {
        iconsWrapper: true,
        disabled: this.disabled,
      } }, this.renderResetIcon(), this.renderIcon()));
  }
  renderIcon() {
    if (this.type === index$1.InputTypeEnum.password) {
      return this.renderShowHidePassword();
    }
    if (!this.icon)
      return;
    return index.h("z-icon", { class: "inputIcon", name: this.icon });
  }
  renderResetIcon() {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly)
      return;
    return (index.h("z-icon", { class: "resetIcon", name: "multiply", onClick: (e) => this.emitInputChange("", e.keyCode) }));
  }
  renderShowHidePassword() {
    return (index.h("z-icon", { class: "showHidePasswordIcon", name: this.passwordHidden ? "view-filled" : "view-off-filled", onClick: () => (this.passwordHidden = !this.passwordHidden) }));
  }
  renderMessage() {
    if (!this.hasmessage)
      return;
    return index.h("z-input-message", { message: this.message, status: this.status });
  }
  /* END text/password/email/number */
  /* START textarea */
  renderTextarea() {
    const attributes = this.getTextAttributes();
    return (index.h("div", { class: "textWrapper" }, this.renderLabel(), index.h("div", { class: [
        "textareaWrapper",
        attributes.class,
        attributes.disabled && "disabled",
        attributes.readonly && "readonly",
        this.isTyping && "istyping",
        this.textareaWrapperFocus,
        this.textareaWrapperHover,
      ]
        .filter(Boolean)
        .join(" ") }, index.h("textarea", Object.assign({}, attributes, { onFocus: () => (this.textareaWrapperFocus = "focus"), onBlur: () => (this.textareaWrapperFocus = ""), onMouseOver: () => (this.textareaWrapperHover = "hover"), onMouseOut: () => (this.textareaWrapperHover = ""), "aria-label": this.ariaLabel || this.label }))), this.renderMessage()));
  }
  /* END textarea */
  handleCheck(ev) {
    this.checked = ev.target.checked;
    this.emitInputCheck(this.checked);
  }
  /* START checkbox */
  renderCheckbox() {
    return (index.h("div", { class: "checkboxWrapper" }, index.h("input", { id: this.htmlid, type: "checkbox", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, required: this.required, onChange: this.handleCheck.bind(this), value: this.value }), index.h("label", { htmlFor: this.htmlid, class: {
        checkboxLabel: true,
        after: this.labelafter,
        before: !this.labelafter,
      } }, index.h("z-icon", { name: this.checked ? "checkbox-checked" : "checkbox", "aria-hidden": "true" }), this.label && index.h("span", { innerHTML: this.label }))));
  }
  /* END checkbox */
  /* START radio */
  renderRadio() {
    return (index.h("div", { class: "radioWrapper" }, index.h("input", { id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, onChange: this.handleCheck.bind(this), value: this.value }), index.h("label", { htmlFor: this.htmlid, class: {
        radioLabel: true,
        after: this.labelafter,
        before: !this.labelafter,
      } }, index.h("z-icon", { name: this.checked ? "radio-button-checked" : "radio-button", "aria-hidden": "true" }), this.label && index.h("span", { innerHTML: this.label }))));
  }
  /* END radio */
  /* START select */
  renderSelect() {
    return (index.h("z-select", { htmlid: this.htmlid, items: this.items, name: this.name, label: this.label, "aria-label": this.ariaLabel, disabled: this.disabled, readonly: this.readonly, placeholder: this.placeholder, htmltitle: this.htmltitle, status: this.status, hasmessage: this.hasmessage, message: this.message, autocomplete: this.autocomplete, multiple: this.multiple, ref: (el) => (this.selectElem = el) }));
  }
  /* END select */
  render() {
    switch (this.type) {
      case index$1.InputTypeEnum.text:
      case index$1.InputTypeEnum.password:
      case index$1.InputTypeEnum.number:
      case index$1.InputTypeEnum.email:
        return this.renderInputText(this.type);
      case index$1.InputTypeEnum.textarea:
        return this.renderTextarea();
      case index$1.InputTypeEnum.checkbox:
        return this.renderCheckbox();
      case index$1.InputTypeEnum.radio:
        return this.renderRadio();
      case index$1.InputTypeEnum.select:
        return this.renderSelect();
      default:
        return this.renderInputText();
    }
  }
  get hostElement() { return index.getElement(this); }
};
ZInput.style = stylesCss$3;

const stylesCss$2 = "label{display:block;margin:var(--space-unit) 0;color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);line-height:1.33;letter-spacing:0.32px;text-transform:uppercase;text-align:left}label.disabled{color:var(--color-disabled02)}";

const ZInputLabel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** the label is disabled */
    this.disabled = false;
  }
  render() {
    return index.h("label", { htmlFor: this.htmlfor, class: { disabled: this.disabled } }, this.value);
  }
};
ZInputLabel.style = stylesCss$2;

const stylesCss$1 = ":host{display:flex;align-items:start;min-height:calc(var(--space-unit) * 2);margin-top:var(--space-unit);color:var(--color-text05);fill:currentColor;font-family:var(--font-family-sans);font-size:var(--font-size-2);letter-spacing:0.16px}:host([status='success']){color:var(--color-text-success)}:host([status='error']){color:var(--color-text-error)}:host([status='warning']){color:var(--color-warning02)}:host(:focus){outline:none}:host>z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);margin:calc(var(--space-unit) / 3) var(--space-unit) 0 0}";

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
    return (index.h(index.Host, { role: "alert", "aria-label": this.message, tabindex: this.message ? 0 : -1 }, this.statusIcons[this.status] && this.message && (index.h("z-icon", { name: this.statusIcons[this.status] })), index.h("span", { innerHTML: this.message })));
  }
};
ZInputMessage.style = stylesCss$1;

const stylesCss = ".sc-z-select-h{display:inline-block;width:inherit}li[role=\"option\"].sc-z-select:focus:focus-visible{border-color:transparent;box-shadow:var(--shadow-focus-primary);outline:none}.selectWrapper.sc-z-select>z-input.sc-z-select{width:100%}.selectWrapper.sc-z-select>div.sc-z-select{position:relative}.selectWrapper.sc-z-select>div.closed.sc-z-select{height:0;overflow:hidden}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select{background:var(--color-surface01);position:absolute;padding:calc(var(--space-unit) * .5) var(--space-unit);border:var(--border-size-small) solid var(--gray200);border-top:none;width:100%;box-sizing:border-box;outline:none}.selectWrapper.sc-z-select .closed.sc-z-select .ulScrollWrapper.sc-z-select{z-index:10}.selectWrapper.sc-z-select .open.sc-z-select .ulScrollWrapper.sc-z-select{z-index:20}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select>ul.sc-z-select{position:relative;margin:0;padding:0;list-style:none;border:0;max-height:240px;overflow:auto;outline:none;scrollbar-color:var(--color-primary01) transparent}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select>ul.sc-z-select::-webkit-scrollbar{background:linear-gradient(\n    to right,\n    transparent 0 3px,\n    var(--gray200) 3px 7px,\n    transparent 7px 10px\n  );width:10px;border-radius:var(--border-radius)}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select>ul.sc-z-select::-webkit-scrollbar-track{background-color:transparent}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select>ul.sc-z-select::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select>ul.sc-z-select::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select ul.sc-z-select li.sc-z-select{display:flex;align-items:center;min-height:calc(var(--space-unit) * 5.5);padding:calc(var(--space-unit) * 1.5);box-sizing:border-box;border-bottom:var(--border-size-small) solid var(--gray200);text-align:left;cursor:pointer}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select ul.sc-z-select li.sc-z-select:hover{color:var(--color-hover-primary);background:var(--color-surface02)}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select ul.sc-z-select li.sc-z-select:focus:focus-visible{margin:2px}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select ul.sc-z-select li[aria-selected=\"\"].sc-z-select{font-weight:var(--font-sb)}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select ul.sc-z-select li.disabled.sc-z-select{color:var(--color-disabled02);cursor:default;pointer-events:none}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select ul.sc-z-select li.noResults.sc-z-select{color:var(--color-primary01);fill:currentColor;border:none}.selectWrapper.sc-z-select .ulScrollWrapper.sc-z-select .noResults.sc-z-select z-icon.sc-z-select{margin-right:var(--space-unit)}.selectWrapper.sc-z-select .chipsWrapper.sc-z-select{padding-bottom:var(--space-unit)}.selectWrapper.sc-z-select .chipsWrapper.sc-z-select z-button-filter.sc-z-select{display:inline-block;margin:calc(var(--space-unit) * 0.5)}";

const ZSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.optionSelect = index.createEvent(this, "optionSelect", 7);
    /** the id of the input element */
    this.htmlid = `id-${utils.randomId()}`;
    /** the input is disabled */
    this.disabled = false;
    /** the input is readonly */
    this.readonly = false;
    /** show input helper message (optional): available for text, password, number, email, textarea, select */
    this.hasmessage = true;
    /** the input has autocomplete option */
    this.autocomplete = false;
    /** multiple options can be selected */
    this.multiple = false;
    /** no result text message */
    this.noresultslabel = "Nessun risultato";
    this.isOpen = false;
    this.itemsList = [];
    this.toggleSelectUl = this.toggleSelectUl.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleSelectFocus = this.handleSelectFocus.bind(this);
  }
  watchItems() {
    this.itemsList = this.getInitialItemsArray();
    this.selectedItems = this.itemsList.filter((item) => item.selected);
  }
  /** get the input selected options */
  async getSelectedItems() {
    return this.selectedItems;
  }
  /** get the input value */
  async getValue() {
    return this.getSelectedValues();
  }
  /** set the input value */
  async setValue(value) {
    let values = [];
    if (typeof value === "string") {
      values.push(value);
    }
    else {
      values = value;
    }
    this.selectedItems = this.itemsList.filter((item) => values.includes(item.id));
  }
  emitOptionSelect() {
    this.optionSelect.emit({
      id: this.htmlid,
      selected: this.getSelectedValues(),
    });
  }
  componentWillLoad() {
    this.watchItems();
  }
  componentWillRender() {
    this.filterItems(this.searchString);
  }
  getInitialItemsArray() {
    return typeof this.items === "string" ? JSON.parse(this.items) : this.items;
  }
  mapSelectedItemsToItemsArray() {
    const initialItemsList = this.getInitialItemsArray();
    return initialItemsList.map((item) => {
      const found = this.selectedItems.find((selected) => selected.id === item.id);
      item.selected = !!found;
      return item;
    });
  }
  getSelectedValues() {
    if (this.multiple) {
      return this.selectedItems.map((item) => item.id);
    }
    if (!this.multiple && this.selectedItems.length) {
      return this.selectedItems[0].id;
    }
    return null;
  }
  filterItems(searchString) {
    const prevList = this.mapSelectedItemsToItemsArray();
    if (!(searchString === null || searchString === void 0 ? void 0 : searchString.length)) {
      this.itemsList = prevList;
    }
    else {
      this.itemsList = prevList
        .filter((item) => {
        return item.name.toUpperCase().includes(searchString.toUpperCase());
      })
        .map((item) => {
        const start = item.name
          .toUpperCase()
          .indexOf(searchString.toUpperCase());
        const end = start + searchString.length;
        const newName = item.name.substring(0, start) +
          item.name.substring(start, end).bold() +
          item.name.substring(end, item.name.length);
        item.name = newName;
        return item;
      });
    }
  }
  hasAutcomplete() {
    return (this.autocomplete === true ||
      this.autocomplete === "true" ||
      this.autocomplete === "on");
  }
  handleInputChange(e) {
    this.searchString = e.detail.value;
    if (!this.isOpen)
      this.toggleSelectUl();
  }
  selectItem(item, selected) {
    if (item && item.disabled)
      return;
    this.itemsList = this.mapSelectedItemsToItemsArray();
    this.itemsList = this.itemsList.map((i) => {
      if (!this.multiple)
        i.selected = false;
      if (i.id === (item ? item.id : null))
        i.selected = selected;
      return i;
    });
    this.selectedItems = this.itemsList.filter((item) => item.selected);
    this.emitOptionSelect();
    if (this.searchString)
      this.searchString = null;
  }
  arrowsSelectNav(e, key) {
    const arrows = [index$1.keybordKeyCodeEnum.ARROW_DOWN, index$1.keybordKeyCodeEnum.ARROW_UP];
    if (!arrows.includes(e.keyCode))
      return;
    e.preventDefault();
    e.stopPropagation();
    if (!this.isOpen)
      this.toggleSelectUl();
    let index;
    if (e.keyCode === index$1.keybordKeyCodeEnum.ARROW_DOWN) {
      index = key + 1 === this.itemsList.length ? 0 : key + 1;
    }
    else if (e.keyCode === index$1.keybordKeyCodeEnum.ARROW_UP) {
      index = key <= 0 ? this.itemsList.length - 1 : key - 1;
    }
    this.focusSelectItem(index);
  }
  focusSelectItem(index) {
    const focusElem = this.element.querySelector(`#${this.htmlid}_${index}`);
    if (focusElem)
      focusElem.focus();
  }
  toggleSelectUl(selfFocusOnClose = false) {
    if (this.disabled || this.readonly)
      return;
    if (!this.isOpen) {
      document.addEventListener("click", this.handleSelectFocus);
      document.addEventListener("keyup", this.handleSelectFocus);
    }
    else {
      document.removeEventListener("click", this.handleSelectFocus);
      document.removeEventListener("keyup", this.handleSelectFocus);
      if (selfFocusOnClose) {
        this.element
          .querySelector(`#${this.htmlid}_input`)
          .focus();
      }
    }
    this.isOpen = !this.isOpen;
  }
  handleInputClick(e) {
    const cp = e.composedPath();
    const clearIcon = cp.find((item) => item.classList && item.classList.contains("resetIcon"));
    if (clearIcon) {
      e.stopPropagation();
      return;
    }
    this.toggleSelectUl();
  }
  handleSelectFocus(e) {
    if (e instanceof KeyboardEvent && e.keyCode === index$1.keybordKeyCodeEnum.ESC) {
      e.stopPropagation();
      return this.toggleSelectUl(true);
    }
    if (e instanceof KeyboardEvent &&
      e.keyCode !== index$1.keybordKeyCodeEnum.TAB &&
      e.keyCode !== index$1.keybordKeyCodeEnum.ENTER) {
      return;
    }
    const tree = utils.getElementTree(utils.getClickedElement());
    const parent = tree.find((elem) => {
      return ((elem.nodeName.toLowerCase() === "z-input" &&
        elem.id === `${this.htmlid}_input`) ||
        (this.multiple &&
          elem.nodeName.toLowerCase() === "ul" &&
          elem.id === this.htmlid));
    });
    if (!parent) {
      this.toggleSelectUl(e instanceof MouseEvent ? true : false);
    }
  }
  scrollToLetter(letter) {
    const foundItem = this.itemsList.find((item) => item.name.charAt(0) === letter);
    if (foundItem)
      this.focusSelectItem(this.itemsList.indexOf(foundItem));
  }
  renderLabel() {
    if (!this.label)
      return;
    return (index.h("z-input-label", { htmlfor: this.htmlid, value: this.label, disabled: this.disabled, "aria-label": this.label, id: `${this.htmlid}_input_label` }));
  }
  renderInput() {
    return (index.h("z-input", { id: `${this.htmlid}_input`, htmlid: `${this.htmlid}_input`, placeholder: this.placeholder, value: !this.isOpen && !this.multiple && this.selectedItems.length
        ? this.selectedItems[0].name.replace(/<[^>]+>/g, "")
        : null, "aria-label": this.ariaLabel, icon: this.isOpen ? "caret-up" : "caret-down", hasclearicon: this.hasAutcomplete(), hasmessage: false, disabled: this.disabled, readonly: this.readonly || (!this.hasAutcomplete() && this.isOpen), status: this.isOpen ? index$1.InputStatusEnum.selecting : this.status, onClick: (e) => {
        this.handleInputClick(e);
      }, onKeyUp: (e) => {
        if (e.keyCode !== 13)
          e.preventDefault();
        utils.handleKeyboardSubmit(e, this.toggleSelectUl);
      }, onKeyDown: (e) => {
        return this.arrowsSelectNav(e, this.selectedItems.length
          ? this.itemsList.indexOf(this.selectedItems[0])
          : -1);
      }, onInputChange: (e) => {
        this.handleInputChange(e);
      }, onKeyPress: (e) => {
        if (!this.hasAutcomplete()) {
          e.preventDefault();
          this.scrollToLetter(String.fromCharCode(e.keyCode));
        }
      } }));
  }
  renderChips() {
    if (!this.multiple || !this.selectedItems.length)
      return;
    return (index.h("div", { class: `chipsWrapper ${this.isOpen ? "open" : ""}` }, this.selectedItems.map((item) => (index.h("z-button-filter", { filterid: item.id, filtername: item.name.replace(/<[^>]+>/g, ""), issmall: true, onRemovefilter: () => this.selectItem(item, false) })))));
  }
  renderSelectUl() {
    return (index.h("div", { class: this.isOpen ? "open" : "closed", tabindex: "-1" }, index.h("div", { class: "ulScrollWrapper", tabindex: "-1" }, index.h("ul", { role: "listbox", tabindex: this.disabled || this.readonly || !this.isOpen ? -1 : 0, id: this.htmlid, "aria-activedescendant": !this.multiple && this.selectedItems.length
        ? this.selectedItems[0].id
        : null, "aria-multiselectable": !!this.multiple, class: `
              ${this.disabled ? " disabled" : ""}
              ${this.readonly ? " readonly" : ""}
              ${!this.isOpen && this.status
        ? " input_" + this.status
        : " input_default"}
              ${this.selectedItems.length ? " filled" : ""}
            ` }, this.renderSelectUlItems()))));
  }
  renderSelectUlItems() {
    if (!this.itemsList.length)
      return this.renderNoSearchResults();
    return this.itemsList.map((item, key) => {
      return (index.h("li", { role: "option", tabindex: item.disabled || !this.isOpen ? -1 : 0, "aria-selected": !!item.selected, class: item.disabled && "disabled", id: `${this.htmlid}_${key}`, onClick: () => this.selectItem(item, true), onKeyUp: (e) => utils.handleKeyboardSubmit(e, this.selectItem, item, true), onKeyDown: (e) => this.arrowsSelectNav(e, key) }, index.h("span", { innerHTML: item.name })));
    });
  }
  renderNoSearchResults() {
    return (index.h("li", { class: "noResults" }, index.h("z-icon", { name: "multiply-circle" }), this.noresultslabel));
  }
  renderMessage() {
    if (!this.hasmessage)
      return;
    return index.h("z-input-message", { message: this.message, status: this.status });
  }
  render() {
    return (index.h("div", { class: "selectWrapper" }, this.renderLabel(), this.renderChips(), this.renderInput(), this.renderSelectUl(), this.renderMessage()));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "items": ["watchItems"]
  }; }
};
ZSelect.style = stylesCss;

exports.z_button_filter = ZButtonFilter;
exports.z_input = ZInput;
exports.z_input_label = ZInputLabel;
exports.z_input_message = ZInputMessage;
exports.z_select = ZSelect;
