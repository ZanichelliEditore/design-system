import { Component, h, Prop, Element, Watch, Event, EventEmitter, State } from "@stencil/core";
import { CarouselButtonPosition, CarouselProgressMode, ButtonVariantEnum } from "../../beans";

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
  @Prop() arrows: null|CarouselButtonPosition
  /** progress indicators. progress is available only for "single" mode */
  @Prop() progress: null|CarouselProgressMode
  /** the height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. */
  @Prop() ghostLoadingHeight: number = 100;
  /**
   * Current item index for single mode.
   */
  @State() current: number = 0;

  /**
   * Items on the slider.
   */
  @State() items: HTMLLIElement[];

  /**
   * Reference for the items container element.
   */
  itemsContainer: HTMLUListElement;

  /**
   * Observer that handles current index change when scrolling on single mode.
   */
  intersectionObserver: IntersectionObserver;

  /** emitted on single page mode index change */
  @Event() indexChange: EventEmitter;
  emitIndexChange() {
    this.indexChange.emit({ currentItem: this.current });
    console.debug('z-carousel: indexChange', this.current);
  }

  @Watch('current')
  onIndexChange() {
    this.items.find((a) => !a.classList.contains('hidden'))?.classList.add('hidden');
    this.items[this.current].classList.remove('hidden');
    this.items[this.current].scrollIntoView({
      behavior: 'smooth',
    });
    this.emitIndexChange();
  }

  @Watch('single')
  onSingleModeChange() {
    if (this.single && !this.intersectionObserver) {
        this.setIntersectionObserver();
    }
  }

  componentDidLoad() {
    this.itemsContainer = this.hostElement.querySelector('.z-carousel-items-container');
    if (!this.itemsContainer) {
      return;
    }
    this.items = Array.from(this.itemsContainer.querySelectorAll('li'));

    if (this.single) {
      this.setIntersectionObserver();
    }
  }

  setIntersectionObserver() {
    this.intersectionObserver = new window.IntersectionObserver((entries) => {
      const entry = entries.find((entry) => entry.isIntersecting);
      if (!entry) {
          return;
      }

      this.current = this.items.findIndex((item) => item === entry.target);
    }, {
        root: this.itemsContainer,
        threshold: 0.25,
    });

    this.items.forEach((element) => this.intersectionObserver.observe(element));
  }

  onPrev() {
    if (this.single) {
      this.current = Math.max(0, this.current - 1);
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
      this.current = Math.min(this.current + 1, this.items.length - 1);
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
    return this.arrows === CarouselButtonPosition.BOTTOM ||
      this.progress === CarouselProgressMode.DOTS || this.progress === CarouselProgressMode.NUMBERS;
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
        {this.arrows === CarouselButtonPosition.OVER && <z-button data-direction='prev' icon='chevron-left' onClick={this.onPrev.bind(this)}/>}
        <ul class="z-carousel-items-container">
          <slot />
        </ul>
        {this.arrows === CarouselButtonPosition.OVER && <z-button data-direction='next' icon='chevron-right' onClick={this.onNext.bind(this)}/>}
      </div>,
      this.showFooter() && <div class="z-carousel-footer">
        {this.arrows === CarouselButtonPosition.BOTTOM && <z-button variant={ButtonVariantEnum.tertiary} icon='arrow-left-filled' onClick={this.onPrev.bind(this)}/>}
        {this.progress === CarouselProgressMode.DOTS && this.single && this.items && <div class="dots-progress">
          {this.items.map((_item, key) => this.current === key ? <button type="button" class="current"><z-icon name="white-circle-filled"/></button> :
            <button type="button" onClick={() => this.current = key}><z-icon name="black-circle-filled"/></button>)}
        </div>}
        {this.progress === CarouselProgressMode.NUMBERS && this.single && this.items && <div class="numbers-progress">
          <span class="interactive-3 current">{this.current + 1}</span>
          <span class="interactive-3">di</span>
          <span class="interactive-3">{this.items.length}</span>
        </div>}
        {this.arrows === CarouselButtonPosition.BOTTOM && <z-button variant={ButtonVariantEnum.tertiary} icon='arrow-right-filled' onClick={this.onNext.bind(this)}/>}
      </div>];
  }
}
