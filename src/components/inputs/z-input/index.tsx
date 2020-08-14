import {
  Component,
  Prop,
  State,
  h,
  Method,
  Event,
  EventEmitter,
  Element,
  Listen
} from "@stencil/core";
import {
  InputTypeBean,
  InputTypeEnum,
  InputStatusBean,
  SelectItemBean
} from "../../../beans";
import { randomId } from "../../../utils/utils";

@Component({
  tag: "z-input",
  styleUrl: "styles.css",
  shadow: true
})
export class ZInput {
  @Element() hostElement: HTMLElement;

  /** the id of the input element */
  @Prop() htmlid: string = randomId();
  /** input types */
  @Prop() type: InputTypeBean;
  /** the input name */
  @Prop() name?: string;
  /** the input label */
  @Prop() label?: string;
  /** the input value */
  @Prop() value?: string;
  /** the input is disabled */
  @Prop() disabled?: boolean = false;
  /** the input is readonly */
  @Prop() readonly?: boolean = false;
  /** the input is required (optional): available for text, password, number, email, textarea, checkbox */
  @Prop() required?: boolean = false;
  /** checked: available for checkbox, radio */
  @Prop({ mutable: true }) checked?: boolean = false;
  /** the input placeholder (optional) */
  @Prop() placeholder?: string;
  /** the input html title (optional) */
  @Prop() htmltitle?: string;
  /** the input status (optional): available for text, password, number, email, textarea, select */
  @Prop() status?: InputStatusBean;
  /** show input helper message (optional): available for text, password, number, email, textarea, select */
  @Prop() hasmessage?: boolean = true;
  /** input helper message (optional): available for text, password, number, email, textarea, select */
  @Prop() message?: string;
  /** the input label position: available for checkbox, radio */
  @Prop() labelafter?: boolean = true;
  /** timeout setting before trigger `inputChange` event (optional): available for text, textarea */
  @Prop() typingtimeout?: number = 300;
  /** items (optional): available for select */
  @Prop() items?: SelectItemBean[] | string;
  /** the input has autocomplete option (optional): available for select */
  @Prop() autocomplete?: boolean = false;
  /** multiple options can be selected (optional): available for select */
  @Prop() multiple?: boolean = false;
  /** render clear icon when typing (optional): available for text */
  @Prop() hasclearicon?: boolean = true;
  /** render icon (optional): available for text, select */
  @Prop() icon?: string;

  @State() isTyping: boolean = false;
  @State() textareaWrapperHover: string = "";
  @State() textareaWrapperFocus: string = "";
  @State() passwordHidden: boolean = true;

  private timer;
  private selectElem: HTMLZSelectElement;

  @Listen("inputCheck", { target: "document" })
  inputCheckListener(e: CustomEvent) {
    const data = e.detail;
    switch (this.type) {
      case InputTypeEnum.radio:
        if (
          data.type === InputTypeEnum.radio &&
          data.name === this.name &&
          data.id !== this.htmlid
        ) {
          this.checked = false;
        }
      default:
        return;
    }
  }

  /** get the input value */
  @Method()
  async getValue(): Promise<string | string[]> {
    switch (this.type) {
      case InputTypeEnum.select:
        return this.selectElem.getValue();
      default:
        return this.value;
    }
  }

  /** set the input value */
  @Method()
  async setValue(value: string | string[]): Promise<void> {
    console.log("z-input setValue");
    switch (this.type) {
      case InputTypeEnum.select:
        this.selectElem.setValue(value);
        break;
      default:
        if (typeof value === "string") this.value = value;
        break;
    }
  }

  /** get checked status */
  @Method()
  async isChecked(): Promise<boolean> {
    switch (this.type) {
      case InputTypeEnum.checkbox:
      case InputTypeEnum.radio:
        return this.checked;
      default:
        return false;
    }
  }

