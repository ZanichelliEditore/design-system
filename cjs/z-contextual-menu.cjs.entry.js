'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-84b7063a.js');
const index$1 = require('./index-78d71393.js');

const stylesCss = ":host{font-family:var(--font-family-sans);font-weight:var(--font-rg)}:host(:focus-within)>z-popover{box-shadow:var(--shadow-focus-primary)}.popover-content-container{min-width:112px;max-width:280px;white-space:nowrap;padding:calc(var(--space-unit) / 2) 0}.element-container:hover{color:var(--myz-blue-dark);fill:var(--myz-blue-dark)}.element-text{overflow:hidden;text-overflow:ellipsis;font-size:14px}.element-container,.disabled-element-container{display:flex;align-items:center;gap:var(--space-unit);fill:var(--color-disabled03);padding:calc(var(--space-unit) / 2) var(--space-unit);min-height:calc(var(--space-unit) * 4);box-sizing:border-box}.element-container{fill:var(--color-primary01)}.element-icon{display:flex}";

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
    this.popoverPosition = index$1.PopoverPosition["after-down"];
  }
  componentWillRender() {
    if (this.elements) {
      this.jsonElements = JSON.parse(this.elements.replace(/&quot;/g, '"'));
    }
  }
  showIcon() {
    return !this.jsonElements.some((element) => !element.icon);
  }
  render() {
    var _a;
    return (index.h(index.Host, null, index.h("z-popover", { "background-color": "color-background", "box-shadow": "shadow-2", position: this.popoverPosition, padding: "0" }, index.h("z-icon", { "aria-label": "apri-menu-contestuale", slot: "trigger", name: "contextual-menu", fill: this.color, style: { cursor: "pointer" } }), index.h("div", { class: "popover-content-container", slot: "popover" }, index.h("z-list", null, index.h("z-list-group", { "divider-type": "element" }, (_a = this.jsonElements) === null || _a === void 0 ? void 0 : _a.map((element, index$1) => (index.h("z-list-element", { clickable: !element.disabled, class: "my-z-list-element", "align-button": "left", "expandable-style": "accordion", color: element.disabled ? `color-disabled03` : this.color, isContextualMenu: true, listElementId: index$1, onClickItem: (event) => this.clickContextualMenu.emit(event.detail) }, index.h("div", { class: element.disabled
        ? "disabled-element-container"
        : "element-container" }, this.showIcon() && (index.h("div", { class: "element-icon" }, index.h("z-icon", { name: element.icon, width: 16, height: 16 }))), index.h("div", { class: "element-text" }, index.h("span", null, element.text))))))))))));
  }
};
ZContextualMenu.style = stylesCss;

exports.z_contextual_menu = ZContextualMenu;
