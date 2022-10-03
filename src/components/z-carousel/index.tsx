import { Component, h, Prop, Element } from "@stencil/core";
import { CarouselButtonOptions, CarouselProgressOptions, ButtonVariantEnum } from "../../beans";

/**
 * ZCarousel component.
 * @cssprop --z-carousel-gutter - The gutter between items.
 * @slot - carousel items. use `<li>` elements inside this slot as it is wrapped inside an `<ul>`
 */

@Component({
  tag: "z-carousel",
  styleUrl: "styles.css",
  shadow: false,
})
export class ZCarousel {
  @Element() hostElement: HTMLElement;

  /** whether the z-carousel is on loading state */
  @Prop() isLoading: boolean;
  /** arrow buttons style if given */
  @Prop() buttons: null|CarouselButtonOptions
  /** progress indicators if given */
   @Prop() progress: null|CarouselProgressOptions
  /** the height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. */
  @Prop() ghostLoadingHeight: number = 100;

  itemsContainer: HTMLUListElement;

  onPrev() {
    console.log(this.hostElement)
    const scroller = this.hostElement.querySelector('.z-carousel-items-container');
    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: -scroller.clientWidth / 2,
      behavior: 'smooth',
    });
  }

  onNext() {
    const scroller = this.hostElement.querySelector('.z-carousel-items-container');
    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: scroller.clientWidth / 2,
      behavior: 'smooth',
    });
  }

  showFooter() {
    return this.buttons === CarouselButtonOptions.BOTTOM ||
      this.progress === CarouselProgressOptions.DOTS || this.progress === CarouselProgressOptions.NUMBERS;
  }

  render() {
    if (this.isLoading) {
      return (
        <div style={{ height: `${this.ghostLoadingHeight}px` }}>
          <z-ghost-loading></z-ghost-loading>
          <div style={{ display: "none" }}>
            <slot />
          </div>
        </div>
      );
    }

    return [
      <div class="z-carousel-container">
        {this.buttons === CarouselButtonOptions.TOP && <z-button data-direction='prev' icon='chevron-left' onClick={this.onPrev.bind(this)}/>}
        <ul class="z-carousel-items-container">
          <slot />
        </ul>
        {this.buttons === CarouselButtonOptions.TOP && <z-button data-direction='next' icon='chevron-right' onClick={this.onNext.bind(this)}/>}
      </div>,
      this.showFooter() && <div class="z-carousel-footer">
        {this.buttons === CarouselButtonOptions.BOTTOM && <z-button variant={ButtonVariantEnum.tertiary} icon='arrow-left-filled' onClick={this.onPrev.bind(this)}/>}
        {this.progress === CarouselProgressOptions.DOTS && <ul>
          {/* TODO */}
        </ul>}
        {this.progress === CarouselProgressOptions.NUMBERS && <ul>
          {/* TODO */}
        </ul>}
        {this.buttons === CarouselButtonOptions.BOTTOM && <z-button variant={ButtonVariantEnum.tertiary} icon='arrow-right-filled' onClick={this.onNext.bind(this)}/>}
      </div>];
  }
}
