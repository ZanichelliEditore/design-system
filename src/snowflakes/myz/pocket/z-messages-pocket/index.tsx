import {Component, Prop, h, Listen /* , State */} from "@stencil/core";
import {PocketStatus, PocketStatusEnum} from "../../../../beans";

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
  status: PocketStatus = PocketStatusEnum.preview;

  @Listen("pocketToggle", {target: "body"})
  handlePocketToggle(e: CustomEvent): void {
    if (e.detail.id === this.pocketid) {
      this.status = e.detail.status;
    }
  }

  renderHeader(): HTMLZPocketHeaderElement {
    let message: HTMLElement;
    let icon: string;
    switch (this.status) {
      case PocketStatusEnum.preview:
      case PocketStatusEnum.closed:
        message = (
          <span>
            Messaggi <span class="badge">{this.messages}</span>
          </span>
        );
        icon = "chevron-up";
        break;
      case PocketStatusEnum.open:
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

  renderBody(): HTMLZPocketBodyElement {
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
