import {Component, Prop, h, Host} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";
import {InputStatusEnum} from "../../../beans";

@Component({
  tag: "z-input-message",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZInputMessage {
  /** input helper message */
  @Prop()
  message: string;

  /** input status (optional) */
  @Prop({reflect: true})
  status?: InputStatusEnum;

  private statusIcons = {
    success: "checkmark-circle",
    error: "multiply-circled",
    warning: "exclamation-circle",
  };

  render(): HostElement {
    return (
      <Host
        role="alert"
        aria-label={this.message}
        tabindex={this.message ? 0 : -1}
      >
        {this.statusIcons[this.status] && this.message && <z-icon name={this.statusIcons[this.status]}></z-icon>}
        <span innerHTML={this.message} />
      </Host>
    );
  }
}