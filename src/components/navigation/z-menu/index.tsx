import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Listen,
  Element,
  Host,
  Watch
} from '@stencil/core';

/**
 * @slot - Menu label
 * @slot header - Header to display as the first entry of the open menu.
 * @slot item - Single entry of the section. Can be slotted multiple times to insert items onto the menu. Use `z-menu-section` for submenus.
 */

@Component({
  tag: 'z-menu',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZMenu {
  /** Flag to set the active status of the menu. */
  @Prop({ reflect: true }) active?: boolean;
  /**
   * Flag to set the display mode of the list.
   * If true, the list will be absolutely positioned under the menu label,
   * stacked beneath it otherwise.
   * @default false
   */
  @Prop({ reflect: true }) floating?= false;
  /**
   * The opening state of the menu.
   * @default false
   */
  @Prop({ mutable: true, reflect: true }) open: boolean = false;
  @State() hasHeader: boolean;
  @State() hasContent: boolean;
  @Element() hostElement: HTMLElement;

  private content: HTMLElement;
  private raf: number;

  /** The menu has been opened. */
  @Event() opened: EventEmitter;
  /** The menu has been closed. */
  @Event() closed: EventEmitter;
  toggle() {
    if (!this.hasContent) {
      return;
    }

    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
  }

  @Listen('click', { target: 'document' })
  /** Close the floating list when a click is performed outside of this Element. */
  handleClick(ev) {
    if (
      !this.floating ||
      !this.open ||
      this.hostElement.contains(ev.target)
    ) {
      return;
    }

    this.reflow();
    this.open = false;
    this.closed.emit();
  }

  @Watch('open')
  onOpenChanged() {
    if (this.open) {
      this.reflow(true);
    } else {
      cancelAnimationFrame(this.raf);
    }
  }

  /**
   * Correctly set position of the floating menu in order to prevent overflow.
   * @param live Should run the method on every refresh frame.
   */
  reflow(live: boolean = false) {
    if (this.content) {
      const { style } = this.content;
      const { left } = this.hostElement.getBoundingClientRect();
      const widthPx = getComputedStyle(this.content).width;
      const width = widthPx ? parseFloat(widthPx.replace('px', '')) : 375;
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
  checkContent() {
    this.hasHeader = !!this.hostElement.querySelectorAll('[slot="header"]').length;
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length || this.hasHeader;
  }

  componentWillLoad() {
    this.checkContent();
  }

  render() {
    return <Host role="menu">
      <button class="label" aria-pressed={this.open ? 'true' : 'false'} onClick={this.toggle.bind(this)}>
        <div class="label-content">
          <slot></slot>
          {this.hasContent && <z-icon name={this.open ? 'chevron-up' : 'chevron-down'} />}
        </div>
      </button>
      <div class="content" ref={(el) => { this.content = el; }} hidden={!this.open}>
        {this.hasHeader && <header class="header">
          <slot name="header" onSlotchange={this.checkContent.bind(this)}></slot>
        </header>}
        <div class="items">
          <slot name="item" onSlotchange={this.checkContent.bind(this)}></slot>
        </div>
      </div>
    </Host>
  }
}
