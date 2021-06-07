import { Component, Prop, h, Listen, Element, State } from "@stencil/core";

import {
  TabSizeBean,
  TabSizeEnum,
  TabOrientationBean,
  TabOrientationEnum
} from "../../../beans";
import { ZNavigationTab } from '../z-navigation-tab';

@Component({
  tag: "z-navigation-tabs",
  styleUrl: "styles.css",
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

  tab: HTMLElement;

  @Listen('resize', { target: 'window' })
  handleResize() {
    this.canNavigatePrevious = (this.host.firstElementChild as HTMLElement).offsetLeft < 0;
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

  tabWindow() {
    // TODO
  }

  navigatePrevious() {
    if (!this.canNavigatePrevious) {
      return;
    }

    // scroll pari alla width del primo elemento non visibile a sinistra
  }

  navigateNext() {
    if (!this.canNavigateNext) {
      return;
    }

    // scroll pari alla width del primo elemento non visibile a destra
  }

  render() {
    return [
      <button class='navigation' onClick={() => this.navigatePrevious()} disabled={!this.canNavigatePrevious}>
        <z-icon name={this.orientation == 'horizontal' ? 'chevron-left' : 'chevron-up'} width={16} height={16} />
      </button>,
      <slot/>,
      <button class='navigation' onClick={() => {this.navigateNext()}} disabled={!this.canNavigateNext}>
        <z-icon name={this.orientation == 'horizontal' ? 'chevron-right' : 'chevron-down'} width={16} height={16} />
      </button>
    ];
  }
}
