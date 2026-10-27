import { h, F as Fragment, r as registerInstance, c as createEvent, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { g as KeyboardCode, e as ControlSize, B as ButtonVariant, u as TransitionDirection, v as OffCanvasVariant, c as ButtonType, a1 as IconPosition, D as DividerSize, h as DividerOrientation, I as InputType, k as LabelPosition, f as InputStatus, i as ListSize, m as ListType, j as ExpandableListButtonAlign, l as ListDividerType, E as ExpandableListStyle } from './index-DdetsoIY.js';
import { B as Breakpoints } from './breakpoints-Q-tWjk7P.js';
import { a as containsElement, r as randomId, d as boolean, q as getTabbableElements, u as handleEnterKeydSubmit } from './utils-CJc3A9NX.js';
import { C as COLOR_INDICATOR_ICONS, I as ICONS } from './iconset-D1c5gR45.js';
import { R as ReactiveControllerHost, F as FocusTrapController } from './reactive-controller-Bp_OSSRX.js';

const stylesCss$c = () => `:host{position:relative;display:block;box-shadow:var(--shadow-2)}:host,*{box-sizing:border-box}.heading-panel{--title-line-height:1.333;--title-font-size:var(--font-size-6);position:relative;display:flex;width:100%;max-width:var(--app-header-content-max-width, 100%);flex-direction:column;flex-grow:0;flex-shrink:0;align-items:baseline;padding:var(--space-unit) var(--grid-margin);margin:0 auto;background:var(--app-header-bg, var(--color-surface01))}:host(:empty) .heading-panel{padding:0}.heading-container{position:relative;z-index:1;display:flex;width:100%;max-width:100%;flex:1 auto;flex-direction:column;justify-content:flex-start}.heading-panel.has-menubar{padding-bottom:0}.heading-panel .heading-container{flex-direction:column-reverse}:host([enable-search]) .heading-panel .heading-container{flex-direction:column}:host([enable-search][search-page-url]) .heading-panel .heading-container{flex-direction:row}.heading-title{display:flex;width:100%;flex-direction:row;align-items:flex-end}.heading-container>.heading-title:not(:last-child){margin-right:var(--space-unit)}.z-logo,.search-page-button{display:flex;height:calc(var(--title-font-size) * var(--title-line-height));align-items:center}.z-logo img{height:24px;margin:0 var(--space-unit) 0 0;content:url('data:image/svg+xml,<svg width="61" height="32" viewBox="0 0 61 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9874 32C7.1595 32 0 24.8349 0 16C0 7.16513 7.1595 0 15.9874 0H45.0126C53.8405 0 61 7.16513 61 16C61 24.8349 53.8405 32 45.0126 32H15.9874Z" fill="%23E2011A"/><path d="M58.5435 15.9992C58.5435 23.4743 52.4892 29.5403 45.0129 29.5403C37.5367 29.5403 31.4824 23.4813 31.4824 15.9992C31.4824 8.51701 37.5367 2.45801 45.0129 2.45801C52.4892 2.45801 58.5435 8.51701 58.5435 15.9992Z" fill="white"/><path d="M40.7107 8.01862H49.8976V11.3158L44.139 21.7077H50.0384V24.6457H39.9785V21.4048L45.7371 10.9636H40.7107V8.01862Z" fill="%23E2011A"/><path d="M12.2914 24.6449C10.982 24.6449 10.271 23.8136 10.271 22.6722V7.04565H12.1718V22.9822H13.981V24.6449H12.2914Z" fill="white"/><path d="M25.6461 24.6448C24.2452 24.6448 23.675 23.7853 23.5342 22.6439H23.4145C22.8935 24.1446 21.5841 24.9266 19.8735 24.9266C17.2828 24.9266 15.7622 23.4964 15.7622 21.2137C15.7622 18.931 17.4236 17.6206 20.9928 17.6206H23.4145V16.4088C23.4145 14.6756 22.4641 13.7245 20.5141 13.7245C19.0428 13.7245 18.0642 14.4361 17.4025 15.5563L16.262 14.4854C16.9308 13.175 18.4021 12.0829 20.6126 12.0829C23.5623 12.0829 25.3152 13.6259 25.3152 16.2186V22.9751H26.7162V24.6378H25.6461V24.6448ZM23.4145 21.0799V19.0578H20.8942C18.733 19.0578 17.7545 19.7272 17.7545 20.9108V21.411C17.7545 22.6228 18.7049 23.3132 20.1762 23.3132C22.0558 23.3132 23.4074 22.341 23.4074 21.0799H23.4145Z" fill="white"/></svg>')}.product-logo{display:none}.product-logo ::slotted([slot="product-logo"]){width:32px;height:32px;margin-right:var(--space-unit)}.product-logo ::slotted([slot="product-logo"]) img{width:100%;height:100%;object-fit:cover}::slotted([slot="title"]),::slotted([slot="stucked-title"]),.stucked-title{margin:0;color:var(--app-header-text-color, var(--color-default-text));font-family:var(--font-family-serif);font-weight:var(--font-sb)}::slotted([slot="title"]){display:-webkit-box;overflow:hidden;align-self:self-end;-webkit-box-orient:vertical;font-size:var(--title-font-size);-webkit-line-clamp:2;line-clamp:2;line-height:var(--title-line-height);text-overflow:ellipsis}::slotted(a:is([slot="title"],[slot="stucked-title"])){text-decoration:none}:host([enable-search]) ::slotted([slot="title"])+*{margin-left:calc(var(--space-unit) * 2)}::slotted([slot="top-subtitle"]){display:-webkit-box;overflow:hidden;margin:0;-webkit-box-orient:vertical;color:var(--color-default-text);font-family:var(--font-family-sans);font-size:var(--font-size-2);font-style:italic;font-weight:var(--font-rg);-webkit-line-clamp:2;line-clamp:2}.search-page-button{align-self:end;margin-left:auto}.menu-container{display:flex;flex:1 auto;column-gap:calc(var(--space-unit) * 4)}.menu-container:focus:focus-visible{outline:none}:host([menu-length="0"]) .menu-container,.menu-container:empty{display:none}.menu-container ::slotted([open]){position:relative;z-index:3}.menu-container ::slotted([slot="menu"]:not(:last-child))::after{position:absolute;top:calc(1.5em / 2);right:calc(var(--space-unit) * -2);width:var(--border-size-small);height:1em;background-color:var(--color-default-icon);content:"";font-size:var(--font-size-3);transform:translateY(-50%)}z-searchbar{z-index:0;width:100%}.heading-stuck{position:fixed;z-index:20;top:var(--app-header-top-offset, 48px);left:0;width:100%;max-width:100%;animation:slide-stuck-heading-in 250ms ease-out;background:var(--app-header-stucked-bg, var(--color-surface01));box-shadow:var(--shadow-2);color:var(--app-header-stucked-text-color, var(--color-default-text))}.heading-stuck-content{display:flex;max-width:var(--app-header-content-max-width, 100%);align-items:center;padding:var(--space-unit) var(--grid-margin);margin:0 auto}.heading-stuck .heading-title{--title-font-size:var(--font-size-5);--title-line-height:1.4;overflow:hidden;width:initial;align-items:center}.heading-stuck .stucked-title{overflow:hidden;font-size:var(--title-font-size);line-height:var(--title-line-height);text-overflow:ellipsis;white-space:nowrap}.drawer-trigger,::slotted([slot="menu-button"]){display:flex;height:calc(var(--title-font-size) * var(--title-line-height));align-items:center;padding:0;border:0;margin-right:var(--space-unit);appearance:none;background:none;border-radius:0;color:inherit;cursor:pointer;outline:none}.drawer-trigger:focus:focus-visible z-icon{box-shadow:var(--shadow-focus-primary)}.drawer-trigger z-icon{--z-icon-width:calc(var(--space-unit) * 4);--z-icon-height:calc(var(--space-unit) * 4);fill:var(--color-default-icon)}.drawer-content{display:none}z-offcanvas{--z-offcanvas--top-space:var(--app-header-top-offset)}z-offcanvas[open] .drawer-content{display:flex;width:100%;flex:1 auto;flex-direction:column}z-offcanvas[open] .drawer-content ::slotted(z-menu){width:100%}.drawer-close{--z-icon-width:calc(var(--space-unit) * 4);--z-icon-height:calc(var(--space-unit) * 4);padding:0;border:0;margin:var(--space-unit) 0 calc(var(--space-unit) * 2.5);appearance:none;background:transparent;border-radius:0;cursor:pointer;outline:none}.drawer-close z-icon{fill:var(--color-default-icon)}.drawer-close:focus:focus-visible{box-shadow:var(--shadow-focus-primary)}.heading-block{display:flex;width:100%;flex-direction:column}@media (max-width: 767px){:host([enable-search]) .heading-panel .heading-container{row-gap:calc(var(--space-unit) * 1.5)}:host([enable-offcanvas]:not([menu-length="0"])) .top-subtitle{padding-left:calc(var(--space-unit) * 4 + var(--space-unit))}.heading-block>.top-subtitle{margin-top:calc(var(--space-unit) * 0.5)}}@media (min-width: 768px){.heading-panel{--title-font-size:var(--font-size-9)}:host([enable-search][search-page-url]) .heading-panel .heading-container{flex-direction:column}.heading-panel .heading-container{flex-direction:column;margin-right:auto}.z-logo img{height:32px}.product-logo{display:flex;height:calc(var(--title-font-size) * var(--title-line-height));align-items:center}.has-top-subtitle .z-logo{display:none}z-searchbar{width:260px;min-width:260px;align-self:end;padding-bottom:var(--space-unit);margin-left:auto}::slotted([slot="top-subtitle"]){margin-top:calc(var(--space-unit) * 0.5);margin-bottom:calc(var(--space-unit) * -0.5)}.menu-container{flex:initial}.menu-container>[role="menubar"]{display:contents}:host(:not([enable-offcanvas])) .menu-container{margin-top:calc((var(--space-unit) * 1.75))}:host(:not([enable-offcanvas])) .heading-container .drawer-trigger{display:none}.heading-stuck .heading-title{--title-font-size:var(--font-size-8);--title-line-height:1.5}.heading-stuck-content{padding:6px var(--grid-margin)}.heading-stuck .search-page-button{padding-bottom:var(--space-unit)}:host(:not([enable-offcanvas],[menu-length="0"])){padding-left:0}}@media (min-width: 1152px){z-searchbar{width:380px;min-width:380px}}@keyframes slide-stuck-heading-in{0%{transform:translate3d(0, -100%, 0)}100%{transform:none}}`;

const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";
const ZAppHeader = class {
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
            element.verticalContext = this.drawerOpen;
        });
    }
    onStuckChange() {
        var _a, _b;
        if (!this.container) {
            return;
        }
        if (this.stuck) {
            (_a = this.stuckIntersecObserver) === null || _a === void 0 ? void 0 : _a.observe(this.container);
        }
        else {
            this._stuck = false;
            (_b = this.stuckIntersecObserver) === null || _b === void 0 ? void 0 : _b.unobserve(this.container);
        }
    }
    get title() {
        var _a;
        return (_a = this.hostElement.querySelector('[slot="title"]')) === null || _a === void 0 ? void 0 : _a.textContent.trim();
    }
    get scrollParent() {
        const parent = this.hostElement.offsetParent;
        if (parent === document.body || parent === document.documentElement) {
            return window;
        }
        return parent;
    }
    get canShowMenu() {
        return !this.enableOffcanvas && this.menuElements.length > 0 && !this.isMobile && !this.drawerOpen;
    }
    get focusableMenu() {
        return this.menuElements.find((el) => el.htmlTabindex === 0);
    }
    openDrawer() {
        this.drawerOpen = true;
        this.menuElements.forEach((element, index) => (element.htmlTabindex = index === 0 ? 0 : -1));
        setTimeout(() => this.menuElements[0].setFocus(), 400); /* wait for the 400ms offcanvas transition */
    }
    closeDrawer() {
        this.drawerOpen = false;
        setTimeout(() => this.burgerButton.focus(), 100);
    }
    collectMenuElements() {
        this.menuElements = Array.from(this.hostElement.querySelectorAll('[slot="menu"]'));
        this.menuElements.forEach((element, index) => (element.htmlTabindex = index === 0 ? 0 : -1));
        this.menuLength = this.menuElements.length;
        if (!this.enableOffcanvas) {
            this.menuWidth =
                this.menuElements.reduce((acc, el) => acc + el.getBoundingClientRect().width, 0) +
                    (this.menuLength - 1) * 32 /* 32px is the gap between each menu item */;
        }
        this.setMenuFloatingMode();
    }
    /** Automatically use offcanvas mode when the menubar doesn't fit in the header. */
    setupMenuResizeObserver() {
        if (this.enableOffcanvas) {
            return;
        }
        this.menuResizeObserver = new ResizeObserver((entries) => {
            if (this.isMobile) {
                this.enableOffcanvas = true;
                return;
            }
            const containerWidth = entries[0].contentBoxSize[0].inlineSize;
            if (this.menuWidth === 0) {
                return;
            }
            if (this.menuWidth > containerWidth && !this.enableOffcanvas) {
                this.enableOffcanvas = true;
            }
            else if (this.menuWidth <= containerWidth && this.enableOffcanvas) {
                this.enableOffcanvas = false;
            }
        });
        this.menuResizeObserver.observe(this.container);
    }
    hasSlot(slotName) {
        return this.hostElement.querySelector(`[slot="${slotName}"]`) !== null;
    }
    moveFocus(current, receiver) {
        current.htmlTabindex = -1;
        receiver.setFocus();
    }
    onOffcanvasKeydown(ev) {
        var _a, _b;
        if (ev.key !== KeyboardCode.TAB || !this.drawerOpen) {
            return;
        }
        const closestMenu = ev.target.closest("z-menu");
        if (closestMenu) {
            ev.preventDefault();
            ev.stopPropagation();
            // restore tabindex to the zmenu containing the focused element
            closestMenu.htmlTabindex = 0;
            this.closeDrawerButton.focus();
        }
        else if (ev.target === this.closeDrawerButton) {
            ev.preventDefault();
            ev.stopPropagation();
            if (ev.shiftKey) {
                // give focus to the last open menu if any or the last menu otherwhise
                ((_a = this.menuElements.filter((menu) => menu.open).pop()) !== null && _a !== void 0 ? _a : this.menuElements[this.menuLength - 1]).setFocus();
            }
            else {
                // give focus to the first open menu if any or the first menu otherwhise
                ((_b = this.menuElements.find((menu) => menu.open)) !== null && _b !== void 0 ? _b : this.menuElements[0]).setFocus();
            }
        }
    }
    /** Close each menu except the one receiving focus/click, if any */
    manageMenus(ev) {
        const targetMenu = this.menuElements.find((menu) => containsElement(menu, ev.target));
        if (targetMenu) {
            this.menuElements.forEach((menu) => {
                if (menu === targetMenu) {
                    return;
                }
                menu.htmlTabindex = -1;
                if (!this.drawerOpen) {
                    menu.open = false;
                }
            });
        }
        else if (!this.drawerOpen) {
            this.menuElements.forEach((menu) => {
                menu.open = false;
            });
        }
    }
    handleKeydown(ev) {
        var _a, _b;
        if (ev.key === KeyboardCode.ESC && this.drawerOpen) {
            this.closeDrawer();
            return;
        }
        if (!this.menuElements.some((elem) => elem.contains(ev.target))) {
            return;
        }
        const current = this.focusableMenu;
        const currentIndex = this.menuElements.indexOf(current);
        let receiver;
        if ((ev.key === KeyboardCode.ARROW_RIGHT && !current.verticalContext) ||
            (ev.key === KeyboardCode.ARROW_DOWN && current.verticalContext)) {
            receiver = (_a = this.menuElements[currentIndex + 1]) !== null && _a !== void 0 ? _a : this.menuElements[0];
        }
        else if ((ev.key === KeyboardCode.ARROW_LEFT && !current.verticalContext) ||
            (ev.key === KeyboardCode.ARROW_UP && current.verticalContext)) {
            receiver = (_b = this.menuElements[currentIndex - 1]) !== null && _b !== void 0 ? _b : this.menuElements[this.menuLength - 1];
        }
        if (!receiver) {
            return;
        }
        if (ev.key === KeyboardCode.ARROW_UP && current.verticalContext) {
            if (receiver.open) {
                current.htmlTabindex = -1;
                receiver.focusLastItem();
                return;
            }
        }
        this.moveFocus(current, receiver);
    }
    renderSeachbar() {
        if (this.isMobile && !this.searchPageUrl && this._stuck) {
            return;
        }
        if (this.searchPageUrl && (this.isMobile || this.isTablet)) {
            return (h("z-button", { class: "search-page-button", variant: ButtonVariant.SECONDARY, href: this.searchPageUrl, icon: "search", size: ControlSize.X_SMALL }));
        }
        return (h("z-searchbar", { htmlid: "app-header-searchbar", value: this.searchString, placeholder: this.searchPlaceholder, label: this.searchLabel, htmlAriaLabel: this.searchLabel, showSearchButton: true, searchButtonIconOnly: this.isMobile || this.isTablet, searchButtonLabel: this.isMobile || this.isTablet ? undefined : this.searchButtonLabel, size: ControlSize.X_SMALL, variant: ButtonVariant.SECONDARY, preventSubmit: this.searchString.length < 3, onSearchTyping: (e) => (this.searchString = e.detail) }));
    }
    renderProductLogos() {
        return (h(Fragment, null, this.enableZLogo && (h("span", { class: "z-logo" }, h("img", { alt: "Logo Zanichelli" }))), this.hostElement.querySelector("[slot='product-logo']") && (h("span", { class: "product-logo" }, h("slot", { name: "product-logo" })))));
    }
    renderMenuButton() {
        return (this.menuLength > 0 &&
            (this.enableOffcanvas || this._stuck || this.isMobile) && (h("button", { ref: (el) => (this.burgerButton = el), class: "drawer-trigger", "aria-label": "Apri menu", "aria-haspopup": "menu", "aria-expanded": `${this.drawerOpen}`, "aria-controls": "offcanvas-menu", onClick: this.openDrawer }, h("z-icon", { name: "burger-menu" }))));
    }
    renderOffcanvas() {
        return (h("z-offcanvas", { id: "offcanvas-menu", variant: OffCanvasVariant.OVERLAY, transitiondirection: TransitionDirection.RIGHT, open: this.drawerOpen, onCanvasOpenStatusChanged: (ev) => (this.drawerOpen = ev.detail), onKeyDown: this.onOffcanvasKeydown }, h("div", { slot: "canvasContent" }, h("button", { ref: (el) => (this.closeDrawerButton = el), class: "drawer-close", "aria-label": "Chiudi menu", onClick: this.closeDrawer, "aria-hidden": `${!this.drawerOpen}`, disabled: !this.drawerOpen }, h("z-icon", { name: "close" })), h("div", { class: "drawer-content", "aria-hidden": `${!this.drawerOpen}` }, h("slot", { name: "menu", onSlotchange: this.collectMenuElements })))));
    }
    renderStuck() {
        return (h("div", { class: "heading-stuck" }, h("div", { class: "heading-stuck-content" }, this.renderMenuButton(), h("div", { class: "heading-title" }, this.renderProductLogos(), h("div", { class: "stucked-title" }, h("slot", { name: "stucked-title" }, this.title))), this.enableSearch && this.renderSeachbar())));
    }
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sticking = createEvent(this, "sticking", 7);
        /**
         * Stuck mode for the header.
         * You can programmatically set it using an IntersectionObserver.
         */
        this.stuck = false;
        /**
         * When enabled, the menu bar is not displayed and a burger icon appears to open the offcanvas menu. Automatically enabled on mobile and when the menu items overflow the container.
         */
        this.enableOffcanvas = false;
        /**
         * Enable the search bar.
         */
        this.enableSearch = false;
        /**
         * Visible label for the search bar.
         */
        this.searchLabel = "Cerca";
        /**
         * Search string for the search bar.
         */
        this.searchString = "";
        /**
         * Enable laZ logo.
         */
        this.enableZLogo = true;
        /**
         * The opening state of the drawer.
         */
        this.drawerOpen = false;
        /**
         * The stuck state of the bar.
         */
        this._stuck = false;
        this.isMobile = true;
        this.isTablet = false;
        this.menuElements = [];
        this.stuckIntersecObserver = SUPPORT_INTERSECTION_OBSERVER
            ? new IntersectionObserver(([entry]) => {
                this._stuck = !entry.isIntersecting;
            }, { threshold: 0.5 })
            : undefined;
        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.collectMenuElements = this.collectMenuElements.bind(this);
        this.onOffcanvasKeydown = this.onOffcanvasKeydown.bind(this);
    }
    componentWillLoad() {
        this.collectMenuElements();
        // mobile and tablet media queries listeners
        const mobileMediaQuery = window.matchMedia(`(max-width: ${Breakpoints.MOBILE}px)`);
        this.isMobile = mobileMediaQuery.matches;
        mobileMediaQuery.addEventListener("change", (e) => (this.isMobile = e.matches));
        const tabletMediaQuery = window.matchMedia(`(min-width: ${Breakpoints.MOBILE + 1}px) and (max-width: ${Breakpoints.TABLET}px)`);
        this.isTablet = tabletMediaQuery.matches;
        tabletMediaQuery.addEventListener("change", (e) => (this.isTablet = e.matches));
    }
    componentDidLoad() {
        this.onStuckChange();
        this.setupMenuResizeObserver();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.menuResizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    renderTopSubtitle() {
        if (!this.hasSlot("top-subtitle") || (this.enableSearch && this.isMobile)) {
            return;
        }
        return (h("div", { class: { "top-subtitle": true, "has-product-logo": this.hasSlot("product-logo") } }, h("slot", { name: "top-subtitle" })));
    }
    render() {
        const hasTopSubtitle = this.hasSlot("top-subtitle");
        return (h(Host, { key: '4e7fcf0c48f285c14c019bad4e725f6d9d0cd64a', "menu-length": this.menuLength }, h("div", { key: '7ee7ac065ceebae8fa37bf3ea908065c5ee38f6e', class: { "heading-panel": true, "has-menubar": this.menuLength > 0 && !this.enableOffcanvas }, ref: (el) => (this.container = el) }, h("div", { key: 'bbd63523bae503daa51ad4202e6720aca78ad071', class: { "heading-container": true, "has-top-subtitle": hasTopSubtitle } }, h("div", { key: 'ceef524dac1c9f2c05de0a77b0bbd7168b52632a', class: "heading-block" }, h("div", { key: 'e412daa7808e33aa993b784df05d0df507bc3606', class: "heading-title" }, h("slot", { key: 'd937a0672f5ad930b50eb5f34da4cf375c364859', name: "menu-button" }, this.renderMenuButton()), !this._stuck && this.renderProductLogos(), h("div", { key: '730715ab6cf2b63b7567441f1cedff6c99ddc0a3', class: "title-container" }, !this.isMobile && this.renderTopSubtitle(), h("slot", { key: '3d529b926b94ff5f84d50076b62d3cd4c17d8f9a', name: "title" })), this.enableSearch && !this.isMobile && this.renderSeachbar()), this.isMobile && this.renderTopSubtitle()), this.enableSearch && this.isMobile && this.renderSeachbar()), h("nav", { key: '261e72b97ce25fe5e7568eb1ec80a070ee493236', class: "menu-container", "aria-label": this.title || undefined }, this.canShowMenu && (h("div", { key: '8a015467b1b15a618bc79b476c42c888537ed745', role: "menubar", "aria-label": this.title || undefined }, h("slot", { key: 'd25ac9139704729b1a108eabcc7f9eb39fec2771', name: "menu", onSlotchange: this.collectMenuElements }))))), this.renderOffcanvas(), this._stuck && this.renderStuck()));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "_stuck": [{
                "onStuck": 0
            }],
        "drawerOpen": [{
                "setMenuFloatingMode": 0
            }],
        "stuck": [{
                "onStuckChange": 0
            }]
    }; }
};
ZAppHeader.style = stylesCss$c();

