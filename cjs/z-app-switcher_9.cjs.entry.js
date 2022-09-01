'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-bc9a5c2b.js');
const breakpoints = require('./breakpoints-88c4fd6c.js');
const icons = require('./icons-9fc3ff30.js');
const utils = require('./utils-2fa62b67.js');
const utils$1 = require('./utils-40bb75b1.js');
require('./_commonjsHelpers-537d719a.js');

const stylesCss$8 = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}button{display:flex;justify-content:center;align-content:center;background-color:transparent;border:none;padding:0}button>z-icon{color:var(--bg-white);fill:currentColor}button>z-icon.light{color:var(--bg-grey-900);fill:currentColor}";

const ZAppSwitcher = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.appButtonClick = index.createEvent(this, "appButtonClick", 7);
    /** theme variant, default 'dark' */
    this.theme = index$1.ThemeVariant.dark;
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

const stylesCss$7 = ":host{display:block;position:sticky;box-sizing:border-box;top:0;height:calc(var(--space-unit) * 6);padding:calc(var(--space-unit) / 2) calc(var(--space-unit) * 2);border-radius:var(--border-no-radius);background-color:var(--gray900);z-index:99}:host(.light){background-color:var(--color-white)}:host>div{display:flex;justify-content:space-between;align-items:center}:host(.limited-width) #content-container{margin:auto;max-width:var(--mw)}.content-panel{display:flex;align-items:center}.content-panel>:not(:last-child){margin-right:calc(var(--space-unit) * 2)}#divider-container{display:none}z-link{font-family:var(--font-family-sans);font-weight:var(--font-sb);font-size:14px;line-height:20px;letter-spacing:0.3px}@media only screen and (min-width: 768px){:host{padding:var(--space-unit) calc(var(--space-unit) * 2) var(--space-unit) var(--space-unit)}:host(.limited-width){padding:var(--space-unit)}#divider-container{display:block;height:calc(var(--space-unit) * 3)}}";

const ZAppTopbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** theme variant, default 'dark' */
    this.theme = index$1.ThemeVariant.dark;
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
    return this.topbarLinks.map((link) => index.h("z-link", { htmlid: link.id, textcolor: this.theme === index$1.ThemeVariant.light ? "black" : "white", href: link.link, target: link.target, icon: this.isMobile ? link.icon : undefined }, !this.isMobile && link.label));
  }
  render() {
    return (index.h(index.Host, { class: {
        [this.theme]: true,
        "limited-width": !!this.contentMaxWidth
      } }, index.h("div", { id: "content-container", style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} }, index.h("div", { id: "left-panel", class: "content-panel" }, index.h("z-logo", { mobileLogo: this.isMobile, width: this.isMobile ? 32 : 128, height: this.isMobile ? 40 : 32, imageAlt: "zanichelli-logo", link: this.logoLink, targetBlank: true }), this.isMobile && this.renderTopbarLinks()), index.h("div", { id: "right-panel", class: "content-panel" }, !this.isMobile && this.renderTopbarLinks(), this.showAppSwitcher && index.h("z-app-switcher", { theme: this.theme }), index.h("div", { id: "divider-container" }, index.h("z-divider", { orientation: index$1.DividerOrientation.vertical, color: this.theme === index$1.ThemeVariant.light ? "gray800" : "color-white" })), index.h("slot", { name: "login" })))));
  }
};
ZAppTopbar.style = stylesCss$7;

const stylesCss$6 = ".sc-z-divider-h{display:block;padding:0;margin:0}.divider-horizontal.sc-z-divider-h{width:100%}.divider-vertical.sc-z-divider-h{height:100%}.divider-small.divider-horizontal.sc-z-divider-h{height:var(--border-size-small)}.divider-medium.divider-horizontal.sc-z-divider-h{height:var(--border-size-medium)}.divider-large.divider-horizontal.sc-z-divider-h{height:var(--border-size-large)}.divider-small.divider-vertical.sc-z-divider-h{width:var(--border-size-small)}.divider-medium.divider-vertical.sc-z-divider-h{width:var(--border-size-medium)}.divider-large.divider-vertical.sc-z-divider-h{width:var(--border-size-large)}";

const ZDivider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** [optional] Divider size */
    this.size = index$1.DividerSize.small;
    /** [optional] Divider color */
    this.color = "gray200";
    /** [optional] Divider orintation */
    this.orientation = index$1.DividerOrientation.horizontal;
  }
  render() {
    return (index.h(index.Host, { class: `divider-${this.size} divider-${this.orientation}`, style: { backgroundColor: `var(--${this.color})` } }));
  }
};
ZDivider.style = stylesCss$6;

const stylesCss$5 = ":host{line-height:0;vertical-align:middle;margin-right:var(--z-icon-right-margin, 0);margin-left:var(--z-icon-left-margin, 0)}:host svg:not([width]){width:var(--z-icon-width, 18px)}:host svg:not([height]){height:var(--z-icon-height, 18px)}";

const ZIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  selectPathOrPolygon(iconName) {
    if (iconName && iconName.startsWith("M")) {
      return index.h("path", { d: icons.icons[this.name] });
    }
    else {
      return index.h("polygon", { points: icons.icons[this.name] });
    }
  }
  render() {
    return (index.h("svg", { viewBox: "0 0 1000 1000", width: this.width, height: this.height, id: this.iconid, fill: this.fill ? `var(--${this.fill})` : "" }, this.selectPathOrPolygon(icons.icons[this.name])));
  }
};
ZIcon.style = stylesCss$5;

