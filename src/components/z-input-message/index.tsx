import {Component, ComponentInterface, Host, Prop, h} from "@stencil/core";
import {InputStatus} from "../../beans";
import {randomId} from "../../utils/utils";

@Component({
  tag: "z-input-message",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZInputMessage implements ComponentInterface {
  /** input helper message */
  @Prop()
  message: string;

  /** the id of the message element (optional) */
  @Prop()
  htmlId? = `id-${randomId()}`;

  /** the role to set when both the message and the status are populated (optional) */
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

  render(): HTMLZInputMessageElement {
    return (
      <Host
        role={this.htmlRole && this.message && this.status ? this.htmlRole : undefined}
        id={this.htmlId}
      >
        {this.statusIcons[this.status] && this.message && <z-icon name={this.statusIcons[this.status]}></z-icon>}
        <span innerHTML={this.message} />
      </Host>
    );
  }
}
