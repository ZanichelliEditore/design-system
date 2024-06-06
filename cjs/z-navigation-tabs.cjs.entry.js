'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dc60bee7.js');
const index$1 = require('./index-39ce4edf.js');

const stylesCss = "z-navigation-tabs{position:relative;z-index:0;display:flex;overflow:hidden;flex-direction:row;font-family:var(--font-family-sans);font-weight:var(--font-rg)}z-navigation-tabs,z-navigation-tabs *{box-sizing:border-box}z-navigation-tabs>nav::-webkit-scrollbar{display:none}z-navigation-tabs .navigation-button{position:absolute;z-index:1;display:flex;align-items:center;justify-content:center;padding:0;border:none;margin:0;background-color:var(--z-navigation-tabs-nav-buttons-bg, var(--color-surface01));border-radius:var(--border-no-radius);box-shadow:0 0 4px 1px var(--shadow-color-base);cursor:pointer;fill:var(--z-navigation-tabs-nav-buttons-fg, var(--color-primary01));outline:none}z-navigation-tabs .navigation-button:disabled{display:none}z-navigation-tabs>nav{z-index:0;display:flex;overflow:auto;align-items:center;justify-content:flex-start;scroll-behavior:smooth;scrollbar-width:none}z-navigation-tabs[orientation=\"horizontal\"]>nav{width:100%}z-navigation-tabs[orientation=\"horizontal\"] .navigation-button{top:0;width:calc(var(--space-unit) * 4);height:100%}z-navigation-tabs[orientation=\"horizontal\"] .navigation-button:first-child{left:0}z-navigation-tabs[orientation=\"horizontal\"] .navigation-button:last-child{right:0}z-navigation-tabs[orientation=\"vertical\"]{width:fit-content;flex-direction:column}z-navigation-tabs[orientation=\"vertical\"]>nav{height:100%;flex-direction:column;align-items:stretch}z-navigation-tabs[orientation=\"vertical\"] .navigation-button{left:0;width:100%;height:calc(var(--space-unit) * 4)}z-navigation-tabs[orientation=\"vertical\"] .navigation-button:first-child{top:0}z-navigation-tabs[orientation=\"vertical\"] .navigation-button:last-child{bottom:0}z-navigation-tabs[size=\"small\"][orientation=\"vertical\"] .navigation-button{height:calc(var(--space-unit) * 4)}z-navigation-tabs>nav>*{position:relative;z-index:0;display:inline-flex;width:auto;align-items:center;justify-content:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);border:none;margin:0;background-color:unset;border-radius:var(--border-no-radius);color:var(--color-primary01);cursor:pointer;fill:currentcolor;font-family:var(--font-family-sans);font-size:inherit;gap:var(--space-unit);letter-spacing:inherit;line-height:inherit;outline:none;text-align:center;white-space:nowrap}z-navigation-tabs>nav>a{text-decoration:none}z-navigation-tabs>nav>*:focus:focus-visible{z-index:1;box-shadow:inset 0 0 4px 3px var(--color-highlight)}z-navigation-tabs>nav>:not([disabled]):hover{background-color:var(--color-surface02)}z-navigation-tabs>nav>button[disabled]{color:var(--color-disabled03);cursor:not-allowed;fill:currentcolor;pointer-events:all}z-navigation-tabs>nav>:not([disabled]):hover,nav>[aria-selected=\"true\"]{color:var(--color-hover-secondary);fill:currentcolor}z-navigation-tabs>nav>:not([disabled]):hover::after,nav>[aria-selected=\"true\"]::after{position:absolute;background-color:var(--color-hover-secondary);content:\"\"}z-navigation-tabs[orientation=\"horizontal\"]>nav>:not([disabled]):hover::after,z-navigation-tabs[orientation=\"horizontal\"]>nav>[aria-selected=\"true\"]::after{bottom:0;left:0;width:100%;height:var(--border-size-large)}z-navigation-tabs>nav>* z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);display:flex;margin:0}z-navigation-tabs[size=\"small\"][orientation=\"horizontal\"]>nav>*{padding:var(--space-unit) calc(var(--space-unit) * 2)}z-navigation-tabs[size=\"small\"][orientation=\"horizontal\"]>nav>:not([disabled]):hover::after,z-navigation-tabs[size=\"small\"][orientation=\"horizontal\"]>nav>[aria-selected=\"true\"]::after{height:var(--border-size-medium)}z-navigation-tabs[size=\"small\"]:not([orientation=\"vertical\"])>nav>* z-icon{--z-icon-width:14px;--z-icon-height:14px}z-navigation-tabs[orientation=\"vertical\"]>nav>*{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2)}z-navigation-tabs[orientation=\"vertical\"]>nav>*>:not(z-icon){display:none}z-navigation-tabs[orientation=\"vertical\"]>nav>:not([disabled]):hover::after,z-navigation-tabs[orientation=\"vertical\"]>nav>[aria-selected=\"true\"]::after{top:0;right:0;width:var(--border-size-large);height:100%}";
const ZNavigationTabsStyle0 = stylesCss;

