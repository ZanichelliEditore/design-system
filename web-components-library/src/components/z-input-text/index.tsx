import {
  Component,
  Prop,
  State,
  h,
  Event,
  EventEmitter,
  Method
} from "@stencil/core";
import { InputTypeBean, InputTypeEnum, InputStatusBean } from "../../beans";

@Component({
  tag: "z-input-text",
  styleUrl: "styles.css",
  shadow: true
})
export class ZInputText {
  @Prop() inputid: string;
  @Prop() label?: string;
  @Prop({ mutable: true }) value?: string;
  @Prop() placeholder?: string;
  @Prop() htmltitle?: string;
  @Prop() type?: InputTypeBean;
  @Prop() status?: InputStatusBean;
  @Prop() message?: string;
  @Prop() isdisabled: boolean = false;
  @Prop() isreadonly: boolean = false;
  @Prop() typingTimeout?: number = 300;

  @State() isTyping: boolean = false;
  @State() textareaWrapperHover: string = "";
  @State() textareaWrapperFocus: string = "";

  private statusIcons = {
    success: "circle-check",
    error: "circle-cross-stroke",
    warning: "circle-warning"
  };
  private timer;

  @Method()
  async getValue() {
    return this.value;
  }

  @Method()
  async setValue(value: string) {
    this.value = value;
  }

  @Event() inputChange: EventEmitter;
  emitInputChange(value: string, keycode: number) {
    this.isTyping = true;
    this.value = value;
    this.inputChange.emit({ value, keycode });

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.isTyping = false;
    }, this.typingTimeout);
  }

  getAttributes() {
    return {
      id: this.inputid,
      name: this.inputid,
      placeholder: this.placeholder,
      value: this.value,
      disabled: this.isdisabled,
      readonly: this.isreadonly,
      title: this.htmltitle,
      class: `
        ${this.status ? "input_" + this.status : "input_default"}
        ${this.isTyping && "istyping"}
        ${!this.isTyping && this.value && "filled"}
      `,
      onInput: (e: any) => this.emitInputChange(e.target.value, e.keyCode)
    };
  }

  renderLabel() {
    if (!this.label) return;

    return <label htmlFor={this.inputid}>{this.label}</label>;
  }

  renderInput() {
    const attributes = this.getAttributes();

    switch (this.type) {
      case InputTypeEnum.textarea:
        return (
          <div
            class={`
            textareaWrapper
            ${attributes.class}
            ${attributes.disabled && " disabled"}
            ${attributes.readonly && " readonly"}
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
      default:
        return <input {...attributes} type={this.type} />;
    }
  }

  renderResetIcon() {
    if (
      !this.value ||
      this.isdisabled ||
      this.isreadonly ||
      this.type === InputTypeEnum.textarea
    )
      return;

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

  render() {
    return (
      <div>
        {this.renderLabel()}
        <div>
          {this.renderInput()}
          {this.renderResetIcon()}
        </div>
        {this.renderMessage()}
      </div>
    );
  }
}