const stylesCss$4 = ".sc-z-input-h{display:inline-block;width:inherit}input.sc-z-input::-ms-clear,input.sc-z-input::-ms-reveal{display:none}.sc-z-input-h input.sc-z-input::-ms-clear,.sc-z-input-h input.sc-z-input::-ms-reveal{display:none}input.sc-z-input,textarea.sc-z-input,.textareaWrapper.sc-z-input{background:var(--color-input-field01);border-radius:var(--border-radius-small);border:var(--border-size-small) solid var(--color-surface04);box-sizing:border-box;color:var(--color-text02);fill:var(--color-icon02);font-family:var(--font-family-sans);font-weight:var(--font-rg);font-size:var(--font-size-3);outline:none}input.sc-z-input:focus:focus-visible,.textareaWrapper.sc-z-input:focus-within{box-shadow:var(--shadow-focus-primary)}input.sc-z-input:focus:focus-visible,textarea.sc-z-input:focus:focus-visible{color:var(--color-primary01)}.filled.sc-z-input{border-color:var(--color-surface05)}.input_success.sc-z-input{background:var(--color-success-inverse);border-color:var(--color-success01);fill:var(--color-success01)}.input_error.sc-z-input{background:var(--color-error-inverse);border-color:var(--color-error01);fill:var(--color-error01)}.input_warning.sc-z-input{background:var(--color-warning-inverse);border-color:var(--color-warning01);fill:var(--color-warning01)}input.sc-z-input:hover,.textareaWrapper.sc-z-input:hover{border-width:var(--border-size-medium)}input[readonly].sc-z-input,.readonly.sc-z-input{border-color:var(--color-disabled01);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) .textareaWrapper.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) z-icon.sc-z-input{border-color:var(--color-disabled01);color:var(--color-disabled02);fill:var(--color-disabled01);pointer-events:none;box-shadow:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input:hover{border-width:var(--border-size-small)}input.sc-z-input::placeholder,textarea.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input::-webkit-input-placeholder,.sc-z-input::-webkit-textarea-placeholder{color:var(--color-text05)}.sc-z-input:-ms-input-placeholder,.sc-z-input:-ms-textarea-placeholder{color:var(--color-text05)}.sc-z-input::-moz-placeholder{color:var(--color-text05)}.sc-z-input:-moz-placeholder{color:var(--color-text05)}label.inputLabel.sc-z-input{display:block;margin-bottom:var(--space-unit);color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);text-transform:uppercase;text-align:left}[disabled].sc-z-input-h:not([disabled=\"false\"]) label.inputLabel.sc-z-input{color:var(--color-disabled02)}.textWrapper.sc-z-input>div.sc-z-input{fill:var(--color-icon02)}.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input{width:100%;height:calc(var(--space-unit) * 5.5);margin:0;padding:0 calc(var(--space-unit) * 1.5);box-sizing:border-box}.textWrapper.sc-z-input>div.sc-z-input>input.hasIcon.sc-z-input,.textWrapper.sc-z-input>div.sc-z-input>input.hasClearIcon.sc-z-input{padding-right:calc(var(--space-unit) * 5.25)}.textWrapper.sc-z-input>div.sc-z-input>input.hasIcon.hasClearIcon.sc-z-input{padding-right:calc(var(--space-unit) * 8)}.textWrapper.sc-z-input>div.sc-z-input{position:relative;z-index:1}.textWrapper.sc-z-input .iconsWrapper.sc-z-input{position:absolute;right:calc(var(--space-unit) * 1.5);top:50%;transform:translateY(-50%);display:flex;z-index:2;pointer-events:none}.textWrapper.sc-z-input .iconsWrapper.sc-z-input>button.iconButton.sc-z-input{background:none;color:inherit;border:0;padding:0;font:inherit;pointer-events:initial}.textWrapper.sc-z-input .iconsWrapper.sc-z-input>button.iconButton.sc-z-input+button.iconButton.sc-z-input{margin-left:calc(var(--space-unit) * 0.5)}.textWrapper.sc-z-input .iconsWrapper.sc-z-input>button.iconButton.resetIcon.sc-z-input,.textWrapper.sc-z-input .iconsWrapper.sc-z-input>button.iconButton.showHidePasswordIcon.sc-z-input{cursor:pointer}.textWrapper.sc-z-input .iconsWrapper.sc-z-input>button.iconButton.sc-z-input>z-icon.sc-z-input{--z-icon-width:18px;--z-icon-height:18px;display:block}.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill,.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:hover,.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:focus,.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:active{-webkit-background-clip:text !important}.textareaWrapper.sc-z-input{padding:calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}textarea.sc-z-input::-webkit-scrollbar{background:linear-gradient(\n    to right,\n    transparent 0 3px,\n    var(--gray200) 3px 7px,\n    transparent 7px 10px\n  );width:10px;border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-track{background-color:transparent}textarea.sc-z-input::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}textarea.sc-z-input{min-height:132px;width:100%;margin:0;padding:0;border:none;resize:none}.radioWrapper.sc-z-input,.checkboxWrapper.sc-z-input{display:inline-flex;flex-direction:row;align-items:center;font-family:var(--font-family-sans);position:relative;color:var(--color-text01);fill:var(--color-primary01)}.radioWrapper.sc-z-input:hover,.checkboxWrapper.sc-z-input:hover{color:var(--color-hover-primary);fill:currentColor}.radioWrapper.sc-z-input>input.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input{position:absolute;opacity:0;z-index:-1;pointer-events:none}.radioWrapper.sc-z-input .radioLabel.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.sc-z-input{display:inline-flex;align-items:center;margin:0;line-height:1;color:inherit;font-family:inherit;font-weight:inherit;font-size:inherit;text-transform:inherit}.radioWrapper.sc-z-input input.sc-z-input:not(:disabled)+.radioLabel.sc-z-input,.checkboxWrapper.sc-z-input input.sc-z-input:not(:disabled)+.checkboxLabel.sc-z-input{cursor:pointer}.radioWrapper.sc-z-input .radioLabel.sc-z-input z-icon.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.sc-z-input z-icon.sc-z-input{fill:inherit;cursor:pointer}.radioWrapper.sc-z-input .radioLabel.after.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.after.sc-z-input{flex-direction:row}.radioWrapper.sc-z-input .radioLabel.before.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.before.sc-z-input{flex-direction:row-reverse}.radioWrapper.sc-z-input .radioLabel.after.sc-z-input>span.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.after.sc-z-input>span.sc-z-input{margin-left:var(--space-unit)}.radioWrapper.sc-z-input .radioLabel.before.sc-z-input>span.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.before.sc-z-input>span.sc-z-input{margin-right:var(--space-unit)}.radioWrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.radioLabel.sc-z-input>z-icon.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.checkboxLabel.sc-z-input>z-icon.sc-z-input{box-shadow:var(--shadow-focus-primary);border-radius:var(--border-radius-small)}.radioWrapper.sc-z-input>input.sc-z-input:disabled+.radioLabel.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input:disabled+.checkboxLabel.sc-z-input{color:var(--color-disabled02)}.radioWrapper.sc-z-input>input.sc-z-input:disabled+.radioLabel.sc-z-input>z-icon.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input:disabled+.checkboxLabel.sc-z-input>z-icon.sc-z-input{fill:var(--color-disabled01);cursor:default}";

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
    this.labelPosition = index$1.LabelPositions.right;
    /** render clear icon when typing (optional): available for text */
    this.hasclearicon = true;
    this.isTyping = false;
    this.passwordHidden = true;
    this.typingtimeout = 300;
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
  /** get checked status */
  async isChecked() {
    switch (this.type) {
      case index$1.InputTypeEnum.checkbox:
      case index$1.InputTypeEnum.radio:
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
    if (this.type === index$1.InputTypeEnum.textarea) {
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
  renderInputText(type = index$1.InputTypeEnum.text) {
    const attr = this.getTextAttributes();
    if (this.icon || type === index$1.InputTypeEnum.password) {
      attr.class = Object.assign(Object.assign({}, attr.class), { hasIcon: true });
    }
    if (this.hasclearicon) {
      attr.class = Object.assign(Object.assign({}, attr.class), { hasClearIcon: true });
    }
    return (index.h("div", { class: "textWrapper" }, this.renderLabel(), index.h("div", null, index.h("input", Object.assign({ type: type === index$1.InputTypeEnum.password && !this.passwordHidden
        ? index$1.InputTypeEnum.text
        : type }, attr, { "aria-label": this.ariaLabel || this.label })), this.renderIcons()), this.renderMessage()));
  }
  renderLabel() {
    if (!this.label)
      return;
    return (index.h("label", { class: "inputLabel body-5-sb", id: `${this.htmlid}_label`, htmlFor: this.htmlid, "aria-label": this.label }, this.label));
  }
  renderIcons() {
    return (index.h("span", { class: "iconsWrapper" }, this.renderResetIcon(), this.renderIcon()));
  }
  renderIcon() {
    if (this.type === index$1.InputTypeEnum.password) {
      return this.renderShowHidePassword();
    }
    if (!this.icon)
      return;
    return (index.h("button", { type: "button", class: "iconButton inputIcon", tabIndex: -1 }, index.h("z-icon", { name: this.icon })));
  }
  renderResetIcon() {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly)
      return;
    return (index.h("button", { type: "button", class: "iconButton resetIcon", "aria-label": "cancella il contenuto dell'input", onClick: () => this.emitInputChange("") }, index.h("z-icon", { name: "multiply" })));
  }
  renderShowHidePassword() {
    return (index.h("button", { type: "button", class: "iconButton showHidePasswordIcon", disabled: this.disabled, "aria-label": this.passwordHidden ? "mostra password" : "nascondi password", onClick: () => (this.passwordHidden = !this.passwordHidden) }, index.h("z-icon", { name: this.passwordHidden ? "view-filled" : "view-off-filled" })));
  }
  renderMessage() {
    if (utils.boolean(this.message) === false)
      return;
    return (index.h("z-input-message", { message: utils.boolean(this.message) === true ? undefined : this.message, status: this.status }));
  }
  /* END text/password/email/number */
  /* START textarea */
  renderTextarea() {
    const attributes = this.getTextAttributes();
    return (index.h("div", { class: "textWrapper" }, this.renderLabel(), index.h("div", { class: Object.assign(Object.assign({}, attributes.class), { textareaWrapper: true, readonly: attributes.readonly }) }, index.h("textarea", Object.assign({}, attributes, { "aria-label": this.ariaLabel || this.label }))), this.renderMessage()));
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
        after: this.labelPosition === index$1.LabelPositions.right,
        before: this.labelPosition === index$1.LabelPositions.left,
      } }, index.h("z-icon", { name: this.checked ? "checkbox-checked" : "checkbox", "aria-hidden": "true" }), this.label && index.h("span", { innerHTML: this.label }))));
  }
  /* END checkbox */
  /* START radio */
  renderRadio() {
    return (index.h("div", { class: "radioWrapper" }, index.h("input", { id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, onChange: this.handleCheck.bind(this), value: this.value }), index.h("label", { htmlFor: this.htmlid, class: {
        radioLabel: true,
        after: this.labelPosition === index$1.LabelPositions.right,
        before: this.labelPosition === index$1.LabelPositions.left,
      } }, index.h("z-icon", { name: this.checked ? "radio-button-checked" : "radio-button", "aria-hidden": "true" }), this.label && index.h("span", { innerHTML: this.label }))));
  }
  /* END radio */
  render() {
    switch (this.type) {
      case index$1.InputTypeEnum.textarea:
        return this.renderTextarea();
      case index$1.InputTypeEnum.checkbox:
        return this.renderCheckbox();
      case index$1.InputTypeEnum.radio:
        return this.renderRadio();
      default:
        return this.renderInputText(this.type);
    }
  }
  get hostElement() { return index.getElement(this); }
};
ZInput.style = stylesCss$4;

