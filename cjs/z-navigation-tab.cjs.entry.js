'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-e8ce94a1.js');
const icons = require('./icons-7da210ed.js');

const navigationTabCss = "z-navigation-tab>button,z-navigation-tab-link>a{position:relative;z-index:0;display:inline-flex;width:auto;align-items:center;justify-content:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);border:none;margin:0;background-color:unset;border-radius:var(--border-no-radius);color:var(--color-primary01);cursor:pointer;fill:currentcolor;font-family:var(--font-family-sans);font-size:inherit;letter-spacing:inherit;line-height:inherit;outline:none;text-align:center;white-space:nowrap}z-navigation-tab-link>a{text-decoration:none}z-navigation-tab *,z-navigation-tab-link *,z-navigation-tab *::before,z-navigation-tab *::after,z-navigation-tab-link *::before,z-navigation-tab-link *::after{box-sizing:border-box}z-navigation-tab>*:focus:focus-visible,z-navigation-tab-link>*:focus:focus-visible{box-shadow:inset var(--shadow-focus-primary)}z-navigation-tab:not([disabled]):hover>*,z-navigation-tab[selected]>*,z-navigation-tab-link:not([disabled]):hover>*,z-navigation-tab-link[selected]>*{color:var(--color-hover-secondary);fill:currentcolor}z-navigation-tab:not([disabled]):hover>*::after,z-navigation-tab[selected]>*::after,z-navigation-tab-link:not([disabled]):hover>*::after,z-navigation-tab-link[selected]>*::after{position:absolute;background-color:var(--color-hover-secondary);content:\"\"}z-navigation-tab[orientation=\"horizontal\"]:not([disabled]):hover>*::after,z-navigation-tab[orientation=\"horizontal\"][selected]>*::after,z-navigation-tab-link[orientation=\"horizontal\"]:not([disabled]):hover>*::after,z-navigation-tab-link[orientation=\"horizontal\"][selected]>*::after{bottom:0;left:0;width:100%;height:var(--border-size-large)}z-navigation-tab z-icon,z-navigation-tab-link z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);display:flex;margin:0}z-navigation-tab[orientation=\"horizontal\"] z-icon,z-navigation-tab-link[orientation=\"horizontal\"] z-icon{margin-right:var(--space-unit)}z-navigation-tab:not([disabled]):hover>*{background-color:var(--color-background)}z-navigation-tab[disabled]>*{color:var(--gray500);cursor:not-allowed;fill:currentcolor;pointer-events:all}z-navigation-tab[size=\"small\"]>*,z-navigation-tab-link[size=\"small\"]>*{font-size:var(--font-size-2);letter-spacing:0.16px;line-height:1.4}z-navigation-tab[size=\"small\"][orientation=\"horizontal\"]>*,z-navigation-tab-link[size=\"small\"][orientation=\"horizontal\"]>*{padding:var(--space-unit) calc(var(--space-unit) * 2)}z-navigation-tab[size=\"small\"][orientation=\"horizontal\"]:not([disabled]):hover>*::after,z-navigation-tab[size=\"small\"][orientation=\"horizontal\"][selected]>*::after,z-navigation-tab-link[size=\"small\"][orientation=\"horizontal\"]:hover>*::after,z-navigation-tab-link[size=\"small\"][orientation=\"horizontal\"][selected]>*::after{height:var(--border-size-medium)}z-navigation-tab[size=\"small\"]:not([orientation=\"vertical\"]) z-icon,z-navigation-tab-link[size=\"small\"]:not([orientation=\"vertical\"]) z-icon{--z-icon-width:14px;--z-icon-height:14px}z-navigation-tab[orientation=\"vertical\"]>*,z-navigation-tab-link[orientation=\"vertical\"]>*{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2)}z-navigation-tab[orientation=\"vertical\"]:hover:not([disabled])>*::after,z-navigation-tab[orientation=\"vertical\"][selected]>*::after,z-navigation-tab-link[orientation=\"vertical\"]:hover>*::after,z-navigation-tab-link[orientation=\"vertical\"][selected]>*::after{top:0;right:0;width:var(--border-size-large);height:100%}";

const ZNavigationTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.selectedEvent = index.createEvent(this, "selected", 7);
    /**
     * Whether the tab is selected.
     */
    this.selected = false;
    /**
     * Whether the tab is disabled.
     */
    this.disabled = false;
    /**
     * Tab orientation. Do not set this manually: `z-navigation-tabs` will handle this.
     */
    this.orientation = index$1.NavigationTabsOrientation.HORIZONTAL;
    /**
     * Tab size. Do not set this manually: `z-navigation-tabs` will handle this.
     */
    this.size = index$1.NavigationTabsSize.BIG;
  }
  /**
   * Scroll into view to center the tab.
   */
  scrollToTab({ target: button }) {
    const scrollOptions = this.orientation === index$1.NavigationTabsOrientation.HORIZONTAL
      ? { block: "nearest", inline: "center" }
      : { block: "center", inline: "nearest" };
    button.scrollIntoView(Object.assign({ behavior: "smooth" }, scrollOptions));
  }
  onClick() {
    if (!this.disabled) {
      this.selected = true;
    }
  }
  onSelected() {
    if (this.selected) {
      this.selectedEvent.emit();
    }
  }
  /**
   * Render the icon component using the icon's name passed from prop.
   * Use the `filled` version when the tab is `selected`.
   * @returns {HTMLElement}
   */
  renderIcon() {
    let icon = this.icon;
    const iconFilled = `${icon.replace(/-filled$/, "")}-filled`;
    if (this.selected && Object.keys(icons.ICONS).includes(iconFilled)) {
      icon = iconFilled;
    }
    return index.h("z-icon", { name: icon });
  }
  render() {
    return (index.h("button", { role: "tab", id: this.tabId, disabled: this.disabled, title: this.htmlTitle, onFocus: this.scrollToTab.bind(this), "aria-selected": this.selected ? "true" : "false", "aria-controls": this.ariaControls, tabindex: this.selected ? "0" : "-1" }, this.icon && this.renderIcon(), this.orientation === index$1.NavigationTabsOrientation.HORIZONTAL && this.label));
  }
  static get watchers() { return {
    "selected": ["onSelected"]
  }; }
};
ZNavigationTab.style = navigationTabCss;

exports.z_navigation_tab = ZNavigationTab;