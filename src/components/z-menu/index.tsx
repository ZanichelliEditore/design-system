import {Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h} from "@stencil/core";
import {KeyboardCode} from "../../beans";
import {containsElement} from "../../utils/utils";

const isZMenuSection = (el: HTMLElement | HTMLZMenuSectionElement): el is HTMLZMenuSectionElement =>
  el?.tagName === "Z-MENU-SECTION";

/**
 * @slot - Menu label
 * @slot header - Header to display as the first entry of the open menu.
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items onto the menu. Set the `data-active` HTML attribute on the element to highlight it (`active` also works but `data-active` is preferable). Use `z-menu-section` for submenus.
 * @cssprop --z-menu-label-color - Color of the label's text.
 */
@Component({
  tag: "z-menu",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMenu {
  @Element() host: HTMLZMenuElement;

  /** Flag to set the active status of the menu. */
  @Prop({reflect: true})
  active?: boolean;

  /**
   * Flag to set the display mode of the list.
   * If true, the list will be absolutely positioned under the menu label,
   * stacked beneath it otherwise.
   */
  @Prop({reflect: true})
  floating? = true;

  /** The opening state of the menu. */
  @Prop({mutable: true, reflect: true})
  open = false;

  /**
   * Tells the component that it's placed in a vertical context with other `ZMenu`s (usually in the ZAppHeader's offcanvas).
   * A small border is placed under it as a separator from other elements.
   */
  @Prop({reflect: true})
  verticalContext = false;

  /**
   * Tabindex value to set on the menu label.
   * Useful to manage keyboard navigation focus with roving tabindex handled by this component's parent (usually ZAppHeader).
   */
  @Prop()
  htmlTabindex = -1;

  @State()
  hasHeader: boolean;

  @State()
  hasContent: boolean;

  /** The menu has been opened. */
  @Event()
  opened: EventEmitter;

  /** The menu has been closed. */
  @Event()
  closed: EventEmitter;

  private labelButton: HTMLButtonElement;

  private content: HTMLElement;

  private items: (HTMLElement | HTMLZMenuSectionElement)[] = [];

  /** Animation frame request id. */
  private raf: number;

  private get focusableItem(): HTMLZMenuSectionElement | HTMLElement | null {
    return this.items.find((item) => (isZMenuSection(item) ? item.htmlTabindex === 0 : item.tabIndex === 0));
  }

  private toggle(): void {
    if (!this.hasContent) {
      return;
    }

    this.open = !this.open;
  }

  /**
   * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
   * @param ev Slotchange event
   */
  private onLabelSlotChange(ev: Event): void {
    const labelElement = (ev.target as HTMLSlotElement).assignedElements()[0] as HTMLElement;
    labelElement.dataset.text = labelElement?.textContent;
    this.setLabelA11yAttrs();
  }

  /**
   * Correctly set position of the floating menu in order to prevent overflow.
   * @param live Should run the method on every refresh frame.
   */
  private reflow(live = false): void {
    if (!this.floating) {
      return;
    }

    if (this.content && this.hasContent) {
      const {style} = this.content;
      const {left} = this.host.getBoundingClientRect();
      const widthPx = getComputedStyle(this.content).width;
      const width = widthPx ? parseFloat(widthPx.replace("px", "")) : 375;
      const safeScrollbarSpace = 30;
      style.left = `${Math.min(window.innerWidth - left - width - safeScrollbarSpace, 0)}px`;
    }
    if (live) {
      this.raf = requestAnimationFrame(this.reflow.bind(this, live));
    }
  }

  /**
   * Check if some content slot is set.
   */
  private checkContent(): void {
    this.hasHeader = !!this.host.querySelectorAll("[slot=header]").length;
    this.hasContent = !!this.host.querySelectorAll("[slot=item]").length || this.hasHeader;
  }

  private setItemTabindex(item: HTMLElement | HTMLZMenuSectionElement, tabIndex: number): void {
    if (isZMenuSection(item)) {
      item.htmlTabindex = tabIndex;
    } else {
      item.tabIndex = tabIndex;
    }
  }

  /**
   * Set `menuitem` role to all menu items (ZMenuSection items already have it).
   * Set -1 to the tabindex of the items and 0 to the first one.
   */
  private setItemsA11yAttrs(): void {
    this.items.forEach((item, index) => {
      const tabindex = index === 0 ? 0 : -1;
      this.setItemTabindex(item, tabindex);
      if (!isZMenuSection(item)) {
        item.setAttribute("role", "menuitem");
      }
    });
  }

  private onItemsChange(): void {
    this.checkContent();
    this.items = Array.from(this.host.children).filter(({slot}) => slot === "item") as HTMLElement[];
    this.setItemsA11yAttrs();
    this.items.forEach((item) => {
      if (!isZMenuSection(item)) {
        item.dataset.text = item.textContent;
      }
    });
  }

  /**
   * Move focus and adjust the tabindex value of `receiver` and `current` elements,
   * setting -1 to the `current` and 0 to the `receiver`, then focus the `receiver` element.
   * If the receiver is a ZMenuSection and it's open, focus its first focusable item.
   */
  private moveFocus(
    receiver: HTMLElement | HTMLZMenuSectionElement,
    current?: HTMLElement | HTMLZMenuSectionElement
  ): void {
    if (isZMenuSection(receiver)) {
      receiver.setFocus();
    } else {
      receiver.tabIndex = 0;
      setTimeout(() => {
        receiver.focus();
      }, 100);
    }
    if (!current) {
      return;
    }

    this.setItemTabindex(current, -1);
  }

  private onLabelClick(): void {
    this.toggle();
    this.setFocus();
  }

  private onLabelKeydown(ev: KeyboardEvent): void {
    if (ev.key === KeyboardCode.ENTER || ev.key === KeyboardCode.SPACE) {
      ev.preventDefault();
      ev.stopPropagation();
      this.toggle();
      if (this.open) {
        this.moveFocus(this.items[0]);
      }

      return;
    }

    if (!this.verticalContext) {
      return;
    }

    if (ev.key === KeyboardCode.ARROW_RIGHT && !this.open) {
      ev.preventDefault();
      ev.stopPropagation();
      this.open = true;
      this.moveFocus(this.items[0]);
    }
  }

  /** Set tabindex of the label to 0, then focus it. */
  @Method()
  async setFocus(): Promise<void> {
    this.htmlTabindex = 0;
    const label = this.hasContent ? this.labelButton : (this.host.firstElementChild as HTMLElement);
    label.focus();
  }

  /**
   * Focus the last item.
   */
  @Method()
  async focusLastItem(): Promise<void> {
    const lastItem = this.items[this.items.length - 1];
    if (isZMenuSection(lastItem) && lastItem.open) {
      lastItem.focusLastItem();

      return;
    }

    this.moveFocus(lastItem);
  }

  @Watch("open")
  onOpenChanged(): void {
    if (!this.open) {
      cancelAnimationFrame(this.raf);
      this.closed.emit();
      this.items.forEach((item) => {
        if (isZMenuSection(item) && item.open) {
          item.open = false;
        }
      });

      return;
    }

    this.setItemsA11yAttrs();
    this.opened.emit();
    if (this.floating) {
      this.reflow(true);
    }
  }

  @Watch("htmlTabindex")
  setLabelA11yAttrs(): void {
    if (this.hasContent && this.labelButton) {
      this.labelButton.tabIndex = this.htmlTabindex;

      return;
    }

    const slottedLabel = this.host.firstElementChild as HTMLElement;
    slottedLabel.role = "menuitem";
    slottedLabel.tabIndex = this.htmlTabindex;
  }

  /**
   * Set tabindex to -1 to all siblings of the clicked item.
   */
  @Listen("click", {target: "document"})
  onItemClick(ev: MouseEvent): void {
    const clickedItem = this.items.find((item) => containsElement(item, ev.target as HTMLElement));
    if (clickedItem) {
      this.items.forEach((item) => {
        if (item === clickedItem) {
          return;
        }

        if (isZMenuSection(item)) {
          item.htmlTabindex = -1;
        } else {
          item.tabIndex = -1;
        }
      });
    }
  }

  @Listen("keydown")
  onKeyDown(ev: KeyboardEvent): void {
    if (!this.hasContent) {
      return;
    }

    switch (ev.key) {
      case KeyboardCode.ESC:
        if (!this.open) {
          break;
        }
        ev.stopPropagation();
        ev.preventDefault();
        this.open = false;
        this.setFocus();
        break;
      case KeyboardCode.ARROW_DOWN: {
        if (document.activeElement === this.host) {
          if (this.verticalContext && !this.open) {
            break;
          }

          ev.stopPropagation();
          ev.preventDefault();
          if (!this.open) {
            this.open = true;
          }
          this.moveFocus(this.items[0]);
          break;
        }

        const currentIndex = this.items.indexOf(this.focusableItem);
        if (this.verticalContext && currentIndex === this.items.length - 1) {
          // navigation is going to leave this menu. restore tabindex to the label and let the parent handle it
          this.setItemTabindex(this.items[currentIndex], -1);
          this.htmlTabindex = 0;
          break;
        }

        ev.stopPropagation();
        ev.preventDefault();
        const receiver = this.items[currentIndex + 1];
        // if the last item is already focused, navigate to the first one
        this.moveFocus(receiver ?? this.items[0], this.focusableItem);
        break;
      }
      case KeyboardCode.ARROW_UP: {
        if (document.activeElement === this.host) {
          if (this.verticalContext) {
            break;
          }

          ev.stopPropagation();
          ev.preventDefault();
          // open the menu and focus the last item
          if (!this.open) {
            this.open = true;
          }
          this.moveFocus(this.items[this.items.length - 1], this.focusableItem);
          break;
        }

        ev.stopPropagation();
        ev.preventDefault();
        const currentIndex = this.items.indexOf(this.focusableItem);
        if (currentIndex === 0 && this.verticalContext) {
          this.setItemTabindex(this.focusableItem, -1);
          this.setFocus();
          break;
        }

        const receiver = this.items[currentIndex - 1] ?? this.items[this.items.length - 1];
        // if the receiver is a ZMenuSection and it's open, focus its last item
        if (isZMenuSection(receiver) && receiver.open) {
          this.setItemTabindex(this.focusableItem, -1);
          receiver.focusLastItem();
          break;
        }

        this.moveFocus(receiver, this.focusableItem);
        break;
      }
      case KeyboardCode.ARROW_LEFT:
        if (!this.open || !this.verticalContext) {
          break;
        }

        // close the menu and focus the label
        ev.preventDefault();
        ev.stopPropagation();
        this.open = false;
        this.setFocus();
    }
  }

  constructor() {
    this.toggle = this.toggle.bind(this);
    this.checkContent = this.checkContent.bind(this);
    this.onLabelSlotChange = this.onLabelSlotChange.bind(this);
    this.onLabelClick = this.onLabelClick.bind(this);
    this.onItemsChange = this.onItemsChange.bind(this);
    this.onLabelKeydown = this.onLabelKeydown.bind(this);
  }

  componentWillLoad(): void {
    this.setLabelA11yAttrs();
    this.onItemsChange();
  }

  render(): HTMLDivElement | HTMLZMenuElement {
    if (!this.hasContent) {
      return (
        <div class="menu-label">
          <slot onSlotchange={this.onLabelSlotChange} />
        </div>
      );
    }

    return (
      <Host>
        <button
          ref={(el) => (this.labelButton = el)}
          class="menu-label"
          aria-expanded={`${!!this.open}`}
          aria-haspopup={`${this.hasContent}`}
          aria-label={this.open ? "Chiudi menù" : "Apri menù"}
          role="menuitem"
          tabIndex={this.htmlTabindex}
          onClick={this.onLabelClick}
          onKeyDown={this.onLabelKeydown}
        >
          <slot onSlotchange={this.onLabelSlotChange} />
          <z-icon name={this.open ? "chevron-up" : "chevron-down"} />
        </button>

        <div
          class="content"
          ref={(el) => (this.content = el)}
        >
          {this.hasHeader && (
            <header class="header">
              <slot
                name="header"
                onSlotchange={this.checkContent}
              />
            </header>
          )}

          <div
            class="items"
            role="menu"
          >
            <slot
              name="item"
              onSlotchange={this.onItemsChange}
            />
          </div>
        </div>
      </Host>
    );
  }
}
