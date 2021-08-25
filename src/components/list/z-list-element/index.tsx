import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
} from "@stencil/core";
import {
  AccessibleFocusEventData,
  DividerSize,
  ExpandableListButtonAlign,
  ExpandableListStyle,
  KeyboardKeys,
  ListDividerType,
  ListSize,
} from "../../../beans";

@Component({
  tag: "z-list-element",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZListElement {
  @Element() host: HTMLElement;

  /** remove filter click event, returns filterid */
  @Event({
    eventName: "accessibleFocus",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  accessibleFocus: EventEmitter<AccessibleFocusEventData>;

  @Listen("accessibleFocus", { target: "document" })
  accessibleFocusHandler(e: CustomEvent) {
    const { target } = e.detail;
    console.log("event ", e);
    console.log("host", this.host.outerHTML);
    console.log("target", target.outerHTML);
    if (target.outerHTML === this.host.outerHTML) {
      console.log("focused");
      target.background = "red";
      target.focus();
    } else {
      console.log("not my focus");
    }
  }

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
   * [optional] Sets text color of the element.
   */
  @Prop({ reflect: true }) color?: string = "none";

  /**
   * [optional] If is used in ContextualMenu component
   */
  @Prop({ reflect: true }) isContextualMenu?: boolean = false;

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

  getClass() {
    if (this.isContextualMenu) {
      return "container-contextual-menu";
    }

    return "container";
  }

  handleKeyDown(event) {
    console.log("keydown ", event.code);
    const expandByKey = event.code === KeyboardKeys.ENTER;
    if (event.code === KeyboardKeys.ARROW_DOWN) {
      console.log("next ", this.host.nextElementSibling);

      this.accessibleFocus.emit({
        target: this.host.nextElementSibling as HTMLElement,
      });
    }
    if (event.code === KeyboardKeys.ARROW_UP) {
      console.log("prev ", this.host.previousElementSibling);

      this.accessibleFocus.emit({
        target: this.host.previousElementSibling as HTMLElement,
      });
    }
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
        clickable={this.clickable}
        tabIndex={!this.isContextualMenu ? "0" : null}
      >
        <div
          class={this.getClass()}
          style={{ color: this.color }}
          tabindex={this.isContextualMenu ? "0" : "-1"}
        >
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
