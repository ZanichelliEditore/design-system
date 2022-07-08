'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-b1289f95.js');
const breakpoints = require('./breakpoints-88c4fd6c.js');
const index$2 = require('./index-1fda0714.js');
const icons = require('./icons-9fc3ff30.js');
require('./_commonjsHelpers-537d719a.js');

const stylesCss$b = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}button{display:flex;justify-content:center;align-content:center;background-color:transparent;border:none;padding:0}button>z-icon{color:var(--bg-white);fill:currentColor}button>z-icon.light{color:var(--bg-grey-900);fill:currentColor}";

const ZAppSwitcher = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.appButtonClick = index.createEvent(this, "appButtonClick", 7);
    /** theme variant, default 'dark' */
    this.theme = index$1.ThemeVariant.dark;
    this.isopen = false;
    this.emitAppButtonClick = this.emitAppButtonClick.bind(this);
  }
  emitAppButtonClick() {
    this.isopen = !this.isopen;
    this.appButtonClick.emit({ isopen: this.isopen });
  }
  render() {
    return (index.h("button", { title: "app-switcher", onClick: () => this.emitAppButtonClick() }, index.h("z-icon", { name: "app-switcher", class: this.theme })));
  }
};
ZAppSwitcher.style = stylesCss$b;

const stylesCss$a = ":host{display:block;position:sticky;box-sizing:border-box;top:0;height:calc(var(--space-unit) * 6);padding:calc(var(--space-unit) / 2) calc(var(--space-unit) * 2);border-radius:var(--border-no-radius);background-color:var(--gray900);z-index:99}:host(.light){background-color:var(--color-white)}:host>div{display:flex;justify-content:space-between;align-items:center}:host(.limited-width) #content-container{margin:auto;max-width:var(--mw)}.content-panel{display:flex;align-items:center}.content-panel>:not(:last-child){margin-right:calc(var(--space-unit) * 2)}#divider-container{display:none}z-link{font-family:var(--font-family-sans);font-weight:var(--font-sb);font-size:14px;line-height:20px;letter-spacing:0.3px}@media only screen and (min-width: 768px){:host{padding:var(--space-unit) calc(var(--space-unit) * 2) var(--space-unit) var(--space-unit)}:host(.limited-width){padding:var(--space-unit)}#divider-container{display:block;height:calc(var(--space-unit) * 3)}}";

const ZAppTopbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** theme variant, default 'dark' */
    this.theme = index$1.ThemeVariant.dark;
    this.topbarLinks = [];
  }
  handleResize() {
    this.isMobile = window.innerWidth <= breakpoints.mobileBreakpoint;
  }
  componentWillLoad() {
    this.isMobile = window.screen.width <= breakpoints.mobileBreakpoint || window.innerWidth <= breakpoints.mobileBreakpoint;
  }
  componentWillRender() {
    if (this.topbarContent) {
      this.topbarLinks = typeof this.topbarContent === "string" ? JSON.parse(this.topbarContent) : this.topbarContent;
    }
  }
  renderTopbarLinks() {
    return this.topbarLinks.map((link) => index.h("z-link", { htmlid: link.id, textcolor: this.theme === index$1.ThemeVariant.light ? "black" : "white", href: link.link, target: link.target, icon: this.isMobile ? link.icon : undefined }, !this.isMobile && link.label));
  }
  render() {
    return (index.h(index.Host, { class: {
        [this.theme]: true,
        "limited-width": !!this.contentMaxWidth
      } }, index.h("div", { id: "content-container", style: this.contentMaxWidth ? { "--mw": `${this.contentMaxWidth}px` } : {} }, index.h("div", { id: "left-panel", class: "content-panel" }, index.h("z-logo", { mobileLogo: this.isMobile, width: this.isMobile ? 32 : 128, height: this.isMobile ? 40 : 32, imageAlt: "zanichelli-logo", link: this.logoLink, targetBlank: true }), this.isMobile && this.renderTopbarLinks()), index.h("div", { id: "right-panel", class: "content-panel" }, !this.isMobile && this.renderTopbarLinks(), this.showAppSwitcher && index.h("z-app-switcher", { theme: this.theme }), index.h("div", { id: "divider-container" }, index.h("z-divider", { orientation: index$1.DividerOrientation.vertical, color: this.theme === index$1.ThemeVariant.light ? "gray800" : "color-white" })), index.h("slot", { name: "login" })))));
  }
};
ZAppTopbar.style = stylesCss$a;

