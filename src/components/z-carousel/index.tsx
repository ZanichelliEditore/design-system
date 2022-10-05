import { Component, h, Prop, Element, Watch, Event, EventEmitter, State } from "@stencil/core";
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

  /** the z-carousel is on loading state */
  @Prop() isLoading: boolean;
  /** shows only one content at a time */
  @Prop() single: boolean = false;
  /** arrow buttons style if given */
  @Prop() buttons: null|CarouselButtonOptions
  /** progress indicators. progress is available only for "single" mode */
  @Prop() progress: null|CarouselProgressOptions
  /** the height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. */
  @Prop() ghostLoadingHeight: number = 100;
  /**
   * Current item index for single mode.
   */
  @State() itemIndex: number = 0;

  /**
   * Items on the slider.
   */
  @State() items: HTMLLIElement[];

  /**
   * Reference for the items container element.
   */
  itemsContainer: HTMLUListElement;

  /** emitted on single page mode index change */
  @Event() indexChange: EventEmitter;
  emitIndexChange() {
    this.indexChange.emit({ currentItem: this.itemIndex });
    console.debug('z-carousel: indexChange', this.itemIndex);
  }

  @Watch('itemIndex')
  onIndexChange() {
    this.items.find((a) => !a.classList.contains('hidden'))?.classList.add('hidden');
    this.items[this.itemIndex].classList.remove('hidden');
    this.items[this.itemIndex].scrollIntoView({
      behavior: 'smooth',
    });
    this.emitIndexChange();
  }

  componentDidLoad() {
    this.itemsContainer = this.hostElement.querySelector('.z-carousel-items-container');
    if (!this.itemsContainer) {
      return;
    }
    this.items = Array.from(this.itemsContainer.querySelectorAll('li'));
  }

  onPrev() {
    if (this.single) {
      this.itemIndex = Math.max(0, this.itemIndex - 1);
      return;
    }

    const scroller = this.itemsContainer;
    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: -scroller.clientWidth / 2,
      behavior: 'smooth',
    });
  }

  onNext() {
    if (this.single) {
      this.itemIndex = Math.min(this.itemIndex + 1, this.items.length - 1);
      return;
    }

    const scroller = this.itemsContainer;
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
          <div class="loading-items-container">
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
        {this.progress === CarouselProgressOptions.DOTS && this.single && this.items && <div class="dots-progress">
          {this.items.map((item, key) => this.itemIndex === key ? <button class="current"><z-icon name="black-circle-filled"/></button> :
            <button onClick={() => this.itemIndex = key}><z-icon name="white-circle-filled"/></button>)}
        </div>}
        {this.progress === CarouselProgressOptions.NUMBERS && this.single && this.items && <div class="numbers-progress">
          <span class="interactive-3 current">{this.itemIndex + 1}</span>
          <span class="interactive-3">di</span>
          <span class="interactive-3">{this.items.length}</span>
        </div>}
        {this.buttons === CarouselButtonOptions.BOTTOM && <z-button variant={ButtonVariantEnum.tertiary} icon='arrow-right-filled' onClick={this.onNext.bind(this)}/>}
      </div>];
  }
}
