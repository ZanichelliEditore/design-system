'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-fa110f37.js');
const icons = require('./icons-9e555ff7.js');
const utils = require('./utils-600bad93.js');
require('./breakpoints-88c4fd6c.js');

const stylesCss$9 = ":host{--app-header-content-max-width:100%;--app-header-height:auto;--app-header-typography-1-size:24px;--app-header-typography-2-size:28px;--app-header-typography-3-size:32px;--app-header-typography-4-size:36px;--app-header-typography-5-size:42px;--app-header-typography-6-size:48px;--app-header-typography-7-size:54px;--app-header-typography-8-size:60px;--app-header-typography-9-size:68px;--app-header-typography-10-size:76px;--app-header-typography-11-size:84px;--app-header-typography-12-size:92px;--app-header-typography-1-lineheight:1.33;--app-header-typography-2-lineheight:1.29;--app-header-typography-3-lineheight:1.25;--app-header-typography-4-lineheight:1.24;--app-header-typography-5-lineheight:1.24;--app-header-typography-6-lineheight:1.25;--app-header-typography-7-lineheight:1.2;--app-header-typography-8-lineheight:1.26;--app-header-typography-9-lineheight:1.24;--app-header-typography-10-lineheight:1.26;--app-header-typography-11-lineheight:1.2;--app-header-typography-12-lineheight:1.2;--app-header-typography-1-tracking:calc(-0.2 / 1em);--app-header-typography-2-tracking:calc(-0.4 / 1em);--app-header-typography-3-tracking:calc(-0.6 / 1em);--app-header-typography-4-tracking:calc(-0.8 / 1em);--app-header-typography-5-tracking:calc(-1 / 1em);--app-header-typography-6-tracking:calc(-1.2 / 1em);--app-header-typography-7-tracking:calc(-1.4 / 1em);--app-header-typography-8-tracking:calc(-1.6 / 1em);--app-header-typography-9-tracking:calc(-1.8 / 1em);--app-header-typography-10-tracking:calc(-2 / 1em);--app-header-typography-11-tracking:calc(-2.2 / 1em);--app-header-typography-12-tracking:calc(-2.4 / 1em);--app-header-top-offset:48px;--app-header-drawer-trigger-size:calc(var(--space-unit) * 4);--app-header-bg:var(--color-white);--app-header-stucked-bg:var(--color-white);--app-header-text-color:var(--gray800);--app-header-stucked-text-color:var(--gray800);display:block;color:var(--app-header-text-color)}:host,*{box-sizing:border-box}.heading-panel{position:relative;display:flex;width:100%;max-width:var(--app-header-content-max-width);height:var(--app-header-height);flex-direction:column;flex-grow:0;flex-shrink:0;align-items:baseline;justify-content:flex-start;padding:var(--grid-margin);margin:0 auto;background:var(--app-header-bg)}:host(:empty) .heading-panel{padding:0}.heading-title{display:flex;max-width:100%;flex-direction:row;align-items:center}:host(:not([menu-length=\"0\"])) .heading-subtitle{padding-left:calc(var(--app-header-drawer-trigger-size) + (var(--space-unit) * 1.5))}.heading-stuck{position:fixed;z-index:20;top:var(--app-header-top-offset);left:0;width:100%;max-width:100%;animation:slide-stuck-heading-in 250ms ease-out;background:var(--app-header-stucked-bg);box-shadow:var(--shadow-2);color:var(--app-header-stucked-text-color)}.heading-stuck-content{display:flex;max-width:var(--app-header-content-max-width);padding:var(--space-unit) var(--grid-margin);margin:0 auto}.heading-stuck .heading-title,.heading-stuck .heading-title>*,.heading-stuck .heading-title ::slotted([slot=\"stucked-title\"]){display:block;overflow:hidden;line-height:1.2;text-overflow:ellipsis;white-space:nowrap}.heading-stuck .heading-title>*,::slotted([slot=\"title\"]),::slotted([slot=\"stucked-title\"]){margin:0;font-family:\"IBM Plex Serif\", serif;font-size:var(--app-header-typography-3-size);font-weight:700;letter-spacing:var(--app-header-typography-3-tracking)}::slotted([slot=\"title\"]){line-height:1}::slotted([slot=\"subtitle\"]){margin:var(--space-unit) 0 0;font-family:var(--font-family-sans);font-size:20px;font-style:italic;font-weight:500;line-height:1.2}.heading-container{position:relative;z-index:1;display:flex;max-width:100%;flex-direction:column;align-items:flex-start;justify-content:flex-start;margin-right:auto}.menu-container{display:none;flex-flow:row wrap;align-items:baseline}.menu-container ::slotted([open]){position:relative;z-index:3}.menu-container ::slotted(*:not(:last-of-type)){margin-right:calc(var(--space-unit) * 4.5)}.drawer-trigger{padding:0;border:0;margin:0 calc(var(--space-unit) * 1.5) 0 0;appearance:none;background:none;border-radius:0;color:inherit;cursor:pointer}.drawer-trigger z-icon{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size);fill:currentcolor}.drawer-container{position:fixed;z-index:100;top:var(--app-header-top-offset);left:0;width:100%;height:100%;pointer-events:none}.drawer-container .drawer-overlay{position:absolute;z-index:1;top:0;left:0;display:block;width:100%;height:100%;background:var(--gray900);opacity:0;pointer-events:none;transition:opacity 400ms ease-out}.drawer-panel{position:absolute;z-index:2;top:0;left:0;display:flex;width:375px;max-width:100%;height:100%;flex-direction:column;align-items:flex-start;padding:calc(var(--space-unit) * 2) var(--space-unit);background:var(--color-white);color:var(--gray800);pointer-events:none;transform:translate3d(-100%, 0, 0);transition:transform 400ms ease-out}.drawer-content{display:flex;overflow:auto;width:100%;flex:1 auto;flex-direction:column;padding:calc(var(--space-unit) * 0.5) var(--space-unit)}.drawer-content::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.drawer-content::-webkit-scrollbar-track{background-color:transparent}.drawer-content::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.drawer-content::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.drawer-content ::slotted(z-menu){width:100%}.drawer-content ::slotted(z-menu:not(:last-of-type)){margin-bottom:calc(var(--space-unit) * 2.5)}.drawer-close{--z-icon-width:var(--app-header-drawer-trigger-size);--z-icon-height:var(--app-header-drawer-trigger-size);padding:0;border:0;margin:0 0 calc(var(--space-unit) * 2.5) var(--space-unit);appearance:none;background:transparent;border-radius:0;color:inherit;cursor:pointer;fill:currentcolor;font-size:inherit;outline:none}.drawer-close:focus-visible{box-shadow:var(--shadow-focus-primary)}:host([drawer-open]) .drawer-container .drawer-overlay{opacity:0.7;pointer-events:all}:host([drawer-open]) .drawer-container .drawer-panel{pointer-events:all;transform:none}.hero-container{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%}:host([overlay]) .heading-panel .drawer-trigger z-icon,:host([overlay]) .heading-panel .heading-container,:host([overlay]) .heading-panel .menu-container{color:var(--color-white);fill:var(--color-white)}:host([overlay]) .heading-panel .menu-container ::slotted(z-menu:not([open])){--color-surface05:var(--color-white)}:host([overlay]) .hero-container::after{position:absolute;z-index:0;top:0;left:0;width:100%;height:100%;background:var(--color-black);content:\"\";opacity:0.5}.hero-container img,.hero-container ::slotted(*){position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:top center;-webkit-user-drag:none}@media (min-width: 768px){:host(:not([flow=\"offcanvas\"])) .heading-subtitle{padding-left:0}:host(:not([flow=\"offcanvas\"])) .menu-container{display:flex}:host(:not([flow=\"offcanvas\"])) .heading-container .drawer-trigger{display:none}:host(:not([flow=\"offcanvas\"],[menu-length=\"0\"])) .heading-container:not(:last-child){margin-bottom:calc(var(--space-unit) * 3)}::slotted([slot=\"title\"]){font-size:var(--app-header-typography-6-size);letter-spacing:var(--app-header-typography-6-tracking)}::slotted([slot=\"subtitle\"]){margin-top:calc(var(--space-unit) * 1.5)}}@media (min-width: 1152px){:host(:not([flow=\"stack\"])) .heading-panel{flex-flow:row wrap}::slotted([slot=\"title\"]){margin-right:var(--grid-gutter);font-size:var(--app-header-typography-7-size);letter-spacing:var(--app-header-typography-7-tracking)}:host(:not([flow=\"offcanvas\"],[menu-length=\"0\"])) .heading-container:not(:last-child){margin-bottom:calc(var(--space-unit) * 2)}.menu-container{margin-top:var(--space-unit)}}@media (min-width: 1366px){::slotted([slot=\"title\"]){font-size:var(--app-header-typography-9-size);letter-spacing:var(--app-header-typography-9-tracking)}:host(:not([flow=\"offcanvas\"],[menu-length=\"0\"])) .heading-container:not(:last-child){margin-bottom:0}}@keyframes slide-stuck-heading-in{0%{transform:translate3d(0, -100%, 0)}100%{transform:none}}";

