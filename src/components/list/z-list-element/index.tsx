import { Component, h, Host, Prop, State } from "@stencil/core";
import { ExpandableListStyle, ExpandableListButtonAlign } from "../../../beans";

@Component({
  tag: "z-list-element",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZListElement {
  @Prop() expandable?: boolean = false;
  @Prop() expandableStyle?: ExpandableListStyle = ExpandableListStyle.accordion;
  @State() showInnerContent = false;
  @Prop({ reflect: true }) alignButton: ExpandableListButtonAlign =
    ExpandableListButtonAlign.left;

  private openElementConfig = {
    accordion: {
      open: "minus-circled",
      close: "plus-circled",
    },
    menu: {
      open: "chevron-up",
      close: "chevron-down",
    },
  };

  /**
   * Renders button to expand element.
   * @returns expadable button
   */
  _renderExpandableButton() {
    if (!this.expandable) {
      return null;
    }

    return (
      <z-icon
        name={
          this.showInnerContent
            ? this.openElementConfig[this.expandableStyle].open
            : this.openElementConfig[this.expandableStyle].close
        }
      />
    );
  }

  /**
   * Renders expanded content if element is expandable.
   * @returns expanded content
   */
  _renderExpandedContent() {
    if (!this.expandable) {
      return null;
    }

    return (
      <div
        class={{
          "z-list-element-inner-container": true,
          expanded: this.showInnerContent,
        }}
      >
        <slot name="inner-content" />
      </div>
    );
  }

  render() {
    return (
      <Host
        role="listitem"
        onClick={() => (this.showInnerContent = !this.showInnerContent)}
      >
        <div class="z-list-element-container">
          {this._renderExpandableButton()}
          <slot />
        </div>
        {this._renderExpandedContent()}
      </Host>
    );
  }
}
