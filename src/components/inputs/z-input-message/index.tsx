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
    success: "circle-check",
    error: "circle-cross",
    warning: "circle-warning"
  };

  render() {
    return (
      <span class={`statusMsg msg_${this.status}`}>
        {this.status && this.message ? (
          <z-icon name={this.statusIcons[this.status]} width={14} height={14} />
        ) : null}
        <span innerHTML={this.message}></span>
      </span>
    );
  }
}
