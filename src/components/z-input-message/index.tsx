import {Component, Host, Prop, h} from "@stencil/core";
import {InputStatus} from "../../beans";
import {randomId} from "../../utils/utils";

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
  message?: string;

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

  renderIcon() {
    return this.statusIcons[this.status] && <z-icon name={this.statusIcons[this.status]}></z-icon>;
  }

  render(): HTMLZInputMessageElement {
    return (
      <Host>
        <div>
          {this.message && this.renderIcon()}
          {this.message && (
            <span
              id={this.htmlid ?? `id-${randomId()}`}
              innerHTML={this.message}
            />
          )}
        </div>
      </Host>
    );
  }
}