const stylesCss$9 = ".sc-z-button-h{display:inline-block;--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:0;--rgb-white:240, 240, 240}button.sc-z-button:disabled,a.sc-z-button:disabled{pointer-events:none}button.sc-z-button,a.sc-z-button{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;line-height:1;letter-spacing:0.3px;border-width:var(--border-size-medium);border-style:solid;border-radius:var(--border-radius);text-transform:uppercase;text-decoration:none;cursor:pointer;width:100%;white-space:nowrap;outline:none;fill:currentColor}.with-text.sc-z-button-h z-icon.sc-z-button{--z-icon-right-margin:var(--space-unit)}.with-text.sc-z-button-h button.sc-z-button,.with-text.sc-z-button-h a.sc-z-button{min-width:calc(var(--space-unit) * 8);padding:0 calc(var(--space-unit) * 2)}.big.sc-z-button{height:44px;min-width:44px}.small.sc-z-button{height:36px;min-width:36px}.x-small.sc-z-button{height:32px;min-width:32px}.primary.sc-z-button{background-color:var(--color-primary01);border-color:var(--color-primary01);color:var(--color-text-inverse)}@media (hover: hover){.primary.sc-z-button:hover{background-color:var(--color-hover-primary);border-color:var(--color-hover-primary);color:var(--color-text-inverse)}}button.sc-z-button:focus:focus-visible,a.sc-z-button:focus:focus-visible{box-shadow:var(--shadow-focus-primary)}.primary.sc-z-button:active{background-color:var(--color-pressed-primary);border-color:var(--color-pressed-primary);color:var(--color-text-inverse);box-shadow:var(--shadow-2)}.primary.sc-z-button:disabled{background-color:var(--color-disabled01);border-color:var(--color-disabled01);color:var(--color-disabled02)}.secondary.sc-z-button{background-color:var(--color-surface01);border-color:var(--color-primary01);color:var(--color-primary01)}@media (hover: hover){.secondary.sc-z-button:hover{background-color:var(--color-surface01);border-color:var(--color-hover-primary);color:var(--color-hover-primary)}}.secondary.sc-z-button:active{background-color:var(--color-surface01);border-color:var(--color-pressed-primary);color:var(--color-pressed-primary);box-shadow:var(--shadow-2)}.secondary.sc-z-button:disabled{background-color:var(--color-surface01);border-color:var(--color-disabled01);color:var(--color-disabled02)}.tertiary.sc-z-button{background-color:transparent;border-color:transparent;color:var(--color-primary01)}@media (hover: hover){.tertiary.sc-z-button:hover{background-color:var(--color-primary03);border-color:var(--color-primary03);color:var(--color-hover-primary)}}.tertiary.sc-z-button:focus:focus-visible{background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01)}.tertiary.sc-z-button:active{background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01);box-shadow:var(--shadow-2)}.tertiary.sc-z-button:disabled{background-color:transparent;border-color:transparent;color:var(--color-disabled02)}";

const ZButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** HTML button disabled attribute. */
    this.disabled = false;
    /** HTML button type attribute. */
    this.type = index$1.ButtonTypeEnum.button;
    /** Graphical variant: `primary`, `secondary`, `tertiary`. Defaults to `primary`. */
    this.variant = index$1.ButtonVariantEnum.primary;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = index$1.ButtonSizeEnum.big;
  }
  getAttributes() {
    return {
      id: this.htmlid,
      class: index$2.classnames(this.variant, this.size),
      "aria-label": this.ariaLabel,
    };
  }
  componentDidLoad() {
    if (this.hostElement.innerText) {
      this.hostElement.classList.add("with-text");
    }
  }
  componentWillRender() {
    this.hostElement.style.pointerEvents = this.disabled ? "none" : "auto";
  }
  render() {
    if (this.href)
      return (index.h("a", Object.assign({ href: this.href, target: this.target }, this.getAttributes()), this.icon && index.h("z-icon", { name: this.icon, width: 16, height: 16 }), index.h("slot", null)));
    return (index.h("button", Object.assign({ name: this.name, type: this.type, disabled: this.disabled }, this.getAttributes()), this.icon && index.h("z-icon", { name: this.icon, width: 16, height: 16 }), index.h("slot", null)));
  }
  get hostElement() { return index.getElement(this); }
};
ZButton.style = stylesCss$9;

