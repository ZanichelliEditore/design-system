'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3793b368.js');
const index$1 = require('./index-cf91f8aa.js');

const stylesCss = ":host{position:relative;display:grid;flex-direction:row;z-index:0;font-family:var(--dashboard-font);font-weight:var(--font-rg);overflow:hidden}:host,:host *,::slotted(*){box-sizing:border-box}::-webkit-scrollbar{display:none}button.navigation{position:absolute;display:flex;align-items:center;justify-content:center;margin:0;padding:calc(var(--space-unit) * 2) var(--space-unit);background:var(--color-white);border:none;outline:none;color:var(--blue500);fill:var(--blue500);border-radius:var(--border-no-radius);box-shadow:0px 0px 4px 2px rgba(66, 69, 72, 0.35);cursor:pointer;z-index:1}button.navigation:focus{color:var(--blue500);fill:var(--blue500);box-shadow:0 0 2px 2px var(--blue100)}button.navigation[disabled]{color:var(--gray700);fill:var(--gray700);pointer-events:none;cursor:not-allowed}nav{display:flex;align-items:center;justify-content:flex-start;overflow:auto;scroll-snap-type:both mandatory}:host([orientation='horizontal'][scrollable]){padding:0 calc(var(--space-unit) * 4)}:host([orientation='horizontal']) nav{width:100%}:host([orientation='horizontal']) button.navigation{height:100%;width:calc(var(--space-unit) * 4)}:host([orientation='horizontal']) button.navigation:first-child{left:0}:host([orientation='horizontal']) button.navigation:last-child{right:0}:host([orientation='vertical']){flex-direction:column;width:min-content}:host([orientation='vertical'][scrollable]){padding:calc(var(--space-unit) * 4) 0}:host([orientation='vertical']) nav{flex-direction:column;width:min-content;height:100%}:host([orientation='vertical']) button.navigation{width:100%;height:calc(var(--space-unit) * 4)}:host([orientation='vertical']) button.navigation:first-child{top:0}:host([orientation='vertical']) button.navigation:last-child{bottom:0}:host([size='small'][orientation='vertical']) button.navigation{height:calc(var(--space-unit) * 4)}";

const ZNavigationTabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Available orientation: `horizontal` and `vertical`. Defaults to `horizontal`. */
    this.orientation = index$1.TabOrientationEnum.horizontal;
    /** Available sizes: `big` and `small`. Defaults to `big`. */
    this.size = index$1.TabSizeEnum.big;
    this.direction = this.orientation == index$1.TabOrientationEnum.vertical ? 'Top' : 'Left';
    this.dimension = this.orientation == index$1.TabOrientationEnum.vertical ? 'Height' : 'Width';
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
    return index.h(index.Host, { scrollable: this.canNavigate, role: "tablist" }, this.canNavigate && index.h("button", { role: "tab", class: 'navigation', onClick: () => this.navigatePrevious(), disabled: !this.canNavigatePrev }, index.h("z-icon", { name: this.orientation == 'horizontal' ? 'chevron-left' : 'chevron-up', width: 16, height: 16 })), index.h("nav", { ref: (el) => this.tabsNav = el !== null && el !== void 0 ? el : this.tabsNav, onScroll: this.checkScrollEnabled.bind(this) }, index.h("slot", null)), this.canNavigate && index.h("button", { role: "tab", class: 'navigation', onClick: () => { this.navigateNext(); }, disabled: !this.canNavigateNext }, index.h("z-icon", { name: this.orientation == 'horizontal' ? 'chevron-right' : 'chevron-down', width: 16, height: 16 })));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "size": ["setChildrenSize"],
    "orientation": ["setChildrenOrientation"]
  }; }
};
ZNavigationTabs.style = stylesCss;

exports.z_navigation_tabs = ZNavigationTabs;
