'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-5c16dc2b.js');

const stylesCss = ".sc-z-button-h{display:inline-block;--z-icon-width:16px;--z-icon-height:16px;--z-icon-right-margin:0}[disabled].sc-z-button-h:not([disabled=\"false\"]){pointer-events:none}.sc-z-button-h .container.sc-z-button{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;width:100%;padding:0;font-family:var(--font-family-sans);font-weight:var(--font-sb);font-size:14px;line-height:1;letter-spacing:0.3px;border-width:var(--border-size-medium);border-style:solid;border-radius:var(--border-radius);text-transform:uppercase;text-decoration:none;cursor:pointer;white-space:nowrap;outline:none;fill:currentColor}.sc-z-button-h .container.has-text.sc-z-button{min-width:calc(var(--space-unit) * 8);padding:0 calc(var(--space-unit) * 2)}.sc-z-button-h .container.has-text.sc-z-button z-icon.sc-z-button{--z-icon-right-margin:var(--space-unit)}.sc-z-button-h .big.sc-z-button{height:44px;min-width:44px}.sc-z-button-h .small.sc-z-button{height:36px;min-width:36px}.sc-z-button-h .x-small.sc-z-button{height:32px;min-width:32px}.sc-z-button-h .primary.sc-z-button{background-color:var(--color-primary01);border-color:var(--color-primary01);color:var(--color-text-inverse)}@media (hover: hover){.sc-z-button-h .primary.sc-z-button:hover{background-color:var(--color-hover-primary);border-color:var(--color-hover-primary);color:var(--color-text-inverse)}}.sc-z-button-h .container.sc-z-button:focus:focus-visible{box-shadow:var(--shadow-focus-primary)}.sc-z-button-h .primary.sc-z-button:active{background-color:var(--color-pressed-primary);border-color:var(--color-pressed-primary);color:var(--color-text-inverse);box-shadow:var(--shadow-2)}[disabled].sc-z-button-h:not([disabled=\"false\"]) .primary.sc-z-button{background-color:var(--color-disabled01);border-color:var(--color-disabled01);color:var(--color-disabled02)}.sc-z-button-h .secondary.sc-z-button{background-color:var(--color-surface01);border-color:var(--color-primary01);color:var(--color-primary01)}@media (hover: hover){.sc-z-button-h .secondary.sc-z-button:hover{background-color:var(--color-surface01);border-color:var(--color-hover-primary);color:var(--color-hover-primary)}}.sc-z-button-h .secondary.sc-z-button:active{background-color:var(--color-surface01);border-color:var(--color-pressed-primary);color:var(--color-pressed-primary);box-shadow:var(--shadow-2)}[disabled].sc-z-button-h:not([disabled=\"false\"]) .secondary.sc-z-button{background-color:var(--color-surface01);border-color:var(--color-disabled01);color:var(--color-disabled02)}.sc-z-button-h .tertiary.sc-z-button{background-color:transparent;border-color:transparent;color:var(--color-primary01)}@media (hover: hover){.sc-z-button-h .tertiary.sc-z-button:hover{background-color:var(--color-primary03);border-color:var(--color-primary03);color:var(--color-hover-primary)}}.sc-z-button-h .tertiary.sc-z-button:focus:focus-visible{background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01)}.sc-z-button-h .tertiary.sc-z-button:active{background-color:var(--color-surface01);border-color:var(--color-surface01);color:var(--color-primary01);box-shadow:var(--shadow-2)}[disabled].sc-z-button-h:not([disabled=\"false\"]) .tertiary.sc-z-button{background-color:transparent;border-color:transparent;color:var(--color-disabled02)}";

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
      "aria-label": this.ariaLabel,
      class: {
        container: true,
        [this.variant]: true,
        [this.size]: true,
        "has-text": !!this.hostElement.textContent
      }
    };
  }
  render() {
    if (this.href) {
      return (index.h("a", Object.assign({}, this.getAttributes(), { href: this.href, target: this.target }), this.icon && index.h("z-icon", { name: this.icon, width: 16, height: 16 }), index.h("slot", null)));
    }
    return (index.h("button", Object.assign({}, this.getAttributes(), { name: this.name, type: this.type, disabled: this.disabled }), this.icon && index.h("z-icon", { name: this.icon, width: 16, height: 16 }), index.h("slot", null)));
  }
  get hostElement() { return index.getElement(this); }
};
ZButton.style = stylesCss;

exports.z_button = ZButton;
