import { Host, h } from "@stencil/core";
import { NavigationTabsKeyboardEvents, NavigationTabsOrientation, NavigationTabsSize } from "../../beans";
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
        return (h(Host, { key: '16294d384c48cb2380178445630240fcc6f085cc', class: {
                "interactive-2": this.size === NavigationTabsSize.SMALL,
                "interactive-1": this.size !== NavigationTabsSize.SMALL,
            }, scrollable: this.canNavigate }, h("button", { key: '98eae832700569a7f2539aa51cee7c07ac2f3815', class: "navigation-button", onClick: this.navigateBackwards.bind(this), tabIndex: -1, disabled: !this.canNavigatePrev, "aria-label": "Mostra elementi precedenti", hidden: !this.canNavigate }, h("z-icon", { key: '21ddd942ac5c9a7cfdf53e1c31788268b7932f03', name: this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-left" : "chevron-up", width: 16, height: 16 })), h("nav", { key: 'd2582f956ec466d672bdf43494f96d1b2ee73485', role: "tablist", "aria-label": this.ariaLabel, ref: (el) => (this.nav = el !== null && el !== void 0 ? el : this.nav), onScroll: this.checkScrollEnabled.bind(this), "aria-orientation": this.orientation }, h("slot", { key: '3cfbaf5ef02b8964b1b497deef2b8e95b6ef94e0' })), h("button", { key: '6cc204b98252d19cdd79bdf2f9f1824c2f69d559', class: "navigation-button", onClick: this.navigateForward.bind(this), tabIndex: -1, disabled: !this.canNavigateNext, "aria-label": "Mostra elementi successivi", hidden: !this.canNavigate }, h("z-icon", { key: '7bc36b5cdb865c759e0bb37362a820557e079be4', name: this.orientation === NavigationTabsOrientation.HORIZONTAL ? "chevron-right" : "chevron-down", width: 16, height: 16 }))));
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set `aria-label` attribute to the internal `<nav>` element with `tablist` role."
                },
                "attribute": "aria-label",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NavigationTabsOrientation",
                    "resolved": "NavigationTabsOrientation.HORIZONTAL | NavigationTabsOrientation.VERTICAL",
                    "references": {
                        "NavigationTabsOrientation": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::NavigationTabsOrientation"
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
                "defaultValue": "NavigationTabsOrientation.HORIZONTAL"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NavigationTabsSize",
                    "resolved": "NavigationTabsSize.BIG | NavigationTabsSize.SMALL",
                    "references": {
                        "NavigationTabsSize": {
                            "location": "import",
                            "path": "../../beans",
                            "id": "src/beans/index.tsx::NavigationTabsSize"
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
                    "text": "Index of the selected tab.\nUseful to programmatically select a tab.\nThe tab can also be selected by setting the `aria-selected` attribute to `true` on the desired tab."
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
                    "text": "Emitted when the selected tab changes.\nContains the index of the new selected tab in the `detail` of the event."
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
                "name": "click",
                "method": "handleTabClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusin",
                "method": "onTabFocusIn",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "navigateThroughTabs",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onTabFocusOut",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
