'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-199cd650.js');
const breakpoints = require('./breakpoints-88c4fd6c.js');
const icons = require('./icons-460f0f1e.js');
const utils = require('./utils-ce225fb3.js');
const utils$1 = require('./utils-ebe45309.js');
require('./_commonjsHelpers-537d719a.js');

const stylesCss$8 = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}button{display:flex;align-content:center;justify-content:center;padding:0;border:none;background-color:transparent}button>z-icon{color:var(--bg-white);fill:currentcolor}button>z-icon.light{color:var(--bg-grey-900);fill:currentcolor}";

const ZAppSwitcher = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.appButtonClick = index.createEvent(this, "appButtonClick", 7);
    /** theme variant, default 'dark' */
    this.theme = index$1.ThemeVariant.DARK;
    this.isopen = false;
    this.emitAppButtonClick = this.emitAppButtonClick.bind(this);
  }
  emitAppButtonClick() {
    this.isopen = !this.isopen;
    this.appButtonClick.emit({ isopen: this.isopen });
  }
  render() {
    return (index.h("button", { title: "app-switcher", onClick: () => this.emitAppButtonClick() }, index.h("z-icon", { name: "app-switcher", class: this.theme })));
  }
};
ZAppSwitcher.style = stylesCss$8;

const stylesCss$7 = ":host{position:sticky;z-index:99;top:0;display:block;height:calc(var(--space-unit) * 6);box-sizing:border-box;padding:calc(var(--space-unit) / 2) calc(var(--space-unit) * 2);background-color:var(--gray900);border-radius:var(--border-no-radius)}:host(.light){background-color:var(--color-white)}:host>div{display:flex;align-items:center;justify-content:space-between}:host(.limited-width) #content-container{--mw:none;max-width:var(--mw);margin:auto}.content-panel{display:flex;align-items:center}.content-panel>:not(:last-child){margin-right:calc(var(--space-unit) * 2)}#divider-container{display:none}z-link{font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.3px;line-height:20px}@media only screen and (min-width: 768px){:host{padding:var(--space-unit) calc(var(--space-unit) * 2) var(--space-unit) var(--space-unit)}:host(.limited-width){padding:var(--space-unit)}#divider-container{display:block;height:calc(var(--space-unit) * 3)}}";

const ZAppTopbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** theme variant, default 'dark' */
    this.theme = index$1.ThemeVariant.DARK;
    this.topbarLinks = [];
  }
  handleResize() {
    this.isMobile = window.innerWidth <= breakpoints.mobileBreakpoint;
  }
  componentWillLoad() {
    this.isMobile = window.screen.width <= breakpoints.mobileBreakpoint || window.innerWidth <= breakpoints.mobileBreakpoint;
  }
  componentWillRender() {
    if (this.topbarContent) {
      this.topbarLinks = typeof this.topbarContent === "string" ? JSON.parse(this.topbarContent) : this.topbarContent;
    }
  }
  renderTopbarLinks() {
    return this.topbarLinks.map((link) => (index.h("z-link", { htmlid: link.id, textcolor: this.theme === index$1.ThemeVariant.LIGHT ? "black" : "white", href: link.link, target: link.target, icon: this.isMobile ? link.icon : undefined }, !this.isMobile && link.label)));
  }
  render() {
    return (index.h(index.Host, { class: {
        [this.theme]: true,
        "limited-width": !!this.contentMaxWidth,
      } }, index.h("div", { id: "content-container", style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} }, index.h("div", { id: "left-panel", class: "content-panel" }, index.h("z-logo", { mobileLogo: this.isMobile, width: this.isMobile ? 32 : 128, height: this.isMobile ? 40 : 32, imageAlt: "zanichelli-logo", link: this.logoLink, targetBlank: true }), this.isMobile && this.renderTopbarLinks()), index.h("div", { id: "right-panel", class: "content-panel" }, !this.isMobile && this.renderTopbarLinks(), this.showAppSwitcher && index.h("z-app-switcher", { theme: this.theme }), index.h("div", { id: "divider-container" }, index.h("z-divider", { orientation: index$1.DividerOrientation.VERTICAL, color: this.theme === index$1.ThemeVariant.LIGHT ? "gray800" : "color-white" })), index.h("slot", { name: "login" })))));
  }
};
ZAppTopbar.style = stylesCss$7;

const stylesCss$6 = ".sc-z-divider-h{display:block;padding:0;margin:0}.divider-horizontal.sc-z-divider-h{width:100%}.divider-vertical.sc-z-divider-h{height:100%}.divider-small.divider-horizontal.sc-z-divider-h{height:var(--border-size-small)}.divider-medium.divider-horizontal.sc-z-divider-h{height:var(--border-size-medium)}.divider-large.divider-horizontal.sc-z-divider-h{height:var(--border-size-large)}.divider-small.divider-vertical.sc-z-divider-h{width:var(--border-size-small)}.divider-medium.divider-vertical.sc-z-divider-h{width:var(--border-size-medium)}.divider-large.divider-vertical.sc-z-divider-h{width:var(--border-size-large)}";

const ZDivider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** [optional] Divider size */
    this.size = index$1.DividerSize.SMALL;
    /** [optional] Divider color */
    this.color = "gray200";
    /** [optional] Divider orintation */
    this.orientation = index$1.DividerOrientation.HORIZONTAL;
  }
  render() {
    return (index.h(index.Host, { class: `divider-${this.size} divider-${this.orientation}`, style: { backgroundColor: `var(--${this.color})` } }));
  }
};
ZDivider.style = stylesCss$6;

const stylesCss$5 = ":host{margin-right:var(--z-icon-right-margin, 0);margin-left:var(--z-icon-left-margin, 0);line-height:0;vertical-align:middle}:host svg:not([width]){width:var(--z-icon-width, 18px)}:host svg:not([height]){height:var(--z-icon-height, 18px)}";

const ZIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  selectPathOrPolygon(iconValue) {
    if (iconValue === null || iconValue === void 0 ? void 0 : iconValue.startsWith("M")) {
      return index.h("path", { d: icons.ICONS[this.name] });
    }
    return index.h("polygon", { points: icons.ICONS[this.name] });
  }
  render() {
    return (index.h("svg", { viewBox: "0 0 1000 1000", width: this.width, height: this.height, id: this.iconid, fill: this.fill ? `var(--${this.fill})` : "" }, this.selectPathOrPolygon(icons.ICONS[this.name])));
  }
};
ZIcon.style = stylesCss$5;

