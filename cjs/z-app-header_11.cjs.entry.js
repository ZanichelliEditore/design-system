'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-b7c319f2.js');
const icons = require('./icons-a9849a41.js');
const utils = require('./utils-38f8555a.js');
require('./breakpoints-ebe1a437.js');

const stylesCss$a = ":host{--app-header-typography-1-size:24px;--app-header-typography-2-size:28px;--app-header-typography-3-size:32px;--app-header-typography-4-size:36px;--app-header-typography-5-size:42px;--app-header-typography-6-size:48px;--app-header-typography-7-size:54px;--app-header-typography-8-size:60px;--app-header-typography-9-size:68px;--app-header-typography-10-size:76px;--app-header-typography-11-size:84px;--app-header-typography-12-size:92px;--app-header-typography-1-lineheight:1.33;--app-header-typography-2-lineheight:1.29;--app-header-typography-3-lineheight:1.25;--app-header-typography-4-lineheight:1.24;--app-header-typography-5-lineheight:1.24;--app-header-typography-6-lineheight:1.25;--app-header-typography-7-lineheight:1.2;--app-header-typography-8-lineheight:1.26;--app-header-typography-9-lineheight:1.24;--app-header-typography-10-lineheight:1.26;--app-header-typography-11-lineheight:1.2;--app-header-typography-12-lineheight:1.2;--app-header-typography-1-tracking:calc(-0.2 / 1em);--app-header-typography-2-tracking:calc(-0.4 / 1em);--app-header-typography-3-tracking:calc(-0.6 / 1em);--app-header-typography-4-tracking:calc(-0.8 / 1em);--app-header-typography-5-tracking:calc(-1 / 1em);--app-header-typography-6-tracking:calc(-1.2 / 1em);--app-header-typography-7-tracking:calc(-1.4 / 1em);--app-header-typography-8-tracking:calc(-1.6 / 1em);--app-header-typography-9-tracking:calc(-1.8 / 1em);--app-header-typography-10-tracking:calc(-2 / 1em);--app-header-typography-11-tracking:calc(-2.2 / 1em);--app-header-typography-12-tracking:calc(-2.4 / 1em);--app-header-content-max-width:100%;--app-header-height:auto;--app-header-top-offset:48px;--app-header-drawer-trigger-size:calc(var(--space-unit) * 4);--app-header-bg:var(--color-surface01);--app-header-stucked-bg:var(--color-surface01);--app-header-text-color:var(--color-text01);--app-header-title-font-size:var(--app-header-typography-3-size);--app-header-title-lineheight:var(--app-header-typography-3-lineheight);--app-header-title-letter-spacing:var(--app-header-typography-3-tracking);--app-header-stucked-text-color:var(--color-text01);position:relative;display:block;height:var(--app-header-height);color:var(--app-header-text-color)}:host,*{box-sizing:border-box}.heading-panel{position:relative;display:flex;width:100%;max-width:var(--app-header-content-max-width);flex-direction:column;flex-grow:0;flex-shrink:0;align-items:baseline;padding:var(--grid-margin);margin:0 auto;background:var(--app-header-bg);gap:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5)}.hero-container+.heading-panel{background:transparent}:host(:empty) .heading-panel{padding:0}.heading-container{position:relative;z-index:1;display:flex;width:100%;max-width:100%;flex:1 auto;flex-direction:column;justify-content:flex-start}.heading-title{display:flex;max-width:100%;flex-direction:row;align-items:flex-start;column-gap:calc(var(--space-unit) * 2)}::slotted([slot=\"title\"]),.heading-stuck .heading-title>*,::slotted([slot=\"stucked-title\"]){margin:0;font-family:\"IBM Plex Serif\", serif;font-weight:var(--font-bd)}::slotted([slot=\"title\"]){font-size:var(--app-header-title-font-size);letter-spacing:var(--app-header-title-letter-spacing);line-height:var(--app-header-title-lineheight)}.heading-stuck .heading-title>*,::slotted([slot=\"stucked-title\"]){font-size:var(--app-header-typography-3-size);letter-spacing:var(--app-header-typography-3-tracking);line-height:var(--app-header-typography-3-lineheight)}:host(:not([menu-length=\"0\"])) .heading-subtitle{padding-left:calc(var(--app-header-drawer-trigger-size) + (var(--space-unit) * 2))}::slotted([slot=\"subtitle\"]){margin:0;font-family:var(--font-family-sans);font-size:20px;font-style:italic;font-weight:500;line-height:26px}.menu-container{display:flex;width:100%;flex:1 auto;flex-flow:row wrap}:host([menu-length=\"0\"]:not([enable-search])) .menu-container,.menu-container:empty{display:none}.menu-container ::slotted([open]){position:relative;z-index:3}z-searchbar{z-index:0;display:flex;width:auto;min-width:calc(var(--space-unit) * 32);flex:1 auto;align-items:center;margin-left:auto}.heading-stuck{position:fixed;z-index:20;top:var(--app-header-top-offset);left:0;width:100%;max-width:100%;animation:slide-stuck-heading-in 250ms ease-out;background:var(--app-header-stucked-bg);box-shadow:var(--shadow-2);color:var(--app-header-stucked-text-color)}.heading-stuck-content{display:flex;max-width:var(--app-header-content-max-width);align-items:center;padding:var(--space-unit) var(--grid-margin);margin:0 auto;column-gap:calc(var(--space-unit) * 2)}.heading-stuck .heading-title>*,.heading-stuck .heading-title ::slotted([slot=\"stucked-title\"]){display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.heading-stuck-content z-button{margin-left:auto}.drawer-trigger{padding:0;border:0;margin:0;appearance:none;background:none;border-radius:0;color:inherit;cursor:pointer}.drawer-trigger z-icon{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size);fill:currentcolor}.heading-container :is(.drawer-trigger,z-button.search-page-button){display:flex;height:calc(var(--app-header-title-font-size) * var(--app-header-title-lineheight));align-items:center}.heading-container z-button.search-page-button{margin-left:auto}.drawer-content{display:flex;width:100%;flex:1 auto;flex-direction:column;row-gap:calc(var(--space-unit) * 2.5)}.drawer-content ::slotted(z-menu){width:100%}.drawer-close{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size);padding:0;border:0;margin:var(--space-unit) 0 calc(var(--space-unit) * 2.5);appearance:none;background:transparent;border-radius:0;color:inherit;cursor:pointer;fill:currentcolor;font-size:inherit;outline:none}.drawer-close:focus-visible{box-shadow:var(--shadow-focus-primary)}.hero-container{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%}:host([overlay]) .heading-panel .drawer-trigger z-icon,:host([overlay]) .heading-panel .heading-container,:host([overlay]) .heading-panel .menu-container{color:var(--color-white);fill:var(--color-white)}:host([overlay]) .heading-panel .menu-container ::slotted(z-menu){--z-menu-label-color:var(--color-white)}:host([overlay]) .hero-container::after{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;background:var(--color-black);content:\"\";opacity:0.5}.hero-container img,.hero-container ::slotted(*){position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:top center;-webkit-user-drag:none}@media (min-width: 768px){:host{--app-header-title-font-size:var(--app-header-typography-6-size);--app-header-title-lineheight:var(--app-header-typography-6-lineheight);--app-header-title-letter-spacing:var(--app-header-typography-6-tracking)}.heading-panel{flex-flow:row wrap;align-items:center;padding-bottom:calc(var(--space-unit) * 2)}.heading-container{margin-right:auto}:host(:is([flow=\"offcanvas\"],[menu-length=\"0\"])) :is(.heading-container,.menu-container){width:auto}:host(:not([flow=\"offcanvas\"])) .heading-subtitle{padding-left:0}.menu-container{flex:initial;align-items:center}:host([menu-length=\"0\"]) .menu-container:not(:empty){height:calc(var(--app-header-title-font-size) * var(--app-header-title-lineheight))}:host(:not([flow=\"offcanvas\"])) .menu-container{gap:var(--space-unit) calc(var(--space-unit) * 5)}:host(:not([flow=\"offcanvas\"])) .heading-container .drawer-trigger{display:none}}@media (min-width: 1152px){:host{--app-header-title-font-size:var(--app-header-typography-7-size);--app-header-title-lineheight:var(--app-header-typography-7-lineheight);--app-header-title-letter-spacing:var(--app-header-typography-7-tracking)}.heading-panel{justify-content:flex-start;padding-bottom:calc(var(--space-unit) * 3)}.heading-container,.menu-container{width:auto}:host([flow=\"stack\"]) .heading-panel{flex-flow:column;align-items:flex-start}:host([flow=\"stack\"]) .menu-container{width:100%}:host(:not([flow=\"offcanvas\"],[menu-length=\"0\"])) .heading-panel{row-gap:calc(var(--space-unit) * 3)}z-searchbar{min-width:calc(var(--space-unit) * 45);flex:initial}}@media (min-width: 1366px){:host{--app-header-title-font-size:var(--app-header-typography-9-size);--app-header-title-lineheight:var(--app-header-typography-9-lineheight);--app-header-title-letter-spacing:var(--app-header-typography-9-tracking)}}@keyframes slide-stuck-heading-in{0%{transform:translate3d(0, -100%, 0)}100%{transform:none}}";

