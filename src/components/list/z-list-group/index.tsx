import { Component, Element, h, Host, Prop } from "@stencil/core";
import { ListSize, ListDividerType } from "../../../beans";

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

  @Prop({ reflect: true }) dividerType?: ListDividerType = ListDividerType.none;

  setChildrenDividerType() {
    const children = this.host.children;
    for (let i = 0; i < children.length - 1; i++) {
      children[i].setAttribute("divider-type", this.dividerType);
    }
  }

  componentDidLoad() {
    this.setChildrenDividerType();
  }

  render() {
    return (
      <Host role="group">
        <div class="z-list-group-header-container">
          <slot name="header-title" />
          {this.dividerType === ListDividerType.header && (
            <div>
              <z-divider></z-divider>
            </div>
          )}
        </div>
        <slot />
      </Host>
    );
  }
}
