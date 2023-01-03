import { r as registerInstance, c as createEvent, h } from './index-a2ca4b97.js';
import { N as NavigationTabsOrientation, a as NavigationTabsSize } from './index-968a240f.js';
import { I as ICONS } from './icons-b945dd23.js';

const navigationTabCss = "z-navigation-tab>button,z-navigation-tab-link>a{position:relative;z-index:0;display:inline-flex;width:auto;align-items:center;justify-content:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);border:none;margin:0;background-color:unset;border-radius:var(--border-no-radius);color:var(--color-primary01);cursor:pointer;fill:currentcolor;font-family:var(--font-family-sans);font-size:inherit;letter-spacing:inherit;line-height:inherit;outline:none;text-align:center;white-space:nowrap}z-navigation-tab-link>a{text-decoration:none}z-navigation-tab *,z-navigation-tab-link *,z-navigation-tab *::before,z-navigation-tab *::after,z-navigation-tab-link *::before,z-navigation-tab-link *::after{box-sizing:border-box}z-navigation-tab>*:focus:focus-visible,z-navigation-tab-link>*:focus:focus-visible{box-shadow:inset var(--shadow-focus-primary)}z-navigation-tab:not([disabled]):hover>*,z-navigation-tab[selected]>*,z-navigation-tab-link:not([disabled]):hover>*,z-navigation-tab-link[selected]>*{color:var(--color-hover-secondary);fill:currentcolor}z-navigation-tab:not([disabled]):hover>*::after,z-navigation-tab[selected]>*::after,z-navigation-tab-link:not([disabled]):hover>*::after,z-navigation-tab-link[selected]>*::after{position:absolute;background-color:var(--color-hover-secondary);content:\"\"}z-navigation-tab[orientation=\"horizontal\"]:not([disabled]):hover>*::after,z-navigation-tab[orientation=\"horizontal\"][selected]>*::after,z-navigation-tab-link[orientation=\"horizontal\"]:not([disabled]):hover>*::after,z-navigation-tab-link[orientation=\"horizontal\"][selected]>*::after{bottom:0;left:0;width:100%;height:var(--border-size-large)}z-navigation-tab z-icon,z-navigation-tab-link z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);display:flex;margin:0}z-navigation-tab[orientation=\"horizontal\"] z-icon,z-navigation-tab-link[orientation=\"horizontal\"] z-icon{margin-right:var(--space-unit)}z-navigation-tab:not([disabled]):hover>*{background-color:var(--color-background)}z-navigation-tab[disabled]>*{color:var(--gray500);cursor:not-allowed;fill:currentcolor;pointer-events:all}z-navigation-tab[size=\"small\"]>*,z-navigation-tab-link[size=\"small\"]>*{font-size:var(--font-size-2);letter-spacing:0.16px;line-height:1.4}z-navigation-tab[size=\"small\"][orientation=\"horizontal\"]>*,z-navigation-tab-link[size=\"small\"][orientation=\"horizontal\"]>*{padding:var(--space-unit) calc(var(--space-unit) * 2)}z-navigation-tab[size=\"small\"][orientation=\"horizontal\"]:not([disabled]):hover>*::after,z-navigation-tab[size=\"small\"][orientation=\"horizontal\"][selected]>*::after,z-navigation-tab-link[size=\"small\"][orientation=\"horizontal\"]:hover>*::after,z-navigation-tab-link[size=\"small\"][orientation=\"horizontal\"][selected]>*::after{height:var(--border-size-medium)}z-navigation-tab[size=\"small\"]:not([orientation=\"vertical\"]) z-icon,z-navigation-tab-link[size=\"small\"]:not([orientation=\"vertical\"]) z-icon{--z-icon-width:14px;--z-icon-height:14px}z-navigation-tab[orientation=\"vertical\"]>*,z-navigation-tab-link[orientation=\"vertical\"]>*{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2)}z-navigation-tab[orientation=\"vertical\"]:hover:not([disabled])>*::after,z-navigation-tab[orientation=\"vertical\"][selected]>*::after,z-navigation-tab-link[orientation=\"vertical\"]:hover>*::after,z-navigation-tab-link[orientation=\"vertical\"][selected]>*::after{top:0;right:0;width:var(--border-size-large);height:100%}";

const ZNavigationTabLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedEvent = createEvent(this, "selected", 7);
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
    this.orientation = NavigationTabsOrientation.HORIZONTAL;
    /**
     * Tab size. Do not set this manually: `z-navigation-tabs` will handle this.
     */
    this.size = NavigationTabsSize.BIG;
  }
  /**
   * Scroll into view to center the tab.
   */
  scrollToTab({ target: button }) {
    const scrollOptions = this.orientation === NavigationTabsOrientation.HORIZONTAL
      ? { block: "nearest", inline: "center" }
      : { block: "center", inline: "nearest" };
    button.scrollIntoView(Object.assign({ behavior: "smooth" }, scrollOptions));
  }
  onClick() {
    this.selected = true;
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
    if (this.selected && Object.keys(ICONS).includes(iconFilled)) {
      icon = iconFilled;
    }
    return h("z-icon", { name: icon });
  }
  render() {
    return (h("a", { role: "tab", href: !this.disabled && this.href, title: this.htmlTitle, target: this.target, onFocus: this.scrollToTab.bind(this) }, this.icon && this.renderIcon(), this.orientation === "horizontal" && this.label));
  }
  static get watchers() { return {
    "selected": ["onSelected"]
  }; }
};
ZNavigationTabLink.style = navigationTabCss;

export { ZNavigationTabLink as z_navigation_tab_link };
