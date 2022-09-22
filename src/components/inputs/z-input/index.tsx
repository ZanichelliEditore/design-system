import {Component, Prop, State, h, Method, Event, EventEmitter, Element, Listen} from "@stencil/core";
import {JSXBase} from "@stencil/core/internal";
import {InputTypeBean, InputTypeEnum, InputStatusBean, LabelPosition, LabelPositions} from "../../../beans";
import {boolean, randomId} from "../../../utils/utils";

@Component({
  tag: "z-input",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZInput {
  @Element() hostElement: HTMLZInputElement;

  /** the id of the input element */
  @Prop()
  htmlid = `id-${randomId()}`;
  /** input types */
  @Prop()
  type: InputTypeBean;
  /** the input name */
  @Prop()
  name?: string;
  /** the input label */
  @Prop()
  label?: string;
  /** the input aria-label */
  @Prop()
  ariaLabel?: string;
  /** the input value */
  @Prop({mutable: true})
  value?: string;
  /** the input is disabled */
  @Prop({reflect: true})
  disabled?: boolean = false;
  /** the input is readonly */
  @Prop()
  readonly?: boolean = false;
  /** the input is required (optional): available for text, password, number, email, textarea, checkbox */
  @Prop()
  required?: boolean = false;
  /** checked: available for checkbox, radio */
  @Prop({mutable: true})
  checked?: boolean = false;
  /** the input placeholder (optional) */
  @Prop()
  placeholder?: string;
  /** the input html title (optional) */
  @Prop()
  htmltitle?: string;
  /** the input status (optional): available for text, password, number, email, textarea */
  @Prop()
  status?: InputStatusBean;
  /** input helper message (optional): available for text, password, number, email, textarea - if set to `false` message won't be displayed */
  @Prop()
  message?: string | boolean = true;
  /** the input label position: available for checkbox, radio */
  @Prop()
  labelPosition?: LabelPosition = LabelPositions.right;
  /** the input has autocomplete option (optional): available for text, password, number, email */
  @Prop()
  autocomplete?: string;
  /** render clear icon when typing (optional): available for text */
  @Prop()
  hasclearicon?: boolean = true;
  /** render icon (optional): available for text */
  @Prop()
  icon?: string;
  /** min number value (optional): available for number */
  @Prop()
  min?: number;
  /** max number value (optional): available for number */
  @Prop()
  max?: number;
  /** step number value (optional): available for number */
  @Prop()
  step?: number;
  /** pattern value (optional): available for tel, text, search, url, email, password*/
  @Prop()
  pattern?: string;

  @State()
  isTyping = false;
  @State()
  passwordHidden = true;

  private timer;
  private typingtimeout = 300;

  @Listen("inputCheck", {target: "document"})
  inputCheckListener(e: CustomEvent): void {
    const data = e.detail;
    switch (this.type) {
      case InputTypeEnum.radio:
        if (data.type === InputTypeEnum.radio && data.name === this.name && data.id !== this.htmlid) {
          this.checked = false;
        }
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
        console.warn("`isChecked` method is only available for type `checkbox` and `radio`");
        return false;
    }
  }

  /** Emitted on input value change, returns value, validity */
  @Event()
  inputChange: EventEmitter;
  private emitInputChange(value: string): void {
    if (!this.isTyping) this.emitStartTyping();

    let validity = new ValidityState();
    if (this.type === InputTypeEnum.textarea) {
      validity = this.getValidity("textarea");
    } else {
      validity = this.getValidity("input");
    }
    this.value = value;
    this.inputChange.emit({value, validity});

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.emitStopTyping(this.value, validity);
    }, this.typingtimeout);
  }

  /** Emitted when user starts typing */
  @Event()
  startTyping: EventEmitter;
  private emitStartTyping(): void {
    this.isTyping = true;
    this.startTyping.emit();
  }

  /** Emitted when user stops typing, returns value, validity */
  @Event()
  stopTyping: EventEmitter;
  private emitStopTyping(value: string, validity: ValidityState): void {
    this.isTyping = false;
    this.stopTyping.emit({
      value: value,
      validity: validity,
    });
  }

  /** Emitted on checkbox check/uncheck, returns id, checked, type, name, value, validity */
  @Event()
  inputCheck: EventEmitter;
  private emitInputCheck(checked: boolean): void {
    this.inputCheck.emit({
      id: this.htmlid,
      checked: checked,
      type: this.type,
      name: this.name,
      value: this.value,
      validity: this.getValidity("input"),
    });
  }

  private getValidity(type: string): ValidityState {
    const input = this.hostElement.querySelector(type) as HTMLInputElement;
    return input.validity;
  }

  /* START text/password/email/number */

  private getTextAttributes(): JSXBase.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
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
      onInput: (e: InputEvent) => this.emitInputChange((e.target as HTMLInputElement).value),
    };
  }

  private getNumberAttributes(type: InputTypeBean): void | JSXBase.InputHTMLAttributes<HTMLInputElement> {
    if (type != InputTypeEnum.number) return;
    return {
      min: this.min,
      max: this.max,
      step: this.step,
    };
  }

  private getPatternAttribute(type: InputTypeBean): void | JSXBase.InputHTMLAttributes<HTMLInputElement> {
    if (
      type != InputTypeEnum.password &&
      type != InputTypeEnum.text &&
      type != InputTypeEnum.tel &&
      type != InputTypeEnum.search &&
      type != InputTypeEnum.url &&
      type != InputTypeEnum.email
    )
      return;
    return {
      pattern: this.pattern,
    };
  }

  private renderInputText(type: InputTypeBean = InputTypeEnum.text): HTMLDivElement {
    const attr = {
      ...this.getTextAttributes(),
      ...this.getNumberAttributes(type),
      ...this.getPatternAttribute(type),
    };
    if (this.icon || type === InputTypeEnum.password) {
      Object.assign(attr.class, {hasIcon: true});
    }
    if (this.hasclearicon && type != InputTypeEnum.number) {
      Object.assign(attr.class, {hasClearIcon: true});
    }

    return (
      <div class="textWrapper">
        {this.renderLabel()}
        <div>
          <input
            type={type === InputTypeEnum.password && !this.passwordHidden ? InputTypeEnum.text : type}
            {...attr}
            aria-label={this.ariaLabel || this.label}
          />
          {this.renderIcons()}
        </div>
        {this.renderMessage()}
      </div>
    );
  }

  private renderLabel(): void | HTMLLabelElement {
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

  private renderIcons(): HTMLSpanElement {
    return (
      <span class="iconsWrapper">
        {this.renderResetIcon()}
        {this.renderIcon()}
      </span>
    );
  }

  private renderIcon(): void | HTMLButtonElement {
    if (this.type === InputTypeEnum.password) {
      return this.renderShowHidePassword();
    }

    if (!this.icon) return;

    return (
      <button
        type="button"
        class="iconButton inputIcon"
        tabIndex={-1}
      >
        <z-icon name={this.icon} />
      </button>
    );
  }

  private renderResetIcon(): void | HTMLButtonElement {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly || this.type == InputTypeEnum.number)
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

  private renderShowHidePassword(): HTMLButtonElement {
    return (
      <button
        type="button"
        class="iconButton showHidePasswordIcon"
        disabled={this.disabled}
        aria-label={this.passwordHidden ? "mostra password" : "nascondi password"}
        onClick={() => (this.passwordHidden = !this.passwordHidden)}
      >
        <z-icon name={this.passwordHidden ? "view-filled" : "view-off-filled"} />
      </button>
    );
  }

  private renderMessage(): void | HTMLZInputMessageElement {
    if (boolean(this.message) === false) return;

    return (
      <z-input-message
        message={boolean(this.message) === true ? undefined : (this.message as string)}
        status={this.status}
      />
    );
  }

  /* END text/password/email/number */

  /* START textarea */

  private renderTextarea(): HTMLDivElement {
    const attributes = this.getTextAttributes();

    return (
      <div class="textWrapper">
        {this.renderLabel()}
        <div
          class={{
            ...(attributes.class as Record<string, boolean>),
            textareaWrapper: true,
            readonly: attributes.readonly as boolean,
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

  private handleCheck(ev: Event): void {
    this.checked = (ev.target as HTMLInputElement).checked;
    this.emitInputCheck(this.checked);
  }

  /* START checkbox */
  private renderCheckbox(): HTMLDivElement {
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
  private renderRadio(): HTMLDivElement {
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

  render(): HTMLInputElement | HTMLDivElement {
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
