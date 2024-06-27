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
  hasContent: boolean;

  /** The section has been opened. */
  @Event()
  opened: EventEmitter;

  /** The section has been closed. */
  @Event()
  closed: EventEmitter;

  private currentIndex = -1;

  @Listen("keydown")
  handleKeyDown(e: KeyboardEvent): void {
    const menuItems = this.hostElement.querySelectorAll('[slot="section"]');
    const firstMenuItem = menuItems[0] as HTMLElement;
    const lastMenuItem = menuItems[menuItems.length - 1] as HTMLElement;

    if (this.open) {
      let nextFocusableItem: HTMLElement;
      menuItems.forEach((item: HTMLElement) => item.setAttribute("tabindex", "-1"));
      if (e.code === KeyboardCode.ARROW_DOWN) {
        e.preventDefault();
        e.stopPropagation();
        switch (this.currentIndex) {
          case -1:
            nextFocusableItem = firstMenuItem;
            this.currentIndex++;
            break;
          case menuItems.length - 1:
            nextFocusableItem = firstMenuItem;
            this.currentIndex = 0;
            break;
          default:
            nextFocusableItem = menuItems[this.currentIndex + 1] as HTMLElement;
            this.currentIndex++;
            break;
        }
      } else if (e.code === KeyboardCode.ARROW_UP) {
        e.preventDefault();
        e.stopPropagation();
        switch (this.currentIndex) {
          case -1:
            nextFocusableItem = lastMenuItem;
            this.currentIndex--;
            break;
          case 0:
            nextFocusableItem = lastMenuItem;
            this.currentIndex = menuItems.length - 1;
            break;
          default:
            nextFocusableItem = menuItems[this.currentIndex - 1] as HTMLElement;
            this.currentIndex--;
            break;
        }
      }

      if (nextFocusableItem) {
        nextFocusableItem.setAttribute("tabindex", "0");
        nextFocusableItem.focus();
      }
    }
  }

  private toggle(): void {
    if (!this.hasContent) {
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
  private checkContent(): void {
    this.hasContent = this.hostElement.querySelectorAll('[slot="section"]').length > 0;
  }

  /**
   * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
   * @param ev Slotchange event
   */
  private onLabelSlotChange(ev: Event): void {
    const labelElement = (ev.target as HTMLSlotElement).assignedElements()[0] as HTMLElement;
    labelElement.dataset.text = labelElement?.innerText || null;
  }

  componentWillLoad(): void {
    this.checkContent();
  }

  render(): HTMLZMenuSectionElement {
    return (
      <Host
        role="menu"
        open={this.open}
      >
        <button
          class="label"
          aria-pressed={this.open ? "true" : "false"}
          onClick={this.toggle.bind(this)}
          onKeyUp={() => {
            const firstElement = this.hostElement.querySelectorAll('[slot="section"]')[0] as HTMLElement;
            firstElement.focus();
          }}
        >
          <slot onSlotchange={this.onLabelSlotChange.bind(this)}></slot>
          {this.hasContent && <z-icon name={this.open ? "chevron-up" : "chevron-down"} />}
        </button>
        {this.open && (
          <div class="items">
            <slot
              name="section"
              onSlotchange={this.checkContent.bind(this)}
            ></slot>
          </div>
        )}
      </Host>
    );
  }
}
