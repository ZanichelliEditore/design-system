import {Component, Listen /* , State */, Prop, h} from "@stencil/core";
import {PocketStatus} from "../../../../beans";

/**
 * @slot  - pocket body content
 */
@Component({
  tag: "z-messages-pocket",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMessagesPocket {
  /** pocket id */
  @Prop()
  pocketid: string;

  /** number of messages */
  @Prop()
  messages: number;

  /** pocket status */
  @Prop({mutable: true})
  status: PocketStatus = PocketStatus.PREVIEW;

  @Listen("pocketToggle", {target: "body"})
  handlePocketToggle(e: CustomEvent): void {
    if (e.detail.id === this.pocketid) {
      this.status = e.detail.status;
    }
  }

  private renderHeader(): HTMLZPocketHeaderElement {
    let message: HTMLElement;
    let icon: string;
    switch (this.status) {
      case PocketStatus.PREVIEW:
      case PocketStatus.CLOSED:
        message = (
          <span>
            Messaggi <span class="badge">{this.messages}</span>
          </span>
        );
        icon = "chevron-up";
        break;
      case PocketStatus.OPEN:
        message = <span>Riduci</span>;
        icon = "chevron-down";
        break;
    }

    return (
      <z-pocket-header pocketid={this.pocketid}>
        {message}
        <z-icon
          name={icon}
          width={14}
          height={14}
        />
      </z-pocket-header>
    );
  }

  private renderBody(): HTMLZPocketBodyElement {
    return (
      <z-pocket-body pocketid={this.pocketid}>
        <div class="body">
          <slot />
        </div>
        <div class="gradient" />
      </z-pocket-body>
    );
  }

  render(): HTMLZPocketElement {
    return (
      <z-pocket
        pocketid={this.pocketid}
        status={this.status}
        class={this.status}
      >
        {this.renderHeader()}
        {this.renderBody()}
      </z-pocket>
    );
  }
}
