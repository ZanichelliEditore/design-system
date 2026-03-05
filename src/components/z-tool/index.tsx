import {Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h} from "@stencil/core";
import {KeyboardCode, PopoverPosition} from "../../beans";
import {ZPopoverCustomEvent} from "../../components";
import {IconName} from "../../constants/iconset";
import {containsElement} from "../../utils/utils";

/**
 * ZTool component. Can display an icon, an optional tooltip (mainly for hints about the tool's functionality), and can contain a nested `z-toolbar` as a submenu that opens on click.
 * @slot - Optional slot for nested content (e.g., a secondary `z-toolbar`) that appears when the tool is open/clicked.
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

  /** Emitted when the tooltip open state changes. */
  @Event()
  toggleTooltip: EventEmitter;

  private buttonRef?: HTMLButtonElement;

  private iconRef?: HTMLElement;

  private tooltipRef?: HTMLZTooltipElement;

  private popoverRef?: HTMLZPopoverElement;

  private hoverDelay?: ReturnType<typeof setTimeout>;

  /** Indicates if the tool is nested inside another tool. */
  private isNested = false;

  /** Indicates if the tool has no nested tools. */
  private isLeaf = true;

  /** Main `z-toolbar` ancestor element, meant to be the top-level toolbar not nested inside another tool. */
  private mainToolbar?: HTMLZToolbarElement;

  /** Media query list for detecting mobile view. */
  private mql?: MediaQueryList;

  /** Listener for changes in the mobile view media query. */
  private onMobileViewChange?: (e: MediaQueryListEvent) => void;

  /**
   * Opens the tooltip with a delay when the button is hovered or focused, and if the tool's content isn't already visible.
   */
  private handleTooltipOpen = (ev: FocusEvent | MouseEvent): void => {
    if (!this.tooltip || this.open || !this.buttonRef.contains(ev.target as Node)) {
      return;
    }

    clearTimeout(this.hoverDelay);
    this.hoverDelay = setTimeout(() => {
      this.tooltipOpen = true;
    }, 1000);
  };

  /**
   * Closes the tooltip immediately on button blur or when the mouse leaves the button or the tooltip, clearing any pending hover delay.
   */
  private handleTooltipClose = (ev: FocusEvent | MouseEvent): void => {
    if (!this.tooltip || (ev.relatedTarget as HTMLElement)?.closest("z-tooltip") === this.tooltipRef) {
      return;
    }

    clearTimeout(this.hoverDelay);
    this.tooltipOpen = false;
  };

  /**
   * Handles click events on the tool's button element.
   * If the tool has slotted content, toggles the open state and focuses the first tool in the nested toolbar or the first color of the color picker.
   */
  private handleClick = (): void => {
    if (this.disabled || !this.hasSlottedContent) {
      return;
    }

    this.open = !this.open;
    if (this.open) {
      const colorPicker = this.hostElement.querySelector(":scope > z-color-picker") as HTMLZColorPickerElement | null;
      if (colorPicker) {
        colorPicker.setFocus();

        return;
      }

      const firstNestedTool = this.hostElement.querySelector(
        ":scope > z-toolbar z-tool:not(:disabled)"
      ) as HTMLZToolElement | null;
      firstNestedTool?.setFocus();
    }
  };

  /**
   * Handles `openChange` events from the submenu popover to keep the `open` state in sync.
   */
  private onSubmenuOpenChange(event: ZPopoverCustomEvent<{open: boolean}>): void {
    if ((event.target as HTMLElement) !== this.popoverRef) {
      return;
    }

    event.stopPropagation();
    this.open = event.detail.open;
  }

  /**
   * Close the popover on clicks outside the component.
   * Only used in mobile view.
   */
  private onOutsideClick = (event: MouseEvent): void => {
    const target = event.composedPath()[0] as HTMLElement;
    if (!this.open || containsElement(this.hostElement, target)) {
      // don't close the popover if the click was inside this component. toggling when clicking on trigger button is already handled.
      return;
    }

    this.open = false;
  };

  @Watch("open")
  handleOpenChange(): void {
    this.toggleSubmenu.emit(this.open);
  }

  @Watch("tooltipOpen")
  handleTooltipOpenChange(): void {
    this.toggleTooltip.emit(this.tooltipOpen);
  }

  @Watch("isMobile")
  onMobileChange(): void {
    if (this.isMobile) {
      // listen to clicks outside the popover to close it in mobile view: since in mobile the popover is bound to the main toolbar and not the tool itself, click inside the toolbar would close the popover but aren't propagated so won't trigger the actions of other tools
      this.hostElement.ownerDocument.addEventListener("click", this.onOutsideClick, {capture: true});
    } else {
      this.hostElement.ownerDocument.removeEventListener("click", this.onOutsideClick, {capture: true});
    }
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
    this.setFocus();
  }

  /**
   * Handle esc key to close the submenu and move focus back to the tool button.
   */
  @Listen("keydown")
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.open || event.key !== KeyboardCode.ESC) {
      return;
    }

    event.stopPropagation();
    this.open = false;
    this.setFocus();
  }

  /** Focuses the tool's button element. */
  @Method()
  async setFocus(): Promise<void> {
    if (this.disabled) {
      return;
    }

    setTimeout(() => {
      this.buttonRef?.focus();
    }, 50);
  }

  /** Closes the tooltip. */
  @Method()
  async closeTooltip(): Promise<void> {
    clearTimeout(this.hoverDelay);
    this.tooltipOpen = false;
  }

  componentWillLoad(): void {
    this.hasSlottedContent = this.hostElement.children.length > 0;
    this.isNested = !!this.hostElement.closest("z-tool:not(:scope)");
    this.isLeaf = !this.hostElement.querySelector("z-tool");
    this.mainToolbar = this.hostElement.closest("z-toolbar:not(z-toolbar z-toolbar)");

    this.mql = matchMedia("(max-width: 767px)");
    this.onMobileViewChange = (e: MediaQueryListEvent) => (this.isMobile = e.matches);
    this.mql.addEventListener("change", this.onMobileViewChange);
    this.isMobile = this.mql.matches;
  }

  disconnectedCallback(): void {
    clearTimeout(this.hoverDelay);
    if (this.isMobile) {
      this.hostElement.ownerDocument.removeEventListener("click", this.onOutsideClick, {capture: true});
    }
    this.mql?.removeEventListener("change", this.onMobileViewChange);
  }

  render(): HTMLZToolElement {
    return (
      <Host class={{"z-tool-tooltip-open": this.tooltipOpen}}>
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
          onMouseLeave={this.handleTooltipClose}
          onFocus={this.handleTooltipOpen}
          onBlur={this.handleTooltipClose}
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
            open={this.tooltipOpen && !this.open}
            position={this.isNested ? PopoverPosition.BOTTOM : this.tooltipPosition}
            dark
            onMouseLeave={this.handleTooltipClose}
            onBlur={this.handleTooltipClose}
            onOpenChange={(ev) => {
              if ((ev.target as HTMLElement) === this.tooltipRef) {
                return;
              }

              this.tooltipOpen = ev.detail.open;
            }}
          >
            <span class="body-4">{this.tooltip}</span>
          </z-tooltip>
        )}
        {this.hasSlottedContent && (
          <z-popover
            class="z-tool-submenu"
            ref={(el) => (this.popoverRef = el)}
            open={this.open}
            bindTo={this.isMobile && this.mainToolbar ? this.mainToolbar : this.hostElement}
            center
            closable={
              /* auto close only the submenu of the deepest level tool when clicking outside or pressing ESC */
              !this.isMobile && this.isLeaf
            }
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
