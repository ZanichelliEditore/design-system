import {Component, Host, Prop, h} from "@stencil/core";
import {InputStatus} from "../../beans";

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

  /** input disabled status (optional) */
  @Prop({reflect: true})
  disabled?: boolean;

  @Prop()
  htmlRole?: string;

  private statusIcons = {
    success: "checkmark-circle",
    error: "multiply-circled",
    warning: "exclamation-circle",
  };

  getStatus() {
    if (this.htmlRole) return {role: this.htmlRole};
    return {};
  }

  render(): HTMLZInputMessageElement {
    return (
      <Host {...this.getStatus()}>
        {this.statusIcons[this.status] && this.message && <z-icon name={this.statusIcons[this.status]}></z-icon>}
        <span innerHTML={this.message} />
      </Host>
    );
  }
}
