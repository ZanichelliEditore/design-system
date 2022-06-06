'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-155b2ec5.js');

const stylesCss = ":host{--safe-scroll-area:4px;--negative-safe-scroll-area:calc(-1 * var(--safe-scroll-area));position:relative;display:flex;flex-direction:row;z-index:0;margin:var(--negative-safe-scroll-area);padding:var(--safe-scroll-area);font-family:var(--font-family-sans);font-weight:var(--font-rg);overflow:hidden}:host,:host *,::slotted(*){box-sizing:border-box}::-webkit-scrollbar{display:none}.navigation-button{position:absolute;display:flex;align-items:center;justify-content:center;margin:0;padding:0;background:var(--color-white);border:none;outline:none;fill:var(--color-primary01);border-radius:var(--border-no-radius);cursor:pointer;z-index:1}.navigation-button:focus{fill:var(--color-primary01);box-shadow:var(--shadow-focus-primary)}.navigation-button:disabled{display:none}nav{display:flex;align-items:center;justify-content:flex-start;overflow:auto;margin:var(--negative-safe-scroll-area);padding:var(--safe-scroll-area);scroll-padding:var(--safe-scroll-area);scrollbar-width:none}:host([orientation='horizontal']) nav{width:100%}:host([orientation='horizontal']) .navigation-button{top:0;height:100%;width:calc((var(--space-unit) * 4) + var(--safe-scroll-area))}:host([orientation='horizontal']) .navigation-button:first-child{left:0;padding-left:var(--safe-scroll-area);box-shadow:5px 0px var(--safe-scroll-area) var(--negative-safe-scroll-area) rgba(66, 69, 72, 0.40)}:host([orientation='horizontal']) .navigation-button:last-child{right:0;padding-right:4px;box-shadow:-5px 0px var(--safe-scroll-area) var(--negative-safe-scroll-area) rgba(66, 69, 72, 0.40)}:host([orientation='vertical']){flex-direction:column;width:fit-content}:host([orientation='vertical']) nav{flex-direction:column;align-items:stretch;height:100%}:host([orientation='vertical']) .navigation-button{left:0;width:100%;height:calc((var(--space-unit) * 4) + var(--safe-scroll-area))}:host([orientation='vertical']) .navigation-button:first-child{top:0;padding-top:var(--safe-scroll-area);box-shadow:0px 5px var(--safe-scroll-area) var(--negative-safe-scroll-area) rgba(66, 69, 72, 0.40)}:host([orientation='vertical']) .navigation-button:last-child{bottom:0;padding-bottom:var(--safe-scroll-area);box-shadow:0px -5px var(--safe-scroll-area) var(--negative-safe-scroll-area) rgba(66, 69, 72, 0.40)}:host([size='small'][orientation='vertical']) .navigation-button{height:calc(var(--space-unit) * 4)}";

const ZNavigationTabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Navigation tabs orientation.
     */
    this.orientation = index$1.NavigationTabsOrientations.horizontal;
    /**
     * Navigation tabs size.
     */
    this.size = index$1.NavigationTabsSizes.big;
  }
  /**
   * Getter for the direction to check based on current orientation.
   */
  get direction() {
    return this.orientation == index$1.NavigationTabsOrientations.horizontal ? 'Left' : 'Top';
  }
  /**
   * Getter for the dimension to check based on current orientation.
   */
  get dimension() {
    return this.orientation == index$1.NavigationTabsOrientations.horizontal ? 'Width' : 'Height';
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
    const safeScrollAreaSize = parseFloat(getComputedStyle(this.host).getPropertyValue('--safe-scroll-area'));
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]: 0 -
        (this.tabsNav[`client${this.dimension}`] / 2) -
        safeScrollAreaSize,
      behavior: 'smooth',
    });
  }
  /**
   * Scroll the navigation bar half of its size forward.
   */
  navigateForward() {
    const safeScrollAreaSize = parseFloat(getComputedStyle(this.host).getPropertyValue('--safe-scroll-area'));
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]: this.tabsNav[`scroll${this.direction}`] +
        (this.tabsNav[`client${this.dimension}`] / 2) +
        safeScrollAreaSize,
      behavior: 'smooth',
    });
  }
  componentDidRender() {
    this.setChildrenSize();
    this.setChildrenOrientation();
    this.checkScrollVisible();
  }
  render() {
    return index.h(index.Host, { class: {
        'interactive-2': this.size === index$1.NavigationTabsSizes.small,
        'interactive-1': this.size !== index$1.NavigationTabsSizes.small
      }, scrollable: this.canNavigate }, this.canNavigate && index.h("button", { class: "navigation-button", onClick: this.navigateBackwards.bind(this), tabindex: "-1", disabled: !this.canNavigatePrev }, index.h("z-icon", { name: this.orientation == index$1.NavigationTabsOrientations.horizontal ? 'chevron-left' : 'chevron-up', width: 16, height: 16 })), index.h("nav", { role: "tablist", ref: (el) => this.tabsNav = el !== null && el !== void 0 ? el : this.tabsNav, onScroll: this.checkScrollEnabled.bind(this) }, index.h("slot", null)), this.canNavigate && index.h("button", { class: "navigation-button", onClick: this.navigateForward.bind(this), tabindex: "-1", disabled: !this.canNavigateNext }, index.h("z-icon", { name: this.orientation == index$1.NavigationTabsOrientations.horizontal ? 'chevron-right' : 'chevron-down', width: 16, height: 16 })));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "size": ["setChildrenSize"],
    "orientation": ["setChildrenOrientation"],
    "canNavigate": ["checkScrollEnabled"]
  }; }
};
ZNavigationTabs.style = stylesCss;

exports.z_navigation_tabs = ZNavigationTabs;
