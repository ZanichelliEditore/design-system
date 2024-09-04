import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-ab5f1eaa.js';
import { N as NavigationTabsOrientation, a as NavigationTabsSize, b as NavigationTabsKeyboardEvents } from './index-a7f69d42.js';

const stylesCss = "z-navigation-tabs{position:relative;z-index:0;display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-direction:row;flex-direction:row;font-family:var(--font-family-sans);font-weight:var(--font-rg)}z-navigation-tabs,z-navigation-tabs *{-webkit-box-sizing:border-box;box-sizing:border-box}z-navigation-tabs>nav::-webkit-scrollbar{display:none}z-navigation-tabs .navigation-button{position:absolute;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0;border:none;margin:0;background-color:var(--z-navigation-tabs-nav-buttons-bg, var(--color-surface01));border-radius:var(--border-no-radius);-webkit-box-shadow:0 0 4px 1px var(--shadow-color-base);box-shadow:0 0 4px 1px var(--shadow-color-base);cursor:pointer;fill:var(--z-navigation-tabs-nav-buttons-fg, var(--color-primary01));outline:none}z-navigation-tabs .navigation-button:disabled{display:none}z-navigation-tabs>nav{z-index:0;display:-ms-flexbox;display:flex;overflow:auto;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;scroll-behavior:smooth;scrollbar-width:none}z-navigation-tabs[orientation=\"horizontal\"]>nav{width:100%}z-navigation-tabs[orientation=\"horizontal\"] .navigation-button{top:0;width:calc(var(--space-unit) * 4);height:100%}z-navigation-tabs[orientation=\"horizontal\"] .navigation-button:first-child{left:0}z-navigation-tabs[orientation=\"horizontal\"] .navigation-button:last-child{right:0}z-navigation-tabs[orientation=\"vertical\"]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-ms-flex-direction:column;flex-direction:column}z-navigation-tabs[orientation=\"vertical\"]>nav{height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}z-navigation-tabs[orientation=\"vertical\"] .navigation-button{left:0;width:100%;height:calc(var(--space-unit) * 4)}z-navigation-tabs[orientation=\"vertical\"] .navigation-button:first-child{top:0}z-navigation-tabs[orientation=\"vertical\"] .navigation-button:last-child{bottom:0}z-navigation-tabs[size=\"small\"][orientation=\"vertical\"] .navigation-button{height:calc(var(--space-unit) * 4)}z-navigation-tabs>nav>*{position:relative;z-index:0;display:-ms-inline-flexbox;display:inline-flex;width:auto;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);border:none;margin:0;background-color:unset;border-radius:var(--border-no-radius);color:var(--color-primary01);cursor:pointer;fill:currentcolor;font-family:var(--font-family-sans);font-size:inherit;gap:var(--space-unit);letter-spacing:inherit;line-height:inherit;outline:none;text-align:center;white-space:nowrap}z-navigation-tabs>nav>a{text-decoration:none}z-navigation-tabs>nav>*:focus:focus-visible{z-index:1;-webkit-box-shadow:inset 0 0 4px 3px var(--blue800);box-shadow:inset 0 0 4px 3px var(--blue800)}z-navigation-tabs>nav>:not([disabled]):hover{background-color:var(--color-surface02)}z-navigation-tabs>nav>button[disabled]{color:var(--color-disabled03);cursor:not-allowed;fill:currentcolor;pointer-events:all}z-navigation-tabs>nav>:not([disabled]):hover,nav>[aria-selected=\"true\"]{color:var(--color-hover-secondary);fill:currentcolor}z-navigation-tabs>nav>:not([disabled]):hover::after,nav>[aria-selected=\"true\"]::after{position:absolute;background-color:var(--color-hover-secondary);content:\"\"}z-navigation-tabs[orientation=\"horizontal\"]>nav>:not([disabled]):hover::after,z-navigation-tabs[orientation=\"horizontal\"]>nav>[aria-selected=\"true\"]::after{bottom:0;left:0;width:100%;height:var(--border-size-large)}z-navigation-tabs>nav>* z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);display:-ms-flexbox;display:flex;margin:0}z-navigation-tabs[size=\"small\"][orientation=\"horizontal\"]>nav>*{padding:var(--space-unit) calc(var(--space-unit) * 2)}z-navigation-tabs[size=\"small\"][orientation=\"horizontal\"]>nav>:not([disabled]):hover::after,z-navigation-tabs[size=\"small\"][orientation=\"horizontal\"]>nav>[aria-selected=\"true\"]::after{height:var(--border-size-medium)}z-navigation-tabs[size=\"small\"]:not([orientation=\"vertical\"])>nav>* z-icon{--z-icon-width:14px;--z-icon-height:14px}z-navigation-tabs[orientation=\"vertical\"]>nav>*{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2)}z-navigation-tabs[orientation=\"vertical\"]>nav>*>:not(z-icon){display:none}z-navigation-tabs[orientation=\"vertical\"]>nav>:not([disabled]):hover::after,z-navigation-tabs[orientation=\"vertical\"]>nav>[aria-selected=\"true\"]::after{top:0;right:0;width:var(--border-size-large);height:100%}";
const ZNavigationTabsStyle0 = stylesCss;

const ZNavigationTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selected = createEvent(this, "selected", 7);
        /**
         * Index of the last tab that held focus.
         */
        this.focusedTab = undefined;
        this.ariaLabel = "";
        this.orientation = NavigationTabsOrientation.HORIZONTAL;
        this.size = NavigationTabsSize.BIG;
        this.selectedTab = undefined;
        this.canNavigate = undefined;
        this.canNavigatePrev = undefined;
        this.canNavigateNext = undefined;
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
        return (h(Host, { key: '0dfbe739542add5d05e82462f9ca115734f75ab7', class: {
                "interactive-2": this.size === NavigationTabsSize.SMALL,
                "interactive-1": this.size !== NavigationTabsSize.SMALL,
            }, scrollable: this.canNavigate }, h("button", { key: 'a679c4104ef79c5245a205e634872992ad6b7702', class: "navigation-button", onClick: this.navigateBackwards.bind(this), tabIndex: -1, disabled: !this.canNavigatePrev, "aria-label": "Mostra elementi precedenti", hidden: !this.canNavigate }, h("z-icon", { key: '13b64410e78d66d28b9a2a870535a393b5361f06', name: this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-left" : "chevron-up", width: 16, height: 16 })), h("nav", { key: 'ae01aa47ea6620209017d612b3b6e1b0664efcba', role: "tablist", "aria-label": this.ariaLabel, ref: (el) => (this.nav = el !== null && el !== void 0 ? el : this.nav), onScroll: this.checkScrollEnabled.bind(this), "aria-orientation": this.orientation }, h("slot", { key: 'bd1f92fef8fde67a415964efd61b89d9895192a7' })), h("button", { key: '0b7a9b4ecf5773f576f25468a8f64118b57c4480', class: "navigation-button", onClick: this.navigateForward.bind(this), tabIndex: -1, disabled: !this.canNavigateNext, "aria-label": "Mostra elementi successivi", hidden: !this.canNavigate }, h("z-icon", { key: '91686040ca32ff9136c6a96ce70ed3ca20a6b753', name: this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-right" : "chevron-down", width: 16, height: 16 }))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "canNavigate": ["checkScrollEnabled"],
        "selectedTab": ["onTabSelected"]
    }; }
};
ZNavigationTabs.style = ZNavigationTabsStyle0;

export { ZNavigationTabs as z_navigation_tabs };

//# sourceMappingURL=z-navigation-tabs.entry.js.map