import { r as registerInstance, c as createEvent, h, g as getElement } from './index-3f358781.js';

const stylesCss = ":host button{position:relative;z-index:0;display:flex;font-size:16px;letter-spacing:0;line-height:24px;background-color:unset;align-items:center;justify-content:center;padding:calc(var(--space-unit) * 2) calc(var(--space-unit) * 5);margin:0;text-align:center;font-family:var(--dashboard-font);color:var(--blue500);fill:var(--blue500);border-style:solid;border-color:transparent;border-width:0 0 var(--border-size-large) 0;outline:none;cursor:pointer}:host(:hover:not([disabled])) button,:host([selected]) button{color:var(--blue800);fill:var(--blue800);border-color:var(--blue800)}:host(:hover:not([disabled])) button{background-color:var(--gray50)}:host button:focus:not([disabled]){color:var(--blue500);fill:var(--blue500);border:0px;box-shadow:0 0 2px 2px var(--blue100)}:host([disabled]) button{pointer-events:all;cursor:not-allowed;color:var(--gray700);fill:var(--gray700)}:host([orientation='vertical']) button{padding:calc(var(--space-unit) * 3) calc(var(--space-unit) * 2);border-width:0 var(--border-size-large) 0 0}:host([orientation='vertical']) ::slotted([slot='label']){display:none}:host([size='small']) button{font-size:14px;letter-spacing:0.16px;line-height:20px}:host([size='small'][orientation='horizontal']) button{padding:var(--space-unit) calc(var(--space-unit) * 2);border-width:0 0 var(--border-size-medium) 0}::slotted(z-icon){margin:0}::slotted([slot='label']){margin-left:var(--space-unit)}";

const ZNavigationTab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.emitSelected = createEvent(this, "selected", 7);
    this.selected = false;
    this.disabled = false;
  }
  onFocus() {
    this.hostElement.scrollIntoView({
      behavior: "smooth",
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
    return [
      h("button", { disabled: this.disabled, role: "tab" }, h("slot", { name: "icon" }), h("slot", { name: "label" }))
    ];
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "selected": ["onSelected"]
  }; }
};
ZNavigationTab.style = stylesCss;

export { ZNavigationTab as z_navigation_tab };
