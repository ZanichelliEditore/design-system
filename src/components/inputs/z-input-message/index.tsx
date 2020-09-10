import { Component, Prop, h } from "@stencil/core";
import { InputStatusBean } from "../../../beans";

@Component({
  tag: "z-input-message",
  styleUrl: "styles.css",
  shadow: true
})
export class ZInputMessage {
  /** input helper message */
  @Prop() message: string;
  /** input status (optional) */
  @Prop() status?: InputStatusBean;

  private statusIcons = {
    success: "checkmark-circle",
    error: "multiply-circled",
    warning: "exclamation-circle"
  };

  renderMsgClassName(): string {
    return this.status ? `msg_${this.status}` : '';
  }

  render() {
    return (
      <span class={`statusMsg ${this.renderMsgClassName()}`}>
        {this.status && this.statusIcons[this.status] && this.message ? (
          <z-icon name={this.statusIcons[this.status]} width={14} height={14} />
        ) : null}
        <span innerHTML={this.message}></span>
      </span>
    );
  }
}