const stylesCss$4 = ".sc-z-input-h{display:inline-block;width:inherit}input.sc-z-input::-ms-clear,input.sc-z-input::-ms-reveal{display:none}.sc-z-input-h input.sc-z-input::-ms-clear,.sc-z-input-h input.sc-z-input::-ms-reveal{display:none}input.sc-z-input,textarea.sc-z-input,.textarea-wrapper.sc-z-input{box-sizing:border-box;border:var(--border-size-small) solid var(--color-surface04);background:var(--color-input-field01);border-radius:var(--border-radius-small);color:var(--color-text02);fill:var(--color-icon02);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg);outline:none}input.sc-z-input:focus:focus-visible,.textarea-wrapper.sc-z-input:focus-within{box-shadow:var(--shadow-focus-primary)}input.sc-z-input:focus:focus-visible,textarea.sc-z-input:focus:focus-visible{color:var(--color-primary01)}.filled.sc-z-input{border-color:var(--color-surface05)}.input-success.sc-z-input{border-color:var(--color-success01);background:var(--color-success-inverse);fill:var(--color-success01)}.input-error.sc-z-input{border-color:var(--color-error01);background:var(--color-error-inverse);fill:var(--color-error01)}.input-warning.sc-z-input{border-color:var(--color-warning01);background:var(--color-warning-inverse);fill:var(--color-warning01)}input.sc-z-input:hover,.textarea-wrapper.sc-z-input:hover{outline:var(--border-size-medium) solid var(--color-surface04);outline-offset:-2px}input[readonly].sc-z-input,.readonly.sc-z-input{border-color:var(--color-disabled01);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) .textarea-wrapper.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) z-icon.sc-z-input{border-color:var(--color-disabled01);box-shadow:none;color:var(--color-disabled02);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input:hover{border-width:var(--border-size-small)}input.sc-z-input::placeholder,textarea.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input::-webkit-textarea-placeholder{color:var(--color-text05)}.sc-z-input:-ms-textarea-placeholder{color:var(--color-text05)}.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input:placeholder{color:var(--color-text05)}label.input-label.sc-z-input{display:block;padding-bottom:var(--space-unit);color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);text-align:left;text-transform:uppercase}[disabled].sc-z-input-h:not([disabled=\"false\"]) label.input-label.sc-z-input{color:var(--color-disabled02)}.text-wrapper.sc-z-input>div.sc-z-input{position:relative;z-index:1;fill:var(--color-icon02)}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{width:100%;height:calc(var(--space-unit) * 5.5);box-sizing:border-box;padding:0 calc(var(--space-unit) * 1.5);margin:0}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.sc-z-input,.text-wrapper.sc-z-input>div.sc-z-input>input.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 5.25)}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 8)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input{position:absolute;z-index:2;top:50%;right:calc(var(--space-unit) * 1.5);display:flex;pointer-events:none;transform:translateY(-50%)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input{padding:0;border:0;background:none;color:inherit;font:inherit;pointer-events:initial}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input+button.icon-button.sc-z-input{margin-left:calc(var(--space-unit) * 0.5)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.reset-icon.sc-z-input,.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.toggle-password-icon.sc-z-input{cursor:pointer}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.sc-z-input{--z-icon-width:18px;--z-icon-height:18px;display:block}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:hover,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:focus,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:active{background-clip:text !important}.textarea-wrapper.sc-z-input{padding:calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}textarea.sc-z-input::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-track{background-color:transparent}textarea.sc-z-input::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}textarea.sc-z-input{width:100%;min-height:132px;padding:0;border:none;margin:0;resize:none}.radio-wrapper.sc-z-input,.checkbox-wrapper.sc-z-input{position:relative;display:inline-flex;flex-direction:row;align-items:center;color:var(--color-text01);fill:var(--color-primary01);font-family:var(--font-family-sans)}.radio-wrapper.sc-z-input:hover,.checkbox-wrapper.sc-z-input:hover{color:var(--color-hover-primary);fill:currentcolor}.radio-wrapper.sc-z-input>input.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input{position:absolute;z-index:-1;opacity:0;pointer-events:none}.radio-wrapper.sc-z-input .radio-label.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{display:inline-flex;align-items:center;margin:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1;text-transform:inherit}.radio-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.checkbox-label.sc-z-input{cursor:pointer}.radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{cursor:pointer;fill:inherit}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input{flex-direction:row}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input{flex-direction:row-reverse}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input{margin-left:var(--space-unit)}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input{margin-right:var(--space-unit)}.radio-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.checkbox-label.sc-z-input>z-icon.sc-z-input{border-radius:var(--border-radius-small);box-shadow:var(--shadow-focus-primary)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input{color:var(--color-disabled02)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input>z-icon.sc-z-input{cursor:default;fill:var(--color-disabled01)}";

const ZInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inputChange = index.createEvent(this, "inputChange", 7);
    this.startTyping = index.createEvent(this, "startTyping", 7);
    this.stopTyping = index.createEvent(this, "stopTyping", 7);
    this.inputCheck = index.createEvent(this, "inputCheck", 7);
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
ZInput.style = stylesCss$4;

const stylesCss$3 = ":host{display:flex;min-height:calc(var(--space-unit) * 2.5);align-items:start;margin-top:var(--space-unit);color:var(--color-text05);fill:currentcolor;font-family:var(--font-family-sans);font-size:var(--font-size-2);letter-spacing:0.16px}:host([status=\"success\"]){color:var(--color-text-success)}:host([status=\"error\"]){color:var(--color-text-error)}:host([status=\"warning\"]){color:var(--color-warning02)}:host(:focus){outline:none}:host>z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);--z-icon-right-margin:var(--space-unit)}";

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
ZInputMessage.style = stylesCss$3;