  /** Emitted on input value change, returns value, keycode, validity */
  @Event() inputChange: EventEmitter;
  emitInputChange(value: string, keycode: number) {
    if (!this.isTyping) {
      this.emitStartTyping();
    }
    let validity = {};
    if (this.type === InputTypeEnum.textarea) {
      validity = this.getValidity("textarea");
    } else {
      validity = this.getValidity("input");
    }
    this.value = value;
    this.inputChange.emit({ value, keycode, validity });

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.emitStopTyping(this.value, validity);
    }, this.typingtimeout);
  }

  /** Emitted when user starts typing */
  @Event() startTyping: EventEmitter;
  emitStartTyping() {
    this.isTyping = true;
    this.startTyping.emit();
  }

  /** Emitted when user stops typing, returns value, validity */
  @Event() stopTyping: EventEmitter;
  emitStopTyping(value: string, validity: any) {
    this.isTyping = false;
    this.stopTyping.emit({
      value: value,
      validity: validity
    });
  }

  /** Emitted on checkbox check/uncheck, returns id, checked, type, name, value, validity */
  @Event() inputCheck: EventEmitter;
  emitInputCheck(checked: boolean) {
    this.inputCheck.emit({
      id: this.htmlid,
      checked: checked,
      type: this.type,
      name: this.name,
      value: this.value,
      validity: this.getValidity("input")
    });
  }

  /** Emitted on select option selection, returns select id, selected item id (or array of selected items ids if multiple) */
  @Event() optionSelect: EventEmitter;

  getValidity(type: string) {
    const input = this.hostElement.shadowRoot.querySelector(
      type
    ) as HTMLInputElement;
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
      class: `
        ${this.status ? "input_" + this.status : "input_default"}
        ${this.isTyping && "istyping"}
        ${!this.isTyping && this.value && "filled"}
      `,
      onInput: (e: any) => this.emitInputChange(e.target.value, e.keyCode)
    };
  }

  renderInputText(type = InputTypeEnum.text) {
    const attr = this.getTextAttributes();
    if (this.icon || type === InputTypeEnum.password)
      attr.class = attr.class + " hasIcon";
    if (this.hasclearicon) attr.class = attr.class + " hasClearIcon";

    return (
      <div class="textWrapper">
        {this.renderLabel()}
        <div>
          <input
            {...attr}
            type={
              type === InputTypeEnum.password && !this.passwordHidden
                ? InputTypeEnum.text
                : type
            }
            aria-labelledby={`${this.htmlid}_label`}
          />
          {this.renderIcons()}
        </div>
        {this.renderMessage()}
      </div>
    );
  }

  renderLabel() {
    if (!this.label) return;

    return (
      <z-input-label
        value={this.label}
        disabled={this.disabled}
        aria-label={this.label}
        id={`${this.htmlid}_label`}
      />
    );
  }

  renderIcons() {
    return (
      <span class={`iconsWrapper ${this.disabled ? "disabled" : ""}`}>
        {this.renderResetIcon()}
        {this.renderIcon()}
      </span>
    );
  }

  renderIcon() {
    if (this.type === InputTypeEnum.password) {
      return this.renderShowHidePassword();
    }

    if (!this.icon) return;

    return <z-icon class="inputIcon" name={this.icon} />;
  }

  renderResetIcon() {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly)
      return;

    return (
      <z-icon
        class="resetIcon"
        name="cross"
        onClick={(e: any) => this.emitInputChange("", e.keyCode)}
      />
    );
  }

  renderShowHidePassword() {
    return (
      <z-icon
        class="inputIcon"
        name={this.passwordHidden ? "show-password" : "hide-password"}
        onClick={() => (this.passwordHidden = !this.passwordHidden)}
      />
    );
  }

  renderMessage() {
    if (!this.hasmessage) return;

    return <z-input-message message={this.message} status={this.status} />;
  }

  /* END text/password/email/number */

  /* START textarea */

  renderTextarea() {
    return (
      <div class="textWrapper">
        {this.renderLabel()}
        <div>{this.renderTextareaBody()}</div>
        {this.renderMessage()}
      </div>
    );
  }

  renderTextareaBody() {
    const attributes = this.getTextAttributes();

    return (
      <div
        class={`
            textareaWrapper
            ${attributes.class}
            ${attributes.disabled && " disabled"}
            ${attributes.readonly && " readonly"}
            ${this.isTyping && " istyping"}
            ${this.textareaWrapperFocus}
            ${this.textareaWrapperHover}
          `}
      >
        <textarea {...attributes} {...this.getTextareaExtraAttributes()} />
      </div>
    );
  }

  getTextareaExtraAttributes() {
    return {
      onFocus: () => (this.textareaWrapperFocus = "focus"),
      onBlur: () => (this.textareaWrapperFocus = ""),
      onMouseOver: () => (this.textareaWrapperHover = "hover"),
      onMouseOut: () => (this.textareaWrapperHover = "")
    };
  }

  /* END textarea */

  /* START checkbox */

  handleCheckboxChange() {
    this.checked = !this.checked;
    this.emitInputCheck(this.checked);
  }

  renderCheckbox() {
    return (
      <div class="checkboxWrapper">
        <input
          id={this.htmlid}
          type="checkbox"
          name={this.name}
          checked={this.checked}
          value={this.value}
          disabled={this.disabled}
          readonly={this.readonly}
          required={this.required}
          onChange={() => this.handleCheckboxChange()}
        />

        <label
          htmlFor={this.htmlid}
          class={`checkboxLabel ${this.labelafter ? "after" : "before"}`}
        >
          <z-icon
            name={this.checked ? "checkbox-selected" : "checkbox-unchecked"}
            aria-hidden={true}
          />
          {this.label && <span innerHTML={this.label} />}
        </label>
      </div>
    );
  }

  /* END checkbox */

  /* START radio */

  handleRadioChange() {
    this.checked = true;
    this.emitInputCheck(this.checked);
  }

  renderRadio() {
    return (
      <div class="radioWrapper">
        <input
          id={this.htmlid}
          type="radio"
          name={this.name}
          checked={this.checked}
          value={this.value}
          disabled={this.disabled}
          readonly={this.readonly}
          onChange={() => this.handleRadioChange()}
        />

        <label
          htmlFor={this.htmlid}
          class={`radioLabel ${this.labelafter ? "after" : "before"}`}
        >
          <z-icon
            name={this.checked ? "radio-button-checked" : "radio-button"}
            aria-hidden={true}
          />
          {this.label && <span innerHTML={this.label} />}
        </label>
      </div>
    );
  }
  /* END radio */

  /* START select */

  renderSelect() {
    return (
      <z-select
        htmlid={this.htmlid}
        items={this.items}
        name={this.name}
        label={this.label}
        disabled={this.disabled}
        readonly={this.readonly}
        placeholder={this.placeholder}
        htmltitle={this.htmltitle}
        status={this.status}
        hasmessage={this.hasmessage}
        message={this.message}
        autocomplete={this.autocomplete}
        multiple={this.multiple}
        ref={el => (this.selectElem = el as HTMLZSelectElement)}
      />
    );
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
      case InputTypeEnum.select:
        return this.renderSelect();
      default:
        return this.renderInputText();
    }
  }
}
