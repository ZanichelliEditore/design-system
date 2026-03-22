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
  htmlid?: string;

  /** set role:presentation and aria-hidden:true on the host element (optional)*/
  @Prop()
  hidehost?: boolean = false;

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
    if (this.hidehost) {
      this.statusRole = {role: "presentation"};
    } else {
      this.statusRole = this.message && this.status ? {role: "alert"} : {};
    }
  }

  componentWillLoad(): void {
    this.onMessageChange();
  }

  render(): HTMLZInputMessageElement {
    return (
      <Host
        {...this.statusRole}
        aria-hidden={!!this.hidehost}
      >
        {this.statusIcons[this.status] && this.message && <z-icon name={this.statusIcons[this.status]}></z-icon>}
        <span
          id={!!this.htmlid ? this.htmlid : `id-${randomId()}`}
          innerHTML={this.message}
        />
      </Host>
    );
  }
}
