import {Component, Element, Event, EventEmitter, h, Host, Listen, Prop, State} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";
import {
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
  @Element() host: HTMLZListElementElement;

  /** remove filter click event, returns filterid */
  @Event({
    eventName: "accessibleFocus",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  accessibleFocus: EventEmitter<number>;

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
  alignButton?: ExpandableListButtonAlign = ExpandableListButtonAlign.left;

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
  dividerType?: ListDividerType = ListDividerType.none;

  /**
   * [optional] Sets the divider size.
   */
  @Prop()
  dividerSize?: DividerSize = DividerSize.small;

  /**
   * [optional] Sets element as expandable.
   */
  @Prop({reflect: true})
  expandable?: boolean = false;

  /**
   * [optional] Sets expandable style to element.
   */
  @Prop()
  expandableStyle?: ExpandableListStyle = ExpandableListStyle.accordion;

  /**
   * [optional] List element id.
   */
  @Prop({reflect: true})
  listElementId?: number;

  /**
   * [optional] Sets size of inside elements.
   */
  @Prop({reflect: true})
  size?: ListSize = ListSize.medium;

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
   * [optional] If is used in ZContextualMenu component
   */
  @Prop({reflect: true})
  isContextualMenu?: boolean = false;

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

  private calculateClass(): string {
    if (this.isContextualMenu) {
      return "container-contextual-menu";
    }

    return "container";
  }

  private handleKeyDown(event): void {
    const expandByKey = event.code === KeyboardKeys.ENTER;
    switch (event.code) {
      case KeyboardKeys.ARROW_DOWN:
        event.preventDefault();
        this.accessibleFocus.emit(this.listElementId + 1);
        break;
      case KeyboardKeys.ARROW_UP:
        event.preventDefault();
        this.accessibleFocus.emit(this.listElementId - 1);
        break;
      case KeyboardKeys.ENTER:
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

  render(): HostElement {
    return (
      <Host
        role="listitem"
        aria-expanded={this.expandable ? this.showInnerContent : null}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        clickable={this.clickable && !this.disabled}
        tabIndex={!this.isContextualMenu ? "0" : null}
      >
        <div
          class={`${this.calculateClass()}`}
          style={{color: `var(--${this.color})`}}
          tabindex={this.isContextualMenu ? "0" : "-1"}
          id={`z-list-element-id-${this.listElementId}`}
        >
          <div class="z-list-element-container">
            {this.renderExpandableButton()}
            <slot />
          </div>
          {this.renderExpandedContent()}
        </div>
        {this.dividerType === ListDividerType.element && (
          <z-divider
            color={this.dividerColor}
            size={this.dividerSize}
          />
        )}
      </Host>
    );
  }
}
