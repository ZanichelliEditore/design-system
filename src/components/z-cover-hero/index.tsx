import { Component, Prop, h, Element, Host } from '@stencil/core';
import { CoverHeroVariants, CoverHeroContentPosition } from '../../beans';

/**
 * Component short description.
 */
@Component({
  tag: 'z-cover-hero',
  styleUrl: 'styles.css',
  shadow: true
})

/**
 * Cover hero component.
 *
 * @slot - info to display in the info box. If more than one element has been slotted,
 * @cssprop --cover-hero-height - height of the cover hero.
 * @cssprop --cover-hero-overlay - overlay color of the cover hero.
 * @cssprop --cover-hero-text-color - color of the text.
 */

export class ZCoverHero {
  @Element() el: HTMLElement;

  /**
   * Cover hero variant.
   * Can be one of "overlay", "stacked".
   * Leave it undefined for the default cover hero variant.
   */
  @Prop({ reflect: true }) variant: CoverHeroVariants = CoverHeroVariants.overlay;

  /**
   * Cover hero content position (only for stacked variant).
   */
  @Prop({ reflect: true }) position: CoverHeroContentPosition = CoverHeroContentPosition.top;

  /**
   * Cover hero caption text to display in the z-info-reveal component.
   */
  @Prop() caption?: string = '';

  /**
   * Template for the content.
   */
  private renderContent() {
    return (
      <div class="container">
        <slot name="content"></slot>
      </div>
    )
  }

  render() {
    return <Host>
      {(this.variant === CoverHeroVariants.stacked && this.position === CoverHeroContentPosition.top) &&
        this.renderContent()
      }
      <div class="hero">
        <div class="cover">
          <slot name="cover"></slot>
          {this.caption &&
            <z-info-reveal>
              <div>{this.caption}</div>
            </z-info-reveal>
          }
        </div>
        {this.variant === CoverHeroVariants.overlay &&
          this.renderContent()
        }
      </div>
      {(this.variant === CoverHeroVariants.stacked && this.position === CoverHeroContentPosition.bottom) &&
        this.renderContent()
      }
    </Host>
  }
}