const stylesCss$3 = ":host{display:flex;align-items:start;min-height:calc(var(--space-unit) * 2);margin-top:var(--space-unit);color:var(--color-text05);fill:currentColor;font-family:var(--font-family-sans);font-size:var(--font-size-2);letter-spacing:0.16px}:host([status='success']){color:var(--color-text-success)}:host([status='error']){color:var(--color-text-error)}:host([status='warning']){color:var(--color-warning02)}:host(:focus){outline:none}:host>z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);margin:calc(var(--space-unit) / 3) var(--space-unit) 0 0}";

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
ZInputMessage.style = stylesCss$3;

const stylesCss$2 = ":host{--font-size-link:inherit;--font-weight-link:inherit}:host{font-family:var(--dashboard-font);font-weight:var(--font-weight-link);font-size:var(--font-size-link);line-height:inherit;outline:none}a{cursor:pointer;color:var(--color-link-primary);fill:var(--color-link-primary);display:inline-flex;align-items:center;text-decoration:none;padding:calc(var(--space-unit) * 0.5) 0;border-top:var(--border-size-medium) solid transparent;border-bottom:var(--border-size-medium) solid transparent}a:hover,a:focus,a:active{text-decoration:underline}a.active{color:var(--color-active-link);fill:var(--color-active-link)}a:hover,a:focus{color:var(--color-hover-link);fill:var(--color-hover-link)}a:active{color:var(--color-pressed-link);fill:var(--color-pressed-link)}a:visited{color:var(--color-visited-link);fill:var(--color-visited-link)}a.disabled,a.inverse.disabled{cursor:default;pointer-events:none;color:var(--color-disabled03);fill:var(--color-disabled03)}a.underline,a.underline:active,a.underline:hover,a.underline:visited,a.underline.disabled,a.underline.black,a.underline.white{text-decoration:underline}a.disabled,a.disabled:active,a.disabled:visited,a.disabled:hover{text-decoration:none}a.inverse{color:var(--color-inverse-link);fill:var(--color-inverse-link)}a.inverse.active{color:var(--color-inverse-active-link);fill:var(--color-inverse-active-link)}a.inverse:hover,a.inverse:focus{color:var(--color-inverse-hover-link);fill:var(--color-inverse-hover-link)}a.inverse:active{color:var(--color-inverse-pressed-link);fill:var(--color-inverse-pressed-link)}a.inverse:visited{color:var(--color-inverse-visited-link);fill:var(--color-inverse-visited-link)}a.black{color:var(--gray800);fill:var(--gray800);text-decoration:none}a.black:hover,a.black.active{color:var(--color-black);fill:var(--color-black)}a.black:visited{color:var(--gray800);fill:var(--gray800)}a.black:hover,a.black:focus,a.black:active{text-decoration:underline}a.black:active{color:var(--gray700);fill:var(--gray700)}a.white,a.white:active,a.white:hover,a.white.active{color:var(--bg-white);fill:var(--bg-white);text-decoration:none}a.white:visited{color:var(--bg-white);fill:var(--bg-white)}a.white:hover,a.white:focus,a.white:active{text-decoration:underline}a.white.disabled,a.black.disabled{color:var(--gray500);fill:var(--gray500)}a>z-icon:first-child{margin-right:8px}a>z-icon:last-child{margin-left:8px}";

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
  componentWillRender() {
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
  componentDidRender() {
    if (this.icon) {
      const height = parseFloat(window.getComputedStyle(this.hostElement).getPropertyValue('font-size'));
      const currentSize = this.big ? 18 : Math.round(height * 1.125);
      if (!Number.isNaN(currentSize) && this.iconSize !== currentSize) {
        this.iconSize = currentSize;
      }
    }
  }
  render() {
    const style = this.big ? { "--font-size-link": "16px", "--font-weight-link": "600" } : {};
    return (index.h(index.Host, { style: style }, index.h("a", { id: this.htmlid, href: this.href ? this.href : null, class: `${this.isdisabled ? "disabled" : ""}
            ${this.isactive ? "active" : ""}
            ${this.textcolor}
            ${this.iswhite ? "white" : ""}
            ${this.underline ? "underline" : ""}`, target: this.target, role: this.href ? "link" : "button", tabindex: this.isdisabled ? -1 : this.htmltabindex, onClick: (e) => this.emitZLinkClick(e, this.htmlid) }, this.iconposition === "right" && index.h("slot", null), this.icon &&
      index.h("z-icon", { style: { "--z-icon-width": this.iconSize.toString(), "--z-icon-height": this.iconSize.toString() }, name: this.icon, height: this.iconSize, width: this.iconSize }), this.iconposition === "left" && index.h("slot", null))));
  }
  get hostElement() { return index.getElement(this); }
};
ZLink.style = stylesCss$2;

