import { Component, h, Host, Prop, State } from "@stencil/core";
import { ExpandableListStyle, ExpandableListButtonAlign } from "../../../beans";

@Component({
  tag: "z-list-element",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZListElement {
  /**
   * [optional] Sets element clickable.
   */
  @Prop({ reflect: true }) clickable?: boolean = false;

  /**
   * [optional] Sets element as expandable.
   */
  @Prop() expandable?: boolean = false;

  /**
   * [optional] Sets expandable style to element.
   */
  @Prop() expandableStyle?: ExpandableListStyle = ExpandableListStyle.accordion;

  /**
   * [optional] Align expandable button left or right.
   */
  @Prop({ reflect: true }) alignButton?: ExpandableListButtonAlign =
    ExpandableListButtonAlign.left;

  @State() showInnerContent = false;

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
   * Constructor.
   */
  constructor() {
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handler for click on element. If element is expandable, change state.
   * @returns void
   */
  handleClick() {
    if (!this.expandable) {
      return;
    }

    this.showInnerContent = !this.showInnerContent;
  }

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
      <Host role="listitem" onClick={this.handleClick}>
        <div class="z-list-element-container">
          {this._renderExpandableButton()}
          <slot />
        </div>
        {this._renderExpandedContent()}
      </Host>
    );
  }
}
