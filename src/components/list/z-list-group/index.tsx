import {Component, ComponentInterface, Element, h, Host, Prop, State, Watch} from "@stencil/core";
import {DividerSize, ListDividerType, ListSize, ListType} from "../../../beans";

@Component({
  tag: "z-list-group",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZListGroup implements ComponentInterface {
  @Element() host: HTMLZListGroupElement;

  /**
   * [optional] Sets size of inside elements.
   */
  @Prop({reflect: true})
  size?: ListSize = ListSize.MEDIUM;

  /**
   * [optional] Sets the position where to insert the divider.
   */
  @Prop({reflect: true})
  dividerType?: ListDividerType = ListDividerType.NONE;

  /**
   * [optional] Sets the divider size.
   */
  @Prop({reflect: true})
  dividerSize?: DividerSize = DividerSize.SMALL;

  /**
   * [optional] Sets the divider color.
   */
  @Prop({reflect: true})
  dividerColor?: string = "gray200";

  /**
   * [optional] type of the list marker for each element
   */
  @Prop({reflect: true})
  listType?: ListType = ListType.NONE;

  /**
   * [optional] check for tree items in grouped lists
   */
  @Prop()
  hasTreeItems?: boolean;

  @State()
  htmlRole = "group";

  private hasHeader: boolean;

  @Watch("role", {immediate: true})
  onRoleChange(newValue: string): void {
    this.htmlRole = newValue;
  }

  @Watch("size", {immediate: true})
  @Watch("listType", {immediate: true})
  @Watch("dividerType", {immediate: true})
  @Watch("dividerSize", {immediate: true})
  @Watch("dividerColor", {immediate: true})
  setChildrenProps(): void {
    Array.from(this.host.children)
      .filter((child): child is HTMLZListElementElement => child.tagName.toLowerCase() === "z-list-element")
      .forEach((child, i, children) => {
        child.size = this.size;
        child.listType = this.listType;
        child.listElementPosition = i.toString();
        if (i < children.length - 1) {
          child.dividerType = this.dividerType;
          child.dividerSize = this.dividerSize;
          child.dividerColor = this.dividerColor;
        }
      });
  }

  componentWillLoad(): void {
    this.hasHeader = !!this.host.querySelector('[slot="header-title"]');
  }

  render(): HTMLZListGroupElement {
    return (
      <Host role={this.htmlRole}>
        <div
          class={{
            "z-list-group-header-container": true,
            "has-header": this.hasHeader && !this.hasTreeItems,
            "grouped-tree-list-header": this.hasTreeItems,
          }}
        >
          <slot name="header-title" />
          {this.dividerType === ListDividerType.HEADER && (
            <z-divider
              color={this.dividerColor}
              size={this.dividerSize}
            />
          )}
        </div>
        <slot />
      </Host>
    );
  }
}
