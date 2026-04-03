import {Component, Host, Prop, State, Watch, h} from "@stencil/core";
import {InputStatus} from "../../beans";
import {randomId} from "../../utils/utils";

@Component({
  tag: "z-input-message",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZInputMessage {
  /** input helper message */
  @Prop()
  message: string;

  /** the id of the message element (optional)*/
  @Prop()
  htmlId? = `id-${randomId()}`;

  /** the role to set when both the message and the status are populated (optional)*/
  @Prop()
  htmlRole: null | string = "alert";

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
  @Watch("htmlRole")
  onMessageChange(): void {
    this.statusRole = this.htmlRole && this.message && this.status ? {role: this.htmlRole} : {};
  }

  componentWillLoad(): void {
    this.onMessageChange();
  }

  render(): HTMLZInputMessageElement {
    return (
      <Host {...this.statusRole}>
        {this.statusIcons[this.status] && this.message && <z-icon name={this.statusIcons[this.status]}></z-icon>}
        <span
          id={this.htmlId}
          innerHTML={this.message}
        />
      </Host>
    );
  }
}
