'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-e8ce94a1.js');

const stylesCss = ":host{position:relative;z-index:0;display:flex;overflow:hidden;flex-direction:row;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,:host *,::slotted(*){box-sizing:border-box}::-webkit-scrollbar{display:none}.navigation-button{position:absolute;z-index:1;display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:0;background:var(--color-white);border-radius:var(--border-no-radius);box-shadow:0 0 4px 1px (--shadow-color-base);cursor:pointer;fill:var(--color-primary01);outline:none}.navigation-button:focus:focus-visible{box-shadow:inset 0 0 4px 3px var(--color-highlight);fill:var(--color-primary01)}.navigation-button:disabled{display:none}nav{display:flex;overflow:auto;align-items:center;justify-content:flex-start;scroll-behavior:smooth;scrollbar-width:none}:host([orientation=\"horizontal\"]) nav{width:100%}:host([orientation=\"horizontal\"]) .navigation-button{top:0;width:calc(var(--space-unit) * 4);height:100%}:host([orientation=\"horizontal\"]) .navigation-button:first-child{left:0}:host([orientation=\"horizontal\"]) .navigation-button:last-child{right:0}:host([orientation=\"vertical\"]){width:fit-content;flex-direction:column}:host([orientation=\"vertical\"]) nav{height:100%;flex-direction:column;align-items:stretch}:host([orientation=\"vertical\"]) .navigation-button{left:0;width:100%;height:calc(var(--space-unit) * 4)}:host([orientation=\"vertical\"]) .navigation-button:first-child{top:0}:host([orientation=\"vertical\"]) .navigation-button:last-child{bottom:0}:host([size=\"small\"][orientation=\"vertical\"]) .navigation-button{height:calc(var(--space-unit) * 4)}";

const ZNavigationTabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Navigation tabs orientation.
     */
    this.orientation = index$1.NavigationTabsOrientation.HORIZONTAL;
    /**
     * Navigation tabs size.
     */
    this.size = index$1.NavigationTabsSize.BIG;
  }
  /**
   * Getter for the direction to check based on current orientation.
   */
  get direction() {
    return this.orientation == index$1.NavigationTabsOrientation.HORIZONTAL ? "Left" : "Top";
  }
  /**
   * Getter for the dimension to check based on current orientation.
   */
  get dimension() {
    return this.orientation == index$1.NavigationTabsOrientation.HORIZONTAL ? "Width" : "Height";
  }
  get tabs() {
    return Array.from(this.host.children);
  }
  /**
   * Set the `size` prop to all `z-navigation-tab` children.
   */
  setChildrenSize() {
    this.tabs.forEach((tab) => {
      tab.size = this.size;
    });
  }
  /**
   * Set the `orientation` prop to all `z-navigation-tab` children.
   */
  setChildrenOrientation() {
    this.tabs.forEach((tab) => {
      tab.orientation = this.orientation;
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
  onTabSelected(event) {
    const selectedTab = event.target;
    this.tabs.forEach((tab, i) => {
      if (tab !== selectedTab) {
        tab.selected = undefined;
      }
      else {
        this.tabFocus = i;
      }
    });
  }
  /**
   * Scroll the navigation bar half of its size backward.
   */
  navigateBackwards() {
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]: 0 - this.tabsNav[`client${this.dimension}`] / 2,
      behavior: "smooth",
    });
  }
  /**
   * Scroll the navigation bar half of its size forward.
   */
  navigateForward() {
    this.tabsNav.scrollBy({
      [this.direction.toLowerCase()]: this.tabsNav[`scroll${this.direction}`] + this.tabsNav[`client${this.dimension}`] / 2,
      behavior: "smooth",
    });
  }
  /**
   * Move focus through tabs using keyboard arrows.
   * When `TAB` is pressed, focus the currently selected tab, if any.
   */
  navigateThroughTabs(e) {
    const tabs = this.tabs;
    if (e.key === index$1.KeyboardCode.TAB) {
      tabs.forEach((tab, i) => {
        if (tab.selected && tabs.some((tab) => tab === e.target)) {
          this.tabFocus = i;
        }
      });
      tabs[this.tabFocus].children[0].tabIndex = 0;
      tabs[this.tabFocus].children[0].focus();
      return;
    }
    if (!this.isArrowNavigation(e)) {
      return true;
    }
    e.preventDefault();
    tabs[this.tabFocus].children[0].tabIndex = -1;
    // Move forward
    if ((e.key === index$1.NavigationTabsKeyboardEvents.RIGHT && this.orientation == index$1.NavigationTabsOrientation.HORIZONTAL) ||
      (e.key === index$1.NavigationTabsKeyboardEvents.DOWN && this.orientation == index$1.NavigationTabsOrientation.VERTICAL)) {
      this.tabFocus++;
      if (this.tabFocus >= tabs.length) {
        this.tabFocus = 0;
      }
      // Move backward
    }
    else if ((e.key === index$1.NavigationTabsKeyboardEvents.LEFT && this.orientation == index$1.NavigationTabsOrientation.HORIZONTAL) ||
      (e.key === index$1.NavigationTabsKeyboardEvents.UP && this.orientation == index$1.NavigationTabsOrientation.VERTICAL)) {
      this.tabFocus--;
      if (this.tabFocus < 0) {
        this.tabFocus = tabs.length - 1;
      }
    }
    // ignore disabled tabs
    if (tabs[this.tabFocus].disabled) {
      this.navigateThroughTabs(e);
    }
    else {
      tabs[this.tabFocus].children[0].tabIndex = 0;
      tabs[this.tabFocus].children[0].focus();
    }
  }
  /**
   * Check if a keyboard event was triggered by an arrow key.
   */
  isArrowNavigation(e) {
    return Object.values(index$1.NavigationTabsKeyboardEvents).includes(e.key);
  }
  componentDidRender() {
    this.setChildrenSize();
    this.setChildrenOrientation();
    this.checkScrollVisible();
    if (!this.tabFocus) {
      this.tabFocus = 0;
      const tabChild = this.tabs[this.tabFocus].children[0];
      if (tabChild) {
        tabChild.tabIndex = 0;
      }
    }
  }
  render() {
    return (index.h(index.Host, { class: {
        "interactive-2": this.size === index$1.NavigationTabsSize.SMALL,
        "interactive-1": this.size !== index$1.NavigationTabsSize.SMALL,
      }, scrollable: this.canNavigate }, this.canNavigate && (index.h("button", { class: "navigation-button", onClick: this.navigateBackwards.bind(this), tabindex: "-1", disabled: !this.canNavigatePrev }, index.h("z-icon", { name: this.orientation === index$1.NavigationTabsOrientation.HORIZONTAL ? "chevron-left" : "chevron-up", width: 16, height: 16 }))), index.h("nav", { role: "tablist", "aria-label": this.ariaLabel, ref: (el) => (this.tabsNav = el !== null && el !== void 0 ? el : this.tabsNav), onScroll: this.checkScrollEnabled.bind(this), "aria-orientation": this.orientation }, index.h("slot", null)), this.canNavigate && (index.h("button", { class: "navigation-button", onClick: this.navigateForward.bind(this), onKeyDown: (e) => {
        this.navigateThroughTabs(e);
      }, tabindex: "-1", disabled: !this.canNavigateNext }, index.h("z-icon", { name: this.orientation === index$1.NavigationTabsOrientation.HORIZONTAL ? "chevron-right" : "chevron-down", width: 16, height: 16 })))));
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
