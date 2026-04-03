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
  htmlid? = `id-${randomId()}`;

  /** set role=alert if the message and the status are populated (optional)*/
  @Prop()
  withrole?: boolean = true;

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
  @Watch("withrole")
  onMessageChange(): void {
    this.statusRole = this.withrole && this.message && this.status ? {role: "alert"} : {};
  }

  componentWillLoad(): void {
    this.onMessageChange();
  }

  render(): HTMLZInputMessageElement {
    return (
      <Host {...this.statusRole}>
        {this.statusIcons[this.status] && this.message && <z-icon name={this.statusIcons[this.status]}></z-icon>}
        <span
          id={this.htmlid}
          innerHTML={this.message}
        />
      </Host>
    );
  }
}