const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";
const ZAppHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.sticking = index.createEvent(this, "sticking", 7);
    /**
     * Stuck mode for the header.
     * You can programmatically set it using an IntersectionObserver.
     */
    this.stuck = false;
    /**
     * Should place an overlay over the hero image.
     * Useful for legibility purpose.
     */
    this.overlay = false;
    /**
     * Control menu bar position in the header.
     * - auto: the menu bar is positioned near the title
     * - stack: the menu bar is positioned below the title
     * - offcanvas: the menu bar is not displayed and a burger icon appears to open the offcanvas menu
     */
    this.flow = "auto";
    /**
     * The opening state of the drawer.
     */
    this.drawerOpen = false;
    /**
     * Enable the search bar.
     */
    this.enableSearch = false;
    /**
     * Placeholder text for the search bar.
     */
    this.searchPlaceholder = "Cerca";
    /**
     * The stuck state of the bar.
     */
    this._stuck = false;
    /**
     * Current viewport.
     * Used to change the aspect of the search button (icon only) on mobile and tablet.
     */
    this.currentViewport = "mobile";
    this.observer = SUPPORT_INTERSECTION_OBSERVER &&
      new IntersectionObserver(([entry]) => {
        this._stuck = !entry.isIntersecting;
      }, {
        threshold: 0.5,
      });
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
    return (index.h("z-button", { class: "search-page-button", variant: index$1.ButtonVariant.SECONDARY, href: this.searchPageUrl, icon: "search", size: index$1.ControlSize.X_SMALL }));
  }
  componentDidLoad() {
    this.collectMenuElements();
    this.onStuckMode();
    this.evaluateViewport();
  }
  render() {
    return (index.h(index.Host, { "menu-length": this.menuLength }, this.hasHero && (index.h("div", { class: "hero-container" }, index.h("slot", { name: "hero" }, this.hero && (index.h("img", { alt: "", src: this.hero }))))), index.h("div", { class: "heading-panel", ref: (el) => (this.container = el) }, index.h("div", { class: "heading-container" }, index.h("div", { class: "heading-title" }, this.menuLength > 0 && (index.h("button", { class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, index.h("z-icon", { name: "burger-menu" }))), index.h("slot", { name: "title" }), this.renderSearchLinkButton()), index.h("div", { class: "heading-subtitle" }, index.h("slot", { name: "subtitle" }))), (this.canShowMenu || this.canShowSearchbar) && (index.h("div", { class: "menu-container" }, this.canShowMenu && (index.h("slot", { name: "menu", onSlotchange: this.collectMenuElements })), this.canShowSearchbar && (index.h("z-searchbar", { placeholder: this.searchPlaceholder, showSearchButton: true, searchButtonIconOnly: this.currentViewport !== "desktop", size: index$1.ControlSize.X_SMALL, variant: index$1.ButtonVariant.SECONDARY, preventSubmit: true, onSearchTyping: (e) => {
        e.target.preventSubmit = !e.detail || e.detail.length < 3;
      } }))))), index.h("z-offcanvas", { variant: index$1.OffCanvasVariant.OVERLAY, transitiondirection: index$1.TransitionDirection.RIGHT, open: this.drawerOpen, onCanvasOpenStatusChanged: (ev) => (this.drawerOpen = ev.detail) }, index.h("button", { class: "drawer-close", "aria-label": "Chiudi menu", onClick: this.closeDrawer, slot: "canvasContent" }, index.h("z-icon", { name: "close" })), this.drawerOpen && (index.h("div", { class: "drawer-content", slot: "canvasContent" }, index.h("slot", { name: "menu", onSlotchange: this.collectMenuElements })))), this._stuck && (index.h("div", { class: "heading-stuck" }, index.h("div", { class: "heading-stuck-content" }, this.menuLength > 0 && (index.h("button", { class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, index.h("z-icon", { name: "burger-menu" }))), index.h("div", { class: "heading-title" }, index.h("slot", { name: "stucked-title" }, this.title)), this.renderSearchLinkButton(), this.canShowSearchbar && this.currentViewport === "desktop" && (index.h("z-searchbar", { placeholder: this.searchPlaceholder, showSearchButton: true, searchButtonIconOnly: false, size: index$1.ControlSize.X_SMALL, variant: index$1.ButtonVariant.SECONDARY, preventSubmit: true, onSearchTyping: (e) => {
        var _a;
        e.target.preventSubmit = ((_a = e.detail) === null || _a === void 0 ? void 0 : _a.length) < 3;
      } })))))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "_stuck": ["onStuck"],
    "drawerOpen": ["setMenuFloatingMode"],
    "stuck": ["onStuckMode"]
  }; }
};
ZAppHeader.style = stylesCss$a;

const stylesCss$9 = ".sc-z-button-h{display:inline-block;--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:0}[disabled].sc-z-button-h:not([disabled=\"false\"]){pointer-events:none}.sc-z-button-h .z-button--container.sc-z-button{display:inline-flex;width:100%;box-sizing:border-box;align-items:center;justify-content:center;padding:0;border-width:var(--border-size-medium);border-style:solid;border-radius:var(--border-radius);cursor:pointer;fill:currentcolor;font-family:var(--font-family-sans);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.3px;line-height:1;outline:none;text-decoration:none;text-transform:uppercase;white-space:nowrap}.sc-z-button-h .z-button--container.sc-z-button:focus:focus-visible{box-shadow:var(--shadow-focus-primary)}.sc-z-button-h .z-button--container.z-button--has-text.sc-z-button{min-width:calc(var(--space-unit) * 8);padding:0 calc(var(--space-unit) * 2)}.sc-z-button-h .z-button--container.z-button--has-text.sc-z-button z-icon.sc-z-button{--z-icon-right-margin:var(--space-unit)}[size=\"big\"].sc-z-button-h .z-button--container.sc-z-button{min-width:44px;height:44px}[size=\"small\"].sc-z-button-h .z-button--container.sc-z-button{min-width:36px;height:36px}[size=\"x-small\"].sc-z-button-h .z-button--container.sc-z-button{min-width:32px;height:32px}[variant=\"primary\"].sc-z-button-h .z-button--container.sc-z-button{border-color:var(--color-primary01);background-color:var(--color-primary01);color:var(--color-text-inverse)}@media (hover: hover){[variant=\"primary\"].sc-z-button-h .z-button--container.sc-z-button:hover{border-color:var(--color-hover-primary);background-color:var(--color-hover-primary);color:var(--color-text-inverse)}}[variant=\"primary\"].sc-z-button-h .z-button--container.sc-z-button:active{border-color:var(--color-pressed-primary);background-color:var(--color-pressed-primary);box-shadow:var(--shadow-2);color:var(--color-text-inverse)}[variant=\"primary\"][disabled].sc-z-button-h:not([disabled=\"false\"]) .z-button--container.sc-z-button{border-color:var(--color-disabled01);background-color:var(--color-disabled01);color:var(--color-disabled02)}[variant=\"secondary\"].sc-z-button-h .z-button--container.sc-z-button{border-color:var(--color-primary01);background-color:var(--color-surface01);color:var(--color-primary01)}@media (hover: hover){[variant=\"secondary\"].sc-z-button-h .z-button--container.sc-z-button:hover{border-color:var(--color-hover-primary);background-color:var(--color-surface01);color:var(--color-hover-primary)}}[variant=\"secondary\"].sc-z-button-h .z-button--container.sc-z-button:active{border-color:var(--color-pressed-primary);background-color:var(--color-surface01);box-shadow:var(--shadow-2);color:var(--color-pressed-primary)}[variant=\"secondary\"][disabled].sc-z-button-h:not([disabled=\"false\"]) .z-button--container.sc-z-button{border-color:var(--color-disabled01);background-color:var(--color-surface01);color:var(--color-disabled02)}[variant=\"tertiary\"].sc-z-button-h .z-button--container.sc-z-button{border-color:transparent;background-color:transparent;color:var(--color-primary01)}@media (hover: hover){[variant=\"tertiary\"].sc-z-button-h .z-button--container.sc-z-button:hover{border-color:var(--color-primary03);background-color:var(--color-primary03);color:var(--color-hover-primary)}}[variant=\"tertiary\"].sc-z-button-h .z-button--container.sc-z-button:focus:focus-visible{border-color:var(--color-surface01);background-color:var(--color-surface01);color:var(--color-primary01)}[variant=\"tertiary\"].sc-z-button-h .z-button--container.sc-z-button:active{border-color:var(--color-surface01);background-color:var(--color-surface01);box-shadow:var(--shadow-2);color:var(--color-primary01)}[variant=\"tertiary\"][disabled].sc-z-button-h:not([disabled=\"false\"]) .z-button--container.sc-z-button{border-color:transparent;background-color:transparent;color:var(--color-disabled02)}";

const ZButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** defines a string value that labels an interactive element, used for accessibility. */
    this.ariaLabel = "";
    /** HTML button disabled attribute. */
    this.disabled = false;
    /** HTML button type attribute. */
    this.type = index$1.ButtonType.BUTTON;
    /** Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. */
    this.variant = index$1.ButtonVariant.PRIMARY;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = index$1.ControlSize.BIG;
  }
  getAttributes() {
    return {
      id: this.htmlid,
      class: {
        "z-button--container": true,
        "z-button--has-text": !!this.hostElement.textContent.trim(),
      },
    };
  }
  render() {
    if (this.href) {
      return (index.h("a", Object.assign({}, this.getAttributes(), { "aria-label": this.ariaLabel, href: this.href, target: this.target }), this.icon && (index.h("z-icon", { name: this.icon, width: 16, height: 16 })), index.h("slot", null)));
    }
    return (index.h("button", Object.assign({}, this.getAttributes(), { "aria-label": this.ariaLabel, name: this.name, type: this.type, disabled: this.disabled }), this.icon && (index.h("z-icon", { name: this.icon, width: 16, height: 16 })), index.h("slot", null)));
  }
  get hostElement() { return index.getElement(this); }
};
ZButton.style = stylesCss$9;

