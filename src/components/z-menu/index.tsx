import {Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h} from "@stencil/core";
import {KeyboardCode} from "../../beans";
import {containsElement} from "../../utils/utils";

const isZMenuSection = (el: HTMLElement | HTMLZMenuSectionElement): el is HTMLZMenuSectionElement =>
  el.tagName === "Z-MENU-SECTION";

/**
 * @slot - Menu label
 * @slot header - Header to display as the first entry of the open menu.
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items onto the menu. Set the `active` HTML attribute on the element to highlight it. Use `z-menu-section` for submenus.
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

  private items: HTMLElement[];

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

  /**
   * Set `menuitem` role to all menu items (ZMenuSection items already have it).
   * Set -1 to the tabindex of the items.
   */
  private setItemsA11yAttrs(): void {
    this.items.forEach((item) => {
      if (isZMenuSection(item)) {
        item.htmlTabindex = -1;
      } else {
        item.setAttribute("role", "menuitem");
        item.setAttribute("tabindex", "-1");
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
   */
  private moveFocus(
    receiver: HTMLElement | HTMLZMenuSectionElement,
    current?: HTMLElement | HTMLZMenuSectionElement
  ): void {
    if (isZMenuSection(receiver)) {
      receiver.htmlTabindex = 0;
      receiver.setFocus();
    } else {
      receiver.tabIndex = 0;
      setTimeout(() => {
        receiver.focus();
      }, 0);
    }
    if (!current) {
      return;
    }

    if (isZMenuSection(current)) {
      current.htmlTabindex = -1;
    } else {
      current.tabIndex = -1;
    }
  }

  private onLabelKeydown(ev: KeyboardEvent): void {
    if (ev.key === KeyboardCode.ENTER || ev.key === KeyboardCode.SPACE) {
      ev.preventDefault();
      ev.stopPropagation();
      this.toggle();
    }
  }

  /** Focus the label interactive element if its tabindex is 0 */
  @Method()
  async setFocus(): Promise<void> {
    const tabbableLabel = this.hasContent ? this.labelButton : (this.host.firstElementChild as HTMLElement);
    if (tabbableLabel?.tabIndex !== 0) {
      return;
    }

    tabbableLabel.focus();
  }

  @Watch("open")
  onOpenChanged(): void {
    if (!this.open) {
      cancelAnimationFrame(this.raf);
      this.setItemsA11yAttrs();
      this.closed.emit();
      this.items.forEach((item) => {
        if (isZMenuSection(item) && item.open) {
          item.open = false;
        }
      });

      return;
    }

    this.opened.emit();
    if (this.floating) {
      this.reflow(true);
    }
  }

  @Watch("htmlTabindex")
  setLabelA11yAttrs(): void {
    if (this.hasContent && !this.labelButton) {
      return;
    }

    if (this.hasContent) {
      this.labelButton.tabIndex = this.htmlTabindex;

      return;
    }

    const slottedLabel = this.host.firstElementChild as HTMLElement;
    slottedLabel.role = "menuitem";
    slottedLabel.tabIndex = this.htmlTabindex;
  }

  /** Close the floating list on external clicks. */
  @Listen("click", {target: "document"})
  onClick(ev: Event): void {
    if (!this.open || !this.floating || this.verticalContext || containsElement(this.host, ev.target as Element)) {
      return;
    }

    this.open = false;
  }

  @Listen("keydown")
  onKeyDown(ev: KeyboardEvent): void {
    if (!this.hasContent || !this.open) {
      return;
    }

    switch (ev.key) {
      case KeyboardCode.ESC:
        ev.stopPropagation();
        ev.preventDefault();
        this.open = false;
        this.setFocus();
        break;
      case KeyboardCode.ARROW_DOWN: {
        ev.stopPropagation();
        ev.preventDefault();
        if (!this.focusableItem) {
          this.moveFocus(this.items[0]);
          break;
        }
        const currentIndex = this.items.indexOf(this.focusableItem);
        const receiver = this.items[currentIndex + 1];
        // if the last item is already focused, navigate to the first one
        this.moveFocus(receiver ?? this.items[0], this.focusableItem);
        break;
      }
      case KeyboardCode.ARROW_UP: {
        ev.stopPropagation();
        ev.preventDefault();
        const currentIndex = this.items.indexOf(this.focusableItem);
        const receiver = this.items[currentIndex - 1];
        this.moveFocus(receiver ?? this.items[this.items.length - 1], this.focusableItem);
        break;
      }
    }
  }

  constructor() {
    this.toggle = this.toggle.bind(this);
    this.checkContent = this.checkContent.bind(this);
    this.onLabelSlotChange = this.onLabelSlotChange.bind(this);
    this.onItemsChange = this.onItemsChange.bind(this);
    this.onLabelKeydown = this.onLabelKeydown.bind(this);
  }

  connectedCallback(): void {
    this.onItemsChange();
    this.setLabelA11yAttrs();
  }

  render(): HTMLDivElement | HTMLZMenuElement {
    if (!this.hasContent) {
      return (
        <div class="menu-wrapper">
          <div class="menu-label">
            <div class="menu-label-content">
              <slot onSlotchange={this.onLabelSlotChange} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <Host>
        <div class="menu-wrapper">
          <button
            ref={(el) => (this.labelButton = el)}
            class="menu-label"
            aria-expanded={`${!!this.open}`}
            aria-haspopup={`${this.hasContent}`}
            aria-label={this.open ? "Chiudi menù" : "Apri menù"}
            role="menuitem"
            tabindex={this.htmlTabindex}
            onClick={this.toggle}
            onKeyDown={this.onLabelKeydown}
          >
            <div class="menu-label-content">
              <slot onSlotchange={this.onLabelSlotChange} />
              <z-icon name={this.open ? "chevron-up" : "chevron-down"} />
            </div>
          </button>
        </div>

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