const ZNavigationTabs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.selected = index.createEvent(this, "selected", 7);
        /**
         * Index of the last tab that held focus.
         */
        this.focusedTab = undefined;
        this.ariaLabel = undefined;
        this.orientation = index$1.NavigationTabsOrientation.HORIZONTAL;
        this.size = index$1.NavigationTabsSize.BIG;
        this.selectedTab = undefined;
        this.canNavigate = undefined;
        this.canNavigatePrev = undefined;
        this.canNavigateNext = undefined;
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
    get tabs() {
        return Array.from(this.nav.children);
    }
    /**
     * Scroll into view to center the tab.
     */
    scrollToTab(tabElement) {
        const scrollOptions = (this.orientation === index$1.NavigationTabsOrientation.HORIZONTAL
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
        return Object.values(index$1.NavigationTabsKeyboardEvents).includes(e.key);
    }
    /**
     * Check if the navigation buttons are needed.
     */
    checkScrollVisible() {
        if (!this.nav) {
            return;
        }
        this.canNavigate = this.nav[`scroll${this.dimension}`] > this.nav[`client${this.dimension}`];
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
            tab.setAttribute("aria-selected", "true");
        });
        this.selected.emit(this.selectedTab);
        if (this.selectedTab !== undefined) {
            this.scrollToTab(this.tabs[this.selectedTab]);
        }
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
     * When a tab is focused, temporarily set to -1 the `tabindex` of the selected tab (if any) and set the `focusedTab` to the index of the focused tab.
     */
    onTabFocusIn(event) {
        const focused = this.tabs.findIndex((tab) => tab.contains(event.target));
        if (focused === -1) {
            return;
        }
        if (this.selectedTab !== undefined) {
            this.tabs[this.selectedTab].tabIndex = -1;
        }
        this.focusedTab = focused;
        this.tabs[this.focusedTab].tabIndex = -1;
        this.scrollToTab(this.tabs[this.focusedTab]);
    }
    /**
     * Handle keyboard navigation through tabs with arrow keys.
     */
    navigateThroughTabs(event) {
        if (!this.tabs.some((tab) => tab.contains(event.target)) || !this.isArrowNavigation(event)) {
            return true;
        }
        event.preventDefault();
        if ((event.key === index$1.NavigationTabsKeyboardEvents.RIGHT && this.orientation == index$1.NavigationTabsOrientation.HORIZONTAL) ||
            (event.key === index$1.NavigationTabsKeyboardEvents.DOWN && this.orientation == index$1.NavigationTabsOrientation.VERTICAL)) {
            // Move forward
            this.focusedTab++;
            if (this.focusedTab >= this.tabs.length) {
                this.focusedTab = 0;
            }
        }
        else if ((event.key === index$1.NavigationTabsKeyboardEvents.LEFT && this.orientation == index$1.NavigationTabsOrientation.HORIZONTAL) ||
            (event.key === index$1.NavigationTabsKeyboardEvents.UP && this.orientation == index$1.NavigationTabsOrientation.VERTICAL)) {
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
        this.tabs[this.focusedTab].focus();
        this.scrollToTab(this.tabs[this.focusedTab]);
    }
    /**
     * If the focus is not going on a tab (`relatedTarget` is the new focused element), set to 0 the `tabindex` of the selected tab or the one of the first tab, then unset the `focusedTab`.
     */
    onTabFocusOut(event) {
        var _a;
        if (!this.tabs.some((tab) => tab.contains(event.relatedTarget))) {
            this.tabs[(_a = this.selectedTab) !== null && _a !== void 0 ? _a : 0].tabIndex = 0;
            this.focusedTab = undefined;
        }
    }
    connectedCallback() {
        this.resizeObserver = new ResizeObserver(() => this.checkScrollVisible());
    }
    componentDidLoad() {
        var _a;
        // Set role and tabindex to each slotted tab
        this.tabs.forEach((tab) => {
            tab.setAttribute("role", "tab");
            tab.tabIndex = -1;
        });
        const preselectedTab = (_a = this.selectedTab) !== null && _a !== void 0 ? _a : this.tabs.findIndex((tab) => tab.ariaSelected === "true");
        if (preselectedTab !== -1) {
            this.selectedTab = preselectedTab;
            this.tabs[preselectedTab].tabIndex = 0;
            this.onTabSelected();
        }
        else {
            this.tabs[0].tabIndex = 0;
        }
        this.resizeObserver.observe(this.nav);
    }
    disconnectedCallback() {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    render() {
        return (index.h(index.Host, { key: 'b8ac3831227ebd2bede2d818f2df5f7cf1985596', class: {
                "interactive-2": this.size === index$1.NavigationTabsSize.SMALL,
                "interactive-1": this.size !== index$1.NavigationTabsSize.SMALL,
            }, scrollable: this.canNavigate }, index.h("button", { key: '1080ad28e05e2169e002f00cf841e1ce0c37f49e', class: "navigation-button", onClick: this.navigateBackwards.bind(this), tabIndex: -1, disabled: !this.canNavigatePrev, "aria-label": "Mostra elementi precedenti", hidden: !this.canNavigate }, index.h("z-icon", { key: 'ddd530730b3a5a3165a06ced3f7266a16e867e5f', name: this.orientation === index$1.NavigationTabsOrientation.HORIZONTAL ? "chevron-left" : "chevron-up", width: 16, height: 16 })), index.h("nav", { key: 'fa168689fdbbbef714dc6ef50061216b72833e3e', role: "tablist", "aria-label": this.ariaLabel, ref: (el) => (this.nav = el !== null && el !== void 0 ? el : this.nav), onScroll: this.checkScrollEnabled.bind(this), "aria-orientation": this.orientation }, index.h("slot", { key: '8aec51101e0bb61e76ef1a90f08b277d026b87e1' })), index.h("button", { key: 'c963e7c135d6e93c0f7eeeabff80fad020ea302d', class: "navigation-button", onClick: this.navigateForward.bind(this), tabIndex: -1, disabled: !this.canNavigateNext, "aria-label": "Mostra elementi successivi", hidden: !this.canNavigate }, index.h("z-icon", { key: '7e3184c2801af92791457cde20c47c55c361f169', name: this.orientation === index$1.NavigationTabsOrientation.HORIZONTAL ? "chevron-right" : "chevron-down", width: 16, height: 16 }))));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "canNavigate": ["checkScrollEnabled"],
        "selectedTab": ["onTabSelected"]
    }; }
};
ZNavigationTabs.style = ZNavigationTabsStyle0;

exports.z_navigation_tabs = ZNavigationTabs;

//# sourceMappingURL=z-navigation-tabs.cjs.entry.js.map