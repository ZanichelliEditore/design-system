'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-155b2ec5.js');
const icons = require('./icons-30810e62.js');

const navigationTabCss = ":host>button,:host>a{position:relative;z-index:0;display:inline-flex;align-items:center;justify-content:center;width:auto;margin:0;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);background-color:unset;text-align:center;font-size:inherit;font-family:var(--font-family-sans);line-height:inherit;letter-spacing:inherit;white-space:nowrap;color:var(--color-primary01);fill:currentColor;border:none;border-radius:var(--border-no-radius);outline:none;cursor:pointer}:host>a{text-decoration:none}:host *::before,:host *::after{box-sizing:border-box}:host(:not([disabled]):hover)>*,:host([selected])>*{color:var(--color-hover-secondary);fill:currentColor}:host(:not([disabled]):hover)>*::after,:host([selected])>*::after{content:'';position:absolute;background-color:var(--color-hover-secondary)}:host([orientation='horizontal']:not([disabled]):hover)>*::after,:host([orientation='horizontal'][selected])>*::after{bottom:0;left:0;width:100%;height:var(--border-size-large)}slot[name=\"icon\"] z-icon,::slotted([slot=\"icon\"]){--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);display:flex;margin:0}:host([orientation='horizontal']) slot[name=\"icon\"] z-icon,:host([orientation='horizontal']) ::slotted([slot=\"icon\"]){margin-right:var(--space-unit)}:host(:not([disabled]):hover)>*{background-color:var(--color-background)}:host>*:focus:focus-visible{box-shadow:var(--shadow-focus-primary)}:host([disabled])>*{pointer-events:all;cursor:not-allowed;color:var(--gray500);fill:currentColor}:host([size='small'])>*{font-size:var(--font-size-2);line-height:1.4;letter-spacing:0.16px}:host([size='small'][orientation='horizontal'])>*{padding:var(--space-unit) calc(var(--space-unit) * 2)}:host([size='small'][orientation='horizontal']:not([disabled]):hover)>*::after,:host([size='small'][orientation='horizontal'][selected])>*::after{height:var(--border-size-medium)}:host([size='small']:not([orientation='vertical'])) slot[name=\"icon\"] z-icon,:host([size='small']:not([orientation='vertical'])) ::slotted([slot=\"icon\"]){--z-icon-width:14px;--z-icon-height:14px}:host([orientation='vertical'])>*{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2)}:host([orientation='vertical']:hover:not([disabled]))>*::after,:host([orientation='vertical'][selected])>*::after{width:var(--border-size-large);height:100%;top:0;right:0}";

const ZNavigationTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.emitSelected = index.createEvent(this, "selected", 7);
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
    this.orientation = index$1.NavigationTabsOrientations.horizontal;
    /**
     * Tab size. Do not set this manually: `z-navigation-tabs` will handle this.
     */
    this.size = index$1.NavigationTabsSizes.big;
  }
  onFocus() {
    this.host.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }
  onClick() {
    if (!this.disabled) {
      this.selected = true;
    }
  }
  onSelected() {
    if (this.selected) {
      this.emitSelected.emit();
    }
  }
  /**
   * Render the icon component using the icon's name passed from prop.
   * Use the `filled` version when the tab is `selected`.
   * @returns {HTMLElement}
   */
  renderIcon() {
    let icon = this.icon;
    const iconFilled = `${icon.replace(/-filled$/, '')}-filled`;
    if (this.selected && Object.keys(icons.icons).includes(iconFilled)) {
      icon = iconFilled;
    }
    return index.h("z-icon", { name: icon });
  }
  render() {
    return (index.h("button", { role: "tab", disabled: this.disabled, title: this.htmlTitle }, index.h("slot", { name: "icon" }, this.icon && this.renderIcon()), this.orientation === "horizontal" && this.label));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "selected": ["onSelected"]
  }; }
};
ZNavigationTab.style = navigationTabCss;

exports.z_navigation_tab = ZNavigationTab;
