import {Component, Element, Host, Listen, Prop, State, h} from "@stencil/core";
import {KeyboardCode} from "../../beans";

/**
 * ZToolbar component.
 * Implements WCAG toolbar pattern with roving tabindex keyboard navigation.
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
  ariaLabel?: string;

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
    const slot = this.hostElement.shadowRoot?.querySelector("slot");
    this.toolItems = [];

    let elements: Element[] = [];

    if (slot && typeof slot.assignedElements === "function") {
      elements = slot.assignedElements({flatten: true}) as Element[];
    } else {
      elements = Array.from(this.hostElement.children);
    }

    const collectTools = (els: Element[]): void => {
      for (const el of els) {
        if (el.tagName.toLowerCase() === "z-tool") {
          const isNested = el.closest("z-tool") !== el && el.closest("z-tool") !== null;
          if (!isNested) {
            this.toolItems.push(el as HTMLZToolElement);
          }
        } else if (el.tagName.toLowerCase() === "z-divider") {
          continue;
        } else if (el.children.length > 0) {
          collectTools(Array.from(el.children));
        }
      }
    };

    collectTools(elements);
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

  private handleEscapeKey(event: KeyboardEvent): void {
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

  private handleTabKey(event: KeyboardEvent): void {
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
        this.handleEscapeKey(event);
        break;
      case KeyboardCode.TAB:
        this.handleTabKey(event);
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
      <Host>
        <div
          class="z-toolbar"
          role="toolbar"
          aria-label={this.ariaLabel}
        >
          <slot
            onSlotchange={() => {
              this.collectToolItems();
              this.updateTabIndexes();
            }}
          ></slot>
        </div>
      </Host>
    );
  }
}
