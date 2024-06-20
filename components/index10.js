import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { k as LabelPosition, e as ControlSize, I as InputType } from './index2.js';
import { r as randomId, b as boolean } from './utils.js';
import { d as defineCustomElement$2 } from './index9.js';
import { d as defineCustomElement$1 } from './index11.js';

const stylesGeneralCss = ".sc-z-input-h{display:inline-block;width:inherit}input.sc-z-input::-ms-clear,input.sc-z-input::-ms-reveal{display:none}.sc-z-input-h input.sc-z-input::-ms-clear,.sc-z-input-h input.sc-z-input::-ms-reveal{display:none}input.sc-z-input,textarea.sc-z-input,.textarea-wrapper.sc-z-input{-webkit-box-sizing:border-box;box-sizing:border-box;border:var(--border-size-small) solid var(--gray700);background:var(--color-input-field01);border-radius:var(--border-radius-small);color:var(--gray900);fill:var(--gray900);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg);outline:none}[size=\"small\"].sc-z-input-h input.sc-z-input,[size=\"small\"].sc-z-input-h textarea.sc-z-input,[size=\"small\"].sc-z-input-h .textarea-wrapper.sc-z-input,[size=\"x-small\"].sc-z-input-h input.sc-z-input,[size=\"x-small\"].sc-z-input-h textarea.sc-z-input,[size=\"x-small\"].sc-z-input-h .textarea-wrapper.sc-z-input{font-size:var(--font-size-2)}.cursor-select.sc-z-input-h input.sc-z-input{cursor:pointer}.sc-z-input-h:not(.active-select) input.sc-z-input:focus:focus-visible,[readonly=\"false\"].sc-z-input-h .textarea-wrapper.sc-z-input:focus-within{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary)}input.sc-z-input:focus:focus-visible,textarea.sc-z-input:focus:focus-visible{color:var(--color-input-field02)}.active-select.sc-z-input-h input.sc-z-input{border:var(--border-size-small) solid var(--color-primary01)}.cursor-select.sc-z-input-h input.sc-z-input:focus:focus-visible{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary)}.sc-z-input-h input[readonly].sc-z-input:focus:focus-visible{-webkit-box-shadow:none;box-shadow:none}.filled.sc-z-input{border-color:var(--color-surface05)}.input-success.sc-z-input{border-color:var(--color-success01);background:var(--color-success-inverse);fill:var(--color-success01)}.input-error.sc-z-input{border-color:var(--color-error01);background:var(--color-error-inverse);fill:var(--color-error01)}.input-warning.sc-z-input{border-color:var(--color-warning01);background:var(--color-warning-inverse);fill:var(--color-warning01)}input.sc-z-input:not([readonly]):hover,.textarea-wrapper.sc-z-input:hover{outline:var(--border-size-medium) solid var(--gray700);outline-offset:-2px}.sc-z-input-h:not(.active-select) input[readonly].sc-z-input,.readonly.sc-z-input{border-color:var(--color-disabled01);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) .textarea-wrapper.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) z-icon.sc-z-input{border-color:var(--color-disabled01);-webkit-box-shadow:none;box-shadow:none;color:var(--color-disabled03);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input:hover{border-width:var(--border-size-small)}input.sc-z-input::-webkit-input-placeholder,textarea.sc-z-input::-webkit-input-placeholder{color:var(--color-text05)}input.sc-z-input::-moz-placeholder,textarea.sc-z-input::-moz-placeholder{color:var(--color-text05)}input.sc-z-input:-ms-input-placeholder,textarea.sc-z-input:-ms-input-placeholder{color:var(--color-text05)}input.sc-z-input::-ms-input-placeholder,textarea.sc-z-input::-ms-input-placeholder{color:var(--color-text05)}input.sc-z-input::placeholder,textarea.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input::-webkit-textarea-placeholder{color:var(--color-text05)}.sc-z-input:-ms-textarea-placeholder{color:var(--color-text05)}.sc-z-input::-webkit-input-placeholder{color:var(--color-text05)}.sc-z-input::-moz-placeholder{color:var(--color-text05)}.sc-z-input:-ms-input-placeholder{color:var(--color-text05)}.sc-z-input::-ms-input-placeholder{color:var(--color-text05)}.sc-z-input::placeholder{color:var(--color-text05)}label.input-label.sc-z-input{display:block;padding-bottom:var(--space-unit);color:var(--color-default-text);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);text-align:left;text-transform:uppercase}[disabled].sc-z-input-h:not([disabled=\"false\"]) label.input-label.sc-z-input{color:var(--color-disabled03)}";
const ZInputStyle0 = stylesGeneralCss;

