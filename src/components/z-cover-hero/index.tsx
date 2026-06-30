import {Component, ComponentInterface, Element, Host, Listen, Prop, h} from "@stencil/core";
import {CoverHeroContentPosition, CoverHeroVariant} from "../../beans";

/**
 * Cover hero component.
 * Component to display a hero image with content.
 *
 * @slot cover - slot for the cover image.
 * @slot content - slot for the content.
 * @slot info-reveal - slot for the info reveal.
 */
@Component({
  tag: "z-cover-hero",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZCoverHero implements ComponentInterface {
  @Element() host: HTMLZCoverHeroElement;

  /**
   * Cover hero variant. Can be `OVERLAY` or `STACKED`.
   */
  @Prop({reflect: true})
  variant: CoverHeroVariant = CoverHeroVariant.OVERLAY;

  /**
   * Vertical content position (for `STACKED` variant).
   */
  @Prop({reflect: true})
  contentPosition: CoverHeroContentPosition = CoverHeroContentPosition.TOP;

  /**
   * Whether to keep the image aspect ratio.
   * If set to `false`, the cssprop `--cover-hero-aspect-ratio` will not affect the component's size;
   * instead, the height of the component follows the content's one.
   * Note: it may be necessary to set a min and/or max height to the component.
   */
  @Prop({reflect: true})
  preserveAspectRatio = true;

  /**
   * Store the intrinsic aspect ratio of the slotted image when loaded,
   * to have a default when `--cover-hero-aspect-ratio` is not set.
   * @param target The event target
   */
  @Listen("load", {capture: true})
  protected onImgLoad({target}: Event): void {
    if (target instanceof Image && target.closest("[slot=cover]")) {
      const ratio = target.naturalWidth / target.naturalHeight;
      this.host.style.setProperty("--image-aspect-ratio", ratio.toString());
    }
  }

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
        <div class="main-container">
          <div class="cover-container">
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
