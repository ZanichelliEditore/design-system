import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'z-app-header',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZAppHeader {
  /**
   * Stuck mode for the header.
   */
  @Prop({ attribute: 'stuck', reflect: true }) stuck: boolean = false;

  private renderDefault() {
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

  private renderStuck() {
    return <div class="heading-container">
      <slot name="title"></slot>
    </div>;
  }

  render() {
    if (this.stuck) {
      return this.renderStuck();
    }
    return this.renderDefault();
  }
}
