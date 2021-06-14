import { Component, Prop, h, Element, State } from '@stencil/core';

@Component({
  tag: 'z-card-cover',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZCardCover {
  @Prop({ reflect: true }) shadowed = false;
  // @Prop({ reflect: true }) bordered = false;
  // @Prop({ reflect: true }) clickable = false;
  @Element() host: HTMLElement;
  @State() hasCover: boolean;

  componentWillLoad() {
    this.hasCover = !!this.host.querySelector('[slot="cover"]');
  }

  render() {
    return [
      <div class="cover-container">
        {this.hasCover && <slot name="cover" />}
        {!this.hasCover && <div class="color-cover">
          <div class="color-cover-content">
            <slot name="metadata" />
            <slot name="title" />
          </div>
        </div>}
      </div>,
      <div class="content">
        {this.hasCover && <slot name="metadata" />}
        {this.hasCover && <slot name="title" />}
        <slot name="text" />
        <div class="actions">
          <slot name="action" />
        </div>
      </div>
    ];
  }
}