const stylesCss$2 = ":host{--font-size-link:inherit;--font-weight-link:inherit;font-family:var(--font-family-sans);font-size:var(--font-size-link);font-weight:var(--font-weight-link);line-height:inherit;outline:none}:host([big]){--font-size-link:16px;--font-weight-link:var(--font-sb)}a{display:inline-flex;align-items:center;padding:calc(var(--space-unit) * 0.5) 0;border-top:var(--border-size-medium) solid transparent;border-bottom:var(--border-size-medium) solid transparent;color:var(--color-link-primary);cursor:pointer;fill:var(--color-link-primary);text-decoration:none}a:hover,a:focus,a:active{text-decoration:underline}a.active{color:var(--color-active-link);fill:var(--color-active-link)}a:hover,a:focus{color:var(--color-hover-link);fill:var(--color-hover-link)}a:active{color:var(--color-pressed-link);fill:var(--color-pressed-link)}a:visited{color:var(--color-visited-link);fill:var(--color-visited-link)}a.disabled,a.inverse.disabled{color:var(--color-disabled03);cursor:default;fill:var(--color-disabled03);pointer-events:none}a.underline,a.underline:active,a.underline:hover,a.underline:visited,a.underline.disabled,a.underline.black,a.underline.white{text-decoration:underline}a.disabled,a.disabled:active,a.disabled:visited,a.disabled:hover{text-decoration:none}a.inverse{color:var(--color-inverse-link);fill:var(--color-inverse-link)}a.inverse.active{color:var(--color-inverse-active-link);fill:var(--color-inverse-active-link)}a.inverse:hover,a.inverse:focus{color:var(--color-inverse-hover-link);fill:var(--color-inverse-hover-link)}a.inverse:active{color:var(--color-inverse-pressed-link);fill:var(--color-inverse-pressed-link)}a.inverse:visited{color:var(--color-inverse-visited-link);fill:var(--color-inverse-visited-link)}a.black{color:var(--gray800);fill:var(--gray800);text-decoration:none}a.black:hover,a.black.active{color:var(--color-black);fill:var(--color-black)}a.black:visited{color:var(--gray800);fill:var(--gray800)}a.black:hover,a.black:focus,a.black:active{text-decoration:underline}a.black:active{color:var(--gray700);fill:var(--gray700)}a.white,a.white:active,a.white:hover,a.white.active{color:var(--bg-white);fill:var(--bg-white);text-decoration:none}a.white:visited{color:var(--bg-white);fill:var(--bg-white)}a.white:hover,a.white:focus,a.white:active{text-decoration:underline}a.white.disabled,a.black.disabled{color:var(--gray500);fill:var(--gray500)}a>z-icon:first-child{margin-right:var(--space-unit)}a>z-icon:last-child{margin-left:var(--space-unit)}";

const ZLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.zLinkClick = index.createEvent(this, "zLinkClick", 7);
    /** link target (optional) */
    this.target = "_self";
    /** tabindex link attribute (optional) */
    this.htmltabindex = 0;
    /** disable link flag (optional) */
    this.isdisabled = false;
    /** active link flag (optional) */
    this.isactive = false;
    /** white variant flag (optional) */
    this.iswhite = false;
    /** link text variant (optional) */
    this.textcolor = "primary";
    /** big link version */
    this.big = false;
    /** link icon position (optional) */
    this.iconposition = "left";
    /** draw underline on text (optional) */
    this.underline = false;
    this.iconSize = 18;
    this.emitZLinkClick = this.emitZLinkClick.bind(this);
    this.emitZLinkInteraction = this.emitZLinkInteraction.bind(this);
  }
  componentWillLoad() {
    if (this.iswhite) {
      console.warn("z-link iswhite prop is deprecated and will be dropped in a next release, please use textcolor prop instead");
    }
    if (this.big) {
      console.warn("z-link big prop is deprecated and will be dropped in a next release, please override --font-size-link and --font-weight-link variables instead");
    }
  }
  emitZLinkClick(e, linkId) {
    this.emitZLinkInteraction(e, linkId);
  }
  emitZLinkInteraction(e, linkId) {
    this.zLinkClick.emit({ e, linkId });
  }
  componentDidLoad() {
    if (this.icon) {
      const height = parseFloat(window.getComputedStyle(this.hostElement).getPropertyValue("font-size"));
      const currentSize = this.big ? 18 : Math.round(height * 1.125);
      if (!Number.isNaN(currentSize) && this.iconSize !== currentSize) {
        this.iconSize = currentSize;
      }
    }
  }
  render() {
    return (index.h("a", { id: this.htmlid, href: this.href ? this.href : null, class: {
        disabled: this.isdisabled,
        active: this.isactive,
        white: this.iswhite,
        [this.textcolor || ""]: true,
        underline: this.underline,
      }, target: this.target, role: this.href ? "link" : "button", tabindex: this.isdisabled ? -1 : this.htmltabindex, onClick: (e) => this.emitZLinkClick(e, this.htmlid) }, this.iconposition === "right" && index.h("slot", null), this.icon && (index.h("z-icon", { style: {
        "--z-icon-width": `${this.iconSize}px`,
        "--z-icon-height": `${this.iconSize}px`,
      }, name: this.icon })), this.iconposition === "left" && index.h("slot", null)));
  }
  get hostElement() { return index.getElement(this); }
};
ZLink.style = stylesCss$2;

