import {Component, h} from "@stencil/core";

/**
 * @slot  - message body
 * @slot cta - message CTAs
 */
@Component({
  tag: "z-pocket-message",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZPocketMessage {
  render(): HTMLDivElement {
    return (
      <div>
        <z-icon name="exclamation-circle" />
        <div class="content">
          <slot />
        </div>
        <div class="cta-wrapper">
          <slot name="cta" />
        </div>
      </div>
    );
  }
}
