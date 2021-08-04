import {Component, Prop, h, Event, EventEmitter, Host} from '@stencil/core';

@Component({
  tag: 'z-davide-x',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZDavideX {
  @Prop() href?: string;
  @Prop() icon?: string;
  @Prop() notstyled?: boolean;

  @Event() onClick: EventEmitter;
  handleOnClick(): void {
    //e.preventDefault();
    this.onClick.emit();
  }

  render() {
    return (
      <Host>
        <a
          target="_blank"
          href={this.href}
          onClick={() => this.handleOnClick()}
          class={this.notstyled ? 'notstyled' : ''}
        >
          <slot />
          {this.icon && <z-icon name={this.icon} />}
        </a>
      </Host>
    );
  }
}
