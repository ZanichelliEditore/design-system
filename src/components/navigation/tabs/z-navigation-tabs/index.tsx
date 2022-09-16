import {Component, Prop, h, Listen, Element, State, Watch, Host} from "@stencil/core";
import {
  NavigationTabsSize,
  NavigationTabsSizes,
  NavigationTabsOrientation,
  NavigationTabsOrientations,
} from "../../../../beans";

/**
 * Navigation tabs component.
 * @slot - Main slot. Use `z-navigation-tab` or `z-navigation-tab-link` components as children.
 */
@Component({
  tag: "z-navigation-tabs",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZNavigationTabs {
  /**
   * Navigation tabs orientation.
   */
  @Prop({reflect: true}) orientation?: NavigationTabsOrientation = NavigationTabsOrientations.horizontal;

  /**
   * Navigation tabs size.
   */
  @Prop({reflect: true}) size?: NavigationTabsSize = NavigationTabsSizes.big;

  /**
   * Whether to show navigation buttons.
   */
  @State() canNavigate: boolean;

  /**
   * Whether backwards navigation is enabled.
   */
  @State() canNavigatePrev: boolean;

  /**
   * Whether forward navigation is enabled.
   */
  @State() canNavigateNext: boolean;

  @Element() host: HTMLElement;

  private tabsNav: HTMLElement;

  /**
   * Getter for the direction to check based on current orientation.
   */
  get direction(): string {
    return this.orientation == NavigationTabsOrientations.horizontal ? "Left" : "Top";
  }

  /**
   * Getter for the dimension to check based on current orientation.
   */
  get dimension(): string {
    return this.orientation == NavigationTabsOrientations.horizontal ? "Width" : "Height";
  }

  /**
   * Set the `size` prop to all `z-navigation-tab` children.
   */
  @Watch("size")
  setChildrenSize(): void {
    const children = Array.from(this.host.children);
    children.forEach((child) => {
      child.setAttribute("size", this.size);
    });
  }

  /**
   * Set the `orientation` prop to all `z-navigation-tab` children.
   */
  @Watch("orientation")
  setChildrenOrientation(): void {
    const children = Array.from(this.host.children);
    children.forEach((child) => {
      child.setAttribute("orientation", this.orientation);
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
    const tab = event.target;
    const children = Array.from(this.host.children);
    children.forEach((child) => {
      if (child !== tab) {
        child.removeAttribute("selected");
      }
    });
  }

  /**
   * Scroll the navigation bar half of its size backward.
   */
  navigateBackwards(): void {
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]: 0 - this.tabsNav[`client${this.dimension}`] / 2,
      behavior: "smooth",
    });
  }

  /**
   * Scroll the navigation bar half of its size forward.
   */
  navigateForward(): void {
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]:
        this.tabsNav[`scroll${this.direction}`] + this.tabsNav[`client${this.dimension}`] / 2,
      behavior: "smooth",
    });
  }

  componentDidRender() {
    this.setChildrenSize();
    this.setChildrenOrientation();
    this.checkScrollVisible();
  }

  render() {
    return (
      <Host
        class={{
          "interactive-2": this.size === NavigationTabsSizes.small,
          "interactive-1": this.size !== NavigationTabsSizes.small,
        }}
        scrollable={this.canNavigate}
      >
        {this.canNavigate && (
          <button
            class="navigation-button"
            onClick={this.navigateBackwards.bind(this)}
            tabindex="-1"
            disabled={!this.canNavigatePrev}
          >
            <z-icon
              name={this.orientation == NavigationTabsOrientations.horizontal ? "chevron-left" : "chevron-up"}
              width={16}
              height={16}
            />
          </button>
        )}

        <nav
          role="tablist"
          ref={(el) => (this.tabsNav = el ?? this.tabsNav)}
          onScroll={this.checkScrollEnabled.bind(this)}
        >
          <slot></slot>
        </nav>

        {this.canNavigate && (
          <button
            class="navigation-button"
            onClick={this.navigateForward.bind(this)}
            tabindex="-1"
            disabled={!this.canNavigateNext}
          >
            <z-icon
              name={this.orientation == NavigationTabsOrientations.horizontal ? "chevron-right" : "chevron-down"}
              width={16}
              height={16}
            />
          </button>
        )}
      </Host>
    );
  }
}