const stylesCss$8 = ".sc-z-divider-h{display:block;padding:0;margin:0}.divider-horizontal.sc-z-divider-h{width:100%}.divider-vertical.sc-z-divider-h{height:100%}.divider-small.divider-horizontal.sc-z-divider-h{height:var(--border-size-small)}.divider-medium.divider-horizontal.sc-z-divider-h{height:var(--border-size-medium)}.divider-large.divider-horizontal.sc-z-divider-h{height:var(--border-size-large)}.divider-small.divider-vertical.sc-z-divider-h{width:var(--border-size-small)}.divider-medium.divider-vertical.sc-z-divider-h{width:var(--border-size-medium)}.divider-large.divider-vertical.sc-z-divider-h{width:var(--border-size-large)}";

const ZDivider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** [optional] Divider size */
    this.size = index$1.DividerSize.SMALL;
    /** [optional] Divider color */
    this.color = "gray200";
    /** [optional] Divider orintation */
    this.orientation = index$1.DividerOrientation.HORIZONTAL;
  }
  render() {
    return (index.h(index.Host, { class: `divider-${this.size} divider-${this.orientation}`, style: { backgroundColor: `var(--${this.color})` } }));
  }
};
ZDivider.style = stylesCss$8;

const stylesCss$7 = ":host{margin-right:var(--z-icon-right-margin, 0);margin-left:var(--z-icon-left-margin, 0);line-height:0;vertical-align:middle}:host svg:not([width]){width:var(--z-icon-width, 18px)}:host svg:not([height]){height:var(--z-icon-height, 18px)}";

const ZIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  selectPathOrPolygon(iconValue) {
    if (iconValue === null || iconValue === void 0 ? void 0 : iconValue.startsWith("M")) {
      return index.h("path", { d: icons.ICONS[this.name] });
    }
    return index.h("polygon", { points: icons.ICONS[this.name] });
  }
  render() {
    return (index.h(index.Host, { "aria-hidden": "true" }, index.h("svg", { viewBox: "0 0 1000 1000", width: this.width, height: this.height, id: this.iconid, fill: this.fill ? `var(--${this.fill})` : "" }, this.selectPathOrPolygon(icons.ICONS[this.name]))));
  }
};
ZIcon.style = stylesCss$7;

