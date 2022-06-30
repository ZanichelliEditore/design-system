import {
  Component,
  Prop,
  State,
  h,
  Method,
  Event,
  EventEmitter,
  Element,
  Listen,
} from "@stencil/core";
import { InputTypeBean, InputTypeEnum, InputStatusBean } from "../../../beans";
import { handleKeyboardSubmit, randomId } from "../../../utils/utils";

@Component({
  tag: "z-input",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZInput {
  @Element() hostElement: HTMLElement;

  /** the id of the input element */
  @Prop() htmlid: string = `id-${randomId()}`;
  /** input types */
  @Prop() type: InputTypeBean;
  /** the input name */
  @Prop() name?: string;
  /** the input label */
  @Prop() label?: string;
  /** the input aria-label */
  @Prop() ariaLabel?: string;
  /** the input value */
  @Prop({ mutable: true }) value?: string;
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
  /** the input status (optional): available for text, password, number, email, textarea */
  @Prop() status?: InputStatusBean;
  /** show input helper message (optional): available for text, password, number, email, textarea */
  @Prop() hasmessage?: boolean = true;
  /** input helper message (optional): available for text, password, number, email, textarea */
  @Prop() message?: string;
  /** the input label position: available for checkbox, radio */
  @Prop() labelafter?: boolean = true;
  /** timeout setting before trigger `inputChange` event (optional): available for text, textarea */
  @Prop() typingtimeout?: number = 300;
  /** the input has autocomplete option (optional): available for input */
  @Prop() autocomplete?: boolean | string;
  /** render clear icon when typing (optional): available for text */
  @Prop() hasclearicon?: boolean = true;
  /** render icon (optional): available for text */
  @Prop() icon?: string;

  @State() isTyping: boolean = false;
  @State() textareaWrapperHover: string = "";
  @State() textareaWrapperFocus: string = "";
  @State() passwordHidden: boolean = true;

  private timer;

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
    return this.value;
  }

  /** set the input value */
  @Method()
  async setValue(value: string | string[]): Promise<void> {
    if (typeof value === "string") this.value = value;
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
      validity: validity,
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
      validity: this.getValidity("input"),
    });
  }

  getValidity(type: string) {
    const input = this.hostElement.querySelector(type) as HTMLInputElement;
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
      class: [`input_${this.status || "default"}`, this.value && "filled"]
        .filter(Boolean)
        .join(" "),
      onInput: (e: any) => this.emitInputChange(e.target.value, e.keyCode),
    };
    if (this.autocomplete) {
      attr["autocomplete"] = this.autocomplete;
    }

    return attr;
  }

  renderInputText(type: InputTypeBean = InputTypeEnum.text) {
    const attr = this.getTextAttributes();
    if (this.icon || type === InputTypeEnum.password) {
      attr.class += " hasIcon";
    }
    if (this.hasclearicon) {
      attr.class += " hasClearIcon";
    }

    return (
      <div class="textWrapper">
        {this.renderLabel()}
        <div>
          <input
            type={
              type === InputTypeEnum.password && !this.passwordHidden
                ? InputTypeEnum.text
                : type
            }
            {...attr}
            aria-label={this.ariaLabel || this.label}
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
      <label
        class={{ inputLabel: true, disabled: this.disabled }}
        id={`${this.htmlid}_label`}
        htmlFor={this.htmlid}
        aria-label={this.label}
      >
        {this.label}
      </label>
    );
  }

  renderIcons() {
    return (
      <span
        class={{
          iconsWrapper: true,
          disabled: this.disabled,
        }}
      >
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
        name="multiply"
        onClick={(e: any) => this.emitInputChange("", e.keyCode)}
        onKeyUp={(e: KeyboardEvent) =>
          handleKeyboardSubmit(
            e,
            this.emitInputChange.bind(this),
            "",
            e.keyCode
          )
        }
        role="button"
        tabIndex={0}
        aria-label="cancella il contenuto dell'input"
      />
    );
  }

  renderShowHidePassword() {
    const togglePassword = () => (this.passwordHidden = !this.passwordHidden);
    return (
      <z-icon
        class="showHidePasswordIcon"
        name={this.passwordHidden ? "view-filled" : "view-off-filled"}
        onClick={() => togglePassword()}
        onKeyUp={(e: KeyboardEvent) => handleKeyboardSubmit(e, togglePassword)}
        role="button"
        tabIndex={this.disabled ? -1 : 0}
        aria-label={
          this.passwordHidden ? "mostra password" : "nascondi password"
        }
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
    const attributes = this.getTextAttributes();

    return (
      <div class="textWrapper">
        {this.renderLabel()}
        <div
          class={[
            "textareaWrapper",
            attributes.class,
            attributes.disabled && "disabled",
            attributes.readonly && "readonly",
            this.textareaWrapperFocus,
            this.textareaWrapperHover,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <textarea
            {...attributes}
            onFocus={() => (this.textareaWrapperFocus = "focus")}
            onBlur={() => (this.textareaWrapperFocus = "")}
            onMouseOver={() => (this.textareaWrapperHover = "hover")}
            onMouseOut={() => (this.textareaWrapperHover = "")}
            aria-label={this.ariaLabel || this.label}
          ></textarea>
        </div>
        {this.renderMessage()}
      </div>
    );
  }

  /* END textarea */

  handleCheck(ev) {
    this.checked = ev.target.checked;
    this.emitInputCheck(this.checked);
  }

  /* START checkbox */
  renderCheckbox() {
    return (
      <div class="checkboxWrapper">
        <input
          id={this.htmlid}
          type="checkbox"
          name={this.name}
          checked={this.checked}
          disabled={this.disabled}
          readonly={this.readonly}
          required={this.required}
          onChange={this.handleCheck.bind(this)}
          value={this.value}
        />

        <label
          htmlFor={this.htmlid}
          class={{
            checkboxLabel: true,
            after: this.labelafter,
            before: !this.labelafter,
          }}
        >
          <z-icon
            name={this.checked ? "checkbox-checked" : "checkbox"}
            aria-hidden="true"
          />
          {this.label && <span innerHTML={this.label}></span>}
        </label>
      </div>
    );
  }

  /* END checkbox */

  /* START radio */
  renderRadio() {
    return (
      <div class="radioWrapper">
        <input
          id={this.htmlid}
          type="radio"
          name={this.name}
          checked={this.checked}
          disabled={this.disabled}
          readonly={this.readonly}
          onChange={this.handleCheck.bind(this)}
          value={this.value}
        />

        <label
          htmlFor={this.htmlid}
          class={{
            radioLabel: true,
            after: this.labelafter,
            before: !this.labelafter,
          }}
        >
          <z-icon
            name={this.checked ? "radio-button-checked" : "radio-button"}
            aria-hidden="true"
          />
          {this.label && <span innerHTML={this.label} />}
        </label>
      </div>
    );
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
}