const stylesCss$b = () => `.sc-z-button-h{display:inline-block;--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:0;--z-icon-left-margin:0}[disabled].sc-z-button-h:not([disabled="false"]){pointer-events:none}.sc-z-button-h .z-button--container.sc-z-button{display:inline-flex;width:100%;box-sizing:border-box;align-items:center;justify-content:center;padding:0;border-width:var(--border-size-medium);border-style:solid;border-radius:var(--border-radius);column-gap:var(--space-unit);cursor:pointer;fill:currentcolor;font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.3px;line-height:1;outline:none;text-decoration:none;text-transform:uppercase;white-space:nowrap}.sc-z-button-h .z-button--container.sc-z-button:focus:focus-visible{box-shadow:var(--shadow-focus-primary)}.sc-z-button-h .z-button--container.z-button--has-text.sc-z-button{min-width:calc(var(--space-unit) * 8);padding:0 calc(var(--space-unit) * 2)}[icon-position="right"].sc-z-button-h .z-button--container.z-button--has-text.sc-z-button{flex-direction:row-reverse}[size="big"].sc-z-button-h .z-button--container.sc-z-button{min-width:44px;height:44px}[size="small"].sc-z-button-h .z-button--container.sc-z-button{min-width:36px;height:36px}[size="x-small"].sc-z-button-h .z-button--container.sc-z-button{min-width:32px;height:32px}[variant="primary"].sc-z-button-h .z-button--container.sc-z-button{border-color:var(--color-primary01);background-color:var(--color-primary01);color:var(--color-text-inverse)}@media (hover: hover){[variant="primary"].sc-z-button-h .z-button--container.sc-z-button:hover{border-color:var(--color-hover-primary);background-color:var(--color-hover-primary);color:var(--color-text-inverse)}}[variant="primary"].sc-z-button-h .z-button--container.sc-z-button:active{border-color:var(--color-pressed-primary);background-color:var(--color-pressed-primary);box-shadow:var(--shadow-2);color:var(--color-text-inverse)}[variant="primary"][disabled].sc-z-button-h:not([disabled="false"]) .z-button--container.sc-z-button{border-color:var(--color-disabled01);background-color:var(--color-disabled01);color:var(--color-disabled03)}[variant="secondary"].sc-z-button-h .z-button--container.sc-z-button{border-color:var(--color-primary01);background-color:var(--color-button-secondary);color:var(--color-primary01)}@media (hover: hover){[variant="secondary"].sc-z-button-h .z-button--container.sc-z-button:hover{border-color:var(--color-hover-primary);background-color:var(--color-button-secondary);color:var(--color-hover-primary)}}[variant="secondary"].sc-z-button-h .z-button--container.sc-z-button:active{border-color:var(--color-pressed-primary);background-color:var(--color-button-secondary);box-shadow:var(--shadow-2);color:var(--color-pressed-primary)}[variant="secondary"][disabled].sc-z-button-h:not([disabled="false"]) .z-button--container.sc-z-button{border-color:var(--color-disabled01);background-color:var(--color-button-secondary);color:var(--color-disabled03)}[variant="tertiary"].sc-z-button-h .z-button--container.sc-z-button{border-color:var(--color-primary02);background-color:var(--color-primary02);color:var(--color-primary01)}@media (hover: hover){[variant="tertiary"].sc-z-button-h .z-button--container.sc-z-button:hover{border-color:var(--color-primary03);background-color:var(--color-primary03);color:var(--color-hover-primary)}}[variant="tertiary"].sc-z-button-h .z-button--container.sc-z-button:focus:focus-visible{border-color:var(--color-primary02);background-color:var(--color-primary02);color:var(--color-primary01)}[variant="tertiary"].sc-z-button-h .z-button--container.sc-z-button:active{border-color:var(--color-primary02);background-color:var(--color-primary02);box-shadow:var(--shadow-2);color:var(--color-primary01)}[variant="tertiary"][disabled].sc-z-button-h:not([disabled="false"]) .z-button--container.sc-z-button{border-color:var(--color-disabled01);background-color:var(--color-disabled01);color:var(--color-disabled03)}`;

const ZButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** HTML button disabled attribute. */
        this.disabled = false;
        /** HTML button type attribute. */
        this.type = ButtonType.BUTTON;
        /** Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. */
        this.variant = ButtonVariant.PRIMARY;
        /** the button icon position. Defaults to `left` */
        this.iconPosition = IconPosition.LEFT;
        /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
        this.size = ControlSize.BIG;
        this.hasText = false;
    }
    componentWillLoad() {
        var _a;
        this.hasText = !!((_a = this.hostElement.textContent) === null || _a === void 0 ? void 0 : _a.trim());
    }
    get attributes() {
        var _a;
        return {
            "id": this.htmlid,
            "class": {
                "z-button--container": true,
                "z-button--has-text": this.hasText,
            },
            "aria-label": ((_a = this.htmlAriaLabel) === null || _a === void 0 ? void 0 : _a.trim()) || undefined,
        };
    }
    renderIcon() {
        return this.icon && h("z-icon", { name: this.icon });
    }
    render() {
        if (this.href) {
            return (h("a", Object.assign({}, this.attributes, { href: this.href, target: this.target }), this.renderIcon(), h("slot", null)));
        }
        return (h("button", Object.assign({}, this.attributes, { name: this.name, type: this.type, disabled: this.disabled, role: this.htmlRole || undefined }), this.renderIcon(), h("slot", null)));
    }
    get hostElement() { return getElement(this); }
};
ZButton.style = stylesCss$b();

const stylesCss$a = () => `.sc-z-divider-h{display:block;padding:0;margin:0}.divider-horizontal.sc-z-divider-h{width:100%}.divider-vertical.sc-z-divider-h{height:100%}.divider-small.divider-horizontal.sc-z-divider-h{height:var(--border-size-small)}.divider-medium.divider-horizontal.sc-z-divider-h{height:var(--border-size-medium)}.divider-large.divider-horizontal.sc-z-divider-h{height:var(--border-size-large)}.divider-small.divider-vertical.sc-z-divider-h{width:var(--border-size-small)}.divider-medium.divider-vertical.sc-z-divider-h{width:var(--border-size-medium)}.divider-large.divider-vertical.sc-z-divider-h{width:var(--border-size-large)}`;

const ZDivider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** [optional] Divider size */
        this.size = DividerSize.SMALL;
        /** [optional] Divider color */
        this.color = "gray200";
        /** [optional] Divider orintation */
        this.orientation = DividerOrientation.HORIZONTAL;
    }
    render() {
        return (h(Host, { key: '59fdece3992477aa6ce69aa018ff0741978afcb1', class: `divider-${this.size} divider-${this.orientation}`, style: { backgroundColor: `var(--${this.color})` } }));
    }
};
ZDivider.style = stylesCss$a();

const stylesCss$9 = () => `:host{display:inline;margin-right:var(--z-icon-right-margin, 0);margin-left:var(--z-icon-left-margin, 0);line-height:0;vertical-align:middle}.icon-wrapper{position:relative;z-index:0;display:inline-block}svg:not([width]){width:var(--z-icon-width, 1.125rem)}svg:not([height]){height:var(--z-icon-height, 1.125rem)}.icon-wrapper svg.color-indicator{position:absolute;z-index:-1;bottom:0;left:0}`;

