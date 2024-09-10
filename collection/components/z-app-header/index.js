import { Fragment, Host, h } from "@stencil/core";
import { ButtonVariant, ControlSize, Device, KeyboardCode, OffCanvasVariant, TransitionDirection } from "../../beans";
import { getDevice } from "../../utils/utils";
const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";
/**
 * @slot title - Slot for the main title
 * @slot top-subtitle - Slot for the top subtitle. It will not appear in stuck header.
 * @slot stucked-title - Title for the stuck header. By default it uses the text from the `title` slot.
 * @slot product-logo - To insert the product logo, it should be used with an img tag.
 * @cssprop --app-header-content-max-width - Use it to set header's content max width. Useful when the project use a fixed width layout. Defaults to `100%`.
 * @cssprop --app-header-top-offset - Top offset for the stuck header. Useful when there are other fixed elements above the header. Defaults to `48px` (the height of the main topbar).
 * @cssprop --app-header-drawer-trigger-size - The size of the drawer icon. Defaults to `--space-unit * 4`.
 * @cssprop --app-header-bg - Header background color. Defaults to `--color-surface01`.
 * @cssprop --app-header-stucked-bg - Stuck header background color. Defaults to `--color-surface01`.
 * @cssprop --app-header-stucked-text-color - Stuck header text color. Defaults to `--color-default-text`.
 */
