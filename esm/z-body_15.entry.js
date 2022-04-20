import { r as registerInstance, h, g as getElement, c as createEvent, H as Host } from './index-fa9e549c.js';
import { c as classnames } from './index-aa3a4feb.js';
import { B as ButtonTypeEnum, a as ButtonVariantEnum, b as ButtonSizeEnum, C as CardVariants, P as PopoverPosition, c as PopoverBorderRadius, d as PopoverShadow, K as KeyboardKeys, S as Size, e as SortDirectionEnum, Z as ZTableRowExpandedType } from './index-a4f73ed9.js';
import { i as icons } from './icons-bceeb196.js';
import { g as getElementTree } from './utils-7032aa6d.js';
import { m as mobileBreakpoint } from './breakpoints-c386984e.js';
import './_commonjsHelpers-8b28c6fa.js';

const ZBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "regular";
  }
  render() {
    return (h("z-typography", { tabIndex: 0, component: this.component || "span", level: `b${this.level}`, variant: this.variant }, h("slot", null)));
  }
};

const stylesCss$d = ":host{display:inline-block;--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:var(--space-unit);--rgb-white:240, 240, 240}button:disabled,::slotted(button:disabled){pointer-events:none}button,::slotted(button),::slotted(a){box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;width:100%;font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;line-height:1;letter-spacing:0.3px;border-width:var(--border-size-medium);border-style:solid;border-radius:var(--border-radius);vertical-align:middle;text-transform:uppercase;text-decoration:none;cursor:pointer;white-space:nowrap;outline:none;fill:currentColor}button.big,:host([size=\"big\"]) ::slotted(button),:host([size=\"big\"]) ::slotted(a){height:44px;min-width:44px}button.small,:host([size=\"small\"]) ::slotted(button),:host([size=\"small\"]) ::slotted(a){height:36px;min-width:36px}button.issmall,:host([issmall]) ::slotted(button),:host([issmall]) ::slotted(a){height:36px;min-width:36px}button.x-small,:host([size=\"x-small\"]) ::slotted(button),:host([size=\"x-small\"]) ::slotted(a){height:32px;min-width:32px}button:not(.square),:host(:not([square])) ::slotted(button),:host(:not([square])) ::slotted(a){min-width:calc(var(--space-unit) * 8);padding:0 calc(var(--space-unit) * 2)}button.square,:host([square]){--z-icon-right-margin:0}button.primary,:host([variant=\"primary\"]) ::slotted(button),:host([variant=\"primary\"]) ::slotted(a){background-color:var(--color-primary01);border-color:var(--color-primary01);color:var(--color-text-inverse)}@media (hover: hover){button.primary:hover,:host([variant=\"primary\"]) ::slotted(button:hover),:host([variant=\"primary\"]) ::slotted(a:hover){background-color:var(--color-hover-primary);border-color:var(--color-hover-primary);color:var(--color-text-inverse)}}button:focus:focus-visible,::slotted(button:focus:focus-visible),::slotted(a:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}button.primary:active,:host([variant=\"primary\"]) ::slotted(button:active),:host([variant=\"primary\"]) ::slotted(a:active){background-color:var(--color-pressed-primary);border-color:var(--color-pressed-primary);color:var(--color-text-inverse);box-shadow:var(--shadow-2)}button.primary:disabled,:host([variant=\"primary\"]) ::slotted(button:disabled){background-color:var(--color-disabled01);border-color:var(--color-disabled01);color:var(--color-disabled02)}button.secondary,:host([variant=\"secondary\"]) ::slotted(button),:host([variant=\"secondary\"]) ::slotted(a){background-color:var(--color-surface01);border-color:var(--color-primary01);color:var(--color-primary01)}@media (hover: hover){button.secondary:hover,:host([variant=\"secondary\"]) ::slotted(button:hover),:host([variant=\"secondary\"]) ::slotted(a:hover){background-color:var(--color-surface01);border-color:var(--color-hover-primary);color:var(--color-hover-primary)}}button.secondary:active,:host([variant=\"secondary\"]) ::slotted(button:active),:host([variant=\"secondary\"]) ::slotted(a:active){background-color:var(--color-surface01);border-color:var(--color-pressed-primary);color:var(--color-pressed-primary);box-shadow:var(--shadow-2)}button.secondary:disabled,:host([variant=\"secondary\"]) ::slotted(button:disabled){background-color:var(--color-surface01);border-color:var(--color-disabled01);color:var(--color-disabled02)}button.tertiary,:host([variant=\"tertiary\"]) ::slotted(button),:host([variant=\"tertiary\"]) ::slotted(a){background-color:transparent;border-color:transparent;color:var(--color-primary01)}button.tertiary.hasContent{padding:0 var(--space-unit)}@media (hover: hover){button.tertiary:hover,:host([variant=\"tertiary\"]) ::slotted(button:hover),:host([variant=\"tertiary\"]) ::slotted(a:hover){background-color:var(--color-primary03);border-color:var(--color-primary03);color:var(--color-hover-primary)}}button.tertiary:focus:focus-visible,:host([variant=\"tertiary\"]) ::slotted(button:focus:focus-visible),:host([variant=\"tertiary\"]) ::slotted(a:focus:focus-visible){background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01)}button.tertiary:active,:host([variant=\"tertiary\"]) ::slotted(button:active),:host([variant=\"tertiary\"]) ::slotted(a:active){background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01);box-shadow:var(--shadow-2)}button.tertiary:disabled,:host([variant=\"tertiary\"]) ::slotted(button:disabled){background-color:transparent;border-color:transparent;color:var(--color-disabled02)}button.dark-bg,:host([variant=\"dark-bg\"]) ::slotted(button),:host([variant=\"dark-bg\"]) ::slotted(a){background-color:rgba(var(--rgb-white), 0.2);border-color:transparent;color:var(--color-text04)}button.dark-bg.hasContent{padding:0 var(--space-unit)}@media (hover: hover){button.dark-bg:hover,:host([variant=\"dark-bg\"]) ::slotted(button:hover),:host([variant=\"dark-bg\"]) ::slotted(a:hover){background-color:rgba(var(--rgb-white), 0.1)}}button.dark-bg:active,:host([variant=\"dark-bg\"]) ::slotted(button:active),:host([variant=\"dark-bg\"]) ::slotted(a:active){background-color:rgba(var(--rgb-white), 0.3)}button.dark-bg:disabled,:host([variant=\"dark-bg\"]) ::slotted(button:disabled){color:var(--color-disabled03);background-color:rgba(var(--rgb-white), 0.05)}";

const ZButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** HTML button disabled attribute. */
    this.disabled = false;
    /** HTML button type attribute. */
    this.type = ButtonTypeEnum.button;
    /** Graphical variant: `primary`, `secondary`, `tertiary`, `dark-bg`. Defaults to `primary`. */
    this.variant = ButtonVariantEnum.primary;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = ButtonSizeEnum.big;
    /** Reduce button size (deprecated).
     *
     * @deprecated Use `size` prop.
     * */
    this.issmall = false;
    /** Spy to render square button. */
    this.square = false;
  }
  render() {
    this.hostElement.style.pointerEvents = this.disabled ? "none" : "auto";
    return (h("slot", { name: "element" }, h("button", { id: this.htmlid, name: this.name, type: this.type, disabled: this.disabled, class: classnames(this.variant, this.size, { issmall: this.issmall }, { square: this.square }) }, this.icon && h("z-icon", { name: this.icon, width: 16, height: 16 }), h("slot", null))));
  }
  get hostElement() { return getElement(this); }
};
ZButton.style = stylesCss$d;

const stylesCss$c = ":host{--aspect-ratio:1.62;--z-card--border-color:var(--gray200);--z-card--color-cover-background:var(--color-surface01);--z-card--text-background:var(--color-surface01);--z-card--text-border-radius:none;--z-card--text-border:none;position:relative;display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}*,::slotted(*){box-sizing:border-box}:host(:not([variant='overlay'])) .cover-container{position:relative;width:100%}.cover-container{padding-bottom:calc(100% / var(--aspect-ratio))}::slotted([slot='cover']),.color-cover{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}.cover-container>z-icon{--z-icon-width:calc(var(--space-unit) * 11);--z-icon-height:var(--z-icon-width);position:absolute;top:calc(50% - calc(var(--z-icon-height) / 2));left:calc(50% - calc(var(--z-icon-width) / 2));fill:var(--color-primary01)}.color-cover{background-color:var(--z-card--color-cover-background)}.content{display:flex;flex-direction:column;padding-top:var(--space-unit)}.color-cover .cover-content{display:flex;flex-direction:column;justify-content:flex-end;height:100%;padding:var(--space-unit)}::slotted([slot='metadata']),::slotted([slot='title']),::slotted([slot='text']){display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}::slotted([slot='title']:not(:last-child)),::slotted([slot='text']:not(:last-child)){margin-bottom:var(--space-unit)}::slotted([slot='text']),::slotted([slot='actions']){margin:0}::slotted([slot='metadata']:not(:last-child)){margin:0 0 calc(var(--space-unit) * 0.25);-webkit-line-clamp:1;text-transform:uppercase}::slotted([slot='title']){margin:0;font-weight:var(--font-sb);-webkit-line-clamp:2}::slotted([slot='text']){-webkit-line-clamp:3}.actions{display:flex;flex-direction:row;align-items:center}::slotted([slot='action']:not(:last-child)){margin-right:calc(var(--space-unit) * 1.5)}:host([clickable]){cursor:pointer}:host([clickable]:focus:focus-visible){outline:none}:host(:not([variant])[clickable]:focus:focus-visible){padding:calc(var(--space-unit) * 0.5);box-shadow:var(--shadow-focus-primary)}:host([variant='text']){background-color:var(--z-card--text-background);border:var(--z-card--text-border);border-radius:var(--z-card--text-border-radius)}:host([showshadow])>.content,:host([variant='border'])>.content,:host([variant='shadow'])>.content{height:100%;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host([variant='text'])>.content{padding:calc(var(--space-unit) * 2) var(--space-unit)}:host([variant='border']) .actions,:host([variant='shadow']) .actions{margin-top:auto}:host([variant='border']){border:var(--border-size-small) solid var(--z-card--border-color)}:host([variant='border'][clickable]:hover)>.content{background:var(--color-background)}:host([variant='border'][clickable]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant='border'][clickable]:active){border-color:transparent}:host([variant='shadow']),:host([showshadow]){box-shadow:var(--shadow-2)}:host([variant='shadow'][clickable]:hover),:host([clickable][showshadow]:hover){box-shadow:var(--shadow-4)}:host([variant='shadow'][clickable]:focus:focus-visible),:host([clickable][showshadow]:focus:focus-visible){box-shadow:var(--shadow-4)}:host([variant='shadow'][clickable]:active),:host([clickable][showshadow]:active){box-shadow:none}:host([variant='overlay']) .content{position:absolute;top:0;right:0;bottom:0;left:0;justify-content:flex-end;padding:var(--space-unit);background-image:linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));color:var(--color-text-inverse);fill:var(--color-text-inverse)}";

const ZCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cardClicked = createEvent(this, "cardClicked", 7);
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
      h("div", { class: "cover-container" }, h("div", { class: "color-cover" }, h("div", { class: "cover-content" }, h("slot", { name: "metadata" }), h("slot", { name: "title" })))),
      h("div", { class: "content" }, h("slot", { name: "text" }), h("div", { class: "actions" }, h("slot", { name: "action" })))
    ];
  }
  /**
  * Template for the content div.
  */
  renderContentDiv() {
    return (h("div", { class: "content" }, h("slot", { name: "metadata" }), h("slot", { name: "title" }), h("slot", { name: "text" }), h("div", { class: "actions" }, h("slot", { name: "action" }))));
  }
  render() {
    if (this.variant === CardVariants.text) {
      return this.renderContentDiv();
    }
    if (this.variant === CardVariants.overlay || this.hasCoverImage) {
      return [
        h("div", { class: "cover-container" }, this.hasCoverImage && [
          h("slot", { name: "cover" }),
          (this.variant !== CardVariants.overlay) && this.coverIcon && h("z-icon", { name: this.coverIcon })
        ], !this.hasCoverImage && h("div", { class: "color-cover" })),
        this.renderContentDiv()
      ];
    }
    return this.renderColorCoverCard();
  }
  get host() { return getElement(this); }
};
ZCard.style = stylesCss$c;

const stylesCss$b = ":host{line-height:0;vertical-align:middle;margin-right:var(--z-icon-right-margin, 0);margin-left:var(--z-icon-left-margin, 0)}:host svg:not([width]){width:var(--z-icon-width, 18px)}:host svg:not([height]){height:var(--z-icon-height, 18px)}";

const ZIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  selectPathOrPolygon(iconName) {
    if (iconName && iconName.startsWith("M")) {
      return h("path", { d: icons[this.name] });
    }
    else {
      return h("polygon", { points: icons[this.name] });
    }
  }
  render() {
    return (h("svg", { viewBox: "0 0 1000 1000", width: this.width, height: this.height, id: this.iconid, fill: this.fill ? `var(--${this.fill})` : "" }, this.selectPathOrPolygon(icons[this.name])));
  }
};
ZIcon.style = stylesCss$b;

