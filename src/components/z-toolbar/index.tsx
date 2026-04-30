import {Component, ComponentInterface, Element, Host, Listen, Prop, State, h} from "@stencil/core";
import {KeyboardCode} from "../../beans";
import {ZToolCustomEvent} from "../../components";

/**
 * ZToolbar component. This component mainly serves as a container for `z-tool` elements, but can also be nested inside a `z-tool` to create submenus.
 * Implements WCAG toolbar pattern with roving tabindex keyboard navigation.
 * Tools can be visually grouped using `z-divider` elements as separators.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/
 *
 * @cssprop --z-toolbar-columns - Number of items per row in the toolbar. Only applies on mobile viewport, when the toolbar can be displayed in a multi-row layout. Default: `6`.
 */
@Component({
  tag: "z-toolbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToolbar implements ComponentInterface {
  @Element() hostElement: HTMLZToolbarElement;

  /** Accessible label for the toolbar. */
  @Prop()
  htmlAriaLabel?: string;

  /** Index of the currently focusable item (roving tabindex). */
  @State()
  currentFocusIndex = 0;

  /** List of focusable tool elements. */
  private toolItems: HTMLZToolElement[] = [];

  componentDidLoad(): void {
    this.collectToolItems();
    this.updateTabIndexes();
    // set css variable `--z-toolbar-columns` based on the number of tools in the toolbar, so that the background pattern can adapt to the number of rows
    let mobileColumnCount = parseInt(getComputedStyle(this.hostElement).getPropertyValue("--z-toolbar-columns") || "6");
    mobileColumnCount = this.toolItems.length <= mobileColumnCount ? this.toolItems.length : mobileColumnCount;
    this.hostElement.style.setProperty("--z-toolbar-columns", mobileColumnCount.toString());
  }

  /** Collect first level children `z-tool` elements in the toolbar (not nested ones). */
  private collectToolItems(): void {
    this.toolItems = Array.from(this.hostElement.querySelectorAll("z-tool:not(:scope z-tool z-tool)"));
  }

  /**
   * Update the `tabindex` of all children tools based on the current focus index,
   * so that only the currently focusable tool is in the tab order (tabindex="0") and all others are not focusable via keyboard (tabindex="-1").
   */
  private updateTabIndexes(): void {
    this.toolItems.forEach((tool, index) => {
      tool.setTabIndex(index === this.currentFocusIndex ? 0 : -1);
    });
  }

  private focusToolAt(index: number, fallback: "previous" | "next" = "next"): void {
    const tool = this.toolItems[index];
    if (!tool) {
      return;
    }

    this.currentFocusIndex = index;
    if (!tool.disabled) {
      tool.setFocus();
      this.updateTabIndexes();

      return;
    }

    if (fallback === "next") {
      this.focusNextTool();
    } else {
      this.focusPreviousTool();
    }
  }

  private focusNextTool(): void {
    const nextIndex = (this.currentFocusIndex + 1) % this.toolItems.length;
    this.focusToolAt(nextIndex);
  }

  private focusPreviousTool(): void {
    const prevIndex = (this.currentFocusIndex - 1 + this.toolItems.length) % this.toolItems.length;
    this.focusToolAt(prevIndex, "previous");
  }

  /**
   * Listen for custom "toggleSubmenu" events from child tools and close sibling submenus when one is opened,
   * to prevent multiple submenus from being open at the same time.
   */
  @Listen("toggleSubmenu")
  closeSiblingSubmenusOnOpen(event: ZToolCustomEvent<boolean>): void {
    if (event.detail !== true) {
      return;
    }

    const targetTool = (event.target as HTMLElement).closest("z-tool") as HTMLZToolElement | null;
    if (!targetTool || !this.toolItems.includes(targetTool)) {
      return;
    }

    this.toolItems.forEach((tool) => {
      if (tool !== targetTool && tool.open) {
        tool.open = false;
      }
    });
  }

  /**
   * Listen for custom "toggleTooltip" events from child tools and close sibling tooltips when one is opened,
   * to prevent multiple tooltips from being open at the same time.
   */
  @Listen("toggleTooltip")
  closeSiblingTooltipsOnOpen(event: ZToolCustomEvent<boolean>): void {
    if (event.detail !== true) {
      return;
    }

    const targetTool = event.target;
    if (!this.toolItems.includes(targetTool)) {
      return;
    }

    this.toolItems.forEach((tool) => {
      if (tool !== targetTool) {
        tool.closeTooltip();
      }
    });
  }

  @Listen("keydown")
  handleKeyDown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    const toolElement = target.closest("z-tool") as HTMLZToolElement;

    if (!toolElement || !this.toolItems.includes(toolElement)) {
      return;
    }

    const focusedIndex = this.toolItems.indexOf(toolElement);
    if (focusedIndex !== -1) {
      this.currentFocusIndex = focusedIndex;
    }

    switch (event.key) {
      case KeyboardCode.ARROW_RIGHT:
        event.preventDefault();
        this.focusNextTool();
        break;
      case KeyboardCode.ARROW_LEFT:
        event.preventDefault();
        this.focusPreviousTool();
        break;
    }
  }

  /**
   * When focus enters the toolbar, update the current focus index to match the focused tool,
   * so that roving tabindex is in sync with actual focus.
   */
  @Listen("focusin")
  handleFocusIn(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    const toolElement = target.closest("z-tool") as HTMLZToolElement;
    const index = this.toolItems.indexOf(toolElement);
    if (index !== -1 && index !== this.currentFocusIndex) {
      this.currentFocusIndex = index;
      this.updateTabIndexes();
    }
  }

  render(): HTMLZToolbarElement {
    return (
      <Host
        role="toolbar"
        aria-label={this.htmlAriaLabel}
      >
        <slot
          onSlotchange={() => {
            this.collectToolItems();
            this.updateTabIndexes();
          }}
        ></slot>
      </Host>
    );
  }
}
