import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
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
  @Prop({ reflect: true }) floating?: boolean = false;
  @State() open: boolean;
  @Element() hostElement: HTMLElement;

  private hasHeader: boolean;
  private hasContent: boolean;

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

  componentWillLoad() {
    this.hasHeader = !!this.hostElement.querySelectorAll('[slot="header"]').length;
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length || this.hasHeader;
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
        {this.hasHeader && <div class="header">
          <slot name="header"></slot>
        </div>}
        <div class="items">
          <slot name="item"></slot>
        </div>
      </div>}
    </Host>
  }
}
