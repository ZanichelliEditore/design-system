import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Listen,
  Element,
  Host
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
  @Prop({ reflect: true }) floating? = false;
  @State() open: boolean;
  @State() hasHeader: boolean;
  @State() hasContent: boolean;
  @Element() hostElement: HTMLElement;

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

    this.open = false;
    this.closed.emit();
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
    return <Host role="menu" open={this.open}>
      <button class="label" aria-pressed={this.open ? 'true' : 'false'} onClick={this.toggle.bind(this)}>
        <div class="label-content">
          <slot></slot>
          {this.hasContent && <z-icon name={this.open ? 'chevron-up' : 'chevron-down'} />}
        </div>
      </button>
      {this.open && <div class="content">
        {this.hasHeader && <header class="header">
          <slot name="header" onSlotchange={this.checkContent.bind(this)}></slot>
        </header>}
        <div class="items">
          <slot name="item" onSlotchange={this.checkContent.bind(this)}></slot>
        </div>
      </div>}
    </Host>
  }
}
