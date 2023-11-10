import {Component, Prop, h, Listen, Element, State, Watch, Host} from "@stencil/core";
import {
  NavigationTabsSize,
  NavigationTabsOrientation,
  NavigationTabsKeyboardEvents,
  KeyboardCode,
} from "../../../../beans";

/**
 * Navigation tabs component.
 * @slot - Main slot. Use `z-navigation-tab` or `z-navigation-tab-link` components as children.
 * @cssprop --z-navigation-tabs-nav-buttons-bg - Navigation buttons background color.
 * @cssprop --z-navigation-tabs-nav-buttons-fg - Navigation buttons foreground color.
 */
@Component({
  tag: "z-navigation-tabs",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZNavigationTabs {
  /**
   * Set aria-label attribute in tablist role.
   */
  @Prop()
  ariaLabel?: string;

  /**
   * Navigation tabs orientation.
   */
  @Prop({reflect: true})
  orientation? = NavigationTabsOrientation.HORIZONTAL;

  /**
   * Navigation tabs size.
   */
  @Prop({reflect: true})
  size? = NavigationTabsSize.BIG;

  /**
   * Whether to show navigation buttons.
   */
  @State()
  canNavigate: boolean;

  /**
   * Whether backwards navigation is enabled.
   */
  @State()
  canNavigatePrev: boolean;

  /**
   * Whether forward navigation is enabled.
   */
  @State()
  canNavigateNext: boolean;

  /**
   * tab focus index.
   */
  @State()
  tabFocus: number;

  @Element() host: HTMLZNavigationTabsElement;

  private tabsNav: HTMLElement;

  /**
   * Getter for the direction to check based on current orientation.
   */
  get direction(): string {
    return this.orientation == NavigationTabsOrientation.HORIZONTAL ? "Left" : "Top";
  }

  /**
   * Getter for the dimension to check based on current orientation.
   */
  get dimension(): string {
    return this.orientation == NavigationTabsOrientation.HORIZONTAL ? "Width" : "Height";
  }

  get tabs(): (HTMLZNavigationTabElement | HTMLZNavigationTabLinkElement)[] {
    return Array.from(this.host.children) as (HTMLZNavigationTabElement | HTMLZNavigationTabLinkElement)[];
  }

  /**
   * Set the `size` prop to all `z-navigation-tab` children.
   */
  @Watch("size")
  setChildrenSize(): void {
    this.tabs.forEach((tab) => {
      tab.size = this.size;
    });
  }

  /**
   * Set the `orientation` prop to all `z-navigation-tab` children.
   */
  @Watch("orientation")
  setChildrenOrientation(): void {
    this.tabs.forEach((tab) => {
      tab.orientation = this.orientation;
    });
  }

  /**
   * Check if the navigation buttons are needed on window resize.
   */
  @Listen("resize", {target: "window", passive: true})
  checkScrollVisible(): void {
    if (!this.tabsNav) {
      return;
    }

    this.canNavigate = this.tabsNav[`scroll${this.dimension}`] > this.tabsNav[`client${this.dimension}`];
  }

  /**
   * Check if navigation buttons can be enabled for each direction.
   */
  @Watch("canNavigate")
  checkScrollEnabled(): void {
    if (!this.tabsNav) {
      return;
    }

    this.canNavigateNext =
      this.tabsNav[`scroll${this.direction}`] + this.tabsNav[`client${this.dimension}`] <
      this.tabsNav[`scroll${this.dimension}`];
    this.canNavigatePrev = this.tabsNav[`scroll${this.direction}`] > 0;
  }

  /**
   * Listen for child tab selection.
   * Deselect all other previously selected tabs,
   * then scroll to the new selected tab and center it.
   * @param {CustomEvent} event `selected` event triggered by a child tab
   */
  @Listen("selected")
  onTabSelected(event: CustomEvent): void {
    const selectedTab = event.target;
    this.tabs.forEach((tab, i) => {
      if (tab !== selectedTab) {
        tab.selected = undefined;
      } else {
        this.tabFocus = i;
      }
    });
  }

  /**
   * Scroll the navigation bar half of its size backward.
   */
  private navigateBackwards(): void {
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]: 0 - this.tabsNav[`client${this.dimension}`] / 2,
      behavior: "smooth",
    });
  }

  /**
   * Scroll the navigation bar half of its size forward.
   */
  private navigateForward(): void {
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]:
        this.tabsNav[`scroll${this.direction}`] + this.tabsNav[`client${this.dimension}`] / 2,
      behavior: "smooth",
    });
  }

  /**
   * Move focus through tabs using keyboard arrows.
   * When `TAB` is pressed, focus the currently selected tab, if any.
   */
  @Listen("keydown")
  private navigateThroughTabs(e: KeyboardEvent): void | boolean {
    const tabs = this.tabs;
    if (e.key === KeyboardCode.TAB) {
      tabs.forEach((tab, i) => {
        if (tab.selected && tabs.some((tab) => tab === e.target)) {
          this.tabFocus = i;
        }
      });
      (tabs[this.tabFocus].children[0] as HTMLElement).tabIndex = 0;
      (tabs[this.tabFocus].children[0] as HTMLElement).focus();

      return;
    }

    if (!this.isArrowNavigation(e)) {
      return true;
    }

    e.preventDefault();
    (tabs[this.tabFocus].children[0] as HTMLElement).tabIndex = -1;
    // Move forward
    if (
      (e.key === NavigationTabsKeyboardEvents.RIGHT && this.orientation == NavigationTabsOrientation.HORIZONTAL) ||
      (e.key === NavigationTabsKeyboardEvents.DOWN && this.orientation == NavigationTabsOrientation.VERTICAL)
    ) {
      this.tabFocus++;
      if (this.tabFocus >= tabs.length) {
        this.tabFocus = 0;
      }
      // Move backward
    } else if (
      (e.key === NavigationTabsKeyboardEvents.LEFT && this.orientation == NavigationTabsOrientation.HORIZONTAL) ||
      (e.key === NavigationTabsKeyboardEvents.UP && this.orientation == NavigationTabsOrientation.VERTICAL)
    ) {
      this.tabFocus--;
      if (this.tabFocus < 0) {
        this.tabFocus = tabs.length - 1;
      }
    }
    // ignore disabled tabs
    if (tabs[this.tabFocus].disabled) {
      this.navigateThroughTabs(e);
    } else {
      (tabs[this.tabFocus].children[0] as HTMLElement).tabIndex = 0;
      (tabs[this.tabFocus].children[0] as HTMLElement).focus();
    }
  }

  /**
   * Check if a keyboard event was triggered by an arrow key.
   */
  private isArrowNavigation(e: KeyboardEvent): boolean {
    return Object.values(NavigationTabsKeyboardEvents).includes(e.key as NavigationTabsKeyboardEvents);
  }

  componentDidRender(): void {
    this.setChildrenSize();
    this.setChildrenOrientation();
    this.checkScrollVisible();

    if (this.tabFocus === undefined) {
      const tabActive = this.tabs.findIndex((tab) => tab.ariaSelected === "true");
      this.tabFocus = tabActive >= 0 ? tabActive : 0;
      const tabChild = this.tabs[this.tabFocus].children[0] as HTMLElement;
      if (tabChild) {
        tabChild.tabIndex = 0;
      }
    }
  }

  render(): HTMLZNavigationTabsElement {
    return (
      <Host
        class={{
          "interactive-2": this.size === NavigationTabsSize.SMALL,
          "interactive-1": this.size !== NavigationTabsSize.SMALL,
        }}
        scrollable={this.canNavigate}
      >
        {this.canNavigate && (
          <button
            class="navigation-button"
            onClick={this.navigateBackwards.bind(this)}
            tabindex="-1"
            disabled={!this.canNavigatePrev}
            aria-label="Mostra elementi precedenti"
          >
            <z-icon
              name={this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-left" : "chevron-up"}
              width={16}
              height={16}
            />
          </button>
        )}

        <nav
          role="tablist"
          aria-label={this.ariaLabel}
          ref={(el) => (this.tabsNav = el ?? this.tabsNav)}
          onScroll={this.checkScrollEnabled.bind(this)}
          aria-orientation={this.orientation}
        >
          <slot></slot>
        </nav>

        {this.canNavigate && (
          <button
            class="navigation-button"
            onClick={this.navigateForward.bind(this)}
            onKeyDown={(e: KeyboardEvent) => {
              this.navigateThroughTabs(e);
            }}
            tabindex="-1"
            disabled={!this.canNavigateNext}
            aria-label="Mostra elementi successivi"
          >
            <z-icon
              name={this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-right" : "chevron-down"}
              width={16}
              height={16}
            />
          </button>
        )}
      </Host>
    );
  }
}