// https://regex101.com/r/ZnoZQ5/3
const ICON_NAME_SUFFIX_REGEX = /^(.+?)(-transparent)?(-filled|-button)?$/;
const ZIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Selects either a `<path>` or `<polygon>` element based on the format of the icon data.
     * @param iconValue The SVG path data or polygon points from the ICONS set.
     */
    selectPathOrPolygon(iconValue) {
        if (iconValue === null || iconValue === void 0 ? void 0 : iconValue.startsWith("M")) {
            return h("path", { d: iconValue });
        }
        return h("polygon", { points: iconValue });
    }
    get hasColorIndicator() {
        return COLOR_INDICATOR_ICONS.includes(this.name);
    }
    get needsTransparentIndicator() {
        var _a;
        return ["transparent", "#ffffff00"].includes((_a = this.indicatorColor) === null || _a === void 0 ? void 0 : _a.toLowerCase());
    }
    /**
     * For icons with a color indicator, if `indicatorColor` is set to transparent, use a specific icon version without the color indicator.
     * Using the icon without the color indicator prevents visual ambiguity between a transparent indicator and one filled with the background color.
     * @returns The name of the corresponding icon without the indicator, or the original icon name if no transparent version is needed or available.
     */
    getTransparentIndicatorIconIfNeeded() {
        var _a;
        const transparentIconName = (_a = this.name) === null || _a === void 0 ? void 0 : _a.replace(ICON_NAME_SUFFIX_REGEX, "$1-transparent$3");
        if (!this.hasColorIndicator || !this.needsTransparentIndicator || !ICONS[transparentIconName]) {
            return this.name;
        }
        return transparentIconName;
    }
    /**
     * Render the icon with the color indicator.
     * The indicator is rendered as a separate SVG element behind the main icon, filled with the `indicatorColor`.
     */
    renderColorIndicator() {
        return (h("svg", { class: "color-indicator", fill: this.indicatorColor || "#FFFFFF00", viewBox: "0 0 1000 1000", width: this.width, height: this.height, "aria-hidden": "true" }, this.selectPathOrPolygon(ICONS["picker-color"])));
    }
    renderBaseIcon() {
        return (h("svg", { id: this.iconid || undefined, fill: this.fill ? `var(--${this.fill})` : undefined, viewBox: "0 0 1000 1000", width: this.width, height: this.height, "aria-hidden": "true" }, this.selectPathOrPolygon(ICONS[this.getTransparentIndicatorIconIfNeeded()])));
    }
    render() {
        return (h(Host, { key: 'dbc5bf6907ddb130f0278913c410d5bb588f50b3', "aria-hidden": "true" }, this.hasColorIndicator && !this.needsTransparentIndicator ? (h("div", { class: "icon-wrapper" }, this.renderColorIndicator(), this.renderBaseIcon())) : (this.renderBaseIcon())));
    }
};
ZIcon.style = stylesCss$9();

const stylesGeneralCss = () => `.sc-z-input-h{display:inline-block;width:inherit;line-height:0}.sc-z-input-h *.sc-z-input{box-sizing:border-box}input.sc-z-input::-ms-clear,input.sc-z-input::-ms-reveal{display:none}input[type="search"].sc-z-input::-webkit-search-decoration,input[type="search"].sc-z-input::-webkit-search-cancel-button,input[type="search"].sc-z-input::-webkit-search-results-button,input[type="search"].sc-z-input::-webkit-search-results-decoration{display:none}input.sc-z-input,textarea.sc-z-input{background:var(--color-form-background);fill:var(--color-form-default-icon);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg);outline:none}input.sc-z-input,.textarea-wrapper.sc-z-input{border:var(--border-size-small) solid var(--color-form-surface04);border-radius:var(--border-radius);color:var(--color-form-default-text)}.cursor-select.sc-z-input-h input.sc-z-input{cursor:pointer}input.sc-z-input:not([readonly]):hover,.textarea-wrapper.sc-z-input:not(.readonly):hover{outline:var(--border-size-medium) solid var(--color-surface04);outline-offset:-2px}.sc-z-input-h:not(.active-select):not(.cursor-select) input.sc-z-input:focus:focus-visible,.sc-z-input-h:not([readonly="true"]) .textarea-wrapper.sc-z-input:focus-within{border-color:var(--color-form-active-primary);box-shadow:var(--shadow-focus-primary)}.sc-z-input-h input.sc-z-input:focus:focus-visible:hover,.textarea-wrapper.sc-z-input:not(.readonly):focus-within:hover{outline-color:var(--color-form-active-primary)}.active-select.sc-z-input-h input.sc-z-input{border:var(--border-size-small) solid var(--color-form-active-primary)}.cursor-select.sc-z-input-h input.sc-z-input:focus:focus-visible{box-shadow:var(--shadow-focus-primary);caret-color:transparent}.sc-z-input-h input[readonly].sc-z-input:focus:focus-visible{border-color:var(--color-form-surface03);box-shadow:none}.input-success.sc-z-input,.z-label.label-cutout.label-success.sc-z-input{border-color:var(--color-form-success01);background:var(--color-form-inverse-success)}.input-success.sc-z-input:focus:focus-visible+.icons-wrapper.sc-z-input,.input-success.sc-z-input+.icons-wrapper.sc-z-input{fill:var(--color-form-success01)}.input-error.sc-z-input,.z-label.label-cutout.label-error.sc-z-input{border-color:var(--color-form-hover-error);background:var(--color-form-inverse-error)}.input-error.sc-z-input:focus:focus-visible+.icons-wrapper.sc-z-input,.input-error.sc-z-input+.icons-wrapper.sc-z-input{fill:var(--color-form-hover-error)}.input-warning.sc-z-input,.z-label.label-cutout.label-warning.sc-z-input{border-color:var(--color-form-hover-warning);background:var(--color-form-inverse-warning)}.input-warning.sc-z-input:focus:focus-visible+.icons-wrapper.sc-z-input,.input-warning.sc-z-input+.icons-wrapper.sc-z-input{fill:var(--color-form-hover-warning)}.sc-z-input:is(.input-success,.input-error.sc-z-input,.input-warning).sc-z-input:focus:focus-visible{color:var(--color-form-default-text)}.sc-z-input-h:not(.active-select) input[readonly].sc-z-input,.textarea-wrapper.readonly.sc-z-input{border-color:var(--color-form-surface03);fill:var(--color-form-disabled01-icon);pointer-events:none}[disabled].sc-z-input-h:not([disabled="false"]) input.sc-z-input,[disabled].sc-z-input-h:not([disabled="false"]) .textarea-wrapper.sc-z-input,[disabled].sc-z-input-h:not([disabled="false"]) z-icon.sc-z-input{border-color:var(--color-form-disabled03);box-shadow:none;color:var(--color-form-disabled-text);fill:var(--color-form-disabled01-icon);pointer-events:none}[disabled].sc-z-input-h:not([disabled="false"]) input.sc-z-input:hover{border-width:var(--border-size-small)}[disabled].sc-z-input-h:not([disabled="false"]) label.sc-z-input{pointer-events:none}input.sc-z-input::placeholder,textarea.sc-z-input::placeholder,input.sc-z-input::-webkit-textarea-placeholder,textarea.sc-z-input::-webkit-textarea-placeholder{color:var(--color-form-placeholder-text)}.sc-z-input:-ms-textarea-placeholder{color:var(--color-form-placeholder-text)}input.hide-placeholder.sc-z-input::placeholder,textarea.hide-placeholder.sc-z-input::placeholder,input.hide-placeholder.sc-z-input::-webkit-textarea-placeholder,textarea.hide-placeholder.sc-z-input::-webkit-textarea-placeholder{color:transparent}[disabled].sc-z-input-h:not([disabled="false"]) label.z-label.sc-z-input{color:var(--color-disabled03)}.z-label.sc-z-input{--z-label-transition-args:150ms cubic-bezier(0.42, 0, 0.58, 1);--z-label-transition:top var(--z-label-transition-args), font-size var(--z-label-transition-args),     background-color var(--z-label-transition-args), border-radius var(--z-label-transition-args),     width var(--z-label-transition-args);position:relative;z-index:2}[size="small"].sc-z-input-h .z-label.sc-z-input{--z-label-inside-top:1.25rem;margin-bottom:-0.5rem}[size="x-small"].sc-z-input-h .z-label.sc-z-input{--z-label-inside-top:1.125rem;margin-bottom:-0.5rem}.z-label.label-cutout.sc-z-input{top:0;padding:0 2px;margin:0 6px;background-color:var(--color-form-background);border-radius:var(--border-radius);color:var(--color-form-default-text);font-size:var(--font-size-2);transition:var(--z-label-transition)}.z-label.label-inside.sc-z-input{top:var(--z-label-inside-top, 1.25rem);left:var(--space-unit);overflow:hidden;max-width:calc(100% - var(--space-unit-2));padding:0;background-color:transparent;color:var(--color-form-default-text);font-size:var(--font-size-3);text-overflow:ellipsis;transition:var(--z-label-transition);white-space:nowrap}.z-label.label-inside.has-icon.sc-z-input{max-width:calc(100% - var(--space-unit-6))}`;

const stylesTextCss = () => `.text-wrapper.sc-z-input{position:relative}.text-wrapper.sc-z-input>div.sc-z-input{position:relative;z-index:1;fill:var(--color-form-default-icon)}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{width:100%;height:2.75rem;box-sizing:border-box;padding:0 var(--space-unit);margin:0}[size="small"].sc-z-input-h .text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{height:2.25rem}[size="x-small"].sc-z-input-h .text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{height:2rem}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.sc-z-input,.text-wrapper.sc-z-input>div.sc-z-input>input.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 4)}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 8)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input{position:absolute;z-index:2;top:50%;right:var(--space-unit);display:flex;margin-left:var(--space-unit);gap:var(--space-unit);pointer-events:none;transform:translateY(-50%)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.input-icon.sc-z-input{display:flex;padding:0;border:0;background:none;color:inherit;font:inherit;pointer-events:initial}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.input-icon.hidden.sc-z-input{display:none}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.reset-icon.sc-z-input,.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.toggle-password-icon.sc-z-input{display:flex;min-width:24px;min-height:24px;align-items:center;justify-content:center;cursor:pointer}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>.input-icon.sc-z-input{--z-icon-width:18px;--z-icon-height:18px;display:block}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.input-icon.sc-z-input:focus{border-radius:var(--border-radius-small);box-shadow:var(--shadow-focus-primary);outline:none !important}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #fff inset;-webkit-text-fill-color:currentcolor}`;

const stylesTextareaCss = () => `.textarea-wrapper.sc-z-input{position:relative;width:100%;height:100%;padding:var(--space-unit)}.textarea-wrapper.sc-z-input:not(.input-error,.input-success.sc-z-input,.input-warning).sc-z-input{background-color:var(--color-form-background)}textarea.sc-z-input{width:100%;min-height:132px;padding:0;border:none;margin:0;color:currentcolor;resize:none}`;

const stylesCheckboxRadioCss = () => `.radio-wrapper.sc-z-input,.checkbox-wrapper.sc-z-input{position:relative;display:inline-flex;flex-direction:row;align-items:center;color:var(--color-default-text);fill:var(--color-primary01-icon);font-family:var(--font-family-sans)}.radio-wrapper.sc-z-input:hover,.checkbox-wrapper.sc-z-input:hover{color:var(--color-hover-primary);fill:var(--color-hover-primary-icon)}.radio-wrapper.sc-z-input>input.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input{position:absolute;z-index:-1;opacity:0;pointer-events:none}.radio-wrapper.sc-z-input .radio-label.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{display:inline-flex;min-height:24px;align-items:center;padding:3px 0;margin:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1;text-transform:inherit}.radio-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.checkbox-label.sc-z-input{cursor:pointer}.radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{cursor:pointer;fill:inherit}[size="small"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,[size="small"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{--z-icon-width:16px;--z-icon-height:16px}[size="small"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input,[size="small"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{font-size:var(--font-size-2)}[size="x-small"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,[size="x-small"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{--z-icon-width:14px;--z-icon-height:14px}[size="x-small"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input,[size="x-small"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{font-size:var(--font-size-1)}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input{flex-direction:row}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input{flex-direction:row-reverse}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input{margin-left:var(--space-unit)}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input{margin-right:var(--space-unit)}[size="small"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,[size="small"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input,[size="x-small"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,[size="x-small"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input{margin-left:calc(var(--space-unit) * 0.5)}[size="small"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,[size="small"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input,[size="x-small"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,[size="x-small"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input{margin-right:calc(var(--space-unit) * 0.5)}.radio-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.radio-label.sc-z-input>z-icon.sc-z-input{border-radius:50%}.checkbox-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.checkbox-label.sc-z-input>z-icon.sc-z-input{border-radius:var(--border-radius-small)}.radio-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.checkbox-label.sc-z-input>z-icon.sc-z-input{box-shadow:var(--shadow-focus-primary)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input{color:var(--color-disabled03)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input>z-icon.sc-z-input{cursor:default;fill:var(--color-disabled03-icon)}`;

const ZInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputChange = createEvent(this, "inputChange", 7);
        this.startTyping = createEvent(this, "startTyping", 7);
        this.stopTyping = createEvent(this, "stopTyping", 7);
        this.inputCheck = createEvent(this, "inputCheck", 7);
        this.inputFocus = createEvent(this, "inputFocus", 7);
        this.inputBlur = createEvent(this, "inputBlur", 7);
        /** the id of the input element */
        this.htmlid = `id-${randomId()}`;
        /** Input type */
        this.type = InputType.TEXT;
        /** the input is disabled */
        this.disabled = false;
        /** the input is readonly */
        this.readonly = false;
        /** the input is required (optional): available for text, password, number, email, textarea, checkbox */
        this.required = false;
        /** checked: available for checkbox, radio */
        this.checked = false;
        /** indeterminate: available for checkbox */
        this.indeterminate = false;
        /** input helper message (optional): available for text, password, number, email, textarea - if set to `false` message won't be displayed */
        this.message = true;
        /** the input label position: available for checkbox, radio */
        this.labelPosition = LabelPosition.RIGHT;
        /** render clear icon when typing (optional): available for text */
        this.hasclearicon = true;
        /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
        this.size = ControlSize.BIG;
        this.isTyping = false;
        this.passwordHidden = true;
        this.typingtimeout = 300;
        this.focused = false;
    }
    inputCheckListener(e) {
        const data = e.detail;
        switch (this.type) {
            case InputType.RADIO:
                if (data.type === InputType.RADIO && data.name === this.name && data.id !== this.htmlid) {
                    this.checked = false;
                }
                break;
        }
    }
    watchIndeterminate() {
        this.syncCheckboxIndeterminate();
    }
    watchLabelState() {
        this.setLabelState();
    }
    syncCheckboxIndeterminate() {
        if (this.type !== InputType.CHECKBOX || !this.inputRef) {
            return;
        }
        this.inputRef.indeterminate = !!this.indeterminate;
    }
    /** get checked status */
    async isChecked() {
        switch (this.type) {
            case InputType.CHECKBOX:
            case InputType.RADIO:
                return this.checked;
            default:
                console.warn("`isChecked` method is only available for type `checkbox` and `radio`");
                return false;
        }
    }
    emitInputChange(value) {
        if (!this.isTyping) {
            this.emitStartTyping();
        }
        let validity;
        if (this.type === InputType.TEXTAREA) {
            validity = this.getValidity("textarea");
        }
        else {
            validity = this.getValidity("input");
        }
        this.value = value;
        this.inputChange.emit({ value, validity });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.emitStopTyping(this.value, validity);
        }, this.typingtimeout);
    }
    emitStartTyping() {
        this.isTyping = true;
        this.startTyping.emit();
    }
    emitStopTyping(value, validity) {
        this.isTyping = false;
        this.stopTyping.emit({
            value: value,
            validity: validity,
        });
    }
    emitInputCheck(checked) {
        this.inputCheck.emit({
            id: this.htmlid,
            checked: checked,
            type: this.type,
            name: this.name,
            value: this.value,
            validity: this.getValidity("input"),
        });
    }
    emitInputFocus() {
        this.focused = true;
        this.inputFocus.emit({ id: this.htmlid });
    }
    emitInputBlur() {
        this.focused = false;
        this.inputBlur.emit({ id: this.htmlid });
    }
    componentWillLoad() {
        this.setLabelState();
    }
    getValidity(type) {
        const input = this.hostElement.querySelector(type);
        return input.validity;
    }
    /* START text/password/email/number */
    getTextAttributes() {
        return {
            id: this.htmlid,
            name: this.name,
            placeholder: this.placeholder,
            value: this.value,
            disabled: this.disabled,
            readonly: this.readonly,
            required: this.required,
            title: this.htmltitle,
            minlength: this.minlength,
            maxlength: this.maxlength,
            class: {
                [`input-${this.status}`]: !!this.status,
            },
            autocomplete: this.autocomplete,
            onInput: (e) => this.emitInputChange(e.target.value),
        };
    }
    getNumberAttributes(type) {
        if (type != InputType.NUMBER) {
            return;
        }
        return {
            min: this.min,
            max: this.max,
            step: this.step,
        };
    }
    getPatternAttribute(type) {
        if (type != InputType.PASSWORD &&
            type != InputType.TEXT &&
            type != InputType.TEL &&
            type != InputType.SEARCH &&
            type != InputType.URL &&
            type != InputType.EMAIL) {
            return;
        }
        return {
            pattern: this.pattern,
        };
    }
    inputHasMessage() {
        if (typeof boolean(this.message) === "boolean") {
            return false;
        }
        return true;
    }
    getAriaAttributes() {
        return {
            "role": this.htmlRole || undefined,
            "aria-describedby": this.htmlAriaDescribedby || undefined,
            "aria-labelledby": this.htmlAriaLabelledby || undefined,
        };
    }
    getTextAriaAttributes() {
        return Object.assign(Object.assign({}, this.getAriaAttributes()), { "aria-expanded": this.htmlAriaExpanded || undefined, "aria-controls": this.htmlAriaControls || undefined, "aria-autocomplete": this.htmlAriaAutocomplete || undefined, "aria-activedescendant": this.htmlAriaActivedescendant || undefined, "aria-describedby": this.htmlAriaDescribedby || this.inputHasMessage()
                ? this.htmlAriaDescribedby || `${this.htmlid}-message`
                : undefined, "aria-invalid": this.status === InputStatus.ERROR ? "true" : undefined, "aria-required": this.required ? "true" : undefined });
    }
    getFocusBlurAttributes() {
        return {
            onFocus: () => {
                this.emitInputFocus();
                this.setLabelState();
            },
            onBlur: () => {
                this.emitInputBlur();
                setTimeout(() => this.setLabelState(), 150);
            },
        };
    }
    setLabelState() {
        if (this.size === ControlSize.BIG) {
            this.labelState = "default";
            return;
        }
        if (!this.value && !this.focused) {
            this.labelState = "inside";
            return;
        }
        this.labelState = "cutout";
    }
    hasIcon() {
        return !!this.icon || this.type === InputType.PASSWORD;
    }
    showPlaceholder() {
        return !this.label || this.labelState !== "inside";
    }
    renderInputText(type = InputType.TEXT) {
        const attr = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getTextAttributes()), this.getNumberAttributes(type)), this.getPatternAttribute(type)), this.getTextAriaAttributes()), this.getFocusBlurAttributes()), { "aria-label": this.htmlAriaLabel || undefined });
        attr.class = Object.assign(Object.assign({}, attr.class), { "has-icon": this.hasIcon(), "has-clear-icon": this.hasclearicon && type != InputType.NUMBER, "hide-placeholder": !this.showPlaceholder() });
        return (h("div", { class: "text-wrapper" }, this.renderLabel(), h("div", null, h("input", Object.assign({}, attr, { type: type === InputType.PASSWORD && !this.passwordHidden ? InputType.TEXT : type, ref: (el) => (this.inputRef = el) })), this.renderIcons()), this.renderMessage()));
    }
    renderLabel() {
        if (!this.label) {
            return;
        }
        return (h("label", { class: {
                "z-label": true,
                [`label-${this.labelState}`]: true,
                [`label-${this.status}`]: !!this.status,
                "has-icon": this.hasIcon(),
            }, id: `${this.htmlid}_label`, htmlFor: this.htmlid }, this.label));
    }
    renderIcons() {
        return (h("span", { class: "icons-wrapper" }, this.renderResetIcon(), this.renderIcon()));
    }
    renderIcon() {
        if (this.type === InputType.PASSWORD) {
            return this.renderShowHidePassword();
        }
        if (!this.icon) {
            return;
        }
        return (h("z-icon", { name: this.icon, class: { [this.size]: true, "input-icon": true } }));
    }
    renderResetIcon() {
        let hidden = false;
        if (!this.hasclearicon || !this.value || this.disabled || this.readonly || this.type == InputType.NUMBER) {
            hidden = true;
        }
        return (h("button", { type: "button", class: { "reset-icon": true, "input-icon": true, hidden }, "aria-label": "cancella il contenuto dell'input", onClick: () => {
                this.inputRef.value = "";
                this.emitInputChange("");
                this.inputRef.focus();
            } }, h("z-icon", { name: "multiply", class: this.size })));
    }
    renderShowHidePassword() {
        return (h("button", { type: "button", class: "input-icon toggle-password-icon", disabled: this.disabled, "aria-label": "mostra password", "aria-pressed": !this.passwordHidden ? "true" : "false", onClick: () => (this.passwordHidden = !this.passwordHidden) }, h("z-icon", { name: this.passwordHidden ? "view-filled" : "view-off-filled", class: this.size })));
    }
    renderMessage() {
        if (boolean(this.message) === false) {
            return;
        }
        return (h("z-input-message", { "html-id": `${this.htmlid}-message`, message: boolean(this.message) === true ? undefined : this.message, status: this.status, class: this.size, disabled: this.disabled }));
    }
    /* END text/password/email/number */
    /* START textarea */
    renderTextarea() {
        const attributes = this.getTextAttributes();
        return (h(Fragment, null, this.renderLabel(), h("div", { class: Object.assign(Object.assign({}, attributes.class), { "textarea-wrapper": true, "readonly": !!attributes.readonly }) }, h("textarea", Object.assign({}, attributes, this.getTextAriaAttributes(), this.getFocusBlurAttributes(), { class: Object.assign(Object.assign({}, attributes.class), { "z-scrollbar": true, "hide-placeholder": !this.showPlaceholder() }), "aria-label": this.htmlAriaLabel || undefined }))), this.renderMessage()));
    }
    /* END textarea */
    handleCheck(ev) {
        if (this.type === InputType.CHECKBOX && this.indeterminate) {
            this.indeterminate = false;
        }
        this.checked = ev.target.checked;
        this.emitInputCheck(this.checked);
    }
    getCheckboxAriaChecked() {
        if (this.indeterminate) {
            return "mixed";
        }
        return this.checked ? "true" : "false";
    }
    /* START checkbox */
    renderCheckbox() {
        const ariaRequired = this.required ? { "aria-required": "true" } : {};
        return (h("div", { class: "checkbox-wrapper" }, h("input", Object.assign({ id: this.htmlid, type: "checkbox", name: this.name, checked: this.indeterminate ? false : this.checked, disabled: this.disabled, readonly: this.readonly, required: this.required, onChange: this.handleCheck.bind(this), value: this.value, "aria-checked": this.getCheckboxAriaChecked() }, ariaRequired, this.getAriaAttributes(), this.getFocusBlurAttributes(), { ref: (el) => {
                this.inputRef = el;
                this.syncCheckboxIndeterminate();
            } })), h("label", { htmlFor: this.htmlid, class: {
                "checkbox-label": true,
                "after": this.labelPosition === LabelPosition.RIGHT,
                "before": this.labelPosition === LabelPosition.LEFT,
            } }, h("z-icon", { name: this.indeterminate ? "indeterminated-checkbox" : this.checked ? "checkbox-checked" : "checkbox", class: this.size }), this.label && h("span", { innerHTML: this.label }))));
    }
    /* END checkbox */
    /* START radio */
    renderRadio() {
        const ariaRequired = this.required ? { "aria-required": "true" } : {};
        return (h("div", { class: "radio-wrapper" }, h("input", Object.assign({ id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, required: this.required, onChange: this.handleCheck.bind(this), value: this.value }, this.getAriaAttributes(), this.getFocusBlurAttributes(), ariaRequired)), h("label", { htmlFor: this.htmlid, class: {
                "radio-label": true,
                "after": this.labelPosition === LabelPosition.RIGHT,
                "before": this.labelPosition === LabelPosition.LEFT,
            } }, h("z-icon", { name: this.checked ? "radio-button-checked" : "radio-button", class: this.size }), this.label && h("span", { innerHTML: this.label }))));
    }
    /* END radio */
    render() {
        switch (this.type) {
            case InputType.TEXTAREA:
                return this.renderTextarea();
            case InputType.CHECKBOX:
                return this.renderCheckbox();
            case InputType.RADIO:
                return this.renderRadio();
            case InputType.TEXT:
            default:
                return this.renderInputText(this.type);
        }
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "indeterminate": [{
                "watchIndeterminate": 0
            }],
        "size": [{
                "watchLabelState": 0
            }],
        "value": [{
                "watchLabelState": 0
            }]
    }; }
};
ZInput.style = stylesGeneralCss() + (stylesTextCss() + (stylesTextareaCss() + stylesCheckboxRadioCss()));

const stylesCss$8 = () => `:host{display:flex;min-height:1.25rem;align-items:start;margin-top:calc(var(--space-unit) / 2);color:var(--color-default-text);fill:currentcolor;font-family:var(--font-family-sans);font-size:var(--font-size-2);letter-spacing:0.16px;line-height:1.25rem}:host(.small),:host(.x-small){min-height:1rem;margin-left:var(--space-unit);font-size:var(--font-size-1);line-height:1rem}:host([status="success"]){color:var(--color-hover-success)}:host([status="error"]){color:var(--color-hover-error)}:host([status="warning"]){color:var(--color-hover-warning)}:host(:focus){outline:none}:host>z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);--z-icon-right-margin:calc(var(--space-unit) * 0.5);margin-top:calc(var(--space-unit) * 0.25)}:host(.small)>z-icon,:host(.x-small)>z-icon{--z-icon-width:14px;--z-icon-height:14px;margin-top:calc(var(--space-unit) * 0.125)}:host([disabled]){color:var(--color-disabled03);fill:var(--color-disabled03)}`;

const ZInputMessage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** the id of the message element (optional) */
        this.htmlId = `id-${randomId()}`;
        /** the role to set when both the message and the status are populated (optional) */
        this.htmlRole = "alert";
        this.statusIcons = {
            success: "checkmark-circle",
            error: "multiply-circled",
            warning: "exclamation-circle",
        };
    }
    render() {
        return (h(Host, { key: 'd4ff8a00f5ea0f95f55c71d8c20318d5ebccce22', role: this.htmlRole && this.message && this.status ? this.htmlRole : undefined, id: this.htmlId }, this.statusIcons[this.status] && this.message && h("z-icon", { key: 'e8b1e95badf35decb8f556ea6b8f22309b8545ba', name: this.statusIcons[this.status] }), h("span", { key: 'e6cd35dd3e4cc24d5e9802c42fc6d09eaf8801dd', innerHTML: this.message })));
    }
};
ZInputMessage.style = stylesCss$8();

const stylesCss$7 = () => `:host{display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}`;

const ZList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * [optional] Size of the list elements.
         */
        this.size = ListSize.MEDIUM;
        /**
         * [optional] Type of the list marker for each element.
         */
        this.listType = ListType.NONE;
        this.htmlRole = "list";
    }
    /** Watch for changes in the role native attribute */
    onRoleChange(newValue) {
        this.htmlRole = newValue;
    }
    setChildrenProps() {
        Array.from(this.host.children)
            .filter((child) => child.tagName.toLowerCase() === "z-list-element")
            .forEach((child, i) => {
            child.size = this.size;
            child.listType = this.listType;
            child.listElementPosition = `${i + 1}`;
        });
    }
    render() {
        return (h(Host, { key: '98a78ca75d510f3a1d804bbb2e2fc33d815b74b1', role: this.htmlRole }, h("slot", { key: '6bfc24a0ed5dfc13cffc47eb20ad4475ba598c20' })));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "role": [{
                "onRoleChange": 1
            }],
        "size": [{
                "setChildrenProps": 1
            }],
        "listType": [{
                "setChildrenProps": 1
            }]
    }; }
};
ZList.style = stylesCss$7();

const stylesCss$6 = () => `:host{outline:none}:host>.container{display:flex;box-sizing:border-box;flex-direction:column;justify-content:center;background-color:var(--background-color-list-element, var(--color-surface01));font-family:var(--font-family-sans);font-weight:var(--font-rg);outline:none}:host([size="small"])>.container{min-height:calc(var(--space-unit) * 4);padding:calc(var(--space-unit) / 2) 0}:host([size="medium"])>.container{min-height:calc(var(--space-unit) * 5);padding:var(--space-unit) 0}:host([size="medium"])>.tree-element-container{padding-top:0;padding-bottom:0}:host([size="large"])>.container{min-height:calc(var(--space-unit) * 7);padding:calc(var(--space-unit) * 2) 0}:host([size="x-large"])>.container{min-height:calc(var(--space-unit) * 9);padding:calc(var(--space-unit) * 3) 0}:host([expandable])>.container,:host([clickable])>.container{cursor:pointer}:host([expandable]:hover)>.container,:host([clickable]:hover)>.container{background-color:var(--background-hover-color-list-element, var(--color-background))}:host([expandable]:focus:focus-visible)>.container,:host([clickable]:focus:focus-visible)>.container{position:relative;z-index:1;box-shadow:var(--shadow-focus-primary)}:host([expandable]:active)>.container,:host([clickable]:active)>.container{background-color:var(--background-active-color-list-element, var(--color-background))}:host([align-button="left"][expandable])>.container>.z-list-element-container{display:flex}:host([align-button="right"][expandable])>.container>.z-list-element-container{display:flex;flex-direction:row-reverse;justify-content:space-between}:host([align-button="left"][expandable])>.container>.z-list-element-container>z-icon{margin-right:var(--space-unit)}:host([align-button="right"][expandable])>.container>.z-list-element-container>z-icon{margin-left:var(--space-unit)}:host>.container>.z-list-element-inner-container{display:none}:host>.container>.z-list-element-inner-container.expanded{display:block}.z-list-content-container{display:flex;align-items:center}:host .z-tree-list-divider{position:absolute;z-index:100;left:0}:host([disabled])>.container{color:var(--color-form-disabled03);cursor:default}`;

