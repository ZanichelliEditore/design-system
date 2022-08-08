'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$2 = require('./index-1fda0714.js');
const index$1 = require('./index-5c16dc2b.js');
require('./_commonjsHelpers-537d719a.js');

const stylesCss = ":host{display:inline-block;--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:var(--space-unit);--rgb-white:240, 240, 240}button:disabled,::slotted(button:disabled){pointer-events:none}button,::slotted(button),::slotted(a){box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;width:100%;font-family:var(--dashboard-font);font-weight:var(--font-sb);font-size:14px;line-height:1;letter-spacing:0.3px;border-width:var(--border-size-medium);border-style:solid;border-radius:var(--border-radius);vertical-align:middle;text-transform:uppercase;text-decoration:none;cursor:pointer;white-space:nowrap;outline:none;fill:currentColor}button.big,:host([size=\"big\"]) ::slotted(button),:host([size=\"big\"]) ::slotted(a){height:44px;min-width:44px}button.small,:host([size=\"small\"]) ::slotted(button),:host([size=\"small\"]) ::slotted(a){height:36px;min-width:36px}button.issmall,:host([issmall]) ::slotted(button),:host([issmall]) ::slotted(a){height:36px;min-width:36px}button.x-small,:host([size=\"x-small\"]) ::slotted(button),:host([size=\"x-small\"]) ::slotted(a){height:32px;min-width:32px}button:not(.square),:host(:not([square])) ::slotted(button),:host(:not([square])) ::slotted(a){min-width:calc(var(--space-unit) * 8);padding:0 calc(var(--space-unit) * 2)}button.square,:host([square]){--z-icon-right-margin:0}button.primary,:host([variant=\"primary\"]) ::slotted(button),:host([variant=\"primary\"]) ::slotted(a){background-color:var(--color-primary01);border-color:var(--color-primary01);color:var(--color-text-inverse)}@media (hover: hover){button.primary:hover,:host([variant=\"primary\"]) ::slotted(button:hover),:host([variant=\"primary\"]) ::slotted(a:hover){background-color:var(--color-hover-primary);border-color:var(--color-hover-primary);color:var(--color-text-inverse)}}button:focus:focus-visible,::slotted(button:focus:focus-visible),::slotted(a:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}button.primary:active,:host([variant=\"primary\"]) ::slotted(button:active),:host([variant=\"primary\"]) ::slotted(a:active){background-color:var(--color-pressed-primary);border-color:var(--color-pressed-primary);color:var(--color-text-inverse);box-shadow:var(--shadow-2)}button.primary:disabled,:host([variant=\"primary\"]) ::slotted(button:disabled){background-color:var(--color-disabled01);border-color:var(--color-disabled01);color:var(--color-disabled02)}button.secondary,:host([variant=\"secondary\"]) ::slotted(button),:host([variant=\"secondary\"]) ::slotted(a){background-color:var(--color-surface01);border-color:var(--color-primary01);color:var(--color-primary01)}@media (hover: hover){button.secondary:hover,:host([variant=\"secondary\"]) ::slotted(button:hover),:host([variant=\"secondary\"]) ::slotted(a:hover){background-color:var(--color-surface01);border-color:var(--color-hover-primary);color:var(--color-hover-primary)}}button.secondary:active,:host([variant=\"secondary\"]) ::slotted(button:active),:host([variant=\"secondary\"]) ::slotted(a:active){background-color:var(--color-surface01);border-color:var(--color-pressed-primary);color:var(--color-pressed-primary);box-shadow:var(--shadow-2)}button.secondary:disabled,:host([variant=\"secondary\"]) ::slotted(button:disabled){background-color:var(--color-surface01);border-color:var(--color-disabled01);color:var(--color-disabled02)}button.tertiary,:host([variant=\"tertiary\"]) ::slotted(button),:host([variant=\"tertiary\"]) ::slotted(a){background-color:transparent;border-color:transparent;color:var(--color-primary01)}button.tertiary.hasContent{padding:0 var(--space-unit)}@media (hover: hover){button.tertiary:hover,:host([variant=\"tertiary\"]) ::slotted(button:hover),:host([variant=\"tertiary\"]) ::slotted(a:hover){background-color:var(--color-primary03);border-color:var(--color-primary03);color:var(--color-hover-primary)}}button.tertiary:focus:focus-visible,:host([variant=\"tertiary\"]) ::slotted(button:focus:focus-visible),:host([variant=\"tertiary\"]) ::slotted(a:focus:focus-visible){background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01)}button.tertiary:active,:host([variant=\"tertiary\"]) ::slotted(button:active),:host([variant=\"tertiary\"]) ::slotted(a:active){background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01);box-shadow:var(--shadow-2)}button.tertiary:disabled,:host([variant=\"tertiary\"]) ::slotted(button:disabled){background-color:transparent;border-color:transparent;color:var(--color-disabled02)}button.dark-bg,:host([variant=\"dark-bg\"]) ::slotted(button),:host([variant=\"dark-bg\"]) ::slotted(a){background-color:rgba(var(--rgb-white), 0.2);border-color:transparent;color:var(--color-text04)}button.dark-bg.hasContent{padding:0 var(--space-unit)}@media (hover: hover){button.dark-bg:hover,:host([variant=\"dark-bg\"]) ::slotted(button:hover),:host([variant=\"dark-bg\"]) ::slotted(a:hover){background-color:rgba(var(--rgb-white), 0.1)}}button.dark-bg:active,:host([variant=\"dark-bg\"]) ::slotted(button:active),:host([variant=\"dark-bg\"]) ::slotted(a:active){background-color:rgba(var(--rgb-white), 0.3)}button.dark-bg:disabled,:host([variant=\"dark-bg\"]) ::slotted(button:disabled){color:var(--color-disabled03);background-color:rgba(var(--rgb-white), 0.05)}";

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
ZButtonDeprecated.style = stylesCss;

exports.z_button_deprecated = ZButtonDeprecated;