const stylesCss$6 = ".sc-z-input-h{display:inline-block;width:inherit}input.sc-z-input::-ms-clear,input.sc-z-input::-ms-reveal{display:none}.sc-z-input-h input.sc-z-input::-ms-clear,.sc-z-input-h input.sc-z-input::-ms-reveal{display:none}input.sc-z-input,textarea.sc-z-input,.textarea-wrapper.sc-z-input{box-sizing:border-box;border:var(--border-size-small) solid var(--color-surface04);background:var(--color-input-field01);border-radius:var(--border-radius-small);color:var(--color-text01);fill:var(--color-icon02);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg);outline:none}[size=\"small\"].sc-z-input-h input.sc-z-input,[size=\"small\"].sc-z-input-h textarea.sc-z-input,[size=\"small\"].sc-z-input-h .textarea-wrapper.sc-z-input,[size=\"x-small\"].sc-z-input-h input.sc-z-input,[size=\"x-small\"].sc-z-input-h textarea.sc-z-input,[size=\"x-small\"].sc-z-input-h .textarea-wrapper.sc-z-input{font-size:var(--font-size-2)}.cursor-select.sc-z-input-h input.sc-z-input{cursor:pointer}.sc-z-input-h:not(.active-select) input.sc-z-input:focus:focus-visible,.textarea-wrapper.sc-z-input:focus-within{box-shadow:var(--shadow-focus-primary)}input.sc-z-input:focus:focus-visible,textarea.sc-z-input:focus:focus-visible{color:var(--color-primary02)}.active-select.sc-z-input-h input.sc-z-input{border:var(--border-size-small) solid var(--blue500)}.cursor-select.sc-z-input-h input.sc-z-input:focus:focus-visible{box-shadow:var(--shadow-focus-primary)}.sc-z-input-h input[readonly].sc-z-input:focus:focus-visible{box-shadow:none}.filled.sc-z-input{border-color:var(--color-surface05)}.input-success.sc-z-input{border-color:var(--color-success01);background:var(--color-success-inverse);fill:var(--color-success01)}.input-error.sc-z-input{border-color:var(--color-error01);background:var(--color-error-inverse);fill:var(--color-error01)}.input-warning.sc-z-input{border-color:var(--color-warning01);background:var(--color-warning-inverse);fill:var(--color-warning01)}input.sc-z-input:hover,.textarea-wrapper.sc-z-input:hover{outline:var(--border-size-medium) solid var(--color-surface04);outline-offset:-2px}.sc-z-input-h:not(.active-select) input[readonly].sc-z-input,.readonly.sc-z-input{border-color:var(--color-disabled01);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) .textarea-wrapper.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) z-icon.sc-z-input{border-color:var(--color-disabled01);box-shadow:none;color:var(--color-disabled02);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input:hover{border-width:var(--border-size-small)}input.sc-z-input::placeholder,textarea.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input::-webkit-textarea-placeholder{color:var(--color-text05)}.sc-z-input:-ms-textarea-placeholder{color:var(--color-text05)}.sc-z-input::placeholder{color:var(--color-text05)}label.input-label.sc-z-input{display:block;padding-bottom:var(--space-unit);color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);text-align:left;text-transform:uppercase}[disabled].sc-z-input-h:not([disabled=\"false\"]) label.input-label.sc-z-input{color:var(--color-disabled02)}.text-wrapper.sc-z-input>div.sc-z-input{position:relative;z-index:1;fill:var(--color-icon02)}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{width:100%;height:calc(var(--space-unit) * 5.5);box-sizing:border-box;padding:0 calc(var(--space-unit) * 1.5);margin:0}[size=\"small\"].sc-z-input-h .text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{height:calc(var(--space-unit) * 4.5)}[size=\"x-small\"].sc-z-input-h .text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{height:calc(var(--space-unit) * 4)}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.sc-z-input,.text-wrapper.sc-z-input>div.sc-z-input>input.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 5.25)}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 8)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input{position:absolute;z-index:2;top:50%;right:calc(var(--space-unit) * 1.5);display:flex;pointer-events:none;transform:translateY(-50%)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input{padding:0;border:0;background:none;color:inherit;font:inherit;pointer-events:initial}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input+button.icon-button.sc-z-input{margin-left:calc(var(--space-unit) * 0.5)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.hidden.sc-z-input{display:none}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.reset-icon.sc-z-input,.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.toggle-password-icon.sc-z-input{cursor:pointer}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.sc-z-input{--z-icon-width:18px;--z-icon-height:18px;display:block}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.small.sc-z-input,.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.x-small.sc-z-input{--z-icon-width:16px;--z-icon-height:16px}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:hover,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:focus,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:active{background:var(--color-white) !important;background-clip:text !important;-webkit-transition-delay:99999s !important}.textarea-wrapper.sc-z-input{padding:calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}textarea.sc-z-input::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-track{background-color:transparent}textarea.sc-z-input::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}textarea.sc-z-input{width:100%;min-height:132px;padding:0;border:none;margin:0;resize:none}.radio-wrapper.sc-z-input,.checkbox-wrapper.sc-z-input{position:relative;display:inline-flex;flex-direction:row;align-items:center;color:var(--color-text01);fill:var(--color-primary01);font-family:var(--font-family-sans)}.radio-wrapper.sc-z-input:hover,.checkbox-wrapper.sc-z-input:hover{color:var(--color-hover-primary);fill:currentcolor}.radio-wrapper.sc-z-input>input.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input{position:absolute;z-index:-1;opacity:0;pointer-events:none}.radio-wrapper.sc-z-input .radio-label.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{display:inline-flex;align-items:center;margin:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1;text-transform:inherit}.radio-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.checkbox-label.sc-z-input{cursor:pointer}.radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{cursor:pointer;fill:inherit}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{--z-icon-width:16px;--z-icon-height:16px}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{font-size:var(--font-size-2)}[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{--z-icon-width:14px;--z-icon-height:14px}[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{font-size:var(--font-size-1)}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input{flex-direction:row}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input{flex-direction:row-reverse}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input{margin-left:var(--space-unit)}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input{margin-right:var(--space-unit)}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input{margin-left:calc(var(--space-unit) * 0.5)}[size=\"small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,[size=\"small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,[size=\"x-small\"].sc-z-input-h .checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input{margin-right:calc(var(--space-unit) * 0.5)}.radio-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.checkbox-label.sc-z-input>z-icon.sc-z-input{border-radius:var(--border-radius-small);box-shadow:var(--shadow-focus-primary)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input{color:var(--color-disabled02)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input>z-icon.sc-z-input{cursor:default;fill:var(--color-disabled01)}";

const ZInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inputChange = index.createEvent(this, "inputChange", 7);
    this.startTyping = index.createEvent(this, "startTyping", 7);
    this.stopTyping = index.createEvent(this, "stopTyping", 7);
    this.inputCheck = index.createEvent(this, "inputCheck", 7);
    /** the id of the input element */
    this.htmlid = `id-${utils.randomId()}`;
    /** the input aria-label */
    this.ariaLabel = "";
    /** the input is disabled */
    this.disabled = false;
    /** the input is readonly */
    this.readonly = false;
    /** the input is required (optional): available for text, password, number, email, textarea, checkbox */
    this.required = false;
    /** checked: available for checkbox, radio */
    this.checked = false;
    /** input helper message (optional): available for text, password, number, email, textarea - if set to `false` message won't be displayed */
    this.message = true;
    /** the input label position: available for checkbox, radio */
    this.labelPosition = index$1.LabelPosition.RIGHT;
    /** render clear icon when typing (optional): available for text */
    this.hasclearicon = true;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = index$1.ControlSize.BIG;
    this.isTyping = false;
    this.passwordHidden = true;
    this.typingtimeout = 300;
  }
  inputCheckListener(e) {
    const data = e.detail;
    switch (this.type) {
      case index$1.InputType.RADIO:
        if (data.type === index$1.InputType.RADIO && data.name === this.name && data.id !== this.htmlid) {
          this.checked = false;
        }
        break;
    }
  }
  /** get checked status */
  async isChecked() {
    switch (this.type) {
      case index$1.InputType.CHECKBOX:
      case index$1.InputType.RADIO:
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
    if (this.type === index$1.InputType.TEXTAREA) {
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
      class: {
        [`input-${this.status}`]: !!this.status,
        filled: !!this.value,
      },
      autocomplete: this.autocomplete,
      onInput: (e) => this.emitInputChange(e.target.value),
    };
  }
  getNumberAttributes(type) {
    if (type != index$1.InputType.NUMBER) {
      return;
    }
    return {
      min: this.min,
      max: this.max,
      step: this.step,
    };
  }
  getPatternAttribute(type) {
    if (type != index$1.InputType.PASSWORD &&
      type != index$1.InputType.TEXT &&
      type != index$1.InputType.TEL &&
      type != index$1.InputType.SEARCH &&
      type != index$1.InputType.URL &&
      type != index$1.InputType.EMAIL) {
      return;
    }
    return {
      pattern: this.pattern,
    };
  }
  renderInputText(type = index$1.InputType.TEXT) {
    const ariaLabel = this.ariaLabel ? { "aria-label": this.ariaLabel } : {};
    const attr = Object.assign(Object.assign(Object.assign(Object.assign({}, this.getTextAttributes()), this.getNumberAttributes(type)), this.getPatternAttribute(type)), ariaLabel);
    if (this.icon || type === index$1.InputType.PASSWORD) {
      Object.assign(attr.class, { "has-icon": true });
    }
    if (this.hasclearicon && type != index$1.InputType.NUMBER) {
      Object.assign(attr.class, { "has-clear-icon": true });
    }
    return (index.h("div", { class: "text-wrapper" }, this.renderLabel(), index.h("div", null, index.h("input", Object.assign({ type: type === index$1.InputType.PASSWORD && !this.passwordHidden ? index$1.InputType.TEXT : type }, attr)), this.renderIcons()), this.renderMessage()));
  }
  renderLabel() {
    if (!this.label) {
      return;
    }
    return (index.h("label", { class: "input-label body-5-sb", id: `${this.htmlid}_label`, htmlFor: this.htmlid }, this.label));
  }
  renderIcons() {
    return (index.h("span", { class: "icons-wrapper" }, this.renderResetIcon(), this.renderIcon()));
  }
  renderIcon() {
    if (this.type === index$1.InputType.PASSWORD) {
      return this.renderShowHidePassword();
    }
    if (!this.icon) {
      return;
    }
    return (index.h("button", { type: "button", class: "icon-button input-icon", tabIndex: -1 }, index.h("z-icon", { name: this.icon, class: this.size })));
  }
  renderResetIcon() {
    let hidden = false;
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly || this.type == index$1.InputType.NUMBER) {
      hidden = true;
    }
    return (index.h("button", { type: "button", class: `icon-button reset-icon ${hidden ? "hidden" : ""}`, "aria-label": "cancella il contenuto dell'input", onClick: () => this.emitInputChange("") }, index.h("z-icon", { name: "multiply", class: this.size })));
  }
  renderShowHidePassword() {
    return (index.h("button", { type: "button", class: "icon-button toggle-password-icon", disabled: this.disabled, "aria-label": this.passwordHidden ? "mostra password" : "nascondi password", onClick: () => (this.passwordHidden = !this.passwordHidden) }, index.h("z-icon", { name: this.passwordHidden ? "view-filled" : "view-off-filled", class: this.size })));
  }
  renderMessage() {
    if (utils.boolean(this.message) === false) {
      return;
    }
    return (index.h("z-input-message", { message: utils.boolean(this.message) === true ? undefined : this.message, status: this.status, class: this.size }));
  }
  /* END text/password/email/number */
  /* START textarea */
  renderTextarea() {
    const attributes = this.getTextAttributes();
    const ariaLabel = this.ariaLabel ? { "aria-label": this.ariaLabel } : {};
    return (index.h("div", { class: "text-wrapper" }, this.renderLabel(), index.h("div", { class: Object.assign(Object.assign({}, attributes.class), { "textarea-wrapper": true, "readonly": attributes.readonly }) }, index.h("textarea", Object.assign({}, attributes, ariaLabel))), this.renderMessage()));
  }
  /* END textarea */
  handleCheck(ev) {
    this.checked = ev.target.checked;
    this.emitInputCheck(this.checked);
  }
  /* START checkbox */
  renderCheckbox() {
    return (index.h("div", { class: "checkbox-wrapper" }, index.h("input", { id: this.htmlid, type: "checkbox", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, required: this.required, onChange: this.handleCheck.bind(this), value: this.value }), index.h("label", { htmlFor: this.htmlid, class: {
        "checkbox-label": true,
        "after": this.labelPosition === index$1.LabelPosition.RIGHT,
        "before": this.labelPosition === index$1.LabelPosition.LEFT,
      } }, index.h("z-icon", { name: this.checked ? "checkbox-checked" : "checkbox", "aria-hidden": "true", class: this.size }), this.label && index.h("span", { innerHTML: this.label }))));
  }
  /* END checkbox */
  /* START radio */
  renderRadio() {
    return (index.h("div", { class: "radio-wrapper" }, index.h("input", { id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, onChange: this.handleCheck.bind(this), value: this.value }), index.h("label", { htmlFor: this.htmlid, class: {
        "radio-label": true,
        "after": this.labelPosition === index$1.LabelPosition.RIGHT,
        "before": this.labelPosition === index$1.LabelPosition.LEFT,
      } }, index.h("z-icon", { name: this.checked ? "radio-button-checked" : "radio-button", "aria-hidden": "true", class: this.size }), this.label && index.h("span", { innerHTML: this.label }))));
  }
  /* END radio */
  render() {
    let input;
    switch (this.type) {
      case index$1.InputType.TEXTAREA:
        input = this.renderTextarea();
        break;
      case index$1.InputType.CHECKBOX:
        input = this.renderCheckbox();
        break;
      case index$1.InputType.RADIO:
        input = this.renderRadio();
        break;
      default:
        input = this.renderInputText(this.type);
    }
    return index.h(index.Host, null, input);
  }
  get hostElement() { return index.getElement(this); }
};
ZInput.style = stylesCss$6;

