import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as ButtonVariant, e as ControlSize, O as OffCanvasVariant, v as TransitionDirection } from './index2.js';
import { d as defineCustomElement$c } from './index4.js';
import { d as defineCustomElement$b } from './index6.js';
import { d as defineCustomElement$a } from './index9.js';
import { d as defineCustomElement$9 } from './index10.js';
import { d as defineCustomElement$8 } from './index11.js';
import { d as defineCustomElement$7 } from './index12.js';
import { d as defineCustomElement$6 } from './index13.js';
import { d as defineCustomElement$5 } from './index14.js';
import { d as defineCustomElement$4 } from './index21.js';
import { d as defineCustomElement$3 } from './index26.js';
import { d as defineCustomElement$2 } from './index27.js';

const stylesCss = ":host{--app-header-typography-1-size:24px;--app-header-typography-2-size:28px;--app-header-typography-3-size:32px;--app-header-typography-4-size:36px;--app-header-typography-5-size:42px;--app-header-typography-6-size:48px;--app-header-typography-7-size:54px;--app-header-typography-8-size:60px;--app-header-typography-9-size:68px;--app-header-typography-10-size:76px;--app-header-typography-11-size:84px;--app-header-typography-12-size:92px;--app-header-typography-1-lineheight:1.33;--app-header-typography-2-lineheight:1.29;--app-header-typography-3-lineheight:1.25;--app-header-typography-4-lineheight:1.24;--app-header-typography-5-lineheight:1.24;--app-header-typography-6-lineheight:1.25;--app-header-typography-7-lineheight:1.2;--app-header-typography-8-lineheight:1.26;--app-header-typography-9-lineheight:1.24;--app-header-typography-10-lineheight:1.26;--app-header-typography-11-lineheight:1.2;--app-header-typography-12-lineheight:1.2;--app-header-typography-1-tracking:calc(-0.2 / 1em);--app-header-typography-2-tracking:calc(-0.4 / 1em);--app-header-typography-3-tracking:calc(-0.6 / 1em);--app-header-typography-4-tracking:calc(-0.8 / 1em);--app-header-typography-5-tracking:calc(-1 / 1em);--app-header-typography-6-tracking:calc(-1.2 / 1em);--app-header-typography-7-tracking:calc(-1.4 / 1em);--app-header-typography-8-tracking:calc(-1.6 / 1em);--app-header-typography-9-tracking:calc(-1.8 / 1em);--app-header-typography-10-tracking:calc(-2 / 1em);--app-header-typography-11-tracking:calc(-2.2 / 1em);--app-header-typography-12-tracking:calc(-2.4 / 1em);--app-header-content-max-width:100%;--app-header-height:auto;--app-header-top-offset:48px;--app-header-drawer-trigger-size:calc(var(--space-unit) * 4);--app-header-bg:var(--color-surface01);--app-header-stucked-bg:var(--color-surface01);--app-header-text-color:var(--color-default-text);--app-header-title-font-size:var(--app-header-typography-3-size);--app-header-title-lineheight:var(--app-header-typography-3-lineheight);--app-header-title-letter-spacing:var(--app-header-typography-3-tracking);--app-header-stucked-text-color:var(--color-default-text);position:relative;display:block;height:var(--app-header-height);color:var(--app-header-text-color)}:host,*{-webkit-box-sizing:border-box;box-sizing:border-box}.heading-panel{position:relative;display:-ms-flexbox;display:flex;width:100%;max-width:var(--app-header-content-max-width);-ms-flex-direction:column;flex-direction:column;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:baseline;align-items:baseline;padding:var(--grid-margin);margin:0 auto;background:var(--app-header-bg);gap:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5)}.hero-container+.heading-panel{background:transparent}:host(:empty) .heading-panel{padding:0}.heading-container{position:relative;z-index:1;display:-ms-flexbox;display:flex;width:100%;max-width:100%;-ms-flex:1 auto;flex:1 auto;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start}.heading-title{display:-ms-flexbox;display:flex;max-width:100%;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:start;align-items:flex-start;-webkit-column-gap:calc(var(--space-unit) * 2);-moz-column-gap:calc(var(--space-unit) * 2);column-gap:calc(var(--space-unit) * 2)}::slotted([slot=\"title\"]),.heading-stuck .heading-title>*,::slotted([slot=\"stucked-title\"]){margin:0;font-family:\"IBM Plex Serif\", serif;font-weight:var(--font-bd)}::slotted([slot=\"title\"]){font-size:var(--app-header-title-font-size);letter-spacing:var(--app-header-title-letter-spacing);line-height:var(--app-header-title-lineheight)}.heading-stuck .heading-title>*,::slotted([slot=\"stucked-title\"]){font-size:var(--app-header-typography-3-size);letter-spacing:var(--app-header-typography-3-tracking);line-height:var(--app-header-typography-3-lineheight)}:host(:not([menu-length=\"0\"])) .heading-subtitle{padding-left:calc(var(--app-header-drawer-trigger-size) + (var(--space-unit) * 2))}::slotted([slot=\"top-subtitle\"]),::slotted([slot=\"subtitle\"]){margin:0;font-family:var(--font-family-sans);font-size:20px;font-style:italic;line-height:26px}::slotted([slot=\"subtitle\"]){font-weight:500}::slotted([slot=\"top-subtitle\"]){font-weight:400}.menu-container{display:-ms-flexbox;display:flex;width:100%;-ms-flex:1 auto;flex:1 auto;-ms-flex-flow:row wrap;flex-flow:row wrap}:host([menu-length=\"0\"]:not([enable-search])) .menu-container,.menu-container:empty{display:none}.menu-container ::slotted([open]){position:relative;z-index:3}z-searchbar{z-index:0;display:-ms-flexbox;display:flex;width:auto;min-width:calc(var(--space-unit) * 32);-ms-flex:1 auto;flex:1 auto;-ms-flex-align:center;align-items:center;margin-left:auto}.heading-stuck{position:fixed;z-index:20;top:var(--app-header-top-offset);left:0;width:100%;max-width:100%;-webkit-animation:slide-stuck-heading-in 250ms ease-out;animation:slide-stuck-heading-in 250ms ease-out;background:var(--app-header-stucked-bg);-webkit-box-shadow:var(--shadow-2);box-shadow:var(--shadow-2);color:var(--app-header-stucked-text-color)}.heading-stuck-content{display:-ms-flexbox;display:flex;max-width:var(--app-header-content-max-width);-ms-flex-align:center;align-items:center;padding:var(--space-unit) var(--grid-margin);margin:0 auto;-webkit-column-gap:calc(var(--space-unit) * 2);-moz-column-gap:calc(var(--space-unit) * 2);column-gap:calc(var(--space-unit) * 2)}.heading-stuck .heading-title{overflow:hidden}.heading-stuck .heading-title>*,.heading-stuck .heading-title ::slotted([slot=\"stucked-title\"]){display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.heading-stuck-content z-button{margin-left:auto}.drawer-trigger{padding:0;border:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border-radius:0;color:inherit;cursor:pointer}.drawer-trigger:focus-visible{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none !important}.drawer-trigger z-icon{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size);fill:currentcolor}.heading-container :is(.drawer-trigger,z-button.search-page-button){display:-ms-flexbox;display:flex;height:calc(var(--app-header-title-font-size) * var(--app-header-title-lineheight));-ms-flex-align:center;align-items:center}.heading-container z-button.search-page-button{margin-left:auto}.drawer-content{display:none}z-offcanvas[open] .drawer-content{display:-ms-flexbox;display:flex;width:100%;-ms-flex:1 auto;flex:1 auto;-ms-flex-direction:column;flex-direction:column;row-gap:calc(var(--space-unit) * 2.5)}z-offcanvas[open] .drawer-content ::slotted(z-menu){width:100%}.drawer-close{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size);padding:0;border:0;margin:var(--space-unit) 0 calc(var(--space-unit) * 2.5);-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border-radius:0;color:inherit;cursor:pointer;fill:currentcolor;font-size:inherit;outline:none}.drawer-close:focus-visible{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary)}.hero-container{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%}:host([overlay]) .heading-panel .drawer-trigger z-icon,:host([overlay]) .heading-panel .heading-container,:host([overlay]) .heading-panel .menu-container{color:var(--color-white);fill:var(--color-white)}:host([overlay]) .heading-panel .menu-container ::slotted(z-menu){--z-menu-label-color:var(--color-white)}:host([overlay]) .hero-container::after{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;background:var(--color-black);content:\"\";opacity:0.5}.hero-container img,.hero-container ::slotted(*){position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:top center;object-position:top center;-webkit-user-drag:none}@media (min-width: 768px){:host{--app-header-title-font-size:var(--app-header-typography-6-size);--app-header-title-lineheight:var(--app-header-typography-6-lineheight);--app-header-title-letter-spacing:var(--app-header-typography-6-tracking)}.heading-panel{-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center;padding-bottom:calc(var(--space-unit) * 2)}.heading-container{margin-right:auto}:host(:is([flow=\"offcanvas\"],[menu-length=\"0\"])) :is(.heading-container,.menu-container){width:auto}:host(:not([flow=\"offcanvas\"])) .heading-subtitle{padding-left:0}.menu-container{-ms-flex:initial;flex:initial;-ms-flex-align:center;align-items:center}:host([menu-length=\"0\"]) .menu-container:not(:empty){height:calc(var(--app-header-title-font-size) * var(--app-header-title-lineheight))}:host(:not([flow=\"offcanvas\"])) .menu-container{gap:var(--space-unit) calc(var(--space-unit) * 5)}:host(:not([flow=\"offcanvas\"])) .heading-container .drawer-trigger{display:none}}@media (min-width: 1152px){:host{--app-header-title-font-size:var(--app-header-typography-7-size);--app-header-title-lineheight:var(--app-header-typography-7-lineheight);--app-header-title-letter-spacing:var(--app-header-typography-7-tracking)}.heading-panel{-ms-flex-pack:start;justify-content:flex-start;padding-bottom:calc(var(--space-unit) * 3)}.heading-container,.menu-container{width:auto}:host([flow=\"stack\"]) .heading-panel{-ms-flex-flow:column;flex-flow:column;-ms-flex-align:start;align-items:flex-start}:host([flow=\"stack\"]) .menu-container{width:100%}:host(:not([flow=\"offcanvas\"],[menu-length=\"0\"])) .heading-panel{row-gap:calc(var(--space-unit) * 3)}z-searchbar{min-width:calc(var(--space-unit) * 45);-ms-flex:initial;flex:initial}}@media (min-width: 1366px){:host{--app-header-title-font-size:var(--app-header-typography-9-size);--app-header-title-lineheight:var(--app-header-typography-9-lineheight);--app-header-title-letter-spacing:var(--app-header-typography-9-tracking)}}@-webkit-keyframes slide-stuck-heading-in{0%{-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}100%{-webkit-transform:none;transform:none}}@keyframes slide-stuck-heading-in{0%{-webkit-transform:translate3d(0, -100%, 0);transform:translate3d(0, -100%, 0)}100%{-webkit-transform:none;transform:none}}";
const ZAppHeaderStyle0 = stylesCss;

const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";
const ZAppHeader$1 = /*@__PURE__*/ proxyCustomElement(class ZAppHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.sticking = createEvent(this, "sticking", 7);
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
    get hostElement() { return this; }
    static get watchers() { return {
        "_stuck": ["onStuck"],
        "drawerOpen": ["setMenuFloatingMode"],
        "stuck": ["onStuckMode"]
    }; }
    static get style() { return ZAppHeaderStyle0; }
}, [1, "z-app-header", {
        "stuck": [516],
        "hero": [1],
        "overlay": [516],
        "flow": [513],
        "drawerOpen": [516, "drawer-open"],
        "enableSearch": [516, "enable-search"],
        "searchPlaceholder": [1, "search-placeholder"],
        "searchString": [1025, "search-string"],
        "searchPageUrl": [1, "search-page-url"],
        "_stuck": [32],
        "currentViewport": [32],
        "menuLength": [32]
    }, [[9, "resize", "evaluateViewport"]], {
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