const stylesCss$a = ".sc-z-popover-h{font-family:var(--dashboard-font);font-weight:var(--font-rg);position:relative;display:inline-block;--shadow-arrow-color:rgba(66, 69, 72, 0.2);--shadow-arrow-below-color:rgba(66, 69, 72, 0.1)}.popover-content-container.sc-z-popover{box-sizing:border-box;visibility:hidden;position:absolute;min-width:64px;min-height:32px;z-index:999}.popover-content-container.visible.sc-z-popover{visibility:visible}.popover-content-container.border-radius-none.sc-z-popover{border-radius:0}.popover-content-container.border-radius-small.sc-z-popover{border-radius:var(--border-radius-small)}.popover-content-container.border-radius-medium.sc-z-popover{border-radius:var(--border-radius)}.popover-content-container.shadow-1.sc-z-popover{box-shadow:var(--shadow-1)}.popover-content-container.shadow-2.sc-z-popover{box-shadow:var(--shadow-2)}.popover-content-container.shadow-3.sc-z-popover{box-shadow:var(--shadow-3)}.popover-content-container.shadow-4.sc-z-popover{box-shadow:var(--shadow-4)}.popover-content-container.shadow-6.sc-z-popover{box-shadow:var(--shadow-6)}.popover-content-container.shadow-8.sc-z-popover{box-shadow:var(--shadow-8)}.popover-content-container.shadow-12.sc-z-popover{box-shadow:var(--shadow-12)}.popover-content-container.shadow-16.sc-z-popover{box-shadow:var(--shadow-16)}.popover-content-container.shadow-24.sc-z-popover{box-shadow:var(--shadow-24)}.popover-content-container.after-down.sc-z-popover{top:0;left:calc(100% + var(--space-unit))}.popover-content-container.after-center.sc-z-popover{top:50%;left:calc(100% + var(--space-unit));transform:translateY(-50%)}.popover-content-container.after-up.sc-z-popover{bottom:0;left:calc(100% + var(--space-unit))}.popover-content-container.below-right.sc-z-popover{left:0;top:calc(100% + var(--space-unit))}.popover-content-container.below-center.sc-z-popover{left:50%;top:calc(100% + var(--space-unit));transform:translateX(-50%)}.popover-content-container.below-left.sc-z-popover{right:0;top:calc(100% + var(--space-unit))}.popover-content-container.before-down.sc-z-popover{top:0;right:calc(100% + var(--space-unit))}.popover-content-container.before-center.sc-z-popover{top:50%;right:calc(100% + var(--space-unit));transform:translateY(-50%)}.popover-content-container.before-up.sc-z-popover{bottom:0;right:calc(100% + var(--space-unit))}.popover-content-container.above-right.sc-z-popover{left:0;bottom:calc(100% + var(--space-unit))}.popover-content-container.above-center.sc-z-popover{left:50%;bottom:calc(100% + var(--space-unit));transform:translateX(-50%)}.popover-content-container.above-left.sc-z-popover{right:0;bottom:calc(100% + var(--space-unit))}.popover-content-container.sc-z-popover:before{display:none;position:absolute;content:\"\";width:8px;height:8px;z-index:-1;background-color:inherit;transform:rotate(45deg)}.popover-content-container.after-down.sc-z-popover:before{top:12px;left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.after-center.sc-z-popover:before{top:calc(50% - 4px);left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.after-up.sc-z-popover:before{bottom:12px;left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.below-right.sc-z-popover:before{left:12px;top:-4px;box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.below-center.sc-z-popover:before{left:calc(50% - 4px);top:-4px;box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.below-left.sc-z-popover:before{right:12px;top:-4px;box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.before-down.sc-z-popover:before{top:12px;right:-4px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.before-center.sc-z-popover:before{top:calc(50% - 4px);right:-4px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.before-up.sc-z-popover:before{bottom:12px;right:-4px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-right.sc-z-popover:before{left:12px;bottom:-4px;box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-center.sc-z-popover:before{left:calc(50% - 4px);bottom:-4px;box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-left.sc-z-popover:before{right:12px;bottom:-4px;box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.show-arrow.sc-z-popover:before{display:block}";

const ZPopover = class {
  /**
   * Constructor.
   */
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** [optional] Popover position */
    this.position = PopoverPosition["after-up"];
    /** [optional] Background color token for popover */
    this.backgroundColor = "color-white";
    /** [optional] Border radius token for popover */
    this.borderRadius = PopoverBorderRadius.small;
    /** [optional] Box shadow token for popover */
    this.boxShadow = PopoverShadow["shadow-1"];
    /** [optional] Show or hide arrow */
    this.showArrow = false;
    /** [optional] Sets padding for Popover container */
    this.padding = "8px";
    this.isVisible = false;
    this.popoverPosition = this.position;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  openPopover() {
    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const rect = this.popoverElem.getBoundingClientRect();
    const l = rect.left;
    const r = rect.right;
    const t = rect.top;
    const b = rect.bottom;
    let firstSide = this.position.split("-")[0];
    let secondSide = this.position.split("-")[1];
    // If top is outside viewport
    if (t < 0) {
      if (this.position.startsWith("above")) {
        firstSide = "below";
      }
      else {
        secondSide = "down";
      }
    }
    // If bottom is outside viewport
    if (b > height) {
      if (this.position.startsWith("below")) {
        firstSide = "above";
      }
      else {
        secondSide = "up";
      }
    }
    // If right is outside viewport
    if (r > width) {
      if (this.position.startsWith("above") ||
        this.position.startsWith("below")) {
        secondSide = "left";
      }
      else {
        firstSide = "before";
      }
    }
    // If left is outside viewport
    if (l < 0) {
      if (this.position.startsWith("above") ||
        this.position.startsWith("below")) {
        secondSide = "right";
      }
      else {
        firstSide = "after";
      }
    }
    this.popoverPosition = PopoverPosition[`${firstSide}-${secondSide}`];
    this.isVisible = true;
  }
  closePopover() {
    this.popoverPosition = this.position;
    this.isVisible = false;
  }
  closePopoverWithKeyboard(e) {
    if (e.key === KeyboardKeys.ESC) {
      this.closePopover();
    }
  }
  handleClick(event) {
    this.isVisible ? this.closePopover() : this.openPopover();
    event.stopPropagation();
  }
  handleKeyDown(event) {
    if (event.code === KeyboardKeys.ENTER) {
      this.isVisible ? this.closePopover() : this.openPopover();
    }
  }
  handleOutsideClick(e) {
    const tree = getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
    if (!parent) {
      this.closePopover();
    }
  }
  render() {
    return (h(Host, { onKeyDown: this.handleKeyDown }, h("div", { tabindex: "0", onClick: (event) => this.handleClick(event), onKeyDown: (event) => {
        if (event.key === KeyboardKeys.ENTER) {
          this.handleClick(event);
        }
      } }, h("slot", { name: "trigger" })), h("div", { ref: (e) => (this.popoverElem = e), class: classnames("popover-content-container", this.popoverPosition, `border-radius-${this.borderRadius}`, this.boxShadow, { "show-arrow": this.showArrow }, { visible: this.isVisible }), style: {
        backgroundColor: `var(--${this.backgroundColor})`,
        padding: this.padding,
      } }, h("slot", { name: "popover" }))));
  }
};
ZPopover.style = stylesCss$a;

