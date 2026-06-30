import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
  h,
} from "@stencil/core";
import {ColorPickerPalette, KeyboardCode, PopoverPosition} from "../../beans";
import {ZColorPickerCustomEvent, ZToolCustomEvent, ZTooltipCustomEvent} from "../../components";
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
export class ZTool implements ComponentInterface {
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

  /** Indicates if the tool has nested open tools. Used to decide whether to auto-close the submenu. */
  @State()
  hasNestedOpenTools = false;

  /** Emitted when the open state changes. */
  @Event()
  toggleSubmenu: EventEmitter;

  /** Emitted when the tooltip open state changes. */
  @Event()
  toggleTooltip: EventEmitter;

  private buttonRef?: HTMLButtonElement;

  private iconRef?: HTMLElement;

  private tooltipRef?: HTMLZTooltipElement;

  private hoverDelay?: ReturnType<typeof setTimeout>;

  /** Indicates if the tool is nested inside another tool. */
  private isNested = false;

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
   * If the tool has slotted content, toggles the open state and focuses the active/selected item in the nested toolbar or color picker,
   * or the first item if no active/selected item is found.
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

      // Focus the first active tool in the nested toolbar, or the first enabled if no active tool is found.
      const firstActiveOrEnabledNestedTool = (this.hostElement.querySelector(
        ":scope > z-toolbar z-tool[active]:not(:disabled)"
      ) || this.hostElement.querySelector(":scope > z-toolbar z-tool:not(:disabled)")) as HTMLZToolElement | null;

      firstActiveOrEnabledNestedTool?.setFocus();
    }
  };

  /**
   * Handles `openChange` events from the tooltip popover to keep the `tooltipOpen` state in sync, but only if the event is coming from this tool's tooltip (and not from nested tools' tooltips).
   */
  private onTooltipOpenChange = (event: ZTooltipCustomEvent<{open: boolean}>): void => {
    if ((event.target as HTMLElement) === this.tooltipRef) {
      return;
    }

    this.tooltipOpen = event.detail.open;
  };

  @Watch("open")
  handleOpenChange(): void {
    this.toggleSubmenu.emit(this.open);
  }

  @Watch("tooltipOpen")
  handleTooltipOpenChange(): void {
    this.toggleTooltip.emit(this.tooltipOpen);
  }

  /**
   * Handle `ESC` and `shift+TAB` to close the submenu and move focus back to the button.
   */
  @Listen("keydown")
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.open || this.hasNestedOpenTools) {
      return;
    }

    switch (event.key) {
      case KeyboardCode.ESC:
        event.stopPropagation();
        this.open = false;
        this.setFocus();
        break;
      case KeyboardCode.TAB:
        if (event.shiftKey && (event.target as Element).closest("z-tool:not(:scope)") === this.hostElement) {
          this.open = false;
        }
        break;
    }
  }

  /**
   * Close the popover on clicks outside the component, only if there are no nested open tools.
   * In that case any outside click should close the nested submenu(s) first.
   */
  @Listen("click", {target: "body"})
  onOutsideClick(event: MouseEvent): void {
    const target = event.composedPath()[0] as HTMLElement;
    if (!this.open || containsElement(this.hostElement, target) || this.hasNestedOpenTools) {
      return;
    }

    this.open = false;
  }

  @Listen("toggleSubmenu")
  onNestedToolToggle(ev: ZToolCustomEvent<boolean>): void {
    if (ev.target === this.hostElement) {
      return;
    }

    if (ev.detail === true) {
      this.hasNestedOpenTools = true;

      return;
    }

    this.hasNestedOpenTools = Array.from(this.hostElement.querySelectorAll("z-tool")).some((tool) => tool.open);
  }

  /**
   * Handles the `colorSelected` event from a nested `z-color-picker` component.
   * Updates the `indicatorColor` and closes the tool's popover.
   */
  @Listen("colorSelected")
  handleColorSelected(event: ZColorPickerCustomEvent<ColorPickerPalette>): void {
    if (!Array.from(this.hostElement.children).includes(event.target as Element)) {
      return;
    }

    this.indicatorColor = event.detail;
    this.open = false;
    this.setFocus();
  }

  /**
   * Close the submenu when focus moves outside the tool.
   */
  @Listen("focusin", {target: "body", passive: true})
  handleExternalFocusin(ev: FocusEvent): void {
    const target = ev.target as Node;
    if (!containsElement(this.hostElement, target)) {
      this.open = false;
    }
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

  /** Sets the tab index of the tool's internal button element. */
  @Method()
  async setTabIndex(value: number): Promise<void> {
    if (!this.buttonRef) {
      return;
    }

    this.buttonRef.tabIndex = this.disabled ? -1 : value;
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
    this.mainToolbar = this.hostElement.closest("z-toolbar:not(z-toolbar z-toolbar)");
    this.hasNestedOpenTools = !!this.hostElement.querySelector("z-tool[open]");

    this.mql = matchMedia("(max-width: 767px)");
    this.onMobileViewChange = (e: MediaQueryListEvent) => (this.isMobile = e.matches);
    this.mql.addEventListener("change", this.onMobileViewChange);
    this.isMobile = this.mql.matches;
  }

  disconnectedCallback(): void {
    clearTimeout(this.hoverDelay);
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
            onOpenChange={this.onTooltipOpenChange}
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
            /* disable auto-close to prevent unwanted close behaviors on mobile,
            when the bound element is the main toolbar */
            closable={false}
            position={this.isMobile ? PopoverPosition.TOP : PopoverPosition.BOTTOM}
          >
            <slot></slot>
          </z-popover>
        )}
      </Host>
    );
  }
}