const stylesCss$1 = ":host{display:inline-block;vertical-align:top;width:255px;height:64px}img{display:block;margin:auto;width:100%;height:100%;content:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='255px' height='64px' viewBox='0 0 255 64'%3E%3Cg id='Logo/Zanichelli/Centered-(reworked)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Group'%3E%3Cpolygon id='Background' fill='%23E2001A' points='1.70530257e-13 64 254.39 64 254.39 0 1.70530257e-13 0'%3E%3C/polygon%3E%3Cpath d='M233.36,51.3553859 L242.390252,51.3553859 L242.390252,12.6427292 L233.36,12.6427292 L233.36,51.3553859 Z M211.120346,51.3553859 L230.477617,51.3553859 L230.477617,44.5040053 L220.685891,44.5040053 L220.685891,12.6427292 L211.120346,12.6427292 L211.120346,51.3553859 Z M188.880124,51.3553859 L208.23551,51.3553859 L208.23551,44.5040053 L198.445669,44.5040053 L198.445669,12.6427292 L188.880124,12.6427292 L188.880124,51.3553859 Z M165.354444,12.6427292 L165.354444,51.3553859 L185.999058,51.3553859 L185.999058,44.5021204 L175.027425,44.5021204 L175.027425,35.1778343 L185.377062,35.1778343 L185.377062,28.2699086 L175.027425,28.2699086 L175.027425,19.4978796 L185.999058,19.4978796 L185.999058,12.6427292 L165.354444,12.6427292 Z M136.666196,51.3553859 L146.239281,51.3553859 L146.239281,35.1778343 L152.902178,35.1778343 L152.902178,51.3553859 L162.473377,51.3553859 L162.473377,12.6427292 L152.902178,12.6427292 L152.902178,28.2717934 L146.239281,28.2717934 L146.239281,12.6427292 L136.666196,12.6427292 L136.666196,51.3553859 Z M96.064744,51.3553859 L105.098765,51.3553859 L105.098765,12.6427292 L96.064744,12.6427292 L96.064744,51.3553859 Z M53.2364527,36.5160682 L50.6824993,19.7429083 L48.0757704,36.5160682 L53.2364527,36.5160682 Z M65.4935444,51.3553859 L56.2710395,51.3553859 L54.9441146,42.5286966 L47.7101121,42.5286966 L46.3304118,51.3553859 L37.1060221,51.3553859 L45.0053718,12.6427292 L57.5960795,12.6427292 L65.4935444,51.3553859 Z M85.0468382,37.7581755 L76.7969089,12.6427292 L67.3764961,12.6427292 L67.3764961,51.3553859 L75.4040147,51.3553859 L75.4040147,26.132504 L83.5955141,51.3553859 L93.1855622,51.3553859 L93.1855622,12.6427292 L85.0468382,12.6427292 L85.0468382,37.7581755 Z M107.977948,32 C107.977948,34.5200264 107.977948,36.7893695 108.187165,39.1246819 C108.396382,41.4713034 108.818585,43.6878711 109.678071,45.6009801 C111.423429,49.487513 114.932995,52 121.708982,52 C129.508435,52 133.787014,48.4753558 133.787014,38.0220526 L133.787014,37.5640373 L124.937707,37.5640373 L124.922628,38.0050891 C124.894356,38.7571388 124.884931,39.6185091 124.826501,40.4855339 C124.769956,41.3431345 124.66629,42.1875412 124.460843,42.9301668 C124.048064,44.3965696 123.279051,45.3559514 121.708982,45.3559514 C117.743286,45.3559514 117.057205,42.0574875 117.057205,32 C117.057205,21.9425125 117.743286,18.6440486 121.708982,18.6440486 C123.605127,18.6440486 124.547546,20.0030157 124.547546,25.1806616 L124.547546,25.6424465 L133.344077,25.6424465 L133.361041,25.1995099 C133.689003,16.7855998 130.235982,12 121.708982,12 C114.934879,12 111.427199,14.4823297 109.678071,18.3594383 C108.818585,20.265008 108.396382,22.4778061 108.187165,24.830082 C107.977948,27.1710489 107.977948,29.4554707 107.977948,32 L107.977948,32 Z M34.9007634,12.6446141 L34.9007634,20.3196683 L21.6051268,44.5040053 L35.2268401,44.5040053 L35.2268401,51.3553859 L12,51.3553859 L12,43.7915371 L25.2975214,19.4997644 L13.683159,19.4997644 L13.683159,12.6446141 L34.9007634,12.6446141 Z' id='Logotipo-(reworked)' fill='%23FFFFFF'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}a{display:block;width:100%;height:100%}:host(.mobile){width:31px;height:40px}:host(.mobile) img{content:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31px' height='40px' viewBox='0 0 31 40'%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Topbar/Mobile/Logged' transform='translate(-16.000000, -4.000000)'%3E%3Cg id='Group' transform='translate(16.000000, 4.000000)'%3E%3Cpolygon id='Fill-1' fill='%23E2001A' points='0 40 30.625 40 30.625 0 0 0'%3E%3C/polygon%3E%3Cpolygon id='Fill-2' fill='%23FEFEFE' points='8.17111587 6.20689655 23.4311708 6.20689655 23.4311708 11.671267 13.8691261 28.9163861 23.6647727 28.9163861 23.6647727 33.7931034 6.96022727 33.7931034 6.96022727 28.408218 16.522272 11.0831673 8.17111587 11.0831673'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}";

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
    return (index.h(index.Host, { style: style, class: { "mobile": !!this.mobileLogo } }, this.link ?
      index.h("a", { href: this.link, target: this.targetBlank ? "_blank" : "_self" }, index.h("img", { alt: this.imageAlt })) :
      index.h("img", { alt: this.imageAlt })));
  }
};
ZLogo.style = stylesCss$1;

