'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dee3e21d.js');

const stylesCss = "button{position:relative;z-index:0;display:flex;align-items:center;justify-content:center;width:100%;margin:0;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);background-color:unset;text-align:center;font-size:inherit;font-family:var(--font-family-sans);line-height:inherit;letter-spacing:inherit;white-space:nowrap;color:var(--color-primary01);fill:currentColor;border:none;border-radius:var(--border-no-radius);outline:none;cursor:pointer}*::before,*::after{box-sizing:border-box}:host(:hover:not([disabled])) button,:host([selected]) button{color:var(--color-hover-secondary);fill:currentColor}:host(:hover:not([disabled])) button::after,:host([selected]) button::after{content:'';position:absolute;background-color:var(--color-hover-secondary)}:host([orientation='horizontal']:not([disabled]):hover) button::after,:host([orientation='horizontal'][selected]) button::after{bottom:0;left:0;width:100%;height:var(--border-size-large)}:host([orientation='horizontal']) ::slotted(z-icon){margin-right:var(--space-unit)}:host(:hover:not([disabled])) button{background-color:var(--color-background)}button:focus:focus-visible{box-shadow:var(--shadow-focus-primary)}:host([disabled]) button{pointer-events:all;cursor:not-allowed;color:var(--gray500);fill:currentColor}:host([size='small']) button{font-size:var(--font-size-2);line-height:1.4;letter-spacing:0.16px}:host([size='small'][orientation='horizontal']) button{padding:var(--space-unit) calc(var(--space-unit) * 2)}:host([size='small'][orientation='horizontal']:not([disabled]):hover) button::after,:host([size='small'][orientation='horizontal'][selected]) button::after{height:var(--border-size-medium)}:host([size='small']:not([orientation='vertical'])) ::slotted(z-icon){--z-icon-width:14px;--z-icon-height:14px}:host([orientation='vertical']) button{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2)}:host([orientation='vertical']:hover:not([disabled])) button::after,:host([orientation='vertical'][selected]) button::after{width:var(--border-size-large);height:100%;top:0;right:0}:host([orientation='vertical']) ::slotted([slot='label']){display:none}::slotted(z-icon){--z-icon-width:calc(var(--space-unit) * 2);--z-icon-height:calc(var(--space-unit) * 2);margin:0}";

const ZNavigationTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.emitSelected = index.createEvent(this, "selected", 7);
    this.selected = false;
    this.disabled = false;
    this.orientation = 'horizontal';
    this.size = 'big';
  }
  onFocus() {
    this.host.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }
  onClick() {
    if (!this.disabled) {
      this.selected = true;
    }
  }
  onSelected() {
    if (this.selected) {
      this.emitSelected.emit();
    }
  }
  render() {
    return (index.h("button", { disabled: this.disabled, role: "tab" }, index.h("slot", { name: "icon" }), this.orientation === "horizontal" && index.h("slot", { name: "label" })));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "selected": ["onSelected"]
  }; }
};
ZNavigationTab.style = stylesCss;

exports.z_navigation_tab = ZNavigationTab;