const ZListElement = class {
    accessibleFocusHandler(e) {
        if (this.listElementId === e.detail) {
            const toFocus = this.host.shadowRoot.getElementById(`z-list-element-id-${e.detail}`);
            toFocus.focus();
        }
    }
    /**
     * Constructor.
     */
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.accessibleFocus = createEvent(this, "accessibleFocus", 7);
        this.ariaDescendantFocus = createEvent(this, "ariaDescendantFocus", 7);
        this.clickItem = createEvent(this, "clickItem", 7);
        /**
         * [optional] Align expandable button left or right.
         */
        this.alignButton = ExpandableListButtonAlign.LEFT;
        /**
         * [optional] Sets element clickable.
         */
        this.clickable = false;
        /**
         * [optional] Sets the divider color.
         */
        this.dividerColor = "color-surface03";
        /**
         * [optional] Sets the position where to insert the divider.
         */
        this.dividerType = ListDividerType.NONE;
        /**
         * [optional] Sets the divider size.
         */
        this.dividerSize = DividerSize.SMALL;
        /**
         * [optional] Sets element as expandable.
         */
        this.expandable = false;
        /**
         * [optional] Sets expandable style to element.
         */
        this.expandableStyle = ExpandableListStyle.ACCORDION;
        /**
         * [optional] Sets size of inside elements.
         */
        this.size = ListSize.MEDIUM;
        /**
         * [optional] Sets text color of the element.
         */
        this.color = "none";
        /**
         * [optional] Sets disabled style of the element.
         */
        this.disabled = false;
        /**
         * [optional] position of the list element inside the list or the group
         */
        this.listElementPosition = "0";
        /**
         * [optional] type of the list marker for each element
         */
        this.listType = ListType.NONE;
        /** set tabindex to Host tag (optional). Defaults to 0. */
        this.htmlTabindex = 0;
        this.showInnerContent = false;
        this.htmlRole = "listitem";
        this.openElementConfig = {
            accordion: {
                open: "minus-circled",
                close: "plus-circled",
            },
            menu: {
                open: "chevron-up",
                close: "chevron-down",
            },
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    /**
     * Handler for click on element. If element is expandable, change state.
     */
    handleClick() {
        if (this.disabled) {
            return;
        }
        this.clickItem.emit(this.listElementId);
        if (!this.expandable) {
            return;
        }
        this.showInnerContent = !this.showInnerContent;
    }
    handleKeyDown(event) {
        const expandByKey = event.code === KeyboardCode.ENTER;
        switch (event.code) {
            case KeyboardCode.ARROW_DOWN:
                event.preventDefault();
                this.accessibleFocus.emit(this.listElementId + 1);
                break;
            case KeyboardCode.ARROW_UP:
                event.preventDefault();
                this.accessibleFocus.emit(this.listElementId - 1);
                break;
            case KeyboardCode.ENTER:
                event.preventDefault();
                this.clickItem.emit(this.listElementId);
                break;
        }
        if (!this.expandable || !expandByKey) {
            return;
        }
        this.showInnerContent = !this.showInnerContent;
    }
    onRoleChange(newValue) {
        this.htmlRole = newValue;
    }
    /**
     * Renders button to expand element.
     */
    renderExpandableButton() {
        if (!this.expandable) {
            return null;
        }
        return (h("z-icon", { name: this.showInnerContent
                ? this.openElementConfig[this.expandableStyle].open
                : this.openElementConfig[this.expandableStyle].close }));
    }
    /**
     * Renders expanded content if element is expandable.
     */
    renderExpandedContent() {
        if (!this.expandable) {
            return null;
        }
        return (h("div", { class: {
                "z-list-element-inner-container": true,
                "expanded": this.showInnerContent,
            } }, h("slot", { name: "inner-content" })));
    }
    /**
     * Renders content of the z-list-element
     */
    renderContent() {
        if (this.listType === ListType.NONE) {
            return h("slot", null);
        }
        if (this.listType === ListType.ORDERED) {
            return (h("div", { class: "z-list-content-container" }, h("div", null, this.listElementPosition, ".\u2003"), h("slot", null)));
        }
        if (this.listType === ListType.UNORDERED) {
            return (h("div", { class: "z-list-content-container" }, h("span", null, "\u2022\u2003"), h("slot", null)));
        }
    }
    render() {
        return (h(Host, { key: '6309a4608286747636c1bc81a1783e31224b0ce7', "aria-expanded": this.expandable ? this.showInnerContent : null, onClick: this.handleClick, onFocus: () => this.ariaDescendantFocus.emit(this.listElementId), onKeyDown: this.handleKeyDown, clickable: this.clickable && !this.disabled, tabIndex: this.hasTreeItems ? undefined : this.htmlTabindex, role: this.hasTreeItems ? "none" : this.htmlRole }, h("div", { key: '362e834bcc4b561e9a90c74bb41a3dcd3bf4c3ad', class: this.hasTreeItems ? "tree-element-container" : "container", style: !this.disabled && { color: `var(--${this.color})` }, tabindex: "-1", id: `z-list-element-id-${this.listElementId}`, part: "list-item-container" }, h("div", { key: '9b4bc30d2200b4eb3c9da3030acef0222c690734', class: "z-list-element-container" }, this.renderExpandableButton(), this.renderContent()), this.renderExpandedContent()), this.dividerType === ListDividerType.ELEMENT && (h("z-divider", { key: '09a6e380faaefce03873bc1976bec917c60fd9b9', class: { "z-tree-list-divider": this.hasTreeItems }, color: this.dividerColor, size: this.dividerSize }))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "role": [{
                "onRoleChange": 1
            }]
    }; }
};
ZListElement.style = stylesCss$6();

const stylesCss$5 = () => `:host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.z-list-group-header-container{color:var(--gray700);font-size:var(--font-size-2);font-weight:var(--font-sb) !important;letter-spacing:0.16px;line-height:1.4}:host>.z-list-group-header-container.has-header{padding-top:calc(var(--space-unit) * 1.5);padding-bottom:var(--space-unit)}:host>.z-list-group-header-container.has-header>z-divider{margin-top:var(--space-unit)}:host>.grouped-tree-list-header{padding-top:calc(var(--space-unit) * 1.5);padding-bottom:var(--space-unit)}`;

const ZListGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * [optional] Sets size of inside elements.
         */
        this.size = ListSize.MEDIUM;
        /**
         * [optional] Sets the position where to insert the divider.
         */
        this.dividerType = ListDividerType.NONE;
        /**
         * [optional] Sets the divider size.
         */
        this.dividerSize = DividerSize.SMALL;
        /**
         * [optional] Sets the divider color.
         */
        this.dividerColor = "gray200";
        /**
         * [optional] type of the list marker for each element
         */
        this.listType = ListType.NONE;
        this.htmlRole = "group";
    }
    onRoleChange(newValue) {
        this.htmlRole = newValue;
    }
    setChildrenProps() {
        Array.from(this.host.children)
            .filter((child) => child.tagName.toLowerCase() === "z-list-element")
            .forEach((child, i, children) => {
            child.size = this.size;
            child.listType = this.listType;
            child.listElementPosition = i.toString();
            if (i < children.length - 1) {
                child.dividerType = this.dividerType;
                child.dividerSize = this.dividerSize;
                child.dividerColor = this.dividerColor;
            }
        });
    }
    componentWillLoad() {
        this.hasHeader = !!this.host.querySelector('[slot="header-title"]');
    }
    render() {
        return (h(Host, { key: '2c550cf5604ca7c80621970c7b9046b81aee0826', role: this.htmlRole }, h("div", { key: '7042a6519c28bfa39a1914ddadb811a1e8469fcf', class: {
                "z-list-group-header-container": true,
                "has-header": this.hasHeader && !this.hasTreeItems,
                "grouped-tree-list-header": this.hasTreeItems,
            } }, h("slot", { key: 'fe5be90d287663bcdf69a6763012d9a364a7ff50', name: "header-title" }), this.dividerType === ListDividerType.HEADER && (h("z-divider", { key: '0717918b0003188cfef8e35de12ba54f79b43bc3', color: this.dividerColor, size: this.dividerSize }))), h("slot", { key: 'd4362b569458fad45835fae90d29f294baea0f75' })));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "role": [{
                "onRoleChange": 1
            }],
        "size": [{
                "setChildrenProps": 1
            }],
        "listType": [{
                "setChildrenProps": 1
            }],
        "dividerType": [{
                "setChildrenProps": 1
            }],
        "dividerSize": [{
                "setChildrenProps": 1
            }],
        "dividerColor": [{
                "setChildrenProps": 1
            }]
    }; }
};
ZListGroup.style = stylesCss$5();

const stylesCss$4 = () => `.sc-z-offcanvas-h{font-family:var(--font-family-sans);font-weight:var(--font-rg)}[variant="pushcontent"].sc-z-offcanvas-h:not([transitiondirection="up"]){overflow:hidden}.canvas-container.sc-z-offcanvas{display:flex;overflow:hidden;min-width:100%;height:100%;background:var(--color-surface01);transform:translateX(0);transition:transform 0.4s ease-out}.sc-z-offcanvas-h>*.sc-z-offcanvas{position:fixed;top:var(--z-offcanvas--top-space, 0);right:0;bottom:0;left:0}[open].sc-z-offcanvas-h>*.sc-z-offcanvas{height:calc(100% - var(--z-offcanvas--top-space, 0px))}[transitiondirection="right"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{transform:translateX(-100%)}[transitiondirection="left"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{transform:translateX(100%)}[open][transitiondirection="right"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas,[open][transitiondirection="left"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{transform:translateX(0)}[transitiondirection="up"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{top:auto;bottom:0;height:var(--z-offcanvas--container-height, 90%);transform:translateY(100%)}[transitiondirection="up"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas,[variant="overlay"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{z-index:1001}[open][transitiondirection="up"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{transform:translateY(0)}[variant="pushcontent"].sc-z-offcanvas-h:not([transitiondirection="up"])>.canvas-container.sc-z-offcanvas{position:relative;height:100%}[variant="pushcontent"].sc-z-offcanvas-h:not([open]){display:none}[skip-animation].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{transition:none}.backdrop.sc-z-offcanvas{z-index:1000;width:100%;height:100%;background-color:var(--gray900);opacity:0;pointer-events:none;transition:opacity 0.4s ease-out}[open].sc-z-offcanvas-h>.backdrop.sc-z-offcanvas{opacity:0.7;pointer-events:unset}.canvas-container.sc-z-offcanvas>.canvas-content.sc-z-offcanvas{overflow:hidden auto;flex:1 auto;padding:0 calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2) calc(var(--space-unit) * 2) 0;outline:none}@media (min-width: 768px){[variant="pushcontent"].sc-z-offcanvas-h:not([transitiondirection="up"]){flex:none}.canvas-container.sc-z-offcanvas{width:var(--z-offcanvas--container-width, 375px);min-width:var(--z-offcanvas--container-width, 375px)}[transitiondirection="up"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{width:100%}[transitiondirection="right"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{right:auto;left:0}[transitiondirection="left"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{right:0;left:auto}}`;

