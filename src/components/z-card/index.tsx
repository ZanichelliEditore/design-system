import { Component, Prop, h, Element, State, Listen, Event, EventEmitter } from '@stencil/core';
import { CardVariants } from '../../beans';

@Component({
  tag: 'z-card',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZCard {
  /**
   * Card variant.
   * Can be one of "text", "border", "shadow", "overlay".
   * Leave it undefined for the default card.
   */
  @Prop({ reflect: true }) variant: CardVariants;

  /** Name of the icon to place over the image cover */
  @Prop() coverIcon: string;

  /** Enable click interactions on the card. Default: false */
  @Prop({ reflect: true }) clickable = false;

  @Element() host: HTMLElement;

  @State() hasCoverImage: boolean;

  /**
   * Card click event.
   * Fired only if `clickable` is true.
   */
  @Event() cardClicked: EventEmitter;

  @Listen('click')
  onClick(ev: MouseEvent) {
    // Do nothing for clicks on actions.
    if ((ev.target as HTMLElement).getAttribute('slot') === 'action') {
      return;
    }

    if (!this.clickable) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }

    this.cardClicked.emit();
  }

  componentWillLoad() {
    this.hasCoverImage = !!this.host.querySelector('[slot="cover"]');
  }

  /**
   * Template for a card without image cover.
   * A colored background replaces the image and some data is moved over it.
   */
  renderColorCoverCard() {
    return [
      <div class="cover-container">
        <div class="color-cover">
          <div class="cover-content">
            <slot name="metadata" />
            <slot name="title" />
          </div>
        </div>
      </div>,
      <div class="content">
        <slot name="text" />
        <div class="actions">
          <slot name="action" />
        </div>
      </div>
    ];
  }

  render() {
    if (this.variant === CardVariants.overlay || this.hasCoverImage) {
      return [
        <div class="cover-container">
          {this.hasCoverImage && [
            <slot name="cover" />,
            (this.variant !== CardVariants.overlay) && this.coverIcon && <z-icon name={this.coverIcon}></z-icon>
          ]}
          {!this.hasCoverImage && <div class="color-cover"></div>}
        </div>,
        <div class="content">
          <slot name="metadata" />
          <slot name="title" />
          <slot name="text" />
          <div class="actions">
            <slot name="action" />
          </div>
        </div>
      ];
    }

    return this.renderColorCoverCard();
  }
}
