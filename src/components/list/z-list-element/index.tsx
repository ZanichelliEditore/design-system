import { Component, h, Host, Prop, State } from "@stencil/core";
import {
  DividerSize,
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
   * [optional] Align expandable button left or right.
   */
  @Prop({ reflect: true }) alignButton?: ExpandableListButtonAlign =
    ExpandableListButtonAlign.left;

  /**
   * [optional] Sets element clickable.
   */
  @Prop({ reflect: true }) clickable?: boolean = false;

  /**
   * [optional] Sets the divider color.
   */
  @Prop() dividerColor?: string = "gray200";

  /**
   * [optional] Sets the position where to insert the divider.
   */
  @Prop() dividerType?: ListDividerType = ListDividerType.none;

  /**
   * [optional] Sets the divider size.
   */
  @Prop() dividerSize?: DividerSize = DividerSize.small;

  /**
   * [optional] Sets element as expandable.
   */
  @Prop({ reflect: true }) expandable?: boolean = false;

  /**
   * [optional] Sets expandable style to element.
   */
  @Prop() expandableStyle?: ExpandableListStyle = ExpandableListStyle.accordion;

  /**
   * [optional] Sets size of inside elements.
   */
  @Prop({ reflect: true }) size?: ListSize = ListSize.medium;

  /**
   * [optional] Sets background color of the element.
   */
  @Prop({ reflect: true }) backgroundColor?: string = 'none';

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
    this.handleKeyDown = this.handleKeyDown.bind(this);
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

  handleKeyDown(event) {
    const expandByKey = event.code === "Enter" || event.code === "Space";
    if (!this.expandable || !expandByKey) {
      return;
    }
    this.showInnerContent = !this.showInnerContent;
  }

  /**
   * Renders button to expand element.
   * @returns expadable button
   */
  renderExpandableButton() {
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
  renderExpandedContent() {
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
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
      >
        <div class="container" style={{backgroundColor: `var(--${this.backgroundColor})`}}>
          <div class="z-list-element-container">
            {this.renderExpandableButton()}
            <slot />
          </div>
          {this.renderExpandedContent()}
        </div>
        {this.dividerType === ListDividerType.element && (
          <z-divider color={this.dividerColor} size={this.dividerSize} />
        )}
      </Host>
    );
  }
}
