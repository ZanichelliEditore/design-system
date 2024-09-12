import {Component, Element, Event, EventEmitter, Host, Listen, Prop, State, h} from "@stencil/core";
import {KeyboardCode} from "../../beans";

/**
 * A component to create submenus inside the ZMenu.
 * @slot - Label of the menu section.
 * @slot item - Single entry of the section. Set the same slot name to different items to put many of them. Add the `active` attribute to a slotted item to highlight it.
 */
@Component({
  tag: "z-menu-section",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMenuSection {
  @Element() hostElement: HTMLZMenuSectionElement;

  /** Active state */
  @Prop({reflect: true})
  active?: boolean;

  @State()
  open: boolean;

  @State()
  hasItems: boolean;

  /** The section has been opened. */
  @Event()
  opened: EventEmitter;

  /** The section has been closed. */
  @Event()
  closed: EventEmitter;

  private currentIndex = -1;

  private currentCanvasOpenStatus = false;

  @Listen("canvasOpenStatusChanged", {target: "document"})
  canvasOpenStatusChanged(e: CustomEvent): void {
    this.currentCanvasOpenStatus = e.detail;
  }

  @Listen("keydown")
  handleKeyDown(e: KeyboardEvent): void {
    if (e.code === KeyboardCode.ENTER) {
      return;
    }

    if (this.open && !this.currentCanvasOpenStatus) {
      this.handleNavigationSideArrow(e);
    }

    this.handleArrowsNav(e);
  }

  private handleNavigationSideArrow(e: KeyboardEvent): void {
    if (e.code !== KeyboardCode.ARROW_RIGHT && e.code !== KeyboardCode.ARROW_LEFT) {
      return;
    }
    if (e.code === KeyboardCode.ARROW_RIGHT) {
      const nextElement = this.hostElement.parentElement.nextElementSibling;
      if (nextElement) {
        const menuButton = nextElement.shadowRoot.querySelector(".menu-label") as HTMLElement;
        console.log(this.hostElement.parentElement);
        menuButton.focus();
      }
      this.open = false;
      nextElement.setAttribute("open", "true");
    } else if (e.code === KeyboardCode.ARROW_LEFT) {
      const prevElement = this.hostElement.parentElement.previousElementSibling;
      if (prevElement) {
        const menuButton = prevElement.shadowRoot.querySelector(".menu-label") as HTMLElement;
        menuButton.focus();
      }
      prevElement.setAttribute("open", "true");
      this.open = false;
    }
  }

  private handleArrowsNav(e: KeyboardEvent): void {
    const menuItems = Array.from(this.hostElement.querySelectorAll('[slot="section"]')) as HTMLElement[];
    if (this.open) {
      e.preventDefault();
      e.stopPropagation();
      if (e.code === KeyboardCode.ARROW_DOWN || e.code === KeyboardCode.ARROW_UP) {
        let nextFocusableItem: HTMLElement;
        // INFO: reset focus on all menu items
        menuItems.forEach((item: HTMLElement) => item.setAttribute("tabindex", "-1"));

        if (e.code === KeyboardCode.ARROW_DOWN) {
          nextFocusableItem = this.getNextItem(menuItems, 1);
        } else if (e.code === KeyboardCode.ARROW_UP) {
          nextFocusableItem = this.getNextItem(menuItems, -1);
        }

        if (nextFocusableItem) {
          nextFocusableItem.setAttribute("tabindex", "0");
          nextFocusableItem.focus();
        }
      } else if (e.code === KeyboardCode.ESC) {
        this.focusToParentAndCloseMenu();
      } else if (e.shiftKey && e.code === KeyboardCode.TAB) {
        this.focusToParentAndCloseMenu();
      }
    }
  }

  private getNextItem(menuItems: HTMLElement[], direction: number): HTMLElement {
    if (this.currentIndex === -1) {
      this.currentIndex = direction === 1 ? 0 : menuItems.length - 1;

      return menuItems[this.currentIndex];
    }

    this.currentIndex = (this.currentIndex + direction + menuItems.length) % menuItems.length;

    return menuItems[this.currentIndex];
  }

  private focusToParentAndCloseMenu(): void {
    const menuButton = this.hostElement.shadowRoot.querySelector("button") as HTMLElement;
    menuButton.focus();
    this.currentIndex = -1;
    this.open = false;
  }

  private toggle(): void {
    if (!this.hasItems) {
      return;
    }

    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
  }

  /** Close the list when a click is performed outside of this Element. */
  @Listen("click", {target: "document"})
  handleClick(ev: MouseEvent): void {
    if (!this.open || this.hostElement.contains(ev.target as Node)) {
      return;
    }

    this.open = false;
    this.closed.emit();
  }

  /**
   * Check if some content slot is set.
   */
  private onItemsChange(): void {
    this.hasItems = this.hostElement.querySelectorAll('[slot="section"]').length > 0;
    const items = Array.from(this.hostElement.querySelectorAll<HTMLElement>("[slot='section']"));
    items.forEach((item) => {
      item.setAttribute("role", "menuitem");
      item.setAttribute("tabindex", "-1");
    });
    // enable tab navigation on the active item, if any. Otherwise, enable it on the first menu
    const activeItem = items.find((item) => ("active" in item ? item.active : false));
    if (activeItem) {
      activeItem.setAttribute("tabindex", "0");
    } else {
      items[0].setAttribute("tabindex", "0");
    }
  }

  /**
   * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
   * @param ev Slotchange event
   */
  private onLabelSlotChange(ev: Event): void {
    const labelElement = (ev.target as HTMLSlotElement).assignedElements()[0] as HTMLElement;
    labelElement.dataset.text = labelElement?.innerText || null;
  }

  private focusFirstSectionItemOnKeyUp(): void {
    const firstElement = this.hostElement.querySelectorAll('[slot="section"]')[0] as HTMLElement;
    if (firstElement) {
      firstElement.focus();
      this.currentIndex = 0;
    }
  }

  componentWillLoad(): void {
    this.onItemsChange();
  }

  render(): HTMLZMenuSectionElement {
    return (
      <Host open={this.open}>
        <button
          class="label"
          aria-haspopup={`${this.hasItems}`}
          aria-expanded={`${this.open}`}
          onClick={this.toggle.bind(this)}
          onKeyUp={this.focusFirstSectionItemOnKeyUp.bind(this)}
        >
          <slot onSlotchange={this.onLabelSlotChange.bind(this)}></slot>
          {this.hasItems && <z-icon name={this.open ? "chevron-up" : "chevron-down"} />}
        </button>
        {this.open && (
          <div
            class="items"
            role="menu"
          >
            <slot
              name="section"
              onSlotchange={this.onItemsChange.bind(this)}
            />
          </div>
        )}
      </Host>
    );
  }
}
