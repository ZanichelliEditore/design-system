'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2e494cc2.js');

const stylesCss = ":host{--app-header-height:auto;--app-header-typography-1-size:24px;--app-header-typography-2-size:28px;--app-header-typography-3-size:32px;--app-header-typography-4-size:36px;--app-header-typography-5-size:42px;--app-header-typography-6-size:48px;--app-header-typography-7-size:54px;--app-header-typography-8-size:60px;--app-header-typography-9-size:68px;--app-header-typography-10-size:76px;--app-header-typography-11-size:84px;--app-header-typography-12-size:92px;--app-header-typography-1-lineheight:1.33;--app-header-typography-2-lineheight:1.29;--app-header-typography-3-lineheight:1.25;--app-header-typography-4-lineheight:1.24;--app-header-typography-5-lineheight:1.24;--app-header-typography-6-lineheight:1.25;--app-header-typography-7-lineheight:1.2;--app-header-typography-8-lineheight:1.26;--app-header-typography-9-lineheight:1.24;--app-header-typography-10-lineheight:1.26;--app-header-typography-11-lineheight:1.2;--app-header-typography-12-lineheight:1.2;--app-header-typography-1-tracking:calc(-0.2 / 1em);--app-header-typography-2-tracking:calc(-0.4 / 1em);--app-header-typography-3-tracking:calc(-0.6 / 1em);--app-header-typography-4-tracking:calc(-0.8 / 1em);--app-header-typography-5-tracking:calc(-1 / 1em);--app-header-typography-6-tracking:calc(-1.2 / 1em);--app-header-typography-7-tracking:calc(-1.4 / 1em);--app-header-typography-8-tracking:calc(-1.6 / 1em);--app-header-typography-9-tracking:calc(-1.8 / 1em);--app-header-typography-10-tracking:calc(-2 / 1em);--app-header-typography-11-tracking:calc(-2.2 / 1em);--app-header-typography-12-tracking:calc(-2.4 / 1em);--app-header-drawer-trigger-size:calc(var(--space-unit) * 4);display:block;color:var(--text-grey-800)}:host,*{box-sizing:border-box}:host(:not(:empty)) .heading-panel{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;flex-shrink:0;flex-grow:0;width:100%;height:var(--app-header-height);padding-top:calc(var(--space-unit) * 3.5);padding-right:var(--grid-mobile-margin);padding-bottom:calc(var(--space-unit) * 4.5);padding-left:var(--grid-mobile-margin)}.heading-stucked{position:fixed;top:var(--stuck-top, 0);left:0;z-index:5;display:flex;flex-direction:row;width:100%;max-width:100%;padding:var(--space-unit) var(--grid-mobile-margin);background:var(--bg-white);box-shadow:var(--shadow-2);background:var(--bg-white);animation:slideStuckedHeadingIn 250ms ease-out}.heading-stucked .heading-title{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}::slotted(*){margin:0}.heading-title{display:flex;flex-direction:row;align-items:center;max-width:100%}.heading-stucked .heading-title,::slotted([slot='title']){font-weight:700;font-family:'IBM Plex Serif', serif;font-size:var(--app-header-typography-3-size);line-height:var(--app-header-typography-3-lineheight);letter-spacing:var(--app-header-typography-3-tracking)}.heading-subtitle{padding-left:calc(var(--app-header-drawer-trigger-size) + (var(--space-unit) * 1.5))}::slotted([slot='subtitle']){margin-top:var(--space-unit);font-family:var(--dashboard-font);font-style:italic;font-weight:500;font-size:20px;line-height:1.2}.heading-container{position:relative;z-index:1;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;max-width:100%;margin-right:auto}.menu-container{display:none;flex-direction:row;flex-wrap:wrap;align-items:baseline}.menu-container ::slotted([open]){position:relative;z-index:3}.menu-container ::slotted(*:not(:last-of-type)){margin-right:calc(var(--space-unit) * 4.5)}.drawer-trigger{margin:0 calc(var(--space-unit) * 1.5) 0 0;padding:0;background:none;border:0;border-radius:0;appearance:none;cursor:pointer}.drawer-trigger z-icon{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size)}.drawer-container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:100;pointer-events:none}.drawer-container .drawer-overlay{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;display:block;background:var(--bg-grey-900);opacity:0;transition:opacity 400ms ease-out;pointer-events:none}.drawer-panel{position:absolute;top:0;left:0;z-index:2;display:flex;flex-direction:column;align-items:flex-start;width:375px;max-width:100%;height:100%;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 0.5) calc(var(--space-unit) * 2) 0;background:var(--bg-white);transform:translate3d(-100%, 0, 0);transition:transform 400ms ease-out;pointer-events:none}.drawer-content{display:flex;flex-direction:column;flex:1 auto;width:100%;padding:0 calc(var(--space-unit) * 2);overflow:auto}.drawer-content::-webkit-scrollbar{background:linear-gradient(\n    90deg,\n    var(--bg-white) 2px,\n    var(--bg-grey-200) 4px,\n    var(--bg-white) 8px\n  );border-radius:var(--border-radius);width:10px}.drawer-content::-webkit-scrollbar-thumb{background-color:var(--myz-blue);border-radius:var(--border-radius);width:10px}.drawer-content ::slotted(z-menu){width:100%;margin-bottom:var(--space-unit)}.drawer-close{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size);margin:var(--space-unit) calc(var(--space-unit) * 2);padding:0;font-size:inherit;background:transparent;border:0;border-radius:0;appearance:none;cursor:pointer}.drawer-container[data-open] .drawer-overlay{opacity:0.7;pointer-events:all}.drawer-container[data-open] .drawer-panel{transform:none;pointer-events:all}.hero-container{position:absolute;top:0;left:0;z-index:0;width:100%;height:100%}:host([overlay]) .heading-panel .drawer-trigger z-icon,:host([overlay]) .heading-panel .heading-container,:host([overlay]) .heading-panel .menu-container{color:var(--text-white);fill:var(--text-white)}:host([overlay]) .hero-container::after{content:'';position:absolute;top:0;left:0;z-index:0;width:100%;height:100%;background:var(--color-black);opacity:0.5}.hero-container img,.hero-container ::slotted(*){position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:top center;-webkit-user-drag:none}@media only screen and (min-width: 768px){.heading-panel,.heading-stucked{padding-left:var(--grid-tablet-margin);padding-right:var(--grid-tablet-margin)}:host(:not([drawer])) .menu-container{display:flex}:host(:not([drawer])) .heading-panel .drawer-trigger{display:none}:host(:not([drawer])) .heading-subtitle{padding-left:0}:host(:not([drawer]):not([data-menu-length='0'])) .heading-container:not(:last-child){margin-bottom:calc(var(--space-unit) * 3)}.heading-stucked .heading-title,::slotted([slot='title']){font-size:var(--app-header-typography-5-size);line-height:var(--app-header-typography-5-lineheight);letter-spacing:var(--app-header-typography-5-tracking)}}@media only screen and (min-width: 1152px){.heading-panel,.heading-stucked{padding-left:var(--grid-desktop-margin);padding-right:var(--grid-desktop-margin)}:host(:not([flow='stack'])) .heading-panel{flex-direction:row;flex-wrap:wrap}::slotted([slot='title']){font-size:var(--app-header-typography-7-size);line-height:var(--app-header-typography-7-lineheight);letter-spacing:var(--app-header-typography-7-tracking);margin-right:var(--grid-desktop-gutter)}.heading-container{width:calc(6 * ((100% - var(--grid-desktop-gutter)) / var(--grid-desktop-column)))}:host(:not([drawer]):not([data-menu-length='0'])) .heading-container:not(:last-child){margin-bottom:calc(var(--space-unit) * 2)}.menu-container{margin-top:var(--space-unit)}}@media only screen and (min-width: 1366px){.heading-panel,.heading-stucked{padding-left:var(--grid-wide-margin);padding-right:var(--grid-wide-margin)}::slotted([slot='title']){font-size:var(--app-header-typography-9-size);line-height:var(--app-header-typography-9-lineheight);letter-spacing:var(--app-header-typography-9-tracking);margin-right:var(--grid-wide-gutter)}.heading-container{width:calc(6 * ((100% - var(--grid-wide-gutter)) / var(--grid-wide-column)))}:host(:not([drawer]):not([data-menu-length='0'])) .heading-container:not(:last-child){margin-bottom:0}.menu-container{margin-top:calc(var(--space-unit) * 3)}}@keyframes slideStuckedHeadingIn{0%{transform:translate3d(0, -100%, 0)}100%{transform:none}}";

