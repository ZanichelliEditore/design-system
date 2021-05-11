import { Component, h } from '@stencil/core';

@Component({
  tag: 'z-app-header',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZAppHeader {
  render() {
    return [
      <div class="heading-container">
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
      </div>,
      <div class="menu-container">
        <slot name="menu"></slot>
      </div>
    ];
  }
}
