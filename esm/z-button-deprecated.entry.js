import { r as registerInstance, h, g as getElement } from './index-a2ca4b97.js';
import { b as ButtonType, B as ButtonVariant, c as ButtonSize } from './index-9d028352.js';

const stylesCss = ":host{display:inline-block;--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:var(--space-unit);--rgb-white:240, 240, 240}button:disabled,::slotted(button:disabled){pointer-events:none}button,::slotted(button),::slotted(a){display:inline-flex;width:100%;box-sizing:border-box;flex-direction:row;align-items:center;justify-content:center;border-width:var(--border-size-medium);border-style:solid;border-radius:var(--border-radius);cursor:pointer;fill:currentcolor;font-family:var(--dashboard-font);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.3px;line-height:1;outline:none;text-decoration:none;text-transform:uppercase;vertical-align:middle;white-space:nowrap}button.big,:host([size=\"big\"]) ::slotted(button),:host([size=\"big\"]) ::slotted(a){min-width:44px;height:44px}button.small,:host([size=\"small\"]) ::slotted(button),:host([size=\"small\"]) ::slotted(a){min-width:36px;height:36px}button.issmall,:host([issmall]) ::slotted(button),:host([issmall]) ::slotted(a){min-width:36px;height:36px}button.x-small,:host([size=\"x-small\"]) ::slotted(button),:host([size=\"x-small\"]) ::slotted(a){min-width:32px;height:32px}button:not(.square),:host(:not([square])) ::slotted(button),:host(:not([square])) ::slotted(a){min-width:calc(var(--space-unit) * 8);padding:0 calc(var(--space-unit) * 2)}button.square,:host([square]){--z-icon-right-margin:0}button.primary,:host([variant=\"primary\"]) ::slotted(button),:host([variant=\"primary\"]) ::slotted(a){border-color:var(--color-primary01);background-color:var(--color-primary01);color:var(--color-text-inverse)}@media (hover: hover){button.primary:hover,:host([variant=\"primary\"]) ::slotted(button:hover),:host([variant=\"primary\"]) ::slotted(a:hover){border-color:var(--color-hover-primary);background-color:var(--color-hover-primary);color:var(--color-text-inverse)}}button:focus:focus-visible,::slotted(button:focus:focus-visible),::slotted(a:focus:focus-visible){box-shadow:var(--shadow-focus-primary)}button.primary:active,:host([variant=\"primary\"]) ::slotted(button:active),:host([variant=\"primary\"]) ::slotted(a:active){border-color:var(--color-pressed-primary);background-color:var(--color-pressed-primary);box-shadow:var(--shadow-2);color:var(--color-text-inverse)}button.primary:disabled,:host([variant=\"primary\"]) ::slotted(button:disabled){border-color:var(--color-disabled01);background-color:var(--color-disabled01);color:var(--color-disabled02)}button.secondary,:host([variant=\"secondary\"]) ::slotted(button),:host([variant=\"secondary\"]) ::slotted(a){border-color:var(--color-primary01);background-color:var(--color-surface01);color:var(--color-primary01)}@media (hover: hover){button.secondary:hover,:host([variant=\"secondary\"]) ::slotted(button:hover),:host([variant=\"secondary\"]) ::slotted(a:hover){border-color:var(--color-hover-primary);background-color:var(--color-surface01);color:var(--color-hover-primary)}}button.secondary:active,:host([variant=\"secondary\"]) ::slotted(button:active),:host([variant=\"secondary\"]) ::slotted(a:active){border-color:var(--color-pressed-primary);background-color:var(--color-surface01);box-shadow:var(--shadow-2);color:var(--color-pressed-primary)}button.secondary:disabled,:host([variant=\"secondary\"]) ::slotted(button:disabled){border-color:var(--color-disabled01);background-color:var(--color-surface01);color:var(--color-disabled02)}button.tertiary,:host([variant=\"tertiary\"]) ::slotted(button),:host([variant=\"tertiary\"]) ::slotted(a){border-color:transparent;background-color:transparent;color:var(--color-primary01)}button.tertiary.has-content{padding:0 var(--space-unit)}@media (hover: hover){button.tertiary:hover,:host([variant=\"tertiary\"]) ::slotted(button:hover),:host([variant=\"tertiary\"]) ::slotted(a:hover){border-color:var(--color-primary03);background-color:var(--color-primary03);color:var(--color-hover-primary)}}button.tertiary:focus:focus-visible,:host([variant=\"tertiary\"]) ::slotted(button:focus:focus-visible),:host([variant=\"tertiary\"]) ::slotted(a:focus:focus-visible){border-color:var(--color-surface01);background-color:var(--color-surface01);color:var(--color-primary01)}button.tertiary:active,:host([variant=\"tertiary\"]) ::slotted(button:active),:host([variant=\"tertiary\"]) ::slotted(a:active){border-color:var(--color-surface01);background-color:var(--color-surface01);box-shadow:var(--shadow-2);color:var(--color-primary01)}button.tertiary:disabled,:host([variant=\"tertiary\"]) ::slotted(button:disabled){border-color:transparent;background-color:transparent;color:var(--color-disabled02)}button.dark-bg,:host([variant=\"dark-bg\"]) ::slotted(button),:host([variant=\"dark-bg\"]) ::slotted(a){border-color:transparent;background-color:rgb(var(--rgb-white) 0.2);color:var(--color-text04)}button.dark-bg.has-content{padding:0 var(--space-unit)}@media (hover: hover){button.dark-bg:hover,:host([variant=\"dark-bg\"]) ::slotted(button:hover),:host([variant=\"dark-bg\"]) ::slotted(a:hover){background-color:rgb(var(--rgb-white) 0.1)}}button.dark-bg:active,:host([variant=\"dark-bg\"]) ::slotted(button:active),:host([variant=\"dark-bg\"]) ::slotted(a:active){background-color:rgb(var(--rgb-white) 0.3)}button.dark-bg:disabled,:host([variant=\"dark-bg\"]) ::slotted(button:disabled){background-color:rgb(var(--rgb-white) 0.05);color:var(--color-disabled03)}";

const ZButtonDeprecated = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** HTML button disabled attribute. */
    this.disabled = false;
    /** HTML button type attribute. */
    this.type = ButtonType.BUTTON;
    /** Graphical variant: `primary`, `secondary`, `tertiary`, `dark-bg`. Defaults to `primary`. */
    this.variant = ButtonVariant.PRIMARY;
    /** Available sizes: `big`, `small` and `x-small`. Defaults to `big`. */
    this.size = ButtonSize.BIG;
    /** Reduce button size (deprecated).
     * @deprecated Use `size` prop.
     */
    this.issmall = false;
    /** Spy to render square button. */
    this.square = false;
  }
  render() {
    this.hostElement.style.pointerEvents = this.disabled ? "none" : "auto";
    return (h("slot", { name: "element" }, h("button", { id: this.htmlid, name: this.name, type: this.type, disabled: this.disabled, class: {
        [this.variant]: true,
        [this.size]: true,
        issmall: this.issmall,
        square: this.square,
      } }, this.icon && (h("z-icon", { name: this.icon, width: 16, height: 16 })), h("slot", null))));
  }
  get hostElement() { return getElement(this); }
};
ZButtonDeprecated.style = stylesCss;

export { ZButtonDeprecated as z_button_deprecated };
