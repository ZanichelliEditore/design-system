import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-chip',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZChip {
  @Prop() label: string;
  @Prop() number: number;

  render() {
    return (
      <div>
        <span class="text-container">
          <span class="number">{this.number}</span>
          {this.label}
        </span>
      </div>
    );
  }
}
