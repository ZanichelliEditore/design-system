import { Component, Prop, h, Listen, Element, State, Watch, Host } from '@stencil/core';
import { TabSizeEnum, TabOrientationEnum } from '../../../beans';
export class ZNavigationTabs {
  constructor() {
    /** Available orientation: `horizontal` and `vertical`. Defaults to `horizontal`. */
    this.orientation = TabOrientationEnum.horizontal;
    /** Available sizes: `big` and `small`. Defaults to `big`. */
    this.size = TabSizeEnum.big;
    this.direction = this.orientation == TabOrientationEnum.vertical ? 'Top' : 'Left';
    this.dimension = this.orientation == TabOrientationEnum.vertical ? 'Height' : 'Width';
  }
  /** Set all childrens (tab) size attribute : big (default) or small */
  setChildrenSize() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      children[i].setAttribute('size', this.size);
    }
  }
  /** Set all childrens (tab) orientation attribute : horizontal (default) or vertical */
  setChildrenOrientation() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      children[i].setAttribute('orientation', this.orientation);
    }
  }
  /** When resize check if the navigation buttons are needed */
  checkScrollVisible() {
    this.canNavigate = this.tabsNav[`scroll${this.dimension}`] > this.tabsNav[`client${this.dimension}`];
    this.checkScrollEnabled();
  }
  /** Check if navigation buttons can be enabled for each orientation */
  checkScrollEnabled() {
    this.canNavigateNext = this.tabsNav[`scroll${this.direction}`] + this.tabsNav[`client${this.dimension}`] < this.tabsNav[`scroll${this.dimension}`];
    this.canNavigatePrev = this.tabsNav[`scroll${this.direction}`] > 0;
  }
  selectedTabHandler(event) {
    this.select(event.target);
  }
  /** Select a tab child and deselect the others */
  select(tab) {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.tagName === 'Z-NAVIGATION-TAB') {
        if (child !== tab) {
          child.selected = false;
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
    return h(Host, { scrollable: this.canNavigate, role: "tablist" },
      this.canNavigate && h("button", { role: "tab", class: 'navigation', onClick: () => this.navigatePrevious(), disabled: !this.canNavigatePrev },
        h("z-icon", { name: this.orientation == 'horizontal' ? 'chevron-left' : 'chevron-up', width: 16, height: 16 })),
      h("nav", { ref: (el) => this.tabsNav = el !== null && el !== void 0 ? el : this.tabsNav, onScroll: this.checkScrollEnabled.bind(this) },
        h("slot", null)),
      this.canNavigate && h("button", { role: "tab", class: 'navigation', onClick: () => { this.navigateNext(); }, disabled: !this.canNavigateNext },
        h("z-icon", { name: this.orientation == 'horizontal' ? 'chevron-right' : 'chevron-down', width: 16, height: 16 })));
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
        "original": "TabOrientationBean",
        "resolved": "TabOrientationEnum.horizontal | TabOrientationEnum.vertical",
        "references": {
          "TabOrientationBean": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Available orientation: `horizontal` and `vertical`. Defaults to `horizontal`."
      },
      "attribute": "orientation",
      "reflect": true,
      "defaultValue": "TabOrientationEnum.horizontal"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "TabSizeBean",
        "resolved": "TabSizeEnum.big | TabSizeEnum.small",
        "references": {
          "TabSizeBean": {
            "location": "import",
            "path": "../../../beans"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Available sizes: `big` and `small`. Defaults to `big`."
      },
      "attribute": "size",
      "reflect": true,
      "defaultValue": "TabSizeEnum.big"
    }
  }; }
  static get states() { return {
    "canNavigate": {},
    "canNavigatePrev": {},
    "canNavigateNext": {},
    "direction": {},
    "dimension": {}
  }; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "size",
      "methodName": "setChildrenSize"
    }, {
      "propName": "orientation",
      "methodName": "setChildrenOrientation"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "checkScrollVisible",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "selected",
      "method": "selectedTabHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
