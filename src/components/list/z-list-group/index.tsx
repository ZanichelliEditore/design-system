import {Component, Element, h, Host, Prop} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";
import {DividerSize, ListSize, ListDividerType} from "../../../beans";

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
  size?: ListSize = ListSize.medium;

  /**
   * [optional] Sets the position where to insert the divider.
   */
  @Prop({reflect: true})
  dividerType?: ListDividerType = ListDividerType.none;

  /**
   * [optional] Sets the divider size.
   */
  @Prop({reflect: true})
  dividerSize?: DividerSize = DividerSize.small;

  /**
   * [optional] Sets the divider color.
   */
  @Prop({reflect: true})
  dividerColor?: string = "gray200";

  hasHeader: boolean;

  componentDidLoad(): void {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      if (children.length - 1 > i) {
        children[i].setAttribute("divider-type", this.dividerType);
        children[i].setAttribute("divider-size", this.dividerSize);
        children[i].setAttribute("divider-color", this.dividerColor);
      }
      children[i].setAttribute("size", this.size);
    }
  }

  componentWillLoad(): void {
    this.hasHeader = !!this.host.querySelector('[slot="header-title"]');
  }

  render(): HostElement {
    return (
      <Host role="group">
        <div
          class={{
            "z-list-group-header-container": true,
            "has-header": this.hasHeader,
          }}
        >
          <slot name="header-title" />
          {this.dividerType === ListDividerType.header && (
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
