import {Component, Element, h, Prop, Host} from "@stencil/core";

import {ListSize} from "../../../beans";

@Component({
  tag: "z-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZList {
  @Element() host: HTMLZListElement;

  /**
   * [optional] Sets size of inside elements.
   */
  @Prop({reflect: true})
  size?: ListSize = ListSize.MEDIUM;

  private setChildrenSizeType(): void {
    const children = this.host.children;
    for (let i = 0; i < children.length - 1; i++) {
      children[i].setAttribute("size", this.size);
    }
  }

  componentDidLoad(): void {
    this.setChildrenSizeType();
  }

  render(): HTMLZListElement {
    return (
      <Host role="list">
        <slot />
      </Host>
    );
  }
}