const stylesCss$1 = ":host{display:inline-block;width:255px;height:64px;vertical-align:top}img{display:block;width:100%;height:100%;margin:auto;content:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='255px' height='64px' viewBox='0 0 255 64'%3E%3Cg id='Logo/Zanichelli/Centered-(reworked)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Group'%3E%3Cpolygon id='Background' fill='%23E2001A' points='1.70530257e-13 64 254.39 64 254.39 0 1.70530257e-13 0'%3E%3C/polygon%3E%3Cpath d='M233.36,51.3553859 L242.390252,51.3553859 L242.390252,12.6427292 L233.36,12.6427292 L233.36,51.3553859 Z M211.120346,51.3553859 L230.477617,51.3553859 L230.477617,44.5040053 L220.685891,44.5040053 L220.685891,12.6427292 L211.120346,12.6427292 L211.120346,51.3553859 Z M188.880124,51.3553859 L208.23551,51.3553859 L208.23551,44.5040053 L198.445669,44.5040053 L198.445669,12.6427292 L188.880124,12.6427292 L188.880124,51.3553859 Z M165.354444,12.6427292 L165.354444,51.3553859 L185.999058,51.3553859 L185.999058,44.5021204 L175.027425,44.5021204 L175.027425,35.1778343 L185.377062,35.1778343 L185.377062,28.2699086 L175.027425,28.2699086 L175.027425,19.4978796 L185.999058,19.4978796 L185.999058,12.6427292 L165.354444,12.6427292 Z M136.666196,51.3553859 L146.239281,51.3553859 L146.239281,35.1778343 L152.902178,35.1778343 L152.902178,51.3553859 L162.473377,51.3553859 L162.473377,12.6427292 L152.902178,12.6427292 L152.902178,28.2717934 L146.239281,28.2717934 L146.239281,12.6427292 L136.666196,12.6427292 L136.666196,51.3553859 Z M96.064744,51.3553859 L105.098765,51.3553859 L105.098765,12.6427292 L96.064744,12.6427292 L96.064744,51.3553859 Z M53.2364527,36.5160682 L50.6824993,19.7429083 L48.0757704,36.5160682 L53.2364527,36.5160682 Z M65.4935444,51.3553859 L56.2710395,51.3553859 L54.9441146,42.5286966 L47.7101121,42.5286966 L46.3304118,51.3553859 L37.1060221,51.3553859 L45.0053718,12.6427292 L57.5960795,12.6427292 L65.4935444,51.3553859 Z M85.0468382,37.7581755 L76.7969089,12.6427292 L67.3764961,12.6427292 L67.3764961,51.3553859 L75.4040147,51.3553859 L75.4040147,26.132504 L83.5955141,51.3553859 L93.1855622,51.3553859 L93.1855622,12.6427292 L85.0468382,12.6427292 L85.0468382,37.7581755 Z M107.977948,32 C107.977948,34.5200264 107.977948,36.7893695 108.187165,39.1246819 C108.396382,41.4713034 108.818585,43.6878711 109.678071,45.6009801 C111.423429,49.487513 114.932995,52 121.708982,52 C129.508435,52 133.787014,48.4753558 133.787014,38.0220526 L133.787014,37.5640373 L124.937707,37.5640373 L124.922628,38.0050891 C124.894356,38.7571388 124.884931,39.6185091 124.826501,40.4855339 C124.769956,41.3431345 124.66629,42.1875412 124.460843,42.9301668 C124.048064,44.3965696 123.279051,45.3559514 121.708982,45.3559514 C117.743286,45.3559514 117.057205,42.0574875 117.057205,32 C117.057205,21.9425125 117.743286,18.6440486 121.708982,18.6440486 C123.605127,18.6440486 124.547546,20.0030157 124.547546,25.1806616 L124.547546,25.6424465 L133.344077,25.6424465 L133.361041,25.1995099 C133.689003,16.7855998 130.235982,12 121.708982,12 C114.934879,12 111.427199,14.4823297 109.678071,18.3594383 C108.818585,20.265008 108.396382,22.4778061 108.187165,24.830082 C107.977948,27.1710489 107.977948,29.4554707 107.977948,32 L107.977948,32 Z M34.9007634,12.6446141 L34.9007634,20.3196683 L21.6051268,44.5040053 L35.2268401,44.5040053 L35.2268401,51.3553859 L12,51.3553859 L12,43.7915371 L25.2975214,19.4997644 L13.683159,19.4997644 L13.683159,12.6446141 L34.9007634,12.6446141 Z' id='Logotipo-(reworked)' fill='%23FFFFFF'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}a{display:block;width:100%;height:100%}:host(.mobile){width:31px;height:40px}:host(.mobile) img{content:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31px' height='40px' viewBox='0 0 31 40'%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Topbar/Mobile/Logged' transform='translate(-16.000000, -4.000000)'%3E%3Cg id='Group' transform='translate(16.000000, 4.000000)'%3E%3Cpolygon id='Fill-1' fill='%23E2001A' points='0 40 30.625 40 30.625 0 0 0'%3E%3C/polygon%3E%3Cpolygon id='Fill-2' fill='%23FEFEFE' points='8.17111587 6.20689655 23.4311708 6.20689655 23.4311708 11.671267 13.8691261 28.9163861 23.6647727 28.9163861 23.6647727 33.7931034 6.96022727 33.7931034 6.96022727 28.408218 16.522272 11.0831673 8.17111587 11.0831673'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}";

const ZLogo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const style = {};
    if (this.width) {
      style["width"] = style["max-width"] = `${this.width}px`;
    }
    if (this.height) {
      style["height"] = style["max-height"] = `${this.height}px`;
    }
    return (index.h(index.Host, { style: style, class: { mobile: !!this.mobileLogo } }, this.link ? (index.h("a", { href: this.link, target: this.targetBlank ? "_blank" : "_self" }, index.h("img", { alt: this.imageAlt }))) : (index.h("img", { alt: this.imageAlt }))));
  }
};
ZLogo.style = stylesCss$1;

