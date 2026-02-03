import {Component, Element, Host, h} from "@stencil/core";

@Component({
  tag: "z-toolbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToolbar {
  @Element() hostElement: HTMLZToolbarElement;

  render(): HTMLZToolbarElement {
    return (
      <Host>
        <div
          class="z-toolbar"
          role="toolbar"
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
