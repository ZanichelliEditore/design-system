import {Component, Element, Event, EventEmitter, Listen, Method, Prop, State, h} from "@stencil/core";
import {Fragment, Host, JSXBase} from "@stencil/core/internal";
import {ControlSize, InputStatus, InputType, LabelPosition} from "../../beans";
import {boolean, randomId} from "../../utils/utils";

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
  type: InputType;

  /** the input name */
  @Prop()
  name?: string;

  /** the input label */
  @Prop()
  label?: string;

  /** the input aria-label */
  @Prop()
  ariaLabel = "";

  /** the input aria-expaded: available for text, password, number, email */
  @Prop()
  htmlAriaExpanded = "";

  /** the input aria-controls (optional): available for text, password, number, email */
  @Prop()
  htmlAriaControls?: string;

  /** the input aria-autocomplete (optional): available for text, password, number, email */
  @Prop()
  htmlAriaAutocomplete?: string;

  /** the input aria-activedescendant (optional): available for text, password, number, email */
  @Prop()
  htmlAriaActivedescendant?: string;

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
  status?: InputStatus;

  /** input helper message (optional): available for text, password, number, email, textarea - if set to `false` message won't be displayed */
  @Prop()
  message?: string | boolean = true;

  /** the input label position: available for checkbox, radio */
  @Prop()
  labelPosition?: LabelPosition = LabelPosition.RIGHT;

  /** the input has autocomplete option (optional): available for text, password, number, email */
  @Prop()
  autocomplete?: string;

  /** the input role */
  @Prop()
  role = "";

  /** render clear icon when typing (optional): available for text */
  @Prop()
  hasclearicon?: boolean = true;

  /** render icon (optional): available for text */
  @Prop()
  icon?: string;

  /** min number value (optional): available for number */
  @Prop()
  min?: number;

  /** Min length value (optional): available for text */
  @Prop()
  minlength?: number;

  /** max number value (optional): available for number */
  @Prop()
  max?: number;

  /** Max length value (optional): available for text */
  @Prop()
  maxlength?: number;

  /** step number value (optional): available for number */
  @Prop()
  step?: number;

  /** pattern value (optional): available for tel, text, search, url, email, password*/
  @Prop()
  pattern?: string;

  /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
  @Prop({reflect: true})
  size?: ControlSize = ControlSize.BIG;

  @State()
  isTyping = false;

  @State()
  passwordHidden = true;

  private timer;

  private typingtimeout = 300;

  private inputRef: HTMLInputElement;

  @Listen("inputCheck", {target: "document"})
  inputCheckListener(e: CustomEvent): void {
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
  @Method()
  async isChecked(): Promise<boolean> {
    switch (this.type) {
      case InputType.CHECKBOX:
      case InputType.RADIO:
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
    if (!this.isTyping) {
      this.emitStartTyping();
    }

    let validity: ValidityState;
    if (this.type === InputType.TEXTAREA) {
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

  /** Emitted on input focus */
  @Event()
  inputFocus: EventEmitter;

  private emitInputFocus(): void {
    this.inputFocus.emit({id: this.htmlid});
  }

  /** Emitted on input blur */
  @Event()
  inputBlur: EventEmitter;

  private emitInputBlur(): void {
    this.inputBlur.emit({id: this.htmlid});
  }

  private getValidity(type: string): ValidityState {
    const input = this.hostElement.querySelector(type) as HTMLInputElement;

    return input.validity;
  }

  /* START text/password/email/number */

  private getTextAttributes(): JSXBase.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    const messageId = `${this.htmlid}_message`;
    const ariaInvalid = this.status === InputStatus.ERROR ? {"aria-invalid": "true"} : {};
    const ariaDescribedby = this.status && boolean(this.message) !== false ? {"aria-describedby": messageId} : {};

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
      },
      autocomplete: this.autocomplete,
      onInput: (e: InputEvent) => this.emitInputChange((e.target as HTMLInputElement).value),
      ...ariaInvalid,
      ...ariaDescribedby,
    };
  }

  private getNumberAttributes(type: InputType): JSXBase.InputHTMLAttributes<HTMLInputElement> {
    if (type != InputType.NUMBER) {
      return;
    }

    return {
      min: this.min,
      max: this.max,
      step: this.step,
    };
  }

  private getPatternAttribute(type: InputType): JSXBase.InputHTMLAttributes<HTMLInputElement> {
    if (
      type != InputType.PASSWORD &&
      type != InputType.TEXT &&
      type != InputType.TEL &&
      type != InputType.SEARCH &&
      type != InputType.URL &&
      type != InputType.EMAIL
    ) {
      return;
    }

    return {
      pattern: this.pattern,
    };
  }

  private getRoleAttribute(): JSXBase.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    return this.role ? {role: this.role} : {};
  }

  private getAriaAttrubutes(): Record<string, unknown> {
    const expanded = this.htmlAriaExpanded ? {"aria-expanded": this.htmlAriaExpanded} : {};
    const controls = this.htmlAriaControls ? {"aria-controls": this.htmlAriaControls} : {};
    const autocomplete = this.htmlAriaAutocomplete ? {"aria-autocomplete": this.htmlAriaAutocomplete} : {};
    const activedescendant = this.htmlAriaActivedescendant
      ? {"aria-activedescendant": this.htmlAriaActivedescendant}
      : {};

    return {
      ...expanded,
      ...controls,
      ...autocomplete,
      ...activedescendant,
    };
  }

  private getFocusBlurAttributes(): JSXBase.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    return {
      onFocus: () => this.emitInputFocus(),
      onBlur: () => this.emitInputBlur(),
    };
  }

  private renderInputText(type: InputType = InputType.TEXT): HTMLDivElement {
    const ariaLabel = this.ariaLabel ? {"aria-label": this.ariaLabel} : {};
    const attr = {
      ...this.getTextAttributes(),
      ...this.getNumberAttributes(type),
      ...this.getPatternAttribute(type),
      ...ariaLabel,
      ...this.getRoleAttribute(),
      ...this.getAriaAttrubutes(),
      ...this.getFocusBlurAttributes(),
    };
    if (this.icon || type === InputType.PASSWORD) {
      Object.assign(attr.class, {"has-icon": true});
    }
    if (this.hasclearicon && type != InputType.NUMBER) {
      Object.assign(attr.class, {"has-clear-icon": true});
    }

    return (
      <div class="text-wrapper">
        {this.renderLabel()}
        <div>
          <input
            type={type === InputType.PASSWORD && !this.passwordHidden ? InputType.TEXT : type}
            {...attr}
            ref={(el) => (this.inputRef = el)}
          />
          {this.renderIcons()}
        </div>
        {this.renderMessage()}
      </div>
    );
  }

  private renderLabel(): HTMLLabelElement {
    if (!this.label) {
      return;
    }

    return (
      <label
        class="z-label body-5-sb"
        id={`${this.htmlid}_label`}
        htmlFor={this.htmlid}
      >
        {this.label}
      </label>
    );
  }

  private renderIcons(): HTMLSpanElement {
    return (
      <span class="icons-wrapper">
        {this.renderResetIcon()}
        {this.renderIcon()}
      </span>
    );
  }

  private renderIcon(): HTMLButtonElement {
    if (this.type === InputType.PASSWORD) {
      return this.renderShowHidePassword();
    }

    if (!this.icon) {
      return;
    }

    return (
      <z-icon
        name={this.icon}
        class={{[this.size]: true, "input-icon": true}}
      />
    );
  }

  private renderResetIcon(): HTMLButtonElement {
    let hidden = false;
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly || this.type == InputType.NUMBER) {
      hidden = true;
    }

    return (
      <button
        type="button"
        class={{"reset-icon": true, "input-icon": true, hidden}}
        aria-label="cancella il contenuto dell'input"
        onClick={() => {
          this.inputRef.value = "";
          this.emitInputChange("");
        }}
      >
        <z-icon
          name="multiply"
          class={this.size}
        />
      </button>
    );
  }

  private renderShowHidePassword(): HTMLButtonElement {
    return (
      <button
        type="button"
        class="input-icon toggle-password-icon"
        disabled={this.disabled}
        aria-label={this.passwordHidden ? "mostra password" : "nascondi password"}
        onClick={() => (this.passwordHidden = !this.passwordHidden)}
      >
        <z-icon
          name={this.passwordHidden ? "view-filled" : "view-off-filled"}
          class={this.size}
        />
      </button>
    );
  }

  private renderMessage(): HTMLZInputMessageElement {
    if (boolean(this.message) === false) {
      return;
    }

    return (
      <z-input-message
        htmlid={`${this.htmlid}_message`}
        message={boolean(this.message) === true ? undefined : (this.message as string)}
        status={this.status}
        class={this.size}
        disabled={this.disabled}
      />
    );
  }

  /* END text/password/email/number */

  /* START textarea */

  private renderTextarea(): HTMLDivElement {
    const attributes = this.getTextAttributes();
    const ariaLabel = this.ariaLabel ? {"aria-label": this.ariaLabel} : {};

    return (
      <Fragment>
        {this.renderLabel()}
        <div
          class={{
            ...(attributes.class as {[className: string]: boolean}),
            "textarea-wrapper": true,
            "readonly": !!attributes.readonly,
          }}
        >
          <textarea
            {...attributes}
            class={{
              ...(attributes.class as {[className: string]: boolean}),
              "z-scrollbar": true,
            }}
            {...ariaLabel}
            {...this.getRoleAttribute()}
          ></textarea>
        </div>
        {this.renderMessage()}
      </Fragment>
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
      <div class="checkbox-wrapper">
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
          {...this.getRoleAttribute()}
          {...this.getFocusBlurAttributes()}
        />

        <label
          htmlFor={this.htmlid}
          class={{
            "checkbox-label": true,
            "after": this.labelPosition === LabelPosition.RIGHT,
            "before": this.labelPosition === LabelPosition.LEFT,
          }}
        >
          <z-icon
            name={this.checked ? "checkbox-checked" : "checkbox"}
            class={this.size}
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
      <div class="radio-wrapper">
        <input
          id={this.htmlid}
          type="radio"
          name={this.name}
          checked={this.checked}
          disabled={this.disabled}
          readonly={this.readonly}
          onChange={this.handleCheck.bind(this)}
          value={this.value}
          {...this.getRoleAttribute()}
          {...this.getFocusBlurAttributes()}
        />

        <label
          htmlFor={this.htmlid}
          class={{
            "radio-label": true,
            "after": this.labelPosition === LabelPosition.RIGHT,
            "before": this.labelPosition === LabelPosition.LEFT,
          }}
        >
          <z-icon
            name={this.checked ? "radio-button-checked" : "radio-button"}
            class={this.size}
          />
          {this.label && <span innerHTML={this.label} />}
        </label>
      </div>
    );
  }
  /* END radio */

  render(): HTMLInputElement | HTMLDivElement {
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

    return <Host>{input}</Host>;
  }
}
