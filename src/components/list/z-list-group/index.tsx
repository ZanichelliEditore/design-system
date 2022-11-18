import {Component, Element, h, Host, Prop} from "@stencil/core";
import {DividerSize, ListSize, ListDividerType, ListType} from "../../../beans";

@Component({
  tag: "z-list-group",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZListGroup {
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

  private hasHeader: boolean;

  componentDidLoad(): void {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      if (children.length - 1 > i) {
        children[i].setAttribute("divider-type", this.dividerType);
        children[i].setAttribute("divider-size", this.dividerSize);
        children[i].setAttribute("divider-color", this.dividerColor);
      }
      children[i].setAttribute("size", this.size);
      children[i].setAttribute("list-type", this.listType);
      children[i].setAttribute("list-element-position", i.toString());
    }
  }

  componentWillLoad(): void {
    this.hasHeader = !!this.host.querySelector('[slot="header-title"]');
  }

  render(): HTMLZListGroupElement {
    return (
      <Host role="group">
        <div
          class={{
            "z-list-group-header-container": true,
            "has-header": this.hasHeader,
          }}
        >
          <slot name="header-title" />
          {this.dividerType === ListDividerType.HEADER && (
            <z-divider color={this.dividerColor} size={this.dividerSize} />
          )}
        </div>
        <slot />
      </Host>
    );
  }
}
