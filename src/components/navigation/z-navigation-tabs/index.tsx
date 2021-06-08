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
  @State() canNavigatePrevious: boolean;
  @State() canNavigateNext: boolean;

  tabsNav: HTMLElement;

  @Watch('orientation')
  setChildrenOrientation() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      children[i].setAttribute('orientation', this.orientation);
    }
  }

  componentDidRender() {
    this.canNavigate();
  }

  @Listen('resize', { target: 'window' })
  canNavigate() {
    this.canNavigatePrevious = (this.host.firstElementChild as HTMLElement).offsetLeft < this.host.offsetLeft;
    const lastChild = this.host.lastElementChild as HTMLElement;
    this.canNavigateNext = lastChild.offsetLeft >= lastChild.offsetParent?.clientWidth;
  }

  @Listen('selected')
  selectedTabHandler(event: CustomEvent) {
    this.select(event.target as Element);
  }

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

  navigatePrevious() {
    if (!this.canNavigatePrevious) {
      return;
    }

    // scroll pari alla width del primo elemento non visibile a sinistra
    let firstChildOut = Array.from(this.host.children).find((child: HTMLElement) => {
      const parent = child.offsetParent as HTMLElement;
      return child.offsetLeft < parent.offsetLeft;
    });
    firstChildOut.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    this.canNavigate();
  }

  navigateNext() {
    if (!this.canNavigateNext) {
      return;
    }

    // scroll pari alla width del primo elemento non visibile a destra
    let firstChildOut = Array.from(this.host.children).find((child) => (child as HTMLElement).offsetLeft >= this.host.clientWidth);
    firstChildOut.scrollIntoView({ behavior: 'smooth', inline: 'end' });
    this.canNavigate();
  }

  render() {
    return [
      <button class='navigation' onClick={() => this.navigatePrevious()} disabled={!this.canNavigatePrevious}>
        <z-icon name={this.orientation == 'horizontal' ? 'chevron-left' : 'chevron-up'} width={16} height={16} />
      </button>,
      <nav ref={(el) => this.tabsNav = el}>
        <slot />
      </nav>,
      <button class='navigation' onClick={() => {this.navigateNext()}} disabled={!this.canNavigateNext}>
        <z-icon name={this.orientation == 'horizontal' ? 'chevron-right' : 'chevron-down'} width={16} height={16} />
      </button>
    ];
  }
}
