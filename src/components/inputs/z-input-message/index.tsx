import {Component, Prop, Watch, h, Host} from "@stencil/core";
import {InputStatus} from "../../../beans";

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
  status?: InputStatus;

  private statusIcons = {
    success: "checkmark-circle",
    error: "multiply-circled",
    warning: "exclamation-circle",
  };

  private statusRole = {};

  @Watch("message")
  onMessageChange(): void {
    this.statusRole = this.message != "" ? {role: "alert"} : {};
  }

  componentDidLoad(): void {
    this.onMessageChange();
  }

  render(): HTMLZInputMessageElement {
    return (
      <Host
        {...this.statusRole}
        aria-label={this.message}
      >
        {this.statusIcons[this.status] && this.message && <z-icon name={this.statusIcons[this.status]}></z-icon>}
        <span innerHTML={this.message} />
      </Host>
    );
  }
}
