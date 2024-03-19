import { r as registerInstance, c as createEvent, h, a as Host } from './index-f16bc2ca.js';
import { N as NavigationTabsOrientation, a as NavigationTabsSize } from './index-2255c6c8.js';
import { I as ICONS } from './icons-f212e30c.js';

const navigationTabCss = "z-navigation-tab>button,z-navigation-tab-link>a{position:relative;z-index:0;display:inline-flex;width:auto;align-items:center;justify-content:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);border:none;margin:0;background-color:unset;border-radius:var(--border-no-radius);color:var(--color-primary01);cursor:pointer;fill:currentcolor;font-family:var(--font-family-sans);font-size:inherit;letter-spacing:inherit;line-height:inherit;outline:none;text-align:center;white-space:nowrap}z-navigation-tab-link>a{text-decoration:none}z-navigation-tab *,z-navigation-tab-link *,z-navigation-tab *::before,z-navigation-tab *::after,z-navigation-tab-link *::before,z-navigation-tab-link *::after{box-sizing:border-box}z-navigation-tab>*:focus:focus-visible,z-navigation-tab-link>*:focus:focus-visible{z-index:1;box-shadow:inset 0 0 4px 3px var(--color-highlight)}z-navigation-tab:not([disabled]):hover>*,z-navigation-tab[selected]>*,z-navigation-tab-link:not([disabled]):hover>*,z-navigation-tab-link[selected]>*{color:var(--color-hover-secondary);fill:currentcolor}z-navigation-tab:not([disabled]):hover>*::after,z-navigation-tab[selected]>*::after,z-navigation-tab-link:not([disabled]):hover>*::after,z-navigation-tab-link[selected]>*::after{position:absolute;background-color:var(--color-hover-secondary);content:\"\"}z-navigation-tab[orientation=\"horizontal\"]:not([disabled]):hover>*::after,z-navigation-tab[orientation=\"horizontal\"][selected]>*::after,z-navigation-tab-link[orientation=\"horizontal\"]:not([disabled]):hover>*::after,z-navigation-tab-link[orientation=\"horizontal\"][selected]>*::after{bottom:0;left:0;width:100%;height:var(--border-size-large)}z-navigation-tab z-icon,z-navigation-tab-link z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);display:flex;margin:0}z-navigation-tab[orientation=\"horizontal\"] z-icon,z-navigation-tab-link[orientation=\"horizontal\"] z-icon{margin-right:var(--space-unit)}z-navigation-tab:not([disabled]):hover>*{background-color:var(--color-background)}z-navigation-tab[disabled]>*,z-navigation-tab-link[disabled]>*{color:var(--gray500);cursor:not-allowed;fill:currentcolor;pointer-events:all}z-navigation-tab[size=\"small\"]>*,z-navigation-tab-link[size=\"small\"]>*{font-size:var(--font-size-2);letter-spacing:0.16px;line-height:1.4}z-navigation-tab[size=\"small\"][orientation=\"horizontal\"]>*,z-navigation-tab-link[size=\"small\"][orientation=\"horizontal\"]>*{padding:var(--space-unit) calc(var(--space-unit) * 2)}z-navigation-tab[size=\"small\"][orientation=\"horizontal\"]:not([disabled]):hover>*::after,z-navigation-tab[size=\"small\"][orientation=\"horizontal\"][selected]>*::after,z-navigation-tab-link[size=\"small\"][orientation=\"horizontal\"]:not([disabled]):hover>*::after,z-navigation-tab-link[size=\"small\"][orientation=\"horizontal\"][selected]>*::after{height:var(--border-size-medium)}z-navigation-tab[size=\"small\"]:not([orientation=\"vertical\"]) z-icon,z-navigation-tab-link[size=\"small\"]:not([orientation=\"vertical\"]) z-icon{--z-icon-width:14px;--z-icon-height:14px}z-navigation-tab[orientation=\"vertical\"]>*,z-navigation-tab-link[orientation=\"vertical\"]>*{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2)}z-navigation-tab[orientation=\"vertical\"]:not([disabled]):hover>*::after,z-navigation-tab[orientation=\"vertical\"][selected]>*::after,z-navigation-tab-link[orientation=\"vertical\"]:not([disabled]):hover>*::after,z-navigation-tab-link[orientation=\"vertical\"][selected]>*::after{top:0;right:0;width:var(--border-size-large);height:100%}";
const ZNavigationTabLinkStyle0 = navigationTabCss;

const ZNavigationTabLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectedEvent = createEvent(this, "selected", 7);
        this.ariaControls = undefined;
        this.tabId = undefined;
        this.selected = false;
        this.disabled = false;
        this.orientation = NavigationTabsOrientation.HORIZONTAL;
        this.size = NavigationTabsSize.BIG;
        this.htmlTitle = undefined;
        this.target = undefined;
        this.href = undefined;
        this.icon = undefined;
        this.label = undefined;
    }
    /**
     * Scroll into view to center the tab.
     */
    scrollToTab({ target: button }) {
        const scrollOptions = (this.orientation === NavigationTabsOrientation.HORIZONTAL
            ? { block: "nearest", inline: "center" }
            : { block: "center", inline: "nearest" });
        button.scrollIntoView(Object.assign({ behavior: "smooth" }, scrollOptions));
    }
    onClick() {
        if (this.disabled) {
            return;
        }
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
        return (h(Host, { key: '77c729dd9c1bfd412d958eb477f2e227ba7fc7a7', role: "tab", id: this.tabId, "aria-selected": this.selected ? "true" : "false", "aria-controls": this.ariaControls }, h("a", { key: '3b70074a8637c2df922e6c5dcfc38f45c14ae770', tabIndex: this.selected ? 0 : -1, onFocus: this.scrollToTab.bind(this), href: this.disabled ? null : this.href, title: this.htmlTitle, target: this.target }, this.icon && this.renderIcon(), this.orientation === "horizontal" && this.label)));
    }
    static get watchers() { return {
        "selected": ["onSelected"]
    }; }
};
ZNavigationTabLink.style = ZNavigationTabLinkStyle0;

export { ZNavigationTabLink as z_navigation_tab_link };

//# sourceMappingURL=z-navigation-tab-link.entry.js.map