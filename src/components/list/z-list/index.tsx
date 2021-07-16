import { Component, Element, h, Prop, Host } from "@stencil/core";

import { ListSize } from "../../../beans";

@Component({
  tag: "z-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZList {
  @Element() host: HTMLElement;

  /**
   * [optional] Sets size of inside elements.
   */
  @Prop({ reflect: true }) size?: ListSize = ListSize.medium;

  setChildrenSizeType() {
    const children = this.host.children;
    for (let i = 0; i < children.length - 1; i++) {
      children[i].setAttribute("size", this.size);
    }
  }

  componentDidLoad() {
    this.setChildrenSizeType();
  }

  render() {
    return (
      <Host role="list">
        <slot />
      </Host>
    );
  }
}
