import {Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h} from "@stencil/core";
import {KeyboardCode} from "../../beans";

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

  private get activeItem(): HTMLElement {
    return this.items.find(({tabIndex}) => tabIndex === 0);
  }

  private toggle(): void {
    if (!this.hasContent) {
      return;
    }

    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
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
    if (this.content) {
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
   * Set `menuitem` role to all menu items.
   * Set 0 to the tabindex of the first item, -1 to the others.
   * Set the item's inner text to the `data-text` attribute (this is for using bold text avoiding layout shifts).
   */
  private setItemsA11yAttrs(): void {
    this.items.forEach((item, index) => {
      item.setAttribute("role", "menuitem");
      item.setAttribute("tabindex", index === 0 ? "0" : "-1");
    });
  }

  private onItemsChange(): void {
    this.checkContent();
    this.items = Array.from(this.host.children).filter(({slot}) => slot === "item") as HTMLElement[];
    this.setItemsA11yAttrs();
    this.items.forEach((item) => (item.dataset.text = item.textContent));
  }

  private moveFocus(current: HTMLElement, next: HTMLElement): void {
    current.tabIndex = -1;
    next.tabIndex = 0;
    next.focus();
    setTimeout(() => {
      next.focus();
    }, 0);
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
    if (this.open) {
      this.reflow(true);
    } else {
      cancelAnimationFrame(this.raf);
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

  /** Close the floating list on focusout. */
  @Listen("focusout")
  onFocusout(ev: MouseEvent): void {
    if (!this.floating || !this.open || this.host.contains(ev.relatedTarget as Element)) {
      return;
    }

    this.reflow();
    this.open = false;
    this.setItemsA11yAttrs();
    this.closed.emit();
  }

  @Listen("keydown")
  onKeyDown(ev: KeyboardEvent): void {
    if (!this.hasContent) {
      return;
    }

    const currentIndex = this.items.indexOf(this.activeItem);
    switch (ev.key) {
      case KeyboardCode.ESC:
        this.open = false;
        break;
      case KeyboardCode.ARROW_DOWN: {
        ev.stopPropagation();
        if (!this.open) {
          this.open = true;
          setTimeout(() => {
            this.items[0].focus();
          }, 0);
        } else {
          const next =
            currentIndex === this.items.length - 1
              ? this.items[0]
              : (this.activeItem.nextElementSibling as HTMLElement);
          this.moveFocus(this.activeItem, next);
        }
        break;
      }
      case KeyboardCode.ARROW_UP: {
        ev.stopPropagation();
        if (!this.open) {
          this.open = true;
        }
        const next =
          currentIndex === 0
            ? this.items[this.items.length - 1]
            : (this.activeItem.previousElementSibling as HTMLElement);
        this.moveFocus(this.activeItem, next);
        break;
      }
      default:
        break;
    }
  }

  constructor() {
    this.toggle = this.toggle.bind(this);
    this.checkContent = this.checkContent.bind(this);
    this.onLabelSlotChange = this.onLabelSlotChange.bind(this);
    this.onItemsChange = this.onItemsChange.bind(this);
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