const SUPPORT_INTERSECTION_OBSERVER = typeof IntersectionObserver !== "undefined";
const ZAppHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.sticking = index.createEvent(this, "sticking", 7);
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
    return (index.h(index.Host, { "menu-length": this.menuLength }, index.h("div", { class: "heading-panel", ref: (el) => (this.container = el) }, index.h("div", { class: "hero-container" }, index.h("slot", { name: "hero" }, this.hero && (index.h("img", { alt: "", src: this.hero })))), index.h("div", { class: "heading-container" }, index.h("div", { class: "heading-title" }, this.menuLength > 0 && (index.h("button", { class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, index.h("z-icon", { name: "burger-menu" }))), index.h("slot", { name: "title" })), index.h("div", { class: "heading-subtitle" }, index.h("slot", { name: "subtitle" }))), index.h("div", { class: "menu-container" }, !this.drawerOpen && this.flow !== "offcanvas" && (index.h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() })))), index.h("div", { class: "drawer-container" }, index.h("div", { class: "drawer-overlay", onClick: this.closeDrawer }), index.h("div", { class: "drawer-panel" }, index.h("button", { class: "drawer-close", "aria-label": "Chiudi menu", onClick: this.closeDrawer }, index.h("z-icon", { name: "close" })), index.h("div", { class: "drawer-content" }, this.drawerOpen && (index.h("slot", { name: "menu", onSlotchange: () => this.collectMenuElements() }))))), this._stuck && (index.h("div", { class: "heading-stuck" }, index.h("div", { class: "heading-stuck-content" }, this.menuLength > 0 && (index.h("button", { class: "drawer-trigger", "aria-label": "Apri menu", onClick: this.openDrawer }, index.h("z-icon", { name: "burger-menu" }))), index.h("div", { class: "heading-title" }, index.h("slot", { name: "stucked-title" }, this.title)))))));
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
    "_stuck": ["onStuck"],
    "drawerOpen": ["setMenuFloatingMode"]
  }; }
};
ZAppHeader.style = stylesCss$9;

const ZBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Font weight variant */
    this.variant = "regular";
  }
  render() {
    return (index.h("z-typography", { tabIndex: 0, component: this.component || "span", level: `b${this.level}`, variant: this.variant }, index.h("slot", null)));
  }
};

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

const stylesCss$6 = ".sc-z-input-h{display:inline-block;width:inherit}input.sc-z-input::-ms-clear,input.sc-z-input::-ms-reveal{display:none}.sc-z-input-h input.sc-z-input::-ms-clear,.sc-z-input-h input.sc-z-input::-ms-reveal{display:none}input.sc-z-input,textarea.sc-z-input,.textarea-wrapper.sc-z-input{box-sizing:border-box;border:var(--border-size-small) solid var(--color-surface04);background:var(--color-input-field01);border-radius:var(--border-radius-small);color:var(--color-text01);fill:var(--color-icon02);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg);outline:none}input.sc-z-input:focus:focus-visible,.textarea-wrapper.sc-z-input:focus-within{box-shadow:var(--shadow-focus-primary)}input.sc-z-input:focus:focus-visible,textarea.sc-z-input:focus:focus-visible{color:var(--color-primary02)}.filled.sc-z-input{border-color:var(--color-surface05)}.input-success.sc-z-input{border-color:var(--color-success01);background:var(--color-success-inverse);fill:var(--color-success01)}.input-error.sc-z-input{border-color:var(--color-error01);background:var(--color-error-inverse);fill:var(--color-error01)}.input-warning.sc-z-input{border-color:var(--color-warning01);background:var(--color-warning-inverse);fill:var(--color-warning01)}input.sc-z-input:hover,.textarea-wrapper.sc-z-input:hover{outline:var(--border-size-medium) solid var(--color-surface04);outline-offset:-2px}input[readonly].sc-z-input,.readonly.sc-z-input{border-color:var(--color-disabled01);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) .textarea-wrapper.sc-z-input,[disabled].sc-z-input-h:not([disabled=\"false\"]) z-icon.sc-z-input{border-color:var(--color-disabled01);box-shadow:none;color:var(--color-disabled02);fill:var(--color-disabled01);pointer-events:none}[disabled].sc-z-input-h:not([disabled=\"false\"]) input.sc-z-input:hover{border-width:var(--border-size-small)}input.sc-z-input::placeholder,textarea.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input::-webkit-textarea-placeholder{color:var(--color-text05)}.sc-z-input:-ms-textarea-placeholder{color:var(--color-text05)}.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input:placeholder{color:var(--color-text05)}label.input-label.sc-z-input{display:block;padding-bottom:var(--space-unit);color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);text-align:left;text-transform:uppercase}[disabled].sc-z-input-h:not([disabled=\"false\"]) label.input-label.sc-z-input{color:var(--color-disabled02)}.text-wrapper.sc-z-input>div.sc-z-input{position:relative;z-index:1;fill:var(--color-icon02)}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input{width:100%;height:calc(var(--space-unit) * 5.5);box-sizing:border-box;padding:0 calc(var(--space-unit) * 1.5);margin:0}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.sc-z-input,.text-wrapper.sc-z-input>div.sc-z-input>input.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 5.25)}.text-wrapper.sc-z-input>div.sc-z-input>input.has-icon.has-clear-icon.sc-z-input{padding-right:calc(var(--space-unit) * 8)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input{position:absolute;z-index:2;top:50%;right:calc(var(--space-unit) * 1.5);display:flex;pointer-events:none;transform:translateY(-50%)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input{padding:0;border:0;background:none;color:inherit;font:inherit;pointer-events:initial}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input+button.icon-button.sc-z-input{margin-left:calc(var(--space-unit) * 0.5)}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.reset-icon.sc-z-input,.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.toggle-password-icon.sc-z-input{cursor:pointer}.text-wrapper.sc-z-input .icons-wrapper.sc-z-input>button.icon-button.sc-z-input>z-icon.sc-z-input{--z-icon-width:18px;--z-icon-height:18px;display:block}.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:hover,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:focus,.text-wrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:active{background:var(--color-white) !important;background-clip:text !important;-webkit-transition-delay:99999s !important}.textarea-wrapper.sc-z-input{padding:calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}textarea.sc-z-input::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-track{background-color:transparent}textarea.sc-z-input::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}textarea.sc-z-input{width:100%;min-height:132px;padding:0;border:none;margin:0;resize:none}.radio-wrapper.sc-z-input,.checkbox-wrapper.sc-z-input{position:relative;display:inline-flex;flex-direction:row;align-items:center;color:var(--color-text01);fill:var(--color-primary01);font-family:var(--font-family-sans)}.radio-wrapper.sc-z-input:hover,.checkbox-wrapper.sc-z-input:hover{color:var(--color-hover-primary);fill:currentcolor}.radio-wrapper.sc-z-input>input.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input{position:absolute;z-index:-1;opacity:0;pointer-events:none}.radio-wrapper.sc-z-input .radio-label.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input{display:inline-flex;align-items:center;margin:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:1;text-transform:inherit}.radio-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input input.sc-z-input:not(:disabled)+.checkbox-label.sc-z-input{cursor:pointer}.radio-wrapper.sc-z-input .radio-label.sc-z-input z-icon.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.sc-z-input z-icon.sc-z-input{cursor:pointer;fill:inherit}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input{flex-direction:row}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input{flex-direction:row-reverse}.radio-wrapper.sc-z-input .radio-label.after.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.after.sc-z-input>span.sc-z-input{margin-left:var(--space-unit)}.radio-wrapper.sc-z-input .radio-label.before.sc-z-input>span.sc-z-input,.checkbox-wrapper.sc-z-input .checkbox-label.before.sc-z-input>span.sc-z-input{margin-right:var(--space-unit)}.radio-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.checkbox-label.sc-z-input>z-icon.sc-z-input{border-radius:var(--border-radius-small);box-shadow:var(--shadow-focus-primary)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input{color:var(--color-disabled02)}.radio-wrapper.sc-z-input>input.sc-z-input:disabled+.radio-label.sc-z-input>z-icon.sc-z-input,.checkbox-wrapper.sc-z-input>input.sc-z-input:disabled+.checkbox-label.sc-z-input>z-icon.sc-z-input{cursor:default;fill:var(--color-disabled01)}";

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
    return (index.h("button", { type: "button", class: "icon-button input-icon", tabIndex: -1 }, index.h("z-icon", { name: this.icon })));
  }
  renderResetIcon() {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly || this.type == index$1.InputType.NUMBER) {
      return;
    }
    return (index.h("button", { type: "button", class: "icon-button reset-icon", "aria-label": "cancella il contenuto dell'input", onClick: () => this.emitInputChange("") }, index.h("z-icon", { name: "multiply" })));
  }
  renderShowHidePassword() {
    return (index.h("button", { type: "button", class: "icon-button toggle-password-icon", disabled: this.disabled, "aria-label": this.passwordHidden ? "mostra password" : "nascondi password", onClick: () => (this.passwordHidden = !this.passwordHidden) }, index.h("z-icon", { name: this.passwordHidden ? "view-filled" : "view-off-filled" })));
  }
  renderMessage() {
    if (utils.boolean(this.message) === false) {
      return;
    }
    return (index.h("z-input-message", { message: utils.boolean(this.message) === true ? undefined : this.message, status: this.status }));
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
      } }, index.h("z-icon", { name: this.checked ? "checkbox-checked" : "checkbox", "aria-hidden": "true" }), this.label && index.h("span", { innerHTML: this.label }))));
  }
  /* END checkbox */
  /* START radio */
  renderRadio() {
    return (index.h("div", { class: "radio-wrapper" }, index.h("input", { id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, onChange: this.handleCheck.bind(this), value: this.value }), index.h("label", { htmlFor: this.htmlid, class: {
        "radio-label": true,
        "after": this.labelPosition === index$1.LabelPosition.RIGHT,
        "before": this.labelPosition === index$1.LabelPosition.LEFT,
      } }, index.h("z-icon", { name: this.checked ? "radio-button-checked" : "radio-button", "aria-hidden": "true" }), this.label && index.h("span", { innerHTML: this.label }))));
  }
  /* END radio */
  render() {
    switch (this.type) {
      case index$1.InputType.TEXTAREA:
        return this.renderTextarea();
      case index$1.InputType.CHECKBOX:
        return this.renderCheckbox();
      case index$1.InputType.RADIO:
        return this.renderRadio();
      default:
        return this.renderInputText(this.type);
    }
  }
  get hostElement() { return index.getElement(this); }
};
ZInput.style = stylesCss$6;

