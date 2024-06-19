import { Host, h } from "@stencil/core";
import { ButtonVariant, ControlSize, OffCanvasVariant, TransitionDirection } from "../../beans";
const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";
/**
 * @slot title - Slot for the main title
 * @slot subtitle - Slot for the bottom subtitle. It will not appear in stuck header.
 * @slot top-subtitle - Slot for the top subtitle. It will not appear in stuck header.
 * @slot stucked-title - Title for the stuck header. By default it uses the text from the `title` slot.
 * @cssprop --app-header-typography-1-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `24px`.
 * @cssprop --app-header-typography-2-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `28px`.
 * @cssprop --app-header-typography-3-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `32px`.
 * @cssprop --app-header-typography-4-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `36px`.
 * @cssprop --app-header-typography-5-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `42px`.
 * @cssprop --app-header-typography-6-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `48px`.
 * @cssprop --app-header-typography-7-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `54px`.
 * @cssprop --app-header-typography-8-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `60px`.
 * @cssprop --app-header-typography-9-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `68px`.
 * @cssprop --app-header-typography-10-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `76px`.
 * @cssprop --app-header-typography-11-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `84px`.
 * @cssprop --app-header-typography-12-size - Part of the heading typography's scale. Use it if you have to override the default value. Value: `92px`.
 * @cssprop --app-header-typography-1-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.33`.
 * @cssprop --app-header-typography-2-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.29`.
 * @cssprop --app-header-typography-3-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.25`.
 * @cssprop --app-header-typography-4-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.24`.
 * @cssprop --app-header-typography-5-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.24`.
 * @cssprop --app-header-typography-6-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.25`.
 * @cssprop --app-header-typography-7-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.2`.
 * @cssprop --app-header-typography-8-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.26`.
 * @cssprop --app-header-typography-9-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.24`.
 * @cssprop --app-header-typography-10-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.26`.
 * @cssprop --app-header-typography-11-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.2`.
 * @cssprop --app-header-typography-12-lineheight - Part of the heading typography's scale. Use it if you have to override the default value. Value: `1.2`.
 * @cssprop --app-header-typography-1-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.2 / 1em)`.
 * @cssprop --app-header-typography-2-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.4 / 1em)`.
 * @cssprop --app-header-typography-3-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.6 / 1em)`.
 * @cssprop --app-header-typography-4-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-0.8 / 1em)`.
 * @cssprop --app-header-typography-5-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1 / 1em)`.
 * @cssprop --app-header-typography-6-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.2 / 1em)`.
 * @cssprop --app-header-typography-7-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.4 / 1em)`.
 * @cssprop --app-header-typography-8-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.6 / 1em)`.
 * @cssprop --app-header-typography-9-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-1.8 / 1em)`.
 * @cssprop --app-header-typography-10-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-2 / 1em)`.
 * @cssprop --app-header-typography-11-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-2.2 / 1em)`.
 * @cssprop --app-header-typography-12-tracking - Part of the heading typography's scale. Use it if you have to override the default value. Value: `calc(-2.4 / 1em)`.
 * @cssprop --app-header-content-max-width - Use it to set header's content max width. Useful when the project use a fixed width layout. Defaults to `100%`.
 * @cssprop --app-header-height - Defaults to `auto`.
 * @cssprop --app-header-top-offset - Top offset for the stuck header. Useful when there are other fixed elements above the header. Defaults to `48px` (the height of the main topbar).
 * @cssprop --app-header-drawer-trigger-size - The size of the drawer icon. Defaults to `--space-unit * 4`.
 * @cssprop --app-header-bg - Header background color. Defaults to `--color-surface01`.
 * @cssprop --app-header-stucked-bg - Stuck header background color. Defaults to `--color-surface01`.
 * @cssprop --app-header-text-color - Text color. Useful on `hero` variant to set text color based on the colors of the background image. Defaults to `--color-default-text`.
 * @cssprop --app-header-title-font-size - Variable to customize the title's font size.
 * NOTE: Only use one of the exported `--app-header-typography-*-size` as a value.
 * Defaults to `--app-header-typography-3-size`.
 * @cssprop --app-header-title-lineheight - Variable to customize the title's line-height.
 * NOTE: Only use one of the exported `--app-header-typography-*-lineheight` as a value and use the same level as the one of the font size.
 * Defaults to `--app-header-typography-3-lineheight`.
 * @cssprop --app-header-title-letter-spacing - Variable to customize the title's letter-spacing.
 * NOTE: Only use one of the exported `--app-header-typography-*-tracking` as a value and use the same level as the one of the font size.
 * Defaults to `--app-header-typography-3-tracking`.
 * @cssprop --app-header-stucked-text-color - Stuck header text color. Defaults to `--color-default-text`.
 */
