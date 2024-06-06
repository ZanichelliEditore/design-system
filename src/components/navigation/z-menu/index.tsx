import {Component, h, Prop, State, Event, EventEmitter, Listen, Element, Watch, Host} from "@stencil/core";
import {DividerOrientation} from "../../../beans";

/**
 * @slot - Menu label
 * @slot header - Header to display as the first entry of the open menu.
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items onto the menu. Use `z-menu-section` for submenus.
 * @cssprop --z-menu-label-color - Color of the label's text.
 */
@Component({
  tag: "z-menu",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMenu {
  @Element() hostElement: HTMLZMenuElement;

  /** Flag to set the active status of the menu. */
  @Prop({reflect: true})
  active?: boolean;

  /**
   * Flag to set the display mode of the list.
   * If true, the list will be absolutely positioned under the menu label,
   * stacked beneath it otherwise.
   */
  @Prop({reflect: true})
  floating? = false;

  /** The opening state of the menu. */
  @Prop({mutable: true, reflect: true})
  open = false;

  /**
   * Tells the component that it's placed in a vertical context with other `ZMenu`s (e.g. in the ZAppHeader's offcanvas).
   * A small border is placed under it as a separator from other elements.
   */
  @Prop({reflect: true})
  verticalContext = false;

  /**
   * Used to manage the presence of the divider to separate the menu buttons
   */
  @Prop()
  hasDivider: boolean;

  @State()
  hasHeader: boolean;

  @State()
  hasContent: boolean;

  private content: HTMLElement;

  /** Animation frame request id. */
  private raf: number;

  /** The menu has been opened. */
  @Event()
  opened: EventEmitter;

  /** The menu has been closed. */
  @Event()
  closed: EventEmitter;

  private toggle(): void {
    if (!this.hasContent) {
      return;
    }

    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
  }

  /** Close the floating list when a click is performed outside of this Element. */
  @Listen("click", {target: "document"})
  handleClick(ev: MouseEvent): void {
    if (!this.floating || !this.open || this.hostElement.contains(ev.target as Element)) {
      return;
    }

    this.reflow();
    this.open = false;
    this.closed.emit();
  }

  @Watch("open")
  onOpenChanged(): void {
    if (this.open) {
      this.reflow(true);
    } else {
      cancelAnimationFrame(this.raf);
    }
  }

  constructor() {
    this.toggle = this.toggle.bind(this);
    this.checkContent = this.checkContent.bind(this);
    this.onLabelSlotChange = this.onLabelSlotChange.bind(this);
    this.onItemsChange = this.onItemsChange.bind(this);
  }

  componentWillLoad(): void {
    this.checkContent();
  }

  /**
   * Sets slotted item text as `data-text` attribute value, to let CSS use it through `attr()`.
   * @param ev Slotchange event
   */
  private onLabelSlotChange(ev: Event): void {
    const labelElement = (ev.target as HTMLSlotElement).assignedElements()[0] as HTMLElement;
    labelElement.dataset.text = labelElement?.textContent;
  }

  /**
   * Correctly set position of the floating menu in order to prevent overflow.
   * @param live Should run the method on every refresh frame.
   */
  private reflow(live = false): void {
    if (this.content) {
      const {style} = this.content;
      const {left} = this.hostElement.getBoundingClientRect();
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
    this.hasHeader = !!this.hostElement.querySelectorAll("[slot=header]").length;
    this.hasContent = !!this.hostElement.querySelectorAll("[slot=item]").length || this.hasHeader;
  }

  /**
   * Set `menuitem` role to all menu items.
   * Set the item's inner text to the `data-text` attribute (this is for using bold text avoiding layout shifts).
   */
  private onItemsChange(): void {
    this.checkContent();
    const items = this.hostElement.querySelectorAll<HTMLElement>("[slot=item]");
    items.forEach((item) => {
      item.setAttribute("role", "menuitem");
      item.dataset.text = item.textContent;
    });
  }

  private renderMenuLabel(): HTMLButtonElement | HTMLDivElement {
    if (this.hasContent) {
      return (
        <div class="menu-wrapper">
          <button
            class="menu-label"
            aria-expanded={this.open ? "true" : "false"}
            aria-label={this.open ? "Chiudi menù" : "Apri menù"}
            onClick={this.toggle}
          >
            <div class="menu-label-content">
              <slot onSlotchange={this.onLabelSlotChange}></slot>
              <z-icon name={this.open ? "chevron-up" : "chevron-down"} />
            </div>
          </button>
          {this.hasDivider && (
            <z-divider
              class="menu-divider"
              orientation={DividerOrientation.VERTICAL}
              color="color-black"
            ></z-divider>
          )}
        </div>
      );
    }

    return (
      <div class="menu-label">
        <div class="menu-label-content">
          <slot onSlotchange={this.onLabelSlotChange}></slot>
        </div>
      </div>
    );
  }

  render(): HTMLZMenuElement {
    return (
      <Host>
        {this.renderMenuLabel()}

        {this.hasContent && (
          <div
            class="content"
            ref={(el) => (this.content = el)}
          >
            {this.hasHeader && (
              <header class="header">
                <slot
                  name="header"
                  onSlotchange={this.checkContent}
                ></slot>
              </header>
            )}

            <div
              class="items"
              role="menu"
            >
              <slot
                name="item"
                onSlotchange={this.onItemsChange}
              ></slot>
            </div>
          </div>
        )}
      </Host>
    );
  }
}
