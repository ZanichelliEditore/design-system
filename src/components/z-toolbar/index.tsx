import {Component, Element, Host, Listen, Method, Prop, State, h} from "@stencil/core";
import {KeyboardCode} from "../../beans";

/**
 * ZToolbar component.
 * Implements WCAG toolbar pattern with roving tabindex keyboard navigation.
 * Tools can be visually grouped using `z-divider` elements as separators.
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/
 */
@Component({
  tag: "z-toolbar",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZToolbar {
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
    //set css variable --z-toolbar-columns based on the number of tools in the toolbar, so that the background pattern can adapt to the number of rows
    let colBreakpoint = parseInt(getComputedStyle(this.hostElement).getPropertyValue("--z-toolbar-columns") || "8");
    colBreakpoint = this.toolItems.length <= colBreakpoint ? this.toolItems.length : colBreakpoint;
    this.hostElement.style.setProperty("--z-toolbar-columns", colBreakpoint.toString());
  }

  /** Collect all z-tool elements in the toolbar (not nested ones). */
  private collectToolItems(): void {
    this.toolItems = Array.from(this.hostElement.querySelectorAll("z-tool:not(:scope z-tool z-tool)"));
  }

  private updateTabIndexes(): void {
    this.toolItems.forEach((tool, index) => {
      const button = tool.shadowRoot?.querySelector("button");
      if (button) {
        button.tabIndex = index === this.currentFocusIndex ? 0 : -1;
      }
    });
  }

  private focusToolAt(index: number, fallback: "previous" | "next" = "next"): void {
    const tool = this.toolItems[index];
    if (tool) {
      const button = tool.shadowRoot?.querySelector("button");
      this.currentFocusIndex = index;
      if (button.disabled || !button) {
        if (fallback === "next") {
          this.focusNextTool();
        } else {
          this.focusPreviousTool();
        }
      } else if (button) {
        button.focus();
        this.updateTabIndexes();
      }
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

  private focusParentTool(event: KeyboardEvent): void {
    const parentTool = this.hostElement.closest("z-tool") as HTMLZToolElement;
    if (parentTool) {
      event.preventDefault();
      event.stopPropagation();
      parentTool.open = false;
      const parentButton = parentTool.shadowRoot?.querySelector("button");
      if (parentButton) {
        parentButton.focus();
      }
    }
  }

  /** Close all open submenus in the toolbar. */
  @Method()
  async closeSubmenus(): Promise<void> {
    const tools = this.hostElement.querySelectorAll<HTMLZToolElement>(":scope > z-tool");
    tools.forEach((tool) => {
      if (tool.open) {
        tool.open = false;
      }
    });
  }

  @Listen("toggleSubmenu")
  closeSibilingSubmenusOnOpen(event: CustomEvent): void {
    if (event.detail === true) {
    const tools = this.hostElement.querySelectorAll<HTMLZToolElement>(":scope > z-tool");
        tools.forEach((tool) => {
          if (tool !== (event.target as HTMLElement).closest("z-tool") && tool.open) {
            tool.open = false;
          }
    });
  }
  }

  @Listen("keydown")
  handleKeyDown(event: KeyboardEvent): void {
    this.collectToolItems();

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
      case KeyboardCode.ESC:
      case KeyboardCode.TAB:
        this.focusParentTool(event);
        break;
    }
  }

  @Listen("focusin")
  handleFocusIn(event: FocusEvent): void {
    // When focus enters the toolbar, update the current focus index
    const target = event.target as HTMLElement;
    const toolElement = target.closest("z-tool") as HTMLZToolElement;

    if (toolElement && this.toolItems.includes(toolElement)) {
      const index = this.toolItems.indexOf(toolElement);
      if (index !== -1 && index !== this.currentFocusIndex) {
        this.currentFocusIndex = index;
        this.updateTabIndexes();
      }
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
