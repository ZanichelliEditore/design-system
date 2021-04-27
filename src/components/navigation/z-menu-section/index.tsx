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

@Component({
  tag: 'z-menu-section',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZMenuSection {
  @Prop({ reflect: true }) active?: boolean;
  @State() open: boolean;
  @Element() hostElement: HTMLElement;

  private hasContent: boolean;

  /** The section has been opened. */
  @Event() opened: EventEmitter;
  /** The section has been closed. */
  @Event() closed: EventEmitter;
  toggle() {
    if (!this.hasContent) {
      return;
    }

    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
  }

  componentWillLoad() {
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length;
  }

  render() {
    return <Host role="menu" open={this.open}>
      <button class="label" aria-pressed={this.open ? 'true' : 'false'} onClick={this.toggle.bind(this)}>
        <slot></slot>
        {this.hasContent && <z-icon name={this.open ? 'chevron-up' : 'chevron-down'} />}
      </button>
      {this.open && <div class="items">
        <slot name="item"></slot>
      </div>}
    </Host>
  }
}