const stylesCss = ".flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08)}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.arrowRight:before,.flatpickr-calendar.rightMost:after,.flatpickr-calendar.arrowRight:after{left:auto;right:22px}.flatpickr-calendar.arrowCenter:before,.flatpickr-calendar.arrowCenter:after{left:50%;right:50%}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9)}.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,.flatpickr-months .flatpickr-next-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{left:0}.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{right:0}.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:transparent;border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:focus,.flatpickr-current-month .flatpickr-monthDropdown-months:active{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:transparent;outline:none;padding:0}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.dayContainer+.dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57,57,57,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,0.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.flatpickr-monthSelect-months{margin:10px 1px 3px 1px;flex-wrap:wrap}.flatpickr-monthSelect-month{background:none;border:1px solid transparent;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;display:inline-block;font-weight:400;margin:0.5px;justify-content:center;padding:10px;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;text-align:center;width:33%}.flatpickr-monthSelect-month.flatpickr-disabled{color:#eee}.flatpickr-monthSelect-month.flatpickr-disabled:hover,.flatpickr-monthSelect-month.flatpickr-disabled:focus{cursor:not-allowed;background:none !important}.flatpickr-monthSelect-theme-dark{background:#3f4458}.flatpickr-monthSelect-theme-dark .flatpickr-current-month input.cur-year{color:#fff}.flatpickr-monthSelect-theme-dark .flatpickr-months .flatpickr-prev-month,.flatpickr-monthSelect-theme-dark .flatpickr-months .flatpickr-next-month{color:#fff;fill:#fff}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month{color:rgba(255, 255, 255, 0.95)}.flatpickr-monthSelect-month.today{border-color:#959ea9}.flatpickr-monthSelect-month.inRange,.flatpickr-monthSelect-month.inRange.today,.flatpickr-monthSelect-month:hover,.flatpickr-monthSelect-month:focus{background:#e6e6e6;cursor:pointer;outline:0;border-color:#e6e6e6}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.inRange,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month:hover,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month:focus{background:#646c8c;border-color:#646c8c}.flatpickr-monthSelect-month.today:hover,.flatpickr-monthSelect-month.today:focus{background:#959ea9;border-color:#959ea9;color:#fff}.flatpickr-monthSelect-month.selected,.flatpickr-monthSelect-month.startRange,.flatpickr-monthSelect-month.endRange{background-color:#569ff7;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-monthSelect-month.startRange{border-radius:50px 0 0 50px}.flatpickr-monthSelect-month.endRange{border-radius:0 50px 50px 0}.flatpickr-monthSelect-month.startRange.endRange{border-radius:50px}.flatpickr-monthSelect-month.inRange{border-radius:0;box-shadow:-5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6}.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.selected,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.startRange,.flatpickr-monthSelect-theme-dark .flatpickr-monthSelect-month.endRange{background:#80cbc4;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#80cbc4}:host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-range-picker--toggle-height:0}z-date-picker{position:relative}z-date-picker>div>*{cursor:pointer !important}z-range-picker{position:relative}.flatpickr-toggle-container{width:fit-content}.range-picker-container>div{cursor:pointer !important;position:relative}.hidden-input{visibility:hidden !important;position:absolute;width:0;height:0;bottom:0}.flatpickr-calendar::before,.flatpickr-calendar::after{display:none}.flatpickr-calendar{font-family:var(--font-family-sans) !important;position:absolute !important;border-radius:2px;box-shadow:var(--shadow-2);padding-top:calc(var(--space-unit) * 2);left:0 !important;top:var(--z-range-picker--toggle-height) !important}.months.top>.flatpickr-calendar{top:-288px !important}.date.top>.flatpickr-calendar,.date.top>div>.flatpickr-calendar{top:-401px !important}.date-time.top>.flatpickr-calendar,.date-time.top>div>.flatpickr-calendar{top:-523px !important}.flatpickr-calendar,.flatpickr-innerContainer,.flatpickr-days,.dayContainer,.flatpickr-rContainer,.flatpickr-monthSelect-months{width:calc(var(--space-unit) * 42) !important;max-width:calc(var(--space-unit) * 42) !important}.flatpickr-monthSelect-months{box-sizing:border-box;padding:0 !important;margin:calc(var(--space-unit) * 2) 0 !important}.flatpickr-months{position:relative;align-items:center;margin-bottom:var(--space-unit) 0 !important;height:calc(var(--space-unit) * 6) !important}.flatpickr-month{overflow:visible !important;height:calc(var(--space-unit) * 6) !important}.flatpickr-current-month{display:flex !important;justify-content:space-evenly;align-items:baseline;width:-webkit-fill-available;height:calc(var(--space-unit) * 6);left:0 !important;padding-top:0}.flatpickr-next-month,.flatpickr-prev-month{display:flex;align-items:center;justify-content:center;position:static !important;height:calc(var(--space-unit) * 4) !important;width:calc(var(--space-unit) * 4) !important;padding:0 !important}.flatpickr-prev-month{margin-left:var(--space-unit)}.flatpickr-next-month{margin-right:var(--space-unit)}.flatpickr-next-month>svg,.flatpickr-prev-month>svg{fill:var(--color-primary01);height:calc(var(--space-unit) * 2) !important;width:calc(var(--space-unit) * 2) !important}.flatpickr-next-month:hover,.flatpickr-prev-month:hover,.flatpickr-next-month:focus,.flatpickr-prev-month:focus{border-radius:var(--border-radius);background-color:var(--color-primary03) !important;border-color:var(--color-primary03) !important;color:var(--color-hover-primary) !important;border:none !important;outline:none !important}.flatpickr-next-month:hover svg,.flatpickr-prev-month:hover svg{fill:var(--color-hover-primary) !important}.flatpickr-next-month:active,.flatpickr-prev-month:active{border-radius:var(--border-radius);background-color:var(--color-surface01) !important;border-color:var(--color-surface01) !important;color:var(--color-primary01) !important;box-shadow:var(--shadow-2) !important}.flatpickr-next-month:focus svg,.flatpickr-prev-month:focus svg{fill:var(--color-primary01) !important}.flatpickr-monthDropdown-months{background:var(--color-surface01) !important;font-size:var(--font-size-3) !important;font-weight:var(--font-rg) !important;color:var(--color-text02) !important;outline:1px solid black !important;width:108px !important;height:calc(var(--space-unit) * 5.5) !important;padding-left:var(--space-unit) !important}.flatpickr-monthDropdown-months:hover,.flatpickr-monthDropdown-months:focus{outline:1px solid var(--color-primary01) !important}.flatpickr-current-month>.numInputWrapper{display:flex;background:var(--color-surface01) !important;color:var(--color-text02);outline:1px solid black !important;height:calc(var(--space-unit) * 5.5) !important;width:calc(var(--space-unit) * 10)}.flatpickr-current-month>.numInputWrapper:hover,.flatpickr-current-month>.numInputWrapper:focus-within{outline:1px solid var(--color-primary01) !important}.flatpickr-current-month>.numInputWrapper>input{font-size:var(--font-size-3) !important;font-weight:var(--font-rg) !important;text-align:center;padding:0 calc(var(--space-unit) * 3) 0 var(--space-unit)}.flatpickr-weekdays{height:calc(var(--space-unit) * 6);border-bottom:1px solid var(--color-surface03)}.flatpickr-weekday{font-weight:var(--font-rg) !important;font-size:var(--font-size-3) !important}.flatpickr-day,.flatpickr-monthSelect-month{height:calc(var(--space-unit) * 6) !important;width:calc(var(--space-unit) * 6) !important;max-width:100% !important;font-size:var(--font-size-3) !important;line-height:calc(var(--space-unit) * 6) !important;margin:0 !important;border:none;border-radius:0 !important;box-shadow:none !important}.flatpickr-day{width:calc(var(--space-unit) * 6) !important;line-height:calc(var(--space-unit) * 6) !important;border:none}.flatpickr-monthSelect-month{width:calc(var(--space-unit) * 14) !important;padding:0 !important;line-height:calc(var(--space-unit) * 5) !important;border:2px solid var(--color-surface01) !important}.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.selected:hover,.flatpickr-monthSelect-month:hover,.flatpickr-monthSelect-month:focus{background-color:var(--color-hover-primary) !important;border-color:var(--color-hover-primary) !important;color:var(--color-text04) !important}.flatpickr-day.today,.flatpickr-monthSelect-month.today{border:2px solid var(--color-hover-primary) !important}.flatpickr-day.selected,.flatpickr-monthSelect-month.selected{background-color:var(--color-primary01) !important;border-color:var(--color-primary01) !important}.flatpickr-weekday:nth-child(6),.flatpickr-weekday:nth-child(7),.flatpickr-day:nth-child(7n+6),.flatpickr-day:nth-child(7n+7){font-weight:var(--font-sb) !important}.flatpickr-time{display:block;text-align:left;height:90px !important;max-height:90px !important}.flatpickr-time::before{display:block;content:\"Orario\";font-size:var(--font-size-1);font-weight:var(--font-sb);text-transform:uppercase;color:var(--color-text02) !important;width:100%;padding-left:var(--space-unit)}.flatpickr-time.time24hr{margin:calc(var(--space-unit) * 2) !important}.flatpickr-time.time24hr>.numInputWrapper>input:hover,.flatpickr-time.time24hr>.numInputWrapper>input:focus,.flatpickr-time.time24hr>.numInputWrapper:hover{background-color:var(--color-surface01) !important}.flatpickr-time.time24hr>div{height:calc(var(--space-unit) * 5.5) !important;width:calc(var(--space-unit) * 10) !important;margin-left:var(--space-unit) !important;margin-right:var(--space-unit) !important}.flatpickr-time-separator{display:flex;align-items:center;justify-content:center;height:calc(var(--space-unit) * 5.5) !important;font-weight:unset !important}.flatpickr-minute,.flatpickr-hour{font-size:var(--font-size-3) !important;font-weight:var(--font-rg) !important;outline:1px solid black !important}.numInputWrapper:hover .flatpickr-minute,.numInputWrapper:hover .flatpickr-hour,.flatpickr-minute:focus,.flatpickr-hour:focus{outline:1px solid var(--color-primary01) !important}.arrowUp,.arrowDown{opacity:1 !important;border:none !important;height:calc(var(--space-unit) * 2) !important;width:calc(var(--space-unit) * 2) !important;padding:0 !important}.arrowUp{margin-top:calc(var(--space-unit) / 2) !important;margin-right:calc(var(--space-unit) / 2) !important}.arrowDown{top:auto !important;margin-top:calc(var(--space-unit) * 3) !important;margin-right:calc(var(--space-unit) / 2) !important}.arrowUp:hover,.arrowDown:hover{border-radius:var(--border-radius);background-color:var(--color-primary03) !important;border-color:var(--color-primary03) !important;color:var(--color-hover-primary) !important}.arrowUp:active,.arrowDown:active{border-radius:var(--border-radius);background-color:var(--color-surface01) !important;border-color:var(--color-surface01) !important;color:var(--color-primary01) !important;box-shadow:var(--shadow-2) !important}.arrowUp::after,.arrowDown::after{border:solid var(--color-primary01) !important;border-width:0 1px 1px 0 !important;padding:2.5px !important}.arrowUp::after{transform:rotate(-135deg);top:0 !important;margin-left:5.5px !important;margin-top:6px !important}.arrowDown::after{transform:rotate(45deg);top:0 !important;left:5.5px !important;margin-top:4px !important}.flatpickr-day.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-monthSelect-month.inRange{background-color:var(--color-primary03) !important;border-color:var(--color-primary03) !important}.flatpickr-day.inRange:hover,.flatpickr-day.today.inRange:hover,.flatpickr-day.prevMonthDay.inRange:hover,.flatpickr-monthSelect-month.inRange:hover{background-color:var(--color-hover-primary) !important;border-color:var(--color-hover-primary) !important}.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-monthSelect-month.startRange,.flatpickr-monthSelect-month.endRange{background-color:var(--color-primary01) !important;border-color:var(--color-primary01) !important}.flatpickr-day.prevMonthDay.selected.startRange,.flatpickr-day.prevMonthDay.selected.endRange{background-color:var(--color-primary01) !important;border-color:var(--color-primary01) !important}.flatpickr-range.second-input{cursor:pointer}.range-picker-container{display:flex;gap:16px}";

const ZRangePicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dateSelect = index.createEvent(this, "dateSelect", 7);
    /** [Optional] datepicker mode: date, datetime, only months */
    this.mode = index$1.ZDatePickerMode.date;
    this.flatpickrPosition = index$1.ZDatePickerPosition.bottom;
    this.activeInput = "start-input";
    this.flatpickrInstance = null;
    this.flatpickrInstance2 = null;
  }
  handleClick() {
    this.getFocusedInput();
  }
  handleKeyDown(ev) {
    let currentInputState = this.activeInput === "start-input"
      ? { picker: this.flatpickrInstance, index: 0 }
      : { picker: this.flatpickrInstance2, index: 1 };
    let isCalendarOpened = document.activeElement.closest(".flatpickr-calendar");
    this.getFocusedInput();
    if (ev.key === "Enter" || ev.key === " ") {
      if (document.activeElement.classList.contains(`${this.rangePickerId}`) ||
        document.activeElement.classList.contains(`${this.rangePickerId}-2`)) {
        !isCalendarOpened && currentInputState.picker.open();
      }
      let isPrevArrowEntered = document.activeElement.classList.contains("flatpickr-prev-month");
      let isNextArrowEntered = document.activeElement.classList.contains("flatpickr-next-month");
      let arrowPressed = isPrevArrowEntered || isNextArrowEntered;
      arrowPressed && ev.key === " " && ev.preventDefault();
      isPrevArrowEntered && currentInputState.picker.changeMonth(-1);
      isNextArrowEntered && currentInputState.picker.changeMonth(1);
    }
  }
  /** Set background color before or after first selected date, before selecting the second one */
  onMouseOver(e) {
    let currentInputState = this.activeInput === "start-input"
      ? { picker: this.flatpickrInstance, index: 0 }
      : { picker: this.flatpickrInstance2, index: 1 };
    this.setRangeHoverStyle(e, currentInputState.picker, this.element.getElementsByClassName("flatpickr-calendar")[currentInputState.index]);
  }
  componentDidLoad() {
    let config = {
      enableTime: this.mode === index$1.ZDatePickerMode.dateTime,
      locale: utils$1.it.Italian,
      allowInput: true,
      dateFormat: this.mode === index$1.ZDatePickerMode.dateTime ? "d-m-Y - H:i" : "d-m-Y",
      ariaDateFormat: "d F Y",
      minuteIncrement: 1,
      time_24hr: true,
      onChange: (selectedDates, _dateStr, instance) => {
        this.onDateSelect(selectedDates, instance);
      },
      onOpen: () => {
        utils$1.setAriaOptions(this.element, this.mode);
        this.flatpickrPosition = utils$1.setFlatpickrPosition(this.element, this.mode);
        this.setRangeStyle();
        this.getFocusedInput();
        this.getCurrentMonth();
      },
      onYearChange: () => {
        this.setRangeStyle();
      },
      onMonthChange: () => {
        this.setRangeStyle();
      },
      onKeyDown: () => {
        utils$1.setAriaOptions(this.element, this.mode);
      },
      wrap: true,
    };
    this.flatpickrInstance = utils$1.flatpickr(`.${this.rangePickerId}-container`, Object.assign(Object.assign({}, config), { mode: "multiple", appendTo: this.element.querySelector(`.${this.rangePickerId}-container`) }));
    this.flatpickrInstance2 = utils$1.flatpickr(`.${this.rangePickerId}-container-2`, Object.assign(Object.assign({}, config), { mode: "multiple", appendTo: this.element.querySelector(`.${this.rangePickerId}-container-2`) }));
    this.element.querySelectorAll(".flatpickr-weekday").forEach((element) => {
      element.innerHTML = element.innerHTML.trim().charAt(0);
    });
  }
  onDateSelect(selectedDates, instance) {
    const firstInputElement = this.element.querySelectorAll("z-input")[0];
    const secondInputElement = this.element.querySelectorAll("z-input")[1];
    let firstInputActive = this.activeInput === "start-input";
    /** If range is already set, clicking another date it will update it */
    if (selectedDates.length === 3) {
      instance.setDate([selectedDates[0], selectedDates[2]]);
    }
    /** Order the selected dates ASC and update the two flatpickers */
    if (instance.selectedDates.length > 1) {
      if (firstInputActive) {
        /** First Flatpickr selection */
        let orderedDates = instance.selectedDates.sort((a, b) => b - a);
        instance.setDate([...orderedDates]);
        this.flatpickrInstance2.setDate([
          instance.selectedDates[1],
          instance.selectedDates[0],
        ]);
      }
      else {
        /** Second Flatpickr selection */
        let orderedDates = instance.selectedDates.sort((a, b) => a - b);
        instance.setDate([...orderedDates]);
        this.flatpickrInstance.setDate([
          instance.selectedDates[1],
          instance.selectedDates[0],
        ]);
        this.flatpickrInstance.setDate(this.flatpickrInstance.selectedDates.sort((a, b) => b - a));
      }
      this.printDate(instance.selectedDates[0], instance.selectedDates[1]);
    }
    let index = instance.selectedDates.length - 1;
    /** If exists, set second date value into first input */
    if (instance.selectedDates[0]) {
      firstInputElement.value = this.getDate(instance.selectedDates[firstInputActive ? index : 0]);
    }
    /** If exists, set second date value into second input */
    if (instance.selectedDates[1]) {
      secondInputElement.value = this.getDate(instance.selectedDates[firstInputActive ? 0 : index]);
    }
  }
  getDate(date) {
    if (this.mode === index$1.ZDatePickerMode.date) {
      return `${utils$1.flatpickr.formatDate(date, "d-m-Y")}`;
    }
    else {
      return `${utils$1.flatpickr.formatDate(date, "d-m-Y - H:i")}`;
    }
  }
  printDate(firstDate, lastDate) {
    let orderedDates = [firstDate, lastDate].sort((a, b) => a - b);
    this.dateSelect.emit([
      this.getDate(orderedDates[0]),
      this.getDate(orderedDates[1]),
    ]);
  }
  /** Replace month word to month number */
  parseDate(date) {
    const month = date.split(" ")[1];
    const months = {
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
    };
    const pieces = date.replace(month, months[month]).split(" ");
    return new Date(parseInt(pieces[2]), parseInt(pieces[1]) - 1, parseInt(pieces[0]));
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
  /** Set current month after flatpickr opened */
  getCurrentMonth() {
    let currentInputState = this.activeInput === "start-input"
      ? { picker: this.flatpickrInstance, index: 0 }
      : { picker: this.flatpickrInstance2, index: 1 };
    let length = currentInputState.picker.selectedDates.length;
    if (length > 0) {
      let dateMonth = currentInputState.picker.selectedDates[length - 1].getMonth();
      let dateYear = currentInputState.picker.selectedDates[length - 1].getFullYear();
      currentInputState.picker.changeMonth(dateMonth, false);
      currentInputState.picker.changeYear(dateYear, false);
    }
  }
  /** Set style of the days between the two selected dates */
  setRangeStyle() {
    let currentInputState = this.activeInput === "start-input"
      ? { picker: this.flatpickrInstance, index: 0 }
      : { picker: this.flatpickrInstance2, index: 1 };
    let calendar = this.element.getElementsByClassName("flatpickr-calendar")[currentInputState.index];
    Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach((element) => {
      let selectedDatesCount = this.flatpickrInstance.selectedDates.length;
      if (selectedDatesCount === 2) {
        let date = this.parseDate(element.ariaLabel);
        let firstDate = this.flatpickrInstance.selectedDates[1];
        let secondDate = this.flatpickrInstance.selectedDates[0];
        let selected = element.className.includes("selected");
        if (date > firstDate && date < secondDate && !selected) {
          element.classList.toggle("inRange", true);
        }
      }
    });
  }
  /** Set style of the days between first selected date and hovered date */
  setRangeHoverStyle(e, flatpickr, calendar) {
    const isDay = e.target.classList.contains("flatpickr-day");
    if (isDay) {
      let calendarDate = e.target.ariaLabel;
      let hoveredDate = this.parseDate(calendarDate);
      Array.from(calendar.getElementsByClassName("flatpickr-day")).forEach((element) => {
        let date = this.parseDate(element.ariaLabel);
        let selectedDatesCount = flatpickr.selectedDates.length;
        let firstDate = selectedDatesCount === 1 ? flatpickr.selectedDates[0] : null;
        let before = firstDate && hoveredDate < firstDate;
        let after = firstDate && hoveredDate > firstDate;
        let selected = element.className.includes("selected");
        if (firstDate &&
          ((before && date > hoveredDate && date < firstDate && !selected) ||
            (after && date < hoveredDate && date > firstDate && !selected))) {
          element.classList.toggle("inRange", true);
        }
        else {
          element.classList.remove("inRange");
        }
        this.setRangeStyle();
      });
    }
  }
  onStopTyping(value) {
    let text = value.detail.value;
    let englishData = text.split("-");
    let time = this.mode === index$1.ZDatePickerMode.dateTime ? `${englishData[3]}:00` : "";
    let englishParsedData = `${englishData[2]}-${englishData[1]}-${englishData[0]}T${time}`
      .split(" ")
      .join("");
    let isDate = Date.parse(englishParsedData);
    if (this.activeInput === "start-input") {
      /** Remove second value from either the flatpickers if input is cleared */
      if (text === "") {
        if (this.flatpickrInstance.selectedDates.length === 1) {
          this.flatpickrInstance.setDate([]);
          this.flatpickrInstance2.setDate([]);
        }
        else {
          this.flatpickrInstance.setDate([
            this.flatpickrInstance.selectedDates[0],
          ]);
          this.flatpickrInstance2.setDate([
            this.flatpickrInstance2.selectedDates[1],
          ]);
        }
      }
      else {
        /** If the value inserted is a correct date, update the first input value */
        if (!Number.isNaN(isDate)) {
          this.flatpickrInstance.setDate([
            this.flatpickrInstance.selectedDates[0],
            text,
          ]);
          this.flatpickrInstance2.setDate([
            text,
            this.flatpickrInstance2.selectedDates[1],
          ]);
          if (this.flatpickrInstance.selectedDates.length > 1) {
            this.printDate(new Date(englishParsedData), this.flatpickrInstance.selectedDates[0]);
          }
          this.setRangeStyle();
        }
      }
    }
    else {
      /** Remove second value from either the flatpickers if input is cleared */
      if (text === "") {
        if (this.flatpickrInstance2.selectedDates.length === 1) {
          this.flatpickrInstance.setDate([]);
          this.flatpickrInstance2.setDate([]);
        }
        else {
          this.flatpickrInstance.setDate([
            this.flatpickrInstance.selectedDates[1],
          ]);
          this.flatpickrInstance2.setDate([
            this.flatpickrInstance2.selectedDates[0],
          ]);
        }
      }
      else {
        /** If the value inserted is a correct date, update the second input value */
        if (!Number.isNaN(isDate)) {
          this.flatpickrInstance.setDate([
            text,
            this.flatpickrInstance.selectedDates[1],
          ]);
          this.flatpickrInstance2.setDate([
            this.flatpickrInstance2.selectedDates[0],
            text,
          ]);
          if (this.flatpickrInstance2.selectedDates.length > 1) {
            this.printDate(new Date(englishParsedData), this.flatpickrInstance2.selectedDates[0]);
          }
          this.setRangeStyle();
        }
      }
    }
  }
  render() {
    const zInputProps = {
      type: index$1.InputTypeEnum.text,
      icon: "event",
      tabindex: "0",
      message: false,
      onStopTyping: (value) => {
        this.onStopTyping(value);
      },
    };
    return (index.h("div", { class: {
        ["range-picker-container"]: true,
        [this.mode]: true,
        [this.activeInput]: true,
        [this.flatpickrPosition]: true,
      } }, index.h("div", { class: `${this.rangePickerId}-container` }, index.h("input", { class: "hidden-input", "data-input": true }), index.h("z-input", Object.assign({}, zInputProps, { class: `start-input ${this.rangePickerId}`, ariaLabel: this.firstAriaLabel, label: this.firstLabel, "data-toggle": true }))), index.h("div", { class: `${this.rangePickerId}-container-2` }, index.h("input", { class: "hidden-input", "data-input": true }), index.h("z-input", Object.assign({}, zInputProps, { class: `end-input ${this.rangePickerId}-2`, ariaLabel: this.secondAriaLabel, label: this.secondLabel, "data-toggle": true })))));
  }
  get element() { return index.getElement(this); }
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
