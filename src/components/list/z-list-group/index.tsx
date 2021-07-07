import { Component, h, Host, Prop } from "@stencil/core";
import { ListSize } from "../../../beans";

@Component({
  tag: "z-list-group",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZListGroup {
  /**
   * [optional] Sets size of inside elements.
   */
  @Prop({ reflect: true }) size?: ListSize = ListSize.medium;

  render() {
    return (
      <Host role="group">
        <div class="z-list-group-header-container">
          <slot name="header-title" />
          <slot name="divider" />
        </div>
        <slot />
      </Host>
    );
  }
}
