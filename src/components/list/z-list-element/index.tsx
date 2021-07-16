import { Component, h, Host, Prop, State } from "@stencil/core";
import {
  ExpandableListStyle,
  ExpandableListButtonAlign,
  ListDividerType,
  ListSize,
} from "../../../beans";

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

  /**
   * [optional] Sets the position where to insert the divider.
   */
  @Prop({ reflect: true }) dividerType?: ListDividerType = ListDividerType.none;

  /**
   * [optional] Sets size of inside elements.
   */
  @Prop({ reflect: true }) size?: ListSize = ListSize.medium;

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
      <Host
        role="listitem"
        aria-expanded={this.expandable ? this.showInnerContent : null}
        onClick={this.handleClick}
        tabIndex="0"
      >
        <div class="container">
          <div class="z-list-element-container">
            {this._renderExpandableButton()}
            <slot />
          </div>
          {this._renderExpandedContent()}
        </div>
        {this.dividerType === ListDividerType.element && <z-divider />}
      </Host>
    );
  }
}
