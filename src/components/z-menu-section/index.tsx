import {Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h} from "@stencil/core";
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
    this.setFocus();
  }

  private setItemsA11yAttrs(): void {
    if (!this.hasItems) {
      return;
    }

    this.items.forEach((item) => {
      item.setAttribute("role", "menuitem");
      item.setAttribute("tabindex", "-1");
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

  private onLabelKeydown(ev: KeyboardEvent): void {
    if (ev.key === KeyboardCode.ENTER || ev.key === KeyboardCode.SPACE) {
      ev.preventDefault();
      ev.stopPropagation();
      this.toggle();
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

  /** Focus the label interactive element if its tabindex is 0 */
  @Method()
  async setFocus(): Promise<void> {
    if (this.label.tabIndex === 0) {
      setTimeout(() => {
        this.label.focus();
      }, 100);
    }
  }

  @Watch("open")
  onOpenChange(): void {
    if (!this.open) {
      this.closed.emit();
      this.setItemsA11yAttrs();
    } else {
      this.opened.emit();
    }
  }

  @Watch("htmlTabindex")
  onTabindexChange(): void {
    this.label.tabIndex = this.htmlTabindex;
  }

  @Listen("keydown", {capture: true})
  private onItemsKeydown(ev: KeyboardEvent): void {
    if (!this.open) {
      return;
    }

    switch (ev.key) {
      case KeyboardCode.ESC:
        ev.preventDefault();
        ev.stopPropagation();
        this.label.focus();
        this.open = false;
        break;
      case KeyboardCode.ARROW_DOWN: {
        ev.preventDefault();
        ev.stopPropagation();
        if (!this.focusableItem) {
          this.moveFocus(this.items[0]);
          break;
        }
        const currentIndex = this.items.indexOf(this.focusableItem);
        const receiver = this.items[currentIndex + 1];
        this.moveFocus(receiver ?? this.items[0], this.focusableItem);
        break;
      }
      case KeyboardCode.ARROW_UP: {
        if (!this.focusableItem) {
          break;
        }
        ev.stopPropagation();
        ev.preventDefault();
        const currentIndex = this.items.indexOf(this.focusableItem);
        const previous = this.items[currentIndex - 1];
        this.moveFocus(previous ?? this.items[this.items.length - 1], this.focusableItem);
        break;
      }
    }
  }

  constructor() {
    this.toggle = this.toggle.bind(this);
    this.onItemsChange = this.onItemsChange.bind(this);
    this.onLabelSlotChange = this.onLabelSlotChange.bind(this);
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
          aria-haspopup={`${this.hasItems}`}
          aria-expanded={`${!!this.open}`}
          role="menuitem"
          tabindex={this.htmlTabindex}
          onClick={this.toggle}
          onKeyDown={this.onLabelKeydown}
        >
          <slot onSlotchange={this.onLabelSlotChange} />
          {this.hasItems && <z-icon name={this.open ? "chevron-up" : "chevron-down"} />}
        </button>
        {this.open && (
          <div
            class="items"
            role="menu"
          >
            <slot
              name="section"
              onSlotchange={this.onItemsChange}
            />
          </div>
        )}
      </Host>
    );
  }
}
