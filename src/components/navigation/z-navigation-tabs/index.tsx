import { Component, Prop, h, Listen, Element, State, Watch } from '@stencil/core';

import {
  TabSizeBean,
  TabSizeEnum,
  TabOrientationBean,
  TabOrientationEnum
} from '../../../beans';
import { ZNavigationTab } from '../z-navigation-tab';

@Component({
  tag: 'z-navigation-tabs',
  styleUrl: 'styles.css',
  shadow: true
})
export class ZNavigationTabs {
  @Element() host: HTMLElement;

  /** Available orientation: `horizontal` and `vertical`. Defaults to `horizontal`. */
  @Prop({ reflect: true }) orientation?: TabOrientationBean = TabOrientationEnum.horizontal;
  /** Available sizes: `big` and `small`. Defaults to `big`. */
  @Prop({ reflect: true }) size?: TabSizeBean = TabSizeEnum.big;
  @State() navigationButtons: boolean;

  buttonNavPrevious: HTMLElement;
  buttonNavNext: HTMLElement;
  tabsNav: HTMLElement;

  @Watch('orientation')
  setChildrenOrientation() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      children[i].setAttribute('orientation', this.orientation);
    }
  }

  @Watch('navigationButtons')
  setNavigationButtons() {
    this.buttonNavPrevious.setAttribute('status','hidden');
    this.buttonNavNext.setAttribute('status','hidden');
    if (this.orientation == TabOrientationEnum.vertical) {
      if(this.tabsNav.clientHeight < this.tabsNav.scrollHeight){
        this.buttonNavPrevious.setAttribute('status','show');
        this.buttonNavNext.setAttribute('status','show');
      }
    } else {
      if(this.tabsNav.clientWidth < this.tabsNav.scrollWidth){
        this.buttonNavPrevious.setAttribute('status','show');
        this.buttonNavNext.setAttribute('status','show');
      }
    }
  }

  @Listen('selected')
  selectedTabHandler(event: CustomEvent) {
    this.select(event.target as Element);
  }

  /**
   * @TODO documentation
   */
  select(tab: Element) {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.tagName === 'Z-NAVIGATION-TAB') {
        if (child === tab) {
          (child as unknown as ZNavigationTab).selected = true;
        } else {
          (child as unknown as ZNavigationTab).selected = false;
        }
      }
    }
  }

  /**
   * @TODO documentation
   */
  navigatePrevious() {
    if (this.orientation == TabOrientationEnum.vertical) {
      this.tabsNav.scrollBy({
        top: 0 - (this.tabsNav.clientHeight / 2),
        behavior: 'smooth',
      });
    } else {
      this.tabsNav.scrollBy({
        left: 0 - (this.tabsNav.clientWidth / 2),
        behavior: 'smooth',
      });
    }
  }

  /**
   * @TODO documentation
   */
  navigateNext() {
    if (this.orientation == TabOrientationEnum.vertical) {
      this.tabsNav.scrollBy({
        top: this.tabsNav.scrollTop + (this.tabsNav.clientHeight / 2),
        behavior: 'smooth',
      });
    } else {
      this.tabsNav.scrollBy({
        left: this.tabsNav.scrollTop + (this.tabsNav.clientWidth / 2),
        behavior: 'smooth',
      });
    }
  }

  componentWillRender(){
    this.setNavigationButtons();
  }

  componentDidRender() {
    this.setNavigationButtons();
    this.setChildrenOrientation();
  }

  render() {
    return [
      <button ref={(el) => this.buttonNavPrevious = el} class='navigation' onClick={() => this.navigatePrevious()} disabled={false}>
        <z-icon name={this.orientation == 'horizontal' ? 'chevron-left' : 'chevron-up'} width={16} height={16} />
      </button>,
      <nav ref={(el) => this.tabsNav = el}>
        <slot />
      </nav>,
      <button ref={(el) => this.buttonNavNext = el} class='navigation' onClick={() => {this.navigateNext()}} disabled={false}>
        <z-icon name={this.orientation == 'horizontal' ? 'chevron-right' : 'chevron-down'} width={16} height={16} />
      </button>
    ];
  }
}
