import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Element
} from '@stencil/core';

@Component({
  tag: 'z-menu',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZMenu {
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
    return [
      <div class="label" onClick={this.toggle.bind(this)}>
        <slot></slot>
        {this.hasContent && <z-icon name={this.open ? 'chevron-up' : 'chevron-down'} />}
      </div>,
      this.open && <div class="content">
        <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="items">
          <slot name="item"></slot>
        </div>
      </div>
    ];
  }
}