const ZOffcanvas = class extends ReactiveControllerHost {
    constructor(hostRef) {
        super();
        registerInstance(this, hostRef);
        this.canvasOpenStatusChanged = createEvent(this, "canvasOpenStatusChanged", 7);
        /**
         * Offcanvas variant.
         * - `overlay`: The offcanvas covers the page content putting an overlay.
         * - `pushcontent`: The offcanvas isn't absolutely positioned and "pushes" the page content.
         * > NB: `pushcontent` variant may need some extra style tuning of the context around the component to work properly.
         * Also, the `pushcontent` variant doesn't have the open/close transition.
         */
        this.variant = OffCanvasVariant.PUSHCONTENT;
        /** Whether the offcanvas is open. Default: false */
        this.open = false;
        /**
         * Open the content transitioning to a specified direction.
         * The `up` direction always show the `overlay`, also when the variant is `pushcontent`.
         */
        this.transitiondirection = TransitionDirection.LEFT;
        /**
         * Skip the opening transition when the offcanvas is already open at the first render.
         * @deprecated This prop is not needed anymore, the component will automatically skip the transition
         * when it starts with `open` set to `true`. Only exists for Typescript backward compatibility.
         */
        this.skipLoadAnimation = false;
        /** Whether to show the backdrop when the offcanvas is open and variant is not `pushcontent`. Default: `true` */
        this.showBackdrop = true;
        /** Used to skip the opening transition when the offcanvas is already open at the first render. */
        this.skipAnimation = false;
        this.focusTrapController = new FocusTrapController(this, {
            fallbackFocus: () => this.canvasContent,
            isActive: () => this.open && this.variant === OffCanvasVariant.OVERLAY,
        });
    }
    /**
     * Handles Escape and wrap-around Tab navigation at the focus boundaries.
     */
    handleKeyDown(event) {
        if (!this.open || this.variant !== OffCanvasVariant.OVERLAY) {
            return;
        }
        if (event.key === KeyboardCode.ESC) {
            event.preventDefault();
            this.open = false;
            return;
        }
        this.focusTrapController.handleWrapTab(event);
    }
    /**
     * Lock the page scroll when the offcanvas is open and unlock it when the offcanvas is closed.
     */
    handlePageScroll() {
        const overflow = this.variant === OffCanvasVariant.OVERLAY || this.transitiondirection === TransitionDirection.UP
            ? "overflow-y"
            : "overflow-x";
        this.host.ownerDocument.body.style[overflow] = this.open ? "hidden" : "";
    }
    onOpenChanged() {
        this.canvasOpenStatusChanged.emit(this.open);
        this.handlePageScroll();
        this.focusTrapController.sync();
    }
    componentWillLoad() {
        if (this.open) {
            this.skipAnimation = true; // TODO: remove this line when `skipLoadAnimation` prop is removed.
        }
        return super.componentWillLoad();
    }
    componentDidRender() {
        this.skipAnimation = false; // TODO: remove this line when `skipLoadAnimation` prop is removed.
    }
    componentDidLoad() {
        if (this.open) {
            this.onOpenChanged();
        }
    }
    disconnectedCallback() {
        this.handlePageScroll();
        super.disconnectedCallback();
    }
    render() {
        return (h(Host, { key: '0d718ddb59132cfe0455ec8fe295af28d22d5ed2', "skip-animation": this.skipAnimation, "aria-hidden": !this.open ? "true" : null, "aria-modal": this.open && this.variant === OffCanvasVariant.OVERLAY ? "true" : null, role: this.open && this.variant === OffCanvasVariant.OVERLAY ? "dialog" : null }, h("div", { key: '2be04a46c61ac1cf275f1346acf473fd5fa9a4f7', class: "canvas-container" }, h("div", { key: '8ae8c40c1f7057bfa3e0dd7fb5fe4bd0c090d27b', class: "canvas-content z-scrollbar", ref: (el) => (this.canvasContent = el), tabIndex: getTabbableElements(this.host).length ? undefined : -1 }, h("slot", { key: 'cf715af879c1adf21a1b3ce56bf6aa03a7a74d45', name: "canvasContent" }))), (this.variant == OffCanvasVariant.OVERLAY || this.transitiondirection === TransitionDirection.UP) &&
            this.showBackdrop && (h("div", { key: 'a358752b0610bc48db477ed12eca3856095606e5', class: "backdrop", onClick: (ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                this.open = false;
            } }))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "variant": [{
                "handlePageScroll": 1
            }],
        "open": [{
                "onOpenChanged": 0
            }]
    }; }
};
ZOffcanvas.style = stylesCss$4();

const stylesCss$3 = () => `:host{--z-searchbar-tag-text-color:var(--color-primary03);--z-searchbar-tag-bg:var(--color-hover-primary);--z-searchbar-item-height:2.75rem;z-index:15;display:flex;align-items:flex-end;column-gap:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,*,::after,::before{box-sizing:border-box}.input-container{position:relative;display:flex;width:100%;flex-direction:column}.input-container z-input{z-index:1}.results{--item-icon-size:1rem;--z-icon-height:var(--item-icon-size);--z-icon-width:var(--item-icon-size);--item-inline-padding:calc(var(--space-unit) * 1.5);--item-col-gap:var(--space-unit);position:absolute;top:calc(100% - 1px);left:0;overflow:auto;width:100%;max-height:var(--z-searchbar-results-height, 540px);padding-top:var(--space-unit);padding-bottom:calc(var(--space-unit) * 0.5);border:var(--border-size-small) solid var(--color-form-surface03);border-top:none;background:var(--color-form-background);border-radius:0 0 var(--border-radius) var(--border-radius)}.results z-list-element{--background-color-list-element:var(--color-form-background);position:relative;display:block}.results>z-list>z-list-element::part(list-item-container){padding:0 var(--item-inline-padding)}.results z-list-element>.list-item{position:relative;display:flex;align-items:center;padding:calc(var(--space-unit) * 1.25) calc(var(--space-unit) / 4);background-color:transparent;color:var(--color-form-default-text);fill:var(--color-form-default-icon);gap:var(--item-col-gap)}.results z-list-element>.list-item:hover{background-color:var(--gray100);cursor:pointer}.results z-list-element>.list-item:focus-visible{z-index:1;border-radius:var(--border-radius-small);box-shadow:var(--shadow-focus-primary);outline:none}.results>z-list>z-list-element:not(:last-child)>.list-item,.results z-list-group:not(:last-child)>z-list-element:not(.category-heading){border-bottom:1px solid var(--color-form-surface03)}.results z-list-group{padding:0 var(--item-inline-padding)}.results z-list-group>z-list-element::part(list-item-container){padding:0}.results .sub-list{padding-left:calc(var(--item-icon-size) + var(--item-col-gap))}.results .sub-list z-list-element::part(list-item-container){padding:0}.results .sub-list z-list-element>.list-item{position:relative}.results .sub-list>z-list-element:not(:last-child)::before,.results .sub-list>z-list-element>.list-item::before{position:absolute;top:0;left:calc(0px - var(--item-col-gap) - var(--item-icon-size) / 2 + 1px);border-left:1px solid var(--color-form-surface03);content:""}.results .sub-list>z-list-element:not(:last-child)::before{top:-4px;height:calc(100% + 4px)}.results .sub-list z-list-element>.list-item::before{width:14px;height:calc(var(--z-searchbar-item-height) / 2);border-bottom:1px solid var(--color-form-surface03)}.results .category-heading>.category{font-style:italic}.results .category-heading>.subcategory{text-transform:uppercase}.results z-list-element>.list-item .ellipsis{overflow:hidden}.results .ellipsis>.item-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.results .item-label mark{background:var(--color-primary03);color:var(--color-default-text)}.results .list-item>z-tag{--z-tag-bg:var(--z-searchbar-tag-bg);--z-tag-text-color:var(--z-searchbar-tag-text-color);margin-left:auto;white-space:nowrap}.results .item-show-all{width:100%;color:var(--color-primary01);cursor:pointer;text-align:center}.results .item-no-results{display:block;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 0.5);font-style:italic}.results .item-no-results>ul{padding-left:calc(var(--space-unit) * 2);margin:var(--space-unit)}@media (min-width: 768px){.results{--item-icon-size:1.125rem}}`;

const stylesCss$2 = () => `.z-label{display:inline-block;padding-bottom:calc(var(--space-unit) / 2);color:var(--color-default-text);font-family:var(--font-family-sans);font-size:var(--font-size-2);font-weight:var(--font-sb);line-height:1.25rem;text-align:left}.z-label::first-letter{text-transform:uppercase}`;

const stylesCss$1 = () => `.z-scrollbar{--z-scrollbar-track-gradient:linear-gradient(     to right,     transparent 0 1px,     var(--gray200) 1px 5px,     transparent 5px 6px   );--z-scrollbar-track-color:var(--gray200);--z-scrollbar-thumb-color:var(--color-primary01);--z-scrollbar-thumb-hover-color:var(--color-hover-primary);--z-scrollbar-corner-color:transparent}.z-scrollbar::-webkit-scrollbar{width:6px;background:var(--z-scrollbar-track-gradient)}.z-scrollbar::-webkit-scrollbar-thumb{background-color:var(--z-scrollbar-thumb-color)}.z-scrollbar::-webkit-scrollbar-thumb:hover{background-color:var(--z-scrollbar-thumb-hover-color)}.z-scrollbar::-webkit-scrollbar-corner{background-color:var(--z-scrollbar-corner-color)}:host([theme="dark"]) .z-scrollbar,.z-scrollbar--dark{--z-scrollbar-track-gradient:linear-gradient(     to right,     transparent 0 1px,     var(--gray600) 1px 5px,     transparent 5px 6px   );--z-scrollbar-track-color:var(--gray600);--z-scrollbar-thumb-color:var(--color-white);--z-scrollbar-thumb-hover-color:var(--gray500);--z-scrollbar-corner-color:transparent}.theme-red .z-scrollbar{--z-scrollbar-track-gradient:linear-gradient(     to right,     transparent 0 1px,     var(--gray200) 1px 5px,     transparent 5px 6px   );--z-scrollbar-track-color:var(--gray200);--z-scrollbar-thumb-color:var(--red500);--z-scrollbar-thumb-hover-color:var(--red700);--z-scrollbar-corner-color:transparent}.theme-black.theme-black--red .z-scrollbar,.theme-black.theme-black--yellow .z-scrollbar{--z-scrollbar-track-gradient:linear-gradient(     to right,     transparent 0 1px,     var(--gray200) 1px 5px,     transparent 5px 6px   );--z-scrollbar-track-color:var(--gray200);--z-scrollbar-thumb-color:var(--gray950);--z-scrollbar-thumb-hover-color:var(--gray900);--z-scrollbar-corner-color:transparent}@supports not selector(.z-scrollbar::-webkit-scrollbar-track){.z-scrollbar{scrollbar-color:var(--z-scrollbar-thumb-color) var(--z-scrollbar-track-color)}}`;

const typographyCss = () => `:root{--font-family-sans:"IBM Plex Sans", sans-serif;--font-family-serif:"IBM Plex Serif", serif;--font-lt:300;--font-rg:400;--font-sb:600;--font-bd:700;--font-size-1:0.75rem;--font-size-2:0.875rem;--font-size-3:1rem;--font-size-4:1.125rem;--font-size-5:1.25rem;--font-size-6:1.5rem;--font-size-7:1.75rem;--font-size-8:2rem;--font-size-9:2.25rem;--font-size-10:2.625rem;--font-size-11:3rem;--font-size-12:3.375rem;--font-size-13:3.75rem;--font-size-14:4.25rem;--font-size-15:4.75rem;--font-size-16:5.25rem;--font-size-17:5.75rem;--section-title-1:var(--font-sb) var(--font-size-11) / 1.083 var(--font-family-serif);--section-title-2:var(--font-sb) var(--font-size-10) / 1.142 var(--font-family-serif);--section-title-3:var(--font-sb) var(--font-size-9) / 1.222 var(--font-family-serif);--section-title-4:var(--font-sb) var(--font-size-8) / 1.25 var(--font-family-serif);--section-title-5:var(--font-sb) var(--font-size-7) / 1.2857 var(--font-family-serif);--section-title-6:var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-1:var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-1-serif:var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-serif);--heading-1-sb:var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-1-sb-serif:var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-serif);--heading-1-lt:var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-1-lt-serif:var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-serif);--heading-2:var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-2-serif:var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-2-sb:var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-2-sb-serif:var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-2-lt:var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-2-lt-serif:var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-3:var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-3-serif:var(--font-rg) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-3-sb:var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-3-sb-serif:var(--font-sb) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-3-lt:var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-sans);--heading-3-lt-serif:var(--font-lt) var(--font-size-6) / 1.333 var(--font-family-serif);--heading-4:var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-sans);--heading-4-serif:var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-serif);--heading-4-sb:var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-sans);--heading-4-sb-serif:var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-serif);--heading-4-lt:var(--font-lt) var(--font-size-5) / 1.4 var(--font-family-sans);--heading-4-lt-serif:var(--font-lt) var(--font-size-5) / 1.4 var(--font-family-serif);--body-1:var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-sans);--body-1-serif:var(--font-rg) var(--font-size-5) / 1.4 var(--font-family-serif);--body-1-sb:var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-sans);--body-1-sb-serif:var(--font-sb) var(--font-size-5) / 1.4 var(--font-family-serif);--body-2:var(--font-rg) var(--font-size-4) / 1.5 var(--font-family-sans);--body-2-serif:var(--font-rg) var(--font-size-4) / 1.5 var(--font-family-serif);--body-2-sb:var(--font-sb) var(--font-size-4) / 1.5 var(--font-family-sans);--body-2-sb-serif:var(--font-sb) var(--font-size-4) / 1.5 var(--font-family-serif);--body-3:var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-sans);--body-3-serif:var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-serif);--body-3-sb:var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-sans);--body-3-sb-serif:var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-serif);--body-4:var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-sans);--body-4-serif:var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-serif);--body-4-sb:var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-sans);--body-4-sb-serif:var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-serif);--body-5:var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-sans);--body-5-serif:var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-serif);--body-5-sb:var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-sans);--body-5-sb-serif:var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-serif);--interactive-1:var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-sans);--interactive-1-serif:var(--font-rg) var(--font-size-3) / 1.5 var(--font-family-serif);--interactive-1-sb:var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-sans);--interactive-1-sb-serif:var(--font-sb) var(--font-size-3) / 1.5 var(--font-family-serif);--interactive-2:var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-sans);--interactive-2-serif:var(--font-rg) var(--font-size-2) / 1.4 var(--font-family-serif);--interactive-2-sb:var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-sans);--interactive-2-sb-serif:var(--font-sb) var(--font-size-2) / 1.4 var(--font-family-serif);--interactive-3:var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-sans);--interactive-3-serif:var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-serif);--interactive-3-sb:var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-sans);--interactive-3-sb-serif:var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-serif);--helper:italic var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-sans);--helper-serif:italic var(--font-rg) var(--font-size-1) / 1.333 var(--font-family-serif);--helper-sb:italic var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-sans);--helper-sb-serif:italic var(--font-sb) var(--font-size-1) / 1.333 var(--font-family-serif)}@media (min-width: 1152px){:root{--heading-1:var(--font-rg) var(--font-size-8) / 1.25 var(--font-family-sans);--heading-1-serif:var(--font-rg) var(--font-size-8) / 1.25 var(--font-family-serif);--heading-1-sb:var(--font-sb) var(--font-size-8) / 1.25 var(--font-family-sans);--heading-1-sb-serif:var(--font-sb) var(--font-size-8) / 1.25 var(--font-family-serif);--heading-1-lt:var(--font-lt) var(--font-size-8) / 1.25 var(--font-family-sans);--heading-1-lt-serif:var(--font-lt) var(--font-size-8) / 1.25 var(--font-family-serif);--heading-2:var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-2-serif:var(--font-rg) var(--font-size-7) / 1.28 var(--font-family-serif);--heading-2-sb:var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-2-sb-serif:var(--font-sb) var(--font-size-7) / 1.28 var(--font-family-serif);--heading-2-lt:var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-sans);--heading-2-lt-serif:var(--font-lt) var(--font-size-7) / 1.28 var(--font-family-serif)}}.heading-1,.heading-1-sb,.heading-1-lt,.heading-1-serif,.heading-1-sb-serif,.heading-1-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.heading-2,.heading-2-sb,.heading-2-lt,.heading-2-serif,.heading-2-sb-serif,.heading-2-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.heading-3,.heading-3-sb,.heading-3-lt,.heading-3-serif,.heading-3-sb-serif,.heading-3-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.heading-4,.heading-4-sb,.heading-4-lt,.heading-4-serif,.heading-4-sb-serif,.heading-4-lt-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.body-1,.body-1-sb,.body-1-serif,.body-1-sb-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.body-2,.body-2-sb,.body-2-serif,.body-2-sb-serif{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.body-3,.body-3-sb,.body-3-serif,.body-3-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.body-4,.body-4-sb,.body-4-serif,.body-4-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.body-5,.body-5-sb,.body-5-serif,.body-5-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.interactive-1,.interactive-1-sb,.interactive-1-serif,.interactive-1-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.interactive-2,.interactive-2-sb,.interactive-2-serif,.interactive-2-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.interactive-3,.interactive-3-sb,.interactive-3-serif,.interactive-3-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.helper,.helper-sb,.helper-serif,.helper-sb-serif{font-size:var(--font-size-1);font-style:italic;font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.section-title-1{font:var(--section-title-1)}.section-title-2{font:var(--section-title-2)}.section-title-3{font:var(--section-title-3)}.section-title-4{font:var(--section-title-4)}.section-title-5{font:var(--section-title-5)}.section-title-6{font:var(--section-title-6)}@media (min-width: 1152px){.heading-1,.heading-1-sb,.heading-1-lt,.heading-1-serif,.heading-1-sb-serif,.heading-1-lt-serif{font-size:var(--font-size-8);font-weight:var(--font-rg);line-height:1.25}.heading-2,.heading-2-sb,.heading-2-lt,.heading-2-serif,.heading-2-sb-serif,.heading-2-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}}@media (max-width: 767px){.mobile-heading-1,.mobile-heading-1-sb,.mobile-heading-1-lt,.mobile-heading-1-serif,.mobile-heading-1-sb-serif,.mobile-heading-1-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.mobile-heading-2,.mobile-heading-2-sb,.mobile-heading-2-lt,.mobile-heading-2-serif,.mobile-heading-2-sb-serif,.mobile-heading-2-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.mobile-heading-3,.mobile-heading-3-sb,.mobile-heading-3-lt,.mobile-heading-3-serif,.mobile-heading-3-sb-serif,.mobile-heading-3-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.mobile-heading-4,.mobile-heading-4-sb,.mobile-heading-4-lt,.mobile-heading-4-serif,.mobile-heading-4-sb-serif,.mobile-heading-4-lt-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.mobile-body-1,.mobile-body-1-sb,.mobile-body-1-serif,.mobile-body-1-sb-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.mobile-body-2,.mobile-body-2-sb,.mobile-body-2-serif,.mobile-body-2-sb-serif{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.mobile-body-3,.mobile-body-3-sb,.mobile-body-3-serif,.mobile-body-3-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.mobile-body-4,.mobile-body-4-sb,.mobile-body-4-serif,.mobile-body-4-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.mobile-body-5,.mobile-body-5-sb,.mobile-body-5-serif,.mobile-body-5-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.mobile-interactive-1,.mobile-interactive-1-sb,.mobile-interactive-1-serif,.mobile-interactive-1-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.mobile-interactive-2,.mobile-interactive-2-sb,.mobile-interactive-2-serif,.mobile-interactive-2-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.mobile-interactive-3,.mobile-interactive-3-sb,.mobile-interactive-3-serif,.mobile-interactive-3-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.mobile-section-title-1{font:var(--section-title-1)}.mobile-section-title-2{font:var(--section-title-2)}.mobile-section-title-3{font:var(--section-title-3)}.mobile-section-title-4{font:var(--section-title-4)}.mobile-section-title-5{font:var(--section-title-5)}.mobile-section-title-6{font:var(--section-title-6)}.mobile-heading-1-lt,.mobile-heading-2-lt,.mobile-heading-3-lt,.mobile-heading-4-lt,.mobile-heading-1-lt-serif,.mobile-heading-2-lt-serif,.mobile-heading-3-lt-serif,.mobile-heading-4-lt-serif{font-weight:var(--font-lt)}.mobile-heading-1-sb,.mobile-heading-2-sb,.mobile-heading-3-sb,.mobile-heading-4-sb,.mobile-body-1-sb,.mobile-body-2-sb,.mobile-body-3-sb,.mobile-body-4-sb,.mobile-body-5-sb,.mobile-interactive-1-sb,.mobile-interactive-2-sb,.mobile-interactive-3-sb,.mobile-heading-1-sb-serif,.mobile-heading-2-sb-serif,.mobile-heading-3-sb-serif,.mobile-heading-4-sb-serif,.mobile-body-1-sb-serif,.mobile-body-2-sb-serif,.mobile-body-3-sb-serif,.mobile-body-4-sb-serif,.mobile-body-5-sb-serif,.mobile-interactive-1-sb-serif,.mobile-interactive-2-sb-serif,.mobile-interactive-3-sb-serif{font-weight:var(--font-sb)}.mobile-heading-1-serif,.mobile-heading-1-sb-serif,.mobile-heading-1-lt-serif,.mobile-heading-2-serif,.mobile-heading-2-sb-serif,.mobile-heading-2-lt-serif,.mobile-heading-3-serif,.mobile-heading-3-sb-serif,.mobile-heading-3-lt-serif,.mobile-heading-4-serif,.mobile-heading-4-sb-serif,.mobile-heading-4-lt-serif,.mobile-body-1-serif,.mobile-body-1-sb-serif,.mobile-body-2-serif,.mobile-body-2-sb-serif,.mobile-body-3-serif,.mobile-body-3-sb-serif,.mobile-body-4-serif,.mobile-body-4-sb-serif,.mobile-body-5-serif,.mobile-body-5-sb-serif,.mobile-interactive-1-serif,.mobile-interactive-1-sb-serif,.mobile-interactive-2-serif,.mobile-interactive-2-sb-serif,.mobile-interactive-3-serif,.mobile-interactive-3-sb-serif{font-family:var(--font-family-serif)}}@media (min-width: 768px) and (max-width: 1151px){.tablet-heading-1,.tablet-heading-1-sb,.tablet-heading-1-lt,.tablet-heading-1-serif,.tablet-heading-1-sb-serif,.tablet-heading-1-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.tablet-heading-2,.tablet-heading-2-sb,.tablet-heading-2-lt,.tablet-heading-2-serif,.tablet-heading-2-sb-serif,.tablet-heading-2-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.tablet-heading-3,.tablet-heading-3-sb,.tablet-heading-3-lt,.tablet-heading-3-serif,.tablet-heading-3-sb-serif,.tablet-heading-3-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.tablet-heading-4,.tablet-heading-4-sb,.tablet-heading-4-lt,.tablet-heading-4-serif,.tablet-heading-4-sb-serif,.tablet-heading-4-lt-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.tablet-body-1,.tablet-body-1-sb,.tablet-body-1-serif,.tablet-body-1-sb-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.tablet-body-2,.tablet-body-2-sb,.tablet-body-2-serif,.tablet-body-2-sb-serif{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.tablet-body-3,.tablet-body-3-sb,.tablet-body-3-serif,.tablet-body-3-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.tablet-body-4,.tablet-body-4-sb,.tablet-body-4-serif,.tablet-body-4-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.tablet-body-5,.tablet-body-5-sb,.tablet-body-5-serif,.tablet-body-5-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.tablet-interactive-1,.tablet-interactive-1-sb,.tablet-interactive-1-serif,.tablet-interactive-1-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.tablet-interactive-2,.tablet-interactive-2-sb,.tablet-interactive-2-serif,.tablet-interactive-2-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.tablet-interactive-3,.tablet-interactive-3-sb,.tablet-interactive-3-serif,.tablet-interactive-3-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.tablet-section-title-1{font:var(--section-title-1)}.tablet-section-title-2{font:var(--section-title-2)}.tablet-section-title-3{font:var(--section-title-3)}.tablet-section-title-4{font:var(--section-title-4)}.tablet-section-title-5{font:var(--section-title-5)}.tablet-section-title-6{font:var(--section-title-6)}.tablet-heading-1-lt,.tablet-heading-2-lt,.tablet-heading-3-lt,.tablet-heading-4-lt,.tablet-heading-1-lt-serif,.tablet-heading-2-lt-serif,.tablet-heading-3-lt-serif,.tablet-heading-4-lt-serif{font-weight:var(--font-lt)}.tablet-heading-1-sb,.tablet-heading-2-sb,.tablet-heading-3-sb,.tablet-heading-4-sb,.tablet-body-1-sb,.tablet-body-2-sb,.tablet-body-3-sb,.tablet-body-4-sb,.tablet-body-5-sb,.tablet-interactive-1-sb,.tablet-interactive-2-sb,.tablet-interactive-3-sb,.tablet-heading-1-sb-serif,.tablet-heading-2-sb-serif,.tablet-heading-3-sb-serif,.tablet-heading-4-sb-serif,.tablet-body-1-sb-serif,.tablet-body-2-sb-serif,.tablet-body-3-sb-serif,.tablet-body-4-sb-serif,.tablet-body-5-sb-serif,.tablet-interactive-1-sb-serif,.tablet-interactive-2-sb-serif,.tablet-interactive-3-sb-serif{font-weight:var(--font-sb)}.tablet-heading-1-serif,.tablet-heading-1-sb-serif,.tablet-heading-1-lt-serif,.tablet-heading-2-serif,.tablet-heading-2-sb-serif,.tablet-heading-2-lt-serif,.tablet-heading-3-serif,.tablet-heading-3-sb-serif,.tablet-heading-3-lt-serif,.tablet-heading-4-serif,.tablet-heading-4-sb-serif,.tablet-heading-4-lt-serif,.tablet-body-1-serif,.tablet-body-1-sb-serif,.tablet-body-2-serif,.tablet-body-2-sb-serif,.tablet-body-3-serif,.tablet-body-3-sb-serif,.tablet-body-4-serif,.tablet-body-4-sb-serif,.tablet-body-5-serif,.tablet-body-5-sb-serif,.tablet-interactive-1-serif,.tablet-interactive-1-sb-serif,.tablet-interactive-2-serif,.tablet-interactive-2-sb-serif,.tablet-interactive-3-serif,.tablet-interactive-3-sb-serif{font-family:var(--font-family-serif)}}@media (min-width: 1152px) and (max-width: 1365px){.desktop-heading-1,.desktop-heading-1-sb,.desktop-heading-1-lt,.desktop-heading-1-serif,.desktop-heading-1-sb-serif,.desktop-heading-1-lt-serif{font-size:var(--font-size-8);font-weight:var(--font-rg);line-height:1.25}.desktop-heading-2,.desktop-heading-2-sb,.desktop-heading-2-lt,.desktop-heading-2-serif,.desktop-heading-2-sb-serif,.desktop-heading-2-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.desktop-heading-3,.desktop-heading-3-sb,.desktop-heading-3-lt,.desktop-heading-3-serif,.desktop-heading-3-sb-serif,.desktop-heading-3-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.desktop-heading-4,.desktop-heading-4-sb,.desktop-heading-4-lt,.desktop-heading-4-serif,.desktop-heading-4-sb-serif,.desktop-heading-4-lt-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.desktop-body-1,.desktop-body-1-sb,.desktop-body-1-serif,.desktop-body-1-sb-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.desktop-body-2,.desktop-body-2-sb,.desktop-body-2-serif,.desktop-body-2-sb-serif{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.desktop-body-3,.desktop-body-3-sb,.desktop-body-3-serif,.desktop-body-3-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.desktop-body-4,.desktop-body-4-sb,.desktop-body-4-serif,.desktop-body-4-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.desktop-body-5,.desktop-body-5-sb,.desktop-body-5-serif,.desktop-body-5-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.desktop-interactive-1,.desktop-interactive-1-sb,.desktop-interactive-1-serif,.desktop-interactive-1-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.desktop-interactive-2,.desktop-interactive-2-sb,.desktop-interactive-2-serif,.desktop-interactive-2-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.desktop-interactive-3,.desktop-interactive-3-sb,.desktop-interactive-3-serif,.desktop-interactive-3-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.desktop-section-title-1{font:var(--section-title-1)}.desktop-section-title-2{font:var(--section-title-2)}.desktop-section-title-3{font:var(--section-title-3)}.desktop-section-title-4{font:var(--section-title-4)}.desktop-section-title-5{font:var(--section-title-5)}.desktop-section-title-6{font:var(--section-title-6)}.desktop-heading-1-lt,.desktop-heading-2-lt,.desktop-heading-3-lt,.desktop-heading-4-lt,.desktop-heading-1-lt-serif,.desktop-heading-2-lt-serif,.desktop-heading-3-lt-serif,.desktop-heading-4-lt-serif{font-weight:var(--font-lt)}.desktop-heading-1-sb,.desktop-heading-2-sb,.desktop-heading-3-sb,.desktop-heading-4-sb,.desktop-body-1-sb,.desktop-body-2-sb,.desktop-body-3-sb,.desktop-body-4-sb,.desktop-body-5-sb,.desktop-interactive-1-sb,.desktop-interactive-2-sb,.desktop-interactive-3-sb,.desktop-heading-1-sb-serif,.desktop-heading-2-sb-serif,.desktop-heading-3-sb-serif,.desktop-heading-4-sb-serif,.desktop-body-1-sb-serif,.desktop-body-2-sb-serif,.desktop-body-3-sb-serif,.desktop-body-4-sb-serif,.desktop-body-5-sb-serif,.desktop-interactive-1-sb-serif,.desktop-interactive-2-sb-serif,.desktop-interactive-3-sb-serif{font-weight:var(--font-sb)}.desktop-heading-1-serif,.desktop-heading-1-sb-serif,.desktop-heading-1-lt-serif,.desktop-heading-2-serif,.desktop-heading-2-sb-serif,.desktop-heading-2-lt-serif,.desktop-heading-3-serif,.desktop-heading-3-sb-serif,.desktop-heading-3-lt-serif,.desktop-heading-4-serif,.desktop-heading-4-sb-serif,.desktop-heading-4-lt-serif,.desktop-body-1-serif,.desktop-body-1-sb-serif,.desktop-body-2-serif,.desktop-body-2-sb-serif,.desktop-body-3-serif,.desktop-body-3-sb-serif,.desktop-body-4-serif,.desktop-body-4-sb-serif,.desktop-body-5-serif,.desktop-body-5-sb-serif,.desktop-interactive-1-serif,.desktop-interactive-1-sb-serif,.desktop-interactive-2-serif,.desktop-interactive-2-sb-serif,.desktop-interactive-3-serif,.desktop-interactive-3-sb-serif{font-family:var(--font-family-serif)}}@media (min-width: 1366px){.wide-heading-1,.wide-heading-1-sb,.wide-heading-1-lt,.wide-heading-1-serif,.wide-heading-1-sb-serif,.wide-heading-1-lt-serif{font-size:var(--font-size-8);font-weight:var(--font-rg);line-height:1.25}.wide-heading-2,.wide-heading-2-sb,.wide-heading-2-lt,.wide-heading-2-serif,.wide-heading-2-sb-serif,.wide-heading-2-lt-serif{font-size:var(--font-size-7);font-weight:var(--font-rg);line-height:1.28}.wide-heading-3,.wide-heading-3-sb,.wide-heading-3-lt,.wide-heading-3-serif,.wide-heading-3-sb-serif,.wide-heading-3-lt-serif{font-size:var(--font-size-6);font-weight:var(--font-rg);line-height:1.333}.wide-heading-4,.wide-heading-4-sb,.wide-heading-4-lt,.wide-heading-4-serif,.wide-heading-4-sb-serif,.wide-heading-4-lt-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.wide-body-1,.wide-body-1-sb,.wide-body-1-serif,.wide-body-1-sb-serif{font-size:var(--font-size-5);font-weight:var(--font-rg);line-height:1.4}.wide-body-2,.wide-body-2-sb,.wide-body-2-serif,.wide-body-2-sb-serif{font-size:var(--font-size-4);font-weight:var(--font-rg);line-height:1.5}.wide-body-3,.wide-body-3-sb,.wide-body-3-serif,.wide-body-3-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.wide-body-4,.wide-body-4-sb,.wide-body-4-serif,.wide-body-4-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.wide-body-5,.wide-body-5-sb,.wide-body-5-serif,.wide-body-5-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.wide-interactive-1,.wide-interactive-1-sb,.wide-interactive-1-serif,.wide-interactive-1-sb-serif{font-size:var(--font-size-3);font-weight:var(--font-rg);line-height:1.5}.wide-interactive-2,.wide-interactive-2-sb,.wide-interactive-2-serif,.wide-interactive-2-sb-serif{font-size:var(--font-size-2);font-weight:var(--font-rg);letter-spacing:0.16px;line-height:1.4}.wide-interactive-3,.wide-interactive-3-sb,.wide-interactive-3-serif,.wide-interactive-3-sb-serif{font-size:var(--font-size-1);font-weight:var(--font-rg);letter-spacing:0.32px;line-height:1.333}.wide-section-title-1{font:var(--section-title-1)}.wide-section-title-2{font:var(--section-title-2)}.wide-section-title-3{font:var(--section-title-3)}.wide-section-title-4{font:var(--section-title-4)}.wide-section-title-5{font:var(--section-title-5)}.wide-section-title-6{font:var(--section-title-6)}.wide-heading-1-lt,.wide-heading-2-lt,.wide-heading-3-lt,.wide-heading-4-lt,.wide-heading-1-lt-serif,.wide-heading-2-lt-serif,.wide-heading-3-lt-serif,.wide-heading-4-lt-serif{font-weight:var(--font-lt)}.wide-heading-1-sb,.wide-heading-2-sb,.wide-heading-3-sb,.wide-heading-4-sb,.wide-body-1-sb,.wide-body-2-sb,.wide-body-3-sb,.wide-body-4-sb,.wide-body-5-sb,.wide-interactive-1-sb,.wide-interactive-2-sb,.wide-interactive-3-sb,.wide-heading-1-sb-serif,.wide-heading-2-sb-serif,.wide-heading-3-sb-serif,.wide-heading-4-sb-serif,.wide-body-1-sb-serif,.wide-body-2-sb-serif,.wide-body-3-sb-serif,.wide-body-4-sb-serif,.wide-body-5-sb-serif,.wide-interactive-1-sb-serif,.wide-interactive-2-sb-serif,.wide-interactive-3-sb-serif{font-weight:var(--font-sb)}.wide-heading-1-serif,.wide-heading-1-sb-serif,.wide-heading-1-lt-serif,.wide-heading-2-serif,.wide-heading-2-sb-serif,.wide-heading-2-lt-serif,.wide-heading-3-serif,.wide-heading-3-sb-serif,.wide-heading-3-lt-serif,.wide-heading-4-serif,.wide-heading-4-sb-serif,.wide-heading-4-lt-serif,.wide-body-1-serif,.wide-body-1-sb-serif,.wide-body-2-serif,.wide-body-2-sb-serif,.wide-body-3-serif,.wide-body-3-sb-serif,.wide-body-4-serif,.wide-body-4-sb-serif,.wide-body-5-serif,.wide-body-5-sb-serif,.wide-interactive-1-serif,.wide-interactive-1-sb-serif,.wide-interactive-2-serif,.wide-interactive-2-sb-serif,.wide-interactive-3-serif,.wide-interactive-3-sb-serif{font-family:var(--font-family-serif)}}.heading-1-lt,.heading-2-lt,.heading-3-lt,.heading-4-lt,.heading-1-lt-serif,.heading-2-lt-serif,.heading-3-lt-serif,.heading-4-lt-serif{font-weight:var(--font-lt)}.heading-1-sb,.heading-2-sb,.heading-3-sb,.heading-4-sb,.body-1-sb,.body-2-sb,.body-3-sb,.body-4-sb,.body-5-sb,.interactive-1-sb,.interactive-2-sb,.interactive-3-sb,.helper-sb,.heading-1-sb-serif,.heading-2-sb-serif,.heading-3-sb-serif,.heading-4-sb-serif,.body-1-sb-serif,.body-2-sb-serif,.body-3-sb-serif,.body-4-sb-serif,.body-5-sb-serif,.interactive-1-sb-serif,.interactive-2-sb-serif,.interactive-3-sb-serif,.helper-sb-serif{font-weight:var(--font-sb)}.heading-1-serif,.heading-1-sb-serif,.heading-1-lt-serif,.heading-2-serif,.heading-2-sb-serif,.heading-2-lt-serif,.heading-3-serif,.heading-3-sb-serif,.heading-3-lt-serif,.heading-4-serif,.heading-4-sb-serif,.heading-4-lt-serif,.body-1-serif,.body-1-sb-serif,.body-2-serif,.body-2-sb-serif,.body-3-serif,.body-3-sb-serif,.body-4-serif,.body-4-sb-serif,.body-5-serif,.body-5-sb-serif,.interactive-1-serif,.interactive-1-sb-serif,.interactive-2-serif,.interactive-2-sb-serif,.interactive-3-serif,.interactive-3-sb-serif,.helper-serif,.helper-sb-serif{font-family:var(--font-family-serif)}`;

const ZSearchbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.searchSubmit = createEvent(this, "searchSubmit", 7);
        this.searchTyping = createEvent(this, "searchTyping", 7);
        this.searchItemClick = createEvent(this, "searchItemClick", 7);
        /** The id of the searchbar element */
        this.htmlid = `searchbar-${randomId()}`;
        /** Prevent submit action */
        this.preventSubmit = false;
        /** Show autocomplete results */
        this.autocomplete = false;
        /** Minimun number of characters to dispatch typing event */
        this.autocompleteMinChars = 3;
        /** Search helper text */
        this.searchHelperLabel = "Cerca {searchString}";
        /** Sort autocomplete results items */
        this.sortResultsItems = false;
        /** Show submit button */
        this.showSearchButton = false;
        /** Hide the label of the submit button, showing only the icon */
        this.searchButtonIconOnly = false;
        /** The label of the submit button */
        this.searchButtonLabel = "CERCA";
        /** Size of the `z-input` and submit `z-button` */
        this.size = ControlSize.BIG;
        /** Submit `z-button` variant */
        this.variant = ButtonVariant.PRIMARY;
        this.searchString = this.value;
        this.currResultsCount = this.resultsCount;
        this.showResults = false;
        this.isMobile = false;
        this.resultsItemsList = null;
    }
    emitSearchItemClick(item) {
        this.searchItemClick.emit(item);
        this.selectedItem = item;
        this.searchString = "";
    }
    emitSearchSubmit() {
        this.searchSubmit.emit(this.inputRef.value);
    }
    watchItems() {
        this.resultsItemsList = this.getResultsItemsList();
    }
    watchResultsCount() {
        this.currResultsCount = this.resultsCount;
    }
    watchValue() {
        this.searchString = this.value;
    }
    watchSearchString() {
        this.searchTyping.emit(this.searchString);
        if (!this.searchString) {
            this.currResultsCount = this.resultsCount;
        }
    }
    getResultsItemsList() {
        return typeof this.resultsItems === "string" ? JSON.parse(this.resultsItems) : this.resultsItems;
    }
    getGroupedItems() {
        const groupedItems = {};
        this.resultsItemsList.forEach((item) => {
            var _a;
            const key = `${item === null || item === void 0 ? void 0 : item.category}${item === null || item === void 0 ? void 0 : item.subcategory}`;
            groupedItems[key] = (_a = groupedItems[key]) !== null && _a !== void 0 ? _a : {
                category: item === null || item === void 0 ? void 0 : item.category,
                subcategory: item === null || item === void 0 ? void 0 : item.subcategory,
                items: [],
            };
            groupedItems[key]["items"].push(item);
        });
        if (this.sortResultsItems) {
            return Object.keys(groupedItems)
                .sort()
                .reduce((obj, key) => {
                obj[key] = Object.assign(Object.assign({}, groupedItems[key]), { items: groupedItems[key]["items"].sort((a, b) => {
                        const nameA = a.label.toUpperCase();
                        const nameB = b.label.toUpperCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    }) });
                return obj;
            }, {});
        }
        return groupedItems;
    }
    onListItemKeyDown(e, item) {
        if (e.key === KeyboardCode.ENTER) {
            e.preventDefault();
            this.emitSearchItemClick(item);
            return;
        }
        this.handleArrowsNavigation(e);
    }
    onSearchHelperKeyDown(e) {
        if (e.key === KeyboardCode.ENTER) {
            e.preventDefault();
            this.emitSearchSubmit();
            return;
        }
        this.handleArrowsNavigation(e);
    }
    handleArrowsNavigation(e) {
        var _a, _b, _c, _d, _e, _f;
        if (![KeyboardCode.ARROW_DOWN, KeyboardCode.ARROW_UP].includes(e.key)) {
            return;
        }
        const currentElement = e.target;
        const items = Array.from((_b = (_a = this.host.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll("z-list .list-item")) !== null && _b !== void 0 ? _b : []);
        const currentIndex = items.indexOf(currentElement);
        if (e.key === KeyboardCode.ARROW_DOWN) {
            e.preventDefault();
            const nextIndex = currentIndex + 1;
            if (nextIndex < items.length) {
                items[nextIndex].focus();
            }
        }
        if (e.key === KeyboardCode.ARROW_UP) {
            e.preventDefault();
            const prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                (_d = (_c = this.host.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("input")) === null || _d === void 0 ? void 0 : _d.focus();
                (_f = (_e = this.host.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector("input")) === null || _f === void 0 ? void 0 : _f.setSelectionRange(this.inputRef.value.length, this.inputRef.value.length);
            }
            if (prevIndex >= 0) {
                items[prevIndex].focus();
            }
        }
    }
    handleStopTyping(e) {
        e.stopPropagation();
        this.searchString = e.detail.value;
        this.selectedItem = undefined;
    }
    handleSubmit() {
        if (this.preventSubmit) {
            return;
        }
        this.emitSearchSubmit();
    }
    handleOutsideClick(e) {
        const cp = e.composedPath();
        if (cp.includes(this.host)) {
            return;
        }
        this.showResults = false;
    }
    componentWillLoad() {
        this.resultsItemsList = this.getResultsItemsList();
        this.mql = matchMedia("(max-width: 767px)");
        this.onMobileViewChange = (e) => (this.isMobile = e.matches);
        this.mql.addEventListener("change", this.onMobileViewChange);
        this.isMobile = this.mql.matches;
    }
    disconnectedCallback() {
        var _a;
        (_a = this.mql) === null || _a === void 0 ? void 0 : _a.removeEventListener("change", this.onMobileViewChange);
    }
    renderItemLabel(label) {
        if (!this.searchString) {
            return label;
        }
        return label.replace(new RegExp(this.searchString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gmi"), (found) => `<mark>${found}</mark>`);
    }
    renderItem(item, index) {
        var _a;
        return (h("z-list-element", { id: `list-item-${this.htmlid}-${index}`, role: "presentation", htmlTabindex: -1, onKeyDown: (e) => this.onListItemKeyDown(e, item), onClick: (e) => {
                e.stopPropagation();
                this.emitSearchItemClick(item);
            } }, h("div", { class: "list-item ellipsis", role: "option", tabindex: 0 }, !!(item === null || item === void 0 ? void 0 : item.icon) && (h("z-icon", { class: "item-icon", name: item.icon })), h("div", { class: "item-label body-3 mobile-body-4", title: item.label, innerHTML: this.renderItemLabel(item.label) }), !!(item === null || item === void 0 ? void 0 : item.tag) && h("z-tag", { icon: item.tag.icon }, !this.isMobile ? item.tag.text : "")), !!((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) && (h("z-list", { class: "sub-list", role: "group", "aria-label": item.label || undefined }, item.children.map((child, index) => this.renderItem(child, index))))));
    }
    /**
     * Renders the item grouped by category and subcategory. If `resultsCount` is set, it limits the number of rendered items.
     */
    renderItemGroups() {
        var _a;
        if (!((_a = this.resultsItemsList) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        const groupedItems = Object.values(this.getGroupedItems());
        const listGroups = [];
        const hasResultsLimit = !!this.currResultsCount;
        let renderedCount = 0;
        for (const groupItem of groupedItems) {
            const remaining = hasResultsLimit ? this.currResultsCount - renderedCount : groupItem.items.length;
            if (remaining <= 0) {
                break;
            }
            const visibleItems = groupItem.items.slice(0, remaining);
            const listGroupsElements = visibleItems.map((item, subindex) => this.renderItem(item, subindex));
            renderedCount += listGroupsElements.length;
            if (!listGroupsElements.length) {
                continue;
            }
            const ariaLabel = [groupItem.category, groupItem.subcategory].filter(Boolean).join(" ");
            listGroups.push(h("z-list-group", { "aria-label": ariaLabel || undefined }, groupItem.category && (h("z-list-element", { class: "category-heading body-3 mobile-body-4", slot: "header-title", role: "presentation", htmlTabindex: -1 }, h("div", { class: "category" }, groupItem.category), groupItem.subcategory && h("div", { class: "subcategory" }, groupItem.subcategory))), listGroupsElements));
        }
        return listGroups;
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '5c3ed05870fccf1a231eda8149bebd0274bb2c69', onFocus: () => (this.showResults = true), onClick: (e) => this.handleOutsideClick(e), class: { "has-submit": !!this.showSearchButton, "has-results": !!this.autocomplete } }, h("div", { key: 'b14fecdd8272c9f21ecd4e1d7ec07bf5f96b97b2', class: "input-container" }, h("z-input", { key: 'bf1ed33bb3bacb810646b41b12d5c922ce144d23', ref: (el) => (this.inputRef = el), htmlid: `input-${this.htmlid}`, message: false, placeholder: this.placeholder, onStopTyping: (e) => this.handleStopTyping(e), onKeyUp: (e) => {
                handleEnterKeydSubmit(e, () => this.handleSubmit());
                this.handleArrowsNavigation(e);
            }, onFocus: () => (this.showResults = true), value: this.searchString || ((_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.label), size: this.size, label: this.label, htmlAriaLabel: this.htmlAriaLabel || this.placeholder || undefined }), !!(this.showResults &&
            this.autocomplete &&
            this.searchString &&
            this.searchString.length >= this.autocompleteMinChars &&
            this.resultsItemsList) && (h("div", { key: '7ec9e9e45860fdbe991ab75a1613e5bd4a69f386', class: "results z-scrollbar" }, this.preventSubmit && !((_b = this.resultsItemsList) === null || _b === void 0 ? void 0 : _b.length) ? (h("div", { class: "item-no-results body-3 mobile-body-4" }, "Non abbiamo trovato risultati per ", h("b", null, this.searchString), h("br", null), h("br", null), "Cosa puoi fare?", h("ul", null, h("li", null, "Verificare di aver scritto bene"), h("li", null, "Provare a cercare un'altra parola"), h("li", null, "Provare a cercare qualcosa di pi\u00F9 generico")))) : (h("z-list", { role: "listbox", id: `list-${this.htmlid}`, "aria-label": this.htmlAriaLabel || this.label || undefined }, this.autocomplete && !this.preventSubmit && !!this.searchString && (h("z-list-element", { role: "presentation", htmlTabindex: -1, id: `list-item-${this.htmlid}-search`, onKeyDown: (e) => this.onSearchHelperKeyDown(e), onClick: () => this.emitSearchSubmit() }, h("div", { class: "list-item item-search", role: "option", tabindex: 0 }, h("z-icon", { class: "search-icon", name: "left-magnifying-glass" }), h("div", { class: "item-label body-3 mobile-body-4", innerHTML: (_c = this.searchHelperLabel) === null || _c === void 0 ? void 0 : _c.replace("{searchString}", `<mark>${this.searchString}</mark>`) })))), this.renderItemGroups(), !!(this.searchString &&
            ((_d = this.resultsItemsList) === null || _d === void 0 ? void 0 : _d.length) &&
            this.currResultsCount &&
            this.currResultsCount < ((_e = this.resultsItemsList) === null || _e === void 0 ? void 0 : _e.length)) && (h("z-list-element", { role: "presentation", htmlTabindex: -1, id: `list-item-${this.htmlid}-show-all` }, h("div", { role: "option", class: "item-show-all body-3 mobile-body-4", tabindex: 0, onClick: () => (this.currResultsCount = undefined) }, "Vedi tutti i risultati")))))))), this.showSearchButton && (h("z-button", { key: '43e55538a8fa30b1ed210822cc30d126a4c00e94', icon: this.searchButtonIconOnly ? "search" : undefined, "aria-label": this.searchButtonIconOnly ? this.searchButtonLabel.trim() || "CERCA" : undefined, disabled: !!this.preventSubmit, variant: this.variant, size: this.size, onClick: () => this.handleSubmit() }, this.searchButtonIconOnly ? "" : this.searchButtonLabel.trim() || "CERCA"))));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "resultsItems": [{
                "watchItems": 0
            }],
        "resultsCount": [{
                "watchResultsCount": 0
            }],
        "value": [{
                "watchValue": 0
            }],
        "searchString": [{
                "watchSearchString": 0
            }]
    }; }
};
ZSearchbar.style = stylesCss$3() + (stylesCss$2() + (stylesCss$1() + typographyCss()));

const stylesCss = () => `.sc-z-tag-h{--z-icon-width:14px;--z-icon-height:14px;display:flex;width:fit-content;max-width:inherit;height:fit-content;max-height:inherit;align-items:flex-start;padding:calc(var(--space-unit) / 2);background-color:var(--z-tag-bg, var(--color-hover-primary));border-radius:var(--border-radius);color:var(--z-tag-text-color, var(--color-text-inverse));fill:currentcolor;font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);letter-spacing:0.32px;line-height:14px;text-transform:uppercase}.sc-z-tag-h>z-icon.sc-z-tag{margin-right:0;transition:margin-right 0.3s ease-out}.has-text.sc-z-tag-h:not(.expandable)>z-icon.sc-z-tag{margin-right:var(--space-unit)}.has-text.expandable.sc-z-tag-h:hover>z-icon.sc-z-tag{margin-right:var(--space-unit)}.expandable.sc-z-tag-h>div.sc-z-tag{overflow:hidden;max-width:0;max-height:0}.expandable.sc-z-tag-h:hover>div.sc-z-tag{max-width:100%;max-height:100%}`;

const ZTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '5c072a259029ca528ae0fcf6300ed5f39f314532', class: {
                "expandable": this.expandable && !!this.icon,
                "has-text": !!this.host.textContent.trim(),
            } }, this.icon && h("z-icon", { key: 'eb153f15fb1ac3acfe3978cc32247ef0bd862c7c', name: this.icon }), h("div", { key: '5fa9238300e946f9fd6378ee6d45cc3c294b8f9c' }, h("slot", { key: '0fd75c9db2d06fc24228043f83655963203b2306' }))));
    }
    get host() { return getElement(this); }
};
ZTag.style = stylesCss();

export { ZAppHeader as z_app_header, ZButton as z_button, ZDivider as z_divider, ZIcon as z_icon, ZInput as z_input, ZInputMessage as z_input_message, ZList as z_list, ZListElement as z_list_element, ZListGroup as z_list_group, ZOffcanvas as z_offcanvas, ZSearchbar as z_searchbar, ZTag as z_tag };
