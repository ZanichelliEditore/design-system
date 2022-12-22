import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a2ca4b97.js';
import { I as ICONS } from './icons-56ca282c.js';

const stylesCss$1 = ":host{--app-header-content-max-width:100%;--app-header-height:auto;--app-header-typography-1-size:24px;--app-header-typography-2-size:28px;--app-header-typography-3-size:32px;--app-header-typography-4-size:36px;--app-header-typography-5-size:42px;--app-header-typography-6-size:48px;--app-header-typography-7-size:54px;--app-header-typography-8-size:60px;--app-header-typography-9-size:68px;--app-header-typography-10-size:76px;--app-header-typography-11-size:84px;--app-header-typography-12-size:92px;--app-header-typography-1-lineheight:1.33;--app-header-typography-2-lineheight:1.29;--app-header-typography-3-lineheight:1.25;--app-header-typography-4-lineheight:1.24;--app-header-typography-5-lineheight:1.24;--app-header-typography-6-lineheight:1.25;--app-header-typography-7-lineheight:1.2;--app-header-typography-8-lineheight:1.26;--app-header-typography-9-lineheight:1.24;--app-header-typography-10-lineheight:1.26;--app-header-typography-11-lineheight:1.2;--app-header-typography-12-lineheight:1.2;--app-header-typography-1-tracking:calc(-0.2 / 1em);--app-header-typography-2-tracking:calc(-0.4 / 1em);--app-header-typography-3-tracking:calc(-0.6 / 1em);--app-header-typography-4-tracking:calc(-0.8 / 1em);--app-header-typography-5-tracking:calc(-1 / 1em);--app-header-typography-6-tracking:calc(-1.2 / 1em);--app-header-typography-7-tracking:calc(-1.4 / 1em);--app-header-typography-8-tracking:calc(-1.6 / 1em);--app-header-typography-9-tracking:calc(-1.8 / 1em);--app-header-typography-10-tracking:calc(-2 / 1em);--app-header-typography-11-tracking:calc(-2.2 / 1em);--app-header-typography-12-tracking:calc(-2.4 / 1em);--app-header-top-offset:48px;--app-header-drawer-trigger-size:calc(var(--space-unit) * 4);--app-header-bg:var(--color-white);--app-header-stucked-bg:var(--color-white);--app-header-text-color:var(--gray800);--app-header-stucked-text-color:var(--gray800);display:block;color:var(--app-header-text-color)}:host,*{box-sizing:border-box}.heading-panel{position:relative;display:flex;width:100%;max-width:var(--app-header-content-max-width);height:var(--app-header-height);flex-direction:column;flex-grow:0;flex-shrink:0;align-items:baseline;justify-content:flex-start;padding:var(--grid-margin);margin:0 auto;background:var(--app-header-bg)}:host(:empty) .heading-panel{padding:0}.heading-title{display:flex;max-width:100%;flex-direction:row;align-items:center}:host(:not([menu-length=\"0\"])) .heading-subtitle{padding-left:calc(var(--app-header-drawer-trigger-size) + (var(--space-unit) * 1.5))}.heading-stuck{position:fixed;z-index:20;top:var(--app-header-top-offset);left:0;width:100%;max-width:100%;animation:slide-stuck-heading-in 250ms ease-out;background:var(--app-header-stucked-bg);box-shadow:var(--shadow-2);color:var(--app-header-stucked-text-color)}.heading-stuck-content{display:flex;max-width:var(--app-header-content-max-width);padding:var(--space-unit) var(--grid-margin);margin:0 auto}.heading-stuck .heading-title,.heading-stuck .heading-title>*,.heading-stuck .heading-title ::slotted([slot=\"stucked-title\"]){display:block;overflow:hidden;line-height:1.2;text-overflow:ellipsis;white-space:nowrap}.heading-stuck .heading-title>*,::slotted([slot=\"title\"]),::slotted([slot=\"stucked-title\"]){margin:0;font-family:\"IBM Plex Serif\", serif;font-size:var(--app-header-typography-3-size);font-weight:700;letter-spacing:var(--app-header-typography-3-tracking)}::slotted([slot=\"title\"]){line-height:1}::slotted([slot=\"subtitle\"]){margin:var(--space-unit) 0 0;font-family:var(--font-family-sans);font-size:20px;font-style:italic;font-weight:500;line-height:1.2}.heading-container{position:relative;z-index:1;display:flex;max-width:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-right:auto}.menu-container{display:none;flex-flow:row wrap;align-items:baseline}.menu-container ::slotted([open]){position:relative;z-index:3}.menu-container ::slotted(*:not(:last-of-type)){margin-right:calc(var(--space-unit) * 4.5)}.drawer-trigger{padding:0;border:0;margin:0 calc(var(--space-unit) * 1.5) 0 0;appearance:none;background:none;border-radius:0;color:inherit;cursor:pointer}.drawer-trigger z-icon{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size);fill:currentcolor}.drawer-container{position:fixed;z-index:100;top:var(--app-header-top-offset);left:0;width:100%;height:100%;pointer-events:none}.drawer-container .drawer-overlay{position:absolute;z-index:1;top:0;left:0;display:block;width:100%;height:100%;background:var(--gray900);opacity:0;pointer-events:none;transition:opacity 400ms ease-out}.drawer-panel{position:absolute;z-index:2;top:0;left:0;display:flex;width:375px;max-width:100%;height:100%;flex-direction:column;align-items:flex-start;padding:calc(var(--space-unit) * 2) var(--space-unit);background:var(--color-white);color:var(--gray800);pointer-events:none;transform:translate3d(-100%, 0, 0);transition:transform 400ms ease-out}.drawer-content{display:flex;overflow:auto;width:100%;flex:1 auto;flex-direction:column;padding:calc(var(--space-unit) * 0.5) var(--space-unit)}.drawer-content::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.drawer-content::-webkit-scrollbar-track{background-color:transparent}.drawer-content::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.drawer-content::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.drawer-content ::slotted(z-menu){width:100%}.drawer-content ::slotted(z-menu:not(:last-of-type)){margin-bottom:calc(var(--space-unit) * 2.5)}.drawer-close{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size);padding:0;border:0;margin:0 0 calc(var(--space-unit) * 2.5) var(--space-unit);appearance:none;background:transparent;border-radius:0;color:inherit;cursor:pointer;fill:currentcolor;font-size:inherit;outline:none}.drawer-close:focus-visible{box-shadow:var(--shadow-focus-primary)}:host([drawer-open]) .drawer-container .drawer-overlay{opacity:0.7;pointer-events:all}:host([drawer-open]) .drawer-container .drawer-panel{pointer-events:all;transform:none}.hero-container{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%}:host([overlay]) .heading-panel .drawer-trigger z-icon,:host([overlay]) .heading-panel .heading-container,:host([overlay]) .heading-panel .menu-container{color:var(--color-white);fill:var(--color-white)}:host([overlay]) .heading-panel .menu-container ::slotted(z-menu:not([open])){--color-surface05:var(--color-white)}:host([overlay]) .hero-container::after{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;background:var(--color-black);content:\"\";opacity:0.5}.hero-container img,.hero-container ::slotted(*){position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:top center;-webkit-user-drag:none}@media (min-width: 768px){:host(:not([flow=\"offcanvas\"])) .heading-subtitle{padding-left:0}:host(:not([flow=\"offcanvas\"])) .menu-container{display:flex}:host(:not([flow=\"offcanvas\"])) .heading-container .drawer-trigger{display:none}:host(:not([flow=\"offcanvas\"],[menu-length=\"0\"])) .heading-container:not(:last-child){margin-bottom:calc(var(--space-unit) * 3)}::slotted([slot=\"title\"]){font-size:var(--app-header-typography-6-size);letter-spacing:var(--app-header-typography-6-tracking)}::slotted([slot=\"subtitle\"]){margin-top:calc(var(--space-unit) * 1.5)}}@media (min-width: 1152px){:host(:not([flow=\"stack\"])) .heading-panel{flex-flow:row wrap}::slotted([slot=\"title\"]){margin-right:var(--grid-gutter);font-size:var(--app-header-typography-7-size);letter-spacing:var(--app-header-typography-7-tracking)}:host(:not([flow=\"offcanvas\"],[menu-length=\"0\"])) .heading-container:not(:last-child){margin-bottom:calc(var(--space-unit) * 2)}.menu-container{margin-top:var(--space-unit)}}@media (min-width: 1366px){::slotted([slot=\"title\"]){font-size:var(--app-header-typography-9-size);letter-spacing:var(--app-header-typography-9-tracking)}:host(:not([flow=\"offcanvas\"],[menu-length=\"0\"])) .heading-container:not(:last-child){margin-bottom:0}}@keyframes slide-stuck-heading-in{0%{transform:translate3d(0, -100%, 0)}100%{transform:none}}";