const stylesCss$5 = ":host{display:flex;min-height:calc(var(--space-unit) * 2.5);align-items:start;margin-top:var(--space-unit);color:var(--color-text05);fill:currentcolor;font-family:var(--font-family-sans);font-size:var(--font-size-2);letter-spacing:0.16px}:host(.small),:host(.x-small){margin-top:calc(var(--space-unit) * 0.5);font-size:var(--font-size-1)}:host([status=\"success\"]){color:var(--color-text-success)}:host([status=\"error\"]){color:var(--color-text-error)}:host([status=\"warning\"]){color:var(--color-warning02)}:host(:focus){outline:none}:host>z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);--z-icon-right-margin:var(--space-unit);margin-top:calc(var(--space-unit) * 0.25)}:host(.small)>z-icon,:host(.x-small)>z-icon{--z-icon-width:14px;--z-icon-height:14px;--z-icon-right-margin:calc(var(--space-unit) * 0.5)}";

const ZInputMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.statusIcons = {
      success: "checkmark-circle",
      error: "multiply-circled",
      warning: "exclamation-circle",
    };
    this.statusRole = {};
  }
  onMessageChange() {
    this.statusRole = this.message && this.status ? { role: "alert" } : {};
  }
  componentWillLoad() {
    this.onMessageChange();
  }
  render() {
    return (index.h(index.Host, Object.assign({}, this.statusRole, { "aria-label": this.message }), this.statusIcons[this.status] && this.message && index.h("z-icon", { name: this.statusIcons[this.status] }), index.h("span", { innerHTML: this.message })));
  }
  static get watchers() { return {
    "message": ["onMessageChange"],
    "status": ["onMessageChange"]
  }; }
};
ZInputMessage.style = stylesCss$5;

const stylesCss$4 = ":host{display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}";

