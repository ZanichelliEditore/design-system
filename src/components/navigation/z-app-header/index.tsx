import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-app-header',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZAppHeader {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        This is your z-app-header component
        This is your default prop: {this.myProp}
      </div>
    );
  }
}