const stylesCss$8 = ":host{display:inline-block;--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:var(--space-unit);--rgb-white:240, 240, 240}button:disabled,::slotted(button:disabled){pointer-events:none}button,::slotted(button),::slotted(a){box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;width:100%;font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;line-height:1;letter-spacing:0.3px;border-width:var(--border-size-medium);border-style:solid;border-radius:var(--border-radius);vertical-align:middle;text-transform:uppercase;text-decoration:none;cursor:pointer;white-space:nowrap;outline:none;fill:currentColor}button.big,:host([size=\"big\"]) ::slotted(button),:host([size=\"big\"]) ::slotted(a){height:44px;min-width:44px}button.small,:host([size=\"small\"]) ::slotted(button),:host([size=\"small\"]) ::slotted(a){height:36px;min-width:36px}button.issmall,:host([issmall]) ::slotted(button),:host([issmall]) ::slotted(a){height:36px;min-width:36px}button.x-small,:host([size=\"x-small\"]) ::slotted(button),:host([size=\"x-small\"]) ::slotted(a){height:32px;min-width:32px}button:not(.square),:host(:not([square])) ::slotted(button),:host(:not([square])) ::slotted(a){min-width:calc(var(--space-unit) * 8);padding:0 calc(var(--space-unit) * 2)}button.square,:host([square]){--z-icon-right-margin:0}button.primary,:host([variant=\"primary\"]) ::slotted(button),:host([variant=\"primary\"]) ::slotted(a){background-color:var(--color-primary01);border-color:var(--color-primary01);color:var(--color-text-inverse)}@media (hover: hover){button.primary:hover,:host([variant=\"primary\"]) ::slotted(button:hover),:host([variant=\"primary\"]) ::slotted(a:hover){background-color:var(--color-hover-primary);border-color:var(--color-hover-primary);color:var(--color-text-inverse)}}button:focus:focus-visible,::slotted(button:focus:focus-visible),::slotted(a:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}button.primary:active,:host([variant=\"primary\"]) ::slotted(button:active),:host([variant=\"primary\"]) ::slotted(a:active){background-color:var(--color-pressed-primary);border-color:var(--color-pressed-primary);color:var(--color-text-inverse);box-shadow:var(--shadow-2)}button.primary:disabled,:host([variant=\"primary\"]) ::slotted(button:disabled){background-color:var(--color-disabled01);border-color:var(--color-disabled01);color:var(--color-disabled02)}button.secondary,:host([variant=\"secondary\"]) ::slotted(button),:host([variant=\"secondary\"]) ::slotted(a){background-color:var(--color-surface01);border-color:var(--color-primary01);color:var(--color-primary01)}@media (hover: hover){button.secondary:hover,:host([variant=\"secondary\"]) ::slotted(button:hover),:host([variant=\"secondary\"]) ::slotted(a:hover){background-color:var(--color-surface01);border-color:var(--color-hover-primary);color:var(--color-hover-primary)}}button.secondary:active,:host([variant=\"secondary\"]) ::slotted(button:active),:host([variant=\"secondary\"]) ::slotted(a:active){background-color:var(--color-surface01);border-color:var(--color-pressed-primary);color:var(--color-pressed-primary);box-shadow:var(--shadow-2)}button.secondary:disabled,:host([variant=\"secondary\"]) ::slotted(button:disabled){background-color:var(--color-surface01);border-color:var(--color-disabled01);color:var(--color-disabled02)}button.tertiary,:host([variant=\"tertiary\"]) ::slotted(button),:host([variant=\"tertiary\"]) ::slotted(a){background-color:transparent;border-color:transparent;color:var(--color-primary01)}button.tertiary.hasContent{padding:0 var(--space-unit)}@media (hover: hover){button.tertiary:hover,:host([variant=\"tertiary\"]) ::slotted(button:hover),:host([variant=\"tertiary\"]) ::slotted(a:hover){background-color:var(--color-primary03);border-color:var(--color-primary03);color:var(--color-hover-primary)}}button.tertiary:focus:focus-visible,:host([variant=\"tertiary\"]) ::slotted(button:focus:focus-visible),:host([variant=\"tertiary\"]) ::slotted(a:focus:focus-visible){background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01)}button.tertiary:active,:host([variant=\"tertiary\"]) ::slotted(button:active),:host([variant=\"tertiary\"]) ::slotted(a:active){background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01);box-shadow:var(--shadow-2)}button.tertiary:disabled,:host([variant=\"tertiary\"]) ::slotted(button:disabled){background-color:transparent;border-color:transparent;color:var(--color-disabled02)}button.dark-bg,:host([variant=\"dark-bg\"]) ::slotted(button),:host([variant=\"dark-bg\"]) ::slotted(a){background-color:rgba(var(--rgb-white), 0.2);border-color:transparent;color:var(--color-text04)}button.dark-bg.hasContent{padding:0 var(--space-unit)}@media (hover: hover){button.dark-bg:hover,:host([variant=\"dark-bg\"]) ::slotted(button:hover),:host([variant=\"dark-bg\"]) ::slotted(a:hover){background-color:rgba(var(--rgb-white), 0.1)}}button.dark-bg:active,:host([variant=\"dark-bg\"]) ::slotted(button:active),:host([variant=\"dark-bg\"]) ::slotted(a:active){background-color:rgba(var(--rgb-white), 0.3)}button.dark-bg:disabled,:host([variant=\"dark-bg\"]) ::slotted(button:disabled){color:var(--color-disabled03);background-color:rgba(var(--rgb-white), 0.05)}";

const ZButtonDeprecated = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** HTML button disabled attribute. */
    this.disabled = false;
    /** HTML button type attribute. */
    this.type = index$1.ButtonTypeEnum.button;
    /** Graphical variant: `primary`, `secondary`, `tertiary`, `dark-bg`. Defaults to `primary`. */
    this.variant = index$1.ButtonVariantEnum.primary;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = index$1.ButtonSizeEnum.big;
    /** Reduce button size (deprecated).
     * @deprecated Use `size` prop.
     */
    this.issmall = false;
    /** Spy to render square button. */
    this.square = false;
  }
  render() {
    this.hostElement.style.pointerEvents = this.disabled ? "none" : "auto";
    return (index.h("slot", { name: "element" }, index.h("button", { id: this.htmlid, name: this.name, type: this.type, disabled: this.disabled, class: index$2.classnames(this.variant, this.size, { issmall: this.issmall }, { square: this.square }) }, this.icon && index.h("z-icon", { name: this.icon, width: 16, height: 16 }), index.h("slot", null))));
  }
  get hostElement() { return index.getElement(this); }
};
ZButtonDeprecated.style = stylesCss$8;