const stylesTextCss = ".text-wrapper.sc-z-input>div.sc-z-input{position:relative;z-index:1;fill:var(--gray900)}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{width:100%;height:calc(var(--space-unit) * 5.5);-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 calc(var(--space-unit) * 1.5);margin:0}[size=\"small\"].sc-z-input-h .text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{height:calc(var(--space-unit) * 4.5)}[size=\"x-small\"].sc-z-input-h .text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{height:calc(var(--space-unit) * 4)}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.sc-z-input,.text-wrapper.sc-z-input>div.sc-z-input>input.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 5.25)}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 8)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input{position:absolute;z-index:2;top:50%;right:calc(var(--space-unit) * 1.5);display:-ms-flexbox;display:flex;pointer-events:none;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input{padding:0;border:0;background:none;color:inherit;font:inherit;pointer-events:initial}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input+button.icon-button.sc-z-input{margin-left:calc(var(--space-unit) * 0.5)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.hidden.sc-z-input{display:none}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.reset-icon.sc-z-input,.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.toggle-password-icon.sc-z-input{cursor:pointer}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.sc-z-input{--z-icon-width:18px;--z-icon-height:18px;display:block}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.small.sc-z-input,.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.x-small.sc-z-input{--z-icon-width:16px;--z-icon-height:16px}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #fff inset;-webkit-text-fill-color:currentcolor}";
const ZInputStyle1 = stylesTextCss;

const stylesTextareaCss = ".textarea-wrapper.sc-z-input{padding:calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}textarea.sc-z-input::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-track{background-color:transparent}textarea.sc-z-input::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}textarea.sc-z-input{width:100%;min-height:132px;padding:0;border:none;margin:0;resize:none}";
const ZInputStyle2 = stylesTextareaCss;

const stylesCheckboxRadioCss = ".radio-wrapper.sc-z-input,.checkbox-wrapper.sc-z-input{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;color:var(--color-default-text);fill:var(--color-primary01);font-family:var(--font-family-sans)}.radio-wrapper.sc-z-input:hover,.checkbox-wrapper.sc-z-input:hover{color:var(--color-hover-primary);fill:currentcolor}.radio-wrapper.sc-z-input>input.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input{position:absolute;z-index:-1;opacity:0;pointer-events:none}.radio-wrapper.sc-z-input .radio-label.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;margin:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1;text-transform:inherit}.radio-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.checkbox-label.sc-z-input{cursor:pointer}.radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{cursor:pointer;fill:inherit}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{--z-icon-width:16px;--z-icon-height:16px}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{font-size:var(--font-size-2)}[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{--z-icon-width:14px;--z-icon-height:14px}[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{font-size:var(--font-size-1)}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input{-ms-flex-direction:row;flex-direction:row}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input{margin-left:var(--space-unit)}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input{margin-right:var(--space-unit)}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input{margin-left:calc(var(--space-unit) * 0.5)}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input{margin-right:calc(var(--space-unit) * 0.5)}.radio-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.checkbox-label.sc-z-input>z-icon.sc-z-input{border-radius:var(--border-radius-small);-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input{color:var(--color-disabled03)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input>z-icon.sc-z-input{cursor:default;fill:var(--color-disabled01)}";
const ZInputStyle3 = stylesCheckboxRadioCss;

