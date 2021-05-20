import { Component, h } from '@stencil/core';

/**
 * @slot - table sticky footer content
 */
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
