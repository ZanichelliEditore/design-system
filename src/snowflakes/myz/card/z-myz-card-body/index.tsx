import { Component, h } from "@stencil/core";

/**
 * @slot alert - card alert slot
 * @slot cover - book cover slot
 */
@Component({
  tag: "z-myz-card-body",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMyzCardBody {
  render() {
    return (
      <div>
        <slot name="alert"></slot>
        <slot name="cover" />
      </div>
    );
  }
}
