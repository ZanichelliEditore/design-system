'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e3299e0a.js');
const index$1 = require('./index-e8ce94a1.js');

const stylesCss = ":host{position:relative;display:flex;align-items:center;justify-content:center;font-family:var(--font-family-sans);font-weight:var(--font-rg)}button{width:100%;height:100%;padding:0;border:none;background:transparent;cursor:pointer}z-popover{overflow:hidden}.popover-content-container{position:relative;min-width:112px;max-width:280px;background-color:var(--color-surface02);box-shadow:var(--shadow-2);white-space:nowrap}.element-container:hover{color:var(--color-hover-primary);fill:var(--color-hover-primary)}.element-text{overflow:hidden;font-size:14px;text-overflow:ellipsis}.element-container,.disabled-element-container{display:flex;min-height:calc(var(--space-unit) * 4);box-sizing:border-box;align-items:center;padding:calc(var(--space-unit) / 2) var(--space-unit);fill:var(--color-disabled03);gap:var(--space-unit)}.element-container{fill:var(--color-primary01)}.element-icon{display:flex}";

const ZContextualMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.clickContextualMenu = index.createEvent(this, "clickContextualMenu", 7);
    /**
     * [optional] Sets text color of ZContextualMenu's content
     */
    this.color = "color-primary01";
    /**
     * [optional] Sets the position of the popover
     */
    this.popoverPosition = index$1.PopoverPosition.BOTTOM_RIGHT;
  }
  componentWillRender() {
    if (this.elements) {
      this.jsonElements = JSON.parse(this.elements.replace(/&quot;/g, '"'));
    }
  }
  componentDidLoad() {
    this.popoverEl.bindTo = this.triggerButton;
  }
  showIcon() {
    return !this.jsonElements.some((element) => !element.icon);
  }
  togglePopover() {
    if (!this.popoverEl.open) {
      this.popoverEl.open = true;
    }
  }
  render() {
    var _a, _b;
    return (index.h(index.Host, null, index.h("button", { ref: (el) => (this.triggerButton = el), "aria-label": ((_a = this.popoverEl) === null || _a === void 0 ? void 0 : _a.open) ? "chiudi menu contestuale" : "apri menu contestuale", onClick: () => this.togglePopover() }, index.h("z-icon", { name: "contextual-menu", fill: this.color })), index.h("z-popover", { ref: (el) => (this.popoverEl = el), position: this.popoverPosition }, index.h("div", { class: "popover-content-container" }, index.h("z-list", null, index.h("z-list-group", { "divider-type": "element" }, (_b = this.jsonElements) === null || _b === void 0 ? void 0 : _b.map((element, index$1) => (index.h("z-list-element", { clickable: !element.disabled, class: "my-z-list-element", "align-button": "left", "expandable-style": "accordion", color: element.disabled ? `color-disabled03` : this.color, isContextualMenu: true, listElementId: index$1, onClickItem: (event) => this.clickContextualMenu.emit(event.detail) }, index.h("div", { class: element.disabled ? "disabled-element-container" : "element-container" }, this.showIcon() && (index.h("div", { class: "element-icon" }, index.h("z-icon", { name: element.icon, width: 16, height: 16 }))), index.h("div", { class: "element-text" }, index.h("span", null, element.text))))))))))));
  }
};
ZContextualMenu.style = stylesCss;

exports.z_contextual_menu = ZContextualMenu;