const stylesCss$9 = "z-table{overflow-x:auto;display:block;width:100%;font-family:var(--dashboard-font);font-weight:var(--font-rg);background-color:var(--color-white)}z-table>div.table{display:table;width:100%;border-collapse:separate}z-table>div.table-bordered>z-table-body>z-table-row>z-table-cell:not(:last-child),z-table>div.table-bordered>z-table-head>z-table-header-row>z-table-header:not(:last-child){border-right:var(--border-size-small) solid var(--bg-grey-200)}z-table>div>z-table-body>z-table-row[expandable]>z-table-cell:first-child,z-table>div>z-table-head>z-table-header-row[expandable]>z-table-header:first-child{border-right:none}z-table>div>z-table-body>z-table-row[expanded]>z-table-cell{background-color:var(--gray50)}z-table>div>z-table-body>z-table-row[expanded]+z-table-expanded-row{border-bottom:1px solid var(--gray200)}z-table>div.table-column-sticky>z-table-body>z-table-row>z-table-cell:first-child,z-table>div.table-column-sticky>z-table-head>z-table-header-row>z-table-header:first-child{position:sticky;left:0;box-shadow:1px 0 4px -1px rgba(66, 69, 72, 0.4);z-index:1}z-table>div.table-header-sticky>z-table-head>z-table-header-row>z-table-header{position:sticky;top:0;box-shadow:0 2px 3px -3px rgba(66, 69, 72, 0.4)}z-table>div.table-header-sticky>z-table-head>z-table-header-row>z-table-header{z-index:2}z-table>div.table-header-sticky>z-table-head>z-table-header-row>z-table-header:first-child,z-table>div.table-column-sticky>z-table-head>z-table-header-row>z-table-header:first-child{z-index:5}z-table-body{width:auto;background-color:var(--color-white)}z-table-empty-box{display:flex;flex-direction:column;flex-grow:1;border-bottom:var(--border-size-small) solid var(--bg-grey-200)}z-table-empty-box.bordered{border-left:var(--border-size-small) solid var(--bg-grey-200)}.error-message{margin-top:calc(var(--space-unit) * 2)}.table-content{display:flex;flex-direction:row;width:100%}.error-content{font-family:var(--dashboard-font);padding:calc(var(--space-unit) * 3);display:flex}.error-content>img{width:244px;height:188px;margin-right:calc(var(--space-unit) * 3)}@media only screen and (max-width: 768px){z-table>div.table-empty{display:none}.error-content{display:flex;flex-direction:column}.error-content>img{width:auto;height:auto}.text{padding:calc(var(--space-unit) * 3) 0}}";

const ZTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.callToAction = createEvent(this, "callToAction", 7);
    this.callToActionTwo = createEvent(this, "callToActionTwo", 7);
    /** Error message */
    this.errorMessage = "Siamo spiacenti, non siamo riusciti a caricare il contenuto richiesto";
    /** Sets table with border */
    this.bordered = false;
    /** Sets first column sticky */
    this.columnSticky = false;
    /** Sets empty table */
    this.empty = false;
    /** Set error status */
    this.error = false;
    /** Sets header sticky */
    this.headerSticky = false;
    /** Set message */
    this.message = "Siamo spiacenti, al momento non sono presenti dati da visualizzare";
    /** Set subtitle */
    this.subtitle = "";
  }
  handleResize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }
  handleOrientationChange() {
    this.isMobile = screen.width <= mobileBreakpoint;
  }
  componentWillLoad() {
    var _a;
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    const tableBody = this.host.querySelector('[slot="table-body"]');
    this.hasTableBody = !!((_a = tableBody === null || tableBody === void 0 ? void 0 : tableBody.children) === null || _a === void 0 ? void 0 : _a.length);
    if (!!tableBody && !this.hasTableBody) {
      tableBody.remove();
    }
  }
  componentWillRender() {
    this.host.setAttribute("role", "table");
  }
  renderError(tableClass) {
    const minHeight = this.lines ? `calc(40px * ${this.lines})` : "auto";
    return (h(Host, null, h("div", { class: tableClass }, h("slot", { name: "table-header" })), h("z-table-error", null, h("div", { class: "error-content", style: { minHeight } }, h("slot", { name: "error-image" }), h("div", { class: "text" }, h("z-body", { class: "error-message", level: 3, variant: "semibold" }, this.errorMessage), h("slot", { name: "error-action" }))))));
  }
  renderEmpty(tableClass) {
    const buttonSize = this.isMobile
      ? ButtonSizeEnum.small
      : ButtonSizeEnum.big;
    const tableContentClass = `${!!this.hasTableBody ? "table-content" : ""}`;
    if (this.hasTableBody) {
      return (h(Host, null, h("div", { class: tableClass }, h("slot", { name: "table-header" }), h("div", { class: tableContentClass }, h("slot", { name: "table-body" }), h("z-table-empty-box", { class: this.bordered && "bordered", message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (h("z-button", { slot: "cta1", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (h("z-button", { slot: "cta2", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))))));
    }
    return (h(Host, null, h("div", { class: tableClass }, h("slot", { name: "table-header" })), h("z-table-empty-box", { class: this.bordered && "bordered", message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (h("z-button", { slot: "cta1", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (h("z-button", { slot: "cta2", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))));
  }
  render() {
    const tableClass = `table ${this.empty ? "table-empty" : ""} ${this.bordered ? "table-bordered" : ""}
    ${this.columnSticky ? "table-column-sticky" : ""}
    ${this.headerSticky ? "table-header-sticky" : ""}`;
    if (this.error) {
      return this.renderError(tableClass);
    }
    if (this.empty) {
      return this.renderEmpty(tableClass);
    }
    return (h(Host, null, h("div", { class: tableClass }, h("slot", null)), h("slot", { name: "sticky-footer" })));
  }
  static get assetsDirs() { return ["assets"]; }
  get host() { return getElement(this); }
};
ZTable.style = stylesCss$9;

const stylesCss$8 = ".sc-z-table-body-h{display:table-row-group;font-family:var(--dashboard-font);font-weight:var(--font-rg)}.sc-z-table-body-h>z-table-row[expanded].sc-z-table-body+z-table-expanded-row.sc-z-table-body{display:table-row}";

const ZTableBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
    Array.from(this.host.children).forEach((child, index) => child.setAttribute("aria-rowindex", `${index}`));
  }
  render() {
    return h("slot", null);
  }
  get host() { return getElement(this); }
};
ZTableBody.style = stylesCss$8;

const stylesCss$7 = ":host{display:table-cell;background-color:var(--color-white);border-bottom:var(--border-size-small) solid var(--bg-grey-200);font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>.button-container{display:none}:host:hover>.button-container{display:initial}.button-container{position:absolute;right:8px;top:8px;z-index:5}.button-content{position:relative}.contextual-menu-container{display:none;position:absolute;top:calc(100% - var(--space-unit));right:0}.button-container.visible,.contextual-menu-container.visible{display:initial}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}";

const ZTableCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = Size.medium;
    this.isMenuOpened = false;
  }
  handleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  componentWillRender() {
    this.host.setAttribute("role", "cell");
  }
  render() {
    return (h(Host, null, this.showButton && (h("div", { class: classnames("button-container", {
        visible: this.isMenuOpened,
      }) }, h("div", { class: "button-content" }, h("z-button", { icon: "contextual-menu", variant: ButtonVariantEnum.tertiary, size: ButtonSizeEnum["x-small"], onClick: () => this.handleMenu(), square: true }), h("div", { class: classnames("contextual-menu-container", {
        visible: this.isMenuOpened,
      }) }, h("slot", { name: "contextual-menu" }))))), h("slot", null)));
  }
  get host() { return getElement(this); }
};
ZTableCell.style = stylesCss$7;

const stylesCss$6 = ".sc-z-table-empty-box-h{display:block;padding:calc(var(--space-unit)) calc(var(--space-unit) * 3)\n    calc(var(--space-unit) * 3) calc(var(--space-unit) * 3);background-color:var(--bg-white)}.sc-z-table-empty-box-s>*{margin-top:var(--space-unit)}.cta.sc-z-table-empty-box{display:flex;flex-direction:row;margin-top:calc(var(--space-unit) / 2)}.cta.has2Cta.sc-z-table-empty-box{flex-direction:column}@media only screen and (min-width: 768px){.sc-z-table-empty-box-h{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 7)\n      calc(var(--space-unit) * 3) calc(var(--space-unit) * 7)}.sc-z-table-empty-box-s>*{margin-right:calc(var(--space-unit) * 2)}.cta.sc-z-table-empty-box{margin-top:var(--space-unit)}.cta.has2Cta.sc-z-table-empty-box{flex-direction:row}}";

const ZTableEmptyBox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Sets main title message*/
    this.message = "Siamo spiacenti, al momento non sono presenti dati da visualizzare.";
    /** Sets message */
    this.subtitle = "";
  }
  componentWillLoad() {
    this.hasCta1Slot = !!this.hostElement.querySelector('[slot="cta1"]');
    this.hasCta2Slot = !!this.hostElement.querySelector('[slot="cta2"]');
  }
  render() {
    return (h(Host, null, h("z-body", { level: 3, variant: "semibold" }, this.message), h("br", null), !!this.subtitle && (h("z-body", { level: 4, variant: "regular" }, this.subtitle)), (!!this.hasCta1Slot || !!this.hasCta2Slot) && (h("div", { class: classnames("cta", {
        has2Cta: !!this.hasCta1Slot && !!this.hasCta2Slot
      }) }, h("slot", { name: "cta1" }), h("slot", { name: "cta2" })))));
  }
  get hostElement() { return getElement(this); }
};
ZTableEmptyBox.style = stylesCss$6;

const stylesCss$5 = ".sc-z-table-head-h{display:table-header-group;font-family:var(--dashboard-font);font-weight:var(--font-rg)}";

const ZTableHead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillRender() {
    this.host.setAttribute("role", "rowgroup");
  }
  render() {
    return h("slot", null);
  }
  get host() { return getElement(this); }
};
ZTableHead.style = stylesCss$5;

const stylesCss$4 = ":host{display:table-cell;background-color:var(--gray50);border-bottom:var(--border-size-medium) solid var(--gray200);font-family:var(--dashboard-font);font-weight:var(--font-sb);text-align:start;position:relative}.container{display:flex;align-items:flex-end}:host(.sortable){cursor:pointer}:host([padding=\"x-small\"]){padding:calc(var(--space-unit) * 0.5)}:host([padding=\"small\"]){padding:calc(var(--space-unit))}:host([padding=\"medium\"]){padding:calc(var(--space-unit) * 2)}:host([padding=\"large\"]){padding:calc(var(--space-unit) * 2.5)}:host([padding=\"special\"]){padding:0}.arrow{opacity:1;padding-left:var(--space-unit)}.popover-container{position:absolute;top:var(--space-unit);right:var(--space-unit);display:none}.popover-container.visible{display:block}:host(:hover) .popover-container{display:block}";

const ZTableHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sort = createEvent(this, "sort", 7);
    /** Set padding size of cell, if special 0px padding will be set */
    this.padding = Size.medium;
    /** [Optional] Default sort order */
    this.defaultSortDirection = SortDirectionEnum.asc;
    this.sortDirection = SortDirectionEnum.none;
    this.isMenuOpened = false;
    this.emitOnSort = this.emitOnSort.bind(this);
  }
  emitOnSort() {
    this.sort.emit({
      columnId: this.columnId,
      sortDirection: this.sortDirection,
    });
  }
  handleSort() {
    if (!this.sortable) {
      return;
    }
    this.sortDirection = (() => {
      switch (this.sortDirection) {
        case SortDirectionEnum.asc:
          return SortDirectionEnum.desc;
        case SortDirectionEnum.desc:
          return SortDirectionEnum.asc;
        case SortDirectionEnum.none:
          return this.defaultSortDirection;
        default:
          return SortDirectionEnum.none;
      }
    })();
    this.emitOnSort();
  }
  handleMenuClick() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  handleOutsideClick(e) {
    const tree = getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
    if (!parent) {
      this.isMenuOpened = false;
    }
  }
  handleClickHeaders(e) {
    const { target } = e;
    const parent = getElementTree(target).find((elem) => elem.nodeName.toLowerCase() === "z-table-header");
    if (!this.sortable || !parent) {
      return;
    }
    const parentColumnId = parent.attributes.getNamedItem("column-id").value;
    const isSortable = target.parentNode.sortable || target.sortable;
    if (parentColumnId !== this.columnId && isSortable) {
      this.sortDirection = SortDirectionEnum.none;
    }
  }
  componentWillRender() {
    this.host.setAttribute("role", "columnheader");
  }
  render() {
    return (h(Host, { class: classnames({
        sortable: this.sortable,
      }), onClick: () => this.handleSort() }, h("div", { class: classnames("container") }, h("slot", null), this.sortable && this.sortDirection !== SortDirectionEnum.none && (h("z-icon", { name: this.sortDirection === SortDirectionEnum.asc
        ? "arrow-up"
        : "arrow-down", class: "arrow" }))), this.showButton && (h("div", { class: classnames("popover-container", {
        visible: this.isMenuOpened,
      }) }, h("z-popover", { position: PopoverPosition["below-center"], "background-color": "gray200" }, h("z-button", { icon: "contextual-menu", variant: ButtonVariantEnum["tertiary"], size: ButtonSizeEnum["x-small"], square: true, slot: "trigger", onClick: () => this.handleMenuClick() }), h("div", { slot: "popover" }, h("slot", { name: "contextual-menu" })))))));
  }
  get host() { return getElement(this); }
};
ZTableHeader.style = stylesCss$4;

const stylesCss$3 = "z-table-header-row{display:table-row}z-table-header-row[expandable]>z-table-header:first-child{width:40px;user-select:none;box-sizing:border-box}z-table-header-row[expandable]>z-table-header:nth-child(2){padding-left:8px}";

const ZTableHeaderRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  _renderExpandHeader() {
    return h("z-table-header", null);
  }
  render() {
    return (h(Host, { role: "row" }, this.expandable && this._renderExpandHeader(), h("slot", null)));
  }
};
ZTableHeaderRow.style = stylesCss$3;

const stylesCss$2 = "z-table-row{display:table-row;font-family:var(--font-family-sans)}z-table-row[expanded-type=\"expandable\"]:hover{cursor:pointer}z-table-row[expanded-type=\"expandable\"]>z-table-cell:first-child,z-table-row[expanded-type=\"padding\"]>z-table-cell:first-child{--z-icon-width:16px;--z-icon-height:16px;width:24px;padding-left:16px;padding-right:0px;box-sizing:border-box;text-align:center;fill:var(--gray800);user-select:none}.z-icon-placeholder{width:24px;padding-right:0px}z-table-row[expanded-type=\"expandable\"]>z-table-cell:nth-child(2),z-table-row[expanded-type=\"padding\"]>z-table-cell:nth-child(2){padding-left:8px}z-table-row[expanded-type]:hover>z-table-cell:first-child{fill:var(--myz-blue-dark)}z-table-row[expanded]>z-table-cell{background-color:var(--gray50)}z-table-row[expanded]+z-table-expanded-row{display:table-row}z-table-row[expanded]>z-table-cell{border-bottom:none}";

const ZTableRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expand = createEvent(this, "expand", 7);
    this.expandedType = ZTableRowExpandedType.none;
    this.expanded = false;
  }
  emitOnExpand() {
    this.expand.emit({ expanded: this.expanded });
  }
  handleExpand() {
    this.expanded = !this.expanded;
    this.emitOnExpand();
  }
  renderExpandButton() {
    if (this.expandedType == ZTableRowExpandedType.expandable) {
      return (h("z-table-cell", { style: { borderRight: "none" } }, h("z-icon", { name: this.expanded ? "minus-circled" : "plus-circled" })));
    }
    return (h("z-table-cell", { style: { borderRight: "none" } }, h("div", { class: "z-icon-placeholder" })));
  }
  render() {
    return (h(Host, { role: "row", expanded: this.expanded, onClick: (event) => {
        const contextualMenuClick = event.target.nodeName === 'Z-CONTEXTUAL-MENU';
        const isExpandable = this.expandedType === ZTableRowExpandedType.expandable;
        if (isExpandable && !contextualMenuClick) {
          this.handleExpand();
        }
      } }, this.expandedType !== ZTableRowExpandedType.none &&
      this.renderExpandButton(), h("slot", null)));
  }
};
ZTableRow.style = stylesCss$2;

