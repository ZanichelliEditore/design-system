import {Component, Element, Host, Prop, h} from "@stencil/core";
import {ListSize, ListType} from "../../../beans";

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

  /**
   * [optional] type of the list marker for each element
   */
  @Prop({reflect: true})
  listType?: ListType = ListType.NONE;

  /**
   * Sets role of the element.
   */
  @Prop({reflect: true})
  role = "list";

  private setChildrenSizeType(): void {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      children[i].setAttribute("size", this.size);
      children[i].setAttribute("list-type", this.listType);
      children[i].setAttribute("list-element-position", (i + 1).toString());
    }
  }

  componentDidLoad(): void {
    this.setChildrenSizeType();
  }

  render(): HTMLZListElement {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
