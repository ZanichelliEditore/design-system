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
  @State() open?: boolean;

  private hasContent: boolean;

  @Element() hostElement: HTMLElement;

  componentWillLoad() {
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length ||
      !!this.hostElement.querySelectorAll('[slot="header"]').length;
  }

  /** Emits `toggled` with current open state. */
  @Event() toggled: EventEmitter;
  toggle() {
    if (!this.hasContent) {
      return;
    }

    this.open = !this.open;
    this.toggled.emit(this.open);
  }

  render() {
    return <Host role="menu" open={this.open}>
      <div class="label" onClick={this.toggle.bind(this)}>
        <slot></slot>
        {this.hasContent && <z-icon name={this.open ? 'chevron-up' : 'chevron-down'} />}
      </div>
      {this.open && <div class="items">
        <slot name="item"></slot>
      </div>}
    </Host>
  }
}
