import {Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h} from "@stencil/core";
import {KeyboardCode} from "../../beans";

/**
 * A component to create submenus inside the ZMenu.
 * @slot - Label of the menu section.
 * @slot section - Single entry of the menu section. Set the same slot name to different elements to put many of them. Add the `data-active` attribute to a slotted element to highlight it (`active` also works but `data-active` is preferable).
 */
@Component({
  tag: "z-menu-section",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMenuSection {
  @Element() host: HTMLZMenuSectionElement;

  /** Active state */
  @Prop({reflect: true})
  active?: boolean;

  /**
   * Tabindex value to set on the label button.
   * Useful to manage keyboard navigation focus with roving tabindex handled by this component's parent (usually ZMenu).
   */
  @Prop()
  htmlTabindex = -1;

  /** The opening state of the section. */
  @Prop({mutable: true})
  open: boolean;

  @State()
  hasItems: boolean;

  @State()
  items: HTMLElement[];

  /** The section has been opened. */
  @Event()
  opened: EventEmitter;

  /** The section has been closed. */
  @Event()
  closed: EventEmitter;

  private label: HTMLButtonElement;

  private get focusableItem(): HTMLElement {
    return this.items.find(({tabIndex}) => tabIndex === 0);
  }

  private toggle(): void {
    if (!this.hasItems) {
      return;
    }

    this.open = !this.open;
  }

  private setItemsA11yAttrs(): void {
    if (!this.hasItems) {
      return;
    }

    this.items.forEach((item) => {
      item.setAttribute("role", "menuitem");
      item.tabIndex = -1;
    });
  }

  private onItemsChange(): void {
    this.items = Array.from(this.host.querySelectorAll('[slot="section"]')) as HTMLElement[];
    this.hasItems = this.items.length > 0;
    this.setItemsA11yAttrs();
  }

  /**
   * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
   * @param ev Slotchange event
   */
  private onLabelSlotChange(ev: Event): void {
    const labelElement = (ev.target as HTMLSlotElement).assignedElements()[0] as HTMLElement;
    labelElement.dataset.text = labelElement?.textContent;
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
        this.focustFirstItem();
      }
    }
  }

  /**
   * Move focus and adjust the tabindex value of `receiver` and `current` elements,
   * setting -1 to the `current` and 0 to the `receiver`, then focus the `receiver` element.
   */
  private moveFocus(receiver: HTMLElement, current?: HTMLElement): void {
    receiver.tabIndex = 0;
    setTimeout(() => {
      receiver.focus();
    }, 100);
    if (current) {
      current.tabIndex = -1;
    }
  }

  private focustFirstItem(): void {
    this.moveFocus(this.items[0]);
  }

  /** Focus the last item. */
  @Method()
  async focusLastItem(): Promise<void> {
    this.moveFocus(this.items[this.items.length - 1]);
  }

  /** Set tabindex of the label to 0, then focus it. */
  @Method()
  async setFocus(): Promise<void> {
    this.htmlTabindex = 0;
    setTimeout(() => {
      this.label.focus();
    }, 100);
  }

  @Watch("open")
  onOpenChange(): void {
    if (!this.open) {
      this.setItemsA11yAttrs();
      this.closed.emit();
    } else {
      this.opened.emit();
    }
  }

  @Watch("htmlTabindex")
  onTabindexChange(): void {
    if (!this.label) {
      return;
    }

    this.label.tabIndex = this.htmlTabindex;
  }

  @Listen("keydown")
  private onItemsKeydown(ev: KeyboardEvent): void {
    switch (ev.key) {
      case KeyboardCode.ESC:
      case KeyboardCode.ARROW_LEFT:
        if (!this.open) {
          break;
        }
        ev.preventDefault();
        ev.stopPropagation();
        this.moveFocus(this.label, this.focusableItem);
        this.open = false;
        break;
      case KeyboardCode.ARROW_RIGHT:
        if (this.open) {
          break;
        }
        ev.preventDefault();
        ev.stopPropagation();
        this.open = true;
        this.focustFirstItem();
        break;
      case KeyboardCode.ARROW_DOWN: {
        if (!this.open) {
          break;
        }
        if (document.activeElement === this.host) {
          ev.preventDefault();
          ev.stopPropagation();
          this.focustFirstItem();
          break;
        }
        const currentIndex = this.items.indexOf(this.focusableItem);
        const receiver = this.items[currentIndex + 1];
        if (receiver) {
          ev.preventDefault();
          ev.stopPropagation();
          this.moveFocus(receiver, this.focusableItem);
        } else {
          this.htmlTabindex = 0;
          this.focusableItem.tabIndex = -1;
        }
        break;
      }
      case KeyboardCode.ARROW_UP: {
        if (!this.open || document.activeElement === this.host) {
          break;
        }
        const currentIndex = this.items.indexOf(this.focusableItem);
        const receiver = this.items[currentIndex - 1];
        ev.preventDefault();
        ev.stopPropagation();
        if (receiver) {
          this.moveFocus(receiver, this.focusableItem);
        } else {
          // since there isn't a previous item to focus, give the focus to the label element
          this.focusableItem.tabIndex = -1;
          this.setFocus();
        }
        break;
      }
    }
  }

  constructor() {
    this.toggle = this.toggle.bind(this);
    this.onItemsChange = this.onItemsChange.bind(this);
    this.onLabelSlotChange = this.onLabelSlotChange.bind(this);
    this.onLabelClick = this.onLabelClick.bind(this);
    this.onLabelKeydown = this.onLabelKeydown.bind(this);
    this.onItemsKeydown = this.onItemsKeydown.bind(this);
  }

  connectedCallback(): void {
    this.onItemsChange();
  }

  render(): HTMLZMenuSectionElement {
    return (
      <Host open={this.open}>
        <button
          ref={(el) => (this.label = el)}
          class="label"
          aria-haspopup={`${!!this.hasItems}`}
          aria-expanded={`${!!this.open}`}
          role="menuitem"
          tabindex={this.htmlTabindex}
          onClick={this.onLabelClick}
          onKeyDown={this.onLabelKeydown}
        >
          <slot onSlotchange={this.onLabelSlotChange} />
          {this.hasItems && <z-icon name={this.open ? "chevron-up" : "chevron-down"} />}
        </button>
        <div
          class="items"
          role="menu"
          hidden={!this.open}
        >
          <slot
            name="section"
            onSlotchange={this.onItemsChange}
          />
        </div>
      </Host>
    );
  }
}
