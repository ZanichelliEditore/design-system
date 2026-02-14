import {Component, Host, Prop, State, Watch, h} from "@stencil/core";
import {InputStatus} from "../../beans";

@Component({
  tag: "z-input-message",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZInputMessage {
  /** the id of the message element */
  @Prop()
  htmlid?: string;

  /** input helper message */
  @Prop()
  message: string;

  /** input status (optional) */
  @Prop({reflect: true})
  status?: InputStatus;

  /** input disabled status (optional) */
  @Prop({reflect: true})
  disabled?: boolean;

  private statusIcons = {
    success: "checkmark-circle",
    error: "multiply-circled",
    warning: "exclamation-circle",
  };

  @State()
  statusRole = {};

  @Watch("message")
  @Watch("status")
  onMessageChange(): void {
    this.statusRole = this.message && this.status ? {role: "alert"} : {};
  }

  componentWillLoad(): void {
    this.onMessageChange();
  }

  render(): HTMLZInputMessageElement {
    const idAttr = this.htmlid ? {id: this.htmlid} : {};
    return (
      <Host {...this.statusRole} {...idAttr}>
        {this.statusIcons[this.status] && this.message && <z-icon name={this.statusIcons[this.status]}></z-icon>}
        <span innerHTML={this.message} />
      </Host>
    );
  }
}
