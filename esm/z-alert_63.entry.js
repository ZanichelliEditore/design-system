import { r as registerInstance, h, c as createEvent, g as getElement, H as Host } from './index-6eb9a735.js';
import { T as ThemeVariant, A as AvatarSize, B as ButtonTypeEnum, a as ButtonVariantEnum, b as ButtonSizeEnum, C as CardVariants, I as InputTypeEnum, k as keybordKeyCodeEnum, D as DividerSize, c as DividerOrientation, L as ListSize, E as ExpandableListButtonAlign, d as ListDividerType, e as ExpandableListStyle, f as LicenseTypeEnum, g as AlertTypesEnum, N as NotificationType, P as PopoverPosition, h as PopoverBorderRadius, i as PopoverShadow, K as KeyboardKeys, j as TableHeaderSize, S as SortingOrientation, l as InputStatusEnum, m as StatusTagStatus, n as TooltipPosition } from './index-b187981e.js';
import { m as mobileBreakpoint, t as tabletBreakpoint } from './breakpoints-c386984e.js';
import { c as createCommonjsModule, h as hammer } from './hammer-c807d0b5.js';
import { h as handleKeyboardSubmit, r as randomId, g as getElementTree, a as getClickedElement } from './utils-c65f1288.js';

const stylesCss$Z = ":host{display:block;font-family:var(--font-family-sans);font-weight:var(--font-rg);font-size:14px;line-height:calc(var(--space-unit) * 2);color:var(--color-surface05);box-sizing:border-box}:host>div{padding:calc(var(--space-unit) * 2)}:host>.success{fill:var(--color-success01);background:var(--color-success-inverse)}:host>.warning{fill:var(--color-warning01);background:var(--color-warning-inverse)}:host>.error{fill:var(--color-error01);background:var(--color-error-inverse)}";

const ZAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: this.type }, h("slot", null)));
  }
};
ZAlert.style = stylesCss$Z;

const stylesCss$Y = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}button{display:flex;justify-content:center;align-content:center;background-color:transparent;border:none;padding:0}button>z-icon{color:var(--bg-white);fill:currentColor}button>z-icon.light{color:var(--bg-grey-900);fill:currentColor}";

const ZAppSwitcher = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.appButtonClick = createEvent(this, "appButtonClick", 7);
    /** theme variant, default 'dark' */
    this.theme = ThemeVariant.dark;
    this.isopen = false;
    this.emitAppButtonClick = this.emitAppButtonClick.bind(this);
  }
  emitAppButtonClick() {
    this.isopen = !this.isopen;
    this.appButtonClick.emit({ isopen: this.isopen });
  }
  render() {
    return (h("button", { title: "app-switcher", onClick: () => this.emitAppButtonClick() }, h("z-icon", { name: "app-switcher", class: this.theme })));
  }
};
ZAppSwitcher.style = stylesCss$Y;

const stylesCss$X = ":host{display:block;position:sticky;top:0;z-index:99;font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>div{background:var(--bg-grey-900);border-radius:var(--border-radius-min);display:grid;grid-template-columns:repeat(2, 1fr);justify-content:space-between;align-items:center;padding:calc(var(--space-unit) * .5);}:host>div.light{background:var(--bg-white)}:host>div.light #hashtag{color:var(--bg-grey-900)}.left{grid-column-start:1;grid-column-end:2;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;align-content:center}.left>#hashtag{display:none}.right{grid-column-start:2;grid-column-end:3;display:flex;align-items:center;justify-content:flex-end}.right.hide-actions>slot[name=\"actions\"]{display:none}.right>::slotted(z-link){padding:calc(var(--space-unit) * .5)}.right>::slotted(z-app-switcher){padding:6px}@media only screen and (min-width: 768px){:host>div{grid-template-columns:repeat(2, auto)}.left>#hashtag{display:initial;color:var(--bg-white);text-transform:uppercase;padding:var(--space-unit) calc(var(--space-unit) * 2)}.left>#hashtag::before{content:\"#\"}.right{grid-column-gap:var(--space-unit)}.right>::slotted(z-app-switcher){padding:6px calc(var(--space-unit) * 2) 6px var(--space-unit)}}";

const ZAppTopbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** theme variant, default 'dark' */
    this.theme = ThemeVariant.dark;
  }
  handleResize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    this.toggleLinkLabels();
  }
  handleOrientationChange() {
    this.isMobile = screen.width <= mobileBreakpoint;
    this.toggleLinkLabels();
  }
  componentWillLoad() {
    this.zLinksValues = Array.from(this.hostElement.children)
      .filter((child) => child.nodeName === "Z-LINK")
      .map((link) => link.childNodes[0].nodeValue);
    this.isMobile = window.screen.width <= mobileBreakpoint || window.innerWidth <= mobileBreakpoint;
    this.toggleLinkLabels();
  }
  toggleLinkLabels() {
    if (this.hostElement) {
      const zLinks = Array.from(this.hostElement.children).filter((child) => child.nodeName === "Z-LINK");
      if (this.isMobile) {
        zLinks.forEach((link) => {
          link.childNodes[0].nodeValue = "";
        });
      }
      else {
        zLinks.forEach((link, i) => {
          link.childNodes[0].nodeValue = this.zLinksValues[i];
        });
      }
    }
  }
  render() {
    return (h("div", { class: this.theme }, h("div", { class: "left" }, h("slot", { name: "logo" }), this.hashtag && h("span", { id: "hashtag" }, this.hashtag.replace(/\s/g, ''))), h("div", { class: `right ${this.logged && this.isMobile && "hide-actions"}` }, h("slot", { name: "actions" }), h("slot", { name: "login" }), h("slot", { name: "app-switcher" }))));
  }
  get hostElement() { return getElement(this); }
};
ZAppTopbar.style = stylesCss$X;

const stylesCss$W = ":host{font-family:var(--font-family-sans);background-color:var(--bg-grey-700);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;text-transform:uppercase}:host(.small),:host(.small)>img{height:calc(var(--space-unit) * 3);width:calc(var(--space-unit) * 3)}:host(.medium),:host(.medium)>img{height:calc(var(--space-unit) * 4);width:calc(var(--space-unit) * 4)}:host(.large),:host(.large)>img{height:calc(var(--space-unit) * 5);width:calc(var(--space-unit) * 5)}:host>img{object-fit:cover}";

const ZAvatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** [optional] Avatar size */
    this.size = AvatarSize.medium;
    /** [optional] Avatar text color */
    this.textColor = "text-white";
    /** [optional] Avatar background color */
    this.backgroundColor = "bg-grey-700";
    if (!this.text && !this.image) {
      console.warn("z-avatar must contain at least one prop between text and image");
    }
  }
  getTextSize() {
    if (this.size === AvatarSize.small) {
      return "5";
    }
    else if (this.size === AvatarSize.medium) {
      return "4";
    }
    else if (this.size === AvatarSize.large) {
      return "2";
    }
  }
  render() {
    return (h(Host, { class: { [this.size]: true, [`body-${this.getTextSize()}-sb`]: true }, style: {
        color: `var(--${this.textColor})`,
        backgroundColor: `var(--${this.backgroundColor})`,
      } }, this.text && !this.image && h("span", null, this.text.substring(0, 2)), this.image && (h("img", { src: this.image, onError: () => (this.image = "") }))));
  }
};
ZAvatar.style = stylesCss$W;

const ZBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "regular";
  }
  render() {
    return (h("z-typography", { component: this.component || "span", level: `b${this.level}`, variant: this.variant }, h("slot", null)));
  }
};

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

const stylesCss$V = ":host{display:inline-block;--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:var(--space-unit)}button:disabled,::slotted(button:disabled){pointer-events:none}button,::slotted(button),::slotted(a){box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;width:100%;font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;line-height:1;letter-spacing:0.3px;border-width:var(--border-size-medium);border-style:solid;border-radius:var(--border-radius);vertical-align:middle;text-transform:uppercase;text-decoration:none;cursor:pointer;white-space:nowrap;outline:none;fill:currentColor}button.big,:host([size=\"big\"]) ::slotted(button),:host([size=\"big\"]) ::slotted(a){height:44px;min-width:44px}button.small,:host([size=\"small\"]) ::slotted(button),:host([size=\"small\"]) ::slotted(a){height:36px;min-width:36px}button.issmall,:host([issmall]) ::slotted(button),:host([issmall]) ::slotted(a){height:36px;min-width:36px}button.x-small,:host([size=\"x-small\"]) ::slotted(button),:host([size=\"x-small\"]) ::slotted(a){height:32px;min-width:32px}button:not(.square),:host(:not([square])) ::slotted(button),:host(:not([square])) ::slotted(a){min-width:calc(var(--space-unit) * 8);padding:0 calc(var(--space-unit) * 2)}button.square,:host([square]){--z-icon-right-margin:0}button.primary,:host([variant=\"primary\"]) ::slotted(button),:host([variant=\"primary\"]) ::slotted(a){background-color:var(--color-primary01);border-color:var(--color-primary01);color:var(--color-text-inverse)}@media (hover: hover){button.primary:hover,:host([variant=\"primary\"]) ::slotted(button:hover),:host([variant=\"primary\"]) ::slotted(a:hover){background-color:var(--color-hover-primary);border-color:var(--color-hover-primary);color:var(--color-text-inverse)}}button:focus:focus-visible,::slotted(button:focus:focus-visible),::slotted(a:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}button.primary:active,:host([variant=\"primary\"]) ::slotted(button:active),:host([variant=\"primary\"]) ::slotted(a:active){background-color:var(--color-pressed-primary);border-color:var(--color-pressed-primary);color:var(--color-text-inverse);box-shadow:var(--shadow-2)}button.primary:disabled,:host([variant=\"primary\"]) ::slotted(button:disabled){background-color:var(--color-disabled01);border-color:var(--color-disabled01);color:var(--color-disabled02)}button.secondary,:host([variant=\"secondary\"]) ::slotted(button),:host([variant=\"secondary\"]) ::slotted(a){background-color:var(--color-surface01);border-color:var(--color-primary01);color:var(--color-primary01)}@media (hover: hover){button.secondary:hover,:host([variant=\"secondary\"]) ::slotted(button:hover),:host([variant=\"secondary\"]) ::slotted(a:hover){background-color:var(--color-surface01);border-color:var(--color-hover-primary);color:var(--color-hover-primary)}}button.secondary:active,:host([variant=\"secondary\"]) ::slotted(button:active),:host([variant=\"secondary\"]) ::slotted(a:active){background-color:var(--color-surface01);border-color:var(--color-pressed-primary);color:var(--color-pressed-primary);box-shadow:var(--shadow-2)}button.secondary:disabled,:host([variant=\"secondary\"]) ::slotted(button:disabled){background-color:var(--color-surface01);border-color:var(--color-disabled01);color:var(--color-disabled02)}button.tertiary,:host([variant=\"tertiary\"]) ::slotted(button),:host([variant=\"tertiary\"]) ::slotted(a){background-color:transparent;border-color:transparent;color:var(--color-primary01)}button.tertiary.hasContent{padding:0 var(--space-unit)}@media (hover: hover){button.tertiary:hover,:host([variant=\"tertiary\"]) ::slotted(button:hover),:host([variant=\"tertiary\"]) ::slotted(a:hover){background-color:var(--color-primary03);border-color:var(--color-primary03);color:var(--color-hover-primary)}}button.tertiary:focus:focus-visible,:host([variant=\"tertiary\"]) ::slotted(button:focus:focus-visible),:host([variant=\"tertiary\"]) ::slotted(a:focus:focus-visible){background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01)}button.tertiary:active,:host([variant=\"tertiary\"]) ::slotted(button:active),:host([variant=\"tertiary\"]) ::slotted(a:active){background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01);box-shadow:var(--shadow-2)}button.tertiary:disabled,:host([variant=\"tertiary\"]) ::slotted(button:disabled){background-color:transparent;border-color:transparent;color:var(--color-disabled02)}";

const ZButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** HTML button disabled attribute. */
    this.disabled = false;
    /** HTML button type attribute. */
    this.type = ButtonTypeEnum.button;
    /** Graphical variant: `primary`, `secondary` and `tertiary`. Defaults to `primary`. */
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
ZButton.style = stylesCss$V;

const stylesCss$U = "button.container{min-height:32px;line-height:32px;border:var(--border-size-small) solid var(--bg-grey-200);border-radius:16px;box-shadow:0px 2px 5px 0px var(--bg-neutral-300);-webkit-box-shadow:0px 2px 5px 0px var(--bg-neutral-300);-moz-box-shadow:0px 2px 5px 0px var(--bg-neutral-300);text-align:center;padding:0 calc(var(--space-unit) * 2);cursor:pointer;letter-spacing:0.17px;font-family:var(--dashboard-font);font-size:12px;font-weight:var(--font-sb);opacity:1;transition:all 200ms linear}button.container.small{min-height:24px;line-height:24px}button.container:focus{outline:0}button.container::-moz-focus-inner{border:0}.text-container{margin-left:4px}button.container,button.container:focus,button.container:hover{background-color:var(--bg-white);color:var(--text-grey-700);fill:var(--text-grey-700)}button.container.isactive{background-color:var(--bg-white);color:var(--myz-blue);fill:var(--myz-blue)}button.container.isactive:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button.container.isactive:focus{background-color:var(--myz-blue-dark);border-color:var(--myz-blue-dark);box-shadow:0px 0px 4px 0px var(--text-grey-800);color:var(--bg-white);fill:var(--bg-white)}button z-icon{display:inline-block}";

const ZButtonFilter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.removefilter = createEvent(this, "removefilter", 7);
    /** disable action on button */
    this.isfixed = false;
    /** add icon to button */
    this.hasicon = true;
    /** reduce button size (optional) */
    this.issmall = false;
    this.handleRemovingFilterClick = this.handleRemovingFilterClick.bind(this);
  }
  handleRemovingFilterClick() {
    this.removefilter.emit({
      filterid: this.filterid,
    });
  }
  renderFixedPillow(filtername) {
    return (h("button", { class: `container ${this.issmall ? "small" : ""}` }, this.renderIcon(), this.renderContent(filtername)));
  }
  renderDynamicPillow(filtername) {
    return (h("button", { class: `container isactive ${this.issmall ? "small" : ""}`, onClick: this.handleRemovingFilterClick }, this.renderIcon(), this.renderContent(filtername)));
  }
  renderIcon() {
    if (!this.hasicon)
      return null;
    return (h("z-icon", { class: "close-icon-container", name: "multiply", height: 12, width: 12 }));
  }
  renderContent(filtername) {
    return h("span", { class: "text-container" }, filtername);
  }
  render() {
    if (this.isfixed) {
      return this.renderFixedPillow(this.filtername);
    }
    return this.renderDynamicPillow(this.filtername);
  }
};
ZButtonFilter.style = stylesCss$U;

const stylesCss$T = ":host,button{max-width:100%}button{height:36px;border:var(--border-size-medium) solid var(--myz-blue);border-radius:var(--border-radius);color:var(--myz-blue);fill:var(--myz-blue);background-color:var(--bg-white);outline:none;padding:0 var(--space-unit);cursor:pointer}button::-moz-focus-inner{border:0}button:hover{border-color:var(--myz-blue-dark);color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button:focus{border-color:var(--myz-blue);color:var(--myz-blue);fill:var(--myz-blue);box-shadow:0px 0px 2px 2px var(--accent-dark)}button:active{border-color:var(--myz-blue-light);color:var(--myz-blue-light);fill:var(--myz-blue-light);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}button.selected{border-color:var(--myz-blue-dark);background-color:var(--myz-blue-dark);color:var(--bg-white);fill:var(--bg-white)}button>label{cursor:pointer;font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;display:flex;align-items:center}button>label>span.ellipsis{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin:0;padding:0}button>label>span.counter{margin-left:calc(var(--space-unit) / 2);margin-right:calc(var(--space-unit) * 2)}button>label>span.sort{margin-right:var(--half-x1);white-space:nowrap}button>span{font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:14px;margin-right:calc(var(--space-unit) * 0.5)}button>z-icon{padding-top:calc(var(--space-unit) * 0.5)}@media only screen and (min-width: 768px){:host,button{max-width:325px}}@media only screen and (min-width: 1025px){:host,button{max-width:490px}}";

const ZButtonSort = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonSortClick = createEvent(this, "buttonSortClick", 7);
    /** sort label content (ascending) (optional) */
    this.sortlabelasc = "A-Z";
    /** sort label content (descending) (optional) */
    this.sortlabeldesc = "Z-A";
    /** selected flag (optional) */
    this.isselected = false;
    /** sortable flag (optional) */
    this.sortasc = true;
    this.allowTooltip = false;
  }
  emitButtonSortClick() {
    if (!this.isselected) {
      this.isselected = true;
    }
    else {
      this.sortasc = !this.sortasc;
    }
    this.buttonSortClick.emit({
      buttonid: this.buttonid,
      sortAsc: this.sortasc,
    });
  }
  componentDidLoad() {
    if (this.elementHasEllipsis() && window.innerWidth > tabletBreakpoint)
      this.allowTooltip = true;
  }
  setButtonTitle() {
    return this.allowTooltip
      ? `${this.sortasc ? this.label : this.desclabel}`
      : "";
  }
  elementHasEllipsis() {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  render() {
    return (h("button", { title: this.setButtonTitle(), id: this.buttonid, class: this.isselected && "selected", onClick: () => this.emitButtonSortClick() }, h("label", null, h("span", { ref: (el) => (this.ellipsis = el), class: "ellipsis" }, !this.sortasc && this.desclabel ? this.desclabel : this.label), h("span", { class: "counter" }, this.counter && ` (${this.counter})`), h("span", { class: "sort" }, this.sortasc ? this.sortlabelasc : this.sortlabeldesc), h("z-icon", { name: "caret-up-down", width: 16, height: 16 }))));
  }
};
ZButtonSort.style = stylesCss$T;

const stylesCss$S = ":host{--aspect-ratio:1.62;--z-card--border-color:var(--gray200);--z-card--color-cover-background:var(--color-surface01);position:relative;display:flex;flex-direction:column;font-family:var(--font-family-sans);font-weight:var(--font-rg)}*,::slotted(*){box-sizing:border-box}:host(:not([variant='overlay'])) .cover-container{position:relative;width:100%}.cover-container{padding-bottom:calc(100% / var(--aspect-ratio))}::slotted([slot='cover']),.color-cover{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center}.cover-container>z-icon{--z-icon-width:calc(var(--space-unit) * 11);--z-icon-height:var(--z-icon-width);position:absolute;top:calc(50% - calc(var(--z-icon-height) / 2));left:calc(50% - calc(var(--z-icon-width) / 2));fill:var(--color-primary01)}.color-cover{background-color:var(--z-card--color-cover-background)}.content{display:flex;flex-direction:column;padding-top:var(--space-unit)}.color-cover .cover-content{display:flex;flex-direction:column;justify-content:flex-end;height:100%;padding:var(--space-unit)}::slotted([slot='metadata']),::slotted([slot='title']),::slotted([slot='text']){display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}::slotted([slot='title']:not(:last-child)),::slotted([slot='text']:not(:last-child)){margin-bottom:var(--space-unit)}::slotted([slot='text']),::slotted([slot='actions']){margin:0}::slotted([slot='metadata']:not(:last-child)){margin:0 0 calc(var(--space-unit) * 0.25);-webkit-line-clamp:1;text-transform:uppercase}::slotted([slot='title']){margin:0;font-weight:var(--font-sb);-webkit-line-clamp:2}::slotted([slot='text']){-webkit-line-clamp:3}.actions{display:flex;flex-direction:row;align-items:center}::slotted([slot='action']:not(:last-child)){margin-right:calc(var(--space-unit) * 1.5)}:host([clickable]){cursor:pointer}:host([clickable]:focus:focus-visible){outline:none}:host(:not([variant])[clickable]:focus:focus-visible){padding:calc(var(--space-unit) * 0.5);box-shadow:var(--shadow-focus-primary)}:host([variant='border'])>.content,:host([variant='shadow'])>.content{height:100%;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host([variant='border']) .actions,:host([variant='shadow']) .actions{margin-top:auto}:host([variant='border']){border:var(--border-size-small) solid var(--z-card--border-color)}:host([variant='border'][clickable]:hover)>.content{background:var(--color-background)}:host([variant='border'][clickable]:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}:host([variant='border'][clickable]:active){border-color:transparent}:host([variant='shadow']){box-shadow:var(--shadow-2)}:host([variant='shadow'][clickable]:hover){box-shadow:var(--shadow-4)}:host([variant='shadow'][clickable]:focus:focus-visible){box-shadow:var(--shadow-4)}:host([variant='shadow'][clickable]:active){box-shadow:none}:host([variant='overlay']) .content{position:absolute;top:0;right:0;bottom:0;left:0;justify-content:flex-end;padding:var(--space-unit);background-image:linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));color:var(--color-text-inverse);fill:var(--color-text-inverse)}";

const ZCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cardClicked = createEvent(this, "cardClicked", 7);
    /** Enable click interactions on the card. Default: false */
    this.clickable = false;
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
  render() {
    if (this.variant === CardVariants.overlay || this.hasCoverImage) {
      return [
        h("div", { class: "cover-container" }, this.hasCoverImage && [
          h("slot", { name: "cover" }),
          (this.variant !== CardVariants.overlay) && this.coverIcon && h("z-icon", { name: this.coverIcon })
        ], !this.hasCoverImage && h("div", { class: "color-cover" })),
        h("div", { class: "content" }, h("slot", { name: "metadata" }), h("slot", { name: "title" }), h("slot", { name: "text" }), h("div", { class: "actions" }, h("slot", { name: "action" })))
      ];
    }
    return this.renderColorCoverCard();
  }
  get host() { return getElement(this); }
};
ZCard.style = stylesCss$S;

const stylesCss$R = ":host>div{display:inline-block;min-height:28px;line-height:28px;padding:0 calc(var(--space-unit) * 1.5);background-color:var(--bg-white);border:var(--border-size-small) solid var(--bg-grey-200);border-radius:14px;color:var(--text-grey-800);fill:var(--text-grey-800);font-family:var(--dashboard-font);font-size:12px}.boldtext{font-weight:bold}";

const ZChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  renderLegacyChip() {
    return h("div", null, h("span", { class: "boldtext" }, this.boldtext), " ", this.regulartext);
  }
  render() {
    return this.boldtext != null || this.regulartext != null ?
      this.renderLegacyChip() :
      h("div", null, h("slot", null));
  }
};
ZChip.style = stylesCss$R;

const stylesCss$Q = ":host{display:block}:host>div.fixed{position:relative;height:48px}:host>div>.header{background-color:var(--bg-white);border-radius:var(--border-radius);border:var(--border-size-medium) solid var(--bg-grey-200);position:relative;z-index:10;min-height:48px;margin:0;padding:0 calc(var(--space-unit) * 2);display:flex;justify-content:space-between;align-items:center;cursor:pointer}:host>div.open>.header{border-radius:var(--border-radius) var(--border-radius) 0 0}:host>div>.header>h2{font-family:var(--dashboard-font);font-weight:var(--font-rg);color:var(--text-grey-800);font-size:16px;line-height:24px;margin:0;padding:var(--space-unit) 0}:host>div>.header>h2>span{font-weight:var(--font-sb)}:host>div>.header>z-icon{fill:var(--myz-blue);transform:rotate(360deg);transition:all 200ms linear}:host>div.open>.header>z-icon{fill:var(--myz-blue);transform:rotate(180deg);transition:all 200ms linear}:host>div.open>div.openComboData{background-color:var(--bg-white);border-radius:0 0 var(--border-radius) var(--border-radius);border:var(--border-size-medium) solid var(--bg-grey-200);border-top:0px;position:relative;z-index:12;padding:var(--space-unit) calc(var(--space-unit) * 2)}:host>div.open>div.openComboData>div{padding:0;max-height:235px;overflow:auto;scrollbar-width:thin;scrollbar-color:var(--myz-blue) var(--bg-grey-200)}:host>div.open>div.openComboData>z-input{margin-bottom:calc(var(--space-unit) * 2);width:100%}:host>div.open>div.openComboData>div>ul{margin:0;padding:0 3px;max-height:235px}::-webkit-scrollbar{background:linear-gradient(\n    90deg,\n    var(--bg-white) 2px,\n    var(--bg-grey-200) 4px,\n    var(--bg-white) 8px\n  );border-radius:var(--border-radius);width:10px}::-webkit-scrollbar-thumb{background-color:var(--myz-blue);border-radius:var(--border-radius);width:10px}:host>div.open>z-input{color:var(--myz-blue);margin:0 calc(var(--space-unit) * 2);width:238px;position:relative;z-index:1}:host>div.open>div.openComboData>div.search{box-shadow:1px 1px 4px 2px rgba(217, 222, 227, 0.5);margin-top:0;max-height:auto;overflow:hidden}:host>div.open>div.openComboData>div.search>ul{padding:var(--space-unit) calc(var(--space-unit) * 2);max-height:180px;overflow:auto;scrollbar-width:thin;scrollbar-color:var(--myz-blue) var(--bg-grey-200)}:host>div.open>div.openComboData>div.search>div{display:flex;justify-content:center}:host>div.open>div.openComboData>div.search>div>a{display:inline-block;cursor:pointer;color:var(--myz-blue);font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;height:44px;line-height:44px;text-align:center;text-transform:uppercase}:host>div.open>div.openComboData>div.checkAllWrapper{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * .5);text-align:left}";

const ZCombobox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.comboboxChange = createEvent(this, "comboboxChange", 7);
    /** show search input flag (optional) */
    this.hassearch = false;
    /** no result text message */
    this.noresultslabel = "Nessun risultato";
    /** toggle combo list opening flag */
    this.isopen = true;
    /** fixed style flag */
    this.isfixed = false;
    /** close combobox list text */
    this.closesearchtext = "Chiudi";
    /** show "check all" checkbox (optional) */
    this.hascheckall = false;
    /** check all label (optional) */
    this.checkalltext = "Seleziona tutti";
    /** uncheck all label (optional) */
    this.uncheckalltext = "Deseleziona tutti";
    /** max number of checkable items (0 = unlimited) */
    this.maxcheckableitems = 0;
    this.renderItemsList = []; // used for render only
    this.itemsList = [];
    this.inputType = InputTypeEnum.text;
    this.closeComboBox = this.closeComboBox.bind(this);
    this.closeFilterItems = this.closeFilterItems.bind(this);
  }
  watchItems() {
    this.itemsList =
      typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedCounter = this.itemsList.filter((item) => item.checked).length;
    if (this.searchValue) {
      this.filterItems(this.searchValue);
    }
    else {
      this.resetRenderItemsList();
    }
  }
  inputCheckListener(e) {
    const id = e.detail.id.replace(`combo-checkbox-${this.inputid}-`, "");
    if (id === "check-all" &&
      (!this.maxcheckableitems ||
        this.maxcheckableitems >= this.itemsList.length)) {
      return this.checkAll(e.detail.checked);
    }
    this.itemsList = this.itemsList.map((item) => {
      if (item.id === id)
        item.checked = e.detail.checked;
      return item;
    });
    this.resetRenderItemsList();
    this.emitComboboxChange();
  }
  emitComboboxChange() {
    this.comboboxChange.emit({ id: this.inputid, items: this.itemsList });
  }
  componentWillLoad() {
    this.watchItems();
  }
  componentWillRender() {
    this.selectedCounter = this.itemsList.filter((item) => item.checked).length;
    if (this.searchValue) {
      this.filterItems(this.searchValue);
    }
  }
  resetRenderItemsList() {
    const renderItemsList = [];
    this.itemsList.forEach((item) => {
      renderItemsList.push(Object.assign({}, item));
    });
    this.renderItemsList = renderItemsList;
  }
  filterItems(value) {
    if (!value)
      return this.closeFilterItems();
    this.searchValue = value;
    this.resetRenderItemsList();
    this.renderItemsList = this.renderItemsList.filter((item) => {
      const start = item.name.toUpperCase().indexOf(value.toUpperCase());
      const end = start + value.length;
      const newName = item.name.substring(0, start) +
        item.name.substring(start, end).bold() +
        item.name.substring(end, item.name.length);
      item.name = newName;
      return start >= 0;
    });
  }
  checkAll(checked = true) {
    this.itemsList = this.itemsList.map((item) => (Object.assign(Object.assign({}, item), { checked: checked })));
    this.resetRenderItemsList();
    this.emitComboboxChange();
  }
  closeFilterItems() {
    this.searchValue = "";
    this.resetRenderItemsList();
  }
  closeComboBox() {
    this.isopen = !this.isopen;
  }
  renderHeader() {
    return (h("div", { class: "header", onClick: () => this.closeComboBox(), onKeyDown: (ev) => {
        if (ev.keyCode === keybordKeyCodeEnum.SPACE)
          ev.preventDefault();
      }, onKeyUp: (ev) => handleKeyboardSubmit(ev, this.closeComboBox), role: "button", tabindex: 0 }, h("h2", null, this.label, h("span", null, this.selectedCounter > 0 && ` (${this.selectedCounter})`)), h("z-icon", { name: "caret-down", width: 18, height: 18 })));
  }
  renderContent() {
    if (!this.isopen)
      return;
    return (h("div", { class: "openComboData" }, this.hassearch && this.renderSearchInput(), this.hascheckall && this.renderCheckAll(), this.renderItems()));
  }
  renderItems() {
    if (!this.isopen)
      return;
    return (h("div", { class: this.searchValue && "search", tabindex: -1 }, this.renderList(this.renderItemsList), this.searchValue && this.renderCloseButton()));
  }
  renderList(items) {
    if (!items)
      return;
    if (!items.length && this.searchValue)
      return this.renderNoSearchResults();
    return (h("ul", null, items.map((item, i) => {
      return (h("z-myz-list-item", { id: item.id, listitemid: item.id, action: `combo-li-${this.inputid}`, underlined: i === items.length - 1 ? false : true }, h("z-input", { type: InputTypeEnum.checkbox, checked: item.checked, htmlid: `combo-checkbox-${this.inputid}-${item.id}`, label: item.name, disabled: !item.checked &&
          this.maxcheckableitems &&
          this.maxcheckableitems === this.selectedCounter })));
    })));
  }
  renderNoSearchResults() {
    return (h("ul", null, h("z-myz-list-item", { id: "no-results", text: this.noresultslabel, listitemid: "no-results", icon: "multiply-circle" })));
  }
  renderCloseButton() {
    return (h("div", null, h("a", { onClick: () => this.closeFilterItems(), onKeyUp: (e) => handleKeyboardSubmit(e, this.closeFilterItems), role: "button", tabindex: 0 }, this.closesearchtext)));
  }
  renderSearchInput() {
    if (!this.isopen)
      return;
    return (h("z-input", { htmlid: `${this.inputid}_search`, label: this.searchlabel, placeholder: this.searchplaceholder, htmltitle: this.searchtitle, type: this.inputType, value: this.searchValue, hasmessage: false, onInputChange: (e) => {
        if (e.detail.keycode === 27)
          return this.closeFilterItems();
        this.filterItems(e.detail.value);
      } }));
  }
  renderCheckAll() {
    if (this.searchValue)
      return;
    const allChecked = this.selectedCounter === this.itemsList.length;
    return (h("div", { class: "checkAllWrapper" }, h("z-input", { type: InputTypeEnum.checkbox, checked: allChecked, htmlid: `combo-checkbox-${this.inputid}-check-all`, label: allChecked ? this.uncheckalltext : this.checkalltext, disabled: this.maxcheckableitems &&
        this.maxcheckableitems < this.itemsList.length })));
  }
  render() {
    return (h("div", { "data-action": `combo-${this.inputid}`, class: `${this.isopen && "open"} ${this.isfixed && "fixed"}`, id: this.inputid }, this.renderHeader(), this.renderContent()));
  }
  static get watchers() { return {
    "items": ["watchItems"]
  }; }
};
ZCombobox.style = stylesCss$Q;

const stylesCss$P = ".sc-z-divider-h{display:block;padding:0;margin:0}.divider-horizontal.sc-z-divider-h{width:100%}.divider-vertical.sc-z-divider-h{height:100%}.divider-small.divider-horizontal.sc-z-divider-h{height:var(--border-size-small)}.divider-medium.divider-horizontal.sc-z-divider-h{height:var(--border-size-medium)}.divider-large.divider-horizontal.sc-z-divider-h{height:var(--border-size-large)}.divider-small.divider-vertical.sc-z-divider-h{width:var(--border-size-small)}.divider-medium.divider-vertical.sc-z-divider-h{width:var(--border-size-medium)}.divider-large.divider-vertical.sc-z-divider-h{width:var(--border-size-large)}";

const ZDivider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** [optional] Divider size */
    this.size = DividerSize.small;
    /** [optional] Divider color */
    this.color = "gray200";
    /** [optional] Divider orintation */
    this.orientation = DividerOrientation.horizontal;
  }
  render() {
    return (h(Host, { class: `divider-${this.size} divider-${this.orientation}`, style: { backgroundColor: `var(--${this.color})` } }));
  }
};
ZDivider.style = stylesCss$P;

const stylesCss$O = ":host{width:100%}footer{width:auto;height:auto;box-sizing:border-box;font-family:var(--dashboard-font);font-size:13px;padding:var(--space-unit) 0 var(--space-unit) 0;background-color:var(--bg-grey-900);color:var(--gray50)}footer *{box-sizing:border-box}footer>section{display:grid}footer>section.bottom{display:grid;grid-template-columns:1fr;width:auto;height:auto;margin:0;padding:0;white-space:pre-line;font-size:12px}footer>section.bottom>div.item{display:flex;flex-direction:column;align-items:flex-start;grid-column:span 1;height:auto;width:auto;padding:calc(var(--space-unit) * 2) 0;margin:0 calc(var(--space-unit) * 3)}footer>section.bottom>div.item:nth-child(1){order:2}footer>section.bottom>div.item:nth-child(2){order:1;border-bottom:1px solid var(--gray50)}footer>section.bottom>div.item>div.social{display:grid;grid-template-columns:repeat(5, 1fr);grid-template-rows:repeat(auto-fill, 24px);column-gap:12px;padding:0;margin-bottom:0px}footer>section.bottom>div.bottom-links{display:none}footer>section.bottom>div.item>p{margin:var(--space-unit) 0;padding:var(--space-unit) 0}footer>section.bottom>div.item>p:first-child{margin-top:0}footer>section.bottom>div.item>p:last-child{margin-bottom:0}footer>section.bottom>div.logo>p>span{display:block}@media only screen and (min-width: 768px){footer{padding:0}footer>section.top{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 4);background-color:var(--text-grey-800)}footer>section.top>z-footer-section:last-child{display:none}footer>section.bottom{grid-template-columns:repeat(4, 1fr);grid-column-gap:var(--grid-tablet-margin);background-color:var(--bg-grey-900);padding:0 calc(var(--space-unit) * 4)}footer>section.bottom>div.item{margin:0}footer>section.bottom>div.item:nth-child(1){order:1}footer>section.bottom>div.item:nth-child(2){order:2;border-bottom:none}footer>section.bottom>div.item>p{padding-top:0}footer>section.bottom>div.logo>z-logo{width:auto;height:39px}footer>section.bottom>div.bottom-links{display:block;grid-column:span 2;order:3}footer>section.bottom>div.bottom-links{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(auto-fill, 24px);grid-column-gap:var(--grid-tablet-margin);font-size:12px}}@media only screen and (min-width: 1152px){footer>section.top{grid-template-columns:repeat(6, 1fr);grid-column-gap:var(--grid-desktop-margin);width:100%;padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 4)}footer>section.bottom{padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 4)}footer>section.bottom>div.item:nth-child(1)>p:nth-of-type(2){font-size:10px}footer>section.bottom>div.item>p{padding-bottom:0;margin-bottom:calc(var(--space-unit) * 2)}footer>section.bottom>div.item>div.social{margin-top:0}footer>section.bottom>div.bottom-links{padding:calc(var(--space-unit) * 2) 0 0 0}footer>section.bottom>div.bottom-links{grid-template-columns:repeat(3, 1fr);grid-column-gap:var(--grid-desktop-margin);margin:0}}";

const ZFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    if (this.data) {
      console.warn("z-footer: `data` prop is deprecated and will be removed in a future version. Use slots instead.");
      this.jsonData = JSON.parse(this.data);
    }
    if (this.copyrightuser) {
      console.warn("z-footer: `copyrightuser` prop is deprecated and will be removed in a future version.");
    }
  }
  renderZLogo() {
    return (h("z-logo", { link: "https://www.zanichelli.it", width: 144, height: 38, imagealt: "Home Zanichelli", targetblank: true }));
  }
  renderAddress() {
    return (h("p", null, "Zanichelli editore S.p.A. via Irnerio 34, 40126 Bologna", h("br", null), "Fax 051 - 249.782 / 293.224 | Tel. 051 - 293.111 / 245.024", h("br", null), "Partita IVA 03978000374"));
  }
  renderSocial() {
    return (h("div", { class: "social" }, h("slot", { name: "social" }), this.renderFooterSocialJsonData()));
  }
  renderCopyright() {
    return (h("p", null, "Copyright \u2013 2018-", new Date().getFullYear(), " Zanichelli", h("span", null, "All rights reserved")));
  }
  renderCertification() {
    return (h("p", null, "Zanichelli editore S.p.A. opera con sistema qualit\u00E0 certificato CertiCarGraf n. 477", h("br", null), "secondo la norma UNI EN ISO 9001:2015"));
  }
  renderBottomLinks() {
    return (h("div", { class: "item bottom-links" }, h("slot", { name: "links" }), this.renderFooterBottomJsonData()));
  }
  renderFooterBottom() {
    return (h("section", { class: "bottom" }, h("div", { class: "item logo" }, this.renderZLogo(), this.renderCopyright(), this.renderCertification()), h("div", { class: "item" }, this.renderAddress(), this.renderSocial()), this.renderBottomLinks()));
  }
  renderFooterTop() {
    return (h("section", { class: "top" }, h("slot", null), this.renderFooterTopJsonData()));
  }
  // INFO: backward compatibility
  renderFooterTopJsonData() {
    if (!this.jsonData || !this.jsonData.zanichelliLinks)
      return null;
    const zanichelliLinks = this.jsonData.zanichelliLinks;
    if (this.jsonData.bottomLinks) {
      const bottomLinks = this.jsonData.bottomLinks;
      zanichelliLinks.push({
        title: "Altre informazioni",
        items: bottomLinks,
      });
    }
    return zanichelliLinks.map((item) => (h("z-footer-section", { name: item.title }, item.items.map((item) => (h("z-footer-link", { href: item.link }, item.label))))));
  }
  // INFO: backward compatibility
  renderFooterBottomJsonData() {
    if (!this.jsonData || !this.jsonData.bottomLinks)
      return null;
    const bottomLinks = this.jsonData.bottomLinks;
    return bottomLinks.map((item) => (h("z-footer-link", { href: item.link }, item.label)));
  }
  // INFO: backward compatibility
  renderFooterSocialJsonData() {
    if (!this.jsonData || !this.jsonData.social)
      return null;
    const social = this.jsonData.social;
    return social.map((item) => (h("z-footer-social", { href: item.link, icon: item.icon, description: item.description })));
  }
  render() {
    return (h("footer", null, this.renderFooterTop(), this.renderFooterBottom()));
  }
};
ZFooter.style = stylesCss$O;

const stylesCss$N = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>a{display:inline-block;color:var(--color-white);padding:calc(var(--space-unit) / 2 * 3) 0;border-bottom:1px solid var(--gray50);text-decoration:none;font-size:14px;width:100%}@media only screen and (min-width: 768px){:host a{font-size:12px;border-bottom:none;text-decoration:underline;padding:0;width:initial}}";

const ZFooterLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("a", { href: this.href, target: "_blank" }, h("slot", null)));
  }
};
ZFooterLink.style = stylesCss$N;

const stylesCss$M = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>nav{background-color:var(--bg-grey-900);display:flex;flex-direction:column;justify-items:flex-start;overflow:hidden;margin:calc(var(--space-unit) / 2) 0 calc(var(--space-unit) / 2) 0;padding:0}:host>nav>.header{position:relative;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:stretch;align-content:flex-start;margin:0 calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4);border-bottom:1px solid var(--gray50);line-height:1}:host>nav>.header>h2{color:var(--color-white);font-size:16px;margin:var(--space-unit) 0 var(--space-unit) 0}:host>nav>.header{fill:var(--color-white)}:host>nav>.header>button{position:absolute;top:var(--space-unit);right:0;margin:0;padding:0;background:transparent;border:0;appearance:none;cursor:pointer}:host>nav>.header>z-icon{display:block}:host>nav>.content{background-color:var(--text-grey-800);display:none;height:0;transition:0.3s ease;padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 4)}:host>nav>.content.show{display:block;height:auto;transition:0.3s ease}@media only screen and (min-width: 768px){:host>nav{display:grid;grid-template-columns:repeat(4, 1fr);grid-template-rows:1fr;grid-column-gap:var(--grid-tablet-margin);padding:calc(var(--space-unit) * 2) 0;border-bottom:1px solid var(--color-white);margin:0;background-color:var(--bg-grey-800)}:host>nav>.header>button.toggleButton{display:none}:host>nav>.header{border-bottom:none;padding:0;margin:0}:host>nav>.header>h2{border:none}:host>nav>.content,:host>nav>.content.show{grid-column:span 3;width:100%;padding:0;margin:0;display:grid;grid-template-columns:repeat(3, 1fr);grid-column-gap:var(--grid-tablet-margin);grid-row-gap:var(--space-unit);height:auto;align-items:stretch;align-content:stretch;margin:0}}@media only screen and (min-width: 1152px){:host>nav{display:grid;grid-template-columns:1fr;grid-template-rows:40px 4fr;padding:0;border-bottom:none}:host>nav>.header{position:relative;display:inline-flex;height:24px}:host>nav>.header>h2{width:auto;font-size:16px;line-height:1;font-weight:600;color:var(--gray50);padding:0 0 var(--space-unit);margin:0}:host>nav>.header::after{content:\"\";display:block;position:absolute;top:100%;left:0;width:120px;border-bottom:1px solid var(--gray50)}:host>nav>.content,:host>nav>.content.show{grid-column:auto;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:flex-start}}";

const ZFooterSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isOpen = false;
  }
  renderToggleButton() {
    return (h("button", { class: "toggleButton", onClick: () => (this.isOpen = !this.isOpen) }, h("z-icon", { name: this.isOpen ? "chevron-up" : "chevron-down", width: 16, height: 16 })));
  }
  render() {
    return (h("nav", null, h("div", { class: "header" }, h("h2", null, this.name), this.renderToggleButton()), h("div", { class: `content ${this.isOpen ? "show" : ""}` }, h("slot", null))));
  }
};
ZFooterSection.style = stylesCss$M;

const stylesCss$L = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>a>img{width:calc(var(--space-unit) * 3)}@media only screen and (min-width: 1152px){:host>a>img{width:16px}}";

const ZFooterSocial = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("a", { href: this.href, target: "_blank" }, h("img", { src: this.icon, alt: this.description })));
  }
};
ZFooterSocial.style = stylesCss$L;

const icons = {
  "add-image": "M0 198C0 307 88 395 198 395C307 395 395 307 395 198C395 88 307 0 198 0C88 0 0 88 0 198ZM20 764V408H96V782H170V447H246V635L385 427C405 398 439 396 458 428L628 714L706 594C732 555 765 554 787 593L904 798V218H446V150H702V88H406V20H694C748 20 780 52 780 106V150H894C948 150 980 182 980 236V894C980 948 948 980 894 980H256C200 980 170 948 170 894V850H106C50 850 20 818 20 764ZM86 218V176H173V74H223V176H309V218H223V309H173V218ZM246 912H903L747 651L666 775C643 810 616 812 594 775L422 489L246 750ZM629 380C629 442 678 491 740 491C801 491 850 442 850 380C850 319 801 270 740 270C678 270 629 319 629 380ZM693 380C693 353 714 331 740 331C765 331 786 353 786 380C786 408 765 430 740 430C714 430 693 408 693 380Z",
  "app-switcher": "M0 120Q0 178 31.5 208 63 238 119 238 174 238 206.5 208 239 178 239 120 239 63 206.5 31.5 174 0 119 0 63 0 31.5 31 0 62 0 120ZM380 120Q380 178 412 208 444 238 499 238 554 238 587 208 620 178 620 120 620 63 587 31.5 554 0 499 0 445 0 412.5 31.5 380 63 380 120ZM761 120Q761 178 793 208 825 238 880 238 936 238 968 208 1000 178 1000 120 1000 63 967.5 31.5 935 0 880 0 825 0 793 31 761 62 761 120ZM0 501Q0 559 31.5 589 63 619 119 619 174 619 206.5 589 239 559 239 501 239 442 206.5 410.5 174 379 119 379 63 379 31.5 410.5 0 442 0 501ZM380 501Q380 559 412 589 444 619 499 619 555 619 587.5 589 620 559 620 501 620 442 587 410.5 554 379 499 379 444 379 412 410.5 380 442 380 501ZM761 501Q761 559 793 589 825 619 880 619 936 619 968 589 1000 559 1000 501 1000 442 967.5 410.5 935 379 880 379 825 379 793 410.5 761 442 761 501ZM0 882Q0 940 31.5 970 63 1000 119 1000 174 1000 206.5 970 239 940 239 882 239 824 206.5 793 174 762 119 762 63 762 31.5 793 0 824 0 882ZM380 882Q380 940 412 970 444 1000 499 1000 554 1000 587 970 620 940 620 882 620 824 587 793 554 762 499 762 444 762 412 793 380 824 380 882ZM761 882Q761 940 793 970 825 1000 880 1000 936 1000 968 970 1000 940 1000 882 1000 824 967.5 793 935 762 880 762 825 762 793 793 761 824 761 882Z",
  "arrow-clockwise-down-left": "M0 466C0 143 258 2 510 2C800 2 1000 186 1000 468C1000 769 824 872 746 928L698 864C768 823 918 721 918 524V412C918 247 745 76 508 76C289 76 82 227 82 412V524C82 694 265 797 376 838V736V592H454V982H66V904H220L334 906C203 861 0 730 0 466Z",
  "arrow-clockwise-down-right": "M1000 466Q1000 312 927.5 207.5 855 103 739 52.5 623 2 490 2 346 2 235 60 124 118 62 223.5 0 329 0 468 0 605 43 696.5 86 788 132 831 178 874 254 928L302 864Q218 815 150 733.5 82 652 82 524L82 412Q82 329 136 251 190 173 284 124.5 378 76 492 76 600 76 698.5 121.5 797 167 857.5 244.5 918 322 918 412L918 524Q918 603 871 666 824 729 757.5 771 691 813 624 838L624 592 546 592 546 982 934 982 934 904 780 904 666 906Q743 879 819 824.5 895 770 947.5 679 1000 588 1000 466Z",
  "arrow-clockwise-up-left": "M0 536C0 859 258 1000 510 1000C800 1000 1000 816 1000 534C1000 233 824 130 746 74L698 138C768 179 918 281 918 478V590C918 755 745 926 508 926C289 926 82 775 82 590V478C82 308 265 205 376 164V266V410H454V20H66V98H220L334 96C203 141 0 272 0 536Z",
  "arrow-clockwise-up-right": "M1000 536C1000 859 742 1000 490 1000C200 1000 0 816 0 534C0 233 176 130 254 74L302 138C232 179 82 281 82 478V590C82 755 255 926 492 926C711 926 918 775 918 590V478C918 308 735 205 624 164V266V410H546V20H934V98H780L666 96C797 141 1000 272 1000 536Z",
  "arrow-down": "M242 743L297 688L461 864V20H539V864L704 687L759 741L500 1000Z",
  "arrow-left": "M257.1624737400001 235.21165844L312.1614188400001 290.21060354L136.1647945200001 454.20745802H980.1486066V532.20596198H136.1647945200001L313.16139966000014 697.2027972799999L259.16243538000015 752.2017423799999L0.1674030000001494 493.20671Z",
  "arrow-left-right": "M257 764L312 709L136 541H524V470H136L313 302L259 247L0 506ZM743 764L1000 506L741 247L687 302L864 470H444V541H864L688 709Z",
  "arrow-left-rounded": "M544 0C823 2 1000 199 1000 509C1000 847 786 1000 530 1000C284 1000 163 878 76 742L142 701C216 830 322 926 530 926C731 926 918 788 918 573V441C918 236 756 74 544 74C301 74 197 243 153 370H270H414V448H20V60H98V214L96 319C140 190 280 -2 544 0Z",
  "arrow-left-square": "M20 106C20 52 50 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C52 980 20 948 20 894ZM98 92V908H902V92ZM474 753L525 703L347 536H790V464H347L525 296L476 246L212 500Z",
  "arrow-north-east": "M496.4285 148.80790000000002V226.58890000000002L736.8425 218.1037L140.0501 814.8960999999999L195.20389999999998 870.0499L791.9963 273.2575L783.5110999999999 515.0857L860.585 515.7927999999999L860.5849999999999 149.515Z",
  "arrow-north-east-square": "M980 108V896C980 950 948 982 894 982H106C52 982 20 950 20 896V108C20 54 52 22 106 22H894C950 22 980 54 980 108ZM902 94H98V910H902ZM772 584L771 220H405L406 299L649 287L235 701L290 757L704 343L692 584Z",
  "arrow-north-west": "M504.5715 148.80790000000002V226.58890000000002L264.1575 218.1037L860.9499000000001 814.8960999999999L805.7961 870.0499L209.00369999999998 273.2575L217.48890000000006 515.0857L140.41499999999996 515.7927999999999L140.41500000000008 149.515Z",
  "arrow-north-west-square": "M20 108V896C20 950 52 982 106 982H894C948 982 980 950 980 896V108C980 54 948 22 894 22H106C50 22 20 54 20 108ZM98 94H902V910H98ZM228 584L229 220H595L594 299L351 287L765 701L710 757L296 343L308 584Z",
  "arrow-quad-down": "M788 980V912H902V92H98V912H212V980H106C50 980 20 948 20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980ZM241 743L499 1000L758 741L703 687L538 865V246H460V865L296 688Z",
  "arrow-quad-left": "M20 788H98V908H902V92H98V212H20V106C20 50 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C52 980 20 948 20 894ZM257 241L0 499L259 758L313 703L136 538H754V460H136L312 296Z",
  "arrow-quad-north-east": "M618 22V100L865 83L284 658L344 718L919 137L902 384H980V22ZM902 564H980V896C980 950 948 982 894 982H106C52 982 20 950 20 896V108C20 54 52 22 106 22H438V94H98V910H902Z",
  "arrow-quad-north-west": "M382 22V100L135 83L716 658L656 718L81 137L98 384H20V22ZM98 564H20V896C20 950 52 982 106 982H894C948 982 980 950 980 896V108C980 54 948 22 894 22H562V94H902V910H98Z",
  "arrow-quad-right": "M980 212H902V92H98V908H902V788H980V894C980 950 948 980 894 980H106C52 980 20 948 20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106ZM743 759L1000 501L741 242L687 297L864 462H246V540H864L688 704Z",
  "arrow-quad-south-east": "M618 980V902L865 919L284 344L344 284L919 865L902 618H980V980ZM902 438H980V106C980 52 948 20 894 20H106C52 20 20 52 20 106V894C20 948 52 980 106 980H438V908H98V92H902Z",
  "arrow-quad-south-west": "M382 980V902L135 919L716 344L656 284L81 865L98 618H20V980ZM98 438H20V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H562V908H902V92H98Z",
  "arrow-quad-up": "M788 20V88H902V908H98V88H212V20H106C50 20 20 52 20 106V894C20 948 52 980 106 980H894C948 980 980 948 980 894V106C980 52 948 20 894 20ZM241 257L499 0L758 259L703 313L538 135V754H460V135L296 312Z",
  "arrow-right": "M742.8375262599999 235.21165844L687.8385811599999 290.21060354L863.8352054799999 454.20745802H19.851393399999978V532.20596198H863.8352054799999L686.8386003399999 697.2027972799999L740.8375646199999 752.2017423799999L999.8325969999999 493.20671Z",
  "arrow-right-rounded": "M456 0C177 2 0 199 0 509C0 847 214 1000 470 1000C716 1000 837 878 924 742L858 701C784 830 678 926 470 926C269 926 82 788 82 573V441C82 236 244 74 456 74C699 74 803 243 847 370H730H586V448H980V60H902V214L904 319C860 190 720 -2 456 0Z",
  "arrow-right-square": "M20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98ZM528 753L790 500L526 246L477 296L655 464H212V536H655L477 703Z",
  "arrow-small-left": "M142 441L264 436H945V514H264L142 509ZM489 910L55 475L490 41L545 96L163 476L545 855Z",
  "arrow-small-right": "M858 441V509L736 514H55V436H736ZM511 910L455 855L837 476L455 96L510 41L945 475Z",
  "arrow-south-east": "M496.4285 850.1921V772.4111L736.8425 780.8963L140.0501 184.1039L195.20389999999998 128.95010000000002L791.9963 725.7425000000001L783.5110999999999 483.9143L860.585 483.2072L860.5849999999999 849.485Z",
  "arrow-south-east-square": "M980 894V106C980 52 948 20 894 20H106C52 20 20 52 20 106V894C20 948 52 980 106 980H894C950 980 980 948 980 894ZM902 908H98V92H902ZM772 418L771 782H405L406 703L649 715L235 301L290 245L704 659L692 418Z",
  "arrow-south-west": "M504.5715 850.1921V772.4111L264.1575 780.8963L860.9499000000001 184.1039L805.7961 128.95010000000002L209.00369999999998 725.7425000000001L217.48890000000006 483.9143L140.41499999999996 483.2072L140.41500000000008 849.485Z",
  "arrow-south-west-square": "M20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98ZM228 418L229 782H595L594 703L351 715L765 301L710 245L296 659L308 418Z",
  "arrow-square-down": "M20 106V894C20 948 52 980 106 980H894C948 980 980 948 980 894V106C980 52 948 20 894 20H106C50 20 20 52 20 106ZM98 92H902V908H98ZM242 531L297 476L461 652V214H539V652L704 475L759 529L500 788Z",
  "arrow-up": "M242 257L297 312L461 136V980H539V136L704 313L759 259L500 0Z",
  "arrow-up-and-down": "M242 257L297 312L461 136V980H539V136L704 313L759 259L500 0ZM1242 743L1297 688L1461 864V20H1539V864L1704 687L1759 741L1500 1000Z",
  "arrow-up-down": "M242 257L297 312L465 136V524H536V136L704 313L759 259L500 0ZM242 743L500 1000L759 741L704 687L536 864V444H465V864L297 688Z",
  "arrow-up-down-double": "M75 312L20 257 278 0 537 259 482 313 317 136 317 980 239 980 239 136ZM721 1000L463 743 518 688 682 864 682 20 760 20 760 864 925 687 980 741Z",
  "arrow-up-rounded": "M0 536C0 859 258 1000 510 1000C800 1000 1000 816 1000 534C1000 233 824 130 746 74L698 138C768 179 918 281 918 478V590C918 755 745 926 508 926C289 926 82 775 82 590V478C82 308 265 205 376 164V266V410H454V20H66V98H220L334 96C203 141 0 272 0 536Z",
  "arrow-up-square": "M20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98ZM242 469L297 524L461 348V786H539V348L704 525L759 471L500 212Z",
  "artist": "M204 733L210 746L494 692V592H561V539H471C412 539 398 512 398 422H342V386C342 302 404 252 482 252C568 252 615 303 615 392V690L823 746L832 733C840 700 837 683 824 679L680 637V391C680 272 598 190 482 190C366 190 281 282 281 392V435C281 459 289 469 308 469H345C345 556 393 589 431 592V635L203 680C187 683 196 720 204 733ZM113 500C113 777 276 1000 511 1000C746 1000 906 777 906 500C906 223 746 0 511 0C276 0 113 223 113 500ZM189 560V440C189 275 321 67 511 67C702 67 830 276 830 451V549C830 724 702 933 511 933C321 933 189 725 189 560Z",
  "artist-quote": "M20 292L219 292 219 894Q219 935 241 957.5 263 980 305 980L808 980Q898 980 939 928.5 980 877 980 779L980 708 855 708 855 106Q855 65 832.5 42.5 810 20 769 20L216 20Q115 20 67.5 71 20 122 20 221ZM101 220Q101 175 110 148 119 121 144.5 106.5 170 92 219 92L219 220ZM297 908L297 92 777 92 777 708 416 708Q416 784 410 825.5 404 867 384.5 887.5 365 908 325 908ZM682 259L392 259 392 187 682 187ZM592 426L392 426 392 354 592 354ZM682 593L392 593 392 521 682 521ZM465 908Q492 860 492 780L902 780Q902 845 880 876.5 858 908 802 908Z",
  "atom": "M184 680C157 633 191 566 263 498C191 429 157 362 184 316C211 269 286 264 381 292C404 196 446 133 500 133C554 133 595 196 618 292C713 264 788 269 815 316C842 362 808 429 736 498C808 566 842 633 815 680C788 727 713 731 618 703C595 799 553 862 500 862C446 862 405 799 381 703C286 731 211 727 184 680ZM227 655C237 673 294 672 371 651C367 627 364 603 362 577C341 562 321 547 303 533C245 588 217 637 227 655ZM227 341C217 358 246 407 303 463C321 448 341 433 362 419C364 393 367 368 371 344C294 323 237 323 227 341ZM409 497C409 515 410 532 411 549C424 558 439 567 454 576C469 585 484 593 499 600C515 593 530 585 545 576C560 567 575 558 588 549C589 532 590 515 590 497C590 480 589 463 588 446C574 437 559 428 544 419C529 410 514 402 499 395C485 402 470 410 455 419C440 428 425 437 411 446C410 463 409 480 409 497ZM431 309C453 318 476 328 499 339C523 328 546 318 568 309C548 233 520 183 500 183C479 183 451 232 431 309ZM431 686C451 763 479 812 500 812C520 812 548 763 568 686C545 677 523 668 500 656C476 668 453 677 431 686ZM628 651C705 672 762 673 772 655C782 637 754 588 696 533C678 547 658 562 637 577C635 603 632 627 628 651ZM628 344C632 368 635 393 637 419C658 433 678 448 696 463C753 407 782 358 772 341C762 323 705 323 628 344Z",
  "back": "M0 349L256 586L300 541L126 385H334V313H126L300 157L256 112ZM460 868V796H584C789 796 903 747 903 591C903 434 789 385 584 385H334V313H584C832 313 976 392 976 591C976 789 832 868 584 868Z",
  "back-top": "M746 483L500 221L254 483L301 528L461 356V980H539V356L699 528ZM780 92H220V20H780Z",
  "black-circle": "M500 715C624 715 715 622 715 499C715 375 624 284 500 284C377 284 286 375 286 499C286 624 377 715 500 715Z",
  "black-diamond": "M500 92L194 500L500 910L806 504Z",
  "black-nib": "M20 728V322C20 299 29 290 48 290H120C138 290 148 302 148 322V344C276 343 303 342 374 322C454 298 515 246 540 246H556C586 246 668 339 774 408C842 453 924 479 960 486C995 493 1002 499 1000 524C998 549 995 556 960 558C924 560 843 596 774 640C669 708 586 798 556 798H540C515 798 446 745 374 728C303 705 276 705 148 704V728C148 745 138 758 120 758H48C29 758 20 748 20 728ZM306 524C306 579 339 604 368 604C405 606 426 584 440 562L716 546C730 546 737 537 736 524C734 509 730 503 716 502L440 484C426 460 405 444 370 444C339 444 304 466 306 524Z",
  "black-sun-with-rays": "M211 499C211 693 317 788 499 788C681 788 787 693 787 499C787 318 681 212 499 212C317 212 211 318 211 499ZM471 20V214H529V20ZM471 20V214H529V20ZM471 786V980H529V786ZM819 140L682 277L723 318L860 181ZM277 682L140 819L181 860L318 723ZM980 471H786V529H980ZM214 471H20V529H214ZM860 819L723 682L682 723L819 860ZM318 277L181 140L140 181L277 318Z",
  "book-minus": "M20 898H980V771C732 771 616 788 544 857V453C544 239 605 180 902 180H980V108H902C672 108 560 146 504 243C449 146 342 108 70 108V214H20ZM128 771V180C407 180 465 239 465 453V858C411 805 313 771 128 771ZM657 514V442H980V514Z",
  "book-plus": "M633 519V449H765V312H837V449H969V519H837V656H765V519ZM20 898H980V771C732 771 616 788 544 857V453C544 239 605 180 902 180H980V108H902C672 108 560 146 504 243C449 146 342 108 70 108V214H20ZM128 771V180C407 180 465 239 465 453V858C411 805 313 771 128 771Z",
  "bookmark": "M142 924V110C142 53 173 20 232 20H770C825 20 858 53 858 110V924C858 989 788 1030 730 972L500 742L270 974C215 1029 142 989 142 924ZM188 945L500 630L812 945L780 965V92H220V965Z",
  "bulleted-list": "M109 226C141 226 166 201 166 167C166 135 141 110 109 110C74 110 50 135 50 167C50 201 74 226 109 226ZM278 136V204H950V136ZM278 358V426H850V358ZM278 578V646H950V578ZM109 449C141 449 166 424 166 390C166 358 141 333 109 333C74 333 50 358 50 390C50 424 74 449 109 449ZM109 669C141 669 166 644 166 610C166 578 141 553 109 553C74 553 50 578 50 610C50 644 74 669 109 669ZM278 798V866H650V798ZM109 889C141 889 166 864 166 830C166 798 141 773 109 773C74 773 50 798 50 830C50 864 74 889 109 889Z",
  "bulls-eye": "M218 500C217 320 329 218 498 218C667 218 783 320 782 500C781 693 667 782 498 782C329 782 219 693 218 500ZM0 498C-1 817 203 999 498 1000C793 1001 999 817 1000 498C1001 207 793 1 498 0C203 -1 1 207 0 498ZM80 500C80 255 255 82 498 82C741 82 920 255 920 500C920 764 741 918 498 918C255 918 80 764 80 500ZM293 500C294 642 374 707 499 707C623 707 706 642 707 500C708 368 623 293 499 293C374 293 292 368 293 500Z",
  "burger-menu": "M100 180H900V254H100ZM100 748H900V822H100ZM100 464H900V538H100Z",
  "c-circled": "M0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 768 926 504 926C240 926 82 771 82 558ZM498 782Q578 783 630 747Q682 711 709 650L651 600Q633 646 597 678Q561 710 511 710Q429 710 389 657.5Q349 605 349 524V496Q349 404 386.5 346Q424 288 501 288Q561 288 594 319.5Q627 351 643 394L699 338Q672 284 625 251.5Q578 219 511 218Q395 216 331 292.5Q267 369 267 502Q267 639 331 709.5Q395 780 498 782Z",
  "c-square": "M501 778Q585 779 636.5 743.5 688 708 714 647L652 612Q627 657 595.5 681.5 564 706 514 706 432 706 392 653.5 352 601 352 520L352 492Q352 400 389.5 342 427 284 504 284 564 284 594.5 310.5 625 337 647 375L712 331Q686 281 633.5 248 581 215 514 214 398 212 334 288.5 270 365 270 498 270 635 334 706 398 777 501 778ZM20 894Q20 935 42 957.5 64 980 106 980L894 980Q935 980 957.5 957.5 980 935 980 894L980 106Q980 65 957.5 42.5 935 20 894 20L106 20Q66 20 43 42.5 20 65 20 106ZM902 908L98 908 98 92 902 92Z",
  "caret-down": "M160 414L458 736C471 750 485 756 500 756C515 756 528 751 542 736L836 418C877 374 863 328 812 328H188C140 328 122 370 160 414ZM250 400H750L500 671Z",
  "caret-up": "M160 632L458 310C471 296 485 290 500 290C515 290 528 295 542 310L836 628C877 672 863 718 812 718H188C140 718 122 676 160 632ZM250 646H750L500 375Z",
  "caret-up-down": "M160 342L458 20C471 6 485 0 500 0C515 0 528 5 542 20L836 338C877 382 863 428 812 428H188C140 428 122 386 160 342ZM250 356H750L500 85ZM160 658L458 980C471 994 485 1000 500 1000C515 1000 528 995 542 980L836 662C877 618 863 572 812 572H188C140 572 122 614 160 658ZM250 644H750L500 915Z",
  "character-panel": "M933 452V391H892V203Q892 136 852.5 99.5Q813 63 739 63Q678 63 642 87Q606 111 589 140L635 182Q647 157 672.5 141Q698 125 735 125Q818 125 818 206V237H740Q661 237 618.5 264.5Q576 292 576 351Q576 400 607 429.5Q638 459 696 459Q746 459 776 439Q806 419 818 394H822Q822 424 840.5 438Q859 452 891 452ZM738 292H818V333Q818 349 809 361.5Q800 374 785.5 381Q771 388 751.5 393Q732 398 711 398Q650 398 650 350V339Q650 314 674 303Q698 292 738 292ZM524 917H578V833H507V489Q507 390 444 334.5Q381 279 267 279Q182 279 126.5 314.5Q71 350 46 401L104 455Q129 413 167 387.5Q205 362 262 362Q337 362 373.5 397Q410 432 410 499V561H286Q150 561 85 608Q20 655 20 743Q20 830 75 881Q130 932 230 932Q295 932 342 903Q389 874 410 816H416Q422 859 445.5 888Q469 917 524 917ZM245 850Q188 850 155 824.5Q122 799 122 753V728Q122 682 160 657.5Q198 633 282 633H410V736Q410 760 398 780.5Q386 801 364 817Q342 833 312 841.5Q282 850 245 850ZM987 924V863H946V675Q946 608 906.5 571.5Q867 535 791 535Q730 535 694 559Q658 583 641 612L687 656Q700 631 725 615Q750 599 788 599Q870 599 870 678V709H792Q713 709 670.5 736.5Q628 764 628 823Q628 872 659 901.5Q690 931 748 931Q799 931 828.5 911Q858 891 870 866H874Q874 896 892.5 910Q911 924 943 924ZM790 766H870V805Q870 821 861 830Q852 839 837.5 848.5Q823 858 803.5 863Q784 868 763 868Q704 868 704 822V811Q704 786 728 776Q752 766 790 766Z",
  "checkbox": "M20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM99 907H901V93H99Z",
  "checkbox-checked": "M20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98ZM218 751V249C218 217 237 198 269 198H731C763 198 782 217 782 249V751C782 783 763 802 731 802H269C236 802 218 783 218 751Z",
  "checkmark": "M160 489L410 739L848 301L792 246L409 629L215 434Z",
  "checkmark-circle": "M0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 768 926 504 926C240 926 82 771 82 558ZM205 522L415 732L793 354L737 299L414 622L260 467Z",
  "checkmark-square": "M190 519L410 739L808 341L752 286L409 629L245 464ZM20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98Z",
  "chevron-down": "M66 328L501 762L935 327L880 272L500 654L121 272Z",
  "chevron-down-circle": "M0 500C0 832 190 1002 500 1002C810 1002 1000 832 1000 500C1000 193 810 2 500 2C190 2 0 193 0 500ZM82 560V440C82 237 260 74 500 74C740 74 918 237 918 440V560C918 773 768 930 504 930C240 930 82 773 82 560ZM787 438L500 725L210 435L265 380L499 616L733 382Z",
  "chevron-left": "M674 68L240 503L675 937L730 882L348 502L730 123Z",
  "chevron-left-circle": "M0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 768 926 504 926C240 926 82 771 82 558ZM564 789L277 502L567 212L622 267L386 501L620 735Z",
  "chevron-right": "M326 68L760 503L325 937L270 882L652 502L270 123Z",
  "chevron-right-circle": "M1000 498C1000 830 810 1000 500 1000C190 1000 0 830 0 498C0 191 190 0 500 0C810 0 1000 191 1000 498ZM918 558V438C918 235 740 74 500 74C260 74 82 235 82 438V558C82 771 232 926 496 926C760 926 918 771 918 558ZM436 789L723 502L433 212L378 267L614 501L380 735Z",
  "chevron-up": "M66 674L501 240L935 675L880 730L500 348L121 730Z",
  "chevron-up-circle": "M1000 502C1000 170 810 0 500 0C190 0 0 170 0 502C0 809 190 1000 500 1000C810 1000 1000 809 1000 502ZM918 442V562C918 765 740 928 500 928C260 928 82 765 82 562V442C82 229 232 72 496 72C760 72 918 229 918 442ZM213 564L500 277L790 567L735 622L501 386L267 620Z",
  "cloud-download": "M746 738L694 688L539 860V568H461V860L306 688L254 738L500 1000ZM288 445H712C812 445 860 418 860 355C860 289 784 238 686 258C676 158 632 71 502 71C368 71 324 158 314 258C216 238 140 289 140 355C140 418 188 445 288 445ZM288 514C126 514 58 448 58 352C58 266 146 178 250 198C272 82 338 0 502 0C662 0 728 82 750 198C854 178 942 266 942 352C942 448 874 514 712 514Z",
  "cloud-x": "M658 571L714 626L554 786L713 945L658 999L499 840L340 1000L284 945L444 785L285 626L340 572L499 731ZM288 445H712C812 445 860 418 860 355C860 289 784 238 686 258C676 158 632 71 502 71C368 71 324 158 314 258C216 238 140 289 140 355C140 418 188 445 288 445ZM288 514C126 514 58 448 58 352C58 266 146 178 250 198C272 82 338 0 502 0C662 0 728 82 750 198C854 178 942 266 942 352C942 448 874 514 712 514Z",
  "club-black-suit": "M38 556C38 440 98 344 210 344C290 344 338 386 384 410L396 398C348 366 286 308 286 196C286 84 344 0 502 0C660 0 720 84 718 196C716 308 658 366 608 398L620 410C666 386 716 342 794 344C906 347 966 440 966 556C966 670 902 774 760 774C640 774 586 708 560 618H528C528 672 522 811 580 854C634 894 692 908 810 938V980H194V938C314 908 371 891 424 854C484 812 478 672 476 618H444C418 708 366 774 244 774C104 774 38 670 38 556Z",
  "collezioni": "M0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 498V438C82 234 260 70 500 70C740 70 918 235 918 438V498ZM122 729H880C820 851 690 930 504 930C318 930 184 851 122 729Z",
  "compare": "M20 664V106C20 52 52 20 106 20H499C553 20 585 52 585 106V664C585 718 553 750 499 750H106C50 750 20 718 20 664ZM98 678H507V92H98ZM415 734H493V908H902V322H555V250H894C948 250 980 282 980 336V894C980 948 948 980 894 980H501C445 980 415 948 415 894ZM249 214L209 256L312 351H98V409H312L209 504L249 546L411 380ZM771 444L609 610L771 776L811 734L708 639H902V581H708L811 486Z",
  "contextual-menu": "M380 120Q380 178 412 208 444 238 499 238 554 238 587 208 620 178 620 120 620 63 587 31.5 554 0 499 0 445 0 412.5 31.5 380 63 380 120ZM380 499Q380 558 412 588.5 444 619 499 619 555 619 587.5 588 620 557 620 499 620 441 587 410 554 379 499 379 444 379 412 410 380 441 380 499ZM380 882Q380 940 412 970 444 1000 499 1000 554 1000 587 970 620 940 620 882 620 824 587 793 554 762 499 762 444 762 412 793 380 824 380 882Z",
  "copy-to-clipboard": "M655 50L865 261 865 864Q865 905 842.5 927.5 820 950 779 950L506 950 506 882 789 882 789 350 641 350Q601 350 578 327 555 304 555 264L555 118 301 118 301 387 225 387 225 136Q225 95 248 72.5 271 50 311 50ZM623 118L623 282 789 282ZM404 483L450 436 634 610 452 783 404 736 511 641 207 641 207 980 135 980 135 575 511 575Z",
  "copyright": "M162 497C162 723 313 860 500 860C687 860 838 723 838 497C838 286 687 142 500 142C313 142 162 286 162 497ZM244 535V459C244 324 357 212 500 212C643 212 756 324 756 459V535C756 676 660 790 502 790C345 790 244 676 244 535ZM507 695Q560 695 594.5 670Q629 645 646 607L592 573Q577 600 558 616.5Q539 633 507 633Q463 633 440.5 605.5Q418 578 418 534V469Q418 425 440.5 397.5Q463 370 507 370Q536 370 554 385Q572 400 583 426L640 394Q623 355 590.5 331Q558 307 507 307Q429 307 385.5 359.5Q342 412 342 501Q342 590 385.5 642.5Q429 695 507 695Z",
  "cursor-index": "M336 156L332 719 455 543 584 822 675 780 544 502 758 521Z",
  "dagger": "M461 980H539V385H802V315H539V20H461V315H200V385H461Z",
  "daggerdbl": "M200 684H461V980H539V684H802V616H539V372H802V304H539V20H461V304H200V372H461V616H200Z",
  "delete": "M258 908H742V244H258ZM330 92V20H670V92ZM366 364H437V788H366ZM563 364H634V788H563ZM70 244V172H930V244H820V894C820 948 788 980 734 980H266C210 980 180 948 180 894V244Z",
  "diamond-black-suit": "M500 0L84 500L500 1000L916 504Z",
  "dictionary-switch": "M378 905H850C850 905 838 877 838 846C838 821 848 799 848 799H378ZM300 724H912V88H378H300C301 51 333 20 390 20H990V799C950 799 920 815 920 845C920 873 946 893 984 893H990V980H390C334 980 300 946 300 890ZM300 644H379L378 768H300ZM7 384C6 481 60 538 154 538H561L452 623L500 662L675 509L500 357L452 395L561 479H154C96 479 67 447 68 384ZM5 242L180 394L228 356L119 272H581C639 272 668 304 667 367H728C729 270 675 213 581 213H119L228 128L180 89Z",
  "dictonary": "M100 890V110C100 52 132 20 190 20H890V772C850 772 820 788 820 835C820 880 846 900 884 900H890V980H190C134 980 100 946 100 890ZM178 912H750C742 892 738 864 738 836C738 814 742 788 748 772H178ZM178 704H812V88H178ZM228 228H432C432 275 408 313 374 347C345 315 334 290 324 258L274 275C288 310 302 340 335 374C308 405 279 417 238 431L253 486C296 471 334 455 372 413C410 452 447 471 486 483L513 431C477 419 436 402 411 376C455 326 484 287 484 228H536V180H408V132H355V180H228ZM707 648H769L655 361H588L474 648H536L562 572H680ZM630 412L666 522H576L615 412Z",
  "document-with-text": "M180 834V166C180 112 212 80 266 80H610L820 291V834C820 888 788 920 734 920H266C210 920 180 888 180 834ZM256 852H744V312L578 148H256ZM578 148V312H744V380H596C542 380 510 348 510 294V148ZM336 490V558H664V490ZM336 650V718H564V650Z",
  "down-white-index": "M400 1000C360 1000 340 973 332 922L292 664C259 627 215 590 214 502C213 432 237 388 272 334C299 293 329 256 336 230C322 230 316 224 316 210V66C316 50 319 43 338 34C378 15 441 0 518 0C597 0 662 19 714 38C725 42 732 50 732 70V202C732 217 725 224 716 224C732 265 757 306 776 400C791 499 795 578 750 610C719 627 694 621 684 618C685 630 681 662 646 688C618 706 590 700 572 688C562 704 559 719 530 736C504 748 483 741 466 736C465 795 464 849 464 914C464 962 441 1000 400 1000ZM400 952C417 951 426 940 426 918L424 700C413 706 404 709 394 710C376 709 360 704 346 694L372 918C375 940 382 953 400 952ZM498 690C515 683 527 674 534 658C536 634 536 593 520 522C504 467 494 457 466 460C445 462 445 480 448 494C452 511 454 533 458 564C461 590 464 611 464 636C464 656 461 669 448 682C467 693 483 696 498 690ZM392 674C412 674 422 658 424 632C426 582 350 564 362 502C373 445 422 436 470 372C494 334 504 309 504 270H550C550 312 542 342 512 388C506 397 499 406 488 416C497 417 510 424 514 432C518 422 524 409 542 400C557 393 587 397 596 404C597 385 606 366 628 356C666 339 701 358 732 420L726 396C704 309 688 252 666 222C625 205 581 196 526 194C467 192 423 208 382 226C378 246 346 306 320 348C278 400 256 445 256 510C256 583 296 606 330 636C348 652 366 674 392 674ZM628 648C643 642 646 627 650 616C646 596 637 548 614 492C592 438 581 429 558 438C536 447 544 462 550 490C553 504 559 525 566 562C573 599 571 609 576 640C579 657 606 657 628 648ZM684 564C697 575 707 574 718 568C732 560 739 548 738 530C736 497 735 491 702 436C676 393 665 383 640 396C619 407 619 422 630 442C635 451 644 464 650 478C669 523 673 554 684 564ZM426 558L416 486C410 495 404 501 404 516C404 533 413 546 426 558ZM368 179C401 163 455 145 526 145C602 145 644 160 678 177V80C637 63 597 48 518 48C448 48 401 63 368 80Z",
  "download": "M902 544H980V894C980 948 948 980 894 980H106C52 980 20 948 20 894V544H98V908H902ZM746 517L699 472L539 644V20H461V644L301 472L254 517L500 779Z",
  "edit": "M61 576L589 49C627 11 672 10 711 49L815 153C854 192 853 237 815 275L287 802H61ZM559 178L513 224L640 351L686 305ZM253 737L780 211L653 84L126 610V783L80 737ZM20 912V980H980V912Z",
  "edit-picture": "M295 500L745 50C783 12 828 12 866 50L971 155C1009 193 1009 238 971 276L521 726H295ZM722 183L674 231L790 347L838 299ZM484 653L929 208L813 92L368 537V653ZM50 894V106C50 52 82 20 136 20H590V92H128V410L261 238C294 196 321 195 354 239L440 355L387 408L308 293L128 521V908H871V814L679 568L729 518L871 700V495H949V894C949 948 917 980 863 980H136C80 980 50 948 50 894Z",
  "electric-light-bulb": "M388 640C387 546 240 470 240 348V266C240 161 316 72 502 74C688 76 760 161 760 266V348C760 470 616 546 616 640H698C697 555 843 484 842 297C841 134 761 -2 502 0C245 2 159 134 158 297C157 484 306 556 306 640ZM306 742H698V814H306ZM362 908H642V980H362Z",
  "email": "M20 733V265C20 211 52 179 106 179H894C948 179 980 211 980 265V733C980 787 948 819 894 819H106C50 819 20 787 20 733ZM98 747H902V251H98ZM957 251C955 255 952 258 949 261L542 612C527 625 515 632 500 632C485 632 471 624 458 612L50 257C48 255 47 253 45 251H146L500 556L857 251Z",
  "event": "M290 870H106C50 870 20 838 20 784V210C20 156 52 124 106 124H894C948 124 980 156 980 210V344H902V196H98V798H290ZM238 20H316V294H238ZM684 20H762V294H684ZM642 551H704V711L642 715ZM642 715L681 670L813 792L773 837ZM690 1000C871 1000 1000 881 1000 690C1000 509 871 380 690 380C509 380 380 508 380 690C380 881 509 1000 690 1000ZM690 935C553 935 458 845 458 719V659C458 535 554 445 690 445C826 445 922 533 922 658V721C922 846 826 935 690 935Z",
  "event-cancelled": "M744 206H902V344H980V220C980 166 948 134 894 134H803ZM238 20V304H316V20ZM125 788H98V206H602L662 134H106C52 134 20 166 20 220V774C20 828 42 860 65 860ZM642 551H704V711L642 715ZM642 715L681 670L813 792L773 837ZM100 951L162 1000L382 726C397 896 521 1000 690 1000C871 1000 1000 881 1000 690C1000 510 871 380 690 380C679 380 669 380 659 381L926 48L864 0ZM458 719V659C458 649 459 639 460 629L594 462C623 451 655 445 690 445C826 445 922 533 922 658V721C922 846 826 935 690 935C553 935 458 845 458 719Z",
  "exclamation-circle": "M472 605H528L544 403V195H456V403ZM499 801Q534 801 547 787Q560 773 560 749V737Q560 714 547 699.5Q534 685 499 685Q465 685 452.5 699.5Q440 714 440 737V749Q440 773 452.5 787Q465 801 499 801ZM0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 768 926 504 926C240 926 82 771 82 558Z",
  "exclamation-square": "M472 598H528L544 406V198H456V406ZM499 794Q534 794 547 780Q560 766 560 742V730Q560 707 547 692.5Q534 678 499 678Q465 678 452.5 692.5Q440 707 440 730V742Q440 766 452.5 780Q465 794 499 794ZM20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98Z",
  "exercises-interactive": "M401 619C381 644 382 686 415 714C538 818 579 854 627 854H723C820 854 844 806 844 679V617C844 588 827 565 793 565C779 565 768 570 763 575C761 561 747 540 716 540C700 540 691 545 684 551C681 545 669 527 641 527C629 527 622 529 617 531C617 528 617 511 617 491V433C617 399 604 376 565 376C527 376 511 399 511 433V626L485 609C453 588 422 593 401 619ZM434 642C443 629 456 633 469 641L547 693V429C547 413 553 406 565 406C577 406 583 413 583 429V584V662H623V573C623 560 628 553 641 553C652 553 658 560 658 573L659 663H699L698 584C698 574 703 567 713 567C724 567 730 573 730 585V663H770V617C770 605 775 596 788 596C801 596 807 605 807 617V654V679C807 786 789 809 743 809H627C591 809 557 776 438 677C426 667 425 654 434 642ZM170 369L380 569L708 209L652 156L379 460L225 314ZM20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98Z",
  "exercises-online": "M482 674C482 785 563 866 674 866C785 866 866 785 866 674C866 563 785 482 674 482C563 482 482 563 482 674ZM512 674C512 652 514 635 521 628H584C581 633 578 651 578 674C578 697 579 715 583 720H521C514 713 512 696 512 674ZM530 750H588C599 785 617 811 637 836C590 824 551 792 530 750ZM530 598C552 556 594 523 642 512C621 535 604 562 590 598ZM614 673C614 651 618 642 623 628H725C731 641 733 651 733 673C733 696 727 711 724 720H623C618 713 614 696 614 673ZM624 750H720C710 783 696 811 673 839C651 811 637 783 624 750ZM628 598C638 565 652 537 673 511C695 537 708 565 719 598ZM706 512C753 523 796 556 818 598H758C744 562 722 535 706 512ZM710 836C728 811 747 785 759 750H818C797 792 758 824 710 836ZM764 628H827C834 635 836 652 836 674C836 696 834 713 827 720H764C767 715 769 697 769 674C769 651 766 633 764 628ZM482 674C482 563 563 482 674 482C785 482 866 563 866 674C866 785 785 866 674 866C563 866 482 785 482 674ZM170 369L380 569L708 209L652 156L379 460L225 314ZM20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98Z",
  "exercises-plus": "M170 369L380 569L708 209L652 156L379 460L225 314ZM20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98ZM554 698V656H648V559H694V656H788V698L694 697V793H648V697ZM670 842C762 842 836 779 836 676C836 574 762 511 670 511C580 511 505 574 505 676C505 780 580 842 670 842Z",
  "favorites": "M20 297Q20 440 90.5 573.5 161 707 269.5 814.5 378 922 500 1000 622 922 730.5 814.5 839 707 909.5 573.5 980 440 980 297 980 202 949.5 135 919 68 866 34 813 0 746 0 666 0 600.5 51.5 535 103 500 215 464 103 398.5 51.5 333 0 254 0 187 0 134 34 81 68 50.5 135 20 202 20 297ZM102 300Q102 202 143.5 141 185 80 255 80 327 80 383 153.5 439 227 499 388L501 388Q560 227 616 153.5 672 80 745 80 815 80 856.5 141 898 202 898 300 898 424 836.5 541.5 775 659 684 751 593 843 500 903 407 843 316 751 225 659 163.5 541.5 102 424 102 300Z",
  "film-frames": "M106 150H894C948 150 980 182 980 236V754C980 818 948 850 894 850H106C52 850 20 818 20 754V236C20 180 52 150 106 150ZM799 188C795 188 792 191 792 195V233C792 237 795 240 799 240H867C871 240 874 237 874 233V195C874 191 871 188 867 188ZM355 188C351 188 348 191 348 195V233C348 237 351 240 355 240H423C427 240 430 237 430 233V195C430 191 427 188 423 188ZM267 278C213 278 181 308 181 364V636C181 690 213 722 267 722H733C787 722 819 690 819 636V364C819 310 787 278 733 278ZM133 188C129 188 126 191 126 195V233C126 237 129 240 133 240H201C205 240 208 237 208 233V195C208 191 205 188 201 188ZM577 188C573 188 570 191 570 195V233C570 237 573 240 577 240H645C649 240 652 237 652 233V195C652 191 649 188 645 188ZM799 760C795 760 792 763 792 767V805C792 809 795 812 799 812H867C871 812 874 809 874 805V767C874 763 871 760 867 760ZM355 760C351 760 348 763 348 767V805C348 809 351 812 355 812H423C427 812 430 809 430 805V767C430 763 427 760 423 760ZM133 760C129 760 126 763 126 767V805C126 809 129 812 133 812H201C205 812 208 809 208 805V767C208 763 205 760 201 760ZM577 760C573 760 570 763 570 767V805C570 809 573 812 577 812H645C649 812 652 809 652 805V767C652 763 649 760 645 760ZM20 278V722H43C97 722 129 690 129 636V364C129 310 97 278 43 278ZM980 278H957C903 278 871 310 871 364V636C871 690 903 722 957 722H980ZM450 620L611 520C624 512 626 506 626 497C626 490 624 483 611 475L452 377C431 364 410 365 410 399V601C410 628 428 634 450 620Z",
  "frame-with-picture": "M20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98ZM944 931L670 542L582 674C559 708 534 709 510 674L308 380L55 739V625L271 316C291 287 323 288 344 317L544 603L629 483C655 447 684 445 710 482L944 817ZM670 371C731 371 780 322 780 260C780 199 731 150 670 150C608 150 559 199 559 260C559 322 608 371 670 371ZM670 310C644 310 623 288 623 260C623 233 644 211 670 211C695 211 716 233 716 260C716 288 695 310 670 310Z",
  "gear": "M20 550L110 568C118 636 137 693 168 740L125 804L196 875L260 832C308 862 365 881 432 888L450 980H550L568 888C634 880 691 861 738 831L804 875L875 804L830 737C859 691 878 635 886 569L980 550V450L886 431C878 368 858 312 828 266L875 196L804 125L734 172C688 141 632 121 569 113L550 20H450L432 112C367 120 311 140 264 170L196 125L125 196L170 263C139 310 118 367 110 432L20 450ZM180 545V451C180 292 310 173 498 173C686 173 816 292 816 451V545C816 712 708 827 501 827C294 827 180 712 180 545ZM364 519V480C364 411 418 361 498 361C578 361 632 411 632 480V519C632 589 586 639 498 639C410 639 364 589 364 519Z",
  "geogebra": "M89 491C89 525 109 554 138 567C141 666 187 742 258 788V794C258 840 296 878 342 878C371 878 397 863 412 840C427 841 443 842 458 842C550 842 636 813 707 764C719 771 734 775 749 775C795 775 833 737 833 691C833 676 829 661 821 649C864 586 889 512 889 437C889 421 888 404 885 389C903 374 914 351 914 326C914 280 876 242 830 242C823 242 816 243 809 245C749 189 661 159 566 159L546 160C532 135 505 118 474 118C430 118 393 154 390 197C292 242 216 320 174 407H173C127 407 89 445 89 491ZM198 571C232 560 257 528 257 491C257 466 246 444 229 429C265 355 331 293 410 256C425 274 448 286 474 286C514 286 548 257 556 219H566C646 219 713 242 759 282C751 295 746 310 746 326C746 371 783 409 828 410C829 419 829 428 829 437C829 499 809 559 774 611C766 608 758 607 749 607C703 607 665 645 665 691C665 700 666 708 669 716C608 757 535 782 458 782C447 782 436 782 425 781C419 741 384 710 342 710C320 710 299 719 284 733C233 697 202 641 198 571Z",
  "headphone": "M0 650C0 769 67 852 206 852H236V483C236 341 343 219 503 219C657 219 764 341 764 483V852H794C933 852 1000 769 1000 650C1000 545 948 468 840 451C813 260 698 145 503 145C303 145 187 260 160 451C52 468 0 545 0 650Z",
  "heart-black-suit": "M40 260C40 83 151 -1 238 0C330 1 396 36 432 150L478 296H520L566 150C602 36 670 -1 762 0C848 1 961 83 960 260C958 656 535 827 500 1000C468 827 40 656 40 260Z",
  "helmsymbol": "M388 516V483C388 426 433 385 499 385C565 385 610 426 610 483V516C610 574 572 615 499 615C426 615 388 574 388 516ZM223 545C223 670 332 788 499 788C666 788 775 670 775 545V453C775 330 648 212 499 212C350 212 223 330 223 453ZM157 554V443C157 286 310 153 499 153C688 153 841 286 841 443V554C841 714 709 847 499 847C289 847 157 714 157 554ZM20 466L192 468L209 478L391 480V517L210 519L190 529L20 531ZM980 466V531L810 529L790 519L609 517V480L791 478L808 468ZM184 136L304 259L309 278L436 408L410 435L280 308L259 301L138 182ZM862 815L816 861L698 739L691 718L564 589L590 562L720 690L739 695ZM532 18L530 190L520 207L518 389H482L480 208L469 188L467 18ZM533 979L468 978L470 809L480 788L481 607H519L521 789L531 806ZM862 182L739 302L720 307L590 435L564 408L691 279L698 258L816 136ZM184 861L138 815L259 696L280 689L410 562L436 589L309 719L304 738Z",
  "highlights": "M20 912V980H980V912ZM114 810L184 811L260 735L175 653L67 763ZM136 548C108 591 98 616 140 658L261 779C296 814 324 804 365 777L487 696L857 254C891 214 896 172 857 133L771 47C732 8 690 12 650 47L213 428ZM179 605L263 480L431 650L306 734ZM313 436L709 78L826 195L476 600Z",
  "hourglass-flowing": "M70 938C70 914 82 896 118 894C156 892 166 884 166 852C166 756 234 658 290 626C332 602 346 566 346 530V494C346 444 330 410 270 376C204 338 180 244 166 144C162 122 144 106 118 106C92 106 70 88 70 64C70 38 92 20 118 20H878C904 20 926 38 926 64C926 88 904 104 878 106C852 106 834 122 830 144C816 244 792 338 726 376C666 410 650 444 650 494V530C650 566 664 602 706 626C762 658 830 756 830 852C830 884 840 894 878 894C914 896 926 914 926 938C926 966 908 980 878 980H118C88 980 70 966 70 938ZM424 522H572V452C572 386 638 358 676 324C725 281 754 228 754 88H242C242 228 271 281 320 324C358 358 424 386 424 452ZM296 204C296 220 311 249 367 291C423 333 472 366 472 447V522H524V447C524 366 573 333 629 291C685 249 700 220 700 204Z",
  "hourglass-half-bottom": "M70 938C70 914 82 896 118 894C156 892 166 884 166 852C166 756 234 658 290 626C332 602 346 566 346 530V494C346 444 330 410 270 376C204 338 180 244 166 144C162 122 144 106 118 106C92 106 70 88 70 64C70 38 92 20 118 20H878C904 20 926 38 926 64C926 88 904 104 878 106C852 106 834 122 830 144C816 244 792 338 726 376C666 410 650 444 650 494V530C650 566 664 602 706 626C762 658 830 756 830 852C830 884 840 894 878 894C914 896 926 914 926 938C926 966 908 980 878 980H118C88 980 70 966 70 938ZM424 522H572V452C572 386 638 358 676 324C725 281 754 228 754 88H242C242 228 271 281 320 324C358 358 424 386 424 452Z",
  "house": "M397 573H599V907H397ZM812 323L890 373V880C890 934 858 966 804 966H196C140 966 110 934 110 880V374L188 324V894H812ZM0 429L498 25L996 429L951 486L463 97H533L45 486Z",
  "inbox-tray": "M20 890V516C20 460 52 426 110 426H236L188 374C160 336 178 298 222 298H348V20H426V366H282L500 604L718 366H572V20H650V298H776C826 298 840 340 808 376L762 426H890C948 426 980 460 980 516V890C980 946 948 980 890 980H110C54 980 20 946 20 890ZM98 908H902V496H692L538 666C526 678 514 686 500 686C486 686 474 678 460 666L306 496H98ZM658 812H812V714H658Z",
  "informationsource": "M316 772H684V704H555V392H357V460H477V704H316ZM490 316Q525 316 541 299Q557 282 557 255V241Q557 216 541 199Q525 182 490 182Q455 182 439 199Q423 216 423 241V255Q423 282 439 299Q455 316 490 316ZM0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 768 926 504 926C240 926 82 771 82 558Z",
  "interactive-glossaries": "M55 612L55 385 168 385Q196 385 211.5 401 227 417 227 444 227 456 224 465.5 221 475 215.5 481 210 487 202 489.5 194 492 185 492L185 494Q193 494 202.5 497 212 500 219 506.5 226 513 231 523 236 533 236 547 236 561 231.5 573 227 585 219.5 593.5 212 602 201.5 607 191 612 178 612ZM103 519L103 570 161 570Q171 570 178 565 185 560 185 550L185 539Q185 530 178 524.5 171 519 161 519ZM103 427L103 478 154 478Q164 478 170.5 472.5 177 467 177 457L177 447Q177 438 170.5 432.5 164 427 154 427ZM146 945Q123 945 104 938 85 931 72 916 59 901 51.5 879.5 44 858 44 828 44 800 51.5 778 59 756 72 740.5 85 725 104 717.5 123 710 146 710 182 710 203.5 721.5 225 733 237 761L193 783Q188 772 178.5 764.5 169 757 146 757 124 757 112 770 100 783 100 809L100 846Q100 874 112.5 887.5 125 901 147 901 169 901 179.5 893 190 885 198 870L239 892Q226 919 204 932 182 945 146 945ZM176 48L250 275 198 275 182 221 107 221 90 275 39 275 114 48ZM118 179L170 179 144 92 143 92ZM369 214L369 146 941 146 941 214ZM369 536L369 468 801 468 801 536ZM369 858L369 790 941 790 941 858Z",
  "interactives-maps": "M170 336C271 336 336 269 336 166C336 65 271 0 170 0C65 0 0 65 0 166C0 269 65 336 170 336ZM170 269C100 269 71 229 71 166C71 105 100 63 170 63C237 63 263 105 263 166C263 229 237 269 170 269ZM310 136V201L523 200V135ZM523 148H455V825H523ZM455 368V433L687 432V367ZM455 797V862L687 861V796ZM834 568C935 568 1000 501 1000 398C1000 297 935 232 834 232C729 232 664 297 664 398C664 501 729 568 834 568ZM834 501C764 501 735 461 735 398C735 337 764 295 834 295C901 295 928 337 928 398C928 461 901 501 834 501ZM834 1000C935 1000 1000 933 1000 830C1000 729 935 664 834 664C729 664 664 729 664 830C664 933 729 1000 834 1000ZM834 933C764 933 735 893 735 830C735 769 764 727 834 727C901 727 928 769 928 830C928 893 901 933 834 933Z",
  "left-magnifying-glass": "M0 370C0 619 158 745 370 744C583 743 742 619 742 370C742 138 583 0 370 0C158 0 0 137 0 370ZM82 424V326C82 182 220 74 370 74C523 74 660 182 660 326V424C660 564 540 669 370 670C202 671 82 564 82 424ZM580 656L942 993L1000 936L637 601Z",
  "left-white-index": "M0 402C0 362 27 342 78 334L336 294C373 261 410 217 498 216C568 215 612 239 666 274C707 301 744 331 770 338C770 324 776 318 790 318H934C950 318 957 321 966 340C985 380 1000 443 1000 520C1000 599 981 664 962 716C958 727 950 734 930 734H798C783 734 776 727 776 718C735 734 694 759 600 778C501 793 422 797 390 752C373 721 379 696 382 686C370 687 338 683 312 648C294 620 300 592 312 574C296 564 281 561 264 532C252 506 259 485 264 468C205 467 151 466 86 466C38 466 0 443 0 402ZM48 402C49 419 60 428 82 428L300 426C294 415 291 406 290 396C291 378 296 362 306 348L82 374C60 377 47 384 48 402ZM310 500C317 517 326 529 342 536C366 538 407 538 478 522C533 506 543 496 540 468C538 447 520 447 506 450C489 454 467 456 436 460C410 463 389 466 364 466C344 466 331 463 318 450C307 469 304 485 310 500ZM326 394C326 414 342 424 368 426C418 428 436 352 498 364C555 375 564 424 628 472C666 496 691 506 730 506V552C688 552 658 544 612 514C603 508 594 501 584 490C583 499 576 512 568 516C578 520 591 526 600 544C607 559 603 589 596 598C615 599 634 608 644 630C661 668 642 703 580 734L604 728C691 706 748 690 778 668C795 627 804 583 806 528C808 469 792 425 774 384C754 380 694 348 652 322C600 280 555 258 490 258C417 258 394 298 364 332C348 350 326 368 326 394ZM352 630C358 645 373 648 384 652C404 648 452 639 508 616C562 594 571 583 562 560C553 538 538 546 510 552C496 555 475 561 438 568C401 575 391 573 360 578C343 581 343 608 352 630ZM436 686C425 699 426 709 432 720C440 734 452 741 470 740C503 738 509 737 564 704C607 678 617 667 604 642C593 621 578 621 558 632C549 637 536 646 522 652C477 671 446 675 436 686ZM442 428L514 418C505 412 499 406 484 406C467 406 454 415 442 428ZM821 370C837 403 855 457 855 528C855 604 840 646 823 680H920C937 639 952 599 952 520C952 450 937 403 920 370Z",
  "link": "M110 545L348 307C421 234 509 249 585 324C660 398 674 487 601 560L574 587L525 538L551 511C591 470 590 426 537 372C483 317 438 316 397 357L160 594C119 635 121 679 175 734C228 788 273 788 314 748L341 722L390 771L363 798C290 871 202 856 126 782C50 708 37 618 110 545ZM417 442L444 415L493 464L467 491C427 532 427 577 481 630C536 684 580 686 621 645L858 408C899 367 898 322 843 268C789 215 745 214 704 254L677 280L628 231L655 204C728 131 817 145 892 220C967 295 981 384 908 457L670 695C597 768 508 754 433 678C359 603 344 515 417 442Z",
  "list-bulleted-square": "M110 20H890C947 20 980 53 980 110V890C980 946 947 980 890 980H110C54 980 20 946 20 890V110C20 53 51 20 110 20ZM98 92V908H902V92ZM245 332C277 332 302 307 302 273C302 241 277 216 245 216C210 216 186 241 186 273C186 307 210 332 245 332ZM394 241H794V311H394ZM394 463H794V533H394ZM394 683H794V753H394ZM245 555C277 555 302 530 302 496C302 464 277 439 245 439C210 439 186 464 186 496C186 530 210 555 245 555ZM245 775C277 775 302 750 302 716C302 684 277 659 245 659C210 659 186 684 186 716C186 750 210 775 245 775Z",
  "location": "M147 345C147 588 329 615 501 1000C672 615 852 588 852 345C852 156 723 0 501 0C276 0 147 156 147 345ZM229 321C229 212 314 70 501 70C685 70 770 212 770 321V387C770 524 611 613 501 834C391 616 229 524 229 387ZM340 348C340 448 393 518 499 518C606 518 659 448 659 348C659 252 606 182 499 182C393 182 340 252 340 348ZM420 363V334C420 301 444 258 499 258C555 258 579 301 579 334V363C579 398 562 442 500 442C439 442 420 398 420 363Z",
  "lock": "M130 894V506C130 452 162 420 216 420H784C838 420 870 452 870 506V894C870 948 838 980 784 980H216C160 980 130 948 130 894ZM208 908H792V492H208ZM646 420H724V220C724 107 659 -2 502 0C346 2 276 107 276 220V420H354V220C354 136 403 65 502 66C600 67 646 136 646 220Z",
  "login": "M600 92V20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H600V908H902V92ZM440 254L395 301L567 464H20V536H567L395 698L440 746L702 500Z",
  "logout": "M400 92H98V908H400V980H106C52 980 20 948 20 894V106C20 52 52 20 106 20H400ZM718 254L673 301L845 464H298V536H845L673 698L718 746L980 500Z",
  "lozenge": "M460 910H538L812 500L538 92H460L186 500ZM510 830H488L276 500L488 170H510L722 500Z",
  "magnfying-glass": "M756 191H845V294H911V191H1000V133H911V20H845V133H756ZM82 397V328C82 209 177 118 316 118C455 118 551 209 551 328V397C551 520 471 614 318 614C166 614 82 520 82 397ZM756 495H1000V431H756ZM0 362C0 563 137 688 316 688C390 688 457 666 511 627L862 954L920 897L567 571C609 517 633 446 633 362C633 175 495 44 316 44C137 44 0 175 0 362Z",
  "map": "M193 634C193 600 198 568 208 538H329C323 567 319 599 319 634C319 669 321 701 327 730H208C198 700 193 668 193 634ZM228 779H339C359 844 393 895 430 939C343 918 269 859 228 779ZM379 633C379 599 383 567 389 538H609C615 567 619 599 619 633C619 668 616 700 610 730H387C382 700 379 668 379 633ZM400 779H598C577 842 542 896 499 947C456 896 421 842 400 779ZM677 310L643 357C698 387 743 433 772 489H657C646 454 631 424 614 397L578 446C584 460 590 474 595 489H403C409 470 417 451 426 434L389 390C370 419 354 451 342 489H228C258 431 304 384 360 355L323 310C208 370 134 489 134 634C134 844 290 1000 500 1000C710 1000 866 844 866 634C866 489 792 370 677 310ZM567 939C604 895 638 844 659 779H772C731 860 656 919 567 939ZM670 538H792C802 568 807 600 807 634C807 668 802 700 792 730H671C676 701 679 669 679 634C679 599 675 567 670 538ZM333 159C333 279 401 266 498 447C595 266 662 279 662 159C662 73 588 0 498 0C407 0 333 73 333 159ZM498 231C458 231 427 200 427 160C427 120 458 89 498 89C538 89 569 120 569 160C569 201 538 231 498 231Z",
  "medium-black-square": "M286 715V284H715V715Z",
  "medium-white-square": "M286 715V284H715V715ZM361 645H638V354H361Z",
  "minus": "M138 533H862V457H138Z",
  "minus-circled": "M0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 764 926 500 926C236 926 82 771 82 558ZM258 536V464H742V536Z",
  "minus-square": "M218 532H782V460H218ZM20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98Z",
  "multiply": "M144 195L445 496L144 797L199 852L500 551L801 852L856 797L555 496L856 195L801 140L500 441L199 140Z",
  "multiply-circle": "M658 284L499 444L340 285L285 339L444 498L284 658L340 713L499 553L658 712L713 658L554 499L714 339ZM0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 768 926 504 926C240 926 82 771 82 558Z",
  "multiply-circled": "M264 315L445 496L264 677L319 732L500 551L681 732L736 677L555 496L736 315L681 260L500 441L319 260ZM0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 764 926 500 926C236 926 82 771 82 558Z",
  "multiply-square": "M678 264L734 319L554 499L733 678L678 732L499 553L320 733L264 678L444 498L265 319L320 265L499 444ZM20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98Z",
  "notification": "M20 746C20 784 36 794 68 794H298C298 933 381 1000 500 1000C619 1000 702 933 702 794H932C964 794 980 784 980 746V601L849 484C849 263 790 102 571 74V0H429V74C210 102 151 263 151 484L20 601ZM100 720V632L233 516V427C233 286 290 140 500 140C710 140 767 286 767 427V516L900 632V720ZM380 794H620C620 887 571 930 500 930C429 930 380 887 380 794Z",
  "notification-new": "M702 794H620C620 887 571 930 500 930C429 930 380 887 380 794H298C298 933 381 1000 500 1000C619 1000 702 933 702 794ZM847 413H767C767 418 767 422 767 427V516L900 632V720H100V632L233 516V427C233 286 290 140 500 140C554 140 598 150 634 167V87C614 81 593 77 571 74V0H429V74C210 102 151 263 151 484L20 601V746C20 784 36 794 68 794H932C964 794 980 784 980 746V601L849 484C849 460 848 436 847 413ZM817 353C896 353 960 288 960 209C960 130 896 66 817 66C738 66 674 130 674 209C674 289 738 353 817 353Z",
  "notification-off": "M760 162L709 227C752 281 767 355 767 427V516L900 632V720H280V794H932C964 794 980 784 980 746V601L849 484C849 349 827 236 760 162ZM692 794H610C610 877 561 920 500 920C439 920 390 877 390 794H308C308 923 391 991 500 991C609 991 692 923 692 794ZM429 0V82H571V0ZM844 0L80 951L142 1000L906 48ZM605 155L653 93C611 78 560 70 500 70C222 70 151 241 151 484L20 601V717H100V632L233 516V427C233 286 290 140 500 140C540 140 575 145 605 155Z",
  "numbered-list": "M369 146V214H941V146ZM369 468V536H801V468ZM369 790V858H941V790ZM72 276H235V232H190V52H120L58 115L82 161L131 97H135V232H72ZM241 613V569H129L178 528Q203 504 219.5 486.5Q236 469 236 443Q236 413 216 395Q196 377 159 377Q137 377 123 381.5Q109 386 99 393.5Q89 401 82.5 410.5Q76 420 72 431L112 453Q117 438 127 428Q137 418 152 418Q169 418 174.5 425.5Q180 433 180 443V445Q180 465 165.5 480Q151 495 120 522L70 566V613ZM151 802H127V847H154Q191 847 191 876V879Q191 897 183.5 902.5Q176 908 157 908Q141 908 128 898Q115 888 106 874L71 909Q83 924 102 936.5Q121 949 161 949Q203 949 226.5 931.5Q250 914 250 885Q250 854 235 840.5Q220 827 199 824V822Q218 817 232 804.5Q246 792 246 764Q246 740 223.5 725Q201 710 158 710Q128 710 109.5 721Q91 732 81 747L115 781Q123 768 133 759.5Q143 751 157 751Q173 751 180 758Q187 765 187 774V777Q187 791 176 796.5Q165 802 151 802Z",
  "open-file-folder": "M20 810V210C20 152 52 120 110 120H382L474 258H722C780 258 812 290 812 348V478H934C990 478 1015 516 990 568L872 818C845 874 810 900 754 900H110C54 900 20 866 20 810ZM98 707L162 562C187 506 226 478 284 478H734V330H436L340 192H98ZM119 828H794L924 550H245Z",
  "open-lock": "M130 894V506C130 452 162 420 216 420H784C838 420 870 452 870 506V894C870 948 838 980 784 980H216C160 980 130 948 130 894ZM208 908H792V492H208ZM646 211H724C721 101 655 -2 502 0C346 2 276 107 276 220V420H354V220C354 136 403 65 502 66C597 67 643 131 646 211Z",
  "pause": "M0 498C-1 817 203 999 498 1000C793 1001 999 817 1000 498C1001 207 793 1 498 0C202 -1 1 207 0 498ZM82 500C82 255 255 83 498 83C741 83 918 255 918 500C918 764 741 917 498 917C255 917 82 764 82 500ZM359 692V304H451V692ZM549 692V304H641V692Z",
  "pdf": "M636 149V313H802V381H654C600 381 568 349 568 295V149ZM192 703H225V617H282Q309 617 323.5 601.5Q338 586 338 559Q338 532 323.5 516.5Q309 501 282 501H192ZM225 586V531H274Q290 531 297 534.5Q304 538 304 551V567Q304 580 297 583Q290 586 274 586ZM367 501V703H435Q454 703 469 696.5Q484 690 494.5 677.5Q505 665 511 646Q517 627 517 602Q517 577 511 558Q505 539 494.5 526.5Q484 514 469 507.5Q454 501 435 501ZM426 673H400V531H426Q437 531 448 535.5Q459 540 466.5 548Q474 556 478 567.5Q482 579 482 595V609Q482 625 478 636.5Q474 648 466.5 656Q459 664 448 668.5Q437 673 426 673ZM549 703H581V612H660V581H581V531H669V501H549ZM122 699V507C122 453 154 421 208 421H644C698 421 730 453 730 507V699C730 753 700 783 644 783H208C152 783 122 753 122 699ZM238 783H314V853H802V313L636 149H314V421H238V167C238 113 270 81 324 81H668L878 292V835C878 889 846 921 792 921H324C268 921 238 889 238 835Z",
  "periodic-table": "M20 20V248H249V20ZM20 263V492H249V263ZM20 507V736H249V507ZM20 751V980H249V751ZM264 263V492H493V263ZM264 507V736H493V507ZM264 751V980H493V751ZM508 751V980H737V751ZM752 751V980H980V751ZM264 20V249H980V20ZM508 227V736H737V227ZM752 264H980V344L838 577V559H983V637H752V557L906 305L915 327H752Z",
  "play": "M432 674L664 530C682 519 685 509 685 497C685 486 683 477 664 465L435 324C404 305 375 307 375 355V646C375 685 401 693 432 674ZM0 498C-1 817 203 999 498 1000C793 1001 999 817 1000 498C1001 207 793 1 498 0C203 -1 1 207 0 498ZM82 500C82 255 255 83 498 83C741 83 918 255 918 500C918 764 741 917 498 917C255 917 82 764 82 500Z",
  "plus": "M138 531H462V878H538V531H862V461H538V114H462V461H138Z",
  "plus-circled": "M257 531V461H461V234H539V461H743V531H539V758H461V531ZM0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 768 926 504 926C240 926 82 771 82 558Z",
  "plus-square": "M238 531H461V778H539V531H762V461H539V214H461V461H238ZM20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98Z",
  "powerpoint": "M200 680V318H362Q409 318 435.5 345.5Q462 373 462 422Q462 470 435.5 498.5Q409 527 362 527H259V680ZM259 470H346Q376 470 388 464.5Q400 459 400 434V407Q400 384 388 378Q376 372 346 372H259ZM612 771H875C927 771 960 738 960 690V303C960 247 926 220 870 220H612C612 404 612 587 612 771ZM612 464H850V527H612ZM612 604H790V667H612ZM612 324H790V387H612ZM40 746C40 781 58 795 83 800L540 896C579 904 612 897 612 843C612 620 612 388 612 151C612 106 594 84 540 95L80 192C48 199 40 220 40 250C40 415 40 581 40 746Z",
  "qrcode": "M420 420L20 420 20 20 420 20ZM980 420L580 420 580 20 980 20ZM96 92L96 348 344 348 344 92ZM656 92L656 348 904 348 904 92ZM285 291L155 291 155 149 285 149ZM845 291L715 291 715 149 845 149ZM693 580L509 580 509 508 767 508 767 699 693 699ZM420 980L20 980 20 580 420 580ZM980 980L640 980 640 908 904 908 904 640 980 640ZM96 652L96 908 344 908 344 652ZM597 779L523 779 523 674 597 674ZM841 851L767 851 767 699 841 699ZM285 851L155 851 155 709 285 709ZM702 851L597 851 597 779 702 779Z",
  "question-mark-circle": "M0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 768 926 504 926C240 926 82 771 82 558ZM495 215C627 216 673 280 672 383C671 495 590 541 531 541V609H453V485C548 483 582 437 583 383C584 342 565 285 495 285C419 285 385 346 373 391L306 347C328 277 380 214 495 215ZM494 676C532 676 556 694 556 736C556 779 532 798 494 798C457 798 432 779 432 736C432 694 457 676 494 676Z",
  "question-mark-square": "M497 215C620 216 666 284 665 377C664 499 583 541 524 541V609H446V485C541 483 575 437 576 383C577 342 558 285 486 285C412 285 378 346 366 391L299 347C321 277 373 214 497 215ZM487 676C525 676 549 694 549 736C549 779 525 798 487 798C450 798 425 779 425 736C425 694 450 676 487 676ZM20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98Z",
  "radio-button": "M0 498C-1 817 203 999 498 1000C793 1001 999 817 1000 498C1001 207 793 1 498 0C203 -1 1 207 0 498ZM80 500C80 255 255 82 498 82C741 82 920 255 920 500C920 764 741 918 498 918C255 918 80 764 80 500Z",
  "radio-button-checked": "M218 500C217 320 329 218 498 218C667 218 783 320 782 500C781 693 667 782 498 782C329 782 219 693 218 500ZM0 498C-1 817 203 999 498 1000C793 1001 999 817 1000 498C1001 207 793 1 498 0C203 -1 1 207 0 498ZM80 500C80 255 255 82 498 82C741 82 920 255 920 500C920 764 741 918 498 918C255 918 80 764 80 500Z",
  "recently-viewed": "M222 834L179 899C261 958 377 1000 510 1000C800 1000 1000 809 1000 502C1000 170 799 0 514 0V70C257 73 167 244 123 370H317V438H0V110H68V214L66 329C110 201 237 3 514 0C514 0 514 24 514 70C745 71 918 224 918 442V562C918 765 730 930 510 930C398 930 294 888 222 834ZM466 212V536H541V212ZM466 536L725 745L773 687L516 486Z",
  "redo": "M574 471H612V602C612 648 652 664 688 636L980 364C994 350 1000 338 1000 324C1002 310 994 298 980 286L690 16C656 -14 612 0 612 48V179H574C134 179 0 406 0 1000H10C28 479 206 258 574 258H680V106L916 324L680 542V392H572C246 392 34 648 34 1000H44C44 706 294 471 574 471Z",
  "registro-filter": "M406 611L406 918Q406 951 419 965.5 432 980 466 980L534 980Q568 980 581 965.5 594 951 594 918L594 611 908 144Q929 111 929 82 929 54 907 37 885 20 844 20L156 20Q115 20 93 37 71 54 71 82 71 111 92 144ZM547 540L453 540 149 92 851 92Z",
  "right-white-index": "M1000 406C1000 366 973 346 922 338L664 298C627 265 590 221 502 220C432 219 388 243 334 278C293 305 256 335 230 342C230 328 224 322 210 322H66C50 322 43 325 34 344C15 384 0 447 0 524C0 603 19 668 38 720C42 731 50 738 70 738H202C217 738 224 731 224 722C265 738 306 763 400 782C499 797 578 801 610 756C627 725 621 700 618 690C630 691 662 687 688 652C706 624 700 596 688 578C704 568 719 565 736 536C748 510 741 489 736 472C795 471 849 470 914 470C962 470 1000 447 1000 406ZM952 406C951 423 940 432 918 432L700 430C706 419 709 410 710 400C709 382 704 366 694 352L918 378C940 381 953 388 952 406ZM690 504C683 521 674 533 658 540C634 542 593 542 522 526C467 510 457 500 460 472C462 451 480 451 494 454C511 458 533 460 564 464C590 467 611 470 636 470C656 470 669 467 682 454C693 473 696 489 690 504ZM674 398C674 418 658 428 632 430C582 432 564 356 502 368C445 379 436 428 372 476C334 500 309 510 270 510V556C312 556 342 548 388 518C397 512 406 505 416 494C417 503 424 516 432 520C422 524 409 530 400 548C393 563 397 593 404 602C385 603 366 612 356 634C339 672 358 707 420 738L396 732C309 710 252 694 222 672C205 631 196 587 194 532C192 473 208 429 226 388C246 384 306 352 348 326C400 284 445 262 510 262C583 262 606 302 636 336C652 354 674 372 674 398ZM648 634C642 649 627 652 616 656C596 652 548 643 492 620C438 598 429 587 438 564C447 542 462 550 490 556C504 559 525 565 562 572C599 579 609 577 640 582C657 585 657 612 648 634ZM564 690C575 703 574 713 568 724C560 738 548 745 530 744C497 742 491 741 436 708C393 682 383 671 396 646C407 625 422 625 442 636C451 641 464 650 478 656C523 675 554 679 564 690ZM558 432L486 422C495 416 501 410 516 410C533 410 546 419 558 432ZM179 374C163 407 145 461 145 532C145 608 160 650 177 684H80C63 643 48 603 48 524C48 454 63 407 80 374Z",
  "school": "M20 882H98V540H234V882H312V188H686V882H764V540H902V882H980V564C980 506 946 472 888 472H764V212C764 154 730 120 672 120H326C268 120 234 154 234 212V472H112C54 472 20 506 20 564ZM498 460C561 460 589 432 589 369C589 307 561 280 498 280C437 280 410 307 409 369C408 432 437 460 498 460ZM408 625V882H590V625Z",
  "search": "M73 396V339C73 245 151 170 261 170C371 170 450 245 450 339V396C450 493 385 570 263 570C142 570 73 492 73 396ZM0 367C0 533 113 636 261 636C322 636 375 620 419 588L689 838L743 786L472 537C506 492 523 436 523 367C523 212 409 104 261 104C113 104 0 212 0 367ZM649 126V191H980V126ZM649 293V358H880V293ZM649 460V525H980V460Z",
  "send": "M669 172Q717 142 751 142 804 142 804 202 804 228 795 272L675 872Q665 923 631 923 616 923 603.5 913 591 903 577 882L427 656 175 591Q142 582 129 572 116 562 116 543 116 526 124 515.5 132 505 150 494ZM432 589L527 457 580 495 488 628 616 829Q640 716 680 516 709 366 743 203 589 300 500 354L212 533Z",
  "share": "M798 1000C922 1000 1000 919 1000 794C1000 671 922 592 798 592C671 592 592 671 592 794C592 919 671 1000 798 1000ZM798 924C713 924 674 875 674 794C674 714 713 664 798 664C880 664 918 714 918 794C918 875 880 924 798 924ZM206 701C330 701 408 620 408 495C408 372 330 293 206 293C79 293 0 372 0 495C0 620 79 701 206 701ZM206 625C121 625 82 576 82 495C82 415 121 365 206 365C288 365 326 415 326 495C326 576 288 625 206 625ZM798 408C922 408 1000 327 1000 202C1000 79 922 0 798 0C671 0 592 79 592 202C592 327 671 408 798 408ZM798 332C713 332 674 283 674 202C674 122 713 72 798 72C880 72 918 122 918 202C918 283 880 332 798 332ZM644 712L379 552L345 611L610 771ZM644 267L610 208L345 368L379 427Z",
  "shopping-cart": "M20 92H129L251 772H880V700H303L279 570H919L1000 108H198L182 20H20ZM211 180H921L864 498H268ZM250 920C250 964 286 1000 332 1000C375 1000 410 964 410 920C412 875 375 839 332 840C286 839 250 875 250 920ZM728 920C729 964 762 1000 808 1000C852 1000 887 964 888 920C889 875 852 839 808 840C762 841 727 875 728 920Z",
  "show-video": "M433 524L623 406C637 397 640 389 640 378C640 370 639 363 623 353L437 238C411 222 388 224 388 263V500C388 532 409 539 433 524ZM310 790C247 790 203 761 203 696C203 632 246 598 310 598C369 598 415 632 415 696C415 761 369 790 310 790ZM136 980H479C480 879 443 822 332 822H286C173 822 138 879 136 980ZM693 790C630 790 585 761 585 697C585 632 629 598 693 598C752 598 797 632 797 697C797 761 752 790 693 790ZM519 980H862C862 879 825 822 715 822H668C554 822 519 879 519 980ZM862 729V657H902V92H98V657H138V729H106C50 729 20 697 20 643V106C20 52 52 20 106 20H894C948 20 980 52 980 106V643C980 697 948 729 894 729Z",
  "spade-black-suit": "M68 518C68 232 472 154 500 0C531 154 930 232 932 518C933 665 845 736 732 736C651 736 590 708 558 606H526C526 667 532 807 600 864C666 919 736 924 810 938V980H190V938C268 923 331 920 396 866C466 808 472 667 472 606H440C406 707 349 736 268 736C154 736 68 665 68 518Z",
  "speaker-off": "M944 301L1000 356L860 496L999 635L944 689L805 550L666 690L610 635L750 495L611 356L666 302L805 441ZM514 116V878C514 921 474 930 448 900L192 658H54C30 658 20 648 20 624V368C20 345 30 336 52 336H188L450 96C472 74 514 78 514 116ZM440 800V201L218 408H98V586H218Z",
  "speaker-on": "M514 116V878C514 921 474 930 448 900L192 658H54C30 658 20 648 20 624V368C20 345 30 336 52 336H188L450 96C472 74 514 78 514 116ZM440 800V201L218 408H98V586H218ZM649 604L694 658C764 630 802 570 802 500C802 430 764 370 694 342L649 396C695 412 733 450 733 500C733 550 695 588 649 604ZM783 724L832 784C946 706 1000 620 1000 500C1000 380 950 294 832 216L783 276C875 335 925 400 925 500C925 600 875 665 783 724Z",
  "star-empty": "M0 382C1 356 16 346 44 346L362 332L462 36C471 11 485 0 500 0C515 0 529 11 538 36L638 332L956 346C984 346 999 356 1000 382C1001 404 994 414 980 424L714 590L831 953C840 981 821 1000 794 1000C775 1000 767 997 750 981L500 752L252 979C234 996 227 1000 208 1000C176 1000 161 978 169 953L286 590L20 424C6 414 -1 404 0 382ZM59 369L373 562L243 935L220 919L500 658L780 919L757 935L627 562L941 369L948 404L582 398L483 69H516L418 398L52 404Z",
  "star-full": "M0 382C1 356 16 346 44 346L362 332L462 36C471 11 485 0 500 0C514 0 528 11 536 36L636 332L954 346C984 347 998 356 998 382C998 405 992 414 978 424L712 590L828 950C835 972 828 984 810 994C793 1004 773 1002 758 990L500 752L240 990C228 1002 206 1003 188 994C168 984 163 972 170 950L286 590L20 424C6 414 -1 404 0 382Z",
  "sun-with-rays": "M211 499C211 693 317 788 499 788C681 788 787 693 787 499C787 318 681 212 499 212C317 212 211 318 211 499ZM285 532V466C285 358 348 277 499 277C651 277 713 358 713 466V532C713 646 664 723 499 723C334 723 285 646 285 532ZM471 20V214H529V20ZM471 20V214H529V20ZM471 786V980H529V786ZM819 140L682 277L723 318L860 181ZM277 682L140 819L181 860L318 723ZM980 471H786V529H980ZM214 471H20V529H214ZM860 819L723 682L682 723L819 860ZM318 277L181 140L140 181L277 318Z",
  "support": "M10 474C10 573 77 646 206 646H236V337C236 196 343 74 503 74C657 74 764 196 764 337V646H794C923 646 990 573 990 474C990 388 938 322 847 305C813 115 698 0 503 0C303 0 187 115 153 305C62 322 10 387 10 474ZM523 1000C601 1000 649 943 649 874C649 804 601 747 523 747C444 747 396 805 396 874C396 943 444 1000 523 1000ZM834 621H764C764 771 740 844 643 844V910C786 910 834 821 834 621Z",
  "switch": "M0 203L221 406L264 362L123 238H327V168H123L264 44L221 0ZM451 535V465H776C889 465 929 417 929 352C929 286 889 238 776 238H327V168H776C931 168 1000 245 1000 352C1000 458 931 535 776 535ZM1000 797L779 594L736 638L877 762H673V832H877L736 956L779 1000ZM505 465V535H224C111 535 71 583 71 648C71 714 111 762 224 762H673V832H224C69 832 0 755 0 648C0 542 69 465 224 465Z",
  "synchronize": "M970 368H888C855 198 723 74 534 74C291 74 197 243 153 370H270H414V448H20V60H98V214L96 319C140 190 270 -2 534 0C771 2 923 140 970 368ZM30 632H112C145 802 277 926 463 926C689 926 803 757 847 630H730H586V552H980V940H902V786L904 681C860 810 710 1002 463 1000C229 998 77 860 30 632Z",
  "target": "M628 416H695C694 238 587 131 414 131C239 131 131 239 131 412C131 599 239 695 415 695C415 695 416 695 416 695V634C266 634 198 566 198 412C198 264 277 192 414 192C549 192 628 264 628 416ZM759 416H826C825 157 669 0 414 0C157 0 0 158 0 411C0 686 157 826 415 826C415 826 416 826 416 826V765C197 764 68 636 68 411C68 195 214 62 414 62C612 62 758 194 759 416ZM503 416H559C558 319 510 261 414 261C310 261 261 319 261 412C261 492 310 550 416 550V499C343 499 324 479 324 431V394C324 333 349 312 414 312C480 312 503 333 503 416ZM825 503H503V826L576 825V631L944 1000L1000 945L631 576H825Z",
  "text-scale": "M297 490H442V422H74V490H219V898H297ZM701 182H926V112H398V182H623V810H701Z",
  "textual-analysisalysis": "M98 908H902V92H98ZM189 646V216C189 181 209 161 244 161H466L601 296V646C601 681 581 701 546 701H244C208 701 189 681 189 646ZM248 648H542V309L445 214H248ZM445 214V309H542V359H457C422 359 396 333 396 299V214ZM289 420H501V468H289ZM289 528H436V577H289ZM444 636C444 719 504 786 608 786C714 786 770 720 770 636V587C770 506 702 441 607 441C512 441 444 506 444 587ZM902 908H857L743 802C705 830 659 844 607 844C479 844 381 755 381 611C381 477 479 384 607 384C734 384 833 477 833 611C833 671 818 719 789 758L902 862ZM975 929C956 980 907 980 894 980H106C50 980 20 948 20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 907 978 918 975 929Z",
  "theory-help": "M20 548L98 548 98 92 448 92 448 810 894 810Q935 810 957.5 787 980 764 980 724L980 106Q980 65 957.5 42.5 935 20 894 20L106 20Q66 20 43 42.5 20 65 20 106ZM902 738L522 738 522 92 902 92ZM822 231L602 231 602 182 822 182ZM772 370L602 370 602 321 772 321ZM822 509L602 509 602 460 822 460ZM772 648L602 648 602 599 772 599ZM50 996L0 943 219 732 19 746 19 668 328 668 328 980 250 980 263 779Z",
  "timer-clock": "M746 877V825H603L669 765Q700 736 722.5 711Q745 686 745 650Q745 612 718 587Q691 562 641 562Q617 562 598.5 568.5Q580 575 566.5 585Q553 595 545 608Q537 621 531 635L577 664Q584 645 597 631Q610 617 641 617Q665 617 673 627Q681 637 681 650V654Q681 680 663.5 700Q646 720 630 734L533 819V877ZM908 877H967V811H1000V759H967V573H874L769 735V811H908ZM908 620V764H814L905 620ZM505 1000V930C250 930 82 771 82 558V438C82 235 270 70 500 70C730 70 918 235 918 438V497H1000C1000 191 800 0 500 0C200 0 0 191 0 498C0 830 200 1000 505 1000ZM464 202V466H542V202ZM161 538H542V466H161Z",
  "u-circle": "M0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 768 926 504 926C240 926 82 771 82 558ZM376 252V564Q376 644 401 678Q426 712 498 712Q574 712 599 678Q624 644 624 564V252H702V546Q702 612 691.5 653.5Q681 695 657.5 724Q634 753 595.5 767.5Q557 782 498 782Q439 782 401 767.5Q363 753 339.5 724Q316 695 307 653.5Q298 612 298 546V252Z",
  "u-square": "M376 244L298 244 298 538Q298 604 307 645.5 316 687 339.5 716 363 745 401 759.5 439 774 498 774 557 774 595.5 759.5 634 745 657.5 716 681 687 691.5 645.5 702 604 702 538L702 244 624 244 624 556Q624 636 599 670 574 704 498 704 426 704 401 670 376 636 376 556ZM20 894Q20 935 42 957.5 64 980 106 980L894 980Q935 980 957.5 957.5 980 935 980 894L980 106Q980 65 957.5 42.5 935 20 894 20L106 20Q66 20 43 42.5 20 65 20 106ZM902 908L98 908 98 92 902 92Z",
  "undo": "M426 471H388V602C388 648 348 664 312 636L20 364C6 350 0 338 0 324C-2 310 6 298 20 286L310 16C344 -14 388 0 388 48V179H426C866 179 1000 406 1000 1000H990C972 479 794 258 426 258H320V106L84 324L320 542V392H428C754 392 966 648 966 1000H956C956 706 706 471 426 471Z",
  "up-white-index": "M400 0C360 0 340 27 332 78L292 336C259 373 215 410 214 498C213 568 237 612 272 666C299 707 329 744 336 770C322 770 316 776 316 790V934C316 950 319 957 338 966C378 985 441 1000 518 1000C597 1000 662 981 714 962C725 958 732 950 732 930V798C732 783 725 776 716 776C732 735 757 694 776 600C791 501 795 422 750 390C719 373 694 379 684 382C685 370 681 338 646 312C618 294 590 300 572 312C562 296 559 281 530 264C504 252 483 259 466 264C465 205 464 151 464 86C464 38 441 0 400 0ZM400 48C417 49 426 60 426 82L424 300C413 294 404 291 394 290C376 291 360 296 346 306L372 82C375 60 382 47 400 48ZM498 310C515 317 527 326 534 342C536 366 536 407 520 478C504 533 494 543 466 540C445 538 445 520 448 506C452 489 454 467 458 436C461 410 464 389 464 364C464 344 461 331 448 318C467 307 483 304 498 310ZM392 326C412 326 422 342 424 368C426 418 350 436 362 498C373 555 422 564 470 628C494 666 504 691 504 730H550C550 688 542 658 512 612C506 603 499 594 488 584C497 583 510 576 514 568C518 578 524 591 542 600C557 607 587 603 596 596C597 615 606 634 628 644C666 661 701 642 732 580L726 604C704 691 688 748 666 778C625 795 581 804 526 806C467 808 423 792 382 774C378 754 346 694 320 652C278 600 256 555 256 490C256 417 296 394 330 364C348 348 366 326 392 326ZM628 352C643 358 646 373 650 384C646 404 637 452 614 508C592 562 581 571 558 562C536 553 544 538 550 510C553 496 559 475 566 438C573 401 571 391 576 360C579 343 606 343 628 352ZM684 436C697 425 707 426 718 432C732 440 739 452 738 470C736 503 735 509 702 564C676 607 665 617 640 604C619 593 619 578 630 558C635 549 644 536 650 522C669 477 673 446 684 436ZM426 442L416 514C410 505 404 499 404 484C404 467 413 454 426 442ZM368 821C401 837 455 855 526 855C602 855 644 840 678 823V920C637 937 597 952 518 952C448 952 401 937 368 920Z",
  "user-avatar": "M502 532C611 532 672 482 672 374C672 268 611 212 502 212C388 212 330 268 330 374C330 482 389 532 502 532ZM501 465C442 465 411 434 411 389V355C411 310 444 281 501 281C554 281 591 311 591 355V389C591 434 556 465 501 465ZM198 858L270 898C270 721 322 688 458 688H542C688 688 730 721 730 898L802 858C800 676 736 614 542 614H458C264 614 200 676 198 858ZM0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 235 260 74 500 74C740 74 918 235 918 438V558C918 771 768 926 504 926C240 926 82 771 82 558Z",
  "view": "M0 498C91 707 233 859 498 860C763 861 905 707 1000 498C909 317 763 141 498 140C233 139 95 318 0 498ZM99 500C183 366 285 218 498 218C711 218 817 366 901 500C817 653 711 782 498 782C285 782 183 653 99 500ZM308 500C308 388 383 318 499 318C614 318 692 388 692 500C692 621 614 682 499 682C383 682 308 621 308 500ZM395 500C395 576 435 609 499 609C563 609 605 576 605 500C605 429 563 391 499 391C435 391 395 429 395 500Z",
  "view-off": "M0 498C91 717 233 869 498 870C763 871 905 717 1000 498C909 307 763 131 498 130C233 129 95 308 0 498ZM99 500C183 356 285 208 498 208C711 208 817 356 901 500C817 663 711 792 498 792C285 792 183 663 99 500ZM308 500C308 631 383 692 499 692C614 692 692 631 692 500C692 378 614 308 499 308C383 308 308 378 308 500ZM395 500C395 419 435 381 499 381C563 381 605 419 605 500C605 586 563 619 499 619C435 619 395 586 395 500ZM509 379H604ZM237 980H332L536 501L773 20H678L461 500Z",
  "virtual-class": "M624 928V1000C784 986 956 858 1000 686H928C884 816 750 914 624 928ZM0 322H76C117 185 254 78 430 76V0C218 0 42 148 0 322ZM760 282C839 282 901 238 900 144C899 49 839 0 760 0C675 0 616 49 616 144C616 238 676 282 760 282ZM763 214C715 215 693 197 693 144C693 84 716 67 761 68C799 69 822 84 823 144C824 197 798 213 763 214ZM588 560C586 462 599 402 714 402H806C923 402 928 461 928 560H1000C1001 412 951 330 804 330H714C561 330 515 412 514 560ZM246 702C325 702 387 658 386 564C385 469 325 420 246 420C161 420 102 469 102 564C102 658 162 702 246 702ZM249 634C201 635 179 617 179 564C179 504 201 487 247 488C285 489 308 504 309 564C310 617 284 633 249 634ZM74 980C72 882 85 822 200 822H292C409 822 414 881 414 980H486C487 832 437 750 290 750H200C47 750 1 832 0 980Z",
  "white-circle": "M500 648C416 648 358 584 358 499C358 415 416 351 500 351C584 351 643 415 643 499C643 583 584 648 500 648ZM500 715C624 715 715 622 715 499C715 375 624 284 500 284C377 284 286 375 286 499C286 624 377 715 500 715Z",
  "white-diamond": "M500 78L194 500L500 924L806 504ZM500 202L710 504L500 799L290 500Z",
  "word": "M128 355H177L223 633H209L284 355H343L420 633H406L451 355H498L443 653H381L313 416H312L244 653H184ZM612 771H875C927 771 960 738 960 690V303C960 247 926 220 870 220H612C612 404 612 587 612 771ZM612 464H850V527H612ZM612 604H790V667H612ZM612 324H790V387H612ZM40 746C40 781 58 795 83 800C236 832 388 864 540 896C579 904 612 897 612 843C612 620 612 388 612 151C612 106 594 84 540 95L80 192C48 199 40 220 40 250C40 415 40 581 40 746Z",
  "working-bag": "M410 581V651H590V581ZM110 279H890C947 279 980 312 980 369V809C980 865 947 899 890 899H110C54 899 20 865 20 809V369C20 312 51 279 110 279ZM98 347V831H902V347ZM768 279H690V167H310V279H232V189C232 133 262 99 320 99H680C735 99 768 133 768 189ZM310 279H232ZM98 511V581H902V511Z",
  "workplace-zanichelli": "M202 408C329 408 408 327 408 202C408 79 329 0 202 0C78 0 0 79 0 202C0 327 78 408 202 408ZM645 458H1000V390H738L994 80V20H648V88H893L645 388ZM202 332C120 332 82 283 82 202C82 122 120 72 202 72C287 72 326 122 326 202C326 283 287 332 202 332ZM202 1000C329 1000 408 919 408 794C408 671 329 592 202 592C78 592 0 671 0 794C0 919 78 1000 202 1000ZM202 924C120 924 82 875 82 794C82 714 120 664 202 664C287 664 326 714 326 794C326 875 287 924 202 924ZM794 1000C921 1000 1000 919 1000 794C1000 671 921 592 794 592C670 592 592 671 592 794C592 919 670 1000 794 1000ZM794 924C712 924 674 875 674 794C674 714 712 664 794 664C879 664 918 714 918 794C918 875 879 924 794 924Z",
  "workplace-zanichelli-filled": "M202 408C329 408 408 327 408 202C408 79 329 0 202 0C78 0 0 79 0 202C0 327 78 408 202 408ZM645 458H1000V390H738L994 80V20H648V88H893L645 388ZM202 1000C329 1000 408 919 408 794C408 671 329 592 202 592C78 592 0 671 0 794C0 919 78 1000 202 1000ZM794 1000C921 1000 1000 919 1000 794C1000 671 921 592 794 592C670 592 592 671 592 794C592 919 670 1000 794 1000Z",
  "add-image-filled": "M0 198C0 307 88 395 198 395C307 395 395 307 395 198C395 88 307 0 198 0C88 0 0 88 0 198ZM20 764V407H96V782H160V447H236V662L393 427C412 399 447 397 466 428L642 714L716 594C740 556 775 554 797 593L904 780V218H447V150H704V88H407V20H694C748 20 780 52 780 106V150H894C948 150 980 182 980 236V894C980 948 948 980 894 980H246C190 980 160 948 160 894V850H106C50 850 20 818 20 764ZM86 218V176H173V74H223V176H309V218H223V309H173V218ZM629 380C629 442 678 491 740 491C801 491 850 442 850 380C850 319 801 270 740 270C678 270 629 319 629 380Z",
  "app-switcher-filled": "M0 120Q0 178 31.5 208 63 238 119 238 174 238 206.5 208 239 178 239 120 239 63 206.5 31.5 174 0 119 0 63 0 31.5 31 0 62 0 120ZM380 120Q380 178 412 208 444 238 499 238 554 238 587 208 620 178 620 120 620 63 587 31.5 554 0 499 0 445 0 412.5 31.5 380 63 380 120ZM761 120Q761 178 793 208 825 238 880 238 936 238 968 208 1000 178 1000 120 1000 63 967.5 31.5 935 0 880 0 825 0 793 31 761 62 761 120ZM0 501Q0 559 31.5 589 63 619 119 619 174 619 206.5 589 239 559 239 501 239 442 206.5 410.5 174 379 119 379 63 379 31.5 410.5 0 442 0 501ZM380 501Q380 559 412 589 444 619 499 619 555 619 587.5 589 620 559 620 501 620 442 587 410.5 554 379 499 379 444 379 412 410.5 380 442 380 501ZM761 501Q761 559 793 589 825 619 880 619 936 619 968 589 1000 559 1000 501 1000 442 967.5 410.5 935 379 880 379 825 379 793 410.5 761 442 761 501ZM0 882Q0 940 31.5 970 63 1000 119 1000 174 1000 206.5 970 239 940 239 882 239 824 206.5 793 174 762 119 762 63 762 31.5 793 0 824 0 882ZM380 882Q380 940 412 970 444 1000 499 1000 554 1000 587 970 620 940 620 882 620 824 587 793 554 762 499 762 444 762 412 793 380 824 380 882ZM761 882Q761 940 793 970 825 1000 880 1000 936 1000 968 970 1000 940 1000 882 1000 824 967.5 793 935 762 880 762 825 762 793 793 761 824 761 882Z",
  "arrow-clockwise-down-left-filled": "M0 464C0 141 258 0 510 0C800 0 1000 184 1000 466C1000 767 824 870 746 926L698 862C768 821 918 719 918 522V410C918 245 745 74 508 74C289 74 82 225 82 410V522C82 692 265 795 376 836V734V590H454V980H66V902H220L334 904C203 859 0 728 0 464Z",
  "arrow-clockwise-down-right-filled": "M1000 464Q1000 310 927.5 205.5 855 101 739 50.5 623 0 490 0 346 0 235 58 124 116 62 221.5 0 327 0 466 0 603 43 694.5 86 786 132 829 178 872 254 926L302 862Q218 813 150 731.5 82 650 82 522L82 410Q82 327 136 249 190 171 284 122.5 378 74 492 74 600 74 698.5 119.5 797 165 857.5 242.5 918 320 918 410L918 522Q918 601 871 664 824 727 757.5 769 691 811 624 836L624 590 546 590 546 980 934 980 934 902 780 902 666 904Q743 877 819 822.5 895 768 947.5 677 1000 586 1000 464Z",
  "arrow-clockwise-up-left-filled": "M0 536C0 859 258 1000 510 1000C800 1000 1000 816 1000 534C1000 233 824 130 746 74L698 138C768 179 918 281 918 478V590C918 755 745 926 508 926C289 926 82 775 82 590V478C82 308 265 205 376 164V266V410H454V20H66V98H220L334 96C203 141 0 272 0 536Z",
  "arrow-clockwise-up-right-filled": "M1000 536C1000 859 742 1000 490 1000C200 1000 0 816 0 534C0 233 176 130 254 74L302 138C232 179 82 281 82 478V590C82 755 255 926 492 926C711 926 918 775 918 590V478C918 308 735 205 624 164V266V410H546V20H934V98H780L666 96C797 141 1000 272 1000 536Z",
  "arrow-down-filled": "M242 743L297 688L461 864V20H539V864L704 687L759 741L500 1000Z",
  "arrow-left-filled": "M256.8695737400001 245.91875843999998L311.8685188400001 300.91770354L135.87189452000007 464.91455801999996H979.8557066V542.91306198H135.87189452000007L312.8684996600001 707.9098972799999L258.8695353800001 762.9088423799999L-0.12549699999988206 503.91380999999996Z",
  "arrow-left-right-filled": "M0 506L257 764L312 709L137 545H863L688 709L743 764L1000 506L741 247L687 302L863 467H137L313 302L259 247Z",
  "arrow-left-rounded-filled": "M544 0C823 2 1000 199 1000 509C1000 847 786 1000 530 1000C284 1000 163 878 76 742L142 701C216 830 322 926 530 926C731 926 918 788 918 573V441C918 236 756 70 544 70C301 70 197 243 153 370H270H414V448H20V60H98V214L96 319C140 190 280 -2 544 0Z",
  "arrow-left-square-filled": "M20 106V894C20 948 52 980 106 980H894C948 980 980 948 980 894V106C980 52 948 20 894 20H106C52 20 20 49 20 106ZM432 753L170 500L434 246L483 296L307 466H808V535H307L482 703Z",
  "arrow-north-east-filled": "M496.4285 149.80790000000002V227.58890000000002L736.8425 219.1037L140.0501 815.8960999999999L195.20389999999998 871.0499L791.9963 274.2575L783.5110999999999 516.0857L860.585 516.7927999999999L860.5849999999999 150.515Z",
  "arrow-north-east-square-filled": "M890 982H110C53 982 20 949 20 892V112C20 56 53 22 110 22H890C946 22 980 56 980 112V892C980 949 949 982 890 982ZM810 556L809 192H443L444 271L686 260L213 733L268 789L741 316L729 556Z",
  "arrow-north-west-filled": "M504.5715 148.80790000000002V226.58890000000002L264.1575 218.1037L860.9499000000001 814.8960999999999L805.7961 870.0499L209.00369999999998 273.2575L217.48890000000006 515.0857L140.41499999999996 515.7927999999999L140.41500000000008 149.515Z",
  "arrow-north-west-square-filled": "M110 982H890C947 982 980 949 980 892V112C980 56 947 22 890 22H110C54 22 20 56 20 112V892C20 949 51 982 110 982ZM190 556L191 192H557L556 271L314 260L787 733L732 789L259 316L271 556Z",
  "arrow-quad-down-filled": "M106 980C49 980 20 948 20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980ZM746 596L699 551L539 722V158H461V722L301 551L254 596L500 858Z",
  "arrow-quad-left-filled": "M20 106C20 49 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C52 980 20 948 20 894ZM404 746L449 699L278 539H842V461H278L449 301L404 254L142 500Z",
  "arrow-quad-north-east-filled": "M890 982H110C53 982 20 949 20 892V112C20 56 53 22 110 22H890C946 22 980 56 980 112V892C980 949 949 982 890 982ZM810 556L809 192H443L444 271L686 260L213 733L268 789L741 316L729 556Z",
  "arrow-quad-north-west-filled": "M110 982H890C947 982 980 949 980 892V112C980 56 947 22 890 22H110C54 22 20 56 20 112V892C20 949 51 982 110 982ZM190 556L191 192H557L556 271L314 260L787 733L732 789L259 316L271 556Z",
  "arrow-quad-right-filled": "M980 894C980 951 948 980 894 980H106C52 980 20 948 20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106ZM596 254L551 301L722 461H158V539H722L551 699L596 746L858 500Z",
  "arrow-quad-south-east-filled": "M890 20H110C53 20 20 53 20 110V890C20 946 53 980 110 980H890C946 980 980 946 980 890V110C980 53 949 20 890 20ZM810 446L809 810H443L444 731L686 742L213 269L268 213L741 686L729 446Z",
  "arrow-quad-south-west-filled": "M110 20H890C947 20 980 53 980 110V890C980 946 947 980 890 980H110C54 980 20 946 20 890V110C20 53 51 20 110 20ZM190 446L191 810H557L556 731L314 742L787 269L732 213L259 686L271 446Z",
  "arrow-quad-up-filled": "M106 21C49 21 20 53 20 107V895C20 949 52 981 106 981H894C948 981 980 949 980 895V107C980 53 948 21 894 21ZM746 405L699 450L539 279V843H461V279L301 450L254 405L500 143Z",
  "arrow-right-filled": "M743.1304262599999 245.91875843999998L688.1314811599999 300.91770354L864.1281054799999 464.91455801999996H20.14429340000001V542.91306198H864.1281054799999L687.1315003399999 707.9098972799999L741.1304646199999 762.9088423799999L1000.1254969999999 503.91380999999996Z",
  "arrow-right-rounded-filled": "M456 0C177 2 0 199 0 509C0 847 214 1000 470 1000C716 1000 837 878 924 742L858 701C784 830 678 926 470 926C269 926 82 788 82 573V441C82 236 244 70 456 70C699 70 803 243 847 370H730H586V448H980V60H902V214L904 319C860 190 720 -2 456 0Z",
  "arrow-right-square-filled": "M980 106V894C980 948 948 980 894 980H106C52 980 20 948 20 894V106C20 52 52 20 106 20H894C948 20 980 49 980 106ZM568 753L830 500L566 246L517 296L693 466H192V535H693L518 703Z",
  "arrow-small-left-filled": "M142 441L264 436H945V514H264L142 509ZM489 910L55 475L490 41L545 96L163 476L545 855Z",
  "arrow-small-right-filled": "M858 441V509L736 514H55V436H736ZM511 910L455 855L837 476L455 96L510 41L945 475Z",
  "arrow-south-east-filled": "M496.4285 850.1921V772.4111L736.8425 780.8963L140.0501 184.1039L195.20389999999998 128.95010000000002L791.9963 725.7425000000001L783.5110999999999 483.9143L860.585 483.2072L860.5849999999999 849.485Z",
  "arrow-south-east-square-filled": "M890 20H110C53 20 20 53 20 110V890C20 946 53 980 110 980H890C946 980 980 946 980 890V110C980 53 949 20 890 20ZM810 446L809 810H443L444 731L686 742L213 269L268 213L741 686L729 446Z",
  "arrow-south-west-filled": "M504.5715 850.1921V772.4111L264.1575 780.8963L860.9499000000001 184.1039L805.7961 128.95010000000002L209.00369999999998 725.7425000000001L217.48890000000006 483.9143L140.41499999999996 483.2072L140.41500000000008 849.485Z",
  "arrow-south-west-square-filled": "M110 20H890C947 20 980 53 980 110V890C980 946 947 980 890 980H110C54 980 20 946 20 890V110C20 53 51 20 110 20ZM190 446L191 810H557L556 731L314 742L787 269L732 213L259 686L271 446Z",
  "arrow-square-down-filled": "M106 980C49 980 20 948 20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980ZM758 573L703 518L539 693V192H461V693L296 517L241 571L500 830Z",
  "arrow-up-filled": "M242 257L297 312L461 136V980H539V136L704 313L759 259L500 0Z",
  "arrow-up-and-down-filled": "M242 257L297 312L461 136V980H539V136L704 313L759 259L500 0ZM1242 743L1297 688L1461 864V20H1539V864L1704 687L1759 741L1500 1000Z",
  "arrow-up-down-filled": "M500 0L242 257L297 312L461 137V863L297 688L242 743L500 1000L759 741L704 687L539 863V137L704 313L759 259Z",
  "arrow-up-down-double-filled": "M75 312L20 257 278 0 537 259 482 313 317 136 317 980 239 980 239 136ZM721 1000L463 743 518 688 682 864 682 20 760 20 760 864 925 687 980 741Z",
  "arrow-up-rounded-filled": "M0 536C0 859 258 1000 510 1000C800 1000 1000 816 1000 534C1000 233 824 130 746 74L698 138C768 179 918 281 918 478V590C918 755 745 926 508 926C289 926 82 775 82 590V478C82 308 265 205 376 164V266V410H454V20H66V98H220L334 96C203 141 0 272 0 536Z",
  "arrow-up-square-filled": "M106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C52 980 20 948 20 894V106C20 52 49 20 106 20ZM758 427L500 170L241 429L296 483L461 307V808H539V307L703 482Z",
  "artist-filled": "M123 500C123 777 296 1000 511 1000C726 1000 896 777 896 500C896 223 736 0 511 0C286 0 123 222 123 500ZM227 726L479 672L480 569H443C375 569 359 538 359 434H294V382C294 260 363 182 482 182C600 182 656 261 656 390V672L795 721C753 839 647 943 512 943C380 943 274 844 227 726Z",
  "artist-quote-filled": "M20 292L220 292 220 894Q220 935 242 957.5 264 980 306 980L808 980Q898 980 939 928.5 980 877 980 779L980 708 855 708 855 106Q855 65 832.5 42.5 810 20 769 20L217 20Q116 20 68 71 20 122 20 221ZM101 220Q101 175 110 148 119 121 145 106.5 171 92 220 92L220 220ZM721 237L370 237 370 165 721 165ZM631 424L370 424 370 352 631 352ZM721 611L370 611 370 539 721 539ZM414 908Q441 860 441 780L902 780Q902 845 880 876.5 858 908 802 908Z",
  "atom-filled": "M184 680C157 633 191 566 263 498C191 429 157 362 184 316C211 269 286 264 381 292C404 196 446 133 500 133C554 133 595 196 618 292C713 264 788 269 815 316C842 362 808 429 736 498C808 566 842 633 815 680C788 727 713 731 618 703C595 799 553 862 500 862C446 862 405 799 381 703C286 731 211 727 184 680ZM227 655C237 673 294 672 371 651C367 627 364 603 362 577C341 562 321 547 303 533C245 588 217 637 227 655ZM227 341C217 358 246 407 303 463C321 448 341 433 362 419C364 393 367 368 371 344C294 323 237 323 227 341ZM409 497C409 515 410 532 411 549C424 558 439 567 454 576C469 585 484 593 499 600C515 593 530 585 545 576C560 567 575 558 588 549C589 532 590 515 590 497C590 480 589 463 588 446C574 437 559 428 544 419C529 410 514 402 499 395C485 402 470 410 455 419C440 428 425 437 411 446C410 463 409 480 409 497ZM431 309C453 318 476 328 499 339C523 328 546 318 568 309C548 233 520 183 500 183C479 183 451 232 431 309ZM431 686C451 763 479 812 500 812C520 812 548 763 568 686C545 677 523 668 500 656C476 668 453 677 431 686ZM628 651C705 672 762 673 772 655C782 637 754 588 696 533C678 547 658 562 637 577C635 603 632 627 628 651ZM628 344C632 368 635 393 637 419C658 433 678 448 696 463C753 407 782 358 772 341C762 323 705 323 628 344Z",
  "back-filled": "M0 349L256 586L300 541L126 385H334V313H126L300 157L256 112ZM334 868V796H584C789 796 903 747 903 591C903 434 789 385 584 385H334V313H584C832 313 976 392 976 591C976 789 832 868 584 868Z",
  "back-top-filled": "M746 483L500 221L254 483L301 528L461 356V980H539V356L699 528ZM780 92H220V20H780Z",
  "black-circle-filled": "M500 715C624 715 715 622 715 499C715 375 624 284 500 284C377 284 286 375 286 499C286 624 377 715 500 715Z",
  "black-diamond-filled": "M500 92L194 500L500 910L806 504Z",
  "black-nib-filled": "M20 728V322C20 299 29 290 48 290H120C138 290 148 302 148 322V344C276 343 303 342 374 322C454 298 515 246 540 246H556C586 246 668 339 774 408C842 453 924 479 960 486C995 493 1002 499 1000 524C998 549 995 556 960 558C924 560 843 596 774 640C669 708 586 798 556 798H540C515 798 446 745 374 728C303 705 276 705 148 704V728C148 745 138 758 120 758H48C29 758 20 748 20 728ZM306 524C306 579 339 604 368 604C405 606 426 584 440 562L716 546C730 546 737 537 736 524C734 509 730 503 716 502L440 484C426 460 405 444 370 444C339 444 304 466 306 524Z",
  "black-sun-with-rays-filled": "M20 529V471H212C216 405 235 351 268 309L140 181L181 140L309 268C351 236 405 217 471 213V20H529V213C594 217 648 237 690 269L819 140L860 181L731 310C763 352 782 406 786 471H980V529H786C782 597 764 651 733 692L860 819L819 860L692 733C650 765 595 783 529 787V980H471V787C405 783 349 766 307 734L181 860L140 819L266 693C235 652 216 597 212 529Z",
  "book-minus-filled": "M20 898H980V771C732 771 616 788 544 857V453C544 239 605 180 902 180H980V108H902C672 108 560 146 504 243C449 146 342 108 70 108V214H20ZM128 771V180C407 180 465 239 465 453V858C411 805 313 771 128 771ZM657 512V442H980V512Z",
  "book-plus-filled": "M633 518V450H765V312H837V450H969V518H837V656H765V518ZM20 898H980V771C732 771 616 788 544 857V453C544 239 605 180 902 180H980V108H902C672 108 560 146 504 243C449 146 342 108 70 108V214H20ZM128 771V180C407 180 465 239 465 453V858C411 805 313 771 128 771Z",
  "bookmark-filled": "M142 924V110C142 53 173 20 232 20H770C825 20 858 53 858 110V924C858 989 788 1030 730 972L500 742L270 974C215 1029 142 989 142 924ZM188 945L500 630L812 945L780 965V92H220V965Z",
  "bulleted-list-filled": "M109 226C141 226 166 201 166 167C166 135 141 110 109 110C74 110 50 135 50 167C50 201 74 226 109 226ZM278 136V204H950V136ZM278 358V426H850V358ZM278 578V646H950V578ZM109 449C141 449 166 424 166 390C166 358 141 333 109 333C74 333 50 358 50 390C50 424 74 449 109 449ZM109 669C141 669 166 644 166 610C166 578 141 553 109 553C74 553 50 578 50 610C50 644 74 669 109 669ZM278 798V866H650V798ZM109 889C141 889 166 864 166 830C166 798 141 773 109 773C74 773 50 798 50 830C50 864 74 889 109 889Z",
  "bulls-eye-filled": "M218 500C217 320 329 218 498 218C667 218 783 320 782 500C781 693 667 782 498 782C329 782 219 693 218 500ZM0 498C-1 817 203 999 498 1000C793 1001 999 817 1000 498C1001 207 793 1 498 0C203 -1 1 207 0 498ZM80 500C80 255 255 82 498 82C741 82 920 255 920 500C920 764 741 918 498 918C255 918 80 764 80 500ZM293 500C294 642 374 707 499 707C623 707 706 642 707 500C708 368 623 293 499 293C374 293 292 368 293 500Z",
  "burger-menu-filled": "M100 180H900V254H100ZM100 748H900V822H100ZM100 464H900V538H100Z",
  "c-circled-filled": "M0 498C0 830 190 1000 500 1000C810 1000 1000 830 1000 498C1000 191 810 0 500 0C190 0 0 191 0 498ZM82 558V438C82 234 260 74 500 74C740 74 918 235 918 438V558C918 771 768 926 504 926C240 926 82 771 82 558ZM498 782Q578 783 630 747Q682 711 709 650L651 600Q633 646 597 678Q561 710 511 710Q429 710 389 657.5Q349 605 349 524V496Q349 404 386.5 346Q424 288 501 288Q561 288 594 319.5Q627 351 643 394L699 338Q672 284 625 251.5Q578 219 511 218Q395 216 331 292.5Q267 369 267 502Q267 639 331 709.5Q395 780 498 782Z",
  "c-square-filled": "M501 778Q585 779 636.5 743.5 688 708 714 647L652 612Q627 657 595.5 681.5 564 706 514 706 432 706 392 653.5 352 601 352 520L352 492Q352 400 389.5 342 427 284 504 284 564 284 594.5 310.5 625 337 647 375L712 331Q686 281 633.5 248 581 215 514 214 398 212 334 288.5 270 365 270 498 270 635 334 706 398 777 501 778ZM20 894Q20 935 42 957.5 64 980 106 980L894 980Q935 980 957.5 957.5 980 935 980 894L980 106Q980 65 957.5 42.5 935 20 894 20L106 20Q66 20 43 42.5 20 65 20 106ZM902 908L98 908 98 92 902 92Z",
  "caret-down-filled": "M160 414L458 736C471 750 485 756 500 756C515 756 528 751 542 736L836 418C877 374 863 328 812 328H188C140 328 122 370 160 414Z",
  "caret-up-filled": "M160 620L458 298C471 284 485 278 500 278C515 278 528 283 542 298L836 616C877 660 863 706 812 706H188C140 706 122 664 160 620Z",
  "caret-up-down-filled": "M160 342L458 20C471 6 485 0 500 0C515 0 528 5 542 20L836 338C877 382 863 428 812 428H188C140 428 122 386 160 342ZM160 658L458 980C471 994 485 1000 500 1000C515 1000 528 995 542 980L836 662C877 618 863 572 812 572H188C140 572 122 614 160 658Z",
  "character-panel-filled": "M933 452V391H892V203Q892 136 852.5 99.5Q813 63 739 63Q678 63 642 87Q606 111 589 140L635 182Q647 157 672.5 141Q698 125 735 125Q818 125 818 206V237H740Q661 237 618.5 264.5Q576 292 576 351Q576 400 607 429.5Q638 459 696 459Q746 459 776 439Q806 419 818 394H822Q822 424 840.5 438Q859 452 891 452ZM738 292H818V333Q818 349 809 361.5Q800 374 785.5 381Q771 388 751.5 393Q732 398 711 398Q650 398 650 350V339Q650 314 674 303Q698 292 738 292ZM524 917H578V833H507V489Q507 390 444 334.5Q381 279 267 279Q182 279 126.5 314.5Q71 350 46 401L104 455Q129 413 167 387.5Q205 362 262 362Q337 362 373.5 397Q410 432 410 499V561H286Q150 561 85 608Q20 655 20 743Q20 830 75 881Q130 932 230 932Q295 932 342 903Q389 874 410 816H416Q422 859 445.5 888Q469 917 524 917ZM245 850Q188 850 155 824.5Q122 799 122 753V728Q122 682 160 657.5Q198 633 282 633H410V736Q410 760 398 780.5Q386 801 364 817Q342 833 312 841.5Q282 850 245 850ZM987 924V863H946V675Q946 608 906.5 571.5Q867 535 791 535Q730 535 694 559Q658 583 641 612L687 656Q700 631 725 615Q750 599 788 599Q870 599 870 678V709H792Q713 709 670.5 736.5Q628 764 628 823Q628 872 659 901.5Q690 931 748 931Q799 931 828.5 911Q858 891 870 866H874Q874 896 892.5 910Q911 924 943 924ZM790 766H870V805Q870 821 861 830Q852 839 837.5 848.5Q823 858 803.5 863Q784 868 763 868Q704 868 704 822V811Q704 786 728 776Q752 766 790 766Z",
  "checkbox-filled": "M20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM99 907H901V93H99Z",
  "checkbox-checked-filled": "M20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 908H902V92H98ZM218 751V249C218 217 237 198 269 198H731C763 198 782 217 782 249V751C782 783 763 802 731 802H269C236 802 218 783 218 751Z",
  "checkmark-filled": "M160 489L410 739L848 301L792 246L409 629L215 434Z",
  "checkmark-circle-filled": "M0 498C0 844 190 1000 500 1000C810 1000 1000 844 1000 498C1000 177 810 0 500 0C190 0 0 177 0 498ZM205 522L260 467L414 622L737 299L793 354L415 732Z",
  "checkmark-square-filled": "M106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C52 980 20 948 20 894V106C20 52 49 20 106 20ZM190 519L410 739L808 341L752 286L409 629L245 464Z",
  "chevron-down-filled": "M66 336L501 770L935 335L880 280L500 662L121 280Z",
  "chevron-down-circle-filled": "M498 996C844 996 1000 806 1000 496C1000 186 844 -4 498 -4C177 -4 0 186 0 496C0 806 177 996 498 996ZM789 432L502 719L212 429L267 374L501 610L735 376Z",
  "chevron-left-filled": "M666 68L232 503L667 937L722 882L340 502L722 123Z",
  "chevron-left-circle-filled": "M0 498C0 844 190 1000 500 1000C810 1000 1000 844 1000 498C1000 177 810 0 500 0C190 0 0 177 0 498ZM564 789L277 502L567 212L622 267L386 501L620 735Z",
  "chevron-right-filled": "M334 68L768 503L333 937L278 882L660 502L278 123Z",
  "chevron-right-circle-filled": "M1000 498C1000 844 810 1000 500 1000C190 1000 0 844 0 498C0 177 190 0 500 0C810 0 1000 177 1000 498ZM436 789L723 502L433 212L378 267L614 501L380 735Z",
  "chevron-up-filled": "M66 674L501 240L935 675L880 730L500 348L121 730Z",
  "chevron-up-circle-filled": "M504 -8C158 -8 2 182 2 492C2 802 158 992 504 992C825 992 1002 802 1002 492C1002 182 825 -8 504 -8ZM213 556L500 269L790 559L735 614L501 378L267 612Z",
  "cloud-download-filled": "M746 738L694 688L539 860V568H461V860L306 688L254 738L500 1000ZM288 504C126 504 58 449 58 350C58 256 146 178 250 198C272 82 338 0 502 0C662 0 728 82 750 198C854 178 942 256 942 350C942 449 874 504 712 504Z",
  "cloud-x-filled": "M288 504C126 504 58 449 58 350C58 256 146 178 250 198C272 82 338 0 502 0C662 0 728 82 750 198C854 178 942 256 942 350C942 449 874 504 712 504ZM658 571L714 626L554 786L713 945L658 999L499 840L340 1000L284 945L444 785L285 626L340 572L499 731Z",
  "club-black-suit-filled": "M38 556C38 440 98 344 210 344C290 344 338 386 384 410L396 398C348 366 286 308 286 196C286 84 344 0 502 0C660 0 720 84 718 196C716 308 658 366 608 398L620 410C666 386 716 342 794 344C906 347 966 440 966 556C966 670 902 774 760 774C640 774 586 708 560 618H528C528 672 522 811 580 854C634 894 692 908 810 938V980H194V938C314 908 371 891 424 854C484 812 478 672 476 618H444C418 708 366 774 244 774C104 774 38 670 38 556Z",
  "collezioni-filled": "M961 728H39C110 908 273 1000 500 1000C727 1000 890 908 961 728ZM0 500H1000C1000 499 1000 499 1000 498C1000 211 810 0 500 0C190 0 0 211 0 498C0 499 0 499 0 500Z",
  "compare-filled": "M289 214L249 256L352 351H20V409H352L249 504L289 546L451 380ZM731 444L569 610L731 776L771 734L668 639H980V581H668L771 486ZM20 664V106C20 52 52 20 106 20H499C553 20 585 52 585 106V250H894C948 250 980 282 980 336V894C980 948 948 980 894 980H501C445 980 415 948 415 894V750H106C50 750 20 718 20 664Z",
  "contextual-menu-filled": "M380 120Q380 178 412 208 444 238 499 238 554 238 587 208 620 178 620 120 620 63 587 31.5 554 0 499 0 445 0 412.5 31.5 380 63 380 120ZM380 499Q380 558 412 588.5 444 619 499 619 555 619 587.5 588 620 557 620 499 620 441 587 410 554 379 499 379 444 379 412 410 380 441 380 499ZM380 882Q380 940 412 970 444 1000 499 1000 554 1000 587 970 620 940 620 882 620 824 587 793 554 762 499 762 444 762 412 793 380 824 380 882Z",
  "copy-to-clipboard-filled": "M225 387L301 387 301 118 555 118 555 264Q555 304 578 327 601 350 641 350L789 350 789 882 506 882 506 950 779 950Q820 950 842.5 927.5 865 905 865 864L865 261 655 50 311 50Q271 50 248 72.5 225 95 225 136ZM207 980L135 980 135 575 511 575 404 483 450 436 634 610 452 783 404 736 511 641 207 641Z",
  "copyright-filled": "M162 497C162 723 313 860 500 860C687 860 838 723 838 497C838 286 687 142 500 142C313 142 162 286 162 497ZM505 695Q427 695 383.5 642.5Q340 590 340 501Q340 412 383.5 359.5Q427 307 505 307Q556 307 588.5 331Q621 355 638 394L581 426Q570 400 552 385Q534 370 505 370Q461 370 438.5 397.5Q416 425 416 469V534Q416 578 438.5 605.5Q461 633 505 633Q537 633 556 616.5Q575 600 590 573L644 607Q627 645 592.5 670Q558 695 505 695Z",
  "cursor-index-filled": "M336 156L332 719 455 543 584 822 675 780 544 502 758 521Z",
  "dagger-filled": "M461 980H539V385H802V315H539V20H461V315H200V385H461Z",
  "daggerdbl-filled": "M200 684H461V980H539V684H802V616H539V372H802V304H539V20H461V304H200V372H461V616H200Z",
  "delete-filled": "M330 98V20H670V98ZM349 354V808H427V354ZM573 354V808H651V354ZM70 260V182H930V260H820V894C820 948 788 980 734 980H266C210 980 180 948 180 894V260Z",
  "diamond-black-suit-filled": "M500 0L84 500L500 1000L916 504Z",
  "dictionary-switch-filled": "M378 905H850C850 905 838 877 838 846C838 821 848 799 848 799H378ZM300 724H912V88H378H300C301 51 333 20 390 20H990V799C950 799 920 815 920 845C920 873 946 893 984 893H990V980H390C334 980 300 946 300 890ZM300 644H379L378 768H300ZM7 384C6 481 60 538 154 538H561L452 623L500 662L675 509L500 357L452 395L561 479H154C96 479 67 447 68 384ZM5 242L180 394L228 356L119 272H581C639 272 668 304 667 367H728C729 270 675 213 581 213H119L228 128L180 89Z",
  "dictonary-filled": "M105 890V110C105 52 137 20 195 20H895V772C855 772 825 788 825 835C825 880 851 900 889 900H895V980H195C139 980 105 946 105 890ZM183 912H755C747 892 743 864 743 836C743 814 747 788 753 772H183ZM217 214H421C421 261 397 299 363 333C334 301 323 276 313 244L263 261C277 296 291 326 324 360C297 391 268 403 227 417L242 472C285 457 323 441 361 399C399 438 436 457 475 469L502 417C466 405 425 388 400 362C444 312 473 273 473 214H525V166H397V118H344V166H217ZM724 662H786L672 375H605L491 662H553L579 586H697ZM647 426L683 536H593L632 426Z",
  "document-with-text-filled": "M182 832V164C182 110 214 78 268 78H532V272C532 326 564 358 618 358H822V832C822 886 790 918 736 918H268C212 918 182 886 182 832ZM318 726H586V658H318ZM318 566H686V498H318ZM600 290V78L822 290Z",
  "down-white-index-filled": "M388 1048C332 1049 308 1005 302 954L272 684C233 645 178 600 178 498C178 418 205 367 246 306C277 260 309 214 318 188C303 185 296 178 296 164V24C296 7 300 -3 320 -12C369 -29 434 -49 522 -52C611 -55 681 -29 744 -6C755 -3 762 7 762 30V152C762 170 755 178 744 176C763 225 788 273 808 380C827 495 835 587 784 624C748 645 725 637 714 632C714 647 712 685 672 716C638 736 606 728 586 716C572 733 569 750 538 770C506 784 477 776 460 770C458 841 455 870 454 946C453 1002 434 1047 388 1048ZM388 1000C411 1000 432 982 430 940L422 728C410 736 399 742 374 740C358 739 332 733 318 722L336 940C339 982 359 1000 388 1000ZM506 728C525 721 539 706 548 686C551 659 547 606 530 520C511 450 493 437 462 442C438 446 433 466 436 486C439 504 445 536 450 570C454 600 455 626 454 656C453 678 448 695 434 710C456 725 481 737 506 728ZM376 700C399 700 419 681 418 648C416 595 336 572 350 498C362 434 422 422 478 350C506 305 517 276 518 230H556C558 279 551 314 516 370C509 381 500 390 486 400C498 400 512 410 518 416C525 403 536 391 556 380C573 371 602 378 612 386C614 364 625 344 648 334C693 315 735 332 770 404L762 376C734 277 719 211 692 174C645 156 594 145 532 144C464 143 411 159 364 180C361 203 324 273 292 318C244 382 225 434 226 512C227 595 269 619 302 660C316 677 347 700 376 700ZM648 680C668 668 678 653 682 638C688 616 661 553 640 488C617 418 594 403 570 416C546 429 547 446 554 486C557 503 563 527 572 568C583 619 582 631 592 664C599 686 626 693 648 680ZM714 586C730 594 744 595 762 584C776 575 780 564 782 542C785 504 774 487 738 424C705 367 694 352 664 362C636 371 635 397 648 428C654 442 664 455 672 472C699 530 700 579 714 586ZM414 566L406 480C398 492 390 498 390 518C390 536 401 551 414 566ZM344 134C386 115 448 98 532 98C619 98 666 112 708 128V36C661 14 611 0 518 0C441 0 387 14 350 36ZM388 1048C434 1047 453 1002 454 946C455 870 458 841 460 770C477 776 506 784 538 770C569 750 572 733 586 716C606 728 638 736 672 716C712 685 714 647 714 632C725 637 748 645 784 624C835 587 827 495 808 380C788 273 763 225 744 176C755 178 762 170 762 152V30C762 7 755 -3 744 -6C681 -29 611 -55 522 -52C434 -49 369 -29 320 -12C300 -3 296 7 296 24V164C296 178 303 185 318 188C309 214 277 260 246 306C205 367 178 418 178 498C178 600 233 645 272 684L302 954C308 1005 332 1049 388 1048Z",
  "download-filled": "M902 644H980V894C980 948 948 980 894 980H106C52 980 20 948 20 894V644H98V908H902ZM754 560L704 508L540 686V20H462V686L294 512L242 562L500 820Z",
  "edit-filled": "M20 912V980H980V912ZM61 576L589 49C627 11 672 10 711 49L815 153C854 192 853 237 815 275L287 802H61Z",
  "edit-picture-filled": "M26 894V106C26 52 58 20 112 20H566V92H104V410L237 238C270 196 298 195 330 239L416 355L721 50C759 12 804 12 842 50L947 155C985 193 985 238 947 276L705 518L847 700V495H925V894C925 948 893 980 839 980H112C56 980 26 948 26 894ZM104 908H847V828L650 573L497 726H271V500L363 408L284 303L104 538Z",
  "electric-light-bulb-filled": "M306 640H698C697 535 843 484 842 297C841 134 761 -2 502 0C245 2 159 134 158 297C157 484 306 536 306 640ZM306 742H698V810H306ZM362 912H642V980H362Z",
  "email-filled": "M20 733V265C20 252 22 241 25 231L458 612C471 624 485 632 500 632C515 632 527 625 542 612L976 234C979 243 980 254 980 265V733C980 787 948 819 894 819H106C50 819 20 787 20 733ZM25 231C27 225 30 219 33 214C40 202 52 192 69 185C52 192 40 202 33 214C30 219 27 225 25 231ZM69 185L72 184C82 181 93 179 106 179H894C907 179 918 181 928 184L500 556L72 184ZM928 184C940 188 949 194 957 202C962 207 966 213 970 219C966 213 962 207 957 202C949 194 940 188 928 184ZM970 219C972 224 974 229 976 234Z",
  "event-filled": "M290 870H106C50 870 20 838 20 784V210C20 156 52 124 106 124H894C948 124 980 156 980 210V344H902V196H98V798H290ZM238 20H316V294H238ZM684 20H762V294H684ZM690 1000C871 1000 1000 881 1000 690C1000 509 871 380 690 380C509 380 380 508 380 690C380 881 509 1000 690 1000ZM642 715V551H704V691L813 792L773 837Z",
  "event-cancelled-filled": "M744 206H902V344H980V220C980 166 948 134 894 134H803ZM238 20V304H316V20ZM125 788H98V206H602L662 134H106C52 134 20 166 20 220V774C20 828 42 860 65 860ZM100 951L162 1000L382 726C397 896 521 1000 690 1000C871 1000 1000 881 1000 690C1000 510 871 380 690 380C679 380 669 380 659 381L926 48L864 0ZM642 715V551H704V691L813 792L773 837Z",
  "exclamation-circle-filled": "M0 498C0 844 190 1000 500 1000C810 1000 1000 844 1000 498C1000 177 810 0 500 0C190 0 0 177 0 498ZM472 605L456 403V195H544V403L528 605ZM499 801Q465 801 452.5 787Q440 773 440 749V737Q440 714 452.5 699.5Q465 685 499 685Q534 685 547 699.5Q560 714 560 737V749Q560 773 547 787Q534 801 499 801Z",
  "exclamation-square-filled": "M106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C52 980 20 948 20 894V106C20 52 49 20 106 20ZM472 605H528L544 403V195H456V403ZM499 801Q534 801 547 787Q560 773 560 749V737Q560 714 547 699.5Q534 685 499 685Q465 685 452.5 699.5Q440 714 440 737V749Q440 773 452.5 787Q465 801 499 801Z",
  "exercises-interactive-filled": "M86 0C29 0 0 32 0 86V914C0 968 32 1000 86 1000H914C968 1000 1000 968 1000 914V86C1000 32 968 0 914 0ZM126 389L175 340L345 515L694 162L744 211L346 609ZM489 693C508 669 542 678 572 697L597 713V527C597 489 614 467 642 467C673 467 686 489 686 527V567V660C686 631 696 604 725 604C754 604 763 624 765 658C771 620 785 615 801 615C828 615 836 635 839 686C846 646 862 640 877 640C904 640 915 660 915 703V748C915 867 893 913 800 913H708C663 913 623 880 505 781C473 754 471 715 489 693Z",
  "exercises-online-filled": "M86 0C29 0 0 32 0 86V914C0 968 32 1000 86 1000H914C968 1000 1000 968 1000 914V86C1000 32 968 0 914 0ZM96 359L145 310L315 485L664 132L714 181L316 579ZM451 695C451 833 554 936 692 936C830 936 933 833 933 695C933 557 830 454 692 454C554 454 451 557 451 695ZM490 695C490 673 493 652 500 632H580C576 651 573 672 573 695C573 718 574 739 578 758H500C493 738 490 717 490 695ZM513 790H586C599 833 622 867 646 896C589 882 540 843 513 790ZM513 600C541 546 591 506 650 494C626 522 602 556 588 600ZM612 694C612 672 615 651 619 632H764C768 651 770 672 770 694C770 717 768 738 764 758H618C614 738 612 717 612 694ZM626 790H756C743 832 720 867 691 901C663 867 640 832 626 790ZM628 600C642 558 665 524 691 492C718 524 741 558 754 600ZM732 493C792 506 843 546 871 600H795C781 555 757 522 732 493ZM736 896C760 867 783 833 797 790H871C844 844 795 882 736 896ZM804 632H884C891 652 894 673 894 695C894 717 891 738 884 758H804C808 739 810 718 810 695C810 672 807 651 804 632ZM451 695C451 557 554 454 692 454C830 454 933 557 933 695C933 833 830 936 692 936C554 936 451 833 451 695Z",
  "exercises-plus-filled": "M86 0C29 0 0 32 0 86V914C0 968 32 1000 86 1000H914C968 1000 1000 968 1000 914V86C1000 32 968 0 914 0ZM563 727V676H676V559H733V676H846V727L733 726V842H676V726ZM704 902C593 902 503 827 503 701C503 576 593 500 704 500C816 500 905 576 905 701C905 826 816 902 704 902ZM96 359L145 310L315 485L664 132L714 181L316 579Z",
  "favorites-filled": "M20 297Q20 440 90.5 573.5 161 707 269.5 814.5 378 922 500 1000 622 922 730.5 814.5 839 707 909.5 573.5 980 440 980 297 980 202 949.5 135 919 68 866 34 813 0 747 0 660 0 596.5 67.5 533 135 500 296 466 135 402.5 67.5 339 0 253 0 187 0 134 34 81 68 50.5 135 20 202 20 297Z",
  "film-frames-filled": "M106 150H894C948 150 980 182 980 236V754C980 818 948 850 894 850H106C52 850 20 818 20 754V236C20 180 52 150 106 150ZM799 188C795 188 792 191 792 195V233C792 237 795 240 799 240H867C871 240 874 237 874 233V195C874 191 871 188 867 188ZM355 188C351 188 348 191 348 195V233C348 237 351 240 355 240H423C427 240 430 237 430 233V195C430 191 427 188 423 188ZM267 278C213 278 181 308 181 364V636C181 690 213 722 267 722H733C787 722 819 690 819 636V364C819 310 787 278 733 278ZM133 188C129 188 126 191 126 195V233C126 237 129 240 133 240H201C205 240 208 237 208 233V195C208 191 205 188 201 188ZM577 188C573 188 570 191 570 195V233C570 237 573 240 577 240H645C649 240 652 237 652 233V195C652 191 649 188 645 188ZM799 760C795 760 792 763 792 767V805C792 809 795 812 799 812H867C871 812 874 809 874 805V767C874 763 871 760 867 760ZM355 760C351 760 348 763 348 767V805C348 809 351 812 355 812H423C427 812 430 809 430 805V767C430 763 427 760 423 760ZM133 760C129 760 126 763 126 767V805C126 809 129 812 133 812H201C205 812 208 809 208 805V767C208 763 205 760 201 760ZM577 760C573 760 570 763 570 767V805C570 809 573 812 577 812H645C649 812 652 809 652 805V767C652 763 649 760 645 760ZM20 278V722H43C97 722 129 690 129 636V364C129 310 97 278 43 278ZM980 278H957C903 278 871 310 871 364V636C871 690 903 722 957 722H980ZM450 620L611 520C624 512 626 506 626 497C626 490 624 483 611 475L452 377C431 364 410 365 410 399V601C410 628 428 634 450 620Z",
  "frame-with-picture-filled": "M673 389C731 389 778 342 778 283C778 225 731 178 673 178C614 178 567 225 567 283C567 342 614 389 673 389ZM20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C50 980 20 948 20 894ZM98 623L272 377C293 346 324 346 345 376L546 660L634 534C655 504 687 502 708 532L902 806V92H98Z",
  "gear-filled": "M20 560L130 578C138 631 154 677 176 716L118 797L203 882L285 824C324 846 370 861 421 868L440 980H560L579 867C630 860 675 845 714 822L797 882L882 797L822 713C843 675 858 630 865 579L980 560V440L865 421C857 372 842 328 820 290L882 203L797 118L711 180C673 157 628 141 579 133L560 20H440L421 133C371 140 326 156 288 179L203 118L118 203L178 287C155 326 139 371 131 422L20 440ZM364 519V480C364 411 418 361 498 361C578 361 632 411 632 480V519C632 589 586 639 498 639C410 639 364 589 364 519Z",
  "geogebra-filled": "M89 491C89 525 109 554 138 567C141 666 187 742 258 788V794C258 840 296 878 342 878C371 878 397 863 412 840C427 841 443 842 458 842C550 842 636 813 707 764C719 771 734 775 749 775C795 775 833 737 833 691C833 676 829 661 821 649C864 586 889 512 889 437C889 421 888 404 885 389C903 374 914 351 914 326C914 280 876 242 830 242C823 242 816 243 809 245C749 189 661 159 566 159L546 160C532 135 505 118 474 118C430 118 393 154 390 197C292 242 216 320 174 407H173C127 407 89 445 89 491ZM198 571C232 560 257 528 257 491C257 466 246 444 229 429C265 355 331 293 410 256C425 274 448 286 474 286C514 286 548 257 556 219H566C646 219 713 242 759 282C751 295 746 310 746 326C746 371 783 409 828 410C829 419 829 428 829 437C829 499 809 559 774 611C766 608 758 607 749 607C703 607 665 645 665 691C665 700 666 708 669 716C608 757 535 782 458 782C447 782 436 782 425 781C419 741 384 710 342 710C320 710 299 719 284 733C233 697 202 641 198 571Z",
  "headphone-filled": "M0 650C0 769 67 852 206 852H236V483C236 341 343 215 503 215C657 215 764 341 764 483V852H794C933 852 1000 769 1000 650C1000 545 948 468 840 451C813 260 698 145 503 145C303 145 187 260 160 451C52 468 0 545 0 650Z",
  "heart-black-suit-filled": "M40 260C40 83 151 -1 238 0C330 1 396 36 432 150L478 296H520L566 150C602 36 670 -1 762 0C848 1 961 83 960 260C958 656 535 827 500 1000C468 827 40 656 40 260Z",
  "helmsymbol-filled": "M388 516V483C388 426 433 385 499 385C565 385 610 426 610 483V516C610 574 572 615 499 615C426 615 388 574 388 516ZM223 545C223 670 332 788 499 788C666 788 775 670 775 545V453C775 330 648 212 499 212C350 212 223 330 223 453ZM157 554V443C157 286 310 153 499 153C688 153 841 286 841 443V554C841 714 709 847 499 847C289 847 157 714 157 554ZM20 466L192 468L209 478L391 480V517L210 519L190 529L20 531ZM980 466V531L810 529L790 519L609 517V480L791 478L808 468ZM184 136L304 259L309 278L436 408L410 435L280 308L259 301L138 182ZM862 815L816 861L698 739L691 718L564 589L590 562L720 690L739 695ZM532 18L530 190L520 207L518 389H482L480 208L469 188L467 18ZM533 979L468 978L470 809L480 788L481 607H519L521 789L531 806ZM862 182L739 302L720 307L590 435L564 408L691 279L698 258L816 136ZM184 861L138 815L259 696L280 689L410 562L436 589L309 719L304 738Z",
  "highlights-filled": "M20 908V980H980V908ZM114 810L184 811L260 735L175 653L67 763ZM136 548C108 591 98 616 140 658L261 779C296 814 324 804 365 777L487 696L857 254C891 214 896 172 857 133L771 47C732 8 690 12 650 47L213 428ZM179 605L263 480L431 650L306 734Z",
  "hourglass-flowing-filled": "M70 938C70 914 82 896 118 894C156 892 166 884 166 852C166 756 234 658 290 626C332 602 346 566 346 530V494C346 444 330 410 270 376C204 338 180 244 166 144C162 122 144 106 118 106C92 106 70 88 70 64C70 38 92 20 118 20H878C904 20 926 38 926 64C926 88 904 104 878 106C852 106 834 122 830 144C816 244 792 338 726 376C666 410 650 444 650 494V530C650 566 664 602 706 626C762 658 830 756 830 852C830 884 840 894 878 894C914 896 926 914 926 938C926 966 908 980 878 980H118C88 980 70 966 70 938ZM424 522H572V452C572 386 638 358 676 324C725 281 754 228 754 88H242C242 228 271 281 320 324C358 358 424 386 424 452ZM296 204C296 220 311 249 367 291C423 333 472 366 472 447V522H524V447C524 366 573 333 629 291C685 249 700 220 700 204Z",
  "hourglass-half-bottom-filled": "M70 938C70 914 82 896 118 894C156 892 166 884 166 852C166 756 234 658 290 626C332 602 346 566 346 530V494C346 444 330 410 270 376C204 338 180 244 166 144C162 122 144 106 118 106C92 106 70 88 70 64C70 38 92 20 118 20H878C904 20 926 38 926 64C926 88 904 104 878 106C852 106 834 122 830 144C816 244 792 338 726 376C666 410 650 444 650 494V530C650 566 664 602 706 626C762 658 830 756 830 852C830 884 840 894 878 894C914 896 926 914 926 938C926 966 908 980 878 980H118C88 980 70 966 70 938ZM424 522H572V452C572 386 638 358 676 324C725 281 754 228 754 88H242C242 228 271 281 320 324C358 358 424 386 424 452Z",
  "house-filled": "M0 441L498 37L996 441L951 510L830 413V871C830 925 798 957 744 957H256C200 957 170 925 170 871V423C170 418 170 413 171 409L45 510ZM398 957H600V665H398Z",
  "inbox-tray-filled": "M642 710V848H836V710ZM494 706L690 426H890C947 426 980 461 980 516V890C980 946 947 980 890 980H110C54 980 20 946 20 890V516C20 461 51 426 110 426H306ZM174 374C146 337 163 298 208 298H334V20H412V366H268L500 662L732 366H586V20H664V298H790C839 298 853 340 822 376L538 734C526 748 512 754 500 754C486 754 475 745 460 734Z",
  "informationsource-filled": "M0 498C0 844 190 1000 500 1000C810 1000 1000 844 1000 498C1000 201 810 0 500 0C190 0 0 201 0 498ZM316 772V704H477V460H357V392H555V704H684V772ZM490 306Q455 306 439 289Q423 272 423 245V231Q423 206 439 189Q455 172 490 172Q525 172 541 189Q557 206 557 231V245Q557 272 541 289Q525 306 490 306Z",
  "interactive-glossaries-filled": "M55 612L55 385 168 385Q196 385 211.5 401 227 417 227 444 227 456 224 465.5 221 475 215.5 481 210 487 202 489.5 194 492 185 492L185 494Q193 494 202.5 497 212 500 219 506.5 226 513 231 523.5 236 534 236 548 236 562 231.5 573.5 227 585 219.5 593.5 212 602 201.5 607 191 612 178 612ZM103 519L103 570 161 570Q171 570 178 565 185 560 185 550L185 539Q185 530 178 524.5 171 519 161 519ZM103 427L103 478 154 478Q164 478 170.5 472.5 177 467 177 457L177 447Q177 438 170.5 432.5 164 427 154 427ZM146 945Q123 945 104 938 85 931 72 916 59 901 51.5 879.5 44 858 44 828 44 800 51.5 778 59 756 72 740.5 85 725 104 717.5 123 710 146 710 182 710 203.5 721.5 225 733 237 761L193 783Q188 772 178.5 764.5 169 757 146 757 124 757 112 770 100 783 100 809L100 846Q100 874 112.5 887.5 125 901 147 901 169 901 179.5 893 190 885 198 870L239 892Q226 919 204 932 182 945 146 945ZM176 48L250 275 198 275 182 221 107 221 90 275 39 275 114 48ZM118 179L170 179 144 92 143 92ZM369 214L369 146 941 146 941 214ZM369 536L369 468 801 468 801 536ZM369 858L369 790 941 790 941 858Z",
  "interactives-maps-filled": "M170 336C271 336 336 269 336 166C336 65 271 0 170 0C65 0 0 65 0 166C0 269 65 336 170 336ZM310 135V200L523 199V134ZM523 168H455V825H523ZM455 368V433L687 432V367ZM455 797V862L687 861V796ZM834 568C935 568 1000 501 1000 398C1000 297 935 232 834 232C729 232 664 297 664 398C664 501 729 568 834 568ZM834 1000C935 1000 1000 933 1000 830C1000 729 935 664 834 664C729 664 664 729 664 830C664 933 729 1000 834 1000Z",
  "left-magnifying-glass-filled": "M0 370C0 619 158 745 370 744C583 743 742 619 742 370C742 138 583 0 370 0C158 0 0 137 0 370ZM82 424V326C82 182 220 74 370 74C523 74 660 182 660 326V424C660 564 540 669 370 670C202 671 82 564 82 424ZM580 656L942 993L1000 936L637 601Z",
  "left-white-index-filled": "M-48 386C-49 330 -5 306 46 300L316 270C355 231 400 176 502 176C582 176 633 203 694 244C740 275 786 307 812 316C815 301 822 294 836 294H976C993 294 1003 298 1012 318C1029 367 1049 432 1052 520C1055 609 1029 679 1006 742C1003 753 993 760 970 760H848C830 760 822 753 824 742C775 761 727 786 620 806C505 825 413 833 376 782C355 746 363 723 368 712C353 712 315 710 284 670C264 636 272 604 284 584C267 570 250 567 230 536C216 504 224 475 230 458C159 456 130 453 54 452C-2 451 -47 432 -48 386ZM0 386C0 409 18 430 60 428L272 420C264 408 258 397 260 372C261 356 267 330 278 316L60 334C18 337 0 357 0 386ZM272 504C279 523 294 537 314 546C341 549 394 545 480 528C550 509 563 491 558 460C554 436 534 431 514 434C496 437 464 443 430 448C400 452 374 453 344 452C322 451 305 446 290 432C275 454 263 479 272 504ZM300 374C300 397 319 417 352 416C405 414 428 334 502 348C566 360 578 420 650 476C695 504 724 515 770 516V554C721 556 686 549 630 514C619 507 610 498 600 484C600 496 590 510 584 516C597 523 609 534 620 554C629 571 622 600 614 610C636 612 656 623 666 646C685 691 668 733 596 768L624 760C723 732 789 717 826 690C844 643 855 592 856 530C857 462 841 409 820 362C797 359 727 322 682 290C618 242 566 223 488 224C405 225 381 267 340 300C323 314 300 345 300 374ZM320 646C332 666 347 676 362 680C384 686 447 659 512 638C582 615 597 592 584 568C571 544 554 545 514 552C497 555 473 561 432 570C381 581 369 580 336 590C314 597 307 624 320 646ZM414 712C406 728 405 742 416 760C425 774 436 778 458 780C496 783 513 772 576 736C633 703 648 692 638 662C629 634 603 633 572 646C558 652 545 662 528 670C470 697 421 698 414 712ZM434 412L520 404C508 396 502 388 482 388C464 388 449 399 434 412ZM866 342C885 384 902 446 902 530C902 617 888 664 872 706H964C986 659 1000 609 1000 516C1000 439 986 385 964 348ZM-48 386C-47 432 -2 451 54 452C130 453 159 456 230 458C224 475 216 504 230 536C250 567 267 570 284 584C272 604 264 636 284 670C315 710 353 712 368 712C363 723 355 746 376 782C413 833 505 825 620 806C727 786 775 761 824 742C822 753 830 760 848 760H970C993 760 1003 753 1006 742C1029 679 1055 609 1052 520C1049 432 1029 367 1012 318C1003 298 993 294 976 294H836C822 294 815 301 812 316C786 307 740 275 694 244C633 203 582 176 502 176C400 176 355 231 316 270L46 300C-5 306 -49 330 -48 386Z",
  "link-filled": "M110 545L348 307C421 234 509 249 585 324C660 398 674 487 601 560L574 587L525 538L551 511C591 470 590 426 537 372C483 317 438 316 397 357L160 594C119 635 121 679 175 734C228 788 273 788 314 748L341 722L390 771L363 798C290 871 202 856 126 782C50 708 37 618 110 545ZM417 442L444 415L493 464L467 491C427 532 427 577 481 630C536 684 580 686 621 645L858 408C899 367 898 322 843 268C789 215 745 214 704 254L677 280L628 231L655 204C728 131 817 145 892 220C967 295 981 384 908 457L670 695C597 768 508 754 433 678C359 603 344 515 417 442Z",
  "list-bulleted-square-filled": "M110 20H890C947 20 980 53 980 110V890C980 946 947 980 890 980H110C54 980 20 946 20 890V110C20 53 51 20 110 20ZM233 332C265 332 290 307 290 273C290 241 265 216 233 216C198 216 174 241 174 273C174 307 198 332 233 332ZM402 242V310H802V242ZM402 464V532H802V464ZM402 684V752H802V684ZM233 555C265 555 290 530 290 496C290 464 265 439 233 439C198 439 174 464 174 496C174 530 198 555 233 555ZM233 775C265 775 290 750 290 716C290 684 265 659 233 659C198 659 174 684 174 716C174 750 198 775 233 775Z",
  "location-filled": "M147 341C147 598 329 615 501 1000C672 615 852 598 852 341C852 156 723 0 501 0C276 0 147 156 147 341ZM340 351C340 255 403 195 499 195C596 195 659 255 659 351C659 451 596 511 499 511C403 511 340 451 340 351Z",
  "lock-filled": "M130 894V506C130 452 162 420 216 420H784C838 420 870 452 870 506V894C870 948 838 980 784 980H216C160 980 130 948 130 894ZM646 420H724V220C724 107 659 -2 502 0C346 2 276 107 276 220V420H354V220C354 136 403 65 502 66C600 67 646 136 646 220Z",
  "login-filled": "M600 92V20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H600V908H902V92ZM440 254L390 306L562 461H20V539H562L390 694L440 746L702 500Z",
  "logout-filled": "M400 92H98V908H400V980H106C52 980 20 948 20 894V106C20 52 52 20 106 20H400ZM718 254L673 301L845 464H298V536H845L673 698L718 746L980 500Z",
  "lozenge-filled": "M460 910H538L812 500L538 92H460L186 500ZM510 830H488L276 500L488 170H510L722 500Z",
  "magnfying-glass-filled": "M756 191H845V294H911V191H1000V133H911V20H845V133H756ZM82 397V328C82 209 177 118 316 118C455 118 551 209 551 328V397C551 520 471 614 318 614C166 614 82 520 82 397ZM756 497H1000V431H756ZM0 362C0 563 137 688 316 688C390 688 457 666 511 627L862 954L920 897L567 571C609 517 633 446 633 362C633 175 495 44 316 44C137 44 0 175 0 362Z",
  "map-filled": "M193 634C193 600 198 568 208 538H329C323 567 319 599 319 634C319 669 321 701 327 730H208C198 700 193 668 193 634ZM228 779H339C359 844 393 895 430 939C343 918 269 859 228 779ZM379 633C379 599 383 567 389 538H609C615 567 619 599 619 633C619 668 616 700 610 730H387C382 700 379 668 379 633ZM400 779H598C577 842 542 896 499 947C456 896 421 842 400 779ZM677 310L643 357C698 387 743 433 772 489H657C646 454 631 424 614 397L578 446C584 460 590 474 595 489H403C409 470 417 451 426 434L389 390C370 419 354 451 342 489H228C258 431 304 384 360 355L323 310C208 370 134 489 134 634C134 844 290 1000 500 1000C710 1000 866 844 866 634C866 489 792 370 677 310ZM567 939C604 895 638 844 659 779H772C731 860 656 919 567 939ZM670 538H792C802 568 807 600 807 634C807 668 802 700 792 730H671C676 701 679 669 679 634C679 599 675 567 670 538ZM333 159C333 279 401 266 498 447C595 266 662 279 662 159C662 73 588 0 498 0C407 0 333 73 333 159ZM498 231C458 231 427 200 427 160C427 120 458 89 498 89C538 89 569 120 569 160C569 201 538 231 498 231Z",
  "medium-black-square-filled": "M286 715V284H715V715Z",
  "medium-white-square-filled": "M286 715V284H715V715ZM361 645H638V354H361Z",
  "minus-filled": "M138 533H862V457H138Z",
  "minus-circled-filled": "M0 498C0 844 190 1000 500 1000C810 1000 1000 844 1000 498C1000 201 810 0 500 0C190 0 0 201 0 498ZM238 536V464H762V536Z",
  "minus-square-filled": "M106 980C49 980 20 948 20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980ZM218 532H782V460H218Z",
  "multiply-filled": "M144 195L445 496L144 797L199 852L500 551L801 852L856 797L555 496L856 195L801 140L500 441L199 140Z",
  "multiply-circle-filled": "M0 498C0 844 190 1000 500 1000C810 1000 1000 844 1000 498C1000 177 810 0 500 0C190 0 0 177 0 498ZM658 284L714 339L554 499L713 658L658 712L499 553L340 713L284 658L444 498L285 339L340 285L499 444Z",
  "multiply-circled-filled": "M0 498C0 844 190 1000 500 1000C810 1000 1000 844 1000 498C1000 177 810 0 500 0C190 0 0 177 0 498ZM254 305L309 250L500 441L691 250L746 305L555 496L746 687L691 742L500 551L309 742L254 687L445 496Z",
  "multiply-square-filled": "M106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C52 980 20 948 20 894V106C20 52 49 20 106 20ZM658 284L499 444L340 285L285 339L444 498L284 658L340 713L499 553L658 712L713 658L554 499L714 339Z",
  "notification-filled": "M20 746C20 784 36 794 68 794H298C298 933 381 1000 500 1000C619 1000 702 933 702 794H932C964 794 980 784 980 746V601L849 484C849 263 790 102 571 74V0H429V74C210 102 151 263 151 484L20 601ZM380 794H620C620 887 571 930 500 930C429 930 380 887 380 794Z",
  "notification-new-filled": "M817 353C896 353 960 288 960 209C960 130 896 66 817 66C738 66 674 130 674 209C674 289 738 353 817 353ZM20 746C20 784 36 794 68 794H298C298 933 381 1000 500 1000C619 1000 702 933 702 794H932C964 794 980 784 980 746V601L849 484C849 463 848 443 847 423C837 424 827 425 817 425C699 425 603 329 603 209C603 164 617 123 640 89C619 82 596 77 571 74V0H429V74C210 102 151 263 151 484L20 601ZM380 794H620C620 887 571 930 500 930C429 930 380 887 380 794Z",
  "notification-off-filled": "M20 824L660 91C635 82 604 76 571 73V0H429V74C210 102 151 263 151 484L20 601ZM55 951L117 1000L296 794H308C308 923 391 990 500 990C609 990 692 923 692 794H932C964 794 980 784 980 746V601L849 484C849 379 836 288 798 217L946 48L884 0ZM390 794H610C610 877 561 920 500 920C439 920 390 877 390 794Z",
  "numbered-list-filled": "M369 146V214H941V146ZM369 468V536H801V468ZM369 790V858H941V790ZM72 276H235V232H190V52H120L58 115L82 161L131 97H135V232H72ZM241 613V569H129L178 528Q203 504 219.5 486.5Q236 469 236 443Q236 413 216 395Q196 377 159 377Q137 377 123 381.5Q109 386 99 393.5Q89 401 82.5 410.5Q76 420 72 431L112 453Q117 438 127 428Q137 418 152 418Q169 418 174.5 425.5Q180 433 180 443V445Q180 465 165.5 480Q151 495 120 522L70 566V613ZM151 802H127V847H154Q191 847 191 876V879Q191 897 183.5 902.5Q176 908 157 908Q141 908 128 898Q115 888 106 874L71 909Q83 924 102 936.5Q121 949 161 949Q203 949 226.5 931.5Q250 914 250 885Q250 854 235 840.5Q220 827 199 824V822Q218 817 232 804.5Q246 792 246 764Q246 740 223.5 725Q201 710 158 710Q128 710 109.5 721Q91 732 81 747L115 781Q123 768 133 759.5Q143 751 157 751Q173 751 180 758Q187 765 187 774V777Q187 791 176 796.5Q165 802 151 802Z",
  "open-file-folder-filled": "M20 810V210C20 152 52 120 110 120H382L474 258H722C780 258 812 290 812 348V478H934C990 478 1015 516 990 568L872 818C845 874 810 900 754 900H110C54 900 20 866 20 810ZM98 707L162 562C187 506 226 478 284 478H734V330H436L340 192H98Z",
  "open-lock-filled": "M130 894V506C130 452 162 420 216 420H784C838 420 870 452 870 506V894C870 948 838 980 784 980H216C160 980 130 948 130 894ZM646 211H724C721 101 655 -2 502 0C346 2 276 107 276 220V420H354V220C354 136 403 65 502 66C597 67 643 131 646 211Z",
  "pause-filled": "M0 498C-1 817 203 999 498 1000C793 1001 999 817 1000 498C1001 207 793 1 498 0C203 -1 1 207 0 498ZM354 702V294H446V702ZM554 702V294H646V702Z",
  "pdf-filled": "M204 708H242V609H308Q338 609 355 590.5Q372 572 372 542Q372 510 355 492Q338 474 308 474H204ZM242 572V509H298Q317 509 325 512.5Q333 516 333 532V550Q333 566 325 569Q317 572 298 572ZM413 474V708H492Q514 708 531.5 700.5Q549 693 561.5 678Q574 663 581 641.5Q588 620 588 591Q588 562 581 540.5Q574 519 561.5 504Q549 489 531.5 481.5Q514 474 492 474ZM482 673H452V509H482Q495 509 508 514.5Q521 520 529 528.5Q537 537 542 551Q547 565 547 583V599Q547 617 542 631Q537 645 529 653.5Q521 662 508 667.5Q495 673 482 673ZM638 708H675V603H767V567H675V509H776V474H638ZM650 78H582V272C582 326 614 358 668 358H870V290H650ZM110 702V491C110 437 142 405 196 405H230V164C230 110 262 78 316 78H648L870 290V832C870 886 838 918 784 918H316C260 918 230 886 230 832V788H196C140 788 110 756 110 702Z",
  "periodic-table-filled": "M20 20V248H249V20ZM20 263V492H249V263ZM20 507V736H249V507ZM20 751V980H249V751ZM264 263V492H493V263ZM264 507V736H493V507ZM264 751V980H493V751ZM508 751V980H737V751ZM752 751V980H980V751ZM264 20V249H980V20ZM508 227V736H737V227ZM752 264H980V344L838 577V559H983V637H752V557L906 305L915 327H752Z",
  "play-filled": "M436 658C408 675 385 668 385 633V368C385 324 411 323 439 340L648 468C666 479 667 487 667 497C667 508 665 516 648 527ZM0 498C-1 817 203 999 498 1000C793 1001 999 817 1000 498C1001 207 793 1 498 0C203 -1 1 207 0 498Z",
  "plus-filled": "M138 531H462V878H538V531H862V461H538V114H462V461H138Z",
  "plus-circled-filled": "M0 498C0 844 190 1000 500 1000C810 1000 1000 844 1000 498C1000 177 810 0 500 0C190 0 0 177 0 498ZM227 531V461H461V204H539V461H773V531H539V788H461V531Z",
  "plus-square-filled": "M106 980C49 980 20 948 20 894V106C20 52 52 20 106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980ZM218 531H461V798H539V531H782V461H539V194H461V461H218Z",
  "powerpoint-filled": "M196 680V318H358Q405 318 431.5 345.5Q458 373 458 422Q458 470 431.5 498.5Q405 527 358 527H255V680ZM255 470H342Q372 470 384 464.5Q396 459 396 434V407Q396 384 384 378Q372 372 342 372H255ZM612 771H875C927 771 960 738 960 690V303C960 247 926 220 870 220H612C612 404 612 587 612 771ZM612 464H850V527H612ZM612 604H790V667H612ZM612 324H790V387H612ZM83 800C236 832 388 864 540 896C579 904 612 897 612 843C612 620 612 388 612 151C612 106 594 84 540 95L80 192C48 199 40 220 40 250C40 415 40 581 40 746C40 781 58 795 83 800Z",
  "qrcode-filled": "M420 420L20 420 20 20 420 20ZM980 420L580 420 580 20 980 20ZM155 149L155 291 285 291 285 149ZM715 149L715 291 845 291 845 149ZM693 580L509 580 509 508 767 508 767 699 693 699ZM420 980L20 980 20 580 420 580ZM980 980L640 980 640 908 904 908 904 640 980 640ZM597 779L523 779 523 674 597 674ZM841 851L767 851 767 699 841 699ZM155 709L155 851 285 851 285 709ZM702 851L597 851 597 779 702 779Z",
  "question-mark-circle-filled": "M0 498C0 844 190 1000 500 1000C810 1000 1000 844 1000 498C1000 177 810 0 500 0C190 0 0 177 0 498ZM495 215C627 216 673 280 672 383C671 495 590 541 531 541V609H453V485C548 483 582 437 583 383C584 342 565 285 495 285C419 285 385 346 373 391L306 347C328 277 380 214 495 215ZM494 676C532 676 556 694 556 736C556 779 532 798 494 798C457 798 432 779 432 736C432 694 457 676 494 676Z",
  "question-mark-square-filled": "M106 20H894C948 20 980 52 980 106V894C980 948 948 980 894 980H106C52 980 20 948 20 894V106C20 52 49 20 106 20ZM496 205C373 204 321 267 299 337L366 381C378 336 412 275 488 275C558 275 577 327 576 376C575 439 541 490 446 492V616H524V548C583 548 664 502 665 370C666 270 620 206 496 205ZM487 695C450 695 425 713 425 755C425 798 450 817 487 817C525 817 549 798 549 755C549 713 525 695 487 695Z",
  "radio-button-filled": "M0 498C-1 817 203 999 498 1000C793 1001 999 817 1000 498C1001 207 793 1 498 0C203 -1 1 207 0 498ZM80 500C80 255 255 82 498 82C741 82 920 255 920 500C920 764 741 918 498 918C255 918 80 764 80 500Z",
  "radio-button-checked-filled": "M218 500C217 320 329 218 498 218C667 218 783 320 782 500C781 693 667 782 498 782C329 782 219 693 218 500ZM0 498C-1 817 203 999 498 1000C793 1001 999 817 1000 498C1001 207 793 1 498 0C203 -1 1 207 0 498ZM80 500C80 255 255 82 498 82C741 82 920 255 920 500C920 764 741 918 498 918C255 918 80 764 80 500Z",
  "recently-viewed-filled": "M222 834L179 899C261 958 377 1000 510 1000C800 1000 1000 809 1000 502C1000 170 799 0 514 0V70C257 73 167 244 123 370H317V438H0V110H68V214L66 329C110 201 237 3 514 0C514 0 514 24 514 70C745 71 918 224 918 442V562C918 765 730 930 510 930C398 930 294 888 222 834ZM466 212V536H541V212ZM466 536L725 745L773 687L516 486Z",
  "redo-filled": "M574 456H612V602C612 648 652 664 688 636L980 364C994 350 1000 338 1000 324C1002 310 994 298 980 286L690 16C656 -14 612 0 612 48V194H574C108 194 0 456 0 1000H46C46 576 264 456 574 456Z",
  "registro-filter-filled": "M406 611L406 918Q406 951 419 965.5 432 980 466 980L534 980Q568 980 581 965.5 594 951 594 918L594 611 908 144Q929 111 929 82 929 54 907 37 885 20 844 20L156 20Q115 20 93 37 71 54 71 82 71 111 92 144Z",
  "right-white-index-filled": "M1048 390C1049 334 1005 310 954 304L684 274C645 235 600 180 498 180C418 180 367 207 306 248C260 279 214 311 188 320C185 305 178 298 164 298H24C7 298 -3 302 -12 322C-29 371 -49 436 -52 524C-55 613 -29 683 -6 746C-3 757 7 764 30 764H152C170 764 178 757 176 746C225 765 273 790 380 810C495 829 587 837 624 786C645 750 637 727 632 716C647 716 685 714 716 674C736 640 728 608 716 588C733 574 750 571 770 540C784 508 776 479 770 462C841 460 870 457 946 456C1002 455 1047 436 1048 390ZM1000 390C1000 413 982 434 940 432L728 424C736 412 742 401 740 376C739 360 733 334 722 320L940 338C982 341 1000 361 1000 390ZM728 508C721 527 706 541 686 550C659 553 606 549 520 532C450 513 437 495 442 464C446 440 466 435 486 438C504 441 536 447 570 452C600 456 626 457 656 456C678 455 695 450 710 436C725 458 737 483 728 508ZM700 378C700 401 681 421 648 420C595 418 572 338 498 352C434 364 422 424 350 480C305 508 276 519 230 520V558C279 560 314 553 370 518C381 511 390 502 400 488C400 500 410 514 416 520C403 527 391 538 380 558C371 575 378 604 386 614C364 616 344 627 334 650C315 695 332 737 404 772L376 764C277 736 211 721 174 694C156 647 145 596 144 534C143 466 159 413 180 366C203 363 273 326 318 294C382 246 434 227 512 228C595 229 619 271 660 304C677 318 700 349 700 378ZM680 650C668 670 653 680 638 684C616 690 553 663 488 642C418 619 403 596 416 572C429 548 446 549 486 556C503 559 527 565 568 574C619 585 631 584 664 594C686 601 693 628 680 650ZM586 716C594 732 595 746 584 764C575 778 564 782 542 784C504 787 487 776 424 740C367 707 352 696 362 666C371 638 397 637 428 650C442 656 455 666 472 674C530 701 579 702 586 716ZM566 416L480 408C492 400 498 392 518 392C536 392 551 403 566 416ZM134 346C115 388 98 450 98 534C98 621 112 668 128 710H36C14 663 0 613 0 520C0 443 14 389 36 352ZM1048 390C1047 436 1002 455 946 456C870 457 841 460 770 462C776 479 784 508 770 540C750 571 733 574 716 588C728 608 736 640 716 674C685 714 647 716 632 716C637 727 645 750 624 786C587 837 495 829 380 810C273 790 225 765 176 746C178 757 170 764 152 764H30C7 764 -3 757 -6 746C-29 683 -55 613 -52 524C-49 436 -29 371 -12 322C-3 302 7 298 24 298H164C178 298 185 305 188 320C214 311 260 279 306 248C367 207 418 180 498 180C600 180 645 235 684 274L954 304C1005 310 1049 334 1048 390Z",
  "school-filled": "M20 882H980V564C980 506 946 472 888 472H744V212C744 154 710 120 652 120H346C288 120 254 154 254 212V472H112C54 472 20 506 20 564ZM498 466C436 466 405 436 406 372C407 308 436 279 498 279C562 279 592 308 592 372C592 436 562 466 498 466ZM404 630H594V882H404ZM178 472H254V882H178ZM744 472H820V882H744Z",
  "search-filled": "M73 396V339C73 246 151 170 261 170C371 170 450 245 450 339V396C450 492 384 570 263 570C142 570 73 492 73 396ZM0 367C0 533 113 636 261 636C322 636 375 620 419 588L689 838L743 786L472 537C506 492 523 436 523 367C523 212 409 104 261 104C113 104 0 212 0 367ZM649 126V191H980V126ZM649 293V358H880V293ZM649 460V525H980V460Z",
  "send-filled": "M669 172Q717 142 751 142 804 142 804 202 804 228 795 272L675 872Q665 923 631 923 616 923 603.5 913 591 903 577 882L448 689 580 495 527 457 390 646 175 591Q142 582 129 572 116 562 116 543 116 526 124 515.5 132 505 150 494Z",
  "share-filled": "M644 712L379 552L345 611L610 771ZM798 1000C922 1000 1000 919 1000 794C1000 671 922 592 798 592C671 592 592 671 592 794C592 919 671 1000 798 1000ZM206 701C330 701 408 620 408 495C408 372 330 293 206 293C79 293 0 372 0 495C0 620 79 701 206 701ZM798 408C922 408 1000 327 1000 202C1000 79 922 0 798 0C671 0 592 79 592 202C592 327 671 408 798 408ZM644 267L610 208L345 368L379 427Z",
  "shopping-cart-filled": "M20 88H129L250 772H880V704H303L279 570H919L1000 108H198L182 20H20ZM250 920C250 964 286 1000 332 1000C375 1000 410 964 410 920C412 875 375 839 332 840C286 839 250 875 250 920ZM728 920C729 964 762 1000 808 1000C852 1000 887 964 888 920C889 875 852 839 808 840C762 841 727 875 728 920Z",
  "show-video-filled": "M433 524L623 406C637 397 640 389 640 378C640 370 639 363 623 353L437 238C411 222 388 224 388 263V500C388 532 409 539 433 524ZM310 790C247 790 203 761 203 696C203 632 246 598 310 598C369 598 415 632 415 696C415 761 369 790 310 790ZM136 980H479C480 879 443 822 332 822H286C173 822 138 879 136 980ZM693 790C630 790 585 761 585 697C585 632 629 598 693 598C752 598 797 632 797 697C797 761 752 790 693 790ZM519 980H862C862 879 825 822 715 822H668C554 822 519 879 519 980ZM862 729V657H902V92H98V657H138V729H106C50 729 20 697 20 643V106C20 52 52 20 106 20H894C948 20 980 52 980 106V643C980 697 948 729 894 729Z",
  "spade-black-suit-filled": "M68 518C68 232 472 154 500 0C531 154 930 232 932 518C933 665 845 736 732 736C651 736 590 708 558 606H526C526 667 532 807 600 864C666 919 736 924 810 938V980H190V938C268 923 331 920 396 866C466 808 472 667 472 606H440C406 707 349 736 268 736C154 736 68 665 68 518Z",
  "speaker-off-filled": "M505 116V878C505 921 465 930 439 900L193 658H55C31 658 21 648 21 624V368C21 345 31 336 53 336H189L441 96C463 74 505 78 505 116ZM945 301L1001 356L861 496L1000 635L945 689L806 550L667 690L611 635L751 495L612 356L667 302L806 441Z",
  "speaker-on-filled": "M514 116V878C514 921 474 930 448 900L192 658H54C30 658 20 648 20 624V368C20 345 30 336 52 336H188L450 96C472 74 514 78 514 116ZM649 604L694 658C764 630 802 570 802 500C802 430 764 370 694 342L649 396C695 412 733 450 733 500C733 550 695 588 649 604ZM783 724L832 784C946 706 1000 620 1000 500C1000 380 950 294 832 216L783 276C875 335 925 400 925 500C925 600 875 665 783 724Z",
  "star-empty-filled": "M0 382C1 356 16 346 44 346L362 332L462 36C471 11 485 0 500 0C515 0 529 11 538 36L638 332L956 346C984 346 999 356 1000 382C1001 404 994 414 980 424L714 590L831 953C840 981 821 1000 794 1000C775 1000 767 997 750 981L500 752L252 979C234 996 227 1000 208 1000C176 1000 161 978 169 953L286 590L20 424C6 414 -1 404 0 382ZM59 369L373 562L243 935L220 919L500 658L780 919L757 935L627 562L941 369L948 404L582 398L483 69H516L418 398L52 404Z",
  "star-full-filled": "M0 382C1 356 16 346 44 346L362 332L462 36C471 11 485 0 500 0C514 0 528 11 536 36L636 332L954 346C984 347 998 356 998 382C998 405 992 414 978 424L712 590L828 950C835 972 828 984 810 994C793 1004 773 1002 758 990L500 752L240 990C228 1002 206 1003 188 994C168 984 163 972 170 950L286 590L20 424C6 414 -1 404 0 382Z",
  "sun-with-rays-filled": "M20 529V471H212C216 405 235 351 268 309L140 181L181 140L309 268C351 236 405 217 471 213V20H529V213C594 217 648 237 690 269L819 140L860 181L731 310C763 352 782 406 786 471H980V529H786C782 597 764 651 733 692L860 819L819 860L692 733C650 765 595 783 529 787V980H471V787C405 783 349 766 307 734L181 860L140 819L266 693C235 652 216 597 212 529ZM285 532C285 646 334 723 499 723C664 723 713 646 713 532V466C713 358 651 277 499 277C348 277 285 358 285 466Z",
  "support-filled": "M10 474C10 573 77 646 206 646H236V337C236 196 343 74 503 74C657 74 764 196 764 337V646H794C923 646 990 573 990 474C990 388 938 322 847 305C813 115 698 0 503 0C303 0 187 115 153 305C62 322 10 387 10 474ZM523 1000C601 1000 649 943 649 874C649 804 601 747 523 747C444 747 396 805 396 874C396 943 444 1000 523 1000ZM834 621H764C764 771 740 844 643 844V910C786 910 834 821 834 621Z",
  "switch-filled": "M0 203L221 406L264 362L123 238H327V168H123L264 44L221 0ZM451 535V465H776C889 465 929 417 929 352C929 286 889 238 776 238H327V168H776C931 168 1000 245 1000 352C1000 458 931 535 776 535ZM1000 797L779 594L736 638L877 762H673V832H877L736 956L779 1000ZM505 465V535H224C111 535 71 583 71 648C71 714 111 762 224 762H673V832H224C69 832 0 755 0 648C0 542 69 465 224 465Z",
  "synchronize-filled": "M970 368H888C855 198 723 74 534 74C291 74 197 243 153 370H270H414V448H20V60H98V214L96 319C140 190 270 -2 534 0C771 2 923 140 970 368ZM30 632H112C145 802 277 926 463 926C689 926 803 757 847 630H730H586V552H980V940H902V786L904 681C860 810 710 1002 463 1000C229 998 77 860 30 632Z",
  "target-filled": "M415 826C157 826 0 686 0 411C0 158 157 0 414 0C669 0 825 157 826 416H668C668 244 569 148 414 148C257 148 158 244 158 412C158 586 246 678 416 678ZM416 416H559C558 319 510 261 414 261C310 261 261 319 261 412C261 492 310 550 416 550ZM825 503H503V826L576 825V631L944 1000L1000 945L631 576H825Z",
  "text-scale-filled": "M701 182H926V112H398V182H623V810H701ZM297 490H442V422H74V490H219V898H297Z",
  "textual-analysisalysis-filled": "M425 141H376V266C376 300 402 326 437 326H560V276H425ZM148 626V196C148 161 168 141 203 141H425L560 276V419C483 442 433 505 433 580V637C433 652 435 667 438 681H203C167 681 148 661 148 626ZM238 557V508H405V557ZM238 448V400H464V448ZM438 681C456 756 521 811 623 811C744 811 810 733 810 637V580C810 486 731 411 621 411C599 411 579 414 560 419V626C560 661 540 681 505 681ZM20 894C20 948 50 980 106 980H894C909 980 923 977 934 973L779 829C735 861 682 877 621 877C473 877 360 774 360 608C360 453 473 345 621 345C769 345 883 453 883 608C883 677 866 733 832 778L979 913C980 907 980 901 980 894V106C980 52 948 20 894 20H106C52 20 20 52 20 106Z",
  "theory-help-filled": "M20 538L98 538 98 92 458 92 458 810 902 810Q938 810 959 786.5 980 763 980 724L980 106Q980 65 957.5 42.5 935 20 894 20L106 20Q66 20 43 42.5 20 65 20 106ZM842 231L592 231 592 182 842 182ZM792 370L592 370 592 321 792 321ZM842 509L592 509 592 460 842 460ZM792 648L592 648 592 599 792 599ZM50 996L0 943 219 732 19 746 19 668 328 668 328 980 250 980 263 779Z",
  "timer-clock-filled": "M746 877V825H603L669 765Q700 736 722.5 711Q745 686 745 650Q745 612 718 587Q691 562 641 562Q617 562 598.5 568.5Q580 575 566.5 585Q553 595 545 608Q537 621 531 635L577 664Q584 645 597 631Q610 617 641 617Q665 617 673 627Q681 637 681 650V654Q681 680 663.5 700Q646 720 630 734L533 819V877ZM908 877H967V811H1000V759H967V573H874L769 735V811H908ZM908 620V764H814L905 620ZM505 1000V930C250 930 82 771 82 558V438C82 235 270 70 500 70C730 70 918 235 918 438V497H1000C1000 191 800 0 500 0C200 0 0 191 0 498C0 830 200 1000 505 1000ZM464 202V466H542V202ZM161 538H542V466H161Z",
  "undo-filled": "M426 456H388V602C388 648 348 664 312 636L20 364C6 350 0 338 0 324C-2 310 6 298 20 286L310 16C344 -14 388 0 388 48V194H426C892 194 1000 456 1000 1000H954C954 576 736 456 426 456Z",
  "u-circle-filled": "M0 498C0 844 190 1000 500 1000C810 1000 1000 844 1000 498C1000 177 810 0 500 0C190 0 0 177 0 498ZM376 252V564Q376 644 401 678Q426 712 498 712Q574 712 599 678Q624 644 624 564V252H702V546Q702 612 691.5 653.5Q681 695 657.5 724Q634 753 595.5 767.5Q557 782 498 782Q439 782 401 767.5Q363 753 339.5 724Q316 695 307 653.5Q298 612 298 546V252Z",
  "u-square-filled": "M376 244L298 244 298 538Q298 604 307 645.5 316 687 339.5 716 363 745 401 759.5 439 774 498 774 557 774 595.5 759.5 634 745 657.5 716 681 687 691.5 645.5 702 604 702 538L702 244 624 244 624 556Q624 636 599 670 574 704 498 704 426 704 401 670 376 636 376 556ZM20 894Q20 935 42 957.5 64 980 106 980L894 980Q935 980 957.5 957.5 980 935 980 894L980 106Q980 65 957.5 42.5 935 20 894 20L106 20Q66 20 43 42.5 20 65 20 106ZM902 908L98 908 98 92 902 92Z",
  "up-white-index-filled": "M388 -48C332 -49 308 -5 302 46L272 316C233 355 178 400 178 502C178 582 205 633 246 694C277 740 309 786 318 812C303 815 296 822 296 836V976C296 993 300 1003 320 1012C369 1029 434 1049 522 1052C611 1055 681 1029 744 1006C755 1003 762 993 762 970V848C762 830 755 822 744 824C763 775 788 727 808 620C827 505 835 413 784 376C748 355 725 363 714 368C714 353 712 315 672 284C638 264 606 272 586 284C572 267 569 250 538 230C506 216 477 224 460 230C458 159 455 130 454 54C453 -2 434 -47 388 -48ZM388 0C411 0 432 18 430 60L422 272C410 264 399 258 374 260C358 261 332 267 318 278L336 60C339 18 359 0 388 0ZM506 272C525 279 539 294 548 314C551 341 547 394 530 480C511 550 493 563 462 558C438 554 433 534 436 514C439 496 445 464 450 430C454 400 455 374 454 344C453 322 448 305 434 290C456 275 481 263 506 272ZM376 300C399 300 419 319 418 352C416 405 336 428 350 502C362 566 422 578 478 650C506 695 517 724 518 770H556C558 721 551 686 516 630C509 619 500 610 486 600C498 600 512 590 518 584C525 597 536 609 556 620C573 629 602 622 612 614C614 636 625 656 648 666C693 685 735 668 770 596L762 624C734 723 719 789 692 826C645 844 594 855 532 856C464 857 411 841 364 820C361 797 324 727 292 682C244 618 225 566 226 488C227 405 269 381 302 340C316 323 347 300 376 300ZM648 320C668 332 678 347 682 362C688 384 661 447 640 512C617 582 594 597 570 584C546 571 547 554 554 514C557 497 563 473 572 432C583 381 582 369 592 336C599 314 626 307 648 320ZM714 414C730 406 744 405 762 416C776 425 780 436 782 458C785 496 774 513 738 576C705 633 694 648 664 638C636 629 635 603 648 572C654 558 664 545 672 528C699 470 700 421 714 414ZM414 434L406 520C398 508 390 502 390 482C390 464 401 449 414 434ZM344 866C386 885 448 902 532 902C619 902 666 888 708 872V964C661 986 611 1000 518 1000C441 1000 387 986 350 964ZM388 -48C434 -47 453 -2 454 54C455 130 458 159 460 230C477 224 506 216 538 230C569 250 572 267 586 284C606 272 638 264 672 284C712 315 714 353 714 368C725 363 748 355 784 376C835 413 827 505 808 620C788 727 763 775 744 824C755 822 762 830 762 848V970C762 993 755 1003 744 1006C681 1029 611 1055 522 1052C434 1049 369 1029 320 1012C300 1003 296 993 296 976V836C296 822 303 815 318 812C309 786 277 740 246 694C205 633 178 582 178 502C178 400 233 355 272 316L302 46C308 -5 332 -49 388 -48Z",
  "user-avatar-filled": "M0 498C0 842 192 1000 500 1000C808 1000 1000 842 1000 498C1000 178 808 0 500 0C192 0 0 178 0 498ZM210 780C212 680 276 614 450 614H550C721 614 788 680 790 780C728 858 604 892 498 892C402 892 272 858 210 780ZM336 374C336 262 402 218 500 216C598 218 664 262 664 374C664 486 596 526 500 528C404 526 336 486 336 374Z",
  "view-filled": "M0 498C91 707 233 859 498 860C763 861 905 707 1000 498C909 317 763 141 498 140C233 139 95 318 0 498ZM99 500C183 366 285 218 498 218C711 218 817 366 901 500C817 653 711 782 498 782C285 782 183 653 99 500ZM308 500C308 388 383 318 499 318C614 318 692 388 692 500C692 621 614 682 499 682C383 682 308 621 308 500Z",
  "view-off-filled": "M0 498C91 717 233 869 498 870C763 871 905 717 1000 498C909 307 763 131 498 130C233 129 95 308 0 498ZM99 500C183 356 285 208 498 208C711 208 817 356 901 500C817 663 711 792 498 792C285 792 183 663 99 500ZM308 500C308 631 383 692 499 692C614 692 692 631 692 500C692 378 614 308 499 308C383 308 308 378 308 500ZM663 20L513 354H608L778 20ZM393 657L222 980H337L488 657Z",
  "virtual-class-filled": "M624 928V1000C784 986 956 858 1000 686H928C884 816 750 914 624 928ZM0 322H76C117 185 254 78 430 76V0C218 0 42 148 0 322ZM760 282C839 282 901 238 900 144C899 49 839 0 760 0C675 0 616 49 616 144C616 238 676 282 760 282ZM514 560H1000C1001 412 951 330 804 330H714C561 330 515 412 514 560ZM246 702C325 702 387 658 386 564C385 469 325 420 246 420C161 420 102 469 102 564C102 658 162 702 246 702ZM0 980H486C487 832 437 750 290 750H200C47 750 1 832 0 980Z",
  "white-circle-filled": "M500 648C416 648 358 584 358 499C358 415 416 351 500 351C584 351 643 415 643 499C643 583 584 648 500 648ZM500 715C624 715 715 622 715 499C715 375 624 284 500 284C377 284 286 375 286 499C286 624 377 715 500 715Z",
  "white-diamond-filled": "M500 78L194 500L500 924L806 504ZM500 202L710 504L500 799L290 500Z",
  "word-filled": "M128 355H177L223 633H209L284 355H343L420 633H406L451 355H498L443 653H381L313 416H312L244 653H184ZM612 771H875C927 771 960 738 960 690V303C960 247 926 220 870 220H612C612 404 612 587 612 771ZM612 464H850V527H612ZM612 604H790V667H612ZM612 324H790V387H612ZM40 746C40 781 58 795 83 800C236 832 388 864 540 896C579 904 612 897 612 843C612 620 612 388 612 151C612 106 594 84 540 95L80 192C48 199 40 220 40 250C40 415 40 581 40 746Z",
  "working-bag-filled": "M410 569V637H590V569ZM110 279H890C947 279 980 312 980 369V809C980 865 947 899 890 899H110C54 899 20 865 20 809V369C20 312 51 279 110 279ZM768 279H690V167H310V279H232V189C232 133 262 99 320 99H680C735 99 768 133 768 189ZM310 279H232ZM20 501V569H980V501Z",
  "app-switcher-button": "M0 119Q1 178 32 208 63 238 119 238 174 238 206 208 238 178 239 119 239 63 206 31.5 173 0 119 0 64 0 32 31.5 0 63 0 119ZM380 119Q381 178 412.5 208 444 238 499 238 554 238 586.5 208 619 178 620 119 620 63 586.5 31.5 553 0 499 0 445 0 412.5 31.5 380 63 380 119ZM761 119Q762 178 793 208 824 238 880 238 936 238 967.5 208 999 178 1000 119 1000 63 967.5 31.5 935 0 880 0 825 0 793 31.5 761 63 761 119ZM0 499Q0 559 31.5 589 63 619 119 619 174 619 206.5 589 239 559 239 499 239 442 206 410.5 173 379 119 379 64 379 32 410.5 0 442 0 499ZM380 499Q380 559 411.5 589 443 619 499 619 555 619 587.5 589 620 559 620 499 620 442 587 410.5 554 379 499 379 444 379 412 410.5 380 442 380 499ZM761 499Q761 559 792.5 589 824 619 880 619 936 619 968 589 1000 559 1000 499 1000 442 967.5 410.5 935 379 880 379 825 379 793 410.5 761 442 761 499ZM0 880Q1 940 32 970 63 1000 119 1000 174 1000 206 970 238 940 239 880 239 824 206 793 173 762 119 762 64 762 32 793 0 824 0 880ZM380 880Q381 940 412.5 970 444 1000 499 1000 554 1000 586.5 970 619 940 620 880 620 824 587 793 554 762 499 762 445 762 412.5 793 380 824 380 880ZM761 880Q762 940 793 970 824 1000 880 1000 936 1000 967.5 970 999 940 1000 880 1000 824 967.5 793 935 762 880 762 825 762 793 793 761 824 761 880Z",
  "atom-button": "M0 86Q0 45 23 22.5 46 0 86 0L914 0Q955 0 977.5 22.5 1000 45 1000 86L1000 914Q1000 955 977.5 977.5 955 1000 914 1000L86 1000Q44 1000 22 977.5 0 955 0 914ZM184 680Q207 721 276 721 317 721 381 703 400 777 430.5 819.5 461 862 500 862 539 862 569.5 819.5 600 777 618 703 682 721 723 721 792 721 815 680 824 663 824 644 824 613 801 575.5 778 538 736 498 778 457 801 419.5 824 382 824 351 824 332 815 316 792 275 721 275 677 275 618 292 600 218 569.5 175.5 539 133 500 133 460 133 429.5 175.5 399 218 381 292 322 275 278 275 207 275 184 316 175 332 175 351 175 382 198 419.5 221 457 263 498 221 538 198 575.5 175 613 175 644 175 663 184 680ZM431 309Q446 252 465 217.5 484 183 500 183 515 183 534 218 553 253 568 309 535 323 499 339 467 324 431 309ZM225 349Q225 328 271 328 313 328 371 344 365 380 362 419 331 440 303 463 266 427 245.5 396.5 225 366 225 349ZM628 344Q686 328 728 328 774 328 774 349 774 366 753.5 396.5 733 427 696 463 668 440 637 419 634 380 628 344ZM409 497Q409 480 411 446L455 419Q475 407 499 395 521 405 544 419L588 446Q590 480 590 497 590 515 588 549 575 558 545 576 521 590 499 600 476 590 454 576 424 558 411 549 409 515 409 497ZM227 655Q225 651 225 646 225 629 245.5 598.5 266 568 303 533 332 556 362 577 365 614 371 651 308 668 269 668 235 668 227 655ZM628 651Q634 614 637 577 667 556 696 533 733 568 753.5 598.5 774 629 774 646 774 651 772 655 764 668 730 668 691 668 628 651ZM431 686Q480 666 500 656 526 670 568 686 553 743 534 777.5 515 812 500 812 484 812 465 777.5 446 743 431 686Z",
  "cursor-index-button": "M0 86Q0 45 23 22.5 46 0 86 0L914 0Q955 0 977.5 22.5 1000 45 1000 86L1000 914Q1000 955 977.5 977.5 955 1000 914 1000L86 1000Q44 1000 22 977.5 0 955 0 914ZM336 156L332 719 455 543 584 822 675 780 544 502 758 521Z",
  "film-frames-button": "M914 0Q955 0 977.5 22.5 1000 45 1000 86L1000 914Q1000 955 977.5 977.5 955 1000 914 1000L86 1000Q46 1000 23 977.5 0 955 0 914L0 86Q0 45 22 22.5 44 0 86 0ZM980 278L980 236Q980 195 957.5 172.5 935 150 894 150L106 150Q65 150 42.5 172 20 194 20 236L20 278 43 278Q84 278 106.5 300.5 129 323 129 364L129 636Q129 676 106.5 699 84 722 43 722L20 722 20 754Q20 801 42.5 825.5 65 850 106 850L894 850Q935 850 957.5 825.5 980 801 980 754L980 722 957 722Q917 722 894 699 871 676 871 636L871 364Q871 323 894 300.5 917 278 957 278ZM133 240Q126 240 126 233L126 195Q126 188 133 188L201 188Q208 188 208 195L208 233Q208 240 201 240ZM355 240Q348 240 348 233L348 195Q348 188 355 188L423 188Q430 188 430 195L430 233Q430 240 423 240ZM577 240Q570 240 570 233L570 195Q570 188 577 188L645 188Q652 188 652 195L652 233Q652 240 645 240ZM867 188Q874 188 874 195L874 233Q874 240 867 240L799 240Q792 240 792 233L792 195Q792 188 799 188ZM819 636Q819 676 796.5 699 774 722 733 722L267 722Q227 722 204 699 181 676 181 636L181 364Q181 322 203.5 300 226 278 267 278L733 278Q774 278 796.5 300.5 819 323 819 364ZM611 520Q620 514 623 509 626 504 626 497 626 484 611 475L452 377Q439 369 430 369 410 369 410 399L410 601Q410 627 429 627 439 627 450 620ZM201 760Q208 760 208 767L208 805Q208 812 201 812L133 812Q126 812 126 805L126 767Q126 760 133 760ZM423 760Q430 760 430 767L430 805Q430 812 423 812L355 812Q348 812 348 805L348 767Q348 760 355 760ZM645 760Q652 760 652 767L652 805Q652 812 645 812L577 812Q570 812 570 805L570 767Q570 760 577 760ZM867 760Q874 760 874 767L874 805Q874 812 867 812L799 812Q792 812 792 805L792 767Q792 760 799 760Z",
  "geogebra-button": "M0 914Q0 955 22 977.5 44 1000 86 1000L914 1000Q955 1000 977.5 977.5 1000 955 1000 914L1000 86Q1000 45 977.5 22.5 955 0 914 0L86 0Q46 0 23 22.5 0 45 0 86ZM89 491Q89 456 114 431.5 139 407 173 407L174 407Q206 340 262 285 318 230 390 197 392 165 416.5 141.5 441 118 474 118 497 118 516 129.5 535 141 546 160L566 159Q638 159 701 181 764 203 809 245 819 242 830 242 865 242 889.5 266.5 914 291 914 326 914 345 906.5 361.5 899 378 885 389 889 409 889 437 889 493 871.5 547 854 601 821 649 833 667 833 691 833 725 808.5 750 784 775 749 775 726 775 707 764 653 801 589.5 821.5 526 842 458 842 442 842 412 840 401 858 382 868 363 878 342 878 308 878 283 853 258 828 258 794L258 788Q203 753 171.5 696.5 140 640 138 567 116 557 102.5 536.5 89 516 89 491ZM198 571Q201 623 223 664.5 245 706 284 733 309 710 342 710 373 710 396.5 730.5 420 751 425 781 436 782 458 782 514 782 568 765 622 748 669 716 665 705 665 691 665 656 690 631.5 715 607 749 607 763 607 774 611 829 529 829 437 829 419 828 410 794 409 770 384.5 746 360 746 326 746 303 759 282 724 252 674.5 235.5 625 219 566 219L556 219Q550 248 527 267 504 286 474 286 455 286 438.5 278 422 270 410 256 350 284 303 329 256 374 229 429 257 454 257 491 257 518 240.5 540.5 224 563 198 571Z",
  "headphone-button": "M0 914Q0 955 22 977.5 44 1000 86 1000L914 1000Q955 1000 977.5 977.5 1000 955 1000 914L1000 86Q1000 45 977.5 22.5 955 0 914 0L86 0Q46 0 23 22.5 0 45 0 86ZM124 603Q124 484 245 454 252 321 319.5 254 387 187 502 187 615 187 681.5 254 748 321 755 454 876 484 876 603 876 671 827.5 713 779 755 701 755L678 755 678 478Q678 257 502 257 322 257 322 478L322 755 299 755Q221 755 172.5 713 124 671 124 603ZM192 601Q192 670 265 687L265 516Q192 533 192 601ZM735 687Q808 670 808 601 808 533 735 516Z",
  "index-up-button": "M0 914Q0 955 23 977.5 46 1000 86 1000L914 1000Q955 1000 977.5 977.5 1000 955 1000 914L1000 86Q1000 45 977.5 22.5 955 0 914 0L86 0Q44 0 22 22.5 0 45 0 86ZM154 479Q181 444 221 444 250 444 279 463L318 489 318 214Q318 174 338 151.5 358 129 399 129 441 129 459 151 477 173 477 214L477 287 477 347Q491 340 513 340 557 340 578 377 599 360 626 360 658 360 676 376.5 694 393 697 412 703 406 715 402 727 398 742 398 779 398 798.5 419.5 818 441 818 475L818 569Q818 668 802.5 724 787 780 748 805.5 709 831 637 831L492 831Q457 831 419.5 812 382 793 331 752.5 280 712 174 621 134 587 134 539 134 505 154 479ZM203 513Q213 500 225 500 238 500 255 512L373 590 373 209Q373 190 379 182 385 174 399 174 413 174 419.5 182 426 190 426 209L426 543 486 543 486 410Q486 380 513 380 539 380 539 410L540 544 600 544 599 426Q599 414 605 407 611 400 622 400 634 400 640.5 407 647 414 647 427L647 544 707 544 707 475Q707 444 734 444 748 444 755 452.5 762 461 762 475L762 569Q762 648 752.5 690 743 732 723 747.5 703 763 667 763L492 763Q465 763 433 746 401 729 352 689 303 649 209 566 194 552 194 537 194 525 203 513Z",
  "interactives-maps-button": "M86 0Q44 0 22 22.5 0 45 0 86L0 914Q0 955 23 977.5 46 1000 86 1000L914 1000Q955 1000 977.5 977.5 1000 955 1000 914L1000 86Q1000 45 977.5 22.5 955 0 914 0ZM102 231Q102 173 137 138.5 172 104 232 104 284 104 317.5 132 351 160 358 208L513 207 513 387 632 386Q639 338 673 310.5 707 283 761 283 819 283 853.5 317.5 888 352 888 410 888 469 853.5 504.5 819 540 761 540 708 540 674 512 640 484 633 436L513 437 513 744 633 744Q641 697 674.5 670 708 643 761 643 819 643 853.5 677.5 888 712 888 770 888 829 853.5 864.5 819 900 761 900 707 900 673 871 639 842 632 793L461 794 461 257 357 257Q350 305 316.5 333 283 361 232 361 172 361 137 325.5 102 290 102 231Z",
  "link-button": "M0 86Q0 45 23 22.5 46 0 86 0L914 0Q955 0 977.5 22.5 1000 45 1000 86L1000 914Q1000 955 977.5 977.5 955 1000 914 1000L86 1000Q44 1000 22 977.5 0 955 0 914ZM433 452Q394 491 394 538 394 593 446 647 499 700 555 700 602 700 641 661L837 465Q877 425 877 378 877 321 824 270 771 217 716 217 669 217 629 257L607 279 647 319 669 298Q694 275 718 275 749 275 784 309 820 345 820 376 820 401 796 424L601 619Q577 643 552 643 522 643 486 607 451 572 451 541 451 516 474 493L496 471 455 430ZM181 537Q141 577 141 625 141 652 154.5 679.5 168 707 194 732 246 784 303 784 350 784 389 745L411 723 371 683 349 704Q323 728 299 728 269 728 234 693 199 657 199 625 199 600 222 577L417 383Q441 359 466 359 496 359 532 395 567 430 567 460 567 484 544 509L522 531 562 572 585 550Q624 511 624 463 624 408 571 355 518 302 462 302 416 302 377 341Z",
  "login-button": "M0 914Q0 955 22 977.5 44 1000 86 1000L914 1000Q955 1000 977.5 977.5 1000 955 1000 914L1000 86Q1000 45 977.5 22.5 955 0 914 0L86 0Q46 0 23 22.5 0 45 0 86ZM500 204L500 140 754 140Q795 140 817.5 162.5 840 185 840 226L840 774Q840 814 817.5 837 795 860 754 860L500 860 500 796 768 796 768 204ZM290 326L330 284 564 500 330 716 290 674 442 532 130 532 130 468 442 468Z",
  "pdf-button": "M914 0Q955 0 977.5 22.5 1000 45 1000 86L1000 914Q1000 955 977.5 977.5 955 1000 914 1000L86 1000Q44 1000 22 977.5 0 955 0 914L0 86Q0 45 23 22.5 46 0 86 0ZM853 280L655 100 323 100Q283 100 260 122.5 237 145 237 186L237 403 207 403Q167 403 144 425.5 121 448 121 489L121 681Q121 722 143 743.5 165 765 207 765L237 765 237 804Q237 845 259 867.5 281 890 323 890L767 890Q808 890 830.5 867 853 844 853 804ZM567 275Q567 315 590 338 613 361 653 361L785 361 785 827 305 827 305 765 643 765Q685 765 707 743.5 729 722 729 681L729 489Q729 448 706.5 425.5 684 403 643 403L305 403 305 163 567 163ZM785 298L630 298 630 163ZM337 540Q337 599 277 599L224 599 224 685 191 685 191 483 279 483Q337 483 337 540ZM516 583Q516 633 495.5 659 475 685 441 685L366 685 366 483 443 483Q475 483 495.5 508.5 516 534 516 583ZM668 483L668 513 580 513 580 563 659 563 659 594 580 594 580 685 548 685 548 483ZM224 513L224 568 279 568Q292 568 297.5 562 303 556 303 540 303 524 297.5 518.5 292 513 279 513ZM439 654Q457 654 469 637.5 481 621 481 583 481 546 468.5 529.5 456 513 439 513L399 513 399 654Z",
  "play-button": "M0 914Q0 955 22 977.5 44 1000 86 1000L914 1000Q955 1000 977.5 977.5 1000 955 1000 914L1000 86Q1000 45 977.5 22.5 955 0 914 0L86 0Q46 0 23 22.5 0 45 0 86ZM422 683Q406 693 391 693 363 693 363 654L363 347Q363 303 392 303 404 303 425 315L667 463Q681 472 685 479 689 486 689 497 689 508 685 515.5 681 523 667 532Z",
  "powerpoint-button": "M249 686L308 686 308 533 411 533Q458 533 484.5 504.5 511 476 511 428 511 379 484.5 351.5 458 324 411 324L249 324ZM308 476L308 378 395 378Q425 378 437 384 449 390 449 413L449 440Q449 465 437 470.5 425 476 395 476ZM914 0Q955 0 977.5 22.5 1000 45 1000 86L1000 914Q1000 955 977.5 977.5 955 1000 914 1000L86 1000Q44 1000 22 977.5 0 955 0 914L0 86Q0 45 23 22.5 46 0 86 0ZM852 303Q852 262 828.5 241 805 220 762 220L602 220 602 176Q602 116 557 116 543 116 530 120L189 218Q166 224 157.5 238 149 252 149 276L149 721Q149 745 160 757 171 769 192 775L411 836 530 870Q542 874 556 874 577 874 589.5 860.5 602 847 602 818L602 771 767 771Q806 771 829 748.5 852 726 852 690ZM602 324L732 324 732 387 602 387ZM782 527L602 527 602 464 782 464ZM732 667L602 667 602 604 732 604Z",
  "show-video-button": "M914 0Q955 0 977.5 22.5 1000 45 1000 86L1000 914Q1000 955 977.5 977.5 955 1000 914 1000L879 1000Q881 907 846 864.5 811 822 725 822L677 822Q590 822 555.5 864 521 906 519 1000L478 1000Q479 909 444 867 409 825 325 825L277 825Q191 825 157 866.5 123 908 121 1000L86 1000Q44 1000 22 977.5 0 955 0 914L0 86Q0 45 23 22.5 46 0 86 0ZM635 346Q646 339 650 332 654 325 654 315 654 307 650.5 300.5 647 294 635 287L430 160Q414 150 401 150 376 150 376 188L376 450Q376 467 382.5 476 389 485 401 485 413 485 426 476ZM302 790Q350 790 380.5 766.5 411 743 411 698 411 652 380.5 626.5 350 601 302 601 251 601 221 626 191 651 191 698 191 744 221 767 251 790 302 790ZM700 790Q748 790 778.5 766.5 809 743 809 698 809 652 778.5 626.5 748 601 700 601 648 601 618 626 588 651 588 698 588 744 618 767 648 790 700 790Z",
  "word-button": "M914 0Q955 0 977.5 22.5 1000 45 1000 86L1000 914Q1000 955 977.5 977.5 955 1000 914 1000L86 1000Q44 1000 22 977.5 0 955 0 914L0 86Q0 45 23 22.5 46 0 86 0ZM871 303Q871 262 847.5 241 824 220 781 220L602 220 602 175Q602 115 557 115 543 115 530 119L167 225Q144 231 135.5 245 127 259 127 283L127 716Q127 761 170 770L530 872Q542 875 554 875 602 875 602 819L602 771 786 771Q825 771 848 748.5 871 726 871 690ZM602 324L731 324 731 387 602 387ZM390 357L452 600 487 357 534 357 484 655 422 655 360 418 359 418 297 655 237 655 186 357 235 357 271 600 331 357ZM782 527L602 527 602 464 782 464ZM731 667L602 667 602 604 731 604Z"
};
// 0.x icons compatibility
icons["ask-your-manager"] = icons["support"];
icons["book-add"] = icons["book-plus"];
icons["book-delete"] = icons["book-minus"];
icons["cart"] = icons["shopping-cart"];
icons["checkbox-selected"] = icons["checkbox-checked"];
icons["checkbox-unchecked"] = icons["checkbox"];
icons["circle-check"] = icons["checkmark-circle"];
icons["circle-chevron-down"] = icons["chevron-down-circle"];
icons["circle-chevron-left"] = icons["chevron-left-circle"];
icons["circle-chevron-up"] = icons["chevron-right-circle"];
icons["circle-cross-fill"] = icons["multiply-circle-filled"];
icons["circle-cross-stroke"] = icons["multiply-circle"];
icons["circle-cross"] = icons["multiply-circle-filled"];
icons["circle-plus"] = icons["plus-circled"];
icons["circle-warning"] = icons["exclamation-circle"];
icons["drop-down"] = icons["caret-down"];
icons["drop-up-down"] = icons["caret-up-down"];
icons["external-link-down"] = icons["arrow-quad-down"];
icons["external-link-left"] = icons["arrow-quad-left"];
icons["external-link-right"] = icons["arrow-quad-right"];
icons["external-link-right-up"] = icons["arrow-quad-north-east"];
icons["folder"] = icons["open-file-folder"];
icons["menu-burger"] = icons["burger-menu"];
icons["question-mark"] = icons["question-mark-circle"];
icons["user"] = icons["user-avatar"];
icons["close"] = icons["multiply"];
icons["cross"] = icons["multiply"];
icons["exit"] = icons["logout"];
icons["enter"] = icons["login"];

const stylesCss$K = ":host{line-height:0;vertical-align:middle;width:var(--z-icon-width, 18px);height:var(--z-icon-height, 18px);margin-right:var(--z-icon-right-margin, 0);margin-left:var(--z-icon-left-margin, 0)}:host(:not([width])) svg{width:var(--z-icon-width, 18px)}:host(:not([height])) svg{height:var(--z-icon-height, 18px)}";

const ZIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** icon height (optional) */
    this.height = 18;
    /** icon width (optional) */
    this.width = 18;
  }
  selectPathOrPolygon(iconName) {
    if (iconName && iconName.startsWith('M')) {
      return h("path", { d: icons[this.name] });
    }
    else {
      return h("polygon", { points: icons[this.name] });
    }
  }
  render() {
    return (h("svg", { viewBox: "0 0 1000 1000", width: this.width, height: this.height, id: this.iconid }, this.selectPathOrPolygon(icons[this.name])));
  }
};
ZIcon.style = stylesCss$K;

const stylesCss$J = ":host>div{display:flex;flex-flow:row wrap;justify-content:flex-start;font-family:Verdana, Arial, Helvetica, sans-serif;font-size:12px}:host>div>div{width:300px;margin:5px}:host>div>div>label{margin:0 10px}";

const ZIconPackage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const iconsNames = Object.keys(icons);
    return (h("div", null, iconsNames.map((icon) => {
      return (h("div", null, h("z-icon", { name: icon }), h("label", null, icon)));
    })));
  }
};
ZIconPackage.style = stylesCss$J;

const stylesCss$I = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>div{background:var(--accent-lighter);padding:calc(var(--space-unit) * 2);border-radius:var(--border-radius);display:flex;width:inherit}:host>div>slot{color:var(--text-grey-800);font-size:14px}:host>div>z-icon{fill:var(--myz-blue);cursor:pointer;margin-left:calc(var(--space-unit) * 2)}";

const ZInfoBox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.infoBoxClose = createEvent(this, "infoBoxClose", 7);
    /** render close icon flag */
    this.isclosable = true;
  }
  emitInfoBoxClose() {
    this.infoBoxClose.emit({ boxid: this.boxid });
  }
  render() {
    return (h("div", { id: this.boxid }, h("slot", { name: "content" }), this.isclosable && h("z-icon", { name: "multiply", "data-action": "infoBoxClose", onClick: () => this.emitInfoBoxClose() })));
  }
};
ZInfoBox.style = stylesCss$I;

const stylesCss$H = ".sc-z-input-h{display:inline-block;width:inherit}input.sc-z-input::-ms-clear,input.sc-z-input::-ms-reveal{display:none}.sc-z-input-h input.sc-z-input::-ms-clear,.sc-z-input-h input.sc-z-input::-ms-reveal{display:none}input.sc-z-input,textarea.sc-z-input,.textareaWrapper.sc-z-input,ul[role=\"listbox\"].sc-z-input{background:var(--color-input-field01);border-radius:var(--border-radius-small);border:var(--border-size-small) solid var(--color-surface04);box-sizing:border-box;color:var(--color-text02);fill:var(--color-icon02);font-family:var(--font-family-sans);font-weight:var(--font-rg);font-size:var(--font-size-3);outline:none}input.sc-z-input:focus:focus-visible,li[role=\"option\"].sc-z-input:focus:focus-visible,.focus.sc-z-input{box-shadow:var(--shadow-focus-primary)}.filled.sc-z-input{border-color:var(--color-surface05)}.istyping.sc-z-input,.focus.istyping.sc-z-input,.input_selecting.sc-z-input{border-color:var(--color-primary01);color:var(--color-primary01)}.input_success.sc-z-input,.input_success.sc-z-input:hover,.input_success.hover.sc-z-input{background:var(--color-success-inverse);border-color:var(--color-success01);fill:var(--color-success01)}.input_error.sc-z-input,.input_error.sc-z-input:hover,.input_error.hover.sc-z-input{background:var(--color-error-inverse);border-color:var(--color-error01);fill:var(--color-error01)}.input_warning.sc-z-input,.input_warning.sc-z-input:hover,.input_warning.hover.sc-z-input{background:var(--color-warning-inverse);border-color:var(--color-warning01);fill:var(--color-warning01)}input[readonly].sc-z-input,.readonly.sc-z-input{border-color:var(--color-disabled01);fill:var(--color-disabled01);pointer-events:none}input.sc-z-input:disabled,.disabled.sc-z-input,.filled.sc-z-input:disabled{border-color:var(--color-disabled01);color:var(--color-disabled02);fill:var(--color-disabled01);pointer-events:none;box-shadow:none}input.sc-z-input::placeholder,textarea.sc-z-input::placeholder{color:var(--color-text05)}.sc-z-input::-webkit-input-placeholder,.sc-z-input::-webkit-textarea-placeholder{color:var(--color-text05)}.sc-z-input:-ms-input-placeholder,.sc-z-input:-ms-textarea-placeholder{color:var(--color-text05)}.sc-z-input::-moz-placeholder{color:var(--color-text05)}.sc-z-input:-moz-placeholder{color:var(--color-text05)}.textWrapper.sc-z-input>div.sc-z-input{fill:var(--color-icon02)}.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input{width:100%;height:calc(var(--space-unit) * 5.5);margin:0;padding:0 calc(var(--space-unit) * 4.5) 0 calc(var(--space-unit) * 1.5);box-sizing:border-box}.textWrapper.sc-z-input>div.sc-z-input>input.hasIcon.sc-z-input,.textWrapper.sc-z-input>div.sc-z-input>input.hasClearIcon.sc-z-input{padding-right:calc(var(--space-unit) * 4)}.textWrapper.sc-z-input>div.sc-z-input>input.hasIcon.hasClearIcon.sc-z-input{padding-right:calc(var(--space-unit) * 7)}.textWrapper.sc-z-input>div.sc-z-input{position:relative;z-index:1}.textWrapper.sc-z-input .iconsWrapper.sc-z-input{position:absolute;bottom:calc(var(--space-unit) * 1.5);right:calc(var(--space-unit) * 1.5);display:flex;z-index:2}.textWrapper.sc-z-input .iconsWrapper.sc-z-input>z-icon.sc-z-input{--z-icon-width:18px;--z-icon-height:18px;display:block;margin-left:calc(var(--space-unit) * 0.5)}.textWrapper.sc-z-input .iconsWrapper.sc-z-input>z-icon.resetIcon.sc-z-input,.textWrapper.sc-z-input .iconsWrapper.sc-z-input>z-icon.showHidePasswordIcon.sc-z-input{cursor:pointer}.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill,.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:hover,.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:focus,.textWrapper.sc-z-input>div.sc-z-input>input.sc-z-input:-webkit-autofill:active{-webkit-background-clip:text !important}.textareaWrapper.sc-z-input{padding:calc(var(--space-unit) * 1.5);scrollbar-color:var(--color-primary01) transparent}textarea.sc-z-input::-webkit-scrollbar{background:linear-gradient(\n    to right,\n    transparent 0 3px,\n    var(--gray200) 3px 7px,\n    transparent 7px 10px\n  );width:10px;border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-track{background-color:transparent}textarea.sc-z-input::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}textarea.sc-z-input::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}textarea.sc-z-input{min-height:132px;width:100%;margin:0;padding:0;border:none;resize:none}.radioWrapper.sc-z-input,.checkboxWrapper.sc-z-input{display:inline-flex;flex-direction:row;align-items:center;font-family:var(--font-family-sans);position:relative;color:var(--color-text01);fill:var(--color-primary01)}.radioWrapper.sc-z-input:hover,.checkboxWrapper.sc-z-input:hover{color:var(--color-hover-primary);fill:currentColor}.radioWrapper.sc-z-input>input.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input{position:absolute;opacity:0;z-index:-1;pointer-events:none}.radioWrapper.sc-z-input .radioLabel.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.sc-z-input{display:inline-flex;align-items:center;margin:0;line-height:1;color:inherit;font-family:inherit;font-weight:inherit;font-size:inherit;text-transform:inherit}.radioWrapper.sc-z-input input.sc-z-input:not(:disabled)+.radioLabel.sc-z-input,.checkboxWrapper.sc-z-input input.sc-z-input:not(:disabled)+.checkboxLabel.sc-z-input{cursor:pointer}.radioWrapper.sc-z-input .radioLabel.sc-z-input z-icon.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.sc-z-input z-icon.sc-z-input{fill:inherit;cursor:pointer}.radioWrapper.sc-z-input .radioLabel.after.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.after.sc-z-input{flex-direction:row}.radioWrapper.sc-z-input .radioLabel.before.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.before.sc-z-input{flex-direction:row-reverse}.radioWrapper.sc-z-input .radioLabel.after.sc-z-input>span.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.after.sc-z-input>span.sc-z-input{margin-left:var(--space-unit)}.radioWrapper.sc-z-input .radioLabel.before.sc-z-input>span.sc-z-input,.checkboxWrapper.sc-z-input .checkboxLabel.before.sc-z-input>span.sc-z-input{margin-right:var(--space-unit)}.radioWrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.radioLabel.sc-z-input>z-icon.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input:focus:focus-visible+.checkboxLabel.sc-z-input>z-icon.sc-z-input{box-shadow:var(--shadow-focus-primary);border-radius:var(--border-radius-small)}.radioWrapper.sc-z-input>input.sc-z-input:disabled+.radioLabel.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input:disabled+.checkboxLabel.sc-z-input{color:var(--color-disabled02)}.radioWrapper.sc-z-input>input.sc-z-input:disabled+.radioLabel.sc-z-input>z-icon.sc-z-input,.checkboxWrapper.sc-z-input>input.sc-z-input:disabled+.checkboxLabel.sc-z-input>z-icon.sc-z-input{fill:var(--color-disabled01);cursor:default}";

const ZInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputChange = createEvent(this, "inputChange", 7);
    this.startTyping = createEvent(this, "startTyping", 7);
    this.stopTyping = createEvent(this, "stopTyping", 7);
    this.inputCheck = createEvent(this, "inputCheck", 7);
    this.optionSelect = createEvent(this, "optionSelect", 7);
    /** the id of the input element */
    this.htmlid = randomId();
    /** the input is disabled */
    this.disabled = false;
    /** the input is readonly */
    this.readonly = false;
    /** the input is required (optional): available for text, password, number, email, textarea, checkbox */
    this.required = false;
    /** checked: available for checkbox, radio */
    this.checked = false;
    /** show input helper message (optional): available for text, password, number, email, textarea, select */
    this.hasmessage = true;
    /** the input label position: available for checkbox, radio */
    this.labelafter = true;
    /** timeout setting before trigger `inputChange` event (optional): available for text, textarea */
    this.typingtimeout = 300;
    /** multiple options can be selected (optional): available for select */
    this.multiple = false;
    /** render clear icon when typing (optional): available for text */
    this.hasclearicon = true;
    this.isTyping = false;
    this.textareaWrapperHover = "";
    this.textareaWrapperFocus = "";
    this.passwordHidden = true;
  }
  inputCheckListener(e) {
    const data = e.detail;
    switch (this.type) {
      case InputTypeEnum.radio:
        if (data.type === InputTypeEnum.radio &&
          data.name === this.name &&
          data.id !== this.htmlid) {
          this.checked = false;
        }
      default:
        return;
    }
  }
  /** get the input value */
  async getValue() {
    switch (this.type) {
      case InputTypeEnum.select:
        return this.selectElem.getValue();
      default:
        return this.value;
    }
  }
  /** set the input value */
  async setValue(value) {
    switch (this.type) {
      case InputTypeEnum.select:
        this.selectElem.setValue(value);
        break;
      default:
        if (typeof value === "string")
          this.value = value;
        break;
    }
  }
  /** get checked status */
  async isChecked() {
    switch (this.type) {
      case InputTypeEnum.checkbox:
      case InputTypeEnum.radio:
        return this.checked;
      default:
        return false;
    }
  }
  emitInputChange(value, keycode) {
    if (!this.isTyping) {
      this.emitStartTyping();
    }
    let validity = {};
    if (this.type === InputTypeEnum.textarea) {
      validity = this.getValidity("textarea");
    }
    else {
      validity = this.getValidity("input");
    }
    this.value = value;
    this.inputChange.emit({ value, keycode, validity });
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
    const attr = {
      id: this.htmlid,
      name: this.name,
      placeholder: this.placeholder,
      value: this.value,
      disabled: this.disabled,
      readonly: this.readonly,
      required: this.required,
      title: this.htmltitle,
      class: [
        `input_${this.status || "default"}`,
        this.isTyping && "istyping",
        !this.isTyping && this.value && "filled",
      ]
        .filter(Boolean)
        .join(" "),
      onInput: (e) => this.emitInputChange(e.target.value, e.keyCode),
    };
    if (this.autocomplete) {
      attr["autocomplete"] = this.autocomplete;
    }
    return attr;
  }
  renderInputText(type = InputTypeEnum.text) {
    const attr = this.getTextAttributes();
    if (this.icon || type === InputTypeEnum.password) {
      attr.class += " hasIcon";
    }
    if (this.hasclearicon) {
      attr.class += " hasClearIcon";
    }
    return (h("div", { class: "textWrapper" }, this.renderLabel(), h("div", null, h("input", Object.assign({ type: type === InputTypeEnum.password && !this.passwordHidden
        ? InputTypeEnum.text
        : type }, attr, { "aria-labelledby": `${this.htmlid}_label` })), this.renderIcons()), this.renderMessage()));
  }
  renderLabel() {
    if (!this.label)
      return;
    return (h("z-input-label", { value: this.label, disabled: this.disabled, "aria-label": this.label, id: `${this.htmlid}_label` }));
  }
  renderIcons() {
    return (h("span", { class: {
        iconsWrapper: true,
        disabled: this.disabled,
      } }, this.renderResetIcon(), this.renderIcon()));
  }
  renderIcon() {
    if (this.type === InputTypeEnum.password) {
      return this.renderShowHidePassword();
    }
    if (!this.icon)
      return;
    return h("z-icon", { class: "inputIcon", name: this.icon });
  }
  renderResetIcon() {
    if (!this.hasclearicon || !this.value || this.disabled || this.readonly)
      return;
    return (h("z-icon", { class: "resetIcon", name: "multiply", onClick: (e) => this.emitInputChange("", e.keyCode) }));
  }
  renderShowHidePassword() {
    return (h("z-icon", { class: "showHidePasswordIcon", name: this.passwordHidden ? "view-filled" : "view-off-filled", onClick: () => (this.passwordHidden = !this.passwordHidden) }));
  }
  renderMessage() {
    if (!this.hasmessage)
      return;
    return h("z-input-message", { message: this.message, status: this.status });
  }
  /* END text/password/email/number */
  /* START textarea */
  renderTextarea() {
    const attributes = this.getTextAttributes();
    return (h("div", { class: "textWrapper" }, this.renderLabel(), h("div", { class: [
        "textareaWrapper",
        attributes.class,
        attributes.disabled && "disabled",
        attributes.readonly && "readonly",
        this.isTyping && "istyping",
        this.textareaWrapperFocus,
        this.textareaWrapperHover,
      ]
        .filter(Boolean)
        .join(" ") }, h("textarea", Object.assign({}, attributes, { onFocus: () => (this.textareaWrapperFocus = "focus"), onBlur: () => (this.textareaWrapperFocus = ""), onMouseOver: () => (this.textareaWrapperHover = "hover"), onMouseOut: () => (this.textareaWrapperHover = ""), "aria-labelledby": `${this.htmlid}_label` }))), this.renderMessage()));
  }
  /* END textarea */
  handleCheck(ev) {
    this.checked = ev.target.checked;
    this.emitInputCheck(this.checked);
  }
  /* START checkbox */
  renderCheckbox() {
    return (h("div", { class: "checkboxWrapper" }, h("input", { id: this.htmlid, type: "checkbox", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, required: this.required, onChange: this.handleCheck.bind(this), value: this.value }), h("label", { htmlFor: this.htmlid, class: {
        checkboxLabel: true,
        after: this.labelafter,
        before: !this.labelafter,
      } }, h("z-icon", { name: this.checked ? "checkbox-checked" : "checkbox", "aria-hidden": true }), this.label && h("span", { innerHTML: this.label }))));
  }
  /* END checkbox */
  /* START radio */
  renderRadio() {
    return (h("div", { class: "radioWrapper" }, h("input", { id: this.htmlid, type: "radio", name: this.name, checked: this.checked, disabled: this.disabled, readonly: this.readonly, onChange: this.handleCheck.bind(this), value: this.value }), h("label", { htmlFor: this.htmlid, class: {
        radioLabel: true,
        after: this.labelafter,
        before: !this.labelafter,
      } }, h("z-icon", { name: this.checked ? "radio-button-checked" : "radio-button", "aria-hidden": true }), this.label && h("span", { innerHTML: this.label }))));
  }
  /* END radio */
  /* START select */
  renderSelect() {
    return (h("z-select", { htmlid: this.htmlid, items: this.items, name: this.name, label: this.label, disabled: this.disabled, readonly: this.readonly, placeholder: this.placeholder, htmltitle: this.htmltitle, status: this.status, hasmessage: this.hasmessage, message: this.message, autocomplete: this.autocomplete, multiple: this.multiple, ref: (el) => (this.selectElem = el) }));
  }
  /* END select */
  render() {
    switch (this.type) {
      case InputTypeEnum.text:
      case InputTypeEnum.password:
      case InputTypeEnum.number:
      case InputTypeEnum.email:
        return this.renderInputText(this.type);
      case InputTypeEnum.textarea:
        return this.renderTextarea();
      case InputTypeEnum.checkbox:
        return this.renderCheckbox();
      case InputTypeEnum.radio:
        return this.renderRadio();
      case InputTypeEnum.select:
        return this.renderSelect();
      default:
        return this.renderInputText();
    }
  }
  get hostElement() { return getElement(this); }
};
ZInput.style = stylesCss$H;

const stylesCss$G = "label{display:block;margin:var(--space-unit) 0;color:var(--color-text02);font-family:var(--font-family-sans);font-size:var(--font-size-1);font-weight:var(--font-sb);line-height:1.33;letter-spacing:0.32px;text-transform:uppercase;text-align:left}label.disabled{color:var(--color-disabled02)}";

const ZInputLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** the label is disabled */
    this.disabled = false;
  }
  render() {
    return h("label", { class: { disabled: this.disabled } }, this.value);
  }
};
ZInputLabel.style = stylesCss$G;

const stylesCss$F = ":host{display:flex;align-items:start;min-height:calc(var(--space-unit) * 2);margin-top:var(--space-unit);color:var(--color-text05);fill:currentColor;font-family:var(--font-family-sans);font-size:var(--font-size-2);letter-spacing:0.16px}:host([status='success']){color:var(--color-text-success)}:host([status='error']){color:var(--color-text-error)}:host([status='warning']){color:var(--color-warning02)}:host>z-icon{--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);margin:calc(var(--space-unit) / 3) var(--space-unit) 0 0}";

const ZInputMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.statusIcons = {
      success: "checkmark-circle",
      error: "multiply-circled",
      warning: "exclamation-circle"
    };
  }
  render() {
    return [
      this.statusIcons[this.status] && this.message &&
        h("z-icon", { name: this.statusIcons[this.status] }),
      h("span", { innerHTML: this.message })
    ];
  }
};
ZInputMessage.style = stylesCss$F;

const stylesCss$E = ":host{font-family:var(--dashboard-font);font-weight:inherit;font-size:inherit;line-height:inherit;outline:none}a{cursor:pointer;color:var(--myz-blue);fill:var(--myz-blue);display:inline-flex;align-items:center;text-decoration:none;padding:calc(var(--space-unit) * .5) 0;border-top:var(--border-size-medium) solid transparent;border-bottom:var(--border-size-medium) solid transparent}a:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark);text-decoration:none}a.disabled{cursor:default;pointer-events:none}a.disabled,a.disabled:active,a.disabled:visited,a.disabled:hover{color:var(--bg-neutral-200);fill:var(--bg-neutral-200);text-decoration:none}a.black,a.black:active,a.black:visited,a.black:hover{color:var(--bg-grey-900);fill:var(--bg-grey-900);text-decoration:none}a.white,a.white:active,a.white:visited,a.white:hover{color:var(--bg-white);fill:var(--bg-white);text-decoration:none}a.active,a.active:active,a.active:visited{color:var(--text-grey-800);fill:var(--text-grey-800);text-decoration:none;border-bottom:var(--border-size-medium) solid var(--myz-blue)}a.big{font-size:16px;font-weight:600}a>z-icon{margin-right:8px}";

const ZLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.zLinkClick = createEvent(this, "zLinkClick", 7);
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
    this.textcolor = "blue";
    /** big link version */
    this.big = false;
    this.emitZLinkClick = this.emitZLinkClick.bind(this);
    this.emitZLinkInteraction = this.emitZLinkInteraction.bind(this);
  }
  componentWillRender() {
    if (this.iswhite) {
      console.warn("z-link iswhite prop is deprecated and will be dropped in a next release, please use textcolor prop instead");
    }
  }
  emitZLinkClick(e, linkId) {
    this.emitZLinkInteraction(e, linkId);
  }
  emitZLinkInteraction(e, linkId) {
    this.zLinkClick.emit({ e, linkId });
  }
  render() {
    return (h("a", { id: this.htmlid, href: this.href ? this.href : null, class: `${this.isdisabled && "disabled"}
          ${this.isactive && "active"}
          ${this.textcolor}
          ${this.iswhite && "white"}
          ${this.big && "big"}`, target: this.target, role: this.href ? "link" : "button", tabindex: this.htmltabindex, onClick: (e) => this.emitZLinkClick(e, this.htmlid) }, this.icon && (h("z-icon", { name: this.icon, width: this.big ? 18 : 12, height: this.big ? 18 : 12 })), h("slot", null)));
  }
};
ZLink.style = stylesCss$E;

const stylesCss$D = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg);display:flex;flex-direction:column}";

const ZList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = ListSize.medium;
  }
  setChildrenSizeType() {
    const children = this.host.children;
    for (let i = 0; i < children.length - 1; i++) {
      children[i].setAttribute("size", this.size);
    }
  }
  componentDidLoad() {
    this.setChildrenSizeType();
  }
  render() {
    return (h(Host, { role: "list" }, h("slot", null)));
  }
  get host() { return getElement(this); }
};
ZList.style = stylesCss$D;

const stylesCss$C = ":host{outline:none}:host>.container{--background-color-list-element:var(--bg-white);--background-hover-color-list-element:var(--gray50);--background-active-color-list-element:var(--gray50);font-family:var(--font-family-sans);font-weight:var(--font-rg);outline:none;display:flex;flex-direction:column;justify-content:center;box-sizing:border-box}:host([size=\"small\"])>.container{padding:calc(var(--space-unit) / 2) 0;min-height:calc(var(--space-unit) * 4)}:host([size=\"medium\"])>.container{padding:var(--space-unit) 0;min-height:calc(var(--space-unit) * 5)}:host([size=\"large\"])>.container{padding:calc(var(--space-unit) * 2) 0;min-height:calc(var(--space-unit) * 7)}:host([size=\"x-large\"])>.container{padding:calc(var(--space-unit) * 3) 0;min-height:calc(var(--space-unit) * 9)}:host([expandable])>.container,:host([clickable])>.container{cursor:pointer}:host([expandable]:hover)>.container,:host([clickable]:hover)>.container{background-color:var(--background-hover-color-list-element)}:host([expandable]:focus:focus-visible)>.container,:host([clickable]:focus:focus-visible)>.container{box-shadow:var(--shadow-focus-primary)}:host([expandable]:active)>.container,:host([clickable]:active)>.container{background-color:var(--background-active-color-list-element)}:host([align-button=\"left\"][expandable])>.container>.z-list-element-container{display:flex}:host([align-button=\"right\"][expandable])>.container>.z-list-element-container{display:flex;flex-direction:row-reverse;justify-content:space-between}:host([align-button=\"left\"][expandable])>.container>.z-list-element-container>z-icon{margin-right:var(--space-unit)}:host([align-button=\"right\"][expandable])>.container>.z-list-element-container>z-icon{margin-left:var(--space-unit)}:host>.container>.z-list-element-inner-container{display:none}:host>.container>.z-list-element-inner-container.expanded{display:block}";

const ZListElement = class {
  /**
   * Constructor.
   */
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * [optional] Align expandable button left or right.
     */
    this.alignButton = ExpandableListButtonAlign.left;
    /**
     * [optional] Sets element clickable.
     */
    this.clickable = false;
    /**
     * [optional] Sets the divider color.
     */
    this.dividerColor = "gray200";
    /**
     * [optional] Sets the position where to insert the divider.
     */
    this.dividerType = ListDividerType.none;
    /**
     * [optional] Sets the divider size.
     */
    this.dividerSize = DividerSize.small;
    /**
     * [optional] Sets element as expandable.
     */
    this.expandable = false;
    /**
     * [optional] Sets expandable style to element.
     */
    this.expandableStyle = ExpandableListStyle.accordion;
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = ListSize.medium;
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
  /**
   * Handler for click on element. If element is expandable, change state.
   * @returns void
   */
  handleClick() {
    if (!this.expandable) {
      return;
    }
    this.showInnerContent = !this.showInnerContent;
  }
  handleKeyDown(event) {
    const expandByKey = event.code === "Enter" || event.code === "Space";
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
    return (h("z-icon", { name: this.showInnerContent
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
    return (h("div", { class: {
        "z-list-element-inner-container": true,
        expanded: this.showInnerContent,
      } }, h("slot", { name: "inner-content" })));
  }
  render() {
    return (h(Host, { role: "listitem", "aria-expanded": this.expandable ? this.showInnerContent : null, onClick: this.handleClick, onKeyDown: this.handleKeyDown, tabIndex: "0" }, h("div", { class: "container" }, h("div", { class: "z-list-element-container" }, this.renderExpandableButton(), h("slot", null)), this.renderExpandedContent()), this.dividerType === ListDividerType.element && (h("z-divider", { color: this.dividerColor, size: this.dividerSize }))));
  }
};
ZListElement.style = stylesCss$C;

const stylesCss$B = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host>.z-list-group-header-container{color:var(--gray700);font-size:var(--font-size-2);font-weight:var(--font-sb) !important;line-height:1.4;letter-spacing:0.16px}:host>.z-list-group-header-container.has-header{padding-top:var(--space-unit);padding-bottom:var(--space-unit)}:host>.z-list-group-header-container.has-header>z-divider{margin-top:var(--space-unit)}";

const ZListGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * [optional] Sets size of inside elements.
     */
    this.size = ListSize.medium;
    /**
     * [optional] Sets the position where to insert the divider.
     */
    this.dividerType = ListDividerType.none;
    /**
     * [optional] Sets the divider size.
     */
    this.dividerSize = DividerSize.small;
    /**
     * [optional] Sets the divider color.
     */
    this.dividerColor = "gray200";
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
    }
  }
  componentWillLoad() {
    this.hasHeader = !!this.host.querySelector('[slot="header-title"]');
  }
  render() {
    return (h(Host, { role: "group" }, h("div", { class: {
        "z-list-group-header-container": true,
        "has-header": this.hasHeader,
      } }, h("slot", { name: "header-title" }), this.dividerType === ListDividerType.header && (h("z-divider", { color: this.dividerColor, size: this.dividerSize }))), h("slot", null)));
  }
  get host() { return getElement(this); }
};
ZListGroup.style = stylesCss$B;

const stylesCss$A = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host>div{display:flex;flex-direction:row;justify-content:flex-start}polygon{fill:var(--myz-red)}path{fill:var(--bg-white)}";

const ZLogo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** image width */
    this.width = 163;
    /** image height */
    this.height = 42;
  }
  renderSvg() {
    return (h("svg", { width: `${this.width}px`, height: `${this.height}px`, viewBox: "0 0 163 42" }, h("title", null, this.imagealt), h("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, h("g", { transform: "translate(-663.000000, -534.000000)" }, h("g", { transform: "translate(371.000000, 369.000000)" }, h("g", { transform: "translate(285.000000, 2.000000)" }, h("g", { transform: "translate(0.000000, 156.000000)" }, h("g", null, h("g", { transform: "translate(7.636364, 7.636364)" }, h("polygon", { points: "1.70530257e-13 40.7272727 161.884545 40.7272727 161.884545 0 1.70530257e-13 0" }), h("path", { d: "M148.501818,32.6807001 L154.248342,32.6807001 L154.248342,8.04537315 L148.501818,8.04537315 L148.501818,32.6807001 Z M134.349311,32.6807001 L146.667574,32.6807001 L146.667574,28.3207306 L140.436476,28.3207306 L140.436476,8.04537315 L134.349311,8.04537315 L134.349311,32.6807001 Z M120.196443,32.6807001 L132.513506,32.6807001 L132.513506,28.3207306 L126.283608,28.3207306 L126.283608,8.04537315 L120.196443,8.04537315 L120.196443,32.6807001 Z M105.225555,8.04537315 L105.225555,32.6807001 L118.363037,32.6807001 L118.363037,28.3195312 L111.381089,28.3195312 L111.381089,22.3858946 L117.967221,22.3858946 L117.967221,17.9899418 L111.381089,17.9899418 L111.381089,12.4077415 L118.363037,12.4077415 L118.363037,8.04537315 L105.225555,8.04537315 Z M86.9693975,32.6807001 L93.0613603,32.6807001 L93.0613603,22.3858946 L97.3013857,22.3858946 L97.3013857,32.6807001 L103.392149,32.6807001 L103.392149,8.04537315 L97.3013857,8.04537315 L97.3013857,17.9911413 L93.0613603,17.9911413 L93.0613603,8.04537315 L86.9693975,8.04537315 L86.9693975,32.6807001 Z M61.1321098,32.6807001 L66.8810325,32.6807001 L66.8810325,8.04537315 L61.1321098,8.04537315 L61.1321098,32.6807001 Z M33.8777427,23.237498 L32.2524996,12.5636689 L30.5936721,23.237498 L33.8777427,23.237498 Z M41.6777101,32.6807001 L35.8088433,32.6807001 L34.9644366,27.063716 L30.3609805,27.063716 L29.4829894,32.6807001 L23.6129231,32.6807001 L28.639782,8.04537315 L36.6520506,8.04537315 L41.6777101,32.6807001 Z M54.1207152,24.0279298 L48.8707602,8.04537315 L42.8759521,8.04537315 L42.8759521,32.6807001 L47.984373,32.6807001 L47.984373,16.6297753 L53.1971453,32.6807001 L59.2999032,32.6807001 L59.2999032,8.04537315 L54.1207152,8.04537315 L54.1207152,24.0279298 Z M68.7132396,20.3636364 C68.7132396,21.9672895 68.7132396,23.411417 68.8463776,24.8975249 C68.9795156,26.3908294 69.2481905,27.8013725 69.7951358,29.0188055 C70.9058185,31.4920537 73.1391784,33.0909091 77.4511703,33.0909091 C82.4144588,33.0909091 85.1371908,30.8479537 85.1371908,24.1958516 L85.1371908,23.9043874 L79.5058134,23.9043874 L79.4962178,24.1850567 C79.4782262,24.6636338 79.472229,25.2117785 79.4350463,25.7635216 C79.3990631,26.3092674 79.3330938,26.8466171 79.2023547,27.3191971 C78.939677,28.2523625 78.4503049,28.8628781 77.4511703,28.8628781 C74.9275455,28.8628781 74.4909489,26.7638557 74.4909489,20.3636364 C74.4909489,13.963417 74.9275455,11.8643946 77.4511703,11.8643946 C78.6578083,11.8643946 79.257529,12.7291918 79.257529,16.0240574 L79.257529,16.3179205 L84.855322,16.3179205 L84.866117,16.0360518 C85.0748198,10.6817454 82.8774432,7.63636364 77.4511703,7.63636364 C73.1403779,7.63636364 70.9082174,9.21602796 69.7951358,11.6832789 C69.2481905,12.8959142 68.9795156,14.3040584 68.8463776,15.8009613 C68.7132396,17.2906675 68.7132396,18.7443905 68.7132396,20.3636364 L68.7132396,20.3636364 Z M22.2095767,8.0465726 L22.2095767,12.930698 L13.748717,28.3207306 L22.41708,28.3207306 L22.41708,32.6807001 L7.63636364,32.6807001 L7.63636364,27.8673418 L16.0984227,12.408941 L8.70746481,12.408941 L8.70746481,8.0465726 L22.2095767,8.0465726 Z" }))))))))));
  }
  render() {
    return (h("div", null, this.link && (h("a", { style: { width: `${this.width}px`, height: `${this.height}px` }, href: this.link, target: this.targetblank ? "_blank" : undefined }, this.renderSvg())), !this.link && this.renderSvg()));
  }
};
ZLogo.style = stylesCss$A;

const stylesCss$z = ":host,::slotted(*),*{box-sizing:border-box}:host{display:inline-flex;flex-direction:column;position:relative}::slotted(a){color:var(--color-text01);text-decoration:none}::slotted(*){font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host([active]) .label-content,:host([open]) .label-content,.label:hover .label-content{border-color:var(--color-secondary01)}.label{margin:0;padding:0;color:inherit;background:transparent;border:0;border-radius:0;outline:none;cursor:pointer;text-align:left}.label .label-content{display:flex;align-items:center;padding:var(--space-unit) calc(var(--space-unit) / 2) var(--space-unit);border-bottom:var(--border-size-large) solid var(--color-surface05)}.label:focus:focus-visible{box-shadow:var(--shadow-focus-primary);z-index:1}.label ::slotted(*){width:100%;margin:0;appearance:none;font-size:var(--font-size-5);line-height:1.2}.label z-icon{margin-left:calc(var(--space-unit) * 4);fill:currentColor}.content{padding:var(--space-unit) 0;background:var(--color-surface01)}.content[hidden]{display:none}:host([floating]) .content{width:375px;max-width:100vw;padding:var(--space-unit) var(--space-unit) calc(var(--space-unit) * 2)}:host(:not([floating])) .content{width:100%}:host([floating]) .content{position:absolute;top:100%;left:0;box-shadow:var(--shadow-2);min-width:100%}.header{display:flex;align-items:center;padding:var(--space-unit) 0 calc(var(--space-unit) * 2)}.header ::slotted(img[slot='header']){width:calc(var(--space-unit) * 11.25);object-fit:contain;height:auto}.header ::slotted([slot='header']:not(:first-child)){margin:auto 0;margin-left:calc(var(--space-unit) / 2 * 3);font-weight:var(--font-sb);font-size:var(--font-size-3);line-height:1.5}.items{display:flex;flex-direction:column;align-items:flex-start;background:inherit}.items>::slotted([slot='item']){display:inline-flex;width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25;outline:none}.items>::slotted([slot='item']:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}.items>::slotted([slot='item']:not(z-menu-section)){padding:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2);border-bottom:var(--border-size-small) solid var(--color-surface05)}.items>::slotted([slot='item']:hover),.items>::slotted([slot='item']:active){border-color:var(--color-secondary01)}";

const ZMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.opened = createEvent(this, "opened", 7);
    this.closed = createEvent(this, "closed", 7);
    /**
     * Flag to set the display mode of the list.
     * If true, the list will be absolutely positioned under the menu label,
     * stacked beneath it otherwise.
     * @default false
     */
    this.floating = false;
    /**
     * The opening state of the menu.
     * @default false
     */
    this.open = false;
  }
  toggle() {
    if (!this.hasContent) {
      return;
    }
    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
  }
  /** Close the floating list when a click is performed outside of this Element. */
  handleClick(ev) {
    if (!this.floating ||
      !this.open ||
      this.hostElement.contains(ev.target)) {
      return;
    }
    this.reflow();
    this.open = false;
    this.closed.emit();
  }
  onOpenChanged() {
    if (this.open) {
      this.reflow(true);
    }
    else {
      cancelAnimationFrame(this.raf);
    }
  }
  /**
   * Correctly set position of the floating menu in order to prevent overflow.
   * @param live Should run the method on every refresh frame.
   */
  reflow(live = false) {
    if (this.content) {
      const { style } = this.content;
      const { left } = this.hostElement.getBoundingClientRect();
      const widthPx = getComputedStyle(this.content).width;
      const width = widthPx ? parseFloat(widthPx.replace('px', '')) : 375;
      const safeScrollbarSpace = 30;
      style.left = `${Math.min(window.innerWidth - left - width - safeScrollbarSpace, 0)}px`;
    }
    if (live) {
      this.raf = requestAnimationFrame(this.reflow.bind(this, live));
    }
  }
  /**
   * Check if some content slot is set.
   */
  checkContent() {
    this.hasHeader = !!this.hostElement.querySelectorAll('[slot="header"]').length;
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length || this.hasHeader;
  }
  componentWillLoad() {
    this.checkContent();
  }
  render() {
    return h(Host, { role: "menu" }, h("button", { class: "label", "aria-pressed": this.open ? 'true' : 'false', onClick: this.toggle.bind(this) }, h("div", { class: "label-content" }, h("slot", null), this.hasContent && h("z-icon", { name: this.open ? 'chevron-up' : 'chevron-down' }))), h("div", { class: "content", ref: (el) => { this.content = el; }, hidden: !this.open }, this.hasHeader && h("header", { class: "header" }, h("slot", { name: "header", onSlotchange: this.checkContent.bind(this) })), h("div", { class: "items" }, h("slot", { name: "item", onSlotchange: this.checkContent.bind(this) }))));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "open": ["onOpenChanged"]
  }; }
};
ZMenu.style = stylesCss$z;

const stylesCss$y = ":host{font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:12px;height:32px;width:inherit;letter-spacing:0.17px}a,a:visited,a:active{color:inherit;text-decoration:none}:host>a{display:block;background:var(--bg-grey-050);color:var(--text-grey-800);border-radius:var(--border-radius);border:var(--border-size-small) solid transparent;outline:none}:host>a::-moz-focus-inner{border:0}:host>a:hover,:host>a.menu-opened:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}:host>a:focus{color:var(--myz-blue);fill:var(--myz-blue);border:var(--border-size-small) solid var(--myz-blue);box-shadow:0px 0px 2px 2px var(--myz-blue-light)}:host>a:active{color:var(--myz-blue-light);fill:var(--myz-blue-light);border:var(--border-size-small) solid var(--myz-blue-light);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}div.container{display:flex;align-items:center;justify-content:space-between;height:32px;position:relative;padding:0 var(--basex1)}div.container>span.user-wrapper{display:flex}div.container>span.user-wrapper>span.user{padding:0 var(--basex1);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;cursor:pointer;width:30px}div.container>span.arrow{display:flex;justify-content:center;align-items:center}div.container>span.arrow>z-icon{transform:rotate(360deg);transition:all 200ms linear}ul{list-style:none;padding:0 calc(var(--space-unit) * 2);margin:0px}li{height:var(--basex3);display:flex;align-items:center;padding:calc(var(--space-unit) / 4) 0;width:max-content}.menu-opened{padding-bottom:calc(var(--space-unit) * 2);width:auto !important;min-width:147px;position:inherit}.menu-opened a,.menu-opened a:active,.menu-opened a:visited{color:var(--myz-blue);fill:var(--myz-blue)}.menu-opened a:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}.menu-opened>div.container{margin-bottom:var(--basex1)}.menu-opened>div.container>span.user-wrapper>span.user{width:auto}.menu-opened>div.container>span.arrow>z-icon{transform:rotate(180deg);transition:all 200ms linear}@media only screen and (min-width: 1152px){:host>a{width:147px;padding:0 calc(var(--space-unit) / 4)}:host>a.menu-opened{width:147px;padding-bottom:calc(var(--space-unit) * 2)}div.container>span.user-wrapper>span.user{width:80px}}";

const ZMenuDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ismenuopen = false;
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }
  componentWillRender() {
    this.linkarray =
      typeof this.menucontent === "string"
        ? JSON.parse(this.menucontent)
        : this.menucontent;
  }
  renderMenuOpen() {
    if (this.ismenuopen) {
      return (h("ul", null, this.linkarray.map(bean => (h("li", null, h("z-link", { htmlid: bean.id, href: bean.link, icon: bean.icon }, bean.label))))));
    }
  }
  renderButtonMenu() {
    return (h("span", { class: "arrow" }, h("z-icon", { name: "caret-down", width: 14, height: 14 })));
  }
  retriveMenuClass() {
    if (this.ismenuopen)
      return "menu-opened";
  }
  handleToggle() {
    this.ismenuopen = !this.ismenuopen;
  }
  handleFocus(e) {
    if (e instanceof KeyboardEvent && e.keyCode !== keybordKeyCodeEnum.TAB)
      return;
    const tree = getElementTree(getClickedElement());
    const menuParent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-menu-dropdown");
    if (!menuParent) {
      document.removeEventListener("click", this.handleFocus);
      document.removeEventListener("keyup", this.handleFocus);
      this.ismenuopen = false;
    }
  }
  render() {
    return (h("a", { class: this.retriveMenuClass(), role: "button", tabindex: "0", onFocus: () => {
        document.addEventListener("click", this.handleFocus);
        document.addEventListener("keyup", this.handleFocus);
      }, onKeyUp: (e) => handleKeyboardSubmit(e, this.handleToggle) }, h("div", { class: "container", onClick: () => this.handleToggle() }, h("span", { class: "user-wrapper" }, h("z-icon", { name: "user-avatar", width: 14, height: 14 }), h("span", { class: "user" }, this.nomeutente)), this.renderButtonMenu()), this.renderMenuOpen()));
  }
};
ZMenuDropdown.style = stylesCss$y;

const stylesCss$x = ":host{display:inline-flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:0;font-family:var(--font-family-sans)}:host,::slotted(*),*{box-sizing:border-box}::slotted(a){text-decoration:none}::slotted(*){font-family:var(--font-family-sans);font-weight:var(--font-rg);color:var(--color-text01)}:host([active]) .label,:host([open]) .label,.label:hover{border-color:var(--color-secondary01)}.label{display:flex;align-items:center;width:100%;margin:0;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) / 2);text-align:left;background:transparent;border-radius:0;border:0;border-bottom:var(--border-size-small) solid var(--color-surface05);cursor:pointer}.label ::slotted(*){width:100%;margin:0;font-size:var(--font-size-3);line-height:1.25}.label:focus:focus-visible{outline:none;box-shadow:var(--shadow-focus-primary)}.label z-icon{margin-left:calc(var(--space-unit) * 4);fill:currentColor}.items{display:flex;flex-direction:column;width:100%;padding:calc(var(--space-unit) / 2) 0 calc(var(--space-unit) / 2 * 3)}.items>::slotted([slot='item']){display:inline-flex;margin:0;padding:calc(var(--space-unit) / 2) calc(var(--space-unit) / 2);font-size:var(--font-size-2);line-height:1.4;outline:none}.items>::slotted([slot='item']:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}.items>::slotted([slot='item']:hover){color:var(--color-secondary01)}";

const ZMenuSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.opened = createEvent(this, "opened", 7);
    this.closed = createEvent(this, "closed", 7);
  }
  toggle() {
    if (!this.hasContent) {
      return;
    }
    this.open = !this.open;
    this.open ? this.opened.emit() : this.closed.emit();
  }
  /** Close the list when a click is performed outside of this Element. */
  handleClick(ev) {
    if (!this.open || this.hostElement.contains(ev.target)) {
      return;
    }
    this.open = false;
    this.closed.emit();
  }
  /**
   * Check if some content slot is set.
   */
  checkContent() {
    this.hasContent = !!this.hostElement.querySelectorAll('[slot="item"]').length;
  }
  componentWillLoad() {
    this.checkContent();
  }
  render() {
    return h(Host, { role: "menu", open: this.open }, h("button", { class: "label", "aria-pressed": this.open ? 'true' : 'false', onClick: this.toggle.bind(this) }, h("slot", null), this.hasContent && h("z-icon", { name: this.open ? 'chevron-up' : 'chevron-down' })), this.open && h("div", { class: "items" }, h("slot", { name: "item", onSlotchange: this.checkContent.bind(this) })));
  }
  get hostElement() { return getElement(this); }
};
ZMenuSection.style = stylesCss$x;

const stylesCss$w = "div{background-color:var(--color-surface01);display:flex;flex-direction:column;width:auto;box-sizing:border-box;width:256px;height:522px;border:var(--border-size-medium) solid var(--color-surface03);border-radius:var(--border-radius)}div.real,div.trial{border-color:var(--accent)}div.faded{border:var(--border-size-medium) solid var(--color-surface02)}div.highlighted{box-shadow:var(--shadow-4);outline:none}div.pressed{box-shadow:var(--shadow-8);outline:none}div:focus{box-shadow:var(--shadow-focus-primary);outline:none}";

const ZMyzCardComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** pressed status */
    this.ispressed = false;
    /** highlighted status */
    this.ishighlighted = false;
  }
  retrieveClass() {
    let elemClasses = "";
    if (this.cardtype === LicenseTypeEnum.real)
      elemClasses += "real";
    else if (this.cardtype === LicenseTypeEnum.trial)
      elemClasses += "trial";
    if (this.faded) {
      elemClasses += " faded";
    }
    else if (this.ispressed) {
      elemClasses += " pressed";
    }
    else if (this.ishighlighted) {
      elemClasses += " highlighted";
    }
    return elemClasses;
  }
  render() {
    return (h("div", { class: this.retrieveClass(), tabindex: "0" }, h("slot", null)));
  }
};
ZMyzCardComponent.style = stylesCss$w;

const stylesCss$v = ":host{position:absolute;font-family:var(--font-family-sans);font-weight:var(--font-rg);width:100%;top:0px;left:0px;z-index:2}:host>z-alert{height:calc(var(--space-unit) * 6)}.relativeContainer{position:relative;display:grid;grid-template-columns:18px auto 46px;grid-template-rows:1fr;grid-column-gap:var(--space-unit);align-items:center;padding:0;outline:none}.relativeContainer::-moz-focus-inner{border:0}.alert-external-wrapper.removeAlert{border:var(--border-size-medium) solid var(--color-surface02);border-top:none}:host div.addAlert{background:var(--color-success-inverse)}:host div.removeAlert{background:var(--color-warning-inverse)}:host div>.contentText{color:var(--color-surface05);font-size:14px;letter-spacing:0.16px;line-height:20px}:host div>.contentAction{color:var(--color-primary01);font-size:12px;font-weight:var(--font-sb);height:20px;letter-spacing:0.32px;line-height:20px;cursor:pointer}:host div>z-icon{justify-self:center}";

const ZMyzCardAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.undoAction = createEvent(this, "undoAction", 7);
  }
  emitUndoAction() {
    this.undoAction.emit({ actionType: this.type });
  }
  handleSpaceKeyPress(e) {
    if (e.keyCode == 32 || e.keyCode == 13) {
      e.preventDefault();
      this.emitUndoAction();
    }
  }
  handleActionButtonClick(e) {
    e.preventDefault();
    this.emitUndoAction();
  }
  retrieveClass() {
    let className = "";
    switch (this.type) {
      case "add":
        className = "addAlert";
        break;
      case "remove":
        className = "removeAlert";
        break;
      default:
        className = "";
        break;
    }
    return className;
  }
  getAlertType() {
    switch (this.type) {
      case "add":
        return AlertTypesEnum.success;
      case "remove":
        return AlertTypesEnum.warning;
      default:
        return null;
    }
  }
  render() {
    return (h("div", { class: "alert-external-wrapper " + this.retrieveClass() }, h("z-alert", { type: this.getAlertType() }, h("div", { class: "relativeContainer" }, h("z-icon", { name: this.iconname, width: 18, height: 18, class: this.retrieveClass() }), h("span", { class: "contentText" }, this.contenttext), this.actiontext && !!this.actiontext.trim().length && (h("span", { role: "button", tabindex: "0", class: "contentAction", onClick: (e) => {
        this.handleActionButtonClick(e);
      }, onKeyPress: (e) => {
        this.handleSpaceKeyPress(e);
      } }, this.actiontext))))));
  }
};
ZMyzCardAlert.style = stylesCss$v;

const stylesCss$u = ":host{height:340px;width:auto}:host>div{height:340px;width:auto;display:flex;align-items:center;justify-content:center;position:relative}";

const ZMyzCardBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("slot", { name: "alert" }), h("slot", { name: "cover" })));
  }
};
ZMyzCardBody.style = stylesCss$u;

const stylesCss$t = "img{display:block;margin:auto auto;height:340px;max-width:100%;object-fit:cover}img.faded{opacity:0.3}";

const ZMyzCardCover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  hadleOnImageError() {
    this.img = this.defaultimg;
  }
  render() {
    return (h("img", { class: this.faded && "faded", onError: this.hadleOnImageError.bind(this), alt: this.titolo, src: this.img }));
  }
};
ZMyzCardCover.style = stylesCss$t;

const stylesCss$s = "footer{font-family:var(--font-family-sans);font-weight:var(--font-rg);color:var(--color-surface05);background-color:var(--color-surface01);margin:0px;padding:0px;position:relative;z-index:5;height:calc(var(--space-unit) * 6);width:auto;top:0px;transition:height 500ms ease-in-out, top 500ms ease-in-out;border-radius:0px 0px var(--border-radius) var(--border-radius);border-top:var(--border-size-medium) solid var(--color-surface03)}footer.real,footer.trial{border-top:var(--border-size-medium) solid var(--accent)}footer .bold{font-family:var(--font-family-sans);font-weight:var(--font-sb)}footer>h2{font-family:var(--font-family-sans);font-weight:var(--font-rg);font-size:16px;line-height:22px;height:40px;margin:0px;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 2)\n    var(--space-unit) calc(var(--space-unit) * 2);overflow:hidden;background-color:var(--color-surface01);transition:all 200ms linear}footer.isopen>h2{font-size:14px;font-weight:var(--font-sb);transition:all 200ms linear;background-color:var(--bg-neutral-200)}footer.isopen.real>h2,footer.isopen.trial>h2{background-color:var(--accent)}footer .visible{display:block}footer .hidden{display:none}footer>div.content{height:60px;overflow:hidden}footer>div.content>div:not(.slot-handler){padding:var(--space-unit) calc(var(--space-unit) * 2)}footer>div.content>div>p{font-size:14px;height:20px;line-height:20px;margin:0px;padding:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}footer>div.content>div>p.year_isbn{padding-top:var(--space-unit);display:flex;flex-direction:row;justify-content:space-between}footer>div.content>div>p.year_isbn>span.isbn{text-overflow:ellipsis;overflow:hidden}footer.isopen>div.content>div:not(.slot-handler){height:68px}footer.isopen>div.content>div>p.authors{height:40px;white-space:initial;text-overflow:initial}footer.isopen>div.content>div>p.year_isbn{flex-direction:column;height:50px;padding-left:0px}footer.isopen>div.content>div>p.year_isbn>span.isbn{display:inline-grid;padding-left:0px}footer.isopen{height:295px;top:-169px;transition:height 500ms ease-in-out, top 500ms ease-in-out}footer.isopen>div.content{height:230px;transition:height 500ms ease-in-out, top 500ms ease-in-out}.toggle{position:absolute;top:-24px;left:16px;z-index:10}.faded{opacity:0.3;pointer-events:none}";

const ZMyzCardFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** footer opened by default (optional) */
    this.opened = false;
    this.isOpen = false;
    this.allowTooltipAuthors = false;
  }
  handleToggle() {
    this.isOpen = !this.isOpen;
  }
  getTitleAuthors() {
    return this.allowTooltipAuthors ? this.autori : "";
  }
  componentWillLoad() {
    if (this.opened)
      this.isOpen = true;
  }
  elementsEllipsis() {
    this.allowTooltipAuthors = this.elementAuthorsHasEllipsis() ? true : false;
  }
  elementAuthorsHasEllipsis() {
    return this.ellipsisAuthors.offsetWidth < this.ellipsisAuthors.scrollWidth;
  }
  retrieveClass() {
    return {
      isopen: this.isOpen,
      real: this.cardtype === LicenseTypeEnum.real,
      trial: this.cardtype === LicenseTypeEnum.trial
    };
  }
  footerTransitionHandler(e) {
    if (["visibility", "height"].includes(e.propertyName)) {
      this.elementsEllipsis();
    }
  }
  render() {
    return (h("div", { class: this.faded && "faded" }, h("footer", { class: this.retrieveClass(), onTransitionEnd: (e) => this.footerTransitionHandler(e) }, h("span", { class: "toggle" }, h("slot", { name: "toggle" })), h("h2", null, this.titolo), h("div", { class: "content" }, h("div", null, h("p", { class: "authors", ref: el => (this.ellipsisAuthors = el) }, h("span", { title: this.getTitleAuthors() }, h("span", { class: "bold" }, this.autori))), h("p", { class: "year_isbn" }, h("span", { class: "isbn" }, h("span", null, h("span", { class: "bold" }, this.isbn), " (ed. cartacea)")))), h("div", { class: `slot-handler ${this.isOpen ? "visible" : "hidden"}` }, h("slot", { name: "list" }))))));
  }
};
ZMyzCardFooter.style = stylesCss$s;

const stylesCss$r = "header{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;width:auto;height:calc(var(--space-unit) * 6);position:relative;border-bottom:var(--border-size-medium) solid var(--color-surface03);border-radius:var(--border-radius) var(--border-radius)\n    var(--border-no-radius) var(--border-no-radius);background-color:var(--color-surface01)}header.real,header.trial{background-color:var(--accent-lighter);border-bottom:var(--border-size-medium) solid var(--accent)}h2{font-family:var(--font-family-sans);font-weight:var(--font-sb);color:var(--color-surface05);height:calc(var(--space-unit) * 2);font-size:12px;text-transform:uppercase;letter-spacing:0.22px;line-height:calc(var(--space-unit) * 2);margin:0px;padding:calc(var(--space-unit) * 2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.faded{border-bottom:var(--border-size-medium) solid var(--color-surface02)}.faded.real,.faded.trial{border-top:var(--border-size-medium) solid var(--accent);border-right:var(--border-size-medium) solid var(--accent);border-left:var(--border-size-medium) solid var(--accent)}";

const ZMyzCardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.allowTooltip = false;
  }
  getTitle() {
    return this.allowTooltip ? this.titolo : "";
  }
  componentDidLoad() {
    if (this.elementHasEllipsis())
      this.allowTooltip = true;
  }
  elementHasEllipsis() {
    return this.ellipsis.offsetWidth < this.ellipsis.scrollWidth;
  }
  retrieveClass() {
    return {
      real: this.cardtype === LicenseTypeEnum.real,
      trial: this.cardtype === LicenseTypeEnum.trial,
      faded: this.faded
    };
  }
  render() {
    return (h("header", { class: this.retrieveClass() }, h("h2", { ref: el => (this.ellipsis = el), title: this.getTitle() }, this.titolo), h("slot", { name: "icon" })));
  }
};
ZMyzCardHeader.style = stylesCss$r;

const stylesCss$q = "button{width:42px;height:calc(var(--space-unit) * 5);display:flex;align-items:center;justify-content:center;color:var(--color-primary01);fill:var(--color-primary01);cursor:pointer;outline:none;background:none;border:none;border-left:var(--border-size-medium) solid var(--color-surface03);border-radius:0px var(--border-radius) 0px 0px;margin:0;padding:0px;width:calc(var(--space-unit) * 6);height:calc(var(--space-unit) * 6)}button:active,button:focus{color:var(--blue700);fill:var(--blue700)}button>span{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:var(--border-radius);border:0px}button:hover>span{background:var(--color-primary03)}button:focus>span{background:var(--color-surface01);border-radius:var(--border-radius);box-shadow:0px 0px 2px 2px var(--accent-dark)}button:active>span{background:var(--color-surface01);border-radius:var(--border-radius);box-shadow:var(--shadow-2)}button:disabled{cursor:not-allowed}button:disabled>span{background:none;box-shadow:var(--shadow-0);pointer-events:none}button:disabled>span>z-icon{fill:var(--color-surface03)}button::-moz-focus-inner{border:0}";

const ZMyzCardIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** disabled status flag */
    this.isdisabled = false;
  }
  render() {
    return (h("button", { disabled: this.isdisabled }, h("span", null, h("z-icon", { name: this.icon, width: 16, height: 16 }))));
  }
};
ZMyzCardIcon.style = stylesCss$q;

const stylesCss$p = "ul{font-family:var(--font-family-sans);color:var(--color-primary02);margin:0 calc(var(--space-unit) * 2);padding:0px;overflow:hidden;list-style:none;width:auto;height:auto}ul>li{padding-left:10px;text-indent:-10px}ul>li>a{display:block;font-size:14px;font-weight:var(--font-sb);text-decoration:none;color:var(--color-primary01);letter-spacing:0.16px;line-height:calc(var(--space-unit) * 2.5);padding-top:calc(var(--space-unit) * .5)}ul>li>a:before{content:\"•\";padding-right:5px}ul>li>span{font-size:14px;font-weight:var(--font-rg);text-decoration:none;color:var(--color-surface04);padding:0 calc(var(--space-unit) * 2);letter-spacing:0.16px;line-height:calc(var(--space-unit) * 2.5)}";

const ZMyzCardList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.renderList = this.renderList.bind(this);
  }
  handleSpaceKeyPress(e, url) {
    if (e.keyCode == 32 || e.keyCode == 13) {
      e.preventDefault();
      window.open(url, "_blank");
    }
  }
  formatListContent(data) {
    const { value, isLink, url } = data;
    if (!isLink)
      return h("span", null, value);
    return (h("a", { role: "button", onKeyPress: (e) => this.handleSpaceKeyPress(e, url), href: url, target: "_blank" }, value));
  }
  renderList(dataArray) {
    return dataArray.map((data) => {
      return h("li", null, this.formatListContent(data));
    });
  }
  render() {
    return h("ul", null, this.renderList(JSON.parse(this.listdata)));
  }
};
ZMyzCardList.style = stylesCss$p;

const stylesCss$o = "ul{margin:0;padding:0}";

const ZMyzList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    if (this.inputrawdata) {
      this.parseinputrawdata(this.inputrawdata);
    }
  }
  parseinputrawdata(inputrawdata) {
    this.list = [...JSON.parse(inputrawdata)];
  }
  oninputrawdataChange(newValue) {
    this.parseinputrawdata(newValue);
  }
  render() {
    const lastElem = this.list ? this.list.length - 1 : -1;
    return (h("ul", null, this.list &&
      this.list.map((bean, i) => (h("z-myz-list-item", { listitemid: bean.listitemid, text: bean.text, link: bean.link, linktarget: bean.linktarget, icon: bean.icon, underlined: lastElem != i })))));
  }
  static get watchers() { return {
    "inputrawdata": ["oninputrawdataChange"]
  }; }
};
ZMyzList.style = stylesCss$o;

const stylesCss$n = ":host li{all:unset;all:reset;width:100%}:host li{list-style-type:none;line-height:14px}:host li>span{line-height:14px;padding:calc(var(--space-unit) * 2) 0;display:flex;font-family:var(--dashboard-font);font-weight:var(--font-rg);font-size:16px;letter-spacing:0.23px;color:var(--text-grey-800);fill:var(--text-grey-800)}:host li>span.border{border-bottom:2px solid var(--bg-grey-200)}:host li span:hover,a:hover{color:var(--myz-blue);fill:var(--myz-blue)}a,a:visited,a:active{color:inherit;fill:inherit;text-decoration:none}:host li span z-icon{color:var(--myz-blue);fill:var(--myz-blue);height:calc(var(--space-unit) * 2);width:calc(var(--space-unit) * 2);padding:0 calc(var(--space-unit) * 1.5) 0 0;background-size:contain;background-repeat:no-repeat}";

const ZMyzListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.zListItemLinkClick = createEvent(this, "zListItemLinkClick", 7);
    this.zListItemClick = createEvent(this, "zListItemClick", 7);
    /** link target (optional) */
    this.linktarget = "_self";
    /** underlined style flag */
    this.underlined = true;
    this.emitZListItemLinkClick = this.emitZListItemLinkClick.bind(this);
    this.emitZListItemClick = this.emitZListItemClick.bind(this);
  }
  emitZListItemLinkClick(e, linkId) {
    this.zListItemLinkClick.emit({ e, linkId });
  }
  emitZListItemClick(e, listitemid) {
    this.zListItemClick.emit({ e, listitemid });
  }
  render() {
    const linkId = this.listitemid ? `link_${this.listitemid}` : "";
    return (h("li", { role: "button", id: this.listitemid, "data-action": this.action, onClick: (e) => this.emitZListItemClick(e, this.listitemid), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitZListItemClick, this.listitemid) }, h("span", { class: this.underlined && "border" }, this.icon && h("z-icon", { name: this.icon }), this.link ? (h("a", { href: this.link ? this.link : null, target: this.linktarget, id: linkId, onClick: (e) => this.emitZListItemLinkClick(e, linkId), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.emitZListItemLinkClick, linkId), role: this.link ? "link" : "button", tabindex: "0" }, this.text)) : (h("span", { innerHTML: this.text })), h("slot", null))));
  }
};
ZMyzListItem.style = stylesCss$n;

const stylesCss$m = ":host{width:100%;color:var(--color-text01)}.notification-container{display:flex;padding:0 0 calc(var(--space-unit) * 2) calc(var(--space-unit) * 2);outline:none;border-bottom:var(--border-size-medium) solid var(--color-surface03)}.shadow{box-shadow:var(--shadow-3)}.content-container{display:flex;justify-content:space-between;flex:1 1 auto;flex-wrap:wrap}.content-text{max-width:800px;margin-top:calc(var(--space-unit) * 2);margin-right:calc(var(--space-unit) * 2)}.action-text{margin-top:calc(var(--space-unit) * 2);margin-right:calc(var(--space-unit) * 2);height:fit-content;color:var(--color-primary01);cursor:pointer;white-space:nowrap}:host div>z-icon{justify-self:center;margin-top:calc(var(--space-unit) * 2);margin-right:calc(var(--space-unit))}:host div.success-notification{background:var(--color-success-inverse)}:host div.warning-notification{background:var(--color-warning-inverse)}:host div.error-notification{background:var(--color-error-inverse)}:host div.success-notification>z-icon{fill:var(--color-success01)}:host div.warning-notification>z-icon{fill:var(--color-warning02)}:host div.error-notification>z-icon{fill:var(--color-error01)}:host div>z-icon.close-icon{cursor:pointer;fill:var(--color-primary01);margin-right:calc(var(--space-unit) * 2)}@media only screen and (min-width: 768px){.content-container{flex-wrap:nowrap}.content-text{margin-right:calc(var(--space-unit) * 5)}}";

const ZNotification = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.notificationAction = createEvent(this, "notificationAction", 7);
    this.notificationClose = createEvent(this, "notificationClose", 7);
    /** enable close icon */
    this.showclose = false;
    /** enable shadow */
    this.showshadow = false;
  }
  handleActionButtonClick(e) {
    e.preventDefault();
    this.notificationAction.emit();
  }
  handleCloseButtonClick(e) {
    e.preventDefault();
    this.notificationClose.emit();
  }
  render() {
    return (h("div", { class: {
        "notification-container": true,
        "success-notification": this.type === NotificationType.success,
        "warning-notification": this.type === NotificationType.warning,
        "error-notification": this.type === NotificationType.error,
        "shadow": this.showshadow
      } }, this.contenticonname && (h("z-icon", { name: this.contenticonname, width: 16, height: 16 })), h("div", { class: "content-container" }, h("z-body", { class: "content-text", level: 4 }, h("slot", null)), this.actiontext && !!this.actiontext.trim().length && (h("z-body", { class: "action-text", role: "button", tabindex: "0", onClick: (e) => {
        this.handleActionButtonClick(e);
      }, level: 5, variant: "semibold" }, this.actiontext))), this.showclose && (h("z-icon", { class: "close-icon", name: "multiply-circle", width: 16, height: 16, onClick: (e) => this.handleCloseButtonClick(e) }))));
  }
};
ZNotification.style = stylesCss$m;

const stylesCss$l = ":host>div{height:48px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:center;align-content:center}:host>div>z-icon{cursor:pointer;margin:15px 0;color:var(--myz-blue);fill:var(--myz-blue)}:host>div>z-icon.disabled{cursor:default;pointer-events:none;color:var(--bg-neutral-200);fill:var(--bg-neutral-200)}";

const ZPaginationBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goToPage = createEvent(this, "goToPage", 7);
    this.changeStartPage = createEvent(this, "changeStartPage", 7);
    this.addPageToHistory = createEvent(this, "addPageToHistory", 7);
    /** current displayed page (mutable) */
    this.currentpage = 1;
    /** initial page (mutable) */
    this.startpage = 1;
    /** array of history of visited pages (mutable, optional) */
    this.listhistoryrow = [];
    this.currentPages = [];
    this.velocityConstantMultiplier = 2;
    this.navigateRight = this.navigateRight.bind(this);
    this.navigateLeft = this.navigateLeft.bind(this);
    this.emitGoToPage = this.emitGoToPage.bind(this);
  }
  componentDidLoad() {
    this.scrollPage = this.scrollPage.bind(this);
    let mc = new hammer(this.bar);
    // listen to events...
    mc.on("swiperight", this.scrollPage);
    mc.on("swipeleft", this.scrollPage);
  }
  componentWillRender() {
    this.initPagination();
  }
  componentWillUpdate() {
    this.initPagination();
  }
  initPagination() {
    this.loadPages();
    if (this.historyraw) {
      this.parsehistoryraw(this.historyraw);
    }
  }
  parsehistoryraw(historyraw) {
    this.listhistoryrow = [...JSON.parse(historyraw)];
  }
  scrollPage(ev) {
    let vel = Math.round(Math.abs(ev.velocity)) * this.velocityConstantMultiplier;
    const deltaPage = Math.max(1, vel);
    switch (ev.type) {
      case "swiperight":
        if (!this.canNavigateLeft())
          break;
        const newstartPage1 = this.startpage - deltaPage;
        if (newstartPage1 > 1)
          this.emitChangeStartPage(newstartPage1);
        else
          this.emitChangeStartPage(1);
        break;
      case "swipeleft":
        if (!this.canNavigateRight())
          break;
        const newstartPage2 = this.startpage + deltaPage;
        if (newstartPage2 < this.pages - this.visiblepages + 1)
          this.emitChangeStartPage(newstartPage2);
        else
          this.emitChangeStartPage(this.pages - this.visiblepages + 1);
        break;
    }
  }
  emitGoToPage(page) {
    this.currentpage = page;
    this.goToPage.emit({ page: page });
    this.addPageToHistory.emit({ page: page });
  }
  emitChangeStartPage(startpage) {
    this.startpage = startpage;
    this.changeStartPage.emit({ startpage: startpage });
  }
  emitAddPageToHistory(page) {
    this.listhistoryrow.push(page);
    this.changeStartPage.emit({ page: page });
  }
  loadPages() {
    this.currentPages.splice(0);
    const lastPage = this.pageWindow();
    let i;
    for (i = 0; i < lastPage; i++) {
      this.currentPages.push(i + this.startpage);
    }
  }
  pageWindow() {
    return Math.min(this.pages, this.visiblepages); //How many pages are there to show?
  }
  canNavigateLeft() {
    return this.startpage > 1;
  }
  canNavigateRight() {
    return this.startpage + this.visiblepages - 1 < this.pages;
  }
  navigateLeft() {
    if (this.canNavigateLeft()) {
      this.startpage--;
      this.emitChangeStartPage(this.startpage);
      this.loadPages();
    }
  }
  navigateRight() {
    if (this.canNavigateRight()) {
      this.startpage++;
      this.emitChangeStartPage(this.startpage);
      this.loadPages();
    }
  }
  render() {
    return (h("div", { ref: el => (this.bar = el) }, h("z-icon", { name: "chevron-left", class: !this.canNavigateLeft() && "disabled", onClick: () => this.navigateLeft(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.navigateLeft), tabindex: this.canNavigateLeft() ? 0 : -1 }), this.currentPages.map(page => (h("z-pagination-page", { value: page, isselected: page === this.currentpage, onClick: () => this.emitGoToPage(page), onKeyDown: (ev) => handleKeyboardSubmit(ev, this.emitGoToPage, page), isvisited: this.listhistoryrow.includes(page) }))), h("z-icon", { name: "chevron-right", class: !this.canNavigateRight() && "disabled", onClick: () => this.navigateRight(), onKeyPress: (ev) => handleKeyboardSubmit(ev, this.navigateRight), tabindex: this.canNavigateRight() ? 0 : -1 })));
  }
};
ZPaginationBar.style = stylesCss$l;

const stylesCss$k = ":host{font-family:var(--dashboard-font);font-weight:var(--font-sb);display:inline-block}:host>a{cursor:pointer;outline:none;display:inline-block;box-sizing:border-box;margin:0;height:48px;line-height:48px;text-align:center;border-bottom:4px solid transparent;color:var(--myz-blue);font-size:14px;text-decoration:none;transition:border-bottom 0.2s ease, font-size 0.2s ease;min-width:56px}:host>a.disabled{pointer-events:none;cursor:default;color:var(--text-grey-700)}:host>a:hover{border-bottom:4px solid rgba(0, 86, 193, 0.5);background-color:var(--bg-grey-050);text-decoration:none;transition:border-bottom 0.2s ease, background-color 0.2s ease}:host>a:focus{border-bottom:4px solid var(--bg-grey-200);box-shadow:0px 0px 2px 2px var(--accent-dark);background-color:var(--bg-grey-050);text-decoration:none}:host>a.visited{border-color:rgba(0, 86, 193, 0.5);text-decoration:none}:host>a.selected{border-bottom:4px solid var(--myz-blue);font-size:28px;transition:border-bottom 0.2s ease, font-size 0.2s ease}@media only screen and (min-width: 768px){:host>a{}}";

const ZPaginationPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** selected status flag */
    this.isselected = false;
    /** disabled status flag */
    this.isdisabled = false;
    /** visited status flag */
    this.isvisited = false;
  }
  render() {
    return (h("a", { id: this.pageid, ref: el => (this.page = el), class: `${this.isselected && "selected"} ${this.isdisabled &&
        "disabled"} ${this.isvisited && "visited"}`, tabindex: this.isdisabled ? -1 : 0, role: "button" }, this.value));
  }
};
ZPaginationPage.style = stylesCss$k;

const stylesCss$j = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg);width:inherit}.panel-elem-container{width:100%}.panel-elem-icon{margin:auto calc(var(--space-unit) * 3)}.panel-elem-icon img{display:block;object-fit:contain;max-width:96px;height:32px;margin:auto}.panel-elem-link{border-radius:var(--border-no-radius);margin:var(--space-unit) auto 0;text-align:center;font-size:12px}.panel-elem-link>z-link{font-weight:var(--font-sb)}.panel-elem-desc{letter-spacing:0.16px;text-align:center;margin:0;padding-top:var(--space-unit)}";

const ZPanelElem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** link target (optional) */
    this.target = "_blank";
    /** disabled status flag (optional) */
    this.isdisabled = false;
  }
  renderIcon() {
    if (this.isdisabled) {
      return h("img", { src: this.imgurl, alt: this.imgalt });
    }
    return (h("a", { class: "elem-icon", href: this.url, target: this.target }, h("img", { src: this.imgurl, alt: this.imgalt })));
  }
  render() {
    const elemId = this.elemid ? this.elemid : "";
    return (h("div", { class: "panel-elem-container" }, (this.imgurl || this.imgalt) && (h("div", { class: "panel-elem-icon" }, this.renderIcon())), h("div", { class: "panel-elem-link" }, h("z-link", { href: this.url, icon: this.linkicon, isdisabled: this.isdisabled, target: this.target, htmlid: elemId + "link_id" }, this.linklabel)), this.descr_slot_name && (h("div", { class: "panel-elem-desc body-long-01" }, h("slot", { name: this.descr_slot_name })))));
  }
};
ZPanelElem.style = stylesCss$j;

const stylesCss$i = ".sc-z-popover-h{font-family:var(--dashboard-font);font-weight:var(--font-rg);position:relative;display:inline-block;--shadow-arrow-color:rgba(66, 69, 72, 0.2);--shadow-arrow-below-color:rgba(66, 69, 72, 0.1)}.popover-content-container.sc-z-popover{padding:8px;box-sizing:border-box;visibility:hidden;position:absolute;min-width:64px;min-height:32px;z-index:999}.popover-content-container.visible.sc-z-popover{visibility:visible}.popover-content-container.border-radius-none.sc-z-popover{border-radius:0}.popover-content-container.border-radius-small.sc-z-popover{border-radius:var(--border-radius-small)}.popover-content-container.border-radius-medium.sc-z-popover{border-radius:var(--border-radius)}.popover-content-container.shadow-1.sc-z-popover{box-shadow:var(--shadow-1)}.popover-content-container.shadow-2.sc-z-popover{box-shadow:var(--shadow-2)}.popover-content-container.shadow-3.sc-z-popover{box-shadow:var(--shadow-3)}.popover-content-container.shadow-4.sc-z-popover{box-shadow:var(--shadow-4)}.popover-content-container.shadow-6.sc-z-popover{box-shadow:var(--shadow-6)}.popover-content-container.shadow-8.sc-z-popover{box-shadow:var(--shadow-8)}.popover-content-container.shadow-12.sc-z-popover{box-shadow:var(--shadow-12)}.popover-content-container.shadow-16.sc-z-popover{box-shadow:var(--shadow-16)}.popover-content-container.shadow-24.sc-z-popover{box-shadow:var(--shadow-24)}.popover-content-container.after-down.sc-z-popover{top:0;left:calc(100% + var(--space-unit))}.popover-content-container.after-center.sc-z-popover{top:50%;left:calc(100% + var(--space-unit));transform:translateY(-50%)}.popover-content-container.after-up.sc-z-popover{bottom:0;left:calc(100% + var(--space-unit))}.popover-content-container.below-right.sc-z-popover{left:0;top:calc(100% + var(--space-unit))}.popover-content-container.below-center.sc-z-popover{left:50%;top:calc(100% + var(--space-unit));transform:translateX(-50%)}.popover-content-container.below-left.sc-z-popover{right:0;top:calc(100% + var(--space-unit))}.popover-content-container.before-down.sc-z-popover{top:0;right:calc(100% + var(--space-unit))}.popover-content-container.before-center.sc-z-popover{top:50%;right:calc(100% + var(--space-unit));transform:translateY(-50%)}.popover-content-container.before-up.sc-z-popover{bottom:0;right:calc(100% + var(--space-unit))}.popover-content-container.above-right.sc-z-popover{left:0;bottom:calc(100% + var(--space-unit))}.popover-content-container.above-center.sc-z-popover{left:50%;bottom:calc(100% + var(--space-unit));transform:translateX(-50%)}.popover-content-container.above-left.sc-z-popover{right:0;bottom:calc(100% + var(--space-unit))}.popover-content-container.sc-z-popover:before{display:none;position:absolute;content:\"\";width:8px;height:8px;z-index:-1;background-color:inherit;transform:rotate(45deg)}.popover-content-container.after-down.sc-z-popover:before{top:12px;left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.after-center.sc-z-popover:before{top:calc(50% - 4px);left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.after-up.sc-z-popover:before{bottom:12px;left:-4px;box-shadow:-1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.below-right.sc-z-popover:before{left:12px;top:-4px;box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.below-center.sc-z-popover:before{left:calc(50% - 4px);top:-4px;box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.below-left.sc-z-popover:before{right:12px;top:-4px;box-shadow:-1px -1px 2px var(--shadow-arrow-below-color)}.popover-content-container.before-down.sc-z-popover:before{top:12px;right:-4px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.before-center.sc-z-popover:before{top:calc(50% - 4px);right:-4px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.before-up.sc-z-popover:before{bottom:12px;right:-4px;box-shadow:1px -1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-right.sc-z-popover:before{left:12px;bottom:-4px;box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-center.sc-z-popover:before{left:calc(50% - 4px);bottom:-4px;box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.above-left.sc-z-popover:before{right:12px;bottom:-4px;box-shadow:1px 1px 1.5px var(--shadow-arrow-color)}.popover-content-container.show-arrow.sc-z-popover:before{display:block}";

const ZPopover = class {
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
    this.isVisible = false;
    this.defaultPosition = this.position;
  }
  closePopover() {
    this.isVisible = false;
  }
  closePopoverWithKeyboard(e) {
    if (e.key === KeyboardKeys.ESC) {
      this.closePopover();
    }
  }
  handleClick(event) {
    this.isVisible = !this.isVisible;
    this.checkSpaceAvailable();
    event.stopPropagation();
  }
  handleOutsideClick(e) {
    const tree = getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-popover");
    if (!parent) {
      this.isVisible = false;
    }
  }
  checkSpaceAvailable() {
    if (!this.isVisible) {
      this.position = this.defaultPosition;
      return;
    }
    const width = document.body.clientWidth;
    const height = window.innerHeight;
    const l = this.popoverElem.getBoundingClientRect().left;
    const r = this.popoverElem.getBoundingClientRect().right;
    const t = this.popoverElem.getBoundingClientRect().top;
    const b = this.popoverElem.getBoundingClientRect().bottom;
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
    this.position = PopoverPosition[`${firstSide}-${secondSide}`];
  }
  render() {
    return (h(Host, null, h("div", { onClick: (event) => this.handleClick(event) }, h("slot", { name: "trigger" })), h("div", { ref: (e) => (this.popoverElem = e), class: classnames("popover-content-container", this.position, `border-radius-${this.borderRadius}`, this.boxShadow, { "show-arrow": this.showArrow }, { visible: this.isVisible }), style: {
        backgroundColor: `var(--${this.backgroundColor})`,
      } }, h("slot", { name: "popover" }))));
  }
};
ZPopover.style = stylesCss$i;

const stylesCss$h = "z-registro-table{overflow-x:auto;display:block;width:100%;font-family:var(--dashboard-font);font-weight:var(--font-rg)}z-registro-table>div.table{display:table;width:100%;border-collapse:separate}z-registro-table>div.table-bordered>z-registro-table-body>z-registro-table-row>z-registro-table-cell:not(:last-child),z-registro-table>div.table-bordered>z-registro-table-head>z-registro-table-header-row>z-registro-table-header:not(:last-child){border-right:var(--border-size-small) solid var(--bg-grey-200)}z-registro-table>div>z-registro-table-body>z-registro-table-row[expandable]>z-registro-table-cell:first-child,z-registro-table>div>z-registro-table-head>z-registro-table-header-row[expandable]>z-registro-table-header:first-child{border-right:none}z-registro-table>div>z-registro-table-body>z-registro-table-row[expanded]>z-registro-table-cell{background-color:var(--gray50)}z-registro-table>div>z-registro-table-body>z-registro-table-row[expanded]+z-registro-table-expanded-row{border-bottom:1px solid var(--gray200)}z-registro-table>div.table-column-sticky>z-registro-table-body>z-registro-table-row>z-registro-table-cell:first-child,z-registro-table>div.table-column-sticky>z-registro-table-head>z-registro-table-header-row>z-registro-table-header:first-child{position:sticky;left:0;box-shadow:1px 0 4px -1px rgba(66, 69, 72, 0.4);z-index:1}z-registro-table>div.table-header-sticky>z-registro-table-head>z-registro-table-header-row>z-registro-table-header{position:sticky;top:0;box-shadow:0 2px 3px -3px rgba(66, 69, 72, 0.4)}z-registro-table>div.table-header-sticky>z-registro-table-head>z-registro-table-header-row>z-registro-table-header{z-index:2}z-registro-table>div.table-header-sticky>z-registro-table-head>z-registro-table-header-row>z-registro-table-header:first-child,z-registro-table>div.table-column-sticky>z-registro-table-head>z-registro-table-header-row>z-registro-table-header:first-child{z-index:5}@media only screen and (max-width: 768px){z-registro-table>div.table-empty{display:none}}.table-content{display:flex;flex-direction:row}.table-content :first-child{width:auto}";

const ZRegistroTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.callToAction = createEvent(this, "callToAction", 7);
    this.callToActionTwo = createEvent(this, "callToActionTwo", 7);
    /** Sets table with border */
    this.bordered = false;
    /** Sets first column sticky */
    this.columnSticky = false;
    /** Sets empty table */
    this.empty = false;
    /** Sets header sticky */
    this.headerSticky = false;
    /** Set message */
    this.message = "Siamo spicenti, al momento non sono presenti dati da visualizzare";
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
    this.isMobile = window.innerWidth <= mobileBreakpoint;
    this.hasTableBody = !!this.host.querySelector('[slot="table-body"]');
  }
  componentWillRender() {
    this.host.setAttribute("role", "table");
  }
  render() {
    const buttonSize = this.isMobile
      ? ButtonSizeEnum.small
      : ButtonSizeEnum.big;
    const tableClass = `table ${this.empty ? "table-empty" : ""} ${this.bordered ? "table-bordered" : ""}
    ${this.columnSticky ? "table-column-sticky" : ""}
    ${this.headerSticky ? "table-header-sticky" : ""}`;
    const tableContentClass = `${!!this.hasTableBody ? "table-content" : ""}`;
    if (this.empty && this.hasTableBody) {
      return (h(Host, null, h("div", { class: tableClass }, h("slot", { name: "table-header" }), h("div", { class: tableContentClass }, h("slot", { name: "table-body" }), h("z-registro-table-empty-box", { message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (h("z-button", { slot: "cta1", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (h("z-button", { slot: "cta2", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))))));
    }
    if (this.empty && !this.hasTableBody) {
      return (h(Host, null, h("div", { class: tableClass }, h("slot", { name: "table-header" })), h("z-registro-table-empty-box", { message: this.message, subtitle: this.subtitle }, !!this.callToActionLabel && (h("z-button", { slot: "cta1", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToAction.emit(), size: buttonSize }, this.callToActionLabel)), !!this.callToActionTwoLabel && (h("z-button", { slot: "cta2", variant: ButtonVariantEnum.tertiary, onClick: () => this.callToActionTwo.emit(), size: buttonSize }, this.callToActionTwoLabel)))));
    }
    return (h(Host, null, h("div", { class: tableClass }, h("slot", null)), h("slot", { name: "sticky-footer" })));
  }
  get host() { return getElement(this); }
};
ZRegistroTable.style = stylesCss$h;

const stylesCss$g = ".sc-z-registro-table-body-h{display:table-row-group;width:100%;font-family:var(--dashboard-font);font-weight:var(--font-rg)}.sc-z-registro-table-body-h>z-registro-table-row[expanded].sc-z-registro-table-body+z-registro-table-expanded-row.sc-z-registro-table-body{display:table-row}";

const ZRegistroTableBody = class {
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
ZRegistroTableBody.style = stylesCss$g;

const stylesCss$f = ":host{display:table-cell;padding:calc(var(--space-unit) * 2);background-color:var(--color-white);border-bottom:var(--border-size-small) solid var(--bg-grey-200);font-family:var(--dashboard-font);font-weight:var(--font-rg);position:relative}:host>.button-container{display:none}:host:hover>.button-container{display:initial}.button-container{position:absolute;right:8px;top:8px;z-index:5}.button-content{position:relative}.contextual-menu-container{display:none;position:absolute;top:calc(100% - var(--space-unit));right:0}.button-container.visible,.contextual-menu-container.visible{display:initial}";

const ZRegistroTableCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
ZRegistroTableCell.style = stylesCss$f;

const stylesCss$e = ".sc-z-registro-table-empty-box-h{display:block;padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 7)\n    calc(var(--space-unit) * 3) calc(var(--space-unit) * 7);background-color:var(--bg-white)}.sc-z-registro-table-empty-box-s>*{margin-right:calc(var(--space-unit) * 2);margin-top:var(--space-unit)}div.cta.sc-z-registro-table-empty-box{display:flex;flex-direction:row;margin-top:var(--space-unit)}@media only screen and (max-width: 768px){div.cta.sc-z-registro-table-empty-box{flex-direction:column}}";

const ZRegistroTableEmptyBox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Sets main title message*/
    this.message = "Siamo spicenti, al momento non sono presenti dati da visualizzare.";
    /** Sets message */
    this.subtitle = "";
  }
  render() {
    return (h(Host, null, h("z-body", { level: 3, variant: "semibold" }, this.message), h("br", null), h("z-body", { level: 4, variant: "regular" }, this.subtitle), h("div", { class: "cta" }, h("slot", { name: "cta1" }), h("slot", { name: "cta2" }))));
  }
};
ZRegistroTableEmptyBox.style = stylesCss$e;

const stylesCss$d = ":host{font-family:var(--dashboard-font);background-color:var(--gray50);display:none}:host>td>div.content-container{padding:0 calc(var(--space-unit) * 2) 0 calc(var(--space-unit) * 7)}:host>td>div.content-container>div.inner-content{padding:calc(var(--space-unit) * 2) 0 calc(var(--space-unit) * 2) 0;border-top:1px solid var(--gray200)}";

const ZRegistroTableExpandedRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("td", { colSpan: this.colSpan }, h("div", { class: "content-container" }, h("div", { class: "inner-content" }, h("slot", null)))));
  }
};
ZRegistroTableExpandedRow.style = stylesCss$d;

const stylesCss$c = ".sc-z-registro-table-head-h{display:table-header-group;font-family:var(--dashboard-font);font-weight:var(--font-rg)}";

const ZRegistroTableHead = class {
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
ZRegistroTableHead.style = stylesCss$c;

const stylesCss$b = ":host{display:table-cell;background-color:var(--gray50);border-bottom:var(--border-size-medium) solid var(--gray200);font-family:var(--dashboard-font);font-weight:var(--font-sb);text-align:start;position:relative}.container{display:flex;align-items:flex-end}:host(.sortable){cursor:pointer}:host(.size-x-small){padding:calc(var(--space-unit) / 2)}:host(.size-small){padding:var(--space-unit)}:host(.size-medium){padding:calc(var(--space-unit) * 2)}:host(.size-large){padding:calc(var(--space-unit) * 3)}:host(.size-special){padding:20px 40px}.arrow{opacity:1;padding-left:var(--space-unit)}.arrow.hidden{opacity:0}.popover-container{position:absolute;top:var(--space-unit);right:var(--space-unit);display:none}.popover-container.visible{display:block}:host(:hover) .popover-container{display:block}";

const ZRegistroTableHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sort = createEvent(this, "sort", 7);
    /** [Optional] Padding of the header */
    this.size = TableHeaderSize["medium"];
    this.isMenuOpened = false;
    this.sortingOrientation = SortingOrientation["none"];
    this.emitOnSort = this.emitOnSort.bind(this);
  }
  emitOnSort() {
    this.sort.emit({ sortingOrientation: this.sortingOrientation });
  }
  handleSort() {
    if (!this.sortable) {
      return;
    }
    if (this.sortingOrientation === SortingOrientation["none"] ||
      this.sortingOrientation === SortingOrientation["desc"]) {
      this.sortingOrientation = SortingOrientation["asc"];
    }
    else if (this.sortingOrientation === SortingOrientation["asc"]) {
      this.sortingOrientation = SortingOrientation["desc"];
    }
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
    if (!this.sortable) {
      return;
    }
    const tree = getElementTree(e.target);
    const parent = tree.find((elem) => elem.nodeName.toLowerCase() === "z-registro-table-header");
    if (parent &&
      parent.attributes.getNamedItem("column-id").value !== this.columnId) {
      this.sortingOrientation = SortingOrientation["none"];
    }
  }
  componentWillRender() {
    this.host.setAttribute("role", "columnheader");
  }
  render() {
    return (h(Host, { class: classnames(`size-${this.size}`, {
        sortable: this.sortable,
      }), onClick: () => this.handleSort() }, h("div", { class: classnames("container") }, h("slot", null), this.sortable && (h("z-icon", { name: this.sortingOrientation === SortingOrientation["asc"]
        ? "arrow-up"
        : "arrow-down", class: classnames("arrow", {
        hidden: this.sortingOrientation === SortingOrientation["none"],
      }) }))), this.showButton && (h("div", { class: classnames("popover-container", {
        visible: this.isMenuOpened,
      }) }, h("z-popover", { position: PopoverPosition["below-center"], "background-color": "gray200" }, h("z-button", { icon: "contextual-menu", variant: ButtonVariantEnum["tertiary"], size: ButtonSizeEnum["x-small"], square: true, slot: "trigger", onClick: () => this.handleMenuClick() }), h("div", { slot: "popover" }, h("slot", { name: "contextual-menu" })))))));
  }
  get host() { return getElement(this); }
};
ZRegistroTableHeader.style = stylesCss$b;

const stylesCss$a = "z-registro-table-header-row{display:table-row}z-registro-table-header-row[expandable]>z-registro-table-header:first-child{width:40px;user-select:none;box-sizing:border-box}";

const ZRegistroTableHeaderRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  _renderExpandHeader() {
    return h("z-registro-table-header", null);
  }
  render() {
    return (h(Host, { role: "row" }, this.expandable && this._renderExpandHeader(), h("slot", null)));
  }
};
ZRegistroTableHeaderRow.style = stylesCss$a;

const stylesCss$9 = "z-registro-table-row{display:table-row;font-family:var(--font-family-sans)}z-registro-table-row[expandable]>z-registro-table-cell:first-child{--z-icon-width:16px;--z-icon-height:16px;width:40px;padding:8px;box-sizing:border-box;text-align:center;fill:var(--gray800);user-select:none}z-registro-table-row[expandable]>z-registro-table-cell:first-child:hover{cursor:pointer;fill:var(--myz-blue-dark)}z-registro-table-row[expanded]>z-registro-tale-cell{background-color:var(--gray50)}z-registro-table-row[expanded]+z-registro-table-expanded-row{display:table-row}z-registro-table-row[expanded]>z-registro-table-cell{border-bottom:none}z-registro-table-row[expandable]>z-registro-table-cell:first-child{border-right:none}";

const ZRegistroTableRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expand = createEvent(this, "expand", 7);
    this.expanded = false;
  }
  emitOnExpand() {
    this.expand.emit({ expanded: this.expanded });
  }
  handleExpand() {
    this.expanded = !this.expanded;
    this.emitOnExpand();
  }
  _renderExpandButton() {
    return (h("z-registro-table-cell", { onClick: () => this.handleExpand() }, h("z-icon", { name: this.expanded ? "minus-circled" : "plus-circled" })));
  }
  render() {
    return (h(Host, { role: "row", expanded: this.expanded }, this.expandable && this._renderExpandButton(), h("slot", null)));
  }
};
ZRegistroTableRow.style = stylesCss$9;

const stylesCss$8 = ".sc-z-registro-table-sticky-footer-h{display:block;position:sticky;left:0;padding:var(--basex2);background-color:var(--bg-white);border-style:solid;border-color:var(--gray200);border-width:var(--border-size-small) 0 var(--border-base);font-weight:var(--font-rg)}";

const ZRegistroTableStickyFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("slot", null));
  }
};
ZRegistroTableStickyFooter.style = stylesCss$8;

const stylesCss$7 = ":host{display:inline-block;width:inherit}li[role=\"option\"]:focus:focus-visible{border-color:transparent;box-shadow:var(--shadow-focus-primary);outline:none}.selectWrapper>z-input{width:100%}.selectWrapper>div{position:relative}.selectWrapper>div.closed{height:0;overflow:hidden}.selectWrapper .ulScrollWrapper{background:var(--color-surface01);position:absolute;padding:calc(var(--space-unit) * .5) var(--space-unit);border:var(--border-size-small) solid var(--gray200);border-top:none;width:100%;box-sizing:border-box;outline:none}.selectWrapper .closed .ulScrollWrapper{z-index:10}.selectWrapper .open .ulScrollWrapper{z-index:20}.selectWrapper .ulScrollWrapper>ul{position:relative;margin:0;padding:0;list-style:none;border:0;max-height:240px;overflow:auto;outline:none;scrollbar-color:var(--color-primary01) transparent}.selectWrapper .ulScrollWrapper>ul::-webkit-scrollbar{background:linear-gradient(\n    to right,\n    transparent 0 3px,\n    var(--gray200) 3px 7px,\n    transparent 7px 10px\n  );width:10px;border-radius:var(--border-radius)}.selectWrapper .ulScrollWrapper>ul::-webkit-scrollbar-track{background-color:transparent}.selectWrapper .ulScrollWrapper>ul::-webkit-scrollbar-thumb{width:10px;background-color:var(--color-primary01);border-radius:var(--border-radius)}.selectWrapper .ulScrollWrapper>ul::-webkit-scrollbar-thumb:hover{background-color:var(--color-hover-primary)}.selectWrapper .ulScrollWrapper ul li{display:flex;align-items:center;min-height:calc(var(--space-unit) * 5.5);padding:calc(var(--space-unit) * 1.5);box-sizing:border-box;border-bottom:var(--border-size-small) solid var(--gray200);text-align:left;cursor:pointer}.selectWrapper .ulScrollWrapper ul li:hover{color:var(--color-hover-primary);background:var(--color-surface02)}.selectWrapper .ulScrollWrapper ul li:focus:focus-visible{margin:2px}.selectWrapper .ulScrollWrapper ul li[aria-selected=\"\"]{font-weight:var(--font-sb)}.selectWrapper .ulScrollWrapper ul li.disabled{color:var(--color-disabled02);cursor:default;pointer-events:none}.selectWrapper .ulScrollWrapper ul li.noResults{color:var(--color-primary01);fill:currentColor;border:none}.selectWrapper .ulScrollWrapper .noResults z-icon{margin-right:var(--space-unit)}.selectWrapper .chipsWrapper{padding-bottom:var(--space-unit)}.selectWrapper .chipsWrapper z-button-filter{display:inline-block;margin:calc(var(--space-unit) * 0.5)}";

const ZSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.optionSelect = createEvent(this, "optionSelect", 7);
    /** the id of the input element */
    this.htmlid = randomId();
    /** the input is disabled */
    this.disabled = false;
    /** the input is readonly */
    this.readonly = false;
    /** show input helper message (optional): available for text, password, number, email, textarea, select */
    this.hasmessage = true;
    /** the input has autocomplete option */
    this.autocomplete = false;
    /** multiple options can be selected */
    this.multiple = false;
    /** no result text message */
    this.noresultslabel = "Nessun risultato";
    this.isOpen = false;
    this.itemsList = [];
    this.toggleSelectUl = this.toggleSelectUl.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleSelectFocus = this.handleSelectFocus.bind(this);
  }
  watchItems() {
    this.itemsList = this.getInitialItemsArray();
    this.selectedItems = this.itemsList.filter((item) => item.selected);
  }
  /** get the input selected options */
  async getSelectedItems() {
    return this.selectedItems;
  }
  /** get the input value */
  async getValue() {
    return this.getSelectedValues();
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
    this.selectedItems = this.itemsList.filter((item) => values.includes(item.id));
  }
  emitOptionSelect() {
    this.optionSelect.emit({
      id: this.htmlid,
      selected: this.getSelectedValues(),
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
  mapSelectedItemsToItemsArray() {
    const initialItemsList = this.getInitialItemsArray();
    return initialItemsList.map((item) => {
      const found = this.selectedItems.find((selected) => selected.id === item.id);
      item.selected = !!found;
      return item;
    });
  }
  getSelectedValues() {
    if (this.multiple) {
      return this.selectedItems.map((item) => item.id);
    }
    if (!this.multiple && this.selectedItems.length) {
      return this.selectedItems[0].id;
    }
    return null;
  }
  filterItems(searchString) {
    const prevList = this.mapSelectedItemsToItemsArray();
    if (!(searchString === null || searchString === void 0 ? void 0 : searchString.length)) {
      this.itemsList = prevList;
    }
    else {
      this.itemsList = prevList
        .filter((item) => {
        return item.name.toUpperCase().includes(searchString.toUpperCase());
      })
        .map((item) => {
        const start = item.name
          .toUpperCase()
          .indexOf(searchString.toUpperCase());
        const end = start + searchString.length;
        const newName = item.name.substring(0, start) +
          item.name.substring(start, end).bold() +
          item.name.substring(end, item.name.length);
        item.name = newName;
        return item;
      });
    }
  }
  hasAutcomplete() {
    return (this.autocomplete === true ||
      this.autocomplete === "true" ||
      this.autocomplete === "on");
  }
  handleInputChange(e) {
    this.searchString = e.detail.value;
    if (!this.isOpen)
      this.toggleSelectUl();
  }
  selectItem(item, selected) {
    if (item && item.disabled)
      return;
    this.itemsList = this.mapSelectedItemsToItemsArray();
    this.itemsList = this.itemsList.map((i) => {
      if (!this.multiple)
        i.selected = false;
      if (i.id === (item ? item.id : null))
        i.selected = selected;
      return i;
    });
    this.selectedItems = this.itemsList.filter((item) => item.selected);
    this.emitOptionSelect();
    if (this.searchString)
      this.searchString = null;
  }
  arrowsSelectNav(e, key) {
    const arrows = [keybordKeyCodeEnum.ARROW_DOWN, keybordKeyCodeEnum.ARROW_UP];
    if (!arrows.includes(e.keyCode))
      return;
    e.preventDefault();
    e.stopPropagation();
    if (!this.isOpen)
      this.toggleSelectUl();
    let index;
    if (e.keyCode === keybordKeyCodeEnum.ARROW_DOWN) {
      index = key + 1 === this.itemsList.length ? 0 : key + 1;
    }
    else if (e.keyCode === keybordKeyCodeEnum.ARROW_UP) {
      index = key <= 0 ? this.itemsList.length - 1 : key - 1;
    }
    this.focusSelectItem(index);
  }
  focusSelectItem(index) {
    const focusElem = this.hostElement.shadowRoot.getElementById(`${this.htmlid}_${index}`);
    if (focusElem)
      focusElem.focus();
  }
  toggleSelectUl(selfFocusOnClose = false) {
    if (this.disabled || this.readonly)
      return;
    if (!this.isOpen) {
      document.addEventListener("click", this.handleSelectFocus);
      document.addEventListener("keyup", this.handleSelectFocus);
    }
    else {
      document.removeEventListener("click", this.handleSelectFocus);
      document.removeEventListener("keyup", this.handleSelectFocus);
      if (selfFocusOnClose) {
        this.hostElement.shadowRoot
          .getElementById(`${this.htmlid}_input`)
          .focus();
      }
    }
    this.isOpen = !this.isOpen;
  }
  handleInputClick(e) {
    const cp = e.composedPath();
    const clearIcon = cp.find((item) => item.classList && item.classList.contains("resetIcon"));
    if (clearIcon) {
      e.stopPropagation();
      return;
    }
    this.toggleSelectUl();
  }
  handleSelectFocus(e) {
    if (e instanceof KeyboardEvent && e.keyCode === keybordKeyCodeEnum.ESC) {
      e.stopPropagation();
      return this.toggleSelectUl(true);
    }
    if (e instanceof KeyboardEvent &&
      e.keyCode !== keybordKeyCodeEnum.TAB &&
      e.keyCode !== keybordKeyCodeEnum.ENTER) {
      return;
    }
    const tree = getElementTree(getClickedElement());
    const parent = tree.find((elem) => {
      return ((elem.nodeName.toLowerCase() === "z-input" &&
        elem.id === `${this.htmlid}_input`) ||
        (this.multiple &&
          elem.nodeName.toLowerCase() === "ul" &&
          elem.id === this.htmlid));
    });
    if (!parent) {
      this.toggleSelectUl(e instanceof MouseEvent ? true : false);
    }
  }
  scrollToLetter(letter) {
    const foundItem = this.itemsList.find((item) => item.name.charAt(0) === letter);
    if (foundItem)
      this.focusSelectItem(this.itemsList.indexOf(foundItem));
  }
  renderLabel() {
    if (!this.label)
      return;
    return (h("z-input-label", { value: this.label, disabled: this.disabled, "aria-label": this.label, id: `${this.htmlid}_input_label` }));
  }
  renderInput() {
    return (h("z-input", { id: `${this.htmlid}_input`, htmlid: `${this.htmlid}_input`, placeholder: this.placeholder, value: !this.isOpen && !this.multiple && this.selectedItems.length
        ? this.selectedItems[0].name.replace(/<[^>]+>/g, "")
        : null, icon: this.isOpen ? "caret-up" : "caret-down", hasclearicon: this.hasAutcomplete(), hasmessage: false, disabled: this.disabled, readonly: this.readonly || (!this.hasAutcomplete() && this.isOpen), status: this.isOpen ? InputStatusEnum.selecting : this.status, onClick: (e) => {
        this.handleInputClick(e);
      }, onKeyUp: (e) => {
        if (e.keyCode !== 13)
          e.preventDefault();
        handleKeyboardSubmit(e, this.toggleSelectUl);
      }, onKeyDown: (e) => this.arrowsSelectNav(e, this.selectedItems.length
        ? this.itemsList.indexOf(this.selectedItems[0])
        : -1), onInputChange: (e) => {
        this.handleInputChange(e);
      }, onKeyPress: (e) => {
        if (!this.hasAutcomplete()) {
          e.preventDefault();
          this.scrollToLetter(String.fromCharCode(e.keyCode));
        }
      } }));
  }
  renderChips() {
    if (!this.multiple || !this.selectedItems.length)
      return;
    return (h("div", { class: `chipsWrapper ${this.isOpen ? "open" : ""}` }, this.selectedItems.map((item) => (h("z-button-filter", { filterid: item.id, filtername: item.name.replace(/<[^>]+>/g, ""), issmall: true, onRemovefilter: () => this.selectItem(item, false) })))));
  }
  renderSelectUl() {
    return (h("div", { class: this.isOpen ? "open" : "closed", tabindex: "-1" }, h("div", { class: "ulScrollWrapper", tabindex: "-1" }, h("ul", { role: "listbox", tabindex: this.disabled || this.readonly || !this.isOpen ? -1 : 0, id: this.htmlid, "aria-activedescendant": !this.multiple && this.selectedItems.length
        ? this.selectedItems[0].id
        : null, "aria-multiselectable": !!this.multiple, class: `
              ${this.disabled ? " disabled" : ""}
              ${this.readonly ? " readonly" : ""}
              ${!this.isOpen && this.status
        ? " input_" + this.status
        : " input_default"}
              ${this.selectedItems.length ? " filled" : ""}
            ` }, this.renderSelectUlItems()))));
  }
  renderSelectUlItems() {
    if (!this.itemsList.length)
      return this.renderNoSearchResults();
    return this.itemsList.map((item, key) => {
      return (h("li", { role: "option", tabindex: item.disabled || !this.isOpen ? -1 : 0, "aria-selected": !!item.selected, class: item.disabled && "disabled", id: `${this.htmlid}_${key}`, onClick: () => this.selectItem(item, true), onKeyUp: (e) => handleKeyboardSubmit(e, this.selectItem, item, true), onKeyDown: (e) => this.arrowsSelectNav(e, key) }, h("span", { innerHTML: item.name })));
    });
  }
  renderNoSearchResults() {
    return (h("li", { class: "noResults" }, h("z-icon", { name: "multiply-circle" }), this.noresultslabel));
  }
  renderMessage() {
    if (!this.hasmessage)
      return;
    return h("z-input-message", { message: this.message, status: this.status });
  }
  render() {
    return (h("div", { class: "selectWrapper" }, this.renderLabel(), this.renderChips(), this.renderInput(), this.renderSelectUl(), this.renderMessage()));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "items": ["watchItems"]
  }; }
};
ZSelect.style = stylesCss$7;

const stylesCss$6 = ":host{--z-icon-width:14px;--z-icon-height:14px;font-family:var(--font-family-sans);height:22px;border-radius:var(--border-radius);padding-right:4px;padding-left:4px;text-transform:uppercase;display:inline-flex;align-items:center}:host(.expandable)>z-icon{margin-right:0;transition:margin-right 0.3s ease-out 0.2s}:host(:not(.expandable))>z-icon:not(:last-child),:host(.expandable:hover)>z-icon:not(:last-child){margin-right:var(--space-unit);transition:margin-right 0.3s ease-out 0s}:host(.expandable)>span{max-width:0;transition:max-width 0.3s ease-out 0.2s;white-space:nowrap;overflow:hidden}:host(.expandable:hover)>span{max-width:20rem;transition:max-width 0.3s ease-out 0s}:host([status=\"warning\"]){background-color:var(--status-warning-yellow-lighter);color:var(--status-warning-yellow-dark);fill:var(--status-warning-yellow-dark)}:host([status=\"warning\"].light){background-color:transparent;color:var(--status-warning-yellow-dark);fill:var(--status-warning-yellow-dark)}:host([status=\"warning\"].dark){background-color:var(--status-warning-yellow-dark);color:var(--status-warning-yellow-lighter);fill:var(--status-warning-yellow-lighter)}:host([status=\"error\"]){background-color:var(--status-error-red-lighter);color:var(--status-error-red-dark);fill:var(--status-error-red-dark)}:host([status=\"error\"].light){background-color:transparent;color:var(--status-error-red-dark);fill:var(--status-error-red-dark)}:host([status=\"error\"].dark){background-color:var(--status-error-red-dark);color:var(--status-error-red-lighter);fill:var(--status-error-red-lighter)}:host([status=\"success\"]){background-color:var(--status-success-green-lighter);color:var(--status-success-green-dark);fill:var(--status-success-green-dark)}:host([status=\"success\"].light){background-color:transparent;color:var(--status-success-green-dark);fill:var(--status-success-green-dark)}:host([status=\"success\"].dark){background-color:var(--status-success-green-dark);color:var(--status-success-green-lighter);fill:var(--status-success-green-lighter)}:host([status=\"default\"]){background-color:var(--myz-blue-lighter);color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}:host([status=\"default\"].light){background-color:transparent;color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}:host([status=\"default\"].dark){background-color:var(--myz-blue-dark);color:var(--myz-blue-lighter);fill:var(--myz-blue-lighter)}:host([status=\"neutral\"]){background-color:var(--bg-grey-050);color:var(--text-grey-800);fill:var(--text-grey-800)}:host([status=\"neutral\"].light){background-color:transparent;color:var(--text-grey-800);fill:var(--text-grey-800)}:host([status=\"neutral\"].dark){background-color:var(--bg-grey-800);color:var(--text-white);fill:var(--text-white)}";

const ZStatusTag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** [optional] Status tag color */
    this.status = StatusTagStatus.default;
    if (!this.icon && !this.text) {
      console.warn("z-status-tag must contain at least one prop between icon and text");
    }
  }
  render() {
    return (h(Host, { class: classnames(this.variant, "body-5-sb", {
        expandable: this.expandable && this.icon && this.text,
      }) }, this.icon && h("z-icon", { name: this.icon }), this.text && h("span", null, this.text)));
  }
};
ZStatusTag.style = stylesCss$6;

const stylesCss$5 = ":host{box-sizing:border-box;position:relative;display:flex;flex-direction:row;width:100%;max-width:100%;margin:0;padding:0;font-family:var(--dashboard-font);font-weight:var(--font-rg);list-style:none}@media only screen and (min-width: 768px){:host{padding:0 calc(var(--space-unit) * 2)}}";

const ZStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("slot", null));
  }
};
ZStepper.style = stylesCss$5;

const stylesCss$4 = ":host{position:relative;width:calc(var(--space-unit) * 5);font-family:var(--dashboard-font);font-weight:var(--font-rg)}:host(:not(:last-child)){flex:1}:host(:not(:last-child))::after{position:absolute;top:calc(var(--space-unit) * 4);left:calc(var(--space-unit) * 3);right:calc(var(--space-unit) * 2);z-index:1;content:'';display:block;width:auto;margin:0 calc(-1 * calc(var(--space-unit) * 2)) 0 calc(var(--space-unit) * 2);border-bottom:solid 2px var(--bg-grey-700)}.stepper-item{display:flex;flex-direction:column;align-items:center;width:calc(var(--space-unit) * 5);padding:0;color:inherit;font-family:inherit;font-size:18px;text-decoration:none;line-height:28px;background:transparent;border:0;outline:0;appearance:none}.stepper-item span{display:none;width:calc(100% + calc(var(--space-unit) * 4));text-align:center}:host(:not([disabled])) .stepper-item{cursor:pointer}:host([disabled]) .stepper-item{pointer-events:none}.indicator{content:counter(stepper);box-sizing:border-box;display:flex;justify-content:center;align-items:center;width:calc(var(--space-unit) * 4);height:calc(var(--space-unit) * 4);margin:calc(var(--space-unit) * 2);font-size:14px;font-weight:var(--font-sb);line-height:1;color:var(--myz-blue);background:var(--bg-white);border:2px solid var(--myz-blue);border-radius:50%}:host([pressed]:not([disabled])) .indicator{color:var(--text-white);background:var(--myz-blue-dark);border-color:var(--myz-blue-dark)}:host(:not([disabled]):focus-within) .indicator{box-shadow:0px 0px 2px 2px var(--accent-dark)}:host([disabled]) .indicator{color:var(--text-grey-700);background:var(--bg-grey-200);border-color:currentColor}@media only screen and (min-width: 768px){:host{width:calc(var(--space-unit) * 10)}:host(:not(:last-child))::after{top:calc(var(--space-unit) * 5);left:calc(var(--space-unit) * 8)}.stepper-item{width:calc(var(--space-unit) * 10)}.stepper-item span{display:block}.indicator{width:calc(var(--space-unit) * 6);height:calc(var(--space-unit) * 6);font-size:16px}}";

const ZStepperItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    if (this.href) {
      return (h("a", { href: !this.disabled && this.href, class: "stepper-item" }, h("div", { class: "indicator" }, this.index), h("span", null, h("slot", null))));
    }
    return (h("button", { class: "stepper-item", disabled: this.disabled }, h("div", { class: "indicator" }, this.index), h("span", null, h("slot", null))));
  }
};
ZStepperItem.style = stylesCss$4;

const stylesCss$3 = "button{font-family:var(--dashboard-font);font-weight:var(--font-sb);height:36px;border:var(--border-size-medium) solid;border-color:transparent;border-radius:var(--border-radius);color:var(--myz-blue);fill:var(--myz-blue);background-color:var(--bg-white);box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.2);text-transform:uppercase;font-size:14px;outline:none;padding-left:0px;padding-right:calc(var(--space-unit) * 2);transition:all 200ms linear;cursor:pointer}button::-moz-focus-inner{border:0}button:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}button:focus{border-color:var(--myz-blue);color:var(--myz-blue);fill:var(--myz-blue);box-shadow:0px 0px 2px 2px var(--accent-dark)}button:active{border-color:var(--myz-blue-light);color:var(--myz-blue-light);fill:var(--myz-blue-light);box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.4)}button:disabled{color:var(--text-grey-700);fill:var(--text-grey-700)}z-icon{display:inline-block;margin:0 var(--space-unit) 0 calc(var(--space-unit) * 2);transform:rotate(360deg);transition:all 200ms linear}button.isopen{top:-20px}button.avoid-clicks{pointer-events:none}";

const ZToggleButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggleClick = createEvent(this, "toggleClick", 7);
    /** disabled status flag (optional) */
    this.isdisabled = false;
    /** open by default (optional) */
    this.opened = false;
  }
  emitToggleClick() {
    if (this.isdisabled)
      return;
    this.opened = !this.opened;
    this.toggleClick.emit(this.opened);
  }
  retrieveButtonClass() {
    let className = this.opened && "isopen";
    if (this.avoidclick)
      className = className + " avoid-clicks";
    return className;
  }
  render() {
    return (h("button", { tabindex: this.avoidclick ? "-1" : "0", class: this.retrieveButtonClass(), disabled: this.isdisabled, onClick: () => this.emitToggleClick() }, h("z-icon", { name: this.opened ? "chevron-down" : "chevron-up", width: 16, height: 16 }), this.label));
  }
};
ZToggleButton.style = stylesCss$3;

const stylesCss$2 = ":host{--z-tooltip-theme--surface:var(--color-surface01);--z-tooltip-theme--text:var(--color-text01);--arrow-size:6px;position:relative;display:none;align-items:center;justify-content:center;padding:var(--space-unit);min-width:calc(var(--space-unit) * 8);min-height:calc(var(--space-unit) * 4);color:var(--z-tooltip-theme--text);fill:currentColor;font-family:var(--font-family-sans);text-align:center;border-radius:var(--border-radius-small);background:var(--z-tooltip-theme--surface);filter:drop-shadow(0 4px 8px var(--shadow-color-base));will-change:filter}:host(.legacy){display:inline-flex;padding:calc(var(--space-unit) * 2);min-width:auto;min-height:auto;max-width:200px;font-style:italic;line-height:16px;letter-spacing:0.32px;font-size:12px;border:var(--border-size-small) solid var(--gray200);border-radius:var(--border-radius);filter:drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.08))}:host(.legacy)::before{--arrow-size:14px}:host([position])::before{--arrow-edge-offset:calc(100% - calc(var(--arrow-size) / 2));--arrow-center-offset:calc(50% - calc(var(--arrow-size) / 2));content:'';position:absolute;width:var(--arrow-size);height:var(--arrow-size);background:inherit;transform:rotate(45deg)}:host([open][style*='top:']),:host([open][style*='inset:']){display:inline-flex}:host([position^='top']){margin-bottom:var(--space-unit)}:host([position='right']){margin-left:var(--space-unit)}:host([position$='_right']){margin-left:calc(var(--space-unit) * -1)}:host([position^='bottom']){margin-top:var(--space-unit)}:host([position='left']){margin-right:var(--space-unit)}:host([position$='_left']){margin-right:calc(var(--space-unit) * -1)}:host([position^='top'])::before{top:var(--arrow-edge-offset)}:host([position^='bottom'])::before{bottom:var(--arrow-edge-offset)}:host([position='top'])::before,:host([position='bottom'])::before{left:var(--arrow-center-offset)}:host([position='right'])::before,:host([position='left'])::before{top:var(--arrow-center-offset)}:host([position='right'])::before{right:var(--arrow-edge-offset)}:host([position$='_right'])::before{right:calc(100% - calc(var(--arrow-size) / 2) - calc(var(--space-unit) * 2))}:host([position='left'])::before{left:var(--arrow-edge-offset)}:host([position$='_left'])::before{left:calc(100% - calc(var(--arrow-size) / 2) - calc(var(--space-unit) * 2))}::slotted(*){flex:1 auto;overflow:auto}";

/**
 * Calculate computed offset.
 * It includes matrix transformations.
 * @param element The target element.
 * @param targetParentOffset The relative offset parent.
 * @return A client rect object.
 */
function computeOffset(element, targetParentOffset) {
  const rect = element.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  let top = 0;
  let left = 0;
  let offsetParent = element;
  while (offsetParent && offsetParent != targetParentOffset) {
    left += offsetParent.offsetLeft;
    // document.body sometimes has offsetTop == 0 but still has an
    // offset because of children margins!
    if (offsetParent === document.body) {
      top += offsetParent.getBoundingClientRect().top + window.scrollY;
    }
    else {
      top += offsetParent.offsetTop;
    }
    if (!offsetParent.offsetParent) {
      break;
    }
    offsetParent = offsetParent.offsetParent;
  }
  let parentWidth;
  let parentHeight;
  if (offsetParent === document.body) {
    parentWidth = window.innerWidth;
    parentHeight = window.innerHeight;
  }
  else {
    parentWidth = offsetParent.offsetWidth;
    parentHeight = offsetParent.offsetHeight;
  }
  const right = parentWidth - left;
  const bottom = parentHeight - top;
  return { top, right, bottom, left, width, height };
}
const ZTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.positionChange = createEvent(this, "positionChange", 7);
    /** Tooltip position. */
    this.type = TooltipPosition.AUTO;
    /**
     * The open state of the tooltip.
     */
    this.open = false;
  }
  validateType(newValue) {
    if (newValue &&
      Object
        .values(TooltipPosition)
        .every((position) => newValue !== position)) {
      this.type = TooltipPosition.AUTO;
    }
  }
  onPositionChange() {
    this.positionChange.emit({ position: this.position });
  }
  /**
   * Setup tooltip behaviors on opening.
   */
  onOpen() {
    if (this.content) {
      return;
    }
    if (this.open) {
      const setPosition = () => {
        if (this.open) {
          this.setPosition();
          requestAnimationFrame(setPosition);
        }
      };
      setPosition();
    }
    else {
      const style = this.host.style;
      style.removeProperty("top");
      style.removeProperty("right");
      style.removeProperty("bottom");
      style.removeProperty("left");
    }
  }
  /**
   * Set the position of the tooltip.
   */
  setPosition() {
    let element;
    if (typeof this.bindTo === "string") {
      element = this.host.ownerDocument.querySelector(this.bindTo);
    }
    else if (this.bindTo) {
      element = this.bindTo;
    }
    else {
      element = this.host.parentElement;
    }
    if (!element) {
      return;
    }
    let position = this.type;
    const boundingRect = computeOffset(element, this.host.offsetParent);
    if (position === TooltipPosition.AUTO) {
      /**
       * The `AUTO` position tries to place the tooltip in the "safest" area,
       * where there's more space available.
       */
      const positions = [];
      if ((boundingRect.top + boundingRect.height) / window.innerHeight > 0.9) {
        positions.unshift(TooltipPosition.TOP);
      }
      else if ((boundingRect.top + boundingRect.height) / window.innerHeight > 0.6) {
        positions.push(TooltipPosition.TOP);
      }
      else if ((boundingRect.top + boundingRect.height) / window.innerHeight < 0.1) {
        positions.unshift(TooltipPosition.BOTTOM);
      }
      else {
        positions.push(TooltipPosition.BOTTOM);
      }
      if ((boundingRect.left + boundingRect.width) / window.innerWidth > 0.6) {
        positions.push(TooltipPosition.LEFT);
      }
      else if ((boundingRect.left + boundingRect.width) / window.innerWidth < 0.4) {
        positions.push(TooltipPosition.RIGHT);
      }
      position = positions.join("_");
    }
    const style = this.host.style;
    if (!this.content) {
      style.position = "absolute";
    }
    if (position === TooltipPosition.TOP ||
      position === TooltipPosition.TOP_RIGHT ||
      position === TooltipPosition.TOP_LEFT) {
      style.top = "auto";
      style.bottom = `${boundingRect.bottom}px`;
    }
    if (position === TooltipPosition.BOTTOM ||
      position === TooltipPosition.BOTTOM_RIGHT ||
      position === TooltipPosition.BOTTOM_LEFT) {
      style.top = `${boundingRect.top + boundingRect.height}px`;
      style.bottom = "auto";
    }
    if (position === TooltipPosition.TOP ||
      position === TooltipPosition.BOTTOM) {
      style.left = `${boundingRect.left +
        (boundingRect.width / 2) -
        (this.host.clientWidth / 2)}px`;
    }
    if (position === TooltipPosition.TOP_RIGHT ||
      position === TooltipPosition.BOTTOM_RIGHT) {
      style.right = "auto";
      style.left = `${boundingRect.left + boundingRect.width - 16}px`;
    }
    if (position === TooltipPosition.TOP_LEFT ||
      position === TooltipPosition.BOTTOM_LEFT) {
      style.left = "auto";
      style.right = `${boundingRect.right - 16}px`;
    }
    if (position === TooltipPosition.RIGHT ||
      position === TooltipPosition.LEFT) {
      style.top = `${boundingRect.top +
        (boundingRect.height / 2) -
        (this.host.clientHeight / 2)}px`;
      style.bottom = "auto";
    }
    if (position === TooltipPosition.RIGHT) {
      style.right = "auto";
      style.left = `${boundingRect.left + boundingRect.width}px`;
    }
    if (position === TooltipPosition.LEFT) {
      style.left = "auto";
      style.right = `${boundingRect.right}px`;
    }
    this.position = position;
  }
  componentWillLoad() {
    // Keep backward compatibility
    if (this.content) {
      this.open = true;
    }
    this.validateType(this.type);
    this.onOpen();
  }
  render() {
    if (this.content) {
      return (h(Host, { class: "legacy", position: this.type }, this.content));
    }
    return (h(Host, { position: this.position }, h("slot", null)));
  }
  get host() { return getElement(this); }
  static get watchers() { return {
    "type": ["validateType"],
    "position": ["onPositionChange"],
    "open": ["onOpen"]
  }; }
};
ZTooltip.style = stylesCss$2;

const stylesCss$1 = ":host>*{font-family:var(--dashboard-font);margin:0}:host(.regular)>*{font-weight:var(--font-rg)}:host(.semibold)>*{font-weight:600}:host(.light)>*{font-weight:300}:host(.h1)>*{font-size:32px;line-height:40px}:host(.h2)>*{font-size:28px;line-height:36px}:host(.h3)>*{font-size:24px;line-height:32px}:host(.h4)>*{font-size:20px;line-height:28px}:host(.b1)>*{font-size:20px;line-height:28px}:host(.b2)>*{font-size:18px;line-height:28px}:host(.b3)>*{font-size:16px;line-height:24px}:host(.b4)>*{font-size:14px;line-height:20px}:host(.b5)>*{font-size:12px;line-height:16px}";

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
ZTypography.style = stylesCss$1;

const stylesCss = ":host{font-family:var(--dashboard-font);font-weight:var(--font-rg)}z-link{font-weight:var(--font-sb);font-size:calc(var(--space-unit) * 1.5);padding:6px}button{cursor:pointer;display:flex;margin:0;background:var(--bg-grey-900);border:none;padding:0;font-size:calc(var(--space-unit) * 2);padding:6px}button>z-icon{padding:0 2px;fill:var(--bg-white)}button>span{padding:0 6px;color:var(--text-white);font-weight:var(--font-sb);line-height:19px}button.light{background:var(--bg-white)}button.light>z-icon{fill:var(--bg-grey-900)}button.light>span{color:var(--bg-grey-900)}button>.userfullname{display:none}ul{position:absolute;left:0;padding:var(--space-unit)  0 0 0;width:100%;margin:0;background:var(--bg-grey-900)}ul.light{background:var(--bg-white)}ul>li{display:flex;justify-content:flex-end;padding:var(--space-unit);margin:0 var(--space-unit);border-bottom:var(--border-base) solid var(--bg-grey-700)}ul>li:first-child{border-top:var(--border-base) solid var(--bg-grey-700)}ul>li:last-child{border-bottom:none}@media only screen and (min-width: 768px){:host{height:calc(var(--space-unit) * 4)}:host>div{position:relative}:host>div>div{padding:0}:host>div>div.open{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:flex-end;align-content:stretch;width:min-content;position:absolute;right:0;box-shadow:0px 2px calc(var(--space-unit) * .5) 0px rgba(0, 0, 0, 0.5);background:var(--bg-white);border-radius:calc(var(--space-unit) * .5);padding:calc(var(--space-unit) * .5) 0;transform:translate(0, -4px)}button{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-end;align-items:end;align-content:center;padding:6px var(--space-unit);max-width:200px}button>span{padding:0 var(--space-unit)}button.open{background-color:var(--bg-white);border-top:var(--border-size-small) solid var(--bg-white);border-top-left-radius:calc(var(--space-unit) * .5);border-top-right-radius:calc(var(--space-unit) * .5);max-width:initial}button>.userfullname{display:initial;white-space:nowrap;overflow:hidden;max-width:250px;text-overflow:ellipsis}button.open>z-icon{fill:var(--gray900)}button.open>span{color:var(--gray900)}ul{position:initial;left:initial;padding:0;margin-top:0;width:100%;background-color:var(--bg-white);border-bottom:var(--border-size-small) solid var(--bg-white);border-bottom-left-radius:var(--border-radius-base);border-bottom-right-radius:var(--border-radius-base)}ul>li{color:var(--gray900);border-bottom:var(--border-base) solid rgb(202, 204, 206);padding:calc(var(--space-unit) * .5) var(--space-unit)}ul>li>*{width:max-content}ul>li:first-child{border-top:none}ul>li:last-child{border-bottom:none}}@media only screen and (min-width: 1152px){button{max-width:initial}}";

const ZUserDropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.userButtonClick = createEvent(this, "userButtonClick", 7);
    this.dropdownMenuLinkClick = createEvent(this, "dropdownMenuLinkClick", 7);
    /** theme variant, default 'dark' */
    this.theme = ThemeVariant.dark;
    this.ismenuopen = false;
    this.handleToggle = this.handleToggle.bind(this);
  }
  componentWillLoad() {
    this.setMobileAndGhostDivWidth();
  }
  componentDidLoad() {
    this.setMobileAndGhostDivWidth();
  }
  componentWillUpdate() {
    this.setMobileAndGhostDivWidth();
  }
  componentWillRender() {
    this.linkarray =
      typeof this.menucontent === "string"
        ? JSON.parse(this.menucontent)
        : this.menucontent;
  }
  setMobileAndGhostDivWidth() {
    var _a;
    this.isMobile =
      window.screen.width <= mobileBreakpoint ||
        window.innerWidth <= mobileBreakpoint;
    if (this.gosthDiv)
      this.gosthDiv.style.width =
        this.logged && (!this.isMobile && this.ismenuopen)
          ? `${(_a = this.userButton) === null || _a === void 0 ? void 0 : _a.offsetWidth}px`
          : "";
  }
  emitUserButtonClick() {
    this.userButtonClick.emit(this.ismenuopen);
  }
  emitDropdownMenuLinkClick(e) {
    this.dropdownMenuLinkClick.emit(e.detail.linkId);
  }
  handleResize() {
    this.isMobile = window.innerWidth <= mobileBreakpoint;
  }
  handleOrientationChange() {
    this.isMobile = screen.width <= mobileBreakpoint;
  }
  handleClickOutside(e) {
    if (e.target.nodeName !== "Z-USER-DROPDOWN") {
      this.ismenuopen = false;
    }
  }
  handleToggle() {
    this.ismenuopen = !this.ismenuopen;
    this.emitUserButtonClick();
  }
  handleDropdownLinkClick(e) {
    this.emitDropdownMenuLinkClick(e);
  }
  renderCaretIcon() {
    const direction = this.ismenuopen ? "up" : "down";
    return (h("z-icon", { name: `caret-${direction}-filled`, height: 18, width: 18 }));
  }
  renderGuestButton() {
    return (h("z-link", { onClick: () => this.emitUserButtonClick(), big: true, icon: "enter", textcolor: this.theme === ThemeVariant.light ? "black" : "white" }, "Entra"));
  }
  renderLoggedButton() {
    return (h("button", { ref: (el) => (this.userButton = el), title: this.userfullname, class: `${this.ismenuopen ? "open" : ""} ${this.theme}`, onClick: () => this.handleToggle() }, h("z-icon", { name: "user-avatar-filled", height: 18, width: 18 }), h("span", { class: "userfullname" }, this.userfullname), this.renderCaretIcon()));
  }
  retrieveLiTextColor() {
    if (this.theme === ThemeVariant.light)
      return "black";
    return this.isMobile ? "white" : "black";
  }
  renderGhostDiv() {
    return h("div", { ref: (el) => (this.gosthDiv = el) });
  }
  renderDropdownMenu() {
    return (this.ismenuopen && (h("ul", { class: this.theme }, this.linkarray.map((link) => {
      return (h("li", { id: link.id }, h("z-link", { textcolor: this.retrieveLiTextColor(), big: true, href: link.link, htmlid: link.id, target: link.target, icon: link.icon, onZLinkClick: (e) => this.handleDropdownLinkClick(e) }, link.label)));
    }))));
  }
  render() {
    return (h("div", null, this.logged && !this.isMobile && this.renderGhostDiv(), h("div", { class: `${this.logged && this.ismenuopen ? "open" : ""}` }, this.logged ? this.renderLoggedButton() : this.renderGuestButton(), this.logged && this.renderDropdownMenu())));
  }
};
ZUserDropdown.style = stylesCss;

export { ZAlert as z_alert, ZAppSwitcher as z_app_switcher, ZAppTopbar as z_app_topbar, ZAvatar as z_avatar, ZBody as z_body, ZButton as z_button, ZButtonFilter as z_button_filter, ZButtonSort as z_button_sort, ZCard as z_card, ZChip as z_chip, ZCombobox as z_combobox, ZDivider as z_divider, ZFooter as z_footer, ZFooterLink as z_footer_link, ZFooterSection as z_footer_section, ZFooterSocial as z_footer_social, ZIcon as z_icon, ZIconPackage as z_icon_package, ZInfoBox as z_info_box, ZInput as z_input, ZInputLabel as z_input_label, ZInputMessage as z_input_message, ZLink as z_link, ZList as z_list, ZListElement as z_list_element, ZListGroup as z_list_group, ZLogo as z_logo, ZMenu as z_menu, ZMenuDropdown as z_menu_dropdown, ZMenuSection as z_menu_section, ZMyzCardComponent as z_myz_card, ZMyzCardAlert as z_myz_card_alert, ZMyzCardBody as z_myz_card_body, ZMyzCardCover as z_myz_card_cover, ZMyzCardFooter as z_myz_card_footer, ZMyzCardHeader as z_myz_card_header, ZMyzCardIcon as z_myz_card_icon, ZMyzCardList as z_myz_card_list, ZMyzList as z_myz_list, ZMyzListItem as z_myz_list_item, ZNotification as z_notification, ZPaginationBar as z_pagination_bar, ZPaginationPage as z_pagination_page, ZPanelElem as z_panel_elem, ZPopover as z_popover, ZRegistroTable as z_registro_table, ZRegistroTableBody as z_registro_table_body, ZRegistroTableCell as z_registro_table_cell, ZRegistroTableEmptyBox as z_registro_table_empty_box, ZRegistroTableExpandedRow as z_registro_table_expanded_row, ZRegistroTableHead as z_registro_table_head, ZRegistroTableHeader as z_registro_table_header, ZRegistroTableHeaderRow as z_registro_table_header_row, ZRegistroTableRow as z_registro_table_row, ZRegistroTableStickyFooter as z_registro_table_sticky_footer, ZSelect as z_select, ZStatusTag as z_status_tag, ZStepper as z_stepper, ZStepperItem as z_stepper_item, ZToggleButton as z_toggle_button, ZTooltip as z_tooltip, ZTypography as z_typography, ZUserDropdown as z_user_dropdown };
