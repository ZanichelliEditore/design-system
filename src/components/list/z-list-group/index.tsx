import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "z-list-group",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZListGroup {
  render() {
    return (
      <Host role="group">
        <div class="z-list-group-header-container">
          <slot name="header-title" />
        </div>
        <slot />
      </Host>
    );
  }
}
