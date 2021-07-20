import { Component, Element, h, Host, Prop } from "@stencil/core";
import {
  DividerSize,
  ListSize,
  ListDividerType,
  ExpandableListStyle,
  ExpandableListButtonAlign,
} from "../../../beans";

@Component({
  tag: "z-list-group",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZListGroup {
  @Element() host: HTMLElement;

  /**
   * [optional] Sets size of inside elements.
   */
  @Prop({ reflect: true }) size?: ListSize = ListSize.medium;

  /**
   * [optional] Sets the position where to insert the divider.
   */
  @Prop({ reflect: true }) dividerType?: ListDividerType = ListDividerType.none;

  /**
   * [optional] Allow expandable behaviour.
   */
  @Prop({ reflect: true }) expandable?: boolean = false;

  /**
   * [optional] Sets expandable style to element.
   */
  @Prop() expandableStyle?: ExpandableListStyle = ExpandableListStyle.accordion;

  /**
   * [optional] Align expandable button left or right.
   */
  @Prop({ reflect: true }) alignButton?: ExpandableListButtonAlign =
    ExpandableListButtonAlign.left;

  /**
   * [optional] Sets the divider size.
   */
  @Prop({ reflect: true }) dividerSize?: DividerSize = DividerSize.small;

  /**
   * [optional] Sets the divider color.
   */
  @Prop({ reflect: true }) dividerColor?: string = "gray200";

  componentDidLoad() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      if (children.length - 1 > i) {
        children[i].setAttribute("divider-type", this.dividerType);
        children[i].setAttribute("divider-size", this.dividerSize);
        children[i].setAttribute("divider-color", this.dividerColor);
      }
      children[i].setAttribute("align-button", this.alignButton);
      children[i].setAttribute(
        "expandable",
        this.expandable ? "true" : "false"
      );
      children[i].setAttribute("expandable-style", this.expandableStyle);
      children[i].setAttribute("size", this.size);
    }
  }

  render() {
    return (
      <Host role="group">
        <div
          class={{
            ["z-list-group-header-container"]: true,
            ["body-4-sb"]: true,
          }}
        >
          <slot name="header-title" />
          {this.dividerType === ListDividerType.header && (
            <div class="z-divider-container">
              <z-divider color={this.dividerColor} size={this.dividerSize} />
            </div>
          )}
        </div>
        <slot />
      </Host>
    );
  }
}
