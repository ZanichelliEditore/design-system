'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-2dfdb7e2.js');

const stylesCss = ":host{position:relative;z-index:0;display:flex;overflow:hidden;flex-direction:row;font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,:host *,::slotted(*){box-sizing:border-box}::-webkit-scrollbar{display:none}.navigation-button{position:absolute;z-index:1;display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:0;background:var(--color-white);border-radius:var(--border-no-radius);box-shadow:0 0 4px 1px rgb(66 69 72 / 40%);cursor:pointer;fill:var(--color-primary01);outline:none}.navigation-button:focus:focus-visible{box-shadow:inset var(--shadow-focus-primary);fill:var(--color-primary01)}.navigation-button:disabled{display:none}nav{display:flex;overflow:auto;align-items:center;justify-content:flex-start;scroll-behavior:smooth;scrollbar-width:none}:host([orientation=\"horizontal\"]) nav{width:100%}:host([orientation=\"horizontal\"]) .navigation-button{top:0;width:calc(var(--space-unit) * 4);height:100%}:host([orientation=\"horizontal\"]) .navigation-button:first-child{left:0}:host([orientation=\"horizontal\"]) .navigation-button:last-child{right:0}:host([orientation=\"vertical\"]){width:fit-content;flex-direction:column}:host([orientation=\"vertical\"]) nav{height:100%;flex-direction:column;align-items:stretch}:host([orientation=\"vertical\"]) .navigation-button{left:0;width:100%;height:calc(var(--space-unit) * 4)}:host([orientation=\"vertical\"]) .navigation-button:first-child{top:0}:host([orientation=\"vertical\"]) .navigation-button:last-child{bottom:0}:host([size=\"small\"][orientation=\"vertical\"]) .navigation-button{height:calc(var(--space-unit) * 4)}";

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
  /**
   * Set the `size` prop to all `z-navigation-tab` children.
   */
  setChildrenSize() {
    const children = Array.from(this.host.children);
    children.forEach((child) => {
      child.setAttribute("size", this.size);
    });
  }
  /**
   * Set the `orientation` prop to all `z-navigation-tab` children.
   */
  setChildrenOrientation() {
    const children = Array.from(this.host.children);
    children.forEach((child) => {
      child.setAttribute("orientation", this.orientation);
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
    const tab = event.target;
    const children = Array.from(this.host.children);
    children.forEach((child, i) => {
      if (child !== tab) {
        child.removeAttribute("selected");
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
   * move focus though tabs using keyboad arrows.
   */
  navigateThroughTabs(e) {
    const children = Array.from(this.host.children);
    if (e.key === index$1.KeyboardCode.TAB) {
      children.forEach((child, i) => {
        var _a, _b;
        if (child.hasAttribute("selected") &&
          ((_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.offsetParent) === null || _b === void 0 ? void 0 : _b.nodeName) === "Z-NAVIGATION-TABS") {
          this.tabFocus = i;
        }
      });
      return;
    }
    if (!this.isArrowNavigation(e)) {
      return true;
    }
    e.preventDefault();
    children[this.tabFocus].querySelector('[role="tab"]').setAttribute("tabindex", "-1");
    // Move forward
    if ((e.key === index$1.NavigationTabsKeyboardEvents.RIGHT && this.orientation == index$1.NavigationTabsOrientation.HORIZONTAL) ||
      (e.key === index$1.NavigationTabsKeyboardEvents.DOWN && this.orientation == index$1.NavigationTabsOrientation.VERTICAL)) {
      this.tabFocus++;
      if (this.tabFocus >= children.length) {
        this.tabFocus = 0;
      }
      // Move backward
    }
    else if ((e.key === index$1.NavigationTabsKeyboardEvents.LEFT && this.orientation == index$1.NavigationTabsOrientation.HORIZONTAL) ||
      (e.key === index$1.NavigationTabsKeyboardEvents.UP && this.orientation == index$1.NavigationTabsOrientation.VERTICAL)) {
      this.tabFocus--;
      if (this.tabFocus < 0) {
        this.tabFocus = children.length - 1;
      }
    }
    //ignore disabled tabs
    if (children[this.tabFocus].querySelector('[role="tab"]').hasAttribute("disabled")) {
      this.navigateThroughTabs(e);
    }
    else {
      children[this.tabFocus].querySelector('[role="tab"]').setAttribute("tabindex", "0");
      children[this.tabFocus].querySelector('[role="tab"]').focus();
    }
  }
  /**
   * move focus though tabs using keyboad arrows.
   */
  isArrowNavigation(e) {
    return !!Object.keys(index$1.NavigationTabsKeyboardEvents).find((key) => index$1.NavigationTabsKeyboardEvents[key] === e.key);
  }
  setTabindex() {
    var _a;
    const children = Array.from(this.host.children);
    if (children.length > 0) {
      children.forEach((child, i) => {
        var _a;
        child.hasAttribute("aria-selected") && (this.tabFocus = i);
        (_a = child.querySelector('[role="tab"]')) === null || _a === void 0 ? void 0 : _a.setAttribute("tabindex", "-1");
      });
      (_a = children[this.tabFocus].querySelector('[role="tab"]')) === null || _a === void 0 ? void 0 : _a.setAttribute("tabindex", "0");
    }
  }
  componentWillLoad() {
    this.tabFocus = 0;
  }
  componentDidRender() {
    this.setChildrenSize();
    this.setChildrenOrientation();
    this.checkScrollVisible();
    this.setTabindex();
  }
  render() {
    return (index.h(index.Host, { class: {
        "interactive-2": this.size === index$1.NavigationTabsSize.SMALL,
        "interactive-1": this.size !== index$1.NavigationTabsSize.SMALL,
      }, scrollable: this.canNavigate }, this.canNavigate && (index.h("button", { class: "navigation-button", onClick: this.navigateBackwards.bind(this), tabindex: "-1", disabled: !this.canNavigatePrev }, index.h("z-icon", { name: this.orientation === index$1.NavigationTabsOrientation.HORIZONTAL ? "chevron-left" : "chevron-up", width: 16, height: 16 }))), index.h("nav", { role: "tablist", "aria-label": this.ariaLabel, ref: (el) => (this.tabsNav = el !== null && el !== void 0 ? el : this.tabsNav), onScroll: this.checkScrollEnabled.bind(this) }, index.h("slot", null)), this.canNavigate && (index.h("button", { class: "navigation-button", onClick: this.navigateForward.bind(this), onKeyDown: (e) => {
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