const stylesCss$1 = ".sc-z-table-sticky-footer-h{display:block;position:sticky;left:0;padding:var(--basex2);background-color:var(--bg-white);border-style:solid;border-color:var(--gray200);border-width:var(--border-size-small) 0 var(--border-base);font-weight:var(--font-rg)}";

const ZTableStickyFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("slot", null));
  }
};
ZTableStickyFooter.style = stylesCss$1;

const stylesCss = ":host>*{font-family:var(--dashboard-font);margin:0}:host(.regular)>*{font-weight:var(--font-rg)}:host(.semibold)>*{font-weight:600}:host(.light)>*{font-weight:300}:host(.h1)>*{font-size:32px;line-height:40px}:host(.h2)>*{font-size:28px;line-height:36px}:host(.h3)>*{font-size:24px;line-height:32px}:host(.h4)>*{font-size:20px;line-height:28px}:host(.b1)>*{font-size:20px;line-height:28px}:host(.b2)>*{font-size:18px;line-height:28px}:host(.b3)>*{font-size:16px;line-height:24px}:host(.b4)>*{font-size:14px;line-height:20px}:host(.b5)>*{font-size:12px;line-height:16px}:host(:focus-visible){outline:none}";

const ZTypography = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "regular";
  }
  render() {
    const el = document.createElement(this.component || "span");
    el.innerHTML = `<slot />`;
    this.hostElement.shadowRoot.appendChild(el);
    return (h(Host, { class: {
        [this.level]: Boolean(this.level),
        regular: this.variant === "regular",
        semibold: this.variant === "semibold",
        light: this.variant === "light"
      } }));
  }
  get hostElement() { return getElement(this); }
};
ZTypography.style = stylesCss;

export { ZBody as z_body, ZButton as z_button, ZCard as z_card, ZIcon as z_icon, ZPopover as z_popover, ZTable as z_table, ZTableBody as z_table_body, ZTableCell as z_table_cell, ZTableEmptyBox as z_table_empty_box, ZTableHead as z_table_head, ZTableHeader as z_table_header, ZTableHeaderRow as z_table_header_row, ZTableRow as z_table_row, ZTableStickyFooter as z_table_sticky_footer, ZTypography as z_typography };
