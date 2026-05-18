import {Component, ComponentInterface, Element, Host, Prop, State, Watch, h} from "@stencil/core";
import {ListSize, ListType} from "../../../beans";

@Component({
  tag: "z-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZList implements ComponentInterface {
  @Element() host: HTMLZListElement;

  /**
   * [optional] Size of the list elements.
   */
  @Prop({reflect: true})
  size?: ListSize = ListSize.MEDIUM;

  /**
   * [optional] Type of the list marker for each element.
   */
  @Prop({reflect: true})
  listType?: ListType = ListType.NONE;

  @State()
  htmlRole = "list";

  /** Watch for changes in the role native attribute */
  @Watch("role", {immediate: true})
  onRoleChange(newValue: string): void {
    this.htmlRole = newValue;
  }

  @Watch("size", {immediate: true})
  @Watch("listType", {immediate: true})
  setChildrenProps(): void {
    Array.from(this.host.children)
      .filter((child): child is HTMLZListElementElement => child.tagName.toLowerCase() === "z-list-element")
      .forEach((child, i) => {
        child.size = this.size;
        child.listType = this.listType;
        child.listElementPosition = `${i + 1}`;
      });
  }

  render(): HTMLZListElement {
    return (
      <Host role={this.htmlRole}>
        <slot />
      </Host>
    );
  }
}
