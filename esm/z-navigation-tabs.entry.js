import { r as registerInstance, h, H as Host, g as getElement } from './index-90e18641.js';
import { N as NavigationTabsOrientations, a as NavigationTabsSizes } from './index-3ee81524.js';

const stylesCss = ":host{position:relative;display:flex;flex-direction:row;z-index:0;font-family:var(--font-family-sans);font-weight:var(--font-rg);overflow:hidden}:host,:host *,::slotted(*){box-sizing:border-box}::-webkit-scrollbar{display:none}.navigation-button{position:absolute;display:flex;align-items:center;justify-content:center;margin:0;padding:0;background:var(--color-white);border:none;outline:none;fill:var(--color-primary01);border-radius:var(--border-no-radius);cursor:pointer;z-index:1;box-shadow:0px 0px 4px 1px rgb(66, 69, 72, 0.40)}.navigation-button:focus:focus-visible{fill:var(--color-primary01);box-shadow:inset var(--shadow-focus-primary)}.navigation-button:disabled{display:none}nav{display:flex;align-items:center;justify-content:flex-start;overflow:auto;scroll-behavior:smooth;scrollbar-width:none}:host([orientation='horizontal']) nav{width:100%}:host([orientation='horizontal']) .navigation-button{top:0;height:100%;width:calc(var(--space-unit) * 4)}:host([orientation='horizontal']) .navigation-button:first-child{left:0}:host([orientation='horizontal']) .navigation-button:last-child{right:0}:host([orientation='vertical']){flex-direction:column;width:fit-content}:host([orientation='vertical']) nav{flex-direction:column;align-items:stretch;height:100%}:host([orientation='vertical']) .navigation-button{left:0;width:100%;height:calc(var(--space-unit) * 4)}:host([orientation='vertical']) .navigation-button:first-child{top:0}:host([orientation='vertical']) .navigation-button:last-child{bottom:0}:host([size='small'][orientation='vertical']) .navigation-button{height:calc(var(--space-unit) * 4)}";

const ZNavigationTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Navigation tabs orientation.
     */
    this.orientation = NavigationTabsOrientations.horizontal;
    /**
     * Navigation tabs size.
     */
    this.size = NavigationTabsSizes.big;
  }
  /**
   * Getter for the direction to check based on current orientation.
   */
  get direction() {
    return this.orientation == NavigationTabsOrientations.horizontal ? 'Left' : 'Top';
  }
  /**
   * Getter for the dimension to check based on current orientation.
   */
  get dimension() {
    return this.orientation == NavigationTabsOrientations.horizontal ? 'Width' : 'Height';
  }
  /**
   * Set the `size` prop to all `z-navigation-tab` children.
   */
  setChildrenSize() {
    const children = Array.from(this.host.children);
    children.forEach((child) => {
      child.setAttribute('size', this.size);
    });
  }
  /**
   * Set the `orientation` prop to all `z-navigation-tab` children.
   */
  setChildrenOrientation() {
    const children = Array.from(this.host.children);
    children.forEach((child) => {
      child.setAttribute('orientation', this.orientation);
    });
  }
  /**
   * Check if the navigation buttons are needed on window resize.
   */
  checkScrollVisible() {
    if (!this.tabsNav) {
      return;
    }
    this.canNavigate = this.tabsNav[`scroll${this.dimension}`] > this.tabsNav[`client${this.dimension}`];
  }
  /**
   * Check if navigation buttons can be enabled for each direction.
   */
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
   * Deselect all other previously selected tabs,
   * then scroll to the new selected tab and center it.
   * @param {CustomEvent} event `selected` event triggered by a child tab
   */
  onTabSelected(event) {
    const tab = event.target;
    const children = Array.from(this.host.children);
    children.forEach((child) => {
      if (child !== tab) {
        child.removeAttribute('selected');
      }
    });
  }
  /**
   * Scroll the navigation bar half of its size backward.
   */
  navigateBackwards() {
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]: 0 - (this.tabsNav[`client${this.dimension}`] / 2),
      behavior: 'smooth',
    });
  }
  /**
   * Scroll the navigation bar half of its size forward.
   */
  navigateForward() {
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]: this.tabsNav[`scroll${this.direction}`] +
        (this.tabsNav[`client${this.dimension}`] / 2),
      behavior: 'smooth',
    });
  }
  componentDidRender() {
    this.setChildrenSize();
    this.setChildrenOrientation();
    this.checkScrollVisible();
  }
  render() {
    return h(Host, { class: {
        'interactive-2': this.size === NavigationTabsSizes.small,
        'interactive-1': this.size !== NavigationTabsSizes.small
      }, scrollable: this.canNavigate }, this.canNavigate && h("button", { class: "navigation-button", onClick: this.navigateBackwards.bind(this), tabindex: "-1", disabled: !this.canNavigatePrev }, h("z-icon", { name: this.orientation == NavigationTabsOrientations.horizontal ? 'chevron-left' : 'chevron-up', width: 16, height: 16 })), h("nav", { role: "tablist", ref: (el) => this.tabsNav = el !== null && el !== void 0 ? el : this.tabsNav, onScroll: this.checkScrollEnabled.bind(this) }, h("slot", null)), this.canNavigate && h("button", { class: "navigation-button", onClick: this.navigateForward.bind(this), tabindex: "-1", disabled: !this.canNavigateNext }, h("z-icon", { name: this.orientation == NavigationTabsOrientations.horizontal ? 'chevron-right' : 'chevron-down', width: 16, height: 16 })));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "size": ["setChildrenSize"],
    "orientation": ["setChildrenOrientation"],
    "canNavigate": ["checkScrollEnabled"]
  }; }
};
ZNavigationTabs.style = stylesCss;

export { ZNavigationTabs as z_navigation_tabs };