const stylesCss$7 = ":host{--aspect-ratio:1.62;--z-card--border-color:var(--gray200);--z-card--color-cover-background:var(--color-surface01);--z-card--text-background:var(--color-surface01);--z-card--text-border-radius:none;--z-card--text-border:none;position:relative;display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}*,::slotted(*){box-sizing:border-box}:host(:not([variant='overlay'])) .cover-container{position:relative;width:100%}.cover-container{padding-bottom:calc(100% / var(--aspect-ratio))}::slotted([slot='cover']),.color-cover{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}.cover-container>z-icon{--z-icon-width:calc(var(--space-unit) * 11);--z-icon-height:var(--z-icon-width);position:absolute;top:calc(50% - calc(var(--z-icon-height) / 2));left:calc(50% - calc(var(--z-icon-width) / 2));fill:var(--color-primary01)}.color-cover{background-color:var(--z-card--color-cover-background)}.content{display:flex;flex-direction:column;padding-top:var(--space-unit)}.color-cover .cover-content{display:flex;flex-direction:column;justify-content:flex-end;height:100%;padding:var(--space-unit)}::slotted([slot='metadata']),::slotted([slot='title']),::slotted([slot='text']){display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}::slotted([slot='title']:not(:last-child)),::slotted([slot='text']:not(:last-child)){margin-bottom:var(--space-unit)}::slotted([slot='text']),::slotted([slot='actions']){margin:0}::slotted([slot='metadata']:not(:last-child)){margin:0 0 calc(var(--space-unit) * 0.25);-webkit-line-clamp:1;text-transform:uppercase}::slotted([slot='title']){margin:0;font-weight:var(--font-sb);-webkit-line-clamp:2}::slotted([slot='text']){-webkit-line-clamp:3}.actions{display:flex;flex-direction:row;align-items:center}::slotted([slot='action']:not(:last-child)){margin-right:calc(var(--space-unit) * 1.5)}:host([clickable]){cursor:pointer}:host([clickable]:focus:focus-visible){outline:none}:host(:not([variant])[clickable]:focus:focus-visible){padding:calc(var(--space-unit) * 0.5);box-shadow:var(--shadow-focus-primary)}:host([variant='text']){background-color:var(--z-card--text-background);border:var(--z-card--text-border);border-radius:var(--z-card--text-border-radius)}:host([showshadow])>.content,:host([variant='border'])>.content,:host([variant='shadow'])>.content{height:100%;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host([variant='text'])>.content{padding:calc(var(--space-unit) * 2) var(--space-unit)}:host([variant='border']) .actions,:host([variant='shadow']) .actions{margin-top:auto}:host([variant='border']){border:var(--border-size-small) solid var(--z-card--border-color)}:host([variant='border'][clickable]:hover)>.content{background:var(--color-background)}:host([variant='border'][clickable]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant='border'][clickable]:active){border-color:transparent}:host([variant='shadow']),:host([showshadow]){box-shadow:var(--shadow-2)}:host([variant='shadow'][clickable]:hover),:host([clickable][showshadow]:hover){box-shadow:var(--shadow-4)}:host([variant='shadow'][clickable]:focus:focus-visible),:host([clickable][showshadow]:focus:focus-visible){box-shadow:var(--shadow-4)}:host([variant='shadow'][clickable]:active),:host([clickable][showshadow]:active){box-shadow:none}:host([variant='overlay']) .content{position:absolute;top:0;right:0;bottom:0;left:0;justify-content:flex-end;padding:var(--space-unit);background-image:linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));color:var(--color-text-inverse);fill:var(--color-text-inverse)}";

const ZCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.cardClicked = index.createEvent(this, "cardClicked", 7);
    /** Enable click interactions on the card. Default: false */
    this.clickable = false;
    /** Enable shadow. Default: false. */
    this.showshadow = false;
  }
  onClick(ev) {
    // Do nothing for clicks on actions.
    if (ev.target.getAttribute('slot') === 'action') {
      return;
    }
    if (!this.clickable) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    this.cardClicked.emit();
  }
  componentWillLoad() {
    this.hasCoverImage = !!this.host.querySelector('[slot="cover"]');
  }
  /**
   * Template for a card without image cover.
   * A colored background replaces the image and some data is moved over it.
   */
  renderColorCoverCard() {
    return [
      index.h("div", { class: "cover-container" }, index.h("div", { class: "color-cover" }, index.h("div", { class: "cover-content" }, index.h("slot", { name: "metadata" }), index.h("slot", { name: "title" })))),
      index.h("div", { class: "content" }, index.h("slot", { name: "text" }), index.h("div", { class: "actions" }, index.h("slot", { name: "action" })))
    ];
  }
  /**
  * Template for the content div.
  */
  renderContentDiv() {
    return (index.h("div", { class: "content" }, index.h("slot", { name: "metadata" }), index.h("slot", { name: "title" }), index.h("slot", { name: "text" }), index.h("div", { class: "actions" }, index.h("slot", { name: "action" }))));
  }
  render() {
    if (this.variant === index$1.CardVariants.text) {
      return this.renderContentDiv();
    }
    if (this.variant === index$1.CardVariants.overlay || this.hasCoverImage) {
      return [
        index.h("div", { class: "cover-container" }, this.hasCoverImage && [
          index.h("slot", { name: "cover" }),
          (this.variant !== index$1.CardVariants.overlay) && this.coverIcon && index.h("z-icon", { name: this.coverIcon })
        ], !this.hasCoverImage && index.h("div", { class: "color-cover" })),
        this.renderContentDiv()
      ];
    }
    return this.renderColorCoverCard();
  }
  get host() { return index.getElement(this); }
};
ZCard.style = stylesCss$7;

