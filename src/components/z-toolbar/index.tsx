import {Component, Element, Host, Listen, Prop, State, h} from "@stencil/core";
import {KeyboardCode} from "../../beans";

/**
 * ZToolbar component.
 * Implements WCAG toolbar pattern with roving tabindex keyboard navigation.
 * Tools can be visually grouped using wrapper elements with the `z-toolbar-group` CSS class.
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
  }

  /** Collect all z-tool elements in the toolbar (not nested ones). */
  private collectToolItems(): void {
    const allTools = Array.from(this.hostElement.querySelectorAll("z-tool"));
    this.toolItems = allTools.filter((tool) => !tool.parentElement?.closest("z-tool")) as HTMLZToolElement[];
  }

  private updateTabIndexes(): void {
    this.toolItems.forEach((tool, index) => {
      const button = tool.shadowRoot?.querySelector("button");
      if (button) {
        button.tabIndex = index === this.currentFocusIndex ? 0 : -1;
      }
    });
  }

  private focusToolAt(index: number): void {
    const tool = this.toolItems[index];
    if (tool) {
      const button = tool.shadowRoot?.querySelector("button");
      if (button) {
        button.focus();
        this.currentFocusIndex = index;
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
    this.focusToolAt(prevIndex);
  }

  private focusParentTool(event: KeyboardEvent): void {
    const parentTool = this.hostElement.closest("z-tool") as HTMLZToolElement;
    if (parentTool) {
      event.preventDefault();
      event.stopPropagation();
      parentTool.active = false;
      const parentButton = parentTool.shadowRoot?.querySelector("button");
      if (parentButton) {
        parentButton.focus();
      }
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