const ZList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = index$1.ListSize.MEDIUM;
    /**
     * [optional] type of the list marker for each element
     */
    this.listType = index$1.ListType.NONE;
  }
  setChildrenSizeType() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      children[i].setAttribute("size", this.size);
      children[i].setAttribute("list-type", this.listType);
      children[i].setAttribute("list-element-position", (i + 1).toString());
    }
  }
  componentDidLoad() {
    this.setChildrenSizeType();
  }
  render() {
    return (index.h(index.Host, { role: "list" }, index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
ZList.style = stylesCss$4;

const stylesCss$3 = ":host{outline:none}:host>.container,:host>.container-contextual-menu{--background-color-list-element:var(--bg-white);--background-hover-color-list-element:var(--color-surface02);--background-active-color-list-element:var(--color-surface02);display:flex;box-sizing:border-box;flex-direction:column;justify-content:center;font-family:var(--font-family-sans);font-weight:var(--font-rg);outline:none}:host([size=\"small\"])>.container{min-height:calc(var(--space-unit) * 4);padding:calc(var(--space-unit) / 2) 0}:host([size=\"medium\"])>.container{min-height:calc(var(--space-unit) * 5);padding:var(--space-unit) 0}:host([size=\"large\"])>.container{min-height:calc(var(--space-unit) * 7);padding:calc(var(--space-unit) * 2) 0}:host([size=\"x-large\"])>.container{min-height:calc(var(--space-unit) * 9);padding:calc(var(--space-unit) * 3) 0}:host([expandable])>.container,:host([expandable])>.container-contextual-menu,:host([clickable])>.container,:host([clickable])>.container-contextual-menu{cursor:pointer}:host([expandable]:hover)>.container,:host([expandable]:hover)>.container-contextual-menu,:host([clickable]:hover)>.container,:host([clickable]:hover)>.container-contextual-menu{background-color:var(--background-hover-color-list-element)}:host([expandable]:focus:focus-visible)>.container,:host([expandable]:focus:focus-visible)>.container-contextual-menu,:host([clickable]:focus:focus-visible)>.container,:host([clickable]:focus:focus-visible)>.container-contextual-menu{box-shadow:var(--shadow-focus-primary)}:host([clickable]:not([expandable]))>.container.clicked,:host([clickable]:not([expandable]))>.container-contextual-menu.clicked{box-shadow:var(--shadow-focus-primary)}:host([expandable]:active)>.container,:host([expandable]:active)>.container-contextual-menu,:host([clickable]:active)>.container,:host([clickable]:active)>.container-contextual-menu{background-color:var(--background-active-color-list-element)}:host([align-button=\"left\"][expandable])>.container>.z-list-element-container,:host([align-button=\"left\"][expandable])>.container-contextual-menu>.z-list-element-container{display:flex}:host([align-button=\"right\"][expandable])>.container>.z-list-element-container,:host([align-button=\"right\"][expandable])>.container-contextual-menu>.z-list-element-container{display:flex;flex-direction:row-reverse;justify-content:space-between}:host([align-button=\"left\"][expandable])>.container>.z-list-element-container>z-icon,:host([align-button=\"left\"][expandable])>.container-contextual-menu>.z-list-element-container>z-icon{margin-right:var(--space-unit)}:host([align-button=\"right\"][expandable])>.container>.z-list-element-container>z-icon,:host([align-button=\"right\"][expandable])>.container-contextual-menu>.z-list-element-container>z-icon{margin-left:var(--space-unit)}:host>.container>.z-list-element-inner-container,:host>.container-contextual-menu>.z-list-element-inner-container{display:none}:host>.container>.z-list-element-inner-container.expanded,:host>.container-contextual-menu>.z-list-element-inner-container.expanded{display:block}:host([clickable]:hover)>.container-contextual-menu{background-color:var(--color-surface03)}.container-contextual-menu:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}.z-list-content-container{display:flex;align-items:center}";

const ZListElement = class {
  /**
   * Constructor.
   */
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.accessibleFocus = index.createEvent(this, "accessibleFocus", 7);
    this.clickItem = index.createEvent(this, "clickItem", 7);
    /**
     * [optional] Align expandable button left or right.
     */
    this.alignButton = index$1.ExpandableListButtonAlign.LEFT;
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
    this.dividerType = index$1.ListDividerType.NONE;
    /**
     * [optional] Sets the divider size.
     */
    this.dividerSize = index$1.DividerSize.SMALL;
    /**
     * [optional] Sets element as expandable.
     */
    this.expandable = false;
    /**
     * [optional] Sets expandable style to element.
     */
    this.expandableStyle = index$1.ExpandableListStyle.ACCORDION;
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = index$1.ListSize.MEDIUM;
    /**
     * [optional] Sets text color of the element.
     */
    this.color = "none";
    /**
     * [optional] Sets disabled style of the element.
     */
    this.disabled = false;
    /**
     * [optional] If is used in ZContextualMenu component
     */
    this.isContextualMenu = false;
    /**
     * [optional] position of the list element inside the list or the group
     */
    this.listElementPosition = "0";
    /**
     * [optional] type of the list marker for each element
     */
    this.listType = index$1.ListType.NONE;
    this.showInnerContent = false;
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
  accessibleFocusHandler(e) {
    if (this.listElementId === e.detail) {
      const toFocus = this.host.shadowRoot.getElementById(`z-list-element-id-${e.detail}`);
      toFocus.focus();
    }
  }
  /**
   * Handler for click on element. If element is expandable, change state.
   * @returns void
   */
  handleClick() {
    this.clickItem.emit(this.listElementId);
    if (!this.expandable) {
      return;
    }
    this.showInnerContent = !this.showInnerContent;
  }
  calculateClass() {
    if (this.isContextualMenu) {
      return "container-contextual-menu";
    }
    return "container";
  }
  handleKeyDown(event) {
    const expandByKey = event.code === index$1.KeyboardCode.ENTER;
    switch (event.code) {
      case index$1.KeyboardCode.ARROW_DOWN:
        event.preventDefault();
        this.accessibleFocus.emit(this.listElementId + 1);
        break;
      case index$1.KeyboardCode.ARROW_UP:
        event.preventDefault();
        this.accessibleFocus.emit(this.listElementId - 1);
        break;
      case index$1.KeyboardCode.ENTER:
        event.preventDefault();
        this.clickItem.emit(this.listElementId);
        break;
    }
    if (!this.expandable || !expandByKey) {
      return;
    }
    this.showInnerContent = !this.showInnerContent;
  }
  /**
   * Renders button to expand element.
   * @returns expadable button
   */
  renderExpandableButton() {
    if (!this.expandable) {
      return null;
    }
    return (index.h("z-icon", { name: this.showInnerContent
        ? this.openElementConfig[this.expandableStyle].open
        : this.openElementConfig[this.expandableStyle].close }));
  }
  /**
   * Renders expanded content if element is expandable.
   * @returns expanded content
   */
  renderExpandedContent() {
    if (!this.expandable) {
      return null;
    }
    return (index.h("div", { class: {
        "z-list-element-inner-container": true,
        "expanded": this.showInnerContent,
      } }, index.h("slot", { name: "inner-content" })));
  }
  /**
   * Renders content of the z-list-element
   * @returns list content
   */
  renderContent() {
    if (this.listType === index$1.ListType.NONE) {
      return index.h("slot", null);
    }
    if (this.listType === index$1.ListType.ORDERED) {
      return (index.h("div", { class: "z-list-content-container" }, index.h("div", null, this.listElementPosition, ".\u2003"), index.h("slot", null)));
    }
    if (this.listType === index$1.ListType.UNORDERED) {
      return (index.h("div", { class: "z-list-content-container" }, index.h("span", null, "\u2022\u2003"), index.h("slot", null)));
    }
  }
  render() {
    return (index.h(index.Host, { role: "listitem", "aria-expanded": this.expandable ? this.showInnerContent : null, onClick: this.handleClick, onKeyDown: this.handleKeyDown, clickable: this.clickable && !this.disabled, tabIndex: !this.isContextualMenu ? "0" : null }, index.h("div", { class: `${this.calculateClass()}`, style: { color: `var(--${this.color})` }, tabindex: this.isContextualMenu ? "0" : "-1", id: `z-list-element-id-${this.listElementId}`, part: "list-item-container" }, index.h("div", { class: "z-list-element-container" }, this.renderExpandableButton(), this.renderContent()), this.renderExpandedContent()), this.dividerType === index$1.ListDividerType.ELEMENT && (index.h("z-divider", { color: this.dividerColor, size: this.dividerSize }))));
  }
  get host() { return index.getElement(this); }
};
ZListElement.style = stylesCss$3;

const stylesCss$2 = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.z-list-group-header-container{color:var(--gray700);font-size:var(--font-size-2);font-weight:var(--font-sb) !important;letter-spacing:0.16px;line-height:1.4}:host>.z-list-group-header-container.has-header{padding-top:var(--space-unit);padding-bottom:var(--space-unit)}:host>.z-list-group-header-container.has-header>z-divider{margin-top:var(--space-unit)}";

const ZListGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = index$1.ListSize.MEDIUM;
    /**
     * [optional] Sets the position where to insert the divider.
     */
    this.dividerType = index$1.ListDividerType.NONE;
    /**
     * [optional] Sets the divider size.
     */
    this.dividerSize = index$1.DividerSize.SMALL;
    /**
     * [optional] Sets the divider color.
     */
    this.dividerColor = "gray200";
    /**
     * [optional] type of the list marker for each element
     */
    this.listType = index$1.ListType.NONE;
  }
  componentDidLoad() {
    const children = this.host.children;
    for (let i = 0; i < children.length; i++) {
      if (children.length - 1 > i) {
        children[i].setAttribute("divider-type", this.dividerType);
        children[i].setAttribute("divider-size", this.dividerSize);
        children[i].setAttribute("divider-color", this.dividerColor);
      }
      children[i].setAttribute("size", this.size);
      children[i].setAttribute("list-type", this.listType);
      children[i].setAttribute("list-element-position", i.toString());
    }
  }
  componentWillLoad() {
    this.hasHeader = !!this.host.querySelector('[slot="header-title"]');
  }
  render() {
    return (index.h(index.Host, { role: "group" }, index.h("div", { class: {
        "z-list-group-header-container": true,
        "has-header": this.hasHeader,
      } }, index.h("slot", { name: "header-title" }), this.dividerType === index$1.ListDividerType.HEADER && (index.h("z-divider", { color: this.dividerColor, size: this.dividerSize }))), index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
ZListGroup.style = stylesCss$2;

const stylesCss$1 = ".sc-z-offcanvas-h{--z-offcanvas--container-width:375px;--z-offcanvas--top-space:0;min-width:100%;height:100%;font-family:var(--font-family-sans);font-weight:var(--font-rg);visibility:hidden}.canvas-container.sc-z-offcanvas{display:flex;overflow:-moz-scrollbars-none;overflow:hidden;min-width:100%;height:100%;flex-direction:column;background:var(--color-surface01)}[variant=\"pushcontent\"].sc-z-offcanvas-h{display:none}[open].sc-z-offcanvas-h{display:flex;visibility:visible}[variant=\"overlay\"].sc-z-offcanvas-h{position:fixed;z-index:1000;top:var(--z-offcanvas--top-space);right:0;bottom:0;left:0;display:flex;height:calc(100% - var(--z-offcanvas--top-space))}[variant=\"overlay\"][transitiondirection=\"left\"].sc-z-offcanvas-h{justify-content:end}[variant=\"overlay\"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{z-index:1010}[variant=\"overlay\"].sc-z-offcanvas-h .canvas-background.sc-z-offcanvas{position:absolute;left:0;width:100%;height:100%;background-color:var(--gray900);opacity:0.7}.canvas-container.sc-z-offcanvas>.canvas-content.sc-z-offcanvas{overflow:auto;flex:1 auto;padding:0 calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2) calc(var(--space-unit) * 2) 0;overflow-x:hidden}[variant=\"overlay\"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas>.canvas-content.sc-z-offcanvas{padding:0 calc(var(--space-unit) * 2) calc(var(--space-unit) * 2) calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2) 0 0}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-track{background-color:transparent}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas{scrollbar-color:var(--color-primary01) transparent}@media only screen and (max-width: 768px){[open][transitiondirection=\"left\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-right 0.4s ease-out}[open][transitiondirection=\"right\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-left 0.4s ease-out}}@media only screen and (min-width: 768px){.sc-z-offcanvas-h{min-width:auto}.canvas-container.sc-z-offcanvas{width:auto;min-width:max(var(--z-offcanvas--container-width), 375px);max-width:max(var(--z-offcanvas--container-width), 375px);height:auto;min-height:calc(var(--space-unit) * 40)}.sc-z-offcanvas-h:not([variant=\"overlay\"])[open]:not(.skip-animation){width:auto;animation:grow 0.4s ease-out}}@keyframes grow{from{width:0}to{width:max(var(--z-offcanvas--container-width), 375px)}}@keyframes enter-left{from{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes enter-right{from{transform:translateX(100%)}to{transform:translateX(0)}}[open][variant=\"overlay\"][transitiondirection=\"left\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-right 0.4s ease-out}[open][transitiondirection=\"right\"].sc-z-offcanvas-h:not(.skip-animation)>.canvas-container.sc-z-offcanvas{animation:enter-left 0.4s ease-out}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"][transitiondirection=\"right\"]>.canvas-container.sc-z-offcanvas{transform:translateX(-100%);transition:visibility 0.4s ease-out, transform 0.4s ease-out}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"][transitiondirection=\"left\"]>.canvas-container.sc-z-offcanvas{transform:translateX(100%);transition:visibility 0.4s ease-out, transform 0.4s ease-out}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"] .canvas-background.sc-z-offcanvas{transition:visibility 0.4s ease-out;visibility:hidden}";

const ZOffcanvas = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.canvasOpenStatusChanged = index.createEvent(this, "canvasOpenStatusChanged", 7);
    /**
     * Offcanvas variant.
     * Can be one `overlay` or `pushcontent`.
     * Default variant: pushcontent
     */
    this.variant = index$1.OffCanvasVariant.PUSHCONTENT;
    /** Whether the offcanvas is open. Default: false */
    this.open = false;
    /** open content transitioning in a specified direction left | right. Default: left */
    this.transitiondirection = index$1.TransitionDirection.LEFT;
    /**
     * Whether to skip the initial animation.
     * Useful when the initial value of the `open` prop is set to `true`.
     */
    this.skipLoadAnimation = false;
  }
  onOpenChanged() {
    if (!this.open && this.skipLoadAnimation) {
      this.skipLoadAnimation = false;
    }
    if (this.open) {
      this.handlePageOverflow();
    }
    this.canvasOpenStatusChanged.emit(this.open);
  }
  handlePageOverflow() {
    const overflow = this.variant === index$1.OffCanvasVariant.OVERLAY ? "overflow-y" : "overflow-x";
    document.body.style[overflow] = this.open ? "hidden" : "";
  }
  render() {
    return (index.h(index.Host, { class: { "skip-animation": this.skipLoadAnimation } }, index.h("div", { role: "presentation", class: "canvas-container", onTransitionEnd: () => this.handlePageOverflow() }, index.h("div", { role: "presentation", class: "canvas-content" }, index.h("slot", { name: "canvasContent" }))), this.variant == index$1.OffCanvasVariant.OVERLAY && (index.h("div", { class: "canvas-background", "data-action": "canvasBackground", onClick: () => (this.open = false) }))));
  }
  static get watchers() { return {
    "open": ["onOpenChanged"]
  }; }
};
ZOffcanvas.style = stylesCss$1;

const stylesCss = ":host{z-index:10;display:flex;column-gap:calc(var(--space-unit) * 2);font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host,*{box-sizing:border-box}.input-container{position:relative;display:flex;width:100%;flex-direction:column}.results-wrapper{position:absolute;top:calc(100% - 1px);left:0;width:100%;padding:calc(var(--space-unit) / 4);border:var(--border-size-small) solid var(--color-surface03);border-top:none;background:var(--color-surface01)}.results{overflow:auto;max-height:var(--z-searchbar-results-height, 540px);padding:calc(var(--space-unit) / 2) calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}.results::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.results::-webkit-scrollbar-track{background-color:transparent}.results::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.results .category-heading{display:block;font-size:var(--font-size-2);font-weight:var(--font-rg);line-height:var(--font-size-3)}.results .category-heading>*{display:block}.results .category-heading>.category{color:var(--color-text05);font-style:italic}.results .category-heading>.subcategory{margin-top:var(--space-unit);color:var(--color-text01);text-transform:uppercase}.results z-list-element{display:block}.results .item{--z-icon-height:12px;--z-icon-width:12px;display:flex;flex-flow:row nowrap;align-items:center;justify-content:flex-start;color:var(--color-text01);column-gap:calc(var(--space-unit) * 1.5);fill:var(--color-icon02);font-size:var(--font-size-2);line-height:var(--font-size-3)}.results .item.ellipsis>.item-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.results .item>.item-label mark{background:var(--color-primary03)}.results .item.has-category{padding-left:calc(var(--space-unit) * 3)}.results .item.item-search{--z-icon-height:16px;--z-icon-width:16px}.results .item-show-all{text-align:center}.results .item-no-results{display:block;font-size:var(--font-size-2);font-style:italic;line-height:var(--font-size-5)}.results .item-no-results>ul{padding-left:calc(var(--space-unit) * 2);margin:var(--space-unit)}@media (min-width: 768px){.results .category-heading{font-size:var(--font-size-3);line-height:var(--font-size-6)}.results .item{font-size:var(--font-size-3);line-height:var(--font-size-6)}.results .item.item-search{--z-icon-height:18px;--z-icon-width:18px}.results .item.ellipsis>.item-label{height:24px}}@media (min-width: 1152px){.results .item{cursor:pointer}.results .item-no-results{cursor:default;font-size:var(--font-size-3);line-height:var(--font-size-6)}}:host([size=\"small\"]) .results :is(.item,.category-heading),:host([size=\"x-small\"]) .results :is(.item,.category-heading){font-size:var(--font-size-2)}:host([size=\"small\"]) .results .item:not(.has-category),:host([size=\"x-small\"]) .results .item:not(.has-category){--z-icon-height:16px;--z-icon-width:16px}:host([size=\"small\"])::part(list-item-container){min-height:calc(var(--space-unit) * 4.5);padding:0}:host([size=\"x-small\"])::part(list-item-container){min-height:calc(var(--space-unit) * 4);padding:0}";

const ZSearchbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.searchSubmit = index.createEvent(this, "searchSubmit", 7);
    this.searchTyping = index.createEvent(this, "searchTyping", 7);
    this.searchItemClick = index.createEvent(this, "searchItemClick", 7);
    /** the id of the searchbar element */
    this.htmlid = `searchbar-${utils.randomId()}`;
    /** Prevent submit action */
    this.preventSubmit = false;
    /** Show autocomplete results */
    this.autocomplete = false;
    /** Minimun number of characters to dispatch typing event */
    this.autocompleteMinChars = 3;
    /** Truncate results to single row */
    this.resultsEllipsis = true;
    /** Search helper text */
    this.searchHelperLabel = "Cerca {searchString}";
    /** Sort autocomplete results items */
    this.sortResultsItems = false;
    /** Show submit button */
    this.showSearchButton = false;
    /** Set button icon without label*/
    this.searchButtonIconOnly = false;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = index$1.ControlSize.BIG;
    /** Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. */
    this.variant = index$1.ButtonVariant.PRIMARY;
    this.searchString = this.value;
    this.currResultsCount = 0;
    this.showResults = false;
    this.resultsItemsList = null;
  }
  emitSearchSubmit() {
    this.searchSubmit.emit(this.inputRef.value);
  }
  emitSearchTyping(search) {
    this.searchTyping.emit(search);
  }
  emitSearchItemClick(item) {
    this.searchItemClick.emit(item);
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
    this.emitSearchTyping(this.searchString);
    if (!this.searchString) {
      this.currResultsCount = this.resultsCount;
    }
  }
  componentWillLoad() {
    this.resultsItemsList = this.getResultsItemsList();
    this.currResultsCount = this.resultsCount;
  }
  getResultsItemsList() {
    return typeof this.resultsItems === "string" ? JSON.parse(this.resultsItems) : this.resultsItems;
  }
  getGroupedItems(items) {
    const groupedItems = {};
    items.forEach((item) => {
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
  checkResultsCount(counter) {
    if (!this.currResultsCount || counter < this.currResultsCount) {
      return true;
    }
    return false;
  }
  handleStopTyping(e) {
    e.stopPropagation();
    this.searchString = e.detail.value;
  }
  handleSubmit() {
    if (this.preventSubmit) {
      return;
    }
    this.emitSearchSubmit();
  }
  handleOutsideClick(e) {
    const cp = e.composedPath();
    const searchbar = cp.find((elem) => elem.nodeName === "Z-SEARCHBAR");
    if (!searchbar || searchbar.htmlid !== this.htmlid) {
      this.showResults = false;
      return;
    }
    if (cp.find((elem) => { var _a; return (elem === null || elem === void 0 ? void 0 : elem.nodeName) === "Z-INPUT" || ((_a = elem === null || elem === void 0 ? void 0 : elem.classList) === null || _a === void 0 ? void 0 : _a.contains("results")); })) {
      this.showResults = true;
      return;
    }
    this.showResults = false;
  }
  renderInput() {
    return (index.h("z-input", { ref: (val) => {
        this.inputRef = val;
      }, message: false, placeholder: this.placeholder, onStopTyping: (e) => this.handleStopTyping(e), onKeyUp: (e) => utils.handleEnterKeydSubmit(e, () => this.handleSubmit()), value: this.value, size: this.size }));
  }
  renderButton() {
    if (!this.showSearchButton) {
      return null;
    }
    const iconProp = this.searchButtonIconOnly ? { icon: "search" } : null;
    const buttonLabel = this.searchButtonIconOnly ? "" : "CERCA";
    const defaultProps = Object.assign({ disabled: this.preventSubmit, variant: this.variant, size: this.size, onClick: () => this.handleSubmit() }, iconProp);
    return index.h("z-button", Object.assign({}, defaultProps), buttonLabel);
  }
  renderResults() {
    if (!this.showResults ||
      !this.autocomplete ||
      !this.searchString ||
      this.searchString.length < this.autocompleteMinChars ||
      !this.resultsItemsList) {
      return null;
    }
    return (index.h("div", { class: "results-wrapper" }, index.h("div", { class: "results" }, this.renderResultsList())));
  }
  renderResultsList() {
    var _a, _b;
    if (this.preventSubmit && !((_a = this.resultsItemsList) === null || _a === void 0 ? void 0 : _a.length)) {
      return (index.h("span", { class: "item item-no-results" }, "Non abbiamo trovato risultati per ", index.h("b", null, this.searchString), index.h("br", null), index.h("br", null), "Cosa puoi fare?", index.h("ul", null, index.h("li", null, "Verificare di aver scritto bene"), index.h("li", null, "Provare a cercare un'altra parola"), index.h("li", null, "Provare a cercare qualcosa di pi\u00F9 generico"))));
    }
    return (index.h("z-list", { role: "listbox", id: `list-${this.htmlid}` }, this.renderSearchHelper(!!((_b = this.resultsItemsList) === null || _b === void 0 ? void 0 : _b.length)), this.renderItems(), this.renderShowAllResults()));
  }
  renderItems() {
    var _a;
    if (!((_a = this.resultsItemsList) === null || _a === void 0 ? void 0 : _a.length)) {
      return [];
    }
    const groupedItems = this.getGroupedItems(this.resultsItemsList);
    const listGroups = [];
    let counter = 0;
    Object.values(groupedItems).forEach((groupItem, index$2, array) => {
      if (this.checkResultsCount(counter)) {
        const listGroupsElements = [];
        groupItem.items.forEach((item, subindex, subarray) => {
          if (this.checkResultsCount(counter)) {
            const isLast = index$2 === array.length - 1 && subindex === subarray.length - 1;
            listGroupsElements.push(this.renderItem(item, subindex, !isLast));
          }
          counter++;
        });
        if (listGroupsElements.length) {
          listGroups.push(index.h("z-list-group", { "divider-type": index$1.ListDividerType.ELEMENT }, this.renderItemCategory(groupItem), listGroupsElements));
        }
      }
    });
    return listGroups;
  }
  renderItem(item, key, divider) {
    return (index.h("z-list-element", { id: `list-item-${this.htmlid}-${key}`, role: "option", tabindex: 0, dividerType: divider ? index$1.ListDividerType.ELEMENT : undefined, clickable: true, onClickItem: () => this.emitSearchItemClick(item) }, index.h("span", { class: { "item": true, "ellipsis": this.resultsEllipsis, "has-category": !!item.category } }, (item === null || item === void 0 ? void 0 : item.icon) && (index.h("z-icon", { class: "item-icon", name: item.icon })), index.h("span", { class: "item-label", title: item.label, innerHTML: this.renderItemLabel(item.label) }))));
  }
  renderItemLabel(label) {
    if (!this.searchString) {
      return label;
    }
    return label.replace(new RegExp(this.searchString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gmi"), (found) => `<mark>${found}</mark>`);
  }
  renderItemCategory(groupItem) {
    if (!(groupItem === null || groupItem === void 0 ? void 0 : groupItem.category)) {
      return null;
    }
    return (index.h("span", { class: "category-heading", slot: "header-title" }, index.h("span", { class: "category" }, groupItem.category), (groupItem === null || groupItem === void 0 ? void 0 : groupItem.subcategory) && index.h("span", { class: "subcategory" }, groupItem.subcategory)));
  }
  renderSearchHelper(hasDivider = true) {
    if (!this.autocomplete || this.preventSubmit || !this.searchString) {
      return null;
    }
    return (index.h("z-list-element", { role: "option", tabindex: 0, dividerType: hasDivider ? index$1.ListDividerType.ELEMENT : undefined, clickable: true, id: `list-item-${this.htmlid}-search`, onClickItem: () => this.emitSearchSubmit() }, index.h("span", { class: "item item-search" }, index.h("z-icon", { class: "search-icon", name: "left-magnifying-glass" }), index.h("span", { class: "item-label", innerHTML: this.searchHelperLabel.replace("{searchString}", `<mark>${this.searchString}</mark>`) }))));
  }
  renderShowAllResults() {
    var _a, _b;
    if (!this.currResultsCount ||
      !this.searchString ||
      !((_a = this.resultsItemsList) === null || _a === void 0 ? void 0 : _a.length) ||
      this.currResultsCount >= ((_b = this.resultsItemsList) === null || _b === void 0 ? void 0 : _b.length)) {
      return null;
    }
    return (index.h("z-list-element", { role: "option", tabindex: 0, clickable: true, id: `list-item-${this.htmlid}-show-all`, onClickItem: () => (this.currResultsCount = 0), color: "color-primary01" }, index.h("div", { class: "item-show-all" }, "Vedi tutti i risultati")));
  }
  render() {
    return (index.h(index.Host, { onFocus: () => (this.showResults = true), onClick: (e) => this.handleOutsideClick(e), class: { "has-submit": this.showSearchButton, "has-results": this.autocomplete } }, index.h("div", { class: "input-container" }, this.renderInput(), this.renderResults()), this.renderButton()));
  }
  static get watchers() { return {
    "resultsItems": ["watchItems"],
    "resultsCount": ["watchResultsCount"],
    "value": ["watchValue"],
    "searchString": ["watchSearchString"]
  }; }
};
ZSearchbar.style = stylesCss;

exports.z_app_header = ZAppHeader;
exports.z_button = ZButton;
exports.z_divider = ZDivider;
exports.z_icon = ZIcon;
exports.z_input = ZInput;
exports.z_input_message = ZInputMessage;
exports.z_list = ZList;
exports.z_list_element = ZListElement;
exports.z_list_group = ZListGroup;
exports.z_offcanvas = ZOffcanvas;
exports.z_searchbar = ZSearchbar;
