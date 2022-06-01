import { Component, Prop, h, Listen, Element, State, Watch, Host } from '@stencil/core';

import {
  NavigationTabsSize,
  NavigationTabsSizes,
  NavigationTabsOrientation,
  NavigationTabsOrientations
} from '../../../../beans';
import { ZNavigationTab } from '../z-navigation-tab';

@Component({
  tag: 'z-navigation-tabs',
  styleUrl: 'styles.css',
  shadow: true
})
export class ZNavigationTabs {
  @Element() host: HTMLElement;

  /** Available orientation: `horizontal` and `vertical`. Defaults to `horizontal`. */
  @Prop({ reflect: true }) orientation?: NavigationTabsOrientation = NavigationTabsOrientations.horizontal;
  /** Available sizes: `big` and `small`. Defaults to `big`. */
  @Prop({ reflect: true }) size?: NavigationTabsSize = NavigationTabsSizes.big;
  /** State for the navigation */
  @State() canNavigate: boolean;
  @State() canNavigatePrev: boolean;
  @State() canNavigateNext: boolean;
  @State() direction: 'Top'|'Left' = this.orientation == NavigationTabsOrientations.vertical ? 'Top' : 'Left';
  @State() dimension: 'Height'|'Width' = this.orientation == NavigationTabsOrientations.vertical ? 'Height' : 'Width';

  tabsNav: HTMLElement;

  /**
   * Set the `size` prop to all `z-navigation-tab` children.
   */
  @Watch('size')
  setChildrenSize() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      children[i].setAttribute('size', this.size);
    }
  }

  /**
   * Set the `orientation` prop to all `z-navigation-tab` children.
   */
  @Watch('orientation')
  setChildrenOrientation() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      children[i].setAttribute('orientation', this.orientation);
    }
  }

  @Watch('orientation')
  setDirectionAndDimension() {
    this.direction = this.orientation == NavigationTabsOrientations.vertical ? 'Top' : 'Left';
    this.dimension = this.orientation == NavigationTabsOrientations.vertical ? 'Height' : 'Width';
  }

  /** When resize check if the navigation buttons are needed */
  // @Listen('resize', { target: 'window', passive: true })
  @Listen('resize', { passive: true })
  checkScrollVisible() {
    if (!this.tabsNav) {
      return;
    }

    this.canNavigate = this.tabsNav[`scroll${this.dimension}`] > this.tabsNav[`client${this.dimension}`];
    this.checkScrollEnabled();
  }

  /**
   * Check if navigation buttons can be enabled for each direction.
   */
  @Watch('direction')
  @Watch('dimension')
  checkScrollEnabled() {
    if (!this.tabsNav) {
      return;
    }

    this.canNavigateNext = (this.tabsNav[`scroll${this.direction}`] + this.tabsNav[`client${this.dimension}`]) <
      this.tabsNav[`scroll${this.dimension}`];
    this.canNavigatePrev = this.tabsNav[`scroll${this.direction}`] > 0;
  }

  /**
   * Listen for child tab selection.
   * @param event Selected event triggered by `z-navigation-tab`
   */
  @Listen('selected')
  selectedTabHandler(event: CustomEvent) {
    this.select(event.target as Element);
  }

  /**
   * Select a tab child and deselect the others
   */
  select(tab: Element) {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.tagName === 'Z-NAVIGATION-TAB') {
        if (child !== tab) {
          (child as unknown as ZNavigationTab).selected = false;
        }
      }
    }
  }

  /** Scroll the navigation bar (half of its size) backward, based on orientation */
  navigatePrevious() {
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]: 0 - (this.tabsNav[`client${this.dimension}`] / 2),
      behavior: 'smooth',
    });
  }

  /** Scroll the navigation bar (half of its size) forward, based on orientation */
  navigateNext() {
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]: this.tabsNav.scrollTop + (this.tabsNav[`client${this.dimension}`] / 2),
      behavior: 'smooth',
    });
  }

  componentDidLoad() {
    this.setChildrenSize();
    this.setChildrenOrientation();
    this.checkScrollVisible();
  }

  render() {
    return <Host
      class={{
        'interactive-2': this.size === 'small',
        'interactive-1': this.size !== 'small'
      }}
      scrollable={this.canNavigate}
      >
        {this.canNavigate && <button
          class="navigation"
          onClick={() => this.navigatePrevious()}
          tabindex="-1"
          disabled={!this.canNavigatePrev}
        >
          <z-icon
            name={this.orientation == 'horizontal' ? 'chevron-left' : 'chevron-up'}
            width={16}
            height={16}
          />
        </button>}

        <nav
          role="tablist"
          ref={(el) => this.tabsNav = el ?? this.tabsNav }
          onScroll={this.checkScrollEnabled.bind(this)}
        >
          <slot></slot>
        </nav>

        {this.canNavigate && <button
          class="navigation"
          onClick={() => {this.navigateNext()}}
          tabindex="-1"
          disabled={!this.canNavigateNext}
        >
          <z-icon name={this.orientation == 'horizontal' ? 'chevron-right' : 'chevron-down'}
            width={16}
            height={16}
          />
        </button>}
    </Host>;
  }
}