const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";
const ZAppHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sticking = createEvent(this, "sticking", 7);
    /**
     * Stuck mode for the header.
     * You can programmatically set it using an IntersectionObserver.
     * **Optional**
     */
    this.stuck = false;
    /**
     * Should place an overlay over the hero image.
     * Useful for legibility purpose.
     * **Optional**
     */
    this.overlay = false;
    /**
     * Control menu bar position in the header.
     * - auto: the menu bar is positioned near the title
     * - stack: the menu bar is positioned below the title
     * - offcanvas: the menu bar is not displayed and a burger icon appears to open the offcanvas menu
     *
     * **Optional**
     */
    this.flow = "auto";
    /**
     * The opening state of the drawer.
     */
    this.drawerOpen = false;
    /**
     * The stuck state of the bar.
     */
    this._stuck = false;
    this.observer = SUPPORT_INTERSECTION_OBSERVER &&
      new IntersectionObserver(([entry]) => {
        this._stuck = !entry.isIntersecting;
      }, {
        threshold: 0.5,
      });
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.collectMenuElements.bind(this);
  }
  emitStickingEvent() {
    this.sticking.emit(this._stuck);
  }
  componentDidLoad() {
    this.collectMenuElements();
    this.onStuckMode();
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
  collectMenuElements() {
    const menuElements = (this.menuElements = this.hostElement.querySelectorAll('[slot="menu"]'));
    this.menuLength = menuElements.length;
    this.setMenuFloatingMode();
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
  onStuck() {
    const scrollParent = this.scrollParent;
    if (!scrollParent) {
      return;
    }
    this.emitStickingEvent();
  }
  setMenuFloatingMode() {
    if (this.menuElements.length === 0) {
      return;
    }
    const elements = this.menuElements;
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].open = false;
      elements[i].floating = !this.drawerOpen;
    }
  }
  render() {
    return (h(Host, { "menu-length": this.menuLength }, h("div", { class: "heading-panel", ref: (el) => (this.container = el) }, h("div", { class: "hero-container" }, h("slot", { name: "hero" }, this.hero && (h("img", { alt: "", src: this.hero })))), h("div", { class: "heading-container" }, h("div", { class: "heading-title" }, this.menuLength > 0 && (h("button", { class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, h("z-icon", { name: "burger-menu" }))), h("slot", { name: "title" })), h("div", { class: "heading-subtitle" }, h("slot", { name: "subtitle" }))), h("div", { class: "menu-container" }, !this.drawerOpen && this.flow !== "offcanvas" && (h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() })))), h("div", { class: "drawer-container" }, h("div", { class: "drawer-overlay", onClick: this.closeDrawer }), h("div", { class: "drawer-panel" }, h("button", { class: "drawer-close", "aria-label": "Chiudi menu", onClick: this.closeDrawer }, h("z-icon", { name: "close" })), h("div", { class: "drawer-content" }, this.drawerOpen && (h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() }))))), this._stuck && (h("div", { class: "heading-stuck" }, h("div", { class: "heading-stuck-content" }, this.menuLength > 0 && (h("button", { class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, h("z-icon", { name: "burger-menu" }))), h("div", { class: "heading-title" }, h("slot", { name: "stucked-title" }, this.title)))))));
  }
  openDrawer() {
    this.drawerOpen = true;
  }
  closeDrawer() {
    this.drawerOpen = false;
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "stuck": ["onStuckMode"],
    "_stuck": ["onStuck"],
    "drawerOpen": ["setMenuFloatingMode"]
  }; }
};
ZAppHeader.style = stylesCss$1;

const stylesCss = ":host{margin-right:var(--z-icon-right-margin, 0);margin-left:var(--z-icon-left-margin, 0);line-height:0;vertical-align:middle}:host svg:not([width]){width:var(--z-icon-width, 18px)}:host svg:not([height]){height:var(--z-icon-height, 18px)}";

const ZIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  selectPathOrPolygon(iconValue) {
    if (iconValue === null || iconValue === void 0 ? void 0 : iconValue.startsWith("M")) {
      return h("path", { d: ICONS[this.name] });
    }
    return h("polygon", { points: ICONS[this.name] });
  }
  render() {
    return (h("svg", { viewBox: "0 0 1000 1000", width: this.width, height: this.height, id: this.iconid, fill: this.fill ? `var(--${this.fill})` : "" }, this.selectPathOrPolygon(ICONS[this.name])));
  }
};
ZIcon.style = stylesCss;

export { ZAppHeader as z_app_header, ZIcon as z_icon };