const stylesCss$5 = ":host{display:flex;min-height:calc(var(--space-unit) * 2.5);align-items:start;margin-top:var(--space-unit);color:var(--color-text05);fill:currentcolor;font-family:var(--font-family-sans);font-size:var(--font-size-2);letter-spacing:0.16px}:host([status=\"success\"]){color:var(--color-text-success)}:host([status=\"error\"]){color:var(--color-text-error)}:host([status=\"warning\"]){color:var(--color-warning02)}:host(:focus){outline:none}:host>z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);--z-icon-right-margin:var(--space-unit)}";

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
    return (index.h(index.Host, { role: "listitem", "aria-expanded": this.expandable ? this.showInnerContent : null, onClick: this.handleClick, onKeyDown: this.handleKeyDown, clickable: this.clickable && !this.disabled, tabIndex: !this.isContextualMenu ? "0" : null }, index.h("div", { class: `${this.calculateClass()}`, style: { color: `var(--${this.color})` }, tabindex: this.isContextualMenu ? "0" : "-1", id: `z-list-element-id-${this.listElementId}` }, index.h("div", { class: "z-list-element-container" }, this.renderExpandableButton(), this.renderContent()), this.renderExpandedContent()), this.dividerType === index$1.ListDividerType.ELEMENT && (index.h("z-divider", { color: this.dividerColor, size: this.dividerSize }))));
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

