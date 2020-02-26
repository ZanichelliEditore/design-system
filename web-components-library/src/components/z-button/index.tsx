import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";
import {
  ButtonVariantBean,
  ButtonVariantEnum,
  ButtonTypeEnum
} from "../../beans";

@Component({
  tag: "z-button",
  styleUrl: "styles.css",
  shadow: true
})
export class ZButton {
  /** id, should be unique */
  @Prop() htmlid?: string;
  /** name */
  @Prop() name?: string;
  /** disable button */
  @Prop() disabled?: boolean = false;
  /** button type */
  @Prop() type?: HTMLButtonElement["type"] = ButtonTypeEnum.button;
  /** graphic variant */
  @Prop() variant?: ButtonVariantBean = ButtonVariantEnum.primary;
  /** reduce button size (optional) */
  @Prop() issmall?: boolean = false;
  /** add an icon to button (optional) */
  @Prop() icon?: string;

  /** Emitted on type submit click */
  @Event() buttonSubmit: EventEmitter;
  /** Emitted on type reset click */
  @Event() buttonReset: EventEmitter;
  /** Emitted on type button click */
  @Event() buttonClick: EventEmitter;

  emitButtonClick() {
    const data = { id: this.htmlid };
    switch (this.type) {
      case ButtonTypeEnum.submit:
        this.buttonSubmit.emit(data);
        break;
      case ButtonTypeEnum.reset:
        this.buttonReset.emit(data);
        break;
      case ButtonTypeEnum.button:
      default:
        this.buttonClick.emit(data);
        break;
    }
  }

  render() {
    return (
      <button
        id={this.htmlid}
        name={this.name}
        type={this.type}
        disabled={this.disabled}
        class={`${this.variant} ${this.issmall && "small"}`}
        onClick={() => this.emitButtonClick()}
      >
        {this.icon && <z-icon name={this.icon} width={16} height={16} />}
        <slot />
      </button>
    );
  }
}
