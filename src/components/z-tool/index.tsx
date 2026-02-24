import {Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h} from "@stencil/core";
import {PopoverPosition} from "../../beans";
import {IconName} from "../../constants/iconset";

/**
 * ZTool component. Can display an icon, an optional tooltip (mainly for hints about the tool's functionality), and can contain a nested `z-toolbar` as a submenu that opens on click.
 * @slot - Optional slot for nested content (e.g., a secondary `z-toolbar`) that appears when the tool is open/clicked.
 * @method setFocus() - Public method to set focus on the tool's button element.
 */
@Component({
  tag: "z-tool",
  styleUrls: ["styles.css", "../../tokens/typography.css"],
  shadow: true,
})
export class ZTool {
  @Element() hostElement: HTMLZToolElement;

  /** Tool icon */
  @Prop()
  icon: IconName;

  /** Text displayed inside the tooltip. */
  @Prop()
  tooltip?: string;

  /** Preferred tooltip position. Defaults to true. */
  @Prop()
  tooltipPosition: PopoverPosition = PopoverPosition.TOP;

  /** Accessible label for the tool trigger. Falls back to tooltip content. */
  @Prop()
  htmlAriaLabel?: string;

  /** Visual active state. */
  @Prop({reflect: true})
  active = false;

  /** Disabled state. */
  @Prop({reflect: true})
  disabled = false;

  /** Open state. */
  @Prop({reflect: true, mutable: true})
  open = false;

  /**
   * Color to use to fill the icon's color indicator, if it has one.
   * Can be any valid value for the `fill` svg attribute.
   * The value of this prop is passed down to the `z-icon` component inside the tool.
   *
   * If `z-color-picker` component is used inside the tool's slot, its `colorSelected` event is listened
   * to automatically update `indicatorColor` and change the color of the icon indicator accordingly.
   */
  @Prop({mutable: true})
  indicatorColor?: string;

  @State()
  tooltipOpen = false;

  @State()
  hasSlottedContent = false;

  @State()
  isMobile = false;

  /** Emitted when the open state changes. */
  @Event()
  toggleSubmenu: EventEmitter;

  private buttonRef?: HTMLButtonElement;

  private iconRef?: HTMLElement;

  private tooltipRef?: HTMLZTooltipElement;

  private hoverDelay?: ReturnType<typeof setTimeout>;

  /** Indicates if the tool is nested inside another tool. */
  private isNested = false;

  /** Main `z-toolbar` ancestor element, meant to be the top-level toolbar not nested inside another tool. */
  private mainToolbar?: HTMLZToolbarElement;

  @Watch("open")
  handleOpenChange(): void {
    this.toggleSubmenu.emit(this.open);
  }

  private handleTooltipOpen = (): void => {
    if (!this.tooltip) {
      return;
    }

    clearTimeout(this.hoverDelay);
    this.hoverDelay = setTimeout(() => {
      this.tooltipOpen = true;
    }, 1000);
  };

  /**
   * Closes the tooltip immediately on button blur, clearing any pending hover delay.
   */
  private onButtonBlur = (ev: FocusEvent | MouseEvent): void => {
    if (!this.tooltip || (ev.relatedTarget as HTMLElement)?.closest("z-tooltip") === this.tooltipRef) {
      return;
    }

    clearTimeout(this.hoverDelay);
    this.tooltipOpen = false;
  };

  /** Handles click events on the tool's button element.
   * If the tool has slotted content, toggles the open state and focuses the first tool in the nested toolbar.
   */
  private handleClick = (): void => {
    if (this.disabled) {
      return;
    }

    if (this.hasSlottedContent) {
      this.open = !this.open;
      if (this.open) {
        requestAnimationFrame(() => {
          (this.hostElement.querySelector("z-toolbar z-tool") as HTMLZToolElement)?.setFocus();
        });
      }
    }
  };

  /**
   * Handles `openChange` events from the submenu popover to keep the `open` state in sync.
   */
  private onSubmenuOpenChange(event: CustomEvent): void {
    if (!Array.from(this.hostElement.shadowRoot!.children).includes(event.target as Element)) {
      return;
    }

    this.open = event.detail.open;
  }

  /**
   * Handles the `colorSelected` event from a nested `z-color-picker` component.
   * Updates the `indicatorColor` and closes the tool's popover.
   */
  @Listen("colorSelected")
  handleColorSelected(event: CustomEvent): void {
    if (!Array.from(this.hostElement.children).includes(event.target as Element)) {
      return;
    }

    this.indicatorColor = event.detail;
    this.open = false;
  }

  /** Focuses the tool's button element. */
  @Method()
  async setFocus(): Promise<void> {
    requestAnimationFrame(() => {
      this.buttonRef?.focus();
    });
  }

  componentWillLoad(): void {
    this.hasSlottedContent = this.hostElement.children.length > 0;
    this.isNested = !!this.hostElement.closest("z-tool:not(:scope)");
    this.mainToolbar = this.hostElement.closest("z-toolbar:not(z-toolbar z-toolbar)");

    const mql = matchMedia("(max-width: 767px)");
    this.isMobile = mql.matches;
    mql.addEventListener("change", (e) => {
      this.isMobile = e.matches;
    });
  }

  disconnectedCallback(): void {
    clearTimeout(this.hoverDelay);
  }

  render(): HTMLZToolElement {
    return (
      <Host>
        <button
          class="z-tool"
          type="button"
          ref={(el) => (this.buttonRef = el)}
          aria-pressed={this.hasSlottedContent ? undefined : this.active ? "true" : "false"}
          aria-expanded={this.hasSlottedContent ? (this.open ? "true" : "false") : undefined}
          aria-haspopup={this.hasSlottedContent ? "true" : undefined}
          aria-label={this.htmlAriaLabel || this.tooltip || undefined}
          disabled={this.disabled}
          onClick={this.handleClick}
          onMouseEnter={this.handleTooltipOpen}
          onMouseLeave={this.onButtonBlur}
          onFocus={this.handleTooltipOpen}
          onBlur={this.onButtonBlur}
        >
          <z-icon
            ref={(el) => (this.iconRef = el)}
            name={this.icon}
            indicatorColor={this.indicatorColor}
          ></z-icon>
        </button>
        {this.tooltip && (
          <z-tooltip
            class="z-tool-tooltip"
            ref={(el) => (this.tooltipRef = el)}
            bindTo={this.iconRef}
            open={this.tooltipOpen}
            position={this.isNested ? PopoverPosition.BOTTOM : this.tooltipPosition}
            dark
          >
            <span class="body-4">{this.tooltip}</span>
          </z-tooltip>
        )}
        {this.hasSlottedContent && (
          <z-popover
            class="z-tool-submenu"
            open={this.open}
            bindTo={this.isMobile && this.mainToolbar ? this.mainToolbar : this.hostElement}
            center
            position={this.isMobile ? PopoverPosition.TOP : PopoverPosition.BOTTOM}
            onOpenChange={(ev) => this.onSubmenuOpenChange(ev)}
          >
            <slot></slot>
          </z-popover>
        )}
      </Host>
    );
  }
}
