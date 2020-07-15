import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-stepper-item',
  styleUrl: 'styles.css',
  shadow: true
})
export class ZStepperItem {
  /**
   * The number of the step item.
   */
  @Prop({ attribute: 'index' }) index: number;
  /**
   * The href to navigate on click.
   */
  @Prop({ attribute: 'href' }) href: string;
  /**
   * The pressed state of the item.
   */
  @Prop({ attribute: 'pressed' }) pressed: boolean;
  /**
   * The disabled state of the item.
   */
  @Prop({ attribute: 'disabled' }) disabled: boolean;

  render() {
    if (this.href) {
      return (
        <a href={this.href} class="stepper-item">
          <div class="indicator">{this.index}</div>
          <span><slot /></span>
        </a>
      );
    }
    return (
      <button class="stepper-item">
        <div class="indicator">{this.index}</div>
        <span><slot /></span>
      </button>
    );
  }
}
