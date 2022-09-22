import {Component, h, Prop, State, Event, EventEmitter, Listen, Element, Watch, Host} from "@stencil/core";
import {HostElement} from "@stencil/core/internal";

/**
 * @slot - Menu label
 * @slot header - Header to display as the first entry of the open menu.
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items onto the menu. Use `z-menu-section` for submenus.
 */

@Component({
  tag: "z-menu",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZMenu {
  /** Flag to set the active status of the menu. */
  @Prop({reflect: true})
  active?: boolean;
  /**
   * Flag to set the display mode of the list.
   * If true, the list will be absolutely positioned under the menu label,
   * stacked beneath it otherwise.
   * @default false
   */
  @Prop({reflect: true})
  floating? = false;
  /**
   * The opening state of the menu.
   * @default false
   */
  @Prop({mutable: true, reflect: true})
  open = false;
  @State()
  hasHeader: boolean;
  @State()
  hasContent: boolean;
  @Element() hostElement: HTMLZMenuElement;

  private content: HTMLElement;
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

  @Listen("click", {target: "document"})
  /** Close the floating list when a click is performed outside of this Element. */
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
    this.onItemsChange = this.onItemsChange.bind(this);
  }

  componentWillLoad(): void {
    this.checkContent();
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
    this.hasHeader = !!this.hostElement.querySelectorAll('[slot="header"]').length;
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length || this.hasHeader;
  }

  /**
   * Set `menuitem` role to all menu items.
   */
  private onItemsChange(): void {
    this.checkContent();
    const items = this.hostElement.querySelectorAll('[slot="item"]');
    items?.forEach((item) => item.setAttribute("role", "menuitem"));
  }

  private renderMenuLabel(): HTMLButtonElement | HTMLDivElement {
    if (this.hasContent) {
      return (
        <button
          class="menu-label"
          aria-expanded={this.open ? "true" : "false"}
          aria-label={this.open ? "Chiudi menù" : "Apri menù"}
          onClick={this.toggle}
        >
          <div class="menu-label-content">
            <slot></slot>
            <z-icon name={this.open ? "chevron-up" : "chevron-down"} />
          </div>
        </button>
      );
    }

    return (
      <div class="menu-label">
        <div class="menu-label-content">
          <slot></slot>
        </div>
      </div>
    );
  }

  render(): HostElement {
    return (
      <Host>
        {this.renderMenuLabel()}
        <div
          class="content"
          ref={(el) => {
            this.content = el;
          }}
          hidden={!this.open}
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
      </Host>
    );
  }
}