const stylesCss$1 = ".sc-z-select-h{display:inline-block;width:inherit;color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-3);font-weight:var(--font-rg)}.select-wrapper.sc-z-select>z-input.sc-z-select{width:100%}.select-wrapper.sc-z-select>div.sc-z-select{position:relative}.select-wrapper.sc-z-select>div.closed.sc-z-select{overflow:hidden;height:0}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select{position:absolute;width:100%;box-sizing:border-box;padding:calc(var(--space-unit) * 0.5) var(--space-unit);border:var(--border-size-small) solid var(--gray200);border-top:none;background:var(--color-surface01);outline:none}.select-wrapper.sc-z-select .closed.sc-z-select .ul-scroll-wrapper.sc-z-select{z-index:10}.select-wrapper.sc-z-select .open.sc-z-select .ul-scroll-wrapper.sc-z-select{z-index:20}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select{position:relative;overflow:auto;max-height:240px;padding:calc(var(--space-unit) * 0.5);outline:none;scrollbar-color:var(--color-primary01) transparent}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar{width:10px;background:linear-gradient(to right, transparent 0 3px, var(--gray200) 3px 7px, transparent 7px 10px);border-radius:var(--border-radius)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-track{background-color:transparent}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select>z-list.sc-z-select::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-content.sc-z-select{display:block;padding:0 calc(var(--space-unit) * 1.5)}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select z-list.sc-z-select z-list-element.sc-z-select .list-element-content.selected.sc-z-select{font-weight:bold}.select-wrapper.sc-z-select .ul-scroll-wrapper.sc-z-select .no-results.sc-z-select z-icon.sc-z-select{margin-right:var(--space-unit)}.z-list-group-title.sc-z-select{color:var(--gray800)}.reset-item.sc-z-select{color:var(--color-primary01);fill:var(--color-primary01)}.reset-item-content.sc-z-select{display:flex;align-items:center}.reset-item.reset-item-margin.sc-z-select .reset-item-content.sc-z-select{margin-left:calc(var(--space-unit))}.reset-item.sc-z-select .reset-item-content.sc-z-select>z-icon.sc-z-select{margin-right:var(--space-unit)}.reset-item.hide.sc-z-select{display:none}";

const ZSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.optionSelect = index.createEvent(this, "optionSelect", 7);
    this.resetSelect = index.createEvent(this, "resetSelect", 7);
    /** the id of the input element */
    this.htmlid = `id-${utils.randomId()}`;
    /** the input aria-label */
    this.ariaLabel = "";
    /** the input is disabled */
    this.disabled = false;
    /** the input is readonly */
    this.readonly = false;
    /** input helper message (optional) - if set to `false` message won't be displayed */
    this.message = true;
    /** the input has autocomplete option */
    this.autocomplete = false;
    /** no result text message */
    this.noresultslabel = "Nessun risultato";
    this.isOpen = false;
    this.selectedItem = null;
    this.itemsList = [];
    this.toggleSelectUl = this.toggleSelectUl.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleSelectFocus = this.handleSelectFocus.bind(this);
  }
  watchItems() {
    this.itemsList = this.getInitialItemsArray();
    this.selectedItem = this.itemsList.find((item) => item.selected);
  }
  /** get the input selected options */
  async getSelectedItem() {
    return this.selectedItem;
  }
  /** get the input value */
  async getValue() {
    return this.getSelectedValue();
  }
  /** set the input value */
  async setValue(value) {
    let values = [];
    if (typeof value === "string") {
      values.push(value);
    }
    else {
      values = value;
    }
    this.selectedItem = this.itemsList.find((item) => values.includes(item.id));
  }
  emitOptionSelect() {
    this.optionSelect.emit({
      id: this.htmlid,
      selected: this.getSelectedValue(),
    });
  }
  emitResetSelect() {
    this.resetSelect.emit({
      id: this.htmlid,
    });
  }
  componentWillLoad() {
    this.watchItems();
  }
  componentWillRender() {
    this.filterItems(this.searchString);
  }
  getInitialItemsArray() {
    return typeof this.items === "string" ? JSON.parse(this.items) : this.items;
  }
  mapSelectedItemToItemsArray() {
    const initialItemsList = this.getInitialItemsArray();
    return initialItemsList.map((item) => {
      var _a;
      item.selected = item.id === ((_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id);
      return item;
    });
  }
  getSelectedValue() {
    var _a;
    return (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id;
  }
  filterItems(searchString) {
    const prevList = this.mapSelectedItemToItemsArray();
    if (!(searchString === null || searchString === void 0 ? void 0 : searchString.length)) {
      this.itemsList = prevList;
    }
    else {
      this.itemsList = prevList
        .filter((item) => {
        return item.name.toUpperCase().includes(searchString.toUpperCase());
      })
        .map((item) => {
        const start = item.name.toUpperCase().indexOf(searchString.toUpperCase());
        const end = start + searchString.length;
        const newName = item.name.substring(0, start) +
          `<strong>${item.name.substring(start, end)}</strong>` +
          item.name.substring(end, item.name.length);
        item.name = newName;
        return item;
      });
    }
  }
  hasAutocomplete() {
    return utils.boolean(this.autocomplete) === true;
  }
  handleInputChange(e) {
    this.searchString = e.detail.value;
    if (!this.isOpen) {
      this.toggleSelectUl();
    }
  }
  selectItem(item, selected) {
    if (item && item.disabled) {
      return;
    }
    this.itemsList = this.mapSelectedItemToItemsArray();
    this.itemsList = this.itemsList.map((i) => {
      i.selected = false;
      if (i.id === (item === null || item === void 0 ? void 0 : item.id)) {
        i.selected = selected;
      }
      return i;
    });
    this.selectedItem = this.itemsList.find((item) => item.selected);
    this.emitOptionSelect();
    if (this.searchString) {
      this.searchString = null;
    }
  }
  arrowsSelectNav(e, key) {
    const showResetIcon = this.resetItem && !!this.selectedItem;
    const arrows = [index$1.KeyboardCode.ARROW_DOWN, index$1.KeyboardCode.ARROW_UP];
    if (!arrows.includes(e.key)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    if (!this.isOpen) {
      this.toggleSelectUl();
    }
    let index;
    if (this.resetItem) {
      if (e.key === index$1.KeyboardCode.ARROW_DOWN) {
        index = key + 1 === this.itemsList.length + 1 ? +!showResetIcon : key + 1;
      }
      else if (e.key === index$1.KeyboardCode.ARROW_UP) {
        index = key <= +!showResetIcon ? this.itemsList.length : key - 1;
      }
    }
    if (!this.resetItem) {
      if (e.key === index$1.KeyboardCode.ARROW_DOWN) {
        index = key + 1 === this.itemsList.length ? 0 : key + 1;
      }
      else if (e.key === index$1.KeyboardCode.ARROW_UP) {
        index = key <= 0 ? this.itemsList.length - 1 : key - 1;
      }
    }
    this.focusSelectItem(index);
  }
  focusSelectItem(index) {
    const focusElem = this.element.querySelector(`#${this.htmlid}_${index}`);
    if (focusElem) {
      focusElem.focus();
    }
  }
  toggleSelectUl(selfFocusOnClose = false) {
    if (this.disabled || this.readonly) {
      return;
    }
    if (!this.isOpen) {
      document.addEventListener("click", this.handleSelectFocus);
      document.addEventListener("keyup", this.handleSelectFocus);
    }
    else {
      document.removeEventListener("click", this.handleSelectFocus);
      document.removeEventListener("keyup", this.handleSelectFocus);
      if (selfFocusOnClose) {
        this.element.querySelector(`#${this.htmlid}_input`).focus();
      }
    }
    this.isOpen = !this.isOpen;
  }
  handleInputClick(e) {
    const cp = e.composedPath();
    const clearIcon = cp.find((item) => item.classList && item.classList.contains("reset-icon"));
    if (clearIcon) {
      e.stopPropagation();
      return;
    }
    this.toggleSelectUl();
  }
  handleSelectFocus(e) {
    if (e instanceof KeyboardEvent && e.key === index$1.KeyboardCode.ESC) {
      e.stopPropagation();
      return this.toggleSelectUl(true);
    }
    if (e instanceof KeyboardEvent && e.key !== index$1.KeyboardCode.TAB && e.key !== index$1.KeyboardCode.ENTER) {
      return;
    }
    const tree = utils.getElementTree(utils.getClickedElement());
    const parent = tree.find((elem) => {
      return elem.nodeName.toLowerCase() === "z-input" && elem.id === `${this.htmlid}_input`;
    });
    if (!parent) {
      this.toggleSelectUl(e instanceof MouseEvent ? true : false);
    }
  }
  scrollToLetter(letter) {
    const foundItem = this.itemsList.find((item) => item.name.charAt(0) === letter);
    if (foundItem) {
      this.focusSelectItem(this.itemsList.indexOf(foundItem));
    }
  }
  renderInput() {
    return (index.h("z-input", { id: `${this.htmlid}_input`, htmlid: `${this.htmlid}_input`, placeholder: this.placeholder, value: !this.isOpen && this.selectedItem ? this.selectedItem.name.replace(/<[^>]+>/g, "") : null, label: this.label, "aria-label": this.ariaLabel, icon: this.isOpen ? "caret-up" : "caret-down", hasclearicon: this.hasAutocomplete(), message: false, disabled: this.disabled, readonly: this.readonly || (!this.hasAutocomplete() && this.isOpen), status: this.isOpen ? undefined : this.status, autocomplete: "off", onClick: (e) => {
        this.handleInputClick(e);
      }, onKeyUp: (e) => {
        if (e.keyCode !== 13) {
          e.preventDefault();
        }
        utils.handleKeyboardSubmit(e, this.toggleSelectUl);
      }, onKeyDown: (e) => {
        return this.arrowsSelectNav(e, this.selectedItem ? this.itemsList.indexOf(this.selectedItem) : this.resetItem ? 0 : -1);
      }, onInputChange: (e) => {
        this.handleInputChange(e);
      }, onKeyPress: (e) => {
        if (!this.hasAutocomplete()) {
          e.preventDefault();
          this.scrollToLetter(String.fromCharCode(e.keyCode));
        }
      } }));
  }
  renderSelectUl() {
    var _a;
    return (index.h("div", { class: this.isOpen ? "open" : "closed", tabindex: "-1" }, index.h("div", { class: "ul-scroll-wrapper", tabindex: "-1" }, index.h("z-list", { role: "listbox", tabindex: this.disabled || this.readonly || !this.isOpen ? -1 : 0, id: this.htmlid, "aria-activedescendant": (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.id, "aria-multiselectable": false, class: {
        disabled: this.disabled,
        readonly: this.readonly,
        filled: !!this.selectedItem,
        [`input-${this.status}`]: !this.isOpen && !!this.status,
      } }, this.resetItem && this.renderResetItem(), this.renderSelectUlItems()))));
  }
  renderResetItem() {
    return (index.h("z-list-element", { class: {
        "hide": !this.selectedItem || !this.resetItem,
        "reset-item": true,
        "reset-item-margin": !this.hasGroupItems,
      }, clickable: true, disabled: false, dividerType: index$1.ListDividerType.ELEMENT, role: "option", tabindex: "0", "aria-selected": "false", id: `${this.htmlid}_${this.resetItem ? "0" : "none"}`, onClickItem: () => {
        this.selectedItem = null;
        this.searchString = null;
        this.emitResetSelect();
      }, onKeyDown: (e) => this.arrowsSelectNav(e, 0) }, index.h("div", { class: "reset-item-content" }, index.h("z-icon", { name: "multiply-circled" }), index.h("span", null, this.resetItem))));
  }
  renderItem(item, key, lastItem) {
    return (index.h("z-list-element", { clickable: !item.disabled, disabled: item.disabled, dividerType: lastItem ? index$1.ListDividerType.HEADER : index$1.ListDividerType.ELEMENT, role: "option", tabindex: item.disabled || !this.isOpen ? -1 : 0, "aria-selected": !!item.selected, id: `${this.htmlid}_${key}`, onClickItem: () => this.selectItem(item, true), onKeyDown: (e) => this.arrowsSelectNav(e, key) }, index.h("span", { class: {
        "selected": !!item.selected,
        "list-element-content": true,
      }, innerHTML: item.name })));
  }
  renderSelectUlItems() {
    if (!this.itemsList.length) {
      return this.renderNoSearchResults();
    }
    if (this.hasGroupItems) {
      return this.renderSelectGroupItems();
    }
    return this.itemsList.map((item, key, array) => {
      const lastItem = array.length === key + 1;
      const itemKey = this.resetItem ? key + 1 : key;
      return this.renderItem(item, itemKey, lastItem);
    });
  }
  renderSelectGroupItems() {
    const newData = this.itemsList.reduce((group, item, index, array) => {
      var _a;
      const { category } = item;
      const lastItem = array.length === index + 1;
      const itemKey = this.resetItem ? index + 1 : index;
      const zListItem = this.renderItem(item, itemKey, lastItem);
      group[category] = (_a = group[category]) !== null && _a !== void 0 ? _a : [];
      group[category].push(zListItem);
      return group;
    }, {});
    return Object.entries(newData).map(([key, value]) => {
      return (index.h("z-list-group", { "divider-type": index$1.ListDividerType.ELEMENT }, index.h("z-body", { class: "z-list-group-title", level: 3, slot: "header-title", variant: "semibold" }, key), value.map((item) => item)));
    });
  }
  renderNoSearchResults() {
    return (index.h("z-list-element", { color: "blue500", class: "no-results" }, index.h("z-icon", { name: "multiply-circle", fill: "blue500" }), this.noresultslabel));
  }
  renderMessage() {
    if (utils.boolean(this.message) === false) {
      return;
    }
    return (index.h("z-input-message", { message: utils.boolean(this.message) === true ? undefined : this.message, status: this.status }));
  }
  render() {
    return (index.h("div", { class: "select-wrapper" }, this.renderInput(), this.renderSelectUl(), this.renderMessage()));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "items": ["watchItems"]
  }; }
};
ZSelect.style = stylesCss$1;

const stylesCss = ":host>*{margin:0;font-family:var(--dashboard-font)}:host(.regular)>*{font-weight:var(--font-rg)}:host(.semibold)>*{font-weight:600}:host(.light)>*{font-weight:300}:host(.h1)>*{font-size:32px;line-height:40px}:host(.h2)>*{font-size:28px;line-height:36px}:host(.h3)>*{font-size:24px;line-height:32px}:host(.h4)>*{font-size:20px;line-height:28px}:host(.b1)>*{font-size:20px;line-height:28px}:host(.b2)>*{font-size:18px;line-height:28px}:host(.b3)>*{font-size:16px;line-height:24px}:host(.b4)>*{font-size:14px;line-height:20px}:host(.b5)>*{font-size:12px;line-height:16px}:host(:focus-visible){outline:none}";

const ZTypography = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Font weight variant */
    this.variant = "regular";
  }
  render() {
    const el = document.createElement(this.component || "span");
    el.innerHTML = `<slot />`;
    this.hostElement.shadowRoot.appendChild(el);
    return (index.h(index.Host, { class: {
        [this.level]: Boolean(this.level),
        regular: this.variant === "regular",
        semibold: this.variant === "semibold",
        light: this.variant === "light",
      } }));
  }
  get hostElement() { return index.getElement(this); }
};
ZTypography.style = stylesCss;

exports.z_app_header = ZAppHeader;
exports.z_body = ZBody;
exports.z_divider = ZDivider;
exports.z_icon = ZIcon;
exports.z_input = ZInput;
exports.z_input_message = ZInputMessage;
exports.z_list = ZList;
exports.z_list_element = ZListElement;
exports.z_list_group = ZListGroup;
exports.z_select = ZSelect;
exports.z_typography = ZTypography;
