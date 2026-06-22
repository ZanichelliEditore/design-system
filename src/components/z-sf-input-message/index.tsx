import {Component, ComponentInterface, Host, Prop, State, Watch, h} from "@stencil/core";
import {SfInputStatus} from "../../beans";
import {sfRandomId} from "../../utils/utils";

@Component({
  tag: "z-sf-input-message",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZSfInputMessage implements ComponentInterface {
  /** input helper message */
  @Prop()
  message: string;

  /** the id of the message element (optional)*/
  @Prop()
  htmlId? = `id-${sfRandomId()}`;

  /** the role to set when both the message and the status are populated (optional)*/
  @Prop()
  htmlRole: null | string = "alert";

  /** input status (optional) */
  @Prop({reflect: true})
  status?: SfInputStatus;

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

  render(): HTMLZSfInputMessageElement {
    return (
      <Host {...this.statusRole}>
        {this.statusIcons[this.status] && this.message && <z-sf-icon name={this.statusIcons[this.status]}></z-sf-icon>}
        <span
          id={this.htmlId}
          innerHTML={this.message}
        />
      </Host>
    );
  }
}
