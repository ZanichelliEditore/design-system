import {
  Component,
  Prop,
  State,
  h,
  Method,
  Event,
  EventEmitter
} from "@stencil/core";
import { InputTypeEnum, InputStatusBean } from "../../beans";
import { randomId } from "../../utils/utils";

@Component({
  tag: "z-input",
  styleUrls: [
    "styles.css",
    "styles-text.css",
    "styles-textarea.css",
    "styles-checkbox.css"
  ],
  shadow: true
})
export class ZInput {
  /** the id of the input element */
  @Prop() htmlid: string = randomId();
  /** input types */
  @Prop() type: HTMLInputElement["type"];
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
  /** checked: available for checkbox, radio */
  @Prop({ mutable: true }) checked?: boolean = false;
  /** the input placeholder (optional) */
  @Prop() placeholder?: string;
  /** the input html title (optional) */
  @Prop() htmltitle?: string;
  /** the input status (optional) */
  @Prop() status?: InputStatusBean;
  /** input helper message (optional) */
  @Prop() message?: string;
  /** the input label position: available for checkbox, radio */
  @Prop() labelafter?: boolean = true;
  /** timeout setting before trigger `inputChange` event (optional) */
  @Prop() typingtimeout?: number = 300;

  @State() isTyping: boolean = false;
  @State() textareaWrapperHover: string = "";
  @State() textareaWrapperFocus: string = "";

  private statusIcons = {
    success: "circle-check",
    error: "circle-cross-stroke",
    warning: "circle-warning"
  };
  private timer;

  /** get the input value */
  @Method()
  async getValue(): Promise<string> {
    return this.value;
  }

  /** set the input value */
  @Method()
  async setValue(value: string): Promise<void> {
    this.value = value;
  }

  /** get checked status */
  @Method()
  async isChecked(): Promise<boolean> {
    switch (this.type) {
      case InputTypeEnum.checkbox:
        return this.checked;
      default:
        return false;
    }
  }

  /** Emitted on input value change, returns value, keycode */
  @Event() inputChange: EventEmitter;
  emitInputChange(value: string, keycode: number) {
    if (!this.isTyping) {
      this.emitStartTyping();
    }

    this.value = value;
    this.inputChange.emit({ value, keycode });

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.emitStopTyping(this.value);
    }, this.typingtimeout);
  }

  /** Emitted when user starts typing */
  @Event() startTyping: EventEmitter;
  emitStartTyping() {
    this.isTyping = true;
    this.startTyping.emit();
  }

  /** Emitted when user stops typing, returns value */
  @Event() stopTyping: EventEmitter;
  emitStopTyping(value: string) {
    this.isTyping = false;
    this.stopTyping.emit({ value: value });
  }

  /** Emitted on checkbox check/uncheck, returns id, checked */
  @Event() inputCheck: EventEmitter;
  emitInputCheck(checked: boolean) {
    this.inputCheck.emit({ id: this.htmlid, checked: checked });
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
    return (
      <div class="textWrapper">
        {this.renderLabel()}
        <div>
          <input {...this.getTextAttributes()} type={type} />
          {this.renderResetIcon()}
        </div>
        {this.renderMessage()}
      </div>
    );
  }

  renderLabel() {
    if (!this.label) return;
    return (
      <label htmlFor={this.htmlid} class={this.disabled && "disabledLabel"}>
        {this.label}
      </label>
    );
  }

  renderResetIcon() {
    if (!this.value || this.disabled || this.readonly) return;

    return (
      <z-icon
        name="close"
        onClick={(e: any) => this.emitInputChange("", e.keyCode)}
      />
    );
  }

  renderMessage() {
    if (!this.message) return;

    return (
      <span class={`statusMsg msg_${this.status}`}>
        {this.status ? (
          <z-icon name={this.statusIcons[this.status]} width={14} height={14} />
        ) : null}
        <span innerHTML={this.message}></span>
      </span>
    );
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
        <textarea
          {...attributes}
          onFocus={() => (this.textareaWrapperFocus = "focus")}
          onBlur={() => (this.textareaWrapperFocus = "")}
          onMouseOver={() => (this.textareaWrapperHover = "hover")}
          onMouseOut={() => (this.textareaWrapperHover = "")}
        />
      </div>
    );
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
      default:
        return this.renderInputText();
    }
  }
}