export class ZAppHeader {
    constructor() {
        this.observer = SUPPORT_INTERSECTION_OBSERVER &&
            new IntersectionObserver(([entry]) => {
                this._stuck = !entry.isIntersecting;
            }, {
                threshold: 0.5,
            });
        this.stuck = false;
        this.hero = undefined;
        this.overlay = false;
        this.flow = "auto";
        this.drawerOpen = false;
        this.enableSearch = false;
        this.searchPlaceholder = "Cerca";
        this.searchString = "";
        this.searchPageUrl = undefined;
        this._stuck = false;
        this.currentViewport = "mobile";
        this.menuLength = undefined;
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.collectMenuElements = this.collectMenuElements.bind(this);
    }
    evaluateViewport() {
        if (window.innerWidth < 768) {
            this.currentViewport = "mobile";
        }
        else if (window.innerWidth >= 768 && window.innerWidth < 1152) {
            this.currentViewport = "tablet";
        }
        else {
            this.currentViewport = "desktop";
        }
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
        const elements = this.menuElements;
        elements.forEach((element) => {
            element.open = false;
            element.floating = !this.drawerOpen;
            element.verticalContext = this.drawerOpen;
        });
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
        return this.flow !== "offcanvas" && this.currentViewport !== "mobile" && !this.drawerOpen;
    }
    get canShowSearchbar() {
        if (!this.enableSearch) {
            return false;
        }
        // Always show the searchbar on desktop, even if a searchPageUrl is set
        if (this.searchPageUrl) {
            return this.currentViewport === "desktop";
        }
        return true;
    }
    /**
     * Whether the header has a hero image, either as a prop or as a slot.
     */
    get hasHero() {
        return !!this.hero || this.hostElement.querySelector("[slot=hero]") !== null;
    }
    openDrawer() {
        this.drawerOpen = true;
    }
    closeDrawer() {
        this.drawerOpen = false;
    }
    collectMenuElements() {
        const menuElements = (this.menuElements = this.hostElement.querySelectorAll('[slot="menu"]'));
        this.menuLength = menuElements.length;
        this.setMenuFloatingMode();
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
    onStuckMode() {
        if (this.stuck) {
            this.enableStuckObserver();
        }
        else {
            this.disableStuckMode();
        }
    }
    renderSearchLinkButton() {
        if (!this.enableSearch || !this.searchPageUrl || this.currentViewport === "desktop") {
            return null;
        }
        return (h("z-button", { class: "search-page-button", variant: ButtonVariant.SECONDARY, href: this.searchPageUrl, icon: "search", size: ControlSize.X_SMALL }));
    }
    renderSeachbar(searchButtonIconOnly) {
        return (h("z-searchbar", { value: this.searchString, placeholder: this.searchPlaceholder, showSearchButton: true, searchButtonIconOnly: searchButtonIconOnly, size: ControlSize.X_SMALL, variant: ButtonVariant.SECONDARY, preventSubmit: this.searchString.length < 3, onSearchTyping: (e) => (this.searchString = e.detail) }));
    }
    componentDidLoad() {
        this.collectMenuElements();
        this.onStuckMode();
        this.evaluateViewport();
    }
    render() {
        return (h(Host, { key: '6ef78f216bf32166c80027e6c8d8c3c8b46e11a4', "menu-length": this.menuLength }, this.hasHero && (h("div", { key: '097f49ab84c9c5a02b1919bbf0d8bea41a9e7475', class: "hero-container" }, h("slot", { key: 'e68c20961233eec80133281adfe2e5068de05ca9', name: "hero" }, this.hero && (h("img", { key: '3f639bca7f3c5ae1f9f1ea088f4f072a11b398fd', alt: "", src: this.hero }))))), h("div", { key: '7f9a9025ee6b36ce4ddf119fe29afc28cff3f575', class: "heading-panel", ref: (el) => (this.container = el) }, h("div", { key: 'bf9e7e0634b79f86f886dbad016c1ee7c3a2bd0c', class: "heading-container" }, h("div", { key: '5f105d5a5e0d1545b953049c2f10ea1e409c5dd3', class: "heading-subtitle" }, h("slot", { key: 'e5257749958900cbdf0da3abc97647a6ca199a9a', name: "top-subtitle" })), h("div", { key: 'cd422b72e4fa5a1ddb400d0af44a87e28e14e496', class: "heading-title" }, this.menuLength > 0 && (h("button", { key: '8d0fd05ecac894b7c123c2b1850636f5c42445bb', class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, h("z-icon", { key: '7d3c4426ed0cb81f5d871e1e9d4f0a08c6e4bd1a', name: "burger-menu" }))), h("slot", { key: 'eb4a376c9edf06a839e2eda8cae3ca9f5c0c98f7', name: "title" }), this.renderSearchLinkButton()), h("div", { key: 'ca4175ad587aaa14435112451e616b9d40f4058b', class: "heading-subtitle" }, h("slot", { key: '923548867c7ecf93e7e4d46cdd68aff309a301eb', name: "subtitle" }))), (this.canShowMenu || this.canShowSearchbar) && (h("div", { key: 'b424522341c597059c9be302d30c5af85c3c1d12', class: "menu-container" }, this.canShowMenu && (h("slot", { key: '97b5bd01961bb07d13dc16cdf0bda52ac7cf7261', name: "menu", onSlotchange: this.collectMenuElements })), this.canShowSearchbar && this.renderSeachbar(this.currentViewport !== "desktop")))), h("z-offcanvas", { key: '42d89b3e9697aaf5c0781d69c6aca4a1fe44c389', variant: OffCanvasVariant.OVERLAY, transitiondirection: TransitionDirection.RIGHT, open: this.drawerOpen, onCanvasOpenStatusChanged: (ev) => (this.drawerOpen = ev.detail) }, h("button", { key: '29e9eedfba19cca2316bdde81d52052164fe2003', class: "drawer-close", "aria-label": "Chiudi menu", onClick: this.closeDrawer, slot: "canvasContent", "aria-hidden": `${!this.drawerOpen}`, disabled: !this.drawerOpen }, h("z-icon", { key: '3f63af4cc3fc4e632a797b16e8530affc6f9ea79', name: "close" })), h("div", { key: '9925e208c3a9f45eebbbb210ad5b23041201b239', class: "drawer-content", slot: "canvasContent", "aria-hidden": `${!this.drawerOpen}` }, h("slot", { key: 'b687cd86e3e6dcb1cd5c8c5ac535dfdf9d1b9dd2', name: "menu", onSlotchange: this.collectMenuElements }))), this._stuck && (h("div", { key: 'a5eedb131fd6a50dad224c5016990b5a9256764b', class: "heading-stuck" }, h("div", { key: '9747f43c0c824f3c98c299071f92fa7d0d695529', class: "heading-stuck-content" }, this.menuLength > 0 && (h("button", { key: 'ad7fadb424d1b59852bd6f7bbfc875555495c163', class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, h("z-icon", { key: '4dbe75545f5e15fac2bd81c6726294d6f848681c', name: "burger-menu" }))), h("div", { key: 'a22d676527aa51b34942547a36651d85163b85ac', class: "heading-title" }, h("slot", { key: 'ba141592baf287d65faa4624f9c32c04471073d5', name: "stucked-title" }, this.title)), this.renderSearchLinkButton(), this.canShowSearchbar && this.currentViewport === "desktop" && this.renderSeachbar(false))))));
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
            "hero": {
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
                    "text": "Set the hero image source for the header.\nYou can also use a [slot=\"hero\"] node for advanced customization."
                },
                "attribute": "hero",
                "reflect": false
            },
            "overlay": {
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
                    "text": "Should place an overlay over the hero image.\nUseful for legibility purpose."
                },
                "attribute": "overlay",
                "reflect": true,
                "defaultValue": "false"
            },
            "flow": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "\"auto\" | \"stack\" | \"offcanvas\"",
                    "resolved": "\"auto\" | \"offcanvas\" | \"stack\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Control menu bar position in the header.\n- auto: the menu bar is positioned near the title\n- stack: the menu bar is positioned below the title\n- offcanvas: the menu bar is not displayed and a burger icon appears to open the offcanvas menu"
                },
                "attribute": "flow",
                "reflect": true,
                "defaultValue": "\"auto\""
            },
            "drawerOpen": {
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
                    "text": "The opening state of the drawer."
                },
                "attribute": "drawer-open",
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
            }
        };
    }
    static get states() {
        return {
            "_stuck": {},
            "currentViewport": {},
            "menuLength": {}
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
            }];
    }
}
//# sourceMappingURL=index.js.map
