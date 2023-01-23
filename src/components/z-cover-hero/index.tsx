import {Component, Prop, h, Element, Host} from "@stencil/core";
import {CoverHeroVariant, CoverHeroContentPosition} from "../../beans";

/**
 * Cover hero component.
 * Component to display a hero image with content.
 *
 * @slot cover - slot for the cover image.
 * @slot content - slot for the content.
 * @slot info-reveal - slot for the info reveal.
 * @cssprop --cover-hero-height - height of the cover hero. Default: `auto`.
 * @cssprop --cover-hero-min-height - min height of the cover hero content. Default: 240px.
 * @cssprop --cover-hero-overlay - overlay color of the cover hero (CSS background property).
 * @cssprop --cover-hero-text-color - color of the text.
 */
@Component({
  tag: "z-cover-hero",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZCoverHero {
  @Element() el: HTMLZCoverHeroElement;

  /**
   * Cover hero variant.
   * Can be one of "OVERLAY", "STACKED".
   */
  @Prop({reflect: true})
  variant: CoverHeroVariant = CoverHeroVariant.OVERLAY;

  /**
   * Cover hero content position (only for STACKED variant).
   */
  @Prop({reflect: true})
  contentPosition: CoverHeroContentPosition = CoverHeroContentPosition.TOP;

  /**
   * Template for the content.
   */
  private renderContent(): HTMLDivElement {
    return (
      <div class="content-container">
        <slot name="content"></slot>
      </div>
    );
  }

  render(): HTMLZCoverHeroElement {
    return (
      <Host>
        {this.variant === CoverHeroVariant.STACKED &&
          this.contentPosition === CoverHeroContentPosition.TOP &&
          this.renderContent()}
        <div class="content-hero">
          <div class="cover">
            <slot name="cover"></slot>
          </div>
          <slot name="info-reveal"></slot>
          {this.variant === CoverHeroVariant.OVERLAY && this.renderContent()}
        </div>
        {this.variant === CoverHeroVariant.STACKED &&
          this.contentPosition === CoverHeroContentPosition.BOTTOM &&
          this.renderContent()}
      </Host>
    );
  }
}