const stylesCss = ".flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08)}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9)}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{left:0}.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{right:0}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.dayContainer+.dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57,57,57,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,0.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.flatpickr-monthSelect-months{margin:10px 1px 3px 1px;flex-wrap:wrap}.flatpickr-monthSelect-month{background:none;border:1px solid transparent;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;display:inline-block;font-weight:400;margin:0.5px;justify-content:center;padding:10px;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;text-align:center;width:33%}.flatpickr-monthSelect-month.flatpickr-disabled{color:#eee}.flatpickr-monthSelect-month.flatpickr-disabled:hover,.flatpickr-monthSelect-month.flatpickr-disabled:focus{cursor:not-allowed;background:none !important}.flatpickr-monthSelect-theme-dark{background:#3f4458}.flatpickr-monthSelect-theme-dark .flatpickr-current-month input.cur-year{color:#fff}.flatpickr-monthSelect-theme-dark .flatpickr-months .flatpickr-prev-month,.flatpickr-monthSelect-theme-dark .flatpickr-months .flatpickr-next-month{color:#fff;fill:#fff}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month{color:rgba(255, 255, 255, 0.95)}.flatpickr-monthSelect-month.today{border-color:#959ea9}.flatpickr-monthSelect-month.inRange,.flatpickr-monthSelect-month.inRange.today,.flatpickr-monthSelect-month:hover,.flatpickr-monthSelect-month:focus{background:#e6e6e6;cursor:pointer;outline:0;border-color:#e6e6e6}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.inRange,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month:hover,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month:focus{background:#646c8c;border-color:#646c8c}.flatpickr-monthSelect-month.today:hover,.flatpickr-monthSelect-month.today:focus{background:#959ea9;border-color:#959ea9;color:#fff}.flatpickr-monthSelect-month.selected,.flatpickr-monthSelect-month.startRange,.flatpickr-monthSelect-month.endRange{background-color:#569ff7;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-monthSelect-month.startRange{border-radius:50px 0 0 50px}.flatpickr-monthSelect-month.endRange{border-radius:0 50px 50px 0}.flatpickr-monthSelect-month.startRange.endRange{border-radius:50px}.flatpickr-monthSelect-month.inRange{border-radius:0;box-shadow:-5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.selected,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.startRange,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.endRange{background:#80cbc4;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#80cbc4}:host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-range-picker--toggle-height:0}z-date-picker{position:relative}z-date-picker>div>*{cursor:pointer !important}z-range-picker{position:relative}.flatpickr-toggle-container{width:fit-content}.range-pickers-container>div{position:relative}.hidden-input{position:absolute;bottom:0;width:0;height:0;visibility:hidden !important}.flatpickr-calendar::before,.flatpickr-calendar::after{display:none}.flatpickr-calendar{position:absolute !important;top:var(--z-range-picker--toggle-height) !important;left:0 !important;padding-top:calc(var(--space-unit) * 2);border-radius:2px;box-shadow:var(--shadow-2);font-family:var(--font-family-sans) !important}.months.top>.flatpickr-calendar{top:-288px !important}.date.top>.flatpickr-calendar,.date.top>div>.flatpickr-calendar{top:-401px !important}.date-time.top>.flatpickr-calendar,.date-time.top>div>.flatpickr-calendar{top:-523px !important}.flatpickr-calendar,.flatpickr-innerContainer,.flatpickr-days,.dayContainer,.flatpickr-rContainer,.flatpickr-monthSelect-months{width:calc(var(--space-unit) * 42) !important;max-width:calc(var(--space-unit) * 42) !important}.flatpickr-monthSelect-months{box-sizing:border-box;padding:0 !important;margin:calc(var(--space-unit) * 2) 0 !important}.flatpickr-months{position:relative;height:calc(var(--space-unit) * 6) !important;align-items:center;margin-bottom:var(--space-unit) 0 !important}.flatpickr-month{overflow:visible !important;height:calc(var(--space-unit) * 6) !important}.flatpickr-current-month{left:0 !important;display:flex !important;width:fill-available;height:calc(var(--space-unit) * 6);align-items:baseline;justify-content:space-evenly;padding-top:0}.flatpickr-next-month,.flatpickr-prev-month{position:static !important;display:flex;width:calc(var(--space-unit) * 4) !important;height:calc(var(--space-unit) * 4) !important;align-items:center;justify-content:center;padding:0 !important}.flatpickr-prev-month{margin-left:var(--space-unit)}.flatpickr-next-month{margin-right:var(--space-unit)}.flatpickr-next-month>svg,.flatpickr-prev-month>svg{width:calc(var(--space-unit) * 2) !important;height:calc(var(--space-unit) * 2) !important;fill:var(--color-primary01)}.flatpickr-next-month:hover,.flatpickr-prev-month:hover,.flatpickr-next-month:focus,.flatpickr-prev-month:focus{border:none !important;border-color:var(--color-primary03) !important;background-color:var(--color-primary03) !important;border-radius:var(--border-radius);color:var(--color-hover-primary) !important;outline:none !important}.flatpickr-next-month:hover svg,.flatpickr-prev-month:hover svg{fill:var(--color-hover-primary) !important}.flatpickr-next-month:active,.flatpickr-prev-month:active{border-color:var(--color-surface01) !important;background-color:var(--color-surface01) !important;border-radius:var(--border-radius);box-shadow:var(--shadow-2) !important;color:var(--color-primary01) !important}.flatpickr-next-month:focus svg,.flatpickr-prev-month:focus svg{fill:var(--color-primary01) !important}.flatpickr-monthDropdown-months{width:108px !important;height:calc(var(--space-unit) * 5.5) !important;padding-left:var(--space-unit) !important;background:var(--color-surface01) !important;color:var(--color-text02) !important;font-size:var(--font-size-3) !important;font-weight:var(--font-rg) !important;outline:1px solid black !important}.flatpickr-monthDropdown-months:hover,.flatpickr-monthDropdown-months:focus{outline:1px solid var(--color-primary01) !important}.flatpickr-current-month>.numInputWrapper{display:flex;width:calc(var(--space-unit) * 10);height:calc(var(--space-unit) * 5.5) !important;background:var(--color-surface01) !important;color:var(--color-text02);outline:1px solid black !important}.flatpickr-current-month>.numInputWrapper:hover,.flatpickr-current-month>.numInputWrapper:focus-within{outline:1px solid var(--color-primary01) !important}.flatpickr-current-month>.numInputWrapper>input{padding:0 calc(var(--space-unit) * 3) 0 var(--space-unit);font-size:var(--font-size-3) !important;font-weight:var(--font-rg) !important;text-align:center}.flatpickr-weekdays{height:calc(var(--space-unit) * 6);border-bottom:1px solid var(--color-surface03)}.flatpickr-weekday{font-size:var(--font-size-3) !important;font-weight:var(--font-rg) !important}.flatpickr-day,.flatpickr-monthSelect-month{width:calc(var(--space-unit) * 6) !important;max-width:100% !important;height:calc(var(--space-unit) * 6) !important;border:none;margin:0 !important;border-radius:0 !important;box-shadow:none !important;font-size:var(--font-size-3) !important;line-height:calc(var(--space-unit) * 6) !important}.flatpickr-day{width:calc(var(--space-unit) * 6) !important;border:none;line-height:calc(var(--space-unit) * 6) !important}.flatpickr-monthSelect-month{width:calc(var(--space-unit) * 14) !important;padding:0 !important;border:2px solid var(--color-surface01) !important;line-height:calc(var(--space-unit) * 5) !important}.flatpickr-day:not(.flatpickr-disabled):hover,.flatpickr-day:not(.flatpickr-disabled):active,.flatpickr-day:not(.flatpickr-disabled):focus,.flatpickr-day:not(.flatpickr-disabled).prevMonthDay:hover,.flatpickr-day:not(.flatpickr-disabled).prevMonthDay:active,.flatpickr-day:not(.flatpickr-disabled).prevMonthDay:focus,.flatpickr-day:not(.flatpickr-disabled).selected:hover,.flatpickr-day:not(.flatpickr-disabled).selected:active,.flatpickr-day:not(.flatpickr-disabled).selected:focus,.flatpickr-monthSelect-month:hover,.flatpickr-monthSelect-month:active,.flatpickr-monthSelect-month:focus{border-color:var(--color-hover-primary) !important;background-color:var(--color-hover-primary) !important;color:var(--color-text04) !important}.flatpickr-day.today,.flatpickr-monthSelect-month.today{border:2px solid var(--color-hover-primary) !important}.flatpickr-day.selected:not(.flatpickr-disabled),.flatpickr-monthSelect-month.selected:not(.flatpickr-disabled){border-color:var(--color-primary01) !important;background-color:var(--color-primary01) !important}.flatpickr-weekday:nth-child(6),.flatpickr-weekday:nth-child(7),.flatpickr-day:nth-child(7n+6),.flatpickr-day:nth-child(7n+7){font-weight:var(--font-sb) !important}.flatpickr-time{display:block;height:90px !important;max-height:90px !important;text-align:left}.flatpickr-time::before{display:block;width:100%;padding-left:var(--space-unit);color:var(--color-text02) !important;content:\"Orario\";font-size:var(--font-size-1);font-weight:var(--font-sb);text-transform:uppercase}.flatpickr-time.time24hr{margin:calc(var(--space-unit) * 2) !important}.flatpickr-time.time24hr>.numInputWrapper>input:hover,.flatpickr-time.time24hr>.numInputWrapper>input:focus,.flatpickr-time.time24hr>.numInputWrapper:hover{background-color:var(--color-surface01) !important}.flatpickr-time.time24hr>div{width:calc(var(--space-unit) * 10) !important;height:calc(var(--space-unit) * 5.5) !important;margin-right:var(--space-unit) !important;margin-left:var(--space-unit) !important}.flatpickr-time-separator{display:flex;height:calc(var(--space-unit) * 5.5) !important;align-items:center;justify-content:center;font-weight:unset !important}.flatpickr-minute,.flatpickr-hour{font-size:var(--font-size-3) !important;font-weight:var(--font-rg) !important;outline:1px solid black !important}.numInputWrapper:hover .flatpickr-minute,.numInputWrapper:hover .flatpickr-hour,.flatpickr-minute:focus,.flatpickr-hour:focus{outline:1px solid var(--color-primary01) !important}.arrowUp,.arrowDown{width:calc(var(--space-unit) * 2) !important;height:calc(var(--space-unit) * 2) !important;padding:0 !important;border:none !important;opacity:1 !important}.arrowUp{margin-top:calc(var(--space-unit) / 2) !important;margin-right:calc(var(--space-unit) / 2) !important}.arrowDown{top:auto !important;margin-top:calc(var(--space-unit) * 3) !important;margin-right:calc(var(--space-unit) / 2) !important}.arrowUp:hover,.arrowDown:hover{border-color:var(--color-primary03) !important;background-color:var(--color-primary03) !important;border-radius:var(--border-radius);color:var(--color-hover-primary) !important}.arrowUp:active,.arrowDown:active{border-color:var(--color-surface01) !important;background-color:var(--color-surface01) !important;border-radius:var(--border-radius);box-shadow:var(--shadow-2) !important;color:var(--color-primary01) !important}.arrowUp::after,.arrowDown::after{padding:2.5px !important;border:solid var(--color-primary01) !important;border-width:0 1px 1px 0 !important}.arrowUp::after{top:0 !important;margin-top:6px !important;margin-left:5.5px !important;transform:rotate(-135deg)}.arrowDown::after{top:0 !important;left:5.5px !important;margin-top:4px !important;transform:rotate(45deg)}.flatpickr-day:not(.flatpickr-disabled).inRange:hover,.flatpickr-day:not(.flatpickr-disabled).today.inRange:hover,.flatpickr-day.prevMonthDay:not(.flatpickr-disabled).inRange:hover,.flatpickr-monthSelect-month:not(.flatpickr-disabled).inRange:hover{border-color:var(--color-hover-primary) !important;background-color:var(--color-hover-primary) !important}.flatpickr-day:not(.flatpickr-disabled).inRange,.flatpickr-day:not(.flatpickr-disabled).today.inRange,.flatpickr-day:not(.flatpickr-disabled).prevMonthDay.inRange,.flatpickr-monthSelect-month:not(.flatpickr-disabled).inRange{border-color:var(--color-primary03);background-color:var(--color-primary03)}.flatpickr-day:not(.flatpickr-disabled).startRange,.flatpickr-day:not(.flatpickr-disabled).endRange,.flatpickr-monthSelect-month:not(.flatpickr-disabled).startRange,.flatpickr-monthSelect-month:not(.flatpickr-disabled).endRange{border-color:var(--color-primary01) !important;background-color:var(--color-primary01) !important}.flatpickr-day:not(.flatpickr-disabled).prevMonthDay.selected.startRange,.flatpickr-day:not(.flatpickr-disabled).prevMonthDay.selected.endRange{border-color:var(--color-primary01) !important;background-color:var(--color-primary01) !important}.flatpickr-range.second-input{cursor:pointer}.range-pickers-container{display:flex;gap:16px}";

const ZRangePicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dateSelect = index.createEvent(this, "dateSelect", 7);
    /** [Optional] datepicker mode: date or datetime */
    this.mode = index$1.ZRangePickerMode.DATE;
    this.flatpickrPosition = index$1.ZDatePickerPosition.BOTTOM;
    this.activeInput = "start-input";
    this.firstInputError = false;
    this.lastInputError = false;
  }
  handleClick() {
    this.getFocusedInput();
  }
  handleKeyDown(ev) {
    var _a, _b, _c, _d, _e, _f;
    const currentPicker = this.activeInput === "start-input" ? this.firstPicker : this.lastPicker;
    this.getFocusedInput();
    if (ev.key === "Escape") {
      document.activeElement.classList.contains(`${this.rangePickerId}-1`) && ((_a = this.firstPicker) === null || _a === void 0 ? void 0 : _a.close());
      document.activeElement.classList.contains(`${this.rangePickerId}-2`) && ((_b = this.lastPicker) === null || _b === void 0 ? void 0 : _b.close());
    }
    if (ev.key === "Enter" || ev.key === " ") {
      if (document.activeElement.classList.contains(`${this.rangePickerId}-1`) ||
        document.activeElement.classList.contains(`${this.rangePickerId}-2`)) {
        currentPicker === null || currentPicker === void 0 ? void 0 : currentPicker.open();
      }
      const isCrossIconEntered = document.activeElement.classList.contains("reset-icon");
      if (isCrossIconEntered) {
        if (this.activeInput === "start-input") {
          this.firstInputError = false;
          (_c = this.firstPicker) === null || _c === void 0 ? void 0 : _c.clear();
          this.printDate(null, ((_d = this.lastPicker) === null || _d === void 0 ? void 0 : _d.selectedDates[0]) || null);
        }
        if (this.activeInput === "end-input") {
          this.lastInputError = false;
          (_e = this.firstPicker) === null || _e === void 0 ? void 0 : _e.clear();
          this.printDate(((_f = this.firstPicker) === null || _f === void 0 ? void 0 : _f.selectedDates[0]) || null, null);
        }
      }
      const isPrevArrowEntered = document.activeElement.classList.contains("flatpickr-prev-month");
      const isNextArrowEntered = document.activeElement.classList.contains("flatpickr-next-month");
      const arrowPressed = isPrevArrowEntered || isNextArrowEntered;
      arrowPressed && ev.key === " " && ev.preventDefault();
      isPrevArrowEntered && (currentPicker === null || currentPicker === void 0 ? void 0 : currentPicker.changeMonth(-1));
      isNextArrowEntered && (currentPicker === null || currentPicker === void 0 ? void 0 : currentPicker.changeMonth(1));
    }
  }
  componentDidLoad() {
    this.setupPickers();
  }
  setupPickers() {
    const config = {
      enableTime: this.mode === index$1.ZRangePickerMode.DATE_TIME,
      locale: utils$1.it.Italian,
      allowInput: true,
      wrap: true,
      dateFormat: this.mode === index$1.ZRangePickerMode.DATE_TIME ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: "d F Y",
      minuteIncrement: 1,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      time_24hr: true,
      onValueUpdate: () => {
        const firstInputActive = this.activeInput === "start-input";
        const firstDate = this.firstPicker.selectedDates[0];
        const lastDate = this.lastPicker.selectedDates[0];
        if (+firstDate > +lastDate) {
          if (firstInputActive) {
            this.firstInputError = true;
            this.printDate(null, lastDate || null);
          }
          else {
            this.lastInputError = true;
            this.printDate(firstDate || null, null);
          }
        }
        else {
          this.lastInputError = false;
          this.firstInputError = false;
          this.printDate(firstDate || null, lastDate || null);
        }
        this.setRangeStyle(0);
        this.setRangeStyle(1);
      },
      onChange: (_selectedDates, _dateStr, instance) => {
        this.onDateSelect();
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
      },
      onOpen: (_selectedDates, _dateStr, instance) => {
        utils$1.setAriaOptions(this.element, this.mode);
        this.flatpickrPosition = utils$1.setFlatpickrPosition(this.element, this.mode);
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
        this.getFocusedInput();
      },
      onYearChange: (_selectedDates, _dateStr, instance) => {
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
      },
      onMonthChange: (_selectedDates, _dateStr, instance) => {
        this.setRangeStyle(instance.input.classList.contains("start-input") ? 0 : 1);
      },
      onKeyDown: () => {
        utils$1.setAriaOptions(this.element, this.mode);
      },
    };
    this.firstPicker = utils$1.flatpickr(`.${this.rangePickerId}-1-container`, Object.assign(Object.assign({}, config), { mode: "single", appendTo: this.element.querySelector(`.${this.rangePickerId}-1-wrapper`) }));
    this.lastPicker = utils$1.flatpickr(`.${this.rangePickerId}-2-container`, Object.assign(Object.assign({}, config), { mode: "single", appendTo: this.element.querySelector(`.${this.rangePickerId}-2-wrapper`) }));
    this.element.querySelectorAll(".flatpickr-weekday").forEach((element) => {
      element.innerHTML = element.innerHTML.trim().charAt(0);
    });
  }
  onDateSelect() {
    const firstInputActive = this.activeInput === "start-input";
    const firstDate = this.firstPicker.selectedDates[0];
    const lastDate = this.lastPicker.selectedDates[0];
    if (+firstDate > +lastDate) {
      if (firstInputActive) {
        this.firstInputError = true;
        this.printDate(null, lastDate || null);
      }
      else {
        this.lastInputError = true;
        this.printDate(firstDate || null, null);
      }
    }
    else {
      this.lastInputError = false;
      this.firstInputError = false;
      this.printDate(firstDate || null, lastDate || null);
    }
  }
  disableDates(date, index) {
    const calendar = this.element.getElementsByClassName("flatpickr-calendar")[index];
    Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach((element) => {
      const calendarDate = this.getDateWithoutTime(this.replaceMonths(element.ariaLabel, null));
      const breakpoint = this.getDateWithoutTime(date);
      const inRange = index === 0 ? calendarDate > breakpoint : calendarDate < breakpoint;
      if (inRange) {
        element.classList.toggle("flatpickr-disabled", true);
      }
      else {
        element.classList.toggle("flatpickr-disabled", false);
      }
    });
    utils$1.setAriaOptions(this.element, this.mode);
  }
  formatDate(date) {
    if (this.mode === index$1.ZRangePickerMode.DATE) {
      return `${utils$1.flatpickr.formatDate(date, "d-m-Y")}`;
    }
    return `${utils$1.flatpickr.formatDate(date, "d-m-Y - H:i")}`;
  }
  printDate(firstDate, lastDate) {
    const firstDateString = firstDate ? this.formatDate(firstDate) : null;
    const lastDateString = lastDate ? this.formatDate(lastDate) : null;
    this.dateSelect.emit([firstDateString, lastDateString]);
  }
  getDateWithoutTime(date) {
    const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0);
    return newDate;
  }
  /** Replace month word to month number */
  replaceMonths(date, time) {
    const month = date.split(" ")[1];
    const months = {
      /* eslint-disable @typescript-eslint/naming-convention */
      Gennaio: "01",
      Febbraio: "02",
      Marzo: "03",
      Aprile: "04",
      Maggio: "05",
      Giugno: "06",
      Luglio: "07",
      Agosto: "08",
      Settembre: "09",
      Ottobre: "10",
      Novembre: "11",
      Dicembre: "12",
      /* eslint-enable @typescript-eslint/naming-convention */
    };
    const pieces = date.replace(month, months[month]).split(" ");
    return new Date(parseInt(pieces[2]), parseInt(pieces[1]) - 1, parseInt(pieces[0]), time ? parseInt(time.split(":")[0]) : 0, time ? parseInt(time.split(":")[1]) : 0);
  }
  /** Get the current focused input, first or last */
  getFocusedInput() {
    const focusedZInput = document.activeElement.closest("z-input");
    if (!focusedZInput) {
      return;
    }
    if (focusedZInput === null || focusedZInput === void 0 ? void 0 : focusedZInput.classList.contains("start-input")) {
      this.activeInput = "start-input";
    }
    else if (focusedZInput.classList.contains("end-input")) {
      this.activeInput = "end-input";
    }
  }
  /** Set style of the days between the two selected dates */
  setRangeStyle(index) {
    Array.from(this.element.getElementsByClassName("flatpickr-calendar")).forEach((element) => {
      Array.from(element.getElementsByClassName("flatpickr-day")).forEach((element) => {
        const hasFirstDate = this.firstPicker.selectedDates.length === 1;
        const hasLastDate = this.lastPicker.selectedDates.length === 1;
        let firstDate;
        let lastDate;
        const date = this.getDateWithoutTime(this.replaceMonths(element.ariaLabel, null));
        if (hasFirstDate) {
          firstDate = this.getDateWithoutTime(this.firstPicker.selectedDates[0]);
          if (+date === +firstDate) {
            element.classList.toggle("startRange", true);
          }
          else {
            element.classList.toggle("startRange", false);
          }
        }
        if (hasLastDate) {
          lastDate = this.getDateWithoutTime(this.lastPicker.selectedDates[0]);
          if (+date === +lastDate) {
            element.classList.toggle("endRange", true);
          }
          else {
            element.classList.toggle("endRange", false);
          }
        }
        if (hasFirstDate && hasLastDate) {
          if (date > firstDate && date < lastDate) {
            element.classList.toggle("inRange", true);
          }
          else {
            element.classList.toggle("inRange", false);
          }
        }
        if (index === 0 && hasLastDate) {
          this.disableDates(this.lastPicker.selectedDates[0], index);
        }
        if (index === 1 && hasFirstDate) {
          this.disableDates(this.firstPicker.selectedDates[0], index);
        }
      });
    });
  }
  onStopTyping(value) {
    const text = value.detail.value.replace("/", "-");
    const englishData = text.split("-");
    const time = this.mode === index$1.ZRangePickerMode.DATE_TIME ? `T${englishData[3]}:00` : "";
    const englishParsedData = `${englishData[2]}-${englishData[1]}-${englishData[0]}${time}`.split(" ").join("");
    const isValidDate = utils$1.validateDate(text, this.mode === index$1.ZRangePickerMode.DATE_TIME);
    const date = Date.parse(englishParsedData).toString();
    if (this.activeInput === "start-input") {
      if (text === "") {
        this.firstInputError = false;
        this.firstPicker.setDate([]);
        this.printDate(null, this.lastPicker.selectedDates[0] || null);
      }
      else if (!isValidDate) {
        this.firstInputError = true;
        this.printDate(null, this.lastPicker.selectedDates[0] || null);
      }
      else if (isValidDate) {
        if (this.lastPicker.selectedDates.length === 1) {
          if (+date <= +this.lastPicker.selectedDates[0]) {
            this.firstInputError = false;
            this.firstPicker.setDate([text]);
            this.printDate(new Date(englishParsedData), this.lastPicker.selectedDates[0]);
          }
          else {
            this.firstInputError = true;
            this.printDate(null, this.lastPicker.selectedDates[0]);
          }
        }
        else {
          this.firstInputError = false;
          this.firstPicker.setDate([text]);
          this.printDate(new Date(englishParsedData), null);
        }
      }
    }
    else if (text === "") {
      this.lastInputError = false;
      this.lastPicker.setDate([]);
      this.printDate(this.firstPicker.selectedDates[0] || null, null);
    }
    else if (!isValidDate) {
      this.lastInputError = true;
      this.printDate(this.firstPicker.selectedDates[0] || null, null);
    }
    else if (isValidDate) {
      if (this.firstPicker.selectedDates.length === 1) {
        if (+date >= +this.firstPicker.selectedDates[0]) {
          this.lastInputError = false;
          this.lastPicker.setDate([text]);
          this.printDate(this.firstPicker.selectedDates[0], new Date(englishParsedData));
        }
        else {
          this.lastInputError = true;
          this.printDate(this.firstPicker.selectedDates[0], null);
        }
      }
      else {
        this.lastInputError = false;
        this.lastPicker.setDate([text]);
        this.printDate(null, new Date(englishParsedData));
      }
    }
    this.setRangeStyle(this.activeInput === "start-input" ? 0 : 1);
  }
  render() {
    const zInputProps = {
      type: index$1.InputType.TEXT,
      icon: "event",
      tabindex: "0",
      message: false,
      onStopTyping: this.onStopTyping.bind(this),
      value: "",
    };
    return (index.h("div", { class: {
        ["range-pickers-container"]: true,
        [this.mode]: true,
        [this.activeInput]: true,
        [this.flatpickrPosition]: true,
      } }, index.h("div", { class: `${this.rangePickerId}-1-wrapper` }, index.h("div", { class: `${this.rangePickerId}-1-container` }, index.h("z-input", Object.assign({}, zInputProps, { "data-input": "data-input", class: `start-input ${this.rangePickerId}-1`, ariaLabel: this.firstAriaLabel, label: this.firstLabel, status: this.firstInputError && index$1.InputStatus.ERROR, onStartTyping: () => {
        this.firstInputError = false;
      } })))), index.h("div", { class: `${this.rangePickerId}-2-wrapper` }, index.h("div", { class: `${this.rangePickerId}-2-container` }, index.h("z-input", Object.assign({}, zInputProps, { "data-input": "data-input", class: `end-input ${this.rangePickerId}-2`, ariaLabel: this.secondAriaLabel, label: this.secondLabel, status: this.lastInputError && index$1.InputStatus.ERROR, onStartTyping: () => {
        this.lastInputError = false;
      } }))))));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "mode": ["setupPickers"]
  }; }
};
ZRangePicker.style = stylesCss;

exports.z_app_switcher = ZAppSwitcher;
exports.z_app_topbar = ZAppTopbar;
exports.z_divider = ZDivider;
exports.z_icon = ZIcon;
exports.z_input = ZInput;
exports.z_input_message = ZInputMessage;
exports.z_link = ZLink;
exports.z_logo = ZLogo;
exports.z_range_picker = ZRangePicker;
