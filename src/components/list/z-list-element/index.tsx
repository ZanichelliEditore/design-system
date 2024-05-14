import {Component, Element, Event, EventEmitter, h, Host, Listen, Prop, State} from "@stencil/core";
import {
  DividerSize,
  ExpandableListButtonAlign,
  ExpandableListStyle,
  KeyboardCode,
  ListDividerType,
  ListSize,
  ListType,
} from "../../../beans";

@Component({
  tag: "z-list-element",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZListElement {
  @Element() host: HTMLZListElementElement;

  /** remove filter click event, returns filterid */
  @Event({
    eventName: "accessibleFocus",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  accessibleFocus: EventEmitter<number>;

  /** set parent aria-activedescendant on focus event, returns filterid */
  @Event({
    eventName: "ariaDescendantFocus",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  ariaDescendantFocus: EventEmitter<number>;

  /** remove filter click event, returns filterid */
  @Event({
    eventName: "clickItem",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  clickItem: EventEmitter;

  @Listen("accessibleFocus", {target: "document"})
  accessibleFocusHandler(e: CustomEvent): void {
    if (this.listElementId === e.detail) {
      const toFocus = this.host.shadowRoot.getElementById(`z-list-element-id-${e.detail}`);
      toFocus.focus();
    }
  }

  /**
   * [optional] Align expandable button left or right.
   */
  @Prop({reflect: true})
  alignButton?: ExpandableListButtonAlign = ExpandableListButtonAlign.LEFT;

  /**
   * [optional] Sets element clickable.
   */
  @Prop({reflect: true})
  clickable?: boolean = false;

  /**
   * [optional] Sets the divider color.
   */
  @Prop()
  dividerColor?: string = "color-surface03";

  /**
   * [optional] Sets the position where to insert the divider.
   */
  @Prop()
  dividerType?: ListDividerType = ListDividerType.NONE;

  /**
   * [optional] Sets the divider size.
   */
  @Prop()
  dividerSize?: DividerSize = DividerSize.SMALL;

  /**
   * [optional] Sets element as expandable.
   */
  @Prop({reflect: true})
  expandable?: boolean = false;

  /**
   * [optional] Sets expandable style to element.
   */
  @Prop()
  expandableStyle?: ExpandableListStyle = ExpandableListStyle.ACCORDION;

  /**
   * [optional] List element id.
   */
  @Prop({reflect: true})
  listElementId?: number;

  /**
   * [optional] Sets size of inside elements.
   */
  @Prop({reflect: true})
  size?: ListSize = ListSize.MEDIUM;

  /**
   * [optional] Sets text color of the element.
   */
  @Prop({reflect: true})
  color?: string = "none";

  /**
   * [optional] Sets disabled style of the element.
   */
  @Prop({reflect: true})
  disabled?: boolean = false;

  /**
   * [optional] position of the list element inside the list or the group
   */
  @Prop({reflect: true})
  listElementPosition?: string = "0";

  /**
   * [optional] type of the list marker for each element
   */
  @Prop({reflect: true})
  listType?: ListType = ListType.NONE;

  /**
   * Sets element role.
   */
  @Prop({reflect: true})
  role = "listitem";

  /** set tabindex to Host tag (optional). Defaults to 0. */
  @Prop()
  htmlTabindex?: number | null = 0;

  @State()
  showInnerContent = false;

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
  private handleClick(): void {
    this.clickItem.emit(this.listElementId);
    if (!this.expandable) {
      return;
    }
    this.showInnerContent = !this.showInnerContent;
  }

  private handleKeyDown(event): void {
    const expandByKey = event.code === KeyboardCode.ENTER;
    switch (event.code) {
      case KeyboardCode.ARROW_DOWN:
        event.preventDefault();
        this.accessibleFocus.emit(this.listElementId + 1);
        break;
      case KeyboardCode.ARROW_UP:
        event.preventDefault();
        this.accessibleFocus.emit(this.listElementId - 1);
        break;
      case KeyboardCode.ENTER:
        event.preventDefault();
        this.clickItem.emit(this.listElementId);
        break;
      default:
        break;
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
  private renderExpandableButton(): HTMLZIconElement {
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
  private renderExpandedContent(): HTMLDivElement {
    if (!this.expandable) {
      return null;
    }

    return (
      <div
        class={{
          "z-list-element-inner-container": true,
          "expanded": this.showInnerContent,
        }}
      >
        <slot name="inner-content" />
      </div>
    );
  }

  /**
   * Renders content of the z-list-element
   * @returns list content
   */
  private renderContent(): HTMLDivElement {
    if (this.listType === ListType.NONE) {
      return <slot />;
    }

    if (this.listType === ListType.ORDERED) {
      return (
        <div class="z-list-content-container">
          <div>{this.listElementPosition}.&emsp;</div>
          <slot />
        </div>
      );
    }

    if (this.listType === ListType.UNORDERED) {
      return (
        <div class="z-list-content-container">
          <span>&bull;&emsp;</span>
          <slot />
        </div>
      );
    }
  }

  render(): HTMLZListElementElement {
    return (
      <Host
        aria-expanded={this.expandable ? this.showInnerContent : null}
        onClick={this.handleClick}
        onFocus={() => this.ariaDescendantFocus.emit(this.listElementId)}
        onKeyDown={this.handleKeyDown}
        clickable={this.clickable && !this.disabled}
        tabIndex={this.htmlTabindex}
      >
        <div
          class="container"
          style={{color: `var(--${this.color})`}}
          tabindex="-1"
          id={`z-list-element-id-${this.listElementId}`}
          part="list-item-container"
        >
          <div class="z-list-element-container">
            {this.renderExpandableButton()}
            {this.renderContent()}
          </div>
          {this.renderExpandedContent()}
        </div>
        {this.dividerType === ListDividerType.ELEMENT && (
          <z-divider
            color={this.dividerColor}
            size={this.dividerSize}
          />
        )}
      </Host>
    );
  }
}
