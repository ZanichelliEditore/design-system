import { Component, h, Prop, Listen } from "@stencil/core";
import { PocketStatus, PocketStatusEnum } from "../../../beans";

/**
 * @slot  - pocket body content
 */
@Component({
  tag: "z-pocket-body",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPocketBody {
  /** pocket id */
  @Prop() pocketid: string;
  /** pocket status */
  @Prop({ mutable: true }) status: PocketStatus = PocketStatusEnum.preview;

  @Listen("pocketToggle", { target: "body" })
  handlePocketToggle(e: CustomEvent): void {
    if (e.detail.id === this.pocketid) {
      this.status = e.detail.status;
    }
  }

  render() {
    return (
      <main class={this.status}>
        <slot />
      </main>
    );
  }
}