const stylesCss$6 = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);--z-carousel-gutter:0}.z-carousel-items-container{display:flex;overflow-x:scroll;padding-inline-start:0;margin:0;list-style:none;-ms-overflow-style:none;scrollbar-width:none;}.z-carousel-items-container::-webkit-scrollbar{display:none}.z-carousel-items-container>*:not(:last-child){margin-right:var(--z-carousel-gutter)}";

const ZCarousel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** sets the height of z-carousel ghost loading, this prop is mandatory when isloading is set to true, as otherwise the component won't show. */
    this.ghostLoadingHeight = 100;
  }
  render() {
    if (this.isLoading) {
      return (index.h("div", { style: { height: `${this.ghostLoadingHeight}px` } }, index.h("z-ghost-loading", null), index.h("div", { style: { display: "none" } }, index.h("slot", null))));
    }
    return (index.h("ul", { class: "z-carousel-items-container" }, index.h("slot", null)));
  }
};
ZCarousel.style = stylesCss$6;

const stylesCss$5 = ".sc-z-divider-h{display:block;padding:0;margin:0}.divider-horizontal.sc-z-divider-h{width:100%}.divider-vertical.sc-z-divider-h{height:100%}.divider-small.divider-horizontal.sc-z-divider-h{height:var(--border-size-small)}.divider-medium.divider-horizontal.sc-z-divider-h{height:var(--border-size-medium)}.divider-large.divider-horizontal.sc-z-divider-h{height:var(--border-size-large)}.divider-small.divider-vertical.sc-z-divider-h{width:var(--border-size-small)}.divider-medium.divider-vertical.sc-z-divider-h{width:var(--border-size-medium)}.divider-large.divider-vertical.sc-z-divider-h{width:var(--border-size-large)}";

const ZDivider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** [optional] Divider size */
    this.size = index$1.DividerSize.small;
    /** [optional] Divider color */
    this.color = "gray200";
    /** [optional] Divider orintation */
    this.orientation = index$1.DividerOrientation.horizontal;
  }
  render() {
    return (index.h(index.Host, { class: `divider-${this.size} divider-${this.orientation}`, style: { backgroundColor: `var(--${this.color})` } }));
  }
};
ZDivider.style = stylesCss$5;

const stylesCss$4 = ":host{display:inline-block;width:100%;height:100%;background:var(--bg-neutral-100);overflow:hidden;border-radius:4px;transform:translate3d(0, 0, 0)}:host::after{content:' ';display:block;width:100%;height:100%;box-shadow:#e8ebee20 0px 0px 1px;background-image:linear-gradient(\n        90deg,\n        var(--bg-neutral-100) 0%,\n        var(--bg-neutral-150) 95%,\n        var(--bg-neutral-100) 100%\n    );animation:progress 1.6s ease-in-out infinite}@keyframes progress{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}";

const ZGhostLoading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null));
  }
};
ZGhostLoading.style = stylesCss$4;

const stylesCss$3 = ":host{line-height:0;vertical-align:middle;margin-right:var(--z-icon-right-margin, 0);margin-left:var(--z-icon-left-margin, 0)}:host svg:not([width]){width:var(--z-icon-width, 18px)}:host svg:not([height]){height:var(--z-icon-height, 18px)}";

const ZIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  selectPathOrPolygon(iconName) {
    if (iconName && iconName.startsWith("M")) {
      return index.h("path", { d: icons.icons[this.name] });
    }
    else {
      return index.h("polygon", { points: icons.icons[this.name] });
    }
  }
  render() {
    return (index.h("svg", { viewBox: "0 0 1000 1000", width: this.width, height: this.height, id: this.iconid, fill: this.fill ? `var(--${this.fill})` : "" }, this.selectPathOrPolygon(icons.icons[this.name])));
  }
};
ZIcon.style = stylesCss$3;

const stylesCss$2 = ":host{--font-size-link:inherit;--font-weight-link:inherit}:host{font-family:var(--dashboard-font);font-weight:var(--font-weight-link);font-size:var(--font-size-link);line-height:inherit;outline:none}a{cursor:pointer;color:var(--color-link-primary);fill:var(--color-link-primary);display:inline-flex;align-items:center;text-decoration:none;padding:calc(var(--space-unit) * 0.5) 0;border-top:var(--border-size-medium) solid transparent;border-bottom:var(--border-size-medium) solid transparent}a:hover,a:focus,a:active{text-decoration:underline}a.active{color:var(--color-active-link);fill:var(--color-active-link)}a:hover,a:focus{color:var(--color-hover-link);fill:var(--color-hover-link)}a:active{color:var(--color-pressed-link);fill:var(--color-pressed-link)}a:visited{color:var(--color-visited-link);fill:var(--color-visited-link)}a.disabled,a.inverse.disabled{cursor:default;pointer-events:none;color:var(--color-disabled03);fill:var(--color-disabled03)}a.underline,a.underline:active,a.underline:hover,a.underline:visited,a.underline.disabled,a.underline.black,a.underline.white{text-decoration:underline}a.disabled,a.disabled:active,a.disabled:visited,a.disabled:hover{text-decoration:none}a.inverse{color:var(--color-inverse-link);fill:var(--color-inverse-link)}a.inverse.active{color:var(--color-inverse-active-link);fill:var(--color-inverse-active-link)}a.inverse:hover,a.inverse:focus{color:var(--color-inverse-hover-link);fill:var(--color-inverse-hover-link)}a.inverse:active{color:var(--color-inverse-pressed-link);fill:var(--color-inverse-pressed-link)}a.inverse:visited{color:var(--color-inverse-visited-link);fill:var(--color-inverse-visited-link)}a.black{color:var(--gray800);fill:var(--gray800);text-decoration:none}a.black:hover,a.black.active{color:var(--color-black);fill:var(--color-black)}a.black:visited{color:var(--gray800);fill:var(--gray800)}a.black:hover,a.black:focus,a.black:active{text-decoration:underline}a.black:active{color:var(--gray700);fill:var(--gray700)}a.white,a.white:active,a.white:hover,a.white.active{color:var(--bg-white);fill:var(--bg-white);text-decoration:none}a.white:visited{color:var(--bg-white);fill:var(--bg-white)}a.white:hover,a.white:focus,a.white:active{text-decoration:underline}a.white.disabled,a.black.disabled{color:var(--gray500);fill:var(--gray500)}a>z-icon:first-child{margin-right:8px}a>z-icon:last-child{margin-left:8px}";

