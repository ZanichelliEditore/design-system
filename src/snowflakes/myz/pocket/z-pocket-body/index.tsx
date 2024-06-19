import {Component, Listen, Prop, h} from "@stencil/core";
import {PocketStatus} from "../../../../beans";

/**
 * @slot  - pocket body content
 */
@Component({
  tag: "z-pocket-body",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZPocketBody {
  /** pocket id */
  @Prop()
  pocketid: string;

  /** pocket status */
  @Prop({mutable: true})
  status: PocketStatus = PocketStatus.PREVIEW;

  @Listen("pocketToggle", {target: "body"})
  handlePocketToggle(e: CustomEvent): void {
    if (e.detail.id && e.detail.id === this.pocketid) {
      this.status = e.detail.status;
    }
  }

  render(): HTMLElement {
    return (
      <main class={this.status}>
        <slot />
      </main>
    );
  }
}
