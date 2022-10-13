import {Component, h, Prop, Listen} from "@stencil/core";
import {PocketStatusEnum} from "../../../../beans";

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
  status: PocketStatusEnum = PocketStatusEnum.PREVIEW;

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