const ZLink = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.zLinkClick = index.createEvent(this, "zLinkClick", 7);
    /** link target (optional) */
    this.target = "_self";
    /** tabindex link attribute (optional) */
    this.htmltabindex = 0;
    /** disable link flag (optional) */
    this.isdisabled = false;
    /** active link flag (optional) */
    this.isactive = false;
    /** white variant flag (optional) */
    this.iswhite = false;
    /** link text variant (optional) */
    this.textcolor = "primary";
    /** big link version */
    this.big = false;
    /** link icon position (optional) */
    this.iconposition = "left";
    /** draw underline on text (optional) */
    this.underline = false;
    this.iconSize = 18;
    this.emitZLinkClick = this.emitZLinkClick.bind(this);
    this.emitZLinkInteraction = this.emitZLinkInteraction.bind(this);
  }
  componentWillRender() {
    if (this.iswhite) {
      console.warn("z-link iswhite prop is deprecated and will be dropped in a next release, please use textcolor prop instead");
    }
    if (this.big) {
      console.warn("z-link big prop is deprecated and will be dropped in a next release, please override --font-size-link and --font-weight-link variables instead");
    }
  }
  emitZLinkClick(e, linkId) {
    this.emitZLinkInteraction(e, linkId);
  }
  emitZLinkInteraction(e, linkId) {
    this.zLinkClick.emit({ e, linkId });
  }
  componentDidRender() {
    if (this.icon) {
      const height = parseFloat(window.getComputedStyle(this.hostElement).getPropertyValue('font-size'));
      const currentSize = this.big ? 18 : Math.round(height * 1.125);
      if (!Number.isNaN(currentSize) && this.iconSize !== currentSize) {
        this.iconSize = currentSize;
      }
    }
  }
  render() {
    const style = this.big ? { "--font-size-link": "16px", "--font-weight-link": "600" } : {};
    return (index.h(index.Host, { style: style }, index.h("a", { id: this.htmlid, href: this.href ? this.href : null, class: `${this.isdisabled ? "disabled" : ""}
            ${this.isactive ? "active" : ""}
            ${this.textcolor}
            ${this.iswhite ? "white" : ""}
            ${this.underline ? "underline" : ""}`, target: this.target, role: this.href ? "link" : "button", tabindex: this.isdisabled ? -1 : this.htmltabindex, onClick: (e) => this.emitZLinkClick(e, this.htmlid) }, this.iconposition === "right" && index.h("slot", null), this.icon &&
      index.h("z-icon", { style: { "--z-icon-width": this.iconSize.toString(), "--z-icon-height": this.iconSize.toString() }, name: this.icon, height: this.iconSize, width: this.iconSize }), this.iconposition === "left" && index.h("slot", null))));
  }
  get hostElement() { return index.getElement(this); }
};
ZLink.style = stylesCss$2;