const ZInput = /*@__PURE__*/ proxyCustomElement(class ZInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.inputChange = createEvent(this, "inputChange", 7);
        this.startTyping = createEvent(this, "startTyping", 7);
        this.stopTyping = createEvent(this, "stopTyping", 7);
        this.inputCheck = createEvent(this, "inputCheck", 7);
        this.inputFocus = createEvent(this, "inputFocus", 7);
        this.inputBlur = createEvent(this, "inputBlur", 7);
        this.typingtimeout = 300;
        this.htmlid = `id-${randomId()}`;
        this.type = undefined;
        this.name = undefined;
        this.label = undefined;
        this.ariaLabel = "";
        this.ariaExpanded = "";
        this.ariaControls = undefined;
        this.ariaAutocomplete = undefined;
        this.ariaActivedescendant = undefined;
        this.value = undefined;
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.checked = false;
        this.placeholder = undefined;
        this.htmltitle = undefined;
        this.status = undefined;
        this.message = true;
        this.labelPosition = LabelPosition.RIGHT;
        this.autocomplete = undefined;
        this.role = "";
        this.hasclearicon = true;
        this.icon = undefined;
        this.min = undefined;
        this.minlength = undefined;
        this.max = undefined;
        this.maxlength = undefined;
        this.step = undefined;
        this.pattern = undefined;
        this.size = ControlSize.BIG;
        this.isTyping = false;
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
    emitInputFocus() {
        this.inputFocus.emit({ id: this.htmlid });
    }
    emitInputBlur() {
        this.inputBlur.emit({ id: this.htmlid });
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
            minlength: this.minlength,
            maxlength: this.maxlength,
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
    getRoleAttribute() {
        return this.role ? { role: this.role } : {};
    }
    getAriaAttrubutes() {
        const expanded = this.ariaExpanded ? { "aria-expanded": this.ariaExpanded } : {};
        const controls = this.ariaControls ? { "aria-controls": this.ariaControls } : {};
        const autocomplete = this.ariaAutocomplete ? { "aria-autocomplete": this.ariaAutocomplete } : {};
        const activedescendant = this.ariaActivedescendant ? { "aria-activedescendant": this.ariaActivedescendant } : {};
        return Object.assign(Object.assign(Object.assign(Object.assign({}, expanded), controls), autocomplete), activedescendant);
    }
    getFocusBlurAttributes() {
        return {
            onFocus: () => this.emitInputFocus(),
            onBlur: () => this.emitInputBlur(),
        };
    }
    renderInputText(type = InputType.TEXT) {
        const ariaLabel = this.ariaLabel ? { "aria-label": this.ariaLabel } : {};
        const attr = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getTextAttributes()), this.getNumberAttributes(type)), this.getPatternAttribute(type)), ariaLabel), this.getRoleAttribute()), this.getAriaAttrubutes()), this.getFocusBlurAttributes());
        if (this.icon || type === InputType.PASSWORD) {
            Object.assign(attr.class, { "has-icon": true });
        }
        if (this.hasclearicon && type != InputType.NUMBER) {
            Object.assign(attr.class, { "has-clear-icon": true });
        }
        return (h("div", { class: "text-wrapper" }, this.renderLabel(), h("div", null, h("input", Object.assign({ type: type === InputType.PASSWORD && !this.passwordHidden ? InputType.TEXT : type }, attr, { ref: (el) => (this.inputRef = el) })), this.renderIcons()), this.renderMessage()));
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
        return (h("button", { type: "button", class: "icon-button input-icon", tabIndex: -1, "aria-hidden": "true" }, h("z-icon", { name: this.icon, class: this.size })));
    }
    renderResetIcon() {
        let hidden = false;
        if (!this.hasclearicon || !this.value || this.disabled || this.readonly || this.type == InputType.NUMBER) {
            hidden = true;
        }
        return (h("button", { type: "button", class: `icon-button reset-icon ${hidden ? "hidden" : ""}`, "aria-label": "cancella il contenuto dell'input", onClick: () => {
                this.inputRef.value = "";
                this.emitInputChange("");
            } }, h("z-icon", { name: "multiply", class: this.size })));
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
        return (h("div", { class: "text-wrapper" }, this.renderLabel(), h("div", { class: Object.assign(Object.assign({}, attributes.class), { "textarea-wrapper": true, "readonly": attributes.readonly }) }, h("textarea", Object.assign({}, attributes, ariaLabel, this.getRoleAttribute()))), this.renderMessage()));
    }
    /* END textarea */
    handleCheck(ev) {
        this.checked = ev.target.checked;
        this.emitInputCheck(this.checked);
    }
    /* START checkbox */
    renderCheckbox() {
        return (h("div", { class: "checkbox-wrapper" }, h("input", Object.assign({ id: this.htmlid, type: "checkbox", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, required: this.required, onChange: this.handleCheck.bind(this), value: this.value }, this.getRoleAttribute(), this.getFocusBlurAttributes())), h("label", { htmlFor: this.htmlid, class: {
                "checkbox-label": true,
                "after": this.labelPosition === LabelPosition.RIGHT,
                "before": this.labelPosition === LabelPosition.LEFT,
            } }, h("z-icon", { name: this.checked ? "checkbox-checked" : "checkbox", "aria-hidden": "true", class: this.size }), this.label && h("span", { innerHTML: this.label }))));
    }
    /* END checkbox */
    /* START radio */
    renderRadio() {
        return (h("div", { class: "radio-wrapper" }, h("input", Object.assign({ id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, onChange: this.handleCheck.bind(this), value: this.value }, this.getRoleAttribute(), this.getFocusBlurAttributes())), h("label", { htmlFor: this.htmlid, class: {
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
        return h(Host, { key: '6c3388f6f1d03c08f2965bcfb6f212655acfbf9b' }, input);
    }
    get hostElement() { return this; }
    static get style() { return ZInputStyle0 + (ZInputStyle1 + (ZInputStyle2 + ZInputStyle3)); }
}, [2, "z-input", {
        "htmlid": [1],
        "type": [1],
        "name": [1],
        "label": [1],
        "ariaLabel": [1, "aria-label"],
        "ariaExpanded": [1, "aria-expanded"],
        "ariaControls": [1, "aria-controls"],
        "ariaAutocomplete": [1, "aria-autocomplete"],
        "ariaActivedescendant": [1, "aria-activedescendant"],
        "value": [1025],
        "disabled": [516],
        "readonly": [4],
        "required": [4],
        "checked": [1028],
        "placeholder": [1],
        "htmltitle": [1],
        "status": [1],
        "message": [8],
        "labelPosition": [1, "label-position"],
        "autocomplete": [1],
        "role": [1],
        "hasclearicon": [4],
        "icon": [1],
        "min": [2],
        "minlength": [2],
        "max": [2],
        "maxlength": [2],
        "step": [2],
        "pattern": [1],
        "size": [513],
        "isTyping": [32],
        "passwordHidden": [32],
        "isChecked": [64]
    }, [[4, "inputCheck", "inputCheckListener"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-input", "z-icon", "z-input-message"];
    components.forEach(tagName => { switch (tagName) {
        case "z-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZInput);
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "z-input-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ZInput as Z, defineCustomElement as d };

//# sourceMappingURL=index10.js.map