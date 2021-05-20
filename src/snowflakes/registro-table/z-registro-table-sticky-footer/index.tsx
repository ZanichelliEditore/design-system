import { Component, h } from '@stencil/core';

@Component({
  tag: 'z-registro-table-sticky-footer',
  styleUrl: 'styles.css',
  shadow: false,
  scoped: true
})

export class ZRegistroTableStickyFooter {

  render() {
    return (
      <slot />
    );
  }
}