const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== 'undefined';
const ZAppHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Stuck mode for the header.
     * You can programmatically set it using an IntersectionObserver.
     * **Optional**
     */
    this.stuck = false;
    /**
     * Collapse the menu container into a side drawer, for a better experience on mobile devices.
     * **Optional**
     */
    this.drawer = false;
    /**
     * Should place an overlay over the hero image.
     * Useful for legibility purpose.
     * **Optional**
     */
    this.overlay = false;
    /**
     * Control menu bar position in the header.
     * **Optional**
     */
    this.flow = 'auto';
    /**
     * The opening state of the drawer.
     */
    this.drawerOpen = false;
    /**
     * The stucked state of the bar.
     */
    this.stucked = false;
    this.observer = SUPPORT_INTERSECTION_OBSERVER && new IntersectionObserver(([entry]) => {
      this.stucked = !entry.isIntersecting;
    }, {
      threshold: 0.5
    });
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.setStuckPosition = this.setStuckPosition.bind(this);
  }
  componentDidLoad() {
    this.collectMenuElements();
    this.onStuckMode();
  }
  get title() {
    const titleElement = this.hostElement.querySelector('[slot="title"]');
    if (!titleElement) {
      return '';
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
    const menuElements = this.menuElements = this.hostElement.querySelectorAll('[slot="menu"]');
    this.hostElement.setAttribute('data-menu-length', `${menuElements.length}`);
    this.setMenuFloatingMode();
  }
  setStuckPosition() {
    const topbar = this.hostElement.ownerDocument.querySelector('z-app-topbar');
    const top = topbar ? topbar.clientHeight : 0;
    this.hostElement.style.setProperty('--stuck-top', `${top}px`);
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
    this.stucked = false;
    if (this.observer) {
      this.observer.unobserve(this.container);
    }
  }
  onStucked() {
    const scrollParent = this.scrollParent;
    if (!scrollParent) {
      return;
    }
    if (this.stucked) {
      this.setStuckPosition();
      scrollParent.addEventListener('scroll', this.setStuckPosition);
    }
    else {
      scrollParent.removeEventListener('scroll', this.setStuckPosition);
    }
  }
  setMenuFloatingMode() {
    if (!this.menuElements) {
      return;
    }
    const elements = this.menuElements;
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].open = false;
      elements[i].floating = !this.drawerOpen;
    }
  }
  render() {
    return index.h(index.Host, null, index.h("div", { class: "heading-panel", ref: (el) => this.container = el }, index.h("div", { class: "hero-container" }, index.h("slot", { name: "hero" }, this.hero && index.h("img", { alt: "", src: this.hero }))), index.h("div", { class: "heading-container" }, index.h("div", { class: "heading-title" }, index.h("button", { class: "drawer-trigger", onClick: this.openDrawer }, index.h("z-icon", { name: "burger-menu" })), index.h("slot", { name: "title" })), index.h("div", { class: "heading-subtitle" }, index.h("slot", { name: "subtitle" }))), index.h("div", { class: "menu-container" }, (!this.drawerOpen) && index.h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() }))), index.h("div", { class: "drawer-container", "data-open": this.drawerOpen }, index.h("div", { class: "drawer-overlay", onClick: this.closeDrawer }), index.h("div", { class: "drawer-panel" }, index.h("button", { class: "drawer-close", onClick: this.closeDrawer }, index.h("z-icon", { name: "close" })), index.h("div", { class: "drawer-content" }, this.drawerOpen && index.h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() })))), this.stucked && index.h("div", { class: "heading-stucked" }, index.h("button", { class: "drawer-trigger", onClick: this.openDrawer }, index.h("z-icon", { name: "burger-menu" })), index.h("div", { class: "heading-title" }, this.title)));
  }
  openDrawer() {
    this.drawerOpen = true;
  }
  closeDrawer() {
    this.drawerOpen = false;
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "stuck": ["onStuckMode"],
    "stucked": ["onStucked"],
    "drawerOpen": ["setMenuFloatingMode"]
  }; }
};
ZAppHeader.style = stylesCss;

exports.z_app_header = ZAppHeader;
