import { Component, Prop, h, Listen, Element, State, Watch, Host } from '@stencil/core';
import { NavigationTabsSizes, NavigationTabsOrientations } from '../../../../beans';
/**
 * Navigation tabs component.
 * @slot - Main slot. Use `z-navigation-tab` or `z-navigation-tab-link` components as children.
 */
export class ZNavigationTabs {
  constructor() {
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
      }, scrollable: this.canNavigate },
      this.canNavigate && h("button", { class: "navigation-button", onClick: this.navigateBackwards.bind(this), tabindex: "-1", disabled: !this.canNavigatePrev },
        h("z-icon", { name: this.orientation == NavigationTabsOrientations.horizontal ? 'chevron-left' : 'chevron-up', width: 16, height: 16 })),
      h("nav", { role: "tablist", ref: (el) => this.tabsNav = el !== null && el !== void 0 ? el : this.tabsNav, onScroll: this.checkScrollEnabled.bind(this) },
        h("slot", null)),
      this.canNavigate && h("button", { class: "navigation-button", onClick: this.navigateForward.bind(this), tabindex: "-1", disabled: !this.canNavigateNext },
        h("z-icon", { name: this.orientation == NavigationTabsOrientations.horizontal ? 'chevron-right' : 'chevron-down', width: 16, height: 16 })));
  }
  static get is() { return "z-navigation-tabs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get styleUrls() { return {
    "$": ["styles.css"]
  }; }
  static get properties() { return {
    "orientation": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "NavigationTabsOrientation",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {
          "NavigationTabsOrientation": {
            "location": "import",
            "path": "../../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Navigation tabs orientation."
      },
      "attribute": "orientation",
      "reflect": true,
      "defaultValue": "NavigationTabsOrientations.horizontal"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "NavigationTabsSize",
        "resolved": "\"big\" | \"small\"",
        "references": {
          "NavigationTabsSize": {
            "location": "import",
            "path": "../../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Navigation tabs size."
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "NavigationTabsSizes.big"
    }
  }; }
  static get states() { return {
    "canNavigate": {},
    "canNavigatePrev": {},
    "canNavigateNext": {}
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "size",
      "methodName": "setChildrenSize"
    }, {
      "propName": "orientation",
      "methodName": "setChildrenOrientation"
    }, {
      "propName": "canNavigate",
      "methodName": "checkScrollEnabled"
    }]; }
  static get listeners() { return [{
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
    }]; }
}
