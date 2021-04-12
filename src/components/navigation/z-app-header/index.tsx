import { Component, h } from '@stencil/core';

@Component({
  tag: 'z-app-header',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZAppHeader {
  render() {
    return [
      <slot name="title"></slot>,
      <slot name="subtitle"></slot>,
    ];
  }
}