const stylesCss$1 = ":host{display:inline-block;vertical-align:top;width:255px;height:64px}img{display:block;margin:auto;width:100%;height:100%;content:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='255px' height='64px' viewBox='0 0 255 64'%3E%3Cg id='Logo/Zanichelli/Centered-(reworked)' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Group'%3E%3Cpolygon id='Background' fill='%23E2001A' points='1.70530257e-13 64 254.39 64 254.39 0 1.70530257e-13 0'%3E%3C/polygon%3E%3Cpath d='M233.36,51.3553859 L242.390252,51.3553859 L242.390252,12.6427292 L233.36,12.6427292 L233.36,51.3553859 Z M211.120346,51.3553859 L230.477617,51.3553859 L230.477617,44.5040053 L220.685891,44.5040053 L220.685891,12.6427292 L211.120346,12.6427292 L211.120346,51.3553859 Z M188.880124,51.3553859 L208.23551,51.3553859 L208.23551,44.5040053 L198.445669,44.5040053 L198.445669,12.6427292 L188.880124,12.6427292 L188.880124,51.3553859 Z M165.354444,12.6427292 L165.354444,51.3553859 L185.999058,51.3553859 L185.999058,44.5021204 L175.027425,44.5021204 L175.027425,35.1778343 L185.377062,35.1778343 L185.377062,28.2699086 L175.027425,28.2699086 L175.027425,19.4978796 L185.999058,19.4978796 L185.999058,12.6427292 L165.354444,12.6427292 Z M136.666196,51.3553859 L146.239281,51.3553859 L146.239281,35.1778343 L152.902178,35.1778343 L152.902178,51.3553859 L162.473377,51.3553859 L162.473377,12.6427292 L152.902178,12.6427292 L152.902178,28.2717934 L146.239281,28.2717934 L146.239281,12.6427292 L136.666196,12.6427292 L136.666196,51.3553859 Z M96.064744,51.3553859 L105.098765,51.3553859 L105.098765,12.6427292 L96.064744,12.6427292 L96.064744,51.3553859 Z M53.2364527,36.5160682 L50.6824993,19.7429083 L48.0757704,36.5160682 L53.2364527,36.5160682 Z M65.4935444,51.3553859 L56.2710395,51.3553859 L54.9441146,42.5286966 L47.7101121,42.5286966 L46.3304118,51.3553859 L37.1060221,51.3553859 L45.0053718,12.6427292 L57.5960795,12.6427292 L65.4935444,51.3553859 Z M85.0468382,37.7581755 L76.7969089,12.6427292 L67.3764961,12.6427292 L67.3764961,51.3553859 L75.4040147,51.3553859 L75.4040147,26.132504 L83.5955141,51.3553859 L93.1855622,51.3553859 L93.1855622,12.6427292 L85.0468382,12.6427292 L85.0468382,37.7581755 Z M107.977948,32 C107.977948,34.5200264 107.977948,36.7893695 108.187165,39.1246819 C108.396382,41.4713034 108.818585,43.6878711 109.678071,45.6009801 C111.423429,49.487513 114.932995,52 121.708982,52 C129.508435,52 133.787014,48.4753558 133.787014,38.0220526 L133.787014,37.5640373 L124.937707,37.5640373 L124.922628,38.0050891 C124.894356,38.7571388 124.884931,39.6185091 124.826501,40.4855339 C124.769956,41.3431345 124.66629,42.1875412 124.460843,42.9301668 C124.048064,44.3965696 123.279051,45.3559514 121.708982,45.3559514 C117.743286,45.3559514 117.057205,42.0574875 117.057205,32 C117.057205,21.9425125 117.743286,18.6440486 121.708982,18.6440486 C123.605127,18.6440486 124.547546,20.0030157 124.547546,25.1806616 L124.547546,25.6424465 L133.344077,25.6424465 L133.361041,25.1995099 C133.689003,16.7855998 130.235982,12 121.708982,12 C114.934879,12 111.427199,14.4823297 109.678071,18.3594383 C108.818585,20.265008 108.396382,22.4778061 108.187165,24.830082 C107.977948,27.1710489 107.977948,29.4554707 107.977948,32 L107.977948,32 Z M34.9007634,12.6446141 L34.9007634,20.3196683 L21.6051268,44.5040053 L35.2268401,44.5040053 L35.2268401,51.3553859 L12,51.3553859 L12,43.7915371 L25.2975214,19.4997644 L13.683159,19.4997644 L13.683159,12.6446141 L34.9007634,12.6446141 Z' id='Logotipo-(reworked)' fill='%23FFFFFF'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}a{display:block;width:100%;height:100%}:host(.mobile){width:31px;height:40px}:host(.mobile) img{content:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='31px' height='40px' viewBox='0 0 31 40'%3E%3Cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Topbar/Mobile/Logged' transform='translate(-16.000000, -4.000000)'%3E%3Cg id='Group' transform='translate(16.000000, 4.000000)'%3E%3Cpolygon id='Fill-1' fill='%23E2001A' points='0 40 30.625 40 30.625 0 0 0'%3E%3C/polygon%3E%3Cpolygon id='Fill-2' fill='%23FEFEFE' points='8.17111587 6.20689655 23.4311708 6.20689655 23.4311708 11.671267 13.8691261 28.9163861 23.6647727 28.9163861 23.6647727 33.7931034 6.96022727 33.7931034 6.96022727 28.408218 16.522272 11.0831673 8.17111587 11.0831673'%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}";

const ZLogo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const style = {};
    if (this.width) {
      style["width"] = style["max-width"] = `${this.width}px`;
    }
    if (this.height) {
      style["height"] = style["max-height"] = `${this.height}px`;
    }
    return (index.h(index.Host, { style: style, class: { "mobile": !!this.mobileLogo } }, this.link ?
      index.h("a", { href: this.link, target: this.targetBlank ? "_blank" : "_self" }, index.h("img", { alt: this.imageAlt })) :
      index.h("img", { alt: this.imageAlt })));
  }
};
ZLogo.style = stylesCss$1;

