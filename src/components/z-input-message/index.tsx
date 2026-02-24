import {Component, Host, Prop, State, Watch, h} from "@stencil/core";
import {InputStatus} from "../../beans";

@Component({
  tag: "z-input-message",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZInputMessage {
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

  @State()
  statusMessage: {critical: string; notCritical: string; noStatus: string};

  @Watch("status")
  @Watch("message")
  onMessageOrStatusChange() {
    if (!this.message) {
      this.statusMessage = this.getInitialMessageObj();
      return;
    }

    switch (this.status) {
      case InputStatus.ERROR:
        this.statusMessage = {...this.getInitialMessageObj(), critical: this.message};
        break;
      case InputStatus.SUCCESS:
      case InputStatus.WARNING:
        this.statusMessage = {...this.getInitialMessageObj(), notCritical: this.message};
        break;
      default:
        this.statusMessage = {...this.getInitialMessageObj(), noStatus: this.message};
        break;
    }
  }

  getInitialMessageObj() {
    return {critical: "", notCritical: "", noStatus: ""};
  }

  componentWillLoad(): void {
    this.onMessageOrStatusChange();
  }

  renderIcon() {
    return this.statusIcons[this.status] && <z-icon name={this.statusIcons[this.status]}></z-icon>;
  }

  render(): HTMLZInputMessageElement {
    return (
      <Host>
        <div role="alert">
          {this.statusMessage.critical && this.renderIcon()}
          {this.statusMessage.critical && <span innerHTML={this.statusMessage.critical} />}
        </div>
        <div role="status">
          {this.statusMessage.notCritical && this.renderIcon()}
          {this.statusMessage.notCritical && <span innerHTML={this.statusMessage.notCritical} />}
        </div>
        <div>{this.statusMessage.noStatus && <span innerHTML={this.statusMessage.noStatus} />}</div>
      </Host>
    );
  }
}
