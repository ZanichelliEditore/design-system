import { proxyCustomElement, HTMLElement, createEvent, h, Fragment, Host } from '@stencil/core/internal/client';
import { p as Device, g as KeyboardCode, B as ButtonVariant, e as ControlSize, O as OffCanvasVariant, u as TransitionDirection } from './index2.js';
import { g as getDevice } from './utils.js';
import { d as defineCustomElement$c } from './index4.js';
import { d as defineCustomElement$b } from './index6.js';
import { d as defineCustomElement$a } from './index9.js';
import { d as defineCustomElement$9 } from './index10.js';
import { d as defineCustomElement$8 } from './index11.js';
import { d as defineCustomElement$7 } from './index12.js';
import { d as defineCustomElement$6 } from './index13.js';
import { d as defineCustomElement$5 } from './index14.js';
import { d as defineCustomElement$4 } from './index21.js';
import { d as defineCustomElement$3 } from './index23.js';
import { d as defineCustomElement$2 } from './index24.js';

const stylesCss = ":host{--app-header-content-max-width:100%;--app-header-top-offset:48px;--app-header-drawer-trigger-size:calc(var(--space-unit) * 4);--app-header-bg:var(--color-surface01);--app-header-stucked-bg:var(--color-surface01);--app-header-text-color:var(--color-default-text);--app-header-title-lineheight:1.25;--app-header-stucked-text-color:var(--color-default-text);position:relative;display:block;box-shadow:0 2px 4px 0 var(--shadow-color-base);color:var(--app-header-text-color)}:host,*{box-sizing:border-box}.heading-panel{position:relative;display:flex;width:100%;max-width:var(--app-header-content-max-width);flex-direction:column;flex-grow:0;flex-shrink:0;align-items:baseline;padding:calc(var(--space-unit) * 2);margin:0 auto;background:var(--app-header-bg)}:host(:empty) .heading-panel{padding:0}.heading-container{position:relative;z-index:1;display:flex;width:100%;max-width:100%;flex:1 auto;flex-direction:column;justify-content:flex-start}.heading-panel .heading-container{flex-direction:column-reverse}:host([enable-search]) .heading-panel .heading-container{flex-direction:column}:host(:not([enable-search=\"false\"])[search-page-url]) .heading-panel .heading-container{flex-direction:row}.heading-title{display:flex;width:100%;flex-direction:row;align-items:start}img.z-logo{content:url('data:image/svg+xml,<svg width=\"61\" height=\"32\" viewBox=\"0 0 61 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.9874 32C7.1595 32 0 24.8349 0 16C0 7.16513 7.1595 0 15.9874 0H45.0126C53.8405 0 61 7.16513 61 16C61 24.8349 53.8405 32 45.0126 32H15.9874Z\" fill=\"%23E2011A\"/><path d=\"M58.5435 15.9992C58.5435 23.4743 52.4892 29.5403 45.0129 29.5403C37.5367 29.5403 31.4824 23.4813 31.4824 15.9992C31.4824 8.51701 37.5367 2.45801 45.0129 2.45801C52.4892 2.45801 58.5435 8.51701 58.5435 15.9992Z\" fill=\"white\"/><path d=\"M40.7107 8.01862H49.8976V11.3158L44.139 21.7077H50.0384V24.6457H39.9785V21.4048L45.7371 10.9636H40.7107V8.01862Z\" fill=\"%23E2011A\"/><path d=\"M12.2914 24.6449C10.982 24.6449 10.271 23.8136 10.271 22.6722V7.04565H12.1718V22.9822H13.981V24.6449H12.2914Z\" fill=\"white\"/><path d=\"M25.6461 24.6448C24.2452 24.6448 23.675 23.7853 23.5342 22.6439H23.4145C22.8935 24.1446 21.5841 24.9266 19.8735 24.9266C17.2828 24.9266 15.7622 23.4964 15.7622 21.2137C15.7622 18.931 17.4236 17.6206 20.9928 17.6206H23.4145V16.4088C23.4145 14.6756 22.4641 13.7245 20.5141 13.7245C19.0428 13.7245 18.0642 14.4361 17.4025 15.5563L16.262 14.4854C16.9308 13.175 18.4021 12.0829 20.6126 12.0829C23.5623 12.0829 25.3152 13.6259 25.3152 16.2186V22.9751H26.7162V24.6378H25.6461V24.6448ZM23.4145 21.0799V19.0578H20.8942C18.733 19.0578 17.7545 19.7272 17.7545 20.9108V21.411C17.7545 22.6228 18.7049 23.3132 20.1762 23.3132C22.0558 23.3132 23.4074 22.341 23.4074 21.0799H23.4145Z\" fill=\"white\"/></svg>')}.heading-title>img.z-logo{height:calc(var(--space-unit) * 3);margin:4px var(--space-unit) 0 0}:host([stuck]) .heading-stuck .heading-title>img.z-logo{margin-top:0}::slotted([slot=\"product-logo\"]){width:32px;height:32px;margin-right:var(--space-unit);border-radius:50%}::slotted([slot=\"title\"]),.heading-stuck .heading-title>*,::slotted([slot=\"stucked-title\"]){margin:0;font-family:\"IBM Plex Serif\", serif}::slotted([slot=\"title\"]){display:-webkit-box;overflow:hidden;flex-grow:1;padding-right:calc(var(--space-unit) * 2);-webkit-box-orient:vertical;font-size:var(--font-size-6);-webkit-line-clamp:2;text-overflow:ellipsis;white-space:initial}:host(:not([menu-length=\"0\"])) .p-left{padding-left:calc(var(--app-header-drawer-trigger-size) + var(--space-unit))}:host(:is([enable-offcanvas=\"true\"]):not([menu-length=\"0\"])){padding-left:calc(var(--app-header-drawer-trigger-size) + var(--space-unit))}::slotted([slot=\"top-subtitle\"]){display:-webkit-box;overflow:hidden;max-width:80%;margin:0;-webkit-box-orient:vertical;font-family:var(--font-family-sans);font-size:14px;font-style:italic;font-weight:400;-webkit-line-clamp:2;line-height:18.2px;white-space:initial}.menu-container{display:flex;width:100%;flex:1 auto;column-gap:calc(var(--space-unit) * 4)}.menu-container:focus:focus-visible{outline:none}:host([menu-length=\"0\"]:not([enable-search])) .menu-container,.menu-container:empty{display:none}.menu-container ::slotted([open]){position:relative;z-index:3}.menu-container ::slotted([slot=\"menu\"]:not(:last-child))::after{position:absolute;top:50%;right:calc(var(--space-unit) * -2);width:var(--border-size-small);height:1em;background-color:currentcolor;content:\"\";transform:translateY(-50%)}z-searchbar{z-index:0;display:flex;width:100%;align-items:center;padding-top:calc(var(--space-unit) * 2)}.heading-stuck{position:fixed;z-index:20;top:var(--app-header-top-offset);left:0;width:100%;max-width:100%;animation:slide-stuck-heading-in 250ms ease-out;background:var(--app-header-stucked-bg);box-shadow:var(--shadow-2);color:var(--app-header-stucked-text-color)}.heading-stuck-content{display:flex;max-width:var(--app-header-content-max-width);align-items:center;padding:var(--space-unit) var(--grid-margin);margin:0 auto}.heading-stuck .heading-title{overflow:hidden}.heading-stuck .heading-title>*,::slotted([slot=\"stucked-title\"]){font-size:var(--font-size-9);font-weight:var(--font-bd);line-height:1.25}.heading-stuck .heading-title [name=\"stucked-title\"]{display:block;overflow:hidden;margin-right:calc(var(--space-unit) * 2);font-size:var(--font-size-5);text-overflow:ellipsis;white-space:nowrap}.heading-stuck-content z-button{margin-left:auto}.drawer-trigger{padding:0;border:0;margin-right:var(--space-unit);appearance:none;background:none;border-radius:0;color:inherit;cursor:pointer;outline:none}.drawer-trigger:focus:focus-visible{box-shadow:var(--shadow-focus-primary)}.drawer-trigger:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none !important}.drawer-trigger z-icon{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size);fill:currentcolor}.heading-container z-button.search-page-button{margin-left:auto}.drawer-content{display:none}z-offcanvas[open] .drawer-content{display:flex;width:100%;flex:1 auto;flex-direction:column;row-gap:calc(var(--space-unit) * 2.5)}z-offcanvas[open] .drawer-content ::slotted(z-menu){width:100%}.drawer-close{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size);padding:0;border:0;margin:var(--space-unit) 0 calc(var(--space-unit) * 2.5);appearance:none;background:transparent;border-radius:0;color:inherit;cursor:pointer;fill:currentcolor;font-size:inherit;outline:none}.drawer-close:focus-visible{box-shadow:var(--shadow-focus-primary)}@media (min-width: 768px){:host([enable-search]:not([search-page-url])) .heading-container .heading-title{flex-wrap:nowrap}z-searchbar{width:30%;padding-top:0}::slotted([slot=\"title\"]){font-size:var(--font-size-9)}.heading-title{align-items:center}.heading-container .heading-title{align-items:flex-start}div.heading-container .heading-title button,div.heading-container .heading-title z-searchbar,div.heading-container .heading-title img,div.heading-container .heading-title ::slotted([slot=\"product-logo\"]),div.heading-container .heading-title .search-page-button{margin-top:var(--space-unit)}.heading-title>img.z-logo{height:32px}.heading-panel{align-items:center;padding:calc(var(--space-unit) * 1.5) var(--grid-margin) calc(var(--space-unit) * 1.25)}.heading-panel.has-menu{padding-bottom:0}:host(:not([enable-search=\"false\"])[search-page-url]) .heading-panel .heading-container{flex-direction:column}.heading-panel .heading-container{flex-direction:column;margin-right:auto}.menu-container{flex:initial;align-items:center}:host([menu-length=\"0\"]) .menu-container:not(:empty){height:calc(var(--space-unit) * 4.5 * var(--app-header-title-lineheight))}:host(:not([enable-offcanvas=\"false\"])) .menu-container{margin-top:calc((var(--space-unit) * 1.75))}:host(:not([enable-offcanvas])) .heading-container .drawer-trigger{display:none}.heading-stuck .heading-title>*,.heading-stuck .heading-title [name=\"stucked-title\"]{font-size:var(--font-size-8)}.heading-stuck-content{padding:6px var(--grid-margin)}::slotted([slot=\"product-logo\"]){margin-right:calc(var(--space-unit) * 1.5)}:host(:not([enable-offcanvas]):not([menu-length=\"0\"])){padding-left:0}}@media (min-width: 1152px){::slotted([slot=\"product-logo\"]){margin-right:var(--space-unit)}z-searchbar{min-width:calc(var(--space-unit) * 45);flex:initial}}@keyframes slide-stuck-heading-in{0%{transform:translate3d(0, -100%, 0)}100%{transform:none}}";
const ZAppHeaderStyle0 = stylesCss;

