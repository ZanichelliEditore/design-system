import { Component, h } from '@stencil/core';

@Component({
  tag: 'z-stepper',
  styleUrl: 'styles.css',
  shadow: true
})
export class ZStepper {
  render() {
    return (
      <slot />
    );
  }
}
