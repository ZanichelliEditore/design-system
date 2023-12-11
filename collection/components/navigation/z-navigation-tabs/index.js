import { h, Host } from "@stencil/core";
import { NavigationTabsSize, NavigationTabsOrientation, NavigationTabsKeyboardEvents, KeyboardCode, } from "../../../beans";
/**
 * Navigation tabs component.
 * To select a specific tab programmatically, set the `aria-selected` attribute to `true` on the desired tab.
 * @slot - Main slot. Use `<button>` or `<a>` tags as children.
 * @cssprop --z-navigation-tabs-nav-buttons-bg - Navigation buttons background color.
 * @cssprop --z-navigation-tabs-nav-buttons-fg - Navigation buttons foreground color.
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
    /**
     * Index of the selected tab.
     */
    this.selectedTab = undefined;
    /**
     * Index of the last tab that held focus.
     */
    this.focusedTab = 0;
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
  get tabs() {
    return Array.from(this.nav.children);
  }
  /**
   * Scroll into view to center the tab.
   */
  scrollToTab(tabElement) {
    const scrollOptions = (this.orientation === NavigationTabsOrientation.HORIZONTAL
      ? { block: "nearest", inline: "center" }
      : { block: "center", inline: "nearest" });
    tabElement.scrollIntoView(Object.assign({ behavior: "smooth" }, scrollOptions));
  }
  /**
   * Scroll the navigation bar half of its size backward.
   */
  navigateBackwards() {
    this.nav.scrollBy({
      [this.direction.toLowerCase()]: 0 - this.nav[`client${this.dimension}`] / 2,
      behavior: "smooth",
    });
  }
  /**
   * Scroll the navigation bar half of its size forward.
   */
  navigateForward() {
    this.nav.scrollBy({
      [this.direction.toLowerCase()]: this.nav[`scroll${this.direction}`] + this.nav[`client${this.dimension}`] / 2,
      behavior: "smooth",
    });
  }
  /**
   * Check if a keyboard event was triggered by an arrow key.
   */
  isArrowNavigation(e) {
    return Object.values(NavigationTabsKeyboardEvents).includes(e.key);
  }
  /**
   * Check if navigation buttons can be enabled for each direction.
   */
  checkScrollEnabled() {
    if (!this.nav) {
      return;
    }
    this.canNavigateNext =
      this.nav[`scroll${this.direction}`] + this.nav[`client${this.dimension}`] < this.nav[`scroll${this.dimension}`];
    this.canNavigatePrev = this.nav[`scroll${this.direction}`] > 0;
  }
  /**
   * When the selected tab changes, update the `aria-selected` attribute on each tab and scroll to the selected tab.
   */
  onTabSelected() {
    this.tabs.forEach((tab, i) => {
      const zicon = tab.querySelector("z-icon");
      const strokeIcon = zicon === null || zicon === void 0 ? void 0 : zicon.getAttribute("name").replace("-filled", "");
      if (i !== this.selectedTab) {
        tab.setAttribute("aria-selected", "false");
        tab.tabIndex = -1;
        zicon === null || zicon === void 0 ? void 0 : zicon.setAttribute("name", strokeIcon);
        return;
      }
      zicon === null || zicon === void 0 ? void 0 : zicon.setAttribute("name", `${strokeIcon}-filled`);
      tab.tabIndex = 0;
      tab.setAttribute("aria-selected", "true");
    });
    this.scrollToTab(this.tabs[this.selectedTab]);
    this.selected.emit(this.selectedTab);
  }
  /**
   * Check if the navigation buttons are needed on window resize.
   */
  checkScrollVisible() {
    if (!this.nav) {
      return;
    }
    this.canNavigate = this.nav[`scroll${this.dimension}`] > this.nav[`client${this.dimension}`];
  }
  /**
   * Handle click on the tabs.
   * @param event `click` event triggered by a child tab
   */
  handleTabClick(event) {
    const clickedTab = event.target.closest("[role='tab']");
    if (!this.tabs.some((child) => child.contains(clickedTab))) {
      return;
    }
    this.selectedTab = this.tabs.indexOf(clickedTab);
  }
  /**
   * Move focus through tabs when an arrow key is pressed.
   * When `TAB` is pressed, focus the currently selected tab if any.
   */
  navigateThroughTabs(event) {
    if (!this.tabs.some((tab) => tab.contains(event.target))) {
      return true;
    }
    if (event.key === KeyboardCode.TAB) {
      this.focusedTab = this.selectedTab || 0;
      this.tabs[this.focusedTab].focus({ preventScroll: true });
      return;
    }
    if (!this.isArrowNavigation(event)) {
      return true;
    }
    event.preventDefault();
    this.tabs[this.focusedTab].tabIndex = -1;
    if ((event.key === NavigationTabsKeyboardEvents.RIGHT && this.orientation == NavigationTabsOrientation.HORIZONTAL) ||
      (event.key === NavigationTabsKeyboardEvents.DOWN && this.orientation == NavigationTabsOrientation.VERTICAL)) {
      // Move forward
      this.focusedTab++;
      if (this.focusedTab >= this.tabs.length) {
        this.focusedTab = 0;
      }
    }
    else if ((event.key === NavigationTabsKeyboardEvents.LEFT && this.orientation == NavigationTabsOrientation.HORIZONTAL) ||
      (event.key === NavigationTabsKeyboardEvents.UP && this.orientation == NavigationTabsOrientation.VERTICAL)) {
      // Move backward
      this.focusedTab--;
      if (this.focusedTab < 0) {
        this.focusedTab = this.tabs.length - 1;
      }
    }
    // Ignore disabled tabs
    if (this.tabs[this.focusedTab].hasAttribute("disabled") &&
      this.tabs[this.focusedTab].getAttribute("disabled") !== "false") {
      return this.navigateThroughTabs(event);
    }
    this.tabs[this.focusedTab].tabIndex = 0;
    this.tabs[this.focusedTab].focus();
    this.scrollToTab(this.tabs[this.focusedTab]);
  }
  componentDidRender() {
    this.checkScrollVisible();
  }
  componentDidLoad() {
    // Set role and tabindex to each slotted tab
    this.tabs.forEach((tab) => {
      tab.setAttribute("role", "tab");
      tab.tabIndex = -1;
    });
    this.tabs[0].tabIndex = 0;
    if (this.selectedTab !== undefined) {
      this.onTabSelected();
    }
  }
  render() {
    return (h(Host, { class: {
        "interactive-2": this.size === NavigationTabsSize.SMALL,
        "interactive-1": this.size !== NavigationTabsSize.SMALL,
      }, scrollable: this.canNavigate }, this.canNavigate && (h("button", { class: "navigation-button", onClick: this.navigateBackwards.bind(this), tabIndex: -1, disabled: !this.canNavigatePrev, "aria-label": "Mostra elementi precedenti" }, h("z-icon", { name: this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-left" : "chevron-up", width: 16, height: 16 }))), h("nav", { role: "tablist", "aria-label": this.ariaLabel, ref: (el) => (this.nav = el !== null && el !== void 0 ? el : this.nav), onScroll: this.checkScrollEnabled.bind(this), "aria-orientation": this.orientation }, h("slot", null)), this.canNavigate && (h("button", { class: "navigation-button", onClick: this.navigateForward.bind(this), onKeyDown: (e) => {
        this.navigateThroughTabs(e);
      }, tabindex: "-1", disabled: !this.canNavigateNext, "aria-label": "Mostra elementi successivi" }, h("z-icon", { name: this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-right" : "chevron-down", width: 16, height: 16 })))));
  }
  static get is() { return "z-navigation-tabs"; }
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
          "text": "Set `aria-label` attribute to the internal `<nav>` element with `tablist` role."
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
      },
      "selectedTab": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Index of the selected tab."
        },
        "attribute": "selected-tab",
        "reflect": false,
        "defaultValue": "undefined"
      }
    };
  }
  static get states() {
    return {
      "canNavigate": {},
      "canNavigatePrev": {},
      "canNavigateNext": {}
    };
  }
  static get events() {
    return [{
        "method": "selected",
        "name": "selected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the selected tab changes."
        },
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "canNavigate",
        "methodName": "checkScrollEnabled"
      }, {
        "propName": "selectedTab",
        "methodName": "onTabSelected"
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
        "name": "click",
        "method": "handleTabClick",
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
