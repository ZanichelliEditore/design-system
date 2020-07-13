import { Component, Prop, h } from '@stencil/core';
import { StepperItemStatus } from '../../../beans';

@Component({
  tag: 'z-stepper-item',
  styleUrl: 'styles.css',
  shadow: true
})
export class ZStepperItem {
  /**
   * The number of the step item.
   */
  @Prop() index: number;
  /**
   * The status of the item.
   */
  @Prop() status: string = StepperItemStatus.IDLE;

  render() {
    return (
      <div class="stepper-item">
        <div class="indicator">{this.index}</div>
        <slot />
      </div>
    );
  }
}
