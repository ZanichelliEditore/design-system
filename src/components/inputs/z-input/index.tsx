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
import {
  InputTypeBean,
  InputTypeEnum,
  InputStatusBean,
  LabelPosition,
  LabelPositions,
} from "../../../beans";
import { boolean, randomId } from "../../../utils/utils";

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
  @Prop({ reflect: true }) disabled?: boolean = false;
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
  /** input helper message (optional): available for text, password, number, email, textarea - if set to `false` message won't be displayed */
  @Prop() message?: string | boolean = true;
  /** the input label position: available for checkbox, radio */
  @Prop() labelPosition?: LabelPosition = LabelPositions.right;
  /** the input has autocomplete option (optional): available for text, password, number, email */
  @Prop() autocomplete?: string;
  /** render clear icon when typing (optional): available for text */
  @Prop() hasclearicon?: boolean = true;
  /** render icon (optional): available for text */
  @Prop() icon?: string;
  /** min page number value (optional): available for number */
  @Prop() min?: number;
  /** max page number value (optional): available for number */
  @Prop() max?: number;
  /** step number value (optional): available for number */
  @Prop() step?: number;
  /** pattern value (optional): available for tel */
  @Prop() pattern?: string;

  @State() isTyping: boolean = false;
  @State() passwordHidden: boolean = true;

  private timer;
  private typingtimeout: number = 300;

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

  /** get checked status */
  @Method()
  async isChecked(): Promise<boolean> {
    switch (this.type) {
      case InputTypeEnum.checkbox:
      case InputTypeEnum.radio:
        return this.checked;
      default:
        console.warn(
          "`isChecked` method is only available for type `checkbox` and `radio`"
        );
        return false;
    }
  }

  /** Emitted on input value change, returns value, validity */
  @Event() inputChange: EventEmitter;
  emitInputChange(value: string) {
    if (!this.isTyping) this.emitStartTyping();

    let validity = {};
    if (this.type === InputTypeEnum.textarea) {
      validity = this.getValidity("textarea");
    } else {
      validity = this.getValidity("input");
    }
    this.value = value;
    this.inputChange.emit({ value, validity });

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
      onInput: (e: any) => this.emitInputChange(e.target.value),
    };
  }

  getNumberAttributes() {
    if (this.type != InputTypeEnum.number) return;
    return {
      min: this.min,
      max: this.max,
      step: this.step,
    };
  }

  getTelAttributes() {
    if (this.type != InputTypeEnum.tel) return;
    return {
      pattern: this.pattern,
    };
  }

  renderInputText(type: InputTypeBean = InputTypeEnum.text) {
    const attr = {
      ...this.getTextAttributes(),
      ...this.getNumberAttributes(),
      ...this.getTelAttributes(),
    };
    if (this.icon || type === InputTypeEnum.password) {
      attr.class = { ...attr.class, hasIcon: true };
    }
    if (this.hasclearicon) {
      attr.class = { ...attr.class, hasClearIcon: true };
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
        class="inputLabel body-5-sb"
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
      <span class="iconsWrapper">
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

    return (
      <button type="button" class="iconButton inputIcon" tabIndex={-1}>
        <z-icon name={this.icon} />
      </button>
    );
  }

  renderResetIcon() {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly)
      return;

    return (
      <button
        type="button"
        class="iconButton resetIcon"
        aria-label="cancella il contenuto dell'input"
        onClick={() => this.emitInputChange("")}
      >
        <z-icon name="multiply" />
      </button>
    );
  }

  renderShowHidePassword() {
    return (
      <button
        type="button"
        class="iconButton showHidePasswordIcon"
        disabled={this.disabled}
        aria-label={
          this.passwordHidden ? "mostra password" : "nascondi password"
        }
        onClick={() => (this.passwordHidden = !this.passwordHidden)}
      >
        <z-icon
          name={this.passwordHidden ? "view-filled" : "view-off-filled"}
        />
      </button>
    );
  }

  renderMessage() {
    if (boolean(this.message) === false) return;

    return (
      <z-input-message
        message={
          boolean(this.message) === true ? undefined : (this.message as string)
        }
        status={this.status}
      />
    );
  }

  /* END text/password/email/number */

  /* START textarea */

  renderTextarea() {
    const attributes = this.getTextAttributes();

    return (
      <div class="textWrapper">
        {this.renderLabel()}
        <div
          class={{
            ...attributes.class,
            textareaWrapper: true,
            readonly: attributes.readonly,
          }}
        >
          <textarea
            {...attributes}
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
            after: this.labelPosition === LabelPositions.right,
            before: this.labelPosition === LabelPositions.left,
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
            after: this.labelPosition === LabelPositions.right,
            before: this.labelPosition === LabelPositions.left,
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