const stylesCss = ".sc-z-offcanvas-h{--z-offcanvas--container-width:375px;--z-offcanvas--top-space:0px;z-index:1000;display:none;justify-content:end;height:100%;min-width:100%;font-family:var(--font-family-sans);font-weight:var(--font-rg)}.canvas-container.sc-z-offcanvas{display:flex;flex-direction:column;z-index:1010;min-width:100%;height:100%;overflow:-moz-scrollbars-none;overflow:hidden;background:var(--color-surface01);transform:translateX(100%)}@keyframes enterRight{from{transform:translateX(100%)}to{transform:translateX(0)}}[open].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{animation-name:enterRight;animation-duration:0.4s;animation-timing-function:ease-out;transform:translateX(0)}@keyframes exitRight{from{transform:translateX(0)}to{transform:translateX(100%)}}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"]>.canvas-container.sc-z-offcanvas{animation-name:exitRight;animation-duration:0.4s;animation-timing-function:ease-out;transform:translateX(100%)}[variant=\"overlay\"].sc-z-offcanvas-h{position:fixed;height:calc(100% - var(--z-offcanvas--top-space));top:var(--z-offcanvas--top-space);left:0;right:0;bottom:0}[variant=\"overlay\"].sc-z-offcanvas-h .canvas-background.sc-z-offcanvas{position:absolute;left:0;width:100%;height:100%;background-color:var(--gray900);opacity:0.7}[transitiondirection=\"right\"].sc-z-offcanvas-h{justify-content:start}[transitiondirection=\"right\"].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{transform:translateX(-100%)}@keyframes enterLeft{from{transform:translateX(-100%)}to{transform:translateX(0)}}[transitiondirection=\"right\"][open].sc-z-offcanvas-h>.canvas-container.sc-z-offcanvas{animation-name:enterLeft;animation-duration:0.4s;animation-timing-function:ease-out;transform:translateX(0)}@keyframes exitLeft{from{transform:translateX(0)}to{transform:translateX(-100%)}}.sc-z-offcanvas-h:not([open])[variant=\"overlay\"][transitiondirection=\"right\"]>.canvas-container.sc-z-offcanvas{animation-name:exitLeft;animation-duration:0.4s;animation-timing-function:ease-out;transform:translateX(-100%)}.canvas-container.sc-z-offcanvas>.canvas-content.sc-z-offcanvas{flex:1 auto;overflow:auto;overflow-x:hidden;padding:0 calc(var(--space-unit) * 2);margin:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2) calc(var(--space-unit) * 2) 0}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar{background:linear-gradient(\n    to right,\n    transparent 0 3px,\n    var(--gray200) 3px 7px,\n    transparent 7px 10px\n  );width:10px;border-radius:var(--border-radius)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-track{background-color:transparent}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb{background-color:var(--color-primary01);border-radius:var(--border-radius);width:10px}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.canvas-container.sc-z-offcanvas .canvas-content.sc-z-offcanvas{scrollbar-color:var(--color-primary01) transparent}@media only screen and (min-width: 768px){.sc-z-offcanvas-h{min-width:auto}.canvas-container.sc-z-offcanvas{width:auto;height:auto;min-width:max(var(--z-offcanvas--container-width), 375px);min-height:calc(var(--space-unit) * 40);max-width:max(var(--z-offcanvas--container-width), 375px)}@keyframes grow{from{width:0}to{width:max(var(--z-offcanvas--container-width), 375px)}}.sc-z-offcanvas-h:not([variant=\"overlay\"])[open]{animation-name:grow;animation-duration:0.4s;animation-timing-function:ease-out;width:auto}}";

const ZOffcanvas = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.canvasOpenStatusChanged = index.createEvent(this, "canvasOpenStatusChanged", 7);
    /**
    * Offcanvas variant.
    * Can be one of "overlay", "pushcontent"
    * Default variant: pushcontent
    */
    this.variant = index$1.OffCanvasVariantsEnum.pushcontent;
    /** open component. Default: false */
    this.open = false;
    /** open content transitioning in a specified direction left | right. Default: left */
    this.transitiondirection = index$1.TransitionDirectionEnum.left;
  }
  componentWillLoad() {
    this.handleOpenStatus();
  }
  onOpenChanged() {
    this.handleOpenStatus();
    this.canvasOpenStatusChanged.emit(this.open);
  }
  handleOpenStatus() {
    if (this.open) {
      this.hostElement.style.display = "flex";
    }
    else if (this.variant === index$1.OffCanvasVariantsEnum.pushcontent) {
      this.hostElement.style.display = "none";
      document.body.style.overflowX = "hidden";
    }
  }
  handleAnimationEnd() {
    if (this.hostElement.hasAttribute("open")) {
      this.hostElement.querySelector(`.canvas-content`).focus();
    }
    else if (this.variant === index$1.OffCanvasVariantsEnum.overlay) {
      this.hostElement.style.display = "none";
      document.body.style.overflowX = "initial";
    }
  }
  render() {
    return [
      index.h("div", { class: "canvas-container", onAnimationEnd: () => this.handleAnimationEnd() }, index.h("div", { class: "canvas-content", tabindex: "0" }, index.h("slot", { name: "canvasContent" }))),
      index.h("div", { class: "canvas-background", "data-action": "canvasBackground", onClick: () => this.open = false })
    ];
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "open": ["onOpenChanged"]
  }; }
};
ZOffcanvas.style = stylesCss;

exports.z_app_switcher = ZAppSwitcher;
exports.z_app_topbar = ZAppTopbar;
exports.z_button = ZButton;
exports.z_button_deprecated = ZButtonDeprecated;
exports.z_card = ZCard;
exports.z_carousel = ZCarousel;
exports.z_divider = ZDivider;
exports.z_ghost_loading = ZGhostLoading;
exports.z_icon = ZIcon;
exports.z_link = ZLink;
exports.z_logo = ZLogo;
exports.z_offcanvas = ZOffcanvas;