const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";
const ZAppHeader$1 = /*@__PURE__*/ proxyCustomElement(class ZAppHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.sticking = createEvent(this, "sticking", 7);
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
    get hostElement() { return this; }
    static get watchers() { return {
        "_stuck": ["onStuck"],
        "drawerOpen": ["setMenuFloatingMode"],
        "stuck": ["onStuckMode"]
    }; }
    static get style() { return ZAppHeaderStyle0; }
}, [1, "z-app-header", {
        "stuck": [516],
        "enableOffcanvas": [1540, "enable-offcanvas"],
        "enableSearch": [516, "enable-search"],
        "searchPlaceholder": [1, "search-placeholder"],
        "searchString": [1025, "search-string"],
        "searchPageUrl": [1, "search-page-url"],
        "enableZLogo": [516, "enable-z-logo"],
        "_stuck": [32],
        "currentViewport": [32],
        "menuLength": [32],
        "drawerOpen": [32]
    }, [[9, "resize", "evaluateViewport"], [0, "keydown", "handleKeyDown"]], {
        "_stuck": ["onStuck"],
        "drawerOpen": ["setMenuFloatingMode"],
        "stuck": ["onStuckMode"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["z-app-header", "z-button", "z-divider", "z-icon", "z-input", "z-input-message", "z-list", "z-list-element", "z-list-group", "z-offcanvas", "z-searchbar", "z-tag"];
    components.forEach(tagName => { switch (tagName) {
        case "z-app-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ZAppHeader$1);
            }
            break;
        case "z-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "z-divider":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "z-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "z-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "z-input-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "z-list":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "z-list-element":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "z-list-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "z-offcanvas":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "z-searchbar":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "z-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const ZAppHeader = ZAppHeader$1;
const defineCustomElement = defineCustomElement$1;

export { ZAppHeader, defineCustomElement };

//# sourceMappingURL=z-app-header.js.map