export class ZAppHeader {
    constructor() {
        this.currentIndex = -1;
        this.observer = SUPPORT_INTERSECTION_OBSERVER &&
            new IntersectionObserver(([entry]) => {
                this._stuck = !entry.isIntersecting;
            }, {
                threshold: 0.5,
            });
        this.stuck = false;
        this.enableOffcanvas = false;
        this.enableSearch = false;
        this.searchPlaceholder = "Cerca";
        this.searchString = "";
        this.searchPageUrl = undefined;
        this.enableZLogo = true;
        this._stuck = false;
        this.currentViewport = Device.MOBILE;
        this.menuLength = undefined;
        this.drawerOpen = false;
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.collectMenuElements = this.collectMenuElements.bind(this);
    }
    evaluateViewport() {
        this.currentViewport = getDevice();
    }
    handleKeyDown(e) {
        if (e.code === KeyboardCode.ESC && this.drawerOpen) {
            this.closeDrawer();
            return;
        }
        this.handleArrowsNav(e);
    }
    handleArrowsNav(e) {
        if (e.code !== KeyboardCode.ARROW_DOWN && e.code !== KeyboardCode.ARROW_UP && this.enableOffcanvas) {
            return;
        }
        if (document.activeElement.slot === "item") {
            return;
        }
        const menuItems = Array.from(this.menuElements).map((el) => el.shadowRoot.querySelector(".menu-label"));
        let nextFocusableItem;
        if (this.enableOffcanvas || this._stuck) {
            // INFO: reset focus on all menu items
            menuItems.forEach((item) => item.setAttribute("tabindex", "-1"));
            e.preventDefault();
            e.stopPropagation();
            if (e.code === KeyboardCode.ARROW_DOWN) {
                nextFocusableItem = this.getNextItem(menuItems, 1);
            }
            else if (e.code === KeyboardCode.ARROW_UP) {
                nextFocusableItem = this.getNextItem(menuItems, -1);
            }
        }
        else {
            if (e.code === KeyboardCode.ARROW_DOWN || e.code === KeyboardCode.ARROW_UP) {
                e.preventDefault();
                return;
            }
            //INFO: reset focus on all menu items
            menuItems.forEach((item) => item.setAttribute("tabindex", "-1"));
            if (e.code === KeyboardCode.ARROW_RIGHT) {
                nextFocusableItem = this.getNextItem(menuItems, 1);
            }
            else if (e.code === KeyboardCode.ARROW_LEFT) {
                nextFocusableItem = this.getNextItem(menuItems, -1);
            }
        }
        if (nextFocusableItem) {
            nextFocusableItem.setAttribute("tabindex", "0");
            nextFocusableItem.focus();
        }
    }
    getNextItem(menuItems, direction) {
        if (this.currentIndex === -1) {
            this.currentIndex = direction === 1 ? 0 : menuItems.length - 1;
            return menuItems[this.currentIndex];
        }
        this.currentIndex = (this.currentIndex + direction + menuItems.length) % menuItems.length;
        return menuItems[this.currentIndex];
    }
    onStuck() {
        const scrollParent = this.scrollParent;
        if (!scrollParent) {
            return;
        }
        this.sticking.emit(this._stuck);
    }
    setMenuFloatingMode() {
        if (this.menuElements.length === 0) {
            return;
        }
        this.menuElements.forEach((element) => {
            element.open = false;
            element.floating = !this.drawerOpen;
            element.verticalContext = this.drawerOpen;
            element.setAttribute("role", "menuitem");
            element.setAttribute("tabindex", "-1");
        });
    }
    onStuckMode() {
        if (this.stuck) {
            this.enableStuckObserver();
        }
        else {
            this.disableStuckMode();
        }
    }
    enableStuckObserver() {
        if (this.observer) {
            this.observer.observe(this.container);
        }
    }
    disableStuckMode() {
        this._stuck = false;
        if (this.observer) {
            this.observer.unobserve(this.container);
        }
    }
    get title() {
        const titleElement = this.hostElement.querySelector('[slot="title"]');
        if (titleElement === null) {
            return "";
        }
        return titleElement.textContent.trim();
    }
    get scrollParent() {
        const parent = this.hostElement.offsetParent;
        if (parent === document.body || parent === document.documentElement) {
            return window;
        }
        return parent;
    }
    get canShowMenu() {
        return (!this.enableOffcanvas &&
            this.menuElements.length > 0 &&
            this.currentViewport !== Device.MOBILE &&
            !this.drawerOpen);
    }
    openDrawer() {
        this.drawerOpen = true;
    }
    closeDrawer() {
        this.drawerOpen = false;
        this.burgerButton.focus();
        this.currentIndex = -1;
    }
    collectMenuElements() {
        const menuElements = (this.menuElements = this.hostElement.querySelectorAll('[slot="menu"]'));
        this.menuLength = menuElements.length;
        this.setMenuFloatingMode();
    }
    isSlotPresent(slotName) {
        const slot = this.hostElement.querySelector(`[slot="${slotName}"]`);
        return !!slot;
    }
    renderSeachbar() {
        const renderSearch = this.currentViewport === Device.MOBILE || this.currentViewport === Device.TABLET ? true : false;
        if (this.currentViewport === Device.MOBILE && !this.searchPageUrl && this._stuck) {
            return;
        }
        if (this.searchPageUrl && (this.currentViewport === Device.MOBILE || this.currentViewport === Device.TABLET)) {
            return (h("z-button", { class: "search-page-button", variant: ButtonVariant.SECONDARY, href: this.searchPageUrl, icon: "search", size: ControlSize.X_SMALL }));
        }
        return (h("z-searchbar", { ref: (el) => (this.searchbar = el), value: this.searchString, placeholder: this.searchPlaceholder, showSearchButton: true, searchButtonIconOnly: renderSearch, size: ControlSize.X_SMALL, variant: ButtonVariant.SECONDARY, preventSubmit: this.searchString.length < 3, onSearchTyping: (e) => (this.searchString = e.detail), onKeyDown: (e) => {
                if (e.code === KeyboardCode.ARROW_RIGHT || e.code === KeyboardCode.ARROW_LEFT) {
                    e.stopPropagation();
                }
            } }));
    }
    renderProductLogos() {
        return (h(Fragment, null, this.enableZLogo && (h("img", { class: "z-logo", alt: "Logo Zanichelli" })), this.currentViewport !== Device.MOBILE && h("slot", { name: "product-logo" })));
    }
    renderMenuButton() {
        return (this.menuLength > 0 &&
            (this.enableOffcanvas || this._stuck || this.currentViewport === Device.MOBILE) && (h("button", { ref: (el) => (this.burgerButton = el), "aria-label": "Apri menu", "aria-haspopup": "menu", "aria-expanded": `${this.drawerOpen}`, "aria-controls": "menu-offcanvas", class: "drawer-trigger", onClick: this.openDrawer, onKeyUp: (ev) => {
                if (ev.code === KeyboardCode.ENTER || ev.code === KeyboardCode.SPACE) {
                    this.closeMenuButton.focus();
                }
            } }, h("z-icon", { name: "burger-menu" }))));
    }
    renderOffcanvas() {
        return (h("z-offcanvas", { variant: OffCanvasVariant.OVERLAY, transitiondirection: TransitionDirection.RIGHT, open: this.drawerOpen, onCanvasOpenStatusChanged: (ev) => (this.drawerOpen = ev.detail) }, h("div", { slot: "canvasContent" }, h("button", { ref: (el) => (this.closeMenuButton = el), class: "drawer-close", "aria-label": "Chiudi menu", onClick: this.closeDrawer, "aria-hidden": `${!this.drawerOpen}`, disabled: !this.drawerOpen }, h("z-icon", { name: "close" })), h("div", { class: "drawer-content", "aria-hidden": `${!this.drawerOpen}` }, h("slot", { name: "menu", onSlotchange: this.collectMenuElements })))));
    }
    renderStuck() {
        return (h("div", { class: "heading-stuck" }, h("div", { class: "heading-stuck-content" }, this.renderMenuButton(), h("div", { class: "heading-title" }, this.renderProductLogos(), h("slot", { name: "stucked-title" }, this.title)), this.enableSearch && this.renderSeachbar())));
    }
    getWidthMenu() {
        if (this.menuElements.length === 0) {
            return;
        }
        return Array.from(this.menuElements).reduce((acc, item) => item.getBoundingClientRect().width + acc, 100);
    }
    focusToFirstItemMenu() {
        const menuItems = Array.from(this.menuElements).map((el) => el.shadowRoot.querySelector(".menu-label"));
        menuItems[0].focus();
        this.currentIndex = 0;
    }
    handleFocusItem(e) {
        const menuItems = Array.from(this.menuElements).map((el) => el.shadowRoot.querySelector(".menu-label"));
        if (e.code === KeyboardCode.ARROW_DOWN ||
            e.code === KeyboardCode.ARROW_UP ||
            e.code === KeyboardCode.ENTER ||
            e.code === KeyboardCode.TAB) {
            return;
        }
        if (document.activeElement.tagName === "Z-MENU-SECTION" || document.activeElement.tagName === "Z-MENU") {
            return;
        }
        if (this.enableSearch && this.currentIndex === 0) {
            const input = this.searchbar.shadowRoot.querySelector("z-input input");
            input.focus();
            this.currentIndex = -1;
        }
        if (this.currentIndex !== -1) {
            menuItems[this.currentIndex].focus();
        }
    }
    componentWillLoad() {
        this.collectMenuElements();
        this.evaluateViewport();
    }
    componentDidLoad() {
        this.onStuckMode();
        if (this.enableOffcanvas) {
            return;
        }
        const menuWidth = this.getWidthMenu();
        const containerSidePadding = 50;
        this.resizeObserver = new ResizeObserver((observer) => {
            const containerWidth = observer[0].contentRect.width;
            if (this.currentViewport === Device.MOBILE) {
                return (this.enableOffcanvas = true);
            }
            if (menuWidth > containerWidth - containerSidePadding && !this.enableOffcanvas) {
                this.enableOffcanvas = true;
            }
            else if (menuWidth <= containerWidth - containerSidePadding && this.enableOffcanvas) {
                this.enableOffcanvas = false;
            }
        });
        this.resizeObserver.observe(this.container);
    }
    disconnectedCallback() {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    render() {
        const hasTopSubtitle = this.isSlotPresent("top-subtitle");
        return (h(Host, { key: '1b905f7f0c42a9688493a38353ad69282248dac3', "menu-length": this.menuLength }, h("div", { key: 'f69888ebf52067bc34385e3f455816594d9209a2', class: `heading-panel ${this.menuLength > 0 && !this.enableOffcanvas ? "has-menu" : ""}`, ref: (el) => (this.container = el) }, h("div", { key: '827f5ee62dd066de4b049453738f3a587ab34320', class: "heading-container" }, ((!this.enableSearch && this.currentViewport === Device.MOBILE) ||
            this.currentViewport !== Device.MOBILE) && (h("div", { key: 'd520fb97f1fe09340b6265be94b09ff26dc0e9cf', class: `${this.enableOffcanvas ? "p-left" : ""}` }, h("slot", { key: 'a8f1d05fd7f71603f3b63c43317859ee8c5e37bf', name: "top-subtitle" }))), h("div", { key: 'ec1b3adc2e17d8713849166799c553122d1e7c80', class: "heading-title" }, this.renderMenuButton(), !hasTopSubtitle && !this._stuck && this.renderProductLogos(), h("slot", { key: '263a9099b08065da250a1d0c228caac435dc9dd7', name: "title" }), this.enableSearch && this.currentViewport !== Device.MOBILE && this.renderSeachbar()), this.enableSearch && this.currentViewport === Device.MOBILE && this.renderSeachbar()), this.canShowMenu && (h("div", { key: '2c952c6e1b1ec608f73f5c5210ab5b5331d379bf', class: "menu-container", onKeyUp: (e) => {
                if (this.enableOffcanvas) {
                    return;
                }
                if (this.currentIndex === -1) {
                    this.focusToFirstItemMenu();
                }
                else {
                    this.handleFocusItem(e);
                }
            }, role: "hidden", tabIndex: 0 }, h("slot", { key: '0b71f1d0aa78599592213f61ee49e68daad5d04f', name: "menu", onSlotchange: this.collectMenuElements })))), this.renderOffcanvas(), this._stuck && this.renderStuck()));
    }
    static get is() { return "z-app-header"; }
    static get encapsulation() { return "shadow"; }
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
            "stuck": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Stuck mode for the header.\nYou can programmatically set it using an IntersectionObserver."
                },
                "attribute": "stuck",
                "reflect": true,
                "defaultValue": "false"
            },
            "enableOffcanvas": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "the menu bar is not displayed and a burger icon appears to open the offcanvas menu"
                },
                "attribute": "enable-offcanvas",
                "reflect": true,
                "defaultValue": "false"
            },
            "enableSearch": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable the search bar."
                },
                "attribute": "enable-search",
                "reflect": true,
                "defaultValue": "false"
            },
            "searchPlaceholder": {
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
                    "text": "Placeholder text for the search bar."
                },
                "attribute": "search-placeholder",
                "reflect": false,
                "defaultValue": "\"Cerca\""
            },
            "searchString": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Search string for the search bar."
                },
                "attribute": "search-string",
                "reflect": false,
                "defaultValue": "\"\""
            },
            "searchPageUrl": {
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
                    "text": "Url to the search page.\nSet this prop and `enableSearch` to show a link-button on mobile and tablet viewports, instead of the normal searchbar.\nThe link will also appear on the sticky header."
                },
                "attribute": "search-page-url",
                "reflect": false
            },
            "enableZLogo": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable laZ logo."
                },
                "attribute": "enable-z-logo",
                "reflect": true,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "_stuck": {},
            "currentViewport": {},
            "menuLength": {},
            "drawerOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "sticking",
                "name": "sticking",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the `stuck` state of the header changes"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "_stuck",
                "methodName": "onStuck"
            }, {
                "propName": "drawerOpen",
                "methodName": "setMenuFloatingMode"
            }, {
                "propName": "stuck",
                "methodName": "onStuckMode"
            }];
    }
    static get listeners() {
        return [{
                "name": "resize",
                "method": "evaluateViewport",
                "target": "window",
                "capture": false,
                "passive": true
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=index.js.map
