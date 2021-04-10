import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-topbar',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZTopbar {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        <slot name="logo"></slot>
      </div>
    );
  }
}
