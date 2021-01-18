import { Component, h } from "@stencil/core";

/**
 * @slot  - message body
 * @slot cta-1 - first CTA
 * @slot cta-2 - second CTA
 */
@Component({
  tag: "z-pocket-message",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPocketMessage {
  render() {
    return (
      <div>
        <z-icon name="exclamation-circle" />
        <div>
          <div class="content">
            <slot />
          </div>
          <div class="ctaWrapper">
            <slot name="cta-1" />
            <slot name="cta-2" />
          </div>
        </div>
      </div>
    );
  }
}
