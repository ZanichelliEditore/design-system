import { h, Host } from "@stencil/core";
import { NavigationTabsSize, NavigationTabsOrientation, NavigationTabsKeyboardEvents, KeyboardCode, } from "../../../../beans";
/**
 * Navigation tabs component.
 * @slot - Main slot. Use `z-navigation-tab` or `z-navigation-tab-link` components as children.
 */
export class ZNavigationTabs {
  constructor() {
    /**
     * Navigation tabs orientation.
     */
    this.orientation = NavigationTabsOrientation.HORIZONTAL;
    /**
     * Navigation tabs size.
     */
    this.size = NavigationTabsSize.BIG;
  }
  /**
   * Getter for the direction to check based on current orientation.
   */
  get direction() {
    return this.orientation == NavigationTabsOrientation.HORIZONTAL ? "Left" : "Top";
  }
  /**
   * Getter for the dimension to check based on current orientation.
   */
  get dimension() {
    return this.orientation == NavigationTabsOrientation.HORIZONTAL ? "Width" : "Height";
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
    if (e.key === KeyboardCode.TAB) {
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
    if ((e.key === NavigationTabsKeyboardEvents.RIGHT && this.orientation == NavigationTabsOrientation.HORIZONTAL) ||
      (e.key === NavigationTabsKeyboardEvents.DOWN && this.orientation == NavigationTabsOrientation.VERTICAL)) {
      this.tabFocus++;
      if (this.tabFocus >= children.length) {
        this.tabFocus = 0;
      }
      // Move backward
    }
    else if ((e.key === NavigationTabsKeyboardEvents.LEFT && this.orientation == NavigationTabsOrientation.HORIZONTAL) ||
      (e.key === NavigationTabsKeyboardEvents.UP && this.orientation == NavigationTabsOrientation.VERTICAL)) {
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
    return !!Object.keys(NavigationTabsKeyboardEvents).find((key) => NavigationTabsKeyboardEvents[key] === e.key);
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
    return (h(Host, { class: {
        "interactive-2": this.size === NavigationTabsSize.SMALL,
        "interactive-1": this.size !== NavigationTabsSize.SMALL,
      }, scrollable: this.canNavigate }, this.canNavigate && (h("button", { class: "navigation-button", onClick: this.navigateBackwards.bind(this), tabindex: "-1", disabled: !this.canNavigatePrev }, h("z-icon", { name: this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-left" : "chevron-up", width: 16, height: 16 }))), h("nav", { role: "tablist", "aria-label": this.ariaLabel, ref: (el) => (this.tabsNav = el !== null && el !== void 0 ? el : this.tabsNav), onScroll: this.checkScrollEnabled.bind(this) }, h("slot", null)), this.canNavigate && (h("button", { class: "navigation-button", onClick: this.navigateForward.bind(this), onKeyDown: (e) => {
        this.navigateThroughTabs(e);
      }, tabindex: "-1", disabled: !this.canNavigateNext }, h("z-icon", { name: this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-right" : "chevron-down", width: 16, height: 16 })))));
  }
  static get is() { return "z-navigation-tabs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["styles.css"]
    };
  }
  static get properties() {
    return {
      "ariaLabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set aria-label attribute in tablist role."
        },
        "attribute": "aria-label",
        "reflect": false
      },
      "orientation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "NavigationTabsOrientation",
          "resolved": "NavigationTabsOrientation.HORIZONTAL | NavigationTabsOrientation.VERTICAL",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Navigation tabs orientation."
        },
        "attribute": "orientation",
        "reflect": true,
        "defaultValue": "NavigationTabsOrientation.HORIZONTAL"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "NavigationTabsSize",
          "resolved": "NavigationTabsSize.BIG | NavigationTabsSize.SMALL",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Navigation tabs size."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "NavigationTabsSize.BIG"
      }
    };
  }
  static get states() {
    return {
      "canNavigate": {},
      "canNavigatePrev": {},
      "canNavigateNext": {},
      "tabFocus": {}
    };
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "size",
        "methodName": "setChildrenSize"
      }, {
        "propName": "orientation",
        "methodName": "setChildrenOrientation"
      }, {
        "propName": "canNavigate",
        "methodName": "checkScrollEnabled"
      }];
  }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "checkScrollVisible",
        "target": "window",
        "capture": false,
        "passive": true
      }, {
        "name": "selected",
        "method": "onTabSelected",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "navigateThroughTabs",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
