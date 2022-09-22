import {Component, Prop, State, h, Method, Event, EventEmitter, Element, Listen} from "@stencil/core";
import {JSXBase} from "@stencil/core/internal";
import {InputTypeBean, InputTypeEnum, InputStatusBean, SelectItemBean} from "../../beans";
import {randomId} from "../../utils/utils";

@Component({
  tag: "z-input-deprecated",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZInputDeprecated {
  @Element() hostElement: HTMLZInputDeprecatedElement;

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
  @Prop()
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
  /** the input status (optional): available for text, password, number, email, textarea, select */
  @Prop()
  status?: InputStatusBean;
  /** show input helper message (optional): available for text, password, number, email, textarea, select */
  @Prop()
  hasmessage?: boolean = true;
  /** input helper message (optional): available for text, password, number, email, textarea, select */
  @Prop()
  message?: string;
  /** the input label position: available for checkbox, radio */
  @Prop()
  labelafter?: boolean = true;
  /** timeout setting before trigger `inputChange` event (optional): available for text, textarea */
  @Prop()
  typingtimeout?: number = 300;
  /** items (optional): available for select */
  @Prop()
  items?: SelectItemBean[] | string;
  /** the input has autocomplete option (optional): available for select, input */
  @Prop()
  autocomplete?: boolean | string;
  /** multiple options can be selected (optional): available for select */
  @Prop()
  multiple?: boolean = false;
  /** render clear icon when typing (optional): available for text */
  @Prop()
  hasclearicon?: boolean = true;
  /** render icon (optional): available for text, select */
  @Prop()
  icon?: string;

  @State()
  isTyping = false;
  @State()
  textareaWrapperHover = "";
  @State()
  textareaWrapperFocus = "";
  @State()
  passwordHidden = true;

  private timer;
  private selectElem: HTMLZSelectElement;

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

  /** get the input value */
  @Method()
  async getValue(): Promise<string | string[]> {
    switch (this.type) {
      // @ts-ignore
      case "select":
        return this.selectElem.getValue();
      default:
        return this.value;
    }
  }

  /** set the input value */
  @Method()
  async setValue(value: string | string[]): Promise<void> {
    switch (this.type) {
      // @ts-ignore
      case "select":
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
  @Event()
  inputChange: EventEmitter;
  private emitInputChange(value: string, keycode: number): void {
    if (!this.isTyping) {
      this.emitStartTyping();
    }
    let validity = new ValidityState();
    if (this.type === InputTypeEnum.textarea) {
      validity = this.getValidity("textarea");
    } else {
      validity = this.getValidity("input");
    }
    this.value = value;
    this.inputChange.emit({value, keycode, validity});

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

  /** Emitted on select option selection, returns select id, selected item id (or array of selected items ids if multiple) */
  @Event()
  optionSelect: EventEmitter;

  private getValidity(type: string): ValidityState {
    const input = this.hostElement.querySelector(type) as HTMLInputElement;
    return input.validity;
  }

  /* START text/password/email/number */

  private getTextAttributes(): JSXBase.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
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
      onInput: (e: InputEvent | KeyboardEvent) =>
        this.emitInputChange(
          (e.target as HTMLInputElement | HTMLTextAreaElement).value,
          e instanceof KeyboardEvent ? e.keyCode : null
        ),
    };
    if (this.autocomplete) {
      attr["autocomplete"] = this.autocomplete;
    }

    return attr;
  }

  private renderInputText(type: InputTypeBean = InputTypeEnum.text): HTMLDivElement {
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

  private renderLabel(): void | HTMLZInputLabelElement {
    if (!this.label) return;

    return (
      <z-input-label
        htmlfor={this.htmlid}
        value={this.label}
        disabled={this.disabled}
        aria-label={this.label}
        id={`${this.htmlid}_label`}
      />
    );
  }

  private renderIcons(): HTMLSpanElement {
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

  private renderIcon(): HTMLZIconElement {
    if (this.type === InputTypeEnum.password) {
      return this.renderShowHidePassword();
    }

    if (!this.icon) return;

    return (
      <z-icon
        class="inputIcon"
        name={this.icon}
      />
    );
  }

  private renderResetIcon(): void | HTMLZIconElement {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly) return;

    return (
      <z-icon
        class="resetIcon"
        name="multiply"
        onClick={(e: MouseEvent | KeyboardEvent) =>
          this.emitInputChange("", e instanceof KeyboardEvent ? e.keyCode : null)
        }
      />
    );
  }

  private renderShowHidePassword(): HTMLZIconElement {
    return (
      <z-icon
        class="showHidePasswordIcon"
        name={this.passwordHidden ? "view-filled" : "view-off-filled"}
        onClick={() => (this.passwordHidden = !this.passwordHidden)}
      />
    );
  }

  private renderMessage(): void | HTMLZInputMessageElement {
    if (!this.hasmessage) return;

    return (
      <z-input-message
        message={this.message}
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
          class={[
            "textareaWrapper",
            attributes.class,
            attributes.disabled && "disabled",
            attributes.readonly && "readonly",
            this.isTyping && "istyping",
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

  private handleCheck(ev): void {
    this.checked = ev.target.checked;
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

  /* START select */

  private renderSelect(): HTMLZSelectElement {
    return (
      <z-select
        htmlid={this.htmlid}
        items={this.items}
        name={this.name}
        label={this.label}
        aria-label={this.ariaLabel}
        disabled={this.disabled}
        readonly={this.readonly}
        placeholder={this.placeholder}
        htmltitle={this.htmltitle}
        status={this.status}
        message={!this.hasmessage ? false : this.message}
        autocomplete={this.autocomplete as boolean}
        ref={(el) => (this.selectElem = el as HTMLZSelectElement)}
      />
    );
  }

  /* END select */

  render(): HTMLDivElement | HTMLZSelectElement {
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
}
