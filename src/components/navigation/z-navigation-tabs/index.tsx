import { Component, Prop, h, Listen, Element, State, Watch, Host } from '@stencil/core';

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
  /** State for the navigation */
  @State() canNavigate: boolean;
  @State() canNavigatePrev: boolean;
  @State() canNavigateNext: boolean;

  tabsNav: HTMLElement;

  /** Set all childrens (tab) orientation attribute : horizontal (default) or vertical */
  @Watch('orientation')
  setChildrenOrientation() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      children[i].setAttribute('orientation', this.orientation);
    }
  }

  /** When resize check scroll for the navigation buttons visibility */
  @Listen('resize', { target: 'window', passive: true })
  checkScrollVisible() {
    if (this.orientation == TabOrientationEnum.horizontal) {
      this.canNavigate = this.tabsNav.scrollWidth > this.tabsNav.clientWidth;
    } else if (this.orientation == TabOrientationEnum.vertical) {
      this.canNavigate = this.tabsNav.scrollHeight > this.tabsNav.clientHeight;
    }
    this.checkScrollEnabled();
  }

  /** Check left scroll (horizontal) or top scroll (vertical) for the navigation buttons status: enabled or disabled */
  checkScrollEnabled() {
    if (this.orientation == TabOrientationEnum.horizontal) {
      this.canNavigateNext = this.tabsNav.scrollLeft + this.tabsNav.clientWidth < this.tabsNav.scrollWidth;
      this.canNavigatePrev = this.tabsNav.scrollLeft > 0;
    } else if (this.orientation == TabOrientationEnum.vertical) {
      this.canNavigateNext = this.tabsNav.scrollTop + this.tabsNav.clientHeight < this.tabsNav.scrollHeight;
      this.canNavigatePrev = this.tabsNav.scrollLeft > 0;
    }
  }

  @Listen('selected')
  selectedTabHandler(event: CustomEvent) {
    this.select(event.target as Element);
  }

  /** When a children (tab) selected set it true and false to the others */
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

  /** Set previous scroll for orientation horizontal or vetical */
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

  /** Set next scroll for orientation horizontal or vetical */
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

  componentDidLoad() {
    this.setChildrenOrientation();
    this.checkScrollVisible();
  }

  render() {
    return <Host scrollable={this.canNavigate}>
        {this.canNavigate && <button class='navigation' onClick={() => this.navigatePrevious()} disabled={!this.canNavigatePrev}>
          <z-icon name={this.orientation == 'horizontal' ? 'chevron-left' : 'chevron-up'} width={16} height={16} />
        </button>}
        <nav ref={(el) => this.tabsNav = el ?? this.tabsNav } onScroll={this.checkScrollEnabled.bind(this)}>
          <slot />
        </nav>
        {this.canNavigate && <button class='navigation' onClick={() => {this.navigateNext()}} disabled={!this.canNavigateNext}>
          <z-icon name={this.orientation == 'horizontal' ? 'chevron-right' : 'chevron-down'} width={16} height={16} />
        </button>}
    </Host>;
  }
}
